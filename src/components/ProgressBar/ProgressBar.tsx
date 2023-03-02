import React from 'react';
import * as styles from './progressBar.module.scss';

const ProgressBar = ({ width }: {width: number}): JSX.Element => {

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.inProgress} style={{width}} />
        </div>
    );
};

export default ProgressBar;
