const commandHandeler = (command) => {
    const output = document.getElementById("cmd-output");
    const outputPrefix = document.getElementById("cmd-output-prefix");

    switch (command) {
        case "help":
            console.log("help is here");
            outputPrefix.innerHTML = "Output: ";
            output.innerHTML = `
                <h2>Available commands:</h2> 
                <p><span style="color: yellow">help</span>        - Displays this help message</p>
                <p><span style="color: yellow">whois</span>       - Learn more about me</p>
                <p><span style="color: yellow">projects</span>    - My projects</p>
                <p><span style="color: yellow">stack</span>       - languages and technologies I know</p>
                <p><span style="color: yellow">hobbies</span>     - Know my hobbies!</p>
                <p><span style="color: yellow">experience</span>  - Work experience</p>
                <p><span style="color: yellow">education</span>   - My education till now</p>
                <p><span style="color: yellow">socials</span>     - My social Accounts</p>
                <p><span style="color: yellow">superSecret</span> - super secret, dont tell anyone!</p>
            `;
            break;
        default:
            console.log("Unknown command");
    }
};


export default commandHandeler;