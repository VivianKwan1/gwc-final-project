document.getElementById("submitButton").addEventListener("click", function(Quiz){
  event.preventDefault()
});


function Quiz() {
  pop = 0;
  rock = 0;
  hiphop = 0;
  country = 0;
  indie = 0;

  DanceVar = parseInt(document.querySelector('input[name = "dance"]:checked').value);
  if (DanceVar == "1") {
    pop +=1;
  }
  else if (DanceVar == "2") {
    rock +=1;
  }
  else if (DanceVar == "3") {
    hiphop +=1;
  }
  else if (DanceVar == "4") {
    country +=1;
  }
  else if (DanceVar == "5") {
    indie +=1;
  }

  GenreVar = parseInt(document.querySelector('input[name = "genre"]:checked').value);
  if (GenreVar == "1") {
    pop +=1;
  }
  else if (GenreVar == "2") {
    rock +=1;
  }
  else if (GenreVar == "3") {
    hiphop +=1;
  }
  else if (GenreVar == "4") {
    country +=1;
  }
  else if (GenreVar == "5") {
    indie +=1;
  }

  NewGenreVar = parseInt(document.querySelector('input[name = "open"]:checked').value);
  if (NewGenreVar == "1") {
    pop +=1;
    hiphop +=1;
  }
  else if (NewGenreVar == "2") {
    rock +=1;
  }
  else if (NewGenreVar == "3") {
    country +=1;
    indie +=1;
  }

  CircusVar = parseInt(document.querySelector('input[name = "circus"]:checked').value);
  if (CircusVar == "1") {
    rock +=1;
    indie +=1;
  }
  else if (CircusVar == "2") {
    pop +=1;
    hiphop +=1;
    country +=1;
  }

  ArtistVar = parseInt(document.querySelector('input[name = "artist"]:checked').value);
  if (ArtistVar == "1") {
    pop +=1;
  }
  else if (ArtistVar == "2") {
    rock +=1;
  }
  else if (ArtistVar == "3") {
    hiphop +=1;
  }
  else if (ArtistVar == "4") {
    country +=1;
  }
  else if (ArtistVar == "5") {
    indie +=1;
  }

  VacayVar = parseInt(document.querySelector('input[name = "vacation"]:checked').value);
  if (VacayVar == "1") {
    pop +=1;
  }
  else if (VacayVar == "2") {
    rock +=1;
  }
  else if (VacayVar == "3") {
    hiphop +=1;
  }
  else if (VacayVar == "4") {
    country +=1;
  }
  else if (VacayVar == "5") {
    indie +=1;
  }

  ScreamingVar = parseInt(document.querySelector('input[name = "aaa"]:checked').value);
   if (ScreamingVar == "1") {
    indie +=1;
  }
  else if (ScreamingVar == "2") {
    country +=1;
  }
  else if (ScreamingVar == "3") {
    pop +=1;
    hiphop +=1;
  }
  else if (ScreamingVar == "4") {
    rock +=1;
  }


  // parseInt converts to Integers and spits outputs the Integer
  // document.querySelector looks at the first thing in the document that you want, so if there are paramenters it narrows it
  // In this case our parameters were the input of a certain name to each question from the HTML file and we only looked at the input of the
  // checked boxes and took the value


// Add the Variables where the values of each Quizanswer was stored
  list = [];
  list.push(pop);
  list.push(rock);
  list.push(hiphop);
  list.push(country);
  list.push(indie);
  maximum = Math.max(...list) // returns max in list
  var count = list.length;
  if(list[0] === maximum){
    maxGenre = "pop";
    listIndex = 0;
    link = "file:///C:Users/gwc/Desktop/Projects/Final/popplaylist.html";
    }
  else if(list[1] === maximum){
    maxGenre = "rock";
    listIndex = 1;
    link = "file:///C:Users/gwc/Desktop/Projects/Final/rockplaylist.html";
    }
  else if(list[2] === maximum){
    maxGenre = "hiphop";
    listIndex = 2;
    link = "file:///c:Users/gwc/Desktop/Projects/Final/hipHopplaylist.html";
    }
  else if(list[3] === maximum){
    maxGenre = "country";
    listIndex = 3;
    link = "file:///C:Users/gwc/Desktop/Projects/Final/countryplaylist.html";
    }
  else if(list[4] === maximum){
    maxGenre = "indie";
    listIndex = 4;
    link = "file:///C:Users/gwc/Desktop/Projects/Final/indieplaylist.html";
    }



  document.getElementById("maxGenre").innerHTML = maxGenre + ",  number of points in that genre: " + list[listIndex];
  window.location.href = link;
  // document.getElementById("Rock").innerHTML = rock;
  // document.getElementById("Hiphop").innerHTML = hiphop;
  // document.getElementById("Country").innerHTML = country;
  // document.getElementById("Indie").innerHTML = indie;

  return false;
// Returning it false to stop the submission from going again
}
