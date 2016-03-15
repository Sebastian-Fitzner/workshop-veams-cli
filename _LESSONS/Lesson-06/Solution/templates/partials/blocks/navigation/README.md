# navigation

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: navigation, @tag: block-partial }}
{{#with navigation-bp}}
	{{> b-navigation}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "blocks/_b-navigation";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import Navigation from './modules/navigation/navigation';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init Navigation
 */
Helpers.loadModule({
	el: '[data-js-module="navigation"]',
	module: Navigation,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init Navigation
 */
Helpers.loadModule({
	domName: 'navigation',
	module: Navigation,
	context: context
});
// @INSERT :: END
```
