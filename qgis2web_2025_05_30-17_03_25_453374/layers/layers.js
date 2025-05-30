var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lab1_2 = new ol.format.GeoJSON();
var features_Lab1_2 = format_Lab1_2.readFeatures(json_Lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab1_2.addFeatures(features_Lab1_2);
var lyr_Lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab1_2, 
                style: style_Lab1_2,
                popuplayertitle: 'Lab 1',
                interactive: false,
                title: '<img src="styles/legend/Lab1_2.png" /> Lab 1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: false,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_Lab1_2,lyr_building_house_3];
lyr_Lab1_2.set('fieldAliases', {'fid': 'fid', });
lyr_building_house_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'building:material': 'building:material', 'building:colour': 'building:colour', 'roof:colour': 'roof:colour', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_Lab1_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'height': 'TextEdit', 'building:material': 'TextEdit', 'building:colour': 'TextEdit', 'roof:colour': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'Range', });
lyr_Lab1_2.set('fieldLabels', {'fid': 'no label', });
lyr_building_house_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'building:material': 'no label', 'building:colour': 'no label', 'roof:colour': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_house_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});