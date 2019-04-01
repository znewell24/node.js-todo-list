function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            $.each(data.items, function(i, item) {
                display = "<h3>" + item.name + "</h3>" +
                           "<p>" + item.due_date + "</p><br/>";
                $(display).appendTo("todoList");
            }); 

        });
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})