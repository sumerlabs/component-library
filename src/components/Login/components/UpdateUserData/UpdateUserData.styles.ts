import styled from 'styled-components';

export const UpdateUserDataContainer = styled.div`
	padding: 1.1rem;

	.title-login {
		font-size:16px;
		line-height:140%;
		font-weight: 700;
		text-align: center;
		padding-bottom: 45px;
	}

	.box-input-update {
		padding: 2rem 0rem;
	}

	.labe-linput-update {
		font-size:12px;
		line-height:130%;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		display: inline-block;
		padding-bottom: 10px;
	}

	.labe-linput-none {
		display: none;
	}

	.input-update {
		border: none;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gr12};
		margin-bottom: 35px;
		color: ${({ theme }) => theme.colors.grayScale.gr12};
		text-align: left;
		width: 100%;
		&:focus {
			border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
			color: ${({ theme }) => theme.colors.black};
		}
	}

	.btn-box {
		margin-top: 2.5em;
	}

	.btn-box button {
        background-color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		border-radius: 5px;
		width: 100%;
		height: 50px;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		color: ${({ theme }) => theme.colors.white};
	}
      button:disabled {
        background: ${({ theme }) => theme.colors.grayScale.gr5};
      }
`;
