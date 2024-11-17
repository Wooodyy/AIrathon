require('dotenv').config(); // Для загрузки переменных окружения из .env файла
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Эндпоинт для обработки данных
app.post('/api/rehab', async (req, res) => {
  try {
    const incomingData = req.body; // Получаем данные от фронтенда
    console.log('Received Data:', incomingData);

    // Формируем запрос к ChatGPT API
    const chatGptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Используем токен из переменной окружения
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: JSON.stringify(incomingData) },
        ],
        temperature: 0.7,
      }),
    });

    if (!chatGptResponse.ok) {
      throw new Error(`OpenAI API Error: ${chatGptResponse.statusText}`);
    }

    const responseData = await chatGptResponse.json();

    // Отправляем ответ обратно клиенту
    res.status(200).json({ success: true, response: responseData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
