export default class PicturesApiServices {
  constructor() {
    this.searchQuery = '';
  }

  fetchPictures(searchQuery) {
    console.log(this);
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=12&key=23095971-ceaeacbf51a21ad754e50720c`;

    fetch(url)
      .then(r => r.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
