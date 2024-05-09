import useModalState from "@/hooks/useModalState";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import SiteModal from "./SiteModal";

const IndexModal = ({ button, title, value, children }) => {
    const { modalState, shiftModal } = useModalState();
    return (
        <React.Fragment>
            <SiteButton title={button} action={() => shiftModal()} />
            <SiteModal
                action={() => shiftModal()}
                title={title}
                value={value}
                state={modalState}
            >
                {children}
            </SiteModal>
        </React.Fragment>
    );
};

export default IndexModal;
