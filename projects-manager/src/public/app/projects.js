$(function () {

    $("#jsGrid").jsGrid({
        height: "80%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "¿Borrar proyecto?",
        controller: {
            loadData: function (filter) {
                return $.ajax({
                    type: "GET",
                    url: "./api/projects"
                });
            },
            insertItem: function (item) {
                return $.ajax({
                    type: "POST",
                    url: "./api/projects",
                    data: item
                });
            },
            updateItem: function (item) {
                return $.ajax({
                    type: "PUT",
                    url: "./api/projects",
                    data: item
                });
            },
            deleteItem: function (item) {
                return $.ajax({
                    type: "DELETE",
                    url: "./api/projects",
                    data: item
                });
            }
        },
        fields: [
            { name: "name", type: "text", title: "Nombre", width: 40, filtering: false },
            { name: "prefix", type: "text", title: "Prefijo", width: 40, filtering: false },
            { name: "collectionName", type: "text", title: "Colección", width: 40,filtering: false, sorting: false },
            { name: "port", type: "number", title: "Puerto Externo", width: 30, filtering: false },
            { type: "control", width: 30 }
        ]
    });
});
