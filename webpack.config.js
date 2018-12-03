/**
 * As our first step, we'll pull in the user's webpack.mix.js
 * file. Based on what the user requests in that file,
 * a generic config object will be constructed for us.
 */
let laravelMixPath = process.env.NODE_PATH + '/laravel-mix/';
let mix = require(laravelMixPath + 'src/index');

let ComponentFactory = require(laravelMixPath + 'src/components/ComponentFactory');

new ComponentFactory().installAll();

require('./webpack.mix');

/**
 * Just in case the user needs to hook into this point
 * in the build process, we'll make an announcement.
 */

Mix.dispatch('init', Mix);

/**
 * Now that we know which build tasks are required by the
 * user, we can dynamically create a configuration object
 * for Webpack. And that's all there is to it. Simple!
 */

let WebpackConfig = require(laravelMixPath + 'src/builder/WebpackConfig');

module.exports = new WebpackConfig().build();

//
// /**
//  * As our first step, we'll pull in the user's webpack.mix.js
//  * file. Based on what the user requests in that file,
//  * a generic config object will be constructed for us.
//  */
//
// require('../src/index');
// require(Mix.paths.mix());
//
// /**
//  * Just in case the user needs to hook into this point
//  * in the build process, we'll make an announcement.
//  */
//
// Mix.dispatch('init', Mix);
//
// /**
//  * Now that we know which build tasks are required by the
//  * user, we can dynamically create a configuration object
//  * for Webpack. And that's all there is to it. Simple!
//  */
//
// let WebpackConfig = require('../src/builder/WebpackConfig');
//
// module.exports = new WebpackConfig().build();
