import React from 'react';
import { SelectLoginMethodContainer } from '~/components/SelectLoginMethod/SelectLoginMethod.styled';
import { LightSupport } from '~/icons';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { facebookLogin } from '~/components';

const SelectLoginMethod = ({ validationSuccess, apiUrl, apiKey }:
                               { validationSuccess: (token: string, expiresIn: number, refreshToken: string) => void, apiUrl: string, apiKey: string }): JSX.Element => {

    const facebook = async (token: string) => {
        const response = await facebookLogin({apiUrl, apiKey, token});
        validationSuccess(response.accessToken, response.expiresIn, response.refreshToken);
    }

    return (
        <SelectLoginMethodContainer>
            <div className={'header'}>
                <div className={'welcome'}>
                    <div className={'title'}>
                        <span>Sumer</span>
                        <div className={'message'}>Bienvenido/a</div>
                    </div>
                    <LightSupport />
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
                    onFail={(error) => {
                    }}
                    render={({ onClick, logout }) => (
                        <button className={'facebook'} onClick={onClick}>Continuar con Facebook</button>
                    )}
                />
                <button className={'facebook'}>Continuar con Google</button>
                <button className={'Teléfono'}>Continuar con Teléfono</button>
            </div>
        </SelectLoginMethodContainer>
    );
};

export default SelectLoginMethod;
