function recursion(params) {
    if(params < 1){
        return "number must be greater than 1"
    }
    if(params === 1){
        return 1;
    } else {
        return params * recursion(params-1)
    };
}

recursion(5)

function recursion1(params) {
    if(params < 1){
         return "number must be greater than 1"
    }
     if(params === 1){
         return 1;
     };
    let finish =1;
    for(let i = 1;i <= params; i++){
         finish = finish * i;
    }
         return finish;
}

recursion1(5)
