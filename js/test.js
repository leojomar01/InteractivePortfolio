let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');
let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;



let planeDistance = [0,0];
let moving = [false,false];
let planeDistanceMoved = [0,0];
let planes = [document.querySelector('.planeOts'),document.querySelector('.planeSpl')];

    // scrolling event listener
for(let i =0;i<=1;i++){
    document.addEventListener('scroll', function horizontalScroll(){
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        planes[i].scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3 + (planeDistanceMoved[i]);//walking speed
        planeDistance[i] = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3;//get the distance when scrolled
        console.log(planes[0].scrollLeft)
        console.log(planes[1].scrollLeft)

        if(planes[0].scrollLeft >= 200){
            moving[0]=true;
        }
        if(planes[1].scrollLeft >= 300){
            moving[1]=true;
        }
    });

    window.setInterval(() => {
        if(moving[i] == true){
            planes[i].scrollLeft += 2;//speed
            planeDistanceMoved[i] = planes[i].scrollLeft - planeDistance[i];
        }
    }, 10);//interval
}
