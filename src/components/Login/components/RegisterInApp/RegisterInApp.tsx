import React from 'react';
import { RegisterInAppContainer } from './RegisterInApp.styled';
import { useTranslation } from 'react-i18next';
import DownloadAppButton from '~/components/DownloadAppButton/DownloadAppButton';

const RegisterInApp = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <RegisterInAppContainer>
            <img className='sumer-logo' src={'https://sumerlabs.com/prod/coupon-templates/Isotipo-sumer.png'} alt={'user'}/>
            <div className="container">
                <div className={'exclamation'}>{t('register.not_account')}</div>
                <div className='download-text'>{t('register.download_app')}</div>
            </div>
            <div className="container">
                <DownloadAppButton />
            </div>
        </RegisterInAppContainer>
    );
};

export default RegisterInApp;
