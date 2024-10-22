import React from "react";
import { Heading, Box, Card, CardBody, Text } from "@chakra-ui/react"; 
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link
} from "@chakra-ui/react";

const PageJavascriptInterestingPatterns = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">Interesting patterns in JavScript</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow='md' borderWidth='1px' borderColor='gray.300'>
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      Currying and Closures
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>The code below shows how we solve the problem of returning a specific string from an array of strings using a combination of <b>closure</b> and <b>currying</b>.</Text>

                  <footer>
                    <Link href="https://jsfiddle.net/enjanga/ba345e87/26/" isExternal>See code example</Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>
 
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default PageJavascriptInterestingPatterns;
