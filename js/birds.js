 for(var x=1;x<=5;x++){
        const bird = document.createElement('div');
        const box = document.createElement('div');
        bird.classList.add('bird','bird'+x);
        box.classList.add('box','box'+x)
        document.querySelector('.birds').appendChild(bird);
        document.querySelector('.birds').appendChild(box);
    }



    // bird moving elements selection
    // let stickyParent = document.querySelector('.container');    
    // let sticky = document.querySelector('.assets');
    // let scrollWidth = sticky.scrollWidth;
    // let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;
    let birdDistance = 0;
    let moving = false;
    let birdDistanceMoved = 0;
    let birds = document.querySelector('.birdAssets');
    let blimpAssets = document.querySelector('.blimpAssets');

    // scrolling event listener
    document.addEventListener('scroll', function horizontalScroll(){
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        birds.scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3 + (birdDistanceMoved);//walking speed
        blimpAssets.scrollLeft = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3 ;
        birdDistance = (scrollWidth/verticalScrollHeight)*(-scrolled)*.3;//get the distance when scrolled
        //automatic moving when reach the distance
        if(birds.scrollLeft >= 2000){
            moving=true;
        }
    })

    // automatic moving 
    window.setInterval(() => {
        if(moving == true){
            birds.scrollLeft -= 3;//speed
            birdDistanceMoved = birds.scrollLeft - birdDistance;
        }
    }, 100);//interval
