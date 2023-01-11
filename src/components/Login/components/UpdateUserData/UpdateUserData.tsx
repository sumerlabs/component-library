import React, { useState } from 'react';
import { UpdateUserDataContainer } from './UpdateUserData.styles';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { UpdateUserDataService } from '~/components/Login/services';
import { useTranslation } from '~/providers/copies.provider';
import ProgressBar from '~/components/ProgressBar/ProgressBar';
import { EVENTS } from '~/common/consts/events';
import { useLocalStorage } from '~/common/localStorage';
import { Customer } from '~/components/Login/types';

const UpdateUserData = ({ handleRegisterMessageView, apiUrl, logEvent }: {
	handleRegisterMessageView: (response: Customer) => void;
	apiUrl: string;
	logEvent: (event: string) => void
}): JSX.Element => {
	const [inputFocus, setInputFocus] = useState(false);
	const [width, setWidth] = useState(85);
	const [accessToken] = useLocalStorage('accessToken', null);
    const { t } = useTranslation();

	const handleInputChange = (e: any) => {
		if (e.target.value) {
			setInputFocus(true);
		}
	};

	const defaultValues = {
		firstName: '',
		lastName: ''
	};

	const handleForm = async (values: any) => {
		if (accessToken) {
			const updateUserDataResponse = await UpdateUserDataService({
				token: accessToken,
				firstName: values.firstName,
				lastName: values.lastName,
				apiUrl
			});
			if (updateUserDataResponse.firstName) {
				handleRegisterMessageView(updateUserDataResponse);
			}
		}
	};

	return (
		<UpdateUserDataContainer>
			<Formik
				initialValues={{ ...defaultValues }}
				onSubmit={(values) => {
					handleForm(values);
				}}
				validateOnMount={true}
				validationSchema={Yup.object().shape({
					firstName: Yup.string().required('Required'),
					lastName: Yup.string().required('Required')
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
							<p className="title-login">{t('login.account')}</p>
							<ProgressBar width={width} />
							<div className="box-input-update">
								<label className={inputFocus ? 'labe-linput-update' : 'labe-linput-none'}>
                                {t('login.name')}
								</label>
								<input onChange={(e) => {
									handleInputChange(e)
									setWidth(w => e.target.value.length > 2 ? 95 : 85)
									handleChange(e)
								}} onBlur={(e: React.FocusEvent<any>) => {
										   if (e.target.value.length > 0) {
											   logEvent(EVENTS.SELECT_INPUT_BUYER_NAME);
										   }
										   handleBlur(e);
									   }}
									   value={values.firstName} name={'firstName'} placeholder={t('login.name')} className="input-update" />
								<label className={inputFocus ? 'labe-linput-update' : 'labe-linput-none'}>
                                {t('login.last-name')}
								</label>
								<input placeholder={t('login.last-name')} onChange={(e) => {
											setWidth(w => e.target.value.length > 2 ? 100 : 95)
											handleChange(e)
										}}
									   onBlur={(e: React.FocusEvent<any>) => {
										   if (e.target.value.length > 0) {
											   logEvent(EVENTS.SELECT_BUYER_LAST_NAME);
										   }
										   handleBlur(e);
									   }}
									   value={values.lastName} name={'lastName'} className="input-update" />
							</div>
							<div className="btn-box">
								<button
									disabled={ ((!isValid) || isSubmitting) }
									onClick={(e: any) => {
									logEvent(EVENTS.SELECT_CONFIRM_NAME);
									handleSubmit(e);
								}} className="btn-primary">{t('login.ready')}</button>
							</div>
						</>
					);
				}}
			</Formik>
		</UpdateUserDataContainer>
	);
};

export default UpdateUserData;
