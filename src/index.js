
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = []
  if(matrix == null||matrix.length == 0){
    return []
  }
  for (let i = 0; i < matrix.length; i++) {
    if(i%2==0 || i==0){
      res.push(matrix[i])
    }
    else{
      res.push(matrix[i].reverse())
    }
  }
  res = res.join(" ").split("")
  return res.map(el=>el==" "?",":el).join("").split(",")
}
