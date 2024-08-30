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
    
    // Get the iframe and its document
    const iframe = document.getElementById('result-iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Write the result into the iframe as styled HTML content
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    background-color: #f8f9fa;
                }
                .result-frame {
                    border: 1px solid #007bff;
                    border-radius: 8px;
                    padding: 20px;
                    text-align: center;
                    background-color: #ffffff;
                    font-size: 24px;
                    color: #343a40;
                }
            </style>
        </head>
        <body>
            <div class="result-frame">
                ${result}
            </div>
        </body>
        </html>
    `);
    iframeDoc.close();
});
