import React from "react";
import Prompt from "./const/Prompt";

const Vision = () => {
    return (
        <section>
            <div className="content">
                <Prompt cmd="vision" />
                <h1>What is my vision?</h1>
            </div>
        </section>
    );
};

export default Vision;