<?php
namespace app\index\controller;

use app\BaseController;
use think\facade\Db;
use app\common\model\Poet;
class Data extends BaseController
{
    public function index()
    {
        // 只有门面模式下的Db才有::name()方法
        $result = Db::name('poet')->select();
        var_dump($result);
    }
    public function model(){
        return show(config('status.success'), '', ['poet' => Poet::find(1)->toArray()]);
    }
    
}
