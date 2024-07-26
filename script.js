const input = document.querySelector('.input')
const eval = document.querySelector('.eval')
const submit = document.querySelector('.btn')
// console.log(submit)
const generate = document.querySelector('.generate')
const display = document.querySelector('.display')
let remain = document.querySelector('#gcount')
// let remaining = parseInt(remain)
const newbtn = document.querySelector('.new')

const random = parseInt((Math.random()) * 100 + 1)
console.log(random)

submit.addEventListener("click", validationcheck)
const playgame = true
let guess = 5
remain.innerHTML = `${guess}`
// validationcheck()


function validationcheck() {
    let inputs = parseInt(input.value)
// console.log(inputs)
   if(playgame==true && inputs<100 && inputs>=1){
    checkguess()
   }else{
    alert('Enter a number between 1 to 100')
    input.value = ''
   }
}
function checkguess() {
    evaluate()
    displayguess()
    input.value=" "
    
}
function evaluate(){
    const user = input.value
    if(user == random){
        alert('You Won')
        newgame()
    }
    if(user < random-10){
        eval.innerHTML="Too Low!!"
    }
    if(user < random && user >random-10){
         eval.innerHTML="Low!!"
    }
    if(user < random && user >random-10 && user>random-3){
         eval.innerHTML="You're close!!"
    }
    if(user>random && user<random+10){
         eval.innerHTML="High!!"
    }
    if(user>random && user<random+10 && user<random+3){
         eval.innerHTML="You're close!!"
    }
    if(user>random+10){
         eval.innerHTML="Too High!!"
    }

}
function displayguess() {
    generate.innerHTML += `${input.value},`
    let update = parseInt(guess-1)
    guess = update
    remain.innerHTML = `${update}`
    if(guess == 0){
        display.innerHTML =` You Lost the game. The number was ${random}`
        endgame()
    }
}
function endgame() {
    newbtn.style.display ="block"
    input.style.display ="none"
    submit.style.display ='none'
    eval.style.display = "none"
}
newbtn.addEventListener('click',newgame)
function newgame() {
    location.reload()
}