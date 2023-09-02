function generarMenuPages()
{
 const menuPages = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <div class="container-fluid">
     <!-- Logo o nombre del sitio -->
     <a class="navbar-brand" href="index.html"><img src="../img/Logo.png" alt="IconoWeb" width="90px"></a>
     <!-- Botón para el menú responsive en pantallas pequeñas -->
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <!-- Contenido del menú-->
     <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
             <li class="nav-item">
                 <a class="nav-link active" href="#">Technomarket</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../index.html">Inicio</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/categorias.html">Categorías</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/funcionalidades.html">Funcionalidades</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/descargas.html">Descargas</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/about.html">Sobre nosotros</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/contactanos.html">Contáctanos</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../en/index.html">Inglés</a>
             </li>
         </ul>
     </div>
 </div>
</nav>`;
return menuPages;
}