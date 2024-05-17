import Home from "@/Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../../css/index.css";
import { Provider } from "react-redux";
import { store } from "@/redux/Store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const Main = () => {
    return (
        <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </LocalizationProvider>
        </Provider>
    );
};

export default Main;
