function generarFooterPages()
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
                     <img class="imagen2" src="../img/instagram.png" width="40">
                     <img class="imagen2" src="../img/facebook.png" width="40">
                     <img class="imagen2" src="../img/whatsapp.png" width="40">
                 </ul>
             </div>
         </div>

         <div class="col">
             <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1"
                     placeholder="name@example.com">
             </div>
             <div class="mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
             <div>
                 <div class="d-grid gap-2">
                     <button class="btn" type="button">Enviar</button>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <center>
     <p>Copyright &copy; 2023 | Designed With by Technomarket</p>
 </center>
</footer>`;

return footerIndex;
}