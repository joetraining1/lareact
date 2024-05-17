import useSearchField from "@/hooks/useSearchField";
import { h4FontStyle } from "@/lib/constant/Styles";
import { Typography } from "@mui/material";
import React from "react";

const ProductItems = () => {
    const { dataset, setIsOpen, setKeyword } = useSearchField();

    if (dataset) {
        return dataset.map((item, index) => {
            return (
                <span
                    key={item.product_id}
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        action(item);
                        setKeyword(item.product_name);
                        return setIsOpen(false);
                    }}
                >
                    {item.product_name}
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

export default ProductItems;
