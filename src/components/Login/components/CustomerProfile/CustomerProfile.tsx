import React from 'react';
import { CustomerProfileContainer } from './CustomerProfile.styles';
import { useTranslation } from 'react-i18next';
import { Customer } from '../../types';
import Profile from '../../icons/Profile';
import SignOut from '../../icons/SignOut';

const CustomerProfile = ({ customer, handleShowProfile, handleCloseSession } : { customer: Customer | null,
	handleShowProfile: () => void, handleCloseSession: () => void;}): JSX.Element => {
	const { t } = useTranslation();

	const closeSession = () => {
		handleCloseSession();
		handleShowProfile();
	}

	return (
		<CustomerProfileContainer>
			<div className='box-img-profile'>
				<Profile width={66} height={66} />
				<div className='box-customer-profile'>
					<p className='name-profile'>{customer?.firstName + ' ' + customer?.lastName}</p>
					<p className='customer-phone'>{`${customer?.prefixPhone} ${customer?.phone}`}</p>
				</div>
			</div>
			<div className='box-sign-out' onClick={closeSession}>
				<p>{t('login.logout')}</p>
				<SignOut width={24} height={24} />
			</div>
		</CustomerProfileContainer>
	);
};

export default CustomerProfile;
