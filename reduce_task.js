let input = prompt("enter a number");
 let arr =[];
 for(let i=1; i<=input; i++){
     arr[i-1] =i;
 }
   const newarr = arr.reduce((pre , cureent) =>{
       return pre+cureent;
   });
   console.log("sum",newarr);
    
   const facto = arr.reduce((pre , cureent) =>{
       return  pre*cureent;
   });
   console.log("facto",facto);