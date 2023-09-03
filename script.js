let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {

        personalMovieDB.movies[a] = b

    } else {
        i--;
    }

}





if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильиов')

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы класический зритель')

} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман')
} else {
    alert('Произошла ошибка')
}




console.log(personalMovieDB)