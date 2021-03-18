"use strict";

const numberOfFilms = prompt("How many movies have you ever watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let latestMovie = prompt("What is the last movie you watched?", ""),
    rateMovie = prompt("How do you rate the movie", ""),
    latestMovieTwo = prompt("What is the last movie you watched?", ""),
    rateMovieTwo = prompt("How do you rate the movie", "");

personalMovieDB.movies[latestMovie] = rateMovie;
personalMovieDB.movies[latestMovieTwo] = rateMovieTwo;



console.log(personalMovieDB.movies);