const input = document.querySelector(".input input");
const buttons = document.querySelectorAll(".btns button");

let exp = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                exp = eval(exp);  // FIX: Use eval(exp) instead of eval(eval)
                input.value = exp;
            } catch {
                input.value = "Error";
                exp = "";
            }
        } else if (value === "C") {
            exp = "";
            input.value = "";
        } else {
            exp += value;
            input.value = exp;
        }
    });
});
