# packaged angular-fixed-header-table
# Usage

Add `ngFixedHeaderTable` as a dependency for your app:

```javascript
define(['angular-fixed-header-table'], function () {
    "use strict";
    var module = angular.module('app.main', ['ngFixedHeaderTable']);
    return module;
});
```

Use `fixed-header-table` attribute with table:

```
%table{"id"=>"tableId", "fixed-header-table"=>"", "fixed"=>"both", "divWidth"=>"100%", "divHeight"=>"100%", "headerColor"=>"#f7f7f7"}
```
# Attribute
```
id: Required.
fixed-header-table: Required.
fixed (Optional): The attribute tells to fix the first row or column or both. The value can be 'both/col/row'. Default is 'both'.
divWidth (Optional): Adjusted div width. Default is '100%'.
divHeight (Optional): Adjusted div height. Default is '100%'.
headerColor (Optional): Header color. Default is '#f7f7f7'
```