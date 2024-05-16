import { h4FontStyle } from "@/lib/constant/Styles";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import { Typography } from "@mui/material";
import FormData from "form-data";
import React, { useEffect, useState } from "react";

const Index = () => {
    const [clicked, setClicked] = useState(null);
    const [msg, setMsg] = useState("");

    // useEffect(() => {
    //     const testApi = async () => {
    //         const req = await ApiClient.get(`auth/home-welcome/hires`).then(
    //             (res) => {
    //                 return res.data;
    //             }
    //         );

    //         console.log(req);

    //         return req;
    //     };
    //     testApi();
    //     return;
    // }, []);

    const sendFile = async () => {
        console.log(clicked);

        const payload = new FormData();
        payload.append("file_pdf", clicked);

        const req = await ApiClient.post(`auth/home-welcome/add`, payload)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                setMsg(error.response.data.message);
                const errorMessage = setTimeout(() => {
                    return setMsg("");
                }, 5000);
                return console.log(error.response.data.message);
            });

        return console.log(req);
    };

    return (
        <PageContainer>
            <BoxContainer
                styles={{
                    transition: "all 0.3s ease",
                }}
            >
                <SectionHeader
                    title={"Dashboard"}
                    value={"Halaman Home Aplikasi Arsip dan Purchasing"}
                />
                <FileUploader file={(a) => setClicked(a)} />
                <SiteButton title={"submit file"} action={() => sendFile()} />
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
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Checklist"} />
                <ul>
                    <li>1. Communicator</li>
                    <li>2. Harvester</li>
                    <li>3. Preservator</li>
                    <li>4. Processor</li>
                    <li>5. o Manipulator</li>
                    <li>6. Presenter</li>
                    <li>7. Navigator</li>
                </ul>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Things Needed To be Done"} />
                <ul>
                    <li>1. Checking indexing of main tables</li>
                    <li>2. Complete crud</li>
                    <li>3. finalizing app</li>
                </ul>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Data Flow Diagram"} />
                <ul>
                    <li>1. user, user_profile, user_employment</li>
                    <li>2. departemen</li>
                    <li>3. kategori</li>
                    <li>4. product</li>
                    <li>5. supplier</li>
                    <li>6. document, document_info</li>
                    <li>7. order, order_item</li>
                    <li>8. transaksi</li>
                    <li>9. shipment</li>
                </ul>
            </BoxContainer>
        </PageContainer>
    );
};

export default Index;
