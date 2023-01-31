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
			window.location.href="finances.php";
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
				window.location.href="finances.php";
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
			//alert(data);
	}
})
}
</script>
