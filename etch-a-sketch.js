const mainContainer = document.querySelector('.mainContainer');
const columns = document.createElement('div');
const rows = document.createElement('div');
const rowUnits = document.createElement('div');


columns.classList.add('columns');
mainContainer.appendChild(columns);

for(let i = 0; i < 16; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    columns.appendChild(rows);
    for(let i = 0; i < 16; i++){
        const rowUnits = document.createElement('div');
        rowUnits.classList.add('rowUnits');
        rows.appendChild(rowUnits);
        }
}

