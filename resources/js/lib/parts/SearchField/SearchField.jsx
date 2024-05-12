import useDimension from "@/hooks/useDimension";
import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import PopupWidget from "../PopupWidget/PopupWidget";

const SearchField = ({ id, title, styles }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");

    const ref = useRef();
    const { width } = useDimension(ref);

    const handleKeyword = (e) => {
        if (e.target.value === "") {
            setKeyword("");
            setIsOpen(false);
            return;
        }
        setKeyword(e.target.value);
        if (isOpen === false) {
            setIsOpen(!isOpen);
        }
        return;
    };

    return (
        <React.Fragment>
            <label
                htmlFor={id}
                style={{
                    ...h4FontStyle,
                    color: AllColors.DarkGrey,
                    ...styles,
                }}
            >
                {title}
            </label>
            <TextField
                inputRef={ref}
                id={id}
                value={keyword}
                size="small"
                sx={{
                    ...styles,
                    zIndex: 1,
                }}
                onChange={(e) => handleKeyword(e)}
            />
            {isOpen && (
                <PopupWidget
                    keyword={keyword}
                    styles={{
                        width: `${width}px`,
                        position: "absolute",
                    }}
                    action={(a) => setKeyword(a)}
                    close={() => setIsOpen(false)}
                />
            )}
        </React.Fragment>
    );
};

export default SearchField;
