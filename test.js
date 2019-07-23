function auth(){
  var websiteEndpoint = "https://accounts.spotify.com/authorize?client_id=9c98a579cd2d492295845f72715f7a03&response_type=code&redirect_uri=https://www.google.com/&scope=playlist-modify-public&state=123";
  var request = new XMLHttpRequest();
  var clientId = "9c98a579cd2d492295845f72715f7a03";
  request.open('GET', websiteEndpoint);
  request.withCredentials = true;
  // var params = ({"client_id":clientId, "response_type":"code", "redirect_uri":"https://www.getpostman.com/oauth2/callback", "scope":"playlist-modify-public", "state":"123"});
  request.send();
//   request.onreadystatechange = function() {
//   if (request.readyState === 4)  {
//     var serverResponse = request.responseText;
//   }
// };
}

function submit(){
  var websiteEndpoint = "https://api.spotify.com/v1/users/awi7mkpl5bl6m33ndyfusz4p0/playlists";
  // var user_id = "awi7mkpl5bl6m33ndyfusz4p0";
  var request = new XMLHttpRequest();
  // var playlist = JSON.parse(request);
  // var accessToken = "BQA-LPhwwJjEPM_nzWIWDgmwBys9dX1NbuN2N7rqOzBnAyKf1y6QTuP8Ry3GoX_EgmK9qL5vaJskcNMbdnx_0P536rJ38TRFEqdQZPOkNCMw-91wcWfvvkpjTx65QDZmbSemUviRJQcbVr2f-_7QIeR-IpJbC7EKojLOqyPk4NfrbnpeT_kmqh6ft8D4lH6DT13T";
  request.open('POST', websiteEndpoint);
  request.onload = function() {
    // do something to response
    console.log(request.responseText);
};
  request.setRequestHeader("Authorization", "Bearer BQC1xKN9x4eL-vWTb9X64rQpaei0GCo_TRZ4tFdMgqIaumV2dSWolgeHM9p7wUQ1jvwEQjIn6imeZ5QdC1bMJzFle3KT_uJ7ds8_zKi17w4asYHwrXBfVXnjOTRm_wffNs0mO-ZKcIYw0oLTmdkBKtli_wYUDeS80UfQ7LDsJi3_u-TU0bEa6TpFF4zx__6wU818");
  request.setRequestHeader("Content-Type", "Application/json");
  request.setRequestHeader("Accept", "Application/json");
  body = JSON.stringify({name: "BlackRockDemo", description: "Demo Playlist for BlackRock", public: "true"});
  request.send(body)

  websiteEndpoint = "https://api.spotify.com/v1/search?q=genre:pop&type=track&market=US&limit=50";
  // websiteEndpoint.searchParams.set("q","genre:pop");
  request.open('GET', websiteEndpoint);
  request.onload = function() {
    // do something to response
    console.log(request.responseText);
  };
  request.setRequestHeader("Authorization", "Bearer BQC1xKN9x4eL-vWTb9X64rQpaei0GCo_TRZ4tFdMgqIaumV2dSWolgeHM9p7wUQ1jvwEQjIn6imeZ5QdC1bMJzFle3KT_uJ7ds8_zKi17w4asYHwrXBfVXnjOTRm_wffNs0mO-ZKcIYw0oLTmdkBKtli_wYUDeS80UfQ7LDsJi3_u-TU0bEa6TpFF4zx__6wU818");
  params = "q=genre:pop&type=track&market=US";
  request.send()
  request.onreadystatechange = function() {
    if (request.readyState === 4)  {
      var response = request.responseText;
      console.log(response);
    }
  };
}
