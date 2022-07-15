import React, { useState } from 'react';
import HelpLink from '~/components/HelpLink/HelpLink';
import useSWR from 'swr';
import {
    LoginSteps,
    LoginContainer,
    GetCode,
    ValidateCode,
    UpdateUserData,
    RegisterMessage, getUserData
} from '~/components';
import { fetcher } from '~/components/Login/fetcher';

const Login = ({ apiUrl, apiKey, logEvent,
                   initialStep = LoginSteps.GET_CODE,
                   country, success }: any) => {
  const [step, setStep] = useState<string>(initialStep);
  const [sendTo, setSendTop] = useState<string>();
  const [token, setToken] = useState<string>();
  const [expiresIn, setExpiresIn] = useState<number>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const [prefixSendTo, setPrefixSendTo] = useState<string>();
  const [channel, setChannel] = useState<string>();

    const { data: countries, error: countriesError } = useSWR(
        [`${apiUrl}/api/ms/remote-config/country-data`,
        apiKey],
        fetcher,
    );

    const handleRegisterMessageView = (): void => {
        setStep(LoginSteps.REGISTER_MESSAGE);
    };

    const ValidationSuccess = async (token: string, expiresIn: number, refreshToken: string) => {
        setToken(token);
        setExpiresIn(expiresIn);
        setRefreshToken(refreshToken);
        const user = await getUserData({token, apiUrl})
        if (user?.userId) {
            success(user);
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

  return (
      <LoginContainer>
          {step === LoginSteps.GET_CODE && <GetCode handleStepChange={handleStepChange}
                                                    countries={countries}
                                                    country={country} logEvent={logEvent}
                                                    apiUrl={apiUrl} apiKey={apiKey} />}
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
