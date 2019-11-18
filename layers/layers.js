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
var format_Limites_0 = new ol.format.GeoJSON();
var features_Limites_0 = format_Limites_0.readFeatures(json_Limites_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limites_0.addFeatures(features_Limites_0);var lyr_Limites_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_0, 
                style: style_Limites_0,
                title: '<img src="styles/legend/Limites_0.png" /> Limites'
            });var format_Voronoi_1 = new ol.format.GeoJSON();
var features_Voronoi_1 = format_Voronoi_1.readFeatures(json_Voronoi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Voronoi_1.addFeatures(features_Voronoi_1);var lyr_Voronoi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Voronoi_1, 
                style: style_Voronoi_1,
    title: 'Voronoi<br />\
    <img src="styles/legend/Voronoi_1_0.png" />  1.4781 - 7.6157 <br />\
    <img src="styles/legend/Voronoi_1_1.png" />  7.6157 - 13.7533 <br />\
    <img src="styles/legend/Voronoi_1_2.png" />  13.7533 - 19.8909 <br />\
    <img src="styles/legend/Voronoi_1_3.png" />  19.8909 - 26.0285 <br />\
    <img src="styles/legend/Voronoi_1_4.png" />  26.0285 - 32.1661 <br />'
        });var format_PUNTEO_2 = new ol.format.GeoJSON();
var features_PUNTEO_2 = format_PUNTEO_2.readFeatures(json_PUNTEO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTEO_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PUNTEO_2.addFeatures(features_PUNTEO_2);var lyr_PUNTEO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUNTEO_2, 
                style: style_PUNTEO_2,
                title: '<img src="styles/legend/PUNTEO_2.png" /> PUNTEO'
            });

lyr_Limites_0.setVisible(true);lyr_Voronoi_1.setVisible(true);lyr_PUNTEO_2.setVisible(true);
var layersList = [baseLayer,lyr_Limites_0,lyr_Voronoi_1,lyr_PUNTEO_2];
lyr_Limites_0.set('fieldAliases', {'Id': 'Id', 'Has': 'Has', });
lyr_Voronoi_1.set('fieldAliases', {'Mt2': 'Mt2', });
lyr_PUNTEO_2.set('fieldAliases', {'Id': 'Id', });
lyr_Limites_0.set('fieldImages', {'Id': 'TextEdit', 'Has': 'TextEdit', });
lyr_Voronoi_1.set('fieldImages', {'Mt2': 'TextEdit', });
lyr_PUNTEO_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_Limites_0.set('fieldLabels', {'Id': 'no label', 'Has': 'no label', });
lyr_Voronoi_1.set('fieldLabels', {'Mt2': 'no label', });
lyr_PUNTEO_2.set('fieldLabels', {'Id': 'no label', });
lyr_PUNTEO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});