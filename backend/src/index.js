import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

console.log("API Key:", process.env.OPENAI_API_KEY); // Verifique se a chave está sendo carregada

const app = express();
const port = process.env.PORT || 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });
    res.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error('Error creating chat completion:', error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
