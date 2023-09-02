document.addEventListener(`DOMContentLoaded`, function(){
    const contenedorMenu= document.getElementById("menuContenedor");
    const menutml = generarMenuPages();

    contenedorMenu.innerHTML = menutml;
})