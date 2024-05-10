import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";
import TableData from "../TableData/TableData";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";

const SectionPresenter = ({ order_id, title, kontex, desc }) => {
    return (
        <BoxContainer>
            <SectionHeader title={title} value={desc} />
            <SiteButton
                title={`add ${kontex}`}
                styles={{
                    width: "200px",
                }}
            />
            <TableData rows={[]} />
        </BoxContainer>
    );
};

export default SectionPresenter;
