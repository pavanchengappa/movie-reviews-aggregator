const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/api/search', async (req, res) => {
  try {
    const response = await axios.get('https://imdb8.p.rapidapi.com/auto-complete', {
      params: { q: req.query.query },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    });
    
    const movies = response.data.d
      .filter(item => item.qid === 'movie' || item.qid === 'feature')
      .map(item => ({
        id: item.id,
        title: item.l,
        year: item.y,
        image: item.i ? item.i.imageUrl : null
      }));
    res.json(movies);
  } catch (error) {
    console.error('IMDB Search Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error searching movies', error: error.message });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const response = await axios.get('https://imdb8.p.rapidapi.com/title/v2/get-critics-review-summary', {
      params: req.query,
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('IMDB Reviews Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
});

app.get('/api/nyt-reviews', async (req, res) => {
  try {
    if (!process.env.NYT_API_KEY) {
      throw new Error('NYT_API_KEY is not configured');
    }

    const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': process.env.NYT_API_KEY,
        'q': req.query.query,
        'fq': 'section_name:"Movies" AND type_of_material:"Review"',
        'sort': 'newest'
      }
    });

    const transformedData = {
      results: response.data.response.docs.map(doc => ({
        byline: doc.byline?.original || 'Anonymous',
        summary_short: doc.abstract || doc.snippet || '',
        publication_date: doc.pub_date,
        critics_pick: doc.headline?.main?.toLowerCase().includes('critic\'s pick') ? 1 : 0,
        link: {
          url: doc.web_url
        }
      }))
    };

    res.json(transformedData);
  } catch (error) {
    console.error('NYT Reviews Error:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Error fetching NYT reviews',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Environment check:');
  console.log('- RAPIDAPI_KEY:', process.env.RAPIDAPI_KEY ? 'Set' : 'Missing');
  console.log('- NYT_API_KEY:', process.env.NYT_API_KEY ? 'Set' : 'Missing');
});