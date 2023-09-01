function generarFooterIndex()
{
 const footerIndex = `<footer class="bg-dark text-white text-center py-3 mt-5">
 <div class="container text-center">
     <div class="row row-cols-2">
         <div class="col">
             <h5>Contacto</h5>
             <br>
             <p>Calle Francisco Prats Ramírez
                 20, esquina Olegatorio
                 Tenares, Los Restauradoes,
                 Santo Domingo
             </p>
             <p>
                 Tel: +503 6143 1352
             </p>
             <p>
                 technomarket@gmail.com
             </p>
             <div id="flexfooter">
                 <ul>
                     <img src="img/whatsapp.webp" width="70">
                     <img src="img/facebook.webp" width="40">
                     <img src="img/instagram2.webp" width="40">
                 </ul>
             </div>
         </div>

         <div class="container">
           <form id="formularioContacto2">
             <div class="mb-3">
               <label for="nombre" class="form-label">Nombre</label>
               <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" required>
             </div>
             <div class="mb-3">
               <label for="correo" class="form-label">Correo</label>
               <input type="email" class="form-control" id="correo" placeholder="nombre@ejemplo.com" required>
             </div>
             <div class="mb-3">
               <label for="mensaje" class="form-label">Comentario</label>
               <textarea class="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje" required></textarea>
             </div>
             <button type="submit" class="btn btn-primary" id="enviarBtn">Enviar</button>
           </form>
         </div>
     </div>
 </div>
 <center>
     <p>Copyright &copy; 2023 | Designed With by Technomarket</p>
 </center>
</footer>`;

return footerIndex;
}