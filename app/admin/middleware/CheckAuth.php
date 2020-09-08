<?php

namespace app\admin\middleware;

use app\common\model\UserRole;
use app\common\model\Role;
use app\common\model\RoleMenu;
use app\common\model\Menu;
use Exception;

class CheckAuth
{
    // 验证用户是否有该路由权限
    public function handle($request, \Closure $next,string $name = ''){
        // 若不是顶级管理员，验证路由权限
        if(config('auth.admin_id') !== USERID){
            
            $menu = Menu::where(['name' => $name])->find();
            if(!$menu){
                throw new Exception('路由name错误');
            }
            // 若不是公共权限
            if(!$menu->is_all){
                // 验证权限
                $result = Menu::alias('m')
                        ->join((new RoleMenu)->get_table() .' rm', 'rm.menu_id=m.id')
                        ->join((new Role)->get_table() .' r', 'r.id=rm.role_id')
                        ->join((new UserRole)->get_table() .' ur', 'ur.role_id=r.id')
                        ->where(['ur.user_id' => USERID, 'rm.menu_id' => $menu->id])
                        ->find();
                if(!$result){
                    throw new Exception('权限校验失败');
                }
            } 
        }
        return $next($request);
    }
}
