const { Router } = require('express');
const fs = require('fs');
const path = require('path')

router.post('/'), (req,res) => {
    const {email} = req.boddy; 
    const subscribe = { subscribe : new Data(), email};
    
    const filePath = path.join(_dirname ,"data","subscribe.json");
    let subscribe = [];
    if(fs.existsSync(filePath)){
        let data = fs.readFileSync(filePath,"utf-8");
        subscribe = JSON.stringify(data);
        //step 3 append new data
        subscribe.push(subscribe)
        //step 4 write array in to file
        fs.wirteFileSync(filePath, JSON.stringify(subscribe, null , 2 
        res.AZ    ))
    } else {
        
    }
}