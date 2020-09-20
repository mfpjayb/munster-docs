---
id: component.md
title: Component
sidebar_label: Component
slug: /component
---

Components are the most basic building block of an application.
Currently it is composed of view and logic but in the future releases a scoped style will be added to component's features.

:::note
Component must use `export default` in exporting the component.
:::

## Structure

Component is composed of view and logic.
Inside the `<template></template>` tag is the view of the component.
The template tag must have a single child only or it will not work property.

Below the `<template>` tags is the component's logic.
Here we can find the class that manipulates the view and the state of the component.

```javascript
<template>
    ... // Template
</template>

export default class SampleComponent {
    ... // Logic
}
```

## Component selector

#### Component in global instance

Component selector is based on the class name of the component converted into kebab case with a prefix of `app-` if the component is registered in the global instance.
If the class name of a component is `SampleComponent` the selector will be `app-sample-component` and now we can mount the component to the dom using `<app-sample-component />` tag.

Selector can also be customized inside the component using the `$selector` property.

Here's an example on how to add customize the component's selector:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    constructor() {
        this.$selector = 'custom-selector';
    }
}
```

## Define component

#### Register component as global

```javascript
import { Global } from 'munster-modules';
import SampleComponent from './SampleComponent';

new Global({
    components: [
        SampleComponent
    ]
});
```
<!--
#### Register component in a module

```javascript
import { Module } from 'munster-modules';
import SampleComponent from './SampleComponent';

new Module({
    components: [
        SampleComponent
    ]
});
```
-->

#### Normally define a component

Component can also be defined using `customElements.define` since a component is a web component.
It is recommended to define the component inside the `src/main.js` file.

Here's how to define a web component:

```javascript
import SampleComponent from './SampleComponent';

customElements.define('sample-component', SampleComponent);
```

:::note
Component name must contain a hyphen(`-`) character or else it will be treated as normal html element.
:::

## Data binding

Data binding is a way to synchronize the data from logic to view and vise versa.

#### Attribute binding

Here is an example on how to bind a property from the logic into an attribute of view:

```javascript
<template>
    <h1 id={this.id}></h1>
</template>

export default class SampleComponent {
    constructor() {
        this.id = 'sample-id';
    }
}
```

#### Model binding

Model binding is a two way binding of data.
Every time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic.

Here's an example on how to bind a model to the view:

```javascript
<template>
    <input view:model={this.sampleModel} type="text" />
</template>

export default class SampleComponent {
    constructor() {
        this.sampleModel = '';
    }
}
```

## Event binding

Event binding is a way to attach an event into an element.

Here's an example on how to attach a click event to a button:

```javascript
<template>
    <button on:click={this.clickMe}>Click Me</button>
</template>

export default class SampleComponent {
    clickMe() {
        console.log('I was clicked');
    }
}
```

Here is a list of available events from [w3schools.com](https://www.w3schools.com/jsref/dom_obj_event.asp).

## Hooks

Hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.

Below are the available lifecycle hooks:

| Hooks                 | |
| ---                   | --- |
| connectedCallback()                                   | Fired when the component is added to the dom. |
| disconnectedCallback()                                | Fired when the component is removed from the dom. |
| attributeChangedCallback(attrName, oldVal, newVal)    | Fired when a component attribute is changed. |
| adoptedCallback()                                     | Fired when the component is moved from one HTML document to another one with the `adoptNode` method. |
| onViewInit()                                          | Fired when a component starts building the element of view. |
| afterViewInit()                                       | Fired when a component is done building the element of view. |
| onChange()                                            | Fired when a the change detection in component is triggered. |

## Conditional rendering

Conditional rendering is used to conditionally render an element in the dom.
It uses the `view:if` directive which removes an element from the dom if the value is a falsy and append the element if otherwise.

Here's an example on how to use conditional rendering:

```javascript
<template>
    <h1 view:if={this.toggle}></h1>
</template>

export default class SampleComponent {
    constructor() {
        this.toggle = true;
    }
}
```

## List Rendering

List rendering uses `view:for` directive and it allows us to render a list of element based on the given array of data.

Here's an example on how to use list rendering:

```javascript
<template>
    <p view:for={this.array}>Hello World!</p>
</template>

export default class SampleComponent {
    constructor() {
        this.array = [1, 2, 3];
    }
}
```

#### List item name

List item uses `view:for-item` directive.
It allows the developer to set the variable name of the list item and display it in view.
If no list item directive is provided it is `$item` by default.

Here's an example on how to use list item directive:

```javascript
<template>
    <p view:for={this.array} view:for-item="listItem">{listItem}</p>
</template>

export default class SampleComponent {
    constructor() {
        this.array = ['foo', 'bar', 'bazz'];
    }
}
```

The example code above will generate list of element that looks like the following.

```html
<p>foo</p>
<p>bar</p>
<p>bazz</p>
```

#### List index

List index uses `view:for-index` directive.
It allows the developer to set the variable name of the list index.
If no list index directive is provided it is `$index` by default.

```javascript
<template>
    <p view:for={this.array} view:for-index="listIndex">{listIndex}</p>
</template>

export default class SampleComponent {
    constructor() {
        this.array = ['foo', 'bar', 'bazz'];
    }
}
```

The example code above will generate list of element that looks like the following.

```html
<p>0</p>
<p>1</p>
<p>2</p>
```

## Child Component

Child component is a component rendered inside a component.

Here's an example on how to render a component:

```javascript
<template>
    <div>
        <child-component></child-component>
    </div>
</template>

export default class SampleComponent {
    ...
}
```

:::note
Child component must be registered as a global component or as a module component.
:::

## Attributes

Attributes are values passed down from parent component to child component.
Attribute can only hold a value and not objects or arrays.

Here's an example on how to pass a value from parent to child component:

##### Parent component
```javascript
<template>
    <child-component sample-attribute={this.number}></child-component>
</template>

export default class SampleComponent {
    constructor() {
        this.number = 123;
    }
}
```

##### Child component
```javascript
<template>
    ...
</template>

export default class ChildComponent {
    static get observedAttributes() {
        return ['sample-attribute'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(attrName);
        console.log(oldVal);
        console.log(newVal);
    }
}
```

:::note
`observedAttributes` is required if we want to watch for the changes of an attribute.
:::

## Props

Props are the properties passed down from parent to child.
Props is different from attributes since it can hold values, arrays or objects.

Since props is not directly available in web components we need to use a plugin to use this feature.

Please see the [props plugin document](/docs/component) on how to use props.

:::note
Passing data using attribute is recommended since attribute is using the implementation of web component attributes.
:::

<!--
## Custom Directives

Custom directive let's us create our own directive that can be used inside our views.
Directives are classes that inherits the `Directive` class of munster framework.

#### Create a directive

Here's an example on how to create a custom directive:

```javascript
// ./Color.directive.js
import { Directive } from 'munster';

export default class Color extends Directive {
    constructor(props) {
        // props argument in super is required if constructor is present
        super(props);
    }

    $onInit() {
        this.changeColor();
    }

    $onPropsUpdated() {
        this.changeColor();
    }

    changeColor() {
        this.element.style.color = this.$props.color;
    }
}
```

The sample code above is a directive to change the text color of an element.

:::note
If constructor is called, a `super` call expression with `props` argument is require.
:::

#### Register a directive

Directive needs to be registered in the module before we can use it.

Here's an example on how to register a directive:

```javascript
import { Module } from 'munster-modules';
import Color from './Color.directive';

const module = new Module({
    ...
});

module.directive(Color, {});
```

The `directive` method in module accepts two arguments.
First is the directive itself and second is an optional argument which is a data for the directive.
The data is accessible inside the constructor for the directive.

Here's an example on how to access the data inside the directive:

```javascript
export default class Color extends Directive {
    constructor(props) {
        super(props);
        this.directiveData = props.data.module._directivesData.color;
    }
}
```

#### Using the directive

Custom directive uses the namespace `directive:` or `d:` in view followed by the class name of the directive with the first letter in lower case.

Example: `SampleDirective` will be called as `d:sampleDirective`.


Here's an example on how to use the `Color` directive created above:

```javascript
<template>
    <div>
        <h1 d:color={this.color}>Change My Color</h1>
        <button on:click={this.changeColor}>Change Color<button>
    </div>
</template>

export default class App {
    constructor() {
        this.color = {
            color: 'green'
        };
    }

    changeColor() {
        this.color = {
            color: 'red'
        };
    }
}
```
-->

## Shadow dom

Shadow dom is used to encapsulate the component to prevent scripts and styles outside the component from affecting it.

To use shadow dom in a component, we need to set the `$shadowMode` property of the component to 'open' or 'closed' and a shadow dom will be attached to the component.

Here's an example on how to use shadow dom in a component:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    constructor() {
        this.$shadowMode = 'open';
    }
}
```

## Slots

Slots let's us display content from the parent component into the child component's view.
Slots only work properly inside a shadow dom component.

Here's an example on how to use slots:

##### Parent component

```javascript
<template>
    <div>
        <child-component>
            <h1>I will be displayed on the child component slot.</h1>
        </child-component>
    </div>
</template>

export default class ParentComponent {}
```

##### Child component

```javascript
<template>
    <slot></slot>
</template>

export default class ChildComponent {}
```
In the example above,
the `<h1>I will be displayed on the child component slot.</h1>` element which is inside the `<child-component>...</child-component>`
component tags will be displayed in the child component's view where the `<slot></slot>` tag is located.

## Named slot

Named slot let's us display multiple elements from parent component to child component.

Here's an example on how to use named slots:

##### Parent component

```javascript
<template>
    <div>
        <child-component>
            <h1 slot="first-slot">First named slot.</h1>
            <h1 slot="second-slot">Second named slot.</h1>
        </child-component>
    </div>
</template>

export default class ParentComponent {}
```

##### Child component

```javascript
<template>
    <div>
        <div>
            <slot name="first-slot"></slot>
        </div>
        <slot name="second-slot"></slot>
    </div>
</template>

export default class ChildComponent {}
```





















