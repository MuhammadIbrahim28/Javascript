/*let nums = [2,3,4,5];
nums.forEach((v)=>{
    console.log(v*v);
});
*/
let nums = [2,3,4,5];
 let callback =(num) =>{
    console.log(num*num);
 }
 nums.forEach(callback);