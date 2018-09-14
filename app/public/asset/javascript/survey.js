$(document).ready(function() {
  $("#submit").on("click", function() {
    var newMatch = {};
    $.ajax({
      url: "/api/friends",
      method: "POST",
      data: newMatch
    }).then(function(res) {
      console.log(res);
    });
  });
});
