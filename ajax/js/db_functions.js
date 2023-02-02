<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<script>
function saveToDb(editableObj,field,id,table)
{
	var value=$(editableObj).val();
	//alert(value);
	$.ajax({
		type: "POST",
		url: '../ajax/edit_finances.php',
		data:"id="+id+"&value="+value+"&field="+field+"&table="+table,
		success: function(data)
		{
			//window.location.href="http://voncloft.finances.com/php/finances.php";
			window.location.reload();
			//alert("weee");
		}
	});
}
$(document).ready(function() {
	$('.deleteIt').change(function() {
		var value = $(this).val();
		var myArray=value.split("-");
		var id=myArray[0];
		var table=myArray[1];
		$.ajax({
			type: "POST",
			url: '../ajax/delete.php',
			data:"id="+id+"&table="+table,
			success: function(data)
			{
				//window.location.href="http://voncloft.finances.com/php/finances.php";
				window.location.reload();
				$(':checkbox:checked').prop('checked',false);

			}
		});
	});
});
$(document).ready(function() {
$(".row_position").sortable({
	delay: 150,
	stop: function() {
		var selectedData = new Array();
		var table;
		$('.row_position>tr').each(function() {
			selectedData.push($(this).attr("id"));
			//selectedData.push($(this).attr("table"));
			table=$(this).attr("table_name");
		});
		updateOrder(selectedData,table);
		//alert(selectedData);
		//window.location.reload();
		}
});
});
function updateOrder(data,current_month) {
$.ajax({
	url:"../ajax/ajaxPro.php",
	type:'post',
	data:{position:data, table_name:current_month},
		success:function(data){
			toastr.success('Your Change Successfully Saved.');
			//alert(current_month);
			window.location.reload();
	}
})
}
function createNew(table)
{
	//var value=$('#txt_table').val();
	//alert(table);
	$("#add-more").hide();
	var data='<tr id="new_row_ajax">'+
	'<td>N/A</td>'+
	'<td><input type="text" id="txt_date" onBlur="addToHiddenField(this,\'date\');"></td>'+
	'<td><input type="text" id="txt_desc" onBlur="addToHiddenField(this,\'description\');"></td>'+
	'<td><input type="text" id="txt_amount" onBlur="addToHiddenField(this,\'amount\');"></td>'+
	'<td><span id="confirmAdd"><button onclick="addToDb(\''+table+'\');">Save</a>/<button onclick="cancelAdd();">Cancel</a></span></td>'+
	'</tr>';
	//alert(data);
	$("#table-body-"+table).append(data);
}
function cancelAdd(){
	//alert("weee");
	$("#add-more").show();
	$("#new_row_ajax").remove();
}
function addToDb(table)
{
	//alert(table);
	var date=$("#txt_date").val();
	var description=$("#txt_desc").val();
	var amount=$("#txt_amount").val();
	//var txt_table=$("#txt_table").val();
	var txt_table=table;
	var txt_count=$("#txt_count").val();
	//alert(txt_table);
	$.ajax({
		url: "../ajax/add.php",
		type: "post",
		data:'date='+date+'&description='+description+'&amount='+amount+'&table='+txt_table+"&count="+txt_count,
		success: function(data){
			//alert(data);
			$("new_row_ajax").remove();
			$("add-more").show();
			$("table-body").append(data);
			window.location.reload();
		}
	});
}
</script>

