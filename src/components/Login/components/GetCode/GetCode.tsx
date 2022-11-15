import { useTranslation } from 'react-i18next';
import {
	GetCodeContainer,
	WrapperInput,
} from './GetCode.styles';
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { Formik  } from 'formik';
import { GetCodeService } from '../../services';
import { LoginSteps, SelectMethod } from '../../types';
import { allowOnlyNumber } from '~/common/utils';
import { EVENTS } from '~/common/consts/events';
import { UiPhone, UiPhoneOption } from '~/ui/ui-phone';
import UiCheckbox from '../../../../ui/ui-checkbox/ui-checkbox';

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
		<GetCodeContainer>
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
						<GetCodeContainer>
							<div className={'head'}>
								<div className={'back'} onClick={() => {setStepTo(LoginSteps.SELECT_LOGIN_METHOD)}}>
									<img className='img-back' src='https://www.sumerlabs.com/prod/catalogue/arrowBack.png'/>
									<img className='img-sumer'  src='https://www.sumerlabs.com/prod/coupon-templates/sumerImg.png'/>
								</div>
							</div>
							<WrapperInput>
								<div
									className={`select-phone ${
										(touched.prefixPhone || touched.phone) &&
										(errors.phone || errors.prefixPhone)
											? 'error'
											: ''
									}`}>
									<div className='box-phone-create'>
										<p className='text-login'>{t('login.title')}</p><br/>
										<p className='text-phone-create'>{t('login.number_phone')}</p>
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
									{ error && <div className='box-error-code'>{t('login.invalidPhoneNumber')}</div>}
								</div>
							</WrapperInput>
							<div className="box-term-check">
							<UiCheckbox
								active={false}
								onChange={(v) => {
									setFieldValue("terms", v);
								}}
							/>
								<div className="box-terms">
									<label className="terms">
                 							{t('login.agree')}{' '}
										<label className="condition">
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
								className="button-msn"
								disabled={!isValid}
								onClick={(e: any) => {
									setFieldValue('channel','sms')
									logEvent(EVENTS.SELECT_SMS_CONFIRM);
									handleSubmit(e);
								}}>
								<img className='icon-code' src='https://www.sumerlabs.com/prod/catalogue/sms.png'/>
								{t('login.sms')}
							</button>
							<button className="button-wsp" disabled={!isValid} onClick={(e: any) => {
								setFieldValue('channel','whatsapp')
								logEvent(EVENTS.SELECT_WA_CONFIRM);
								handleSubmit(e);
							}}>
								<img
								className="icon-code"
								src={
									!isValid
									? "https://www.sumerlabs.com/prod/catalogue/wpsgray.png"
									: "https://www.sumerlabs.com/prod/assets/web/login/whatssapp.png"
								}
								/>
								{t('login.whatsapp')}
							</button>
						</GetCodeContainer>
					);
				}}
			</Formik>
		</GetCodeContainer>
	);
};

export default GetCode;
