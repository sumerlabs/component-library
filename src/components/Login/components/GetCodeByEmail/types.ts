export type OptionProps = {
    backgroundImage: string;
};

export type RequestCodePayload = {
    send_to: string,
    prefix_send_to?: string,
    email?: string,
    channel: string,
};