const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovieList = () => {
    const movieList = document.getElementById('movie-list');
    if(movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    movies.forEach((movie) => {
        const movieListItem = document.createElement('li');
        let text = movie.info.title + ' - ';
        for(const key in movie.info) {
            if(key !== 'title') {
                text = text + `${key} - ${movie.info[key]}`;
            }
        }
        movieListItem.textContent = text;
        movieList.append(movieListItem);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        id: Math.random()
    }

    movies.push(newMovie);
    renderMovieList();
};

addMovieBtn.addEventListener('click', addMovieHandler);