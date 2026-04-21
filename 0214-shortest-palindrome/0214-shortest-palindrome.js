/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;

    // 1. اصل سٹرنگ کو الٹا کریں
    let rev = s.split('').reverse().join('');
    
    // 2. ایک نئی سٹرنگ بنائیں: اصل + # + الٹی
    // بیچ میں # اس لیے لگایا تاکہ پیٹرن میچنگ میں آسانی ہو
    let temp = s + "#" + rev;
    let table = new Array(temp.length).fill(0);

    // 3. KMP Algorithm کی لاجک (LPS Table)
    // یہ حصہ چیک کرے گا کہ سٹرنگ کا کتنا حصہ شروع اور آخر سے ایک جیسا ہے
    for (let i = 1; i < temp.length; i++) {
        let t = table[i - 1];
        while (t > 0 && temp[i] !== temp[t]) {
            t = table[t - 1];
        }
        if (temp[i] === temp[t]) {
            t++;
        }
        table[i] = t;
    }

    // 4. جو حصہ میچ نہیں ہوا، اسے الٹا کر کے شروع میں جوڑ دیں
    let add = rev.substring(0, s.length - table[temp.length - 1]);
    return add + s;
};