let span=document.querySelector(".icon");
let ul =document.querySelector(".list");
let button=document.querySelector(".btn");
let div=document.querySelector(".hide");
span.onclick =function(){
    if(ul.style.display==="none"){
        ul.style.display="block";
    }
    else{
        ul.style.display="none";
    }
}
button.onclick =function(){
    if(div.style.display==="none")
    {
        div.style.display="block";
        button.innerText="Show Me less";
    }
    else{
        div.style.display="none";
        button.innerText="Show Me More";
    }
    
}
