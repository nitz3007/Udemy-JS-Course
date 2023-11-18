const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovieList = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    if(movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = filter==='' ? movies : movies.filter(movie => movie.info.title.includes(filter)); 
    filteredMovies.forEach((movie) => {
        const movieListItem = document.createElement('li');
        const {info, ...otherProp} = movie;
        // const {title: movieTitle} = info;
        let {getFormattedMovieTitle} = movie;
        getFormattedMovieTitle = getFormattedMovieTitle.bind(movie);
        console.log(otherProp);
        let text = getFormattedMovieTitle() + ' - ';
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
            set title(val) {
                if(val.trim() === '') {
                    this.info._title = 'DEFAULT';
                }
                this.info._title = val;
            },
            get title() {
                console.log(this._title);
            },
            [extraName]: extraValue,
        },
        id: Math.random(),
        getFormattedMovieTitle: function() {
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);
    // console.log(newMovie.info.title);
    renderMovieList();
};



const searchMovieHandler = () => {
    const searchTerm = document.getElementById('filter-title').value;
    renderMovieList(searchTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);