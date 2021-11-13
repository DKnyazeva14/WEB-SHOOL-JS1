//  'Nikita' -> 'Hi, Nikita'
hiFunction()
 function hiFunction() {
     let name = "Nikita"
     console.log(name)
 } 



// 5, 6 -> 11
sum()
 function sum() {
    //code here
    let x = 5
    let y = 6
    console.log(x+y)
}


//5 -> false
//0 -> true
//4 -> true
isEven()
 function isEven() {
    //code here
    var even = 5
    if (even % 2 == 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}


// 2 -> i have 2 apples
apples()
 function apples() {
    //code here
    let number = 2
    let phrase = "i have 2 apples"
    if (2) {
        console.log(phrase)
    }
}
// 4 -> 16
getPower()
 function getPower () {
    //code here
    let num = 99
    console.log(num*num)
}

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
