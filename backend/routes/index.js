const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the MentoringPM API',
    status: 'success'
  });
});

module.exports = router;

