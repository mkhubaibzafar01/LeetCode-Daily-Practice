var RandomizedCollection = function() {
    this.list = []; // نمبرز اسٹور کرنے کے لیے
    this.map = new Map(); // نمبر اور اس کے انڈیکسز اسٹور کرنے کے لیے
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    const isNew = !this.map.has(val) || this.map.get(val).size === 0;
    if (isNew) this.map.set(val, new Set());
    
    this.map.get(val).add(this.list.length);
    this.list.push(val);
    return isNew;
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.map.has(val) || this.map.get(val).size === 0) return false;
    
    // نکالے جانے والے نمبر کا ایک انڈیکس لیں
    const removeIdx = this.map.get(val).values().next().value;
    const lastVal = this.list[this.list.length - 1];
    
    // آخری نمبر کو نکالے جانے والے نمبر کی جگہ رکھیں
    this.list[removeIdx] = lastVal;
    this.map.get(val).delete(removeIdx);
    
    // آخری نمبر کی لوکیشن اپ ڈیٹ کریں
    this.map.get(lastVal).add(removeIdx);
    this.map.get(lastVal).delete(this.list.length - 1);
    
    // لسٹ سے آخری ممبر اڑا دیں
    this.list.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randomIdx];
};