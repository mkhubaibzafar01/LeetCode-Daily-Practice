/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        // اگر پیٹرول ختم ہو جائے تو اس کا مطلب ہے 
        // کہ پچھلے پمپس سے شروع کرنا بیکار تھا
        if (currentGas < 0) {
            startIndex = i + 1; // اگلے پمپ سے نئی شروعات
            currentGas = 0; // ٹینکی دوبارہ خالی (نئے سرے سے گنتی)
        }
    }

    // اگر کل پیٹرول خرچ سے کم ہے تو ناممکن ہے
    return totalGas >= totalCost ? startIndex : -1;
};