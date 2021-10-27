var X=Object.defineProperty,V=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))Y.call(t,n)&&w(e,n,t[n]);if(P)for(var n of P(t))B.call(t,n)&&w(e,n,t[n]);return e},S=(e,t)=>V(e,W(t));import{j as i,a as o,r as d,F as G,X as C,T as I,R as k,L as b,Y as z,b as J,c as Q,d as _,e as $,C as E,f as Z,g as ee}from"./vendor.f0c33521.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};te();const g=e=>"$"+e,T=e=>{const t=e.toString();if(t.length<=3)return t;const n=["","K","M","B","T"],s=Math.floor(e.toString().length/3),r=Math.floor(e.toString().length%3)===0?s-1:s,a=Math.floor(e)/Math.pow(1e3,r),c=e.toString().length%3==0?s-1:s;return a.toFixed(2)+n[c]};const ne=({stats:{open:e,high:t,low:n,previousClose:s,week52High:r,week52Low:a,marketCap:c,peRatio:l,dividendYield:u,incomeNetPerWabsoSplitAdjusted:m,volume:h,avgTotalVolume:f}})=>i("div",{className:"stats",children:[o("h2",{className:"stats__title",children:"Key Statistics"}),i("div",{className:"stats-container",children:[i("ul",{className:"stats__list",children:[i("li",{children:["Open ",o("span",{children:e?g(e):"-"})]}),i("li",{children:["High ",o("span",{children:t?g(t):"-"})]}),i("li",{children:["Low ",o("span",{children:n?g(n):"-"})]}),i("li",{children:["Previous Close ",o("span",{children:g(s)})]})]}),i("ul",{className:"stats__list middle-section",children:[i("li",{children:["Day Range"," ",o("span",{children:t?g(`${t} - ${n}`):"-"})]}),i("li",{children:["52 Week Range"," ",o("span",{children:g(`${r} - ${a}`)})]}),i("li",{children:["Market Cap ",o("span",{children:T(c)})]}),i("li",{children:["P/E Ratio ",o("span",{children:l})]})]}),i("ul",{className:"stats__list",children:[i("li",{children:["Dividend Yield ",o("span",{children:(u==null?void 0:u.toFixed(2))+"%"})]}),i("li",{children:["Earnings Per Share"," ",o("span",{children:g(m==null?void 0:m.toFixed(2))})]}),i("li",{children:["Volume ",o("span",{children:h!=null?h:"-"})]}),i("li",{children:["Total Avg. Volume ",o("span",{children:T(f)})]})]})]})]}),R="https://sandbox.iexapis.com/stable/";async function se(e){const t=`${R}stock/${e}/quote?token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512`,n=`${R}time-series/FUNDAMENTAL_VALUATIONS/${e}?token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512`;try{const s=await fetch(t),r=await fetch(n),a=await s.json(),c=await r.json();return p(p({},a),c[0])}catch(s){console.log("Error: ",s)}}const F=d.exports.createContext("AAPL"),v=()=>d.exports.useContext(F),re=({children:e})=>{const[t,n]=d.exports.useState("AAPL");return o(F.Provider,{value:{symbol:t,setSymbol:n},children:e})},oe=()=>{const[e,t]=d.exports.useState({}),{symbol:n}=v();return d.exports.useEffect(()=>{se(n).then(s=>t(s)).catch(s=>console.error(s))},[n]),o(G,{children:Object.keys(e).length===0?"Loading...":o(ne,{stats:e})})},y={accentPrimary:"#aaabd1",accentBeAware2:"#ffc57f",coreSecondary2:"#f1f2f2",coreSecondary3:"#eaebeb",daySeparator:"#7fb3ff",keys:"#7f7f7f"},ae=({x:e,dx:t,y:n,dy:s,style:r,payload:a})=>o(I,{x:e+t,y:n+s,fontSize:16,style:r,children:a.value}),M=({data:e,daySize:t,style:n,isHidden:s})=>{const r=new Set(e.map(c=>c.date)),a=Math.floor(e.length/[...r].length);return o(C,{xAxisId:"top",type:"category",dataKey:"date",tick:o(ae,{}),stroke:y.daySeparator,tickLine:!s,interval:a-1,allowDuplicatedCategory:!0,orientation:"top",style:n,axisLine:!1,dx:t/2-70,dy:-10,margin:{bottom:50}})},ce=({data:e,axisProps:t,min:n,max:s})=>o("div",{className:"static-y-axis",children:o(k,{height:"100%",width:61,children:i(b,{data:e,margin:{bottom:40},children:[A({axisProps:t,min:n,max:s}),M({data:e,style:t.style,isHidden:!0})]})})});function A({axisProps:e,min:t,max:n,hide:s}){const{tickSize:r,tickMargin:a,tickLine:c,stroke:l,strokeWidth:u,style:m}=e;return o(z,{type:"number",dataKey:"average",domain:[t,n],tickSize:r,tickCount:5,tickMargin:a,tickLine:c,stroke:l,strokeWidth:u,style:m,hide:s})}const O="https://sandbox.iexapis.com/stable/",D="token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512",ie=async e=>(await fetch(`${O}/stock/${e}/intraday-prices?${D}&chartInterval=10`)).json(),le=async e=>(await fetch(`${O}/stock/${e}/chart/5dm?${D}`)).json(),U=e=>e.filter(t=>t.average!==null),de=()=>{const[e,t]=d.exports.useState(null),[n,s]=d.exports.useState({min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY}),{symbol:r}=v();return d.exports.useEffect(()=>{le(r).then(a=>{const c=U(a),l=c.map(f=>f.average),u=Math.floor(Math.min(...l)),m=Math.floor(Math.max(...l)+1);s({min:u,max:m}),c.push(S(p({},c[c.length-1]),{minute:"16:00"}));const h=c.map((f,x)=>S(p({},f),{minute:x.toString()+" "+f.minute}));t(h)}).catch(a=>console.error("Error retrieving historical prices: "+a))},[r]),[e,n]},ue=()=>{const[e,t]=d.exports.useState(null),[n,s]=d.exports.useState({min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY}),{symbol:r}=v();return d.exports.useEffect(()=>{ie(r).then(a=>{const c=U(a),l=c.map(h=>h.average),u=Math.floor(Math.min(...l)),m=Math.floor(Math.max(...l)+1);s({min:u,max:m}),t(c)}).catch(a=>console.error("Error retrieving intraday prices: "+a))},[r]),[e,n]},me=()=>{const e=d.exports.useRef(null);let t={left:0,x:0};const n=a=>{t={left:e.current.scrollLeft,x:a.clientX},document.addEventListener("mousemove",s),document.addEventListener("mouseup",r)},s=a=>{const c=a.clientX-t.x;e.current.scrollLeft=t.left-c},r=a=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",r)};return[e,n]},K=e=>{const t=he(e);if(typeof t!="string"||!t.match(/(\d?\d:\d\d){1}/))throw new Error("cleanTimeString must be a string in the format m:hh or mm:hh");{const n=Number.parseInt(t.slice(0,-2));if(n===12)return t+" PM";const s=n>12?"PM":"AM",r=t.slice(-2);return`${n%12}:${r} ${s}`}},he=e=>{if(typeof e=="string"){const t=e.indexOf(" ");return e.slice(t+1)}return e},fe=({x:e,y:t,payload:n,style:s,index:r})=>{let a=K(n.value);a==="4:00 PM"&&(a="");let c=a==="9:30 AM"?"start":"middle";return o(I,{x:e,y:t+10,textAnchor:c,fill:y.keys,style:s,fontSize:12,children:a})};function q({axisProps:e,interval:t}){const{tickSize:n,tickMargin:s,tickLine:r,stroke:a,strokeWidth:c,style:l}=e;return o(C,{type:"category",dataKey:"minute",tick:o(fe,{}),axisLine:!1,interval:t-1,tickSize:n,tickMargin:s,tickLine:r,stroke:a,strokeWidth:c,style:l,allowDuplicatedCategory:!1})}const ye=e=>e.slice(-2),j=e=>{const t=new Array(Math.ceil(e.data.length/e.interval)).fill("");return t.map((n,s)=>{const r=s*e.interval,c=Number.parseInt(ye(e.data[r].date))%2==0?0:.1,l=e.data[r].minute,u=s===t.length-1?e.data[e.data.length-1]:e.data[r+e.interval].minute;return o(J,{x1:l,x2:u,y1:e.min,y2:e.max,fill:s%2!=0?`rgba(0, 0, 0, ${.05+c})`:`rgba(0, 0, 0, ${0})`},s)})},H=({style:e})=>o(Q,{isAnimationActive:!1,itemStyle:e,labelStyle:e,content:o(pe,{})});function pe({label:e,payload:t,active:n}){if(n&&t&&t.length){const s=K(e);return i("div",{className:"custom-tooltip",children:[o("div",{className:"custom-tooltip__label",children:s}),i("div",{className:"custom-tooltip__content",children:["Price: "," ",o("span",{children:+t[0].payload.average.toFixed(2)})]})]})}return null}const ge=({data:e})=>{const t=new Set(e.map(s=>s.date)),n=Math.floor(e.length/[...t].length);return[...t].map((s,r)=>o(_,{x:e[r*n].minute,stroke:y.daySeparator},s))},ve=({axisProps:e,data:t,interval:n,min:s,max:r,daySize:a})=>{const c=o($,{isAnimationActive:!1,type:"linear",dataKey:"average",dot:!1,stroke:y.accentPrimary,strokeWidth:2}),l=o(E,{stroke:"rgba(0, 0, 0, 0.05)",strokeWidth:1});return o(k,{height:"100%",width:a*5,children:i(b,{isAnimationActive:!1,data:t,margin:{right:0,bottom:10},children:[j({data:t,interval:n,min:s,max:r}),l,c,q({axisProps:e,interval:n}),A({axisProps:e,min:s,max:r,hide:!0}),M({data:t,daySize:a,style:e.style,isHidden:!1}),H({style:e.style}),ge({data:t})]})})},xe=e=>{const t=e.indexOf(" ");return e.slice(t+1)},Se=({axisProps:e,previousDayData:t,currentDayData:n,interval:s,min:r,max:a,daySize:c})=>{const l=t.map(f=>S(p({},f),{minute:xe(f.minute)})),u=o($,{isAnimationActive:!1,dataKey:"average",name:"Average",dot:!1,stroke:y.accentPrimary,data:n,strokeWidth:2}),m=o($,{isAnimationActive:!1,type:"linear",dataKey:"average",dot:!1,stroke:y.accentPrimary,data:l,strokeWidth:2,hide:!0}),h=o(E,{stroke:"rgba(0, 0, 0, 0.05)",strokeWidth:1});return o(k,{height:"100%",width:c,children:i(b,{data:n,margin:{right:0,bottom:10},padding:{left:10},children:[j({data:l,interval:s,min:r,max:a}),h,m,u,q({axisProps:e,interval:s}),A({axisProps:e,min:r,max:a,hide:!0}),M({data:n,daySize:c,style:e.style}),o(_,{y:t[t.length-1].average,strokeDasharray:"8 5",strokeWidth:1,stroke:y.accentPrimary}),o(_,{x:"09:30",strokeWidth:2,stroke:y.daySeparator}),H({style:e.style})]})})},L={tickSize:12,tickMargin:10,tickLine:{stroke:y.coreSecondary3},stroke:y.coreSecondary3,strokeWidth:.5,style:{fontFamily:"Roboto",userSelect:"none",fill:y.keys}},Ne=()=>{const[e,t]=de(),[n,s]=ue(),[r,a]=me(),c=3,l=1200,u=Math.min(s.min,t.min),m=Math.max(s.max,t.max);let h=!1,f=[];return n&&e&&(f=ke(e),h=n[0].date!==f[0].date),o("div",{className:"chart__container",ref:r,onMouseDown:a,children:i("div",{className:"chart__inner",children:[e||h?o(ce,{data:e,interval:c,min:u,max:m,axisProps:L}):null,e?o(ve,{daySize:l,axisProps:L,data:e,interval:c,min:u,max:m}):null,h?o(Se,{daySize:l,axisProps:L,previousDayData:f,currentDayData:n,interval:c,min:u,max:m}):null]})})},ke=e=>{const t=e[e.length-1].date;return e.filter(n=>n.date===t)};const be="https://sandbox.iexapis.com/stable/",_e="token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512",$e=async e=>{try{return(await fetch(`${be}/stock/${e}/news/last/3?${_e}`)).json()}catch(t){console.error(t)}},N=(e,t)=>{const n=Math.floor(e/t),s=e%t;return[n,s]},Me=e=>{const t=e-Date.now(),[n,s]=N(t,3154e7);if(n>0)return"Over a year";const[r,a]=N(s,2628e6);if(r>0)return r>1?"1 month":`${r} months`;const[c,l]=N(a,864e5);if(c>0)return c>1?"1 day":`${c} days`;const[u,m]=N(l,36e5);if(u>0)return u>1?"1 hour":`${u} hours`;const[h,f]=N(m,6e4);if(h>0)return h>1?"1 minute":`${h} minutes`;const x=f/1e3;return x>0?x>1?"1 second":`${x} seconds`:"Error"};function Ae(){const[e,t]=d.exports.useState(null),{symbol:n}=v();return d.exports.useEffect(()=>{$e(n).then(s=>{t(s)})},[n]),e?i("div",{className:"newsfeed__background",children:[o("h2",{className:"latest-news-text",children:"Latest News"}),e.map(s=>o(Le,{link:s.url,content:s.headline,timeSincePublication:s.datetime,source:s.source},s.headline))]}):null}function Le({link:e,content:t,timeSincePublication:n,source:s}){const r=Me(n);return i("div",{className:"article",children:[o("a",{href:e,children:o("h3",{className:"article__content",children:t})}),o("p",{className:"article__time-source",children:`${r} ago - ${s}`})]})}const Pe="https://sandbox.iexapis.com/stable",we=async e=>{const t=`${Pe}/stock/${e}/company?token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512`;return(await fetch(t)).json()};const Ce=()=>{const[e,t]=d.exports.useState({}),{symbol:n}=v();return d.exports.useEffect(()=>{we(n).then(s=>{const r=s.description.substring(0,500);t(S(p({},s),{description:r}))})},[n]),Object.keys(e).length===0?"Loading...":i("div",{className:"company__summary",children:[o("h2",{children:"Company Summary"}),o("div",{className:"company__name",children:`${e.companyName} (${e.symbol})`}),o("div",{className:"company__website",children:e.website}),o("div",{className:"company__description",children:e.description})]})};async function Ie(e){return Promise.resolve(["QCOM","MSI","ERIC","AMAZN","GOOGL","MSFT","DELL"])}const Ee=()=>{const[e,t]=d.exports.useState(),{symbol:n,setSymbol:s}=v();return d.exports.useEffect(()=>{Ie().then(r=>{t(r)})},[n]),i("div",{className:"top_peers",children:[o("h2",{children:"Top Peers"}),o("div",{className:"peers__buttons",children:e==null?void 0:e.map(r=>o("button",{className:"peer",onClick:()=>s(r),children:r},r))})]})},Te=e=>{const[t,n]=d.exports.useState(),s=`https://sandbox-sse.iexapis.com/stable/stocksUS?symbols=${e}&token=Tpk_b2d8e00d9a3542d68e4a8767edb9f512`;return d.exports.useEffect(()=>{const r=new EventSource(s);return r.onmessage=a=>{JSON.parse(a.data).length!==0?n(JSON.parse(a.data)):console.log("Just got an empty message")},r.onerror=a=>{console.log(a),r.close()},()=>r.close()},[s]),t};var Re="./assets/redarrow.13e4b84f.svg",Fe="./assets/normal.957bc0c0.svg";const Oe=()=>{const{symbol:e}=v(),t=Te(e);return i("div",{className:"price__display",children:[o("span",{className:"price",children:`$${t==null?void 0:t[0].latestPrice.toFixed(2)}`}),o("img",{className:"arrow",src:(t==null?void 0:t[0].change)>0?Fe:Re,alt:"down arrow"}),o("span",{className:(t==null?void 0:t[0].change)>0?"change positive":"change negative",children:`${t==null?void 0:t[0].change} | ${t==null?void 0:t[0].changePercent.toFixed(2)}%`})]})};var De="./assets/ra-logo.70145db3.svg";function Ue(){const[e,t]=d.exports.useState(0);return d.exports.useEffect(()=>{e<6&&setTimeout(()=>{t(n=>n+1)},[200])},[e]),i("div",{className:"App",children:[o("div",{className:"logo-section",children:o("img",{src:De,height:120,className:"logo",alt:"Reactive Analystics Logo"})}),i(re,{children:[i("div",{className:"main-section",children:[o("div",{children:e>0?o(Oe,{}):null}),e>1?o(Ne,{}):null,e>2?o(oe,{}):null]}),i("div",{className:"news-summary-section",children:[e>3?o(Ae,{}):null,e>4?o(Ce,{}):null,e>5?o(Ee,{}):null]})]})]})}Z.render(o(ee.StrictMode,{children:o(Ue,{})}),document.getElementById("root"));