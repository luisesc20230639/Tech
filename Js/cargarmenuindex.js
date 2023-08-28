document.addEventListener(`DOMContentLoaded`, function(){
    const contenedorMenu= document.getElementById("menuContenedor");
    const menutml = generarMenuIndex();

    contenedorMenu.innerHTML = menutml;
})