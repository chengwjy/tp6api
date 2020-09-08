<?php
use think\facade\Route;

Route::group('/user', function () {
    Route::rule('/login', 'member.user/login', 'POST');//->middleware(Permission::class,'RoleList');

})->allowCrossDomain();
// Route::get('/login', 'member.user/login');



Route::group('/role', function () {
    Route::rule('/add', 'member.role/add', 'POST');//->middleware(Permission::class,'RoleList');

})->allowCrossDomain();