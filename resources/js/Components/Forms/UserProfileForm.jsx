import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const UserProfileForm = () => {
    return (
        <React.Fragment>
            <InputLabel title={"Nama User"} />
            <InputLabel title={"Kontak User"} />
            <InputLabel title={"Alamat User"} />
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
            />
        </React.Fragment>
    );
};

export default UserProfileForm;
