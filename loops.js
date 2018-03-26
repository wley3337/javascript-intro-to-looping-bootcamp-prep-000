function forLoop (array) { 
  for (var i = 0; i < 25; i++) { 
    if (i === 1) { array.push('I am 1 strange loop.');
    } else {
      array.push("I am `${i}` strange loops.");
    };
    return array;
  }
}


//whileLoop w/ number as argument using console.log then return string 'done'. 

function whileLoop(startHere) {
  while(startHere > 0) {
    console.log(--startHere);
  }
  return 'done';
  
}