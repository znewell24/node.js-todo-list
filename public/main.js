function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            $.each(data, function(i, item) {
                var display = "<h3>" + JSON.stringify(item.name) + "</h3>" +
                           "<p>" + JSON.stringify(item.due_date) + "</p><br/>";
                $(display).appendTo("todoList");
            }); 
            // document.getElementById("todoList").innerHTML = data;
        });
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})