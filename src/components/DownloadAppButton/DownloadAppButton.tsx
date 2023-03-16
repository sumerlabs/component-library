import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './download-app-button.module.scss';

const DownloadAppButton = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <button className={styles.downloadAppButton} data-testid="download-app-button"
                                    onClick={()=> window.open("https://sumer.pro/rate", "_blank")}>
                                        <span className={styles.downloadsIcon}>
                  <img className={'apple'} src={'https://sumerlabs.com/prod/assets/web/common/apple.png'} alt={'apple'}/>
            </span>
            <span className={styles.downloadsIcon}>
                  <img className={'android'} src={'https://sumerlabs.com/prod/assets/web/common/android.png'} alt={'android'}/>
            </span>

            <p className="mobile-hide downloads-text">{t('download_app')}</p>
        </button>
    );
};

export default DownloadAppButton;
