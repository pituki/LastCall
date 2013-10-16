/**
 * Created by longview on 10/16/13.
 */
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
			},
			all: ['Gruntfile.js', 'LastCall.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	// Default task(s).
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test',['jshint']);

};