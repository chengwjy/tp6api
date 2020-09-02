<?php
// php实现顺序存储结构
$arr = [1,3];
ListInsert($arr, 2, 6);
var_dump($arr);

$e = GetElem($arr, 2);
var_dump($e);

// 顺序存储结构的插入
function ListInsert(Array &$arr, int $i, int $e){
    $count = count($arr);
    if($i < 1 || $i > $count + 1){
        throw new Exception('数据非法');
    }
    // 将要插入位置后数据元素向后移动一位
    for($k = $count - 1; $k >= $i - 1; $k--){
        $arr[$k + 1] = $arr[$k];
    }
    // 将新元素插入
    $arr[$i - 1] = $e;
    ListDelete($arr, 2);
    var_dump($arr);
    // 总结：可以快速取，但插入和删除需要移动大量元素
}   
// 顺序存储结构的删除
function ListDelete(Array &$arr, int $i){
    $count = count($arr);
    if($i < 1 || $count === 0 || $i > $count){
        throw new Exception('数据非法');
    }
    // 删除位置之后的元素向前移动一位
    for($k = $i; $k < $count; $k++){
        $arr[$k - 1] = $k;
    }

    unset($arr[$i - 1]);
}
// 顺序存储结构的获取
function GetElem(Array $arr, int $i){
    $count = count($arr);
    if($i < 1 || $count === 0 || $i > $count){
        throw new Exception('数据非法');
    }
    return $arr[$i - 1];
}