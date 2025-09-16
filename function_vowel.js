/*let count =0;
function vowel( x){
    for(let v of x){
      if(v == 'a' || v == 'A' || v == 'e' || v == 'E' || v == 'i' || v == 'I' || v == 'o' || v == 'O' || v == 'u' || v == 'U'){
        count++
    }
}
 return count;
}
   let val= vowel("hello world");
   console.log(val);
*/
  const vowel = (x) =>{
    let count =0;
    for(let v of x){
      if(v == 'a' || v == 'A' || v == 'e' || v == 'E' || v == 'i' || v == 'I' || v == 'o' || v == 'O' || v == 'u' || v == 'U'){
        count++
    }
}
 return count;
}
   let val= vowel("hello world aa");
   console.log(val);