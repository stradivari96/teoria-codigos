function replaceNaN(serialNumber){
    let result = serialNumber;
    for(let i = 0; i<result.length; i++){
        if(isNaN(result[i])){
            result = result.replace(result[i],result[i].charCodeAt(0));
        }
    }
    return result;
}
function validateEuro(serialNumber){
    let aux_serial = replaceNaN(serialNumber);
    return aux_serial%9==0;
}

$(document).ready(function() {
    $('#input_euro').on('keydown', function(e){
        if (e.which == 13) {
            let serial = $('#input_euro').val();
            let isValid = validateEuro(serial);
            if (isValid){
                $('#input_euro').removeClass("is-invalid");
                $('#input_euro').addClass("is-valid");
            }
            else{
                $('#input_euro').removeClass("is-valid");
                $('#input_euro').addClass("is-invalid");
            }
        }
    });

    $('#boton_verificar_euro').on('click',function(){
        let serial = $('#input_euro').val();
        let isValid = validateEuro(serial);
        if (isValid){
            $('#input_euro').removeClass("is-invalid");
            $('#input_euro').addClass("is-valid");
        }
        else{
            $('#input_euro').removeClass("is-valid");
            $('#input_euro').addClass("is-invalid");
        }
    });
});
