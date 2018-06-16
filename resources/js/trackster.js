var Trackster = {};
var tracksterAPI = '91e37275c5fba0735bff75d55021cca7';
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  for (var i = 0; i < tracks.length; i++) {
    var trackResult = '<div class="row">'
        + '<div class="col-xs-2 track icon">'
        + '<a href="'+ tracks[i].url +'">'
        + '<i class="fa fa-play-circle-o fa-lg"></i></a></div>'
        + '<div class="col-xs-4 track">'+ tracks[i].name +'</div>'
        + '<div class="col-xs-2 track">'+ tracks[i].artist +'</div>'
        + '<div class="col-xs-2 track">Album</div>'
        + '<div class="col-xs-2 track">'+ tracks[i].listeners +'</div>'
        + '</div>';
    $('#results').append(trackResult);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=91e37275c5fba0735bff75d55021cca7&format=json',
    datatype:'jsonp',
    success: function(data) {
      Trackster.renderTracks(data.results.trackmatches.track);
      },
  });
};
$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});
