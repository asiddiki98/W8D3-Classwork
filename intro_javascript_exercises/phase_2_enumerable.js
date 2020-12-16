// function callback(num) {
//     return num * 2;
// }

Array.prototype.myEach = function(callback) {
    // let newArray = [];
    for (i = 0; i < this.length; i++) {
        callback(this[i]);
    };
    // return newArray;
};


Array.prototype.myMap = function(callback) {
    let mapped = [];
    this.myEach(ele => mapped.push(callback(ele)));
    return mapped;
};

Array.prototype.myReduce = function(callback, acc = this[0]) {
    let 
    this.myEach(ele => callback(acc, ele));
    return acc;
};
//def my_inject(arr, acc = arr[0], &prc)
// acc ||= arr[0]  
// arr.each()
//end


// arr.inject(100) {|acc = 100, ele = arr[0]| }