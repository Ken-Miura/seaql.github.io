"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[519],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="What is an ORM",u={unversionedId:"introduction/orm",id:"version-0.4.x/introduction/orm",title:"What is an ORM",description:"An Object Relational Mapper (ORM) is a programming library to help you interact with a relational database from an Object-Oriented Programming (OOP) language.",source:"@site/versioned_docs/version-0.4.x/01-introduction/01-orm.md",sourceDirName:"01-introduction",slug:"/introduction/orm",permalink:"/SeaORM/docs/0.4.x/introduction/orm",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/01-introduction/01-orm.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651736158,formattedLastUpdatedAt:"5/5/2022",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Index",permalink:"/SeaORM/docs/0.4.x/index"},next:{title:"Async Programming",permalink:"/SeaORM/docs/0.4.x/introduction/async"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-an-orm"},"What is an ORM"),(0,a.kt)("p",null,"An Object Relational Mapper (ORM) is a programming library to help you interact with a relational database from an Object-Oriented Programming (OOP) language."),(0,a.kt)("p",null,"Tables and columns in a database are mapped to objects and attributes, while additional methods allow you to load and store data from and to the database."),(0,a.kt)("p",null,"Services built in Rust are lightweight (small binary size, low memory usage), safe (with compile-time guarantee), correct (if you unit test it well), and fast (low runtime overhead from compiler optimization)."),(0,a.kt)("p",null,"Due to Rust being a static, strongly typed, compiled, thread-safe, non-garbage-collected, and unconventional object-oriented language, working with an ORM in Rust is a bit different from other scripting languages you are already familiar with."),(0,a.kt)("p",null,"SeaORM tries to help you in reaping the above benefits while avoiding the hiccups when programming in Rust."),(0,a.kt)("p",null,"Nevertheless, let's get started."))}d.isMDXComponent=!0}}]);