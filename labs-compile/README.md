# packaged labs-compile
The directive allows you to call AngularJS functions in localization strings.
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
HTML:
```
<a ng-click="test()">test</a>
```

HAML:
```
%span{"compile"=>"'<a ng-click=\"test()\">test</a>'"}
```