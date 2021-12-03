/* Задание на урок:
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememverMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log("Error");
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genres = prompt("Введите любимые жанры через запятую", "");

      if (genres == "" || genres == null) {
        i--;
      } else {
        personalMovieDB.genres = genres.split(",");
      }

      // if (genre == "" || genre == null) {
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш любимый жанр ${i + 1} это ${item}`);
    });
  }
};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);