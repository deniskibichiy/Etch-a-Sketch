
function createSquareDivs (numberPerRow) {

    const container_div = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    container_div.style.cssText ="width: 500px; height: 500px"


    for (let i = 1; i < total; i++ ) {
        const columnsDivs = document.createElement('div');
        

        if (i % mod === 0) {
            columnsDivs.style.cssText = "border: 0; height: 0; width: 100%;"
        } else {
            const unit = "px";
            const width = 500/numberPerRow;
            columnsDivs.style.cssText = `border: 1px solid black; height: ${width}${unit}; width: ${width}${unit}`;
        }
         container_div.appendChild(columnsDivs);
    }
}

createSquareDivs(30);