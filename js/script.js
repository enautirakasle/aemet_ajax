var apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbmF1dC5pcmFrYXNsZUBnbWFpbC5jb20iLCJqdGkiOiIwYTc5OGM0OS1mNzFlLTRjYmMtYTYxMS02NzUyZGVjZGZlYjgiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU1MzE2MzI3NywidXNlcklkIjoiMGE3OThjNDktZjcxZS00Y2JjLWE2MTEtNjc1MmRlY2RmZWI4Iiwicm9sZSI6IiJ9.7WUpUI3Qj7pXfTf7NNm0AYjVvoAWVaJ_815eLdQDf6s";
// A $( document ).ready() block.
$(document).ready(function () {
    //console.log("ready!");

    /*
    peticion de la mapa de temperatura del mar
    e insercion del mapa en el card
    */
    $.getJSON("https://opendata.aemet.es/opendata/api/satelites/producto/sst?api_key=" + apiKey, function (respuesta) {
        console.log(respuesta);

        $('#temperatura-mar > img').attr('src', respuesta.datos);
        $('#temperatura-mar a').attr('href', respuesta.metadatos);

        $.getJSON(respuesta.metadatos, function(metadatos){
            $('#temperatura-mar .card-text').html(metadatos.descripción);
        });
    });

    /*
    peticion de la mapa de riesgo de inciendios de la peninsula
    e insercion del mapa en el card
    */
    $.getJSON("https://opendata.aemet.es/opendata/api/incendios/mapasriesgo/estimado/area/p/?api_key=" + apiKey, function (respuesta) {
        console.log(respuesta);

        $('#riesgo-incendios > img').attr('src', respuesta.datos);
        $('#riesgo-incendios a').attr('href', respuesta.metadatos);

        $.getJSON(respuesta.metadatos, function(metadatos){
            $('#riesgo-incendios .card-text').html(metadatos.descripción);
        });
    });


});