document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    // Calculate the result
    const result = num1 * num2;
    
    // Display the result in the result-frame div
    const resultFrame = document.getElementById('result-frame');
    resultFrame.textContent = result;
});
