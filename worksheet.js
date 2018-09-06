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

const checkFunction = (numOfStr, numForConsec) => {
    for(let i = 0; i < numOfStr; i++){
        if(!numOfStr ||numOfStr < numForConsec || numForConsec <= 0){
            return ''
        }

    }
    
}
  