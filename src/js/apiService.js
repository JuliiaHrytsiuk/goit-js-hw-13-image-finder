const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23095971-ceaeacbf51a21ad754e50720c';

export default class PicturesApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPictures(searchQuery) {
    console.log(this);

    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
