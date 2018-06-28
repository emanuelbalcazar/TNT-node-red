$(function () {

    $("#jsGrid").jsGrid({
        height: "90%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "¿borrar usuario?",
        controller: {
            loadData: function (filter) {
                return $.ajax({
                    type: "GET",
                    url: "/nodered/api/users"
                });
            },
            insertItem: function (item) {
                return $.ajax({
                    type: "POST",
                    url: "/nodered/api/users",
                    data: item
                });
            },
            updateItem: function (item) {
                return $.ajax({
                    type: "PUT",
                    url: "/nodered/api/users",
                    data: item
                });
            },
            deleteItem: function (item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/nodered/api/users",
                    data: item
                });
            }
        },
        fields: [
            { name: "username", type: "text", title: "Nombre de Usuario", width: 80, filtering: false },
            { name: "password", type: "text", title: "Contraseña", width: 80, filtering: false },
            { name: "superuser", type: "checkbox", title: "¿Super Usuario?", filtering: false, sorting: false },
            { type: "control" }
        ]
    });
});