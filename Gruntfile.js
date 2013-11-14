/*global module:false*/
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-css-metrics');

  grunt.initConfig({
    cssmetrics: {
      test: {
        src: [
        'test.css'
        ],
        options: {
          maxSelectors: 4096
        }
      }
    }
  });

    // Default task
    grunt.task.registerTask('default', [
        'cssmetrics'
    ]);

};