const addMovieModal = document.getElementById('add-modal');
const addMovieButton = document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const openAddMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackDrop();
}

const closeAddMovieModal = () => {
    addMovieModal.classList.remove('visible');
    toggleBackDrop();
};

const closeDeletionModal = () => {
    deleteMovieModal.classList.remove('visible');
    toggleBackDrop();
};

const clearMovieInputs = () => {
    for(const userInput of userInputs) {
        userInput.value = '';
    }
};

const backdropClickHandler = () => {
    closeAddMovieModal();
    closeDeletionModal();
    clearMovieInputs();
    toggleBackDrop();
};

const cancelAddMovieHandler = () => {
    closeAddMovieModal();
    clearMovieInputs();
};

const confirmDeleteMovieHandler = (id) => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === id) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const rootList = document.getElementById('movie-list');
    rootList?.children[movieIndex].remove();
    closeDeletionModal();
    updateUI();
    // rootList.removeChild(rootList.children[movieIndex]);
};

const deleteMovieHandler = (id) => {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeDeletionModal);
    cancelDeletionButton.addEventListener('click', closeDeletionModal);
    confirmDeletionButton.addEventListener('click', confirmDeleteMovieHandler.bind(null, id));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const movieListItem = document.createElement('li');
    movieListItem.className = 'movie-element';
    movieListItem.innerHTML = `
        <div class='movie-element__image'>
            <img src=${imageUrl} alt=${title}> 
        </div>
        <div class='movie-element__info'>
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    movieListItem.addEventListener('click', deleteMovieHandler.bind(null, id));
    const rootList = document.getElementById('movie-list');
    rootList.append(movieListItem);
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' ||
        imgUrlValue.trim() === '' || 
        ratingValue.trim() === '' ||
        +ratingValue < 1 || 
        +ratingValue > 5
    ) {
        alert('Please enter valid input.');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        imageUrl: imgUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeAddMovieModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
    updateUI();
};

addMovieButton.addEventListener('click', openAddMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);