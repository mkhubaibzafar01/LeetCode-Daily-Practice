/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;          // ایک قدم
        fast = fast.next.next;     // دو قدم

        // اگر دونوں مل گئے تو سائیکل موجود ہے
        if (slow === fast) {
            return true;
        }
    }

    // اگر لوپ ختم ہو گیا مطلب لسٹ کا اختتام ہے
    return false;
};