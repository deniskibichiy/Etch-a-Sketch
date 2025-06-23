
function createSquareDivs (numberPerRow) {

    const container_div = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1


    for (let i = 1; i < total; i++ ) {
        const columnsDivs = document.createElement('div');

        if (i % mod === 0) {
            columnsDivs.style.cssText = "border: 0; height: 0; width: 100%;"
        } else {
            columnsDivs.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }
         container_div.appendChild(columnsDivs);
    }
   
    
}

createSquareDivs(16);