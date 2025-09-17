/* let btn1 = document.querySelector("#btn1");
    btn1.onclick = () =>{
    console.log("button was click");
   }
   btn1.onmouseover = () =>{
    console.log("btn1 was mouseover");
    btn1.style.backgroundColor = "red";
   } 
   btn1.addEventListener("click",() =>{
    console.log("event was click");
   }); */
   let mode = document.querySelector("#mode");
      let currmode = "light";
      mode.addEventListener("click",() =>{
            if(currmode == "light"){
              currmode = "dark";
              document.body.style.backgroundColor = "black";
            }else{
                currmode = "light";
                document.body.style.backgroundColor = "white";
            }
            console.log(currmode);
      });