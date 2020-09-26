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

## Pass props from logic

This feature allows us to pass props from parent component to child.
This is very helpful when building munster components intended to be compatible with other javascript frameworks.

Here's an example on how to pass props from logic:

#### Parent component

```javascript
<template>
    <div>
        <button on:click={this.setProps}>Set Props Button</button>
        <app-child view:ref={this.childComponent}></app-child>
    </div>
</template>
export default class Parent {
    constructor() {
        this.childComponent = null;  // reference to child component
    }
    setProps() {
        this.childComponent.$setProps({
            date: new Date()
        });
    }
}
```

#### Child component

```javascript
<template>
    ...
</template>
export default class Child {
    onPropsChange(oldProps) {
        console.log(this.$props);
    }
}
```

## Hook

After this plugin is registered, the plugin will add an `onPropsChange(oldProp)` hook to the component which will trigger once a property in the parent is changed.