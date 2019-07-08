'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
    for(var i = 0; i < collectionA.length; i++){
      for(var j = 0;var k = 0; ; k++){
        if(collectionB[j][k] === collectionA[i]){
          result.push(collectionA[i]);
        }
        else if{
           j == collectionB.length;
           j++;
        }else{
          break;
        }
      }
    }
    return result;
}
