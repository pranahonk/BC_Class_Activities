/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", (data) => {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");
      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].chirp + "</p>");
      row.append("<p>At " + moment(data[i].date_created).format("h:mma on dddd") + "</p>");
      $("#chirp-area").prepend(row);
    }
  }
});

// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();
  // Make a newChirp object
  var newChirp = {
    author: $("#author").val().trim(),
    chirp: $("#chirp-box").val().trim(),
    date_created: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  console.log(newChirp);
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(() =>{
      var row = $("<div>");
      row.addClass("chirp");
      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.chirp + "</p>");
      row.append("<p>At " + moment(newChirp.date_created).format("h:mma on dddd") + "</p>");
      $("#chirp-area").prepend(row);
    });
  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});