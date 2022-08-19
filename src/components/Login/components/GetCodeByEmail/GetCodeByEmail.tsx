import { useTranslation } from 'react-i18next';
import {
	GetCodeByEmailContainer, WrapperInputRegisterBYEmail
} from './GetCodeByEmail.styles';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Input } from '~/components/Inputs';
import { GetCodeService } from '../../services';
import { LoginSteps } from '../../types';
import Chat from '~/icons/Chat';
import { EVENTS } from '~/common/consts/events';

const GetCodeByEmail = ({
					handleStepChange,
					 logEvent,
					 apiKey,
					 apiUrl,
					 setStepTo
}: {
	handleStepChange: (step: string, sendTo: string, prefixSendTo : string, type: string) => void,
	apiKey: string, apiUrl: string
	logEvent: (event: string) => void
	setStepTo: (step: string) => void
}): JSX.Element => {
	const { t } = useTranslation();
	const [error, setError] = useState(false);

	const defaultValues = {
		email: '',
		channel: 'email',
	};

	const handleForm = async (values: any) => {
		const requestCode = await GetCodeService({
			apiKey,
			apiUrl,
			payload: {
				send_to: values.email,
				email: values.email,
				channel: values.channel,
			}
		}).catch(() => {
			setError(true);
			const timer = setTimeout(() => {
				setError(false);
				clearTimeout(timer);
			}, 3000);
		});
		if (requestCode.status == LoginSteps.VALIDATE_CODE) {
			handleStepChange(requestCode.status, values.email, '', values.channel);
		}
	};

	return (
		<GetCodeByEmailContainer>
			<Formik
				initialValues={{ ...defaultValues }}
				onSubmit={(values) => {
					handleForm(values);
				}}
				validateOnMount={true}
				validationSchema={Yup.object().shape({
					email: Yup.string().required('Required'),
				})}>
				{(props) => {
					const {
						values,
						touched,
						errors,
						handleChange,
						handleBlur,
						handleSubmit,
						setFieldValue,
						isValid,
						isSubmitting,
					} = props;
					return (
						<GetCodeByEmailContainer>
							<div className={'head'}>
								<div className={'back'} onClick={() => {setStepTo(LoginSteps.SELECT_LOGIN_METHOD)}}>
									<img className='img-back' src='https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/arrowBack.png'/>
									<img  src='https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/logoSumer.png'/>
								</div>
								<p className="title-login-email">{t('login.title')}</p>
							</div>
							<WrapperInputRegisterBYEmail>
								<Input
									id="email"
									name="email"
									className="email"
									value={values.email}
									handleBlur={(e: React.FocusEvent<any>) => {
										if (e.target.value.length > 0) {
											logEvent(EVENTS.SELECT_INPUT_PROFILE_PHONE);
										}
										handleBlur(e);
									}}
									handleChange={handleChange}
									touched={touched}
									errors={errors}
									isRequired={true}
									type="email"
									placeholder={t('formCheckout.phone_placeholder')}
								/>
							</WrapperInputRegisterBYEmail>
							<button
								className={!isValid ? "button-msn-email" : "button-msn-email enable"}
								disabled={!isValid}
								onClick={(e: any) => {
									setFieldValue('channel','email')
									logEvent(EVENTS.SELECT_SMS_CONFIRM);
									handleSubmit(e);
								}}>
								{t('login.continue')}
							</button>
						</GetCodeByEmailContainer>
					);
				}}
			</Formik>
			{ error && <div className='box-error-code'>{t('login.invalidPhoneNumber')}</div>}
		</GetCodeByEmailContainer>
	);
};

export default GetCodeByEmail;
