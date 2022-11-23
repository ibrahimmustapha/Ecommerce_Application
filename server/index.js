const express = require('express');
const app = express();
const PORT = '4000';

app.get('/version', (req, res) => {
    res.json({ version: '0.0.1'})
})

// running server on port::4000
app.listen(PORT, () => {
    console.log(`live on http://localhost:${PORT}`);
})
