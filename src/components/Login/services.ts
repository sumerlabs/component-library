import { camelizeKeys } from 'humps';
import { Customer, ValidateCodeResponse } from '~/components/Login/types';

export const GetCodeService = async ({ sendTo,
                                         prefixSendTo, channel, apiKey, apiUrl }:  { sendTo: string,
    prefixSendTo : string,
    channel: string, apiKey: string, apiUrl: string }) => {
    const res = await fetch(
        `${apiUrl}/api/ms/user/twilio/login/verification-code`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-key-sumer": apiKey,
            } as any,
            body: JSON.stringify({
                send_to: sendTo,
                prefix_send_to: prefixSendTo,
                channel: channel,
            }),
        }
    );

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
};

export const ValidateCodeService = async ({ sendTo, prefixSendTo, code, apiKey, apiUrl }:  { sendTo: string,
    prefixSendTo : string, code: string, apiKey: string, apiUrl: string }) => {
    const res = await fetch(
        `${apiUrl}/api/ms/user/twilio/login/check-code`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-key-sumer": apiKey,
            } as any,
            body: JSON.stringify({
                send_to: sendTo,
                prefix_send_to: prefixSendTo,
                channel: "sms",
                code: code
            }),
        }
    );

    const json = camelizeKeys(await res.json()) as unknown;

    return {
        data: json as ValidateCodeResponse,
        status: res.status
    };
};

export const UpdateUserDataService = async ({
    token,
    firstName,
    lastName,
    email,
    identification,
    identificationType,
    postalCode,
    apiUrl
}: {
    token: string,
    firstName: string,
    lastName: string,
    email?: string;
    identification?: string;
    identificationType?: string;
    postalCode?: string;
    apiUrl: string;
}) => {
    const body: { [key: string]: any } = {
        first_name: firstName,
        last_name: lastName,
    };

    email ? (body['email'] = email) : null;
    identification ? (body['identification_number'] = identification) : null;
    identificationType ? (body['identification_type'] = identificationType) : null;
    postalCode ? (body['additional_data'] = { postalCode }) : null;

    const res = await fetch(
        `${apiUrl}/api/ms/user/customer-detail`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": `Bearer ${token}`,
            } as any,
            body: JSON.stringify(body),
        }
    );

    const json = camelizeKeys(await res.json()) as unknown;

    return json as Customer;
};

export const getUserData = async ({ token, apiUrl }:  { token: string, apiUrl: string }) => {
    const res = await fetch(
        `${apiUrl}/api/ms/user/customer-detail`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": `Bearer ${token}`,
            } as any
        }
    );

    const json = camelizeKeys(await res.json()) as unknown;

    return json as Customer;
};

export const facebookLogin = async ({ token, apiUrl, apiKey }:  { token: string, apiUrl: string, apiKey: string }) => {
    const res = await fetch(
        `${apiUrl}/api/ms/user/auth/login-facebook`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-key-sumer": '78cd3ff2bd5c9f661ba1d6a0a98fcab9',
            } as any,
            body: JSON.stringify({token: token}),
        }
    );

    const json = camelizeKeys(await res.json()) as unknown;

    return json as ValidateCodeResponse;
};