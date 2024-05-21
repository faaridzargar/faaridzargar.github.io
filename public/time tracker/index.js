const daily=document.querySelector(".daily");
const weekly=document.querySelector(".weekly");
const monthly=document.querySelector(".monthly");

const span1=document.querySelector(".span1");
const span2=document.querySelector(".span2");
const span3=document.querySelector(".span3");
const span4=document.querySelector(".span4");
const span5=document.querySelector(".span5");
const span6=document.querySelector(".span6");

const span01=document.querySelector(".span1-1");
const span02=document.querySelector(".span1-2");
const span03=document.querySelector(".span1-3");
const span04=document.querySelector(".span1-4");
const span05=document.querySelector(".span1-5");
const span06=document.querySelector(".span1-6");

const Work=document.querySelectorAll("p.hrs")[0];
const Play=document.querySelectorAll("p.hrs")[1];
const Study=document.querySelectorAll("p.hrs")[2];
const Exercise=document.querySelectorAll("p.hrs")[3];
const Social=document.querySelectorAll("p.hrs")[4];
const Self=document.querySelectorAll("p.hrs")[5];

daily.onclick=()=>{
    daily.style.color="White";
    weekly.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="hsl(236, 100%, 87%)";
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        span1.innerHTML=data[0].timeframes.daily.current;
        span2.innerHTML=data[1].timeframes.daily.current;
        span3.innerHTML=data[2].timeframes.daily.current;
        span4.innerHTML=data[3].timeframes.daily.current;
        span5.innerHTML=data[4].timeframes.daily.current;
        span6.innerHTML=data[5].timeframes.daily.current;

        span01.innerHTML=data[0].timeframes.daily.previous;
        span02.innerHTML=data[1].timeframes.daily.previous;
        span03.innerHTML=data[2].timeframes.daily.previous;
        span04.innerHTML=data[3].timeframes.daily.previous;
        span05.innerHTML=data[4].timeframes.daily.previous;
        span06.innerHTML=data[5].timeframes.daily.previous;

    })
    .catch(error => console.error('Error:', error));
}

weekly.onclick=()=>{
    weekly.style.color="White";
    daily.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="hsl(236, 100%, 87%)";

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        span1.innerHTML=data[0].timeframes.weekly.current;
        span2.innerHTML=data[1].timeframes.weekly.current;
        span3.innerHTML=data[2].timeframes.weekly.current;
        span4.innerHTML=data[3].timeframes.weekly.current;
        span5.innerHTML=data[4].timeframes.weekly.current;
        span6.innerHTML=data[5].timeframes.weekly.current;

        span01.innerHTML=data[0].timeframes.weekly.previous;
        span02.innerHTML=data[1].timeframes.weekly.previous;
        span03.innerHTML=data[2].timeframes.weekly.previous;
        span04.innerHTML=data[3].timeframes.weekly.previous;
        span05=innerHTML=data[4].timeframes.weekly.previous;
        span06=innerHTML=data[5].timeframes.weekly.previous;


    })
    .catch(error => console.error('Error:', error));
}

monthly.onclick=()=>{
    monthly.style.color="White";
    daily.style.color="hsl(236, 100%, 87%)";
    weekly.style.color="hsl(236, 100%, 87%)";
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        span1.innerHTML=data[0].timeframes.monthly.current;
        span2.innerHTML=data[1].timeframes.monthly.current;
        span3.innerHTML=data[2].timeframes.monthly.current;
        span4.innerHTML=data[3].timeframes.monthly.current;
        span5.innerHTML=data[4].timeframes.monthly.current;
        span6.innerHTML=data[5].timeframes.monthly.current;

        span01.innerHTML=data[0].timeframes.monthly.previous;
        span02.innerHTML=data[1].timeframes.monthly.previous;
        span03.innerHTML=data[2].timeframes.monthly.previous;
        span04.innerHTML=data[3].timeframes.monthly.previous;
        span05.innerHTML=data[4].timeframes.monthly.previous;
        span06.innerHTML=data[5].timeframes.monthly.previous;


    })
    .catch(error => console.error('Error:', error));
}
