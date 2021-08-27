import './sass/main.scss';
import PicturesApiServices from './js/apiService';
import pictureCardTmpl from './templates/pictureCard.hbs';
import LoadMoreBtn from './js/components/loadMoreBtn';
import onOpenModalImage from './js/components/modal';
import scrollIntoView from './js/components/scroll';
import error from './js/components/notify';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
});
const picturesApiService = new PicturesApiServices();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchPictures);

refs.galleryContainer.addEventListener('click', onOpenModalImage);

function onSearch(event) {
  event.preventDefault();

  clearPicturesContainer();
  picturesApiService.query = event.currentTarget.elements.query.value;
  loadMoreBtn.show();
  picturesApiService.resetPage();
  clearPicturesContainer();
  fetchPictures();
}

function fetchPictures() {
  loadMoreBtn.disable();
  picturesApiService.fetchPictures().then(hits => {
    appendPicturesMarkup(hits);
    loadMoreBtn.enable();
  });
}

function appendPicturesMarkup(hits) {
  if (hits.length < 12) {
    loadMoreBtn.hide();
    error({
      text: 'We could not find more images for you.',
      type: 'error',
      autoOpen: 'false',
      delay: 3000,
    });
  }
  refs.galleryContainer.insertAdjacentHTML('beforeend', pictureCardTmpl(hits));
  const nextImagesList = refs.galleryContainer.lastElementChild;
  scrollIntoView(nextImagesList);
}

function clearPicturesContainer() {
  refs.galleryContainer.innerHTML = '';
}
