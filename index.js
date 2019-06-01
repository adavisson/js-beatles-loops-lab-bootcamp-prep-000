// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i].append(`!!!`);
    i++;
  }
  return array;
}