// attempt 1
const newArr = []

const removeDuplicates = (strArr) => {
   newArr = strArr.filter(str, index, curr => { index == curr.indexOf(str)})
//   return newArr
  }
  
  const strConst = [] 
  
  const longetStr = (newArr) => {
    let temp = ''
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].length >= temp.length){
        temp = newArray[i] 
      }
      return strConst.push(temp)
    }
  }
  
  const longestConsec = (strConst, k) => {
    let res = strConst.join('')
    if(strConst.length < k) {
      longestStr()
    } else {
      return res
    }
  }

  // this returned the strings consecutively with no reorder or edge case logic
  
// attempt 2

// let strArr = string array
// let k = integer signifying # of strings to return after ordering longest to shortest
// let n = strArr.length() 
// if (n === 0 || k > n || k <= 0) => ''

let strArr
let numForConsec
let numOfStr = strArr.length

//first let's make a check function that returns an empty string if data in insufficient for the parameters.

const checkFunction = (numForConsec) => {
    for(let i = 0; i < numOfStr; i++){
        if(!numOfStr ||numOfStr < numForConsec || numForConsec <= 0){
            return ''
        }
    } 
}

// let's reoder the strings first so I can use indexes to navigate

const sortByLongest = (strArr) => {
    strArr.sort( (a,b) => b.length - a.length || b.localeCompare(a))
}

const strBuilder = (strArr, numberForConsec) => {
    let concattedStr = ''
    for(i = 0; i < numberForConsec; i++) {
        concattedStr += strArr[i]
        return concattedStr
    }
}

// now let's make a function that accepts the sort function above, and returns numberForConsec strings concatted 

// const longestConsec = (strArr, numForConsec) => {
//     checkFunction(numForConsec) ? '' : () => {
//     (sortByLongest(strArr))
//     return strBuilder(strArr, numForConsec)}
// }
// the ternary doesn't seem to work so refactored to a basic "if" statement
const longestConsec = (strArr, numForConsec) => {
  if (checkFunction(numForConsec)) {
    sortByLongest(strArr)
    return strBuilder(strArr, numForConsec)
  } else {
    return "nope"
  }
}
// in repl.it this is working but concatting undefined on the end of the string. Check function not working