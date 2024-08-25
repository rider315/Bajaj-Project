const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Define the POST route for /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets[lowercaseAlphabets.length - 1]] : [];

    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "gaurav.chaudhary2021@vitstudent.ac.in",
      roll_number: "21BEC2315",
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet
    });
  } catch (error) {
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

// Define the GET route for /bfhl
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
