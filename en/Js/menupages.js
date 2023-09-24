function generarMenuPages()
{
 const menuPages = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <div class="container-fluid">
     <!-- Logo o nombre del sitio -->
     <a class="navbar-brand" href="../index.html"><img src="../img/Logo.png" alt="IconoWeb" width="90px"></a>
     <!-- Botón para el menú responsive en pantallas pequeñas -->
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <!-- Contenido del menú-->
     <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
             <li class="nav-item">
                 <a class="nav-link active" href="../index.html">Technomarket</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../index.html">Home</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/categories.html">Categories</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/functionalities.html">Functionalities</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/downland.html">Downland</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/aboutUs.html">About us</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../pages/contactUs.html">Contact us</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="../../index.html">Spanish</a>
             </li>
         </ul>
     </div>
 </div>
</nav>`;
return menuPages;
}