var dojoConfig = (function(){
    // var base = "https://esri-es.github.io/Static-Maps-API-ArcGIS"
    var base = "https://raw.githubusercontent.com/renemorenow/ArcGIS-JavaScriptAPI/gh-pages/src/tutoriales"
    return {
        async: true,
        isDebug: true,
        packages:[{
            // name: 'esriES', location: base + '/js', main: "staticmap"
            name: 'esriES', location: base + '/js', main: "staticmap"
        }]
    };
})();