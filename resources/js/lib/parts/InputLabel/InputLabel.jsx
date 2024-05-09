import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputLabel = ({ id, value, title, action }) => {
    const [cvalue, setcValue] = useState(value);

    return (
        <React.Fragment>
            <label
                htmlFor={id}
                style={{
                    ...h4FontStyle,
                    color: AllColors.DarkGrey,
                }}
            >
                {title}
            </label>
            <TextField
                id={id}
                size="small"
                value={cvalue}
                onChange={(e) => {
                    setcValue(e.target.value);
                    if (action) {
                        action(e.target.value);
                    }
                    return;
                }}
            />
        </React.Fragment>
    );
};

export default InputLabel;
