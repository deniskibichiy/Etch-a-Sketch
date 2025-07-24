
const container_div = document.querySelector('.container');
let columnsDivs;


function createSquareDivs (numberPerRow) {

    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    container_div.style.cssText ="width: 500px; height: 500px"


    for (let i = 1; i < total; i++ ) {
        columnsDivs = document.createElement('div');
        
        if (i % mod === 0) {
            columnsDivs.style.cssText = "border: 0; height: 0; width: 100%;"
        } else {
            const unit = "px";
            const width = 500/numberPerRow;
            columnsDivs.style.cssText = `border: 1px solid lightgray; height: ${width}${unit}; width: ${width}${unit}`;
        }
         container_div.appendChild(columnsDivs);
    }
}

let numberOfDivs;
//createSquareDivs(numberOfDivs)

const button = document.querySelector('button');
button.onclick = function () {
numberOfDivs = Number(prompt("Enter the number of squares per side."));
container_div.textContent ='';
createSquareDivs(numberOfDivs);

}
//;
//console.log(numberOfDivs)
//console.log(numberOfDivs);
const testDiv = document.createElement('div');
testDiv.classList.add("testDiv");
testDiv.style.cssText= "height: 50px; width: 50px; border: 2px solid grey";
/* container_div.appendChild(testDiv);
testDiv.onmouseover = function () {
    testDiv.classList.add("color");
}
//An event listener to listen to hov
// er events - needed for coloring the divs on hover
*/

