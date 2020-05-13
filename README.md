Adding value '0' to empty checkbox, and '1' for checked.
Very useful for multiple checkboxes when using PHP.

# Before

### index.html
```html
<input name="isVisible[]" class="checkbox-entity" type="checkbox" checked>
<input name="isVisible[]" class="checkbox-entity" type="checkbox">
<input name="isVisible[]" class="checkbox-entity" type="checkbox" checked>
```

#### index.php
```php
var_dump($_POST['isVisible']);

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
<div class='checkbox'>
  <input type="hidden" class="checkbox-ghost" name="isVisible[]" checked>
  <input type="checkbox" class="checkbox-entity">
</div>
<div class='checkbox'>
  <input type="hidden" class="checkbox-ghost" name="isVisible[]">
  <input type="checkbox" class="checkbox-entity">
</div>
<div class='checkbox'>
  <input type="hidden" class="checkbox-ghost" name="isVisible[]" checked>
  <input type="checkbox" class="checkbox-entity">
</div>

<script>
checkbox_ghost('.checkbox');
</script>

```

#### index.php
```php
var_dump($_POST['isVisible']);

array(3) {
  [0]=>
  string(1) "1"
  [1]=>
  string(0) ""
  [2]=>
  string(0) "1"
}
```
