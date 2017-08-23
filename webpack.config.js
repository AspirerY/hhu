module.exports = {
	entry:"./js/MainFrame.js",
	output:{
		filename:"exports/MainFrame.js"
	},
	devServer:{
		inline:true,
		host:'127.0.0.1',
		port:8888
	},
	resolve:{
		extensions:[".js",".jsx"]	
	},
	module:{
		loaders:[{test:/\.js$/,loader:"jsx-loader"},{test:/\.css$/,loader:"style-loader!css-loader"}]	
	}
}