
import { useLocation } from "react-router-dom";
import { useMemo } from "react"; 

/**
 * Returns an array of segments from the page's url
 * Example: If the Url is http://localhost:3000/coding-patterns/react/component-composition
 * the function will return and array of 3 segments: [coding-patterns, react, component-composition]
 * @returns 
 */
const useRouteSegments = () => {
  const { pathname } = useLocation();  
  const segmentArray = useMemo(() => {
    // split the location pathname into an array and eliminate empty array cells
    return  pathname
      .split("/") // split the location pathname into an array and eliminate empty array cells
      .filter((item) => item !== ""); 
  }, [pathname]);

  return segmentArray;
};

export default useRouteSegments;