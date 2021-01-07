console.log("Clien side is working");

const additBtnF = document.getElementById('additBtn');
additBtnF.addEventListener('click', function(e){
    console.log('Addition is requested');
});

const subtrBtnF = document.getElementById('substrBtn');
subtrBtnF.addEventListener('click', function(e){
    console.log('Subtraction is requested');
});

const diviBtnF = document.getElementById('diviBtn');
diviBtnF.addEventListener('click', function(e){
    console.log('Division is requested');
});

const multiptBtnF = document.getElementById('multipdBtn');
multiptBtnF.addEventListener('click', function(e){
    console.log('Multiplication is requested');
});

