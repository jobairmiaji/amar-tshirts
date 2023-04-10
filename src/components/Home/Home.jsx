import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div>
            <h2>This is Home page.</h2>
            <h3>{tShirts.length} T-shirts are here.</h3>
        </div>
    );
};

export default Home;
