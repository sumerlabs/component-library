import React from 'react';
import { LoginContainerWrapper } from './LoginContainer.styles';

const LoginContainer = ({ children }: { children: React.ReactNode; }): JSX.Element => {

    return (
        <LoginContainerWrapper>
            {children}
        </LoginContainerWrapper>
    );
};

export default LoginContainer;
