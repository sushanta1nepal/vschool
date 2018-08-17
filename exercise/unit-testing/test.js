var chai = require('chai')
var myFunctions = require('./app.js')
var assert = chai.assert
var addS = myFunctions.addS

console.log(assert)

console.dir(myFunctions)

describe("create a function that adds an 's' to the end of every word in an array", function(){
    it("should end with an 's'", function(){
        assert.deepEqual(addS(['dog', 'cat','aligator']), ['dogs', 'cats', 'aligators'] )
    })
    it('should not allow numbers into the array',function(){
        assert.equal(addS(['dogs',0, 3]), 'no numbers')
    })
    it("should not add s if there is one already present", function(){
        assert.deepEqual(addS(['dogs', 'pigs', 'cow','smegol']), ['dogs','pigs','cow','smegols'])
    }
    )
})

