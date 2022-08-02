setInterval(setClock,1000);

let hourHand=document.querySelector(".hourHand");
let minuteHand=document.querySelector(".minuteHand");
let secondHand=document.querySelector(".secondHand");

function setClock(){
    let currentDate=new Date();
    let secondRatio=currentDate.getSeconds()/60;
    let minuteRatio=(secondRatio+currentDate.getMinutes())/60;
    let hourRatio=(minuteRatio+currentDate.getHours())/12;
    setRotation(hourHand,hourRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(secondHand,secondRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}
setClock();
