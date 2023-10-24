const mainContainer = document.querySelector('.mainContainer');
const densityBtn = document.querySelector('.gridDensityBtn')


let density = 16;
//Listen for a click on the grid density button
densityBtn.addEventListener('click', changeGridDensity);
//Function to change the amount of squares in the gird
function changeGridDensity () {
    //Get user input for squares per side on the grid
    density = prompt (`How many squares per side for the new grid?`);
    //Limit of 100 squares
    if (density > 100) {
        alert(`Please choose a number below 100`)
    }
    //Put an HTML inline style for the mainContainer div - takes a string so back ticks work! woot.
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${density}, 2fr); grid-template-rows: repeat(${density}, 2fr);`);
    createGrid(density);
}

//Create grid
function createGrid (densityValue){
    for(let i = 0; i < densityValue * densityValue; i++){
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
    
}