---
id: navigate.md
title: Navigate
sidebar_label: Navigate
slug: /navigate
---

Navigate allows us to redirect to a route programmatically.

## Installation

Navigate plugin can be installed using the following command:

```bash
npm install munster-navigate
```

## Register the plugin

Navigate plugin needs to be registered in a module before we can use it.

Here's an example on how to register this plugin:

```javascript
import { Global } from 'munster';
import Navigate from 'munster-navigate';

new Global({
    plugins: [
        Navigate
    ]
});
```

## Navigate programmatically

Here's an example on how to navigate to a route programmatically:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    btnClick() {
        this.$navigate('/route/path');
    }
}
```

## Navigate parameters

Navigate has three parameters, first is the url, second is the state and third is the title.
The second and third parameters are optional.

For more information on url, state and title please follow this link at [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).
