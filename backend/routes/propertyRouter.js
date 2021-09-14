import express from 'express';

import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('../properties.json', import.meta.url)
  )
);

const router = express.Router();


router.get("/", (req, res) => {
     console.log(json)
     res.send(json);
})

router.post("/", (req, res) => {
    console.log(json.properties);
    var properties = [];
    for(var i = 0; i < json.properties.length; i++){
    properties.push(json.properties[i]);
}
    properties.push(req.body);
    json.properties = properties;
    res.send(json);
})

router.delete("/", (req, res) => {
    for(var i = 0; i < json.properties.length; i++){
    if (json.properties[i].name == req.body.name){
        delete json.properties[i];
    }
    }
    res.send(json);
})

export default router;