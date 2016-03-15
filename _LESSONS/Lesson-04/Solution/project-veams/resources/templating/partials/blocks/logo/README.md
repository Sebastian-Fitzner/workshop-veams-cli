# logo

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: logo, @tag: block-partial }}
{{#with logo-bp}}
	{{> b-logo}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "blocks/_b-logo";
// @INSERT :: END
```
