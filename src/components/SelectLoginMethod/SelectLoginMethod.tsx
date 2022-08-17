import React, { useRef, useState } from 'react';
import { SelectLoginMethodContainer } from '~/components/SelectLoginMethod/SelectLoginMethod.styled';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { facebookLogin, googleLogin, LoginSteps } from '~/components';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';
import Modal from '~/components/Modal';
import RegisterInApp from '~/components/Login/components/RegisterInApp/RegisterInApp';

const SelectLoginMethod = ({ validationSuccess, apiUrl, apiKey, setStepTo }:
                               { validationSuccess: (token: string, expiresIn: number, refreshToken: string)
                                       => void, apiUrl: string, apiKey: string, setStepTo: (step: string) => void }): JSX.Element => {

    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const ref = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const facebook = async (token: string) => {
        const response = await facebookLogin({apiUrl, apiKey, token});
        validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
    }

    const google = async (googleResponse: any) => {
        const response = await googleLogin({apiUrl, apiKey, token: googleResponse.tokenId});
        validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
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
        <SelectLoginMethodContainer ref={ref}>
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
                    onFail={(error) => {handleLoginError(error)}}
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
                    onFailure={(error) => {handleLoginError(error)}}
                    cookiePolicy={'single_host_origin'}
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
            <Modal show={showModal} onClose={() => {setShowModal(false)}}
                   title={t('login.register')} element={ref.current as unknown as Element}>
                <RegisterInApp />
            </Modal>
            <div className={'register'}>¿No tienes cuenta? <span onClick={() => {setShowModal(true)}}>Regístrate ahora</span></div>
        </SelectLoginMethodContainer>
    );
};

export default SelectLoginMethod;
