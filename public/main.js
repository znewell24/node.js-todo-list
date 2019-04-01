function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            var obj = JSON.parse(data);
            var display = "";

            $.each(data, function(i, item) {
                display += "<h3>" + data[i].name + "</h3>" +
                           "<p>" + data[i].due_date + "</p>";
            }); 

            document.getElementById("todoList").innerHTML = display;
        })
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})