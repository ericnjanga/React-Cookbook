import React from 'react';

const PageAdditionalResources = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `1.5rem`,
    };

    return (
        <>
            <div className="row">
                <h1>Additional Resources</h1>
            </div>
            
            <div className="row">
                <h2>Rendering Lists</h2> 
                <ul>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Map()</a> allows you to create new arrays populated with the results of calling a transformation function on every element.  
                    </li>
                    <li>
                        <a href="https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays" target="_blank">Rendering lists on official React docs website</a> dives deeper into how to display multiple similar components from a collection of data, providing examples of both filtering and transformations. 
                    </li>
                    <li>
                        <a href="https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key" target="_blank">React keys on official docs</a> offers a comprehensive set of memotecnic rules to reinforce how to use keys properly.
                    </li> 
                </ul>
            </div> 
            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h2>Forms</h2> 
                - [Forms from the official React docs](https://reactjs.org/docs/forms.html) illustrate some examples of how React deals with certain form fields compared to traditional HTML tags, like the text area, select and file input tags. It also showcases how to handle multiple inputs by leveraging event.target.name and the implications of using null as a value in a controlled input.
                - [Formik](https://formik.org/) is the most popular open source form library for React. It saves you lots of time when building forms and offers a declarative, intuitive and adoptable paradigm. 
                - [Yup](https://github.com/jquense/yup) is an open-source library that integrates perfectly with Formik. It allows you to set all your form validation rules declaratively.
                - [React-hook-form](https://github.com/jquense/yup) is another popular library to easily manage your form state and validation rules.
            </div> 
            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h2>React Context</h2> 
                - [React.memo from the official React docs](https://reactjs.org/docs/react-api.html#reactmemo), an API that can be used in conjunction with Context Providers to prevent unnecessary re-renders in top-level components in the tree. 
                - [useMemo from the official React docs](https://reactjs.org/docs/hooks-reference.html#usememo), a hook to guarantee referential equality on objects across rendering passes.
            </div> 
            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h2>React Hooks</h2> 
                - The article on [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) assignment describes how the destructuring assignment, which allows you to get values out of the array that gets returned when the useState hook is invoked, works in more detail. 
                - [The read props inside the child component](https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) link on the Beta version of React docs discusses how to use destructuring assignment to get values out of the props object. 
                - The [useState reference on official React docs website](https://beta.reactjs.org/apis/react/useState#usestate) helps you understand how to work with this hook and some of the caveats involved. 
                - The [useEffect reference on official React docs website](https://beta.reactjs.org/apis/react/useEffect#useeffect) helps you understand the syntax of this hook and goes into some depth to explain how to use and troubleshoot the useEffect hook. 
            </div> 
            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h2>Rules of Hooks and Fetching Data with Hooks</h2> 
                <ul>
                    <li>
                        The <a href="https://reactjs.org/docs/hooks-rules.html" target="_blank">Rules of Hooks reading on Reactjs.org</a> website gives you an overview of how to work with the hooks as recommended by the React Core team at Meta.  
                    </li>
                    <li>
                        The <a href="https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects" target="_blank">Fetching data with Effects</a> article on React docs discusses fetching data using a few different approaches, including using async / await syntax.  
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises" target="_blank">How to use promises</a> is a resource that describes the "behind-the-scenes" of how data fetching works in greater depth.  
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank">async function</a> is a resource on MDN that discusses the use of the async and await keywords as a more recent way to handle API requests in JavaScript.  
                    </li>
                </ul>
            </div> 
            <div style={spacinfStyle}></div>
 
            <div className="row">
                <h2>Advanced Hooks</h2> 
                <ul>
                    <li>
                        The <a href="https://react.dev/reference/react/useReducer" target="_blank">useReducer hook reference</a> in the React docs discusses the basics of useReducer, along with specifying initial state and lazy initialization. 
                    </li>
                    <li> 
                        The React docs also has a reference on <a href="https://react.dev/reference/react/useRef" target="_blank">using the useRef hook</a> which is a great example of various options that are available when working with the useRef hook.  
                    </li>
                    <li>
                        The <a href="https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks" target="_blank">Reusing Logic with Custom Hooks</a> reference in the React docs discusses the dynamics of custom hooks and provides a few practical examples to complement the theory behind them.
                    </li>
                </ul>
            </div>
  
            <div style={spacinfStyle}></div>

            <div className="row">
                <h2>JSX Deep Dive</h2>
                <p>Here is a list of additional resources for JSX Deep Dive:</p>
                <ul>
                    <li>
                        <a href="https://chakra-ui.com/" target="_blank">Chakra-UI</a> is an open-source component library that embraces all the concepts explained during this lesson, being a nice option if you would like to start your project with a set of atomic components that have been carefully designed with flexibility in mind, so that they can be customized as per your theme requirements. 
                    </li>
                    <li> 
                        <a href="https://kentcdodds.com/blog/compound-components-with-react-hooks" target="_blank">Compound components with hooks</a> is an article that illustrates how a combination of component composition, context and hooks can lead to a clean and concise component design.  
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/fragments.html" target="_blank">React Fragments</a> from the official React docs illustrates how to group a list of React children without adding extra nodes to the DOM.
                    </li>
                </ul>
            </div>
  
            <div style={spacinfStyle}></div>

            <div className="row">
                <h2>Reusing behaviour</h2>
                <p>Here is a list of additional resources as you continue to explore Reusing Behavior:</p>
                <ul>
                    <li>
                        <a href="https://github.com/downshift-js/downshift" target="_blank">Downshift</a> is a popular open-source library that implements an autocomplete, combo box or select experience using the render prop pattern.  
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/render-props.html" target="_blank">Render props</a> from the official React docs.  
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank">Higher Order Components</a> from the official React docs. 
                    </li>
                    <li>
                        <a href="https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components" target="_blank">Forwarding Refs</a> from the official React docs showcases in detail how to forward refs in higher-order components, so that they are passed through properly. 
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PageAdditionalResources;