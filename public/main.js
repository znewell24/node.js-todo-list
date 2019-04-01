function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            
            document.getElementById("todoList").innerHTML = JSON.stringify(data);
        })
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})