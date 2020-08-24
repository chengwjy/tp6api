<?php
namespace app\index\controller;

use app\BaseController;
use app\Request;
class Error
{
    // 当控制器不存在时，tp6为我们提供了一个方法，建立一个Error.php
    public function __call($name, $arguments)
    {
        if((new Request)->isAjax()){
            // 如果我们的模块是API模块，需要输入API的数据格式
            return show(config('status.controller_not_found'), "找不到{$name}控制器", [], 404);
        }else{
            // 如果我们是模板引擎的方式
            return show(config('status.controller_not_found'), "找不到{$name}控制器", [], 404);
        }
        
    }
}
