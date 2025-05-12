const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    const {email} = req.body;
    const subscribe = { subscribeAt : new Date(), email};
    console.log('Content form submitted', {email});
    
    const filePath = Path.join (__dirname,"..","data","subsribe.json");
    // step 1 - 2 : read the existing file and parse it into an array
    let subscribes = [];
    if(fs.existsSync(filePath)){
        let data = fs.readFileSync(filePath,"utf-8");
        subscribes = JSON.parse(data);
        // step 3 append new data
        subscribes.push(subscribe)
        // step 4 write array back into file
        fs.writeFileSync(filePath, JSON.stringify(subscribe, null, 2));
        res.status(200).json({message : 'Email Received', subscribe});
    } else {

    }
    
    console.log('Content form summited', {email});
    res.status(200).json({message : 'Email Received'});
});

module.exports = router;