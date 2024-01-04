const arr =[10,20,30,40,50]
Array.prototype.myFindIndex = function(cb) {
    for(let i=0; i<this.length; i++){
        const el = this[i];
        const currentBoolean = cb(el, i, this);
        if(currentBoolean === true) {
            return i;
        }
    }
};


const foo = arr.findIndex(item =>{
    return item > 23;
});

console.log(foo)

console.log(`==My==`);

const myFoo = arr.myFindIndex(item =>{
    return item > 23;
});

console.log(myFoo)