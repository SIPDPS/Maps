var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Unidades_Geohidro_diss_utmwgs_ok_1 = new ol.format.GeoJSON();
var features_Unidades_Geohidro_diss_utmwgs_ok_1 = format_Unidades_Geohidro_diss_utmwgs_ok_1.readFeatures(json_Unidades_Geohidro_diss_utmwgs_ok_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidades_Geohidro_diss_utmwgs_ok_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidades_Geohidro_diss_utmwgs_ok_1.addFeatures(features_Unidades_Geohidro_diss_utmwgs_ok_1);
var lyr_Unidades_Geohidro_diss_utmwgs_ok_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Unidades_Geohidro_diss_utmwgs_ok_1, 
                style: style_Unidades_Geohidro_diss_utmwgs_ok_1,
                interactive: true,
    title: 'Unidades_Geohidro_diss_utmwgs_ok<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_0.png" /> Cuerpo de agua intermitente<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_1.png" /> Cuerpo de agua perenne<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_2.png" /> Material consolidado con posibilidades bajas<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_3.png" /> Material consolidado con posibilidades medias<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_4.png" /> Material consolidado con posibilidades altas<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_5.png" /> Material no consolidado con posibilidades bajas<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_6.png" /> Material no consolidado con posibilidades medias<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_7.png" /> Material no consolidado con posibilidades altas<br />\
    <img src="styles/legend/Unidades_Geohidro_diss_utmwgs_ok_1_8.png" /> <br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_Unidades_Geohidro_diss_utmwgs_ok_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Unidades_Geohidro_diss_utmwgs_ok_1];
lyr_Unidades_Geohidro_diss_utmwgs_ok_1.set('fieldAliases', {'CLAVE': 'CLAVE', 'FC': 'FC', 'DESCRIP': 'DESCRIP', 'Area_km2': 'Area_km2', 'Hectares': 'Hectares', });
lyr_Unidades_Geohidro_diss_utmwgs_ok_1.set('fieldImages', {'CLAVE': 'TextEdit', 'FC': 'TextEdit', 'DESCRIP': 'TextEdit', 'Area_km2': 'TextEdit', 'Hectares': 'TextEdit', });
lyr_Unidades_Geohidro_diss_utmwgs_ok_1.set('fieldLabels', {'CLAVE': 'inline label', 'FC': 'no label', 'DESCRIP': 'inline label', 'Area_km2': 'inline label', 'Hectares': 'no label', });
lyr_Unidades_Geohidro_diss_utmwgs_ok_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});