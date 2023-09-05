



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    methods: {
        start: function () {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        remeberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                    b = prompt('На сколько оцените его', '');

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                    personalMovieDB.movies[a] = b

                } else {
                    i--;
                }

            }
        },
        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                alert('Просмотренно довольно мало фильиов')

            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert('Вы класический зритель')

            } else if (personalMovieDB.count >= 30) {
                alert('Вы киноман')
            } else {
                alert('Произошла ошибка')
            }
        },
        showMyDB: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB)
            }
        },
        writeYourGenres: function () {

            for (let i = 1; i <= 3; i++) {

                let genre = prompt(`Ваш любимый жанр под номеров ${i}`, '')

                if (genre == '' || genre === null) {
                    i--
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }


            }

        },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat === false) {
                personalMovieDB.privat = true;
            } else {
                personalMovieDB.privat = false;
            }
        },
        showGenres: function () {
            personalMovieDB.genres.forEach((item, index) => {
                console.log(`Любимый жанр #${index + 1} - это ${item}`)
            });

        }
    }

};
personalMovieDB.methods.start();

personalMovieDB.methods.remeberMyFilms();

personalMovieDB.methods.detectPersonalLevel();


// personalMovieDB.methods.toggleVisibleMyDB();
personalMovieDB.methods.showMyDB(personalMovieDB.privat)

personalMovieDB.methods.writeYourGenres()

personalMovieDB.methods.showGenres()









