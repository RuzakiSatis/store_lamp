let button_four = document.getElementById("button_four");
let windowFour = document.getElementById('windowFour');

button_four.addEventListener('click',() =>{
    windowFour.classList.toggle('active');
})
document.addEventListener('mousedown', function(event){
    let windowFour_block = document.getElementById('windowFour_block');
    if(!windowFour_block.contains(event.target)){
        windowFour.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
})
let img_close_four = document.getElementById('img_close_four');
img_close_four.addEventListener("click", () =>{
    windowFour.classList.remove('active');
    document.body.style.overflow = 'visible';
})