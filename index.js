//Calculator Program


//grabs the element in the html doc by the ID and stores the value in display  
const display = document.getElementById("Display")

//
function appendtoDisplay(input){
    display.value += input;

}


function clearDisplay(){
    display.value = "";
//changes display to an empty string when user presses C

}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}