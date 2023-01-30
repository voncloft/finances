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
			//alert("success");
		}
	});
}
</script>
