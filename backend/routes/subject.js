const express = require ('express');
const router = express.Router();

const subject = '{"contactSubject": ["General Enquery", "Schedul", "Data Analyst", "Cybersecurity Specialist", "Cloud Engineer", "UX/UI Designer", "Other","Nicety"]}'

router .get('/', (req, res) => {
    res.json(subject);
});


module.exports = router