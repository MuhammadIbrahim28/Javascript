/* let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id); */
/* let newheading = document.createElement("h2");
   newheading.innerText = " Hi, I am new";
   document.querySelector("body").prepend(newheading); */
   const button = document.createElement("button");
  button.innerText = "Click me!";

  // prepend the actual element, not a string
  document.body.prepend(button);

  // style it
  button.style.backgroundColor = "red";
  button.style.color = "white"; 