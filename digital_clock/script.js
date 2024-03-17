const clock = document.getElementById('display')

setInterval(function(){
    let date = new Date();
    display.innerHTML = date.toLocaleTimeString()
},1000)