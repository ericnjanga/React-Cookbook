import { NavLink } from "react-router-dom";

const MenuReact = () => {
  const root = "/coding-patterns/react";
  return (
    <>
      <ul>
        <li>
          <NavLink to={`${root}/performance-patterns`}>
            Performance Patterns
          </NavLink>
        </li>
        <li>
          <NavLink to={`${root}/high-order-components`}>
            High Order Components (HOC)
          </NavLink>
        </li>
        <li>
          <NavLink to={`${root}/render-props`}>Render Props</NavLink>
        </li>
        <li>
          <NavLink to={`${root}/component-composition`}>
            Component Composition
          </NavLink>
        </li>
        <li>
          <NavLink to={`${root}/hooks`}>Hooks</NavLink>
        </li>
        <li>
          <NavLink to={`${root}/forms`}>Forms</NavLink>
        </li>
        <li>
          <NavLink to={`${root}/data-fetching`}>Data Fetching</NavLink>
        </li>
      </ul>
    </>
  );
};

export const MenuList = ({ name }) => {
  return (
    <>
      { name==='react coding patterns' && <MenuReact /> }
    </>
  );
};
