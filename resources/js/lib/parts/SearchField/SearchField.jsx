import useDimension from "@/hooks/useDimension";
import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { TextField, Typography } from "@mui/material";
import React, { createContext, useEffect, useRef, useState } from "react";
import PopupWidget from "../PopupWidget/PopupWidget";
import { SectionDivider } from "@/Components/SectionContainer/SectionContainer";
import useGetFetch from "@/hooks/useGetFetch";
import ApiClient from "@/lib/services/ApiClient";
import KategoriItems from "@/Components/DropItems/KategoriItems";

export const SearchFieldContext = createContext({
    isOpen: Boolean,
    setIsOpen: () => {},
    setKeyword: () => {},
    dataset: [],
});

const SearchField = ({
    id,
    title,
    styles,
    popStyle,
    action,
    target = "",
    children,
    value = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState(value);
    const [dataset, setDataset] = useState([]);
    const [msg, setMsg] = useState("");

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

    useEffect(() => {
        if (target !== "" && keyword !== "") {
            const apireq = async () => {
                const req = await ApiClient.post(`${target}`, {
                    keyword: keyword,
                })
                    .then((res) => {
                        return res.data;
                    })
                    .catch((error) => {
                        console.log(error);
                        return;
                    });

                setDataset(req.data);
                return;
            };
            apireq();
            return;
        }
        return;
    }, [keyword]);

    return (
        <SearchFieldContext.Provider
            value={{
                dataset,
                isOpen,
                setIsOpen,
                setKeyword,
            }}
        >
            <SectionDivider
                styles={{
                    flexDirection: "column",
                    alignItems: "start",
                    position: "relative",
                    height: "fit-content",
                }}
            >
                {msg && (
                    <Typography
                        variant="body2"
                        sx={{
                            fontStyle: "italic",
                            color: "red",
                            ...h4FontStyle,
                        }}
                    >
                        {msg}
                    </Typography>
                )}
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
                        width: "100%",
                    }}
                    onChange={(e) => handleKeyword(e)}
                />
                {isOpen && (
                    <PopupWidget
                        styles={{
                            width: `${width}px`,
                            position: "absolute",
                        }}
                        close={() => setIsOpen(false)}
                    >
                        {children}
                    </PopupWidget>
                )}
            </SectionDivider>
        </SearchFieldContext.Provider>
    );
};

export default SearchField;
