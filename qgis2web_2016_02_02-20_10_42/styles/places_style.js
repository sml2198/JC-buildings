var size = 0;

var styleCache_places={}
var style_places = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: "rgba(229,6,181,1.0)"})})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_places[key]){
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
        styleCache_places[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_places[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};