function anagram(str1, str2) {
  if(arguments.length < 2) {
    return false;
  }
  if(str1.length < 1 || str2.length < 1) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }
  var obj1 = {};
  var arr1 = str1.split('').sort();
  var obj2 = {};
  var arr2 = str2.split('').sort();
  arr1.forEach(function(value){
    if(!obj1[value]) {
      obj1[value] = 1;
    } else {
      obj1[value] += 1;
    }
  });
  arr2.forEach(function(value){
    if(!obj2[value]) {
      obj2[value] = 1;
    } else {
      obj2[value] += 1;
    }
  });
  for(var i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
}

console.log(anagram('aabbcc', 'babacc'));

// module.exports = anagram;