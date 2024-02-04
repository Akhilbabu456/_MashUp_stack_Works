let numFirst= document.getElementById("num1")
let numSecond= document.getElementById("num2")
let selectEl= document.getElementById("select-el")
let displayEl= document.getElementById("display-el")
const btnEl= document.getElementById("btn-el")
let sum
let answer

function add(num1,num2){
    sum=(num1+num2)
    return sum
}

function sub(num1,num2){
    sum=num1-num2
    return sum
}

function multi(num1,num2){
    sum=num1*num2
    return sum
}

function div(num1,num2){
    sum=num1/num2
    return sum
}

function print(ans){
    displayEl.textContent = ans
}


 btnEl.addEventListener("click",function (){
    
          let  number1= parseFloat(numFirst.value)
          let  number2= parseFloat(numSecond.value)
          let sign= selectEl.value

          switch (sign) {
            case '+':
                answer= add(number1,number2)
                break;
            case '-':
                answer= sub(number1,number2)
                break;
            case '*':
                answer= multi(number1,number2)
                break;
            case '/':
                answer= div(number1,number2)
                break;
        }
   
    print(answer)
})

