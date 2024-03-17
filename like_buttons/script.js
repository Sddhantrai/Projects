const container = document.querySelector('#container');
const i = document.querySelector('i');

container.addEventListener("dblclick", function(){
    i.style.transform = " translate(-50%,-50%) scale(1)"
    i.style.color = "red"
    setTimeout(function(){
        i.style.transform = " translate(-50%,-50%) scale(0)"
    },1500)
})