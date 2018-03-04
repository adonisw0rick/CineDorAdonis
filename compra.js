var datos =[];

if (localStorage['listaasientos'] != undefined){
    var lista = localStorage["datos"]
}

var sep = lista.split(",");

console.log(sep);

    let fila;
    let num;
for (let i = 0; i < sep.length; i++) {
        var valor = localStorage['butacas'];
        var valores = JSON.parse(valor);
        Object.keys(valores).forEach(key => {
            if (valores[key].tooltip == parseInt(sep[i])) {
                console.log(valores[key].tooltip);
                fila = (valores[key].y - 20) / 100;
                num = ((valores[key].x) / 100);
                console.log('fila'+fila);
                console.log('asiento'+num);
                lineafactura(num,fila);
            }
        });
    }

    function lineafactura(num, fila){
        var factud = document.createElement('div');
        factud.innerHTML = localStorage['dia'];
        var factuh = document.createElement('div');
        factuh.innerHTML = localStorage['hora'];
        var fact = document.createElement('div');
        fact.innerHTML = num;
        var fact2 = document.createElement('div');
        fact2.innerHTML = fila;
        var fact4 = document.createElement('div');
        fact4.innerHTML = "7.50€";
        var fact5 = document.createElement('div');
        fact5.setAttribute('class','lineafactura');

        fact5.append(factud);
        fact5.append(factuh);
        fact5.append(fact);
        fact5.append(fact2);
        fact5.append(fact4);
        $('#factura').append(fact5);
    }
resultado();
    function resultado(){
        var fact = document.createElement('div');
        fact.innerHTML = "";
        var fact2 = document.createElement('div');
        fact2.innerHTML = "";
        var fact3 = document.createElement('div');
        fact3.innerHTML = "TOTAL";
        var fact4 = document.createElement('div');
        fact4.innerHTML = (sep.length * 7.50)+"€";
        var f = new Date();
        cad = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds(); 
        nuevaclave("hora", cad);
        nuevaclave("total", (sep.length * 7.50));
        var fact5 = document.createElement('div');
        fact5.setAttribute('class', 'lineafactura');

        fact5.append(fact);
        fact5.append(fact2);
        fact5.append(fact3);
        fact5.append(fact4);
        $('#factura').append(fact5);
    }

function nuevaclave(clave, valor) {
    if (localStorage[clave] != null) {
        localStorage.setItem(clave, valor);
    }
    else {
        localStorage.setItem(clave, valor)
    }
}

setTimeout(nuevo, 3000)
function nuevo(){
    $("#lds-spinner").css('display', 'none');
    $("#container").css('display','flex');
}
var deletenum = 'datos';
console.log(deletenum)
localStorage.removeItem(deletenum);
$("#confirma").click(function () {
    var deletenum = 'datos';
    console.log(deletenum)
    localStorage.removeItem(deletenum);
    
        window.location.href = "bbva.html";
});