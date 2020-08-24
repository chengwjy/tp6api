<?php
namespace app\index\controller;

use app\BaseController;
use app\Request;
class Learn
{
    // 不继承BaseController而使用依赖注入的方式使用Request,不建议
    public function index(Request $request)
    {
        var_dump($request->param());

    }

}
