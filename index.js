const express = require('express');
const path = require('path');
const app = express();

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Fallback route to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
﻿const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Welcome to My Deployed App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: #fff;
          text-align: center;
          padding: 50px;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Welcome to My Deployed Node.js App!</h1>
      <p>This app is live and served using Express on Render.</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
