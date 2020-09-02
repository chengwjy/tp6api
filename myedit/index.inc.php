<?php 
defined('IN_DESTOON') or exit('Access Denied');
require DT_ROOT.'/module/'.$module.'/common.inc.php';require DT_ROOT.'/brand_nonumber.php';
if($MOD['index_html']) {	
	$html_file = DT_ROOT.'/'.$MOD['moduledir'].'/'.$DT['index'].'.'.$DT['file_ext'];
	if(!is_file($html_file)) tohtml('index', $module);
	if(is_file($html_file)) exit(include($html_file));
}
if(!check_group($_groupid, $MOD['group_index'])) include load('403.inc');
$maincat = get_maincat(0, $moduleid, 1);
$seo_file = 'index';
include DT_ROOT.'/include/seo.inc.php';
$destoon_task = "moduleid=$moduleid&html=index";
if($EXT['mobile_enable']) $head_mobile = $EXT['mobile_url'].mobileurl($moduleid, 0, 0, $page);


// 公告列表
$announce_result = $db->query("SELECT * FROM destoon_announce_yq order by listorder DESC,addtime DESC limit 9");
$announce_list = array();
while($r = $db->fetch_array($announce_result)) {
	$announce_list[] = $r;
}

//交易快报
$result_kuaibao=$db->query("select * from destoon_mall_order where status=10 order by itemid desc limit 0,24"); 
$tags_kuaibao1 = array();
while($r = $db->fetch_array($result_kuaibao)) {
	$r['seller']=substr_replace($r['seller'],'***',0,6);
	$update_time = $r['updatetime'];
	$time_diff = time() - $r['updatetime'];

	$time_str = "";
	if( $time_diff >86400 ){
		$time_str = ''.intval($time_diff/86400).'天前';
	}elseif( $time_diff >3600 ){
		$time_str = ''.intval($time_diff/3600).'小时前';
	}elseif( $time_diff >60 ){
		$time_str = ''.intval($time_diff/60).'分前';
	}else{
		$time_str = '刚刚';
	}
	$r['time_str'] = $time_str;


	$tags_kuaibao1[] = $r;
}

$tags_kuaibao2 = $tags_kuaibao1;
shuffle($tags_kuaibao2);
$tags_kuaibao3 = $tags_kuaibao1;
$tags_kuaibao3 = array_reverse($tags_kuaibao3);




include template($MOD['template_index'] ? $MOD['template_index'] : 'index', $module);
?>