import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  CardHeader,
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
                  <Text>
                    React is a JavaScript library for building user interfaces,
                    particularly for single-page applications. It allows
                    developers to create large, complex applications where data
                    changes over time without reloading the page. React was
                    developed by Meta and is maintained as an open-source
                    project.
                  </Text>
                  <br />
                  <h3>Why using React? Explain its benefits</h3>
                  <Text>Developers use React for several reasons:</Text>
                  <UnorderedList>
                    <ListItem>
                      <b>Reusability:</b> Build components once, reuse
                      everywhere.
                    </ListItem>
                    <ListItem>
                      <b>Efficiency:</b> Fast updates via Virtual DOM.
                    </ListItem>
                    <ListItem>
                      <b>Simplicity:</b> Declarative syntax for easy
                      understanding.
                    </ListItem>
                    <ListItem>
                      <b>Scalability:</b> Component architecture makes scaling
                      easy.
                    </ListItem>
                    <ListItem>
                      <b>Cross-platform development</b> with React Native.
                    </ListItem>
                    <ListItem>
                      <b>Community:</b> Large ecosystem and developer tools.
                    </ListItem>
                    <ListItem>
                      <b>SEO Benefits:</b> With server-side rendering (with
                      NextJS), React improves SEO capabilities.
                    </ListItem>
                    <ListItem>
                      <b>Ease of Learning and Use</b> for JavaScript developers.
                    </ListItem>
                  </UnorderedList>
                  <br />
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
                    <Table size="sm">
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
                          <Td>Learning Curve</Td>
                          <Td>Moderate (with JSX & Hooks)</Td>
                          <Td>Steep (with TypeScript & RxJS)</Td>
                          <Td>Easy to moderate</Td>
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
                          <Td>Vuex (official)</Td>
                        </Tr>
                        <Tr>
                          <Td>Performance</Td>
                          <Td>Fast with Virtual DOM</Td>
                          <Td>Slower with change detection</Td>
                          <Td>Fast with Virtual DOM</Td>
                        </Tr>
                        <Tr>
                          <Td>Community</Td>
                          <Td>Largest (Facebook support)</Td>
                          <Td>Large (Google support)</Td>
                          <Td>Growing (independent)</Td>
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
                      Features
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>
                    2. What are the main features of React? Discuss features
                    like JSX, components, virtual DOM, state management, and
                    hooks.
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
                  <h3>
                    5. Explain the concept of components in React. Differentiate
                    between functional and class components and how they
                    contribute to the modular structure of a React app.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    What is the difference between controlled and uncontrolled
                    components in React? Discuss how controlled components have
                    their state controlled by React, while uncontrolled
                    components rely on the DOM.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    13. What are higher-order components (HOC)? Discuss the
                    concept of HOCs, which allow for reusing component logic.
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
                      Hooks
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <h3>
                    6. What are React Hooks? Describe the purpose of hooks like
                    useState, useEffect, and others. Compare them with lifecycle
                    methods in class components.
                  </h3>
                  <Text>...</Text>

                  <h3>
                    8. What is useEffect used for in React? Discuss how
                    useEffect is used for handling side effects, such as data
                    fetching, subscriptions, or DOM manipulations.
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

                  <h3>What is the difference between relative and absolute paths?
                  </h3>
                  <Text>
                    In the context of Single Page Applications (SPAs), relative and absolute paths refer to how routes are structured and how they are resolved within the app.

                    1. Relative Paths
                    Relative paths are defined in relation to the current route.

                    They don't start with a slash (/), meaning the navigation will happen based on the current route or parent route.

                    Example:

                    Current route: /users/profile
                    Relative path: settings
                    Resulting path: /users/profile/settings
                    In this case, the settings route is appended to the current route /users/profile.

                    2. Absolute Paths
                    Absolute paths start with a leading slash (/) and are resolved from the root of the application, ignoring the current route.

                    Example:

                    Current route: /users/profile
                    Absolute path: /settings
                    Resulting path: /settings
                    In this case, the route navigation jumps directly to /settings, regardless of the current route.

                    Key Differences:
                    Relative paths are context-sensitive, relying on the current URL.
                    Absolute paths always refer to the same location from the root of the app.
                    In an SPA, understanding these differences helps to manage navigation based on the application's routing hierarchy.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              {/* <AccordionItem>
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
                  <Text>
                    <Link
                      href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
                      isExternal
                    >
                      The DOM
                    </Link>{" "}
                    (Document Object Model) is a programming interface that
                    represents the web document as nodes and objects; so that
                    programming languages such as JavaScript can manipulate it.
                  </Text>
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
                  <Text>
                    <Link
                      href="https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
                      isExternal
                    >
                      The virtual DOM (VDOM)
                    </Link>{" "}
                    is a programming concept where an ideal, or “virtual”,
                    representation of a UI is kept in memory and synced with the
                    “real” DOM by a library such as{" "}
                    <Link
                      href="https://legacy.reactjs.org/docs/react-dom.html"
                      isExternal
                    >
                      ReactDOM
                    </Link>
                    . This process is called{" "}
                    <Link
                      href="https://legacy.reactjs.org/docs/reconciliation.html"
                      isExternal
                    >
                      Reconciliation
                    </Link>
                    .
                  </Text>

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
                      What is the difference between the the virtual DOM and the
                      real DOM?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    Virtual DOM and the real DOM differ in how they interact
                    with and update the UI.
                  </Text>

                  <TableContainer>
                    <Table size="md" variant="stripped" whiteSpace="wrap">
                      <Thead>
                        <Tr>
                          <Th>The DOM</Th>
                          <Th>Virtual DOM</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Is an API</Td>
                          <Td>Is a coding pattern</Td>
                        </Tr>
                        <Tr>
                          <Td>Represents the document as nodes and objects</Td>
                          <Td>
                            Is a virtual representation/copy of the document,
                            and is kept in memory
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            Page reload is triggered by ineractions such as form
                            submit or link navigation
                          </Td>
                          <Td>
                            Page reload <b>IS NOT</b> triggered by ineractions
                            such as form submit or link navigation
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            Manipulations have <b>direct effect</b> on the
                            document
                          </Td>
                          <Td>
                            Manipulations have <b>NO direct effect</b> on the
                            document, and are only applied <b>after</b> the{" "}
                            <Link
                              href="https://legacy.reactjs.org/docs/reconciliation.html"
                              isExternal
                            >
                              Reconciliation
                            </Link>{" "}
                            process performed by{" "}
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
                  <Text marginBottom="0">
                    <Link
                      href="https://legacy.reactjs.org/docs/introducing-jsx.html"
                      isExternal
                    >
                      JSX
                    </Link>{" "}
                    is short for JavaScript-XML. It is a template syntax
                    extension to JavaScript that looks like HTML, but under the
                    hood is still JavaScript. JSX describes what the UI should
                    look like and produces React “elements”.
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
                      How is JSX working?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <OrderedList marginLeft=".5rem" paddingLeft="0">
                    <ListItem mb=".7rem">
                      JSX let you write a code that looks like HTML, but that is
                      still JavaScript under the hood.
                      <Code>
                        const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      Within JSX, you can embed JavaScript expressions inside
                      curly braces &#123;&#125;. This allows dynamic content to
                      be inserted into your UI:
                      <Code>
                        const val = "John"; <br />
                        const element = &lt;h1&gt;Hello,
                        &#123;val&#125;!&lt;/h1&gt;;
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      Because browsers don't understand JSX natively, it is
                      transpiled into regular JavaScript by compilers like
                      Babel.
                      <Code>
                        const element = React.createElement('h1', null, 'Hello,
                        John!');
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      The call to{" "}
                      <Badge colorScheme="purple">React.createElement</Badge>{" "}
                      produces a React element, which is a plain JavaScript
                      object that represents a DOM node. For example:
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
                      That React element is then stored in the virtual DOM.
                    </ListItem>
                    <ListItem mb=".7rem">
                      The actual conversion from the React element (virtual DOM)
                      to real HTML occurs when{" "}
                      <Badge colorScheme="purple">ReactDOM.render()</Badge> is
                      called:
                      <Code>
                        ReactDOM.render(element,
                        document.getElementById('root'));
                      </Code>
                    </ListItem>
                    <ListItem mb=".7rem">
                      <Badge colorScheme="purple">ReactDOM.render()</Badge>{" "}
                      takes the virtual DOM element (the element in this case)
                      and creates actual DOM nodes in the browser, which results
                      in the rendered HTML:
                      <Code>&lt;h1&gt;Hello, John!&lt;/h1&gt;</Code>
                    </ListItem>
                  </OrderedList>
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
                      Why is JSX useful?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
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
                      What is the difference between an element and a component?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  An element is a JavaScript object created by JSX, whereas a
                  component is a function that returns an element.
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
