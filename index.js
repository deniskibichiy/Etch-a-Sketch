const container_div = document.querySelector("#container");

let divsNum = 257;

function createSquareDivs () {
    for (let i = 0; i < 273; i++ ) {
        const columnsDivs = document.createElement('div');
        columnsDivs.classList.add("square_div");
        container_div.appendChild(columnsDivs);
    }
    
}

createSquareDivs();