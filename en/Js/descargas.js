
const selectOpcion = document.getElementById("selectorLicencia")



const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

let licencia = 0;

selectorLicencia.addEventListener('change', function(){
    
    if (selectorLicencia.value === 'sencilla') {
        descripcionLicencia.textContent = 'Acceso a funciones básicas y funciones limitadas';
        licencia=250;
        precioLicencia.textContent = `$${licencia}`
    } else if (selectorLicencia.value == 'premium'){
        descripcionLicencia.textContent = 'Acceso completo a todas las funciones, seguridad avanzada y soporte técnico ampliado';
        licencia=500;
        precioLicencia.textContent = ` $${ licencia}`;

    } else {
        licencia=0;
        descripcionLicencia.textContent = 'Seleccione una Licencia';
        precioLicencia.textContent = `$`
    }
})

comprarBtn.addEventListener('click', function(){

    if (licencia===0) {
        swal.fire('¡Licencia no se puede comprar comprada exitosamente!', '', 'error')
        return
    }
    else{

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
    }


})