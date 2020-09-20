---
id: change-detection.md
title: Change detection
sidebar_label: Change detection
slug: /change-detection
---

Change detection in munster is triggered when a method in a component is called and not when setting a value to a variable.
Some callbacks like `then()` in http request needs to call a method or the `this.$apply()` to trigger change detection.
Calling multiple methods at once will only trigger change detection once.

## Change detection in callbacks

Here's an example on how to trigger change detection in callback:

```javascript
export default class Root {
    connectedCallback() {
        this.data = null;
        fetch('/url').then(this.changeDetection.bind(this));
    }

    changeDetection(response) {
        this.data = response.json();
    }
}
```

Using this technique can potentially result to a cleaner code.

#### Using the apply method.

Another way to trigger change detection inside a callback is to call the `this.$apply()` method.

Here's an example on how to use the `this.$apply()` method.

```javascript
export default class Root {
    connectedCallback() {
        this.data = null;
        fetch('/url').then(response => {
            this.data = response.json();
            this.$apply();
        });
    }
}
```
