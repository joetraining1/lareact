import useModalState from "@/hooks/useModalState";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React, { createContext, useCallback, useEffect, useState } from "react";
import SiteModal from "./SiteModal";
import { useDispatch, useSelector } from "react-redux";
import { In, Out } from "@/redux/slices/modalSlice";

export const ModalContext = createContext({
    modalState: Boolean,
    shiftModal: () => {},
});

const IndexModal = ({ button, title, value, children }) => {
    const { modalState, shiftModal } = useModalState();

    return (
        <ModalContext.Provider
            value={{
                modalState,
                shiftModal,
            }}
        >
            <SiteButton
                title={button}
                styles={{
                    padding: "0",
                }}
                action={() => shiftModal()}
            />
            <SiteModal
                action={() => shiftModal()}
                title={title}
                value={value}
                state={modalState}
            >
                {children}
            </SiteModal>
        </ModalContext.Provider>
    );
};

export default IndexModal;
