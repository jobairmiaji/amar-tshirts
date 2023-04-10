import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("tshirts.json"),
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
            {
                path: "review",
                element: <OrderReview></OrderReview>,
            },
            {
                path: "grandpa",
                element: <Grandpa></Grandpa>,
            },
            {},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
