if(localStorage['compra'] != undefined){
    $('#compra').css('display','block');
    var deletenum = 'compra';
    console.log(deletenum)
    localStorage.removeItem(deletenum);
}

console.log('hola')
function loadJSONFile(url, callback) {
    let xhttp
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    } else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (typeof callback === 'function') {
                callback(xhttp.responseText)
            }
        }
    }
    xhttp.open('GET', url, false)
    xhttp.send()
}
function nuevaclave(clave, valor) {
    if (localStorage[clave] != null) {
        localStorage.setItem(clave, valor);
    }
    else {
        localStorage.setItem(clave, valor)
    }
}
if (localStorage['pelis'] != undefined) {
    var valor = localStorage['pelis'];
    var valores = JSON.parse(valor);
    cargapelis(valores);
}
else {
    loadJSONFile('pelis.json', (responseText) => {
        registros = JSON.parse(responseText)
        console.log(registros);
        nuevaclave('pelis', JSON.stringify(registros));
    })
    var valor = localStorage['pelis'];
    var valores = JSON.parse(valor);
    cargapelis(valores);
}
function cargapelis(valores) {
    for (let i = 0; i <= valores.Peliculas.Portada.length; i++) {
        console.log(valores.Peliculas.Portada[i]);
        $('div.caratula:nth-child(' + i + ') > div.cara').attr('style', 'background-image: url("' + valores.Peliculas.Portada[i - 1] + '");  background-repeat: no-repeat');
        $('div.caratula:nth-child(' + i + ') > div.titulo').text(valores.Peliculas.Titulo[i - 1]);
        $('div.caratula:nth-child(' + i + ') > button').text('Más información');
        $('div.caratula:nth-child(' + i + ') > button').attr('value', valores.Peliculas.Titulo[i - 1]);
        $('div.caratula:nth-child(' + i + ') > button').click(function () {
            $('#tituloinfo').text(this.value);
            for (let i = 0; i < valores.Peliculas.Titulo.length; i++) {
                if (valores.Peliculas.Titulo[i] == this.value) {
                    $('#sipnosis').text(valores.Peliculas.Sipnopsis[i]);
                    $('#imageninfo').attr('src', valores.Peliculas.Portada[i]);
                    $('#direct').text(valores.Peliculas.Director[i]);
                    $('#anio').text(valores.Peliculas.Fecha[i]);
                    var horas = valores.Peliculas.Horarios[i];
                    $('#hora1').text(horas[0]);
                    $('#hora2').text(horas[1]);
                    $('#hora3').text(horas[2]);
                }

            }
            dialog.dialog('open')
        });
    }
}


