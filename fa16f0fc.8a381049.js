(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(131)),l={id:"dev_dataset",title:"Pipeline Replay Dataset",sidebar_label:"Replay Dataset"},i={unversionedId:"devel/dev_dataset",id:"devel/dev_dataset",isDocsHomePage:!1,title:"Pipeline Replay Dataset",description:"The Netsage Pipeline processes network data.  Though there are some components and patterns we can use to test",source:"@site/docs/devel/pipeline_dataset.md",slug:"/devel/dev_dataset",permalink:"/netsage-pipeline/docs/next/devel/dev_dataset",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/devel/pipeline_dataset.md",version:"current",sidebar_label:"Replay Dataset",sidebar:"Pipeline",previous:{title:"Docker Troubleshooting",permalink:"/netsage-pipeline/docs/next/deploy/docker_troubleshoot"},next:{title:"Docker Dev Guide",permalink:"/netsage-pipeline/docs/next/devel/docker_dev_guide"}},c=[{value:"Netflow",id:"netflow",children:[]},{value:"Sflow",id:"sflow",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Netsage Pipeline processes network data.  Though there are some components and patterns we can use to test\nthe behavior using things like the Ruby unit ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-pipeline/tree/master/conf-logstash/ruby/spec"}),"tests")," in logstash, and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/logstash/current/plugins-inputs-generator.html"}),"generator")," pligin, but the best\ntest is to replay network data and inspect the output in the grafana dashboard. "),Object(a.b)("p",null,"Two sample data set are provided for the two types of collectors we have (Netflow and Sflow).  The network data and ips have been anonymized and should have no identifying information. "),Object(a.b)("p",null,"You can download the files from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://drive.google.com/drive/folders/19fzY5EVoKwtYUaiBJq5OxAR82yDY0taG"}),"here"),"."),Object(a.b)("p",null,"Please take note of which ports the collectors are listing on.  Check your docker-compose.override.yml file. If you are using default ports, they should match this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-pipeline/blob/master/docker-compose.override_example.yml"}),"example"),". "),Object(a.b)("p",null,"Currently the default ports are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"9998/udp for sflow "),Object(a.b)("li",{parentName:"ul"},"9999/udp for netflow")),Object(a.b)("p",null,"Naturally the collectors have to be running in order for any of this to be usable.  You can read more on how to get them running in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/netsage-pipeline/docs/next/deploy/docker_install_simple#running-the-collectors"}),"Docker Simple Deployment Guide"),"  "),Object(a.b)("p",null,"In order to replay the data, use the following commands for netflow and sflow respectively:"),Object(a.b)("h3",{id:"netflow"},"Netflow"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"nfreplay -H 127.0.0.1 -p 9999  -r nfcapd-ilight-anon-20200114 -v 9 -d 1000\n")),Object(a.b)("h3",{id:"sflow"},"Sflow"),Object(a.b)("p",null,"Coming soon.  nfreplay will not work with sflow data type."))}s.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);