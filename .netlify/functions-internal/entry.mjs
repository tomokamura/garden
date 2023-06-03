import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.7eebae14.mjs';
import 'kleur/colors';
import 'slash';
import 'solid-js/web';
import 'path-to-regexp';
import 'string-width';

const _page0 = () => import('./chunks/prerender.415cdbc5.mjs').then(n => n.i);
const _page1 = () => import('./chunks/prerender.415cdbc5.mjs').then(n => n.f);
const _page2 = () => import('./chunks/prerender.415cdbc5.mjs').then(n => n.a);
const _page3 = () => import('./chunks/prerender.415cdbc5.mjs').then(n => n.d);const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/flower.astro", _page1],["src/pages/api/flower.json.js", _page2],["src/pages/api/dog.json.js", _page3],]);

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"flower/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/flower","type":"page","pattern":"^\\/flower\\/?$","segments":[[{"content":"flower","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/flower.astro","pathname":"/flower","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"api/flower.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/flower.json","type":"endpoint","pattern":"^\\/api\\/flower\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"flower.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/flower.json.js","pathname":"/api/flower.json","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"api/dog.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/dog.json","type":"endpoint","pattern":"^\\/api\\/dog\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"dog.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/dog.json.js","pathname":"/api/dog.json","prerender":true,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/zhihua/garden/strong-satellite/src/pages/flower.astro",{"propagation":"none","containsHead":true}],["/Users/zhihua/garden/strong-satellite/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","@astrojs/solid-js/client.js":"_astro/client.892dab5d.js","/Users/zhihua/garden/strong-satellite/src/components/Flower":"_astro/Flower.5ea0570f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/flower.7bc41366.css","/_astro/index.8901218e.css","/favicon.svg","/_astro/Flower.5ea0570f.js","/_astro/client.892dab5d.js","/_astro/web.67639168.js","/index.html","/flower/index.html","/api/flower.json","/api/dog.json"]}), {
	pageMap: pageMap,
	renderers: renderers,
	
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
