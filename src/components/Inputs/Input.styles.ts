import styled from "styled-components";
import { OptionProps } from "./types";

export const WrapperInput = styled.div`
  .input-box {
    display: flex;
    font-size:16px;
   line-height:140%;
   font-weight: 400;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
    width: 100%;

    input {
      border: none;
      font-size:16px;
   line-height:140%;
   font-weight: 400;
      outline: none;
      padding-top: 20px;
      padding-left: 0;
      padding-bottom: 5px;
      height: 100%;
      width: 100%;
    }
  }

  ${({ theme, className }): string => `
      ${
        className === "outline"
          ? `
        .input-box{
          margin-bottom: 0;
          margin-top: 0;

          label{
            display: none;
          }
          input{
            padding: 10px;
            border: 1px solid ${theme.colors.grayScale.gr5};
            border-radius: 5px;
          }
        }
      `
          : `
        label {
          position: absolute;
          padding-left: 1px;
          bottom: 1px;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid ${theme.colors.grayScale.gr3};
    
          &.error {
            border-color: ${theme.colors.redScale.r2};
          }
    
          &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
            border-bottom: 1px solid ${theme.colors.primaryColorScale.p2};
            transform: translateX(-100%);
          }
    
          &.error::after {
            border-bottom: 1px solid transparent;
          }
        }

        & input:focus + .label-name .content-name,
        & input:valid + .label-name .content-name {
          color: ${theme.colors.primaryColorScale.p2};
          font-size:12px;
           line-height:130%;
           font-weight: 400;
          transform: translateY(-120%) translateX(-1px);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        & input:focus + .label-name .content-name,
        & input:valid + .label-name .content-name {
          color: ${theme.colors.primaryColorScale.p2};
        }

        & input:focus + .label-name.error .content-name,
        & input:valid + .label-name.error .content-name {
          color: ${theme.colors.redScale.r2};
        }

        & input:focus + .label-name::after,
        & input:valid + .label-name::after {
          transform: translateX(0%);
          transition: 0.3s ease-out 0s;
        }
      `
      }
    `}

  .iconinput {
    align-self: end;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .content-name {
    bottom: 8px;
    color: ${({ theme }) => theme.colors.grayScale.gr3};
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
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
  .select-terms,
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
    height: 37px;
  }
  .select-country:focus,
  .select-economic:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
  }
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
    position: relative;
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gr3};
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
      width: 25%;
    }
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
        border-bottom: 1px solid ${({ theme }) => theme.colors.redScale.r2};
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
