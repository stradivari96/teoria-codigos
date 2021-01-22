
function ISBN13CalculateDigit(digitos){
    let auxString = digitos.toString();
    let s = 0;
    for(let i=0; i < 12; i++){
        if (i%2==0)
            s += auxString[i]*1
        else
            s += auxString[i]*3
    }
    let r = 10-s%10;
    if (r < 10) return r;
    else return 0;
}

function ISBNValidate(isbn){
    let isbn_aux = isbn.toString();
    isbn_aux = isbn_aux.replace(/\D/g,"");
    if (isbn_aux.length != 13) return false;
    let ultimo = isbn_aux.slice(-1);
    let docePrimeros = isbn_aux.slice(0,12);
    return ISBN13CalculateDigit(docePrimeros) == ultimo;
}

$(document).ready(function() {
    $('#input_isbn').on('keydown', function(e){
        if (e.which == 13) {
            let isbn = $('#input_isbn').val();
            let isValid = ISBNValidate(isbn);
            if (isValid){
                $('#input_isbn').removeClass("is-invalid");
                $('#input_isbn').addClass("is-valid");
            }
            else{
                $('#input_isbn').removeClass("is-valid");
                $('#input_isbn').addClass("is-invalid");
            }
        }
    });

    $('#boton_verificar_isbn').on('click',function(){
        let isbn = $('#input_isbn').val();
        let isValid = ISBNValidate(isbn);
        if (isValid){
            $('#input_isbn').removeClass("is-invalid");
            $('#input_isbn').addClass("is-valid");
        }
        else{
            $('#input_isbn').removeClass("is-valid");
            $('#input_isbn').addClass("is-invalid");
        }
    });
});
