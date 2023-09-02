document.addEventListener(`DOMContentLoaded`, function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const footerhtml = generarFooterIndex();

    contenedorFooter.innerHTML = footerhtml;
})