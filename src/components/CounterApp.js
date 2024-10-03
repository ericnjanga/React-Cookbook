import React, { useState } from "react";
import { Heading, VStack, Text } from "@chakra-ui/react";
import useCounter from "../hooks/useCounter";
import useInterval from "../hooks/useInterval";


const CounterApp = () => {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  const handleDelayChange = (e) => {
    setDelay(Number(e.target.value));
  };  

  return (
    <VStack spacing="5">
      <Heading as="h4" size="md">
        {count} seconds passed.
      </Heading>
      <input
        type="range"
        className="form-range"
        min="0"
        step="500"
        max="10000"
        value={delay}
        onChange={handleDelayChange}
      />
      <Text fontSize="0.8rem">
        Tick delay: <b>{delay}</b> ms
      </Text>
    </VStack>
  );
};

export default CounterApp;
