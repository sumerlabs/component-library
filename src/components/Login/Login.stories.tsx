import React from 'react';
import { ComponentStory } from '@storybook/react';
import Login from './Login';

export default {
  title: 'Login',
  component: Login
};

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const LoginDefault = Template.bind({});
LoginDefault.args = {
    fetchCustomer: () => {},
    apiKey: 'TeFbDPQQ8G5Cmvxmzcc7gd7yF389cmsV',
    apiUrl: 'https://services.dev.sumerlabs.com',
    logEvent: () => {},
    success: () => {
        console.log('success');
    },
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
};