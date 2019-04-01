function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            var content = " ";
            $.each(data.items, function(i,item){
                content += '<p>' + item.name + '</p>';
                content += '<p>' + item.due_date + '</p>';
                content += '<br/>';
            });
            document.getElementById("todoList").innerHTML = content;
        });
    });
}

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// });