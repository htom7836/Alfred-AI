const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'API key is missing!' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
    { role: 'system', content: 'You are Alfred, a highly professional and intelligent AI assistant with a sharp wit and a touch of dry humor. You give accurate, well-structured answers but occasionally add a clever remark. You speak formally but never boringly.' },
    { role: 'user', content: userMessage }
]
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data));
    const reply = data.choices?.[0]?.message?.content || data.error?.message || 'No response';
    res.json({ reply });

  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
