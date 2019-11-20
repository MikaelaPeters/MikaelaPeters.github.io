require('dotenv').config()
const express = require('express')
const{Pool}=require('pg')
const app = express ()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

app.get('/zagster', (request, response) => {
    const pool = new Pool ({
        connectionstrong: DATABASE_URL,
    })

    pool.query('SELECT * FROM rides', (err, results)=> {
        response.send(results.rows[0])
        pool.end()
    })
})


app.get('/algorithms',(request,response)=> {
    response.send('derived from a mathematicians name')
})

app.get('/rides/count', (request, response) => {
    const pool = new Pool ({
        connectionstrong: DATABASE_URL,
    })

    pool.query('SELECT COUNT * FROM rides', (err, results)=> {
        response.send(results.rows[0])
        pool.end()
    })
})









app.get('/',(request,response)=> {
    response.send('I am listening!')
})

app.get('/peters',(request,response)=> {
    response.send('Oliver is the name of my pup!')
})


examples.get('/dogs', (req, res) => res.send('Adopt dont shop!'));

