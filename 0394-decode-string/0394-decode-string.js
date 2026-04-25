/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentStr = "";
    let currentNum = 0;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            // اگر نمبر ہے تو اسے محفوظ کریں
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            // جب بریکٹ شروع ہو، تو اب تک کا نمبر اور لفظ اسٹیک میں ڈال دیں
            stack.push(currentStr);
            stack.push(currentNum);
            // دوبارہ شروع کریں
            currentStr = "";
            currentNum = 0;
        } else if (char === ']') {
            // جب بریکٹ بند ہو، تو اسٹیک سے نمبر اور پرانا لفظ نکالیں
            let num = stack.pop();
            let prevStr = stack.pop();
            // موجودہ لفظ کو اتنی بار دہرائیں اور پچھلے لفظ کے ساتھ جوڑ دیں
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // اگر صرف ایک حرف ہے تو اسے جوڑتے رہیں
            currentStr += char;
        }
    }

    return currentStr;
};