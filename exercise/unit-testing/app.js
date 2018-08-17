
var words = ['dog','cat','camel','unicorn']

// function addS(arr){
//     var newArr = []
//         for(var i = 0; i < arr.length; i++){
//             if (typeof arr[i]==="string"){
//                 newArr.push(`${arr[i]}s`)
//             } else{
//                 return "no numbers"
//             }
//         }

//     return newArr
// }

function addS(arr){
    var arrNew = []
    for (var i=0; i<arr.length;i++){
        if(typeof arr[i] =="number"){
            return "no numbers"
        } else if(arr[i].lastIndexOf('s') !== arr[i].length - 1){
            arrNew.push(`${arr[i]}s`)
        } else {
            arrNew.push([i])
        }
        return arrNew
}
}

module.exports = {addS: addS }




// assert(actual, expected)

// var assert = function(actual, expected){
//     try{
//     if(actual !== expected){
//         throw{
//             type: "fail",
//             details:{ actual: actual, expected: expected }
//         }
//     } else {
//         console.log("success",{
//             type: "test passed", 
//             details:{actual: actual, expected: expected } })
//     }
//     }
//      catch(err){
//          console.log(err)
//      }
// }

// function nums(num1, num2){
//     return num1 + num2
// }

// assert(true, true)
// assert("abc", "abc")
// assert(true, false)
// assert(nums(1,2),3)
// assert(nums(2,2),4)
// assert(nums(3,2),5)
// assert(nums(4,2),6)
// assert(nums(5,2),7)
// assert(nums(6,2),8)