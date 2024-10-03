import React from "react";
// import Switch from './Switch';
// import Nav from './Nav';
// import { Box } from '@chakra-ui/react'; 
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const LayoutCodingPatterns = () => {
  return ( 
    <div className="xxxx"> 
    {/** The Outlet component will render the children routes */}
    <Outlet />
    </div> 
  );
};

export default LayoutCodingPatterns;
