# test-component

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: test-component, @tag: component-partial }}
{{#with test-component-bp}}
	{{> c-test-component}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-test-component";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import TestComponent from './modules/test-component/test-component';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init TestComponent
 */
Helpers.loadModule({
	el: '[data-js-module="test-component"]',
	module: TestComponent,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init TestComponent
 */
Helpers.loadModule({
	domName: 'test-component',
	module: TestComponent,
	context: context
});
// @INSERT :: END
```
