 class fruit{
    // name = "Apple";
    constructor(name){
      this.name = name;
       //document.write(this.name);
    }
     get_name() {
      // document.write(this.name);
        return this.name;
    }
 }
 let obj = new fruit("graps");
   document.write( obj.get_name());