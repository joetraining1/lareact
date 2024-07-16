import { SectionDivider } from "@/Components/SectionContainer/SectionContainer";
import { h4FontStyle } from "@/lib/constant/Styles";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import { Typography } from "@mui/material";
import FormData from "form-data";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ArchiveUpload = ({ action, filename = "" }) => {
    const [clicked, setClicked] = useState(null);
    const [msg, setMsg] = useState("");
    const [docId, setDocId] = useState("");

    const user = useSelector((state) => state.auth.authState);

    const sendFile = async () => {
        const payload = new FormData();
        payload.append("file_pdf", clicked);
        payload.append("user_id", user.user_id);

        const req = await ApiClient.post(`doc`, payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                setMsg(error.response.data.message);
                const errorMessage = setTimeout(() => {
                    return setMsg("");
                }, 5000);
                return console.log(error.response.data.message);
            });

        console.log(req.data);

        action(req?.data?.document_id);

        return;
    };

    return (
        <React.Fragment>
            <SectionDivider>
                <FileUploader file={(a) => setClicked(a)} value={filename} />
            </SectionDivider>
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
                action={() => sendFile()}
            />
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
        </React.Fragment>
    );
};

export default ArchiveUpload;
