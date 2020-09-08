<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function deleteDuplicates($head) {
        $tmp = $head;
        while($head && $head->next){
            if($head->val === $head->next->val){
                $head->next = $head->next->next;
            }else{
                
            }
        }
    }
}
