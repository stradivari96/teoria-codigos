function validar_tarjeta(tarjeta) {

	if (/[^0-9-\s]+/.test(tarjeta)) return false;

    tarjeta = tarjeta.replace(/\D/g, "");
    let digito_control = tarjeta.slice(-1);
    let primeros = tarjeta.slice(0,-1);
    let suma = 0;
    let doblar = true;
	for (let i = primeros.length - 1; i >= 0; i--) {
        let digito = parseInt(primeros[i]);
		if (doblar) {
			if ((digito *= 2) > 9) digito -= 9;
		}

		suma += digito;
		doblar = !doblar;
	}
    suma *= 9;
	return digito_control == suma%10;
}

$(document).ready(function() {
    $('#input_tarjeta').on('keydown', function(e){
        if (e.which == 13) {
            let tarjeta = $('#input_tarjeta').val();
            let isValid = validar_tarjeta(tarjeta);
            if (isValid){
                $('#input_tarjeta').removeClass("is-invalid");
                $('#input_tarjeta').addClass("is-valid");
            }
            else{
                $('#input_tarjeta').removeClass("is-valid");
                $('#input_tarjeta').addClass("is-invalid");
            }
        }
    });

    $('#boton_verificar_tarjeta').on('click',function(){
        let tarjeta = $('#input_tarjeta').val();
        let isValid = validar_tarjeta(tarjeta);
        if (isValid){
            $('#input_tarjeta').removeClass("is-invalid");
            $('#input_tarjeta').addClass("is-valid");
        }
        else{
            $('#input_tarjeta').removeClass("is-valid");
            $('#input_tarjeta').addClass("is-invalid");
        }
    });
    $('#input_tarjeta').keyup(function() {
      var foo = $(this).val().split("-").join(""); // remove hyphens
      if (foo.length > 0) {
        foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
      }
      $(this).val(foo);
    });
});
