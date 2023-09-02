const selectOpcion = document.getElementById("selectorLicencia")



const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

let licencia = 0;

selectorLicencia.addEventListener('change', function(){
    
    if (selectorLicencia.value === 'simple') {
        descripcionLicencia.textContent = 'Access to basic functions and limited functions';
        licencia=250;
        precioLicencia.textContent = `$${licencia}`
    } else if (selectorLicencia.value == 'premium'){
        descripcionLicencia.textContent = 'Full access to all features, advanced security and extended technical support';
        licencia=500;
        precioLicencia.textContent = ` $${ licencia}`;

    } else {
        licencia=0;
        descripcionLicencia.textContent = 'Select a License';
        precioLicencia.textContent = `$`
    }
})

comprarBtn.addEventListener('click', function(){

    if (licencia===0) {
        swal.fire('License cannot be purchased successfully purchased!', '', 'mistake')
        return
    }
    else{

        Swal.fire({
            icon: 'question',
            title: 'Confirm purchase',
            text: 'Are you sure to buy the license?',
            showCancelButton: true,
            confirmButtonText: 'Yes, buy, comprar',
            cancelButtonText: 'Cancelr',
    
        }).then((result) => {
            
            if(result.isConfirmed){
                swal.fire('License purchased successfully!', '', 'success')
            }
        })
    }


})