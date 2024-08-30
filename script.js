/* Basic styling for the calculator */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 320px;
    max-width: 100%;
}

h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

input {
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
}

button {
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

iframe {
    width: 100%;
    height: 80px; /* Adjust height as needed */
    border: none; /* Remove border */
    border-radius: 6px;
    margin-top: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #333;
    box-shadow: none; /* Remove shadow to ensure single layer appearance */
    overflow: hidden; /* Ensure no scroll bars */
}
