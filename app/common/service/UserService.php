<?php

declare(strict_types=1);
namespace app\common\service;
use app\BaseService;
use app\common\model\User;
use app\common\lib\Redis;
class UserService extends BaseService{
    public function __construct(User $user, Redis $redis)
    {
        $this->model = $user;
        $this->redis = $redis;
    }

    // 登陆业务
    public function login(string $username, string $password,  &$token){
        $user = $this->model->where(['username' => $username])->find();
        if(!$user){
            return '用户名不存在';
        }
        // 密码处理
        $encryPassword = getEncryPassword($password, $user->salt);
        if($encryPassword !== $user->password){
            return '密码错误';
        }
        $token = $this->makeToken($user->id, $user->username);
        return true;
    }

    // 生成token
    public function makeToken(int $id, string $username){
        $token = getToken($id);
        // 把token存进redis
        $this->redis->hMset($token, ['id' => $id, 'username' => $username]);
        // 设置过期时间
        $this->redis->expire($token, config('auth.expires_in'));
        return $token;
    }
} 
