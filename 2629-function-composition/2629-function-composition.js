/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // ہم الٹی طرف سے لوپ شروع کریں گے (Right to Left)
        for (let i = functions.length - 1; i >= 0; i--) {
            // ہر فنکشن کو پچھلے جواب (x) کے ساتھ کال کریں
            x = functions[i](x);
        }
        return x;
    };
};

/**
 * استعمال:
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9 (پہلے 2*4=8 ہوا، پھر 8+1=9)
 */