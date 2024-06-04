let button_two = document.getElementById("button_two");
let windowTwo = document.getElementById('windowTwo');

button_two.addEventListener('click',() =>{
    windowTwo.classList.toggle('active');
})
document.addEventListener('mousedown', function(event){
    let windowTwo_block = document.getElementById('windowTwo_block');
    if(!windowTwo_block.contains(event.target)){
        windowTwo.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
})
let img_close_two = document.getElementById('img_close_two');
img_close_two.addEventListener("click", () =>{
    windowTwo.classList.remove('active');
    document.body.style.overflow = 'visible';
})