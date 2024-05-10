import { h4FontStyle } from "@/lib/constant/Styles";
import {
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";

const ToolBar = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton
                slotProps={{
                    button: {
                        sx: {
                            padding: "10px 1vw",
                            fontFamily: h4FontStyle.fontFamily,
                        },
                    },
                }}
            />
            <GridToolbarExport
                slotProps={{
                    button: {
                        variant: "text",
                        sx: {
                            marginLeft: "auto",
                            padding: "10px 1vw",
                            fontFamily: h4FontStyle.fontFamily,
                        },
                    },
                }}
            />
        </GridToolbarContainer>
    );
};

export default ToolBar;
