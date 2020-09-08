<?php
class Node{
    public function __construct($data = NULL){
        $this->next = NULL;
        $this->data = $data;
    }
}

// 尾插法
function ListInsert(Node $node, int $data){
    if($node->next === NULL){
        $node->next = new Node($data);
    }else{

    }
   
}

// 单链表展示
function showList(Node $node){
    var_dump($node);
    while($node->next){
        var_dump($node);    
    }
}

// 创建带头节点的单链表
$n = new Node();

// 单链表插值
ListInsert($n, 4);

showList($n);





