const mnCont = document.querySelector('.mainContainer');
const row = document.querySelector('.row');
const rowUnit = document.querySelector('.rowUnit');

// rowUnit.forEach((unit) => unit.addEventListener('mouseover', mouseOver));

function mouseOver (){
    console.log("rego")
}

for(i = 0; i < rowUnit.length; i++){
    rowUnit.addEventListener('mouseover', mouseOver);
    console.log('hay')
}