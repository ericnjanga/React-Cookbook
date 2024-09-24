import React from "react";
import { Heading, Box, Card, CardBody, Text, Badge } from "@chakra-ui/react";
import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const PageJavascriptInterviewQuestions = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">JavaScript Interview Questions</Heading>
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
                      What is a route/url parameter?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb='0'>A route or URL parameter is a variable part of a URL that can be used to capture and pass data in the URL itself. These parameters help define dynamic routes in web applications, allowing for flexibility in handling different data with the same route pattern.</Text>
                </AccordionPanel>
              </AccordionItem>

              
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default PageJavascriptInterviewQuestions;
