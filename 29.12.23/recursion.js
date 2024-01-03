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

let sum = 1;
let counter = 1;
function  recursion2(params) {
    if(params < 1){
        return "number must be greater than 1"
    }
    if(params === 1){
        return 1;
    };
    if(sum < params){
        let temp = sum++;
        let finish = sum * recursion2(params);
        if(counter === temp){
            sum = 1;
        }
        return finish;
    }
    return 1;
}

recursion2(5);