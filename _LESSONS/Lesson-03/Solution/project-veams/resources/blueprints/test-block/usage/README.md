# test-block

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: test-block, @tag: block-partial }}
{{#with test-block-bp}}
	{{> b-test-block}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "blocks/_b-test-block";
// @INSERT :: END
```
