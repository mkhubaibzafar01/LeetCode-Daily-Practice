/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let count = new Array(26).fill(0);
    
    // اسٹرنگ s کے حروف کی فریکوئنسی نکالیں
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }
    
    let steps = 0;
    // اسٹرنگ t کے حروف کو چیک کریں
    for (let i = 0; i < t.length; i++) {
        let charIndex = t.charCodeAt(i) - 97;
        if (count[charIndex] > 0) {
            count[charIndex]--;
        } else {
            // اگر حرف s میں نہیں ہے یا اس کی تعداد ختم ہو گئی ہے
            steps++;
        }
    }
    
    return steps;
};