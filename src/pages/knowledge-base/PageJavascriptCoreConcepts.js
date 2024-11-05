import React, { useContext } from "react";
import { Heading, Box, Card, CardBody, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";
import { ModalContext } from "../../components/ModalModule";
import { IconBxlJsfiddle, IconChatGPT } from "../../components/Icons/IconReact";
import ContentFetcher from "../../components/ContentFetcher/ContentFetcher";

/**
 * https://github.com/springload/react-accessible-accordion/tree/main?tab=readme-ov-file
 * https://react-accessible-accordion.springload.co.nz/
 */
import {
  Accordion as SpecAccordion,
  AccordionItem as SpecAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const PageJavascriptCoreConcepts = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Box className="row">
        <Heading as="h1">Core concepts in JavScript</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300" padding={0}>
          <CardBody padding={0}>
            <SpecAccordion>
              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>What is a promise?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ContentFetcher id={14} />
                          <footer className="accordion-footer">
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="#"
                              isExternal
                            >
                              See code examples
                              <IconBxlJsfiddle
                                width={"1.3rem"}
                                height={"1.3rem"}
                              />
                            </Link>
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="https://chatgpt.com/share/671a8c2c-9964-8001-bf4d-24a7ad5889f5"
                              isExternal
                            >
                              More about promises
                              <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                            </Link>
                          </footer>
                        </>
                      )
                    }
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Test 2: Content conditionally rendered
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                  {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) => expanded && <ContentFetcher id={12} />}
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Test 3: Content conditionally rendered
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                  {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) => expanded && <ContentFetcher id={13} />}
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>
            </SpecAccordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
              {/* <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      What is a Promise?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>A JavaScript promise is:</Text>
                  <ul className="list-aligh-left">
                    <li>
                      An object that represents the eventual completion (or
                      failure)
                    </li>
                    <li>of an asynchronous operation</li>
                    <li>and its resulting value</li>
                    <li>
                      It allows the handling asynchronous code more cleanly
                    </li>
                    <li>compared to traditional callback-based approaches</li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="#"
                      isExternal
                    >
                      See code examples
                      <IconBxlJsfiddle width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671a8c2c-9964-8001-bf4d-24a7ad5889f5"
                      isExternal
                    >
                      More about promises
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem> */}

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
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
                  <Text>
                    An async function returns a promise and simplifies
                    asynchronous operations like:
                  </Text>
                  <ul className="list-aligh-left">
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

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://jsfiddle.net/enjanga/tv1gnycp/255/"
                      isExternal
                    >
                      See code examples
                      <IconBxlJsfiddle width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6717c56e-a458-8001-b394-dff9727e2c5f"
                      isExternal
                    >
                      More about
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
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
                  <Text>
                    A closure is a function that retains access to the variables
                    and parameters of its outer function even after the outer
                    function has finished executing. This allows the inner
                    function to 'remember' the context in which it was created,
                    giving it privileged access to the scope of its parent
                    function.
                  </Text>
                  <Heading as="h4" mb="1">
                    Key points:
                  </Heading>
                  <ul className="list-aligh-left">
                    <li>
                      <b>Inner function access:</b> The inner function can still
                      access the variables from its parent function, even after
                      the parent has returned.
                    </li>
                    <li>
                      <b>Context retention:</b> This ability to "remember" and
                      use variables from the parent function is what defines the
                      closure.
                    </li>
                    <li>
                      <b>Privileged access:</b> The closure creates a private
                      environment for these variables, not accessible from the
                      outside.
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://jsfiddle.net/enjanga/dju9xcbk/16/"
                      isExternal
                    >
                      See code exampl
                      <IconBxlJsfiddle width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/670a9e0a-9048-8001-9209-546779191a56"
                      isExternal
                    >
                      Why closures are useful
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
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
                  <Text>
                    The curring technique consist of transforming a function
                    that takes multiple arguments into a series of funtions (
                    <button className="btn-link" onClick={openModal}>
                      closures
                    </button>
                    ) that each take a single argument.
                  </Text>
                  <Heading as="h4" mb="1">
                    Practical use of currying:
                  </Heading>
                  <ul className="list-aligh-left">
                    <li>
                      <b>Partial application:</b> You can create a specialized
                      version of a function by pre-filling some arguments.
                    </li>
                    <li>
                      <b>Function composition:</b> In functional programming,
                      currying can make it easier to compose small functions
                      together.
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://jsfiddle.net/enjanga/yx0c5twr/20/"
                      isExternal
                    >
                      See code examples
                      <IconBxlJsfiddle width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/670fd7e1-2448-8001-9e43-b2459c4657d9"
                      isExternal
                    >
                      Why Currying is useful
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
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
                  <Text mb="0">
                    A route or URL parameter is a variable part of a URL that
                    can be used to capture and pass data in the URL itself.
                    These parameters help define dynamic routes in web
                    applications, allowing for flexibility in handling different
                    data with the same route pattern.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      *** More concepts
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      1. What are the differences between var, let, and const?
                      Explain the scoping rules, reassignability, and hoisting
                      behaviors of each keyword.
                    </li>
                    <li>
                      2. What is closure in JavaScript, and how does it work?
                      Describe how closures work and why they are useful,
                      particularly in maintaining state in a function’s inner
                      scope.
                    </li>
                    <li>
                      3. Explain prototypal inheritance in JavaScript. Discuss
                      how objects inherit properties and methods in JavaScript,
                      and contrast it with classical inheritance.
                    </li>
                    <li>
                      4. What is the difference between == and === in
                      JavaScript? Explain type coercion in JavaScript and why
                      === (strict equality) is usually preferred.
                    </li>
                    <li>
                      5. How does the JavaScript event loop work? Explain the
                      concept of the call stack, Web APIs, callback queue, and
                      how JavaScript achieves asynchronous behavior.
                    </li>

                    <li>
                      6. What is this keyword, and how does its behavior change
                      in different contexts? Describe how this behaves in
                      regular functions, arrow functions, methods, and in event
                      handlers.
                    </li>
                    <li>
                      7. What are promises, and how do they help with
                      asynchronous code? Explain how promises work, the concept
                      of .then() and .catch(), and the benefits over
                      callback-based code.
                    </li>
                    <li>
                      8. What is async and await, and how does it differ from
                      using .then()? Discuss how async and await simplify
                      asynchronous code readability and how they interact with
                      promises.
                    </li>
                    <li>
                      9. What are arrow functions, and how do they differ from
                      regular functions? Explain syntax differences, implicit
                      returns, and how arrow functions don’t bind their own
                      this.
                    </li>
                    <li>
                      10. What are modules in JavaScript, and why are they
                      useful? Describe how JavaScript modules (e.g., import and
                      export) work, and why they’re beneficial for organizing
                      and reusing code.
                    </li>
                  </ul>
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
