
const modalImage = document.querySelector('#modal-image');

modalImage.addEventListener('show.bs.modal', function(event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-image');

    console.log(rutaImagen);
});