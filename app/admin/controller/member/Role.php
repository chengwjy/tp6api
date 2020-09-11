<?php
declare (strict_types = 1);
namespace app\admin\controller\member;
use app\common\service\RoleService;
use app\common\request\RoleRequest;
use app\common\lib\Redis;
use app\BaseController;
use Exception;
use think\App;
class Role extends BaseController{
    public function __construct(App $app)
    {
        parent::__construct($app);
    }
    // 新增角色
    public function add(RoleService $service, RoleRequest $roleRequest){    
        echo request() ->userID;
    }
}