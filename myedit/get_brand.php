<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header("Access-Control-Allow-Methods: GET, POST");
$content = file_get_contents("php://input");

    require '../common.inc.php';
    $brandList = [];
    if($_GET['token'] == 'select'){
    	$typeList = [];
	for($i = 0; $i<45; $i++){
	    $brandList[$i] = doData(tag("moduleid=27&condition=yq_order=1 and catid=".($i+64)."&pagesize=40&order=addtime desc&template=null")); 
	    $typeList[$i] =  $brandList[$i][0]['catname'];
	    for($k = 2; $k<6; $k++){
	   	if(count($brandList[$i]) < 40){
		    	$size = 40 - count($brandList[$i]);
		    	$brandList[$i] = array_merge($brandList[$i],doData(tag("moduleid=27&condition=yq_order=".$k." and catid=".($i+64)."&pagesize=".$size."&order=addtime desc&template=null")));
			if(empty($typeList[$i])){
			     $typeList[$i] =  $brandList[$i][0]['catname'];
			}
	    	}

	    }
	    
	    
	    $brandList[$i] = array_chunk($brandList[$i],10);

	    if(count($brandList[$i][count($brandList[$i])-1])<10){
	    	unset($brandList[$i][count($brandList[$i])-1]);
	    }
	}
	$typeList = array_chunk($typeList,7);
	   $brandList[] = $typeList;
	echo json_encode($brandList);
	exit();
    }
    
    
    $hotrad = rand(65,80);
    $newrad = rand(80,100);
    if($_GET['token'] == 'hot'){
    	$brandList = doData(tag("moduleid=27&condition=yq_order=1 and catid=".$hotrad."&pagesize=40&order=addtime desc&template=null"));
	for($i = 0; $i<40; $i++){
		if(count($brandList) < 40){
			$size = 40 - count($brandList);
			$brandList = array_merge($brandList,doData(tag("moduleid=27&condition=yq_order=2 and catid=".($i+$hotrad)."&pagesize=".$size."&order=addtime desc&template=null")));
		}else{
			break;
		}
	}
	$brandList = array_chunk($brandList,10);
	echo json_encode($brandList);
	exit();
    }
    
    
    if($_GET['token'] == 'new'){
    	$brandList = doData(tag("moduleid=27&condition=yq_order=1 and catid=".$newrad."&pagesize=40&order=addtime desc&template=null"));
	for($i = 0; $i<45; $i++){
		if(count($brandList) < 40){
			$size = 40 - count($brandList);
			$brandList = array_merge($brandList,doData(tag("moduleid=27&condition=yq_order=2 and catid=".($i+$newrad)."&pagesize=".$size."&order=addtime desc&template=null")));
		}else{
			break;
		}
	}
	for($i = 0;$i<count($brandList);$i++){
	   unset($brandList[$i]['cyrphone']);
	   unset($brandList[$i]['cyuser']);
	   unset($brandList[$i]['edittime']);
	}
	$brandList = array_chunk($brandList,10);
	echo json_encode($brandList);
	exit();
    }
	

	function doData($data){
		foreach($data as $k => $v){
			unset($data[$k]['cyrphone']);
			unset($data[$k]['cyuser']);
			unset($data[$k]['username']);
			unset($data[$k]['ccompany']);
		}
		return $data;
	}

?>
