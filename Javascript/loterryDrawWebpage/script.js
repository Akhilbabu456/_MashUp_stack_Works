let displayEl= document.getElementById("display-el")
let winnerEl= document.getElementById("winner-el")
let inputEl= document.getElementById("input-el")
let enterEl= document.getElementById("enter-el")
let modalEl= document.getElementById("modal-el")
let number= [75864,22665,98764]
let colors = ['#ff0000', '#ffffff','#fcdb03','#62fc03','#0335fc']


enterEl.addEventListener("click", function(){
    if(inputEl.value==0){
        alert("Enter valid number")
    }else{
        number.push(inputEl.value)
        inputEl.value= ""
    }
})

winnerEl.addEventListener("click", function(){
    let randomNumber= Math.floor(Math.random() * number.length)
    console.log(number[randomNumber])
    displayEl.innerHTML= number[randomNumber]
    modalEl.innerHTML= number[randomNumber]
    displayEl.style.backgroundColor="#fff"
    modalEl.style.cssText="color:#ff0000; font-size:35px ; font-weight:bold;"
    frame()
 
})

function  frame() {
    confetti({
      particleCount: 600,
      angle: 60,
      spread: 120,
      origin: { x: 0},
      colors: colors
    })
    confetti({
      particleCount: 600,
      angle: 120,
      spread: 120,
      origin: { x: 1 },
      colors: colors
    })
  
  }