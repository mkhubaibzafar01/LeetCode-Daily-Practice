/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let curr = head;
    let count = 0;

    // 1. چیک کریں کہ کیا ک k نوڈز موجود ہیں
    while (curr !== null && count < k) {
        curr = curr.next;
        count++;
    }

    // 2. اگر k نوڈز مل گئے تو ریورس شروع کریں
    if (count === k) {
        let prev = null;
        let next = null;
        curr = head;

        // اسٹینڈرڈ ریورسل لاجک k ٹائمز کے لیے
        for (let i = 0; i < k; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // 3. اگلا حصہ ریکرشن (Recursion) سے حل کریں
        if (next !== null) {
            head.next = reverseKGroup(next, k);
        }

        // اب 'prev' نیا ہیڈ بن چکا ہے
        return prev;
    }

    // اگر k سے کم نوڈز ہوں تو ویسے ہی واپس کر دیں
    return head;
};