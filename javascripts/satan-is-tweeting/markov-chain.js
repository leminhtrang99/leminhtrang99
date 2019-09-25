var MarkovChain = require('markovchain');
var fs = require('fs')
var quotes='';

var quotes = new MarkovChain(fs.readFileSync('satan-del.txt', 'utf8'));
var wordList = fs.readFileSync('satan-del.txt', 'utf8');
//console.log(wordList);

var useUpperCase = function(wordList) {
  var tmpList = Object.keys(wordList).filter(function(word) {
    return word[0] >= 'A' && word[0] <= 'Z'
  })
  return tmpList[~~(Math.random()*tmpList.length)]
}
var stopAtTweetLength = function(sentence) {
    return sentence.length >= 280;
}


document.getElementById('tweetButton').addEventListener('click',showTweet);
function showTweet(){
  var result = quotes.start(useUpperCase).end(stopAtTweetLength).process();
  document.getElementById('tweet').innerHTML = result;
}
//console.log(result);


