
let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {

            personalMovieDB.movies[a] = b

        } else {
            i--;
        }

    }
}
remeberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильиов')

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы класический зритель')

    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман')
    } else {
        alert('Произошла ошибка')
    }

}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номеров ${i}`, '');
    }

}
writeYourGenres()




