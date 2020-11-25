const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hi2tjF2rdrsGf19nMDWZSczmx4ZG8RXCPBtOE4v5tKy8cZshqIvqs0hb5dNhKua3jxUq8EWDOOkRI7JIh0Pt8e8009eFdSI3p"
);

//API

//API config
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment request received!!, for this amount >> ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
