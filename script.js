gsap.fromTo(".logo",{x:50, borderRadius:5}, 
{x:-25, borderRadius:50, duration:3})

gsap.from(".opening", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
});

const items = document.querySelectorAll('.item');
items.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        removeFocus();
        item.classList.add('selected');
    })
    removeFocus = ()=>{
        items.forEach(item =>{
            item.classList.remove('selected');
        })
    }
})

function openingContainer (){
    const openingData = new Date ("June 01, 2022 10:00");
    const now = new Date();
    const diff = openingData - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <=0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent=0;
        document.querySelector('.minutes').textContent=0;
        document.querySelector('.seconds').textContent=0;
        clearInterval(timerID);
        storeOpening();
    }
}
let timerID = setInterval(openingContainer, 1000);

function storeOpening (){
    const heading = document.querySelector('h1');
    heading.textContent = "We are finally open!";
    heading.classList.add('opened');
}

const buttonMusic = document.querySelector('.music');

buttonMusic.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})
buttonMusic.addEventListener("dblclick", function() {
    document.querySelector("#myAudio").pause();
})
