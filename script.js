/*let heading = document.getElementById("myid");
console.dir(heading);
console.log(heading);
let mypara = document.getElementsByClassName("myclass");
console.log(mypara);
console.dir(mypara);
*/
/*let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);
*/
/*let heading = document.querySelector("#myid");
console.log(heading);
console.log(heading);
let para = document.querySelectorAll(".myclass");
console.log(para);
console.dir(para);
*/
/* let heading = document.querySelector(".myjava");
//console.dir(heading);
    heading.innerHTML = "apna colleage";
    console.log(heading); */
    /* let heading = document.querySelector(".myjava");
    heading.innerText = heading.innerText +  " from Muhammad ibrahim";
    console.log(heading); */
    /* let divs = document.querySelectorAll(".box");
    divs[0].innerText = " new value 1";
    divs[1].innerText = " new value 2";
    divs[2].innerText = " new value 3";
 */
let divs = document.querySelectorAll(".box");
      let i=1;
    for(div of divs){
        div.innerText = `new value ${i}`
        i++;
    }