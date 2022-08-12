import React, { useState } from 'react';
import { SelectLoginMethodContainer } from '~/components/SelectLoginMethod/SelectLoginMethod.styled';
import { LightSupport } from '~/icons';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { facebookLogin, googleLogin } from '~/components';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';

const SelectLoginMethod = ({ validationSuccess, apiUrl, apiKey, getCodeStep }:
                               { validationSuccess: (token: string, expiresIn: number, refreshToken: string)
                                       => void, apiUrl: string, apiKey: string, getCodeStep: () => void }): JSX.Element => {

    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const facebook = async (token: string) => {
        const response = await facebookLogin({apiUrl, apiKey, token});
        validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
    }

    const google = async (googleResponse: any) => {
        const response = await googleLogin({apiUrl, apiKey, token: googleResponse.tokenId});
        validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
    }

    const handleError = () => {
        setError(true);
        const timer = setTimeout(() => {
            setError(false);
            clearTimeout(timer);
        }, 3000);
    }

    return (
        <SelectLoginMethodContainer>
            <div className={'header'}>
                <div className={'welcome'}>
                    <div className={'title'}>
                        <img src={'https://sumer-assets.s3.us-west-2.amazonaws.com/web/login/sumer.png'}/>
                        <div className={'message'}>Bienvenido/a</div>
                    </div>
                    <img src={'https://sumer-assets.s3.us-west-2.amazonaws.com/web/login/rocket.png'} alt={'rocket'}/>
                </div>
            </div>
            <hr />
            <div className={'body'}>
                <FacebookLogin
                    appId="382238867303639"
                    onSuccess={async (response) => {
                        if ( response && response.accessToken ) {
                            await facebook(response.accessToken);
                        }
                    }}
                    onFail={() => {handleError()}}
                    render={({ onClick, logout }) => (
                        <button className={'facebook'} onClick={onClick}>
                            <img src={'https://sumer-assets.s3.us-west-2.amazonaws.com/web/login/fb.png'}/>
                            <label>{t('login.facebook_login')}</label>
                        </button>
                    )}
                />
                <GoogleLogin
                    clientId="763088249199-p7ce5bb5hrcmarml939f5pirhrroomc6.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className={'facebook'} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <img src={'https://sumer-assets.s3.us-west-2.amazonaws.com/web/login/google.png'}/>
                            <label>{t('login.google_login')}</label>
                        </button>
                    )}
                    buttonText="Login"
                    onSuccess={google}
                    onFailure={() => {handleError()}}
                    cookiePolicy={'single_host_origin'}
                />
                <button className={'Teléfono'} onClick={getCodeStep}>
                    <img src={'https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/assets/web/login/phone/phone.png'}/>
                    <label>{t('login.phone_login')}</label>
                </button>
            </div>
            { error && <div className='box-error-code'>{t('login.error')}</div>}
        </SelectLoginMethodContainer>
    );
};

export default SelectLoginMethod;
