import './sass/main.scss';
import PicturesApiServices from './js/apiService';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="my-element-selector"]'),
};

const picturesApiService = new PicturesApiServices();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  picturesApiService.query = event.currentTarget.elements.query.value;

  picturesApiService.fetchPictures();
}

function onLoadMore() {
  picturesApiService.fetchPictures();
}
