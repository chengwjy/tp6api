<?php
namespace app\controller;

use app\BaseController;

class Demo extends BaseController
{
    public function show()
    {
        var_dump($this->request->param('id', 0, 'intval'));
        // 输出api
        dump(json(['code' => 1]));

    }

    
}
