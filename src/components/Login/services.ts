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

export const UpdateUserDataService = async ({ token, firstName, lastName, apiUrl }:  { token: string,
    firstName: string, lastName: string, apiUrl: string }) => {
    const res = await fetch(
        `${apiUrl}/api/ms/user/customer-detail`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": `Bearer ${token}`,
            } as any,
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName
            }),
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