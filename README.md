# DEPRECATED!
This library has been deprecated in favor of the new, much more stable and flexible: https://github.com/ffMathy/FluffySpoon.JavaScript.CSharpToTypeScriptGenerator.Grunt/

# grunt-typescript-cs-poco

## Overview

See https://github.com/ffMathy/typescript-cs-poco for actual implementation.  This is just a wrapper.

Grunt-typescript-cs-poco is a Grunt plugin that translates basic C# POCO classes like this:

```C#
public class MyPoco
{
	public string Name { get; set; }
	public int Id { get; set; }
	public long Value { get; set; }
	public bool IsValid { get; set; }
	public SomeOtherPoco RelatedObject { get; set; }
}
```

Into this TypeScript file:

```typescript
interface MyPoco {
	Name: string;
	Id: number;
	Value: number;
	IsValid: boolean;
	RelatedObject: SomeOtherPoco;
}
```

## Installation

Install with NPM:

```shell
npm install --save-dev grunt-typescript-cs-poco
```

## Use

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    // Generate TypeScript interfaces from C# files in samples/source and put them into samples/result as one .d.ts file for every .cs file.
    typescript_cs_poco: {
      'samples/result': ['samples/source/*.cs'],
      options: {
        //options go here. see https://github.com/ffMathy/typescript-cs-poco for a total list of options.
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['typescript_cs_poco']);

};

```

This will create a single .d.ts file for every .cs file it finds.
