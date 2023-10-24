const mainContainer = document.querySelector('.mainContainer');
const densityBtn = document.querySelector('.gridDensityBtn')


densityBtn.addEventListener('click', changeGridDensity);

function changeGridDensity () {
    prompt(`How many squares per side for the new grid?`)
}

//Create grid
for(let i = 0; i < 256; i++){
    //Create div element and call it cell
    const cell = document.createElement('div');
    //Give the div a class named cell.
    cell.classList.add('cell');
    //Append the cell div to the mainContainer div
    mainContainer.appendChild(cell);
    //Apply a mouseover event listener to the cell div with a callback function named cellColour
    cell.addEventListener('mouseover', cellColour);
    //Create a function to add another class name to the cell div. This new class is in the CSS style with a different background color to the default.
    function cellColour(){
        cell.classList.add('cellColourChange');
    };
};

