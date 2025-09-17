let data = {
     list:'friends',
     names:['ibrahim','maaz','nasir'],
     getfriend : function(){
        this.names.map((name) =>{
            console.warn(this.list,name)
        })
     }
}
data.getfriend();