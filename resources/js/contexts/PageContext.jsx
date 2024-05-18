import ApiClient from "@/lib/services/ApiClient";
import React, { createContext, useEffect, useState } from "react";

export const PageContext = createContext({
    resp: [],
    forceRefresh: () => {},
});

const PageProvider = ({ children, url }) => {
    const [resp, setResp] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const forceRefresh = () => {
        return setIsFetching(true);
    };

    useEffect(() => {
        const handleRequest = async () => {
            try {
                const request = await ApiClient.get(url).then((response) => {
                    return response.data;
                });
                setResp(request);
                return;
            } catch (err) {
                console.log(err);
                return;
            }
        };
        if (isFetching) {
            handleRequest();
        }
        return () => {
            setIsFetching(false);
        };
    }, [isFetching]);

    return (
        <PageContext.Provider
            value={{
                forceRefresh,
                resp,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export default PageProvider;
