
const modalImage = document.querySelector('#modal-image');

/*Cuando ocurre el evento, obtiene la ruta de la imagen desde el elemento relacionado, crea un elemento de imagen y lo agrega al cuerpo del modal. 
Esto permite mostrar la imagen correspondiente cuando se abre el modal.*/
modalImage.addEventListener('show.bs.modal', function(event) {
    const enlace = event.relatedTarget; //Dentro de la función de devolución de llamada, se utiliza event.relatedTarget para obtener el elemento relacionado al modal que desencadenó el evento. Esto generalmente se refiere al elemento que se hizo clic para abrir el modal.
    const rutaImagen = enlace.getAttribute('data-bs-image');

    // Construis la imagen....se crea la ruta de la imagen
    const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen';

    const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
});

/*En resumen, este código escucha el evento "hidden.bs.modal" en el elemento modalImage, y cuando el modal se cierra, 
borra todo el contenido de texto dentro del contenedor del cuerpo del modal. Esto asegura que el contenido anterior del modal se elimine cuando se cierre, 
preparándolo para mostrar contenido nuevo la próxima vez que se abra.*/
modalImage.addEventListener('hidden.bs.modal', function() {
    const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
})