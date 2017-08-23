var TopMenu = require("./TopMenu");
var LeftMenu = require("./LeftMenu");
var MainMap = require("./MainMap");
var MainFrame = React.createClass({
	getInitialState:function() {
		return {
			
		};
	},
	componentWillMount:function() {
		
	},
	render:function() {
		var items = [];
		items.push(TopMenu);
		debugger;
		return (
				<div id="MainFrameDiv">
					<TopMenu />
					<LeftMenu />
					<MainMap />
				</div>
		);
	}
});
ReactDOM.render(<MainFrame />,document.getElementById("reactDiv"));