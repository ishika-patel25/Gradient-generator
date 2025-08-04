let btn1 = document.getElementById("left");
let btn2 = document.getElementById("right");
let copy = document.getElementById("copy");
 const handlecolor = ()=>{
    let hex = "0123456789abcdef";
    let color = "#";
    for(let i = 0 ; i<6 ; i++)
    {
      color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
 }

 let color1 = "#000000" ;
 let color2 = "#ff0000" ; 


const handlebutton2 = ()=>
{
    color2 = handlecolor();
    document.body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;
    btn2.style.backgroundColor = `${color2}`;
    copy.innerHTML=`linear-gradient(to right, ${color1} , ${color2})`;
    btn2.innerText = `${color2}`;
    
} 

const handlebutton1 =()=>
{
    color1 = handlecolor();
    document.body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;
    btn1.style.backgroundColor = `${color1}`;
    copy.innerHTML=`linear-gradient(to right, ${color1} , ${color2})`;
    btn1.innerText = `${color1}`;
    
}

btn2.addEventListener("click" ,handlebutton2);
btn1.addEventListener("click" ,handlebutton1);

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(copy.innerText);
    alert("Value copied!")
})