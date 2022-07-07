const express = require('express');
const fs = require('fs');
const app = express()
const axios = require('axios');

var https = require("https");

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

var server = app.listen(8080, () => {
  console.log("Servidor web iniciado")
})

app.post("/roommates", async (req, res, next) => {
  res.send()
  try {
    await axios.get("https://randomuser.me/api", { 'headers': { 'Content-Type': 'application/json' } })

      .then(res => {

        fs.writeFileSync(__dirname + "/public/roommates.json", JSON.stringify(res.data),
          "utf8", err => {
            if (err) console.log("El jsonse escribio de manera correcta", err);

          });
      })

  }

  catch (err) {
    console.error("El json no llego", err);
  }
})

app.post("/gastos", async (req, res, next) => {
  res.send()

  try {
    await axios.get("../public/script.js", { 'headers': { 'Content-Type': 'application/json' } })

      .then(res => {

        var nombreForm;
        var descripcionForm;
        var montoForm;


      })

  }

  catch (err) {
    console.error("El json no llego", err);
  }

  fs.appendFile(__dirname + "/public/gasto.json", "JSON no llego", "utf8", () => {

  })
})





