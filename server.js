const express = require('express');
const path = require('path');
const { handler: chatHandler } = require('./netlify/functions/chat');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the migrated Netlify chat function at its existing frontend endpoint
app.post('/.netlify/functions/chat', async (req, res) => {
  try {
    const result = await chatHandler({
      httpMethod: 'POST',
      headers: req.headers,
      body: JSON.stringify(req.body || {}),
    });

    const statusCode = result.statusCode || 200;
    let payload = {};
    try {
      payload = typeof result.body === 'string' ? JSON.parse(result.body) : result.body;
    } catch {
      payload = { reply: String(result.body || '') };
    }

    res.status(statusCode).json(payload);
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ reply: 'AI server error.' });
  }
});

const buildDir = path.join(__dirname, 'build');
app.use(express.static(buildDir));

app.use((req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
