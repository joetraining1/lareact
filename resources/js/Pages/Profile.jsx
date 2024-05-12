import { AllColors } from "@/lib/constant/Colors";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { user_id } = useParams();
    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={`Profile : ${user_id}`}
                    value={"Manage data personal user."}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={`Settings Password`}
                    value={"konfigurasi password user aplikasi."}
                />
                <InputLabel title={"Password Lama :"} />
                <InputLabel title={"Password Baru :"} />
                <InputLabel title={"Konfirm Password Baru :"} />
                <SiteButton title={"simpan"} />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={`Informasi Detail`}
                    value={"Manage informasi profile user."}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={`Informasi Employment`}
                    value={
                        "Manage informasi hubungan kerja user dengan perusahaan."
                    }
                />
            </BoxContainer>
            <BoxContainer>
                <SiteButton
                    title={"Delete Account"}
                    styles={{
                        backgroundColor: AllColors.Purple,
                    }}
                />
            </BoxContainer>
        </PageContainer>
    );
};

export default Profile;
