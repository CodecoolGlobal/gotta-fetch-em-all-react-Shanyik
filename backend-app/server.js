const express = require('express')
const app = express()
const fs = require("fs");
function apiData() {
  try {
    const data = fs.readFileSync("./public/pokemonDB.json")
    return JSON.parse(data);
  } catch (err) {
    console.log(err)
  }
}
const pokemonToSave = null

app.use(express.static("public"))


app.get("http://localhost:3000", (req, res) => {
    res.json()
    
})

app.post("/", (req, res) => {
    let pokemonDB = apiData()


    fs.writeFileSync("./public/pokemonDB.json", JSON.stringify(pokemonDB))

})


app.listen(5000, () => {console.log("Server Running on Port 5000")})