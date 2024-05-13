import UserForm from "@/Components/Forms/UserForm";
import UserProfileForm from "@/Components/Forms/UserProfileForm";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const CUUser = () => {
    return (
        <SectionContainer url={"/user"}>
            <BoxContainer>
                <SectionHeader
                    title={"Register User Baru"}
                    value={"Menambahkan data user baru."}
                />
                <UserProfileForm />
                <UserForm />
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUUser;
