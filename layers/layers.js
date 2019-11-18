var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Voronoi_0 = new ol.format.GeoJSON();
var features_Voronoi_0 = format_Voronoi_0.readFeatures(json_Voronoi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Voronoi_0.addFeatures(features_Voronoi_0);var lyr_Voronoi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Voronoi_0, 
                style: style_Voronoi_0,
    title: 'Voronoi<br />\
    <img src="styles/legend/Voronoi_0_0.png" />  1.4781 - 7.6157 <br />\
    <img src="styles/legend/Voronoi_0_1.png" />  7.6157 - 13.7533 <br />\
    <img src="styles/legend/Voronoi_0_2.png" />  13.7533 - 19.8909 <br />\
    <img src="styles/legend/Voronoi_0_3.png" />  19.8909 - 26.0285 <br />\
    <img src="styles/legend/Voronoi_0_4.png" />  26.0285 - 32.1661 <br />'
        });

lyr_Voronoi_0.setVisible(true);
var layersList = [baseLayer,lyr_Voronoi_0];
lyr_Voronoi_0.set('fieldAliases', {'Mt2': 'Mt2', });
lyr_Voronoi_0.set('fieldImages', {'Mt2': 'TextEdit', });
lyr_Voronoi_0.set('fieldLabels', {'Mt2': 'no label', });
lyr_Voronoi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});