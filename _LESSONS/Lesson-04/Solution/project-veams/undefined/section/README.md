# section

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: section, @tag: global-partial }}
{{#with section-bp}}
	{{#wrapWith "u-section"}}
		Wrapped with markup from section.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "globals/_u-section";
// @INSERT :: END
```
