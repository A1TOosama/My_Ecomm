const express = require('express');
const router = express.Router();

//const subject_text = '{"contactSubject": [    "Software Developer",    "System Administrator",    "Data Analyst",    "Cybersecurity Specialist",    "Cloud Engineer",    "UX/UI Designer",    "Other"]}';
const subject_file = require('../data/contact_subject.json')


router.get('/', (req, res) => {
  
  res.json(subject_file);
});

module.exports = router