function getItems() {
    $(document).ready(function () {
        $.getJSON("/getTodoList", function (data) {
            
            document.getElementById("todoList").innerHTML = JSON.stringify(data);
        })
    });
}