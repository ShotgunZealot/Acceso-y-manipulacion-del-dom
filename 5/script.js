document.addEventListener("DOMContentLoaded", function () {
    var addRowButton = document.getElementById("add-row-btn");
    var dataTable = document.getElementById("data-table").getElementsByTagName('tbody')[0];

    function addRow() {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td><input type="text" class="nombre"></td>
        <td><input type="number" class="edad"></td>
        <td><button class="delete-row-btn">Eliminar</button></td>
      `;
        dataTable.appendChild(newRow);
    }

    function deleteRow(row) {
        row.parentNode.removeChild(row);
    }

    addRowButton.addEventListener("click", addRow);

    dataTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-row-btn")) {
            deleteRow(event.target.parentNode.parentNode);
        }
    });
});
