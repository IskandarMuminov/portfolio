var Od=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Zv=Od((jo,Ks)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof jo=="object"&&typeof Ks<"u"?Ks.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(void 0,function(){const i=new Map,e={set(_,s,u){i.has(_)||i.set(_,new Map);const y=i.get(_);y.has(s)||y.size===0?y.set(s,u):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`)},get:(_,s)=>i.has(_)&&i.get(_).get(s)||null,remove(_,s){if(!i.has(_))return;const u=i.get(_);u.delete(s),u.size===0&&i.delete(_)}},t="transitionend",n=_=>(_&&window.CSS&&window.CSS.escape&&(_=_.replace(/#([^\s"#']+)/g,(s,u)=>`#${CSS.escape(u)}`)),_),r=_=>{_.dispatchEvent(new Event(t))},a=_=>!(!_||typeof _!="object")&&(_.jquery!==void 0&&(_=_[0]),_.nodeType!==void 0),o=_=>a(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(n(_)):null,l=_=>{if(!a(_)||_.getClientRects().length===0)return!1;const s=getComputedStyle(_).getPropertyValue("visibility")==="visible",u=_.closest("details:not([open])");if(!u)return s;if(u!==_){const y=_.closest("summary");if(y&&y.parentNode!==u||y===null)return!1}return s},c=_=>!_||_.nodeType!==Node.ELEMENT_NODE||!!_.classList.contains("disabled")||(_.disabled!==void 0?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false"),h=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const s=_.getRootNode();return s instanceof ShadowRoot?s:null}return _ instanceof ShadowRoot?_:_.parentNode?h(_.parentNode):null},f=()=>{},g=_=>{_.offsetHeight},m=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,v=[],M=()=>document.documentElement.dir==="rtl",E=_=>{var s;s=()=>{const u=m();if(u){const y=_.NAME,O=u.fn[y];u.fn[y]=_.jQueryInterface,u.fn[y].Constructor=_,u.fn[y].noConflict=()=>(u.fn[y]=O,_.jQueryInterface)}},document.readyState==="loading"?(v.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of v)u()}),v.push(s)):s()},p=(_,s=[],u=_)=>typeof _=="function"?_.call(...s):u,d=(_,s,u=!0)=>{if(!u)return void p(_);const y=(Y=>{if(!Y)return 0;let{transitionDuration:ie,transitionDelay:fe}=window.getComputedStyle(Y);const we=Number.parseFloat(ie),Re=Number.parseFloat(fe);return we||Re?(ie=ie.split(",")[0],fe=fe.split(",")[0],1e3*(Number.parseFloat(ie)+Number.parseFloat(fe))):0})(s)+5;let O=!1;const B=({target:Y})=>{Y===s&&(O=!0,s.removeEventListener(t,B),p(_))};s.addEventListener(t,B),setTimeout(()=>{O||r(s)},y)},P=(_,s,u,y)=>{const O=_.length;let B=_.indexOf(s);return B===-1?!u&&y?_[O-1]:_[0]:(B+=u?1:-1,y&&(B=(B+O)%O),_[Math.max(0,Math.min(B,O-1))])},A=/[^.]*(?=\..*)\.|.*/,L=/\..*/,X=/::\d+$/,I={};let D=1;const G={mouseenter:"mouseover",mouseleave:"mouseout"},T=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(_,s){return s&&`${s}::${D++}`||_.uidEvent||D++}function N(_){const s=b(_);return _.uidEvent=s,I[s]=I[s]||{},I[s]}function K(_,s,u=null){return Object.values(_).find(y=>y.callable===s&&y.delegationSelector===u)}function q(_,s,u){const y=typeof s=="string",O=y?u:s||u;let B=re(_);return T.has(B)||(B=_),[y,O,B]}function te(_,s,u,y,O){if(typeof s!="string"||!_)return;let[B,Y,ie]=q(s,u,y);s in G&&(Y=(Ke=>function($e){if(!$e.relatedTarget||$e.relatedTarget!==$e.delegateTarget&&!$e.delegateTarget.contains($e.relatedTarget))return Ke.call(this,$e)})(Y));const fe=N(_),we=fe[ie]||(fe[ie]={}),Re=K(we,Y,B?u:null);if(Re)return void(Re.oneOff=Re.oneOff&&O);const Me=b(Y,s.replace(A,"")),Je=B?function(We,Ke,$e){return function Ze(Mt){const Et=We.querySelectorAll(Ke);for(let{target:rt}=Mt;rt&&rt!==this;rt=rt.parentNode)for(const pt of Et)if(pt===rt)return xe(Mt,{delegateTarget:rt}),Ze.oneOff&&R.off(We,Mt.type,Ke,$e),$e.apply(rt,[Mt])}}(_,u,Y):function(We,Ke){return function $e(Ze){return xe(Ze,{delegateTarget:We}),$e.oneOff&&R.off(We,Ze.type,Ke),Ke.apply(We,[Ze])}}(_,Y);Je.delegationSelector=B?u:null,Je.callable=Y,Je.oneOff=O,Je.uidEvent=Me,we[Me]=Je,_.addEventListener(ie,Je,B)}function ee(_,s,u,y,O){const B=K(s[u],y,O);B&&(_.removeEventListener(u,B,!!O),delete s[u][B.uidEvent])}function Z(_,s,u,y){const O=s[u]||{};for(const[B,Y]of Object.entries(O))B.includes(y)&&ee(_,s,u,Y.callable,Y.delegationSelector)}function re(_){return _=_.replace(L,""),G[_]||_}const R={on(_,s,u,y){te(_,s,u,y,!1)},one(_,s,u,y){te(_,s,u,y,!0)},off(_,s,u,y){if(typeof s!="string"||!_)return;const[O,B,Y]=q(s,u,y),ie=Y!==s,fe=N(_),we=fe[Y]||{},Re=s.startsWith(".");if(B===void 0){if(Re)for(const Me of Object.keys(fe))Z(_,fe,Me,s.slice(1));for(const[Me,Je]of Object.entries(we)){const We=Me.replace(X,"");ie&&!s.includes(We)||ee(_,fe,Y,Je.callable,Je.delegationSelector)}}else{if(!Object.keys(we).length)return;ee(_,fe,Y,B,O?u:null)}},trigger(_,s,u){if(typeof s!="string"||!_)return null;const y=m();let O=null,B=!0,Y=!0,ie=!1;s!==re(s)&&y&&(O=y.Event(s,u),y(_).trigger(O),B=!O.isPropagationStopped(),Y=!O.isImmediatePropagationStopped(),ie=O.isDefaultPrevented());const fe=xe(new Event(s,{bubbles:B,cancelable:!0}),u);return ie&&fe.preventDefault(),Y&&_.dispatchEvent(fe),fe.defaultPrevented&&O&&O.preventDefault(),fe}};function xe(_,s={}){for(const[u,y]of Object.entries(s))try{_[u]=y}catch{Object.defineProperty(_,u,{configurable:!0,get:()=>y})}return _}function ye(_){if(_==="true")return!0;if(_==="false")return!1;if(_===Number(_).toString())return Number(_);if(_===""||_==="null")return null;if(typeof _!="string")return _;try{return JSON.parse(decodeURIComponent(_))}catch{return _}}function Te(_){return _.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}const ke={setDataAttribute(_,s,u){_.setAttribute(`data-bs-${Te(s)}`,u)},removeDataAttribute(_,s){_.removeAttribute(`data-bs-${Te(s)}`)},getDataAttributes(_){if(!_)return{};const s={},u=Object.keys(_.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of u){let O=y.replace(/^bs/,"");O=O.charAt(0).toLowerCase()+O.slice(1),s[O]=ye(_.dataset[y])}return s},getDataAttribute:(_,s)=>ye(_.getAttribute(`data-bs-${Te(s)}`))};class st{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,u){const y=a(u)?ke.getDataAttribute(u,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...a(u)?ke.getDataAttributes(u):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,u=this.constructor.DefaultType){for(const[O,B]of Object.entries(u)){const Y=s[O],ie=a(Y)?"element":(y=Y)==null?`${y}`:Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(B).test(ie))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${O}" provided type "${ie}" but expected type "${B}".`)}var y}}class $ extends st{constructor(s,u){super(),(s=o(s))&&(this._element=s,this._config=this._getConfig(u),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),R.off(this._element,this.constructor.EVENT_KEY);for(const s of Object.getOwnPropertyNames(this))this[s]=null}_queueCallback(s,u,y=!0){d(s,u,y)}_getConfig(s){return s=this._mergeConfigObj(s,this._element),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}static getInstance(s){return e.get(o(s),this.DATA_KEY)}static getOrCreateInstance(s,u={}){return this.getInstance(s)||new this(s,typeof u=="object"?u:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(s){return`${s}${this.EVENT_KEY}`}}const le=_=>{let s=_.getAttribute("data-bs-target");if(!s||s==="#"){let u=_.getAttribute("href");if(!u||!u.includes("#")&&!u.startsWith("."))return null;u.includes("#")&&!u.startsWith("#")&&(u=`#${u.split("#")[1]}`),s=u&&u!=="#"?u.trim():null}return s?s.split(",").map(u=>n(u)).join(","):null},j={find:(_,s=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(s,_)),findOne:(_,s=document.documentElement)=>Element.prototype.querySelector.call(s,_),children:(_,s)=>[].concat(..._.children).filter(u=>u.matches(s)),parents(_,s){const u=[];let y=_.parentNode.closest(s);for(;y;)u.push(y),y=y.parentNode.closest(s);return u},prev(_,s){let u=_.previousElementSibling;for(;u;){if(u.matches(s))return[u];u=u.previousElementSibling}return[]},next(_,s){let u=_.nextElementSibling;for(;u;){if(u.matches(s))return[u];u=u.nextElementSibling}return[]},focusableChildren(_){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(u=>`${u}:not([tabindex^="-"])`).join(",");return this.find(s,_).filter(u=>!c(u)&&l(u))},getSelectorFromElement(_){const s=le(_);return s&&j.findOne(s)?s:null},getElementFromSelector(_){const s=le(_);return s?j.findOne(s):null},getMultipleElementsFromSelector(_){const s=le(_);return s?j.find(s):[]}},pe=(_,s="hide")=>{const u=`click.dismiss${_.EVENT_KEY}`,y=_.NAME;R.on(document,u,`[data-bs-dismiss="${y}"]`,function(O){if(["A","AREA"].includes(this.tagName)&&O.preventDefault(),c(this))return;const B=j.getElementFromSelector(this)||this.closest(`.${y}`);_.getOrCreateInstance(B)[s]()})},Ne=".bs.alert",Ye=`close${Ne}`,He=`closed${Ne}`;class J extends ${static get NAME(){return"alert"}close(){if(R.trigger(this._element,Ye).defaultPrevented)return;this._element.classList.remove("show");const s=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,s)}_destroyElement(){this._element.remove(),R.trigger(this._element,He),this.dispose()}static jQueryInterface(s){return this.each(function(){const u=J.getOrCreateInstance(this);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s](this)}})}}pe(J,"close"),E(J);const w='[data-bs-toggle="button"]';class Ee extends ${static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(s){return this.each(function(){const u=Ee.getOrCreateInstance(this);s==="toggle"&&u[s]()})}}R.on(document,"click.bs.button.data-api",w,_=>{_.preventDefault();const s=_.target.closest(w);Ee.getOrCreateInstance(s).toggle()}),E(Ee);const De=".bs.swipe",Ae=`touchstart${De}`,me=`touchmove${De}`,ct=`touchend${De}`,Oe=`pointerdown${De}`,Ie=`pointerup${De}`,C={endCallback:null,leftCallback:null,rightCallback:null},x={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class H extends st{constructor(s,u){super(),this._element=s,s&&H.isSupported()&&(this._config=this._getConfig(u),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return C}static get DefaultType(){return x}static get NAME(){return"swipe"}dispose(){R.off(this._element,De)}_start(s){this._supportPointerEvents?this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX):this._deltaX=s.touches[0].clientX}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=40)return;const u=s/this._deltaX;this._deltaX=0,u&&p(u>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(R.on(this._element,Oe,s=>this._start(s)),R.on(this._element,Ie,s=>this._end(s)),this._element.classList.add("pointer-event")):(R.on(this._element,Ae,s=>this._start(s)),R.on(this._element,me,s=>this._move(s)),R.on(this._element,ct,s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType==="pen"||s.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const se=".bs.carousel",oe=".data-api",ae="ArrowLeft",Fe="ArrowRight",ge="next",Se="prev",Xe="left",ue="right",be=`slide${se}`,it=`slid${se}`,qe=`keydown${se}`,Ce=`mouseenter${se}`,je=`mouseleave${se}`,Qe=`dragstart${se}`,bt=`load${se}${oe}`,F=`click${se}${oe}`,he="carousel",Q="active",ne=".active",de=".carousel-item",Ve=ne+de,ot={[ae]:ue,[Fe]:Xe},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ut={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends ${constructor(s,u){super(s,u),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=j.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===he&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ut}static get NAME(){return"carousel"}next(){this._slide(ge)}nextWhenVisible(){!document.hidden&&l(this._element)&&this.next()}prev(){this._slide(Se)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?R.one(this._element,it,()=>this.cycle()):this.cycle())}to(s){const u=this._getItems();if(s>u.length-1||s<0)return;if(this._isSliding)return void R.one(this._element,it,()=>this.to(s));const y=this._getItemIndex(this._getActive());if(y===s)return;const O=s>y?ge:Se;this._slide(O,u[s])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(s){return s.defaultInterval=s.interval,s}_addEventListeners(){this._config.keyboard&&R.on(this._element,qe,s=>this._keydown(s)),this._config.pause==="hover"&&(R.on(this._element,Ce,()=>this.pause()),R.on(this._element,je,()=>this._maybeEnableCycle())),this._config.touch&&H.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const u of j.find(".carousel-item img",this._element))R.on(u,Qe,y=>y.preventDefault());const s={leftCallback:()=>this._slide(this._directionToOrder(Xe)),rightCallback:()=>this._slide(this._directionToOrder(ue)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new H(this._element,s)}_keydown(s){if(/input|textarea/i.test(s.target.tagName))return;const u=ot[s.key];u&&(s.preventDefault(),this._slide(this._directionToOrder(u)))}_getItemIndex(s){return this._getItems().indexOf(s)}_setActiveIndicatorElement(s){if(!this._indicatorsElement)return;const u=j.findOne(ne,this._indicatorsElement);u.classList.remove(Q),u.removeAttribute("aria-current");const y=j.findOne(`[data-bs-slide-to="${s}"]`,this._indicatorsElement);y&&(y.classList.add(Q),y.setAttribute("aria-current","true"))}_updateInterval(){const s=this._activeElement||this._getActive();if(!s)return;const u=Number.parseInt(s.getAttribute("data-bs-interval"),10);this._config.interval=u||this._config.defaultInterval}_slide(s,u=null){if(this._isSliding)return;const y=this._getActive(),O=s===ge,B=u||P(this._getItems(),y,O,this._config.wrap);if(B===y)return;const Y=this._getItemIndex(B),ie=Me=>R.trigger(this._element,Me,{relatedTarget:B,direction:this._orderToDirection(s),from:this._getItemIndex(y),to:Y});if(ie(be).defaultPrevented||!y||!B)return;const fe=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Y),this._activeElement=B;const we=O?"carousel-item-start":"carousel-item-end",Re=O?"carousel-item-next":"carousel-item-prev";B.classList.add(Re),g(B),y.classList.add(we),B.classList.add(we),this._queueCallback(()=>{B.classList.remove(we,Re),B.classList.add(Q),y.classList.remove(Q,Re,we),this._isSliding=!1,ie(it)},y,this._isAnimated()),fe&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return j.findOne(Ve,this._element)}_getItems(){return j.find(de,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(s){return M()?s===Xe?Se:ge:s===Xe?ge:Se}_orderToDirection(s){return M()?s===Se?Xe:ue:s===Se?ue:Xe}static jQueryInterface(s){return this.each(function(){const u=at.getOrCreateInstance(this,s);if(typeof s!="number"){if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}}else u.to(s)})}}R.on(document,F,"[data-bs-slide], [data-bs-slide-to]",function(_){const s=j.getElementFromSelector(this);if(!s||!s.classList.contains(he))return;_.preventDefault();const u=at.getOrCreateInstance(s),y=this.getAttribute("data-bs-slide-to");return y?(u.to(y),void u._maybeEnableCycle()):ke.getDataAttribute(this,"slide")==="next"?(u.next(),void u._maybeEnableCycle()):(u.prev(),void u._maybeEnableCycle())}),R.on(window,bt,()=>{const _=j.find('[data-bs-ride="carousel"]');for(const s of _)at.getOrCreateInstance(s)}),E(at);const $t=".bs.collapse",cn=`show${$t}`,Yr=`shown${$t}`,Un=`hide${$t}`,Er=`hidden${$t}`,$r=`click${$t}.data-api`,zi="show",Mn="collapse",pi="collapsing",ki=`:scope .${Mn} .${Mn}`,Hi='[data-bs-toggle="collapse"]',jr={parent:null,toggle:!0},ia={parent:"(null|element)",toggle:"boolean"};class Jn extends ${constructor(s,u){super(s,u),this._isTransitioning=!1,this._triggerArray=[];const y=j.find(Hi);for(const O of y){const B=j.getSelectorFromElement(O),Y=j.find(B).filter(ie=>ie===this._element);B!==null&&Y.length&&this._triggerArray.push(O)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return jr}static get DefaultType(){return ia}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let s=[];if(this._config.parent&&(s=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(O=>O!==this._element).map(O=>Jn.getOrCreateInstance(O,{toggle:!1}))),s.length&&s[0]._isTransitioning||R.trigger(this._element,cn).defaultPrevented)return;for(const O of s)O.hide();const u=this._getDimension();this._element.classList.remove(Mn),this._element.classList.add(pi),this._element.style[u]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=`scroll${u[0].toUpperCase()+u.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(Mn,zi),this._element.style[u]="",R.trigger(this._element,Yr)},this._element,!0),this._element.style[u]=`${this._element[y]}px`}hide(){if(this._isTransitioning||!this._isShown()||R.trigger(this._element,Un).defaultPrevented)return;const s=this._getDimension();this._element.style[s]=`${this._element.getBoundingClientRect()[s]}px`,g(this._element),this._element.classList.add(pi),this._element.classList.remove(Mn,zi);for(const u of this._triggerArray){const y=j.getElementFromSelector(u);y&&!this._isShown(y)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0,this._element.style[s]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(Mn),R.trigger(this._element,Er)},this._element,!0)}_isShown(s=this._element){return s.classList.contains(zi)}_configAfterMerge(s){return s.toggle=!!s.toggle,s.parent=o(s.parent),s}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const s=this._getFirstLevelChildren(Hi);for(const u of s){const y=j.getElementFromSelector(u);y&&this._addAriaAndCollapsedClass([u],this._isShown(y))}}_getFirstLevelChildren(s){const u=j.find(ki,this._config.parent);return j.find(s,this._config.parent).filter(y=>!u.includes(y))}_addAriaAndCollapsedClass(s,u){if(s.length)for(const y of s)y.classList.toggle("collapsed",!u),y.setAttribute("aria-expanded",u)}static jQueryInterface(s){const u={};return typeof s=="string"&&/show|hide/.test(s)&&(u.toggle=!1),this.each(function(){const y=Jn.getOrCreateInstance(this,u);if(typeof s=="string"){if(y[s]===void 0)throw new TypeError(`No method named "${s}"`);y[s]()}})}}R.on(document,$r,Hi,function(_){(_.target.tagName==="A"||_.delegateTarget&&_.delegateTarget.tagName==="A")&&_.preventDefault();for(const s of j.getMultipleElementsFromSelector(this))Jn.getOrCreateInstance(s,{toggle:!1}).toggle()}),E(Jn);var kt="top",S="bottom",U="right",k="left",V="auto",z=[kt,S,U,k],ce="start",_e="end",Pe="clippingParents",Le="viewport",Be="popper",Ge="reference",ze=z.reduce(function(_,s){return _.concat([s+"-"+ce,s+"-"+_e])},[]),ut=[].concat(z,[V]).reduce(function(_,s){return _.concat([s,s+"-"+ce,s+"-"+_e])},[]),Tt="beforeRead",At="read",Ht="afterRead",dt="beforeMain",Ue="main",Lt="afterMain",ft="beforeWrite",Jt="write",Nn="afterWrite",Vt=[Tt,At,Ht,dt,Ue,Lt,ft,Jt,Nn];function Qt(_){return _?(_.nodeName||"").toLowerCase():null}function ht(_){if(_==null)return window;if(_.toString()!=="[object Window]"){var s=_.ownerDocument;return s&&s.defaultView||window}return _}function Gt(_){return _ instanceof ht(_).Element||_ instanceof Element}function Wt(_){return _ instanceof ht(_).HTMLElement||_ instanceof HTMLElement}function Xt(_){return typeof ShadowRoot<"u"&&(_ instanceof ht(_).ShadowRoot||_ instanceof ShadowRoot)}const mi={name:"applyStyles",enabled:!0,phase:"write",fn:function(_){var s=_.state;Object.keys(s.elements).forEach(function(u){var y=s.styles[u]||{},O=s.attributes[u]||{},B=s.elements[u];Wt(B)&&Qt(B)&&(Object.assign(B.style,y),Object.keys(O).forEach(function(Y){var ie=O[Y];ie===!1?B.removeAttribute(Y):B.setAttribute(Y,ie===!0?"":ie)}))})},effect:function(_){var s=_.state,u={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,u.popper),s.styles=u,s.elements.arrow&&Object.assign(s.elements.arrow.style,u.arrow),function(){Object.keys(s.elements).forEach(function(y){var O=s.elements[y],B=s.attributes[y]||{},Y=Object.keys(s.styles.hasOwnProperty(y)?s.styles[y]:u[y]).reduce(function(ie,fe){return ie[fe]="",ie},{});Wt(O)&&Qt(O)&&(Object.assign(O.style,Y),Object.keys(B).forEach(function(ie){O.removeAttribute(ie)}))})}},requires:["computeStyles"]};function un(_){return _.split("-")[0]}var Cn=Math.max,Kr=Math.min,Vi=Math.round;function ra(){var _=navigator.userAgentData;return _!=null&&_.brands&&Array.isArray(_.brands)?_.brands.map(function(s){return s.brand+"/"+s.version}).join(" "):navigator.userAgent}function Ko(){return!/^((?!chrome|android).)*safari/i.test(ra())}function Gi(_,s,u){s===void 0&&(s=!1),u===void 0&&(u=!1);var y=_.getBoundingClientRect(),O=1,B=1;s&&Wt(_)&&(O=_.offsetWidth>0&&Vi(y.width)/_.offsetWidth||1,B=_.offsetHeight>0&&Vi(y.height)/_.offsetHeight||1);var Y=(Gt(_)?ht(_):window).visualViewport,ie=!Ko()&&u,fe=(y.left+(ie&&Y?Y.offsetLeft:0))/O,we=(y.top+(ie&&Y?Y.offsetTop:0))/B,Re=y.width/O,Me=y.height/B;return{width:Re,height:Me,top:we,right:fe+Re,bottom:we+Me,left:fe,x:fe,y:we}}function sa(_){var s=Gi(_),u=_.offsetWidth,y=_.offsetHeight;return Math.abs(s.width-u)<=1&&(u=s.width),Math.abs(s.height-y)<=1&&(y=s.height),{x:_.offsetLeft,y:_.offsetTop,width:u,height:y}}function Zo(_,s){var u=s.getRootNode&&s.getRootNode();if(_.contains(s))return!0;if(u&&Xt(u)){var y=s;do{if(y&&_.isSameNode(y))return!0;y=y.parentNode||y.host}while(y)}return!1}function On(_){return ht(_).getComputedStyle(_)}function qu(_){return["table","td","th"].indexOf(Qt(_))>=0}function Qn(_){return((Gt(_)?_.ownerDocument:_.document)||window.document).documentElement}function Zr(_){return Qt(_)==="html"?_:_.assignedSlot||_.parentNode||(Xt(_)?_.host:null)||Qn(_)}function Jo(_){return Wt(_)&&On(_).position!=="fixed"?_.offsetParent:null}function br(_){for(var s=ht(_),u=Jo(_);u&&qu(u)&&On(u).position==="static";)u=Jo(u);return u&&(Qt(u)==="html"||Qt(u)==="body"&&On(u).position==="static")?s:u||function(y){var O=/firefox/i.test(ra());if(/Trident/i.test(ra())&&Wt(y)&&On(y).position==="fixed")return null;var B=Zr(y);for(Xt(B)&&(B=B.host);Wt(B)&&["html","body"].indexOf(Qt(B))<0;){var Y=On(B);if(Y.transform!=="none"||Y.perspective!=="none"||Y.contain==="paint"||["transform","perspective"].indexOf(Y.willChange)!==-1||O&&Y.willChange==="filter"||O&&Y.filter&&Y.filter!=="none")return B;B=B.parentNode}return null}(_)||s}function aa(_){return["top","bottom"].indexOf(_)>=0?"x":"y"}function Tr(_,s,u){return Cn(_,Kr(s,u))}function Qo(_){return Object.assign({},{top:0,right:0,bottom:0,left:0},_)}function el(_,s){return s.reduce(function(u,y){return u[y]=_,u},{})}const tl={name:"arrow",enabled:!0,phase:"main",fn:function(_){var s,u=_.state,y=_.name,O=_.options,B=u.elements.arrow,Y=u.modifiersData.popperOffsets,ie=un(u.placement),fe=aa(ie),we=[k,U].indexOf(ie)>=0?"height":"width";if(B&&Y){var Re=function(St,_t){return Qo(typeof(St=typeof St=="function"?St(Object.assign({},_t.rects,{placement:_t.placement})):St)!="number"?St:el(St,z))}(O.padding,u),Me=sa(B),Je=fe==="y"?kt:k,We=fe==="y"?S:U,Ke=u.rects.reference[we]+u.rects.reference[fe]-Y[fe]-u.rects.popper[we],$e=Y[fe]-u.rects.reference[fe],Ze=br(B),Mt=Ze?fe==="y"?Ze.clientHeight||0:Ze.clientWidth||0:0,Et=Ke/2-$e/2,rt=Re[Je],pt=Mt-Me[we]-Re[We],et=Mt/2-Me[we]/2+Et,lt=Tr(rt,et,pt),gt=fe;u.modifiersData[y]=((s={})[gt]=lt,s.centerOffset=lt-et,s)}},effect:function(_){var s=_.state,u=_.options.element,y=u===void 0?"[data-popper-arrow]":u;y!=null&&(typeof y!="string"||(y=s.elements.popper.querySelector(y)))&&Zo(s.elements.popper,y)&&(s.elements.arrow=y)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Wi(_){return _.split("-")[1]}var Yu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nl(_){var s,u=_.popper,y=_.popperRect,O=_.placement,B=_.variation,Y=_.offsets,ie=_.position,fe=_.gpuAcceleration,we=_.adaptive,Re=_.roundOffsets,Me=_.isFixed,Je=Y.x,We=Je===void 0?0:Je,Ke=Y.y,$e=Ke===void 0?0:Ke,Ze=typeof Re=="function"?Re({x:We,y:$e}):{x:We,y:$e};We=Ze.x,$e=Ze.y;var Mt=Y.hasOwnProperty("x"),Et=Y.hasOwnProperty("y"),rt=k,pt=kt,et=window;if(we){var lt=br(u),gt="clientHeight",St="clientWidth";lt===ht(u)&&On(lt=Qn(u)).position!=="static"&&ie==="absolute"&&(gt="scrollHeight",St="scrollWidth"),(O===kt||(O===k||O===U)&&B===_e)&&(pt=S,$e-=(Me&&lt===et&&et.visualViewport?et.visualViewport.height:lt[gt])-y.height,$e*=fe?1:-1),O!==k&&(O!==kt&&O!==S||B!==_e)||(rt=U,We-=(Me&&lt===et&&et.visualViewport?et.visualViewport.width:lt[St])-y.width,We*=fe?1:-1)}var _t,Pt=Object.assign({position:ie},we&&Yu),an=Re===!0?function(yn,jt){var dn=yn.x,fn=yn.y,Rt=jt.devicePixelRatio||1;return{x:Vi(dn*Rt)/Rt||0,y:Vi(fn*Rt)/Rt||0}}({x:We,y:$e},ht(u)):{x:We,y:$e};return We=an.x,$e=an.y,fe?Object.assign({},Pt,((_t={})[pt]=Et?"0":"",_t[rt]=Mt?"0":"",_t.transform=(et.devicePixelRatio||1)<=1?"translate("+We+"px, "+$e+"px)":"translate3d("+We+"px, "+$e+"px, 0)",_t)):Object.assign({},Pt,((s={})[pt]=Et?$e+"px":"",s[rt]=Mt?We+"px":"",s.transform="",s))}const oa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(_){var s=_.state,u=_.options,y=u.gpuAcceleration,O=y===void 0||y,B=u.adaptive,Y=B===void 0||B,ie=u.roundOffsets,fe=ie===void 0||ie,we={placement:un(s.placement),variation:Wi(s.placement),popper:s.elements.popper,popperRect:s.rects.popper,gpuAcceleration:O,isFixed:s.options.strategy==="fixed"};s.modifiersData.popperOffsets!=null&&(s.styles.popper=Object.assign({},s.styles.popper,nl(Object.assign({},we,{offsets:s.modifiersData.popperOffsets,position:s.options.strategy,adaptive:Y,roundOffsets:fe})))),s.modifiersData.arrow!=null&&(s.styles.arrow=Object.assign({},s.styles.arrow,nl(Object.assign({},we,{offsets:s.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:fe})))),s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-placement":s.placement})},data:{}};var Jr={passive:!0};const la={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(_){var s=_.state,u=_.instance,y=_.options,O=y.scroll,B=O===void 0||O,Y=y.resize,ie=Y===void 0||Y,fe=ht(s.elements.popper),we=[].concat(s.scrollParents.reference,s.scrollParents.popper);return B&&we.forEach(function(Re){Re.addEventListener("scroll",u.update,Jr)}),ie&&fe.addEventListener("resize",u.update,Jr),function(){B&&we.forEach(function(Re){Re.removeEventListener("scroll",u.update,Jr)}),ie&&fe.removeEventListener("resize",u.update,Jr)}},data:{}};var $u={left:"right",right:"left",bottom:"top",top:"bottom"};function Qr(_){return _.replace(/left|right|bottom|top/g,function(s){return $u[s]})}var ju={start:"end",end:"start"};function il(_){return _.replace(/start|end/g,function(s){return ju[s]})}function ca(_){var s=ht(_);return{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function ua(_){return Gi(Qn(_)).left+ca(_).scrollLeft}function ha(_){var s=On(_),u=s.overflow,y=s.overflowX,O=s.overflowY;return/auto|scroll|overlay|hidden/.test(u+O+y)}function rl(_){return["html","body","#document"].indexOf(Qt(_))>=0?_.ownerDocument.body:Wt(_)&&ha(_)?_:rl(Zr(_))}function Ar(_,s){var u;s===void 0&&(s=[]);var y=rl(_),O=y===((u=_.ownerDocument)==null?void 0:u.body),B=ht(y),Y=O?[B].concat(B.visualViewport||[],ha(y)?y:[]):y,ie=s.concat(Y);return O?ie:ie.concat(Ar(Zr(Y)))}function da(_){return Object.assign({},_,{left:_.x,top:_.y,right:_.x+_.width,bottom:_.y+_.height})}function sl(_,s,u){return s===Le?da(function(y,O){var B=ht(y),Y=Qn(y),ie=B.visualViewport,fe=Y.clientWidth,we=Y.clientHeight,Re=0,Me=0;if(ie){fe=ie.width,we=ie.height;var Je=Ko();(Je||!Je&&O==="fixed")&&(Re=ie.offsetLeft,Me=ie.offsetTop)}return{width:fe,height:we,x:Re+ua(y),y:Me}}(_,u)):Gt(s)?function(y,O){var B=Gi(y,!1,O==="fixed");return B.top=B.top+y.clientTop,B.left=B.left+y.clientLeft,B.bottom=B.top+y.clientHeight,B.right=B.left+y.clientWidth,B.width=y.clientWidth,B.height=y.clientHeight,B.x=B.left,B.y=B.top,B}(s,u):da(function(y){var O,B=Qn(y),Y=ca(y),ie=(O=y.ownerDocument)==null?void 0:O.body,fe=Cn(B.scrollWidth,B.clientWidth,ie?ie.scrollWidth:0,ie?ie.clientWidth:0),we=Cn(B.scrollHeight,B.clientHeight,ie?ie.scrollHeight:0,ie?ie.clientHeight:0),Re=-Y.scrollLeft+ua(y),Me=-Y.scrollTop;return On(ie||B).direction==="rtl"&&(Re+=Cn(B.clientWidth,ie?ie.clientWidth:0)-fe),{width:fe,height:we,x:Re,y:Me}}(Qn(_)))}function al(_){var s,u=_.reference,y=_.element,O=_.placement,B=O?un(O):null,Y=O?Wi(O):null,ie=u.x+u.width/2-y.width/2,fe=u.y+u.height/2-y.height/2;switch(B){case kt:s={x:ie,y:u.y-y.height};break;case S:s={x:ie,y:u.y+u.height};break;case U:s={x:u.x+u.width,y:fe};break;case k:s={x:u.x-y.width,y:fe};break;default:s={x:u.x,y:u.y}}var we=B?aa(B):null;if(we!=null){var Re=we==="y"?"height":"width";switch(Y){case ce:s[we]=s[we]-(u[Re]/2-y[Re]/2);break;case _e:s[we]=s[we]+(u[Re]/2-y[Re]/2)}}return s}function Xi(_,s){s===void 0&&(s={});var u=s,y=u.placement,O=y===void 0?_.placement:y,B=u.strategy,Y=B===void 0?_.strategy:B,ie=u.boundary,fe=ie===void 0?Pe:ie,we=u.rootBoundary,Re=we===void 0?Le:we,Me=u.elementContext,Je=Me===void 0?Be:Me,We=u.altBoundary,Ke=We!==void 0&&We,$e=u.padding,Ze=$e===void 0?0:$e,Mt=Qo(typeof Ze!="number"?Ze:el(Ze,z)),Et=Je===Be?Ge:Be,rt=_.rects.popper,pt=_.elements[Ke?Et:Je],et=function(jt,dn,fn,Rt){var Rn=dn==="clippingParents"?function(yt){var Kt=Ar(Zr(yt)),pn=["absolute","fixed"].indexOf(On(yt).position)>=0&&Wt(yt)?br(yt):yt;return Gt(pn)?Kt.filter(function(ti){return Gt(ti)&&Zo(ti,pn)&&Qt(ti)!=="body"}):[]}(jt):[].concat(dn),Pn=[].concat(Rn,[fn]),$i=Pn[0],Ft=Pn.reduce(function(yt,Kt){var pn=sl(jt,Kt,Rt);return yt.top=Cn(pn.top,yt.top),yt.right=Kr(pn.right,yt.right),yt.bottom=Kr(pn.bottom,yt.bottom),yt.left=Cn(pn.left,yt.left),yt},sl(jt,$i,Rt));return Ft.width=Ft.right-Ft.left,Ft.height=Ft.bottom-Ft.top,Ft.x=Ft.left,Ft.y=Ft.top,Ft}(Gt(pt)?pt:pt.contextElement||Qn(_.elements.popper),fe,Re,Y),lt=Gi(_.elements.reference),gt=al({reference:lt,element:rt,placement:O}),St=da(Object.assign({},rt,gt)),_t=Je===Be?St:lt,Pt={top:et.top-_t.top+Mt.top,bottom:_t.bottom-et.bottom+Mt.bottom,left:et.left-_t.left+Mt.left,right:_t.right-et.right+Mt.right},an=_.modifiersData.offset;if(Je===Be&&an){var yn=an[O];Object.keys(Pt).forEach(function(jt){var dn=[U,S].indexOf(jt)>=0?1:-1,fn=[kt,S].indexOf(jt)>=0?"y":"x";Pt[jt]+=yn[fn]*dn})}return Pt}function Ku(_,s){s===void 0&&(s={});var u=s,y=u.placement,O=u.boundary,B=u.rootBoundary,Y=u.padding,ie=u.flipVariations,fe=u.allowedAutoPlacements,we=fe===void 0?ut:fe,Re=Wi(y),Me=Re?ie?ze:ze.filter(function(Ke){return Wi(Ke)===Re}):z,Je=Me.filter(function(Ke){return we.indexOf(Ke)>=0});Je.length===0&&(Je=Me);var We=Je.reduce(function(Ke,$e){return Ke[$e]=Xi(_,{placement:$e,boundary:O,rootBoundary:B,padding:Y})[un($e)],Ke},{});return Object.keys(We).sort(function(Ke,$e){return We[Ke]-We[$e]})}const ol={name:"flip",enabled:!0,phase:"main",fn:function(_){var s=_.state,u=_.options,y=_.name;if(!s.modifiersData[y]._skip){for(var O=u.mainAxis,B=O===void 0||O,Y=u.altAxis,ie=Y===void 0||Y,fe=u.fallbackPlacements,we=u.padding,Re=u.boundary,Me=u.rootBoundary,Je=u.altBoundary,We=u.flipVariations,Ke=We===void 0||We,$e=u.allowedAutoPlacements,Ze=s.options.placement,Mt=un(Ze),Et=fe||(Mt!==Ze&&Ke?function(yt){if(un(yt)===V)return[];var Kt=Qr(yt);return[il(yt),Kt,il(Kt)]}(Ze):[Qr(Ze)]),rt=[Ze].concat(Et).reduce(function(yt,Kt){return yt.concat(un(Kt)===V?Ku(s,{placement:Kt,boundary:Re,rootBoundary:Me,padding:we,flipVariations:Ke,allowedAutoPlacements:$e}):Kt)},[]),pt=s.rects.reference,et=s.rects.popper,lt=new Map,gt=!0,St=rt[0],_t=0;_t<rt.length;_t++){var Pt=rt[_t],an=un(Pt),yn=Wi(Pt)===ce,jt=[kt,S].indexOf(an)>=0,dn=jt?"width":"height",fn=Xi(s,{placement:Pt,boundary:Re,rootBoundary:Me,altBoundary:Je,padding:we}),Rt=jt?yn?U:k:yn?S:kt;pt[dn]>et[dn]&&(Rt=Qr(Rt));var Rn=Qr(Rt),Pn=[];if(B&&Pn.push(fn[an]<=0),ie&&Pn.push(fn[Rt]<=0,fn[Rn]<=0),Pn.every(function(yt){return yt})){St=Pt,gt=!1;break}lt.set(Pt,Pn)}if(gt)for(var $i=function(yt){var Kt=rt.find(function(pn){var ti=lt.get(pn);if(ti)return ti.slice(0,yt).every(function(ls){return ls})});if(Kt)return St=Kt,"break"},Ft=Ke?3:1;Ft>0&&$i(Ft)!=="break";Ft--);s.placement!==St&&(s.modifiersData[y]._skip=!0,s.placement=St,s.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ll(_,s,u){return u===void 0&&(u={x:0,y:0}),{top:_.top-s.height-u.y,right:_.right-s.width+u.x,bottom:_.bottom-s.height+u.y,left:_.left-s.width-u.x}}function cl(_){return[kt,U,S,k].some(function(s){return _[s]>=0})}const ul={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(_){var s=_.state,u=_.name,y=s.rects.reference,O=s.rects.popper,B=s.modifiersData.preventOverflow,Y=Xi(s,{elementContext:"reference"}),ie=Xi(s,{altBoundary:!0}),fe=ll(Y,y),we=ll(ie,O,B),Re=cl(fe),Me=cl(we);s.modifiersData[u]={referenceClippingOffsets:fe,popperEscapeOffsets:we,isReferenceHidden:Re,hasPopperEscaped:Me},s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-reference-hidden":Re,"data-popper-escaped":Me})}},hl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(_){var s=_.state,u=_.options,y=_.name,O=u.offset,B=O===void 0?[0,0]:O,Y=ut.reduce(function(Re,Me){return Re[Me]=function(Je,We,Ke){var $e=un(Je),Ze=[k,kt].indexOf($e)>=0?-1:1,Mt=typeof Ke=="function"?Ke(Object.assign({},We,{placement:Je})):Ke,Et=Mt[0],rt=Mt[1];return Et=Et||0,rt=(rt||0)*Ze,[k,U].indexOf($e)>=0?{x:rt,y:Et}:{x:Et,y:rt}}(Me,s.rects,B),Re},{}),ie=Y[s.placement],fe=ie.x,we=ie.y;s.modifiersData.popperOffsets!=null&&(s.modifiersData.popperOffsets.x+=fe,s.modifiersData.popperOffsets.y+=we),s.modifiersData[y]=Y}},fa={name:"popperOffsets",enabled:!0,phase:"read",fn:function(_){var s=_.state,u=_.name;s.modifiersData[u]=al({reference:s.rects.reference,element:s.rects.popper,placement:s.placement})},data:{}},dl={name:"preventOverflow",enabled:!0,phase:"main",fn:function(_){var s=_.state,u=_.options,y=_.name,O=u.mainAxis,B=O===void 0||O,Y=u.altAxis,ie=Y!==void 0&&Y,fe=u.boundary,we=u.rootBoundary,Re=u.altBoundary,Me=u.padding,Je=u.tether,We=Je===void 0||Je,Ke=u.tetherOffset,$e=Ke===void 0?0:Ke,Ze=Xi(s,{boundary:fe,rootBoundary:we,padding:Me,altBoundary:Re}),Mt=un(s.placement),Et=Wi(s.placement),rt=!Et,pt=aa(Mt),et=pt==="x"?"y":"x",lt=s.modifiersData.popperOffsets,gt=s.rects.reference,St=s.rects.popper,_t=typeof $e=="function"?$e(Object.assign({},s.rects,{placement:s.placement})):$e,Pt=typeof _t=="number"?{mainAxis:_t,altAxis:_t}:Object.assign({mainAxis:0,altAxis:0},_t),an=s.modifiersData.offset?s.modifiersData.offset[s.placement]:null,yn={x:0,y:0};if(lt){if(B){var jt,dn=pt==="y"?kt:k,fn=pt==="y"?S:U,Rt=pt==="y"?"height":"width",Rn=lt[pt],Pn=Rn+Ze[dn],$i=Rn-Ze[fn],Ft=We?-St[Rt]/2:0,yt=Et===ce?gt[Rt]:St[Rt],Kt=Et===ce?-St[Rt]:-gt[Rt],pn=s.elements.arrow,ti=We&&pn?sa(pn):{width:0,height:0},ls=s.modifiersData["arrow#persistent"]?s.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Jl=ls[dn],Ql=ls[fn],cs=Tr(0,gt[Rt],ti[Rt]),Cd=rt?gt[Rt]/2-Ft-cs-Jl-Pt.mainAxis:yt-cs-Jl-Pt.mainAxis,Rd=rt?-gt[Rt]/2+Ft+cs+Ql+Pt.mainAxis:Kt+cs+Ql+Pt.mainAxis,Aa=s.elements.arrow&&br(s.elements.arrow),Pd=Aa?pt==="y"?Aa.clientTop||0:Aa.clientLeft||0:0,ec=(jt=an==null?void 0:an[pt])!=null?jt:0,Ld=Rn+Rd-ec,tc=Tr(We?Kr(Pn,Rn+Cd-ec-Pd):Pn,Rn,We?Cn($i,Ld):$i);lt[pt]=tc,yn[pt]=tc-Rn}if(ie){var nc,Dd=pt==="x"?kt:k,Id=pt==="x"?S:U,Ei=lt[et],us=et==="y"?"height":"width",ic=Ei+Ze[Dd],rc=Ei-Ze[Id],wa=[kt,k].indexOf(Mt)!==-1,sc=(nc=an==null?void 0:an[et])!=null?nc:0,ac=wa?ic:Ei-gt[us]-St[us]-sc+Pt.altAxis,oc=wa?Ei+gt[us]+St[us]-sc-Pt.altAxis:rc,lc=We&&wa?function(Ud,Nd,Ca){var cc=Tr(Ud,Nd,Ca);return cc>Ca?Ca:cc}(ac,Ei,oc):Tr(We?ac:ic,Ei,We?oc:rc);lt[et]=lc,yn[et]=lc-Ei}s.modifiersData[y]=yn}},requiresIfExists:["offset"]};function Zu(_,s,u){u===void 0&&(u=!1);var y,O,B=Wt(s),Y=Wt(s)&&function(Me){var Je=Me.getBoundingClientRect(),We=Vi(Je.width)/Me.offsetWidth||1,Ke=Vi(Je.height)/Me.offsetHeight||1;return We!==1||Ke!==1}(s),ie=Qn(s),fe=Gi(_,Y,u),we={scrollLeft:0,scrollTop:0},Re={x:0,y:0};return(B||!B&&!u)&&((Qt(s)!=="body"||ha(ie))&&(we=(y=s)!==ht(y)&&Wt(y)?{scrollLeft:(O=y).scrollLeft,scrollTop:O.scrollTop}:ca(y)),Wt(s)?((Re=Gi(s,!0)).x+=s.clientLeft,Re.y+=s.clientTop):ie&&(Re.x=ua(ie))),{x:fe.left+we.scrollLeft-Re.x,y:fe.top+we.scrollTop-Re.y,width:fe.width,height:fe.height}}function Ju(_){var s=new Map,u=new Set,y=[];function O(B){u.add(B.name),[].concat(B.requires||[],B.requiresIfExists||[]).forEach(function(Y){if(!u.has(Y)){var ie=s.get(Y);ie&&O(ie)}}),y.push(B)}return _.forEach(function(B){s.set(B.name,B)}),_.forEach(function(B){u.has(B.name)||O(B)}),y}var fl={placement:"bottom",modifiers:[],strategy:"absolute"};function pl(){for(var _=arguments.length,s=new Array(_),u=0;u<_;u++)s[u]=arguments[u];return!s.some(function(y){return!(y&&typeof y.getBoundingClientRect=="function")})}function es(_){_===void 0&&(_={});var s=_,u=s.defaultModifiers,y=u===void 0?[]:u,O=s.defaultOptions,B=O===void 0?fl:O;return function(Y,ie,fe){fe===void 0&&(fe=B);var we,Re,Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},fl,B),modifiersData:{},elements:{reference:Y,popper:ie},attributes:{},styles:{}},Je=[],We=!1,Ke={state:Me,setOptions:function(Ze){var Mt=typeof Ze=="function"?Ze(Me.options):Ze;$e(),Me.options=Object.assign({},B,Me.options,Mt),Me.scrollParents={reference:Gt(Y)?Ar(Y):Y.contextElement?Ar(Y.contextElement):[],popper:Ar(ie)};var Et,rt,pt=function(et){var lt=Ju(et);return Vt.reduce(function(gt,St){return gt.concat(lt.filter(function(_t){return _t.phase===St}))},[])}((Et=[].concat(y,Me.options.modifiers),rt=Et.reduce(function(et,lt){var gt=et[lt.name];return et[lt.name]=gt?Object.assign({},gt,lt,{options:Object.assign({},gt.options,lt.options),data:Object.assign({},gt.data,lt.data)}):lt,et},{}),Object.keys(rt).map(function(et){return rt[et]})));return Me.orderedModifiers=pt.filter(function(et){return et.enabled}),Me.orderedModifiers.forEach(function(et){var lt=et.name,gt=et.options,St=gt===void 0?{}:gt,_t=et.effect;if(typeof _t=="function"){var Pt=_t({state:Me,name:lt,instance:Ke,options:St});Je.push(Pt||function(){})}}),Ke.update()},forceUpdate:function(){if(!We){var Ze=Me.elements,Mt=Ze.reference,Et=Ze.popper;if(pl(Mt,Et)){Me.rects={reference:Zu(Mt,br(Et),Me.options.strategy==="fixed"),popper:sa(Et)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(_t){return Me.modifiersData[_t.name]=Object.assign({},_t.data)});for(var rt=0;rt<Me.orderedModifiers.length;rt++)if(Me.reset!==!0){var pt=Me.orderedModifiers[rt],et=pt.fn,lt=pt.options,gt=lt===void 0?{}:lt,St=pt.name;typeof et=="function"&&(Me=et({state:Me,options:gt,name:St,instance:Ke})||Me)}else Me.reset=!1,rt=-1}}},update:(we=function(){return new Promise(function(Ze){Ke.forceUpdate(),Ze(Me)})},function(){return Re||(Re=new Promise(function(Ze){Promise.resolve().then(function(){Re=void 0,Ze(we())})})),Re}),destroy:function(){$e(),We=!0}};if(!pl(Y,ie))return Ke;function $e(){Je.forEach(function(Ze){return Ze()}),Je=[]}return Ke.setOptions(fe).then(function(Ze){!We&&fe.onFirstUpdate&&fe.onFirstUpdate(Ze)}),Ke}}var Qu=es(),eh=es({defaultModifiers:[la,fa,oa,mi]}),pa=es({defaultModifiers:[la,fa,oa,mi,hl,ol,dl,tl,ul]});const ml=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Lt,afterRead:Ht,afterWrite:Nn,applyStyles:mi,arrow:tl,auto:V,basePlacements:z,beforeMain:dt,beforeRead:Tt,beforeWrite:ft,bottom:S,clippingParents:Pe,computeStyles:oa,createPopper:pa,createPopperBase:Qu,createPopperLite:eh,detectOverflow:Xi,end:_e,eventListeners:la,flip:ol,hide:ul,left:k,main:Ue,modifierPhases:Vt,offset:hl,placements:ut,popper:Be,popperGenerator:es,popperOffsets:fa,preventOverflow:dl,read:At,reference:Ge,right:U,start:ce,top:kt,variationPlacements:ze,viewport:Le,write:Jt},Symbol.toStringTag,{value:"Module"})),gl="dropdown",gi=".bs.dropdown",ma=".data-api",th="ArrowUp",_l="ArrowDown",nh=`hide${gi}`,ih=`hidden${gi}`,rh=`show${gi}`,sh=`shown${gi}`,vl=`click${gi}${ma}`,xl=`keydown${gi}${ma}`,ah=`keyup${gi}${ma}`,qi="show",_i='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',oh=`${_i}.${qi}`,ts=".dropdown-menu",lh=M()?"top-end":"top-start",ch=M()?"top-start":"top-end",uh=M()?"bottom-end":"bottom-start",hh=M()?"bottom-start":"bottom-end",dh=M()?"left-start":"right-start",fh=M()?"right-start":"left-start",ph={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},mh={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Sn extends ${constructor(s,u){super(s,u),this._popper=null,this._parent=this._element.parentNode,this._menu=j.next(this._element,ts)[0]||j.prev(this._element,ts)[0]||j.findOne(ts,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ph}static get DefaultType(){return mh}static get NAME(){return gl}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown())return;const s={relatedTarget:this._element};if(!R.trigger(this._element,rh,s).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const u of[].concat(...document.body.children))R.on(u,"mouseover",f);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(qi),this._element.classList.add(qi),R.trigger(this._element,sh,s)}}hide(){if(c(this._element)||!this._isShown())return;const s={relatedTarget:this._element};this._completeHide(s)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(s){if(!R.trigger(this._element,nh,s).defaultPrevented){if("ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))R.off(u,"mouseover",f);this._popper&&this._popper.destroy(),this._menu.classList.remove(qi),this._element.classList.remove(qi),this._element.setAttribute("aria-expanded","false"),ke.removeDataAttribute(this._menu,"popper"),R.trigger(this._element,ih,s),this._element.focus()}}_getConfig(s){if(typeof(s=super._getConfig(s)).reference=="object"&&!a(s.reference)&&typeof s.reference.getBoundingClientRect!="function")throw new TypeError(`${gl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return s}_createPopper(){if(ml===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let s=this._element;this._config.reference==="parent"?s=this._parent:a(this._config.reference)?s=o(this._config.reference):typeof this._config.reference=="object"&&(s=this._config.reference);const u=this._getPopperConfig();this._popper=pa(s,this._menu,u)}_isShown(){return this._menu.classList.contains(qi)}_getPlacement(){const s=this._parent;if(s.classList.contains("dropend"))return dh;if(s.classList.contains("dropstart"))return fh;if(s.classList.contains("dropup-center"))return"top";if(s.classList.contains("dropdown-center"))return"bottom";const u=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return s.classList.contains("dropup")?u?ch:lh:u?hh:uh}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(u=>Number.parseInt(u,10)):typeof s=="function"?u=>s(u,this._element):s}_getPopperConfig(){const s={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ke.setDataAttribute(this._menu,"popper","static"),s.modifiers=[{name:"applyStyles",enabled:!1}]),{...s,...p(this._config.popperConfig,[void 0,s])}}_selectMenuItem({key:s,target:u}){const y=j.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(O=>l(O));y.length&&P(y,u,s===_l,!y.includes(u)).focus()}static jQueryInterface(s){return this.each(function(){const u=Sn.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}static clearMenus(s){if(s.button===2||s.type==="keyup"&&s.key!=="Tab")return;const u=j.find(oh);for(const y of u){const O=Sn.getInstance(y);if(!O||O._config.autoClose===!1)continue;const B=s.composedPath(),Y=B.includes(O._menu);if(B.includes(O._element)||O._config.autoClose==="inside"&&!Y||O._config.autoClose==="outside"&&Y||O._menu.contains(s.target)&&(s.type==="keyup"&&s.key==="Tab"||/input|select|option|textarea|form/i.test(s.target.tagName)))continue;const ie={relatedTarget:O._element};s.type==="click"&&(ie.clickEvent=s),O._completeHide(ie)}}static dataApiKeydownHandler(s){const u=/input|textarea/i.test(s.target.tagName),y=s.key==="Escape",O=[th,_l].includes(s.key);if(!O&&!y||u&&!y)return;s.preventDefault();const B=this.matches(_i)?this:j.prev(this,_i)[0]||j.next(this,_i)[0]||j.findOne(_i,s.delegateTarget.parentNode),Y=Sn.getOrCreateInstance(B);if(O)return s.stopPropagation(),Y.show(),void Y._selectMenuItem(s);Y._isShown()&&(s.stopPropagation(),Y.hide(),B.focus())}}R.on(document,xl,_i,Sn.dataApiKeydownHandler),R.on(document,xl,ts,Sn.dataApiKeydownHandler),R.on(document,vl,Sn.clearMenus),R.on(document,ah,Sn.clearMenus),R.on(document,vl,_i,function(_){_.preventDefault(),Sn.getOrCreateInstance(this).toggle()}),E(Sn);const Ml="backdrop",Sl="show",yl=`mousedown.bs.${Ml}`,gh={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_h={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class El extends st{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return gh}static get DefaultType(){return _h}static get NAME(){return Ml}show(s){if(!this._config.isVisible)return void p(s);this._append();const u=this._getElement();this._config.isAnimated&&g(u),u.classList.add(Sl),this._emulateAnimation(()=>{p(s)})}hide(s){this._config.isVisible?(this._getElement().classList.remove(Sl),this._emulateAnimation(()=>{this.dispose(),p(s)})):p(s)}dispose(){this._isAppended&&(R.off(this._element,yl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add("fade"),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=o(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),R.on(s,yl,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){d(s,this._getElement(),this._config.isAnimated)}}const ns=".bs.focustrap",vh=`focusin${ns}`,xh=`keydown.tab${ns}`,bl="backward",Mh={autofocus:!0,trapElement:null},Sh={autofocus:"boolean",trapElement:"element"};class Tl extends st{constructor(s){super(),this._config=this._getConfig(s),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Mh}static get DefaultType(){return Sh}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),R.off(document,ns),R.on(document,vh,s=>this._handleFocusin(s)),R.on(document,xh,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,R.off(document,ns))}_handleFocusin(s){const{trapElement:u}=this._config;if(s.target===document||s.target===u||u.contains(s.target))return;const y=j.focusableChildren(u);y.length===0?u.focus():this._lastTabNavDirection===bl?y[y.length-1].focus():y[0].focus()}_handleKeydown(s){s.key==="Tab"&&(this._lastTabNavDirection=s.shiftKey?bl:"forward")}}const Al=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wl=".sticky-top",is="padding-right",Cl="margin-right";class ga{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,is,u=>u+s),this._setElementAttributes(Al,is,u=>u+s),this._setElementAttributes(wl,Cl,u=>u-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,is),this._resetElementAttributes(Al,is),this._resetElementAttributes(wl,Cl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,u,y){const O=this.getWidth();this._applyManipulationCallback(s,B=>{if(B!==this._element&&window.innerWidth>B.clientWidth+O)return;this._saveInitialAttribute(B,u);const Y=window.getComputedStyle(B).getPropertyValue(u);B.style.setProperty(u,`${y(Number.parseFloat(Y))}px`)})}_saveInitialAttribute(s,u){const y=s.style.getPropertyValue(u);y&&ke.setDataAttribute(s,u,y)}_resetElementAttributes(s,u){this._applyManipulationCallback(s,y=>{const O=ke.getDataAttribute(y,u);O!==null?(ke.removeDataAttribute(y,u),y.style.setProperty(u,O)):y.style.removeProperty(u)})}_applyManipulationCallback(s,u){if(a(s))u(s);else for(const y of j.find(s,this._element))u(y)}}const hn=".bs.modal",yh=`hide${hn}`,Eh=`hidePrevented${hn}`,Rl=`hidden${hn}`,Pl=`show${hn}`,bh=`shown${hn}`,Th=`resize${hn}`,Ah=`click.dismiss${hn}`,wh=`mousedown.dismiss${hn}`,Ch=`keydown.dismiss${hn}`,Rh=`click${hn}.data-api`,Ll="modal-open",Dl="show",_a="modal-static",Ph={backdrop:!0,focus:!0,keyboard:!0},Lh={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class vi extends ${constructor(s,u){super(s,u),this._dialog=j.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ga,this._addEventListeners()}static get Default(){return Ph}static get DefaultType(){return Lh}static get NAME(){return"modal"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||R.trigger(this._element,Pl,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ll),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){this._isShown&&!this._isTransitioning&&(R.trigger(this._element,yh).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Dl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){R.off(window,hn),R.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new El({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Tl({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const u=j.findOne(".modal-body",this._dialog);u&&(u.scrollTop=0),g(this._element),this._element.classList.add(Dl),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,R.trigger(this._element,bh,{relatedTarget:s})},this._dialog,this._isAnimated())}_addEventListeners(){R.on(this._element,Ch,s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),R.on(window,Th,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),R.on(this._element,wh,s=>{R.one(this._element,Ah,u=>{this._element===s.target&&this._element===u.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ll),this._resetAdjustments(),this._scrollBar.reset(),R.trigger(this._element,Rl)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(R.trigger(this._element,Eh).defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,u=this._element.style.overflowY;u==="hidden"||this._element.classList.contains(_a)||(s||(this._element.style.overflowY="hidden"),this._element.classList.add(_a),this._queueCallback(()=>{this._element.classList.remove(_a),this._queueCallback(()=>{this._element.style.overflowY=u},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,u=this._scrollBar.getWidth(),y=u>0;if(y&&!s){const O=M()?"paddingLeft":"paddingRight";this._element.style[O]=`${u}px`}if(!y&&s){const O=M()?"paddingRight":"paddingLeft";this._element.style[O]=`${u}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,u){return this.each(function(){const y=vi.getOrCreateInstance(this,s);if(typeof s=="string"){if(y[s]===void 0)throw new TypeError(`No method named "${s}"`);y[s](u)}})}}R.on(document,Rh,'[data-bs-toggle="modal"]',function(_){const s=j.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&_.preventDefault(),R.one(s,Pl,y=>{y.defaultPrevented||R.one(s,Rl,()=>{l(this)&&this.focus()})});const u=j.findOne(".modal.show");u&&vi.getInstance(u).hide(),vi.getOrCreateInstance(s).toggle(this)}),pe(vi),E(vi);const Fn=".bs.offcanvas",Il=".data-api",Dh=`load${Fn}${Il}`,Ul="show",Nl="showing",Ol="hiding",Fl=".offcanvas.show",Ih=`show${Fn}`,Uh=`shown${Fn}`,Nh=`hide${Fn}`,Bl=`hidePrevented${Fn}`,zl=`hidden${Fn}`,Oh=`resize${Fn}`,Fh=`click${Fn}${Il}`,Bh=`keydown.dismiss${Fn}`,zh={backdrop:!0,keyboard:!0,scroll:!1},kh={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bn extends ${constructor(s,u){super(s,u),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zh}static get DefaultType(){return kh}static get NAME(){return"offcanvas"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||R.trigger(this._element,Ih,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ga().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Nl),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ul),this._element.classList.remove(Nl),R.trigger(this._element,Uh,{relatedTarget:s})},this._element,!0))}hide(){this._isShown&&(R.trigger(this._element,Nh).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ol),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ul,Ol),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ga().reset(),R.trigger(this._element,zl)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=!!this._config.backdrop;return new El({className:"offcanvas-backdrop",isVisible:s,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:s?()=>{this._config.backdrop!=="static"?this.hide():R.trigger(this._element,Bl)}:null})}_initializeFocusTrap(){return new Tl({trapElement:this._element})}_addEventListeners(){R.on(this._element,Bh,s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():R.trigger(this._element,Bl))})}static jQueryInterface(s){return this.each(function(){const u=Bn.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s](this)}})}}R.on(document,Fh,'[data-bs-toggle="offcanvas"]',function(_){const s=j.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),c(this))return;R.one(s,zl,()=>{l(this)&&this.focus()});const u=j.findOne(Fl);u&&u!==s&&Bn.getInstance(u).hide(),Bn.getOrCreateInstance(s).toggle(this)}),R.on(window,Dh,()=>{for(const _ of j.find(Fl))Bn.getOrCreateInstance(_).show()}),R.on(window,Oh,()=>{for(const _ of j.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(_).position!=="fixed"&&Bn.getOrCreateInstance(_).hide()}),pe(Bn),E(Bn);const kl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Hh=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Vh=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Gh=(_,s)=>{const u=_.nodeName.toLowerCase();return s.includes(u)?!Hh.has(u)||!!Vh.test(_.nodeValue):s.filter(y=>y instanceof RegExp).some(y=>y.test(u))},Wh={allowList:kl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xh={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},qh={entry:"(string|element|function|null)",selector:"(string|element)"};class Yh extends st{constructor(s){super(),this._config=this._getConfig(s)}static get Default(){return Wh}static get DefaultType(){return Xh}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(s=>this._resolvePossibleFunction(s)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(s){return this._checkContent(s),this._config.content={...this._config.content,...s},this}toHtml(){const s=document.createElement("div");s.innerHTML=this._maybeSanitize(this._config.template);for(const[O,B]of Object.entries(this._config.content))this._setContent(s,B,O);const u=s.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&u.classList.add(...y.split(" ")),u}_typeCheckConfig(s){super._typeCheckConfig(s),this._checkContent(s.content)}_checkContent(s){for(const[u,y]of Object.entries(s))super._typeCheckConfig({selector:u,entry:y},qh)}_setContent(s,u,y){const O=j.findOne(y,s);O&&((u=this._resolvePossibleFunction(u))?a(u)?this._putElementInTemplate(o(u),O):this._config.html?O.innerHTML=this._maybeSanitize(u):O.textContent=u:O.remove())}_maybeSanitize(s){return this._config.sanitize?function(u,y,O){if(!u.length)return u;if(O&&typeof O=="function")return O(u);const B=new window.DOMParser().parseFromString(u,"text/html"),Y=[].concat(...B.body.querySelectorAll("*"));for(const ie of Y){const fe=ie.nodeName.toLowerCase();if(!Object.keys(y).includes(fe)){ie.remove();continue}const we=[].concat(...ie.attributes),Re=[].concat(y["*"]||[],y[fe]||[]);for(const Me of we)Gh(Me,Re)||ie.removeAttribute(Me.nodeName)}return B.body.innerHTML}(s,this._config.allowList,this._config.sanitizeFn):s}_resolvePossibleFunction(s){return p(s,[void 0,this])}_putElementInTemplate(s,u){if(this._config.html)return u.innerHTML="",void u.append(s);u.textContent=s.textContent}}const $h=new Set(["sanitize","allowList","sanitizeFn"]),va="fade",rs="show",jh=".tooltip-inner",Hl=".modal",Vl="hide.bs.modal",wr="hover",xa="focus",Kh={AUTO:"auto",TOP:"top",RIGHT:M()?"left":"right",BOTTOM:"bottom",LEFT:M()?"right":"left"},Zh={allowList:kl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Jh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class xi extends ${constructor(s,u){if(ml===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(s,u),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Zh}static get DefaultType(){return Jh}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),R.off(this._element.closest(Hl),Vl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const s=R.trigger(this._element,this.constructor.eventName("show")),u=(h(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(s.defaultPrevented||!u)return;this._disposePopper();const y=this._getTipElement();this._element.setAttribute("aria-describedby",y.getAttribute("id"));const{container:O}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(O.append(y),R.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(y),y.classList.add(rs),"ontouchstart"in document.documentElement)for(const B of[].concat(...document.body.children))R.on(B,"mouseover",f);this._queueCallback(()=>{R.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!R.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(rs),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))R.off(s,"mouseover",f);this._activeTrigger.click=!1,this._activeTrigger[xa]=!1,this._activeTrigger[wr]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),R.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(s){const u=this._getTemplateFactory(s).toHtml();if(!u)return null;u.classList.remove(va,rs),u.classList.add(`bs-${this.constructor.NAME}-auto`);const y=(O=>{do O+=Math.floor(1e6*Math.random());while(document.getElementById(O));return O})(this.constructor.NAME).toString();return u.setAttribute("id",y),this._isAnimated()&&u.classList.add(va),u}setContent(s){this._newContent=s,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(s){return this._templateFactory?this._templateFactory.changeContent(s):this._templateFactory=new Yh({...this._config,content:s,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[jh]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(s){return this.constructor.getOrCreateInstance(s.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(va)}_isShown(){return this.tip&&this.tip.classList.contains(rs)}_createPopper(s){const u=p(this._config.placement,[this,s,this._element]),y=Kh[u.toUpperCase()];return pa(this._element,s,this._getPopperConfig(y))}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(u=>Number.parseInt(u,10)):typeof s=="function"?u=>s(u,this._element):s}_resolvePossibleFunction(s){return p(s,[this._element,this._element])}_getPopperConfig(s){const u={placement:s,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...u,...p(this._config.popperConfig,[void 0,u])}}_setListeners(){const s=this._config.trigger.split(" ");for(const u of s)if(u==="click")R.on(this._element,this.constructor.eventName("click"),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(u!=="manual"){const y=u===wr?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),O=u===wr?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");R.on(this._element,y,this._config.selector,B=>{const Y=this._initializeOnDelegatedTarget(B);Y._activeTrigger[B.type==="focusin"?xa:wr]=!0,Y._enter()}),R.on(this._element,O,this._config.selector,B=>{const Y=this._initializeOnDelegatedTarget(B);Y._activeTrigger[B.type==="focusout"?xa:wr]=Y._element.contains(B.relatedTarget),Y._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},R.on(this._element.closest(Hl),Vl,this._hideModalHandler)}_fixTitle(){const s=this._element.getAttribute("title");s&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",s),this._element.setAttribute("data-bs-original-title",s),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(s,u){clearTimeout(this._timeout),this._timeout=setTimeout(s,u)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(s){const u=ke.getDataAttributes(this._element);for(const y of Object.keys(u))$h.has(y)&&delete u[y];return s={...u,...typeof s=="object"&&s?s:{}},s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s.container=s.container===!1?document.body:o(s.container),typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),typeof s.title=="number"&&(s.title=s.title.toString()),typeof s.content=="number"&&(s.content=s.content.toString()),s}_getDelegateConfig(){const s={};for(const[u,y]of Object.entries(this._config))this.constructor.Default[u]!==y&&(s[u]=y);return s.selector=!1,s.trigger="manual",s}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(s){return this.each(function(){const u=xi.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}}E(xi);const Qh=".popover-header",ed=".popover-body",td={...xi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},nd={...xi.DefaultType,content:"(null|string|element|function)"};class ss extends xi{static get Default(){return td}static get DefaultType(){return nd}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Qh]:this._getTitle(),[ed]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(s){return this.each(function(){const u=ss.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}}E(ss);const Ma=".bs.scrollspy",id=`activate${Ma}`,Gl=`click${Ma}`,rd=`load${Ma}.data-api`,Yi="active",Sa="[href]",Wl=".nav-link",sd=`${Wl}, .nav-item > ${Wl}, .list-group-item`,ad={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},od={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Cr extends ${constructor(s,u){super(s,u),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ad}static get DefaultType(){return od}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const s of this._observableSections.values())this._observer.observe(s)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(s){return s.target=o(s.target)||document.body,s.rootMargin=s.offset?`${s.offset}px 0px -30%`:s.rootMargin,typeof s.threshold=="string"&&(s.threshold=s.threshold.split(",").map(u=>Number.parseFloat(u))),s}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(R.off(this._config.target,Gl),R.on(this._config.target,Gl,Sa,s=>{const u=this._observableSections.get(s.target.hash);if(u){s.preventDefault();const y=this._rootElement||window,O=u.offsetTop-this._element.offsetTop;if(y.scrollTo)return void y.scrollTo({top:O,behavior:"smooth"});y.scrollTop=O}}))}_getNewObserver(){const s={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(u=>this._observerCallback(u),s)}_observerCallback(s){const u=Y=>this._targetLinks.get(`#${Y.target.id}`),y=Y=>{this._previousScrollData.visibleEntryTop=Y.target.offsetTop,this._process(u(Y))},O=(this._rootElement||document.documentElement).scrollTop,B=O>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=O;for(const Y of s){if(!Y.isIntersecting){this._activeTarget=null,this._clearActiveClass(u(Y));continue}const ie=Y.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(B&&ie){if(y(Y),!O)return}else B||ie||y(Y)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const s=j.find(Sa,this._config.target);for(const u of s){if(!u.hash||c(u))continue;const y=j.findOne(decodeURI(u.hash),this._element);l(y)&&(this._targetLinks.set(decodeURI(u.hash),u),this._observableSections.set(u.hash,y))}}_process(s){this._activeTarget!==s&&(this._clearActiveClass(this._config.target),this._activeTarget=s,s.classList.add(Yi),this._activateParents(s),R.trigger(this._element,id,{relatedTarget:s}))}_activateParents(s){if(s.classList.contains("dropdown-item"))j.findOne(".dropdown-toggle",s.closest(".dropdown")).classList.add(Yi);else for(const u of j.parents(s,".nav, .list-group"))for(const y of j.prev(u,sd))y.classList.add(Yi)}_clearActiveClass(s){s.classList.remove(Yi);const u=j.find(`${Sa}.${Yi}`,s);for(const y of u)y.classList.remove(Yi)}static jQueryInterface(s){return this.each(function(){const u=Cr.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}})}}R.on(window,rd,()=>{for(const _ of j.find('[data-bs-spy="scroll"]'))Cr.getOrCreateInstance(_)}),E(Cr);const Mi=".bs.tab",ld=`hide${Mi}`,cd=`hidden${Mi}`,ud=`show${Mi}`,hd=`shown${Mi}`,dd=`click${Mi}`,fd=`keydown${Mi}`,pd=`load${Mi}`,md="ArrowLeft",Xl="ArrowRight",gd="ArrowUp",ql="ArrowDown",ya="Home",Yl="End",Si="active",$l="fade",Ea="show",jl=".dropdown-toggle",ba=`:not(${jl})`,Kl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ta=`.nav-link${ba}, .list-group-item${ba}, [role="tab"]${ba}, ${Kl}`,_d=`.${Si}[data-bs-toggle="tab"], .${Si}[data-bs-toggle="pill"], .${Si}[data-bs-toggle="list"]`;class yi extends ${constructor(s){super(s),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),R.on(this._element,fd,u=>this._keydown(u)))}static get NAME(){return"tab"}show(){const s=this._element;if(this._elemIsActive(s))return;const u=this._getActiveElem(),y=u?R.trigger(u,ld,{relatedTarget:s}):null;R.trigger(s,ud,{relatedTarget:u}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(u,s),this._activate(s,u))}_activate(s,u){s&&(s.classList.add(Si),this._activate(j.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0),this._toggleDropDown(s,!0),R.trigger(s,hd,{relatedTarget:u})):s.classList.add(Ea)},s,s.classList.contains($l)))}_deactivate(s,u){s&&(s.classList.remove(Si),s.blur(),this._deactivate(j.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.setAttribute("aria-selected",!1),s.setAttribute("tabindex","-1"),this._toggleDropDown(s,!1),R.trigger(s,cd,{relatedTarget:u})):s.classList.remove(Ea)},s,s.classList.contains($l)))}_keydown(s){if(![md,Xl,gd,ql,ya,Yl].includes(s.key))return;s.stopPropagation(),s.preventDefault();const u=this._getChildren().filter(O=>!c(O));let y;if([ya,Yl].includes(s.key))y=u[s.key===ya?0:u.length-1];else{const O=[Xl,ql].includes(s.key);y=P(u,s.target,O,!0)}y&&(y.focus({preventScroll:!0}),yi.getOrCreateInstance(y).show())}_getChildren(){return j.find(Ta,this._parent)}_getActiveElem(){return this._getChildren().find(s=>this._elemIsActive(s))||null}_setInitialAttributes(s,u){this._setAttributeIfNotExists(s,"role","tablist");for(const y of u)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(s){s=this._getInnerElement(s);const u=this._elemIsActive(s),y=this._getOuterElement(s);s.setAttribute("aria-selected",u),y!==s&&this._setAttributeIfNotExists(y,"role","presentation"),u||s.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(s,"role","tab"),this._setInitialAttributesOnTargetPanel(s)}_setInitialAttributesOnTargetPanel(s){const u=j.getElementFromSelector(s);u&&(this._setAttributeIfNotExists(u,"role","tabpanel"),s.id&&this._setAttributeIfNotExists(u,"aria-labelledby",`${s.id}`))}_toggleDropDown(s,u){const y=this._getOuterElement(s);if(!y.classList.contains("dropdown"))return;const O=(B,Y)=>{const ie=j.findOne(B,y);ie&&ie.classList.toggle(Y,u)};O(jl,Si),O(".dropdown-menu",Ea),y.setAttribute("aria-expanded",u)}_setAttributeIfNotExists(s,u,y){s.hasAttribute(u)||s.setAttribute(u,y)}_elemIsActive(s){return s.classList.contains(Si)}_getInnerElement(s){return s.matches(Ta)?s:j.findOne(Ta,s)}_getOuterElement(s){return s.closest(".nav-item, .list-group-item")||s}static jQueryInterface(s){return this.each(function(){const u=yi.getOrCreateInstance(this);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}})}}R.on(document,dd,Kl,function(_){["A","AREA"].includes(this.tagName)&&_.preventDefault(),c(this)||yi.getOrCreateInstance(this).show()}),R.on(window,pd,()=>{for(const _ of j.find(_d))yi.getOrCreateInstance(_)}),E(yi);const ei=".bs.toast",vd=`mouseover${ei}`,xd=`mouseout${ei}`,Md=`focusin${ei}`,Sd=`focusout${ei}`,yd=`hide${ei}`,Ed=`hidden${ei}`,bd=`show${ei}`,Td=`shown${ei}`,Zl="hide",as="show",os="showing",Ad={animation:"boolean",autohide:"boolean",delay:"number"},wd={animation:!0,autohide:!0,delay:5e3};class Rr extends ${constructor(s,u){super(s,u),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return wd}static get DefaultType(){return Ad}static get NAME(){return"toast"}show(){R.trigger(this._element,bd).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Zl),g(this._element),this._element.classList.add(as,os),this._queueCallback(()=>{this._element.classList.remove(os),R.trigger(this._element,Td),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(R.trigger(this._element,yd).defaultPrevented||(this._element.classList.add(os),this._queueCallback(()=>{this._element.classList.add(Zl),this._element.classList.remove(os,as),R.trigger(this._element,Ed)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(as),super.dispose()}isShown(){return this._element.classList.contains(as)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(s,u){switch(s.type){case"mouseover":case"mouseout":this._hasMouseInteraction=u;break;case"focusin":case"focusout":this._hasKeyboardInteraction=u}if(u)return void this._clearTimeout();const y=s.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){R.on(this._element,vd,s=>this._onInteraction(s,!0)),R.on(this._element,xd,s=>this._onInteraction(s,!1)),R.on(this._element,Md,s=>this._onInteraction(s,!0)),R.on(this._element,Sd,s=>this._onInteraction(s,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(s){return this.each(function(){const u=Rr.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s](this)}})}}return pe(Rr),E(Rr),{Alert:J,Button:Ee,Carousel:at,Collapse:Jn,Dropdown:Sn,Modal:vi,Offcanvas:Bn,Popover:ss,ScrollSpy:Cr,Tab:yi,Toast:Rr,Tooltip:xi}});/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1 (patched for Vite hashed assets)
 * @url https://github.com/feimosi/baguetteBox.js
 */(function(i,e){typeof define=="function"&&define.amd?define(e):typeof jo=="object"?Ks.exports=e():i.baguetteBox=e()})(void 0,function(){var i,e,t,n,r,a='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',o='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',l='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',c={},h={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},f={},g=[],m=0,v=!1,M={},E=!1,p=/.+\.(gif|jpe?g|png|webp)/i,d={},P=[],A=null,L=function(J){J.target.id.indexOf("baguette-img")!==-1&&R()},X=function(J){J.stopPropagation?J.stopPropagation():J.cancelBubble=!0,Te()},I=function(J){J.stopPropagation?J.stopPropagation():J.cancelBubble=!0,ye()},D=function(J){J.stopPropagation?J.stopPropagation():J.cancelBubble=!0,R()},G=function(J){M.count++,1<M.count&&(M.multitouch=!0),M.startX=J.changedTouches[0].pageX,M.startY=J.changedTouches[0].pageY},T=function(J){if(!E&&!M.multitouch){J.preventDefault?J.preventDefault():J.returnValue=!1;var w=J.touches[0]||J.changedTouches[0];40<w.pageX-M.startX?(E=!0,Te()):w.pageX-M.startX<-40?(E=!0,ye()):100<M.startY-w.pageY&&R()}},b=function(){M.count--,M.count<=0&&(M.multitouch=!1),E=!1},N=function(){b()},K=function(J){i.style.display==="block"&&i.contains&&!i.contains(J.target)&&(J.stopPropagation(),re())};function q(J){if(d.hasOwnProperty(J)){var w=d[J].galleries;[].forEach.call(w,function(Ee){[].forEach.call(Ee,function(De){Ne(De.imageElement,"click",De.eventHandler)}),g===Ee&&(g=[])}),delete d[J]}}function te(J){switch(J.keyCode){case 37:Te();break;case 39:ye();break;case 27:R();break;case 36:(function(Ee){return Ee&&Ee.preventDefault(),ke(0)})(J);break;case 35:(function(Ee){return Ee&&Ee.preventDefault(),ke(g.length-1)})(J)}}function ee(J,w){if(g!==J){for(g=J,function(Oe){Oe=Oe||{};for(var Ie in h)c[Ie]=h[Ie],typeof Oe[Ie]<"u"&&(c[Ie]=Oe[Ie]);e.style.transition=e.style.webkitTransition=c.animation==="fadeIn"?"opacity .4s ease":c.animation==="slideIn"?"":"none",c.buttons==="auto"&&("ontouchstart"in window||g.length===1)&&(c.buttons=!1),t.style.display=n.style.display=c.buttons?"":"none";try{i.style.backgroundColor=c.overlayBackgroundColor}catch{}}(w);e.firstChild;)e.removeChild(e.firstChild);for(var Ee,De=[],Ae=[],me=P.length=0;me<J.length;me++)(Ee=He("div")).className="full-image",Ee.id="baguette-img-"+me,P.push(Ee),De.push("baguetteBox-figure-"+me),Ae.push("baguetteBox-figcaption-"+me),e.appendChild(P[me]);i.setAttribute("aria-labelledby",De.join(" ")),i.setAttribute("aria-describedby",Ae.join(" "))}}function Z(J){c.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),i.style.display!=="block"&&(pe(document,"keydown",te),M={count:0,startX:null,startY:null},xe(m=J,function(){le(m),j(m)}),$(),i.style.display="block",c.fullScreen&&function(){i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.mozRequestFullScreen&&i.mozRequestFullScreen()}(),setTimeout(function(){i.className="visible",c.bodyClass&&document.body.classList&&document.body.classList.add(c.bodyClass),c.afterShow&&c.afterShow()},50),c.onChange&&c.onChange(m,P.length),A=document.activeElement,re(),v=!0)}function re(){c.buttons?t.focus():r.focus()}function R(){c.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),i.style.display!=="none"&&(Ne(document,"keydown",te),i.className="",setTimeout(function(){i.style.display="none",document.fullscreen&&function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),c.bodyClass&&document.body.classList&&document.body.classList.remove(c.bodyClass),c.afterHide&&c.afterHide(),A&&A.focus(),v=!1},500))}function xe(J,w){var Ee=P[J],De=g[J];if(Ee!==void 0&&De!==void 0)if(Ee.getElementsByTagName("img")[0])w&&w();else{var Ae=De.imageElement,me=Ae.getElementsByTagName("img")[0],ct=typeof c.captions=="function"?c.captions.call(g,Ae):Ae.getAttribute("data-caption")||Ae.title,Oe=me&&me.getAttribute("src")?me.getAttribute("src"):Ae.getAttribute("href"),Ie=He("figure");if(Ie.id="baguetteBox-figure-"+J,Ie.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',c.captions&&ct){var C=He("figcaption");C.id="baguetteBox-figcaption-"+J,C.innerHTML=ct,Ie.appendChild(C)}Ee.appendChild(Ie);var x=He("img");x.onload=function(){var H=document.querySelector("#baguette-img-"+J+" .baguetteBox-spinner");Ie.removeChild(H),!c.async&&w&&w()},x.setAttribute("src",Oe),x.alt=me&&me.alt||"",c.titleTag&&ct&&(x.title=ct),Ie.appendChild(x),c.async&&w&&w()}}function ye(){return ke(m+1)}function Te(){return ke(m-1)}function ke(J,w){return!v&&0<=J&&J<w.length?(ee(w,c),Z(J),!0):J<0?(c.animation&&st("left"),!1):J>=P.length?(c.animation&&st("right"),!1):(xe(m=J,function(){le(m),j(m)}),$(),c.onChange&&c.onChange(m,P.length),!0)}function st(J){e.className="bounce-from-"+J,setTimeout(function(){e.className=""},400)}function $(){var J=100*-m+"%";c.animation==="fadeIn"?(e.style.opacity=0,setTimeout(function(){f.transforms?e.style.transform=e.style.webkitTransform="translate3d("+J+",0,0)":e.style.left=J,e.style.opacity=1},400)):f.transforms?e.style.transform=e.style.webkitTransform="translate3d("+J+",0,0)":e.style.left=J}function le(J){J-m>=c.preload||xe(J+1,function(){le(J+1)})}function j(J){m-J>=c.preload||xe(J-1,function(){j(J-1)})}function pe(J,w,Ee,De){J.addEventListener?J.addEventListener(w,Ee,De):J.attachEvent("on"+w,function(Ae){(Ae=Ae||window.event).target=Ae.target||Ae.srcElement,Ee(Ae)})}function Ne(J,w,Ee,De){J.removeEventListener?J.removeEventListener(w,Ee,De):J.detachEvent("on"+w,Ee)}function Ye(J){return document.getElementById(J)}function He(J){return document.createElement(J)}return[].forEach||(Array.prototype.forEach=function(J,w){for(var Ee=0;Ee<this.length;Ee++)J.call(w,this[Ee],Ee,this)}),[].filter||(Array.prototype.filter=function(J,w,Ee,De,Ae){for(Ee=this,De=[],Ae=0;Ae<Ee.length;Ae++)J.call(w,Ee[Ae],Ae,Ee)&&De.push(Ee[Ae]);return De}),{run:function(w,Ee){return f.transforms=function(){var Ae=He("div");return typeof Ae.style.perspective<"u"||typeof Ae.style.webkitPerspective<"u"}(),f.svg=function(){var Ae=He("div");return Ae.innerHTML="<svg/>",(Ae.firstChild&&Ae.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),f.passiveEvents=function(){var Ae=!1;try{var me=Object.defineProperty({},"passive",{get:function(){Ae=!0}});window.addEventListener("test",null,me)}catch{}return Ae}(),function(){if(i=Ye("baguetteBox-overlay"))return e=Ye("baguetteBox-slider"),t=Ye("previous-button"),n=Ye("next-button"),void(r=Ye("close-button"));(i=He("div")).setAttribute("role","dialog"),i.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(i),(e=He("div")).id="baguetteBox-slider",i.appendChild(e),(t=He("button")).setAttribute("type","button"),t.id="previous-button",t.setAttribute("aria-label","Previous"),t.innerHTML=f.svg?a:"&lt;",i.appendChild(t),(n=He("button")).setAttribute("type","button"),n.id="next-button",n.setAttribute("aria-label","Next"),n.innerHTML=f.svg?o:"&gt;",i.appendChild(n),(r=He("button")).setAttribute("type","button"),r.id="close-button",r.setAttribute("aria-label","Close"),r.innerHTML=f.svg?l:"&times;",i.appendChild(r),t.className=n.className=r.className="baguetteBox-button",function(){var me=f.passiveEvents?{passive:!1}:null,ct=f.passiveEvents?{passive:!0}:null;pe(i,"click",L),pe(t,"click",X),pe(n,"click",I),pe(r,"click",D),pe(e,"contextmenu",N),pe(i,"touchstart",G,ct),pe(i,"touchmove",T,me),pe(i,"touchend",b),pe(document,"focus",K,!0)}()}(),q(w),function(Ae,me){var ct=document.querySelectorAll(Ae),Oe={galleries:[],nodeList:ct};return d[Ae]=Oe,[].forEach.call(ct,function(Ie){me&&me.filter&&(p=me.filter);var C=[];if(C=Ie.tagName==="A"?[Ie]:Ie.getElementsByTagName("a"),(C=[].filter.call(C,function(H){if(H.className.indexOf(me&&me.ignoreClass)===-1)return p.test(H.href)})).length!==0){var x=[];[].forEach.call(C,function(H,se){var oe=function(Fe){Fe.preventDefault?Fe.preventDefault():Fe.returnValue=!1,ee(x,me),Z(se)},ae={eventHandler:oe,imageElement:H};pe(H,"click",oe),x.push(ae)}),Oe.galleries.push(x)}}),Oe.galleries}(w,Ee)},show:ke,showNext:ye,showPrevious:Te,hide:R,destroy:function(){(function(){var Ee=f.passiveEvents?{passive:!1}:null,De=f.passiveEvents?{passive:!0}:null;Ne(i,"click",L),Ne(t,"click",X),Ne(n,"click",I),Ne(r,"click",D),Ne(e,"contextmenu",N),Ne(i,"touchstart",G,De),Ne(i,"touchmove",T,Ee),Ne(i,"touchend",b),Ne(document,"focus",K,!0)})(),function(){for(var Ee in d)d.hasOwnProperty(Ee)&&q(Ee)}(),Ne(document,"keydown",te),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),d={},g=[],m=0}}});"baguetteBox"in window&&document.querySelectorAll("[data-bss-baguettebox]").length>0&&baguetteBox.run("[data-bss-baguettebox]",{animation:"slideIn"});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="166",Fd=0,uc=1,Bd=2,uu=1,zd=2,Wn=3,hi=0,nn=1,Xn=2,ci=0,fr=1,hc=2,dc=3,fc=4,kd=5,Di=100,Hd=101,Vd=102,Gd=103,Wd=104,Xd=200,qd=201,Yd=202,$d=203,io=204,ro=205,jd=206,Kd=207,Zd=208,Jd=209,Qd=210,ef=211,tf=212,nf=213,rf=214,sf=0,af=1,of=2,Gs=3,lf=4,cf=5,uf=6,hf=7,hu=0,df=1,ff=2,ui=0,pf=1,mf=2,gf=3,_f=4,vf=5,xf=6,Mf=7,du=300,gr=301,_r=302,so=303,ao=304,Zs=306,oo=1e3,Ui=1001,lo=1002,vn=1003,Sf=1004,hs=1005,An=1006,Ra=1007,Ni=1008,jn=1009,fu=1010,pu=1011,Fr=1012,ko=1013,Fi=1014,qn=1015,Hr=1016,Ho=1017,Vo=1018,vr=1020,mu=35902,gu=1021,_u=1022,wn=1023,vu=1024,xu=1025,pr=1026,xr=1027,Mu=1028,Go=1029,Su=1030,Wo=1031,Xo=1033,Os=33776,Fs=33777,Bs=33778,zs=33779,co=35840,uo=35841,ho=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,vo=37809,xo=37810,Mo=37811,So=37812,yo=37813,Eo=37814,bo=37815,To=37816,Ao=37817,wo=37818,Co=37819,Ro=37820,Po=37821,ks=36492,Lo=36494,Do=36495,yu=36283,Io=36284,Uo=36285,No=36286,yf=3200,Ef=3201,bf=0,Tf=1,li="",Ln="srgb",fi="srgb-linear",qo="display-p3",Js="display-p3-linear",Ws="linear",wt="srgb",Xs="rec709",qs="p3",ji=7680,pc=519,Af=512,wf=513,Cf=514,Eu=515,Rf=516,Pf=517,Lf=518,Df=519,mc=35044,gc="300 es",Yn=2e3,Ys=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,Oo=180/Math.PI;function Vr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function If(i,e){return(i%e+e)%e}function La(i,e,t){return(1-t)*i+t*e}function Pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,a,o,l,c,h){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,h)}set(e,t,n,r,a,o,l,c,h){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=a,f[5]=c,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[3],c=n[6],h=n[1],f=n[4],g=n[7],m=n[2],v=n[5],M=n[8],E=r[0],p=r[3],d=r[6],P=r[1],A=r[4],L=r[7],X=r[2],I=r[5],D=r[8];return a[0]=o*E+l*P+c*X,a[3]=o*p+l*A+c*I,a[6]=o*d+l*L+c*D,a[1]=h*E+f*P+g*X,a[4]=h*p+f*A+g*I,a[7]=h*d+f*L+g*D,a[2]=m*E+v*P+M*X,a[5]=m*p+v*A+M*I,a[8]=m*d+v*L+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8];return t*o*f-t*l*h-n*a*f+n*l*c+r*a*h-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],g=f*o-l*h,m=l*c-f*a,v=h*a-o*c,M=t*g+n*m+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(r*h-f*n)*E,e[2]=(l*n-r*o)*E,e[3]=m*E,e[4]=(f*t-r*c)*E,e[5]=(r*a-l*t)*E,e[6]=v*E,e[7]=(n*c-h*t)*E,e[8]=(o*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,l){const c=Math.cos(a),h=Math.sin(a);return this.set(n*c,n*h,-n*(c*o+h*l)+o+e,-r*h,r*c,-r*(-h*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new nt;function bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){const i=$s("canvas");return i.style.display="block",i}const _c={};function Tu(i){i in _c||(_c[i]=!0,console.warn(i))}function Nf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const vc=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xc=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[fi]:{transfer:Ws,primaries:Xs,toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:wt,primaries:Xs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Js]:{transfer:Ws,primaries:qs,toReference:i=>i.applyMatrix3(xc),fromReference:i=>i.applyMatrix3(vc)},[qo]:{transfer:wt,primaries:qs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xc),fromReference:i=>i.applyMatrix3(vc).convertLinearToSRGB()}},Of=new Set([fi,Js]),vt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Of.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ds[e].toReference,r=ds[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ds[i].primaries},getTransfer:function(i){return i===li?Ws:ds[i].transfer}};function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class Ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=$s("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=mr(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bf=0;class Au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(Ua(r[o].image)):a.push(Ua(r[o]))}else a=Ua(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ff.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;class rn extends Sr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Ui,r=Ui,a=An,o=Ni,l=wn,c=jn,h=rn.DEFAULT_ANISOTROPY,f=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Vr(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=du;rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,h=c[0],f=c[4],g=c[8],m=c[1],v=c[5],M=c[9],E=c[2],p=c[6],d=c[10];if(Math.abs(f-m)<.01&&Math.abs(g-E)<.01&&Math.abs(M-p)<.01){if(Math.abs(f+m)<.1&&Math.abs(g+E)<.1&&Math.abs(M+p)<.1&&Math.abs(h+v+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,L=(v+1)/2,X=(d+1)/2,I=(f+m)/4,D=(g+E)/4,G=(M+p)/4;return A>L&&A>X?A<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(A),r=I/n,a=D/n):L>X?L<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(L),n=I/r,a=G/r):X<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(X),n=D/a,r=G/a),this.set(n,r,a,t),this}let P=Math.sqrt((p-M)*(p-M)+(g-E)*(g-E)+(m-f)*(m-f));return Math.abs(P)<.001&&(P=1),this.x=(p-M)/P,this.y=(g-E)/P,this.z=(m-f)/P,this.w=Math.acos((h+v+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kf extends Sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends kf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hf extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,l){let c=n[r+0],h=n[r+1],f=n[r+2],g=n[r+3];const m=a[o+0],v=a[o+1],M=a[o+2],E=a[o+3];if(l===0){e[t+0]=c,e[t+1]=h,e[t+2]=f,e[t+3]=g;return}if(l===1){e[t+0]=m,e[t+1]=v,e[t+2]=M,e[t+3]=E;return}if(g!==E||c!==m||h!==v||f!==M){let p=1-l;const d=c*m+h*v+f*M+g*E,P=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const X=Math.sqrt(A),I=Math.atan2(X,d*P);p=Math.sin(p*I)/X,l=Math.sin(l*I)/X}const L=l*P;if(c=c*p+m*L,h=h*p+v*L,f=f*p+M*L,g=g*p+E*L,p===1-l){const X=1/Math.sqrt(c*c+h*h+f*f+g*g);c*=X,h*=X,f*=X,g*=X}}e[t]=c,e[t+1]=h,e[t+2]=f,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,o){const l=n[r],c=n[r+1],h=n[r+2],f=n[r+3],g=a[o],m=a[o+1],v=a[o+2],M=a[o+3];return e[t]=l*M+f*g+c*v-h*m,e[t+1]=c*M+f*m+h*g-l*v,e[t+2]=h*M+f*v+l*m-c*g,e[t+3]=f*M-l*g-c*m-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,c=Math.sin,h=l(n/2),f=l(r/2),g=l(a/2),m=c(n/2),v=c(r/2),M=c(a/2);switch(o){case"XYZ":this._x=m*f*g+h*v*M,this._y=h*v*g-m*f*M,this._z=h*f*M+m*v*g,this._w=h*f*g-m*v*M;break;case"YXZ":this._x=m*f*g+h*v*M,this._y=h*v*g-m*f*M,this._z=h*f*M-m*v*g,this._w=h*f*g+m*v*M;break;case"ZXY":this._x=m*f*g-h*v*M,this._y=h*v*g+m*f*M,this._z=h*f*M+m*v*g,this._w=h*f*g-m*v*M;break;case"ZYX":this._x=m*f*g-h*v*M,this._y=h*v*g+m*f*M,this._z=h*f*M-m*v*g,this._w=h*f*g+m*v*M;break;case"YZX":this._x=m*f*g+h*v*M,this._y=h*v*g+m*f*M,this._z=h*f*M-m*v*g,this._w=h*f*g-m*v*M;break;case"XZY":this._x=m*f*g-h*v*M,this._y=h*v*g-m*f*M,this._z=h*f*M+m*v*g,this._w=h*f*g+m*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],l=t[5],c=t[9],h=t[2],f=t[6],g=t[10],m=n+l+g;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-c)*v,this._y=(a-h)*v,this._z=(o-r)*v}else if(n>l&&n>g){const v=2*Math.sqrt(1+n-l-g);this._w=(f-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+h)/v}else if(l>g){const v=2*Math.sqrt(1+l-n-g);this._w=(a-h)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+f)/v}else{const v=2*Math.sqrt(1+g-n-l);this._w=(o-r)/v,this._x=(a+h)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,l=t._x,c=t._y,h=t._z,f=t._w;return this._x=n*f+o*l+r*h-a*c,this._y=r*f+o*c+a*l-n*h,this._z=a*f+o*h+n*c-r*l,this._w=o*f-n*l-r*c-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-l*l;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(c),f=Math.atan2(h,l),g=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=o*g+this._w*m,this._x=n*g+this._x*m,this._y=r*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,l=e.z,c=e.w,h=2*(o*r-l*n),f=2*(l*t-a*r),g=2*(a*n-o*t);return this.x=t+c*h+o*g-l*f,this.y=n+c*f+l*h-a*g,this.z=r+c*g+a*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-a*l,this.y=a*o-n*c,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new W,Mc=new Gr;class Wr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(a,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),ps.subVectors(this.max,Lr),Zi.subVectors(e.a,Lr),Ji.subVectors(e.b,Lr),Qi.subVectors(e.c,Lr),ni.subVectors(Ji,Zi),ii.subVectors(Qi,Ji),bi.subVectors(Zi,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!Oa(t,Zi,Ji,Qi,ps)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Zi,Ji,Qi,ps))?!1:(ms.crossVectors(ni,ii),t=[ms.x,ms.y,ms.z],Oa(t,Zi,Ji,Qi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,fs=new Wr,Zi=new W,Ji=new W,Qi=new W,ni=new W,ii=new W,bi=new W,Lr=new W,ps=new W,ms=new W,Ti=new W;function Oa(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Ti.fromArray(i,a);const l=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),c=e.dot(Ti),h=t.dot(Ti),f=n.dot(Ti);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>l)return!1}return!0}const Vf=new Wr,Dr=new W,Fa=new W;class Qs{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Fa)),this.expandByPoint(Dr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new W,Ba=new W,gs=new W,ri=new W,za=new W,_s=new W,ka=new W;class Cu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ba.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ba);const a=e.distanceTo(t)*.5,o=-this.direction.dot(gs),l=ri.dot(this.direction),c=-ri.dot(gs),h=ri.lengthSq(),f=Math.abs(1-o*o);let g,m,v,M;if(f>0)if(g=o*c-l,m=o*l-c,M=a*f,g>=0)if(m>=-M)if(m<=M){const E=1/f;g*=E,m*=E,v=g*(g+o*m+2*l)+m*(o*g+m+2*c)+h}else m=a,g=Math.max(0,-(o*m+l)),v=-g*g+m*(m+2*c)+h;else m=-a,g=Math.max(0,-(o*m+l)),v=-g*g+m*(m+2*c)+h;else m<=-M?(g=Math.max(0,-(-o*a+l)),m=g>0?-a:Math.min(Math.max(-a,-c),a),v=-g*g+m*(m+2*c)+h):m<=M?(g=0,m=Math.min(Math.max(-a,-c),a),v=m*(m+2*c)+h):(g=Math.max(0,-(o*a+l)),m=g>0?a:Math.min(Math.max(-a,-c),a),v=-g*g+m*(m+2*c)+h);else m=o>0?-a:a,g=Math.max(0,-(o*m+l)),v=-g*g+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ba).addScaledVector(gs,m),v}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,l,c;const h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),f>=0?(a=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(a=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),g>=0?(l=(e.min.z-m.z)*g,c=(e.max.z-m.z)*g):(l=(e.max.z-m.z)*g,c=(e.min.z-m.z)*g),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,a){za.subVectors(t,e),_s.subVectors(n,e),ka.crossVectors(za,_s);let o=this.direction.dot(ka),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ri.subVectors(this.origin,e);const c=l*this.direction.dot(_s.crossVectors(ri,_s));if(c<0)return null;const h=l*this.direction.dot(za.cross(ri));if(h<0||c+h>o)return null;const f=-l*ri.dot(ka);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,a,o,l,c,h,f,g,m,v,M,E,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,h,f,g,m,v,M,E,p)}set(e,t,n,r,a,o,l,c,h,f,g,m,v,M,E,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=l,d[13]=c,d[2]=h,d[6]=f,d[10]=g,d[14]=m,d[3]=v,d[7]=M,d[11]=E,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),a=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),f=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=o*f,v=o*g,M=l*f,E=l*g;t[0]=c*f,t[4]=-c*g,t[8]=h,t[1]=v+M*h,t[5]=m-E*h,t[9]=-l*c,t[2]=E-m*h,t[6]=M+v*h,t[10]=o*c}else if(e.order==="YXZ"){const m=c*f,v=c*g,M=h*f,E=h*g;t[0]=m+E*l,t[4]=M*l-v,t[8]=o*h,t[1]=o*g,t[5]=o*f,t[9]=-l,t[2]=v*l-M,t[6]=E+m*l,t[10]=o*c}else if(e.order==="ZXY"){const m=c*f,v=c*g,M=h*f,E=h*g;t[0]=m-E*l,t[4]=-o*g,t[8]=M+v*l,t[1]=v+M*l,t[5]=o*f,t[9]=E-m*l,t[2]=-o*h,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const m=o*f,v=o*g,M=l*f,E=l*g;t[0]=c*f,t[4]=M*h-v,t[8]=m*h+E,t[1]=c*g,t[5]=E*h+m,t[9]=v*h-M,t[2]=-h,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,v=o*h,M=l*c,E=l*h;t[0]=c*f,t[4]=E-m*g,t[8]=M*g+v,t[1]=g,t[5]=o*f,t[9]=-l*f,t[2]=-h*f,t[6]=v*g+M,t[10]=m-E*g}else if(e.order==="XZY"){const m=o*c,v=o*h,M=l*c,E=l*h;t[0]=c*f,t[4]=-g,t[8]=h*f,t[1]=m*g+E,t[5]=o*f,t[9]=v*g-M,t[2]=M*g-v,t[6]=l*f,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Wf)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),si.crossVectors(n,on),si.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),si.crossVectors(n,on)),si.normalize(),vs.crossVectors(on,si),r[0]=si.x,r[4]=vs.x,r[8]=on.x,r[1]=si.y,r[5]=vs.y,r[9]=on.y,r[2]=si.z,r[6]=vs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[4],c=n[8],h=n[12],f=n[1],g=n[5],m=n[9],v=n[13],M=n[2],E=n[6],p=n[10],d=n[14],P=n[3],A=n[7],L=n[11],X=n[15],I=r[0],D=r[4],G=r[8],T=r[12],b=r[1],N=r[5],K=r[9],q=r[13],te=r[2],ee=r[6],Z=r[10],re=r[14],R=r[3],xe=r[7],ye=r[11],Te=r[15];return a[0]=o*I+l*b+c*te+h*R,a[4]=o*D+l*N+c*ee+h*xe,a[8]=o*G+l*K+c*Z+h*ye,a[12]=o*T+l*q+c*re+h*Te,a[1]=f*I+g*b+m*te+v*R,a[5]=f*D+g*N+m*ee+v*xe,a[9]=f*G+g*K+m*Z+v*ye,a[13]=f*T+g*q+m*re+v*Te,a[2]=M*I+E*b+p*te+d*R,a[6]=M*D+E*N+p*ee+d*xe,a[10]=M*G+E*K+p*Z+d*ye,a[14]=M*T+E*q+p*re+d*Te,a[3]=P*I+A*b+L*te+X*R,a[7]=P*D+A*N+L*ee+X*xe,a[11]=P*G+A*K+L*Z+X*ye,a[15]=P*T+A*q+L*re+X*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],l=e[5],c=e[9],h=e[13],f=e[2],g=e[6],m=e[10],v=e[14],M=e[3],E=e[7],p=e[11],d=e[15];return M*(+a*c*g-r*h*g-a*l*m+n*h*m+r*l*v-n*c*v)+E*(+t*c*v-t*h*m+a*o*m-r*o*v+r*h*f-a*c*f)+p*(+t*h*g-t*l*v-a*o*g+n*o*v+a*l*f-n*h*f)+d*(-r*l*f-t*c*g+t*l*m+r*o*g-n*o*m+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],g=e[9],m=e[10],v=e[11],M=e[12],E=e[13],p=e[14],d=e[15],P=g*p*h-E*m*h+E*c*v-l*p*v-g*c*d+l*m*d,A=M*m*h-f*p*h-M*c*v+o*p*v+f*c*d-o*m*d,L=f*E*h-M*g*h+M*l*v-o*E*v-f*l*d+o*g*d,X=M*g*c-f*E*c-M*l*m+o*E*m+f*l*p-o*g*p,I=t*P+n*A+r*L+a*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=P*D,e[1]=(E*m*a-g*p*a-E*r*v+n*p*v+g*r*d-n*m*d)*D,e[2]=(l*p*a-E*c*a+E*r*h-n*p*h-l*r*d+n*c*d)*D,e[3]=(g*c*a-l*m*a-g*r*h+n*m*h+l*r*v-n*c*v)*D,e[4]=A*D,e[5]=(f*p*a-M*m*a+M*r*v-t*p*v-f*r*d+t*m*d)*D,e[6]=(M*c*a-o*p*a-M*r*h+t*p*h+o*r*d-t*c*d)*D,e[7]=(o*m*a-f*c*a+f*r*h-t*m*h-o*r*v+t*c*v)*D,e[8]=L*D,e[9]=(M*g*a-f*E*a-M*n*v+t*E*v+f*n*d-t*g*d)*D,e[10]=(o*E*a-M*l*a+M*n*h-t*E*h-o*n*d+t*l*d)*D,e[11]=(f*l*a-o*g*a-f*n*h+t*g*h+o*n*v-t*l*v)*D,e[12]=X*D,e[13]=(f*E*r-M*g*r+M*n*m-t*E*m-f*n*p+t*g*p)*D,e[14]=(M*l*r-o*E*r-M*n*c+t*E*c+o*n*p-t*l*p)*D,e[15]=(o*g*r-f*l*r+f*n*c-t*g*c-o*n*m+t*l*m)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,l=e.y,c=e.z,h=a*o,f=a*l;return this.set(h*o+n,h*l-r*c,h*c+r*l,0,h*l+r*c,f*l+n,f*c-r*o,0,h*c-r*l,f*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,l=t._z,c=t._w,h=a+a,f=o+o,g=l+l,m=a*h,v=a*f,M=a*g,E=o*f,p=o*g,d=l*g,P=c*h,A=c*f,L=c*g,X=n.x,I=n.y,D=n.z;return r[0]=(1-(E+d))*X,r[1]=(v+L)*X,r[2]=(M-A)*X,r[3]=0,r[4]=(v-L)*I,r[5]=(1-(m+d))*I,r[6]=(p+P)*I,r[7]=0,r[8]=(M+A)*D,r[9]=(p-P)*D,r[10]=(1-(m+E))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),l=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const h=1/a,f=1/o,g=1/l;return bn.elements[0]*=h,bn.elements[1]*=h,bn.elements[2]*=h,bn.elements[4]*=f,bn.elements[5]*=f,bn.elements[6]*=f,bn.elements[8]*=g,bn.elements[9]*=g,bn.elements[10]*=g,t.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,o,l=Yn){const c=this.elements,h=2*a/(t-e),f=2*a/(n-r),g=(t+e)/(t-e),m=(n+r)/(n-r);let v,M;if(l===Yn)v=-(o+a)/(o-a),M=-2*o*a/(o-a);else if(l===Ys)v=-o/(o-a),M=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,l=Yn){const c=this.elements,h=1/(t-e),f=1/(n-r),g=1/(o-a),m=(t+e)*h,v=(n+r)*f;let M,E;if(l===Yn)M=(o+a)*g,E=-2*g;else if(l===Ys)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=E,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new W,bn=new It,Gf=new W(0,0,0),Wf=new W(1,1,1),si=new W,vs=new W,on=new W,Sc=new It,yc=new Gr;class Kn{constructor(e=0,t=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],f=r[9],g=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xf=0;const Ec=new W,tr=new Gr,Hn=new It,xs=new W,Ir=new W,qf=new W,Yf=new Gr,bc=new W(1,0,0),Tc=new W(0,1,0),Ac=new W(0,0,1),wc={type:"added"},$f={type:"removed"},nr={type:"childadded",child:null},Ha={type:"childremoved",child:null};class sn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new W,t=new Kn,n=new Gr,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new nt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ir,xs,this.up):Hn.lookAt(xs,Ir,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Hn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){const g=c[h];a(e.shapes,g)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(a(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),h=o(e.textures),f=o(e.images),g=o(e.shapes),m=o(e.skeletons),v=o(e.animations),M=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=r,n;function o(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}sn.DEFAULT_UP=new W(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new W,Vn=new W,Va=new W,Gn=new W,ir=new W,rr=new W,Cc=new W,Ga=new W,Wa=new W,Xa=new W;class In{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Tn.subVectors(e,t),r.cross(Tn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Tn.subVectors(r,t),Vn.subVectors(n,t),Va.subVectors(e,t);const o=Tn.dot(Tn),l=Tn.dot(Vn),c=Tn.dot(Va),h=Vn.dot(Vn),f=Vn.dot(Va),g=o*h-l*l;if(g===0)return a.set(0,0,0),null;const m=1/g,v=(h*c-l*f)*m,M=(o*f-l*c)*m;return a.set(1-v-M,M,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,a,o,l,c){return this.getBarycoord(e,t,n,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(l,Gn.z),c)}static isFrontFacing(e,t,n,r){return Tn.subVectors(n,t),Vn.subVectors(e,t),Tn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Tn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return In.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,l;ir.subVectors(r,n),rr.subVectors(a,n),Ga.subVectors(e,n);const c=ir.dot(Ga),h=rr.dot(Ga);if(c<=0&&h<=0)return t.copy(n);Wa.subVectors(e,r);const f=ir.dot(Wa),g=rr.dot(Wa);if(f>=0&&g<=f)return t.copy(r);const m=c*g-f*h;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ir,o);Xa.subVectors(e,a);const v=ir.dot(Xa),M=rr.dot(Xa);if(M>=0&&v<=M)return t.copy(a);const E=v*h-c*M;if(E<=0&&h>=0&&M<=0)return l=h/(h-M),t.copy(n).addScaledVector(rr,l);const p=f*M-v*g;if(p<=0&&g-f>=0&&v-M>=0)return Cc.subVectors(a,r),l=(g-f)/(g-f+(v-M)),t.copy(r).addScaledVector(Cc,l);const d=1/(p+E+m);return o=E*d,l=m*d,t.copy(n).addScaledVector(ir,o).addScaledVector(rr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=If(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=qa(o,a,e+1/3),this.g=qa(o,a,e),this.b=qa(o,a,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ln){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return vt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(tn(Yt.r*255,0,255))*65536+Math.round(tn(Yt.g*255,0,255))*256+Math.round(tn(Yt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,a=Yt.b,o=Math.max(n,r,a),l=Math.min(n,r,a);let c,h;const f=(l+o)/2;if(l===o)c=0,h=0;else{const g=o-l;switch(h=f<=.5?g/(o+l):g/(2-o-l),o){case n:c=(r-a)/g+(r<a?6:0);break;case r:c=(a-n)/g+2;break;case a:c=(n-r)/g+4;break}c/=6}return e.h=c,e.s=h,e.l=f,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ln){vt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ms);const n=La(ai.h,Ms.h,t),r=La(ai.s,Ms.s,t),a=La(ai.l,Ms.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new xt;xt.NAMES=Pu;let jf=0;class Xr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=fr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Lu extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new W,Ss=new mt;class xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array),a=en(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class Du extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Iu extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Oi extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kf=0;const mn=new It,Ya=new sn,sr=new W,ln=new Wr,Ur=new Wr,Bt=new W;class Zn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Iu:Du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new nt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Ur.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(ln.min,Ur.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,Ur.max),ln.expandByPoint(Bt)):(ln.expandByPoint(Ur.min),ln.expandByPoint(Ur.max))}ln.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Bt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],c=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Bt.fromBufferAttribute(l,h),c&&(sr.fromBufferAttribute(e,h),Bt.add(sr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let G=0;G<n.count;G++)l[G]=new W,c[G]=new W;const h=new W,f=new W,g=new W,m=new mt,v=new mt,M=new mt,E=new W,p=new W;function d(G,T,b){h.fromBufferAttribute(n,G),f.fromBufferAttribute(n,T),g.fromBufferAttribute(n,b),m.fromBufferAttribute(a,G),v.fromBufferAttribute(a,T),M.fromBufferAttribute(a,b),f.sub(h),g.sub(h),v.sub(m),M.sub(m);const N=1/(v.x*M.y-M.x*v.y);isFinite(N)&&(E.copy(f).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(N),p.copy(g).multiplyScalar(v.x).addScaledVector(f,-M.x).multiplyScalar(N),l[G].add(E),l[T].add(E),l[b].add(E),c[G].add(p),c[T].add(p),c[b].add(p))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let G=0,T=P.length;G<T;++G){const b=P[G],N=b.start,K=b.count;for(let q=N,te=N+K;q<te;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new W,L=new W,X=new W,I=new W;function D(G){X.fromBufferAttribute(r,G),I.copy(X);const T=l[G];A.copy(T),A.sub(X.multiplyScalar(X.dot(T))).normalize(),L.crossVectors(I,T);const N=L.dot(c[G])<0?-1:1;o.setXYZW(G,A.x,A.y,A.z,N)}for(let G=0,T=P.length;G<T;++G){const b=P[G],N=b.start,K=b.count;for(let q=N,te=N+K;q<te;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,f=new W,g=new W;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),E=e.getX(m+1),p=e.getX(m+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,p),f.subVectors(o,a),g.subVectors(r,a),f.cross(g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,p),l.add(f),c.add(f),h.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,a),g.subVectors(r,a),f.cross(g),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,c){const h=l.array,f=l.itemSize,g=l.normalized,m=new h.constructor(c.length*f);let v=0,M=0;for(let E=0,p=c.length;E<p;E++){l.isInterleavedBufferAttribute?v=c[E]*l.data.stride+l.offset:v=c[E]*f;for(let d=0;d<f;d++)m[M++]=h[v++]}return new xn(m,f,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=e(c,n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const c=[],h=a[l];for(let f=0,g=h.length;f<g;f++){const m=h[f],v=e(m,n);c.push(v)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],f=[];for(let g=0,m=h.length;g<m;g++){const v=h[g];f.push(v.toJSON(e.data))}f.length>0&&(r[c]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(t))}const a=e.morphAttributes;for(const h in a){const f=[],g=a[h];for(let m=0,v=g.length;m<v;m++)f.push(g[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new It,Ai=new Cu,ys=new Qs,Pc=new W,ar=new W,or=new W,lr=new W,$a=new W,Es=new W,bs=new mt,Ts=new mt,As=new mt,Lc=new W,Dc=new W,Ic=new W,ws=new W,Cs=new W;class $n extends sn{constructor(e=new Zn,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Es.set(0,0,0);for(let c=0,h=a.length;c<h;c++){const f=l[c],g=a[c];f!==0&&($a.fromBufferAttribute(g,e),o?Es.addScaledVector($a,f):Es.addScaledVector($a.sub(t),f))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(ys.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ys,Pc)===null||Ai.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Rc.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,h=a.attributes.uv,f=a.attributes.uv1,g=a.attributes.normal,m=a.groups,v=a.drawRange;if(l!==null)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const p=m[M],d=o[p.materialIndex],P=Math.max(p.start,v.start),A=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let L=P,X=A;L<X;L+=3){const I=l.getX(L),D=l.getX(L+1),G=l.getX(L+2);r=Rs(this,d,e,n,h,f,g,I,D,G),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let p=M,d=E;p<d;p+=3){const P=l.getX(p),A=l.getX(p+1),L=l.getX(p+2);r=Rs(this,o,e,n,h,f,g,P,A,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let M=0,E=m.length;M<E;M++){const p=m[M],d=o[p.materialIndex],P=Math.max(p.start,v.start),A=Math.min(c.count,Math.min(p.start+p.count,v.start+v.count));for(let L=P,X=A;L<X;L+=3){const I=L,D=L+1,G=L+2;r=Rs(this,d,e,n,h,f,g,I,D,G),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let p=M,d=E;p<d;p+=3){const P=p,A=p+1,L=p+2;r=Rs(this,o,e,n,h,f,g,P,A,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Zf(i,e,t,n,r,a,o,l){let c;if(e.side===nn?c=n.intersectTriangle(o,a,r,!0,l):c=n.intersectTriangle(r,a,o,e.side===hi,l),c===null)return null;Cs.copy(l),Cs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Cs);return h<t.near||h>t.far?null:{distance:h,point:Cs.clone(),object:i}}function Rs(i,e,t,n,r,a,o,l,c,h){i.getVertexPosition(l,ar),i.getVertexPosition(c,or),i.getVertexPosition(h,lr);const f=Zf(i,e,t,n,ar,or,lr,ws);if(f){r&&(bs.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,c),As.fromBufferAttribute(r,h),f.uv=In.getInterpolation(ws,ar,or,lr,bs,Ts,As,new mt)),a&&(bs.fromBufferAttribute(a,l),Ts.fromBufferAttribute(a,c),As.fromBufferAttribute(a,h),f.uv1=In.getInterpolation(ws,ar,or,lr,bs,Ts,As,new mt)),o&&(Lc.fromBufferAttribute(o,l),Dc.fromBufferAttribute(o,c),Ic.fromBufferAttribute(o,h),f.normal=In.getInterpolation(ws,ar,or,lr,Lc,Dc,Ic,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a:l,b:c,c:h,normal:new W,materialIndex:0};In.getNormal(ar,or,lr,g.normal),f.face=g}return f}class qr extends Zn{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],h=[],f=[],g=[];let m=0,v=0;M("z","y","x",-1,-1,n,t,e,o,a,0),M("z","y","x",1,-1,n,t,-e,o,a,1),M("x","z","y",1,1,e,n,t,r,o,2),M("x","z","y",1,-1,e,n,-t,r,o,3),M("x","y","z",1,-1,e,t,n,r,a,4),M("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Oi(h,3)),this.setAttribute("normal",new Oi(f,3)),this.setAttribute("uv",new Oi(g,2));function M(E,p,d,P,A,L,X,I,D,G,T){const b=L/D,N=X/G,K=L/2,q=X/2,te=I/2,ee=D+1,Z=G+1;let re=0,R=0;const xe=new W;for(let ye=0;ye<Z;ye++){const Te=ye*N-q;for(let ke=0;ke<ee;ke++){const st=ke*b-K;xe[E]=st*P,xe[p]=Te*A,xe[d]=te,h.push(xe.x,xe.y,xe.z),xe[E]=0,xe[p]=0,xe[d]=I>0?1:-1,f.push(xe.x,xe.y,xe.z),g.push(ke/D),g.push(1-ye/G),re+=1}}for(let ye=0;ye<G;ye++)for(let Te=0;Te<D;Te++){const ke=m+Te+ee*ye,st=m+Te+ee*(ye+1),$=m+(Te+1)+ee*(ye+1),le=m+(Te+1)+ee*ye;c.push(ke,st,le),c.push(st,$,le),R+=6}l.addGroup(v,R,T),v+=R,m+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function Jf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Qf={clone:Mr,merge:Zt};var ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nu extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new W,Uc=new mt,Nc=new mt;class gn extends Nu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Uc,Nc),t.subVectors(Nc,Uc)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class np extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(cr,ur,e,t);r.layers=this.layers,this.add(r);const a=new gn(cr,ur,e,t);a.layers=this.layers,this.add(a);const o=new gn(cr,ur,e,t);o.layers=this.layers,this.add(o);const l=new gn(cr,ur,e,t);l.layers=this.layers,this.add(l);const c=new gn(cr,ur,e,t);c.layers=this.layers,this.add(c);const h=new gn(cr,ur,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,l,c]=t;for(const h of t)this.remove(h);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,c,h,f]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(g,m,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Ou extends rn{constructor(e,t,n,r,a,o,l,c,h,f){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,r,a,o,l,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ip extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ou(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),a=new di({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ci});a.uniforms.tEquirect.value=t;const o=new $n(r,a),l=t.minFilter;return t.minFilter===Ni&&(t.minFilter=An),new np(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const ja=new W,rp=new W,sp=new nt;class Pi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ja.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sp.getNormalMatrix(e),r=this.coplanarPoint(ja).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Qs,Ps=new W;class Fu{constructor(e=new Pi,t=new Pi,n=new Pi,r=new Pi,a=new Pi,o=new Pi){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],g=r[6],m=r[7],v=r[8],M=r[9],E=r[10],p=r[11],d=r[12],P=r[13],A=r[14],L=r[15];if(n[0].setComponents(c-a,m-h,p-v,L-d).normalize(),n[1].setComponents(c+a,m+h,p+v,L+d).normalize(),n[2].setComponents(c+o,m+f,p+M,L+P).normalize(),n[3].setComponents(c-o,m-f,p-M,L-P).normalize(),n[4].setComponents(c-l,m-g,p-E,L-A).normalize(),t===Yn)n[5].setComponents(c+l,m+g,p+E,L+A).normalize();else if(t===Ys)n[5].setComponents(l,g,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ap(i){const e=new WeakMap;function t(l,c){const h=l.array,f=l.usage,g=h.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,h){const f=c.array,g=c._updateRange,m=c.updateRanges;if(i.bindBuffer(h,l),g.count===-1&&m.length===0&&i.bufferSubData(h,0,f),m.length!==0){for(let v=0,M=m.length;v<M;v++){const E=m[v];i.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count),g.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);if(h===void 0)e.set(l,t(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:a,update:o}}class ea extends Zn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(n),c=Math.floor(r),h=l+1,f=c+1,g=e/l,m=t/c,v=[],M=[],E=[],p=[];for(let d=0;d<f;d++){const P=d*m-o;for(let A=0;A<h;A++){const L=A*g-a;M.push(L,-P,0),E.push(0,0,1),p.push(A/l),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let P=0;P<l;P++){const A=P+h*d,L=P+h*(d+1),X=P+1+h*(d+1),I=P+1+h*d;v.push(A,L,I),v.push(L,X,I)}this.setIndex(v),this.setAttribute("position",new Oi(M,3)),this.setAttribute("normal",new Oi(E,3)),this.setAttribute("uv",new Oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:hp,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:wp,color_pars_vertex:Cp,color_vertex:Rp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Op,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:xm,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:ym,morphtarget_vertex:Em,normal_fragment_begin:bm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:wm,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Im,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Om,project_vertex:Fm,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:$m,skinnormal_vertex:jm,specularmap_fragment:Km,specularmap_pars_fragment:Zm,tonemapping_fragment:Jm,tonemapping_pars_fragment:Qm,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,worldpos_vertex:sg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:ug,cube_frag:hg,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:Mg,meshbasic_frag:Sg,meshlambert_vert:yg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:wg,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ug,points_frag:Ng,shadow_vert:Og,shadow_frag:Fg,sprite_vert:Bg,sprite_frag:zg},ve={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Dn={basic:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Zt([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Zt([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Zt([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Zt([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Zt([ve.lights,ve.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Dn.physical={uniforms:Zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ls={r:0,b:0,g:0},Ci=new Kn,kg=new It;function Hg(i,e,t,n,r,a,o){const l=new xt(0);let c=a===!0?0:1,h,f,g=null,m=0,v=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function E(P){let A=!1;const L=M(P);L===null?d(l,c):L&&L.isColor&&(d(L,1),A=!0);const X=i.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,o):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(P,A){const L=M(A);L&&(L.isCubeTexture||L.mapping===Zs)?(f===void 0&&(f=new $n(new qr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Mr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(X,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ci.copy(A.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ci)),f.material.toneMapped=vt.getTransfer(L.colorSpace)!==wt,(g!==L||m!==L.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,g=L,m=L.version,v=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new $n(new ea(2,2),new di({name:"BackgroundMaterial",uniforms:Mr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=vt.getTransfer(L.colorSpace)!==wt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||m!==L.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,g=L,m=L.version,v=i.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function d(P,A){P.getRGB(Ls,Uu(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,A,o)}return{getClearColor:function(){return l},setClearColor:function(P,A=1){l.set(P),c=A,d(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,d(l,c)},render:E,addToRenderList:p}}function Vg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,o=!1;function l(b,N,K,q,te){let ee=!1;const Z=g(q,K,N);a!==Z&&(a=Z,h(a.object)),ee=v(b,q,K,te),ee&&M(b,q,K,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,L(b,N,K,q),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function f(b){return i.deleteVertexArray(b)}function g(b,N,K){const q=K.wireframe===!0;let te=n[b.id];te===void 0&&(te={},n[b.id]=te);let ee=te[N.id];ee===void 0&&(ee={},te[N.id]=ee);let Z=ee[q];return Z===void 0&&(Z=m(c()),ee[q]=Z),Z}function m(b){const N=[],K=[],q=[];for(let te=0;te<t;te++)N[te]=0,K[te]=0,q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:q,object:b,attributes:{},index:null}}function v(b,N,K,q){const te=a.attributes,ee=N.attributes;let Z=0;const re=K.getAttributes();for(const R in re)if(re[R].location>=0){const ye=te[R];let Te=ee[R];if(Te===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),ye===void 0||ye.attribute!==Te||Te&&ye.data!==Te.data)return!0;Z++}return a.attributesNum!==Z||a.index!==q}function M(b,N,K,q){const te={},ee=N.attributes;let Z=0;const re=K.getAttributes();for(const R in re)if(re[R].location>=0){let ye=ee[R];ye===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor));const Te={};Te.attribute=ye,ye&&ye.data&&(Te.data=ye.data),te[R]=Te,Z++}a.attributes=te,a.attributesNum=Z,a.index=q}function E(){const b=a.newAttributes;for(let N=0,K=b.length;N<K;N++)b[N]=0}function p(b){d(b,0)}function d(b,N){const K=a.newAttributes,q=a.enabledAttributes,te=a.attributeDivisors;K[b]=1,q[b]===0&&(i.enableVertexAttribArray(b),q[b]=1),te[b]!==N&&(i.vertexAttribDivisor(b,N),te[b]=N)}function P(){const b=a.newAttributes,N=a.enabledAttributes;for(let K=0,q=N.length;K<q;K++)N[K]!==b[K]&&(i.disableVertexAttribArray(K),N[K]=0)}function A(b,N,K,q,te,ee,Z){Z===!0?i.vertexAttribIPointer(b,N,K,te,ee):i.vertexAttribPointer(b,N,K,q,te,ee)}function L(b,N,K,q){E();const te=q.attributes,ee=K.getAttributes(),Z=N.defaultAttributeValues;for(const re in ee){const R=ee[re];if(R.location>=0){let xe=te[re];if(xe===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),xe!==void 0){const ye=xe.normalized,Te=xe.itemSize,ke=e.get(xe);if(ke===void 0)continue;const st=ke.buffer,$=ke.type,le=ke.bytesPerElement,j=$===i.INT||$===i.UNSIGNED_INT||xe.gpuType===ko;if(xe.isInterleavedBufferAttribute){const pe=xe.data,Ne=pe.stride,Ye=xe.offset;if(pe.isInstancedInterleavedBuffer){for(let He=0;He<R.locationSize;He++)d(R.location+He,pe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let He=0;He<R.locationSize;He++)p(R.location+He);i.bindBuffer(i.ARRAY_BUFFER,st);for(let He=0;He<R.locationSize;He++)A(R.location+He,Te/R.locationSize,$,ye,Ne*le,(Ye+Te/R.locationSize*He)*le,j)}else{if(xe.isInstancedBufferAttribute){for(let pe=0;pe<R.locationSize;pe++)d(R.location+pe,xe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let pe=0;pe<R.locationSize;pe++)p(R.location+pe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let pe=0;pe<R.locationSize;pe++)A(R.location+pe,Te/R.locationSize,$,ye,Te*le,Te/R.locationSize*pe*le,j)}}else if(Z!==void 0){const ye=Z[re];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(R.location,ye);break;case 3:i.vertexAttrib3fv(R.location,ye);break;case 4:i.vertexAttrib4fv(R.location,ye);break;default:i.vertexAttrib1fv(R.location,ye)}}}}P()}function X(){G();for(const b in n){const N=n[b];for(const K in N){const q=N[K];for(const te in q)f(q[te].object),delete q[te];delete N[K]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const K in N){const q=N[K];for(const te in q)f(q[te].object),delete q[te];delete N[K]}delete n[b.id]}function D(b){for(const N in n){const K=n[N];if(K[b.id]===void 0)continue;const q=K[b.id];for(const te in q)f(q[te].object),delete q[te];delete K[b.id]}}function G(){T(),o=!0,a!==r&&(a=r,h(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:G,resetDefaultState:T,dispose:X,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:p,disableUnusedAttributes:P}}function Gg(i,e,t){let n;function r(h){n=h}function a(h,f){i.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,g){g!==0&&(i.drawArraysInstanced(n,h,f,g),t.update(f,n,g))}function l(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,g);let v=0;for(let M=0;M<g;M++)v+=f[M];t.update(v,n,1)}function c(h,f,g,m){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)o(h[M],f[M],m[M]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,g);let M=0;for(let E=0;E<g;E++)M+=f[E];for(let E=0;E<m.length;E++)t.update(M,n,m[E])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Wg(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){const D=I===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==jn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qn&&!D)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=c(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const g=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,X=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:E,maxAttributes:p,maxVertexUniforms:d,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:L,maxSamples:X}}function Xg(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new Pi,l=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const v=g.length!==0||m||n!==0||r;return r=m,n=g.length,v},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=f(g,m,0)},this.setState=function(g,m,v){const M=g.clippingPlanes,E=g.clipIntersection,p=g.clipShadows,d=i.get(g);if(!r||M===null||M.length===0||a&&!p)a?f(null):h();else{const P=a?0:n,A=P*4;let L=d.clippingState||null;c.value=L,L=f(M,m,A,v);for(let X=0;X!==A;++X)L[X]=t[X];d.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(g,m,v,M){const E=g!==null?g.length:0;let p=null;if(E!==0){if(p=c.value,M!==!0||p===null){const d=v+E*4,P=m.matrixWorldInverse;l.getNormalMatrix(P),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,L=v;A!==E;++A,L+=4)o.copy(g[A]).applyMatrix4(P,l),o.normal.toArray(p,L),p[L+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function qg(i){let e=new WeakMap;function t(o,l){return l===so?o.mapping=gr:l===ao&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===so||l===ao)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new ip(c.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Yg extends Nu{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,Oc=[.125,.215,.35,.446,.526,.582],Ii=20,Ka=new Yg,Fc=new xt;let Za=null,Ja=0,Qa=0,eo=!1;const Li=(1+Math.sqrt(5))/2,hr=1/Li,Bc=[new W(-Li,hr,0),new W(Li,hr,0),new W(-hr,0,Li),new W(hr,0,Li),new W(0,Li,-hr),new W(0,Li,hr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=eo,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Hr,format:wn,colorSpace:fi,depthBuffer:!1},r=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(a)),this._blurMaterial=jg(a,e,t)}return r}_compileMaterial(e){const t=new $n(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,r){const l=new gn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,m=f.toneMapping;f.getClearColor(Fc),f.toneMapping=ui,f.autoClear=!1;const v=new Lu({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),M=new $n(new qr,v);let E=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,E=!0):(v.color.copy(Fc),E=!0);for(let d=0;d<6;d++){const P=d%3;P===0?(l.up.set(0,c[d],0),l.lookAt(h[d],0,0)):P===1?(l.up.set(0,0,c[d]),l.lookAt(0,h[d],0)):(l.up.set(0,c[d],0),l.lookAt(0,0,h[d]));const A=this._cubeSize;Ds(r,P*A,d>2?A:0,A,A),f.setRenderTarget(r),E&&f.render(M,l),f.render(e,l)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=m,f.autoClear=g,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const c=this._cubeSize;Ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Bc[(r-a-1)%Bc.length];this._blur(e,a-1,a,o,l)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,l){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,g=new $n(this._lodPlanes[r],h),m=h.uniforms,v=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ii-1),E=a/M,p=isFinite(a)?1+Math.floor(f*E):Ii;p>Ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const d=[];let P=0;for(let D=0;D<Ii;++D){const G=D/E,T=Math.exp(-G*G/2);d.push(T),D===0?P+=T:D<p&&(P+=2*T)}for(let D=0;D<d.length;D++)d[D]=d[D]/P;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=d,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:A}=this;m.dTheta.value=M,m.mipInt.value=A-n;const L=this._sizeLods[r],X=3*L*(r>A-dr?r-A+dr:0),I=4*(this._cubeSize-L);Ds(t,X,I,3*L,2*L),c.setRenderTarget(t),c.render(g,Ka)}}function $g(i){const e=[],t=[],n=[];let r=i;const a=i-dr+1+Oc.length;for(let o=0;o<a;o++){const l=Math.pow(2,r);t.push(l);let c=1/l;o>i-dr?c=Oc[o-i+dr-1]:o===0&&(c=0),n.push(c);const h=1/(l-2),f=-h,g=1+h,m=[f,f,g,f,g,g,f,f,g,g,f,g],v=6,M=6,E=3,p=2,d=1,P=new Float32Array(E*M*v),A=new Float32Array(p*M*v),L=new Float32Array(d*M*v);for(let I=0;I<v;I++){const D=I%3*2/3-1,G=I>2?0:-1,T=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];P.set(T,E*M*I),A.set(m,p*M*I);const b=[I,I,I,I,I,I];L.set(b,d*M*I)}const X=new Zn;X.setAttribute("position",new xn(P,E)),X.setAttribute("uv",new xn(A,p)),X.setAttribute("faceIndex",new xn(L,d)),e.push(X),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jg(i,e,t){const n=new Float32Array(Ii),r=new W(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Hc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===so||c===ao,f=c===gr||c===_r;if(h||f){let g=e.get(l);const m=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new zc(i)),g=h?t.fromEquirectangular(l,g):t.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),g.texture;if(g!==void 0)return g.texture;{const v=l.image;return h&&v&&v.height>0||f&&v&&r(v)?(t===null&&(t=new zc(i)),g=h?t.fromEquirectangular(l):t.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),l.addEventListener("dispose",a),g.texture):null}}}return l}function r(l){let c=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&c++;return c===h}function a(l){const c=l.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Tu("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jg(i,e,t,n){const r={},a=new WeakMap;function o(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);for(const M in m.morphAttributes){const E=m.morphAttributes[M];for(let p=0,d=E.length;p<d;p++)e.remove(E[p])}m.removeEventListener("dispose",o),delete r[m.id];const v=a.get(m);v&&(e.remove(v),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(g,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(g){const m=g.attributes;for(const M in m)e.update(m[M],i.ARRAY_BUFFER);const v=g.morphAttributes;for(const M in v){const E=v[M];for(let p=0,d=E.length;p<d;p++)e.update(E[p],i.ARRAY_BUFFER)}}function h(g){const m=[],v=g.index,M=g.attributes.position;let E=0;if(v!==null){const P=v.array;E=v.version;for(let A=0,L=P.length;A<L;A+=3){const X=P[A+0],I=P[A+1],D=P[A+2];m.push(X,I,I,D,D,X)}}else if(M!==void 0){const P=M.array;E=M.version;for(let A=0,L=P.length/3-1;A<L;A+=3){const X=A+0,I=A+1,D=A+2;m.push(X,I,I,D,D,X)}}else return;const p=new(bu(m)?Iu:Du)(m,1);p.version=E;const d=a.get(g);d&&e.remove(d),a.set(g,p)}function f(g){const m=a.get(g);if(m){const v=g.index;v!==null&&m.version<v.version&&h(g)}else h(g);return a.get(g)}return{get:l,update:c,getWireframeAttribute:f}}function Qg(i,e,t){let n;function r(m){n=m}let a,o;function l(m){a=m.type,o=m.bytesPerElement}function c(m,v){i.drawElements(n,v,a,m*o),t.update(v,n,1)}function h(m,v,M){M!==0&&(i.drawElementsInstanced(n,v,a,m*o,M),t.update(v,n,M))}function f(m,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,m,0,M);let p=0;for(let d=0;d<M;d++)p+=v[d];t.update(p,n,1)}function g(m,v,M,E){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<m.length;d++)h(m[d]/o,v[d],E[d]);else{p.multiDrawElementsInstancedWEBGL(n,v,0,a,m,0,E,0,M);let d=0;for(let P=0;P<M;P++)d+=v[P];for(let P=0;P<E.length;P++)t.update(d,n,E[P])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=g}function e_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function t_(i,e,t){const n=new WeakMap,r=new zt;function a(o,l,c){const h=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0;let m=n.get(l);if(m===void 0||m.count!==g){let b=function(){G.dispose(),n.delete(l),l.removeEventListener("dispose",b)};var v=b;m!==void 0&&m.texture.dispose();const M=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,p=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],P=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let L=0;M===!0&&(L=1),E===!0&&(L=2),p===!0&&(L=3);let X=l.attributes.position.count*L,I=1;X>e.maxTextureSize&&(I=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const D=new Float32Array(X*I*4*g),G=new wu(D,X,I,g);G.type=qn,G.needsUpdate=!0;const T=L*4;for(let N=0;N<g;N++){const K=d[N],q=P[N],te=A[N],ee=X*I*4*N;for(let Z=0;Z<K.count;Z++){const re=Z*T;M===!0&&(r.fromBufferAttribute(K,Z),D[ee+re+0]=r.x,D[ee+re+1]=r.y,D[ee+re+2]=r.z,D[ee+re+3]=0),E===!0&&(r.fromBufferAttribute(q,Z),D[ee+re+4]=r.x,D[ee+re+5]=r.y,D[ee+re+6]=r.z,D[ee+re+7]=0),p===!0&&(r.fromBufferAttribute(te,Z),D[ee+re+8]=r.x,D[ee+re+9]=r.y,D[ee+re+10]=r.z,D[ee+re+11]=te.itemSize===4?r.w:1)}}m={count:g,texture:G,size:new mt(X,I)},n.set(l,m),l.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let M=0;for(let p=0;p<h.length;p++)M+=h[p];const E=l.morphTargetsRelative?1:1-M;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:a}}function n_(i,e,t,n){let r=new WeakMap;function a(c){const h=n.render.frame,f=c.geometry,g=e.get(c,f);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return g}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}class zu extends rn{constructor(e,t,n,r,a,o,l,c,h,f=pr){if(f!==pr&&f!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===pr&&(n=Fi),n===void 0&&f===xr&&(n=vr),super(null,r,a,o,l,c,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ku=new rn,Gc=new zu(1,1),Hu=new wu,Vu=new Hf,Gu=new Ou,Wc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),$c=new Float32Array(4);function yr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Wc[r];if(a===void 0&&(a=new Float32Array(r),Wc[r]=a),e!==0){n.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(a,l)}return a}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function o_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Ot(t,n)}}function l_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),Ot(t,n)}}function c_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),Ot(t,n)}}function u_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function p_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function v_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=Eu,a=Gc):a=ku,t.setTexture2D(e||a,r)}function x_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vu,r)}function M_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gu,r)}function S_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hu,r)}function y_(i){switch(i){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function E_(i,e){i.uniform1fv(this.addr,e)}function b_(i,e){const t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function T_(i,e){const t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function A_(i,e){const t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function w_(i,e){const t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C_(i,e){const t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R_(i,e){const t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P_(i,e){i.uniform1iv(this.addr,e)}function L_(i,e){i.uniform2iv(this.addr,e)}function D_(i,e){i.uniform3iv(this.addr,e)}function I_(i,e){i.uniform4iv(this.addr,e)}function U_(i,e){i.uniform1uiv(this.addr,e)}function N_(i,e){i.uniform2uiv(this.addr,e)}function O_(i,e){i.uniform3uiv(this.addr,e)}function F_(i,e){i.uniform4uiv(this.addr,e)}function B_(i,e,t){const n=this.cache,r=e.length,a=ta(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ku,a[o])}function z_(i,e,t){const n=this.cache,r=e.length,a=ta(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vu,a[o])}function k_(i,e,t){const n=this.cache,r=e.length,a=ta(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gu,a[o])}function H_(i,e,t){const n=this.cache,r=e.length,a=ta(t,r);Nt(n,a)||(i.uniform1iv(this.addr,a),Ot(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hu,a[o])}function V_(i){switch(i){case 5126:return E_;case 35664:return b_;case 35665:return T_;case 35666:return A_;case 35674:return w_;case 35675:return C_;case 35676:return R_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return I_;case 5125:return U_;case 36294:return N_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}class G_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}}class X_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function q_(i,e,t){const n=i.name,r=n.length;for(to.lastIndex=0;;){const a=to.exec(n),o=to.lastIndex;let l=a[1];const c=a[2]==="]",h=a[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){jc(t,h===void 0?new G_(l,i,e):new W_(l,i,e));break}else{let g=t.map[l];g===void 0&&(g=new X_(l),jc(t,g)),t=g}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);q_(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Y_=37297;let $_=0;function j_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function K_(i){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i);let n;switch(e===t?n="":e===qs&&t===Xs?n="LinearDisplayP3ToLinearSRGB":e===Xs&&t===qs&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case Js:return[n,"LinearTransferOETF"];case Ln:case qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+j_(i.getShaderSource(e),o)}else return r}function Z_(i,e){const t=K_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function J_(i,e){let t;switch(e){case pf:t="Linear";break;case mf:t="Reinhard";break;case gf:t="OptimizedCineon";break;case _f:t="ACESFilmic";break;case xf:t="AgX";break;case Mf:t="Neutral";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Nr(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(nv,rv)}const iv=new Map;function rv(i,e){let t=tt[e];if(t===void 0){const n=iv.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(sv,av)}function av(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function tu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function lv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function uv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function hv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dv(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=ov(t),h=lv(t),f=cv(t),g=uv(t),m=hv(t),v=Q_(t),M=ev(a),E=r.createProgram();let p,d,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Nr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?tt.tonemapping_pars_fragment:"",t.toneMapping!==ui?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Fo(o),o=Jc(o,t),o=Qc(o,t),l=Fo(l),l=Jc(l,t),l=Qc(l,t),o=eu(o),l=eu(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=P+p+o,L=P+d+l,X=Kc(r,r.VERTEX_SHADER,A),I=Kc(r,r.FRAGMENT_SHADER,L);r.attachShader(E,X),r.attachShader(E,I),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function D(N){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(E).trim(),q=r.getShaderInfoLog(X).trim(),te=r.getShaderInfoLog(I).trim();let ee=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,X,I);else{const re=Zc(r,X,"vertex"),R=Zc(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+re+`
`+R)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||te==="")&&(Z=!1);Z&&(N.diagnostics={runnable:ee,programLog:K,vertexShader:{log:q,prefix:p},fragmentShader:{log:te,prefix:d}})}r.deleteShader(X),r.deleteShader(I),G=new Hs(r,E),T=tv(r,E)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,Y_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=X,this.fragmentShader=I,this}let fv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mv(e),t.set(e,n)),n}}class mv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function gv(i,e,t,n,r,a,o){const l=new Ru,c=new pv,h=new Set,f=[],g=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function p(T,b,N,K,q){const te=K.fog,ee=q.geometry,Z=T.isMeshStandardMaterial?K.environment:null,re=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),R=re&&re.mapping===Zs?re.image.height:null,xe=M[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const ye=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=ye!==void 0?ye.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let st,$,le,j;if(xe){const at=Dn[xe];st=at.vertexShader,$=at.fragmentShader}else st=T.vertexShader,$=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),j=c.getFragmentShaderID(T);const pe=i.getRenderTarget(),Ne=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,He=!!T.map,J=!!T.matcap,w=!!re,Ee=!!T.aoMap,De=!!T.lightMap,Ae=!!T.bumpMap,me=!!T.normalMap,ct=!!T.displacementMap,Oe=!!T.emissiveMap,Ie=!!T.metalnessMap,C=!!T.roughnessMap,x=T.anisotropy>0,H=T.clearcoat>0,se=T.dispersion>0,oe=T.iridescence>0,ae=T.sheen>0,Fe=T.transmission>0,ge=x&&!!T.anisotropyMap,Se=H&&!!T.clearcoatMap,Xe=H&&!!T.clearcoatNormalMap,ue=H&&!!T.clearcoatRoughnessMap,be=oe&&!!T.iridescenceMap,it=oe&&!!T.iridescenceThicknessMap,qe=ae&&!!T.sheenColorMap,Ce=ae&&!!T.sheenRoughnessMap,je=!!T.specularMap,Qe=!!T.specularColorMap,bt=!!T.specularIntensityMap,F=Fe&&!!T.transmissionMap,he=Fe&&!!T.thicknessMap,Q=!!T.gradientMap,ne=!!T.alphaMap,de=T.alphaTest>0,Ve=!!T.alphaHash,ot=!!T.extensions;let Ct=ui;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Ut={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:st,fragmentShader:$,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:j,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&q.instanceColor!==null,instancingMorph:Ne&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:fi,alphaToCoverage:!!T.alphaToCoverage,map:He,matcap:J,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:R,aoMap:Ee,lightMap:De,bumpMap:Ae,normalMap:me,displacementMap:m&&ct,emissiveMap:Oe,normalMapObjectSpace:me&&T.normalMapType===Tf,normalMapTangentSpace:me&&T.normalMapType===bf,metalnessMap:Ie,roughnessMap:C,anisotropy:x,anisotropyMap:ge,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ue,dispersion:se,iridescence:oe,iridescenceMap:be,iridescenceThicknessMap:it,sheen:ae,sheenColorMap:qe,sheenRoughnessMap:Ce,specularMap:je,specularColorMap:Qe,specularIntensityMap:bt,transmission:Fe,transmissionMap:F,thicknessMap:he,gradientMap:Q,opaque:T.transparent===!1&&T.blending===fr&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:Ve,combine:T.combine,mapUv:He&&E(T.map.channel),aoMapUv:Ee&&E(T.aoMap.channel),lightMapUv:De&&E(T.lightMap.channel),bumpMapUv:Ae&&E(T.bumpMap.channel),normalMapUv:me&&E(T.normalMap.channel),displacementMapUv:ct&&E(T.displacementMap.channel),emissiveMapUv:Oe&&E(T.emissiveMap.channel),metalnessMapUv:Ie&&E(T.metalnessMap.channel),roughnessMapUv:C&&E(T.roughnessMap.channel),anisotropyMapUv:ge&&E(T.anisotropyMap.channel),clearcoatMapUv:Se&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&E(T.sheenRoughnessMap.channel),specularMapUv:je&&E(T.specularMap.channel),specularColorMapUv:Qe&&E(T.specularColorMap.channel),specularIntensityMapUv:bt&&E(T.specularIntensityMap.channel),transmissionMapUv:F&&E(T.transmissionMap.channel),thicknessMapUv:he&&E(T.thicknessMap.channel),alphaMapUv:ne&&E(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(me||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(He||ne),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:He&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xn,flipSided:T.side===nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ot&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function d(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)b.push(N),b.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(P(b,T),A(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function P(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function A(T,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.skinning&&l.enable(4),b.morphTargets&&l.enable(5),b.morphNormals&&l.enable(6),b.morphColors&&l.enable(7),b.premultipliedAlpha&&l.enable(8),b.shadowMapEnabled&&l.enable(9),b.doubleSided&&l.enable(10),b.flipSided&&l.enable(11),b.useDepthPacking&&l.enable(12),b.dithering&&l.enable(13),b.transmission&&l.enable(14),b.sheen&&l.enable(15),b.opaque&&l.enable(16),b.pointsUvs&&l.enable(17),b.decodeVideoTexture&&l.enable(18),b.alphaToCoverage&&l.enable(19),T.push(l.mask)}function L(T){const b=M[T.type];let N;if(b){const K=Dn[b];N=Qf.clone(K.uniforms)}else N=T.uniforms;return N}function X(T,b){let N;for(let K=0,q=f.length;K<q;K++){const te=f[K];if(te.cacheKey===b){N=te,++N.usedTimes;break}}return N===void 0&&(N=new dv(i,b,T,a),f.push(N)),N}function I(T){if(--T.usedTimes===0){const b=f.indexOf(T);f[b]=f[f.length-1],f.pop(),T.destroy()}}function D(T){c.remove(T)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:L,acquireProgram:X,releaseProgram:I,releaseShaderCache:D,programs:f,dispose:G}}function _v(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function iu(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(g,m,v,M,E,p){let d=i[e];return d===void 0?(d={id:g.id,object:g,geometry:m,material:v,groupOrder:M,renderOrder:g.renderOrder,z:E,group:p},i[e]=d):(d.id=g.id,d.object=g,d.geometry=m,d.material=v,d.groupOrder=M,d.renderOrder=g.renderOrder,d.z=E,d.group=p),e++,d}function l(g,m,v,M,E,p){const d=o(g,m,v,M,E,p);v.transmission>0?n.push(d):v.transparent===!0?r.push(d):t.push(d)}function c(g,m,v,M,E,p){const d=o(g,m,v,M,E,p);v.transmission>0?n.unshift(d):v.transparent===!0?r.unshift(d):t.unshift(d)}function h(g,m){t.length>1&&t.sort(g||vv),n.length>1&&n.sort(m||nu),r.length>1&&r.sort(m||nu)}function f(){for(let g=e,m=i.length;g<m;g++){const v=i[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:f,sort:h}}function xv(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new iu,i.set(n,[o])):r>=a.length?(o=new iu,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new xt};break;case"SpotLight":t={position:new W,direction:new W,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){const e=new Mv,t=Sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);const r=new W,a=new It,o=new It;function l(h){let f=0,g=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let v=0,M=0,E=0,p=0,d=0,P=0,A=0,L=0,X=0,I=0,D=0;h.sort(Ev);for(let T=0,b=h.length;T<b;T++){const N=h[T],K=N.color,q=N.intensity,te=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=K.r*q,g+=K.g*q,m+=K.b*q;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],q);D++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const re=N.shadow,R=t.get(N);R.shadowIntensity=re.intensity,R.shadowBias=re.bias,R.shadowNormalBias=re.normalBias,R.shadowRadius=re.radius,R.shadowMapSize=re.mapSize,n.directionalShadow[v]=R,n.directionalShadowMap[v]=ee,n.directionalShadowMatrix[v]=N.shadow.matrix,P++}n.directional[v]=Z,v++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(K).multiplyScalar(q),Z.distance=te,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[E]=Z;const re=N.shadow;if(N.map&&(n.spotLightMap[X]=N.map,X++,re.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[E]=re.matrix,N.castShadow){const R=t.get(N);R.shadowIntensity=re.intensity,R.shadowBias=re.bias,R.shadowNormalBias=re.normalBias,R.shadowRadius=re.radius,R.shadowMapSize=re.mapSize,n.spotShadow[E]=R,n.spotShadowMap[E]=ee,L++}E++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(K).multiplyScalar(q),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=Z,p++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const re=N.shadow,R=t.get(N);R.shadowIntensity=re.intensity,R.shadowBias=re.bias,R.shadowNormalBias=re.normalBias,R.shadowRadius=re.radius,R.shadowMapSize=re.mapSize,R.shadowCameraNear=re.camera.near,R.shadowCameraFar=re.camera.far,n.pointShadow[M]=R,n.pointShadowMap[M]=ee,n.pointShadowMatrix[M]=N.shadow.matrix,A++}n.point[M]=Z,M++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(q),Z.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=m;const G=n.hash;(G.directionalLength!==v||G.pointLength!==M||G.spotLength!==E||G.rectAreaLength!==p||G.hemiLength!==d||G.numDirectionalShadows!==P||G.numPointShadows!==A||G.numSpotShadows!==L||G.numSpotMaps!==X||G.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=p,n.point.length=M,n.hemi.length=d,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=L+X-I,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,G.directionalLength=v,G.pointLength=M,G.spotLength=E,G.rectAreaLength=p,G.hemiLength=d,G.numDirectionalShadows=P,G.numPointShadows=A,G.numSpotShadows=L,G.numSpotMaps=X,G.numLightProbes=D,n.version=yv++)}function c(h,f){let g=0,m=0,v=0,M=0,E=0;const p=f.matrixWorldInverse;for(let d=0,P=h.length;d<P;d++){const A=h[d];if(A.isDirectionalLight){const L=n.directional[g];L.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(A.isSpotLight){const L=n.spot[v];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),v++}else if(A.isRectAreaLight){const L=n.rectArea[M];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(A.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){const L=n.point[m];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const L=n.hemi[E];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(p),E++}}}return{setup:l,setupView:c,state:n}}function ru(i){const e=new bv(i),t=[],n=[];function r(f){h.camera=f,t.length=0,n.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(){e.setup(t)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tv(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new ru(i),e.set(r,[l])):a>=o.length?(l=new ru(i),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class Av extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pv(i,e,t){let n=new Fu;const r=new mt,a=new mt,o=new zt,l=new Av({depthPacking:Ef}),c=new wv,h={},f=t.maxTextureSize,g={[hi]:nn,[nn]:hi,[Xn]:Xn},m=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Cv,fragmentShader:Rv}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new Zn;M.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $n(M,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let d=this.type;this.render=function(I,D,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const T=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),K=i.state;K.setBlending(ci),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=d!==Wn&&this.type===Wn,te=d===Wn&&this.type!==Wn;for(let ee=0,Z=I.length;ee<Z;ee++){const re=I[ee],R=re.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const xe=R.getFrameExtents();if(r.multiply(xe),a.copy(R.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/xe.x),r.x=a.x*xe.x,R.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/xe.y),r.y=a.y*xe.y,R.mapSize.y=a.y)),R.map===null||q===!0||te===!0){const Te=this.type!==Wn?{minFilter:vn,magFilter:vn}:{};R.map!==null&&R.map.dispose(),R.map=new Bi(r.x,r.y,Te),R.map.texture.name=re.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const ye=R.getViewportCount();for(let Te=0;Te<ye;Te++){const ke=R.getViewport(Te);o.set(a.x*ke.x,a.y*ke.y,a.x*ke.z,a.y*ke.w),K.viewport(o),R.updateMatrices(re,Te),n=R.getFrustum(),L(D,G,R.camera,re,this.type)}R.isPointLightShadow!==!0&&this.type===Wn&&P(R,G),R.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,b,N)};function P(I,D){const G=e.update(E);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,v.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(r.x,r.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,G,m,E,null),v.uniforms.shadow_pass.value=I.mapPass.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,G,v,E,null)}function A(I,D,G,T){let b=null;const N=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=G.isPointLight===!0?c:l,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const K=b.uuid,q=D.uuid;let te=h[K];te===void 0&&(te={},h[K]=te);let ee=te[q];ee===void 0&&(ee=b.clone(),te[q]=ee,D.addEventListener("dispose",X)),b=ee}if(b.visible=D.visible,b.wireframe=D.wireframe,T===Wn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:g[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=i.properties.get(b);K.light=G}return b}function L(I,D,G,T,b){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Wn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const q=e.update(I),te=I.material;if(Array.isArray(te)){const ee=q.groups;for(let Z=0,re=ee.length;Z<re;Z++){const R=ee[Z],xe=te[R.materialIndex];if(xe&&xe.visible){const ye=A(I,xe,T,b);I.onBeforeShadow(i,I,D,G,q,ye,R),i.renderBufferDirect(G,null,q,ye,I,R),I.onAfterShadow(i,I,D,G,q,ye,R)}}}else if(te.visible){const ee=A(I,te,T,b);I.onBeforeShadow(i,I,D,G,q,ee,null),i.renderBufferDirect(G,null,q,ee,I,null),I.onAfterShadow(i,I,D,G,q,ee,null)}}const K=I.children;for(let q=0,te=K.length;q<te;q++)L(K[q],D,G,T,b)}function X(I){I.target.removeEventListener("dispose",X);for(const G in h){const T=h[G],b=I.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}function Lv(i){function e(){let F=!1;const he=new zt;let Q=null;const ne=new zt(0,0,0,0);return{setMask:function(de){Q!==de&&!F&&(i.colorMask(de,de,de,de),Q=de)},setLocked:function(de){F=de},setClear:function(de,Ve,ot,Ct,Ut){Ut===!0&&(de*=Ct,Ve*=Ct,ot*=Ct),he.set(de,Ve,ot,Ct),ne.equals(he)===!1&&(i.clearColor(de,Ve,ot,Ct),ne.copy(he))},reset:function(){F=!1,Q=null,ne.set(-1,0,0,0)}}}function t(){let F=!1,he=null,Q=null,ne=null;return{setTest:function(de){de?j(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(de){he!==de&&!F&&(i.depthMask(de),he=de)},setFunc:function(de){if(Q!==de){switch(de){case sf:i.depthFunc(i.NEVER);break;case af:i.depthFunc(i.ALWAYS);break;case of:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case lf:i.depthFunc(i.EQUAL);break;case cf:i.depthFunc(i.GEQUAL);break;case uf:i.depthFunc(i.GREATER);break;case hf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=de}},setLocked:function(de){F=de},setClear:function(de){ne!==de&&(i.clearDepth(de),ne=de)},reset:function(){F=!1,he=null,Q=null,ne=null}}}function n(){let F=!1,he=null,Q=null,ne=null,de=null,Ve=null,ot=null,Ct=null,Ut=null;return{setTest:function(at){F||(at?j(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(at){he!==at&&!F&&(i.stencilMask(at),he=at)},setFunc:function(at,$t,cn){(Q!==at||ne!==$t||de!==cn)&&(i.stencilFunc(at,$t,cn),Q=at,ne=$t,de=cn)},setOp:function(at,$t,cn){(Ve!==at||ot!==$t||Ct!==cn)&&(i.stencilOp(at,$t,cn),Ve=at,ot=$t,Ct=cn)},setLocked:function(at){F=at},setClear:function(at){Ut!==at&&(i.clearStencil(at),Ut=at)},reset:function(){F=!1,he=null,Q=null,ne=null,de=null,Ve=null,ot=null,Ct=null,Ut=null}}}const r=new e,a=new t,o=new n,l=new WeakMap,c=new WeakMap;let h={},f={},g=new WeakMap,m=[],v=null,M=!1,E=null,p=null,d=null,P=null,A=null,L=null,X=null,I=new xt(0,0,0),D=0,G=!1,T=null,b=null,N=null,K=null,q=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(re)[1]),ee=Z>=1):re.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ee=Z>=2);let R=null,xe={};const ye=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),ke=new zt().fromArray(ye),st=new zt().fromArray(Te);function $(F,he,Q,ne){const de=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(F,Ve),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<Q;ot++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(he+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Ve}const le={};le[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Gs),Ae(!1),me(uc),j(i.CULL_FACE),Ee(ci);function j(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function pe(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ne(F,he){return f[F]!==he?(i.bindFramebuffer(F,he),f[F]=he,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Ye(F,he){let Q=m,ne=!1;if(F){Q=g.get(he),Q===void 0&&(Q=[],g.set(he,Q));const de=F.textures;if(Q.length!==de.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,ot=de.length;Ve<ot;Ve++)Q[Ve]=i.COLOR_ATTACHMENT0+Ve;Q.length=de.length,ne=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Q)}function He(F){return v!==F?(i.useProgram(F),v=F,!0):!1}const J={[Di]:i.FUNC_ADD,[Hd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};J[Gd]=i.MIN,J[Wd]=i.MAX;const w={[Xd]:i.ZERO,[qd]:i.ONE,[Yd]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[jd]:i.DST_ALPHA,[$d]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[tf]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(F,he,Q,ne,de,Ve,ot,Ct,Ut,at){if(F===ci){M===!0&&(pe(i.BLEND),M=!1);return}if(M===!1&&(j(i.BLEND),M=!0),F!==kd){if(F!==E||at!==G){if((p!==Di||A!==Di)&&(i.blendEquation(i.FUNC_ADD),p=Di,A=Di),at)switch(F){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,P=null,L=null,X=null,I.set(0,0,0),D=0,E=F,G=at}return}de=de||he,Ve=Ve||Q,ot=ot||ne,(he!==p||de!==A)&&(i.blendEquationSeparate(J[he],J[de]),p=he,A=de),(Q!==d||ne!==P||Ve!==L||ot!==X)&&(i.blendFuncSeparate(w[Q],w[ne],w[Ve],w[ot]),d=Q,P=ne,L=Ve,X=ot),(Ct.equals(I)===!1||Ut!==D)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Ut),I.copy(Ct),D=Ut),E=F,G=!1}function De(F,he){F.side===Xn?pe(i.CULL_FACE):j(i.CULL_FACE);let Q=F.side===nn;he&&(Q=!Q),Ae(Q),F.blending===fr&&F.transparent===!1?Ee(ci):Ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){T!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),T=F)}function me(F){F!==Fd?(j(i.CULL_FACE),F!==b&&(F===uc?i.cullFace(i.BACK):F===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),b=F}function ct(F){F!==N&&(ee&&i.lineWidth(F),N=F)}function Oe(F,he,Q){F?(j(i.POLYGON_OFFSET_FILL),(K!==he||q!==Q)&&(i.polygonOffset(he,Q),K=he,q=Q)):pe(i.POLYGON_OFFSET_FILL)}function Ie(F){F?j(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+te-1),R!==F&&(i.activeTexture(F),R=F)}function x(F,he,Q){Q===void 0&&(R===null?Q=i.TEXTURE0+te-1:Q=R);let ne=xe[Q];ne===void 0&&(ne={type:void 0,texture:void 0},xe[Q]=ne),(ne.type!==F||ne.texture!==he)&&(R!==Q&&(i.activeTexture(Q),R=Q),i.bindTexture(F,he||le[F]),ne.type=F,ne.texture=he)}function H(){const F=xe[R];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(F){ke.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Ce(F){st.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function je(F,he){let Q=c.get(he);Q===void 0&&(Q=new WeakMap,c.set(he,Q));let ne=Q.get(F);ne===void 0&&(ne=i.getUniformBlockIndex(he,F.name),Q.set(F,ne))}function Qe(F,he){const ne=c.get(he).get(F);l.get(he)!==ne&&(i.uniformBlockBinding(he,ne,F.__bindingPointIndex),l.set(he,ne))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},R=null,xe={},f={},g=new WeakMap,m=[],v=null,M=!1,E=null,p=null,d=null,P=null,A=null,L=null,X=null,I=new xt(0,0,0),D=0,G=!1,T=null,b=null,N=null,K=null,q=null,ke.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:Ne,drawBuffers:Ye,useProgram:He,setBlending:Ee,setMaterial:De,setFlipSided:Ae,setCullFace:me,setLineWidth:ct,setPolygonOffset:Oe,setScissorTest:Ie,activeTexture:C,bindTexture:x,unbindTexture:H,compressedTexImage2D:se,compressedTexImage3D:oe,texImage2D:be,texImage3D:it,updateUBOMapping:je,uniformBlockBinding:Qe,texStorage2D:Xe,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:Fe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:qe,viewport:Ce,reset:bt}}function su(i,e,t,n){const r=Dv(n);switch(t){case gu:return i*e;case vu:return i*e;case xu:return i*e*2;case Mu:return i*e/r.components*r.byteLength;case Go:return i*e/r.components*r.byteLength;case Su:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case _u:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case Xo:return i*e*4/r.components*r.byteLength;case Os:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:case fo:return Math.max(i,16)*Math.max(e,8)/4;case co:case ho:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ks:case Lo:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yu:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dv(i){switch(i){case jn:case fu:return{byteLength:1,components:1};case Fr:case pu:case Hr:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Fi:case ko:case qn:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Iv(i,e,t,n,r,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,f=new WeakMap;let g;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return v?new OffscreenCanvas(C,x):$s("canvas")}function E(C,x,H){let se=1;const oe=Ie(C);if((oe.width>H||oe.height>H)&&(se=H/Math.max(oe.width,oe.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(se*oe.width),Fe=Math.floor(se*oe.height);g===void 0&&(g=M(ae,Fe));const ge=x?M(ae,Fe):g;return ge.width=ae,ge.height=Fe,ge.getContext("2d").drawImage(C,0,0,ae,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Fe+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==vn&&C.minFilter!==An}function d(C){i.generateMipmap(C)}function P(C,x,H,se,oe=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=x;if(x===i.RED&&(H===i.FLOAT&&(ae=i.R32F),H===i.HALF_FLOAT&&(ae=i.R16F),H===i.UNSIGNED_BYTE&&(ae=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.R8UI),H===i.UNSIGNED_SHORT&&(ae=i.R16UI),H===i.UNSIGNED_INT&&(ae=i.R32UI),H===i.BYTE&&(ae=i.R8I),H===i.SHORT&&(ae=i.R16I),H===i.INT&&(ae=i.R32I)),x===i.RG&&(H===i.FLOAT&&(ae=i.RG32F),H===i.HALF_FLOAT&&(ae=i.RG16F),H===i.UNSIGNED_BYTE&&(ae=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.RG8UI),H===i.UNSIGNED_SHORT&&(ae=i.RG16UI),H===i.UNSIGNED_INT&&(ae=i.RG32UI),H===i.BYTE&&(ae=i.RG8I),H===i.SHORT&&(ae=i.RG16I),H===i.INT&&(ae=i.RG32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),x===i.RGBA){const Fe=oe?Ws:vt.getTransfer(se);H===i.FLOAT&&(ae=i.RGBA32F),H===i.HALF_FLOAT&&(ae=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ae=Fe===wt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(C,x){let H;return C?x===null||x===Fi||x===vr?H=i.DEPTH24_STENCIL8:x===qn?H=i.DEPTH32F_STENCIL8:x===Fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fi||x===vr?H=i.DEPTH_COMPONENT24:x===qn?H=i.DEPTH_COMPONENT32F:x===Fr&&(H=i.DEPTH_COMPONENT16),H}function L(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function X(C){const x=C.target;x.removeEventListener("dispose",X),D(x),x.isVideoTexture&&f.delete(x)}function I(C){const x=C.target;x.removeEventListener("dispose",I),T(x)}function D(C){const x=n.get(C);if(x.__webglInit===void 0)return;const H=C.source,se=m.get(H);if(se){const oe=se[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&G(C),Object.keys(se).length===0&&m.delete(H)}n.remove(C)}function G(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const H=C.source,se=m.get(H);delete se[x.__cacheKey],o.memory.textures--}function T(C){const x=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(x.__webglFramebuffer[se]))for(let oe=0;oe<x.__webglFramebuffer[se].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[se][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[se]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[se])}else{if(Array.isArray(x.__webglFramebuffer))for(let se=0;se<x.__webglFramebuffer.length;se++)i.deleteFramebuffer(x.__webglFramebuffer[se]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let se=0;se<x.__webglColorRenderbuffer.length;se++)x.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[se]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=C.textures;for(let se=0,oe=H.length;se<oe;se++){const ae=n.get(H[se]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(H[se])}n.remove(C)}let b=0;function N(){b=0}function K(){const C=b;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),b+=1,C}function q(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function te(C,x){const H=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(H,C,x);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function ee(C,x){const H=n.get(C);if(C.version>0&&H.__version!==C.version){st(H,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function Z(C,x){const H=n.get(C);if(C.version>0&&H.__version!==C.version){st(H,C,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function re(C,x){const H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const R={[oo]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},xe={[vn]:i.NEAREST,[Sf]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},ye={[Af]:i.NEVER,[Df]:i.ALWAYS,[wf]:i.LESS,[Eu]:i.LEQUAL,[Cf]:i.EQUAL,[Lf]:i.GEQUAL,[Rf]:i.GREATER,[Pf]:i.NOTEQUAL};function Te(C,x){if(x.type===qn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===Ra||x.magFilter===hs||x.magFilter===Ni||x.minFilter===An||x.minFilter===Ra||x.minFilter===hs||x.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,R[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,R[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,R[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==hs&&x.minFilter!==Ni||x.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ke(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",X));const se=x.source;let oe=m.get(se);oe===void 0&&(oe={},m.set(se,oe));const ae=q(x);if(ae!==C.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ae].usedTimes++;const Fe=oe[C.__cacheKey];Fe!==void 0&&(oe[C.__cacheKey].usedTimes--,Fe.usedTimes===0&&G(x)),C.__cacheKey=ae,C.__webglTexture=oe[ae].texture}return H}function st(C,x,H){let se=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=i.TEXTURE_3D);const oe=ke(C,x),ae=x.source;t.bindTexture(se,C.__webglTexture,i.TEXTURE0+H);const Fe=n.get(ae);if(ae.version!==Fe.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const ge=vt.getPrimaries(vt.workingColorSpace),Se=x.colorSpace===li?null:vt.getPrimaries(x.colorSpace),Xe=x.colorSpace===li||ge===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ue=E(x.image,!1,r.maxTextureSize);ue=Oe(x,ue);const be=a.convert(x.format,x.colorSpace),it=a.convert(x.type);let qe=P(x.internalFormat,be,it,x.colorSpace,x.isVideoTexture);Te(se,x);let Ce;const je=x.mipmaps,Qe=x.isVideoTexture!==!0,bt=Fe.__version===void 0||oe===!0,F=ae.dataReady,he=L(x,ue);if(x.isDepthTexture)qe=A(x.format===xr,x.type),bt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,qe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,be,it,null));else if(x.isDataTexture)if(je.length>0){Qe&&bt&&t.texStorage2D(i.TEXTURE_2D,he,qe,je[0].width,je[0].height);for(let Q=0,ne=je.length;Q<ne;Q++)Ce=je[Q],Qe?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,be,it,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Ce.width,Ce.height,0,be,it,Ce.data);x.generateMipmaps=!1}else Qe?(bt&&t.texStorage2D(i.TEXTURE_2D,he,qe,ue.width,ue.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,be,it,ue.data)):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,be,it,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Qe&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,qe,je[0].width,je[0].height,ue.depth);for(let Q=0,ne=je.length;Q<ne;Q++)if(Ce=je[Q],x.format!==wn)if(be!==null)if(Qe){if(F)if(x.layerUpdates.size>0){const de=su(Ce.width,Ce.height,x.format,x.type);for(const Ve of x.layerUpdates){const ot=Ce.data.subarray(Ve*de/Ce.data.BYTES_PER_ELEMENT,(Ve+1)*de/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ve,Ce.width,Ce.height,1,be,ot,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ue.depth,be,Ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ue.depth,be,it,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Ce.width,Ce.height,ue.depth,0,be,it,Ce.data)}else{Qe&&bt&&t.texStorage2D(i.TEXTURE_2D,he,qe,je[0].width,je[0].height);for(let Q=0,ne=je.length;Q<ne;Q++)Ce=je[Q],x.format!==wn?be!==null?Qe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,be,it,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Ce.width,Ce.height,0,be,it,Ce.data)}else if(x.isDataArrayTexture)if(Qe){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,qe,ue.width,ue.height,ue.depth),F)if(x.layerUpdates.size>0){const Q=su(ue.width,ue.height,x.format,x.type);for(const ne of x.layerUpdates){const de=ue.data.subarray(ne*Q/ue.data.BYTES_PER_ELEMENT,(ne+1)*Q/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ue.width,ue.height,1,be,it,de)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,it,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,ue.width,ue.height,ue.depth,0,be,it,ue.data);else if(x.isData3DTexture)Qe?(bt&&t.texStorage3D(i.TEXTURE_3D,he,qe,ue.width,ue.height,ue.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,it,ue.data)):t.texImage3D(i.TEXTURE_3D,0,qe,ue.width,ue.height,ue.depth,0,be,it,ue.data);else if(x.isFramebufferTexture){if(bt)if(Qe)t.texStorage2D(i.TEXTURE_2D,he,qe,ue.width,ue.height);else{let Q=ue.width,ne=ue.height;for(let de=0;de<he;de++)t.texImage2D(i.TEXTURE_2D,de,qe,Q,ne,0,be,it,null),Q>>=1,ne>>=1}}else if(je.length>0){if(Qe&&bt){const Q=Ie(je[0]);t.texStorage2D(i.TEXTURE_2D,he,qe,Q.width,Q.height)}for(let Q=0,ne=je.length;Q<ne;Q++)Ce=je[Q],Qe?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be,it,Ce):t.texImage2D(i.TEXTURE_2D,Q,qe,be,it,Ce);x.generateMipmaps=!1}else if(Qe){if(bt){const Q=Ie(ue);t.texStorage2D(i.TEXTURE_2D,he,qe,Q.width,Q.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,it,ue)}else t.texImage2D(i.TEXTURE_2D,0,qe,be,it,ue);p(x)&&d(se),Fe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function $(C,x,H){if(x.image.length!==6)return;const se=ke(C,x),oe=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const ae=n.get(oe);if(oe.version!==ae.__version||se===!0){t.activeTexture(i.TEXTURE0+H);const Fe=vt.getPrimaries(vt.workingColorSpace),ge=x.colorSpace===li?null:vt.getPrimaries(x.colorSpace),Se=x.colorSpace===li||Fe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,be=[];for(let ne=0;ne<6;ne++)!Xe&&!ue?be[ne]=E(x.image[ne],!0,r.maxCubemapSize):be[ne]=ue?x.image[ne].image:x.image[ne],be[ne]=Oe(x,be[ne]);const it=be[0],qe=a.convert(x.format,x.colorSpace),Ce=a.convert(x.type),je=P(x.internalFormat,qe,Ce,x.colorSpace),Qe=x.isVideoTexture!==!0,bt=ae.__version===void 0||se===!0,F=oe.dataReady;let he=L(x,it);Te(i.TEXTURE_CUBE_MAP,x);let Q;if(Xe){Qe&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,je,it.width,it.height);for(let ne=0;ne<6;ne++){Q=be[ne].mipmaps;for(let de=0;de<Q.length;de++){const Ve=Q[de];x.format!==wn?qe!==null?Qe?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Ve.width,Ve.height,qe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,je,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Ve.width,Ve.height,qe,Ce,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,je,Ve.width,Ve.height,0,qe,Ce,Ve.data)}}}else{if(Q=x.mipmaps,Qe&&bt){Q.length>0&&he++;const ne=Ie(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ue){Qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be[ne].width,be[ne].height,qe,Ce,be[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,be[ne].width,be[ne].height,0,qe,Ce,be[ne].data);for(let de=0;de<Q.length;de++){const ot=Q[de].image[ne].image;Qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,ot.width,ot.height,qe,Ce,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,je,ot.width,ot.height,0,qe,Ce,ot.data)}}else{Qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,qe,Ce,be[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,qe,Ce,be[ne]);for(let de=0;de<Q.length;de++){const Ve=Q[de];Qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,qe,Ce,Ve.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,je,qe,Ce,Ve.image[ne])}}}p(x)&&d(i.TEXTURE_CUBE_MAP),ae.__version=oe.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function le(C,x,H,se,oe,ae){const Fe=a.convert(H.format,H.colorSpace),ge=a.convert(H.type),Se=P(H.internalFormat,Fe,ge,H.colorSpace);if(!n.get(x).__hasExternalTextures){const ue=Math.max(1,x.width>>ae),be=Math.max(1,x.height>>ae);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,Se,ue,be,x.depth,0,Fe,ge,null):t.texImage2D(oe,ae,Se,ue,be,0,Fe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),me(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,oe,n.get(H).__webglTexture,0,Ae(x)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,oe,n.get(H).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(C,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const se=x.depthTexture,oe=se&&se.isDepthTexture?se.type:null,ae=A(x.stencilBuffer,oe),Fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ae(x);me(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ae,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,C)}else{const se=x.textures;for(let oe=0;oe<se.length;oe++){const ae=se[oe],Fe=a.convert(ae.format,ae.colorSpace),ge=a.convert(ae.type),Se=P(ae.internalFormat,Fe,ge,ae.colorSpace),Xe=Ae(x);H&&me(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Se,x.width,x.height):me(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const se=n.get(x.depthTexture).__webglTexture,oe=Ae(x);if(x.depthTexture.format===pr)me(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(x.depthTexture.format===xr)me(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const x=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,C)}else if(H){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]=i.createRenderbuffer(),j(x.__webglDepthbuffer[se],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),j(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(C,x,H){const se=n.get(C);x!==void 0&&le(se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ne(C)}function He(C){const x=C.texture,H=n.get(C),se=n.get(x);C.addEventListener("dispose",I);const oe=C.textures,ae=C.isWebGLCubeRenderTarget===!0,Fe=oe.length>1;if(Fe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=x.version,o.memory.textures++),ae){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Se=0;Se<x.mipmaps.length;Se++)H.__webglFramebuffer[ge][Se]=i.createFramebuffer()}else H.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)H.__webglFramebuffer[ge]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let ge=0,Se=oe.length;ge<Se;ge++){const Xe=n.get(oe[ge]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&me(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const Se=oe[ge];H.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);const Xe=a.convert(Se.format,Se.colorSpace),ue=a.convert(Se.type),be=P(Se.internalFormat,Xe,ue,Se.colorSpace,C.isXRRenderTarget===!0),it=Ae(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,be,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),j(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Te(i.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)le(H.__webglFramebuffer[ge][Se],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else le(H.__webglFramebuffer[ge],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ge=0,Se=oe.length;ge<Se;ge++){const Xe=oe[ge],ue=n.get(Xe);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Te(i.TEXTURE_2D,Xe),le(H.__webglFramebuffer,C,Xe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(Xe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),Te(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)le(H.__webglFramebuffer[Se],C,x,i.COLOR_ATTACHMENT0,ge,Se);else le(H.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ge,0);p(x)&&d(ge),t.unbindTexture()}C.depthBuffer&&Ne(C)}function J(C){const x=C.textures;for(let H=0,se=x.length;H<se;H++){const oe=x[H];if(p(oe)){const ae=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(oe).__webglTexture;t.bindTexture(ae,Fe),d(ae),t.unbindTexture()}}}const w=[],Ee=[];function De(C){if(C.samples>0){if(me(C)===!1){const x=C.textures,H=C.width,se=C.height;let oe=i.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(C),ge=x.length>1;if(ge)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Se]);const Xe=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,H,se,0,0,H,se,oe,i.NEAREST),c===!0&&(w.length=0,Ee.length=0,w.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(w.push(ae),Ee.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Se]);const Xe=n.get(x[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ae(C){return Math.min(r.maxSamples,C.samples)}function me(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(C){const x=o.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function Oe(C,x){const H=C.colorSpace,se=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==fi&&H!==li&&(vt.getTransfer(H)===wt?(se!==wn||oe!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=N,this.setTexture2D=te,this.setTexture2DArray=ee,this.setTexture3D=Z,this.setTextureCube=re,this.rebindTextures=Ye,this.setupRenderTarget=He,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=me}function Uv(i,e){function t(n,r=li){let a;const o=vt.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.BYTE;if(n===pu)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===_u)return i.RGB;if(n===wn)return i.RGBA;if(n===vu)return i.LUMINANCE;if(n===xu)return i.LUMINANCE_ALPHA;if(n===pr)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Mu)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Su)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===Os||n===Fs||n===Bs||n===zs)if(o===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Os)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Os)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===po||n===mo)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===go)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===bo||n===To||n===Ao||n===wo||n===Co||n===Ro||n===Po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===_o)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Lo||n===Do)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ks)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Io||n===Uo||n===No)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ks)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Nv extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ov={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,n),d=this._getHandJoint(h,E);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],m=f.position.distanceTo(g.position),v=.02,M=.005;h.inputState.pinching&&m>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ov)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new rn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Fv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends Sr{constructor(e,t){super();const n=this;let r=null,a=1,o=null,l="local-floor",c=1,h=null,f=null,g=null,m=null,v=null,M=null;const E=new zv,p=t.getContextAttributes();let d=null,P=null;const A=[],L=[],X=new mt;let I=null;const D=new gn;D.layers.enable(1),D.viewport=new zt;const G=new gn;G.layers.enable(2),G.viewport=new zt;const T=[D,G],b=new Nv;b.layers.enable(1),b.layers.enable(2);let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=A[$];return le===void 0&&(le=new no,A[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=A[$];return le===void 0&&(le=new no,A[$]=le),le.getGripSpace()},this.getHand=function($){let le=A[$];return le===void 0&&(le=new no,A[$]=le),le.getHandSpace()};function q($){const le=L.indexOf($.inputSource);if(le===-1)return;const j=A[le];j!==void 0&&(j.update($.inputSource,$.frame,h||o),j.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ee);for(let $=0;$<A.length;$++){const le=L[$];le!==null&&(L[$]=null,A[$].disconnect(le))}N=null,K=null,E.reset(),e.setRenderTarget(d),v=null,m=null,g=null,r=null,P=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(X),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new Bi(v.framebufferWidth,v.framebufferHeight,{format:wn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,j=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?xr:pr,j=p.stencil?vr:Fi);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};g=new XRWebGLBinding(r,t),m=g.createProjectionLayer(Ne),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Bi(m.textureWidth,m.textureHeight,{format:wn,type:jn,depthTexture:new zu(m.textureWidth,m.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee($){for(let le=0;le<$.removed.length;le++){const j=$.removed[le],pe=L.indexOf(j);pe>=0&&(L[pe]=null,A[pe].disconnect(j))}for(let le=0;le<$.added.length;le++){const j=$.added[le];let pe=L.indexOf(j);if(pe===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=L.length){L.push(j),pe=Ye;break}else if(L[Ye]===null){L[Ye]=j,pe=Ye;break}if(pe===-1)break}const Ne=A[pe];Ne&&Ne.connect(j)}}const Z=new W,re=new W;function R($,le,j){Z.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(j.matrixWorld);const pe=Z.distanceTo(re),Ne=le.projectionMatrix.elements,Ye=j.projectionMatrix.elements,He=Ne[14]/(Ne[10]-1),J=Ne[14]/(Ne[10]+1),w=(Ne[9]+1)/Ne[5],Ee=(Ne[9]-1)/Ne[5],De=(Ne[8]-1)/Ne[0],Ae=(Ye[8]+1)/Ye[0],me=He*De,ct=He*Ae,Oe=pe/(-De+Ae),Ie=Oe*-De;le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ie),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const C=He+Oe,x=J+Oe,H=me-Ie,se=ct+(pe-Ie),oe=w*J/x*C,ae=Ee*J/x*C;$.projectionMatrix.makePerspective(H,se,oe,ae,C,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function xe($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;E.texture!==null&&($.near=E.depthNear,$.far=E.depthFar),b.near=G.near=D.near=$.near,b.far=G.far=D.far=$.far,(N!==b.near||K!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,K=b.far,D.near=N,D.far=K,G.near=N,G.far=K,D.updateProjectionMatrix(),G.updateProjectionMatrix(),$.updateProjectionMatrix());const le=$.parent,j=b.cameras;xe(b,le);for(let pe=0;pe<j.length;pe++)xe(j[pe],le);j.length===2?R(b,D,G):b.projectionMatrix.copy(D.projectionMatrix),ye($,b,le)};function ye($,le,j){j===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(j.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function($){c=$,m!==null&&(m.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let Te=null;function ke($,le){if(f=le.getViewerPose(h||o),M=le,f!==null){const j=f.views;v!==null&&(e.setRenderTargetFramebuffer(P,v.framebuffer),e.setRenderTarget(P));let pe=!1;j.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Ye=0;Ye<j.length;Ye++){const He=j[Ye];let J=null;if(v!==null)J=v.getViewport(He);else{const Ee=g.getViewSubImage(m,He);J=Ee.viewport,Ye===0&&(e.setRenderTargetTextures(P,Ee.colorTexture,m.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(P))}let w=T[Ye];w===void 0&&(w=new gn,w.layers.enable(Ye),w.viewport=new zt,T[Ye]=w),w.matrix.fromArray(He.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(He.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(J.x,J.y,J.width,J.height),Ye===0&&(b.matrix.copy(w.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(w)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ye=g.getDepthInformation(j[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,r.renderState)}}for(let j=0;j<A.length;j++){const pe=L[j],Ne=A[j];pe!==null&&Ne!==void 0&&Ne.update(pe,le,h||o)}Te&&Te($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),M=null}const st=new Bu;st.setAnimationLoop(ke),this.setAnimationLoop=function($){Te=$},this.dispose=function(){}}}const Ri=new Kn,Hv=new It;function Vv(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Uu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,P,A,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),g(p,d)):d.isMeshPhongMaterial?(a(p,d),f(p,d)):d.isMeshStandardMaterial?(a(p,d),m(p,d),d.isMeshPhysicalMaterial&&v(p,d,L)):d.isMeshMatcapMaterial?(a(p,d),M(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),E(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&l(p,d)):d.isPointsMaterial?c(p,d,P,A):d.isSpriteMaterial?h(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===nn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===nn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const P=e.get(d),A=P.envMap,L=P.envMapRotation;A&&(p.envMap.value=A,Ri.copy(L),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ri)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function l(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,P,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*P,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function g(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function m(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function v(p,d,P){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,d){d.matcap&&(p.matcap.value=d.matcap)}function E(p,d){const P=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gv(i,e,t,n){let r={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,A){const L=A.program;n.uniformBlockBinding(P,L)}function h(P,A){let L=r[P.id];L===void 0&&(M(P),L=f(P),r[P.id]=L,P.addEventListener("dispose",p));const X=A.program;n.updateUBOMapping(P,X);const I=e.render.frame;a[P.id]!==I&&(m(P),a[P.id]=I)}function f(P){const A=g();P.__bindingPointIndex=A;const L=i.createBuffer(),X=P.__size,I=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,X,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,L),L}function g(){for(let P=0;P<l;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const A=r[P.id],L=P.uniforms,X=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let I=0,D=L.length;I<D;I++){const G=Array.isArray(L[I])?L[I]:[L[I]];for(let T=0,b=G.length;T<b;T++){const N=G[T];if(v(N,I,T,X)===!0){const K=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let ee=0;ee<q.length;ee++){const Z=q[ee],re=E(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,K+te,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,te),te+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(P,A,L,X){const I=P.value,D=A+"_"+L;if(X[D]===void 0)return typeof I=="number"||typeof I=="boolean"?X[D]=I:X[D]=I.clone(),!0;{const G=X[D];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return X[D]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function M(P){const A=P.uniforms;let L=0;const X=16;for(let D=0,G=A.length;D<G;D++){const T=Array.isArray(A[D])?A[D]:[A[D]];for(let b=0,N=T.length;b<N;b++){const K=T[b],q=Array.isArray(K.value)?K.value:[K.value];for(let te=0,ee=q.length;te<ee;te++){const Z=q[te],re=E(Z),R=L%X;R!==0&&X-R<re.boundary&&(L+=X-R),K.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=re.storage}}}const I=L%X;return I>0&&(L+=X-I),P.__size=L,P.__cache={},this}function E(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function p(P){const A=P.target;A.removeEventListener("dispose",p);const L=o.indexOf(A.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function d(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},a={}}return{bind:c,update:h,dispose:d}}class Wv{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),M=new Int32Array(4);let E=null,p=null;const d=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=ui,this.toneMappingExposure=1;const A=this;let L=!1,X=0,I=0,D=null,G=-1,T=null;const b=new zt,N=new zt;let K=null;const q=new xt(0);let te=0,ee=t.width,Z=t.height,re=1,R=null,xe=null;const ye=new zt(0,0,ee,Z),Te=new zt(0,0,ee,Z);let ke=!1;const st=new Fu;let $=!1,le=!1;const j=new It,pe=new W,Ne=new zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function J(){return D===null?re:1}let w=n;function Ee(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",de,!1),w===null){const U="webgl2";if(w=Ee(U,S),w===null)throw Ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let De,Ae,me,ct,Oe,Ie,C,x,H,se,oe,ae,Fe,ge,Se,Xe,ue,be,it,qe,Ce,je,Qe,bt;function F(){De=new Zg(w),De.init(),je=new Uv(w,De),Ae=new Wg(w,De,e,je),me=new Lv(w),ct=new e_(w),Oe=new _v,Ie=new Iv(w,De,me,Oe,Ae,je,ct),C=new qg(A),x=new Kg(A),H=new ap(w),Qe=new Vg(w,H),se=new Jg(w,H,ct,Qe),oe=new n_(w,se,H,ct),it=new t_(w,Ae,Ie),Xe=new Xg(Oe),ae=new gv(A,C,x,De,Ae,Qe,Xe),Fe=new Vv(A,Oe),ge=new xv,Se=new Tv(De),be=new Hg(A,C,x,me,oe,m,c),ue=new Pv(A,oe,Ae),bt=new Gv(w,ct,Ae,me),qe=new Gg(w,De,ct),Ce=new Qg(w,De,ct),ct.programs=ae.programs,A.capabilities=Ae,A.extensions=De,A.properties=Oe,A.renderLists=ge,A.shadowMap=ue,A.state=me,A.info=ct}F();const he=new kv(A,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=De.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=De.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(ee,Z,!1))},this.getSize=function(S){return S.set(ee,Z)},this.setSize=function(S,U,k=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=S,Z=U,t.width=Math.floor(S*re),t.height=Math.floor(U*re),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ee*re,Z*re).floor()},this.setDrawingBufferSize=function(S,U,k){ee=S,Z=U,re=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,U,k,V){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,U,k,V),me.viewport(b.copy(ye).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,U,k,V){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,U,k,V),me.scissor(N.copy(Te).multiplyScalar(re).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(S){me.setScissorTest(ke=S)},this.setOpaqueSort=function(S){R=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(S=!0,U=!0,k=!0){let V=0;if(S){let z=!1;if(D!==null){const ce=D.texture.format;z=ce===Xo||ce===Wo||ce===Go}if(z){const ce=D.texture.type,_e=ce===jn||ce===Fi||ce===Fr||ce===vr||ce===Ho||ce===Vo,Pe=be.getClearColor(),Le=be.getClearAlpha(),Be=Pe.r,Ge=Pe.g,ze=Pe.b;_e?(v[0]=Be,v[1]=Ge,v[2]=ze,v[3]=Le,w.clearBufferuiv(w.COLOR,0,v)):(M[0]=Be,M[1]=Ge,M[2]=ze,M[3]=Le,w.clearBufferiv(w.COLOR,0,M))}else V|=w.COLOR_BUFFER_BIT}U&&(V|=w.DEPTH_BUFFER_BIT),k&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),Se.dispose(),Oe.dispose(),C.dispose(),x.dispose(),oe.dispose(),Qe.dispose(),bt.dispose(),ae.dispose(),he.dispose(),he.removeEventListener("sessionstart",cn),he.removeEventListener("sessionend",Yr),Un.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=ct.autoReset,U=ue.enabled,k=ue.autoUpdate,V=ue.needsUpdate,z=ue.type;F(),ct.autoReset=S,ue.enabled=U,ue.autoUpdate=k,ue.needsUpdate=V,ue.type=z}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const U=S.target;U.removeEventListener("dispose",Ve),ot(U)}function ot(S){Ct(S),Oe.remove(S)}function Ct(S){const U=Oe.get(S).programs;U!==void 0&&(U.forEach(function(k){ae.releaseProgram(k)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,V,z,ce){U===null&&(U=Ye);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Pe=ia(S,U,k,V,z);me.setMaterial(V,_e);let Le=k.index,Be=1;if(V.wireframe===!0){if(Le=se.getWireframeAttribute(k),Le===void 0)return;Be=2}const Ge=k.drawRange,ze=k.attributes.position;let ut=Ge.start*Be,Tt=(Ge.start+Ge.count)*Be;ce!==null&&(ut=Math.max(ut,ce.start*Be),Tt=Math.min(Tt,(ce.start+ce.count)*Be)),Le!==null?(ut=Math.max(ut,0),Tt=Math.min(Tt,Le.count)):ze!=null&&(ut=Math.max(ut,0),Tt=Math.min(Tt,ze.count));const At=Tt-ut;if(At<0||At===1/0)return;Qe.setup(z,V,Pe,k,Le);let Ht,dt=qe;if(Le!==null&&(Ht=H.get(Le),dt=Ce,dt.setIndex(Ht)),z.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*J()),dt.setMode(w.LINES)):dt.setMode(w.TRIANGLES);else if(z.isLine){let Ue=V.linewidth;Ue===void 0&&(Ue=1),me.setLineWidth(Ue*J()),z.isLineSegments?dt.setMode(w.LINES):z.isLineLoop?dt.setMode(w.LINE_LOOP):dt.setMode(w.LINE_STRIP)}else z.isPoints?dt.setMode(w.POINTS):z.isSprite&&dt.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)dt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,Lt=z._multiDrawCounts,ft=z._multiDrawCount,Jt=Le?H.get(Le).bytesPerElement:1,Nn=Oe.get(V).currentProgram.getUniforms();for(let Vt=0;Vt<ft;Vt++)Nn.setValue(w,"_gl_DrawID",Vt),dt.render(Ue[Vt]/Jt,Lt[Vt])}else if(z.isInstancedMesh)dt.renderInstances(ut,At,z.count);else if(k.isInstancedBufferGeometry){const Ue=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Lt=Math.min(k.instanceCount,Ue);dt.renderInstances(ut,At,Lt)}else dt.render(ut,At)};function Ut(S,U,k){S.transparent===!0&&S.side===Xn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,ki(S,U,k),S.side=hi,S.needsUpdate=!0,ki(S,U,k),S.side=Xn):ki(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=Se.get(k),p.init(U),P.push(p),k.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),S!==k&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const V=new Set;return S.traverse(function(z){const ce=z.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Pe=ce[_e];Ut(Pe,k,z),V.add(Pe)}else Ut(ce,k,z),V.add(ce)}),P.pop(),p=null,V},this.compileAsync=function(S,U,k=null){const V=this.compile(S,U,k);return new Promise(z=>{function ce(){if(V.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){z(S);return}setTimeout(ce,10)}De.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let at=null;function $t(S){at&&at(S)}function cn(){Un.stop()}function Yr(){Un.start()}const Un=new Bu;Un.setAnimationLoop($t),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){at=S,he.setAnimationLoop(S),S===null?Un.stop():Un.start()},he.addEventListener("sessionstart",cn),he.addEventListener("sessionend",Yr),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,U,D),p=Se.get(S,P.length),p.init(U),P.push(p),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(j),le=this.localClippingEnabled,$=Xe.init(this.clippingPlanes,le),E=ge.get(S,d.length),E.init(),d.push(E),he.enabled===!0&&he.isPresenting===!0){const ce=A.xr.getDepthSensingMesh();ce!==null&&Er(ce,U,-1/0,A.sortObjects)}Er(S,U,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(R,xe),He=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,He&&be.addToRenderList(E,S),this.info.render.frame++,$===!0&&Xe.beginShadows();const k=p.state.shadowsArray;ue.render(k,S,U),$===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=E.opaque,z=E.transmissive;if(p.setupLights(),U.isArrayCamera){const ce=U.cameras;if(z.length>0)for(let _e=0,Pe=ce.length;_e<Pe;_e++){const Le=ce[_e];zi(V,z,S,Le)}He&&be.render(S);for(let _e=0,Pe=ce.length;_e<Pe;_e++){const Le=ce[_e];$r(E,S,Le,Le.viewport)}}else z.length>0&&zi(V,z,S,U),He&&be.render(S),$r(E,S,U);D!==null&&(Ie.updateMultisampleRenderTarget(D),Ie.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(A,S,U),Qe.resetDefaultState(),G=-1,T=null,P.pop(),P.length>0?(p=P[P.length-1],$===!0&&Xe.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function Er(S,U,k,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||st.intersectsSprite(S)){V&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(j);const _e=oe.update(S),Pe=S.material;Pe.visible&&E.push(S,_e,Pe,k,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||st.intersectsObject(S))){const _e=oe.update(S),Pe=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(j)),Array.isArray(Pe)){const Le=_e.groups;for(let Be=0,Ge=Le.length;Be<Ge;Be++){const ze=Le[Be],ut=Pe[ze.materialIndex];ut&&ut.visible&&E.push(S,_e,ut,k,Ne.z,ze)}}else Pe.visible&&E.push(S,_e,Pe,k,Ne.z,null)}}const ce=S.children;for(let _e=0,Pe=ce.length;_e<Pe;_e++)Er(ce[_e],U,k,V)}function $r(S,U,k,V){const z=S.opaque,ce=S.transmissive,_e=S.transparent;p.setupLightsView(k),$===!0&&Xe.setGlobalState(A.clippingPlanes,k),V&&me.viewport(b.copy(V)),z.length>0&&Mn(z,U,k),ce.length>0&&Mn(ce,U,k),_e.length>0&&Mn(_e,U,k),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function zi(S,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Bi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Hr:jn,minFilter:Ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[V.id],_e=V.viewport||b;ce.setSize(_e.z,_e.w);const Pe=A.getRenderTarget();A.setRenderTarget(ce),A.getClearColor(q),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),He?be.render(k):A.clear();const Le=A.toneMapping;A.toneMapping=ui;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),$===!0&&Xe.setGlobalState(A.clippingPlanes,V),Mn(S,k,V),Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ze=0,ut=U.length;ze<ut;ze++){const Tt=U[ze],At=Tt.object,Ht=Tt.geometry,dt=Tt.material,Ue=Tt.group;if(dt.side===Xn&&At.layers.test(V.layers)){const Lt=dt.side;dt.side=nn,dt.needsUpdate=!0,pi(At,k,V,Ht,dt,Ue),dt.side=Lt,dt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce))}A.setRenderTarget(Pe),A.setClearColor(q,te),Be!==void 0&&(V.viewport=Be),A.toneMapping=Le}function Mn(S,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ce=S.length;z<ce;z++){const _e=S[z],Pe=_e.object,Le=_e.geometry,Be=V===null?_e.material:V,Ge=_e.group;Pe.layers.test(k.layers)&&pi(Pe,U,k,Le,Be,Ge)}}function pi(S,U,k,V,z,ce){S.onBeforeRender(A,U,k,V,z,ce),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.transparent===!0&&z.side===Xn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,A.renderBufferDirect(k,U,V,z,S,ce),z.side=hi,z.needsUpdate=!0,A.renderBufferDirect(k,U,V,z,S,ce),z.side=Xn):A.renderBufferDirect(k,U,V,z,S,ce),S.onAfterRender(A,U,k,V,z,ce)}function ki(S,U,k){U.isScene!==!0&&(U=Ye);const V=Oe.get(S),z=p.state.lights,ce=p.state.shadowsArray,_e=z.state.version,Pe=ae.getParameters(S,z.state,ce,U,k),Le=ae.getProgramCacheKey(Pe);let Be=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?x:C).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Ve),Be=new Map,V.programs=Be);let Ge=Be.get(Le);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===_e)return jr(S,Pe),Ge}else Pe.uniforms=ae.getUniforms(S),S.onBeforeCompile(Pe,A),Ge=ae.acquireProgram(Pe,Le),Be.set(Le,Ge),V.uniforms=Pe.uniforms;const ze=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=Xe.uniform),jr(S,Pe),V.needsLights=kt(S),V.lightsStateVersion=_e,V.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function Hi(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Hs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function jr(S,U){const k=Oe.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function ia(S,U,k,V,z){U.isScene!==!0&&(U=Ye),Ie.resetTextureUnits();const ce=U.fog,_e=V.isMeshStandardMaterial?U.environment:null,Pe=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fi,Le=(V.isMeshStandardMaterial?x:C).get(V.envMap||_e),Be=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!k.morphAttributes.position,ut=!!k.morphAttributes.normal,Tt=!!k.morphAttributes.color;let At=ui;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=A.toneMapping);const Ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,dt=Ht!==void 0?Ht.length:0,Ue=Oe.get(V),Lt=p.state.lights;if($===!0&&(le===!0||S!==T)){const Xt=S===T&&V.id===G;Xe.setState(V,S,Xt)}let ft=!1;V.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Lt.state.version||Ue.outputColorSpace!==Pe||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==Le||V.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Xe.numPlanes||Ue.numIntersection!==Xe.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==Ge||Ue.morphTargets!==ze||Ue.morphNormals!==ut||Ue.morphColors!==Tt||Ue.toneMapping!==At||Ue.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Ue.__version=V.version);let Jt=Ue.currentProgram;ft===!0&&(Jt=ki(V,U,z));let Nn=!1,Vt=!1,Qt=!1;const ht=Jt.getUniforms(),Gt=Ue.uniforms;if(me.useProgram(Jt.program)&&(Nn=!0,Vt=!0,Qt=!0),V.id!==G&&(G=V.id,Vt=!0),Nn||T!==S){ht.setValue(w,"projectionMatrix",S.projectionMatrix),ht.setValue(w,"viewMatrix",S.matrixWorldInverse);const Xt=ht.map.cameraPosition;Xt!==void 0&&Xt.setValue(w,pe.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&ht.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Vt=!0,Qt=!0)}if(z.isSkinnedMesh){ht.setOptional(w,z,"bindMatrix"),ht.setOptional(w,z,"bindMatrixInverse");const Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ht.setValue(w,"boneTexture",Xt.boneTexture,Ie))}z.isBatchedMesh&&(ht.setOptional(w,z,"batchingTexture"),ht.setValue(w,"batchingTexture",z._matricesTexture,Ie),ht.setOptional(w,z,"batchingIdTexture"),ht.setValue(w,"batchingIdTexture",z._indirectTexture,Ie),ht.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(w,"batchingColorTexture",z._colorsTexture,Ie));const Wt=k.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&it.update(z,k,Jt),(Vt||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,ht.setValue(w,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Gt.envMap.value=Le,Gt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),Vt&&(ht.setValue(w,"toneMappingExposure",A.toneMappingExposure),Ue.needsLights&&Jn(Gt,Qt),ce&&V.fog===!0&&Fe.refreshFogUniforms(Gt,ce),Fe.refreshMaterialUniforms(Gt,V,re,Z,p.state.transmissionRenderTarget[S.id]),Hs.upload(w,Hi(Ue),Gt,Ie)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hs.upload(w,Hi(Ue),Gt,Ie),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(w,"center",z.center),ht.setValue(w,"modelViewMatrix",z.modelViewMatrix),ht.setValue(w,"normalMatrix",z.normalMatrix),ht.setValue(w,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xt=V.uniformsGroups;for(let mi=0,un=Xt.length;mi<un;mi++){const Cn=Xt[mi];bt.update(Cn,Jt),bt.bind(Cn,Jt)}}return Jt}function Jn(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function kt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,k){Oe.get(S.texture).__webglTexture=U,Oe.get(S.depthTexture).__webglTexture=k;const V=Oe.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=Oe.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){D=S,X=U,I=k;let V=!0,z=null,ce=!1,_e=!1;if(S){const Le=Oe.get(S);Le.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(w.FRAMEBUFFER,null),V=!1):Le.__webglFramebuffer===void 0?Ie.setupRenderTarget(S):Le.__hasExternalTextures&&Ie.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const Ge=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[U])?z=Ge[U][k]:z=Ge[U],ce=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?z=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[k]:z=Ge,b.copy(S.viewport),N.copy(S.scissor),K=S.scissorTest}else b.copy(ye).multiplyScalar(re).floor(),N.copy(Te).multiplyScalar(re).floor(),K=ke;if(me.bindFramebuffer(w.FRAMEBUFFER,z)&&V&&me.drawBuffers(S,z),me.viewport(b),me.scissor(N),me.setScissorTest(K),ce){const Le=Oe.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,k)}else if(_e){const Le=Oe.get(S.texture),Be=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Be)}G=-1},this.readRenderTargetPixels=function(S,U,k,V,z,ce,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){me.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Le=S.texture,Be=Le.format,Ge=Le.type;if(!Ae.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&k>=0&&k<=S.height-z&&w.readPixels(U,k,V,z,je.convert(Be),je.convert(Ge),ce)}finally{const Le=D!==null?Oe.get(D).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,V,z,ce,_e){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){me.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Le=S.texture,Be=Le.format,Ge=Le.type;if(!Ae.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-V&&k>=0&&k<=S.height-z){const ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.bufferData(w.PIXEL_PACK_BUFFER,ce.byteLength,w.STREAM_READ),w.readPixels(U,k,V,z,je.convert(Be),je.convert(Ge),0),w.flush();const ut=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Nf(w,ut,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ce)}finally{w.deleteBuffer(ze),w.deleteSync(ut)}return ce}}finally{const Le=D!==null?Oe.get(D).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-k),z=Math.floor(S.image.width*V),ce=Math.floor(S.image.height*V),_e=U!==null?U.x:0,Pe=U!==null?U.y:0;Ie.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,_e,Pe,z,ce),me.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,V=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],U=arguments[2],z=arguments[3]||0,k=null);let ce,_e,Pe,Le,Be,Ge;k!==null?(ce=k.max.x-k.min.x,_e=k.max.y-k.min.y,Pe=k.min.x,Le=k.min.y):(ce=S.image.width,_e=S.image.height,Pe=0,Le=0),V!==null?(Be=V.x,Ge=V.y):(Be=0,Ge=0);const ze=je.convert(U.format),ut=je.convert(U.type);Ie.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Tt=w.getParameter(w.UNPACK_ROW_LENGTH),At=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ht=w.getParameter(w.UNPACK_SKIP_PIXELS),dt=w.getParameter(w.UNPACK_SKIP_ROWS),Ue=w.getParameter(w.UNPACK_SKIP_IMAGES),Lt=S.isCompressedTexture?S.mipmaps[z]:S.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Lt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,z,Be,Ge,ce,_e,ze,ut,Lt.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,z,Be,Ge,Lt.width,Lt.height,ze,Lt.data):w.texSubImage2D(w.TEXTURE_2D,z,Be,Ge,ce,_e,ze,ut,Lt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Tt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,At),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ht),w.pixelStorei(w.UNPACK_SKIP_ROWS,dt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ue),z===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,V=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,S=arguments[2],U=arguments[3],z=arguments[4]||0);let ce,_e,Pe,Le,Be,Ge,ze,ut,Tt;const At=S.isCompressedTexture?S.mipmaps[z]:S.image;k!==null?(ce=k.max.x-k.min.x,_e=k.max.y-k.min.y,Pe=k.max.z-k.min.z,Le=k.min.x,Be=k.min.y,Ge=k.min.z):(ce=At.width,_e=At.height,Pe=At.depth,Le=0,Be=0,Ge=0),V!==null?(ze=V.x,ut=V.y,Tt=V.z):(ze=0,ut=0,Tt=0);const Ht=je.convert(U.format),dt=je.convert(U.type);let Ue;if(U.isData3DTexture)Ie.setTexture3D(U,0),Ue=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ie.setTexture2DArray(U,0),Ue=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=w.getParameter(w.UNPACK_ROW_LENGTH),ft=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Jt=w.getParameter(w.UNPACK_SKIP_PIXELS),Nn=w.getParameter(w.UNPACK_SKIP_ROWS),Vt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,At.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,At.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ge),S.isDataTexture||S.isData3DTexture?w.texSubImage3D(Ue,z,ze,ut,Tt,ce,_e,Pe,Ht,dt,At.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Ue,z,ze,ut,Tt,ce,_e,Pe,Ht,At.data):w.texSubImage3D(Ue,z,ze,ut,Tt,ce,_e,Pe,Ht,dt,At),w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ft),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Vt),z===0&&U.generateMipmaps&&w.generateMipmap(Ue),me.unbindTexture()},this.initRenderTarget=function(S){Oe.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){X=0,I=0,D=null,me.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qo?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Js?"display-p3":"srgb"}}class Xv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wu extends Xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new It,Bo=new Cu,Us=new Qs,Ns=new W;class qv extends sn{constructor(e=new Zn,t=new Wu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Us.radius+=a,e.ray.intersectsSphere(Us)===!1)return;au.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(au);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,g=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let M=m,E=v;M<E;M++){const p=h.getX(M);Ns.fromBufferAttribute(g,p),ou(Ns,p,c,r,e,t,this)}}else{const m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let M=m,E=v;M<E;M++)Ns.fromBufferAttribute(g,M),ou(Ns,M,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function ou(i,e,t,n,r,a,o){const l=Bo.distanceSqToPoint(i);if(l<t){const c=new W;Bo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const Yv=document.querySelector("canvas.webgl"),$o=new Xv,na=500,$v=.03,lu=.5,Or=new Float32Array(na*3),Vs=new Float32Array(na*3);for(let i=0;i<na;i++)Or[i*3+0]=(Math.random()-.5)*10,Or[i*3+1]=(Math.random()-.5)*10,Or[i*3+2]=(Math.random()-.5)*10,Vs[i*3+0]=Math.random()*.5+.5,Vs[i*3+1]=Math.random()*.5+.5,Vs[i*3+2]=Math.random()*.5+.5;const Br=new Zn;Br.setAttribute("position",new xn(Or,3));Br.setAttribute("color",new xn(Vs,3));const jv=new Wu({size:$v,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8}),Kv=new qv(Br,jv);$o.add(Kv);const cu=Or.slice(),_n={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{_n.width=window.innerWidth,_n.height=window.innerHeight,zr.aspect=_n.width/_n.height,zr.updateProjectionMatrix(),kr.setSize(_n.width,_n.height),kr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const zr=new gn(75,_n.width/_n.height,.1,100);zr.position.z=5;$o.add(zr);const kr=new Wv({canvas:Yv,alpha:!0});kr.setSize(_n.width,_n.height);kr.setPixelRatio(Math.min(window.devicePixelRatio,2));const js={x:0,y:0};window.addEventListener("mousemove",i=>{js.x=(i.clientX/_n.width-.5)*lu,js.y=(i.clientY/_n.height-.5)*lu});const Xu=()=>{const i=Br.attributes.position.array;for(let e=0;e<na;e++)i[e*3+0]=cu[e*3+0]+js.x,i[e*3+1]=cu[e*3+1]+js.y;Br.attributes.position.needsUpdate=!0,kr.render($o,zr),window.requestAnimationFrame(Xu)};Xu()});export default Zv();
//# sourceMappingURL=background-CSq8V-fA.js.map
