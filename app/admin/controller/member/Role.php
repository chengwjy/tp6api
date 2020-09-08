<?php
declare (strict_types = 1);
namespace app\admin\controller\member;
use app\common\service\RoleService;
use app\common\request\RoleRequest;
use app\common\lib\Redis;
use app\BaseController;
use Exception;

class Role extends BaseController{
    // 新增角色
    public function add(RoleService $service, RoleRequest $roleRequest){    
        echo USERID;
    }
}