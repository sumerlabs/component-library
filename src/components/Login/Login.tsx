import React, { useState } from 'react';
import HelpLink from '~/components/HelpLink/HelpLink';
import useSWR from 'swr';
import {
    LoginContainer,
    GetCode,
    ValidateCode,
    UpdateUserData,
    RegisterMessage, getUserData, Customer, ValidateCodeResponse
} from '~/components';
import { fetcher } from '~/components/Login/fetcher';
import { LoginProps, LoginSteps } from './types';
import SelectLoginMethod from '~/components/SelectLoginMethod/SelectLoginMethod';
import { useLocalStorage } from '~/common';

const Login = ({ apiUrl, apiKey, logEvent,
                   initialStep = LoginSteps.SELECT_LOGIN_METHOD,
                   country, success, redirectUrl, apiKeySp }: LoginProps) => {
  const [step, setStep] = useState<string>(initialStep);
  const [sendTo, setSendTop] = useState<string>();
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [expiresIn, setExpiresIn] = useLocalStorage('expiresIn', 0);
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');
  const [prefixSendTo, setPrefixSendTo] = useState<string>();
  const [channel, setChannel] = useState<string>();

    const { data: countries, error: countriesError } = useSWR(
        [`${apiUrl}/api/ms/remote-config/country-data`,
            apiKeySp],
        fetcher,
    );

    const handleRegisterMessageView = (response: Customer): void => {
        setStep(LoginSteps.REGISTER_MESSAGE);
        if (response.userId) {
            response.prefixPhone = prefixSendTo;
            response.phone = sendTo;
            success && success(response);
        }
    };

    const ValidationSuccess = async (token: string, expiresIn: number, refreshToken: string) => {
        setAccessToken(token);
        setExpiresIn(expiresIn);
        setRefreshToken(refreshToken);
        const user = await getUserData({token, apiUrl})
        if (user?.userId) {
            success && success(user, {accessToken: token, expiresIn, refreshToken});
            if (redirectUrl) {
                window.location.href =
                    `${redirectUrl}?accessToken=${token}&expiresIn=${expiresIn}&refreshToken=${refreshToken}&userId=${user.userId}`;
            }
        } else {
            setStep(LoginSteps.UPDATE_USER_DATA);
        }
    };

  const handleStepChange = (stp: string, sendTo_: string, prefixSendTo_ : string, channel_: string) => {
    setStep(stp);
    setSendTop(sendTo_);
    setPrefixSendTo(prefixSendTo_);
    setChannel(channel_);
  }

  const getCodeStep = () => {
      setStep(LoginSteps.GET_CODE);
  }

  return (
      <LoginContainer>
          {step === LoginSteps.SELECT_LOGIN_METHOD && <SelectLoginMethod getCodeStep={getCodeStep}
                                                                         validationSuccess={ValidationSuccess}
                                                                         apiUrl={apiUrl} apiKey={apiKey} />}
          {step === LoginSteps.GET_CODE && <GetCode handleStepChange={handleStepChange}
                                                    countries={countries}
                                                    country={country} logEvent={logEvent}
                                                    apiUrl={apiUrl} apiKey={apiKeySp} />}
          {step === LoginSteps.VALIDATE_CODE && <ValidateCode ValidationSuccess={ValidationSuccess}
                                                              sendTo={sendTo!}
                                                              prefixSendTo={prefixSendTo!} channel={channel!}
                                                              logEvent={logEvent}
                                                              apiUrl={apiUrl} apiKey={apiKey}/>}
          {step === LoginSteps.UPDATE_USER_DATA && <UpdateUserData
              handleRegisterMessageView={handleRegisterMessageView} apiUrl={apiUrl} logEvent={logEvent} />}
          {step === LoginSteps.REGISTER_MESSAGE && <RegisterMessage />}
          <HelpLink logEvent={logEvent}  />
      </LoginContainer>
  );
};

export default Login;
