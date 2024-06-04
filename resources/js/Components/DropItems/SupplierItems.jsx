import useSearchField from "@/hooks/useSearchField";
import { h4FontStyle } from "@/lib/constant/Styles";
import { Typography } from "@mui/material";
import React from "react";

const SupplierItems = ({ action }) => {
    const { dataset, setIsOpen, setKeyword } = useSearchField();

    if (dataset) {
        return dataset.map((item, index) => {
            return (
                <span
                    key={item.supplier_id}
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        action(item);
                        setKeyword(item.supplier_name);
                        return setIsOpen(false);
                    }}
                >
                    {item.supplier_name}
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

export default SupplierItems;
