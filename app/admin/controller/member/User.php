<?php
declare (strict_types = 1);
namespace app\admin\controller\member;
use app\common\service\UserService;
use app\common\request\UserRequest;
use app\common\lib\Redis;
use app\BaseController;
use Exception;

class User extends BaseController{
    // 登陆
    public function login(UserService $service, UserRequest $userRequest){    
        $result = $userRequest->scene('login')->validate();
        if($result !== true){
            return sendError($result);
        }
        $loginResult = $service->login(input('param.username'), input('param.password'), $token);
        if($loginResult !== true){
            return sendError($loginResult);
        }
        return sendSuccess(['token' => $token, 'expires_in' => config('auth.expires_in')]);
        // $service->checkToken('6804ebbe9f0265df1f168357022fac147cd597755b42f7910457c46743327117', $id, $username);
    }
}