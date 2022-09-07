import { useTranslation } from 'react-i18next';
import {
	GetCodeContainer,
	PhoneBox,
	WrapperInput,
} from './GetCode.styles';
import React, { useEffect, useMemo, useState } from 'react';
import { DropDown } from '~/components/DropDown';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Input } from '~/components/Inputs';
import { GetCodeService } from '../../services';
import { LoginSteps } from '../../types';
import { allowOnlyNumber } from '~/common/utils';
import { EVENTS } from '~/common/consts/events';

const GetCode = ({
	handleStepChange,
					 countries,
					 country,
					 logEvent,
					 apiKey,
					 apiUrl,
					 setStepTo
}: {
	handleStepChange: (step: string, sendTo: string, prefixSendTo : string, type: string) => void,
	countries: any, country: any,
	apiKey: string, apiUrl: string
	logEvent: (event: string) => void
	setStepTo: (step: string) => void
}): JSX.Element => {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState<any>({ label: '', image: '' });
	const [error, setError] = useState(false);

	const phoneOptions = useMemo(() => {
		return countries?.map((item: any) => {
			return {
				id: item.id,
				image: item.flagImage,
				label: item.prefixPhone,
			};
		});
	}, [countries]);

	useEffect(() => {
		const selectedItem = phoneOptions?.find((item: any) => item.label === country?.prefixPhone);

		setSelectedOption(selectedItem);
	}, [countries]);

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
									<img  src='https://www.sumerlabs.com/prod/catalogue/logoSumer.png'/>
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
										<p className='text-login'>{t('login.title')}</p>
										<p className='text-phone-create'>{t('login.number_phone')}</p>
									</div>
									<PhoneBox>
										<DropDown
											className="select-indicative"
											fieldName="prefixPhone"
											options={phoneOptions}
											selected={selectedOption}
											setFieldValue={(field: string, value: any,) => {
												setFieldValue(field, value);
												logEvent(EVENTS.SELECT_COUNTRY_PHONE);
											}}
										/>
										<Input
											id="phone"
											name="phone"
											className="phone"
											value={allowOnlyNumber(values.phone)}
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
											type="tel"
											autocomplete="off"
											placeholder={t('formCheckout.phone_placeholder')}
										/>
									</PhoneBox>
								</div>
							</WrapperInput>
							<div className="box-term-check">
								<Field onClick={() => {
									logEvent(EVENTS.SELECT_ACCEPT_TERMS);
								}} type="checkbox" id={'terms'} name={'terms'} />
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
			{ error && <div className='box-error-code'>{t('login.invalidPhoneNumber')}</div>}
		</GetCodeContainer>
	);
};

export default GetCode;
