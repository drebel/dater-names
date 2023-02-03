const express = require('express')
const app = express()
const PORT = 8000

const daters = {
    'unknown': {
        'zip': 'unknown',
        'birthYear': 'unknown',
        'gender': 'unknown',
        'preferences': 'unknown',
    },
    'greg': {
        'zip': 98125,
        'birthYear': 1993,
        'gender': 'male',
        'preferences': 'male',
    },
    'manny': {
        'zip': 98155,
        'birthYear': 1992,
        'gender': 'male',
        'preferences': 'male'
    }

}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const daterName = req.params.name.toLowerCase()
    if(daters[daterName]){
        res.json(daters[daterName])
    }else{
        res.json(daters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})