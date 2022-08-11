module.exports = function towelSort (matrix) {
    let arr = [];
    for(i=0; i<matrix.length; i++){
    if (i % 2 != 0) {
        arr.push(matrix[i].reverse().flat());
    } else {
        arr.push(matrix[i].flat());
    };
    };    
  return arr;
}
