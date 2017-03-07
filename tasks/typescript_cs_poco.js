/*
 * grunt-typescript-cs-poco
 * https://github.com/ffMathy/grunt-typescript-cs-poco
 *
 * Copyright (c) 2016 Mathias Lorenzen
 * Licensed under the MIT license.
 */

'use strict';

var pocoGen = require('typescript-cs-poco');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('typescript_cs_poco', 'Converts C# code into TypeScript interfaces.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        });
      // Concat specified files.
      src.forEach(function(file) {
        // Print a success message.
        grunt.log.writeln('Generating TypeScript code from "' + file["cyan"] + '"...');

        var pathSeparations = file.split('/');
        var fileName = pathSeparations[pathSeparations.length-1];
        var targetFileName = fileName.replace(".cs", ".d.ts");

        var fileSource = grunt.file.read(file);
        fileSource = pocoGen(fileSource, options);

        // Write the destination file.
        var targetFilePath = f.dest + '/' + targetFileName;
        grunt.file.write(targetFilePath, fileSource);

        // Print a success message.
        grunt.log.writeln('File "' + targetFilePath["green"] + '" generated.');
      });
    });
  });

};
