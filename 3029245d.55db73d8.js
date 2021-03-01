(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n(2),o=n(6),c=(n(0),n(89)),i={id:"component.md",title:"Component",sidebar_label:"Component",slug:"/component"},l={unversionedId:"component.md",id:"component.md",isDocsHomePage:!1,title:"Component",description:"Components are the most basic building block of an application.",source:"@site/docs\\component.md",slug:"/component",permalink:"/munster-docs/docs/component",editUrl:"https://github.com/mfpjayb/munster-docs/blob/master/docs/component.md",version:"current",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Module",permalink:"/munster-docs/docs/module"},next:{title:"Shadow Dom",permalink:"/munster-docs/docs/shadow-dom"}},r=[{value:"Structure",id:"structure",children:[{value:"Single file component",id:"single-file-component",children:[]},{value:"Multiple file component",id:"multiple-file-component",children:[]}]},{value:"Component selector",id:"component-selector",children:[]},{value:"Custom component selector",id:"custom-component-selector",children:[]},{value:"Define component",id:"define-component",children:[]},{value:"Custom element define",id:"custom-element-define",children:[]},{value:"Data binding",id:"data-binding",children:[]},{value:"Model binding",id:"model-binding",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Child Component",id:"child-component",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Props",id:"props",children:[]}],p={rightToc:r};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Components are the most basic building block of an application.\nA component is composed of view, logic and styles.\nIn this framework, you have an option to put the view, logic and styles in a single file or in a separate .html, .js and .css files."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If using a single file component. The component class must use ",Object(c.b)("inlineCode",{parentName:"p"},"export default")," in exporting the component."))),Object(c.b)("h2",{id:"structure"},"Structure"),Object(c.b)("h3",{id:"single-file-component"},"Single file component"),Object(c.b)("p",null,"Here's an example of a single file component."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    ... \x3c!-- view --\x3e\n</template>\n\n<script>\n    ... // logic\n<\/script>\n\n<style>\n    ... /* style */\n</style>\n")),Object(c.b)("p",null,"Inside the ",Object(c.b)("inlineCode",{parentName:"p"},"<template> </template>")," tag is the view of the component.\nThe template tag must have a single child only or it will not work property."),Object(c.b)("p",null,"Below the template tags is the ",Object(c.b)("inlineCode",{parentName:"p"},"<script> <\/script>")," tag that contains the component's logic.\nHere we can find the class that manipulates the view and the state of the component.\nThis tag is completely optional. We don't have to put a script tag if no logic is needed for the component.\nThe component class must use ",Object(c.b)("inlineCode",{parentName:"p"},"export default")," in exporting the component or it will not work."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<script>\n    export default class SampleComponent {\n        ... // Logic\n    }\n<\/script>\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"<style> </style>")," contains the styles of the component. Same as the script tag, this tag is also optional."),Object(c.b)("h3",{id:"multiple-file-component"},"Multiple file component"),Object(c.b)("p",null,"The view, logic and styles of a component can also be separated into different files.\nView can have ",Object(c.b)("inlineCode",{parentName:"p"},".html"),", logic can have ",Object(c.b)("inlineCode",{parentName:"p"},".js")," and styles can have ",Object(c.b)("inlineCode",{parentName:"p"},".css")," extension."),Object(c.b)("p",null,"Here's an example on how to make a multiple file component:"),Object(c.b)("h4",{id:"view"},"View"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- ./sample.component.html --\x3e\n<template>\n    <h1>Sample Component</h1>\n</template>\n")),Object(c.b)("p",null,"All html element in view must be inside the template tag and template tag must have a single child only."),Object(c.b)("h4",{id:"style"},"Style"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ./sample.component.css */\nh1 {\n    color: red;\n}\n")),Object(c.b)("h4",{id:"logic"},"Logic"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// ./sample.component.js\n\nimport { Component } from 'munster';\nimport Template from './sample.component.html';\nimport Style from './sample.component.css';\n\n@Component({\n  template: Template,\n  style: Style\n})\nexport class SampleComponent {\n    ...\n}\n")),Object(c.b)("p",null,"Please take note of the ",Object(c.b)("inlineCode",{parentName:"p"},"@Component")," decorator. The template and style must be imported and passed to the @Component decorator."),Object(c.b)("h2",{id:"component-selector"},"Component selector"),Object(c.b)("p",null,"Component selector is based on the class name of the component converted into kebab case with the prefix of its module(default prefix is ",Object(c.b)("inlineCode",{parentName:"p"},"app"),").\nIf the class name of a component is ",Object(c.b)("inlineCode",{parentName:"p"},"SampleComponent")," the selector will be ",Object(c.b)("inlineCode",{parentName:"p"},"app-sample-component"),".\nWe can mount the component to the dom using ",Object(c.b)("inlineCode",{parentName:"p"},"<app-sample-component />")," tag."),Object(c.b)("h2",{id:"custom-component-selector"},"Custom component selector"),Object(c.b)("p",null,"Selector can also be customized inside the component using the static property ",Object(c.b)("inlineCode",{parentName:"p"},"$selector"),"."),Object(c.b)("p",null,"Here's an example on how to add customize the component's selector:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    ...\n</template>\n\n<script>\nexport default class SampleComponent {\n    static $selector = 'custom-selector';\n}\n<\/script>\n")),Object(c.b)("p",null,"With this example we can use ",Object(c.b)("inlineCode",{parentName:"p"},"<app-custom-selector />")," to mount the component to the dom."),Object(c.b)("h2",{id:"define-component"},"Define component"),Object(c.b)("p",null,"Component must be defined in a module before we can use it."),Object(c.b)("p",null,"Here's an example on how to define a component in a module:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module } from 'munster';\nimport SampleComponent from './sample.component.html';\n\nexport class RootModule extends Module {\n  components = [\n    SingleFileComponent\n  ];\n}\n")),Object(c.b)("h2",{id:"custom-element-define"},"Custom element define"),Object(c.b)("p",null,"Since a component is a web component.\nIt can also be defined using ",Object(c.b)("inlineCode",{parentName:"p"},"customElements.define"),".\nHowever, it cannot use the plugins of a module.\nIt is recommended to define the component inside the ",Object(c.b)("inlineCode",{parentName:"p"},"src/app/root.module.js")," file."),Object(c.b)("p",null,"Here's an example on how to define a web component:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import SampleComponent from './sample.component.html';\n\ncustomElements.define('sample-component', SampleComponent);\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Component name must contain a hyphen(",Object(c.b)("inlineCode",{parentName:"p"},"-"),") character or else it will be treated as normal html element."))),Object(c.b)("h2",{id:"data-binding"},"Data binding"),Object(c.b)("p",null,"Data binding is a way to synchronize the data from logic to view and vise versa."),Object(c.b)("h4",{id:"attribute-binding"},"Attribute binding"),Object(c.b)("p",null,"Here is an example on how to bind a property from the logic into an attribute of view:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    <h1 id={this.attr}></h1>\n</template>\n\n<script>\n    export default class SampleComponent {\n        attr = 'sample-attr';\n    }\n<\/script>\n")),Object(c.b)("h4",{id:"text-binding"},"Text binding"),Object(c.b)("p",null,"Here is an example on how to display a text from logic to view:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    <h1>{greeting}</h1>\n</template>\n\n<script>\n    export default class SampleComponent {\n        greeting = 'Hello World!';\n    }\n<\/script>\n")),Object(c.b)("h2",{id:"model-binding"},"Model binding"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"view:model")),Object(c.b)("p",null,"Model binding is a two way binding of data.\nEvery time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic."),Object(c.b)("p",null,"Here's an example on how to bind a model to the view:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <input view:model={this.sampleModel} type=\"text\" />\n</template>\n\n<script>\n    export default class SampleComponent {\n        sampleModel = '';\n    }\n<\/script>\n")),Object(c.b)("h2",{id:"hooks"},"Hooks"),Object(c.b)("p",null,"Hooks are functions that lets you run a block of codes when your component triggers a lifecycle event."),Object(c.b)("p",null,"Below are the available lifecycle hooks:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Hooks"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$connected()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when the component is added to the dom.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$disconnected()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when the component is removed from the dom.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$attributeChanged(attrName, oldVal, newVal)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when a component attribute is changed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$adopted()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when the component is moved from one HTML document to another one with the ",Object(c.b)("inlineCode",{parentName:"td"},"adoptNode")," method.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$onViewInit()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when a component starts building the element of view.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$afterViewInit()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when a component is done building the element of view.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$onChange()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fired when a the change detection in component is triggered.")))),Object(c.b)("h2",{id:"child-component"},"Child Component"),Object(c.b)("p",null,"Child component is a component rendered inside a component."),Object(c.b)("p",null,"Here's an example on how to render a child component:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <div>\n        <child-component></child-component>\n    </div>\n</template>\n\n<script>\nexport default class SampleComponent {\n    ...\n}\n<\/script>\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Child component must be registered to the same module as parent component."))),Object(c.b)("h2",{id:"attributes"},"Attributes"),Object(c.b)("p",null,"Attributes are values passed down from parent component to child component.\nAttribute can only hold a value and not objects or arrays."),Object(c.b)("p",null,"Here's an example on how to pass a value from parent to child component:"),Object(c.b)("h5",{id:"parent-component"},"Parent component"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <child-component sample-attribute={this.number}></child-component>\n</template>\n\n<script>\nexport default class SampleComponent {\n    number = 123;\n}\n<\/script>\n")),Object(c.b)("h5",{id:"child-component-1"},"Child component"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\n<script>\nexport default class ChildComponent {\n    static get observedAttributes() {\n        return ['sample-attribute'];\n    }\n    $attributeChanged(attrName, oldVal, newVal) {\n        console.log(attrName, oldVal, newVal);\n    }\n}\n<\/script>\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"observedAttributes")," is required if we want to watch for the changes of an attribute."))),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Props are the properties passed down from parent to child.\nProps is different from attributes since it can hold values, arrays or objects."),Object(c.b)("p",null,"Since props is not directly available in web components we need to use a plugin to use this feature."),Object(c.b)("p",null,"Please see the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/component"}),"props plugin document")," on how to use props."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Passing data using attribute is recommended since attribute is using the implementation of web component attributes."))))}m.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),b=m(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||s[d]||c;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);