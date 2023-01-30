<?php
	include_once '../include/passwords.php';
	include_once '../functions/get_summary.php';
	function get_user_interface($option)
	{
		switch($option)
		{
			case "summary";
				get_summary("current_month");
			break;
		}
	}
?>
