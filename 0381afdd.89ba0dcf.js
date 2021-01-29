(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(150)),i={id:"docusaurus",title:"Documentation Guide",sidebar_label:"Documentation Guide"},c={unversionedId:"docusaurus",id:"version-1.2.7/docusaurus",isDocsHomePage:!1,title:"Documentation Guide",description:"Using Local Tools",source:"@site/versioned_docs/version-1.2.7/documentation_guide.md",slug:"/docusaurus",permalink:"/netsage-pipeline/docs/1.2.7/docusaurus",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.7/documentation_guide.md",version:"1.2.7",sidebar_label:"Documentation Guide",sidebar:"version-1.2.7/Pipeline",previous:{title:"Docker Dev Guide",permalink:"/netsage-pipeline/docs/1.2.7/devel/docker_dev_guide"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Build",id:"build",children:[]},{value:"Build the container",id:"build-the-container",children:[]},{value:"Local Development",id:"local-development-1",children:[{value:"Removing a version",id:"removing-a-version",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"using-local-tools"},"Using Local Tools"),Object(o.b)("p",null,"This project's documentation is using docusaurus to generate docs from markdown files and loaded in a react app."),Object(o.b)("p",null,"To extend the doc simply create a markdown file and reference the ID in the side bar. Please see the related documentation\nat the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"docusaurus 2")," project website."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn\n")),Object(o.b)("h2",{id:"local-development"},"Local Development"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn start\n")),Object(o.b)("p",null,"This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server."),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn build\n")),Object(o.b)("p",null,"This command generates static content into the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),Object(o.b)("h1",{id:"using-docker"},"Using Docker"),Object(o.b)("h2",{id:"build-the-container"},"Build the container"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compose build build_docs\n")),Object(o.b)("h2",{id:"local-development-1"},"Local Development"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compopse up -d docs\n")),Object(o.b)("p",null,"The docs will be visible at http://localhost:8000/netsage-pipeline/"),Object(o.b)("h1",{id:"tagging-new-release"},"Tagging New release"),Object(o.b)("p",null,"Once the documentation is stable and you don't forsee any new change, please do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn run docusaurus docs:version 1.1.0\n")),Object(o.b)("p",null,"Where 1.1.0 is the next release version.  Commit the new directories created under "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Alternatively, if you have docker setup, you may run this command and avoid installing all of the required javascript dependencies."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compose run  docs yarn run docusaurus docs:version  1.1.0\n")))),Object(o.b)("p",null,"(note if image is not built yet, please run: ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose build build_docs"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"website/versioned_docs"),Object(o.b)("li",{parentName:"ul"},"website/versioned_sidebars"),Object(o.b)("li",{parentName:"ul"},"versions.json ")),Object(o.b)("p",null,"Update the docusaurus.config.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"lastVersion: '1.2.6' \n")),Object(o.b)("p",null,"should point to the latest value."),Object(o.b)("h3",{id:"removing-a-version"},"Removing a version"),Object(o.b)("p",null,"To remove version 1.2.6 for example."),Object(o.b)("p",null,"we need to: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"update versions.json to remove the reference"),Object(o.b)("li",{parentName:"ul"},"remove the versioned_docs/version-1.2.6"),Object(o.b)("li",{parentName:"ul"},"remove versioned_sidebars/version-1.2.6-sidebars.json")))}d.isMDXComponent=!0}}]);