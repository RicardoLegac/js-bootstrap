"use strict";
try{
    myFunction();
}catch(error){
    console.log(error.name);
    console.log(error);
    console.log(error.message);
}finally{
    console.log("termina");
}

function myFunc(){
    console.log();
}