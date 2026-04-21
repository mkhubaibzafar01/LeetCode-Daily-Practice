/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // ایک خالی اسٹیک (Stack) بنائیں
    let stack = [];
    
    // بریکٹس کا نقشہ (Map) بنائیں
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // اگر یہ بند ہونے والی بریکٹ ہے
        if (closeToOpen[char]) {
            // اسٹیک سے آخری چیز نکالیں اور چیک کریں کہ کیا وہ صحیح اوپننگ بریکٹ ہے
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            // اگر یہ کھلنے والی بریکٹ ہے تو اسے اسٹیک میں ڈال دیں
            stack.push(char);
        }
    }

    // اگر آخر میں اسٹیک خالی ہے، تو سب ٹھیک ہے
    return stack.length === 0;
};