const building1 = document.querySelector('.building1');
const building2 = document.querySelector('.building2');
const building3 = document.querySelector('.building3');
const sky = document.querySelector('.sky');
const path = document.querySelector('.path');
const cloud = document.querySelector('.cloud');
const model = document.querySelector('.model');




window.setInterval(() => {
    cloud.scrollLeft +=1;
}, 500);

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

        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        path.scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3;//waling speed
        var loc = path.scrollLeft;

        building1.scrollLeft = loc ;
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
    
    
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 48:
                path.scrollBy({
                    top: 0,
                    left: 500,
                    behavior: 'smooth'
                  });
                  
                  break;
            case 37:
                // alert('left');
                break;
            case 38:
                // alert('up');
                break;
            case 39:
                // alert('right');
                
                break;
            case 40:
                // alert('down');
                break;
        }
    }


//selecting elements for nightmode
let nightModeSwitch = document.querySelector('.nightModeSwitch');
let switchIcon = document.querySelector('.switchIcon')
var nightMode = true;

//nightmode event listener
nightModeSwitch.addEventListener("click",function(){

    switch(nightMode){
        case true:
            switchIcon.classList.remove('fa-sun','sun');
            switchIcon.classList.add('fa-moon','moon');
            sky.classList.remove('bgMorning');
            sky.classList.add('bgNight');
            cloud.classList.remove('cloudMorning');
            cloud.classList.add('cloudNight');
            nightMode = false;
            break;
        case false:
            switchIcon.classList.remove('fa-moon','moon'); 
            switchIcon.classList.add('fa-sun','sun');
            sky.classList.remove('bgNight');
            sky.classList.add('bgMorning');
            cloud.classList.add('cloudMorning');
            cloud.classList.remove('cloudNight');
            nightMode = true;
            break;
    }
});



