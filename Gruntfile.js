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
  grunt.initConfig({});

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['typescript_cs_poco']);

};
