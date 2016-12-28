# packaged angular-localization
# Usage

Add `ngLocalization` as a dependency for your app:

```javascript
define(['localization'], function () {
    "use strict";
    var module = angular.module('app.main', ['ngLocalization']);
    return module;
});
```

Use `Localization.favoriteLanguage` in your angular controller:

```javascript
module.controller('mainCtrl', function ($scope, $translate, Localization) {
        $translate.use(Localization.favoriteLanguage);
    }
);
```
Note that put your localization files in the path and format below:
```
prefix: window.location.pathname + 'languages/messages_',
suffix: '.json'
```