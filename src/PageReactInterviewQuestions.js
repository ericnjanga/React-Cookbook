import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Badge
} from "@chakra-ui/react";
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
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const PageReactInterviewQuestions = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">React Interview Questions</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md">
          <CardBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <Heading>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      React history and majort updates
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text>
                    Here's a list of the major React versions and a brief
                    description of the key updates introduced in each version:
                  </Text>

                  <List spacing={3}>
                    <ListItem> 
                      <Badge colorScheme='purple'>React 0.3</Badge> <b>(July 2013) Initial release of React</b>: The
                      first public release of React by Facebook. This version
                      introduced the basic concept of React components and the
                      Virtual DOM.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme='purple'>React 0.14</Badge> <b>(October 2015) Separation of React and
                      ReactDOM</b>: React was split into two packages: react (for
                      defining components) and react-dom (for rendering
                      components to the DOM). Stateless Functional Components:
                      Introduced functional components that can be written as
                      functions (without state or lifecycle methods).
                    </ListItem>
                    <ListItem>
                    <Badge colorScheme='purple'>React 15.0</Badge> <b>(April 2016) Improved DOM handling</b>: A major
                      rewrite of the React DOM implementation for better
                      compatibility with the latest HTML standards. Error
                      handling: Improved error messages for easier debugging.
                    </ListItem>
                    <ListItem> 
                    <Badge colorScheme='purple'>React 16.0</Badge> <b>(September 2017) New Core Architecture
                      ("Fiber")</b>: Complete internal rewrite called React Fiber,
                      which improved rendering performance and enabled features
                      like time slicing. Error Boundaries: Added the ability to
                      catch errors within components using componentDidCatch and
                      getDerivedStateFromError. Portals: A new way to render
                      children into a DOM node outside of the parent component’s
                      hierarchy. Fragments: Introduced &lt;React.Fragment&gt; to
                      group a list of children without adding extra nodes to the
                      DOM.
                    </ListItem>
                    <ListItem> 
                    <Badge colorScheme='purple'>React 16.3</Badge> <b>(March 2018) New Lifecycle Methods</b>:
                      Introduced new lifecycle methods such as
                      getDerivedStateFromProps and getSnapshotBeforeUpdate,
                      while marking old ones like componentWillMount,
                      componentWillReceiveProps, and componentWillUpdate as
                      deprecated. Context API Update: Revamped Context API,
                      allowing easier and more efficient sharing of global data
                      across components without prop drilling.
                    </ListItem>
                    <ListItem> 
                    <Badge colorScheme='purple'>React 16.6</Badge> <b>(October 2018) Suspense (for
                      code-splitting)</b>: Introduced React.Suspense for
                      lazy-loading components with React.lazy(), enabling
                      efficient code-splitting. Memoization with React.memo:
                      Added a way to optimize functional components by
                      preventing unnecessary re-renders.
                      getDerivedStateFromError: Enhanced error boundaries by
                      allowing developers to capture errors in the state.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      7. React 16.8 (February 2019) Hooks: Major milestone with
                      the introduction of React Hooks (useState, useEffect,
                      useContext, etc.), allowing functional components to have
                      state and other features previously available only in
                      class components.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      8. React 16.9 (August 2019) Concurrent Mode
                      (Experimental): Introduced Concurrent Mode, an
                      experimental feature aimed at improving the rendering of
                      large UIs by breaking work into smaller chunks. This mode
                      was never officially released in stable form. Improved
                      Warnings: Added better warnings for deprecated lifecycle
                      methods and improper usage of hooks. Async Act: Improved
                      testing support with asynchronous rendering via act()
                      helper.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      9. React 16.13 (February 2020) Strict Mode Warning for
                      Legacy APIs: React’s Strict Mode added more warnings for
                      deprecated APIs and side effects. Improved Compatibility:
                      Performance improvements and better compatibility with
                      tools like React DevTools.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      10. React 17.0 (October 2020) No New Features: Focused on
                      making it easier to upgrade and support multiple React
                      versions on the same page. Improved gradual migration
                      paths for future React versions. Event Delegation Change:
                      Moved the event delegation from document to the React
                      root, allowing React to better coexist with other JS
                      libraries or frameworks. Simplified JSX Transform: With
                      React 17, you no longer need to import React to use JSX,
                      reducing boilerplate code.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      <b>React 18.0</b> (March 2022) Concurrent Features:
                      Introduced new concurrent rendering features, allowing
                      React to work on multiple tasks simultaneously for
                      improved performance and responsiveness. Automatic
                      Batching: Improved how React batches updates, even inside
                      async code, resulting in fewer re-renders. useTransition
                      and startTransition: New hooks for marking state updates
                      as low-priority, helping keep the UI responsive during
                      high-priority updates. Suspense for Data Fetching:
                      Extended the Suspense component to handle asynchronous
                      data fetching and loading states more effectively. Strict
                      Mode Updates: Made Strict Mode more aggressive to catch
                      potential issues earlier during development.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      <b>React 18.x</b> (Ongoing Updates) Progressive Hydration:
                      Allows React to progressively hydrate the page during
                      server-side rendering (SSR), improving performance on
                      complex pages. Server-Side Rendering (SSR) Improvements:
                      Improved support for concurrent rendering in SSR
                      environments. Key Features in React 18: Concurrent
                      Rendering: For improved rendering efficiency, focusing on
                      ensuring the UI is responsive during updates. useId: A new
                      hook for generating unique IDs in SSR. Improved SSR:
                      Includes streaming server-side rendering, improving
                      initial page load time.
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md">
          <Heading as='h2' size='lg'>The DOM</Heading>
          <CardBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
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
                      The DOM (Document Object Model)
                    </Link>{" "}
                    is a programming interface that allows web documents to be
                    manipulated by programming languages such as JavaScript and
                    CSS.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
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
            </Accordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
              <AccordionButton>
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
        <Card shadow="md">
          <CardBody>
            <Heading size="md">
              What is the difference between the the virtual DOM and the real
              DOM?
            </Heading>
            <Text>
              Virtual DOM and the real DOM differ in how they interact with and
              update the UI.
            </Text>

            <TableContainer>
              <Table size="md" variant="stripped" whiteSpace="wrap">
                <Thead>
                  <Tr>
                    <Th>virtual DOM</Th>
                    <Th>real DOM</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Cannot directly update the HTML</Td>
                    <Td>Directly updates and manipulates the HTML</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Acts as a copy of the real DOM, which can be frequently
                      manipulated and updated without a page refresh
                    </Td>
                    <Td>
                      Creates a new DOM/full repaint (or page refrensh) if it's
                      updated
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Is more of a pattern than a specific technology</Td>
                    <Td>
                      Is an object-based representation of an HTML document + an
                      interface for manipulating that object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Synced with the real DOM by 'react-dom'</Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <Alert status="info">
              <AlertIcon />
              <Text>
                <b>The key difference is "Diffing":</b> The virtual DOM looks at
                the difference between the current versus the previous state of
                the DOM and update the difference rather than updating the
                entire page.
              </Text>
            </Alert>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md">
          <CardBody>
            <Heading size="md">What is JSX?</Heading>
            <Text marginBottom="10">
              Short for JavaScript XML,{" "}
              <Link
                href="https://legacy.reactjs.org/docs/introducing-jsx.html"
                isExternal
              >
                JSX
              </Link>{" "}
              is a template syntax extension to JavaScript. It describes what
              the UI should look like, it produces React “elements”, it looks
              like HTML, but is not HTML.
            </Text>

            <Heading size="md">
              What is the difference between an element and a component?
            </Heading>
            <Text marginBottom="10">
              An element is a JavaScript object created by JSX, whereas a
              component is a function that returns an element.
            </Text>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md">
          <CardBody>
            <Heading size="md">Other questions to explore</Heading>
            1. What is React, and why use it? Explain the benefits of using
            React and how it differs from other front-end frameworks like
            Angular or Vue. 2. What are the main features of React? Discuss
            features like JSX, components, virtual DOM, state management, and
            hooks. 3. What is JSX, and why is it used in React? Explain how JSX
            allows writing HTML in JavaScript and why it is useful. 4. What is
            the Virtual DOM, and how does it work in React? Discuss the role of
            the virtual DOM in improving performance by updating only the
            changed parts of the real DOM. 5. Explain the concept of components
            in React. Differentiate between functional and class components and
            how they contribute to the modular structure of a React app. 6. What
            are React Hooks? Describe the purpose of hooks like useState,
            useEffect, and others. Compare them with lifecycle methods in class
            components. 7. What is useState in React? Explain how to use the
            useState hook to manage state in a functional component. 8. What is
            useEffect used for in React? Discuss how useEffect is used for
            handling side effects, such as data fetching, subscriptions, or DOM
            manipulations. 9. What is the difference between controlled and
            uncontrolled components in React? Discuss how controlled components
            have their state controlled by React, while uncontrolled components
            rely on the DOM. 10. How does React handle state management? Discuss
            the use of local component state, global state with Context API, and
            external libraries like Redux. 11. What is the Context API, and when
            would you use it? Explain how Context API can be used for passing
            global data without prop drilling. 12. What is Prop Drilling, and
            how can you avoid it? Explain the problem of passing data through
            many components and how Context API or Redux can prevent it. 13.
            What are higher-order components (HOC)? Discuss the concept of HOCs,
            which allow for reusing component logic. 14. What is React Router,
            and how does it work? Explain routing in a React application and how
            React Router is used to manage navigation. 15. What is lazy loading
            in React, and how can it improve performance? Discuss the concept of
            code-splitting and dynamic imports using React’s lazy() and
            Suspense. 16. What are error boundaries in React? Explain how error
            boundaries help catch JavaScript errors in a component tree and
            provide a fallback UI. 17. What is the difference between a key and
            ref in React? Discuss the purpose of key in lists to ensure
            efficient rendering and ref to access DOM nodes or component
            instances. 18. What is the purpose of React’s memo function? Explain
            how React.memo optimizes performance by memoizing functional
            components to prevent unnecessary re-renders. 19. How does
            reconciliation work in React? Describe React’s reconciliation
            process for efficiently updating the DOM. 20. How do you optimize
            performance in a React application? Discuss techniques such as lazy
            loading, code splitting, memoization, using PureComponent or
            React.memo, and avoiding unnecessary re-renders.
          </CardBody>
        </Card>
      </Box>

      {/* --- Template ---*/}
      <Box className="row" marginBottom="10">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
              <AccordionButton>
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
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
              <AccordionButton>
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
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
              <AccordionButton>
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
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
              <AccordionButton>
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
    </>
  );
};

export default PageReactInterviewQuestions;
