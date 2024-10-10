import React from "react";
import Switch from './Switch';
import Breadcrumbs from "../components/Breadcrumbs";
import MainNavigation from './MainNavigation/MainNavigation';
import { Box } from '@chakra-ui/react'; 
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const LayoutGlobal = () => {

  return (
    <Box> 
      <div className="container-fluid">
        <div className="row">
          <aside className="main-sidebar col-lg-3">
            <MainNavigation />
          </aside>

          <section className="main-content offset-lg-3 col-lg-9">
            <Breadcrumbs />
            <Switch></Switch>
 
            {/** The Outlet component will render the children routes */}
            <Outlet />

          </section>
        </div>
      </div>
    </Box>
  );
};

LayoutGlobal.displayName = '****LayoutGlobal';
export default LayoutGlobal;
