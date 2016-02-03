var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: []});
var format_buildings = new ol.format.GeoJSON();
var features_buildings = format_buildings.readFeatures(geojson_buildings, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings = new ol.source.Vector();
jsonSource_buildings.addFeatures(features_buildings);var lyr_buildings = new ol.layer.Vector({
                source:jsonSource_buildings, 
                style: style_buildings,
                title: "buildings"
            });var format_landuse = new ol.format.GeoJSON();
var features_landuse = format_landuse.readFeatures(geojson_landuse, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse = new ol.source.Vector();
jsonSource_landuse.addFeatures(features_landuse);var lyr_landuse = new ol.layer.Vector({
                source:jsonSource_landuse, 
                style: style_landuse,
                title: "landuse"
            });var format_natural = new ol.format.GeoJSON();
var features_natural = format_natural.readFeatures(geojson_natural, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural = new ol.source.Vector();
jsonSource_natural.addFeatures(features_natural);var lyr_natural = new ol.layer.Vector({
                source:jsonSource_natural, 
                style: style_natural,
                title: "natural"
            });var format_places = new ol.format.GeoJSON();
var features_places = format_places.readFeatures(geojson_places, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places = new ol.source.Vector();
jsonSource_places.addFeatures(features_places);var lyr_places = new ol.layer.Vector({
                source:jsonSource_places, 
                style: style_places,
                title: "places"
            });var format_points = new ol.format.GeoJSON();
var features_points = format_points.readFeatures(geojson_points, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points = new ol.source.Vector();
jsonSource_points.addFeatures(features_points);var lyr_points = new ol.layer.Vector({
                source:jsonSource_points, 
                style: style_points,
                title: "points"
            });var format_roads = new ol.format.GeoJSON();
var features_roads = format_roads.readFeatures(geojson_roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads = new ol.source.Vector();
jsonSource_roads.addFeatures(features_roads);var lyr_roads = new ol.layer.Vector({
                source:jsonSource_roads, 
                style: style_roads,
                title: "roads"
            });

lyr_buildings.setVisible(true);lyr_landuse.setVisible(true);lyr_natural.setVisible(true);lyr_places.setVisible(true);lyr_points.setVisible(true);lyr_roads.setVisible(true);
var layersList = [baseLayer,lyr_buildings,lyr_landuse,lyr_natural,lyr_places,lyr_points,lyr_roads];
