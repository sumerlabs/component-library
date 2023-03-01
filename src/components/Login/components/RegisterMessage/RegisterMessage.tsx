import React from 'react';
import CheckCircle from '~/components/Login/icons/CheckCircle';
import * as styles from './registerMessage.module.scss';

const RegisterMessage = (): JSX.Element => {

	return (
		<div className={styles.registerMessage}>
			<div className={styles.boxReadyAccount}>
			<CheckCircle width={80} height={80}/>
			<p className={styles.great}>Genial!</p>
			<p className={styles.readyAccount}>Ya tienes tu cuenta en Sumer</p>
			</div>
			
		</div>
	);
};

export default RegisterMessage;
