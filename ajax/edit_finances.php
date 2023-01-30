<?php
	include_once '../include/passwords.php';
	global $conn;
	$sql="update ".$_POST['table']." set ".$_POST['field']." = '".$_POST['value']."' where id = ".$_POST['id'];
	$conn->query($sql);
?>
