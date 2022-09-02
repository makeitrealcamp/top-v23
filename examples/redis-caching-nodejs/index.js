const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');

const app = express();

app.use(responseTime());

// Get all characters
app.get('/api/characters', async (req, res) => {
  try {
    // Fetching Data from Rick and Morty API
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    return res.json(response.data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('/api/characters/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetching Data from Rick and Morty API
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    // resond to client
    return res.json(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(8080, async () => {
  console.log('🤖🚀 Rocking on port at http://localhost:8080');
});
