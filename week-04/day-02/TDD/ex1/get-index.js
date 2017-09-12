'use strict';
function getIndex(list,value) {
  if (list.length===0) {
    return false;
  }
  if (list.length!==0 && typeof(list) !== 'object') {
    return false;
  }
  if (value === undefined) {
    return false;
  }
var a = -1;
  list.forEach(function(element,index)  {
    if (element === value) {
      a = index;
    } 
  }, this);
return a;
}
module.exports=getIndex;