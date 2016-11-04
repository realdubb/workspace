const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

let url = 'http://www.nfl.com/scores/2016'





function getHTML(){
  request(url, function(err, response, body) {
    if (err) {
      cb(err);
    }
    else {
      //fs.writeFileSync('index.html', body)
      console.log('success')
      //let $ = cheerio.load(body);
    }
  });
}


function parseScoreBoxes(){
  let $ = cheerio.load(fs.readFileSync('index.html'))
  console.log($('.scorebox-wrapper'))
}

parseScoreBoxes()