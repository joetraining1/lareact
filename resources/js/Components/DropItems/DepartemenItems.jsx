import useSearchField from "@/hooks/useSearchField";
import { h4FontStyle } from "@/lib/constant/Styles";
import React from "react";

const DepartemenItems = ({ action }) => {
    const { dataset, setIsOpen, setKeyword } = useSearchField();

    if (dataset) {
        return dataset.map((item, index) => {
            return (
                <span
                    key={item.departemen_id}
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        action(item);
                        setKeyword(item.departemen_name);
                        return setIsOpen(false);
                    }}
                >
                    {item.departemen_name}
                </span>
            );
        });
    }
    return (
        <Typography
            sx={{
                fontFamily: h4FontStyle,
            }}
        >
            No Data. Please add some.
        </Typography>
    );
};

export default DepartemenItems;
