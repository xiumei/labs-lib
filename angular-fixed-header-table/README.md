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

```<table id="tableId" fixed-header-table fixed="both/col/row" divWidth="100%" divHeight="100%" headerColor="#f7f7f7">

%table{"id"=>"tableId", "fixed-header-table"=>}
```