import React from 'react';
import { HelpLinkContainer } from './HelpLink.styles';
import { useTranslation } from 'react-i18next';
import { EVENTS } from '~/common';
import { LightSupport } from '~/icons';

const HelpLink = ({ logEvent }: { logEvent: (evt: string) => void}): JSX.Element => {
    const { t } = useTranslation()

    return (
        <HelpLinkContainer className={'help-link'}>
            <a
                href={`https://api.whatsapp.com/send?text=${t("login.helpMessage")}&phone=+573227056632`}
                target="_blank"
                className="outline"
                onClick={() => {
                    logEvent(EVENTS.SELECT_HELP);
                }}
            >
                <span className="text-btn">{t("login.support")}</span>
                <LightSupport />
            </a>
        </HelpLinkContainer>
    );
};

export default HelpLink;
