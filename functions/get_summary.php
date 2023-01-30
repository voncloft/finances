<?php
	include_once '../include/passwords.php';
	function get_summary($table)
	{
		echo "<table><tr><td>";
		global $conn;
		$sql="select id, day_of_month, description,amount from ".$table;
		$result=$conn->query($sql);
		$rows=$result->fetch_all(MYSQLI_ASSOC);
		echo "<table border='2'><caption>This Month</caption><th>Delete record</th><th>Date</th><th>Description</th><th>Amount</th>";
		foreach($rows as $financial_transaction)
		{
			echo '<tr><td><input type=\'checkbox\' class=\'deleteIt\' id=\'deleteIt\' name=\'deleteIt\' value=\''.$financial_transaction['id']."-".$table.'\'></td>';
			echo '<td contenteditable onBlur="saveToDb(this,\'day_of_month\','.$financial_transaction['id'].',\''.$table.'\')">'.$financial_transaction['day_of_month'].'</td>';
			echo '<td contenteditable onBlur="saveToDb(this,\'description\','.$financial_transaction['id'].',\''.$table.'\')">'.$financial_transaction['description'].'</td>';
			echo '<td contenteditable onBlur="saveToDb(this,\'amount\','.$financial_transaction['id'].',\''.$table.'\')">'.$financial_transaction['amount'].'</td></tr>';
		}
		echo "</table>";
		echo "</td></tr><tr><td align='center'><a href='../index.php'>Home</a></td></tr></table>";
	}
	include '../ajax/js/db_functions.js';
?>
