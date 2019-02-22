var numOfHiddenTw = 0
$(".TweetTextSize.js-tweet-text.tweet-text").each(function(index){
  var numOfChars = this.innerText.length
  var matched = this.innerText.match(/\n/g)
  var numOfLine = 1
  if (matched != null) {
    numOfLine = 1 + matched.length
  }

  var numOfCharsPerLine = numOfChars / numOfLine
  if (numOfLine > 1 && numOfCharsPerLine < 15) {
    $($(".tweet")[index]).hide()
    numOfHiddenTw++
  }
})
