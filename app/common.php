<?php
// 应用公共文件
// 公用api返回
declare (strict_types = 1);
use think\Response;

// 得到加密后的token
function getToken(int $id){
    $time = time();
    return hash_hmac('sha256', $id.'_'.rand(1000,9999), ''.$time);
}

// 得到加密后的密文
function getEncryPassword(string $password, string $salt){
    return hash_hmac('sha256', $password, $salt);
}
// 成功返回
function sendSuccess($data = [], $msg = null, $code = 200, $header = []): Response{
    $res = [];
    $res['msg'] = $msg ?? '操作成功';
    $res['data'] = $data;
    $res['code'] = $code;
    return Response::create($res, 'json', 200, $header);
}

// 错误返回
function sendError($msg = null, $code = 300, $header = []): Response{
    $res = [];
    $res['msg'] = $msg ?? '操作失败';
    $res['code'] = $code;
    return Response::create($res, 'json', 200, $header);
}

