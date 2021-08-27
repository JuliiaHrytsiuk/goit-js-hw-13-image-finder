export default function onOpenModalImage(event) {
  const largeImageURL = event.target.getAttribute('data-large-image-url');

  const instance = basicLightbox.create(
    `
    <img width="1400" height="900" src=${largeImageURL}>
  `,
  );
  instance.show();
}
