var array = [];



function currentLine(array) {
  line = [];
  for (i = 0; i < array.length; i++) {
    line.push(i + 1 + '. ' + array[i]);
  }
  if (!array.length) {
  return('none');
  }
  return(`The line currently is ${line}`)
}

function nowServing(array) {
  if (array.length > 0) {
    array.splice(1);
    return(`Now serving ${array[0]}`)
  }
  else {
    return('noone')
  }
}

function takeANumber(array, name) {
  array.push(name);
  return(`Welcome ${name} your are number ${array[0]} in line`)
}
takeANumber(array);
