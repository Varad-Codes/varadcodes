import { useState } from "react";

import "./CommandHandeler";
import commandHandeler from "./CommandHandeler";

const CommandField = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setText(event.target.value);
            event.target.value = "";
            // console.log(text);
            commandHandeler(text);
        }
    };

    return (
        <>
            <div className="flex flex-row">
                <p className="text-yellow-300 font-bold">&gt;</p>
                <textarea
                    name="cmd-input"
                    id="cmd-input"
                    cols="30"
                    rows="1"
                    onChange={handleChange}
                    value={text}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent text-white resize-none outline-none border-none"
                ></textarea>
            </div>
            <p id="cmd-output-prefix"></p>
            <p id="cmd-output" className="px-6"></p>
        </>
    );
};

export default CommandField;
