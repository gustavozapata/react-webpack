# react-webpack

React app without CRP or any other bootstrap

## Steps

- npm init -y
- npm i react react-dom
- npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader sass-loader sass webpack webpack-cli style-loader webpack-dev-server
- create .babelrc file and add the babel presets
- create a webpack.config.js file (this runs in a node env)

## Dependencies

webpack - allows us to bundle our code so it's ready for the browser
sass loader - will convert our sass files into css
css loader - will load our css into our html documents
file loader - imports html file into our output
babel - converts react code (jsx) into browser readable code (js)
