'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = +prompt('How many movies have you ever watched?', '');

        while ( this.count == '' || 
                this.count == null ||
                isNaN(this.count) ||
                this.count < 0) {
                    this.count = +prompt('How many movies have you ever watched?', '');
                }
    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let latestMovie = prompt('What is the last movie you watched?', ''),
                rateMovie = prompt('How do you rate the movie', '');
           
            if (latestMovie != null && 
                rateMovie != null && 
                latestMovie != '' && 
                rateMovie != '' && 
                latestMovie.length < 50) {
                    this.movies[latestMovie] = rateMovie;
            } else {
                    i--;
            }
        
        }
    },

    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('You have watched few movies');
        } else if (this.count >= 10 && this.count < 30) {
            alert('You are a classic viewer');
        } else  if (this.count >= 30) {
            alert('You are a cinephile');
        } else {
            alert('An error occurred');    
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let favoriteGenre = prompt(`Your favorite genre at number ${i}`);
            while (favoriteGenre == null || favoriteGenre == '') {
                favoriteGenre = prompt(`Your favorite genre at number ${i}`);
            }
            this.genres[i - 1] = favoriteGenre;
        }
        
        this.genres.forEach((item, i) => {
            console.log(`Your favorite genre #${i+1} - are ${item}`);
        });
    },

    showMyDB: function() {
        if (!this.privat) {
            console.log(personalMovieDB); 
        }
    },

    toggleVisibleMyDB: function() {
        if (this.privat) { this.privat = false; }
        else { this.privat = true; }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

personalMovieDB.toggleVisibleMyDB();
