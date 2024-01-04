const arr =[10,20,30,40,50]
Array.prototype.myFind = function(cb) {
    for(let i=0; i<this.length; i++){
        const el = this[i];
        const currentBoolean = cb(el, i, this);
        if(currentBoolean === true) {
            return el;
        }
    }
};


const foo = arr.find(item =>{
    return item > 23;
});

console.log(foo)

console.log(`==My==`);

const myFoo = arr.myFind(item =>{
    return item > 23;
});

console.log(myFoo)