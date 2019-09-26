function lightSwitch() {
    let color = ["#111", "#fff"];
    let i = 0;

    document.querySelector("button").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector("html").style.background = color[i];
    })
}

lightSwitch();