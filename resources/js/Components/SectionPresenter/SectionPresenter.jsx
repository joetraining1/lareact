import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";

const SectionPresenter = ({ order_id, title, kontex, desc, children }) => {
    return (
        <BoxContainer>
            <SectionHeader title={title} value={desc} />
            <SiteButton
                title={`add ${kontex}`}
                styles={{
                    width: "200px",
                }}
            />
            {children}
        </BoxContainer>
    );
};

export default SectionPresenter;
