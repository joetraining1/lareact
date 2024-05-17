import UserForm from "@/Components/Forms/UserForm";
import UserProfileForm from "@/Components/Forms/UserProfileForm";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React, { useState } from "react";

const CUUser = () => {
    const [uId, setUId] = useState("");

    return (
        <SectionContainer url={"/user"}>
            <BoxContainer
                styles={{
                    transition: "all 0.3s ease-in-out",
                }}
            >
                <SectionHeader
                    title={"Register User Baru"}
                    value={"Menambahkan data user baru."}
                />
                <UserForm uId={(a) => setUId(a)} />
                {uId && <UserProfileForm id={uId} />}
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUUser;
