module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['styles/sections'],
          import: ['constants.styl'],
          linenos: true
        },
        files: {
          'result.css': 'thing.styl'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-stylus');
};
