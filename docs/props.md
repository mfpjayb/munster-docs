---
id: props.md
title: Props
sidebar_label: Props
slug: /props
---

Props plugin allows developers to pass any type of data from parent to child.
It is more advance than attributes since attributes can only pass string or number to child.
Props are namespaced with `prop:` followed by the property name. The syntax of props is written as `props:<name>=<data>`.

## Installation

Props plugin can be installed using the following command:

```bash
npm install munster-props
```

## Register the plugin

Props plugin needs to be registered in a module before we can use it.

Here's an example on how to register this plugin:

```javascript
import { Global } from 'munster-modules';
import Props from 'munster-props';

new Global({
    plugins: [
        Props
    ]
});
```

## Pass props to child

Here's an example on how to pass properties to child component:

#### Parent component
```javascript
<template>
    <app-child
        prop:date={this.date}
        prop:user={this.user}
        prop:posts={this.posts}
    ></app-child>
</template>

export default class Parent {
    constructor() {
        this.date = new Date().getTime();
        this.user = { ... };
        this.posts = [ ... ];
    }
}
```

#### Child component
```javascript
<template>
    ...
</template>

export class class Child {
    connectedCallback() {
        console.log(this.$props);
    }
}
```
## Hook

After this plugin is registered, the plugin will add an `onPropsChange(oldProp)` hook to the component which will trigger once a property in the parent is changed.