import React, { useState } from "react";
import SiteButton from "../SiteButton/SiteButton";
import UniversalButton from "../UniversalButton/UniversalButton";
import { ClearRounded } from "@mui/icons-material";
import { AllColors } from "@/lib/constant/Colors";
import { Button, Typography } from "@mui/material";
import { h4FontStyle } from "@/lib/constant/Styles";
import { FileSlicer } from "@/lib/utils/StringExtensionExtractor";

const FileUploader = ({ file = (a) => console.log(a.name), value = "" }) => {
    const [selected, setSelected] = useState(null);
    const [name, setName] = useState(FileSlicer(value));

    const handleFile = (doc) => {
        setSelected(doc);
        setName(FileSlicer(doc.name));
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
                    width: "fit-content",
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
            {name && (
                <UniversalButton
                    variant={"text"}
                    title={"clear"}
                    styles={{
                        color: AllColors.Grey,
                    }}
                    icon={<ClearRounded />}
                    action={() => {
                        setSelected(null);
                        setName("");
                        return;
                    }}
                />
            )}
            {name && (
                <Typography
                    sx={{
                        ...h4FontStyle,
                        color: AllColors.DarkGrey,
                    }}
                >
                    {name}
                </Typography>
            )}
        </React.Fragment>
    );
};

export default FileUploader;
