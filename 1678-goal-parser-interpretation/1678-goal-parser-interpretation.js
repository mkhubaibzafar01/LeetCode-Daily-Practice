/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // طریقہ 1: Replace کا استعمال کرتے ہوئے
    // ہم باری باری بریکٹس کو مطلوبہ حروف سے بدل دیں گے
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
};