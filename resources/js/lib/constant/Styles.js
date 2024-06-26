import { AllColors } from "./Colors";

export const AllSize = {
    width: "100%",
    height: "100%",
};

export const BoxStyleBasic = {
    display: "flex",
    height: "auto",
    width: "100%",
    padding: "2vw",
    backgroundColor: "#fff",
    borderRadius: "5px",
    gap: "1vw",
    flexDirection: "column",
    // border: `1px solid ${AllColors.GreenDoff}50`,
};

export const h4FontStyle = {
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: "600",
};
export const ButtonStyleBasic = {
    backgroundColor: AllColors.GreenDoff,
    ...h4FontStyle,
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: AllColors.GreenDoff,
    },
};

export const SideSx = {
    width: "15vw",
};

export const LoginScene = {
    fontFamily: "Playfair Display, sans-serif",
};
