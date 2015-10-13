/*jslint browser: true*/
/*global $, jQuery, alert*/

$('#coverart').click(function () {
  'use strict';
  $('#site').remove();
  $('#initial').attr('id', 'myplaylist');
  $.ajax({
   type: "GET",
   url: "lab4.json",
   dataType: "json",
    success: function (responseData) {
      var trackname = '<li>Track Name</li>';
      var artist = '<li>Artist</li>';
      var albumname = '<li>Album Name</li>';
      var releasedate = '<li>Release Date</li>';
      var genre = '<li>Genre</li>';
      var website = '<li>Website</li>';
      var cover = '<li>Album Cover</li>';
      /* for(var i=0; i < responseData.myplaylist.length; i++) {} */
      /* responseData.myplaylist.forEach(function(item) {}); */
      $.each(responseData.myplaylist, function (i, item) {
        if (item.title == "Iris") {
          trackname += '<li><font color="green">' + item.title + '</font></li>';
        } else {
          trackname += '<li>' + item.title + '</li>';
        }
        artist += '<li>' + item.artist + '</li>';
        albumname += '<li>' + item.album + '</li>';
        releasedate += '<li>' + item.date + '</li>';
        genre += '<li>' + item.genres + '</li>';
        website += '<li>' + '<a href="http://www.' + item.site + '">' + item.site + '</li>';
        cover += '<li>' + '<img src="' + item.coverart + '" width="100" height="100">' + '</li>';
      });
      document.getElementById('tracknamelist').innerHTML = trackname;
      document.getElementById('artistlist').innerHTML = artist;
      document.getElementById('albumnamelist').innerHTML = albumname;
      document.getElementById('releasedatelist').innerHTML = releasedate;
      document.getElementById('genrelist').innerHTML = genre;
      document.getElementById('websitelist').innerHTML = website;
      document.getElementById('coverlist').innerHTML = cover;
    }, error: function (msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});
