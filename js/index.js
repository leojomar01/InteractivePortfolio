let time = new Date().getHours();


let blimpAssets = document.querySelector('.blimpAssets');
let billboardAssets = document.querySelector('.billboardAssets')
let building1 = document.querySelector('.building1');
let building2 = document.querySelector('.building2');
let building3 = document.querySelector('.building3');
let sky = document.querySelector('.sky');
let path = document.querySelector('.path');
let cloud = document.querySelector('.cloud');
let model = document.querySelector('.model');
let instruction = document.querySelector('.instruction');
let speed = .8;



var maxScrollLeft = path.scrollWidth - path.clientWidth;
console.log(maxScrollLeft);


let scrollLeftLoc = document.querySelector('.scrollLeft');
//cloud moving animation
window.setInterval(() => {
    cloud.scrollLeft +=1;
}, 500);

window.setInterval(() => {
    scrollLeftLoc.innerHTML = path.scrollLeft;
}, 5);


// model event listiner on click
model.addEventListener('click',()=>{
    model.classList.remove('idle');
    model.classList.add('meowning');
    window.setTimeout(()=>{
        model.classList.remove('meowning');
        model.classList.add('idle');
    },1200)
})

//get idle mode
var timer = null;
window.addEventListener('scroll', ()=> {
    if(timer !== null) {
        clearTimeout(timer);  
        model.classList.remove('idle');     
        model.classList.remove('meowning');
        model.classList.add('walking');      
    }
    timer = setTimeout(function() {
        model.classList.remove('walking'); 
        model.classList.add('idle');      
    }, 400);
}, false);

// Adding scroll event listener
document.addEventListener('scroll', function horizontalScroll(){

    instruction.style.visibility = "hidden";

    let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
    path.scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*speed;//waling speed
    var loc = path.scrollLeft;
    blimpAssets.scrollLeft = loc;
    billboardAssets.scrollLeft = loc;
    building1.scrollLeft = loc /1.5 ;
    building2.scrollLeft = loc / 2;
    building3.scrollLeft = loc / 4;
      
})
    
//changing the direction depends on scroll
window.onscroll = function(e) {
    if(this.oldScroll < this.scrollY){
    console.log("right");
    model.classList.remove('left');
    model.classList.add('right');
    }
    else{
    console.log("left");
    model.classList.add('left');
    model.classList.remove('right');
    }
    this.oldScroll = this.scrollY;
}

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;



//selecting elements for nightmode
let nightModeSwitch = document.querySelector('.nightModeSwitch');
let switchIcon = document.querySelector('.switchIcon')
var nightMode;


//get time for nightmode
window.addEventListener('load',function(){
    if(time>18 || time < 6){
        nightMode = true;
        getNightMode();
    }

    else{
        nightMode = false;
        getNightMode();
    }
});

//nightmode event listener
nightModeSwitch.addEventListener("click",function(){
    if(nightMode==true){
        nightMode= false;
        getNightMode()
    }
    else{
        nightMode = true;
        getNightMode()
    }
});

function getNightMode(){
    
    switch(nightMode){
        case true:
            switchIcon.classList.remove('fa-sun','sun');
            switchIcon.classList.add('fa-moon','moon');
            sky.classList.remove('bgMorning');
            sky.classList.add('bgNight');
            cloud.classList.remove('cloudMorning');
            cloud.classList.add('cloudNight');
            break;
        case false:
            switchIcon.classList.remove('fa-moon','moon'); 
            switchIcon.classList.add('fa-sun','sun');
            sky.classList.remove('bgNight');
            sky.classList.add('bgMorning');
            cloud.classList.add('cloudMorning');
            cloud.classList.remove('cloudNight');
            break;
    }
};



