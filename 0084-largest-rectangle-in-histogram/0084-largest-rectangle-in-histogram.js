/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []; // انڈیکس اسٹور کرنے کے لیے
    let maxArea = 0;
    heights.push(0); // آخر میں زیرو ڈالیں تاکہ اسٹیک مکمل خالی ہو سکے

    for (let i = 0; i < heights.length; i++) {
        // جب تک موجودہ بار اسٹیک کی ٹاپ بار سے چھوٹی ہے
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            let h = heights[stack.pop()]; // اونچائی
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // چوڑائی
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    return maxArea;
};