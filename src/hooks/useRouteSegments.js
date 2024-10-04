
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { isEqual } from "lodash";

const useRouteSegments = () => {
  const location = useLocation();
  const [segmentArray, setSegmentArray] = useState([]);

  useEffect(() => {
    // split the location pathname into an array and eliminate empty array cells
    const newData = location.pathname
      .split("/") // split the location pathname into an array and eliminate empty array cells
      .filter((item) => item !== "");

    // Don't update the state unless the new and previous state are different
    setSegmentArray((prevArray) => {
      if (isEqual(prevArray, newData)) {
        return prevArray;
      }
      return newData;
    });

  }, [location.pathname]);

  return segmentArray;
};

export default useRouteSegments;