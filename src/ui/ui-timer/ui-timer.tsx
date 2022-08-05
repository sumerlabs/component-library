import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { UiTimerProps } from "./types";
 
const UiTimer: FC<UiTimerProps> = ({
  initFromSeconds = 120,
  showText,
  className,
  onTimerEnds
}) => {
  const [seconds, setSeconds] = useState(initFromSeconds);
  const ref = useRef<NodeJS.Timer>();

  const formatTime = () => {
    const mins = Math.floor(seconds / 60) % 60;
    const secs = seconds % 60;
    return `${mins <= 9 ? `0${mins}` : mins}:${secs <= 9 ? `0${secs}` : secs}`;
  }

  const initTimer = useCallback(() => {
    setSeconds(s => {
      if (s <= 1) {
        onTimerEnds();
        endsInterval();
      }
      return s - 1;
    });
  }, [seconds]);

  const endsInterval = () => {
    ref.current && clearInterval(ref.current);
  }

  useEffect(() => {
    ref.current = setInterval(initTimer, 1000);
    return () => endsInterval();
  }, []);

  return (
    <div className={className}>{formatTime()} {showText && (seconds >= 60 ? 'Minutos': 'Segundos')}</div>
  );
}
 
export default memo(UiTimer);