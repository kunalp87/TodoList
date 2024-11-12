let btn=document.querySelector("#btn");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click",()=>{
    console.log("clicked");
    let inputList=document.createElement("li");
    inputList.innerText=input.value;
    console.log(inputList);
    ul.appendChild(inputList);
    input.value="";
    let delBtn=document.createElement("Button");
    delBtn.classList.add("remove");
    delBtn.innerText="Remove";
    inputList.appendChild(delBtn)

});

delBtn=document.createElement("Button");
ul.addEventListener("click",(event)=>{
    // console.dir(event.target);
    
    if(event.target.nodeName=="BUTTON"){
        let re=event.target.parentElement;
        console.log(re);
        re.remove();
        // re.remove();
        console.log("Removed");
        
    }
})