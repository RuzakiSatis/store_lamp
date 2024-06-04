let button_three = document.getElementById("button_three");
let windowThree = document.getElementById('windowThree');

button_three.addEventListener('click',() =>{
    windowThree.classList.toggle('active');
})
document.addEventListener('mousedown', function(event){
    let windowThree_block = document.getElementById('windowThree_block');
    if(!windowThree_block.contains(event.target)){
        windowThree.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
})
let img_close_three = document.getElementById('img_close_three');
img_close_three.addEventListener("click", () =>{
    windowThree.classList.remove('active');
    document.body.style.overflow = 'visible';
})