import React, { createRef, useState } from 'react';
import { EVENTS } from '~/common/consts/events';
import styles from './smsValidation.module.scss';

type Props = {
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: Record<string, string>,
    logEvent: (event: string) => void
    error:boolean,
}

const SmsValidation = ({ handleChange, handleBlur, values, logEvent, error }: Props): JSX.Element => {
    const focusChange = (e: any) => {
        const { value, name, form: currentForm } = e.target;
        if (e.target.value.length == e.target.getAttribute("maxlength")) {
            const lastItemName = Object.keys(values).at(-1);
            if (name !== lastItemName) {
                const index = [...currentForm as any]?.indexOf(e.target);
                const nextSibling: any = currentForm?.elements[index + 1];
                nextSibling?.focus();
            }
        } else if (value.length === 0) {
            const firstItemName = Object.keys(values).at(0);
            if (name !== firstItemName) {
                const index = [...currentForm as any]?.indexOf(e.target);
                const nextLastSibling: any = currentForm?.elements[index - 1];
                nextLastSibling?.focus();
            }
        }
    }

    return (
        <div className={styles.smsValidation} onClick={() => {
            logEvent(EVENTS.SELECT_INPUT_CODE);
        }}>
            {Object.keys(values).map((k, index) => {
                return (
                    <>
                        <input className={!error ? styles.inputCode : styles.inputError } onChange={handleChange}
                               onBlur={handleBlur}
                               onInput={focusChange}
                               key={index}
                               autoComplete={'off'}
                               value={values[k]} name={k} placeholder="00" maxLength={2} />
                        {index + 1 !== Object.keys(values).length && <div className={styles.line} />}
                    </>
                );
            })}
        </div>
    );
};

export default SmsValidation;
