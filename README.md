# grunt-typescript-cs-poco

> Converts C# code into TypeScript interfaces.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typescript-cs-poco --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typescript-cs-poco');
```

## The "typescript_cs_poco" task

### Overview
In your project's Gruntfile, add a section named `typescript_cs_poco` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  typescript_cs_poco: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```