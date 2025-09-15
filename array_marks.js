let marks = [85,97,44,37,76,60];
 let sum =0;
 let length = marks.length;
 let average =0;
   for(let i=0; i<length; i++){
      //console.log(marks[i]);
     sum +=marks[i];
   }
   average = sum/length;
   console.log("Average of 5 subject is ",average);
