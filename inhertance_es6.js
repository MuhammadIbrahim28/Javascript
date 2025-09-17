class category{
       constructor(){
        console.warn("super");
       }
    dryfruits(){
     console.warn("this is dry fruits");
    }
    pomefruits(){
    console.log("this is pomefruits");

    }
} class fruit extends category{
       constructor (){
        super();
        console.warn("constructor");
       }
       getfruit(){
        console.warn("get fruit");
       }
}
  let c1 = new category();
  let f1 = new fruit();
  f1.dryfruits();
  f1.getfruit();