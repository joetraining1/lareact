import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const UserForm = () => {
    return (
        <React.Fragment>
            <InputLabel title={"Email User"} />
            <InputLabel title={"Password User"} />
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
            />
        </React.Fragment>
    );
};

export default UserForm;
