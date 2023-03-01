import React from 'react';
import { useTranslation } from 'react-i18next';
import DownloadAppButton from '~/components/DownloadAppButton/DownloadAppButton';
import * as styles from './registerIn-app.module.scss'

const RegisterInApp = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className={styles.registerInApp}>
            <img className={styles.sumerLogo} src={'https://sumerlabs.com/prod/coupon-templates/Isotipo-sumer.png'} alt={'user'}/>
            <div className={styles.container}>
                <div className={styles.exclamation}>{t('register.not_account')}</div>
                <div className={styles.downloadText}>{t('register.download_app')}</div>
            </div>
            <div className={styles.container}>
                <DownloadAppButton />
            </div>
        </div>
    );
};

export default RegisterInApp;
