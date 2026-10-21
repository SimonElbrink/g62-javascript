![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

# Exercise 2: Dynamic Content & Event Delegation


## 1. The HTML Structure (`index.html`)

Copy this code into your `index.html` file to set up the basic structure and styles.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 2: Sharing Content</title>
    <style>
        /* Basic styling for the exercise */
        body {
            font-family: sans-serif;
            padding: 20px;
            background-color: #f4f4f9;
        }

        .container {
            max-width: 800px;
            margin: auto;
        }

        .card {
            background: white;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .card.active {
            border: 2px solid #007bff;
            background-color: #e7f1ff;
        }

        .btn {
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
        }

        .btn-load {
            background-color: #28a745;
            color: white;
            margin-bottom: 20px;
        }

        .btn-like {
            background-color: #6c757d;
            color: white;
        }

        .btn-like.liked {
            background-color: #dc3545;
        }

        .btn-share {
            background-color: #17a2b8;
            color: white;
        }

        #instructions {
            background: #fff3cd;
            padding: 15px;
            border: 1px solid #ffeeba;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Share Your Articles</h1>

    <button id="load-btn" class="btn btn-load">Load New Content 📥</button>

    <div id="content-area">
        <!-- Dynamic cards will be injected here -->
    </div>
</div>

<script src="exercise2/app.js"></script>
</body>
</html>
```

---

## 2. The JavaScript Starter (`app.js`)

Copy this code into your `app.js` file and follow the TODO comments to implement the logic.

```javascript
// 1. Data Store
const articles = [
    { id: 101, title: "JavaScript Tips", body: "Use 'const' by default for cleaner code." },
    { id: 102, title: "CSS Tricks", body: "Flexbox makes centering elements super easy." },
    { id: 103, title: "Web Security", body: "Always validate user input on the server side." }
];

// 2. Select UI Elements
const loadBtn = document.getElementById("load-btn");
const contentArea = document.getElementById("content-area");

// ====================================================
// TODO: YOUR CODE GOES BELOW
// ====================================================

// Step 1: Create a function to generate the HTML string for a card
// Hint: Return a string using backticks (``) that contains:
// - An <h3> for the title
// - A <p> for the body
// - Two buttons with classes 'btn-like' and 'btn-share'
function createCardHTML(article) {
    // Your code here
}

// Step 2: Add click event listener to #load-btn
// Hint: Loop through 'articles' array and append HTML to 'contentArea'
loadBtn.addEventListener("click", () => {
    // Your code here
});

// Step 3: Implement Event Delegation for the Like and Share buttons
// Hint: Add ONE listener to 'contentArea' and check e.target.classList
contentArea.addEventListener("click", (e) => {
    // 4. Handle Like Button
    if (e.target.classList.contains("btn-like")) {
        // Toggle class 'liked' and change text between "Like ❤️" and "Liked! ✅"
    }

    // 5. Handle Share Button
    if (e.target.classList.contains("btn-share")) {
        // Get the title from the card and show an alert
    }
});
```

---
