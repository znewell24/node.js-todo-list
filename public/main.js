function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            $.each(data, function(i, item) {
                JSON.stringify(item);
                display = '<p>' + item.name + '</p>';
                display = '<p>' + item.due_date + '</p><br/>';
                $(display).appendTo("#todoList");
            }); 
            // document.getElementById("todoList").innerHTML = data;
        });
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})