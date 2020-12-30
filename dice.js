var randomvar1=Math.random()*6;
var ran1=Math.floor(randomvar1)+1;
var dicenum="images/dice"+ran1+".png";//images/dice6.png
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",dicenum);
var randomvar2=Math.random()*6;
var ran2=Math.floor(randomvar2)+1;
var dicenum2="images/dice"+ran2+".png";//images/dice6.png
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",dicenum2);
if(ran1>ran2)
{
  document.querySelector("h1").innerHTML="Player1 won!!📌";
}
else if (ran1<ran2) {
  document.querySelector("h1").innerHTML="📌Player2 won!!";
}
else{
  document.querySelector("h1").innerHTML="📌Its a tie!!📌";
}
