document.addEventListener(`DOMContentLoaded`, function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const footerhtml = generarFooterPages();

    contenedorFooter.innerHTML = footerhtml;
})