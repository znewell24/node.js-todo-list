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

const flatpickr = require("flatpickr");

var options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    onChange: function(selectedDates, dateStr, instance) {
        alert("dates: " + selectedDates + " - dateStr: " + dateStr + " instance: " + instance);
    },
};
$("time_due").flatpickr(options);
