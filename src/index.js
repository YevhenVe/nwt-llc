import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ScrollOnTop from "components/scrollontop/ScrollOnTop";
import { ContextProvider } from "contexts/Context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga4";
import "./styles/Index.scss";
import "./i18n";

ReactGA.initialize("G-BKHZCKPVK5");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <ScrollOnTop />
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </ContextProvider>
);
