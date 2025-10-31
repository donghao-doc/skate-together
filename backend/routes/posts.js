const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET /api/posts
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }
  res.json(data);
});

// POST /api/posts
router.post('/', async (req, res) => {
  const { author, content } = req.body;
  const { data, error } = await supabase
    .from('posts')
    .insert({ author, content })
    .select()
    .single();
  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create post' });
  }
  res.status(201).json(data);
});

module.exports = router;
