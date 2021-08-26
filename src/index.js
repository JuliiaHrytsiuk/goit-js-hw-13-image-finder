import './sass/main.scss';
// import PixabayApiService from './js/apiService';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="my-element-selector"]'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// var searchQuery = '';

function onSearch(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value;

  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=23095971-ceaeacbf51a21ad754e50720c`;

  fetch(url)
    .then(r => r.json())
    .then(console.log);
}

function onLoadMore() {
  const url =
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=23095971-ceaeacbf51a21ad754e50720c';

  fetch(url)
    .then(r => r.json())
    .then(console.log);
}

// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
