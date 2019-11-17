module.exports = {
      multiplyMatrices: function (mat1, mat2) {
       let result = [];
        for (let i = 0; i < mat1.length; i++) {
            result[i] = []
            for (let j = 0; j < mat2[i].length; j++) {
                result[i][j] = 0
                if (mat1.length != mat2[i].length) {
                    return null
                }
                for (let g = 0; g < mat1[i].length; g++) {
    
                    result[i][j] += mat1[i][g] * mat2[g][j]
                }
            }
        }
        return result;
    },
    showmatrix: function(matrix) {
        for (let i = 0; i < matrix.length; i++) {
    
            console.log(matrix[i].join(" "))
        }
    }
}

