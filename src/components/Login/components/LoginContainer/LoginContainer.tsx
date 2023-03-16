import React from 'react';
import styles from './LoginContainer.module.scss';

const LoginContainer = ({ children, ref }: { children: React.ReactNode; ref?: any }): JSX.Element => {

    return (
        <div className={styles.loginContainerWrapper} ref={ref}>
            {children}
        </div>
    );
};

export default LoginContainer;
