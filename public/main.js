function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            var obj = JSON.stringify(data);
            $(obj).appendTo("#todoList");
            // $.each(data, function(i,item){
            //     content += '<p>' + item.name + '</p>';
            //     content += '<p>' + item.due_date + '</p>';
            //     content += '<br/>';
            //     $(content).appendTo("#todoList");
            // });
        });
    });
}

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// });