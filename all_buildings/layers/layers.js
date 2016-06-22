var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_JCbuildings = new ol.format.GeoJSON();
var features_JCbuildings = format_JCbuildings.readFeatures(geojson_JCbuildings, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JCbuildings = new ol.source.Vector();
jsonSource_JCbuildings.addFeatures(features_JCbuildings);var lyr_JCbuildings = new ol.layer.Vector({
                source:jsonSource_JCbuildings, 
                style: style_JCbuildings,
                title: "JC-buildings"
            });

lyr_JCbuildings.setVisible(true);
var layersList = [baseLayer,lyr_JCbuildings];
