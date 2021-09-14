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
    properties.push(json.properties);
    properties.push(req.body);
    json.properties = properties;
    res.send(json);
})

export default router;