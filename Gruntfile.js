/*
 * grunt-typescript-cs-poco
 * https://github.com/ffMathy/grunt-typescript-cs-poco
 *
 * Copyright (c) 2016 Mathias Lorenzen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    typescript_cs_poco: {
      first_configuration: {
        dest: 'samples/result/first',
        src: ['samples/source/*.cs'],
        options: {
          //options go here.
        }
      },
      second_configuration: {
        dest: 'samples/result/second',
        src: ['samples/source/*.cs'],
        options: {
          propertyNameResolver: function camelCasePropertyNameResolver(propName) { 
            return propName[0].toLowerCase() + propName.substring(1); 
          }
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['typescript_cs_poco']);

};
