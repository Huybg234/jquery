let id = 1;
let list = [];
let isEdit = false;
$("#update").click(function () {
    var no = id;
    var name = $("#name").val();
    var address = $("#address").val();
    var phoneNumber = $("#phoneNumber").val();
    var className = $("#className").val();
    if (name == "" || address == "" || phoneNumber == "" || className == "") {
        alert("Nhập thiếu hoặc nhập sai! vui lòng kiểm tra lại");
        return 0;
    }

    if (isEdit) {
        $('table').on('click', '.edit', function () {
            $(this).parents('tr').editElement();
        });
    }

    $("#output").append("<tr>" +
        "<td><button id='delete' type='button' class='delete'>Delete</button><button id='edit' type='button' class='edit'>Edit</button></td>" +
        "<td>" + no + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + address + "</td>" +
        "<td>" + phoneNumber + "</td>" +
        "<td>" + className + "</td>" +
        "</tr>");
    var ob = { no, name, address, phoneNumber, className };
    list.push(ob);
    clearForm();
    id++;
});

$('table').on('click', '.delete', function () {
    $(this).parents('tr').remove();
});

function editElement() {
    document.getElementById('name').value = list[no].name;
    document.getElementById('address').value = list[no].address;
    document.getElementById('phoneNumber').value = list[no].phoneNumber;
    document.getElementById('className').value = list[no].className;
    isEdit = true;
    doUpdateInfo(name, address, phoneNumber, className)
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("className").value = "";
}

function doUpdateInfo(name, address, phoneNumber, className) {
    list[no].name = name;
    list[no].address = address;
    list[no].phoneNumber = phoneNumber;
    list[no].className = className;
}