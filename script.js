document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('equals').addEventListener('click', () => {
        const input1 = parseFloat(document.getElementById('input1').value);
        const input2 = parseFloat(document.getElementById('input2').value);
        const operator = document.getElementById('operator').value;

        let result;

        switch (operator) {
            case "addition":
                result = input1 + input2;
                break;
            case "subtraction":
                result = input1 - input2;
                break;
            case "multiplication":
                result = input1 * input2;
                break;
            case "division":
                if (input2 === 0) {
                    result = "Cannot divide by 0";
                } else {
                    result = input1 / input2;
                }
                break;
            default:
                result = "Invalid operation";
        }
        document.getElementById('result').innerText = result;
    });

    document.getElementById('reset').addEventListener("click", () => {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("operator").value = "addition";
        document.getElementById("result").innerText = "..."
    });
});    
