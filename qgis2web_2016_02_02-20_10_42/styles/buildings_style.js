var size = 0;

var styleCache_buildings={}
var style_buildings = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(173,118,246,1.0)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_buildings[key]){
        var text = new ol.style.Text({
              font: '10px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_buildings[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_buildings[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};