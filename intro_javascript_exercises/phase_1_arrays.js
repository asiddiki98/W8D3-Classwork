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
    
}