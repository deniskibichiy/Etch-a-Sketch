const div = document.querySelector("#container");
div.classList.add('div');

let divsNum = 16;
let i;


// let the number of rows be 16
//append the columns to each row
//append each row to the parent container
for (i = 0; i <= divsNum; i++) {
    const divChild = document.createElement("div");
    divChild.classList.add("divChild");
    div.appendChild(divChild);
    const columnDivs = document.createElement('div');
    columnDivs.classList.add("columnDivs");
    divChild.appendChild(columnDivs);
};