var arr=[{name:"Ajinkya", pass:"ajinkya@"},{name:"aj2", pass:"aj@2"}, {name:"aj3", pass:"aj@3"}];

exports.verify=(names,pass)=>{

       var obj=arr.find(ob=>{return ob.name==names && ob.pass==pass});
        console.log(obj);
         if(obj!==undefined)
        return true;
        else
        return false;
}