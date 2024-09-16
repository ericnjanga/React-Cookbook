import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageHooks from './PageHooks';
import PageForms from './PageForms';
import PageComponentComposition from './PageComponentComposition';
import PageDataFetching from './PageDataFetching';
import PageDynamicJsx from './PageDynamicJsx';
import PageAdditionalResources from './PageAdditionalResources';
import PageHighOrderComponents from './PageHighOrderComponents';
import PageCategoryLogicEncapsulation from './PageCategoryLogicEncapsulation';
import PageRenderProps from './PageRenderProps';
import PageReactInterviewQuestions from './PageReactInterviewQuestions';
import PageHTMLCSSInterviewQuestions from './PageHTMLCSSInterviewQuestions';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageDynamicJsx />} />
            <Route path="/hooks" element={<PageHooks />} />
            <Route path="/render-props" element={<PageRenderProps />} />
            <Route path="/forms" element={<PageForms />} />
            <Route path="/component-composition" element={<PageComponentComposition />} />
            <Route path="/data-fetching" element={<PageDataFetching />} />
            <Route path="/additional-resources" element={<PageAdditionalResources />} />
            <Route path="/high-order-components" element={<PageHighOrderComponents />} />
            <Route path="/category-logic-enpasulation" element={<PageCategoryLogicEncapsulation />} />
            <Route path="/additional-resources" element={<PageCategoryLogicEncapsulation />} />
            <Route path="/react-interview-questions" element={<PageReactInterviewQuestions />} />
            <Route path="/html-css-interview-questions" element={<PageHTMLCSSInterviewQuestions />} />
        </Routes>
    );
};

export default AppRoutes;
