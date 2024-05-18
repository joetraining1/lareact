import { AllColors } from "@/lib/constant/Colors";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import React from "react";
import { useParams } from "react-router-dom";
import ProfileDisplay from "./ProfileDisplay/ProfileDisplay";
import useGetFetch from "@/hooks/useGetFetch";

const Profile = () => {
    const { user_id } = useParams();

    const { resp } = useGetFetch(`profile/${user_id}`);

    return resp.length !== 0 ? (
        <ProfileDisplay
            user_id={user_id}
            profile={resp.profile[0]}
            employment={resp.employment[0]}
        />
    ) : null;
};

export default Profile;
