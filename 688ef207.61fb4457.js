(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return m}));var o=t(2),r=t(6),a=(t(0),t(86)),l={id:"global.md",title:"Global components",sidebar_label:"Global components",slug:"/global"},i={unversionedId:"global.md",id:"global.md",isDocsHomePage:!1,title:"Global components",description:"Component registered in Global module can be accessible through the entire application.",source:"@site/docs\\global.md",slug:"/global",permalink:"/munster-docs/docs/global",editUrl:"https://github.com/mfpjayb/munster-docs/blob/master/docs/global.md",version:"current",sidebar_label:"Global components",sidebar:"someSidebar",previous:{title:"Quick start",permalink:"/munster-docs/docs/quick-start"},next:{title:"Component",permalink:"/munster-docs/docs/component"}},p=[{value:"Root component",id:"root-component",children:[]},{value:"Register a component",id:"register-a-component",children:[]},{value:"Mount to dom tree",id:"mount-to-dom-tree",children:[]},{value:"Component prefix",id:"component-prefix",children:[]},{value:"Use a plugin",id:"use-a-plugin",children:[]}],c={rightToc:p};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Component registered in ",Object(a.b)("inlineCode",{parentName:"p"},"Global")," module can be accessible through the entire application.\nComponents can also be defined using ",Object(a.b)("inlineCode",{parentName:"p"},"customElement.define")," function but they do not have access to the plugins registered in the global module."),Object(a.b)("h2",{id:"root-component"},"Root component"),Object(a.b)("p",null,"The root component of munster starter app and application generated by munster cli by default is found in ",Object(a.b)("inlineCode",{parentName:"p"},"src/Root.js"),".\nIt is registered in the global module and invoked using the ",Object(a.b)("inlineCode",{parentName:"p"},"<app-root></app-root>")," tag in the ",Object(a.b)("inlineCode",{parentName:"p"},"index.html"),"."),Object(a.b)("h2",{id:"register-a-component"},"Register a component"),Object(a.b)("p",null,"Components can be registered in the global module by passing it to the components array."),Object(a.b)("p",null,"Here's an example on how to register a component in the global instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Global } from 'munster-modules';\nimport SampleComponent from './SampleComponent';\n\nnew Global({\n    components: [\n        SampleComponent\n    ]\n});\n")),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"SampleComponent")," is registered on the global module."),Object(a.b)("h2",{id:"mount-to-dom-tree"},"Mount to dom tree"),Object(a.b)("p",null,"All component without the static property ",Object(a.b)("inlineCode",{parentName:"p"},"$selector")," defined and has been registered in the global module will have an ",Object(a.b)("inlineCode",{parentName:"p"},"app-")," prefix on it's tag name."),Object(a.b)("p",null,"Here's an example on how to mount the ",Object(a.b)("inlineCode",{parentName:"p"},"SampleComponent")," registered in the global module found in the sample code above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),"<app-sample-component></app-sample-component>\n")),Object(a.b)("h2",{id:"component-prefix"},"Component prefix"),Object(a.b)("p",null,"There is also an option to set a custom prefix to registered components in global module."),Object(a.b)("p",null,"Here's an example on how to set custom prefix in global module:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Global } from 'munster-modules';\nimport Root from './Root';\n\nnew Global({\n    prefix: 'custom',\n    components: [\n        Root\n    ]\n});\n")),Object(a.b)("p",null,"Now we can display the ",Object(a.b)("inlineCode",{parentName:"p"},"Root")," component using ",Object(a.b)("inlineCode",{parentName:"p"},"<custom-root></custom-root>")," tag."),Object(a.b)("h2",{id:"use-a-plugin"},"Use a plugin"),Object(a.b)("p",null,"Plugins can be registered in the global module by passing the plugin to the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," array."),Object(a.b)("p",null,"Here's an example on how to register a plugin:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Global } from 'munster-modules';\nimport Store from 'munster-store';\n\nnew Global({\n    plugins: [\n        Store\n    ]\n});\n")),Object(a.b)("p",null,"In the example above, we included the ",Object(a.b)("inlineCode",{parentName:"p"},"Store")," plugin to the global module."))}m.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=m(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=m(t),u=o,d=b["".concat(l,".").concat(u)]||b[u]||s[u]||a;return t?r.a.createElement(d,i(i({ref:n},c),{},{components:t})):r.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);