import React from 'react';
import { useTranslation } from 'react-i18next';
import { EVENTS } from '~/common';
import { LightSupport } from '~/icons';
import * as styles from './HelpLink.module.scss';

const HelpLink = ({ logEvent }: { logEvent: (evt: string) => void}): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className={`${styles.helpLinkContainer} help-link`}>
            <a
                href={`https://api.whatsapp.com/send?text=${t("login.helpMessage")}&phone=+573227056632`}
                target="_blank"
                className={styles.outline}
                onClick={() => {
                    logEvent(EVENTS.SELECT_HELP);
                }}
            >
                <span className="text-btn">{t("login.support")}</span>
                <LightSupport />
            </a>
        </div>
    );
};

export default HelpLink;
