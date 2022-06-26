// QUESTION 1
const targetdiv=document.getElementById('answer1');
const btn=document.getElementById('question1');

btn.onclick=function(){
    if(targetdiv.style.display!=="none"){
        targetdiv.style.display="none";
        document.querySelector("#plus1").style="rotate(-45deg)";
    }
    else{
        targetdiv.style.display="block";
        document.querySelector("#plus1").style.transform="rotate(45deg)";  
    }
}

// QUESTION 2
const targetdiv2=document.getElementById('answer2');
const btn2=document.getElementById('question2');

btn2.onclick=function(){
    if(targetdiv2.style.display!=="none"){
        targetdiv2.style.display="none";
        document.querySelector("#plus2").style="rotate(-45deg)";
    }
    else{
        targetdiv2.style.display="block";
        document.querySelector("#plus2").style.transform="rotate(45deg)";  
    }
}

// QUESTION 3
const targetdiv3=document.getElementById('answer3');
const btn3=document.getElementById('question3');

btn3.onclick=function(){
    if(targetdiv3.style.display!=="none"){
        targetdiv3.style.display="none";
        document.querySelector("#plus3").style="rotate(-45deg)";
    }
    else{
        targetdiv3.style.display="block";
        document.querySelector("#plus3").style.transform="rotate(45deg)";  
    }
}

// QUESTION 4
const targetdiv4=document.getElementById('answer4');
const btn4=document.getElementById('question4');

btn4.onclick=function(){
    if(targetdiv4.style.display!=="none"){
        targetdiv4.style.display="none";
        document.querySelector("#plus4").style="rotate(-45deg)";
    }
    else{
        targetdiv4.style.display="block";
        document.querySelector("#plus4").style.transform="rotate(45deg)";  
    }
}

// QUESTION 5
const targetdiv5=document.getElementById('answer5');
const btn5=document.getElementById('question5');

btn5.onclick=function(){
    if(targetdiv5.style.display!=="none"){
        targetdiv5.style.display="none";
        document.querySelector("#plus5").style="rotate(-45deg)";
    }
    else{
        targetdiv5.style.display="block";
        document.querySelector("#plus5").style.transform="rotate(45deg)";  
    }
}

// QUESTION 6
const targetdiv6=document.getElementById('answer6');
const btn6=document.getElementById('question6');

btn6.onclick=function(){
    if(targetdiv6.style.display!=="none"){
        targetdiv6.style.display="none";
        document.querySelector("#plus6").style="rotate(-45deg)";
    }
    else{
        targetdiv6.style.display="block";
        document.querySelector("#plus6").style.transform="rotate(45deg)";  
    }
}
