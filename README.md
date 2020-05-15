Set 0 value to unchecked checkbox, and 1 for checked.
Especially useful for multiple checkboxes when using PHP.

# Before

### index.html
```html
<input name="isVisible[]" type="checkbox" checked>
<input name="isVisible[]" type="checkbox">
<input name="isVisible[]" type="checkbox" checked>
```

#### index.php
```php
var_dump($_POST['isVisible']);
```

```php
array(2) {
  [0]=>
  string(1) "1"
  [1]=>
  string(0) "1"
}
```

# After

#### index.html
```html
<div class="cheghost">
  <input type="hidden" class="checkbox-ghost" name="isVisible[]">
  <input type="checkbox" class="checkbox-entity" checked>
</div>
<div class="cheghost">
  <input type="hidden" class="checkbox-ghost" name="isVisible[]">
  <input type="checkbox" class="checkbox-entity">
</div>
<div class="cheghost">
  <input type="hidden" class="checkbox-ghost" name="isVisible[]">
  <input type="checkbox" class="checkbox-entity" checked>
</div>
```

```html
<script src="cheghost/index.js"></script>
```

```html
<script>
cheghost('.cheghost');
</script>
```

#### index.php
```php
var_dump($_POST['isVisible']);
```

```php
array(3) {
  [0]=>
  string(1) "1"
  [1]=>
  string(0) "0"
  [2]=>
  string(0) "1"
}
```
