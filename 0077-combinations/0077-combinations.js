/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    
    function backtrack(start, currentPath) {
        // اگر ہمارے پاس k نمبر پورے ہو گئے ہیں
        if (currentPath.length === k) {
            result.push([...currentPath]);
            return;
        }
        
        // 1 سے n تک نمبرز پر لوپ چلائیں
        for (let i = start; i <= n; i++) {
            // نمبر شامل کریں
            currentPath.push(i);
            
            // اگلے نمبر کے لیے ریکرشن (Recursion) کال کریں
            backtrack(i + 1, currentPath);
            
            // واپس آتے ہوئے آخری نمبر نکال دیں (Backtrack)
            currentPath.pop();
        }
    }
    
    backtrack(1, []);
    return result;
};