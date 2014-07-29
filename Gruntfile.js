module.exports = function (grunt) {
  'use strict';

  // ## load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.config('pkg', grunt.file.readJSON('package.json'));
  grunt.initConfig({
    // ### dist name
    banner_name: '/** ' + grunt.config("pkg").name + ' -v' + grunt.config("pkg").version + 
              '\n* Copyright (c) '+ grunt.template.today("yyyy") + ' ' + grunt.config('pkg').author +
              '\n* Licensed ' + grunt.config('pkg').license + '\n*/\n\n',

    // ### concat
    concat: {
      options: {
        banner: '<%= banner_name %>'
      },
      dist: {
        src: [
          'src/core/testsuite.js',
          'src/methods/*.js'
        ],
        dest: 'dist/testsuite.js'
      }
    }

  });
};
