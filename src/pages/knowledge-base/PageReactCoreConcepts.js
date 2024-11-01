import React, { useContext } from "react";
import IconReact, { IconExternalLink } from "../../components/Icons/IconReact";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  CardHeader,
  Spacer,
} from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import {
  Heading,
  Box,
  Card,
  CardBody,
  Link,
  Text,
  Alert,
  AlertIcon,
  Divider,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { List, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { ModalContext } from "../../components/ModalModule";
import { IconBxlJsfiddle, IconChatGPT } from "../../components/Icons/IconReact";

const PageReactCoreConcepts = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="section-documentation">
      <Box className="row">
        <Heading as="h1">Core Concepts</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              About React
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <Heading>
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
                      What is React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text mb={0}>React:</Text>

                  <ul className="list-align-left">
                    <li>
                      Is a JavaScript library for building user interfaces
                    </li>
                    <li>
                      Is good for creating large, complex, and single-page
                      applications
                    </li>
                    <li>
                      Excels at creating applications where data changes over
                      time without triggering a page reload
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      Why using React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text mb={0}>Developers use React for several reasons:</Text>
                  <ul className="list-align-left">
                    <li>
                      <b>Reusability:</b> Build components once, reuse
                      everywhere.
                    </li>
                    <li>
                      <b>Efficiency:</b> Fast updates via{" "}
                      <button className="btn-link" onClick={() => openModal(1)}>
                        Virtual DOM
                      </button>
                      .
                    </li>
                    <li>
                      <b>Simplicity:</b> JSX's declarative syntax is easy to
                      understand.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      Comparative analysis against other frameworks
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text>
                    React differs from other front-end frameworks like Angular
                    and Vue in several key areas, including its{" "}
                    <b>philosophy</b>, <b>architecture</b>, and <b>features</b>.
                    See below:
                  </Text>

                  <TableContainer>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      whiteSpace="wrap"
                      className="table-definition"
                    >
                      <Thead>
                        <Tr>
                          <Th>Aspect</Th>
                          <Th>
                            <b>React</b>
                          </Th>
                          <Th>
                            <b>Angular</b>
                          </Th>
                          <Th>
                            <b>Vue</b>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Type</Td>
                          <Td>Library (UI)</Td>
                          <Td>Full-fledged framework</Td>
                          <Td>Progressive framework</Td>
                        </Tr>
                        <Tr>
                          <Td>Data Binding</Td>
                          <Td>One-way</Td>
                          <Td>Two-way</Td>
                          <Td>Both one-way and two-way</Td>
                        </Tr>
                        <Tr>
                          <Td>State Management</Td>
                          <Td>External (Redux/MobX)</Td>
                          <Td>Built-in (services, RxJS, NgRx)</Td>
                          <Td>Built-in (VueX)</Td>
                        </Tr>
                        <Tr>
                          <Td>Routes Management</Td>
                          <Td>External (react-router)</Td>
                          <Td>Built-in (routing module)</Td>
                          <Td>Built-in (Vue-router)</Td>
                        </Tr>
                        <Tr>
                          <Td>Performance</Td>
                          <Td>
                            Fast with{" "}
                            <button className="btn-link" onClick={openModal}>
                              Virtual DOM
                            </button>
                          </Td>
                          <Td>Slower with change detection</Td>
                          <Td>
                            Fast with{" "}
                            <button className="btn-link" onClick={openModal}>
                              Virtual DOM
                            </button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <br />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      Main features
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text mb={0}>React's main features are as follows:</Text>

                  <ul className="list-align-left">
                    <li>
                      <button className="btn-link" onClick={() => openModal(1)}>
                        <b>JSX</b>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link"
                        onClick={() => openModal(10)}
                      >
                        <b>Components</b>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link"
                        onClick={() => openModal(11)}
                      >
                        <b>Virtual DOM</b>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link"
                        onClick={() => openModal(12)}
                      >
                        <b>State management</b>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link"
                        onClick={() => openModal(13)}
                      >
                        <b>Hooks</b>
                      </button>
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671d0f29-6b3c-8001-a137-74d54f17f824"
                      isExternal
                    >
                      More about React features <IconExternalLink />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      History
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text>Key moments of React history:</Text>

                  <ul className="list-align-left">
                    <li>
                      <b>
                        React 0.3.0 <small>(July 2013)</small>
                      </b>
                      : <Badge colorScheme="purple">First public release</Badge>{" "}
                      <small>
                        Basic concept of React components and the{" "}
                        <button className="btn-link" onClick={openModal}>
                          <b>Virtual DOM</b>
                        </button>
                      </small>
                      .
                    </li>

                    <li>
                      <b>
                        React 16.0 <small>(Sep 2017)</small>
                      </b>
                      :{" "}
                      <Badge colorScheme="purple">
                        New Core Architecture ("Fiber")
                      </Badge>{" "}
                      <small>
                        Introduction of <b>Error Boundaries</b>, <b>Portals</b>,{" "}
                        <b>Fragments</b>
                      </small>
                      .
                    </li>
                    <li>
                      <b>Mar 2018</b>{" "}
                      <Badge colorScheme="purple">React 16.3</Badge> :{" "}
                      <b>New Lifecycle Methods</b>.{" "}
                      <small>
                        Context API Update, Strict Mode was introduced.
                      </small>
                    </li>
                    <li>
                      <b>Feb 2019</b>{" "}
                      <Badge colorScheme="purple">React 16.8</Badge> : Major
                      milestone with the <b>introduction of React Hooks</b>{" "}
                      (useState, useEffect, etc.).
                    </li>

                    <li>
                      <b>Mar 2022</b>{" "}
                      <Badge colorScheme="purple">React 18.0</Badge> :{" "}
                      <b>New concurrent rendering features</b>,
                      <small>
                        allowing React to work on multiple tasks simultaneously
                        for improved performance and responsiveness.
                      </small>
                    </li>
                    <li>
                      <b>Ongoing Updates</b>{" "}
                      <Badge colorScheme="purple">React 18.x</Badge> :{" "}
                      <b>Progressive Hydration</b>.{" "}
                      <small>
                        Allows React to progressively hydrate the page during
                        server-side rendering (SSR).
                      </small>
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              The DOM
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What is the real DOM?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={0}>The real DOM is: </Text>

                  <h1>**** TO DO:</h1>
                  <Link isExternal href="https://chatgpt.com/share/67239b23-4778-8001-89dd-129b13c2b6a0">Render HTML content coming through an API</Link>

                  <p><b>As an example</b>: Save DOM definition in the "definition" database and render it here and inside modals.</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>


                  <ul className="list-align-left" mb="10">
                    <li>Document Object Model</li>
                    <li>Programming interface</li>
                    <li>Represents the web document as nodes and objects</li>
                    <li>
                      Allows programming languages such as JS to manipulate the
                      web document
                    </li>
                  </ul>

                  <Text mb={0}>The real DOM: </Text>
                  <ul className="list-align-left" mb="10">
                    <li>
                      <b>is NOT</b> a programming language, but without it, the
                      JavaScript language wouldn't have any model or notion of
                      web pages, HTML documents, SVG documents, and their
                      component parts.
                    </li>
                    <li>
                      <b>is NOT</b> part of the JavaScript language, but is
                      instead a Web API used to build websites. It was designed
                      to be independent of any particular programming language
                      (can be implemented in Python too).
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
                      isExternal
                    >
                      More about the Real DOM <IconExternalLink />
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
                      What is the virtual DOM?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={0}>The virtual DOM is: </Text>
                  <ul className="list-align-left">
                    <li>Programming concept</li>
                    <li>
                      Keeps an "ideal" or virtual representation of the UI in
                      memory
                    </li>
                    <li>
                      Synchronizes React elements with the real DOM (
                      <Link
                        href="https://legacy.reactjs.org/docs/reconciliation.html"
                        isExternal
                      >
                        Reconciliation process
                      </Link>
                      )
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
                      isExternal
                    >
                      More on the virtual DOM
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/learn/preserving-and-resetting-state"
                      isExternal
                    >
                      Preserving and Resetting State
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>

                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://legacy.reactjs.org/docs/reconciliation.html"
                      isExternal
                    >
                      Reconciliation
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
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
                      Comparative analysis between real and virtual DOM
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    The real DOM and virtual DOM differ in their <b>nature</b>,{" "}
                    <b>interaction</b>, and <b>update</b> of the UI.
                  </Text>

                  <TableContainer>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      whiteSpace="wrap"
                      className="table-definition"
                    >
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th>The DOM</Th>
                          <Th>Virtual DOM</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <b>NATURE</b>
                          </Td>
                          <Td>
                            <ul className="list-align-left mb-0">
                              <li>Is an API</li>
                              <li>
                                Represents the document as nodes and objects
                              </li>
                            </ul>
                          </Td>
                          <Td>
                            <ul className="list-align-left mb-0">
                              <li>Is a coding pattern</li>
                              <li>
                                Is a copy of the document (virtual
                                representation) that is kept in memory
                              </li>
                            </ul>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b>INTERRACTIONS</b> such as <b>form submit</b> or{" "}
                            <b>link navigation</b>
                          </Td>
                          <Td>Trigger a page reload</Td>
                          <Td>
                            <b>Do not</b> trigger a page reload
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b>UI UPDATES</b> manipulations
                          </Td>
                          <Td>
                            Permits <b>direct manipulations</b> on the document
                          </Td>
                          <Td>
                            Updates the copy of the document in memory {" "}
                            
                            <Link
                              href="https://chatgpt.com/share/67241fc0-1f68-8001-abf5-def7cf2aff84"
                              isExternal
                            >
                            (diffing)
                            </Link>
                            , then synchronizes it with the real DOM {" "}
                            
                            <Link
                              href="https://chatgpt.com/share/67241ff8-2e68-8001-a993-7b816b5efcf9"
                              isExternal
                            >
                            (reconciliation)
                            </Link>
                            .
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              JSX
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What is JSX?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList className="list-align-left">
                    <ListItem>
                      <Link
                        href="https://legacy.reactjs.org/docs/introducing-jsx.html"
                        isExternal
                      >
                        Short for JavaScript-XML
                      </Link>{" "}
                    </ListItem>
                    <ListItem>
                      A template syntax extension to JavaScript
                    </ListItem>
                    <ListItem>Looks like HTML</ListItem>
                    <ListItem>Describes what the UI should look like</ListItem>
                    <ListItem>Returned by react components</ListItem>
                    <ListItem>Transpiled into React “elements”</ListItem>
                  </UnorderedList>
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
                      How is JSX working?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <OrderedList marginLeft=".5rem" paddingLeft="0">
                    <ListItem mb=".7rem">
                      <div>Write HTML-like JS code.</div>
                      <Code>
                        const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      <div>
                        Option to embed JS expressions inside curly braces
                        &#123;&#125;
                      </div>
                      <Code>
                        const val = "John"; <br />
                        const element = &lt;h1&gt;Hello,
                        &#123;val&#125;!&lt;/h1&gt;;
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      <div>
                        Transpiled into React elements (by compilers like Babel
                        with{" "}
                        <Badge colorScheme="purple">React.createElement</Badge>{" "}
                        function):
                      </div>
                      <Code>
                        const element = &#123; <br />
                        &nbsp;&nbsp;type: 'h1', <br />
                        &nbsp;&nbsp;props: &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;children: 'Hello, world!' <br />
                        &nbsp;&nbsp;&#125; <br />
                        &#125;;
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      React element stored in the virtual DOM.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <div>
                        From virtual DOM to actual DOM node using{" "}
                        <Badge colorScheme="purple">ReactDOM.render()</Badge>{" "}
                        function.
                      </div>
                      <Code>
                        ReactDOM.render(element,
                        document.getElementById('root'));
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      <div>Final DOM node output:</div>
                      <Code>&lt;h1&gt;Hello, John!&lt;/h1&gt;</Code>
                    </ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>

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
                      Why is JSX useful?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>...</Text>
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
                      What is the difference between an element and a component?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      whiteSpace="wrap"
                      className="table-definition"
                    >
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th>React Element</Th>
                          <Th>Component</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Definition</Td>
                          <Td>
                            A plain JavaScript object that represents a DOM
                            element.
                          </Td>
                          <Td>
                            A JavaScript function (or class) that returns React
                            elements (often using{" "}
                            <button className="btn-link" onClick={openModal}>
                              JSX
                            </button>
                            ).
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Creation/Type</Td>
                          <Td>
                            Produced by{" "}
                            <button className="btn-link" onClick={openModal}>
                              JSX
                            </button>{" "}
                            syntax, which gets transpiled into
                            React.createElement() calls. For example, &lt;div
                            /&gt; gets converted to React.createElement('div').
                          </Td>
                          <Td>
                            Can be either functional or class-based. Functional
                            components are often simpler and use hooks for state
                            and lifecycle management, while classes use built-in
                            methods.
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Immutability/Reusability</Td>
                          <Td>
                            Are immutable; once created, they cannot be changed.
                          </Td>
                          <Td>
                            Are reusable building blocks and can manage their
                            own state or lifecycle.
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Hooks
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What are React Hooks?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Hooks are functions that make it easier to manage state and
                    side effects directly inside functional components without
                    needing to refactor into class components (The functionality
                    was previously only available in class components until
                    Hooks came along in React 16.8).
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
                      What are the key React hooks?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul className="list-align-left">
                    <li>
                      <b>useState:</b> Allows state management to functional
                      components.
                    </li>
                    <li>
                      <b>useEffect:</b> Allows side effects such as{" "}
                      <b>data fetching, subscriptions, or DOM manipulations</b>,
                      but keeps components pure by ensuring those effects happen
                      after the render.
                    </li>
                    <li>
                      <b>useContext:</b> Allows for the easy flow of data down
                      the component tree without the need for{" "}
                      <b>props drilling</b>.
                    </li>
                    <li>
                      <b>useReducer:</b> is a "super-powered" version of
                      useState, that deals effectively with{" "}
                      <b>complex state logic</b> or{" "}
                      <b>multiple state transitions</b> that depend on previous
                      states.
                    </li>
                    <li>
                      <b>useMomo:</b> is used to <b>optimize performance</b> by
                      memoizing (or caching) the result of a computation so that
                      it only recalculates when necessary.
                    </li>
                    <li>
                      <b>useCallback:</b> is used to <b>optimize performance</b>{" "}
                      by memoizing (or caching) a function definition so that it
                      doesn't get recreated on every render. This can be
                      particularly useful when passing functions to child
                      components, preventing unnecessary re-renders.
                    </li>
                    <li>
                      <b>useRef:</b> is used to maintain a mutable reference to
                      a value that does not trigger re-renders when updated.
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671d2a9b-9bec-8001-99e5-32b4f06d469a"
                      isExternal
                    >
                      The purpose of Hooks <IconExternalLink />
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
                      What are Custom Hooks?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Custom Hooks in React are reusable functions that allow you
                    to encapsulate and share logic across multiple components.
                  </Text>

                  <h3>When do we use them?</h3>

                  <ul className="list-align-left">
                    <li>
                      When you need to share complex state logic, side effects
                      or interactions across components
                    </li>
                    <li>
                      When you notice similar or identical logic in multiple
                      components
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671d300c-1754-8001-9256-86e2016ba1ac"
                      isExternal
                    >
                      More on Custom hooks <IconExternalLink />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/learn/reusing-logic-with-custom-hooks"
                      isExternal
                    >
                      Custom hooks API
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Components
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      Explain the concept of components in React
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    In React, components are the building blocks of the user
                    interface (UI). They allow you to split your UI into
                    independent, reusable pieces, making it easier to manage and
                    develop complex applications. Each component can manage its
                    own state and lifecycle, making React a powerful tool for
                    building interactive UIs.{" "}
                    <Link
                      href="https://chatgpt.com/share/66f58ce9-8738-8001-a0cb-891de78046cf"
                      isExternal
                    >
                      Learn more
                    </Link>
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
                      Explain the difference between Functional and Class
                      components
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    They can be defiend separely (
                    <Link
                      href="https://chatgpt.com/share/66f591dc-a47c-8001-aac0-988dd14b5102"
                      isExternal
                    >
                      Learn more
                    </Link>
                    ), and contribute in different ways (
                    <Link
                      href="https://chatgpt.com/share/66f59442-65b4-8001-b74e-d0ea1eb73f38"
                      isExternal
                    >
                      Learn more
                    </Link>
                    ).
                  </Text>

                  <TableContainer>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      whiteSpace="wrap"
                      className="table-definition"
                    >
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th>Functional</Th>
                          <Th>Class</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td fontWeight="bold">Definition</Td>
                          <Td>
                            JS functions taking props in params and returning{" "}
                            <button className="btn-link" onClick={openModal}>
                              JSX
                            </button>
                            .
                          </Td>
                          <Td>
                            ES6 classes extending React.Component. Return{" "}
                            <button className="btn-link" onClick={openModal}>
                              JSX
                            </button>{" "}
                            through a render method.
                          </Td>
                        </Tr>
                        <Tr>
                          <Td fontWeight="bold">State Management</Td>
                          <Td>Through hooks (useState, useReducer).</Td>
                          <Td>
                            Built-in state management methods (this.state,
                            this.setState).
                          </Td>
                        </Tr>
                        <Tr>
                          <Td fontWeight="bold">Lifecycle Methods</Td>
                          <Td>
                            Through hooks like <b>useEffect</b>:
                            <UnorderedList mb="0" className="list-align-left">
                              <ListItem>After component render</ListItem>
                              <ListItem>State/props change</ListItem>
                              <ListItem>Cleanup phase</ListItem>
                            </UnorderedList>
                          </Td>
                          <Td>
                            Through built-in lifecycle methods:
                            <UnorderedList mb="0" className="list-align-left">
                              <ListItem>
                                <b>componentDidMount</b>: After component render
                              </ListItem>
                              <ListItem>
                                <b>componentDidUpdate</b>: State/props change
                              </ListItem>
                              <ListItem>
                                <b>componentWillUnmount</b>: Cleanup phase
                              </ListItem>
                            </UnorderedList>
                          </Td>
                        </Tr>

                        <Tr>
                          <Td fontWeight="bold">Complexity</Td>
                          <Td>...</Td>
                          <Td>
                            Best suited for handling complex state and effects
                            (with their built-in lifecycle methods) than
                            functional counterparts.
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <Spacer height="2rem"></Spacer>
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
                      What is the difference between controlled and uncontrolled
                      components?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    This refers to how <b>form elements</b> manage their state.{" "}
                    <Link
                      href="https://chatgpt.com/share/66f598cd-c164-8001-88d3-2da17eb72c49"
                      isExternal
                    >
                      Learn more
                    </Link>
                  </Text>

                  <TableContainer>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      whiteSpace="wrap"
                      className="table-definition"
                    >
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th>Controlled</Th>
                          <Th>Uncontrolled</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td fontWeight="bold">State management</Td>
                          <Td>React</Td>
                          <Td>The DOM</Td>
                        </Tr>
                        <Tr>
                          <Td fontWeight="bold">Good for</Td>
                          <Td>
                            Complex forms, tighter control (validation, state
                            management)
                          </Td>
                          <Td>
                            Simple forms, looser control (validation, state
                            management)
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
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
                      What is a higher-order component (HOC)?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList className="list-align-left">
                    <ListItem>Pattern for reusing component logic</ListItem>
                    <ListItem>For enhancement or extension purposes</ListItem>
                    <ListItem>
                      Takes a component as an argument, returns an enhanced
                      component
                    </ListItem>
                    <ListItem>
                      <Link
                        href="https://chatgpt.com/share/66f59bfd-5e6c-8001-939b-cfdef98e23fe"
                        isExternal
                      >
                        Learn more
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              State management &amp; props
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What is useState in React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    https://chatgpt.com/share/671d4449-2230-8001-bd95-e7749ba74b97
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
                      How does React handle state management?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    https://chatgpt.com/share/671d44d5-5ab8-8001-9be3-3d210e99bcf1
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
                      What is Prop Drilling, and how can you avoid it?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Prop Drilling is a concept in React development where data
                    (props) are passed from one component to another through
                    multiple layers of components. This can happen when a deeply{" "}
                    <Link
                      href="https://chatgpt.com/share/671d40e1-e5e4-8001-8037-f7ed20e7bbe0"
                      isExternal
                    >
                      nested component requires ...
                    </Link>
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
                      What is the Context API, and when would you use it?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    The Context API in React is a powerful feature for managing
                    state and passing data across the component tree without the
                    need for prop drilling, which is the process of passing
                    props down multiple levels from parent to child components.
                  </Text>

                  <h3>When to Use the Context API</h3>
                  <ul className="list-align-left">
                    <li>You have global data</li>
                    <li>You want to avoid prop drilling</li>
                    <li>You want a lightweight state management solution</li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671d42d6-8354-8001-84ab-a461c74d2fba"
                      isExternal
                    >
                      More on Context API <IconExternalLink />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/reference/react/createContext"
                      isExternal
                    >
                      Context API
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Advanced state management with Redux
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What is Redux?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h3>
                    What is Redux, and how does it differ from React’s built-in
                    state management?
                  </h3>
                  <Text>
                    Redux is a predictable state container for JavaScript
                    applications, commonly used with React for managing the
                    application state in a more structured and scalable way.{" "}
                    <Link
                      href="https://chatgpt.com/share/66f598cd-c164-8001-88d3-2da17eb72c49"
                      isExternal
                    >
                      Learn more
                    </Link>
                  </Text>

                  <h3>
                    Can you explain the concept of a Redux store and how actions
                    and reducers interact with it?
                  </h3>
                  <Text>
                    In Redux, the store is the central place where the entire
                    state of your application is held. It manages the state
                    tree, allows access to the state, and enables updates
                    through a process governed by actions and reducers.{" "}
                    <Link
                      href="https://chatgpt.com/share/66f5e3b5-193c-8001-ba38-cef6fbdd4266"
                      isExternal
                    >
                      Learn more
                    </Link>
                  </Text>

                  <h3>
                    What are the benefits of using middleware in Redux, and can
                    you give examples of common middleware used in Redux
                    applications?
                  </h3>
                  <Text>
                    In Redux, middleware is used to extend Redux's functionality
                    and enhance the flow of data between dispatching actions and
                    reaching the reducers.{" "}
                    <Link
                      href="https://chatgpt.com/share/66f5e3ff-d020-8001-92cc-77abb6997e20"
                      isExternal
                    >
                      Learn more
                    </Link>
                  </Text>

                  <h3>
                    How do you implement and manage side effects in a Redux
                    application?
                  </h3>
                  <Text>...</Text>

                  <h3>
                    Can you describe how to use the useSelector and useDispatch
                    hooks in a functional React component?
                  </h3>
                  <Text>...</Text>
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
                      xxx
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>xxx</Text>
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
                      xxx
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>xxx</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Routes
            </Heading>
          </CardHeader>

          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      xxx
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>xxx</Text>

                  <h3>
                    14. What is React Router, and how does it work? Explain
                    routing in a React application and how React Router is used
                    to manage navigation
                  </h3>
                  <Text>...</Text>

                  <h3>
                    What is the difference between relative and absolute paths?
                  </h3>
                  <Text>
                    In the context of Single Page Applications (SPAs), relative
                    and absolute paths refer to how routes are structured and
                    how they are resolved within the app. 1. Relative Paths
                    Relative paths are defined in relation to the current route.
                    They don't start with a slash (/), meaning the navigation
                    will happen based on the current route or parent route.
                    Example: Current route: /users/profile Relative path:
                    settings Resulting path: /users/profile/settings In this
                    case, the settings route is appended to the current route
                    /users/profile. 2. Absolute Paths Absolute paths start with
                    a leading slash (/) and are resolved from the root of the
                    application, ignoring the current route. Example: Current
                    route: /users/profile Absolute path: /settings Resulting
                    path: /settings In this case, the route navigation jumps
                    directly to /settings, regardless of the current route. Key
                    Differences: Relative paths are context-sensitive, relying
                    on the current URL. Absolute paths always refer to the same
                    location from the root of the app. In an SPA, understanding
                    these differences helps to manage navigation based on the
                    application's routing hierarchy.
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
                      xxx
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>xxx</Text>
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
                      xxx
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>xxx</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Performance
            </Heading>
          </CardHeader>
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      How do you optimize performance in a React application?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={0}>
                    Optimizing performance in a React application involves
                    several techniques that help in{" "}
                    <b>reducing the app's load time</b>,{" "}
                    <b>minimizing unnecessary renders</b>, and{" "}
                    <b>improving the overall user experience</b>.
                  </Text>
                  <Text>Here are some strategies:</Text>

                  <Heading as="h3" size={"md"} mb={0}>
                    Processes
                  </Heading>
                  <ul className="list-align-left">
                    <li>
                      Reducing initial load time with <b>lazy loading</b>
                    </li>
                    <li>
                      Breaking the code into smaller bundles with{" "}
                      <b>Code spitting</b>
                    </li>
                    <li>
                      Avoids unecessary operations with <b>Memoization</b>:
                    </li>
                    <ul className="list-align-left">
                      <li>
                        <b>React.memo()</b> for avoiding unecessary re-renders
                      </li>
                      <li>
                        <b>UseMemo()</b> for avoiding unecessary re-calculations
                      </li>
                      <li>
                        <b>UseCallback()</b> for caching functions
                      </li>
                    </ul>
                  </ul>

                  <Heading as="h3" size={"md"} mb={0}>
                    Coding patterns
                  </Heading>
                  <ul className="list-align-left">
                    <li>
                      Reducing components size by keeping them reusable and
                      simple
                    </li>
                    <li>Preventing excessive state updates</li>
                    <li>
                      Identifying performance bottlenecks by using DevTools
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671bf545-c350-8001-8c04-9da0f9215634"
                      isExternal
                    >
                      More on React perfomance optimization <IconExternalLink />
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
                      How does reconciliation work in React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    React uses the reconciliation process to figure out how to
                    update the{" "}
                    <button className="btn-link" onClick={openModal}>
                      actual DOM
                    </button>{" "}
                    to match the{" "}
                    <button className="btn-link" onClick={openModal}>
                      Virtual DOM
                    </button>
                    effectively. Here’s is{" "}
                    <Link
                      href="https://chatgpt.com/share/671d00f5-4244-8001-b0d7-0fcdbefb4611"
                      isExternal
                    >
                      how reconciliation works ...
                    </Link>
                  </Text>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/learn/preserving-and-resetting-state"
                      isExternal
                    >
                      Preserving and Resetting State
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://legacy.reactjs.org/docs/reconciliation.html"
                      isExternal
                    >
                      Reconciliation
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
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
                      What is lazy loading in React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Lazy loading in React is a performance optimization
                    technique that defers the loading of non-critical components
                    or resources until they’re actually needed, rather than
                    loading them all upfront.
                  </Text>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671cfbf6-afe0-8001-8cca-a1b44838c683"
                      isExternal
                    >
                      More on <b>Lazy Loading</b> <IconExternalLink />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/reference/react/lazy"
                      isExternal
                    >
                      <b>Lazy Loading</b> API
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
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
                      What are error boundaries in React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    In React, error boundaries are special components that catch
                    JavaScript errors in their child component trees, log them,
                    and display a fallback UI instead of crashing the entire
                    application.
                  </Text>
                  <Text>
                    Error boundaries are only available{" "}
                    <Link
                      href="https://chatgpt.com/share/66f5e3ff-d020-8001-92cc-77abb6997e20"
                      isExternal
                    >
                      in class components ...
                    </Link>
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
                      What is the difference between a key &amp; ref in React?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={0}>In React, </Text>

                  <ul className="list-align-left">
                    <li>
                      <b>key</b> is used to uniquely identify elements in a list
                    </li>
                    <li>
                      <b>ref</b> is used to directly reference a DOM node or a
                      React component instance
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671ce1ca-de08-8001-ab09-c811f2633c73"
                      isExternal
                    >
                      More on <b>Key</b> and <b>Ref</b> <IconExternalLink />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/learn/rendering-lists"
                      isExternal
                    >
                      <b>Keys</b> and Lists
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/learn/referencing-values-with-refs"
                      isExternal
                    >
                      <b>Refs</b> and values
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
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
                      What is the purpose of React’s memo function?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    The purpose of React.memo is to prevent unnecessary
                    re-renders of components, which can improve the
                    application's efficiency.
                  </Text>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/671cd960-2040-8001-b3c6-9502e248cd77"
                      isExternal
                    >
                      More on React Memo <IconExternalLink />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://react.dev/reference/react/memo"
                      isExternal
                    >
                      React Memo API
                      <IconReact
                        fill={"#009dc6"}
                        width={"1.3rem"}
                        height={"1.3rem"}
                      />
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
                      What are some tools for improved React Performance?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>
                      <Link
                        isExternal
                        href="https://github.com/welldone-software/why-did-you-render?tab=readme-ov-file"
                      >
                        Why did you render?
                      </Link>
                    </ListItem>
                    <ListItem>Lighthouse (Chrome DevTools)</ListItem>
                    <ListItem>
                      <Link
                        isExternal
                        href="https://github.com/webpack-contrib/webpack-bundle-analyzer"
                      >
                        Bundle Analyzer Tools (Webpack/CRA)
                      </Link>
                    </ListItem>
                  </UnorderedList>
                  <Text>...</Text>

                  <h3>
                    Why is it bad when a function is recreated on every
                    re-render?
                  </h3>
                  <Text>
                    <Link
                      href="https://chatgpt.com/share/66f57e1f-8da4-8001-b758-b4c20b4e2d72"
                      isExternal
                    >
                      The answer.
                    </Link>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardHeader>
            <Heading as="h2" size="lg">
              Security
            </Heading>
          </CardHeader>
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
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
                      What is cross-site scripting (XSS)?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={0}>
                    Cross-Site Scripting (XSS) is a type of security
                    vulnerability commonly found in web applications. It occurs
                    when an attacker injects malicious scripts, usually
                    JavaScript, into a trusted website. These scripts can then
                    be executed in the user’s browser, allowing the attacker to
                    steal sensitive information, manipulate the user interface,
                    or redirect users to malicious sites.
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
                      What types of XSS there is?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>There are three main types of XSS:</Text>
                  <ol className="list-aligh-left">
                    <li>
                      <b>Stored XSS (Persistent XSS)</b>: The malicious script
                      is permanently stored on the target server (in a database,
                      message board, etc.), and every time a user accesses the
                      page, the script is served to their browser. This can have
                      a wide impact if many users visit the infected page.
                    </li>
                    <li>
                      <b>Reflected XSS</b>: The malicious script is reflected
                      off a web server, typically through URL parameters or HTTP
                      headers. It’s then sent back to the user in the response
                      and executed by their browser. This type often relies on
                      social engineering, like getting users to click on a
                      malicious link.
                    </li>
                    <li>
                      <b>DOM-Based XSS</b>: This happens entirely on the client
                      side when JavaScript modifies the DOM without proper
                      validation, allowing attackers to inject scripts directly
                      in the browser without needing a server response.
                    </li>
                  </ol>
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
                      What are the prevention techniques against XSS?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>Here are a few technique we can use:</Text>
                  <ol className="list-aligh-left">
                    <li>
                      <b>Input Validation and Sanitization</b>: Ensure that all
                      input is{" "}
                      <Link
                        isExternal
                        href="https://github.com/cure53/DOMPurify"
                      >
                        validated and sanitized
                      </Link>{" "}
                      before it is rendered on the page.
                    </li>
                    <li>
                      <b>Escaping User Input</b>: Always escape user-generated
                      data when it is output in the HTML context.
                    </li>
                    <li>
                      <b>Content Security Policy (CSP)</b>: Set up a CSP header
                      to control which resources are allowed to load on a page.
                    </li>
                    <li>
                      <b>Encoding Outputs</b>: Encode any outputs from user
                      inputs to avoid unwanted script execution in the browser.
                    </li>
                  </ol>
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
                      In which ways does a web app get exposed to XSS?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Web applications are exposed to Cross-Site Scripting (XSS)
                    vulnerabilities in a few main ways:
                  </Text>
                  <ol className="list-aligh-left">
                    <li>
                      <b>User Input Fields</b>: Form fields where users can
                      submit information are common vectors. URL parameters are
                      often used by applications to retrieve data or customize
                      views.
                    </li>
                    <li>
                      <b>Dynamic Content Rendering</b>: (DOM manipulations) In
                      JavaScript-heavy apps (e.g., React, Vue, or vanilla JS),
                      manipulating the DOM dynamically without sanitizing inputs
                      can lead to XSS.
                    </li>
                    <li>
                      <b>Third-Party Resources and APIs</b>: Third-Party
                      Libraries, including third-party libraries or widgets
                      (e.g., ads, analytics scripts) may introduce
                      vulnerabilities if the scripts are compromised.
                    </li>
                  </ol>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6723983d-92f0-8001-a00f-4c9da2978677"
                      isExternal
                    >
                      More on XSS exposures
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
                      Other questions ...
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Web applications are exposed to Cross-Site Scripting (XSS)
                    vulnerabilities in a few main ways:
                  </Text>
                  <ol className="list-aligh-left">
                    <li>
                      What are some common security vulnerabilities in React
                      applications, and how would you mitigate them?
                    </li>
                    <li>
                      How can you prevent cross-site scripting (XSS) attacks in
                      a React app?
                    </li>
                    <li>
                      What is the importance of authentication and authorization
                      in React, and how can you implement them securely?
                    </li>

                    <li>
                      How can you secure API calls made from a React
                      application?
                    </li>

                    <li>
                      What are some best practices for securing state management
                      in React, especially when using tools like Redux?
                    </li>
                  </ol>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6723983d-92f0-8001-a00f-4c9da2978677"
                      isExternal
                    >
                      More on XSS exposures
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      {/* 

              <AccordionItem>
                <Heading>
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
                      *****Heading******
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>****** Body ******</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      *****Heading******
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>****** Body ******</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      *****Heading******
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>****** Body ******</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      *****Heading******
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>****** Body ******</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading>
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
                      *****Heading******
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>****** Body ******</AccordionPanel>
              </AccordionItem> */}

      {/* <Box className="row" marginBottom="10">
        <Accordion defaultIndex={[0]} allowToggle>
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
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box> */}

      {/* <Box className="row" marginBottom="10">
        <Accordion defaultIndex={[0]} allowToggle>
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
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>  */}
    </section>
  );
};

export default PageReactCoreConcepts;
