/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});
	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

};
