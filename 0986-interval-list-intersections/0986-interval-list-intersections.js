/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0;
    let result = [];

    while (i < firstList.length && j < secondList.length) {
        // انٹرول کا مشترک حصہ نکالنے کے لیے لاجک
        let start = Math.max(firstList[i][0], secondList[j][0]);
        let end = Math.min(firstList[i][1], secondList[j][1]);

        // اگر مشترک حصہ موجود ہے
        if (start <= end) {
            result.push([start, end]);
        }

        // جس کا اینڈ پوائنٹ چھوٹا ہے، اسے آگے بڑھا دیں
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};