function calculateTemp() {
    const inputTemp = parseFloat(document.getElementById("input1").value);
    const unitSelector = document.getElementById("input2");
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

    let result = "";

    if (selectedUnit === "cel") {
        result = `${inputTemp} Celsius is ${ctof(inputTemp).toFixed(1)} Fahrenheit`;
    } else {
        result = `${inputTemp} Fahrenheit is ${ftoc(inputTemp).toFixed(1)} Celsius`;
    }

    document.getElementById("output").value = result;
}

function ctof(celsius) {
    return (celsius * 9/5) + 32;
}

function ftoc(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
