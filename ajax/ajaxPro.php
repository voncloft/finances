<?php 
	include_once '../include/passwords.php';
	$position = $_POST['position'];
	$i=1;
   foreach($position as $k=>$v){
		$sql = "Update current_month SET position_order=".$i." WHERE id=".$v;
		$conn->query($sql);
		$i++;
	}
?>