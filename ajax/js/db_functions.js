<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
function saveToDb(editableObj,field,id,table)
{
	var value=$(editableObj).text();
	//alert(value);
	$.ajax({
		type: "POST",
		url: '../ajax/edit_finances.php',
		data:"id="+id+"&value="+value+"&field="+field+"&table="+table,
		success: function(data)
		{
			window.location.href="finances.php";
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
</script>
