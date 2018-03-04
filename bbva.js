var deletenum = 'datos';
console.log(deletenum)
localStorage.removeItem(deletenum);
$("#confirma").click(function () {
    var deletenum = 'datos';
    console.log(deletenum)
    localStorage.removeItem(deletenum);
    window.location.href = "index.html";
});


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = dd + '/' + mm + '/' + yyyy;
$('#fecha').text(today);
$('#importe').text(localStorage["total"]);
$('#hora').text(localStorage["hora"]);


function nuevaclave(clave, valor) {
    if (localStorage[clave] != null) {
        localStorage.setItem(clave, valor);
    }
    else {
        localStorage.setItem(clave, valor)
    }
}

nuevaclave('compra','yes');