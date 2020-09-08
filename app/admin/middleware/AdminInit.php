<?php

namespace app\admin\middleware;

use Exception;

class AdminInit
{
    public function handle($request, \Closure $next){
        // echo 'admin初始化';
        return $next($request);
    }
}
