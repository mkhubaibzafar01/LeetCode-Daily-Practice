/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let m = land.length;
    let n = land[0].length;
    let result = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // اگر ہمیں زمین ملے اور وہ کسی پچھلے گروپ کا حصہ نہ ہو
            if (land[i][j] === 1 && 
                (i === 0 || land[i-1][j] === 0) && 
                (j === 0 || land[i][j-1] === 0)) {
                
                let r2 = i;
                let c2 = j;

                // اس گروپ کا آخری کونا (Bottom-Right) ڈھونڈیں
                while (r2 + 1 < m && land[r2 + 1][j] === 1) r2++;
                while (c2 + 1 < n && land[i][c2 + 1] === 1) c2++;

                result.push([i, j, r2, c2]);
            }
        }
    }

    return result;
};