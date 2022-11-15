import React from 'react';
import { DownloadAppButtonContainer } from './DownloadAppButton.styled';
import { useTranslation } from 'react-i18next';

const DownloadAppButton = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <DownloadAppButtonContainer data-testid="download-app-button"
                                    onClick={()=> window.open("https://sumer.pro/rate", "_blank")}>
                                        <span className="downloads-icon">
                  <img className={'apple'} src={'https://sumerlabs.com/prod/assets/web/common/apple.png'} alt={'apple'}/>
            </span>
            <span className="downloads-icon">
                  <img className={'android'} src={'https://sumerlabs.com/prod/assets/web/common/android.png'} alt={'android'}/>
            </span>
            
            <p className="mobile-hide downloads-text">{t('download_app')}</p>
        </DownloadAppButtonContainer>
    );
};

export default DownloadAppButton;
