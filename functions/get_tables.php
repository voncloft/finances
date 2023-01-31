<?php
include_once '../include/passwords.php';
function get_tables()
{
	global $conn;
	$showtables= mysqli_query($conn, "SHOW TABLES FROM finances");
	//have check box selection
	$variable="";
    	while($table = mysqli_fetch_array($showtables))
    	{
		echo '<a href=../scripts/get_selected_table.php?table='.$table[0].'>'.$table[0].'</a><br>';
		
	}
}
?>
