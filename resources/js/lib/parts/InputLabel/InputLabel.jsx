import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputLabel = ({
    id,
    value = "",
    title,
    action,
    styles,
    props,
    labelStyle,
    type,
}) => {
    const [cvalue, setcValue] = useState(value);

    return (
        <React.Fragment>
            <label
                htmlFor={id}
                style={{
                    ...h4FontStyle,
                    color: AllColors.DarkGrey,
                    ...labelStyle,
                }}
            >
                {title}
            </label>
            <TextField
                sx={{ ...styles }}
                id={id}
                type={type}
                size="small"
                {...props}
                value={cvalue}
                onChange={(e) => {
                    setcValue(e.target.value);
                    if (action) {
                        action(e.target.value);
                    }
                    return;
                }}
                InputProps={{
                    style: {
                        border: "none",
                    },
                }}
            />
        </React.Fragment>
    );
};

export default InputLabel;
