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
  var arr = [];
  while(i < array.length){
    arr[i] = array[i] + `!!!`;
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push('I love the Beatles!');
    n++;
  }while(n < 15);
  
  return arr;
}