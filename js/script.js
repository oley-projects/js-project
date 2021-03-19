"use strict";

const numberOfFilms = prompt("How many movies have you ever watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let latestMovie = prompt("What is the last movie you watched?", ""),
        rateMovie = prompt("How do you rate the movie", "");
   
    if (latestMovie != null && rateMovie != null && latestMovie != "" && rateMovie != "" && latestMovie.length < 50) {
        personalMovieDB.movies[latestMovie] = rateMovie;
    } else {
        i--;
    }

}

console.log(personalMovieDB.movies);

if (personalMovieDB.count < 10) {
    alert("You have watched few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classic viewer");
} else  if (personalMovieDB.count >= 30) {
    alert("You are a cinephile");
} else {
    alert("An error occurred");    
}
