import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter } from "react-router-dom";
import {UserContextProvider } from "./Context/UserContext";
import { TodoContextProvider } from "./Context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <TodoContextProvider>
            <BrowserRouter>
             <App />
            </BrowserRouter>
            </TodoContextProvider>
        </UserContextProvider>
    </React.StrictMode>
);


