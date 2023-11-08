import React from "react";

import Prompt from "./const/Prompt";

const Intro = () => {
    return (
        <section>
            <div className="content">
                <Prompt cmd="intro" />
                <h1>Who Am I?</h1>
            </div>
        </section>
    );
};

export default Intro;