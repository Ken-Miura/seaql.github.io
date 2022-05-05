"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5053],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"2021-10-01-whats-new-in-0.2.4",title:"What's new in SeaORM 0.2.4",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},s=void 0,u={permalink:"/SeaORM/blog/2021-10-01-whats-new-in-0.2.4",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-10-01-whats-new-in-0.2.4.md",source:"@site/blog/2021-10-01-whats-new-in-0.2.4.md",title:"What's new in SeaORM 0.2.4",description:"\ud83c\udf89 We are pleased to release SeaORM 0.2.4 today! Some feature highlights:",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:1.76,truncated:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],prevItem:{title:"What's new in SeaORM 0.3.0",permalink:"/SeaORM/blog/2021-10-15-whats-new-in-0.3.0"},nextItem:{title:"Introducing SeaORM",permalink:"/SeaORM/blog/2021-09-20-introducing-sea-orm"}},c={authorsImageUrls:[void 0]},m=[{value:"Better ergonomic when working with custom select list",id:"better-ergonomic-when-working-with-custom-select-list",children:[],level:2},{value:"Rename column name &amp; column enum variant",id:"rename-column-name--column-enum-variant",children:[],level:2},{value:"<code>not</code> on a condition tree",id:"not-on-a-condition-tree",children:[],level:2},{value:"Community",id:"community",children:[],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.2.4"},(0,o.kt)("inlineCode",{parentName:"a"},"0.2.4"))," today! Some feature highlights:"),(0,o.kt)("h2",{id:"better-ergonomic-when-working-with-custom-select-list"},"Better ergonomic when working with custom select list"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/208"},"#208"),"] Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.2.4/sea_orm/entity/prelude/struct.Select.html#method.into_values"},"Select::into_values")," to quickly select a custom column list and destruct as tuple."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\nenum QueryAs {\n    CakeName,\n    NumOfCakes,\n}\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column_as(cake::Column::Name, QueryAs::CakeName)\n    .column_as(cake::Column::Id.count(), QueryAs::NumOfCakes)\n    .group_by(cake::Column::Name)\n    .into_values::<_, QueryAs>()\n    .all(&db)\n    .await?;\n\nassert_eq!(\n    res,\n    vec![("Chocolate Forest".to_owned(), 2i64)]\n);\n')),(0,o.kt)("p",null,"Contributed by:"),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MuhannadAlrusayni"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/14802524?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Muhannad")))),(0,o.kt)("h2",{id:"rename-column-name--column-enum-variant"},"Rename column name & column enum variant"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/209"},"#209"),"] Rename the column name and enum variant of a model attribute, especially helpful when the column name is a Rust keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'mod my_entity {\n    use sea_orm::entity::prelude::*;\n\n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(table_name = "my_entity")]\n    pub struct Model {\n        #[sea_orm(primary_key, enum_name = "IdentityColumn", column_name = "id")]\n        pub id: i32,\n        #[sea_orm(column_name = "type")]\n        pub type_: String,\n    }\n\n    //...\n}\n\nassert_eq!(my_entity::Column::IdentityColumn.to_string().as_str(), "id");\nassert_eq!(my_entity::Column::Type.to_string().as_str(), "type");\n')),(0,o.kt)("p",null,"Contributed by:"),(0,o.kt)("div",{class:"container"},(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Billy Chan")))))),(0,o.kt)("h2",{id:"not-on-a-condition-tree"},(0,o.kt)("inlineCode",{parentName:"h2"},"not")," on a condition tree"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/145"},"#145"),"] Build a complex condition tree with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.16.5/sea_query/query/struct.Condition.html"},"Condition"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, sea_query::Expr, DbBackend};\n\nassert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::all()\n                .add(\n                    Condition::all()\n                        .not()\n                        .add(Expr::val(1).eq(1))\n                        .add(Expr::val(2).eq(2))\n                )\n                .add(\n                    Condition::any()\n                        .add(Expr::val(3).eq(3))\n                        .add(Expr::val(4).eq(4))\n                )\n        )\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE (NOT (1 = 1 AND 2 = 2)) AND (3 = 3 OR 4 = 4)"#\n);\n')),(0,o.kt)("p",null,"Contributed by:"),(0,o.kt)("div",{class:"container"},(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nitnelave"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/796633?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"nitnelave")))),(0,o.kt)("div",{class:"col col--3 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/6xzo"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/36180574?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"6xzo")))))),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,o.kt)("p",null,"Here is the roadmap for SeaORM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/3"},(0,o.kt)("inlineCode",{parentName:"a"},"0.3.x")),"."))}d.isMDXComponent=!0}}]);