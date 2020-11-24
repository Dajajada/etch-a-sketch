let container=document.querySelector("#container");
let color="black";
let n=prompt("Indica el numero de casillas");

function randomColor(){
    let red=Math.trunc((Math.random()*255+1));
    let blue=Math.trunc((Math.random()*255+1));
    let green=Math.trunc((Math.random()*255+1));
    let color=`rgb(${red}, ${blue}, ${green})`
    return color;
}


function drawcontainer(){
    container.style.gridTemplateColumns = (`repeat(${n}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${n}, 1fr`);
    for(let i=0;i<(n*n);i++){
        const div=document.createElement('div');
        div.classList.add('content');
        div.setAttribute('id',`div${i}`);
        div.setAttribute('onmouseover','mouseOver(this)');
       
        container.appendChild(div);
    }
   

}
function deletecontainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function mouseOver(obj){
    if(color=="black"){
        obj.style.background="black";
    }
    if(color=="rainbow"){
        obj.style.background=randomColor();
    }
}

function newn(e){
    n=Math.trunc(e.value);
     value=document.getElementById("value").innerHTML=n;
     deletecontainer();
   drawcontainer();
   console.log(n);
}

const rainbow=document.getElementById("rainbow");
const black=document.getElementById("black");
const clear=document.getElementById("clear");
let value=document.getElementById("value").innerHTML=n;


rainbow.addEventListener('click',()=>{
    color="rainbow";
})
black.addEventListener('click',()=>{
    color="black";
})
clear.addEventListener('click',()=>{
    const x=document.querySelectorAll(".content");
    x.forEach(element => {
        element.style.background="white";
        
    });
})



drawcontainer();

