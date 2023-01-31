<?php
	include '../include/passwords.php';
	global $conn;
	$table=$_POST['table'];
	$description=$_POST['description'];
	$amount=$_POST['amount'];
	$date=$_POST['date'];
	$sql="Insert into ".$table."(description,amount,day_of_month)Values('".$description."',".$amount.",'".$date."')";
	$conn->query($sql);
?>
