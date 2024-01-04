const arr =[10,20,30,40,50]
Array.prototype.myMap = function(cb) {
    const newArr=[];
    for(let i=0; i<this.length; i++){
        const el = cb(this[i], i, newArr);
        newArr.push(el)
    }
    return newArr;
};


const foo = arr.map((item, index, array)=>{
    return item * item;
});

console.log(foo)

console.log(`==My==`);

const myFoo = arr.myMap((item, index, array)=>{
    return item * item;
});

console.log(myFoo)