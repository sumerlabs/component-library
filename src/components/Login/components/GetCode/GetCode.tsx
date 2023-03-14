import { useTranslation } from '~/providers/copies.provider';
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { Formik  } from 'formik';
import { GetCodeService } from '../../services';
import { LoginSteps, SelectMethod } from '../../types';
import { allowOnlyNumber } from '~/common/utils';
import { EVENTS } from '~/common/consts/events';
import { UiPhone, UiPhoneOption } from '~/ui/ui-phone';
import UiCheckbox from '../../../../ui/ui-checkbox/ui-checkbox';
import styles from './get-code.module.scss';

const GetCode = ({
	handleStepChange,
					 countries,
					 country,
					 logEvent,
					 apiKey,
					 apiUrl,
					 setStepTo,
}: {
	handleStepChange: (step: string, sendTo: string, prefixSendTo : string, type: string) => void,
	countries: any, country: any,
	apiKey: string, apiUrl: string, 
	logEvent: (event: string) => void
	setStepTo: (step: string) => void
}): JSX.Element => {
	const { t } = useTranslation();
	const [error, setError] = useState(false);
	const prefixCodeOptions: UiPhoneOption[] = useMemo(() => 
    countries.map((c:any )=> ({ label: c.prefixPhone, value: c.prefixPhone, flagUrl: c.flagImage })),
    [countries]
  );

	const defaultValues = {
		phone: '',
		prefixPhone: '',
		terms: false,
		channel: '',
	};

	const handleForm = async (values: any) => {
		const requestCode = await GetCodeService({
			apiKey,
			apiUrl,
			payload: {
				send_to: values.phone,
				prefix_send_to: values.prefixPhone,
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
			handleStepChange(requestCode.status, values.phone, values.prefixPhone, values.channel);
		}
	};

	return (
		<div className={styles.getCodeContainer}>
			<Formik
				initialValues={{ ...defaultValues }}
				onSubmit={(values) => {
					handleForm(values);
				}}
				validateOnMount={true}
				validationSchema={Yup.object().shape({
					prefixPhone: Yup.string().required('Required'),
					phone: Yup.string().required('Required'),
					terms: Yup.boolean().oneOf(
						[true],
						'The terms and conditions must be accepted.',
					),
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
						<div className={styles.getCodeContainer}>
							<div className={styles.head}>
								<div className={styles.back} onClick={() => {setStepTo(LoginSteps.SELECT_LOGIN_METHOD)}}>
									<img className={styles.imgBack} src='/prod/catalogue/arrowBack.png'/>
									<img className={styles.imgSumer}  src='/prod/coupon-templates/sumerImg.png'/>
								</div>
							</div>
							<div className={styles.wrapperInput}>
								<div
									className={`${styles.selectPhone}  ${
										(touched.prefixPhone || touched.phone) &&
										(errors.phone || errors.prefixPhone)
											? styles.error
											: ''
									}`}>
									<div className='box-phone-create'>
										<p className={styles.textLogin} >{t('login.title')}</p><br/>
										<p className={styles.textPhoneCreate} >{t('login.number_phone')}</p>
									</div>
									<UiPhone
										options={prefixCodeOptions}
										placeholder="Número de celular"
										label="Indicativo"
										prefixValue={values.prefixPhone}
										phoneValue={allowOnlyNumber(values.phone)}
										onChange={(v) => {
											if (v.phone)setFieldValue('phone', v.phone);
											if (v.prefixPhone)setFieldValue('prefixPhone', v.prefixPhone);
										  }}
										  onBlur={() => {
											logEvent(EVENTS.SELECT_COUNTRY_PHONE);
											logEvent(EVENTS.SELECT_INPUT_PROFILE_PHONE);
										  }}
										  hasError={(touched.phone || touched.prefixPhone) && (!!errors.phone || !!errors.prefixPhone)}
									/>
									{ error && <div className={styles.boxErrorCode} >{t('login.invalidPhoneNumber')}</div>}
								</div>
							</div>
							<div className={styles.boxTermCheck}>
							<UiCheckbox
								active={false}
								onChange={(v) => {
									setFieldValue("terms", v);
								}}
							/>
								<div className={styles.boxTerms}>
									<label className="terms">
                 							{t('login.agree')}{' '}
										<label className={styles.condition}>
											<a
												href={`https://www.sumerlabs.com/terms/politica-de-privacidad-de-datos-personales`}
												target="_blank"
												rel="noreferrer"
											>{t('login.terms')}</a>
										</label>{' '}
										de uso
									</label>
								</div>
							</div>
							<button
								className={styles.buttonMsn}
								disabled={!isValid}
								onClick={(e: any) => {
									setFieldValue('channel','sms')
									logEvent(EVENTS.SELECT_SMS_CONFIRM);
									handleSubmit(e);
								}}>
								<img className={styles.iconCode}  src='https://www.sumerlabs.com/prod/catalogue/sms.png'/>
								{t('login.sms')}
							</button>
							<button className={styles.buttonWsp}  disabled={!isValid} onClick={(e: any) => {
								setFieldValue('channel','whatsapp')
								logEvent(EVENTS.SELECT_WA_CONFIRM);
								handleSubmit(e);
							}}>
								<img
								className={styles.iconCode}
								src={
									!isValid
									? "/prod/catalogue/wpsgray.png"
									: "/prod/assets/web/login/whatssapp.png"
								}
								/>
								{t('login.whatsapp')}
							</button>
						</div>
					);
				}}
			</Formik>
		</div>
	);
};

export default GetCode;
