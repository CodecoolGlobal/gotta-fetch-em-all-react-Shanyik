import express from "express";
const app = express()
import * as fs from 'fs'
function apiData() {
  try {
    const data = fs.readFileSync("./public/pokemonDB.json")
    return JSON.parse(data);
  } catch (err) {
    console.log(err)
  }
}
app.use(express.json())
//app.use(express.static("public"))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req,res)=>{
    res.send("test")
})

app.get("/pokemonDB", (req, res) => {
    const database = fs.readFileSync("./public/pokemonDB.json")
    let frontendData = JSON.parse(database)
    res.send(JSON.stringify(frontendData))
})

app.post("/pokemonDB",async (req, res) => {
    try{
    console.log("POST request running")
    fs.writeFileSync("./public/pokemonDB.json", JSON.parse(JSON.stringify(req.body)))
    res.send("POST Request Done!")
  }catch(err){
  console.log("err")
}
})


app.listen(3003, () => {console.log("Server Running on Port 3003")})