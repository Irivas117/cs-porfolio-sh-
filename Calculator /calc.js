var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

/*These are all the functions that work for my calcualator. The mathematical equations that can be done are additon, subtractions, multiplication, divison, exponents, and square roots.*/
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
        /*This function is additon */
        
    if  (dropdown.value == "-") {
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
        /*This function is subtraction */
 
  if  (dropdown.value == "x") {
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
        /*This function is multiplication*/
        
    if  (dropdown.value == "/") {
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
        /*This function is divison */

    
    if  (dropdown.value == "sqrt") {
        answer = Math.sqrt(input1.value);
        display.innerHTML = answer;
    }
    /*This function is squareroots */
    
    
    if (dropdown.value == "^") {
        answer = Math.pow(input1.value,input2.value); 
        display.innerHTML = answer; 
    }
    
    /*This function is exponential */
}