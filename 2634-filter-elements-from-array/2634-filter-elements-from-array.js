/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        // اگر fn فنکشن سچ (true) واپس کرے تو ایلیمنٹ کو شامل کریں
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};