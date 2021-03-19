'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you ever watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
        numberOfFilms = +prompt('How many movies have you ever watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let latestMovie = prompt('What is the last movie you watched?', ''),
            rateMovie = prompt('How do you rate the movie', '');
       
        if (latestMovie != null && 
            rateMovie != null && 
            latestMovie != "" && 
            rateMovie != "" && 
            latestMovie.length < 50) {
            personalMovieDB.movies[latestMovie] = rateMovie;
        } else {
            i--;
        }
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('You have watched few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic viewer');
    } else  if (personalMovieDB.count >= 30) {
        alert('You are a cinephile');
    } else {
        alert('An error occurred');    
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favoriteGenre = prompt(`Your favorite genre at number ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenre;
    }
}

writeYourGenres();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB); 
    }
}

showMyDB();