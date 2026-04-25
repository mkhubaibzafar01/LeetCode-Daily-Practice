/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let t of tokens) {
        if (t === "+" || t === "-" || t === "*" || t === "/") {
            // اسٹیک سے آخری دو نمبر نکالیں
            let b = stack.pop();
            let a = stack.pop();
            
            if (t === "+") stack.push(a + b);
            else if (t === "-") stack.push(a - b);
            else if (t === "*") stack.push(a * b);
            else if (t === "/") {
                // تقسیم کے وقت پوائنٹ والی ویلیو ختم کرنے کے لیے Math.trunc استعمال کریں
                stack.push(Math.trunc(a / b));
            }
        } else {
            // اگر نمبر ہے تو اسے اسٹیک میں ڈال دیں
            stack.push(parseInt(t));
        }
    }

    return stack.pop();
};