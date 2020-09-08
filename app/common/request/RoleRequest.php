<?php

declare(strict_types=1);

namespace app\common\request;

use app\BaseRequest;

class RoleRequest extends BaseRequest
{
    protected $rule = [
        'username' => 'require',
        'password' => 'require',
    ];

    protected $message = [
        'name.require' => '登录账号必须',
        'password.require' => '密码必须',
    ];

    protected $scene = [
        'login' => ['username', 'password', ],
    ];
}
