function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            var content = " ";
            // obj = JSON.stringify(data.items);
            // document.getElementById("todoList").innerHTML = obj;
            $.each(data, function(i,item){
                // JSON.stringify(item);
                content += '<p>' + item.name + '</p>';
                content += '<p>' + item.due_date + '</p>';
                content += '<br/>';
                // $(content).appendTo("#todoList");
            });
            document.getElementById("todoList").innerHTML = content;
        });
    });
}

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// });