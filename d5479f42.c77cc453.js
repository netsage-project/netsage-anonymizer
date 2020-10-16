(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(97)),a={id:"choose_install",title:"Choosing Install",sidebar_label:"Choose Install"},l={unversionedId:"deploy/choose_install",id:"version-1.2.6/deploy/choose_install",isDocsHomePage:!1,title:"Choosing Install",description:"BareMetal",source:"@site/versioned_docs/version-1.2.6/deploy/choosing.md",slug:"/deploy/choose_install",permalink:"/netsage-pipeline/docs/deploy/choose_install",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.6/deploy/choosing.md",version:"1.2.6",sidebar_label:"Choose Install",sidebar:"version-1.2.6/Pipeline",previous:{title:"Docker Guide",permalink:"/netsage-pipeline/docs/devel/docker"},next:{title:"NetSage Flow Processing Pipeline Install Guide",permalink:"/netsage-pipeline/docs/deploy/install"}},c=[{value:"BareMetal",id:"baremetal",children:[]},{value:"Dockerized Version",id:"dockerized-version",children:[]},{value:"Choose your adventure",id:"choose-your-adventure",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"baremetal"},"BareMetal"),Object(i.b)("p",null,"The baremetal installation Guide will walk you through installing the pipeline using your own infrastructure and requires you to maintain all the components involved."),Object(i.b)("p",null,"It will likely be a bit better when it comes to performance, but also has more complexity involved in configuring and setting up."),Object(i.b)("p",null,"If you are the ultimate consumer of the data then setting up a baremetal version might be worth doing. Or at least the final rabbitMQ that will be holding the data since it'll like need to handle a large dataset."),Object(i.b)("h2",{id:"dockerized-version"},"Dockerized Version"),Object(i.b)("p",null,"The docker version makes it trivial to bring up the pipeline for both a developer and consumer. All the work is mostly already done for you and it's should be a simple matter of configuring a few env settings and everything should 'just' work."),Object(i.b)("p",null,"If you are simply using the pipeline to deliver the anonymized network stats for someone else's consumption, then using the docker pipeline would be preferred."),Object(i.b)("h2",{id:"choose-your-adventure"},"Choose your adventure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"docker_install"}),"Docker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"install"}),"BareMetal"))))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);