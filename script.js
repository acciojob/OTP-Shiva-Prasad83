//your JS code here. If required.
const inputs=document.querySelectorAll(".code");
        // console.log(inputs);
        inputs.forEach((input,index)=>{
            input.addEventListener("input",(e)=>{
                if(index<inputs.length-1){
                    let focused=inputs[index+1];
					focused.focus();
                }
            });
			input.addEventListener("keyup",(e)=>{
				if(e.key=="Backspace" && index!=0){
					inputs[index].innerText="";
					let focused=inputs[index-1];
					focused.focus();
				}else{
					inputs[index].innerText="";
				}
			})
			    //            if(index!=0 && e.key=="Backspace"){
     //                inputs[index].innerText="";
     //               let focused=inputs[index-1];
					// focused.focus()
     //            }else{
     //                inputs[index].innerText="";
     //            }
        })