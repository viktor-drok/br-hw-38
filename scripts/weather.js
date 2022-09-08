window.myWidgetParam
    ? window.myWidgetParam
    : (window.myWidgetParam = []);
window.myWidgetParam.push({
    id: 15,
    cityid: "703448",
    appid: "bde1cd1cd8c5bbbe23d9f6803ff613fb",
    units: "metric",
    containerid: "openweathermap-widget-15",
});
(function () {
    var script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
        "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
})();