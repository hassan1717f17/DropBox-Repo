const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.use(bodyParser.json());

app.post('/save-to-dropbox', (req, res) => {
  const { text } = req.body;

  // Create a text file
  const fileName = 'textFile.txt';
  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, text);

  res.json({ success: true, filePath });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});