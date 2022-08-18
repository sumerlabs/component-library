import styled from 'styled-components';

export const SmsValidationContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 1.5em 0 0 0;

	& .input-code {
		height: 40px;
		width: 40px;
		border: 1px solid ${({ theme }) => theme.colors.grayScale.gr6};
		border-radius: 8px;
		text-align: center;
		background: #FAFAFA;

	}

	& .input-error{
		height: 40px;
		width: 40px;
		border: 1px solid  ${({ theme }) => theme.colors.redScale.r2};
		color:  ${({ theme }) => theme.colors.black};
		border-radius: 5px;
		text-align: center;
	}

	& .input-box label {
		border: 1px solid ${({ theme }) => theme.colors.grayScale.gr6};
		box-sizing: border-box;
		border-radius: 5px;
		bottom: 0px;
		padding: 0;
		&::after {
			border-radius: 5px;
			border: 0px;
		}
	}

	& .input-box input {
		height: 2.875em;
		padding-top: 9px;
		text-align: center;
	}

	& .input-box input:focus + .label-name::after,
	& .input-box input:valid + .label-name::after {
		border: 1px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
		transition: 0s ease-out 0s;
	}

	& .input-box input:focus + .label-name.error::after,
	& .input-box input:valid + .label-name.error::after {
		border-color: ${({ theme }) => theme.colors.redScale.r2};
	}
`;

export const InputContent = styled.div`
	
`;

export const Line = styled.div`
	background-color: ${({ theme }) => theme.colors.grayScale.gr3};
	border-radius: 2px;
	height: 2px;
	margin: 0 0.5em;
	width: 8px;
`;
