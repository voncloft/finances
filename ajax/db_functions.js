<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
function saveToDb(editableObj,test)
{
	var id = $(editableObj).text();
	alert(id);
	var field_to_modify=test;
	alert(field_to_modify);
	/*$.ajax({
		type: "POST",
		url: 'ajax/edit_finances.php',
		data:"id="+id+"&updated_value="+id_from_items,
		success: function(data)
		{
			alert(data);
		}
	});*/
}
</script>
