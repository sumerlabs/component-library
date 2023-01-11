import React, {FC, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import {
    Customer,
    GetCode,
    LoginContainer,
    RegisterMessage,
    UpdateUserData,
    ValidateCode,
    SelectLoginMethod,
    ModalType
} from '~/components';
import { fetcher } from '~/components/Login/fetcher';
import { LoginProps, LoginSteps } from './types';
import {EVENTS, useLocalStorage} from '~/common';
import GetCodeByEmail from '~/components/Login/components/GetCodeByEmail/GetCodeByEmail';
import RegisterInApp from '~/components/Login/components/RegisterInApp/RegisterInApp';
import Modal from '~/components/Modal';
import { useTranslation } from 'react-i18next';
import { CopiesContextProvider } from '~/providers/copies.provider';

const Login = ({ apiUrl, apiKey, logEvent,
                   initialStep = LoginSteps.SELECT_LOGIN_METHOD,
                   country, success, apiKeySp, loginType, registerInApp } : LoginProps ) => {
  const [step, setStep] = useState<string>(initialStep);
  const [sendTo, setSendTop] = useState<string>();
  const [showModal, setShowModal] = useState(false);
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
            logEvent(EVENTS.SUCCESS_LOGIN_METHOD, { channelSteps: 'Login con teléfono' })
            success && success({accessToken: accessToken, expiresIn, refreshToken});
        }
    };

    const validationSuccess = async (token: string, expiresIn: number, refreshToken: string, channel: string) => {
        setAccessToken(token);
        setExpiresIn(expiresIn);
        setRefreshToken(refreshToken);
        logEvent(EVENTS.SUCCESS_LOGIN_METHOD, { channel })
        success && success({accessToken: token, expiresIn, refreshToken});
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

  useEffect(() => {
      setStep(initialStep);
  }, [initialStep]);

  return (
      <CopiesContextProvider>
          <LoginContainer>
              {step === LoginSteps.SELECT_LOGIN_METHOD && <SelectLoginMethod setStepTo={setStepTo}
                                                                             handleRegisterModal={handleRegisterModal}
                                                                             loginType={loginType}
                                                                             validationSuccess={validationSuccess}
                                                                             apiUrl={apiUrl} apiKey={apiKey} />}
              {step === LoginSteps.GET_CODE && <GetCode handleStepChange={handleStepChange}
                                                        countries={countries}
                                                        setStepTo={setStepTo}
                                                        country={country} logEvent={logEvent}
                                                        apiUrl={apiUrl} apiKey={apiKeySp} />}
              {step === LoginSteps.EMAIL && <GetCodeByEmail handleStepChange={handleStepChange}
                                                        setStepTo={setStepTo}  logEvent={logEvent}
                                                        apiUrl={apiUrl} apiKey={apiKeySp} />}
              {step === LoginSteps.VALIDATE_CODE && <ValidateCode validationSuccess={validationSuccess}
                                                                  sendTo={sendTo!}
                                                                  setStepTo={setStepTo}
                                                                  prefixSendTo={prefixSendTo!}
                                                                  channel={channel!}
                                                                  logEvent={logEvent}
                                                                  apiUrl={apiUrl} apiKey={apiKey}/>}
              {step === LoginSteps.UPDATE_USER_DATA && <UpdateUserData
                  handleRegisterMessageView={handleRegisterMessageView} apiUrl={apiUrl} logEvent={logEvent} />}
              {step === LoginSteps.REGISTER_MESSAGE && <RegisterMessage />}
              <Modal styles={{
              content: {
                  type: ModalType.DEFAULT,
                borderRadius: {
                  bottomLeft: "10px",
                  bottomRight: "10px",
                  topLeft: "10px",
                  topRight: "10px",
                },
                height: "474px",
              },
            }} show={showModal} onClose={() => {setShowModal(false)}}
                     title={t('login.register')}>
                  <RegisterInApp />
              </Modal>
          </LoginContainer>
      </CopiesContextProvider>
  );
};

export default Login;
