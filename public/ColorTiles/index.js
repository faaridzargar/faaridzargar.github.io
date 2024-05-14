var kount=0;
var randomNumber1=Math.random();
var randomNumber1=Math.floor(randomNumber1*3);

var randomNumber2=Math.random();
var randomNumber2=Math.floor(randomNumber2*3);

var randomNumber3=Math.random();
var randomNumber3=Math.floor(randomNumber3*3);

var randomNumber4=Math.random();
var randomNumber4=Math.floor(randomNumber4*3);

var randomNumber5=Math.random();
var randomNumber5=Math.floor(randomNumber5*3);

var randomNumber6=Math.random();
var randomNumber6=Math.floor(randomNumber6*3);

var randomNumber7=Math.random();
var randomNumber7=Math.floor(randomNumber7*3);

var randomNumber8=Math.random();
var randomNumber8=Math.floor(randomNumber8*3);

var randomNumber9=Math.random();
var randomNumber9=Math.floor(randomNumber9*3);

const btn1=document.querySelector(".btn1"); 
const btn2=document.querySelector(".btn2"); 
const btn3=document.querySelector(".btn3");  
const btn4=document.querySelector(".btn4"); 
const btn5=document.querySelector(".btn5"); 
const btn6=document.querySelector(".btn6"); 
const btn7=document.querySelector(".btn7"); 
const btn8=document.querySelector(".btn8"); 
const btn9=document.querySelector(".btn9");


var list=[randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5,randomNumber6,randomNumber7,randomNumber8,randomNumber9];

let r=0;
    g=0;
    b=0

for (let i=0; i<list.length; i++) {
    if(list[i]==0){
        r++;
    }
    if(list[i]==1){
        g++;
    }
    if(list[i]==2){
        b++;
    }
}

let p=0;

if(r==g && g==b && b==r){
   p=1;
}
else{
    p=0;
}

function Winner() {
    list.sort((a, b) => a - b); 
let count = 1, 
    max = 0, 
    el; 
  
for (let i = 1; i < list.length; ++i) { 
    if (list[i] === list[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        el = list[i]; 
    } 
} 
return el;
}

function Result(){
    if(p==1){
        document.querySelector("p").innerHTML="You draw";
        draw();
    }
    else if (Winner()===UserInput){
        document.querySelector("p").innerHTML="You win";
        win();
    } else{
        document.querySelector("p").innerHTML="Try Again loser!";
        lose();
    }
}

function push(){
    var audio=new Audio("sounds/button.mp3")
    audio.play();
}
function flip(){
    var audio=new Audio("sounds/flip2.mp3")
    audio.play();
}

function win(){
    var audio=new Audio("sounds/win.mp3")
    audio.play();
}

function lose(){
    var audio=new Audio("sounds/error.mp3")
    audio.play();
}

function draw(){
    var audio=new Audio("sounds/draw.mp3")
    audio.play();
}


var R=["Red","Blue","Purple"];




btn1.onclick = () => btn1.style.backgroundColor=R[randomNumber1];
btn2.onclick = () => btn2.style.backgroundColor=R[randomNumber2];
btn3.onclick = () => btn3.style.backgroundColor=R[randomNumber3];
btn4.onclick = () => btn4.style.backgroundColor=R[randomNumber4];  
btn5.onclick = () => btn5.style.backgroundColor=R[randomNumber5];
btn6.onclick = () => btn6.style.backgroundColor=R[randomNumber6];
btn7.onclick = () => btn7.style.backgroundColor=R[randomNumber7];
btn8.onclick = () => btn8.style.backgroundColor=R[randomNumber8];
btn9.onclick = () => btn9.style.backgroundColor=R[randomNumber9]; 

const btns=document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", function() {
      kount++;
      flip();
      if(kount===9){
        Result();
        retryButton.style.visibility="visible";
      }
      if(kount>9){
        location.reload();
      }
    });
  });

const btnRed=document.querySelector(".red");
const btnBlue=document.querySelector(".blue");
const btnPurple=document.querySelector(".purple");

btnRed.addEventListener("click",function(){
    push();
    btnRed.classList.add("press");
    UserInput=0;
    
})

btnBlue.addEventListener("click",function(){
    push();
    UserInput=1;
    btnBlue.classList.add("press");
    
})

btnPurple.addEventListener("click",function(){
    push();
    UserInput=2;
    btnPurple.classList.add("press");
    
})

const retryButton=document.querySelector(".retry");
retryButton.onclick= () => location.reload();



