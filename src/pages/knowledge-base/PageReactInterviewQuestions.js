import React from "react";
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

const PageReactInterviewQuestions = () => {
  return (
    <section className="section-documentation">
      <Box className="row">
        <Heading as="h1">React Interview Questions</Heading>
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
                      Introduction
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>What is React?</h3>
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
                      time without reloading the page
                    </li>
                  </ul>

                  <hr></hr>

                  <h3>Why using React? Explain its benefits</h3>
                  <Text mb={0}>Developers use React for several reasons:</Text>
                  <ul className="list-align-left">
                    <li>
                      <b>Reusability:</b> Build components once, reuse
                      everywhere.
                    </li>
                    <li>
                      <b>Efficiency:</b> Fast updates via Virtual DOM.
                    </li>
                    <li>
                      <b>Simplicity:</b> Declarative syntax for easy
                      understanding.
                    </li>
                  </ul>

                  <hr></hr>
                  <h3>
                    How does React differs from other front-end frameworks like
                    Angular or Vue?
                  </h3>
                  <Text>
                    React differs from other front-end frameworks like Angular
                    and Vue in several key areas, including its philosophy,
                    architecture, and features. Below is a detailed comparison
                    between React, Angular, and Vue:
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
                          <Th>React</Th>
                          <Th>Angular</Th>
                          <Th>Vue</Th>
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
                          <Td>Built-in (Vuew-router)</Td>
                        </Tr>
                        <Tr>
                          <Td>Performance</Td>
                          <Td>Fast with Virtual DOM</Td>
                          <Td>Slower with change detection</Td>
                          <Td>Fast with Virtual DOM</Td>
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
                  <Text>...</Text>

                  <ul className="list-align-left">
                    <li><b>JSX</b>: Template syntax extension to JavaScript</li>
                    <li><b>Components</b>: Reusable building blocks of a React application</li>
                    <li><b>Virtual DOM</b>: ...</li>
                    <li>...</li>
                    <li>...</li>
                  </ul>

                  <footer>
                    <Link
                      href="https://chatgpt.com/share/67190ccb-7cbc-8001-b630-f59131e68254"
                      isExternal
                    >
                      More about React features
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
                  <Text>
                    Here's a list of the major React versions and a brief
                    description of the key updates introduced in each version:
                  </Text>

                  <List spacing={3} marginLeft="0" paddingLeft="0">
                    <ListItem>
                      <Badge colorScheme="purple">React 0.3</Badge>{" "}
                      <b>(July 2013) Initial release of React</b>: The first
                      public release of React by Meta. This version introduced
                      the basic concept of React components and the Virtual DOM.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 0.14</Badge>{" "}
                      <b>(October 2015) Separation of React and ReactDOM</b>:
                      React was split into two packages: react (for defining
                      components) and react-dom (for rendering components to the
                      DOM). Stateless Functional Components: Introduced
                      functional components that can be written as functions
                      (without state or lifecycle methods).
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 15.0</Badge>{" "}
                      <b>(April 2016) Improved DOM handling</b>: A major rewrite
                      of the ReactDOM implementation for better compatibility
                      with the latest HTML standards. Error handling: Improved
                      error messages for easier debugging.
                    </ListItem>

                    <Alert status="info">
                      <AlertIcon />
                      React Fiber: Complete internal rewrite
                    </Alert>

                    <ListItem>
                      <Badge colorScheme="purple">React 16.0</Badge>{" "}
                      <b>(September 2017) New Core Architecture ("Fiber")</b>:
                      Complete internal rewrite called React Fiber, which
                      improved rendering performance and enabled features like
                      time slicing.
                      <UnorderedList>
                        <ListItem>
                          <b>Error Boundaries:</b> Added the ability to catch
                          errors within components using componentDidCatch and
                          getDerivedStateFromError.{" "}
                        </ListItem>
                        <ListItem>
                          <b>Portals:</b> A new way to render children into a
                          DOM node outside of the parent component’s hierarchy.{" "}
                        </ListItem>
                        <ListItem>
                          <b>Fragments:</b> Introduced &lt;React.Fragment&gt; to
                          group a list of children without adding extra nodes to
                          the DOM.
                        </ListItem>
                      </UnorderedList>
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 16.3</Badge>{" "}
                      <b>(March 2018)</b>
                      <UnorderedList>
                        <ListItem>
                          <b>New Lifecycle Methods</b>: Introduced new lifecycle
                          methods such as getDerivedStateFromProps and
                          getSnapshotBeforeUpdate, while marking old ones like
                          componentWillMount, componentWillReceiveProps, and
                          componentWillUpdate as deprecated.
                        </ListItem>
                        <ListItem>
                          <b>Context API Update:</b> Revamped Context API,
                          allowing easier and more efficient sharing of global
                          data across components without prop drilling.
                        </ListItem>
                        <ListItem>
                          <b>React's Strict Mode was introduced</b> (development
                          tool designed to help you identify potential problems
                          in your React applications)
                        </ListItem>
                      </UnorderedList>
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 16.6</Badge>{" "}
                      <b>(October 2018) Suspense (for code-splitting)</b>:
                      Introduced React.Suspense for lazy-loading components with
                      React.lazy(), enabling efficient code-splitting.
                      Memoization with React.memo: Added a way to optimize
                      functional components by preventing unnecessary
                      re-renders. getDerivedStateFromError: Enhanced error
                      boundaries by allowing developers to capture errors in the
                      state.
                    </ListItem>

                    <Alert status="info">
                      <AlertIcon />
                      Major milestone: Introduction to React Hooks
                    </Alert>
                    <ListItem>
                      <Badge colorScheme="purple">React 16.8</Badge>{" "}
                      <b>(February 2019) Hooks</b>: Major milestone with the
                      introduction of React Hooks (useState, useEffect,
                      useContext, etc.), allowing functional components to have
                      state and other features previously available only in
                      class components.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 16.9</Badge>{" "}
                      <b>(August 2019) Concurrent Mode (Experimental)</b>:
                      Introduced Concurrent Mode, an experimental feature aimed
                      at improving the rendering of large UIs by breaking work
                      into smaller chunks. This mode was never officially
                      released in stable form. Improved Warnings: Added better
                      warnings for deprecated lifecycle methods and improper
                      usage of hooks. Async Act: Improved testing support with
                      asynchronous rendering via act() helper.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 16.13</Badge>{" "}
                      <b>(February 2020) Strict Mode Warning for Legacy APIs</b>
                      : React’s Strict Mode added more warnings for deprecated
                      APIs and side effects. Improved Compatibility: Performance
                      improvements and better compatibility with tools like
                      React DevTools.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 17.0</Badge>{" "}
                      <b>(October 2020) No New Features</b>: Focused on making
                      it easier to upgrade and support multiple React versions
                      on the same page. Improved gradual migration paths for
                      future React versions. Event Delegation Change: Moved the
                      event delegation from document to the React root, allowing
                      React to better coexist with other JS libraries or
                      frameworks. Simplified JSX Transform: With React 17, you
                      no longer need to import React to use JSX, reducing
                      boilerplate code.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 18.0</Badge>{" "}
                      <b>(March 2022) Concurrent Features</b>: Introduced new
                      concurrent rendering features, allowing React to work on
                      multiple tasks simultaneously for improved performance and
                      responsiveness. Automatic Batching: Improved how React
                      batches updates, even inside async code, resulting in
                      fewer re-renders. useTransition and startTransition: New
                      hooks for marking state updates as low-priority, helping
                      keep the UI responsive during high-priority updates.
                      Suspense for Data Fetching: Extended the Suspense
                      component to handle asynchronous data fetching and loading
                      states more effectively. Strict Mode Updates: Made Strict
                      Mode more aggressive to catch potential issues earlier
                      during development.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">React 18.x</Badge>{" "}
                      <b>(Ongoing Updates) Progressive Hydration</b>: Allows
                      React to progressively hydrate the page during server-side
                      rendering (SSR), improving performance on complex pages.
                      Server-Side Rendering (SSR) Improvements: Improved support
                      for concurrent rendering in SSR environments. Key Features
                      in React 18: Concurrent Rendering: For improved rendering
                      efficiency, focusing on ensuring the UI is responsive
                      during updates. useId: A new hook for generating unique
                      IDs in SSR. Improved SSR: Includes streaming server-side
                      rendering, improving initial page load time.
                    </ListItem>
                  </List>
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
                      Components
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>Explain the concept of components in React.</h3>
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

                  <Spacer height="2rem"></Spacer>

                  <h3>Functional vs Class components</h3>

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
                            JS functions taking props in params and returning
                            JSX.
                          </Td>
                          <Td>
                            ES6 classes extending React.Component. Return JSX
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

                  <h3>
                    What is the difference between controlled and uncontrolled
                    components in React?
                  </h3>
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

                  <Spacer height="2rem"></Spacer>

                  <h3>What is a higher-order component (HOC)?</h3>

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
                      Hooks
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>6. What are React Hooks?</h3>
                  <Text>
                    Hooks are functions that make it easier to manage state and
                    side effects directly inside functional components without
                    needing to refactor into class components (The functionality
                    was previously only available in class components until
                    Hooks came along in React 16.8).
                  </Text>
                  <Heading as="h6">Key React Hooks:</Heading>
                  <UnorderedList marginLeft=".5rem" paddingLeft="0">
                    <ListItem mb=".7rem">
                      <b>useState:</b> Allows state management to functional
                      components.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useEffect:</b> Allows side effects such as{" "}
                      <b>data fetching, subscriptions, or DOM manipulations</b>,
                      but keeps components pure by ensuring those effects happen
                      after the render.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useContext:</b> Allows for the easy flow of data down
                      the component tree without the need for{" "}
                      <b>props drilling</b>.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useReducer:</b> is a "super-powered" version of
                      useState, that deals effectively with{" "}
                      <b>complex state logic</b> or{" "}
                      <b>multiple state transitions</b> that depend on previous
                      states.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useMomo:</b> is used to <b>optimize performance</b> by
                      memoizing (or caching) the result of a computation so that
                      it only recalculates when necessary.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useCallback:</b> is used to <b>optimize performance</b>{" "}
                      by memoizing (or caching) a function definition so that it
                      doesn't get recreated on every render. This can be
                      particularly useful when passing functions to child
                      components, preventing unnecessary re-renders.
                    </ListItem>
                    <ListItem mb=".7rem">
                      <b>useRef:</b> is used to maintain a mutable reference to
                      a value that does not trigger re-renders when updated.
                    </ListItem>
                  </UnorderedList>
                  <br /> <br /> <br />
                  <h3>
                    Describe the purpose of hooks like useState, useEffect, and
                    others. Compare them with lifecycle methods in class
                    components.
                  </h3>
                  <Text>...</Text>
                  <h3>
                    8. What is useEffect used for in React? Discuss how
                    useEffect is used for handling side effects, such as data
                    fetching, subscriptions, or DOM manipulations.
                  </h3>
                  <Text>...</Text>
                  <h3>What are Custom Hooks? When do we use them?</h3>
                  <Text>...</Text>
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
                      State management &amp; props
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>
                    10. How does React handle state management? Discuss the use
                    of local component state, global state with Context API, and
                    external libraries like Redux.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    7. What is useState in React? Explain how to use the
                    useState hook to manage state in a functional component.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    11. What is the Context API, and when would you use it?
                    Explain how Context API can be used for passing global data
                    without prop drilling.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    12. What is Prop Drilling, and how can you avoid it? Explain
                    the problem of passing data through many components and how
                    Context API or Redux can prevent it.
                  </h3>
                  <Text>...</Text>

                  {/* <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3>
                  <Text>...</Text>

                  <h3>***</h3> */}
                  <Text>...</Text>
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
                      Advanced State management with Redux
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
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
                      Routes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
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
                      Performance
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>Here are several tool for improved React Performance</h3>
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

                  <h3>Explain how the useMemo hook helps with performance</h3>
                  <Text>...</Text>

                  <h3>Explain how the useCall hook helps with performance</h3>
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
                  <UnorderedList className="list-align-left" mb="10">
                    <ListItem>
                      <Link
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
                        isExternal
                      >
                        Document Object Model
                      </Link>
                    </ListItem>
                    <ListItem>
                      Programming interface that represents the web document as
                      nodes and objects
                    </ListItem>
                    <ListItem>
                      Allows programming languages such as JS to manipulate the
                      web document
                    </ListItem>
                  </UnorderedList>

                  <Text>
                    The DOM is not a programming language, but without it, the
                    JavaScript language wouldn't have any model or notion of web
                    pages, HTML documents, SVG documents, and their component
                    parts.
                  </Text>
                  <Text>
                    The DOM is not part of the JavaScript language, but is
                    instead a Web API used to build websites. It was designed to
                    be independent of any particular programming language (can
                    be implemented in Python too).
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
                      What is the virtual DOM?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList className="list-align-left" mb="10">
                    <ListItem>
                      <Link
                        href="https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
                        isExternal
                      >
                        Programming concept
                      </Link>
                    </ListItem>
                    <ListItem>
                      Keeps an "ideal" or virtual representation of the UI in
                      memory
                    </ListItem>
                    <ListItem>
                      Syncs React elements with the "reat" DOM (
                      <Link
                        href="https://legacy.reactjs.org/docs/reconciliation.html"
                        isExternal
                      >
                        Reconciliation process
                      </Link>
                      )
                    </ListItem>
                  </UnorderedList>

                  <h2>
                    4. What is the Virtual DOM, and how does it work in React?
                    Discuss the role of the virtual DOM in improving performance
                    by updating only the changed parts of the real DOM.
                  </h2>

                  <Divider />
                  <HStack spacing={4}>
                    <Heading as="h3" size="sm" marginBottom="0">
                      Important readings:
                    </Heading>
                    <Text marginBottom="0">
                      <Link
                        href="https://react.dev/learn/preserving-and-resetting-state"
                        isExternal
                      >
                        Preserving and Resetting State
                      </Link>
                      {", "}
                      <Link
                        href="https://legacy.reactjs.org/docs/reconciliation.html"
                        isExternal
                      >
                        Reconciliation
                      </Link>
                    </Text>
                  </HStack>
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
                      What is the difference between the the real DOM and the
                      virtual DOM?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    The real DOM and virtual DOM differ in their <b>nature</b>,{" "}
                    <b>interaction</b>, and <b>update</b> the UI.
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
                          <Td>Is an API</Td>
                          <Td>Is a coding pattern</Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b>NATURE</b>
                          </Td>
                          <Td>Represents the document as nodes and objects</Td>
                          <Td>
                            Is a copy of the document (virtual representation)
                            that is kept in memory
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b>INTERRACTIONS</b> such as <b>form submit</b> or{" "}
                            <b>link navigation</b>
                          </Td>
                          <Td>Trigger page reload</Td>
                          <Td>
                            <b>Do not</b> trigger page reload
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b>UI UPDATES</b> manipulations
                          </Td>
                          <Td>
                            Have <b>direct effect</b> on the document
                          </Td>
                          <Td>
                            Have <b>NO direct effect</b> on the document, and
                            are only applied <b>after</b> the{" "}
                            <Link
                              href="https://legacy.reactjs.org/docs/reconciliation.html"
                              isExternal
                            >
                              Reconciliation
                            </Link>{" "}
                            process is performed by{" "}
                            <Link
                              href="https://legacy.reactjs.org/docs/react-dom.html"
                              isExternal
                            >
                              ReactDOM
                            </Link>
                            .
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <Alert status="info">
                    <AlertIcon />
                    <Text margin="0">
                      <b>NOTE:</b> The reconciliation process is also called
                      "diffing".
                    </Text>
                  </Alert>
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
              <AccordionItem className="....">
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
                            elements (often using JSX).
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Creation/Type</Td>
                          <Td>
                            Produced by JSX syntax, which gets transpiled into
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
                      19. How does reconciliation work in React? Describe
                      React’s reconciliation process for efficiently updating
                      the DOM.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>....</Text>

                  <Divider />
                  <HStack spacing={4}>
                    <Heading as="h3" size="sm" marginBottom="0">
                      Important readings:
                    </Heading>
                    <Text marginBottom="0">
                      <Link
                        href="https://react.dev/learn/preserving-and-resetting-state"
                        isExternal
                      >
                        Preserving and Resetting State
                      </Link>
                      {", "}
                      <Link
                        href="https://legacy.reactjs.org/docs/reconciliation.html"
                        isExternal
                      >
                        Reconciliation
                      </Link>
                    </Text>
                  </HStack>
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
                      15. What is lazy loading in React, and how can it improve
                      performance? Discuss the concept of code-splitting and
                      dynamic imports using React’s lazy() and Suspense.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                      16. What are error boundaries in React? Explain how error
                      boundaries help catch JavaScript errors in a component
                      tree and provide a fallback UI.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                      17. What is the difference between a key and ref in React?
                      Discuss the purpose of key in lists to ensure efficient
                      rendering and ref to access DOM nodes or component
                      instances.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                      18. What is the purpose of React’s memo function? Explain
                      how React.memo optimizes performance by memoizing
                      functional components to prevent unnecessary re-renders.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                      20. How do you optimize performance in a React
                      application? Discuss techniques such as lazy loading, code
                      splitting, memoization, using PureComponent or React.memo,
                      and avoiding unnecessary re-renders.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      {/* --- Template ---*/}
      <Box className="row" marginBottom="10">
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
      </Box>

      <Box className="row" marginBottom="10">
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
      </Box>

      <Box className="row" marginBottom="10">
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
      </Box>

      <Box className="row" marginBottom="10">
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
      </Box>
      {/* --- Template ---*/}
    </section>
  );
};

export default PageReactInterviewQuestions;
