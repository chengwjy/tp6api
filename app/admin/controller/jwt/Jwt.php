<?php
declare (strict_types = 1);
namespace app\admin\controller\jwt;
use app\common\service\RoleService;
use app\common\request\RoleRequest;
use app\common\lib\Redis;
use app\BaseController;
use Exception;
use think\App;
use app\common\lib\Auth;
class Jwt extends BaseController{
    public function __construct(App $app)
    {
        parent::__construct($app);
    }
    // 生成token
    public function product(){    
        return sendSuccess(['token' => Auth::signToken(119)]);
    }
    // 验证token
    public function test(){
        echo 'join';
    }   
}