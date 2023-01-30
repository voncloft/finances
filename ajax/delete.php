<?php
	include_once '../include/passwords.php';
	global $conn;
	$sql="Delete from ".$_POST['table']." where id = ".$_POST['id'];
	$conn->query($sql);
?>
