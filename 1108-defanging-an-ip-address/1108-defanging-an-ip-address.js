/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // طریقہ 1: Split اور Join کا استعمال
    return address.split('.').join('[.]');
    
    /* طریقہ 2 (Regex کے ساتھ):
    return address.replace(/\./g, '[.]');
    */
};