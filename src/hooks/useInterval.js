import { useEffect } from "react";
// import { unstable_useEffectEvent as useEffectEvent } from 'react';

/**
 * Runs a callback every @delay miliseconds, and clears the interval when the component unmounts
 * @param {*} callback 
 * @param {*} delay 
 */
export default function useInterval(callback, delay) {
  // const onTick = useEffectEvent(callback);    <--- lots of conflicts

  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => {
      clearInterval(intervalId);
    }
  }, [callback, delay]);

}