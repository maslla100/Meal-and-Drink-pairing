<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assests/Style.css"> <!-- Corrected file path -->
    <title>Random Meal Generator</title>
</head>

<body>
    <header>
        <h1>Meal and Drink Pairing</h1>
    </header>

    <main>
        <section id="selection">
            <div>
                <label for="day">Select Day:</label>
                <select id="day">
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            </div>
            <div>
                <label for="meal-time">Select Meal:</label>
                <select id="meal-time">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
            <button id="get-pairing">Get Pairing</button>
        </section>

        <section id="result">
            <!-- Pairing results will be displayed here -->
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Meal and Drink Pairing</p>
    </footer>

    <script src="/assests/script.js"></script> <!-- Corrected file path -->
</body>

</html>
