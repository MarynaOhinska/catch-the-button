let w = 500, h = 500, w_btn = w*0.2, h_btn = h*0.1;
let cont = document.createElement("div");
cont.style.border = "2px solid #eddcd9";
cont.style.borderRadius ="10px";
cont.style.width = `${w}px`;
cont.style.margin = "auto";
cont.style.padding = "5px";
cont.style.height = `${h}px`;
cont.style.backgroundColor = "#f2ebe9";
document.body.appendChild(cont);

let btn = document.createElement("button");
btn.style.width = `${w_btn}px`;
btn.style.height = `${h_btn}px`;
btn.innerText = "catch me";
btn.style.backgroundColor = "#de5499"
btn.style.fontFamily = "'Poppins', sans-serif";
btn.style.color = "#f2ebe9";
btn.style.border = "0px solid #eddcd9";
btn.style.position = "relative";
btn.style.fontSize = `${h_btn*0.3}px`;
btn.style.padding = 0;
btn.style.position = "relative";
btn.style.borderRadius = "10px";
btn.style.cursor = "pointer";
cont.appendChild(btn);

let popup = document.createElement("div");
popup.classList.add("popup");
document.body.appendChild(popup);
let image = document.createElement("img");
image.src = "youWin.png";
popup.appendChild(image);
let txt = document.createElement("h2");
txt.innerText = "you win";
popup.appendChild(txt);
let divbtn = document.createElement("div");
popup.appendChild(divbtn);
let btnok = document.createElement("button");
btnok.innerText = "continue";
divbtn.appendChild(btnok);

var timeout;
btn.onmouseover = function(){
    if(timeout)
        clearTimeout(timeout);
    timeout = setTimeout(replace,200);
};

function replace() {
    let top = 0 + Math.floor(Math.random ()*(h-h_btn));
    let left = 0 + Math.floor(Math.random()*(w-w_btn));
    btn.style.top = `${top}px`;
    btn.style.left = `${left}px`;
    timeout = null;
}

btn.onclick = function () {
    popup.classList.add("open-popup");
}

btnok.onclick = function () {
    popup.classList.remove("open-popup");
}