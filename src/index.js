import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/Index.scss";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
);
