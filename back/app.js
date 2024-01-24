const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors())

app.get('/okay',(req, res)=>{
    res.json({
        success: false,
        str:"next"
    });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});