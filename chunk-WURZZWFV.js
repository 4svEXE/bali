import{a as b,b as S}from"./chunk-HT4XQ2SR.js";import{l as v,p as f,v as l}from"./chunk-HH5MVXRE.js";import{$a as a,Eb as u,Ra as s,Sa as o,fb as m,mb as n,sb as c,tb as p,ub as d}from"./chunk-OKCL5SZC.js";function g(r,t){if(r&1&&d(0,"app-product-card",4),r&2){let e=t.$implicit;n("product",e)}}var F=class r{constructor(t,e){this.favoriteService=t;this.productService=e}favoriteProducts=[];sub;ngOnInit(){this.sub=this.favoriteService.favorites$.subscribe(t=>{this.productService.getProducts().subscribe(e=>{this.favoriteProducts=e.filter(i=>t.includes(i.id))})})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}static \u0275fac=function(e){return new(e||r)(o(l),o(S))};static \u0275cmp=a({type:r,selectors:[["app-favorites"]],decls:5,vars:1,consts:[[1,"py-10"],[1,"text-center"],[1,"container","grid-wrapper"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(e,i){e&1&&(c(0,"section",0)(1,"h1",1),u(2,"Favorites"),p(),c(3,"div",2),m(4,g,1,1,"app-product-card",3),p()()),e&2&&(s(4),n("ngForOf",i.favoriteProducts))},dependencies:[f,v,b],encapsulation:2})};export{F as FavoritesComponent};
