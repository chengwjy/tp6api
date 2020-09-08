<?php
use think\facade\Route;
use app\admin\middleware\CheckToken;
use app\admin\middleware\CheckAuth;
Route::group('/user', function () {
    Route::rule('/login', 'member.user/login', 'POST');

})->allowCrossDomain();
// Route::get('/login', 'member.user/login');



Route::group('/role', function () {
    Route::rule('/add', 'member.role/add', 'POST')->middleware(CheckAuth::class, 'roleadd');

})->allowCrossDomain()->middleware(CheckToken::class);