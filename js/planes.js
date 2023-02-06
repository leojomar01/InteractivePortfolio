

let planes = [
    document.querySelector('.planeSpl'),
    document.querySelector('.planeOts'),
    document.querySelector('.birdAssets'),
    document.querySelector('.birdAssets2')
];

let planeDistance = [0,0,0,0,0];
let moving = [false,false,false,false,false];
let planeDistanceMoved = [0,0,0,0,0];
let movingSpeed = [2,2,-3,-3,0];
let movingInterval =[10,10,100,100,10,0];
let triggerLocation = [2000,3700,2000,3700,0];


 // create 'bird' 
 for(var x=1;x<=8;x++){
    const bird = document.createElement('div');
    const box = document.createElement('div');
    bird.classList.add('bird','bird'+x);
    box.classList.add('box','box'+x)
    document.querySelector('.birds').appendChild(bird);
    document.querySelector('.birds').appendChild(box);
}
for(var x=1;x<=5;x++){
    const bird = document.createElement('div');
    const box = document.createElement('div');
    bird.classList.add('bird','bird2'+x);
    box.classList.add('box','box2'+x)
    document.querySelector('.birds').appendChild(bird);
    document.querySelector('.birds').appendChild(box);
}

    // scrolling event listener
for(let i =0;i<=3;i++){
    document.addEventListener('scroll', function horizontalScroll(){
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        planes[i].scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*speed + (planeDistanceMoved[i]);//walking speed
        planeDistance[i] = (scrollWidth/verticalScrollHeight)*(-scrolled)*speed;//get the distance when scrolled
        if(planes[i].scrollLeft >= triggerLocation[i]){
            moving[i]=true;
        }
    });

    window.setInterval(() => {
        if(moving[i] == true){
            planes[i].scrollLeft += movingSpeed[i];//speed
            planeDistanceMoved[i] = planes[i].scrollLeft - planeDistance[i];
        }
    }, movingInterval[i]);//interval
   
}
