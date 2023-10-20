const mainContainer = document.querySelector('.mainContainer');
const columns = document.createElement('div');
const rows = document.createElement('div');
const rowUnits = document.createElement('div');
console.log(rows.classList)


columns.classList.add('columns');
mainContainer.appendChild(columns);



for(let i = 1; i < 16; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    columns.appendChild(rows);
    for(let i = 1; i < 16; i++){
        const rowUnits = document.createElement('div');
        rowUnits.classList.add('rowUnits');
        rowUnits.setAttribute('class', 'rowUnits');
        rows.appendChild(rowUnits);
    }
}


function mouseOver(){
    rowUnits.setAttribute('style', 'backgroundColor: red;');
}

for(i=0; i < rowUnits.length; ++i){
    rowUnits[i].addEventListener("click", mouseOver)
    console.log('yes');
}


// rowUnits.forEach((units) => {
//     units.addEventListener("click", mouseOver)
// });
