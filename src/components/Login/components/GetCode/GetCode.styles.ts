import styled from 'styled-components';
import { OptionProps } from './types';

export const GetCodeContainer = styled.div`
  .head {
    display: flex;
    align-items: center;
  }
	padding: 1.1rem;
	.title-login {
		font-size: 18px;
		line-height: 140%;
		font-weight: 700;
		text-align: center;
	}
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

	.box-term-check {
		display: flex;
		justify-content: flex-start;
		width: 87%;
		gap: 0.5rem;
	}

	.box-terms {
		font-size:12px;
   		line-height:130%;
   		font-weight: 400;
	}

	.condition {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
	}

	.button-msn {
		height: 50px;
		border: none;
		display: flex;
		cursor: pointer;
		padding: 0 40px;
		max-width: 100%;
		transition: 0.3s;
		position: relative;
		align-items: center;
		box-sizing: border-box;
		background-color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		font-weight: 600;
		overflow: hidden;
		line-height: 22px;
		color: ${({ theme }) => theme.colors.white};
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 100%;
		border-radius: 5px;
		margin-bottom: 10px;
		justify-content: center;
        gap:1rem;
		margin-top: 20px;
	}
      .button-msn:disabled {
        background-color: ${({ theme }) => theme.colors.grayScale.gr5};
        color: ${({ theme }) => theme.colors.white};
      }

	.button-wsp {
		height: 50px;
		display: flex;
		cursor: pointer;
		max-width: 100%;
		transition: 0.3s;
		position: relative;
		align-items: center;
		box-sizing: border-box;
		background-color: white;
		font-weight: 600;
		overflow: hidden;
		line-height: 22px;
		color: ${({ theme }) => theme.colors.greenScale.g6};
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 100%;
		border: 1px solid ${({ theme }) => theme.colors.greenScale.g6};
		border-radius: 5px;
        gap:1rem;
		justify-content: center;
	}

	.icon-code{
		width: 17px;
		height: 17px;
	}
      .button-wsp:disabled {
        background-color: ${({ theme }) => theme.colors.grayScale.gr5};
        color: ${({ theme }) => theme.colors.white};
		border: 1px solid ${({ theme }) => theme.colors.grayScale.gr5};
      }

      .box-error-code {
        color: ${({ theme }) => theme.colors.redScale.r2};
		font-size:14px;
		line-height:140%;
		font-weight: 400;
        text-align: center;
        padding-top: 14px;
      }
`;

export const WrapperInput = styled.div`
	label {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
	}
	.text-login{
		font-weight: 400;
		font-size: 18px;
		color: ${({ theme }) => theme.colors.black};
		padding-bottom: 15px;
	}

	.text-phone-create {
    font-weight: 400;
    font-size: 16px;
    color: #646464;
}
	.input-box {
		display: flex;
		font-size:16px;
		line-height:140%;
		font-weight: 400;
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
		width: 100%;
	}
	.input-box input {
		border: none;
		font-size:16px;
		line-height:140%;
		font-weight: 400;
		outline: none;
		padding-top: 10px;
		padding-left: 0;
		height: 100%;
		width: 100%;
		padding-bottom: 0.5rem;
	}
	.iconinput {
		align-self: end;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.input-box label {
		position: absolute;
		padding-left: 1px;
		bottom: 1px;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;

		&.error {
			border-color: ${({ theme }) => theme.colors.redScale.r2};
		}
	}

	.prueba {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gr3};
	}
	.input-box label::after {
		content: '';
		position: absolute;
		left: 0;
		height: 100%;
		width: 100%;
		transform: translateX(-100%);
	}

	.input-box label.error::after {
		border-bottom: 1px solid transparent;
	}
	.content-name {
		bottom: 8px;
		color: ${({ theme }) => theme.colors.grayScale.gr3};
		transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: absolute;
	}
	.input-box input:focus + .label-name .content-name,
	.input-box input:valid + .label-name .content-name {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		font-size:12px;
		line-height:130%;
		font-weight: 400;
		transform: translateY(-120%) translateX(-1px);
		transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.input-box input:focus + .label-name .content-name,
	.input-box input:valid + .label-name .content-name {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
	}

	.input-box input:focus + .label-name.error .content-name,
	.input-box input:valid + .label-name.error .content-name {
		color: ${({ theme }) => theme.colors.redScale.r2};
	}

	.input-box input:focus + .label-name::after,
	.input-box input:valid + .label-name::after {
		transform: translateX(0%);
		transition: 0.3s ease-out 0s;
	}
	.select-box {
		color: ${({ theme }) => theme.colors.grayScale.gr3};
		display: flex;
		flex-direction: column;
		font-size:12px;
	line-height:130%;
	font-weight: 400;
		margin-bottom: 1rem;
	}

	.select-country,
	.select-economic,
	.select-dropdown {
		border-right: none;
		border-left: none;
		border-top: none;
		background-color: transparent;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gr3};
		color: ${({ theme }) => theme.colors.black};
		font-size:16px;
		line-height:140%;
		font-weight: 400;
		padding: 0.5rem 0 0.5rem;
		height: 36px;
	}
	.select-country:focus,
	.select-text {
		font-size:12px;
   line-height:130%;
   font-weight: 400;
		margin-bottom: 0.5rem;
	}
	.select-box:focus-within {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		font-size:12px;
   line-height:130%;
   font-weight: 400;
	}

	.select-phone,
	.select-country-container,
	.select-economic-sector,
	.select-general {
		color: ${({ theme }) => theme.colors.grayScale.gr3};
		display: flex;
		flex-direction: column;
		font-size:12px;
   line-height:130%;
   font-weight: 400;
		margin-bottom: 1rem;
        margin-top: 2rem;
	}

	.phone-box,
	.country-box,
	.economic-sector-box,
	.field-box {
		display: flex;
		gap: 1rem;
	}

	.select-indicative,
	.select-country,
	.select-economic,
	.select-dropdown,
	.phone,
	.input-field {
		border-right: none;
		border-left: none;
		border-top: none;
		background-color: transparent;
		color: ${({ theme }) => theme.colors.black};
		font-size:16px;
		line-height:140%;
		font-weight: 400;
		padding: 0.5rem 0 0.5rem;
	}

	.select-indicative,
	.select-dropdown {
		width: 30%;
		@media screen and (min-width: 980px) {
			width: 47%;
		}
	}

	.select-indicative .label {
	}
	.phone,
	.input-field {
		width: 70%;
		@media screen and (min-width: 980px) {
			width: 75%;
		}
	}

	.select-phone:focus-within,
	.select-general:focus-within,
	.select-country-container:focus-within,
	.select-economic-sector:focus-within {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		font-size:12px;
   line-height:130%;
   font-weight: 400;
	}

	.toggle {
		background-color: transparent;
	}

	.select-phone,
	.select-country-container,
	.select-economic-sector,
	.select-general {
		&.error {
			.content-input {
				color: ${({ theme }) => theme.colors.redScale.r2};
			}

			.phone,
			.input-field {
			}
		}

		.error-indicative,
		.error-box {
			.select-indicative,
			.select-economic,
			.select-country,
			.select-dropdown {
				border-bottom: 1px solid ${({ theme }) => theme.colors.redScale.r2};
			}
		}
	}
`;

export const PhoneBox = styled.div`
	display: flex;
	select {
		height: auto;
	}
`;

export const CountryBox = styled.div`
	select {
		height: auto;
	}
`;

export const Box = styled.div`
	select {
		height: auto;
	}
`;

export const Option = styled.option<OptionProps>`
	${({ backgroundImage }): string => `
      select option {
        background-image: url(${backgroundImage});
        background-repeat: no-repeat, repeat;
        background-position: center; 
      }
    
  `}
`;
