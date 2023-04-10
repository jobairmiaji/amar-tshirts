import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("gold");

const Grandpa = () => {
    const ring = "diamond";
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <RingContext.Provider value={"golder ring"}>
                <section className="flex">
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context
 * 2. Create a provider and pass the value
 * 3. use useContext to receive
 */
