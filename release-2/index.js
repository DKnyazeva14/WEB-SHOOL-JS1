// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]
sorting ()
function sorting() {
    let numbrs = [1, 5, 2]
    let direction = 1
    if (direction = 1) {
        numbrs.sort(function(a, b) { return a - b; })
        console.log(numbrs)
    }
    if (direction = -1) {
        numbrs.sort(function(a, b) { return b - a; })
        console.log(numbrs)

    }
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
export const deepSorting = () => {
    //code here
}




// ['d', 1, 3, null] -> [1, 3]
getNumbers()
function getNumbers() {
    let arr1 = ['d', 1, 3, null]
    let res = arr1;
for (var i = arr1.length - 1; i >= 0; i--) {
  if (typeof arr1[i] !== "number")
    arr.splice(i, 1);
}
console.log(JSON.stringify(res))
}




// [1, 5, 34, -100] -> -100
min()
function min() {
    //code here
    let array = [1, 5, 34, -100]
    console.log( Math.min.apply(null, [1, 5, 34, -100]))
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
getSet()
function getSet() {
    //code here
    function unique(arr) {
        let result = [];
      
        for (let num of arr) {
          if (!result.includes(num)) {
            result.push(num);
          }
        }
        return result;
      }
    let ar = [1, 1, 1, 3, 4, 2, 2]
    console.log( unique(ar) )
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
findTheMostReapetedEls()
function findTheMostReapetedEls()  {
    //code here
    let array1 = [1, 1, 1, 3, 4, 2, 2, 2]
   
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
export const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
export const checkForBadWord = () => {
    //code here
}

export const customSome = () => {
    //code here
}

export const customFind = () => {
//code here
}

export const customMap = () => {
    //code here
}

export const customReducer = () => {
    //code here
}

export const custonFilter = () => {
    //code here
}