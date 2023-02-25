(async () => {
    const data = () => {
        var theUrl = `https://climatologia.meteochile.gob.cl/application/productos/boletinClimatologicoDiario`;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        console.log(JSON.stringify(xmlHttp.responseText));
        return xmlHttp.responseText;
    }
    data();
})();