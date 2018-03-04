if(localStorage["listaasientos"] != undefined){
    var asientosseleccionados = localStorage['listaasientos'];
    asientosseleccionados = asientosseleccionados.split(",");
    console.log(asientosseleccionados);
}
else{
    var asientosseleccionados = [];
}


function CreateSVG() {
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
    var xmlns = "http://www.w3.org/2000/svg";
    var boxWidth = 1800;
    var boxHeight = 1300;

    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgElem.setAttributeNS(null, "width", (boxWidth+1200));
    svgElem.setAttributeNS(null, "height", (boxHeight+1200));
    svgElem.setAttributeNS(null, "id", "salasvg");
    svgElem.style.display = "block";

    var g = document.createElementNS(xmlns, "symbol");
    g.setAttributeNS(null, 'viewBox', '0 0 1300 1300');
    svgElem.appendChild(g);
    g.setAttributeNS(null, 'id', 'layer1');

    var g2 = document.createElementNS(xmlns, "symbol");
    g2.setAttributeNS(null, 'viewBox', '0 0 400 400');
    svgElem.appendChild(g2);
    g2.setAttributeNS(null, 'id', 'layer2');

    var g3 = document.createElementNS(xmlns, "symbol");
    g3.setAttributeNS(null, 'viewBox', '0 0 400 400');
    svgElem.appendChild(g3);
    g3.setAttributeNS(null, 'id', 'layer3');

    var g4 = document.createElementNS(xmlns, "symbol");
    g4.setAttributeNS(null, 'viewBox', '0 0 90 90');
    svgElem.appendChild(g4);
    g4.setAttributeNS(null, 'id', 'layer4');


    function generafila(numero){
        var g5 = document.createElementNS(xmlns, "symbol");
        g5.setAttributeNS(null, 'viewBox', '0 0 2500 2200');
        svgElem.appendChild(g5);
        g5.setAttributeNS(null, 'id', 'layere'+numero);
        var recta = document.createElementNS(xmlns, "rect");
        recta.setAttributeNS(null, 'id', 'rect1496');
        recta.setAttributeNS(null, 'width', '207.48714');
        recta.setAttributeNS(null, 'height', '75.065765');
        recta.setAttributeNS(null, 'x', '0.71149665');
        recta.setAttributeNS(null, 'y', '220.24539');
        recta.setAttributeNS(null, 'ry','14.938535');
        recta.setAttributeNS(null, 'style', 'opacity:1;fill:#808080;fill-opacity:1;stroke:#808080;stroke-width:1.40196145;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
        g5.appendChild(recta);

        var text = document.createElementNS(xmlns, "text");
        text.setAttributeNS(null, 'id', 'text1502');
        text.setAttributeNS(null, 'x', '6.0313158');
        text.setAttributeNS(null, 'y', '349.09546');
        text.setAttributeNS(null, 'style', 'font-style:normal;font-weight:normal;font-size:58.83250809px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.47081256');
        text.setAttributeNS(null, 'transform', 'scale(1.2652435,0.7903617)');
        g5.appendChild(text);

        var tspan = document.createElementNS(xmlns, "tspan");
        tspan.setAttributeNS(null, 'id', 'tspan1500');
        tspan.setAttributeNS(null, 'x', '6.0313158');
        tspan.setAttributeNS(null, 'y', '349.09546');
        tspan.setAttributeNS(null, 'style', 'stroke-width:1.47081256;');
        tspan.innerHTML = "Fila"+numero;
        console.log(tspan.innerHTML);
        console.log(numero);
        text.appendChild(tspan);

        var use5 = document.createElementNS(xmlns, 'use');
        use5.setAttributeNS(null, 'href', '#layere'+numero);
        use5.setAttributeNS(null, 'x', -100);
        use5.setAttributeNS(null, 'y', 100 * numero);
        svgElem.appendChild(use5);

        var use6 = document.createElementNS(xmlns, 'use');
        use6.setAttributeNS(null, 'href', '#layere' + numero);
        use6.setAttributeNS(null, 'x', 1500);
        use6.setAttributeNS(null, 'y', 100 * numero);
        svgElem.appendChild(use6);

    }
    generafila(1);
    generafila(2);
    generafila(3);
    generafila(4);
    generafila(5);
    generafila(6);
    var recta = document.createElementNS(xmlns, "rect");
    recta.setAttributeNS(null, 'id', 'rect817');
    recta.setAttributeNS(null, 'width', '34.49033');
    recta.setAttributeNS(null, 'height', '9.1659222');
    recta.setAttributeNS(null, 'x', '0.89769375');
    recta.setAttributeNS(null, 'y', '0.90290129');
    recta.setAttributeNS(null, 'style', 'opacity:1;fill:#d3d3d3;fill-opacity:1;stroke:#000000;stroke-width:1.20000005;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
    var text12 = document.createElementNS(xmlns, "text");
    text12.setAttributeNS(null, 'id', 'text823');
    text12.setAttributeNS(null, 'x', '5.6696429');
    text12.setAttributeNS(null, 'y', '7.7537198');
    text12.setAttributeNS(null, 'style', 'font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332');
    
    

    var tspan11 = document.createElementNS(xmlns, "tspan");
    tspan11.setAttributeNS(null, 'id', 'tspan821');
    tspan11.setAttributeNS(null, 'x', '5.6696429');
    tspan11.setAttributeNS(null, 'y', '7.7537198');
    tspan11.setAttributeNS(null, 'style', 'font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.3499999px;font-family:sans-serif;-inkscape-font-specification:"sans - serif, Normal";font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458332');
    tspan11.innerHTML = "Pantalla";
    text12.appendChild(tspan11);

    
    g4.appendChild(recta);
    g4.appendChild(text12);
    

    var ellipse = document.createElementNS(xmlns, "ellipse");
    ellipse.setAttributeNS(null, 'id', 'path825');
    ellipse.setAttributeNS(null, 'cx', '22.06436');
    ellipse.setAttributeNS(null, 'cy', '21.526226');
    ellipse.setAttributeNS(null, 'rx', '18.888256');
    ellipse.setAttributeNS(null, 'ry', '18.439409');
    ellipse.setAttributeNS(null, 'style', 'opacity:1;fill:#de0000;fill-opacity:1;stroke:#000000;stroke-width:2.63851738;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
    ellipse.setAttributeNS(null, 'ry', '15.11');
    g2.appendChild(ellipse);

    var text = document.createElementNS(xmlns, "text");
    text.setAttributeNS(null, 'id', 'text829');
    text.setAttributeNS(null, 'x', '30.570293');
    text.setAttributeNS(null, 'y', '13.253671');
    text.setAttributeNS(null, 'style', 'opacity:1;fill:#de0000;fill-opacity:1;stroke:#ffffff;stroke-width:2.63851738;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
    text.setAttributeNS(null, 'transform', 'scale(0.70840658,1.4116187)');
    g2.appendChild(text);

    var tspan = document.createElementNS(xmlns,"tspan");
    tspan.setAttributeNS(null, 'id', 'tspan827');
    tspan.setAttributeNS(null, 'x', '30.570293');
    tspan.setAttributeNS(null, 'y', '13.253671');
    tspan.setAttributeNS(null, 'style', 'font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.00405169px;font-family:sans-serif;-inkscape-font-specification:"sans - serif, Normal";font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle;stroke-width:0.40299246;fill:#ffffff;fill-opacity:1;');
    tspan.innerHTML = "Puertas de";
    text.appendChild(tspan);

    var tspan2 = document.createElementNS(xmlns, "tspan");
    tspan2.setAttributeNS(null, 'id', 'tspan827');
    tspan2.setAttributeNS(null, 'x', '30.570293');
    tspan2.setAttributeNS(null, 'y', '22.008736');
    tspan2.setAttributeNS(null, 'style', 'font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.00405169px;font-family:sans-serif;-inkscape-font-specification:"sans - serif, Normal";font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle;stroke-width:0.40299246;fill:#ffffff;fill-opacity:1;');
    tspan2.innerHTML = "emergencia";
    text.appendChild(tspan2);
    g2.appendChild(text)

    var ellipses = document.createElementNS(xmlns, "ellipse");
    ellipses.setAttributeNS(null, 'id', 'path825s');
    ellipses.setAttributeNS(null, 'cx', '22.06436');
    ellipses.setAttributeNS(null, 'cy', '21.526226');
    ellipses.setAttributeNS(null, 'rx', '18.888256');
    ellipses.setAttributeNS(null, 'ry', '18.439409');
    ellipses.setAttributeNS(null, 'style', 'opacity:1;fill:#d3d3d3;fill-opacity:1;stroke:#000000;stroke-width:2.63851738;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
    ellipses.setAttributeNS(null, 'ry', '15.11');
    g3.appendChild(ellipses);

    var texts = document.createElementNS(xmlns, "text");
    texts.setAttributeNS(null, 'id', 'text829s');
    texts.setAttributeNS(null, 'x', '30.570293');
    texts.setAttributeNS(null, 'y', '13.253671');
    texts.setAttributeNS(null, 'style', 'opacity:1;fill:#de0000;fill-opacity:1;stroke:#000000;stroke-width:2.63851738;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1');
    texts.setAttributeNS(null, 'transform', 'scale(0.70840658,1.4116187)');
    g3.appendChild(texts);

    var tspans = document.createElementNS(xmlns, "tspan");
    tspans.setAttributeNS(null, 'id', 'tspan827s');
    tspans.setAttributeNS(null, 'x', '30.570293');
    tspans.setAttributeNS(null, 'y', '13.253671');
    tspans.setAttributeNS(null, 'style', 'font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.00405169px;font-family:sans-serif;-inkscape-font-specification:"sans - serif, Normal";font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle;stroke-width:0.40299246;fill:#000000;fill-opacity:1;');
    tspans.innerHTML = "Puertas de";
    texts.appendChild(tspans);

    var tspan2s = document.createElementNS(xmlns, "tspan");
    tspan2s.setAttributeNS(null, 'id', 'tspan827s');
    tspan2s.setAttributeNS(null, 'x', '30.570293');
    tspan2s.setAttributeNS(null, 'y', '22.008736');
    tspan2s.setAttributeNS(null, 'style', 'font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.00405169px;font-family:sans-serif;-inkscape-font-specification:"sans - serif, Normal";font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle;stroke-width:0.40299246;fill:#000000;fill-opacity:1;');
    tspan2s.innerHTML = "salida";
    texts.appendChild(tspan2s);
    g3.appendChild(texts)

    var rect = document.createElementNS(xmlns, "rect");
    rect.setAttributeNS(null, 'id', 'hi');
    rect.setAttributeNS(null, 'width', '61.557');
    rect.setAttributeNS(null, 'height', '30.238');
    rect.setAttributeNS(null, 'x', '69.53');
    rect.setAttributeNS(null, 'y', '107.328');
    rect.setAttributeNS(null, 'style', 'stroke-width:0.28335');
    rect.setAttributeNS(null, 'ry', '15.11');
    g.appendChild(rect);

    var rect2 = document.createElementNS(xmlns, "rect");
    rect2.setAttributeNS(null, 'id', 'hi2');
    rect2.setAttributeNS(null, 'width', '23.4684');
    rect2.setAttributeNS(null, 'height', '39.3095');
    rect2.setAttributeNS(null, 'x', '65.78');
    rect2.setAttributeNS(null, 'y', '161.1');
    rect2.setAttributeNS(null, 'style', 'fill:#000000;fill-opacity:1;stroke:#b60000;stroke-width:0.63178253;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal');
    rect2.setAttributeNS(null, 'transform', "matrix(0.90191854,-0.43190618,0,1,0,0)");
    rect2.setAttributeNS(null, 'ry', '11.734');
    g.appendChild(rect2);

    var rect3 = document.createElementNS(xmlns, "rect");
    rect3.setAttributeNS(null, 'id', 'hi3');
    rect3.setAttributeNS(null, 'width', '22.4747');
    rect3.setAttributeNS(null, 'height', '39.3095');
    rect3.setAttributeNS(null, 'x', '123.84');
    rect3.setAttributeNS(null, 'y', '81.46');
    rect3.setAttributeNS(null, 'style', 'fill:#000000;fill-opacity:1;stroke:#b60000;stroke-width:0.61826187;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal');
    rect3.setAttributeNS(null, 'transform', "matrix(0.94179768,0.33618021,0,1,0,0)");
    rect3.setAttributeNS(null, 'ry', '11.734246');
    g.appendChild(rect3);

    var rect4 = document.createElementNS(xmlns, "rect");
    rect4.setAttributeNS(null, 'id', 'hi4');
    rect4.setAttributeNS(null, 'width', '59.999');
    rect4.setAttributeNS(null, 'height', '20.277');
    rect4.setAttributeNS(null, 'x', '69.29');
    rect4.setAttributeNS(null, 'y', '134.116');
    rect4.setAttributeNS(null, 'style', 'stroke-width:0.26458');
    rect4.setAttributeNS(null, 'ry', '10.11');
    rect4.setAttributeNS(null, 'rx', '5.2117');
    g.appendChild(rect4);

    var use2 = document.createElementNS(xmlns, 'use');
    use2.setAttributeNS(null, 'href', '#layer2');
    use2.setAttributeNS(null, 'x', 000);
    use2.setAttributeNS(null, 'y', 000);
    svgElem.appendChild(use2);
    var use2 = document.createElementNS(xmlns, 'use');
    use2.setAttributeNS(null, 'href', '#layer2');
    use2.setAttributeNS(null, 'x', 1200);
    use2.setAttributeNS(null, 'y', 000);
    svgElem.appendChild(use2);

    var use3 = document.createElementNS(xmlns, 'use');
    use3.setAttributeNS(null, 'href', '#layer3');
    use3.setAttributeNS(null, 'x', 000);
    use3.setAttributeNS(null, 'y', 600);
    svgElem.appendChild(use3);
    var use3 = document.createElementNS(xmlns, 'use');
    use3.setAttributeNS(null, 'href', '#layer3');
    use3.setAttributeNS(null, 'x', 1250);
    use3.setAttributeNS(null, 'y', 600);
    svgElem.appendChild(use3);

    var use4 = document.createElementNS(xmlns, 'use');
    use4.setAttributeNS(null, 'href', '#layer4');
    use4.setAttributeNS(null, 'x', 400);
    use4.setAttributeNS(null, 'y', 0);
    svgElem.appendChild(use4);


    // var ley1 = document.createElementNS(xmlns, 'use');
    // ley1.setAttributeNS(null, 'href', '#layer1');
    // ley1.setAttributeNS(null, 'class', "Libre");

    // var ley2 = document.createElementNS(xmlns, 'use');
    // ley2.setAttributeNS(null, 'href', '#layer1');
    // ley2.setAttributeNS(null, 'class', "Seleccionado");

    // var ley3 = document.createElementNS(xmlns, 'use');
    // ley3.setAttributeNS(null, 'href', '#layer1');
    // ley3.setAttributeNS(null, 'class', "Ocupado");

    // $('#asientolibre').append(ley1);
    // $('#asientoseleccionado').append(ley2);
    // $('#asientoocupado').append(ley3);

    function creasillon(x, y, estado, tooltip) {
        var use1 = document.createElementNS(xmlns, 'use');
        use1.setAttributeNS(null, 'href', '#layer1');
        use1.setAttributeNS(null, 'class', estado);
        use1.setAttributeNS(null, 'x', x);
        use1.setAttributeNS(null, 'y', y);
        use1.setAttributeNS(null, 'value', tooltip);
        if(use1.getAttribute('class') != 'Ocupado'){
            use1.addEventListener("click", selecciona);
        }
        var tool = document.createElement('title');
        tool.innerHTML = tooltip;
        use1.appendChild(tool);
        svgElem.appendChild(use1);
    }

    function selecciona(){
        
        if (this.getAttribute('class') == 'Seleccionado'){
            this.setAttributeNS(null, 'class', 'Libre');
            console.log(this.getAttribute('value'));
            if (localStorage['butacas'] != undefined) {
                var valor = localStorage['butacas'];
                var valores = JSON.parse(valor);
                Object.keys(valores).forEach(key => {
                    if (valores[key].tooltip == this.getAttribute('value')){
                        valores[key].estado = "Libre"
                    }
                });
                var pos = asientosseleccionados.indexOf(this.getAttribute('value'));
                var elementoEliminado = asientosseleccionados.splice(pos, 1);
                nuevaclave('listaasientos', asientosseleccionados);
                var asientosn = localStorage['nasientos'];
                asientosn++
                $('#numeroasientos').text(asientosn);
                nuevaclave('nasientos', asientosn);
                nuevaclave('butacas', JSON.stringify(valores));
                
            }
        }
        else if (localStorage['nasientos'] >= 1){
            this.setAttributeNS(null, 'class', 'Seleccionado');
            console.log(this.getAttribute('value'));
            if (localStorage['butacas'] != undefined) {
                var valor = localStorage['butacas'];
                var valores = JSON.parse(valor);
                Object.keys(valores).forEach(key => {
                    if (valores[key].tooltip == this.getAttribute('value')) {
                        valores[key].estado = "Seleccionado"
                    }
                });
                var asientosn = localStorage['nasientos'];
                asientosn--
                $('#numeroasientos').text(asientosn);
                nuevaclave('nasientos', asientosn);
                var val = this.getAttribute('value');
                asientosseleccionados[asientosseleccionados.length] = val;
                nuevaclave('listaasientos', asientosseleccionados);
                nuevaclave('butacas', JSON.stringify(valores));

            }
        }
        
    }
    var svgContainer = document.getElementById("svgContainer");
    svgContainer.appendChild(svgElem);
    

    if (localStorage['nasientos'] != undefined) {
        var nasientos = localStorage['nasientos'];
        $('#numeroasientos').text(nasientos);
    }

    if (localStorage['butacas'] != undefined) {
        var butacas = localStorage['butacas'];
        var butaquitas = JSON.parse(butacas);
        Object.keys(butaquitas).forEach(key => {
            creasillon(butaquitas[key].x, butaquitas[key].y, butaquitas[key].estado, butaquitas[key].tooltip);
        });
    }
    else {
        loadJSONFile('butacas.json', (responseText) => {
            butacas = JSON.parse(responseText)
            console.log(butacas);
            nuevaclave('butacas', JSON.stringify(butacas));

            //var clave = localStorage.key(0);
            var butacas = localStorage['butacas'];
            var butaquitas = JSON.parse(butacas);
            Object.keys(butaquitas).forEach(key => {
                creasillon(butaquitas[key].x, butaquitas[key].y, butaquitas[key].estado, butaquitas[key].tooltip);
            });
            console.log(butaquitas)
        })
    }
    function nuevaclave(clave, valor) {
        if (localStorage[clave] != null) {
            localStorage.setItem(clave, valor);
        }
        else {
            localStorage.setItem(clave, valor)
        }
    }
}



$("#fijador").click(function () {
    console.log('fija?');
    for (let i = 0; i < asientosseleccionados.length; i++) {
        var valor = localStorage['butacas'];
        var valores = JSON.parse(valor);
        Object.keys(valores).forEach(key => {
            console.log(asientosseleccionados[i]);
            console.log(valores[key].tooltip);
            if ((valores[key].tooltip == parseInt(asientosseleccionados[i])) && (valores[key].estado == "Seleccionado")) {
                valores[key].estado = "Ocupado";
                console.log('fichado'); 
                if (localStorage["datos"] != undefined) {
                    var data = localStorage['datos'];
                    data = data.split(",");
                    data.push(asientosseleccionados[i]);
                    console.log('aniade' + parseInt(asientosseleccionados[i]));
                    localStorage.setItem("datos", data);
                }
                else {
                    var data = [];
                    data.push(asientosseleccionados[i]);
                    console.log('aniade' + parseInt(asientosseleccionados[i]));
                    localStorage.setItem("datos", data);
                }
            }
        });
        nuevaclave('butacas', JSON.stringify(valores));
    }
    $("#lds-spinner").css('display', 'block');
    setTimeout(nuevo, 3000)
    function nuevo(){
        window.location.href = "compra.html";
    }
    
});


function nuevaclave(clave, valor) {
    if (localStorage[clave] != null) {
        localStorage.setItem(clave, valor);
    }
    else {
        localStorage.setItem(clave, valor)
    }
}
