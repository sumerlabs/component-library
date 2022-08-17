import React from 'react';
import { RegisterInAppContainer } from './RegisterInApp.styled';
import { useTranslation } from 'react-i18next';
import DownloadAppButton from '~/components/DownloadAppButton/DownloadAppButton';

const RegisterInApp = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <RegisterInAppContainer>
            <img src={'https://sumerlabs.com/prod/assets/web/login/user-q.png'} alt={'user'}/>
            <div className="container">
                <div className={'exclamation'}>Oh oh!</div>
                <div>{t('register.sumer_account')}</div>
            </div>
            <div className="container">
                <div>{t('register.download_app')}</div>
                <DownloadAppButton />
            </div>
        </RegisterInAppContainer>
    );
};

export default RegisterInApp;
