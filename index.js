const div = document.querySelector("#container");
div.classList.add('div');

let divsNum = 256;
let i;

for (i = 0; i <= divsNum; i++) {
    const divChild = document.createElement("div");
    divChild.classList.add("divChild");
    div.appendChild(divChild);

const squareDivs = document.createElement('div');
};