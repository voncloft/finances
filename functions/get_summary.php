<?php
	include_once '../include/passwords.php';
function get_summary($table)
{
		//echo "<table><tr><td>";
		echo "<center>";
		echo "<input type='hidden' id='txt_table' value='".$table."'>";
		global $conn;
		$sql="select * from ".$table." order by position_order";
		$result=$conn->query($sql);
		//$rows=$result->fetch_all(MYSQLI_ASSOC);
?>
		<div class="container">
		<div class="row">
		<div class="col-md-8 col-md-offset-2 mian-section">
		<h3 class="text-center title">Financial Ledger</h3>
<?php		
		echo "<table border='2' class='table table-bordered'><caption><center>This Month</center></caption><tr><th align='center'>Delete record</th><th><center>Date</center></th><th><center>Description</center></th><th><center>Amount</center></th></tr>";
		echo "<tbody id='table-body' class='row_position'>";
		//foreach($rows as $financial_transaction)
		while($financial_transaction = $result->fetch_assoc())
		{
			echo '<tr table_name='.$table.' id='.$financial_transaction['id'].'><td align="center"><input type=\'checkbox\' class=\'deleteIt\' id=\'deleteIt\' name=\'deleteIt\' value=\''.$financial_transaction['id']."-".$table.'\'></td>';
			echo '<td><input type="text" size="9" class="date_box" onBlur="saveToDb(this,\'day_of_month\','.$financial_transaction['id'].',\''.$table.'\')" value="'.$financial_transaction['day_of_month'].'"></td>';
			echo '<td><input type="text" size="20" class="date_box" onBlur="saveToDb(this,\'description\','.$financial_transaction['id'].',\''.$table.'\')" value="'.$financial_transaction['description'].'"></td>';
			echo '<td><input type="text" size="5" class="date_box" onBlur="saveToDb(this,\'amount\','.$financial_transaction['id'].',\''.$table.'\')" value="'.$financial_transaction['amount'].'"></td></tr>';
		}
?>

</tbody>
</table>
</div>
</div>
</div>
<div id="add-more" onClick="createNew();">Add More</div>
<?php
		//echo "</td></tr><tr><td align='center'><a href='../index.php'>Home</a></td></tr></table>";

}
include '../ajax/js/db_functions.js';
?>
