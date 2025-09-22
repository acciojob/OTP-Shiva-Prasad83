//your JS code here. If required.
const inputs=document.querySelectorAll(".code");
inputs[0].focus();
        // console.log(inputs);
        inputs.forEach((input,index)=>{
            input.addEventListener("keyup",(e)=>{
                if(index!=inputs.length-1 && e.key!="Backspace"){
                    let focused=inputs[index+1];
					focused.focus();
                }
                if(index!=0 && e.key=="Backspace"){
                    inputs[index].innerText="";
                   let focused=inputs[index-1];
					focused.focus()
                }else{
                    inputs[index].innerText="";
                }
            })
        })