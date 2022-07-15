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
import ProgressBar from '~/components/ProgressBar/ProgressBar';
import { LoginSteps } from '../../types';
import { allowOnlyNumber } from '~/common/utils';
import Chat from '~/icons/Chat';
import WhatsAppFill from '~/icons/WhatsAppFill';
import { EVENTS } from '~/common/consts/events';
import { useTheme } from 'styled-components';

const GetCode = ({
	handleStepChange,
					 countries,
					 country,
					 logEvent,
					 apiKey,
					 apiUrl
}: {
	handleStepChange: (step: string, sendTo: string, prefixSendTo : string, type: string) => void,
	countries: any, country: any,
	apiKey: string, apiUrl: string
	logEvent: (event: string) => void
}): JSX.Element => {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState<any>({ label: '', image: '' });
	const [error, setError] = useState(false);
	const theme = useTheme() as any;

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
			sendTo: values.phone,
			prefixSendTo: values.prefixPhone,
			channel: values.channel,
			apiKey,
			apiUrl
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
							<p className="title-login">{t('login.account')}</p>
							<ProgressBar width={35} />
							<WrapperInput>
								<div
									className={`select-phone ${
										(touched.prefixPhone || touched.phone) &&
										(errors.phone || errors.prefixPhone)
											? 'error'
											: ''
									}`}>
									<label className="label-name">
										<span className="content-input">{t('login.phone')}</span>
									</label>
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
												href={`https://sumerlabs.com/terms/politica-de-privacidad-de-datos-personales`}
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
								<Chat width={17} height={17} />
								{t('login.sms')}
							</button>
							<button className="button-wsp" disabled={!isValid} onClick={(e: any) => {
								setFieldValue('channel','whatsapp')
								logEvent(EVENTS.SELECT_WA_CONFIRM);
								handleSubmit(e);
							}}>
								<WhatsAppFill fill={isValid ? theme.colors.greenScale.g6: ""} width={17} height={17}/>
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
