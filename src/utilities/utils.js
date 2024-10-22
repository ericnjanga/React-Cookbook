

/** 
 * Used to "activate" a NavLink from 'react-router-com'. 
 * The NavLink's "className" property will retain the returned string if there is a route match.
 * */
export const setActiveClass = ({ isActive }) => (isActive ? "--active" : null);