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

function addItem() {
    var new_name = $("#name").val();
    var new_due_date = $("#time_due").val();

    $.post("/addItem", {name: new_name, due_date: new_due_date})

}
