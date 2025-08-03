// accessing btns and the screen to display values
let btns=document.querySelectorAll("button");
let box=document.querySelector(".box");

// created array to store values
let arr=[];
// forEach to add event listner to all buttons
btns.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        e.preventDefault();

        box.innerText=box.innerText+val.value
        if(val.value!="="){
        arr.push(val.value);
        }

        if(val.value=="="){
           let a=arr.toString().replaceAll(',',"");
           console.log(a);
            try{
            let calc=eval(a);
            box.innerHTML=calc;
            arr=[];
            arr.push(calc);
            }
            catch(error){
                box.innerText="Expression_error";

            }
        }
        if(val.value=="AC"){
            arr=[];
            box.innerHTML='';
        }
    })
})
console.log(calc("5.6+6"));


