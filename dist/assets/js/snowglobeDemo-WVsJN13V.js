var ai=Object.defineProperty;var ri=(o,e,i)=>e in o?ai(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var St=(o,e,i)=>ri(o,typeof e!="symbol"?e+"":e,i);import{R as li,P as ci,E as hi,V as _,M as st,T as At,Q as ce,S as he,a as B,b as bt,c as x,C as di,d as dt,e as lt,f as R,D as Nt,G as ct,B as Yt,g as ui,h as q,i as it,j as kt,k as xe,l as pi,m as mi,n as gi,A as fi,o as wi,F as bi,p as vi,q as de,r as yi,s as Ee,t as xi,u as Ei,W as Mi,v as Ci,w as Si,x as _i,y as ki,z as Me,I as Li,H as Ri,J as Pi,K as Ti,O as Di,L as Bi}from"./three.module-B1YWWd3v.js";const ue={type:"change"},jt={type:"start"},pe={type:"end"},_t=new li,me=new ci,Oi=Math.cos(70*bt.DEG2RAD);class Ii extends hi{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:st.ROTATE,MIDDLE:st.DOLLY,RIGHT:st.PAN},this.touches={ONE:At.ROTATE,TWO:At.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(n){n.addEventListener("keydown",It),this._domElementKeyEvents=n},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(ue),t.update(),A=s.NONE},this.update=function(){const n=new _,a=new ce().setFromUnitVectors(e.up,new _(0,1,0)),g=a.clone().invert(),E=new _,P=new ce,J=new _,I=2*Math.PI;return function(Ai=null){const re=t.object.position;n.copy(re).sub(t.target),n.applyQuaternion(a),r.setFromVector3(n),t.autoRotate&&A===s.NONE&&U(et(Ai)),t.enableDamping?(r.theta+=d.theta*t.dampingFactor,r.phi+=d.phi*t.dampingFactor):(r.theta+=d.theta,r.phi+=d.phi);let G=t.minAzimuthAngle,$=t.maxAzimuthAngle;isFinite(G)&&isFinite($)&&(G<-Math.PI?G+=I:G>Math.PI&&(G-=I),$<-Math.PI?$+=I:$>Math.PI&&($-=I),G<=$?r.theta=Math.max(G,Math.min($,r.theta)):r.theta=r.theta>(G+$)/2?Math.max(G,r.theta):Math.min($,r.theta)),r.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,r.phi)),r.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(f,t.dampingFactor):t.target.add(f),t.target.sub(t.cursor),t.target.clampLength(t.minTargetRadius,t.maxTargetRadius),t.target.add(t.cursor);let mt=!1;if(t.zoomToCursor&&F||t.object.isOrthographicCamera)r.radius=Bt(r.radius);else{const X=r.radius;r.radius=Bt(r.radius*p),mt=X!=r.radius}if(n.setFromSpherical(r),n.applyQuaternion(g),re.copy(t.target).add(n),t.object.lookAt(t.target),t.enableDamping===!0?(d.theta*=1-t.dampingFactor,d.phi*=1-t.dampingFactor,f.multiplyScalar(1-t.dampingFactor)):(d.set(0,0,0),f.set(0,0,0)),t.zoomToCursor&&F){let X=null;if(t.object.isPerspectiveCamera){const gt=n.length();X=Bt(gt*p);const Ct=gt-X;t.object.position.addScaledVector(T,Ct),t.object.updateMatrixWorld(),mt=!!Ct}else if(t.object.isOrthographicCamera){const gt=new _(k.x,k.y,0);gt.unproject(t.object);const Ct=t.object.zoom;t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/p)),t.object.updateProjectionMatrix(),mt=Ct!==t.object.zoom;const le=new _(k.x,k.y,0);le.unproject(t.object),t.object.position.sub(le).add(gt),t.object.updateMatrixWorld(),X=n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;X!==null&&(this.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(X).add(t.object.position):(_t.origin.copy(t.object.position),_t.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot(_t.direction))<Oi?e.lookAt(t.target):(me.setFromNormalAndCoplanarPoint(t.object.up,t.target),_t.intersectPlane(me,t.target))))}else if(t.object.isOrthographicCamera){const X=t.object.zoom;t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/p)),X!==t.object.zoom&&(t.object.updateProjectionMatrix(),mt=!0)}return p=1,F=!1,mt||E.distanceToSquared(t.object.position)>h||8*(1-P.dot(t.object.quaternion))>h||J.distanceToSquared(t.target)>h?(t.dispatchEvent(ue),E.copy(t.object.position),P.copy(t.object.quaternion),J.copy(t.target),!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",Ae),t.domElement.removeEventListener("pointerdown",ee),t.domElement.removeEventListener("pointercancel",pt),t.domElement.removeEventListener("wheel",ie),t.domElement.removeEventListener("pointermove",Ot),t.domElement.removeEventListener("pointerup",pt),t.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",It),t._domElementKeyEvents=null)};const t=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let A=s.NONE;const h=1e-6,r=new he,d=new he;let p=1;const f=new _,m=new B,y=new B,M=new B,v=new B,w=new B,b=new B,c=new B,l=new B,u=new B,T=new _,k=new B;let F=!1;const C=[],O={};let z=!1;function et(n){return n!==null?2*Math.PI/60*t.autoRotateSpeed*n:2*Math.PI/60/60*t.autoRotateSpeed}function N(n){const a=Math.abs(n*.01);return Math.pow(.95,t.zoomSpeed*a)}function U(n){d.theta-=n}function D(n){d.phi-=n}const W=function(){const n=new _;return function(g,E){n.setFromMatrixColumn(E,0),n.multiplyScalar(-g),f.add(n)}}(),Z=function(){const n=new _;return function(g,E){t.screenSpacePanning===!0?n.setFromMatrixColumn(E,1):(n.setFromMatrixColumn(E,0),n.crossVectors(t.object.up,n)),n.multiplyScalar(g),f.add(n)}}(),nt=function(){const n=new _;return function(g,E){const P=t.domElement;if(t.object.isPerspectiveCamera){const J=t.object.position;n.copy(J).sub(t.target);let I=n.length();I*=Math.tan(t.object.fov/2*Math.PI/180),W(2*g*I/P.clientHeight,t.object.matrix),Z(2*E*I/P.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(W(g*(t.object.right-t.object.left)/t.object.zoom/P.clientWidth,t.object.matrix),Z(E*(t.object.top-t.object.bottom)/t.object.zoom/P.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function Tt(n){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?p/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function $t(n){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?p*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function Dt(n,a){if(!t.zoomToCursor)return;F=!0;const g=t.domElement.getBoundingClientRect(),E=n-g.left,P=a-g.top,J=g.width,I=g.height;k.x=E/J*2-1,k.y=-(P/I)*2+1,T.set(k.x,k.y,1).unproject(t.object).sub(t.object.position).normalize()}function Bt(n){return Math.max(t.minDistance,Math.min(t.maxDistance,n))}function Xt(n){m.set(n.clientX,n.clientY)}function Ye(n){Dt(n.clientX,n.clientX),c.set(n.clientX,n.clientY)}function Qt(n){v.set(n.clientX,n.clientY)}function Ve(n){y.set(n.clientX,n.clientY),M.subVectors(y,m).multiplyScalar(t.rotateSpeed);const a=t.domElement;U(2*Math.PI*M.x/a.clientHeight),D(2*Math.PI*M.y/a.clientHeight),m.copy(y),t.update()}function Ge(n){l.set(n.clientX,n.clientY),u.subVectors(l,c),u.y>0?Tt(N(u.y)):u.y<0&&$t(N(u.y)),c.copy(l),t.update()}function $e(n){w.set(n.clientX,n.clientY),b.subVectors(w,v).multiplyScalar(t.panSpeed),nt(b.x,b.y),v.copy(w),t.update()}function Xe(n){Dt(n.clientX,n.clientY),n.deltaY<0?$t(N(n.deltaY)):n.deltaY>0&&Tt(N(n.deltaY)),t.update()}function Qe(n){let a=!1;switch(n.code){case t.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?D(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):nt(0,t.keyPanSpeed),a=!0;break;case t.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?D(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):nt(0,-t.keyPanSpeed),a=!0;break;case t.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?U(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):nt(t.keyPanSpeed,0),a=!0;break;case t.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?U(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):nt(-t.keyPanSpeed,0),a=!0;break}a&&(n.preventDefault(),t.update())}function Kt(n){if(C.length===1)m.set(n.pageX,n.pageY);else{const a=ot(n),g=.5*(n.pageX+a.x),E=.5*(n.pageY+a.y);m.set(g,E)}}function Wt(n){if(C.length===1)v.set(n.pageX,n.pageY);else{const a=ot(n),g=.5*(n.pageX+a.x),E=.5*(n.pageY+a.y);v.set(g,E)}}function Zt(n){const a=ot(n),g=n.pageX-a.x,E=n.pageY-a.y,P=Math.sqrt(g*g+E*E);c.set(0,P)}function Ke(n){t.enableZoom&&Zt(n),t.enablePan&&Wt(n)}function We(n){t.enableZoom&&Zt(n),t.enableRotate&&Kt(n)}function Jt(n){if(C.length==1)y.set(n.pageX,n.pageY);else{const g=ot(n),E=.5*(n.pageX+g.x),P=.5*(n.pageY+g.y);y.set(E,P)}M.subVectors(y,m).multiplyScalar(t.rotateSpeed);const a=t.domElement;U(2*Math.PI*M.x/a.clientHeight),D(2*Math.PI*M.y/a.clientHeight),m.copy(y)}function qt(n){if(C.length===1)w.set(n.pageX,n.pageY);else{const a=ot(n),g=.5*(n.pageX+a.x),E=.5*(n.pageY+a.y);w.set(g,E)}b.subVectors(w,v).multiplyScalar(t.panSpeed),nt(b.x,b.y),v.copy(w)}function te(n){const a=ot(n),g=n.pageX-a.x,E=n.pageY-a.y,P=Math.sqrt(g*g+E*E);l.set(0,P),u.set(0,Math.pow(l.y/c.y,t.zoomSpeed)),Tt(u.y),c.copy(l);const J=(n.pageX+a.x)*.5,I=(n.pageY+a.y)*.5;Dt(J,I)}function Ze(n){t.enableZoom&&te(n),t.enablePan&&qt(n)}function Je(n){t.enableZoom&&te(n),t.enableRotate&&Jt(n)}function ee(n){t.enabled!==!1&&(C.length===0&&(t.domElement.setPointerCapture(n.pointerId),t.domElement.addEventListener("pointermove",Ot),t.domElement.addEventListener("pointerup",pt)),!si(n)&&(ni(n),n.pointerType==="touch"?se(n):qe(n)))}function Ot(n){t.enabled!==!1&&(n.pointerType==="touch"?ii(n):ti(n))}function pt(n){switch(oi(n),C.length){case 0:t.domElement.releasePointerCapture(n.pointerId),t.domElement.removeEventListener("pointermove",Ot),t.domElement.removeEventListener("pointerup",pt),t.dispatchEvent(pe),A=s.NONE;break;case 1:const a=C[0],g=O[a];se({pointerId:a,pageX:g.x,pageY:g.y});break}}function qe(n){let a;switch(n.button){case 0:a=t.mouseButtons.LEFT;break;case 1:a=t.mouseButtons.MIDDLE;break;case 2:a=t.mouseButtons.RIGHT;break;default:a=-1}switch(a){case st.DOLLY:if(t.enableZoom===!1)return;Ye(n),A=s.DOLLY;break;case st.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enablePan===!1)return;Qt(n),A=s.PAN}else{if(t.enableRotate===!1)return;Xt(n),A=s.ROTATE}break;case st.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enableRotate===!1)return;Xt(n),A=s.ROTATE}else{if(t.enablePan===!1)return;Qt(n),A=s.PAN}break;default:A=s.NONE}A!==s.NONE&&t.dispatchEvent(jt)}function ti(n){switch(A){case s.ROTATE:if(t.enableRotate===!1)return;Ve(n);break;case s.DOLLY:if(t.enableZoom===!1)return;Ge(n);break;case s.PAN:if(t.enablePan===!1)return;$e(n);break}}function ie(n){t.enabled===!1||t.enableZoom===!1||A!==s.NONE||(n.preventDefault(),t.dispatchEvent(jt),Xe(ei(n)),t.dispatchEvent(pe))}function ei(n){const a=n.deltaMode,g={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(a){case 1:g.deltaY*=16;break;case 2:g.deltaY*=100;break}return n.ctrlKey&&!z&&(g.deltaY*=10),g}function ne(n){n.key==="Control"&&(z=!0,t.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(n){n.key==="Control"&&(z=!1,t.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function It(n){t.enabled===!1||t.enablePan===!1||Qe(n)}function se(n){switch(ae(n),C.length){case 1:switch(t.touches.ONE){case At.ROTATE:if(t.enableRotate===!1)return;Kt(n),A=s.TOUCH_ROTATE;break;case At.PAN:if(t.enablePan===!1)return;Wt(n),A=s.TOUCH_PAN;break;default:A=s.NONE}break;case 2:switch(t.touches.TWO){case At.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Ke(n),A=s.TOUCH_DOLLY_PAN;break;case At.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;We(n),A=s.TOUCH_DOLLY_ROTATE;break;default:A=s.NONE}break;default:A=s.NONE}A!==s.NONE&&t.dispatchEvent(jt)}function ii(n){switch(ae(n),A){case s.TOUCH_ROTATE:if(t.enableRotate===!1)return;Jt(n),t.update();break;case s.TOUCH_PAN:if(t.enablePan===!1)return;qt(n),t.update();break;case s.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Ze(n),t.update();break;case s.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Je(n),t.update();break;default:A=s.NONE}}function Ae(n){t.enabled!==!1&&n.preventDefault()}function ni(n){C.push(n.pointerId)}function oi(n){delete O[n.pointerId];for(let a=0;a<C.length;a++)if(C[a]==n.pointerId){C.splice(a,1);return}}function si(n){for(let a=0;a<C.length;a++)if(C[a]==n.pointerId)return!0;return!1}function ae(n){let a=O[n.pointerId];a===void 0&&(a=new B,O[n.pointerId]=a),a.set(n.pageX,n.pageY)}function ot(n){const a=n.pointerId===C[0]?C[1]:C[0];return O[a]}t.domElement.addEventListener("contextmenu",Ae),t.domElement.addEventListener("pointerdown",ee),t.domElement.addEventListener("pointercancel",pt),t.domElement.addEventListener("wheel",ie,{passive:!1}),t.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class V{constructor(e,i,t,s,A="div"){this.parent=e,this.object=i,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(A),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),V.nextNameID=V.nextNameID||0,this.$name.id=`lil-gui-name-${++V.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ji extends V{constructor(e,i,t){super(e,i,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ht(o){let e,i;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const Fi={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ht,toHexString:Ht},vt={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Ui={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,i=1){const t=vt.fromHexString(o);e[0]=(t>>16&255)/255*i,e[1]=(t>>8&255)/255*i,e[2]=(t&255)/255*i},toHexString([o,e,i],t=1){t=255/t;const s=o*t<<16^e*t<<8^i*t<<0;return vt.toHexString(s)}},zi={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,i=1){const t=vt.fromHexString(o);e.r=(t>>16&255)/255*i,e.g=(t>>8&255)/255*i,e.b=(t&255)/255*i},toHexString({r:o,g:e,b:i},t=1){t=255/t;const s=o*t<<16^e*t<<8^i*t<<0;return vt.toHexString(s)}},Ni=[Fi,vt,Ui,zi];function Hi(o){return Ni.find(e=>e.match(o))}class Yi extends V{constructor(e,i,t,s){super(e,i,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Hi(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const A=Ht(this.$text.value);A&&this._setValueFromHexString(A)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ft extends V{constructor(e,i,t){super(e,i,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Vi extends V{constructor(e,i,t,s,A,h){super(e,i,t,"number"),this._initInput(),this.min(s),this.max(A);const r=h!==void 0;this.step(r?h:this._getImplicitStep(),r),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))},t=l=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+l),this.$input.value=this.getValue())},s=l=>{l.key==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l)*-1))},A=l=>{this._inputFocused&&(l.preventDefault(),t(this._step*this._normalizeMouseWheel(l)))};let h=!1,r,d,p,f,m;const y=5,M=l=>{r=l.clientX,d=p=l.clientY,h=!0,f=this.getValue(),m=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",w)},v=l=>{if(h){const u=l.clientX-r,T=l.clientY-d;Math.abs(T)>y?(l.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>y&&w()}if(!h){const u=l.clientY-p;m-=u*this._step*this._arrowKeyMultiplier(l),f+m>this._max?m=this._max-f:f+m<this._min&&(m=this._min-f),this._snapClampSetValue(f+m)}p=l.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",w)},b=()=>{this._inputFocused=!0},c=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",A,{passive:!1}),this.$input.addEventListener("mousedown",M),this.$input.addEventListener("focus",b),this.$input.addEventListener("blur",c)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(c,l,u,T,k)=>(c-l)/(u-l)*(k-T)+T,i=c=>{const l=this.$slider.getBoundingClientRect();let u=e(c,l.left,l.right,this._min,this._max);this._snapClampSetValue(u)},t=c=>{this._setDraggingStyle(!0),i(c.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",A)},s=c=>{i(c.clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",A)};let h=!1,r,d;const p=c=>{c.preventDefault(),this._setDraggingStyle(!0),i(c.touches[0].clientX),h=!1},f=c=>{c.touches.length>1||(this._hasScrollBar?(r=c.touches[0].clientX,d=c.touches[0].clientY,h=!0):p(c),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",y))},m=c=>{if(h){const l=c.touches[0].clientX-r,u=c.touches[0].clientY-d;Math.abs(l)>Math.abs(u)?p(c):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",y))}else c.preventDefault(),i(c.touches[0].clientX)},y=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",y)},M=this._callOnFinishChange.bind(this),v=400;let w;const b=c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)&&this._hasScrollBar)return;c.preventDefault();const u=this._normalizeMouseWheel(c)*this._step;this._snapClampSetValue(this.getValue()+u),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(M,v)};this.$slider.addEventListener("mousedown",t),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",b,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:t}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,t=-e.wheelDelta/120,t*=this._stepExplicit?1:10),i+-t}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gi extends V{constructor(e,i,t,s){super(e,i,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(i=>{const t=document.createElement("option");t.textContent=i,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?e:this._names[i],this}}class $i extends V{constructor(e,i,t){super(e,i,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Xi=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Qi(o){const e=document.createElement("style");e.innerHTML=o;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let ge=!1;class Vt{constructor({parent:e,autoPlace:i=e===void 0,container:t,width:s,title:A="Controls",closeFolders:h=!1,injectStyles:r=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(A),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!ge&&r&&(Qi(Xi),ge=!0),t?t.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=h}add(e,i,t,s,A){if(Object(t)===t)return new Gi(this,e,i,t);const h=e[i];switch(typeof h){case"number":return new Vi(this,e,i,t,s,A);case"boolean":return new ji(this,e,i);case"string":return new $i(this,e,i);case"function":return new Ft(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,h)}addColor(e,i,t=1){return new Yi(this,e,i,t)}addFolder(e){const i=new Vt({parent:this,title:e});return this.root._closeFolders&&i.close(),i}load(e,i=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Ft||t._name in e.controllers&&t.load(e.controllers[t._name])}),i&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Ft)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save()}}),e&&this.folders.forEach(t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save()}),i}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const t=A=>{A.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}function Ki(){return{enabled:!1,_timestampStart:void 0,_timestampEnd:void 0,_startPoint:void 0,_endPoint:void 0,snowEnabled:!1,update:function(e){if(this.enabled===!0){const i=Date.now();if(this._timestampEnd>i){const t=(i-this._timestampStart)/(this._timestampEnd-this._timestampStart);this.computePosition(e,t)}else e.position.copy(this._startPoint),this.enabled=!1,this.snowEnabled=!0}},shake:function(e,i,t){this.enabled=!0,this.snowEnabled=!1,this._timestampStart=Date.now(),this._timestampEnd=this._timestampStart+t,this._startPoint=new _().copy(e.position),this._endPoint=new _().addVectors(e.position,i)},computePosition:function(e,i){let t=0;i<1&&(t=Math.sin(i*Math.PI*8)*Math.exp(-i*6)),e.position.lerpVectors(this._startPoint,this._endPoint,t)}}}const Ce=Math.sqrt(3),Wi=.5*(Ce-1),ft=(3-Ce)/6,fe=o=>Math.floor(o)|0,we=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Zi(o=Math.random){const e=Ji(o),i=new Float64Array(e).map(s=>we[s%12*2]),t=new Float64Array(e).map(s=>we[s%12*2+1]);return function(A,h){let r=0,d=0,p=0;const f=(A+h)*Wi,m=fe(A+f),y=fe(h+f),M=(m+y)*ft,v=m-M,w=y-M,b=A-v,c=h-w;let l,u;b>c?(l=1,u=0):(l=0,u=1);const T=b-l+ft,k=c-u+ft,F=b-1+2*ft,C=c-1+2*ft,O=m&255,z=y&255;let et=.5-b*b-c*c;if(et>=0){const D=O+e[z],W=i[D],Z=t[D];et*=et,r=et*et*(W*b+Z*c)}let N=.5-T*T-k*k;if(N>=0){const D=O+l+e[z+u],W=i[D],Z=t[D];N*=N,d=N*N*(W*T+Z*k)}let U=.5-F*F-C*C;if(U>=0){const D=O+1+e[z+1],W=i[D],Z=t[D];U*=U,p=U*U*(W*F+Z*C)}return 70*(r+d+p)}}function Ji(o){const i=new Uint8Array(512);for(let t=0;t<512/2;t++)i[t]=t;for(let t=0;t<512/2-1;t++){const s=t+~~(o()*(256-t)),A=i[t];i[t]=i[s],i[s]=A}for(let t=256;t<512;t++)i[t]=i[t-256];return i}const qi=""+new URL("../images/snowColor-qwK2S6qQ.jpg",import.meta.url).href,tn=""+new URL("../images/snowNorm-CxvOcmta.jpg",import.meta.url).href,en=""+new URL("../images/snowRough-DMAPT9-j.jpg",import.meta.url).href,nn=""+new URL("../images/snowOCC-IN-zws0_.jpg",import.meta.url).href,on=""+new URL("../images/snowMesh-CBOydtCW.jpg",import.meta.url).href,sn=Zi();class An extends x{constructor(){const e=new di(3,32);super();const i=e.attributes.position.array;for(let M=0;M<i.length;M+=3){const v=i[M],w=i[M+1],b=sn(v,w)*.1;i[M+2]+=b}e.attributes.position.needsUpdate=!0;const t=new dt,s=t.load(qi);s.colorSpace=lt;const A=t.load(tn),h=t.load(en),r=t.load(nn),d=t.load(on);d.colorSpace=lt;const p=new R({map:s,normalMap:A,roughnessMap:h,roughness:.5,metalness:.1,aoMap:r,side:Nt}),f=new R({map:d,transparent:!0,opacity:1,side:Nt}),m=new x(e,p);m.rotation.x=bt.degToRad(-90),m.receiveShadow=!0;const y=new x(e,f);y.rotation.x=bt.degToRad(-90),y.receiveShadow=!0,this.add(m),this.add(y)}}class an extends ct{constructor(){super();const e=new Yt(5,5,5),i=new R({color:3355443}),t=new R({color:16777215}),s=new R({color:2263842}),A=new ui({color:0}),h=new x(new q(25,25,40,30),i);h.position.set(0,50,0);const r=new x(new q(26,25,12,30),new R({color:15073331}));r.position.set(0,35,0);const d=new x(new q(40,40,5,30),i);d.position.set(0,32,0);const p=new x(new it(40,32,32),t);p.position.set(0,0,0);const f=new x(new it(5,25,40),A);f.position.set(15,18,30);const m=new x(new it(5,10,40),A);m.position.set(-16,18,33);const y=new x(new it(5,30,20),new R({color:15569185}));y.position.set(3,10,35);const M=new x(new it(50,32,32),t);M.position.set(0,-60,0);const v=new x(e,s);v.position.set(0,-30,37);const w=new x(e,s);w.position.set(0,-40,43);const b=new q(3,3,35,32),c=new R({color:9127187}),l=new x(b,c);l.position.set(-55,-30,15),l.rotation.set(0,0,bt.degToRad(45));const u=new x(b,c);u.position.set(55,-30,15),u.rotation.set(0,0,bt.degToRad(-45)),this.add(h,r,d,p,f,m,y,M,v,w,l,u)}}const rn=""+new URL("../images/Stylized_Bricks_001_basecolor-Cc710Iw0.jpg",import.meta.url).href,ln=""+new URL("../images/Stylized_Bricks_001_normal-CQdmqkuU.jpg",import.meta.url).href,cn=""+new URL("../images/Stylized_Bricks_001_height-DtgUp-fh.png",import.meta.url).href,hn="data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAIAAgADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",dn=""+new URL("../images/Stylized_Bricks_001_ambientOcclusion-CARjQLk1.jpg",import.meta.url).href,Se=""+new URL("../images/Bark_Pine_003_BaseColor-CcZedJ4t.jpg",import.meta.url).href,_e=""+new URL("../images/Bark_Pine_003_Normal-CIps0YLl.jpg",import.meta.url).href,ke=""+new URL("../images/Bark_Pine_003_Height-Qp99VRur.png",import.meta.url).href,Le=""+new URL("../images/Bark_Pine_003_Roughness-DEVbN2IZ.jpg",import.meta.url).href,Re=""+new URL("../images/Bark_Pine_003_AmbientOcclusion-BkzDzPAR.jpg",import.meta.url).href,un=""+new URL("../images/Roof_Tiles_Terracotta_003_basecolor-CeRZaaTX.jpg",import.meta.url).href,pn=""+new URL("../images/Roof_Tiles_Terracotta_003_normal-BITxKyIr.jpg",import.meta.url).href,mn=""+new URL("../images/Roof_Tiles_Terracotta_003_height-CheZaF4K.png",import.meta.url).href,gn=""+new URL("../images/Roof_Tiles_Terracotta_003_roughness-BWV9ONy_.jpg",import.meta.url).href,fn=""+new URL("../images/Roof_Tiles_Terracotta_003_ambientOcclusion-BPBcMgLl.jpg",import.meta.url).href,wn=""+new URL("../images/Wall_Stone_023_BaseColor-Cg97MhIB.jpg",import.meta.url).href,bn=""+new URL("../images/Wall_Stone_023_Normal-dkBRhvwV.jpg",import.meta.url).href,vn=""+new URL("../images/Wall_Stone_023_Height-BurLJwJu.png",import.meta.url).href,yn=""+new URL("../images/Wall_Stone_023_Roughness-BZQU5O1y.jpg",import.meta.url).href,xn=""+new URL("../images/Wall_Stone_023_AmbientOcclusion-C5JxFRyr.jpg",import.meta.url).href,En=""+new URL("../images/Wood_Gate_Fortified_003_basecolor-DqwGvjaf.jpg",import.meta.url).href,Mn=""+new URL("../images/Wood_Gate_Fortified_003_normal-CAgGq2gm.jpg",import.meta.url).href,Cn=""+new URL("../images/Wood_Gate_Fortified_003_height-1qjcgZmV.png",import.meta.url).href,Sn=""+new URL("../images/Wood_Gate_Fortified_003_roughness-BRRAIckm.jpg",import.meta.url).href,_n=""+new URL("../images/Wood_Gate_Fortified_003_ambientOcclusion-Dhc0aDZY.jpg",import.meta.url).href,kn=""+new URL("../images/smoke-D5s1Roet.jpeg",import.meta.url).href,S=new dt;function ut(o){const e=S.load(o);return e.colorSpace=lt,e}class Ln extends x{constructor(){const e=new kt(170,200,100),i=new R({map:ut(un),normalMap:S.load(pn),displacementMap:S.load(mn),displacementScale:5,roughnessMap:S.load(gn),roughness:.5,aoMap:S.load(fn)});super(e,i)}}class Rn extends x{constructor(){const e=new Yt(200,200,200,32,32,32),i=new R({map:ut(rn),normalMap:S.load(ln),displacementMap:S.load(cn),displacementScale:10,roughnessMap:S.load(hn),roughness:.5,aoMap:S.load(dn)});super(e,i)}}class Pn extends x{constructor(){const e=new q(10,10,180,50,32),i=new R({map:ut(Se),normalMap:S.load(_e),displacementMap:S.load(ke),displacementScale:10,roughnessMap:S.load(Le),roughness:.5,aoMap:S.load(Re)});super(e,i)}}class Tn extends x{constructor(){const e=new xe(60,120,64,64),i=new R({map:ut(En),normalMap:S.load(Mn),displacementMap:S.load(Cn),displacementScale:10,roughnessMap:S.load(Sn),roughness:.5,aoMap:S.load(_n)});super(e,i)}}class Dn extends x{constructor(){const e=new q(20,20,200,50,32),i=new R({map:ut(wn),normalMap:S.load(bn),displacementMap:S.load(vn),displacementScale:1,roughnessMap:S.load(yn),roughness:.5,aoMap:S.load(xn)});super(e,i)}}class Bn extends x{constructor(){const e=new xe(200,200,1,1),i=new R({map:ut(kn),depthTest:!1,blending:pi,opacity:.7});super(e,i)}}class On extends ct{constructor(){super();St(this,"x",100);St(this,"y",0);St(this,"z",-250);const i=new Ln;i.position.set(this.x,this.y+180,this.z);const t=new Rn;t.position.set(this.x,this.y,this.z);const s=new Pn,A=s.clone();A.position.set(this.x+100,this.y,this.z+100);const h=s.clone();h.position.set(this.x-100,this.y,this.z-100);const r=s.clone();r.position.set(this.x+100,this.y,this.z-100);const d=s.clone();d.position.set(this.x-100,this.y,this.z+100);const p=new Tn;p.position.set(this.x+30,this.y-30,this.z+105);const f=new Dn;f.position.set(this.x+80,this.y+100,this.z+80);const m=new Bn;m.position.set(this.x+80,this.y+300,this.z+80),this.add(i,t,A,h,r,d,p,f,m)}}const In="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",Fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",Un="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",be=[In,jn,Fn,Un,zn],Pe=500;function Te(o){const e=Math.random()*Math.PI*2,i=Math.random()*Math.PI,t=Math.cbrt(Math.random())*o;return[t*Math.sin(i)*Math.cos(e),t*Math.cos(i),t*Math.sin(i)*Math.sin(e)]}class Nn extends vi{constructor(e,i,t=.2,s=Pe){super(e,i),this.fallSpeed=t,this.initialSpeed=t,this.globeRadius=s,this.yLowerBound=-s}update(e){const i=this.geometry.attributes.position.array;for(let t=0;t<i.length;t+=3)if(i[t+1]-=this.fallSpeed*e,i[t+1]<this.yLowerBound){const[s,A,h]=Te(this.globeRadius);i[t]=s,i[t+1]=A,i[t+2]=h}this.geometry.attributes.position.needsUpdate=!0}setBaseSpeed(e){this.fallSpeed=this.initialSpeed*e}}class Hn extends ct{constructor(e=300){super(),this.textureCount=be.length,this.baseSpeed=.5;const i=new dt,t=[],s=new mi("grey");be.forEach((A,h)=>{t.push(new gi({size:3,map:i.load(A),blending:fi,depthTest:!1,transparent:!0,opacity:.03,color:s}))});for(let A=0;A<this.textureCount;A++){const h=[];for(let d=0;d<e/this.textureCount;d++)h.push(...Te(Pe));const r=new wi;r.setAttribute("position",new bi(h,3)),this.add(new Nn(r,t[A]))}}update(e){this.children.forEach(i=>i.update(e))}setBaseSpeed(e){this.baseSpeed=e,this.children.forEach(i=>i.setBaseSpeed(e))}getBaseSpeed(){return this.baseSpeed}}const ve=80,ye=-250,Yn=325;class Vn extends x{constructor(){const e=new q(5,20,500,50),i=new dt,t=i.load(Se);t.colorSpace=lt;const s=new R({map:t,normalMap:i.load(_e),displacementMap:i.load(ke),displacementScale:10,roughnessMap:i.load(Le),roughness:.5,aoMap:i.load(Re)});super(e,s)}}class Ut extends x{constructor(e){let i;e===1?i=new kt(80,350,100):e===2?i=new kt(80,300,100):i=new kt(80,250,100);const t=new Ee({color:3100495});super(i,t)}}class zt extends x{constructor(){const e=new it(20,8,8),i=new Ee({color:15792383});super(e,i)}}class Gn extends ct{constructor({count:e=30,radius:i=1e3,noTreeField:t=.25,minScale:s=.8,maxScale:A=1.2,clearance:h=0,groundY:r=0,embed:d=.1}={}){super(),this.treeNum=e,this.radius=i,this.noTreeField=t,this.minScale=s,this.maxScale=A,this.clearance=h,this.groundY=r,this.embed=d,this.treePositions=[]}toLocalExclusion(e){e.updateMatrixWorld(!0);const i=new de().setFromObject(e);if(i.isEmpty())return null;const t=new _;let s=1/0,A=-1/0,h=1/0,r=-1/0;for(const d of[i.min.x,i.max.x])for(const p of[i.min.y,i.max.y])for(const f of[i.min.z,i.max.z])this.worldToLocal(t.set(d,p,f)),s=Math.min(s,t.x),A=Math.max(A,t.x),h=Math.min(h,t.z),r=Math.max(r,t.z);return{minX:s,maxX:A,minZ:h,maxZ:r}}fitsInside(e,i,t,s,A){const h=new _,r=ve*s;for(const d of[-r,r])for(const p of[ye*s,Yn*s])for(const f of[-r,r])if(h.set(e+d,i+p,t+f),this.localToWorld(h),h.distanceTo(A.center)>A.radius)return!1;return!0}populate({obstacles:e=[],container:i=null}={}){this.updateMatrixWorld(!0);const t=e.map(v=>this.toLocalExclusion(v)).filter(Boolean);let s=null;i&&(i.updateMatrixWorld(!0),i.geometry?(i.geometry.computeBoundingSphere(),s=i.geometry.boundingSphere.clone().applyMatrix4(i.matrixWorld)):s=new de().setFromObject(i).getBoundingSphere(new yi));const A=[],h=this.worldToLocal(new _(0,this.groundY-this.embed,0)).y,r=(v,w,b)=>{for(const c of A)if(Math.hypot(v-c.x,w-c.z)<b+c.radius)return!0;for(const c of t){const l=Math.max(c.minX-v,0,v-c.maxX),u=Math.max(c.minZ-w,0,w-c.maxZ);if(Math.hypot(l,u)<b+this.clearance)return!0}return!1},d=this.radius,p=-Math.PI/2,f=Math.PI/2;let m=0;const y=this.treeNum*500;for(;A.length<this.treeNum&&m<y;){m++;const v=Math.random()*(f-p)+p,w=Math.cos(v)*d,b=Math.sin(v)*d,c=this.minScale+Math.random()*(this.maxScale-this.minScale),l=ve*c,u=h-ye*c;w**2+b**2<this.noTreeField*d*d||r(w,b,l)||s&&!this.fitsInside(w,u,b,c,s)||A.push({x:w,y:u,z:b,scale:c,radius:l})}this.treePositions=A;const M=new Vn;for(const{x:v,y:w,z:b,scale:c}of A){const l=new ct,u=M.clone();u.position.set(0,0,0);const T=new Ut(1);T.position.set(0,100,0);const k=new Ut(2);k.position.set(0,150,0);const F=new Ut(3);F.position.set(0,200,0);const C=new zt;C.position.set(20,200,20);const O=new zt;O.position.set(-35,150,35);const z=new zt;z.position.set(40,50,-40),l.add(u,T,k,F,C,O,z),l.position.set(v,w,b),l.scale.setScalar(c),l.rotation.y=Math.random()*Math.PI*2,this.add(l)}return this}}const $n=""+new URL("../images/baseStand-u6f7hEIm.jpg",import.meta.url).href;class Xn extends ct{constructor(){super();const i=new dt().load($n);i.colorSpace=lt;const t=2,s=3,A=1,h=new q(t,s,A,32),r=new R({color:9127187,map:i}),d=new x(h,r);d.position.y=A/2,this.add(d)}}class Qn{constructor(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.source=null,this.audioBuffer=null,this.isPlaying=!1,this.startTime=0,this.pauseTime=0}loadAudio(e){return fetch(e).then(i=>i.arrayBuffer()).then(i=>this.audioContext.decodeAudioData(i)).then(i=>{this.audioBuffer=i}).catch(i=>{console.error("Error loading audio file:",i)})}play(){this.audioBuffer&&!this.isPlaying?(this.source=this.audioContext.createBufferSource(),this.source.buffer=this.audioBuffer,this.source.loop=!0,this.source.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pauseTime,this.source.start(0,this.pauseTime),this.isPlaying=!0,this.source.onended=()=>{this.isPlaying=!1,this.pauseTime=0}):this.isPlaying&&this.audioContext.resume()}pause(){this.source&&this.isPlaying&&(this.audioContext.suspend(),this.pauseTime=this.audioContext.currentTime-this.startTime,this.isPlaying=!1)}stop(){this.source&&(this.source.stop(0),this.source.disconnect(),this.source=null,this.isPlaying=!1,this.pauseTime=0)}}const Kn=""+new URL("../images/normal-SHaeTU6V.jpg",import.meta.url).href,Wn=""+new URL("../images/winter-CBC5ZXch.jpg",import.meta.url).href,Zn=""+new URL("../jingle-BxWl6-4L.mp3",import.meta.url).href;let De=!1;const j=new Vt,L={transmission:1,thickness:0,roughness:0,envMapIntensity:1.5,clearcoat:0,clearcoatRoughness:0,normalScale:0,clearcoatNormalScale:0,normalRepeat:1},ht=document.querySelector("canvas.webgl"),at=new xi,H={width:ht.parentElement.clientWidth,height:ht.parentElement.clientHeight},Q=new Ei(75,H.width/H.height,.1,100);Q.position.set(7,1,5);const tt=new Mi({canvas:ht});tt.setSize(H.width,H.height);tt.setPixelRatio(Math.min(window.devicePixelRatio,2));tt.setClearColor(2039324,1);tt.toneMapping=Ci;tt.toneMappingExposure=1;window.addEventListener("resize",()=>{H.width=ht.parentElement.clientWidth,H.height=ht.parentElement.clientHeight,Q.aspect=H.width/H.height,Q.updateProjectionMatrix(),tt.setSize(H.width,H.height),tt.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Be=new Ii(Q,ht);Be.enableDamping=!0;const Oe=Ki();function Jn(){Oe.shake(Q,new _(2,2,0),1e3),De=!0}const qn=new Si(16777215,.5),Ie=new _i(16777215,.9);Ie.position.set(0,5,10);const to=new Bi,je=new dt,Rt=je.load(Wn);Rt.mapping=ki;Rt.colorSpace=lt;at.background=Rt;const yt=je.load(Kn);yt.wrapS=Me;yt.wrapT=Me;const eo=new Li(3,20),K=new Ri({transmission:L.transmission,thickness:L.thickness,roughness:L.roughness,envMap:Rt,envMapIntensity:L.envMapIntensity,clearcoat:L.clearcoat,clearcoatRoughness:L.clearcoatRoughness,normalScale:new B(L.normalScale),normalMap:yt,clearcoatNormalMap:yt,clearcoatNormalScale:new B(L.clearcoatNormalScale)}),Fe=new x(eo,K),io=new it(3,32,32,0,Math.PI,0,Math.PI),no=new R({color:16777215,side:Nt,metalness:.5,roughness:.5}),Ue=new x(io,no);Ue.rotation.set(Math.PI/-2,Math.PI,0);const oo=new An,xt=new an;xt.scale.set(.005,.005,.005);xt.position.set(1,.5,0);xt.rotation.y=1;const Et=new On;Et.scale.set(.005,.005,.005);Et.position.set(0,.5,1);Et.rotation.y=1;const ze=new Xn;ze.position.y=-3.5;const Gt=new Hn;Gt.scale.set(.005,.005,.005);const Mt=new Gn;Mt.scale.set(.003,.003,.002);Mt.position.set(.5,.5,0);Mt.rotation.y=3;Mt.populate({obstacles:[Et,xt],container:Fe});const so=new Yt(.05,.05,.05),Ao=new Pi({color:16777215}),Pt=500,ao=2.9,wt=new Ti(so,Ao,Pt),Y=new Float32Array(Pt*3),rt=new Di;function Ne(o,e){const i=Math.random()*Math.PI*2,t=Math.random()*Math.PI,s=Math.cbrt(Math.random())*ao;o[e*3]=s*Math.sin(t)*Math.cos(i),o[e*3+1]=s*Math.cos(t),o[e*3+2]=s*Math.sin(t)*Math.sin(i)}for(let o=0;o<Pt;o++)Ne(Y,o),rt.position.set(Y[o*3],Y[o*3+1],Y[o*3+2]),rt.updateMatrix(),wt.setMatrixAt(o,rt.matrix);const Lt=new Qn;Lt.loadAudio(Zn).then(()=>Lt.play());at.add(Fe,Ue,Q,qn,Ie,oo,xt,Et,Gt,Mt,ze);function He(){requestAnimationFrame(He);const o=to.getDelta();if(Be.update(),Oe.update(Q),Gt.update(o),De){at.children.includes(wt)||at.add(wt);for(let e=0;e<Pt;e++)Y[e*3+1]-=.001,Y[e*3+1]<-1&&Ne(Y,e),rt.position.set(Y[e*3],Y[e*3+1],Y[e*3+2]),rt.updateMatrix(),wt.setMatrixAt(e,rt.matrix);wt.instanceMatrix.needsUpdate=!0}Q.lookAt(at.position),tt.render(at,Q)}He();j.add(L,"transmission",0,1,.01).onChange(o=>{K.transmission=o});j.add(L,"thickness",0,5,.1).onChange(o=>{K.thickness=o});j.add(L,"roughness",0,1,.01).onChange(o=>{K.roughness=o});j.add(L,"envMapIntensity",0,3,.1).onChange(o=>{K.envMapIntensity=o});j.add(L,"clearcoat",0,1,.01).onChange(o=>{K.clearcoat=o});j.add(L,"clearcoatRoughness",0,1,.01).onChange(o=>{K.clearcoatRoughness=o});j.add(L,"normalScale",0,5,.01).onChange(o=>{K.normalScale.set(o,o)});j.add(L,"clearcoatNormalScale",0,5,.01).onChange(o=>{K.clearcoatNormalScale.set(o,o)});j.add(L,"normalRepeat",1,4,1).onChange(o=>{yt.repeat.set(o,o)});j.add({triggerShake:Jn},"triggerShake").name("Shake");j.add({play:()=>Lt.play()},"play").name("Play music");j.add({pause:()=>Lt.pause()},"pause").name("Pause music");
//# sourceMappingURL=snowglobeDemo-WVsJN13V.js.map
