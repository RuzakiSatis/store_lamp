let button_five = document.getElementById("button_five");
let windowFive = document.getElementById('windowFive');

button_five.addEventListener('click',() =>{
    windowFive.classList.toggle('active');
})
document.addEventListener('mousedown', function(event){
    let windowFive_block = document.getElementById('windowFive_block');
    if(!windowFive_block.contains(event.target)){
        windowFive.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
})
let img_close_five = document.getElementById('img_close_five');
img_close_five.addEventListener("click", () =>{
    windowFive.classList.remove('active');
    document.body.style.overflow = 'visible';
})