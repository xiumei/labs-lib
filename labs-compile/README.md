# packaged labs-compile
# Usage

Add `ngCompile` as a dependency for your app:

```javascript
define(['labs-compile'], function () {
    "use strict";
    var module = angular.module('app.main', ['ngCompile']);
    return module;
});
```
Use `compile` attribute with directives:
```
%span{"compile"=>"'<a ng-click=\"test()\">test</a>'"}
```