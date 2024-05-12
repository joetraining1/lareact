import React, { useEffect, useState } from "react";

const useDimension = (atRef) => {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();

    useEffect(() => {
        setHeight(atRef.current?.offsetHeight);
        setWidth(atRef.current?.offsetWidth);

        return;
    }, []);

    return {
        height,
        width,
    };
};

export default useDimension;
