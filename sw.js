if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const o=e=>i(e,c),t={module:{uri:c},exports:d,require:o};s[c]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1018aaf1.js",revision:"35dea9ded615474ff40f4babc6dc3500"},{url:"assets/index.20077ff0.css",revision:"9fef9c70454ad8dc8edac6644b1c0a96"},{url:"assets/vendor.d5ee6d4e.js",revision:"a9058adf0ebcea402e609eb1095f3391"},{url:"index.html",revision:"32a326e2e6ccca31314df917b06bd78f"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon-192px.png",revision:"8415de6ff86c9aab5b125ce0375c7642"},{url:"icon-512px.png",revision:"0b2ac360f006160e152d5d6febc63548"},{url:"manifest.webmanifest",revision:"30b8afc0ae5eaf06eb8a067977929dda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
