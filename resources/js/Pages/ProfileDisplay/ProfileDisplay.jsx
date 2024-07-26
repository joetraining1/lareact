import ProfileForm from "@/Components/Forms/ProfileForm";
import { AllColors } from "@/lib/constant/Colors";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const ProfileDisplay = ({ user_id, profile, employment }) => {
    if (!user_id) {
        return null;
    }

    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={`Profile : ${user_id}`}
                    value={"Manage data personal user."}
                />
                <ProfileForm
                    id={user_id}
                    nama={profile.nama}
                    kontak={profile.kontak}
                    alamat={profile.alamat}
                />
            </BoxContainer>

            <BoxContainer>
                <SectionHeader
                    title={`Informasi Employment`}
                    value={
                        "Manage informasi hubungan kerja user dengan perusahaan."
                    }
                />
                <InputLabel
                    title={"Posisi :"}
                    value={employment.posisi}
                    props={{
                        disabled: true,
                    }}
                />
                <InputLabel
                    title={"Jabatan :"}
                    value={employment.jabatan}
                    props={{
                        disabled: true,
                    }}
                />
                <InputLabel
                    title={"Departemen :"}
                    value={employment.departemen_name}
                    props={{
                        disabled: true,
                    }}
                />
                <InputLabel
                    title={"Lokasi Departemen :"}
                    value={employment.lokasi}
                    props={{
                        disabled: true,
                    }}
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

export default ProfileDisplay;
