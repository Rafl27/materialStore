const express = require("express")
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

// const bodyparser = require('body-parser')


app.use(express.json())
app.use(cors())

// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json())

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: '1234',
        database: 'store'
    }
)

app.get('/', (request, response) => {
    response.send("This is working!")
})

//Store Items

app.get('/getitems', (request, response) => {
    const getItemsQuery = 'SELECT * FROM store.storeitems;'
    db.query(getItemsQuery, (error, result) => {
        if (error) {
            response.send({ error: error })
        }else{
            response.send(result)
        }
    })
})

app.post('/createitem', (request, response) => {
    const name = request.body.name
    const price = request.body.price
    const description = request.body.description
    const image = request.body.image

    // const createItemQuery = `INSERT INTO store.storeitems (name, price, description, imageUrl) values (${name}, ${price}, ${description}, ${image})`

    db.query('INSERT INTO store.storeitems (name, price, description, imageUrl) values (?, ?, ?, ?)', [name, price, description, image], (error, result) => {
        if(error){
            console.log(error)
            response.send(error)
        }else{
            console.log('it worked!')
        }
    })
})


//Users

app.post('/registerNewUser', (request, response) => {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const password = request.body.password
    const email = request.body.email
         
    db.query('INSERT INTO store.users (email, password, firstName, lastName) values (?, ?, ?, ?)', [email, password, firstName, lastName], (error, result) => {
        if(error) {
            console.log(error)
        }else {
            console.log("user added to the database!")
        }
    } )
})

app.post('/login', (request, response) => {
    const email = request.body.email
    const password = request.body.password
    


    db.query('SELECT * FROM store.users WHERE email = ? AND password = ?', [email , password], (error, result) => {
        // console.log(request.body)
        if(error){
            response.send({error: error})
        }

        if(result.length > 0) {
            response.send(result)
        }else{
            response.send({message:"No user found with these credentials."})
            
        }
    })


})

app.listen(3001, () => console.log("Server running on http://localhost:3001"))