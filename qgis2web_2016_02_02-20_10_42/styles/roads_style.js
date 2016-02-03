var size = 0;

var styleCache_roads={}
var style_roads = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(162,32,26,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_roads[key]){
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
        styleCache_roads[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_roads[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};