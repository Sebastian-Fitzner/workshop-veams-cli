# teaser

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: teaser, @tag: component-partial }}
{{#with teaser-bp}}
	{{> c-teaser}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-teaser";
// @INSERT :: END
```
