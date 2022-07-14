export const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export const isEmpty = (value: any) => {
    return (
        value == null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}

export const allowOnlyNumber = (text: string): string => {
    let formatedText = text;
    if (text && text.length > 0) {
        formatedText = text.replace(/[^0-9]*/g, "").replace(/(\..*)\./g, "$1");
    }
    return formatedText;
};