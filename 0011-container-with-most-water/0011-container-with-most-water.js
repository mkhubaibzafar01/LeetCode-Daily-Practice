/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // چوڑائی (Width) معلوم کریں
        let width = right - left;
        
        // پانی کی اونچائی سب سے چھوٹی دیوار کے برابر ہوگی
        let currentHeight = Math.min(height[left], height[right]);
        
        // موجودہ پانی کا ایریا (Area = Length * Width)
        let currentWater = width * currentHeight;
        
        // سب سے بڑا ایریا یاد رکھیں
        maxWater = Math.max(maxWater, currentWater);

        // چھوٹی دیوار کو آگے بڑھائیں تاکہ کوئی بڑی دیوار مل سکے
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};