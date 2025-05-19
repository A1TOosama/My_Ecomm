const express = require('express');
const router = express.Router();
const subject = require('../data/contact_subject.json');

router.get('/', (req, res) => {
    res.end('{"contactSubject": ["General Enqury","Class","Schedule","Instructor","Price","Location","Other"]}');
})

module.exports = router;