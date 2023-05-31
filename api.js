const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/api/search', async (req, res) => {
  const query = req.query.q;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}`);

    const results = await page.evaluate(() => {
      const searchResults = document.querySelectorAll('.g');

      const data = [];

      searchResults.forEach((result) => {
        const titleElement = result.querySelector('h3');
        const linkElement = result.querySelector('a');

        const title = titleElement ? titleElement.textContent : null;
        const link = linkElement ? linkElement.href : null;

        if (title && link) {
          data.push({ title, link });
        }
      });

      return data;
    });

    await browser.close();

    res.json(results);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os resultados.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor API está rodando na porta 3000');
});
