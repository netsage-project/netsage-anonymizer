(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(131)),i={id:"docusaurus",title:"Documentation Guide",sidebar_label:"Documentation Guide"},c={unversionedId:"docusaurus",id:"version-1.2.6/docusaurus",isDocsHomePage:!1,title:"Documentation Guide",description:"This project's documentation is using docusaurus to generate docs from markdown files and loaded in a react app.",source:"@site/versioned_docs/version-1.2.6/DOCUMENTATION.md",slug:"/docusaurus",permalink:"/netsage-pipeline/docs/1.2.6/docusaurus",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.6/DOCUMENTATION.md",version:"1.2.6",sidebar_label:"Documentation Guide",sidebar:"version-1.2.6/Pipeline",previous:{title:"Docker Installation Guide",permalink:"/netsage-pipeline/docs/1.2.6/deploy/docker_install"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Build",id:"build",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project's documentation is using docusaurus to generate docs from markdown files and loaded in a react app.  "),Object(a.b)("p",null,"To extend the doc simply create a markdown file and reference the ID in the side bar.  Please see the related documentation\nat the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"docusaurus 2")," project website."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn\n")),Object(a.b)("h3",{id:"local-development"},"Local Development"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn start\n")),Object(a.b)("p",null,"This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server."),Object(a.b)("h3",{id:"build"},"Build"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn build\n")),Object(a.b)("p",null,"This command generates static content into the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."))}s.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);