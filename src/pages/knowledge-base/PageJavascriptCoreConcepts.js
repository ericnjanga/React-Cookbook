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
                    What is an async function?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ContentFetcher id={19} />
                          <footer className="accordion-footer">
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="https://jsfiddle.net/enjanga/tv1gnycp/255/"
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
                              href="https://chatgpt.com/share/6717c56e-a458-8001-b394-dff9727e2c5f"
                              isExternal
                            >
                              More about
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
                  <AccordionItemButton>What is a Closure?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ContentFetcher id={20} />
                          <footer className="accordion-footer">
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="https://jsfiddle.net/enjanga/dju9xcbk/16/"
                              isExternal
                            >
                              See code exampl
                              <IconBxlJsfiddle
                                width={"1.3rem"}
                                height={"1.3rem"}
                              />
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
                        </>
                      )
                    }
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the Curring technique?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <Text>
                            The curring technique consist of transforming a
                            function that takes multiple arguments into a series
                            of funtions (
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
                              <b>Partial application:</b> You can create a
                              specialized version of a function by pre-filling
                              some arguments.
                            </li>
                            <li>
                              <b>Function composition:</b> In functional
                              programming, currying can make it easier to
                              compose small functions together.
                            </li>
                          </ul>

                          <footer className="accordion-footer">
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="https://jsfiddle.net/enjanga/yx0c5twr/20/"
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
                              href="https://chatgpt.com/share/670fd7e1-2448-8001-9e43-b2459c4657d9"
                              isExternal
                            >
                              Why Currying is useful
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
                    What is a route/url parameter?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) => expanded && <ContentFetcher id={21} />}
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the differences between var, let, and const?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <p>
                            var, let, and const are all variables who differ in
                            scoping rules, reassignability, and hoisting
                            behaviors.
                          </p>

                          <footer className="accordion-footer">
                            <Link
                              className="btn btn-small btn-secondary btn-icon"
                              href="https://chatgpt.com/share/6746026a-9a34-8001-be9d-62f2ef87d127"
                              isExternal
                            >
                              More detail about var, let, and const
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
                    *** Test 4: Content conditionally rendered
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {/** PERFORMANCE OPTIMIZATION: Only renders if panel is expanded */}
                    {({ expanded }) => expanded && <ContentFetcher id={13} />}
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    *** Test 4: Content conditionally rendered
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

      <Box className="row">
        <Heading as="h1">Test your knowledge</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300" padding={0}>
          <CardBody padding={0}>
            <SpecAccordion>
              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Basic-Level Questions
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ol>
                            <li>
                              What is the difference between var, let, and
                              const?
                            </li>
                            <li>
                              What is the difference between null and undefined?
                            </li>
                            <li>
                              Explain the concept of "hoisting" in JavaScript.
                              How does it work with variables and functions?
                            </li>
                            <li>
                              What is a JavaScript closure? Provide an example.
                            </li>
                            <li>
                              How does JavaScript handle asynchronous
                              operations? Explain with an example of Promises or
                              async/await.
                            </li>
                          </ol>
                        </>
                      )
                    }
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Intermediate-Level Questions
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ol>
                            <li>
                              What is the difference between call(), apply(),
                              and bind() in JavaScript? When would you use each?
                            </li>
                            <li>
                              How does event delegation work in JavaScript? Why
                              is it useful?
                            </li>
                            <li>
                              What is the difference between == and === in
                              JavaScript? Explain type coercion in JavaScript
                              and why === (strict equality) is usually
                              preferred.
                            </li>
                            <li>
                              What is closure in JavaScript, and how does it
                              work? Describe how closures work and why they are
                              useful, particularly in maintaining state in a
                              function’s inner scope.
                            </li>
                            <li>
                              Explain prototypal inheritance in JavaScript.
                              Discuss how objects inherit properties and methods
                              in JavaScript, and contrast it with classical
                              inheritance.
                            </li>
                            <li>
                              How does the JavaScript event loop work? Explain
                              the concept of the call stack, Web APIs, callback
                              queue, and how JavaScript achieves asynchronous
                              behavior.
                            </li>
                            <li>
                              What is this keyword, and how does its behavior
                              change in different contexts? Describe how this
                              behaves in regular functions, arrow functions,
                              methods, and in event handlers.
                            </li>
                            <li>
                              What are promises, and how do they help with
                              asynchronous code? Explain how promises work, the
                              concept of .then() and .catch(), and the benefits
                              over callback-based code.
                            </li>
                            <li>
                              What is async and await, and how does it differ
                              from using .then()? Discuss how async and await
                              simplify asynchronous code readability and how
                              they interact with promises.
                            </li>
                            <li>
                              What are arrow functions, and how do they differ
                              from regular functions? Explain syntax
                              differences, implicit returns, and how arrow
                              functions don’t bind their own this.
                            </li>
                            <li>
                              What are modules in JavaScript, and why are they
                              useful? Describe how JavaScript modules (e.g.,
                              import and export) work, and why they’re
                              beneficial for organizing and reusing code.
                            </li>
                          </ol>
                        </>
                      )
                    }
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>

              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Advanced-Level Questions
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded && (
                        <>
                          <ol>
                            <li>
                              What is the Event Loop in JavaScript? How does it
                              manage concurrency?
                            </li>
                            <li>
                              What are JavaScript modules, and how are import
                              and export used? Compare ES Modules to CommonJS.
                            </li>
                          </ol>
                        </>
                      )
                    }
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>
            </SpecAccordion>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default PageJavascriptCoreConcepts;
