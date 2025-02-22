let display = document.getElementById('display')

function appendValue(x){
    display.value+=x;
}

function clearDisplay(){
    display.value = "";
}

function calculateResult(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}