# custom

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: custom, @tag: component-partial }}
{{#with custom-bp}}
	{{> c-custom}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-custom";
// @INSERT :: END
```
