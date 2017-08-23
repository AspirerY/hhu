require("./MainMap.css");
var MainMap = React.createClass({
	componentDidMount:function() {
		 var url = 'http://localhost:6080/arcgis/rest/services/jnxq_v11/MapServer';

		 var layers = [
			new ol.layer.Tile({
			  extent: [],
			  source: new ol.source.TileArcGISRest({
				url: url
			  })
			})
		 ];
		 var map = new ol.Map({
			layers: layers,
			target: 'mainmap',
			view: new ol.View({
			  center: [],
			  zoom: 4
			})
		 });
	},
	render:function() {
		return(
			<div className="mainmap" id="mainmap">
			</div>
		);
	}
});
module.exports = MainMap;