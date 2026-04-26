/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; // شروع میں اسے بہت بڑا نمبر رکھیں
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // اگر ہمیں آج سستا اسٹاک مل رہا ہے تو خرید لیں (قیمت نوٹ کر لیں)
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // ورنہ چیک کریں کہ آج بیچنے سے کتنا منافع مل رہا ہے
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};