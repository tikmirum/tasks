const arr =[10,20,30,40,50]
Array.prototype.myFilter = function(cb) {
    const newArr = [];
    for(let i=0; i<this.length; i++){
        const el = this[i];
        const currentBoolean = cb(el, i, this);
        if(currentBoolean === true) {
            newArr.push(el)
        }
    }
    return newArr;
};

const foo = arr.filter(i=>{
    return i >= 30;
})

console.log(foo);

console.log(`==My==`);

const myFoo = arr.myFilter(i=>{
    return i >= 30;
})

console.log(myFoo)