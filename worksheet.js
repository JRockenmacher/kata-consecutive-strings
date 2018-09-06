const newArr = []

const removeDuplicates = (strArr) => {
   newArr = strArr.filter(str, index, curr) => index == curr.indexOf(str)
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
  