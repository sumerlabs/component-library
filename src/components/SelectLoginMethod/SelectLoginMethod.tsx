import React, { useState } from 'react';
import { SelectLoginMethodContainer } from '~/components/SelectLoginMethod/SelectLoginMethod.styled';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { facebookLogin, googleLogin, LoginSteps } from '~/components';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';
import { LoginType } from '~/components/Login/types';

const SelectLoginMethod = ({ validationSuccess, apiUrl, apiKey, setStepTo, loginType, handleRegisterModal }:
                               { validationSuccess: (token: string, expiresIn: number, refreshToken: string)
                                       => void, apiUrl: string, apiKey: string,
                                   setStepTo: (step: string) => void, loginType: LoginType,
                                   handleRegisterModal: () => void}): JSX.Element => {

    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const facebook = async (token: string) => {
        try {
            const response = await facebookLogin({apiUrl, apiKey, token});
            validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
        } catch (e) {
            console.log(e);
            handleRegisterModal();
        }
    }

    const google = async (googleResponse: any) => {
        try {
            const response = await googleLogin({apiUrl, apiKey, token: googleResponse.tokenId});
            validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
        } catch (e) {
            console.log(e);
            handleRegisterModal();
        }
    }

    const handleLoginError = (error: any) => {
        console.log(error);
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
                </div>
            </div>
            <div className={'body'}>
            <div className='login-sumer-text'>{t('login.login_sumer')}</div>
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
                    onFailure={(error) => {handleLoginError(error)}}
                    cookiePolicy={'single_host_origin'}
                />
                <FacebookLogin
                    appId="382238867303639"
                    onSuccess={async (response) => {
                        if ( response && response.accessToken ) {
                            await facebook(response.accessToken);
                        }
                    }}
                    onFail={(error) => {handleLoginError(error)}}
                    render={({ onClick, logout }) => (
                        <button className={'facebook-btn'} onClick={onClick}>
                            <img src={'https://www.sumerlabs.com/prod/catalogue/facebokk-btn.png'}/>
                            <label>{t('login.facebook_login')}</label>
                        </button>
                    )}
                />
                <button className={'phone'} onClick={() => {setStepTo(LoginSteps.GET_CODE)}}>
                    <img src={'https://sumerlabs.com/prod/assets/web/login/phone/phone.png'}/>
                    <label>{t('login.phone_login')}</label>
                </button>
                <button className={'email'} onClick={() => {setStepTo(LoginSteps.EMAIL)}}>
                    <img src={'https://sumerlabs.com/prod/assets/web/login/email-2.png'}/>
                    <label>{t('login.email')}</label>
                </button>
            </div>
            { error && <div className='box-error-code'>{t('login.error')}</div>}
            { loginType === LoginType.SELLER && <div className={'register'}>
                {t('login.do_not_have_account')} <span onClick={handleRegisterModal}>{t('login.register_now')}</span></div>}
        </SelectLoginMethodContainer>
    );
};

export default SelectLoginMethod;
