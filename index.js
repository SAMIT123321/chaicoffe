const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('this is home')
})
app.get('/pro',(r,s)=>{

    s.send('html')
    
})

app.listen(port, () => {
    console.log("done");
})




