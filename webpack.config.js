const path = require("path");

module.exports = {
	watch: true,
	entry: "./src/index.js",               //nom du fichier .js qu'on utilise
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"	   //nom du fichier webpack qui contiendra le tout , par convention (bundle.js)
	},
	devtool: "source-map"
}