This library automatically sets 0 value to unchecked checkbox, and 1 for checked.
Especially useful for multiple checkboxes with the same name when receiving the form with PHP.

# Before

### .html

```html
<input name="tasks[]" type="checkbox" checked />
<input name="tasks[]" type="checkbox" />
<input name="tasks[]" type="checkbox" checked />
```

#### .php

```php
var_dump($_POST['tasks']);

// Expectation:
// array(2) {
//   [0]=>
//   string(1) "1"
//   [1]=>
//   string(0) "0"
//   [2]=>
//   string(0) "1"
// }

// Reality:
// array(2) {
//   [0]=>
//   string(1) "1"
//   [1]=>
//   string(0) "1"
// }
```

# After

#### .js

```js
cheghost("input[type=checkbox]");
```

#### .php

```php
var_dump($_POST['isVisible']);

// Reality:
// array(3) {
//   [0]=>
//   string(1) "1"
//   [1]=>
//   string(0) "0"
//   [2]=>
//   string(0) "1"
// }
```
