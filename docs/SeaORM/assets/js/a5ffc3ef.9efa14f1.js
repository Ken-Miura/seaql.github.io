"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1753],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Database & Async Runtime",p={unversionedId:"install-and-config/database-and-async-runtime",id:"install-and-config/database-and-async-runtime",title:"Database & Async Runtime",description:"First, add sea-orm to the [dependencies] section of your Cargo.toml.",source:"@site/docs/02-install-and-config/01-database-and-async-runtime.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/database-and-async-runtime",permalink:"/SeaORM/docs/next/install-and-config/database-and-async-runtime",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/02-install-and-config/01-database-and-async-runtime.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651736158,formattedLastUpdatedAt:"5/5/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/SeaORM/docs/next/introduction/tutorial"},next:{title:"Schema Management",permalink:"/SeaORM/docs/next/install-and-config/schema"}},c=[{value:"DATABASE_DRIVER",id:"database_driver",children:[],level:2},{value:"ASYNC_RUNTIME",id:"async_runtime",children:[],level:2},{value:"Extra features",id:"extra-features",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database--async-runtime"},"Database & Async Runtime"),(0,i.kt)("p",null,"First, add ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { version = "^0", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }\n')),(0,i.kt)("p",null,"You must choose a ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_DRIVER")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"ASYNC_RUNTIME"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"macros")," is needed if you use SeaORM's generated entities (most likely)."),(0,i.kt)("h2",{id:"database_driver"},"DATABASE_DRIVER"),(0,i.kt)("p",null,"You can choose one or more from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlx-mysql")," - SQLx MySQL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlx-postgres")," - SQLx PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlx-sqlite")," - SQLx SQLite")),(0,i.kt)("p",null,"See also: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/crate/sqlx/latest/features"},"SQLx docs"),"."),(0,i.kt)("h2",{id:"async_runtime"},"ASYNC_RUNTIME"),(0,i.kt)("p",null,"You have to choose one from:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runtime-actix-native-tls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-async-std-native-tls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-tokio-native-tls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-actix-rustls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-async-std-rustls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-tokio-rustls")),(0,i.kt)("p",null,"Basically, they are in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime-ASYNC_RUNTIME-TLS_LIB"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ASYNC_RUNTIME")," can be ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/actix"},(0,i.kt)("inlineCode",{parentName:"a"},"actix")),", ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/async-std"},(0,i.kt)("inlineCode",{parentName:"a"},"async-std")),", or ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/tokio"},(0,i.kt)("inlineCode",{parentName:"a"},"tokio"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TLS_LIB")," can either be ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/native-tls"},(0,i.kt)("inlineCode",{parentName:"a"},"native-tls"))," or ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/rustls"},(0,i.kt)("inlineCode",{parentName:"a"},"rustls")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose the ASYNC_RUNTIME corresponding to your Rust web framework:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"ASYNC_RUNTIME"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Web Framework"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"actix")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://actix.rs/"},(0,i.kt)("inlineCode",{parentName:"a"},"Actix")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"async-std")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://docs.rs/tide"},(0,i.kt)("inlineCode",{parentName:"a"},"Tide")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"tokio")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://rocket.rs/"},(0,i.kt)("inlineCode",{parentName:"a"},"Rocket")))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"native-tls")," uses the platform's native security facilities, while ",(0,i.kt)("inlineCode",{parentName:"li"},"rustls")," is a pure Rust implementation.")),(0,i.kt)("h2",{id:"extra-features"},"Extra features"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"debug-print")," - print every SQL statement to logger"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mock")," - mock interface for unit testing"))}m.isMDXComponent=!0}}]);