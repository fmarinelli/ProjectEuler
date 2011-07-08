require.paths.push(__dirname);
require.paths.push(__dirname + '/deps');
require.paths.push(__dirname + '/lib');
var nodeunit = require('nodeunit');

process.chdir(__dirname);
nodeunit.reporters.default.run(['test']);
