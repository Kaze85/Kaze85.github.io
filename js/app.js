window.addEventListener("load", init);

function init() {
    console.log("Page loaded.");
    const button = document.getElementById("lightSwitch");
    button.addEventListener("click", lightSwitch);
}

function lightSwitch(event) {
    const html = document.getElementById("html");
    const button = document.getElementById("lightSwitch");

    if (html.className === "bg-black") {
        console.log("light");
        html.className =  "bg-white";
        button.className = "dark-switch";
        button.innerText = "Dark";
        return
    } else if (html.className === "bg-white") {
        console.log("dark");
        html.className = "bg-black";
        button.className = "light-switch";
        button.innerText = "Light";
        return
    } else {
        console.log("Unknown class.");
    }
}