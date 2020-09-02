<?php
header('Access-Control-Allow-Origin:*');  


// ��Ӧ����  


header('Access-Control-Allow-Methods:POST');  


// ��Ӧͷ����  


header('Access-Control-Allow-Headers:x-requested-with,content-type');  

$apiUrl = "http://hzmjlkjyxgs-center.yangqu.cn/api.php/message/send_message";
$apiUrlTest = "http://hzmjlkjyxgs-center.yangqu.cn/api.php/message/user_code";
// var_dump('xx');
// var_dump($_POST);

// die;
// ������֤��
if(!empty($_POST['sign'])){
	$Moblie=$_POST['Moblie'];
	$number=$_POST['number'];
	$type = $_POST['type'];
	$sign = $_POST['sign'];
	$res = curl_request($apiUrl, ['status' => 2, 'mobile' => $Moblie, 'sign' => $sign, 'type' => $type]);
	// var_dump(['mobile' => $Moblie, 'sign' => $sign, 'type' => $type]);
	
	echo $res ;
}
// ��֤��֤��
else if(!empty($_POST['test_yzm'])){
	$Moblie=$_POST['Moblie'];
	$type = $_POST['type'];
	$code = $_POST['code'];
	// var_dump(['status' => 2, 'mobile' => $Moblie, 'type' => $type, 'code' => $code]);
	// echo json_encode(['status' => 2, 'mobile' => $Moblie, 'type' => $type, 'code' => $code]);
	$res = curl_request($apiUrlTest, ['status' => 2, 'mobile' => $Moblie, 'type' => $type, 'code' => $code]);
	// var_dump(['mobile' => $Moblie, 'sign' => $sign, 'type' => $type]);
	echo $res;
}
else{
	die;
$Moblie=$_POST['Moblie'];
$number=$_POST['number'];require 'common.inc.php';define('DT_KEY', $CFG['authkey']);$destoon_auth = get_cookie('auth');$destoon_auth = decrypt($destoon_auth, DT_KEY.'USER');$_dauth = explode('|', $destoon_auth);$_userid = isset($_dauth[0]) ? intval($_dauth[0]) : 0;	
function log_message1($Moblie,$number,$ip){		global $db;	$me_info=$db->get_one("select * from destoon_dx_ip where ip='$ip' order by id desc");		$start = date('Y-m-d 00:00:00');	$end = date('Y-m-d H:i:s');		$me_number=$db->get_one("select count(*) as cot from destoon_dx_ip WHERE `addtime` >= unix_timestamp( '$start' ) AND `addtime` <= unix_timestamp( '$end' ) and ip='$ip' ");		if($me_number['cot']<30){		if(!empty($me_info)){			$jctime=time()-$me_info['addtime'];			if($jctime<60){				exit;			}else{				$db->query("insert into destoon_dx_ip set addtime='".time()."',ip='$ip',phone='$Moblie'");			}		}else{			$db->query("insert into destoon_dx_ip set addtime='".time()."',ip='$ip',phone='$Moblie'");		}	}else{		exit;	}
	$mes_name='SY0584';	
	$mes_password='1qazxsw2!@!';
	// $content='������֤����:'.$number.'��10��������Ч������Ȥ�� - רҵ���̷���ƽ̨����ϵ�绰��400-7188-521��';
	$content='������֤����:'.$number.'��10��������Ч������Ȥ�� - רҵ���̷���ƽ̨��';
	$url="http://www.106818.com:8080/ws/Send2.aspx?CorpID=".$mes_name."&Pwd=".$mes_password."&Mobile=".$Moblie."&Content=".urlencode($content);	
	
	$arr=curl_request($url);
	echo $arr;
	}		function getIP(){    static $realip;    if (isset($_SERVER)){        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){            $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {            $realip = $_SERVER["HTTP_CLIENT_IP"];        } else {            $realip = $_SERVER["REMOTE_ADDR"];        }    } else {        if (getenv("HTTP_X_FORWARDED_FOR")){            $realip = getenv("HTTP_X_FORWARDED_FOR");        } else if (getenv("HTTP_CLIENT_IP")) {            $realip = getenv("HTTP_CLIENT_IP");        } else {            $realip = getenv("REMOTE_ADDR");        }     }    return $realip;}$yip=getIP();
log_message1($Moblie,$number,$yip);
}

function curl_request($url,$post='',$cookie='', $returnCookie=0){ 
	
	
	$curl = curl_init();      


	curl_setopt($curl, CURLOPT_URL, $url); 


	curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');  


	curl_setopt($curl, CURLOPT_FOLLOWLOCATION, FALSE);   


	curl_setopt($curl, CURLOPT_AUTOREFERER, 1);    


	curl_setopt($curl, CURLOPT_REFERER, "http://XXX");   


	if($post) {  


		curl_setopt($curl, CURLOPT_POST, 1);          


		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post));


	}     


	if($cookie) {            


		curl_setopt($curl, CURLOPT_COOKIE, $cookie);       


	}   


	curl_setopt($curl, CURLOPT_HEADER, $returnCookie);      


	curl_setopt($curl, CURLOPT_TIMEOUT, 10);    


	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);     


	$data = curl_exec($curl);       


	if (curl_errno($curl)) {    


		return curl_error($curl);        


	}      


	curl_close($curl);      


	if($returnCookie){        


		list($header, $body) = explode("\r\n\r\n", $data, 2);    


		preg_match_all("/Set\-Cookie:([^;]*);/", $header, $matches);       


		$info['cookie']  = substr($matches[1][0], 1);    


		$info['content'] = $body;       


		return $info;        


	}else{           


		return $data;      


	}	


}

?>