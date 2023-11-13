import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

function createListGallery(array) {
    return array.map(({ preview, description, original}) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img  class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
        `
    ).join("");
}

listGallery.insertAdjacentHTML("beforeend", createListGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

















// listGallery.addEventListener("click", handleClick)

// function handleClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   if (target.classList.contains('gallery__image')) {
//     const largeImageUrl = target.dataset.source;
//       var lightbox = new SimpleLightbox('.galleryItems', { 
//         div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>
//      });
   

//     document.addEventListener("keydown", handleKeyPress);
//   }
// }