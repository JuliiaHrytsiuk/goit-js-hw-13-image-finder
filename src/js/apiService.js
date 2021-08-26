export default class PicturesApiServices {
  constructor() {}

  fetchPictures(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=23095971-ceaeacbf51a21ad754e50720c`;

    fetch(url)
      .then(r => r.json())
      .then(console.log);
  }
}
