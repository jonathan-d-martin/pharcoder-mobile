/** client.js
 *
 * Main entry point for Starcoder game client
 *
 * @type {Starcoder|exports}
 */
'use strict';

//require('./BlocklyAPI.js');

var commonConfig = require('./common/config.js');
var clientConfig = require('./client/config.js');
var buildConfig = buildConfig || {};

var Starcoder = require('./client/Starcoder-client.js');

// @BUILDCONFIG@

// @BUILDTIME@

// @BUILDVERSION@

//localStorage.debug = '';                        // used to toggle socket.io debugging output

$(function () {
    var starcoder = new Starcoder([commonConfig, clientConfig, buildConfig]);
    starcoder.go(function () {
        starcoder.game.state.start('boot');
    });
});
