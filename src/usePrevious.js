import { useEffect, useRef } from "react";

function usePrevious(val) {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = val;
        console.log(' - ref.current = ', ref.current);
    }, [val]);

    return ref.current;
}

export default usePrevious;