# checkbox-ghost

Adding value '0' to empty checkbox, and '1' for checked.
Very useful for multiple checkboxes when using PHP.

## Usecase

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
```

#### index.php
```php
var_dump($_POST['isVisible']);
```

#### =>
```php
array(3) {
  [0]=>
  string(1) "1"
  [1]=>
  string(0) ""
  [2]=>
  string(0) "1"
}
```
