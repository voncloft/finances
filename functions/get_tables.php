<?php
include_once '../include/passwords.php';
function get_tables()
{
	$sql="show tables";
	global $conn;
	$conn->query($sql);
	//have check box selection
}
?>
