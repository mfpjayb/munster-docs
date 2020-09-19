---
id: router.md
title: Router
sidebar_label: Router
slug: /router
---

Router is a plugin that enables developers to build a single page application with multiple components that acts as different views of the app.
View changes depending on the activated route. Activated routes depends on the url of the browser and the path registered in the router.

## Register the plugin

Router must be registered as a plugin first before we can use it.

Here's an example on how to register the router:

```javascript
import { Global } from 'munster';
import Router from 'munster-router';
import SampleComponent from './SampleComponent';

const routes = [
    { path: '/sample-route', component: SampleComponent }
];

new Global({
    plugins: [
        Router.routes(routes)
    ]
});
```

## Creating routes

A route is just a javascript object that contains two required properties, `path` and `component` and some optional properties.

| Properties    | type      |     |
| ---           | ---       | --- |
| path          | String    | The path that should match in the browser url pathname before the route is activated. |
| component     | Class     | The component that will be rendered in the `<app-router-outlet />` when route path matches the browser url pathname. |
| exact         | Boolean   | If the values is true, then the Component will only activate if route path is an exact match with the browser url pathname but still respect the dynamic route matching. |
| middleware    | Array     | It is another layer of checking if the component can activate or not. |
| children      | Array     | An Array of child routes. |

Here's an example on how to create routes

```javascript
import { Global } from 'munster';
import Router from 'munster-router';
import SampleComponent from './SampleComponent';
import ChildRoute from './ChildRoute';

const routes = [
    {
        path: '/route', component: SampleComponent, children: [
            { path: '/route/child', component: ChildRoute }
        ]
    }
];
```

## Dynamic route matching

Dynamic route matching is a way to match a route path segment into its matching browser url pathname segment.
A dynamic segment is denoted by a colon `:` followed by the segment name. ex. `/:userId`.
The value of the dynamic segments is accessible in it's component only using `this.$router.params()`.

Here's a table of dynamic routes and its corresponding values in `this.$router.params()`:

| component path        | browser url pathname  | this.$router.params()         |
| ---                   | ---                   | ---                           |
| /:path                | /100                  | { path: 100 }                 |
| /user/:userId         | /user/123             | { userId: 123 }               |
| /post/:postId/:userId | /post/1/123           | { postId: 1, userId: 123 }    |

## Router outlet

Router outlet is where the activated component is located after activation. Router outlet is written as `<plug-router-outlet />` in the view.

Here's an example on how to implement the router outlet:

```html
<template>
    <div>
        <plug-router-outlet />
    </div>
</template>
```

## Router link

Router link is an additional feature of the router plugin.
It allows the developer to add an anchor tag in the view to navigate to different routes.

Here's an example on how to add a router link:

```jsx
<template>
    <plug-link href="/route-path">I am a link</plug-link>
</template>
```

The code above will generate an element like the following:

```jsx
<a href="/route-path">I am a link</a>
```

## Middleware

Middleware is another way to check if a component can activate.
It can also run a block of codes before a route event happen.

Here's an example on how to use middleware:

```javascript
// ./AppModule.js
...
import SampleMiddleware from './SampleMiddleware';
const routes = [
    {
        path: '/sample-route', component: SampleComponent,
        middleware: [SampleMiddleware]
    }
];
...
```

```javascript
// ./SampleMiddleware.js
export default class SampleMiddleware {
    canActivate() {
        ...
    }
}
```

If `canActivate` method returns true, then the component is allowed to activate and not allowed if otherwise.

