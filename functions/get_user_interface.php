<?php
	include_once '../include/passwords.php';
	include_once '../functions/get_summary.php';
	include_once '../functions/get_tables.php';
	function get_user_interface($option)
	{
		switch($option)
		{
			case "summary";
				get_summary("current_month");
			break;
			case "create_table";
				header("location: ../php/table_creation.php");
			break;
			case "get_tables";
				get_tables();
			break;
		}
		
	}
?>
