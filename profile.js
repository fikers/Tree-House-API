var https = require('https');

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

function get(username){
  var request = https.get('https://teamtreehouse.com/' + username + ".json", function(response){
      var body = '';
      response.on('data', function(chunk){
        body += chunk;
      })
      response.on('end', function(){
        var profile = JSON.parse(body);

        printMessage(username, profile.badges.length, profile.points.total);
      })
  })
};

module.exports.get = get;
