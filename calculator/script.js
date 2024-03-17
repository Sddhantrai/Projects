let string = ""
const numbers = document.querySelectorAll('.number')
const input = document.querySelectorAll('#inpt')

Array.from(numbers).forEach((buttons) => {
    buttons.addEventListener('click',(e) => {
         if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector('#inpt').value = string;
            console.log("hi")
        } else if(e.target.innerHTML == 'C'){
            string = " "
            document.querySelector('#inpt').value = string
        } else if(e.target.innerHTML == "Del"){
            string =string + e.target.innerHTML.slice(0, -1)
            document.querySelector('#inpt').value = string
        } else{
            string = string + e.target.innerHTML
            document.querySelector('#inpt').value = string
            console.log(e.target)
        }
    })
})