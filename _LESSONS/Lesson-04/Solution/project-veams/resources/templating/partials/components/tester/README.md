# tester

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: tester, @tag: component-partial }}
{{#with tester-bp}}
	{{#wrapWith "c-tester"}}
		Wrapped with markup from tester.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-tester";
// @INSERT :: END
```
