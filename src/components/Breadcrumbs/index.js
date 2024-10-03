import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

/**
 *
 * @returns TODO:
 * - I must complete the React Router training before finishing up this component:
 * https://www.coursera.org/learn/learn-react-router-6/home/module/1
 */

const Breadcrumbs = () => {
  const location = useLocation();

  // console.log();
  const crumbs = location.pathname
    .split("/")
    .filter((item) => item !== "")
    .map((item, index, array) => {
      return (
        <BreadcrumbItem key={index}>
          {index === array.length - 1 ? (
            <span>{item}</span>
          ) : (
            <BreadcrumbLink as={NavLink} to={item}>
              {item}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      );
    });

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/">
          Welcome
        </BreadcrumbLink>
      </BreadcrumbItem>
      {crumbs}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
