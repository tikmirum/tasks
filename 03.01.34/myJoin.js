const arr =[10,20,30,40,50]
Array.prototype.myJoin = function(name) {
    const newArr=[];
    for(let i=0; i<this.length; i++){
        newArr.push(i);
        newArr.push(name);
    }
    return newArr;
};


const myFoo = arr.myJoin('+');

console.log(myFoo)