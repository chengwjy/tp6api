<?php

namespace app\admin\middleware;

use Exception;
use app\common\lib\Redis;
class CheckToken
{
    public function handle($request, \Closure $next,string $name = ''){
        // 中间件验证token
        $accessToken = $request->header('access-token');
        if(!$accessToken){
            throw new Exception('请传入token');
        }
        $redis = new Redis();
        // 验证token
        $ret = $redis->hMget($accessToken, ['id', 'username']);
        $id = $ret['id'];
        $username = $ret['username'];
        if(!$id || !is_numeric($id)){
            throw new Exception('token无效');
        }
        // 定义用户id常量
        request() ->userID = intval($id);
        // 刷新token时间
        $redis->expire($accessToken, config('auth.expires_in'));
        return $next($request);
    }
}
