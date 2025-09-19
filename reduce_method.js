/*let arr = [1,2,3,4];
   const newarr= arr.reduce((result, currentvalue)=>{
     return result+currentvalue;
   });
   console.log(newarr);
   */
  let arr = [1,2,3,4];
   const newarr= arr.reduce((prv, currentvalue)=>{
     return prv > currentvalue ? prv :currentvalue;
   });
   console.log(newarr);