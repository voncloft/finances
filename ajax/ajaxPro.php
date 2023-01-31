<?php 
	include_once '../include/passwords.php';
	$position = $_POST['position'];
	//list($position,$table)=preg_split("-",$_POST['position'],2);
	$table=$_POST['table_name'];

	$i=1;
   foreach($position as $k=>$v){
		$sql = "Update ".$table." SET position_order=".$i." WHERE id=".$v;
		$conn->query($sql);
		$i++;
	}
?>