import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { GetCodeService, ValidateCodeService } from '~/components/Login/services';
import { LoginSteps, SelectMethod } from '~/components/Login/types';
import { useTranslation } from '~/providers/copies.provider';
import SmsValidation from '~/components/Login/components/SmsValidation/SmsValidation';
import { useLocalStorage } from '~/common/localStorage';
import { EVENTS } from '~/common/consts/events';
import * as styles from './validate-code.module.scss';

const ValidateCode = ({
	validationSuccess,
	sendTo, prefixSendTo, channel, logEvent, apiKey, apiUrl, setStepTo
}: {
	validationSuccess: (token: string, expiresIn: number, refreshToken: string, channel: string) => void;
	sendTo: string, prefixSendTo: string, channel: string
	logEvent: (event: string) => void,
	apiKey: string, apiUrl: string,
	setStepTo: (step: string) => void,
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
	const initialTimer = 45
	const [seconds, setSeconds] = useState(initialTimer);
	const [sendCode, setSendCode] = useState(false);
	const [timer, setTimer] = useState(true);
	const [checkCode, setCheckCode] = useState(false);
	const [loadingCode, setLoadingCode] = useState(false);
	const { t } = useTranslation();

	const handleForm = async (values: any) => {
		setLoadingCode(true);
		const code = `${values.one}${values.two}${values.three}`;
		const validateCode = await ValidateCodeService({
			sendTo: sendTo,
			prefixSendTo: prefixSendTo,
			code: code,
			apiKey,
			apiUrl,
			channel
		});
		setLoadingCode(false);
		if (validateCode.status === 200) {
			setAccessToken(validateCode.data.accessToken);
			setExpiresIn(validateCode.data.expiresIn);
			setRefreshToken(validateCode.data.refreshToken);
			validationSuccess(validateCode.data.accessToken, validateCode.data.expiresIn, validateCode.data.refreshToken, channel);
			logEvent(EVENTS.SELECT_CONFIRM_CODE);
			setCheckCode(true)
			
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

	const useTimer = () => {
		useEffect(() => {
		  const interval = setInterval(() => {
			setSeconds(seconds - 1);
			
			if(seconds == 0){
				setSendCode(true)
				setTimer(false)
			}
			
		  }, 1000);
		  return () => clearInterval(interval);
		});
		return seconds;
	  };

	  const handleSendCode = () =>{
		setTimer(true);
		setSeconds(initialTimer);
		setSendCode(false)
	  } 

	  useTimer()

	  const handleGoBack = ():void => {
		if (channel === SelectMethod.EMAIL_METHOD) {
			setStepTo(LoginSteps.EMAIL);
		} else {
			setStepTo(LoginSteps.GET_CODE);
		}
	}

	return (
		<div className={styles.validateCodeContainer}>
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
							<div className={styles.back} onClick={handleGoBack}>
							<img className={styles.imgBack} src='https://www.sumerlabs.com/prod/catalogue/arrowBack.png'/>
							<img  src='https://www.sumerlabs.com/prod/catalogue/logoSumer.png'/>
						</div>
							<div className={styles.wrapperCheckCode}>
								<form noValidate>
									<div className='box-code-verification'>
										<p className={styles.textCode}>{t('login.code_verification')}</p>
										<br/>
										<p className={styles.textCodeSend}>{t('login.code_verification_send')}</p>
									</div>
									<br/>
									<div className={styles.boxSendTo}>
										<p className={styles.textSendTo}>{`${prefixSendTo} ${sendTo}`}</p>
										<p className={styles.textChange} onClick={handleGoBack}>{t('login.change_phone')}</p>
									</div>
									<SmsValidation
												   handleChange={handleChange}
												   handleBlur={handleBlur} values={values} logEvent={logEvent} error={error} />
												 {error ? (
													<div className={styles.boxErrorCode}>
													<img src="https://www.sumerlabs.com/prod/catalogue/error.png" />
													<p>{t("login.incorrect")}</p>
													</div>
												) : checkCode ? (
													<div className={styles.boxCheckCode}>
													<img
														className={styles.checkCode}
														src="https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/check.png"
													/>
													</div>
												) : loadingCode ? (
													<div className={styles.boxLoading}>
													<img
														className={styles.checkCode}
														src="https://www.sumerlabs.com/prod/catalogue/loading.png"
													/>
													</div>
												) : (
													""
												)}
													{timer &&(
														<p className={styles.sendCodeText}>Solicita otro código dentro de: {seconds} segundos</p>
													)}
													{sendCode && (
														<p className={`${styles.text} ${styles.small}`}>
														{t('login.codeQuestion')}{' '}
														<span role="button" className={styles.highlights} onClick={() => {
															logEvent(EVENTS.SELECT_RESEND_CODE);
															handleResendCode();
															handleSendCode()
														}}>	
														{t('login.send-again')}
														</span>
													</p>
													)}
									
									{ resend && <div className={styles.boxResendCode}>{t('login.resend')}</div>}
									<div className={`${styles.btnBox} ${styles.enabled}`}>
										<button  type={'submit'} className="btn-primary"
												 disabled={!isValid}
												 onClick={(e: any) => {
											handleSubmit(e);
										}}>{t('login.next')}</button>
									</div>
								</form>
								
							</div>
						</>
					);
				}}
			</Formik>
		</div>
	);
};

export default ValidateCode;
