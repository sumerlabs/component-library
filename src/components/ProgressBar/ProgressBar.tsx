import React from 'react';
import {
    InProgress,
    ProgressBarContainer
} from './ProgressBar.styles';

const ProgressBar = ({ width }: {width: number}): JSX.Element => {

    return (
        <ProgressBarContainer>
            <InProgress width={width} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;
