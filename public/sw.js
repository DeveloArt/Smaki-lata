if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-3cafb6cd"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0207b5e3012a9f29fd93e11763f3d7e7"},{url:"/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/_next/static/Gl_BCdUFyOyUZTeB_E-U1/_buildManifest.js",revision:"f7433b7273dd846efcab279aa2bce877"},{url:"/_next/static/Gl_BCdUFyOyUZTeB_E-U1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/181-5b3c89cb45d384cb.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/341.df3329d77a5faa19.js",revision:"df3329d77a5faa19"},{url:"/_next/static/chunks/457b8330-c83911532361d1ec.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/472.a3826d29d6854395.js",revision:"a3826d29d6854395"},{url:"/_next/static/chunks/4bd1b696-27a333a939a72e03.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/684-8be8583a93b90859.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/766-74db01c257d8e6b1.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/aa35ee89-3ed33f365d51b1b1.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/app/_not-found/page-8839c1c1b6bd9cce.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/app/layout-30d9f540e56a17c3.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/app/page-df48d92f80cf8aa0.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/bc9e92e6-e0da58bd8b6c1d48.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/framework-2d8f2a4deb531775.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/main-6f85e53bdf954474.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/main-app-25dc30b43a2d82fa.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/pages/_app-8bd79ad147d9af1e.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/pages/_error-b2b8c094821de1d8.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-fcffc45f17edad5c.js",revision:"Gl_BCdUFyOyUZTeB_E-U1"},{url:"/_next/static/css/4d5e60bb7948b277.css",revision:"4d5e60bb7948b277"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-192x192.png",revision:"3747d944aca5090badf74fed296aac5b"},{url:"/icons/icon-512x512.png",revision:"41c218b6c969543bf0cb0301ed895bc5"},{url:"/manifest.json",revision:"4f2ca7d8db0c37059e1f941023509dff"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/.*\.(png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET")}));
