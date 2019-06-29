const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js", //tells Webpack where our application starts and where to start bundling our files.
    mode: "development",//lets webpack know we’re working in development mode — This saves us from having to add a mode flag when we run the development server.
    module: { //The module object helps define how your exported javascript modules are transformed and which ones are included according to the given array of rules.
        rules: [
            {   //Our first rule is all about transforming our ES6 and JSX syntax
                test: /\.(js|jsx)$/, //The test and exclude properties are conditions to match file against.
                exclude: /(node_modules|bower_components)/, //it’ll match anything outside of the node_modules and bower_components directories
                loader: "babel-loader", //Since we’ll be transforming our .js and .jsx files as well, we’ll need to direct Webpack to use Babel
                options: { presets: ["@babel/env"] } //we specify that we want to use the env preset in options.
            },
            {// we’re not pre-or-post-processing our CSS, we just need to make sure to add style-loader and css-loader to the use property
                test: /\.css$/,
                use: ["style-loader", "css-loader"]//css-loader requires style-loader in order to work. loader is a shorthand for the use property
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },//The resolve property allows us to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions.
    output: {//The output property tells Webpack where to put our bundled code.
        path: path.resolve(__dirname, "dist/"),//
        publicPath: "/dist/",//The publicPath property specifies what directory the bundle should go in, and also tells webpack-dev-server where to serve files from.  If this is set incorrectly, you’ll get 404’s as the server won’t be serving your files from the correct location!
        filename: "bundle.js"
    },
    devServer: {//We set up webpack-dev-server in the devServer property. This doesn’t require much for our needs — just the location we’re serving static files from (such as our index.html) and the port we want to run the server on.
    contentBase: path.join(__dirname, "public/"),//the location we’re serving static files from (such as our index.html)
        port: 3000,//the port we want to run the server on.
        publicPath: "http://localhost:3000/dist/",// This publicPath tells the server where our bundled code actually is.
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] //Hot Module Replacement so we don’t have to constantly refresh to see our changes.All we do for that in terms of this file is instantiate a new instance of the plugin in the plugins property and make sure that we set hotOnly to true in devServer
};
