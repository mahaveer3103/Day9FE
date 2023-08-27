const root = document.getElementById("output");
document.body.style.backgroundColor = "white";

function color(){
    const textColor = document.getElementById("textColor").value;
    root.style.color = textColor;
}

function bgCol(){
    const bgc = document.getElementById("backgroundColor").value;
    root.style.backgroundColor = bgc;
}
function pad(){
    const pad = document.getElementById("pad").value;
    root.style.padding = pad;
}
function fSize(){
    const fSize = document.getElementById("fontSize").value;
    root.style.fontSize = fSize;
}
function fWeight(){
    const fWeight = document.getElementById("fontWeight").value;
    root.style.fontWeight = fWeight;
}

