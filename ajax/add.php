<?php
	include '../include/passwords.php';
	global $conn;
	$table=$_POST['table'];
	$description=$_POST['description'];
	$amount=$_POST['amount'];
	$date=$_POST['date'];
	$count=$_POST['count']+1;
	$sql="Insert into ".$table."(description,amount,day_of_month,position_order)Values('".$description."',".$amount.",'".$date."','".$count."')";
	$conn->query($sql);
?>
