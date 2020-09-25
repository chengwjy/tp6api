<?php
declare (strict_types = 1);
namespace app\common\lib;
use Exception;
use \Firebase\JWT\JWT;
// 使用jwt加密和解密token
class Auth{
    public static function signToken($uid){
        $key = md5('my_salt');         //这里是自定义的一个随机字串，应该写在config文件中的，解密时也会用，相当    于加密中常用的 盐  salt
        $token=array(
            "iss"=>'',        //签发者 可以为空
            "aud"=>'',          //面象的用户，可以为空
            "iat"=>time(),      //签发时间
            "nbf"=>time(),    //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
            "exp"=> time()+20, //token 过期时间
            "data"=>[           //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                'uid'=>$uid,
            ]
        );
        //  print_r($token);
        $jwt = JWT::encode($token, $key);  //根据参数生成了 token
        return $jwt;
    }
    
    //验证token
    public static function checkToken($token){
        $key = md5('my_salt');
        try {
            $decoded = json_decode(json_encode(JWT::decode($token, $key, ['HS256'])), true);  //HS256方式，这里要和签发的时候对应
            return $decoded;
        }catch(Exception $e) { //其他错误
            return false;
        }
    }
}