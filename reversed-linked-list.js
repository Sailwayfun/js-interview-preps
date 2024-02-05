function reverseLinkedList(head) {
    if(head === null || head.next === null) return head;
    const res = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
}