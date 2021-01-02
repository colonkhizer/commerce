const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51HkwgmBfTjjfFydqp84j0rUvhwcou39iBcULzgwjJ5wseRX1nOzvwHEuJ7nliZ74BwAfYSMBMvuU7wpVX8IPPcs400tDyDQUWN')

//API

//App Config

const app  = express();

//Middlwares

app.use(cors({ origin: true}))
app.use(express.json())

//Api Routes

app.get('/' , (req , res) => res.status(200).send('Hello 2 World'))

app.post('/payments/create' , async(request,response) => {
    const total = request.query.total;
    console.log('Payment request received' , total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen

exports.api = functions.https.onRequest(app)