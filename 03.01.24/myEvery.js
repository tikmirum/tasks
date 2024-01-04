const arr =[10,20,30,40,50]
Array.prototype.myEvery = function(cb) {
    for(let i=0; i<this.length; i++){
        const el = this[i];
        const currentBoolean = cb(el, i, this);
        if(currentBoolean === false) {
            return false;
        }
    }
    return true;
};

const foo = arr.every(item =>{
    return item > 5;
});
console.log(foo)

console.log(`==My==`);

const myFoo = arr.myEvery(item =>{
    return item > 5;
});

console.log(foo)