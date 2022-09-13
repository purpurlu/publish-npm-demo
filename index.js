exports.printMsg = function() {
    console.log("created npm package demo")
}

exports.repeatFn = function(count, callbackFn){
    for (let i = 0; i < count; i++) {
        callbackFn()
      }
    
    }
    
    // function logRandomNumber() {
    //   const randomNumber = Math.random();
    //   console.log(randomNumber)

// }

  
//   repeatFn(4, logRandomNumber)