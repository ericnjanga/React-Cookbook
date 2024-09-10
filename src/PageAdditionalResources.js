import React from "react";
import {
  Heading,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
// 1. Import
import { Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const PageAdditionalResources = () => {
  const spacinfStyle = {
    // using string interpolation to set the margin
    marginBottom: `1.5rem`,
  };

  return (
    <>
      <div className="row">
        <Heading as="h1">Additional Resources</Heading>
      </div>

      <div className="row">
        <Heading as="h2">Rendering Lists</Heading>
        <List spacing={1}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
              isExternal
            >
              Map()
            </Link>{" "}
            allows you to create new arrays populated with the results of
            calling a transformation function on every element.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              href="https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays"
              isExternal
            >
              Rendering lists on official React docs website
            </Link>{" "}
            dives deeper into how to display multiple similar components from a
            collection of data, providing examples of both filtering and
            transformations.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              href="https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key"
              isExternal
            >
              React keys on official docs
            </Link>{" "}
            offers a comprehensive set of memotecnic rules to reinforce how to
            use keys properly.
          </ListItem>
        </List>
      </div>
      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Forms</Heading>
        <List spacing={1}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              color="purple.500"
              href="https://reactjs.org/docs/forms.html"
              isExternal
            >
              Forms from the official React docs
            </Link>{" "}
            illustrate some examples of how React deals with certain form fields
            compared to traditional HTML tags, like the text area, select and
            file input tags. It also showcases how to handle multiple inputs by
            leveraging event.target.name and the implications of using null as a
            value in a controlled input.
          </ListItem>

          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link color="purple.500" href="https://formik.org/" isExternal>
              Formik
            </Link>{" "}
            is the most popular open source form library for React. It saves you
            lots of time when building forms and offers a declarative, intuitive
            and adoptable paradigm.
          </ListItem>

          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              color="purple.500"
              href="https://github.com/jquense/yup"
              isExternal
            >
              Yup
            </Link>{" "}
            is an open-source library that integrates perfectly with Formik. It
            allows you to set all your form validation rules declaratively.
          </ListItem>

          <ListItem>
            <ListIcon as={MdCheckCircle} color="purple.500" />
            <Link
              color="purple.500"
              href="https://www.react-hook-form.com/"
              isExternal
            >
              React-hook-form
            </Link>{" "}
            is another popular library to easily manage your form state and
            validation rules.
          </ListItem>
        </List>
      </div>
      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">React Context</Heading>- [React.memo from the official
        React docs](https://reactjs.org/docs/react-api.html#reactmemo), an API
        that can be used in conjunction with Context Providers to prevent
        unnecessary re-renders in top-level components in the tree. - [useMemo
        from the official React
        docs](https://reactjs.org/docs/hooks-reference.html#usememo), a hook to
        guarantee referential equality on objects across rendering passes.
      </div>
      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">React Hooks</Heading>- The article on
        [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
        assignment describes how the destructuring assignment, which allows you
        to get values out of the array that gets returned when the useState hook
        is invoked, works in more detail. - [The read props inside the child
        component](https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component)
        link on the Beta version of React docs discusses how to use
        destructuring assignment to get values out of the props object. - The
        [useState reference on official React docs
        website](https://beta.reactjs.org/apis/react/useState#usestate) helps
        you understand how to work with this hook and some of the caveats
        involved. - The [useEffect reference on official React docs
        website](https://beta.reactjs.org/apis/react/useEffect#useeffect) helps
        you understand the syntax of this hook and goes into some depth to
        explain how to use and troubleshoot the useEffect hook.
      </div>
      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Rules of Hooks and Fetching Data with Hooks</Heading>
        <ul>
          <li>
            The{" "}
            <Link href="https://reactjs.org/docs/hooks-rules.html" isExternal>
              Rules of Hooks reading on Reactjs.org
            </Link>{" "}
            website gives you an overview of how to work with the hooks as
            recommended by the React Core team at Meta.
          </li>
          <li>
            The{" "}
            <Link
              href="https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects"
              isExternal
            >
              Fetching data with Effects
            </Link>{" "}
            article on React docs discusses fetching data using a few different
            approaches, including using async / await syntax.
          </li>
          <li>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
              isExternal
            >
              How to use promises
            </Link>{" "}
            is a resource that describes the "behind-the-scenes" of how data
            fetching works in greater depth.
          </li>
          <li>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
              isExternal
            >
              async function
            </Link>{" "}
            is a resource on MDN that discusses the use of the async and await
            keywords as a more recent way to handle API requests in JavaScript.
          </li>
        </ul>
      </div>
      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Advanced Hooks</Heading>
        <ul>
          <li>
            The{" "}
            <Link
              href="https://react.dev/reference/react/useReducer"
              isExternal
            >
              useReducer hook reference
            </Link>{" "}
            in the React docs discusses the basics of useReducer, along with
            specifying initial state and lazy initialization.
          </li>
          <li>
            The React docs also has a reference on{" "}
            <Link href="https://react.dev/reference/react/useRef" isExternal>
              using the useRef hook
            </Link>{" "}
            which is a great example of various options that are available when
            working with the useRef hook.
          </li>
          <li>
            The{" "}
            <Link
              href="https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks"
              isExternal
            >
              Reusing Logic with Custom Hooks
            </Link>{" "}
            reference in the React docs discusses the dynamics of custom hooks
            and provides a few practical examples to complement the theory
            behind them.
          </li>
        </ul>
      </div>

      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">JSX Deep Dive</Heading>
        <p>Here is a list of additional resources for JSX Deep Dive:</p>
        <ul>
          <li>
            <Link href="https://chakra-ui.com/" isExternal>
              Chakra-UI
            </Link>{" "}
            is an open-source component library that embraces all the concepts
            explained during this lesson, being a nice option if you would like
            to start your project with a set of atomic components that have been
            carefully designed with flexibility in mind, so that they can be
            customized as per your theme requirements.
          </li>
          <li>
            <Link
              href="https://kentcdodds.com/blog/compound-components-with-react-hooks"
              isExternal
            >
              Compound components with hooks
            </Link>{" "}
            is an article that illustrates how a combination of component
            composition, context and hooks can lead to a clean and concise
            component design.
          </li>
          <li>
            <Link href="https://reactjs.org/docs/fragments.html" isExternal>
              React Fragments
            </Link>{" "}
            from the official React docs illustrates how to group a list of
            React children without adding extra nodes to the DOM.
          </li>
        </ul>
      </div>

      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Reusing behaviour</Heading>
        <p>
          Here is a list of additional resources as you continue to explore
          Reusing Behavior:
        </p>
        <ul>
          <li>
            <Link href="https://github.com/downshift-js/downshift" isExternal>
              Downshift
            </Link>{" "}
            is a popular open-source library that implements an autocomplete,
            combo box or select experience using the render prop pattern.
          </li>
          <li>
            <Link href="https://reactjs.org/docs/render-props.html" isExternal>
              Render props
            </Link>{" "}
            from the official React docs.
          </li>
          <li>
            <Link
              href="https://reactjs.org/docs/higher-order-components.html"
              isExternal
            >
              Higher Order Components
            </Link>{" "}
            from the official React docs.
          </li>
          <li>
            <Link
              href="https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components"
              isExternal
            >
              Forwarding Refs
            </Link>{" "}
            from the official React docs showcases in detail how to forward refs
            in higher-order components, so that they are passed through
            properly.
          </li>
        </ul>
      </div>

      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Integrating tests with React Testing Library</Heading>
        <p>
          Here is a list of additional resources as you continue to explore
          Integration tests with React Testing Library:
        </p>
        <ul>
          <li>
            <Link
              href="https://testing-library.com/docs/react-testing-library/intro/"
              isExternal
            >
              React testing library
            </Link>{" "}
            official documentation.
          </li>
          <li>
            <Link
              href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
              isExternal
            >
              Continuous delivery
            </Link>{" "}
            is a great article from Atlassian that illustrates the differences
            between Continuous integration, delivery and deployment, and how
            they all tie together.
          </li>
          <li>
            <Link
              href="https://martinfowler.com/articles/practical-test-pyramid.html"
              isExternal
            >
              Practical test pyramid
            </Link>{" "}
            is an extensive article that dives into the importance of test
            automation, showing you which kind of tests you should be looking
            for in the different levels of the pyramid and providing practical
            examples on how those can be implemented.
          </li>
        </ul>
      </div>

      <div style={spacinfStyle}></div>

      <div className="row">
        <Heading as="h2">Popular external libraries</Heading>
        <ul>
          <li>
            <Link href="https://v2.chakra-ui.com/" isExternal>
              Chakra UI
            </Link>{" "}
            for layout, typography, ... UI libraries are a great way to speed up
            the development process. They provide a set of robust, well-tested
            and highly configurable pre-built components that you can use to
            create your applications.
          </li>
          <li>
            <Link href="https://formik.org/" isExternal>
              Formik
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/jquense/yup" isExternal>
              Yup
            </Link>{" "}
            for React forms. . The library takes care of the repetitive tasks of
            managing the state of the form, validation and submission, so you
            can focus on the business logic of your application.
          </li>
          <li>
            <Link href="#" isExternal>
              #
            </Link>
          </li>
          <li>
            <Link href="#" isExternal>
              #
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageAdditionalResources;
