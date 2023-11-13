// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/save-to-dropbox', async (req, res) => {
  const { text } = req.body;

  // Create a text file
  const fileName = 'textFile.txt';
  fs.writeFileSync(fileName, text);

  // Use Dropbox Saver to save the file
  const saverOptions = {
    files: [
      {
        url: `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
        filename: 'textFile.txt',
      },
    ],
  };

  res.status(200).json({ message: 'File saved to Dropbox successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
