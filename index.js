

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

 

  

  
function superbowlWin(record) {
  const isW = record.find(element => element.result === "W")
  if (isW){return isW.year}
  else {return undefined}
}
