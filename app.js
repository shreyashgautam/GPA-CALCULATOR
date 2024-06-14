let grades=document.querySelectorAll(".grade");
let credits=document.querySelectorAll(".credit");
let btn=document.querySelector("button");
let bottom=document.querySelector(".bottom");
let n=document.querySelector(".b");
let score=[];
let c=[];
function clearall(){
    score=[];
    c=[];
}
function check(){
    if(score.length!=c.length){
        alert("ERROR!! Insufficient Data !!");
        return false;
    }
    else{
        return true;
    }
}
function calc(){
    let totalc=0;
    for(let i=0;i<c.length;i++){
        c[i]=c[i]*1;
        totalc=totalc+c[i];
    }
    console.log(totalc);
    totalscore=0;
    for(let i=0;i<c.length;i++){
        totalscore+=score[i]*c[i];
    }
    if(check()==true){
        console.log(totalscore);
    let t=totalscore/totalc;
    let ans=Math.round(t * 100) / 100
    console.log(ans);
    n.innerText=`GPA IS ${ans}`;
    }
    else{
        n.innerText=`DATA INSUFFICIENT`;
    }
}
btn.addEventListener("click",function(){
    console.log("submit button was clicked");
    for(let i=0;i<grades.length;i++){
       if(grades[i].value=="S"||grades[i].value=="s"){
        score.push(10);
       }
       else if(grades[i].value=="A"||grades[i].value=="a"){
        score.push(9);
       }
       else if(grades[i].value=="B"||grades[i].value=="b"){
        score.push(8);
       }
       else if(grades[i].value=="C"||grades[i].value=="c"){
        score.push(7);
       }
       else if(grades[i].value=="D"||grades[i].value=="d"){
        score.push(6);
       }
       else if(grades[i].value=="E"||grades[i].value=="e"){
        score.push(5);
       }
       else{
        continue;
       }
       
    }
    for(let i=0;i<credits.length;i++){
        if(credits[i].value=="")
            {
                continue;
            }
            else{
                c.push(credits[i].value);
            }
        
    }
    console.log(score);
    console.log(c);
    calc();
    clearall();
})

