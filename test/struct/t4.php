<?php

// 栈
class Stack{
    private $items;

    public function __construct()
    {
        $this->items = [];
    }

    public function isEmpey(){
        return empty($this->items);
    }
    
    public function push($item){
        return array_push($this->items, $item);
    }

    public function array_pop(){
        return array_pop($this->items);
    }

    public function size(){
        return count($this->items);
    }
}