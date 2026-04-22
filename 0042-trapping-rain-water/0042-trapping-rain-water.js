/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // اگر بائیں والا ستون چھوٹا ہے
            if (height[left] >= leftMax) {
                leftMax = height[left]; // نیا اونچا ستون مل گیا
            } else {
                water += leftMax - height[left]; // پانی جمع کریں
            }
            left++;
        } else {
            // اگر دائیں والا ستون چھوٹا ہے
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
};