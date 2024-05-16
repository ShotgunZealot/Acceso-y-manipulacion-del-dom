document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    let equation = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent;
            console.log(buttonText)
            if (button.classList.contains("clear")) {
                equation = "";
            } else if (buttonText === "=") {
                try {
                    equation = eval(equation).toString();
                } catch (error) {
                    equation = "Error";
                }
            } else {
                equation += buttonText;
            }
            display.value = equation;
        });
    });
});  