(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),i=(n(0),n(89)),a={id:"munster-tester.md",title:"Munster tester",sidebar_label:"Munster tester",slug:"/munster-tester"},c={unversionedId:"munster-tester.md",id:"munster-tester.md",isDocsHomePage:!1,title:"Munster tester",description:"Munster tester is a tool to make your testing easy.",source:"@site/docs\\munster-tester.md",slug:"/munster-tester",permalink:"/munster-docs/docs/munster-tester",editUrl:"https://github.com/mfpjayb/munster-docs/blob/master/docs/munster-tester.md",version:"current",sidebar_label:"Munster tester"},l=[{value:"Installation",id:"installation",children:[]},{value:"Define",id:"define",children:[]},{value:"Extend method",id:"extend-method",children:[]},{value:"Typing",id:"typing",children:[]},{value:"Action",id:"action",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Munster tester is a tool to make your testing easy."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Here's the command on how to add the munster-tester library in your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev munster-tester\n")),Object(i.b)("h2",{id:"define"},"Define"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"import { define } from 'munster-tester';")),Object(i.b)("p",null,"Define is a function used to define your web component until the ",Object(i.b)("inlineCode",{parentName:"p"},"connectedCallback()")," is triggered."),Object(i.b)("p",null,"Here's an example on how to use the define function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { define } from 'munster-tester';\nimport Root from '../src/Root';\n\ndescribe('Test Root.js component', function() {\n  it('should rendered the view correctly', function() {\n    const component = define(Root);\n    ...\n  });\n});\n")),Object(i.b)("h2",{id:"extend-method"},"Extend method"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"import { extendMethod } from 'munster-tester';")),Object(i.b)("p",null,"This function is used to extend the functionality of a method.\nThis is useful when you want to run functions or override variable values in this method before the change detection is fired."),Object(i.b)("p",null,"Extend method accepts four parameters, the component, method, pre and post."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"component")," : the component instance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")," : string, the method name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pre")," : callback, called before the original method is called"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"post")," : callback, called after the original method is called")),Object(i.b)("p",null,"Here's an example on how to use the extendMethod function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { define, extendMethod } from 'munster-tester';\nimport Root from '../src/Root';\n\ndescribe('Test Root.js component', function() {\n  it('should rendered the view correctly', async function(done) {\n    const component = define(Root);\n    component.someValue = 'initial value';\n    extendMethod(component, 'btnClick', pre = null, function() {\n        component.someValue = 'new value';\n    });\n    extendMethod(component, 'afterChange', pre = null, function() {\n        expect(component.someValue).toEqual('new value');\n        done();\n    });\n    component.querySelector('button').click();\n  });\n});\n")),Object(i.b)("h2",{id:"typing"},"Typing"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"import { typing } from 'munster-tester';")),Object(i.b)("p",null,"This function is used to mimic the typing behavior of an input."),Object(i.b)("p",null,"This function accepts five parameters, the element, text, endCallback, perInputCallback and delay."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"element")," : HTMLElement, the input element"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")," : string, the string to be typed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endCallback")," : Function, called after the typing is done"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"perInputCallback")," : Function, called after every input"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," : number, the delay before the next input")),Object(i.b)("p",null,"Here's an example of how to use the typing function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { define, typing, extendMethod } from 'munster-tester';\nimport Root from '../src/Root';\n\ndescribe('Test Root.js component', function() {\n  it('should update model value in logic if changed in view', async function(done) {\n    const component = define(Root);\n    extendMethod(component, 'afterChange', null, function() {\n      expect(component.modelBinding).toEqual(component.modelInput.value)\n      done();\n    });\n    typing(component.modelInput, 'new value');\n  })\n});\n")),Object(i.b)("h2",{id:"action"},"Action"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"import { action } from 'munster-tester';")),Object(i.b)("p",null,"This is just to add a delay before making actions in a component."),Object(i.b)("p",null,"Here's an example on how to use the action function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { define, extendMethod, action } from 'munster-tester';\nimport Root from '../src/Root';\n\ndescribe('Test Root.js component', function() {\n  it('should rendered the view correctly', async function(done) {\n    const component = define(Root);\n    ...\n    action(function() {\n        component.querySelector('button').click();\n    });\n  });\n});\n")))}s.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);