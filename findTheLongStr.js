console.log(findTheLongStr("Hello I am start learning the 100Days Code Challange"));

/*Second Method*/
function findTheLongStr(str){
  //return false when string whitespace and empty string
  const newArr = str.trim()
  if(newArr.length===0){
    return false
  }
  console.log(newArr)
 StrArray =  newArr.split(" ");

  // StrArray = StrArray.sort((a,b)=> a.length-b.length);
  // //the result will display according to Unicode value characters a-z, A-Z
  // console.log(StrArray)
  // return StrArray.at(-1);
  return StrArray.reduce((accu, curr)=> accu.length > curr.length ? accu: curr, "");
}

/*First Method*/

console.log(findTheLongStr("Hello I am start learning the 100Days Code Challange"));

function findTheLongStr(str){
  //return false when string whitespace and empty string
  const newArr = str.trim()
  if(newArr.length===0){
    return false
  }
  console.log(newArr)
   StrArray =  newArr.split(" ");
  StrArray = StrArray.sort((a,b)=> a.length-b.length);
  //the result will display according to Unicode value characters a-z, A-Z
  console.log(StrArray)
  return StrArray.at(-1);
}
