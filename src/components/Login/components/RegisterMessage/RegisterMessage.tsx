import React from 'react';
import {
	RegisterMessageContainer
} from './RegisterMessage.styles';
import CheckCircle from '~/components/Login/icons/CheckCircle';

const RegisterMessage = (): JSX.Element => {

	return (
		<RegisterMessageContainer>
			<div className='box-ready-account'>
			<CheckCircle width={80} height={80}/>
			<p className='great'>Genial!</p>
			<p className='ready-account'>Ya tienes tu cuenta en Sumer</p>
			</div>
			
		</RegisterMessageContainer>
	);
};

export default RegisterMessage;
