var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 if(katzDeliLine.length > 0) {
 return `Currently serving ${katzDeliLine.shift()}.`;
 } else {
     return "There is nobody waiting to be served!";
}
}
nowServing(katzDeliLine);

function currentLine(katzDeliLine){
    var newLine = [];
  if(katzDeliLine.length > 0) {
    for(let i = 0; i < katzDeliLine.length; i++){
   newLine += `${i+1}. ${katzDeliLine[i]}`;
 }
 newLine = newLine.slice(0, -2);
 return `The line is currently: ${newLine}`;
  } else {
    return "The line is currently empty."
  }
}
