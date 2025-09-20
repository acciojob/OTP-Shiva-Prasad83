//your JS code here. If required.
const inputs=document.querySelectorAll(".code");
        // console.log(inputs);
        inputs.forEach((input,index)=>{
            input.addEventListener("keyup",(e)=>{
                if(index!=inputs.length-1 && e.key!="Backspace"){
                    inputs[index+1].focus();
                }
                if(index!=0 && e.key=="Backspace"){
                    inputs[index].innerText="";
                    inputs[index-1].focus();
                }else{
                    inputs[index].innerText="";
                }
            })
        })