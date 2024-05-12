import React, { useState } from "react";
import SiteButton from "../SiteButton/SiteButton";
import UniversalButton from "../UniversalButton/UniversalButton";
import { ClearRounded } from "@mui/icons-material";
import { AllColors } from "@/lib/constant/Colors";
import { Button, Typography } from "@mui/material";
import { h4FontStyle } from "@/lib/constant/Styles";

const FileUploader = ({ file }) => {
    const [selected, setSelected] = useState(null);

    const handleFile = (doc) => {
        setSelected(doc);
        file(doc);
        return;
    };

    return (
        <React.Fragment>
            <Button
                component="label"
                sx={{
                    ...h4FontStyle,
                    color: AllColors.GreenDoff,
                    border: `1px solid ${AllColors.GreenDoff}`,
                    padding: "5px 1vw",
                    "&:hover": {
                        border: `1px solid ${AllColors.GreenDoff}`,
                    },
                }}
                variant="outlined"
            >
                Add File
                <input
                    type="file"
                    hidden
                    accept="application/pdf"
                    onChange={(e) => handleFile(e.target.files[0])}
                />
            </Button>
            {selected && (
                <UniversalButton
                    variant={"text"}
                    title={"clear"}
                    styles={{
                        color: AllColors.Grey,
                    }}
                    icon={<ClearRounded />}
                    action={() => setSelected(null)}
                />
            )}
            {selected && (
                <Typography
                    sx={{
                        ...h4FontStyle,
                        color: AllColors.DarkGrey,
                    }}
                >
                    {selected.name}
                </Typography>
            )}
        </React.Fragment>
    );
};

export default FileUploader;
