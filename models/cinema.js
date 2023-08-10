class Cinema {
	constructor(films) {
		this.films = films;
	}

	getTitles() {
		return this.films.map((film) => {
			return film.title;
		});
	}

	findByTitle(title) {
		return this.films.find((film) => {
			return film.title === title;
		});
	}

	filterByGenre(genre) {
		return this.films.filter((film) => {
			return film.genre === genre;
		});
	}

	checkYear(year) {
		return this.films.some((film) => {
			return film.year === year;
		});
	}

	checkLengthGreaterThan(length) {
		return this.films.every((film) => {
			return film.length >= length;
		});
	}

	calculateTotalRunningTime() {
		return this.films.reduce((total, film) => {
			return total += film.length;
		}, 0);
	}
}

module.exports = Cinema;