import React from 'react';
import { ComponentStory } from '@storybook/react';
import GetCode from './GetCode';

export default {
  title: 'GetCode',
  component: GetCode
};

const Template: ComponentStory<typeof GetCode> = (args) => <GetCode {...args} />;

export const GetCodeDefault = Template.bind({});
GetCodeDefault.args = {
    handleStepChange: () => {},
    apiKey: '12312312321',
    apiUrl: 'https://api.example.com',
    logEvent: () => {},
    country: {
        "id": "CO",
        "flagImage": "https://flags-countries.s3.amazonaws.com/col.jpg",
        "prefixPhone": "+57",
        "name": "Colombia",
        "currency": "COP",
        "format": "\\$#,##0",
        "locale": "es_CO",
        "currencyInfo": {
            "symbol": "$",
            "pattern": "#,###",
            "groupingSeparator": ",",
            "decimalSeparator": ".",
            "dollarTrm": 3800
        }
    },
    countries: [
        {
            "id": "CO",
            "flagImage": "https://flags-countries.s3.amazonaws.com/col.jpg",
            "prefixPhone": "+57",
            "name": "Colombia",
            "currency": "COP",
            "format": "\\$#,##0",
            "locale": "es_CO",
            "currencyInfo": {
                "symbol": "$",
                "pattern": "#,###",
                "groupingSeparator": ",",
                "decimalSeparator": ".",
                "dollarTrm": 3800
            }
        },
        {
            "id": "MX",
            "flagImage": "https://flags-countries.s3.amazonaws.com/mxc.jpg",
            "prefixPhone": "+52",
            "name": "Mexico",
            "currency": "MXN",
            "dividend": 100,
            "locale": "es_MX",
            "currencyInfo": {
                "symbol": "$",
                "pattern": "#,###.##",
                "groupingSeparator": ",",
                "decimalSeparator": ".",
                "dollarTrm": 20
            }
        },
        {
            "id": "BR",
            "prefixPhone": "+55",
            "flagImage": "https://flags-countries.s3.amazonaws.com/br.jpg",
            "name": "Brasil",
            "currency": "BRL",
            "dividend": 100,
            "locale": "pt_BLR",
            "currencyInfo": {
                "symbol": "R$",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ","
            }
        },
        {
            "id": "PE",
            "prefixPhone": "+51",
            "flagImage": "https://flags-countries.s3.amazonaws.com/pe.jpg",
            "name": "Peru",
            "currency": "PEN",
            "dividend": 100,
            "locale": "es_PE",
            "currencyInfo": {
                "symbol": "S/",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ",",
                "dollarTrm": 3.71
            }
        },
        {
            "id": "CL",
            "prefixPhone": "+56",
            "flagImage": "https://flags-countries.s3.amazonaws.com/chl.jpg",
            "name": "Chile",
            "currency": "CLP",
            "format": "\\$#,##0",
            "locale": "es_CL",
            "currencyInfo": {
                "symbol": "$",
                "pattern": "#,###",
                "groupingSeparator": ",",
                "decimalSeparator": ".",
                "dollarTrm": 792
            }
        },
        {
            "id": "AR",
            "prefixPhone": "+54",
            "flagImage": "https://flags-countries.s3.amazonaws.com/arg.jpg",
            "name": "Argentina",
            "currency": "ARS",
            "dividend": 100,
            "locale": "es_AR",
            "currencyInfo": {
                "symbol": "$",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ",",
                "dollarTrm": 100
            }
        },
        {
            "id": "VE",
            "prefixPhone": "+58",
            "flagImage": "https://flags-countries.s3.amazonaws.com/ven.jpg",
            "name": "Venezuela",
            "currency": "USD",
            "dividend": 100,
            "locale": "es_VE",
            "currencyInfo": {
                "symbol": "US$",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ",",
                "dollarTrm": 1
            }
        },
        {
            "id": "BO",
            "prefixPhone": "+591",
            "flagImage": "https://flags-countries.s3.amazonaws.com/bol.jpg",
            "name": "Bolivia",
            "currency": "BOB",
            "dividend": 100,
            "locale": "es_BO",
            "currencyInfo": {
                "symbol": "Bs",
                "pattern": "#,###.##",
                "groupingSeparator": ",",
                "decimalSeparator": ".",
                "dollarTrm": 6.9
            }
        },
        {
            "id": "EC",
            "prefixPhone": "+593",
            "flagImage": "https://flags-countries.s3.amazonaws.com/ecu.jpg",
            "name": "Ecuador",
            "currency": "USD",
            "dividend": 100,
            "locale": "es_EC",
            "currencyInfo": {
                "symbol": "US$",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ",",
                "dollarTrm": 1
            }
        },
        {
            "id": "UY",
            "prefixPhone": "+598",
            "flagImage": "https://flags-countries.s3.amazonaws.com/uru.jpg",
            "name": "Uruguay",
            "currency": "UYU",
            "dividend": 100,
            "locale": "es_UY",
            "currencyInfo": {
                "symbol": "$",
                "pattern": "#,###.##",
                "groupingSeparator": ".",
                "decimalSeparator": ",",
                "dollarTrm": 43.5
            }
        },
    ]
};