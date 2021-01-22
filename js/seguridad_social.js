function validar_seguridad_social(tarjeta) {

	if (/[^0-9\s]+/.test(tarjeta)) return false;

    tarjeta = tarjeta.replace(/\D/g, "");
    let digitos_control = tarjeta.slice(-2);
    let primeros = tarjeta.slice(0,-2);
    return primeros%97 == parseInt(digitos_control);
}

$(document).ready(function() {
    $('#input_seguridad_social').on('keydown', function(e){
        if (e.which == 13) {
            let seguridad_social = $('#input_seguridad_social').val();
            let isValid = validar_seguridad_social(seguridad_social);
            if (isValid){
                $('#input_seguridad_social').removeClass("is-invalid");
                $('#input_seguridad_social').addClass("is-valid");
            }
            else{
                $('#input_seguridad_social').removeClass("is-valid");
                $('#input_seguridad_social').addClass("is-invalid");
            }
        }
    });

    $('#boton_verificar_seguridad_social').on('click',function(){
        let seguridad_social = $('#input_seguridad_social').val();
        let isValid = validar_seguridad_social(seguridad_social);
        if (isValid){
            $('#input_seguridad_social').removeClass("is-invalid");
            $('#input_seguridad_social').addClass("is-valid");
        }
        else{
            $('#input_seguridad_social').removeClass("is-valid");
            $('#input_seguridad_social').addClass("is-invalid");
        }
    });
});
