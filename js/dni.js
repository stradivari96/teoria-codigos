
function DNIcalculateChar(digitos) {
    let char = parseInt(digitos)%23;
    let listaCaracteres = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return char < 23 ? listaCaracteres[char]: undefined;
}

function DNItransformNIE(digitos) {
    let letra = digitos.charAt(0);
    let resto = digitos.slice(1);
    letra = letra.toUpperCase();
    switch (letra) {
        case "X": return "0"+resto;
        case "Y": return "1"+resto;
        case "Z": return "2"+resto;
        default: return undefined;
    }
}

$(document).ready(function() {

    $('#dni_calcular_letra').on('keydown', function(e){
        if (e.which == 13) {
            if($(this).val().length == 8){
                if (!isNaN($(this).val())) {
                    let numero = $(this).val().slice(0,8);
                    let letra = DNIcalculateChar(numero);
                    if ($(this).val().length == 8) {
                        if (letra) {
                            $(this).val(numero+"-"+letra);
                        }
                    }
                }
                else {
                    let NIE = $(this).val();
                    let numero = DNItransformNIE(NIE);
                    let letra = DNIcalculateChar(numero);
                    if ($(this).val().length == 8) {
                        if (letra) {
                            $(this).val(NIE+"-"+letra);
                        }
                    }
                }
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
            else if ($(this).val().length < 8) {
                $(this).removeClass("is-valid");
                $(this).addClass("is-invalid");
            }
        }
    });

    $('#boton_dni_calcular_letra').on('click', function(){
        if($('#dni_calcular_letra').val().length == 8){
            if (!isNaN($('#dni_calcular_letra').val())) {
                let numero = $('#dni_calcular_letra').val().slice(0,8);
                let letra = DNIcalculateChar(numero);
                if ($('#dni_calcular_letra').val().length == 8) {
                    if (letra) {
                        $('#dni_calcular_letra').val(numero+"-"+letra);
                    }
                }
            }
            else {
                let NIE = $('#dni_calcular_letra').val();
                let numero = DNItransformNIE(NIE);
                let letra = DNIcalculateChar(numero);
                if ($('#dni_calcular_letra').val().length == 8) {
                    if (letra) {
                        $('#dni_calcular_letra').val(NIE+"-"+letra);
                    }
                }
            }
            $('#dni_calcular_letra').removeClass("is-invalid");
            $('#dni_calcular_letra').addClass("is-valid");
        }
        else if ($('#dni_calcular_letra').val().length < 8) {
            $('#dni_calcular_letra').removeClass("is-valid");
            $('#dni_calcular_letra').addClass("is-invalid");
        }
    });

    $('#dni_verificar_letra').on('keydown', function(e){
        if (e.which == 13) {
            if (!isNaN($(this).val().slice(0,8))) {
                let numero = $(this).val().slice(0,8);
                let letra = $(this).val().slice(-1);
                let letraCalculada = DNIcalculateChar(numero);
                if (letra.toUpperCase() === letraCalculada) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                }
                else {
                    $(this).removeClass("is-valid");
                    $(this).addClass("is-invalid");
                }
            }
            else {
                let NIE = $(this).val().slice(0,8);
                let letra = $(this).val().slice(-1);
                let numero = DNItransformNIE(NIE);
                let letraCalculada = DNIcalculateChar(numero);
                if (letra.toUpperCase() === letraCalculada) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                }
                else {
                    $(this).removeClass("is-valid");
                    $(this).addClass("is-invalid");
                }
            }
        }
    });

    $('#boton_dni_verificar_letra').on('click', function(){
        if (!isNaN($('#dni_verificar_letra').val().slice(0,8))) {
            let numero = $('#dni_verificar_letra').val().slice(0,8);
            let letra = $('#dni_verificar_letra').val().slice(-1);
            let letraCalculada = DNIcalculateChar(numero);
            if (letra.toUpperCase() === letraCalculada) {
                $('#dni_verificar_letra').removeClass("is-invalid");
                $('#dni_verificar_letra').addClass("is-valid");
            }
            else {
                $('#dni_verificar_letra').removeClass("is-valid");
                $('#dni_verificar_letra').addClass("is-invalid");
            }
        }
        else {
            let NIE = $('#dni_verificar_letra').val().slice(0,8);
            let letra = $('#dni_verificar_letra').val().slice(-1);
            let numero = DNItransformNIE(NIE);
            let letraCalculada = DNIcalculateChar(numero);
            if (letra.toUpperCase() === letraCalculada) {
                $('#dni_verificar_letra').removeClass("is-invalid");
                $('#dni_verificar_letra').addClass("is-valid");
            }
            else {
                $('#dni_verificar_letra').removeClass("is-valid");
                $('#dni_verificar_letra').addClass("is-invalid");
            }
        }
    });

});
