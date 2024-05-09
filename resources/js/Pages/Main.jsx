import Home from "@/Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../../css/index.css";
import { Provider } from "react-redux";
import { store } from "@/redux/Store";

const Main = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>
    );
};

export default Main;
