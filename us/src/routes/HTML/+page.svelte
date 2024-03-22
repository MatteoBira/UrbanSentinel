<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        /* Basic CSS styling for the form */
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #fff ;
            margin: 0;
            padding: 0;
            background-color: #1a1818;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #2c2c2c;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        h2 {
            margin-top: 0;
            text-align: center;
        }
        .form-group {   
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            background-color: #7b7a7a;
            width: 100%;
            padding: 10px;
            color: #fff;
            border: 1px solid #6b6b6b;
            border-radius: 5px;
            box-sizing: border-box;
        }
        textarea {
            height: 150px;
        }
        input[type="submit"] {
            background-color: #0b7619;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #9e1d1d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Contact Us</h2>
        <!-- Utilizziamo l'attributo action di Formspree per gestire l'invio del modulo -->
        <form action="https://formspree.io/xbjnawyg" method="POST">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <input type="submit" value="Submit">
        </form>
    </div>
</body>
