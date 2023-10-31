document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const inputSizeInput = document.getElementById("input-size");
    const complexityValue = document.getElementById("complexity-value");

    calculateButton.addEventListener("click", function () {
        const inputSize = parseFloat(inputSizeInput.value);
        if (!isNaN(inputSize)) {
            // Calculate and set the computational complexity here
            const complexity = calculateComplexity(inputSize);
            complexityValue.textContent = complexity;
        } else {
            complexityValue.textContent = "Invalid input";
        }
    });

    function calculateComplexity(inputSize) {
        // Replace with your actual complexity calculation logic here
        // Example: O(inputSize^2)
        return `O(${inputSize ** 2})`;
    }
});
