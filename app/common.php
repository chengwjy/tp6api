<?php
// 应用公共文件
// 公用api返回
function show($code, $msg = 'success', $data = [], $httpCode = 200){
    return json(['code' => $code, 'msg' => $msg, 'data' => $data], $httpCode);
}