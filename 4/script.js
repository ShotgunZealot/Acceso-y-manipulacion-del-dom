document.addEventListener("DOMContentLoaded", function () {
    var campoCounter = 1;

    document.getElementById("add-field-btn").addEventListener("click", function () {
        campoCounter++;

        var newField = document.createElement("div");
        newField.classList.add("form-field");
        newField.innerHTML = `
        <label for="campo${campoCounter}">Campo ${campoCounter}:</label>
        <input type="text" name="campo${campoCounter}" id="campo${campoCounter}" required>
        <button type="button" class="remove-field-btn">Eliminar</button>
      `;

        document.getElementById("form-fields").appendChild(newField);

        newField.querySelector(".remove-field-btn").addEventListener("click", function () {
            newField.remove();
        });
    });

    document.getElementById("dynamic-form").addEventListener("submit", function (event) {
        event.preventDefault();

        var formData = new FormData(this);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    });
});
