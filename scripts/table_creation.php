<?php
	include_once '../include/passwords.php';
	global $conn;
	$table=$_POST['tbl_name'];
	$sql="CREATE TABLE ".$table."(".
  	"id int(11) NOT NULL AUTO_INCREMENT, ".
  	"day_of_month date DEFAULT NULL, ".
  	"description text DEFAULT NULL, ".
  	"amount double DEFAULT NULL, ".
  	"position_order int(11) DEFAULT NULL, ".
  	"PRIMARY KEY (id)".
  	")";
  	echo $sql;
	$conn->query($sql);
?>
<a href=../index.php>Home</a>
