const arr =[10,20,30,40,50]
Array.prototype.myJoin = function(name) {
    if(typeof name !== 'string'){
        console.log('argument must be a string')
        return
    }
    let newName = name;
    let newString = '';
    for(let i=0; i<this.length; i++){
        const el = this[i];
        if(i === this.length - 1){
            newName = "";
        }
        const bull = `${el}${newName}`;
        newString += bull
    }
    return newString;
};


const myFoo = arr.myJoin(' ');

console.log(myFoo)