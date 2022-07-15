import { camelizeKeys } from 'humps';

export const fetcher = (url: string, enVar: string) => fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key-sumer": enVar,
    } as any,
}).then((res) => res.json()).then(res => camelizeKeys(res)).then(countryData => {
    const item  = countryData.find((data: { key: string; }) => data.key === "countries");
    return item.value.countriesInformation;
});