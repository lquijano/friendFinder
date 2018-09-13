var friends = require("../db/friends");
//should this be /db/connection??
//this variable is reauiroing that for the routes these files be leverages//used?

module.exports = function(app){
  app.get("/api/friends" function(request, response) {
    response.json(friends);
    });
  app.post("/api/friends" function(request, response) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
  var userData = request.body;
  var userScores = userData.scores;
  var totalDifference;

  // here we loop through all the friend possibilities in the database

  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;
    console.log(currentFriend.name);

  for (var j = 0; j < currentFriend.scores.length; i++) {
    var currentFriendScore = currentFriend.scores[j];
    var currentUserScore = userScores[j];

// we calculate the difference between the scores and sum them into the total difference
    totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
// to be continued in our next session

      }
    };
  });
};
