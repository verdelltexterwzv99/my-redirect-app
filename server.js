const express = require('express');
const app = express();

// Redirect all traffic to your final URL
app.get('*', (req, res) => {
  res.redirect(301, 'https://your-final-url.com'); // ← Replace with your URL
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});