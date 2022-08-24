import styled from 'styled-components';

export const ValidateCodeContainer = styled.div`
	padding: 1.1rem;
	.back {
    display: flex;
    align-items: center;
    width: 47%;
    justify-content: space-between;
}

	.img-back{
		width: 18px;
		height: 18px;
		cursor: pointer;
	}
	.title-login {
		font-size:14px;
		line-height:140%;
		font-weight:700;
		text-align: center;
		padding-bottom: 45px;
	}

	.box-error-code {
		color: ${({ theme }) => theme.colors.redScale.r2};
		font-size:14px;
		line-height:140%;
		font-weight: 400;
		text-align: center;
		padding-top: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		img{
			width: 16px;
			height: 16px;
		}
	}

	.send-code-text{
		font-weight: 400;
		font-size: 14px;
		color: #646464;
		text-align: center;
	}

  .box-resend-code {
    color: ${({ theme }) => theme.colors.greenScale.g2};
	  font-size:14px;
	  line-height:140%;
	  font-weight: 400;
    text-align: center;
    padding-top: 14px;
  }
`;

export const WrapperCheckCode = styled.div`
	text-align: left;
    margin-top: 2rem;
	.text-code{
		font-weight: 700;
		font-size: 20px;
		color: ${({ theme }) => theme.colors.black};
	}

	.text-code-send {
    font-weight: 400;
    font-size: 16px;
    color: #646464;
}
.box-send-to{
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}

.text-send-to{
	font-weight: 400;
	font-size: 18px;
}

.text-change{
	color: #4C42F6;
	font-weight: 400;
	font-size: 16px;
	text-decoration-line: underline;
    cursor: pointer;
}
	.btn-box {
		margin-top: 2.5em;
	}

	.btn-box button {
		border-radius: 5px;
		width: 100%;
		height: 50px;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		color: ${({ theme }) => theme.colors.white};
	}

    .enabled button {
        background: ${({ theme }) => theme.colors.primaryColorScale.p2};
    }

    button:disabled {
        background: ${({ theme }) => theme.colors.grayScale.gr5};
    }

	.error {
		color: ${({ theme }) => theme.colors.redScale.r2};
		font-size:14px;
		line-height:140%;
		font-weight: 400;
		padding-bottom: 2.5em;
	}
`;

export const Title = styled.h3`
	align-items: center;
	display: flex;
	font-size:18px;
	line-height:140%;
	font-weight: 400;
	text-align: center;
	justify-content: center;
	margin-bottom: 1em;
`;

export const Text = styled.p`
	align-items: center;
	color: ${({ theme }) => theme.colors.grayScale.gr3};
	display: flex;
	font-size:16px;
	line-height:140%;
	font-weight: 400;
	text-align: center;
	justify-content: center;

	& .highlights {
        cursor: pointer;
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		margin-left: 0.3125em;
	}

	&.small {
		font-size:14px;
		line-height:140%;
		font-weight: 400;
		& .highlights {
			text-decoration: underline;
		}
	}
`;

export const InputBox = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 2.5em 0;

	& .input-code {
		height: 46px;
		width: 2.5em;
		border: 1px solid ${({ theme }) => theme.colors.grayScale.gr6};
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

export const Line = styled.div`
	background-color: ${({ theme }) => theme.colors.grayScale.gr3};
	border-radius: 2px;
	height: 2px;
	margin: 0 0.5em;
	width: 8px;
`;
