<?php

// 单链表
class SigleNode{
    public $item;
    public $next;
    public function __construct($item){
        $this->item = $item;
        $this->next= null;
    }
}

class SingleLink{
    private $head;
    public function __construct()
    {
        $this->head = null;
    }

    public function isEmpty(){
        return is_null($this->head);
    }

    public function len(){
        $len = 0;
        $tmp = $this->head;
        while(!is_null($tmp)){
            $len++;
            $tmp = $tmp->next;
        }
        return $len;
    }
    public function add($item){
        $node = new SigleNode($item);
        $node->next = $this->head ? $this->head : null; 
        $this->head = $node;
    }

    public function append($item){
        $node = new SigleNode($item);
        if($this->isEmpty()){
            $this->head = $node;
        }
        else{
            $cur =  $this->head;
            while(!is_null($cur->next)){
                $cur = $cur->next;
            }
            $cur->next = $node;
        }

    }
    public function travel(){
        $cur = $this->head;
        $tmp = [];
        while(!is_null($cur)){
            array_push($tmp, $cur->item);
            $cur = $cur->next;
        }
        return $tmp;
    }

    public function insert($pos, $item){
    
        $cur = $this->head;
        if($pos <= 0){
            $this->add($item);
        }else if($pos >= $this->len()){
            $this->append($item);
        }else{
            $node = new SigleNode($item);
            $cur = $this->head;
            $i = 0;
            while($i + 1 !== $pos){
                $i++;
                $cur = $cur->next;
            }
            $node->next = $cur->next;
            $cur->next = $node;
        }
    }

    public function delete()
}

$link = new SingleLink();
$link->append(99);
$link->add(3);
$link->add(2);
$link->add(1);
$link->append(929);
$link->append(233);
$link->insert(0,0);
$link->insert(6,0);

var_dump($link->travel());

var_dump($link->len());