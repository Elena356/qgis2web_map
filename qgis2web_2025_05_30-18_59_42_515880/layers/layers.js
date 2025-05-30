var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lab1_1 = new ol.format.GeoJSON();
var features_Lab1_1 = format_Lab1_1.readFeatures(json_Lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab1_1.addFeatures(features_Lab1_1);
var lyr_Lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab1_1, 
                style: style_Lab1_1,
                popuplayertitle: 'Lab 1',
                interactive: false,
                title: '<img src="styles/legend/Lab1_1.png" /> Lab 1'
            });
var format_building_house_2 = new ol.format.GeoJSON();
var features_building_house_2 = format_building_house_2.readFeatures(json_building_house_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_2.addFeatures(features_building_house_2);
var lyr_building_house_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_2, 
                style: style_building_house_2,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_2.png" /> building_house'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Lab1_1.setVisible(true);lyr_building_house_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lab1_1,lyr_building_house_2,lyr_highway_3,lyr_highway_4];
lyr_Lab1_1.set('fieldAliases', {'fid': 'fid', });
lyr_building_house_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'roof:colour': 'roof:colour', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'shelter': 'shelter', 'bench': 'bench', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'horse': 'horse', 'hgv': 'hgv', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'sidewalk:both': 'sidewalk:both', 'lit': 'lit', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', 'covered': 'covered', 'maxspeed': 'maxspeed', 'access': 'access', 'name:uk': 'name:uk', 'int_name': 'int_name', 'name:ru': 'name:ru', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'name': 'name', 'surface': 'surface', 'description': 'description', });
lyr_Lab1_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_building_house_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'height': 'TextEdit', 'roof:colour': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'noexit': '', 'public_transport': '', 'name': '', 'bus': '', 'shelter': '', 'bench': '', 'motorcycle': '', 'motorcar': '', 'horse': '', 'hgv': '', 'foot': '', 'bicycle': '', 'barrier': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'sidewalk:both': 'TextEdit', 'lit': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'lanes': 'TextEdit', 'covered': 'TextEdit', 'maxspeed': 'TextEdit', 'access': 'TextEdit', 'name:uk': 'TextEdit', 'int_name': 'TextEdit', 'name:ru': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'description': 'TextEdit', });
lyr_Lab1_1.set('fieldLabels', {'fid': 'no label', });
lyr_building_house_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'roof:colour': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'noexit': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'shelter': 'no label', 'bench': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'horse': 'no label', 'hgv': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'sidewalk:both': 'no label', 'lit': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', 'covered': 'no label', 'maxspeed': 'no label', 'access': 'no label', 'name:uk': 'no label', 'int_name': 'no label', 'name:ru': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'name': 'no label', 'surface': 'no label', 'description': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});