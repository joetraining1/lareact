import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";

const SectionPresenter = ({ order_id, title, desc, children }) => {
    return (
        <BoxContainer>
            <SectionHeader title={title} value={desc} />
            {children}
        </BoxContainer>
    );
};

export default SectionPresenter;
