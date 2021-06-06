$(document).ready(function () {
    let id = 0;
    let list = [];
    let isEdit = false;
    let index = -1

    $("#save-button").click(function () {
        const name = $("#name").val();
        const address = $("#address").val();
        const phoneNumber = $("#phoneNumber").val();
        const className = $("#className").val();
        if (name == "" || address == "" || phoneNumber == "" || className == "") {
            alert("Nhập thiếu hoặc nhập sai! vui lòng kiểm tra lại");
            return 0;
        }

        if (isEdit) {
            doUpdateInfo(name, address, phoneNumber, className);
            isEdit = false;
            return;
        }

        $("#table-data").append("<tr id='" + id + "'>" +
            "<td><button type='button' class='delete'>Delete</button><button type='button' class='edit'>Edit</button></td>" +
            "<td class='no' style='display: none'>" + id + "</td>" +
            "<td class='name'>" + name + "</td>" +
            "<td class='address'>" + address + "</td>" +
            "<td class='phoneNumber'>" + phoneNumber + "</td>" +
            "<td class='className'>" + className + "</td>" +
            "</tr>");
        const ob = { id, name, address, phoneNumber, className };
        list.push(ob);
        clearForm();
        id++;
    });

    $('table').on('click', '.delete', function () {
        const rowData = $(this).parents('tr');
        index = rowData.children('.no').text();
        rowData.remove();
        list.splice(index, 1);
    });

    $('table').on('click', '.edit', function () {
        const rowData = $(this).parents('tr');
        index = parseInt(rowData.children('.no').text());

        document.getElementById('name').value = rowData.children('.name').text();
        document.getElementById('address').value = rowData.children('.address').text();
        document.getElementById('phoneNumber').value = rowData.children('.phoneNumber').text();
        document.getElementById('className').value = rowData.children('.className').text();

        isEdit = true;
    });

    function doUpdateInfo(name, address, phoneNumber, className) {
        list[index].name = name;
        list[index].address = address;
        list[index].phoneNumber = phoneNumber;
        list[index].className = className;

        const rowData = $('table').find('tr#' + index);
        rowData.children('.name').text(name);
        rowData.children('.address').text(address);
        rowData.children('.phoneNumber').text(phoneNumber);
        rowData.children('.className').text(className);

        index = -1;
        clearForm();
    }

    function clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("className").value = "";
    }

});