import useSearchField from "@/hooks/useSearchField";
import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { Typography } from "@mui/material";
import React from "react";

const ProductItems = ({ action }) => {
    const { dataset, setIsOpen, setKeyword } = useSearchField();

    if (dataset) {
        return dataset.map((item, index) => {
            return (
                <span
                    key={item.product_id}
                    style={{
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: AllColors.GreenDoff,
                        },
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
