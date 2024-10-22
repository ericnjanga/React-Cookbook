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

const PageJavascriptCoreConcepts = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">Core concepts in JavScript</Heading>
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
                      What is an async function?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>An async function returns a promise and simplifies asynchronous operations like:</Text><ul className="list-aligh-left">
                    <li>Fetching data from an API</li>
                    <li>Performing a database query</li>
                    <li>Waiting for the result of a specific process</li>
                  </ul>
                  {/* <Heading as='h4' mb='1'>Key points:</Heading>
                  <ul className="list-aligh-left">
                    <li><b>Inner function access:</b> The inner function can still access the variables from its parent function, even after the parent has returned.</li>
                    <li><b>Context retention:</b> This ability to "remember" and use variables from the parent function is what defines the closure.</li>
                    <li><b>Privileged access:</b> The closure creates a private environment for these variables, not accessible from the outside.</li>
                  </ul> */}

                  <footer>
                    <Link href="https://jsfiddle.net/enjanga/tv1gnycp/255/" isExternal>See code examples</Link>&nbsp; | &nbsp;
                    <Link href="https://chatgpt.com/share/6717c56e-a458-8001-b394-dff9727e2c5f" isExternal>More about async functions</Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

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
                      What is a Closure?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>A closure is a function that retains access to the variables and parameters of its outer function even after the outer function has finished executing. This allows the inner function to 'remember' the context in which it was created, giving it privileged access to the scope of its parent function.</Text>
                  <Heading as='h4' mb='1'>Key points:</Heading>
                  <ul className="list-aligh-left">
                    <li><b>Inner function access:</b> The inner function can still access the variables from its parent function, even after the parent has returned.</li>
                    <li><b>Context retention:</b> This ability to "remember" and use variables from the parent function is what defines the closure.</li>
                    <li><b>Privileged access:</b> The closure creates a private environment for these variables, not accessible from the outside.</li>
                  </ul>

                  <footer>
                    <Link href="https://jsfiddle.net/enjanga/dju9xcbk/16/" isExternal>See code examples</Link>&nbsp; | &nbsp;
                    <Link href="https://chatgpt.com/share/670a9e0a-9048-8001-9209-546779191a56" isExternal>Why closures are useful</Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

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
                      What is the Curring technique?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>The curring technique consist of transforming a function that takes multiple arguments into a series of funtions that each take a single argument.</Text>
                  <Heading as='h4' mb='1'>Practical use of currying:</Heading>
                  <ul className="list-aligh-left">
                    <li><b>Partial application:</b> You can create a specialized version of a function by pre-filling some arguments.</li>
                    <li><b>Function composition:</b> In functional programming, currying can make it easier to compose small functions together.</li>
                  </ul>

                  <footer>
                    <Link href="https://jsfiddle.net/enjanga/yx0c5twr/20/" isExternal>See code examples</Link>&nbsp; | &nbsp;
                    <Link href="https://chatgpt.com/share/670fd7e1-2448-8001-9e43-b2459c4657d9" isExternal>Why Currying is useful</Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

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

export default PageJavascriptCoreConcepts;
