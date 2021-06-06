$(document).ready(function () {
    let id = 1;
    let list = [];
    let isEdit = false;
    let index = -1

    $("#save-button").click(function () {
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
            doUpdateInfo(name, address, phoneNumber, className);
            $("#name").val(name);
            $("#address").val(address);
            $("#phoneNumber").val(phoneNumber);
            $("#className").val(className);
            isEdit = false;
            return;
        }

        $("#table-data").append("<tr id='" + id + "'>" +
            "<td><button type='button' class='delete'>Delete</button><button type='button' class='edit'>Edit</button></td>" +
            "<td class='no'>" + no + "</td>" +
            "<td class='name'>" + name + "</td>" +
            "<td class='address'>" + address + "</td>" +
            "<td class='phoneNumber'>" + phoneNumber + "</td>" +
            "<td class='className'>" + className + "</td>" +
            "</tr>");
        var ob = { no, name, address, phoneNumber, className };
        list.push(ob);
        clearForm();
        id++;
    });

    $('table').on('click', '.delete', function () {
        $(this).parents('tr').remove();
    });

    $('table').on('click', '.edit', function () {
        const no = $(this).parents('tr').children('.no').text();
        index = searchIndexById(no);
        console.log(index);
        const name = $(this).parents('tr').children('.name').text();
        const address = $(this).parents('tr').children('.address').text();
        const phoneNumber = $(this).parents('tr').children('.phoneNumber').text();
        const className = $(this).parents('tr').children('.className').text();

        document.getElementById('name').value = name;
        document.getElementById('address').value = address;
        document.getElementById('phoneNumber').value = phoneNumber;
        document.getElementById('className').value = className;

        isEdit = true;
    });

    function searchIndexById(tmp) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].no == tmp) return i;
        }
        return -1;
    }

    function doUpdateInfo(name, address, phoneNumber, className) {
        list[index].name = name;
        list[index].address = address;
        list[index].phoneNumber = phoneNumber;
        list[index].className = className;
        index = -1;
    }

    function clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("className").value = "";
    }
});