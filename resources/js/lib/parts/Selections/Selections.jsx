import { TextField } from "@mui/material";
import React, { useState } from "react";

const Selections = () => {
    const [pick, setPicked] = useState("");
    return (
        <TextField
            variant="outlined"
            select
            sx={{
                width: "250px",
            }}
        >
            <option
                style={{
                    cursor: "pointer",
                }}
                onClick={(e) => setPicked(e.target.value)}
                key={"View"}
                value={"View"}
            >
                View
            </option>
            <option
                style={{
                    cursor: "pointer",
                }}
                onClick={(e) => setPicked(e.target.value)}
                key={"Edit"}
                value={"Edit"}
            >
                Edit
            </option>
            <option
                style={{
                    cursor: "pointer",
                }}
                onClick={(e) => setPicked(e.target.value)}
                key={"Delete"}
                value={"Delete"}
            >
                Delete
            </option>
        </TextField>
    );
};

export default Selections;
