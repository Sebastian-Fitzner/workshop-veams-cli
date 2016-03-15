# Table

This component is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: table, @tag: component-partial }}
{{#with table-bp.tableWithHead}}
	{{> c-table}}
{{/with}}

{{#with table-bp.tableHeadLeft}}
	{{> c-table}}
{{/with}}

{{#with table-bp.tableWithoutHead}}
	{{> c-table}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-table";
// @INSERT :: END
```
