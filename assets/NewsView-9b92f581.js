import{_ as u,o as i,c as r,r as h,F as b,a as e,t as n,b as g,d as f,e as w,f as y,g as I,h as N,i as $,j as k,k as x,l as S,m as V,n as D,p as C,q as B,s as L,u as T,v as U,w as j,x as p,y as v,z as E,A as F,B as R,C as q,D as z,E as A,G}from"./index-674e819c.js";const M=s=>(p("data-v-c3c4c3f0"),s=s(),v(),s),O={class:"title"},H={class:"date"},J=["data-num"],K=M(()=>e("br",null,null,-1)),P=["src","alt"],Q={__name:"NewsCard",props:["cardItem"],setup(s){console.log(s.cardItem);const o=_=>new URL(Object.assign({"/src/img/1.png":f,"/src/img/2.png":w,"/src/img/3.png":y,"/src/img/4.png":I,"/src/img/Line-l.png":N,"/src/img/Line-r.png":$,"/src/img/donation-bg-m.png":k,"/src/img/donation-bg.png":x,"/src/img/home-bg.png":S,"/src/img/icon1.png":V,"/src/img/icon2.png":D,"/src/img/icon3.png":C,"/src/img/icon4.png":B,"/src/img/line-block-l.png":L,"/src/img/line-block-r.png":T,"/src/img/logo.png":U,"/src/img/news-bg.png":j})[`/src/img/${_}`],self.location).href;return(_,c)=>(i(!0),r(b,null,h(s.cardItem,(t,l)=>(i(),r("li",{key:l},[e("div",O,[e("div",H,[e("div",{class:"num","data-num":l+1},n(l+1),9,J),e("p",null,n(t.date),1)]),e("h5",null,[g(n(t.title)+" ",1),K,g(" "+n(t.title2),1)])]),e("img",{src:o(t.img),alt:t.title},null,8,P),e("p",null,n(t.content),1)]))),128))}},W=u(Q,[["__scopeId","data-v-c3c4c3f0"]]);const a=s=>(p("data-v-93df3417"),s=s(),v(),s),X={class:"news"},Y=a(()=>e("div",{class:"banner"},null,-1)),Z={class:"title"},ee=a(()=>e("h2",null,"最新消息",-1)),se=a(()=>e("br",null,null,-1)),te=a(()=>e("input",{type:"date",class:"date"},null,-1)),_e=a(()=>e("div",{class:"badge"},[e("ul",null,[e("li",null,[e("p",null,"1"),e("p",null,"分享")]),e("li",null,[e("p",null,"2"),e("p",null,"收藏")]),e("li",null,[e("p",null,"8"),e("p",null,"人數")])])],-1)),le={class:"content"},ne={class:"container"},ae={class:"newsCard"},oe={__name:"NewsView",setup(s){const d=E(),{newsData:o}=F(d),_=R(null),c=q(()=>_.value==null?o.value:o.value.filter(t=>t.title.match(_.value)||t.title2.match(_.value)));return(t,l)=>(i(),r("section",X,[Y,e("header",null,[e("div",Z,[ee,z(e("input",{type:"search",name:"search",id:"search",placeholder:"請輸入關鍵字","onUpdate:modelValue":l[0]||(l[0]=m=>_.value=m)},null,512),[[A,_.value]]),se,te]),_e]),e("div",le,[e("div",ne,[e("ul",ae,[G(W,{"card-item":c.value},null,8,["card-item"])])])])]))}},ie=u(oe,[["__scopeId","data-v-93df3417"]]);export{ie as default};
