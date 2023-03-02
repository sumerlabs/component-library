import React from 'react';
import { useTranslation } from 'react-i18next';
import { Customer } from '../../types';
import Profile from '../../icons/Profile';
import SignOut from '../../icons/SignOut';
import styles from './customer-profile.module.scss';

const CustomerProfile = ({ customer, handleCloseSession } : { customer: Customer | null,
	handleShowProfile: () => void, handleCloseSession: () => void;}): JSX.Element => {
	const { t } = useTranslation();

	const closeSession = () => {
		handleCloseSession();
	}

	return (
		<div className={styles.customerProfileContainer}>
			<div className={styles.boxImgProfile}>
				<Profile width={66} height={66} />
				<div className='box-customer-profile'>
					<p className={styles.nameProfile}>{customer?.firstName + ' ' + customer?.lastName}</p>
					{customer?.prefixPhone && <p className={styles.customerPhone}>{`${customer?.prefixPhone} ${customer?.phone}`}</p>}
				</div>
			</div>
			<div className={styles.boxSignOut} onClick={closeSession}>
				<p>{t('login.logout')}</p>
				<SignOut width={24} height={24} />
			</div>
		</div>
	);
};

export default CustomerProfile;
