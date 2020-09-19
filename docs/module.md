---
id: module.md
title: Module
sidebar_label: Module
slug: /module
---

Every component of an application is a part of a module.
This is a way to group components, plugins and other part of application that are related to each other.

## Module root component

Every module has a root component which will be displayed when a module is mounted to the dom tree.

```javascript
import { Module } from 'munster';
import AppRoot from './AppRoot';

new Module({
    component: AppRoot
});
```

In this example, `AppRoot` is the root component.

## Mount to dom tree

Module must be mounted to the dom tee first before we can interact with its components.

```javascript
import { Module } from 'munster';
import AppRoot from './AppRoot';

new Module({
    component: App,
    selector: 'app-root'
});
```

On the example code above, the `'app-root'` selector is the tag name when mounting the module to the dom tree. 
Ex. `<app-root></app-root>`.

## Include a plugin

Plugin must be included in the plugins array of a module before the components inside the module can use it.

Here's an example on how to use a plugin:

```javascript
import { Module } from 'munster';
import Store from 'munster-store';
import AppRoot from './AppRoot';

const module = new Module({
    component: AppRoot,
    plugins: [
        { plugin: Store, data: {} }
    ]
});
```

In the example above, we included the `Store` plugin to our module. The data property is optional depending to the plugin.
