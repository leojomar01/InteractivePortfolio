const building1 = document.querySelector('.building1');
const building2 = document.querySelector('.building2');
const building3 = document.querySelector('.building3');
const sky = document.querySelector('.sky');
const path = document.querySelector('.path');
const cloud = document.querySelector('.cloud');

let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.stickyParent');
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;


let scrollWidth = sticky.scrollWidth;
document.addEventListener('scroll', horizontalScroll);
function horizontalScroll(){
    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition < 1){
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*.5;
        building1.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*5;
        building2.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*3;
        building3.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*2;
        cloud.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*1;
        console.log(scrolled);
    }
    console.log(stickyPosition);
}




const buttonW = document.querySelector('.switch');
const switchMode = document.querySelector('.switchIcon');

var nightMode = true;
buttonW.addEventListener("click",function(){

    switch(nightMode){
        case true:
            switchMode.classList.remove('fa-sun','sun');
            switchMode.classList.add('fa-moon','moon');
            sky.classList.remove('bgMorning');
            sky.classList.add('bgNight');
            cloud.classList.remove('cloudMorning');
            cloud.classList.add('cloudNight');
            nightMode = false;
            break;
        case false:
            switchMode.classList.remove('fa-moon','moon'); 
            switchMode.classList.add('fa-sun','sun');
            sky.classList.remove('bgNight');
            sky.classList.add('bgMorning');
            cloud.classList.add('cloudMorning');
            cloud.classList.remove('cloudNight');
            nightMode = true;
            break;
    }
});



