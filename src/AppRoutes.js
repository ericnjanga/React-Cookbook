import React from "react";
import { Route, Routes } from "react-router-dom";

import PageHooks from "./pages/coding-patterns/PageHooks";
import PageForms from "./pages/coding-patterns/PageForms";
import PageComponentComposition from "./pages/coding-patterns/PageComponentComposition";
import PageDataFetching from "./pages/coding-patterns/PageDataFetching";
import PageDynamicJsx from "./pages/coding-patterns/PageDynamicJsx";
import ResourcesOverview from "./pages/additional-resources/PageOverview";
import PageHighOrderComponents from "./pages/coding-patterns/PageHighOrderComponents";
import PageCategoryLogicEncapsulation from "./pages/coding-patterns/PageCategoryLogicEncapsulation";
import PageRenderProps from "./pages/coding-patterns/PageRenderProps";
import PageReactInterviewQuestions from "./pages/knowledge-base/PageReactInterviewQuestions";
import PageHTMLCSSInterviewQuestions from "./pages/knowledge-base/PageHTMLCSSInterviewQuestions";
import PageJavascriptInterviewQuestions from "./pages/knowledge-base/PageJavascriptInterviewQuestions";
import PageHome from "./pages";
import PageCodingPatternsJs from "./pages/coding-patterns/javascript";
import PageCodingPatternsReact from "./pages/coding-patterns/react";

const AppRoutes = () => {
  return (
    <Routes>


<Route path="/coding-patterns/javascript" element={<PageCodingPatternsJs />} />

<Route path="/coding-patterns/react" element={<PageCodingPatternsReact />} />



      <Route path="/" element={<PageHome />} />
      <Route path="/hooks" element={<PageHooks />} />
      <Route path="/render-props" element={<PageRenderProps />} />
      <Route path="/forms" element={<PageForms />} />
      <Route
        path="/component-composition"
        element={<PageComponentComposition />}
      />
      <Route path="/data-fetching" element={<PageDataFetching />} />
      <Route
        path="/additional-resources/overview"
        element={<ResourcesOverview />}
      />
      <Route
        path="/high-order-components"
        element={<PageHighOrderComponents />}
      />
      <Route
        path="/category-logic-enpasulation"
        element={<PageCategoryLogicEncapsulation />}
      />
      <Route
        path="/additional-resources/overview"
        element={<PageCategoryLogicEncapsulation />}
      />
      <Route
        path="/knowledge-base/react"
        element={<PageReactInterviewQuestions />}
      />
      <Route
        path="/knowledge-base/html-css"
        element={<PageHTMLCSSInterviewQuestions />}
      />
      <Route
        path="/knowledge-base/javascript"
        element={<PageJavascriptInterviewQuestions />}
      />
    </Routes>
  );
};

export default AppRoutes;
