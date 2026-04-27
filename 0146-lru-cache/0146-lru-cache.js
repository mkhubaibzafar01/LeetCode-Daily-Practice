/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // جاوا اسکرپٹ کا میپ ترتیب یاد رکھتا ہے
};

/** * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    // ویلیو نکالیں، ڈیلیٹ کریں اور دوبارہ ڈالیں تاکہ یہ "تازہ" (آخر میں) ہو جائے
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    
    return val;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    // اگر کیپیسٹی سے زیادہ ہو گیا، تو سب سے پہلا (پرانا) ممبر نکال دیں
    if (this.cache.size > this.capacity) {
        // map.keys().next().value ہمیں سب سے پرانی key دیتا ہے
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
};