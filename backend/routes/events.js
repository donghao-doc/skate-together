const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET /api/events
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });
  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch events' });
  }
  res.json(data);
});

// POST /api/events
router.post('/', async (req, res) => {
  const { title, location, date } = req.body;
  const { data, error } = await supabase
    .from('events')
    .insert({ title, location, date })
    .select()
    .single();
  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create event' });
  }
  res.status(201).json(data);
});

module.exports = router;
