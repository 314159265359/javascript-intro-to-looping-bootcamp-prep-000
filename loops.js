function forLoop(array){
  for (var i = 1; i < 26; i++) {
    if (i===1){
      console.log(array + "I am " + i + " strange loop.")
    }else{
      console.log(array + "I am " + i + " strange loops.")
    }
    //console.log("I am ${i} strange loop${i === 0 ? '' : 's'}.")
  }
}
