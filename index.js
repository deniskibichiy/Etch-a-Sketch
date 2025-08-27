
const container_div = document.querySelector('.container');
//let columnsDivs;


function createSquareDivs (numberPerRow) {

    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    container_div.style.cssText ="width: 500px; height: 500px";


    for (let i = 1; i < total; i++ ) {
       const columnsDivs = document.createElement('div');
        if (i % mod === 0) {
            columnsDivs.style.cssText = "border: 0; height: 0; width: 100%;"
        } else {
            const unit = "px";
            const width = 500/numberPerRow;
            columnsDivs.style.cssText = `border: 1px solid lightgray; height: ${width}${unit}; width: ${width}${unit}`;
            columnsDivs.addEventListener("mouseenter", () => {
            columnsDivs.style.backgroundColor = 'red';
        })
        }
         container_div.appendChild(columnsDivs);
    }
}

let numberOfDivs;
//createSquareDivs(numberOfDivs)

function promptNumberofDivs () {
    numberOfDivs = Number(prompt("Enter number of divs"));
    //console.log(numberOfDivs);
    //return numberOfDivs;
    container_div.textContent = '';
    createSquareDivs(numberOfDivs);
}


const button = document.querySelector('#btn');
btn.addEventListener("click", promptNumberofDivs);

