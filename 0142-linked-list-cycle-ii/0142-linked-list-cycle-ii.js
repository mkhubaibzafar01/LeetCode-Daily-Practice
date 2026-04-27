/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    // 1. چکر کی موجودگی کا پتہ لگائیں
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // اگر دونوں مل گئے
        if (slow === fast) {
            // 2. چکر کا آغاز ڈھونڈیں
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry; // یہی وہ نوڈ ہے جہاں سے چکر شروع ہوا
        }
    }

    return null; // کوئی چکر نہیں ملا
};