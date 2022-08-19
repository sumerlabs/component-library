import React, { useRef, useState } from 'react';
import useSWR from 'swr';
import {
    Customer,
    GetCode,
    getUserData,
    LoginContainer,
    LoginType,
    RegisterMessage,
    UpdateUserData,
    ValidateCode,
} from '~/components';
import { fetcher } from '~/components/Login/fetcher';
import { LoginProps, LoginSteps } from './types';
import SelectLoginMethod from '~/components/SelectLoginMethod/SelectLoginMethod';
import { useLocalStorage } from '~/common';
import GetCodeByEmail from '~/components/Login/components/GetCodeByEmail/GetCodeByEmail';
import RegisterInApp from '~/components/Login/components/RegisterInApp/RegisterInApp';
import Modal from '~/components/Modal';
import { useTranslation } from 'react-i18next';

const Login = ({ apiUrl, apiKey, logEvent,
                   initialStep = LoginSteps.SELECT_LOGIN_METHOD,
                   country, success, redirectUrl, apiKeySp, loginType }: LoginProps) => {
  const [step, setStep] = useState<string>(initialStep);
  const [sendTo, setSendTop] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [expiresIn, setExpiresIn] = useLocalStorage('expiresIn', 0);
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');
  const [prefixSendTo, setPrefixSendTo] = useState<string>();
  const [channel, setChannel] = useState<string>();
  const { t } = useTranslation();

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
            if (loginType !== LoginType.SELLER) {
                setStep(LoginSteps.UPDATE_USER_DATA);
            } else {
                setShowModal(true);
            }
        }
    };

  const handleStepChange = (stp: string, sendTo_: string, prefixSendTo_ : string, channel_: string) => {
    setStep(stp);
    setSendTop(sendTo_);
    setPrefixSendTo(prefixSendTo_);
    setChannel(channel_);
  }

  const setStepTo = (stp: string) => {
        setStep(stp);
  }

  const handleRegisterModal = () => {
     setShowModal(m => !m);
  }

  return (
      <LoginContainer ref={ref}>
          {step === LoginSteps.SELECT_LOGIN_METHOD && <SelectLoginMethod setStepTo={setStepTo}
                                                                         handleRegisterModal={handleRegisterModal}
                                                                         loginType={loginType}
                                                                         validationSuccess={ValidationSuccess}
                                                                         apiUrl={apiUrl} apiKey={apiKey} />}
          {step === LoginSteps.GET_CODE && <GetCode handleStepChange={handleStepChange}
                                                    countries={countries}
                                                    setStepTo={setStepTo}
                                                    country={country} logEvent={logEvent}
                                                    apiUrl={apiUrl} apiKey={apiKeySp} />}
          {step === LoginSteps.EMAIL && <GetCodeByEmail handleStepChange={handleStepChange}
                                                    setStepTo={setStepTo}  logEvent={logEvent}
                                                    apiUrl={apiUrl} apiKey={apiKeySp} />}
          {step === LoginSteps.VALIDATE_CODE && <ValidateCode ValidationSuccess={ValidationSuccess}
                                                              sendTo={sendTo!}
                                                              prefixSendTo={prefixSendTo!} channel={channel!}
                                                              logEvent={logEvent}
                                                              apiUrl={apiUrl} apiKey={apiKey}/>}
          {step === LoginSteps.UPDATE_USER_DATA && <UpdateUserData
              handleRegisterMessageView={handleRegisterMessageView} apiUrl={apiUrl} logEvent={logEvent} />}
          {step === LoginSteps.REGISTER_MESSAGE && <RegisterMessage />}
          <Modal show={showModal} onClose={() => {setShowModal(false)}}
                 title={t('login.register')} element={ref.current as unknown as Element}>
              <RegisterInApp />
          </Modal>
      </LoginContainer>
  );
};

export default Login;
