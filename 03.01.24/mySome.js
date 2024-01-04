const arr =[10,20,30,40,50]
Array.prototype.mySome = function(cb) {
    for(let i=0; i<this.length; i++){
        const el = this[i];
        const currentBoolean = cb(el, i, this);
        if(currentBoolean === true) {
            return true;
        }
    }
    return false;
};

const foo = arr.some(item =>{
    return item > 50;
});
console.log(foo)

console.log(`==My==`);

const myFoo = arr.mySome(item =>{
    return item > 50;
});

console.log(myFoo)