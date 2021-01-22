
function IBAN_replaceChars(char) {
    charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return charList.search(char) + 10;
}

function modulo97(iban) {
    var parts = Math.ceil(iban.length/7);
    var remainer = "";

    for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer+iban.substr((i-1)*7, 7))%97);
    }

    return remainer;
}

function IBAN_validate(iban){
    let stringIBAN = iban.toString().replace(/[-\s]/g, "");
    let primeros = stringIBAN.slice(0,4);
    let resto = stringIBAN.slice(4);
    let reordenado = resto+primeros;
    for(let i = 0; i<reordenado.length; i++){
        if(isNaN(reordenado[i])){
            reordenado = reordenado.replace(reordenado[i],
                IBAN_replaceChars(reordenado[i]));
        }
    }
    return modulo97(reordenado)==1;
}

$(document).ready(function() {
    $('#input_iban').on('keydown', function(e){
        if (e.which == 13) {
            let iban = $('#input_iban').val();
            let isValid = IBAN_validate(iban);
            if (isValid){
                $('#input_iban').removeClass("is-invalid");
                $('#input_iban').addClass("is-valid");
            }
            else{
                $('#input_iban').removeClass("is-valid");
                $('#input_iban').addClass("is-invalid");
            }
        }
    });

    $('#boton_verificar_iban').on('click',function(){
        let iban = $('#input_iban').val();
        let isValid = IBAN_validate(iban);
        if (isValid){
            $('#input_iban').removeClass("is-invalid");
            $('#input_iban').addClass("is-valid");
        }
        else{
            $('#input_iban').removeClass("is-valid");
            $('#input_iban').addClass("is-invalid");
        }
    });
});
