const express = require('express')
const app = express()
const port = 3000


var fs = require('fs');

function readfile() {
  fs.readFile('content.txt', 'utf8', function (err, data) {
    if (err) throw err;
    handelFile(data)
    console.log("Successfully Read from file File.");
  });
}

function handelFile(data) {
  console.log(data)
  var text = 'new text'
  writeFile(text)
  json = { "url": "someurl", "method": "GET", "Duration": "1.098 ms" };

  var fs = require("fs");
  let dataJson = JSON.stringify(json);
  fs.appendFile("log.txt", dataJson + '\n', (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

  app.use(function (req, res, next) {
    res.send(json)
    next()
  })
  app.get('/', (req, res) => {
    res.send(data)
  })
}

function writeFile(data) {

  var fs = require("fs");

  fs.appendFile("content.txt", data + '\n', (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

}

function main() {
  readfile()

}

main()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


