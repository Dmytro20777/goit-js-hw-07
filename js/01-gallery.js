import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const listGallery = document.querySelector('.gallery');



listGallery.addEventListener("click", handleClick)

let instance;


function createListGallery(array) {
  return array
    .map(({ preview, description, original }) => 
      `<li class="gallery__item">
         <a class="gallery__link" href="large-image.jpg">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </li>`
    )
    .join('');
}

listGallery.insertAdjacentHTML('beforeend', createListGallery(galleryItems));

function handleClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const largeImageUrl = target.dataset.source;
    
    instance = basicLightbox.create(
    `
      <div class="modal">
        <img src="${largeImageUrl}" alt="Large Image"/>
      </div>
    `);

    instance.show();

    document.addEventListener("keydown", handleKeyPress);
  }
}




function handleKeyPress(event) {
  if (event.code === "Escape" && instance) {
    instance.close();

    document.removeEventListener("keydown", handleKeyPress)
  }
}

 

