import React, { useState } from 'react';
import {
	Title,
	WrapperCheckCode,
	Text,
	ValidateCodeContainer,
} from './ValidateCode.styles';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { GetCodeService, ValidateCodeService } from '~/components/Login/services';
import { LoginSteps } from '~/components/Login/types';
import { useTranslation } from 'react-i18next';
import SmsValidation from '~/components/Login/components/SmsValidation/SmsValidation';
import ProgressBar from '~/components/ProgressBar/ProgressBar';
import { useLocalStorage } from '~/common/localStorage';
import { EVENTS } from '~/common/consts/events';

const ValidateCode = ({
	ValidationSuccess,
	sendTo, prefixSendTo, channel, logEvent, apiKey, apiUrl,
}: {
	ValidationSuccess: (token: string, expiresIn: number, refreshToken: string) => void;
	sendTo: string, prefixSendTo: string, channel: string
	logEvent: (event: string) => void,
	apiKey: string, apiUrl: string
}): JSX.Element => {
	const [error, setError] = useState(false);
	const [resend, setResend] = useState(false);
	const defaultValues = {
		one: '',
		two: '',
		three: ''
	};
	const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
	const [expiresIn, setExpiresIn] = useLocalStorage('expiresIn', 0);
	const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');
	const { t } = useTranslation();

	const handleForm = async (values: any) => {
		const code = `${values.one}${values.two}${values.three}`;
		const validateCode = await ValidateCodeService({
			sendTo: sendTo,
			prefixSendTo: prefixSendTo,
			code: code,
			apiKey,
			apiUrl,
		});
		if (validateCode.status === 200) {
			setAccessToken(validateCode.data.accessToken);
			setExpiresIn(validateCode.data.expiresIn);
			setRefreshToken(validateCode.data.refreshToken);
			ValidationSuccess(validateCode.data.accessToken, validateCode.data.expiresIn, validateCode.data.refreshToken);
			logEvent(EVENTS.SELECT_CONFIRM_CODE);
		} else {
			setError(true);
		}
	};

	const handleResendCode = async () => {
		const requestCode = await GetCodeService({
			payload: {
				send_to: sendTo,
				prefix_send_to: prefixSendTo,
				channel: channel,
			},
			apiKey,
			apiUrl,
		});

		if (requestCode.status == LoginSteps.VALIDATE_CODE) {
			setResend(true);
			const timer = setTimeout(() => {
				setResend(false);
				clearTimeout(timer);
			}, 2000);
		}
	}

	return (
		<ValidateCodeContainer>
			<Formik
				initialValues={{ ...defaultValues }}
				onSubmit={(values) => {
					handleForm(values);
				}}
				validateOnMount={true}
				validationSchema={Yup.object().shape({
					one: Yup.string().required('Required').min(2, 'Requerido'),
					two: Yup.string().required('Required').min(2, 'Requerido'),
					three: Yup.string().required('Required').min(2, 'Requerido'),
				})}>
				{(props) => {
					const {
						values,
						isSubmitting,
						handleChange,
						handleBlur,
						handleSubmit,
						isValid,
					} = props;
					return (
						<>
							<div className={'back'}>
									<img className='img-back' src='https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/arrowBack.png'/>
									<img  src='https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/logoSumer.png'/>
								</div>
							<WrapperCheckCode>
								<form noValidate>
									<div className='box-code-verification'>
										<p className='text-code'>{t('login.code_verification')}</p>
										<p className='text-code-send'>{t('login.code_verification_send')}</p>
									</div>
									<div className='box-send-to'>
										<p className='text-send-to'>{`${prefixSendTo} ${sendTo}`}</p>
										<p className='text-change'>Cambiar</p>
									</div>
									<SmsValidation
												   handleChange={handleChange}
												   handleBlur={handleBlur} values={values} logEvent={logEvent} error={error} />
												   { error && <div className='box-error-code'>
													   <img src='https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/error.png'/>
													   <p>{t('login.incorrect')}</p>
													</div>}
									<Text className="small">
										{t('login.codeQuestion')}{' '}
										<span role="button" className="highlights" onClick={() => {
											logEvent(EVENTS.SELECT_RESEND_CODE);
											handleResendCode();
										}}>
										{t('login.send-again')}
										</span>
									</Text>
									{ resend && <div className='box-resend-code'>{t('login.resend')}</div>}
									<div className="btn-box enabled">
										<button  type={'submit'} className="btn-primary"
												 disabled={!isValid}
												 onClick={(e: any) => {
											handleSubmit(e);
										}}>{t('login.next')}</button>
									</div>
								</form>
								
							</WrapperCheckCode>
						</>
					);
				}}
			</Formik>
		</ValidateCodeContainer>
	);
};

export default ValidateCode;
