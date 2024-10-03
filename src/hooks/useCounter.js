import { useState } from "react";
import useInterval from "./useInterval";

/**
 * Returns a state logic that sets a counter whose frequency is controlled by a delay.
 * The hook exposes:
 * - The count
 * - The delay (frequency of counts)
 * - The delay change handler (function)
 * @returns
 */
export default function useCounter (delay) {
  const [count, setCount] = useState(0);
  
  // Set the count and reinitialize it when the delay is changed
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);

  return count;
}