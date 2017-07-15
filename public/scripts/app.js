/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
  var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweetData) {

  return $('<article class="tweet">')
    .append($('<header>')
      .append($('<div class="user">')
        .append($('<img>').attr('src', tweetData.user.avatars.small).attr('alt', 'User avatar'))
        .append($('<span class="userName">').text(tweetData.user.name))
        .append($('<span class="userHandle">').text(tweetData.user.handle))
      )
    )
    .append($('<main>')
      .append($('<p>').text(tweetData.content.text))
    )
    .append($('<footer>')

      .append($('<span>').attr('data-livestamp', (tweetData.created_at / 1000)))
      .append($('<div class="tweeterButtons">')
        .append($('<abbr class="fa fa-flag" title="Flag">'))
        .append($('<abbr class="fa fa-retweet" title="Retweet">'))
        .append($('<abbr class="fa fa-heart" title="Like">'))
    )
  );
}

function renderTweets(tweets) {

  tweets.forEach(function(tweet) {
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });
}

$(document).ready(function() {

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      success: function( result ) {
        console.log(result);
        $('#tweets-container').empty();
        renderTweets(result);
      }
    });
  }
  $("#tweet-form").on("submit", function (evt) {
    evt.preventDefault();
    var tweetInput = $(this).find('[name="text"]');
    var tweetText = tweetInput.val();
    if (tweetText === "" || tweetText.length > 140) {
      $.flash("Your tweet has no text, or too much text!");
      return;
    }
    var newTweet = $(this).serialize();
    console.log(newTweet);
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: newTweet,
      success: function( result ) {
        console.log(result);
        tweetInput.val('');
        loadTweets();
      }
    })
  })

loadTweets();
  //var $tweetElements = renderTweets(tweetData);
});