// function myUniq(arr) {
//     debugger
//     var uniqElements = {};
//     arr.ofEach(ele => {
//         uniqElements[ele] = 0;
//     });
//     console.log(Object.getOwnPropertyNames(uniqElements));
// } bad, don't do this

Array.prototype.uniq = function(){
    let uniqElements = [];
    this.forEach(ele => {
        if (!uniqElements.includes(ele)) {
            uniqElements.push(ele);
        }
    });
    console.log(uniqElements)
};

Array.prototype.twoSum = function() {
    let sums = [];

    this.forEach((el1,i)=> {
        this.forEach((el2,j) =>{
            if ((j > i) && ( el1+el2 === 0 ) ){
               sums.push([i,j]); 
            }
        });
    });
    return sums;  
};


Array.prototype.transpose = function() {
    let transposed = [];

    this.forEach((row, r) =>{
        let temp = [];
        this.forEach((col, c)=>{
            temp.push(this[c][r]);

        });
        transposed.push(temp);
    });
    return transposed;
};

