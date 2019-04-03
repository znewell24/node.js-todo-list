function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            var content = '<ul class="list-group" style="text-align:center">';
            $.each(data.items, function(i,item){
                content += '<li class="list-group-item">' + 
                           '<button type="button" style="float: left;" onclick="deleteItem('
                            + item.name + ')" class="btn btn-secondary" data-dismiss="modal">Delete Item</button>'
                content += item.name;
                content += '<span class="badge badge-primary badge-pill">' + item.due_date + 
                '</span>' + '</li>';
            });
            content += '</ul>';
            document.getElementById("todoList").innerHTML = content;
        });
    });
}

function addItem() {
    var new_name = $("#name").val();
    var new_due_date = $("#time_due").val();

    $.post("/addItem", {name: new_name, due_date: new_due_date});

}

function deleteItem(item_name) {
    var item = item_name;

    $.post("/deleteItem", {name: item});
}