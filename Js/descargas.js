
const selectOpcion = document.getElementById("selectorLicencia")


const PrecioLicenciaSencilla = 150;
const PrecioLicenciaPremium = 500;


const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');


selectorLicencia.addEventListener('change', function(){
    
    if (selectorLicencia.value === 'sencilla') {
        descripcionLicencia.textContent = 'Licencia sencilla: Acceso a funciones básicas y funciones limitadas';
        precioLicencia.textContent = `$${PrecioLicenciaSencilla}`
    } else if (selectorLicencia.value == 'premium'){
        descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las funciones, seguridad avanzada y soporte técnico ampliado';
        precioLicencia.textContent = ` $${PrecioLicenciaPremium}`;
    } else {
        descripcionLicencia.textContent = 'Seleccione una Licencia';
        precioLicencia.textContent = `$`
    }
})

comprarBtn.addEventListener('click', function(){
    
    Swal.fire({
        icon: 'question',
        title: 'Confirmar compra',
        text: '¿Estas seguro de comprar la licencia?',
        showCancelButton: true,
        confirmButtonText: 'Si, comprar',
        cancelButtonText: 'Cancelar',

    }).then((result) => {
        
        if(result.isConfirmed){
            swal.fire('¡Licencia comprada exitosamente!', '', 'success')
        }
    })
})