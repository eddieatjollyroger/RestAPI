import express from 'express';
import { readFile } from 'fs/promises';
var json = JSON.parse(
  await readFile(
    new URL('../properties.json', import.meta.url)
  )
);

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get")
     console.log(json.properties)
     res.send(json);
})

router.get("/:number", (req, res) => {
  const { number } = req.params

  var newJson = []
  var counter = 0;

  for (let i = 0; i < json.properties.length; i++) {
  for (let j = 0; j < json.properties[i].units.length; j++) {

    if (json.properties[i].units[j] == "bedroom"){
        counter++;
    }
  }
  if (counter == number){
    newJson.push(json.properties[i])
  }
  counter = 0;
}

res.send(newJson);
})

router.post("/", (req, res) => {
  console.log("post")

    console.log(req.body);
    var properties = [];
    for(var i = 0; i < json.properties.length; i++){
    properties.push(json.properties[i]);
}
    properties.push(req.body);
    json.properties = properties;
    res.send(json.properties);
})

router.delete("/", (req, res) => {
    for(var i = 0; i < json.properties.length; i++){
    if (json.properties[i].name == req.body.name){
      console.log("req.body" + req.body.name)
        delete json.properties[i];
        json.properties = json.properties.filter(function(e){return e}); 
    }
    }
    res.send(json.properties);
})

export default router;