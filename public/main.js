function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            $(JSON.stringify(data)).appendTo("todoList");
            $.each(data.items, function(i, item) {
                display = "<h3>" + item.name + "</h3>" +
                           "<p>" + item.due_date + "</p><br/>";
                $(display).appendTo("todoList");
            }); 
            document.getElementById("todoList").innerHTML = JSON.stringify(data.items);
        });
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})