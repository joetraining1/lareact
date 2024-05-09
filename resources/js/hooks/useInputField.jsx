import React, { useState } from "react";

const useInputField = ({ init }) => {
    const [value, setValue] = useState(init ? init : "");

    const changeValue = (params) => {
        return setValue(params);
    };

    return {
        value,
        changeValue,
    };
};

export default useInputField;
