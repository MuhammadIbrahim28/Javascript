/* let arr = [2,3,4,5];
arr.forEach((value) =>{
  console.warn(value);
});
 */
/* let arr = [2,3,4,5];
  let newarr = arr.map((value) =>{
            return value*2;
  })
  console.warn(newarr); */
  /* let arr = [2,3,4,5];
    let newarr = arr.filter((value) =>{
          return value%2 == 0;
    });
    console.log(newarr); */
    /* let arr = [2,3,4,5];
    const newval = arr.reduce((result, currentval) =>{
            return result+currentval;
    });
    console.log(newval); */
    //let arr = [2,3,4,5];
   /*  const funvalue = (a,b) =>{
        return a+b;
    }
    console.warn(funvalue(10,20)) */
    /* let arr = ["apple","mango","banana"];
      let [f1,...f3] =arr;
      console.warn(f3) */
      let person ={
           list :"friend",
           name:['ibrahim','mazz','sana'],
           getfun:function(){
            console.warn(this.list,this.name);
           }
      }
    person.getfun();

