<?php

namespace app\admin\middleware;

use Exception;
use app\common\lib\Auth;
use app\common\lib\Redis;
class Jwt
{
    public function handle($request, \Closure $next){
        // 中间件验证token
        $accessToken = $request->header('access-token');
        if(!$accessToken){
            throw new Exception('请传入token');
        }
        $res = Auth::checkToken($accessToken);
        if(!$res){
            throw new Exception('jwttoken验证失败');
        }
        var_dump($res);
        return $next($request);
    }
}
