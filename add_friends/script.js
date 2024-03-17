const buttons = document.querySelector('.button');
const remove = document.querySelector('.remove');
const display = document.querySelector('.display');
const image = document.querySelector('img')

buttons.addEventListener('click', function (){
    buttons.innerHTML = "Friends";
    display.innerHTML = "Friends"
    display.style.color = "green"
})

remove.addEventListener('click', function (){
    buttons.innerHTML = "Add Friend"
    display.innerHTML = "Stranger"
    display.style.color = "black"
})

image.addEventListener('click',function() {
    console.log("hi")
    image.style.width = "400px"
    image.style.height = "400px"
})