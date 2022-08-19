import React from 'react';
import { LoginContainerWrapper } from './LoginContainer.styles';

const LoginContainer = ({ children, ref }: { children: React.ReactNode; ref?: any }): JSX.Element => {

    return (
        <LoginContainerWrapper ref={ref}>
            {children}
        </LoginContainerWrapper>
    );
};

export default LoginContainer;
