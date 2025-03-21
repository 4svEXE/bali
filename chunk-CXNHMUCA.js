import{A as R,m as D,o as F,p as b,r as k,t as B,v as N,y as O}from"./chunk-ZDZKK5OD.js";import{a as A,b as U}from"./chunk-HT4XQ2SR.js";import{l as L,m as T,p as f}from"./chunk-HH5MVXRE.js";import{$a as S,Eb as d,Fb as I,Hb as l,Ib as c,Jb as p,Ra as u,Sa as P,W as M,a as y,ab as E,b as h,d as w,fb as s,mb as g,sb as r,tb as i,ub as v,yb as W,zb as _}from"./chunk-OKCL5SZC.js";function V(o,n){o&1&&(r(0,"div"),d(1,"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."),i())}function H(o,n){if(o&1&&(r(0,"div",13),d(1),i()),o&2){let a=_();u(),I(a.errorMessage)}}function x(o,n){if(o&1&&v(0,"app-product-card",16),o&2){let a=n.$implicit;g("product",a)}}function z(o,n){if(o&1&&(r(0,"div",14),s(1,x,1,1,"app-product-card",15),i()),o&2){let a=_();u(),g("ngForOf",a.products)}}var C=class o{constructor(n){this.productService=n}products=[];isLoading=!0;errorMessage="";newProduct={name:"",description:"",category:"OTHER",price:0,imageUrl:"",stock:0};ngOnInit(){this.loadProducts()}loadProducts(){this.isLoading=!0,this.productService.getProducts().subscribe({next:n=>{this.products=n,this.isLoading=!1},error:n=>{this.errorMessage="\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432",this.isLoading=!1,console.error(n)}})}addProduct(){return w(this,null,function*(){if(!this.newProduct.name||!this.newProduct.price||!this.newProduct.imageUrl||!this.newProduct.category){this.errorMessage="\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0432\u0441\u0456 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u043E\u0432\u0456 \u043F\u043E\u043B\u044F!";return}try{yield this.productService.addProduct(h(y({},this.newProduct),{rating:0})),this.newProduct={name:"",description:"",category:"OTHER",price:0,imageUrl:"",stock:0},this.loadProducts()}catch(n){this.errorMessage="\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0434\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",console.error(n)}})}static \u0275fac=function(a){return new(a||o)(P(U))};static \u0275cmp=S({type:o,selectors:[["app-catalog"]],decls:19,vars:9,consts:[[1,"catalog"],[4,"ngIf"],["class","error",4,"ngIf"],[1,"product-form"],["type","text","placeholder","\u041D\u0430\u0437\u0432\u0430","required","",3,"ngModelChange","ngModel"],["type","text","placeholder","\u041E\u043F\u0438\u0441",3,"ngModelChange","ngModel"],["type","text","placeholder","\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F","required","",3,"ngModelChange","ngModel"],["type","number","placeholder","\u0426\u0456\u043D\u0430","required","",3,"ngModelChange","ngModel"],["type","number","placeholder","\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0456","required","",3,"ngModelChange","ngModel"],["type","text","placeholder","URL \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F","required","",3,"ngModelChange","ngModel"],[3,"click"],["class","catalog__grid",4,"ngIf"],["routerLink","/cart"],[1,"error"],[1,"catalog__grid"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"h2"),d(2,"\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u0456\u0432"),i(),s(3,V,2,0,"div",1)(4,H,2,1,"div",2),r(5,"div",3)(6,"h3"),d(7,"\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"),i(),r(8,"input",4),p("ngModelChange",function(t){return c(e.newProduct.name,t)||(e.newProduct.name=t),t}),i(),r(9,"input",5),p("ngModelChange",function(t){return c(e.newProduct.description,t)||(e.newProduct.description=t),t}),i(),r(10,"input",6),p("ngModelChange",function(t){return c(e.newProduct.category,t)||(e.newProduct.category=t),t}),i(),r(11,"input",7),p("ngModelChange",function(t){return c(e.newProduct.price,t)||(e.newProduct.price=t),t}),i(),r(12,"input",8),p("ngModelChange",function(t){return c(e.newProduct.stock,t)||(e.newProduct.stock=t),t}),i(),r(13,"input",9),p("ngModelChange",function(t){return c(e.newProduct.imageUrl,t)||(e.newProduct.imageUrl=t),t}),i(),r(14,"button",10),W("click",function(){return e.addProduct()}),d(15,"\u0414\u043E\u0434\u0430\u0442\u0438"),i()(),s(16,z,2,1,"div",11),r(17,"button",12),d(18,"cart"),i()()),a&2&&(u(3),g("ngIf",e.isLoading),u(),g("ngIf",e.errorMessage),u(4),l("ngModel",e.newProduct.name),u(),l("ngModel",e.newProduct.description),u(),l("ngModel",e.newProduct.category),u(),l("ngModel",e.newProduct.price),u(),l("ngModel",e.newProduct.stock),u(),l("ngModel",e.newProduct.imageUrl),u(3),g("ngIf",!e.isLoading&&!e.errorMessage))},dependencies:[f,L,T,R,b,N,k,O,B,A,D],encapsulation:2})};var G=[{path:"",component:C}],q=class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=E({type:o});static \u0275inj=M({imports:[f,F.forChild(G)]})};export{q as CatalogModule};
