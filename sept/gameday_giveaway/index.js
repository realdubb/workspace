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


function getScoreBoxes(){
  let $ = cheerio.load(fs.readFileSync('index.html'))
  return $('.scorebox-wrapper')
}

parseScoreBoxes()


/*

Best Team Combination
Best Team Combination of teams that didn't play each other


Teams
{
  Chiefs{
    Score
    Opponent
    Home
  }
}

*/