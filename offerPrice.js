/*let items=[250,645,300,900,50];
let copy_items =[];
for(let value of items){
     //console.log(value);
     copy_items= 90/100*value;
     console.log(copy_items);
}*/
let items=[250,645,300,900,50];
  for(let i=0; i<items.length; i++){
      let offer = items[i]/10;
      items[i] -=offer;
  }
  console.log(items);
