# test-utility

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: test-utility, @tag: global-partial }}
{{#with test-utility-bp}}
	{{#wrapWith "u-test-utility"}}
		Wrapped with markup from test-utility.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "globals/_u-test-utility";
// @INSERT :: END
```
