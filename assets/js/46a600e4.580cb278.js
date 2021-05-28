(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{192:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(192)),c={},i={unversionedId:"components/docker_pipeline",id:"version-1.2.10/components/docker_pipeline",isDocsHomePage:!1,title:"docker_pipeline",description:"Start up the pipeline (all containers) using:",source:"@site/versioned_docs/version-1.2.10/components/docker_pipeline.md",slug:"/components/docker_pipeline",permalink:"/netsage-pipeline/docs/components/docker_pipeline",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.10/components/docker_pipeline.md",version:"1.2.10"},p=[],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Start up the pipeline (all containers) using:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),Object(a.b)("p",null,'This will also restart any containers/processes that have died. "-d" runs containers in the background.'),Object(a.b)("p",null,"You can see the status of the containers and whether any have died (exited) using"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose ps\n")),Object(a.b)("p",null,"To check the logs for each of the containers, run"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs\n")),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"-f")," or, e.g., ",Object(a.b)("inlineCode",{parentName:"p"},"-f logstash")," to see new log messages as they arrive.  ",Object(a.b)("inlineCode",{parentName:"p"},"--timestamps"),", ",Object(a.b)("inlineCode",{parentName:"p"},"--tail"),",  and ",Object(a.b)("inlineCode",{parentName:"p"},"--since")," are also useful -- look up details in Docker documentation."),Object(a.b)("p",null,"To shut down the pipeline (all containers) use"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}l.isMDXComponent=!0}}]);