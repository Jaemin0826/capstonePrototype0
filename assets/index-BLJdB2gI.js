(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function cx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var jo={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function ox(){if(lh)return ri;lh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(c,d,h){var y=null;if(h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),"key"in d){h={};for(var E in d)E!=="key"&&(h[E]=d[E])}else h=d;return d=h.ref,{$$typeof:a,type:c,key:y,ref:d!==void 0?d:null,props:h}}return ri.Fragment=r,ri.jsx=o,ri.jsxs=o,ri}var nh;function sx(){return nh||(nh=1,jo.exports=ox()),jo.exports}var s=sx(),Eo={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function fx(){if(ah)return ie;ah=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),M=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=M&&b[M]||b["@@iterator"],typeof b=="function"?b:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,G={};function Y(b,L,k){this.props=b,this.context=L,this.refs=G,this.updater=k||q}Y.prototype.isReactComponent={},Y.prototype.setState=function(b,L){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,L,"setState")},Y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function O(){}O.prototype=Y.prototype;function V(b,L,k){this.props=b,this.context=L,this.refs=G,this.updater=k||q}var X=V.prototype=new O;X.constructor=V,D(X,Y.prototype),X.isPureReactComponent=!0;var P=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},ee=Object.prototype.hasOwnProperty;function W(b,L,k,Z,F,se){return k=se.ref,{$$typeof:a,type:b,key:L,ref:k!==void 0?k:null,props:se}}function he(b,L){return W(b.type,L,void 0,void 0,void 0,b.props)}function ye(b){return typeof b=="object"&&b!==null&&b.$$typeof===a}function Ke(b){var L={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(k){return L[k]})}var nt=/\/+/g;function qe(b,L){return typeof b=="object"&&b!==null&&b.key!=null?Ke(""+b.key):L.toString(36)}function Kt(){}function Wt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Kt,Kt):(b.status="pending",b.then(function(L){b.status==="pending"&&(b.status="fulfilled",b.value=L)},function(L){b.status==="pending"&&(b.status="rejected",b.reason=L)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ye(b,L,k,Z,F){var se=typeof b;(se==="undefined"||se==="boolean")&&(b=null);var le=!1;if(b===null)le=!0;else switch(se){case"bigint":case"string":case"number":le=!0;break;case"object":switch(b.$$typeof){case a:case r:le=!0;break;case T:return le=b._init,Ye(le(b._payload),L,k,Z,F)}}if(le)return F=F(b),le=Z===""?"."+qe(b,0):Z,P(F)?(k="",le!=null&&(k=le.replace(nt,"$&/")+"/"),Ye(F,L,k,"",function(Pe){return Pe})):F!=null&&(ye(F)&&(F=he(F,k+(F.key==null||b&&b.key===F.key?"":(""+F.key).replace(nt,"$&/")+"/")+le)),L.push(F)),1;le=0;var ke=Z===""?".":Z+":";if(P(b))for(var me=0;me<b.length;me++)Z=b[me],se=ke+qe(Z,me),le+=Ye(Z,L,k,se,F);else if(me=_(b),typeof me=="function")for(b=me.call(b),me=0;!(Z=b.next()).done;)Z=Z.value,se=ke+qe(Z,me++),le+=Ye(Z,L,k,se,F);else if(se==="object"){if(typeof b.then=="function")return Ye(Wt(b),L,k,Z,F);throw L=String(b),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return le}function B(b,L,k){if(b==null)return b;var Z=[],F=0;return Ye(b,Z,"","",function(se){return L.call(k,se,F++)}),Z}function Q(b){if(b._status===-1){var L=b._result;L=L(),L.then(function(k){(b._status===0||b._status===-1)&&(b._status=1,b._result=k)},function(k){(b._status===0||b._status===-1)&&(b._status=2,b._result=k)}),b._status===-1&&(b._status=0,b._result=L)}if(b._status===1)return b._result.default;throw b._result}var I=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function oe(){}return ie.Children={map:B,forEach:function(b,L,k){B(b,function(){L.apply(this,arguments)},k)},count:function(b){var L=0;return B(b,function(){L++}),L},toArray:function(b){return B(b,function(L){return L})||[]},only:function(b){if(!ye(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ie.Component=Y,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=V,ie.StrictMode=c,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ie.__COMPILER_RUNTIME={__proto__:null,c:function(b){return $.H.useMemoCache(b)}},ie.cache=function(b){return function(){return b.apply(null,arguments)}},ie.cloneElement=function(b,L,k){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=D({},b.props),F=b.key,se=void 0;if(L!=null)for(le in L.ref!==void 0&&(se=void 0),L.key!==void 0&&(F=""+L.key),L)!ee.call(L,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&L.ref===void 0||(Z[le]=L[le]);var le=arguments.length-2;if(le===1)Z.children=k;else if(1<le){for(var ke=Array(le),me=0;me<le;me++)ke[me]=arguments[me+2];Z.children=ke}return W(b.type,F,void 0,void 0,se,Z)},ie.createContext=function(b){return b={$$typeof:y,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},ie.createElement=function(b,L,k){var Z,F={},se=null;if(L!=null)for(Z in L.key!==void 0&&(se=""+L.key),L)ee.call(L,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(F[Z]=L[Z]);var le=arguments.length-2;if(le===1)F.children=k;else if(1<le){for(var ke=Array(le),me=0;me<le;me++)ke[me]=arguments[me+2];F.children=ke}if(b&&b.defaultProps)for(Z in le=b.defaultProps,le)F[Z]===void 0&&(F[Z]=le[Z]);return W(b,se,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(b){return{$$typeof:E,render:b}},ie.isValidElement=ye,ie.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:Q}},ie.memo=function(b,L){return{$$typeof:g,type:b,compare:L===void 0?null:L}},ie.startTransition=function(b){var L=$.T,k={};$.T=k;try{var Z=b(),F=$.S;F!==null&&F(k,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(oe,I)}catch(se){I(se)}finally{$.T=L}},ie.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ie.use=function(b){return $.H.use(b)},ie.useActionState=function(b,L,k){return $.H.useActionState(b,L,k)},ie.useCallback=function(b,L){return $.H.useCallback(b,L)},ie.useContext=function(b){return $.H.useContext(b)},ie.useDebugValue=function(){},ie.useDeferredValue=function(b,L){return $.H.useDeferredValue(b,L)},ie.useEffect=function(b,L,k){var Z=$.H;if(typeof k=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(b,L)},ie.useId=function(){return $.H.useId()},ie.useImperativeHandle=function(b,L,k){return $.H.useImperativeHandle(b,L,k)},ie.useInsertionEffect=function(b,L){return $.H.useInsertionEffect(b,L)},ie.useLayoutEffect=function(b,L){return $.H.useLayoutEffect(b,L)},ie.useMemo=function(b,L){return $.H.useMemo(b,L)},ie.useOptimistic=function(b,L){return $.H.useOptimistic(b,L)},ie.useReducer=function(b,L,k){return $.H.useReducer(b,L,k)},ie.useRef=function(b){return $.H.useRef(b)},ie.useState=function(b){return $.H.useState(b)},ie.useSyncExternalStore=function(b,L,k){return $.H.useSyncExternalStore(b,L,k)},ie.useTransition=function(){return $.H.useTransition()},ie.version="19.1.0",ie}var ih;function Ko(){return ih||(ih=1,Eo.exports=fx()),Eo.exports}var S=Ko();const hi=cx(S);var wo={exports:{}},ci={},To={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function dx(){return uh||(uh=1,function(a){function r(B,Q){var I=B.length;B.push(Q);e:for(;0<I;){var oe=I-1>>>1,b=B[oe];if(0<d(b,Q))B[oe]=Q,B[I]=b,I=oe;else break e}}function o(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var Q=B[0],I=B.pop();if(I!==Q){B[0]=I;e:for(var oe=0,b=B.length,L=b>>>1;oe<L;){var k=2*(oe+1)-1,Z=B[k],F=k+1,se=B[F];if(0>d(Z,I))F<b&&0>d(se,Z)?(B[oe]=se,B[F]=I,oe=F):(B[oe]=Z,B[k]=I,oe=k);else if(F<b&&0>d(se,I))B[oe]=se,B[F]=I,oe=F;else break e}}return Q}function d(B,Q){var I=B.sortIndex-Q.sortIndex;return I!==0?I:B.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var y=Date,E=y.now();a.unstable_now=function(){return y.now()-E}}var m=[],g=[],T=1,M=null,_=3,q=!1,D=!1,G=!1,Y=!1,O=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var Q=o(g);Q!==null;){if(Q.callback===null)c(g);else if(Q.startTime<=B)c(g),Q.sortIndex=Q.expirationTime,r(m,Q);else break;Q=o(g)}}function $(B){if(G=!1,P(B),!D)if(o(m)!==null)D=!0,ee||(ee=!0,qe());else{var Q=o(g);Q!==null&&Ye($,Q.startTime-B)}}var ee=!1,W=-1,he=5,ye=-1;function Ke(){return Y?!0:!(a.unstable_now()-ye<he)}function nt(){if(Y=!1,ee){var B=a.unstable_now();ye=B;var Q=!0;try{e:{D=!1,G&&(G=!1,V(W),W=-1),q=!0;var I=_;try{t:{for(P(B),M=o(m);M!==null&&!(M.expirationTime>B&&Ke());){var oe=M.callback;if(typeof oe=="function"){M.callback=null,_=M.priorityLevel;var b=oe(M.expirationTime<=B);if(B=a.unstable_now(),typeof b=="function"){M.callback=b,P(B),Q=!0;break t}M===o(m)&&c(m),P(B)}else c(m);M=o(m)}if(M!==null)Q=!0;else{var L=o(g);L!==null&&Ye($,L.startTime-B),Q=!1}}break e}finally{M=null,_=I,q=!1}Q=void 0}}finally{Q?qe():ee=!1}}}var qe;if(typeof X=="function")qe=function(){X(nt)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Wt=Kt.port2;Kt.port1.onmessage=nt,qe=function(){Wt.postMessage(null)}}else qe=function(){O(nt,0)};function Ye(B,Q){W=O(function(){B(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var I=_;_=Q;try{return B()}finally{_=I}},a.unstable_requestPaint=function(){Y=!0},a.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var I=_;_=B;try{return Q()}finally{_=I}},a.unstable_scheduleCallback=function(B,Q,I){var oe=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?oe+I:oe):I=oe,B){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=I+b,B={id:T++,callback:Q,priorityLevel:B,startTime:I,expirationTime:b,sortIndex:-1},I>oe?(B.sortIndex=I,r(g,B),o(m)===null&&B===o(g)&&(G?(V(W),W=-1):G=!0,Ye($,I-oe))):(B.sortIndex=b,r(m,B),D||q||(D=!0,ee||(ee=!0,qe()))),B},a.unstable_shouldYield=Ke,a.unstable_wrapCallback=function(B){var Q=_;return function(){var I=_;_=Q;try{return B.apply(this,arguments)}finally{_=I}}}}(Ro)),Ro}var rh;function px(){return rh||(rh=1,To.exports=dx()),To.exports}var zo={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function hx(){if(ch)return tt;ch=1;var a=Ko();function r(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(m,g,T){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:m,containerInfo:g,implementation:T}}var y=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(m,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return h(m,g,null,T)},tt.flushSync=function(m){var g=y.T,T=c.p;try{if(y.T=null,c.p=2,m)return m()}finally{y.T=g,c.p=T,c.d.f()}},tt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(m,g))},tt.prefetchDNS=function(m){typeof m=="string"&&c.d.D(m)},tt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var T=g.as,M=E(T,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?c.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:_,fetchPriority:q}):T==="script"&&c.d.X(m,{crossOrigin:M,integrity:_,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},tt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=E(g.as,g.crossOrigin);c.d.M(m,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(m)},tt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,M=E(T,g.crossOrigin);c.d.L(m,T,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},tt.preloadModule=function(m,g){if(typeof m=="string")if(g){var T=E(g.as,g.crossOrigin);c.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(m)},tt.requestFormReset=function(m){c.d.r(m)},tt.unstable_batchedUpdates=function(m,g){return m(g)},tt.useFormState=function(m,g,T){return y.H.useFormState(m,g,T)},tt.useFormStatus=function(){return y.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var oh;function gx(){if(oh)return zo.exports;oh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),zo.exports=hx(),zo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function xx(){if(sh)return ci;sh=1;var a=px(),r=Ko(),o=gx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(h(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,n=t;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){l=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return E(i),e;if(u===n)return E(i),t;u=u.sibling}throw Error(c(188))}if(l.return!==n.return)l=i,n=u;else{for(var f=!1,p=i.child;p;){if(p===l){f=!0,l=i,n=u;break}if(p===n){f=!0,n=i,l=u;break}p=p.sibling}if(!f){for(p=u.child;p;){if(p===l){f=!0,l=u,n=i;break}if(p===n){f=!0,n=u,l=i;break}p=p.sibling}if(!f)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,M=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),X=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var Kt=Symbol.for("react.client.reference");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Kt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case Y:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case ee:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case X:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Wt(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return Wt(e(t))}catch{}}return null}var Ye=Array.isArray,B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},oe=[],b=-1;function L(e){return{current:e}}function k(e){0>b||(e.current=oe[b],oe[b]=null,b--)}function Z(e,t){b++,oe[b]=e.current,e.current=t}var F=L(null),se=L(null),le=L(null),ke=L(null);function me(e,t){switch(Z(le,t),Z(se,e),Z(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Mp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Mp(t),e=_p(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(F),Z(F,e)}function Pe(){k(F),k(se),k(le)}function Ql(e){e.memoizedState!==null&&Z(ke,e);var t=F.current,l=_p(t,e.type);t!==l&&(Z(se,e),Z(F,l))}function Jt(e){se.current===e&&(k(F),k(se)),ke.current===e&&(k(ke),li._currentValue=I)}var bt=Object.prototype.hasOwnProperty,cr=a.unstable_scheduleCallback,or=a.unstable_cancelCallback,q0=a.unstable_shouldYield,Y0=a.unstable_requestPaint,Gt=a.unstable_now,k0=a.unstable_getCurrentPriorityLevel,os=a.unstable_ImmediatePriority,ss=a.unstable_UserBlockingPriority,ji=a.unstable_NormalPriority,X0=a.unstable_LowPriority,fs=a.unstable_IdlePriority,Q0=a.log,Z0=a.unstable_setDisableYieldValue,sa=null,st=null;function xl(e){if(typeof Q0=="function"&&Z0(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(sa,e)}catch{}}var ft=Math.clz32?Math.clz32:K0,V0=Math.log,$0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(V0(e)/$0|0)|0}var Ei=256,wi=4194304;function Zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ti(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var i=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~u,n!==0?i=Zl(n):(f&=p,f!==0?i=Zl(f):l||(l=p&~e,l!==0&&(i=Zl(l))))):(p=n&~u,p!==0?i=Zl(p):f!==0?i=Zl(f):l||(l=n&~e,l!==0&&(i=Zl(l)))),i===0?0:t!==0&&t!==i&&(t&u)===0&&(u=i&-i,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:i}function fa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function W0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ds(){var e=Ei;return Ei<<=1,(Ei&4194048)===0&&(Ei=256),e}function ps(){var e=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),e}function sr(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function J0(e,t,l,n,i,u){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,z=e.hiddenUpdates;for(l=f&~l;0<l;){var N=31-ft(l),H=1<<N;p[N]=0,v[N]=-1;var A=z[N];if(A!==null)for(z[N]=null,N=0;N<A.length;N++){var C=A[N];C!==null&&(C.lane&=-536870913)}l&=~H}n!==0&&hs(e,n,0),u!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function hs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ft(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function gs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ft(l),i=1<<n;i&t|e[n]&t&&(e[n]|=t),l&=~i}}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xs(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Jp(e.type))}function F0(e,t){var l=Q.p;try{return Q.p=e,t()}finally{Q.p=l}}var ml=Math.random().toString(36).slice(2),Ie="__reactFiber$"+ml,at="__reactProps$"+ml,pn="__reactContainer$"+ml,pr="__reactEvents$"+ml,P0="__reactListeners$"+ml,I0="__reactHandles$"+ml,ms="__reactResources$"+ml,pa="__reactMarker$"+ml;function hr(e){delete e[Ie],delete e[at],delete e[pr],delete e[P0],delete e[I0]}function hn(e){var t=e[Ie];if(t)return t;for(var l=e.parentNode;l;){if(t=l[pn]||l[Ie]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Np(e);e!==null;){if(l=e[Ie])return l;e=Np(e)}return t}e=l,l=e.parentNode}return null}function gn(e){if(e=e[Ie]||e[pn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ha(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function xn(e){var t=e[ms];return t||(t=e[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[pa]=!0}var vs=new Set,ys={};function Vl(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(ys[e]=t,e=0;e<t.length;e++)vs.add(t[e])}var eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bs={},Ss={};function tg(e){return bt.call(Ss,e)?!0:bt.call(bs,e)?!1:eg.test(e)?Ss[e]=!0:(bs[e]=!0,!1)}function Ri(e,t,l){if(tg(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function zi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ft(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var gr,js;function vn(e){if(gr===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);gr=t&&t[1]||"",js=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+e+js}var xr=!1;function mr(e,t){if(!e||xr)return"";xr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(C){var A=C}Reflect.construct(e,[],H)}else{try{H.call()}catch(C){A=C}e.call(H.prototype)}}else{try{throw Error()}catch(C){A=C}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),f=u[0],p=u[1];if(f&&p){var v=f.split(`
`),z=p.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===z.length)for(n=v.length-1,i=z.length-1;1<=n&&0<=i&&v[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==z[i]){var N=`
`+v[n].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=n&&0<=i);break}}}finally{xr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?vn(l):""}function lg(e){switch(e.tag){case 26:case 27:case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 15:return mr(e.type,!1);case 11:return mr(e.type.render,!1);case 1:return mr(e.type,!0);case 31:return vn("Activity");default:return""}}function Es(e){try{var t="";do t+=lg(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e){var t=ws(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=ng(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=ws(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ag=/[\n"\\]/g;function jt(e){return e.replace(ag,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vr(e,t,l,n,i,u,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?yr(e,f,St(t)):l!=null?yr(e,f,St(l)):n!=null&&e.removeAttribute("value"),i==null&&u!=null&&(e.defaultChecked=!!u),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+St(p):e.removeAttribute("name")}function Rs(e,t,l,n,i,u,f,p){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;l=l!=null?""+St(l):"",t=t!=null?""+St(t):l,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function yr(e,t,l){t==="number"&&Ci(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function yn(e,t,l,n){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&n&&(e[l].defaultSelected=!0)}else{for(l=""+St(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zs(e,t,l){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+St(l):""}function As(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(c(92));if(Ye(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=St(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function bn(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cs(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||ig.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Ms(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&l[i]!==n&&Cs(e,i,n)}else for(var u in t)t.hasOwnProperty(u)&&Cs(e,u,t[u])}function br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ug=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return rg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Sr=null;function jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,jn=null;function _s(e){var t=gn(e);if(t&&(e=t.stateNode)){var l=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(vr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var i=n[at]||null;if(!i)throw Error(c(90));vr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Ts(n)}break e;case"textarea":zs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&yn(e,!!l.multiple,t,!1)}}}var Er=!1;function Os(e,t,l){if(Er)return e(t,l);Er=!0;try{var n=e(t);return n}finally{if(Er=!1,(Sn!==null||jn!==null)&&(gu(),Sn&&(t=Sn,e=jn,jn=Sn=null,_s(t),e)))for(t=0;t<e.length;t++)_s(e[t])}}function ga(e,t){var l=e.stateNode;if(l===null)return null;var n=l[at]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wr=!1;if(Pt)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){wr=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{wr=!1}var vl=null,Tr=null,_i=null;function Ds(){if(_i)return _i;var e,t=Tr,l=t.length,n,i="value"in vl?vl.value:vl.textContent,u=i.length;for(e=0;e<l&&t[e]===i[e];e++);var f=l-e;for(n=1;n<=f&&t[l-n]===i[u-n];n++);return _i=i.slice(e,1<n?1-n:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Bs(){return!1}function it(e){function t(l,n,i,u,f){this._reactName=l,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(l=e[p],this[p]=l?l(u):u[p]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Di:Bs,this.isPropagationStopped=Bs,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var $l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=it($l),ma=T({},$l,{view:0,detail:0}),cg=it(ma),Rr,zr,va,Ni=T({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==va&&(va&&e.type==="mousemove"?(Rr=e.screenX-va.screenX,zr=e.screenY-va.screenY):zr=Rr=0,va=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:zr}}),Ns=it(Ni),og=T({},Ni,{dataTransfer:0}),sg=it(og),fg=T({},ma,{relatedTarget:0}),Ar=it(fg),dg=T({},$l,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=it(dg),hg=T({},$l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=it(hg),xg=T({},$l,{data:0}),Us=it(xg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yg[e])?!!t[e]:!1}function Cr(){return bg}var Sg=T({},ma,{key:function(e){if(e.key){var t=mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=it(Sg),Eg=T({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=it(Eg),wg=T({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),Tg=it(wg),Rg=T({},$l,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=it(Rg),Ag=T({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=it(Ag),Mg=T({},$l,{newState:0,oldState:0}),_g=it(Mg),Og=[9,13,27,32],Mr=Pt&&"CompositionEvent"in window,ya=null;Pt&&"documentMode"in document&&(ya=document.documentMode);var Dg=Pt&&"TextEvent"in window&&!ya,Gs=Pt&&(!Mr||ya&&8<ya&&11>=ya),Ls=" ",qs=!1;function Ys(e,t){switch(e){case"keyup":return Og.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Bg(e,t){switch(e){case"compositionend":return ks(t);case"keypress":return t.which!==32?null:(qs=!0,Ls);case"textInput":return e=t.data,e===Ls&&qs?null:e;default:return null}}function Ng(e,t){if(En)return e==="compositionend"||!Mr&&Ys(e,t)?(e=Ds(),_i=Tr=vl=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gs&&t.locale!=="ko"?null:t.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ug[e.type]:t==="textarea"}function Qs(e,t,l,n){Sn?jn?jn.push(n):jn=[n]:Sn=n,t=Su(t,"onChange"),0<t.length&&(l=new Bi("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var ba=null,Sa=null;function Hg(e){Tp(e,0)}function Ui(e){var t=ha(e);if(Ts(t))return e}function Zs(e,t){if(e==="change")return t}var Vs=!1;if(Pt){var _r;if(Pt){var Or="oninput"in document;if(!Or){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),Or=typeof $s.oninput=="function"}_r=Or}else _r=!1;Vs=_r&&(!document.documentMode||9<document.documentMode)}function Ks(){ba&&(ba.detachEvent("onpropertychange",Ws),Sa=ba=null)}function Ws(e){if(e.propertyName==="value"&&Ui(Sa)){var t=[];Qs(t,Sa,e,jr(e)),Os(Hg,t)}}function Gg(e,t,l){e==="focusin"?(Ks(),ba=t,Sa=l,ba.attachEvent("onpropertychange",Ws)):e==="focusout"&&Ks()}function Lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Sa)}function qg(e,t){if(e==="click")return Ui(t)}function Yg(e,t){if(e==="input"||e==="change")return Ui(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:kg;function ja(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var i=l[n];if(!bt.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function Js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var l=Js(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Js(l)}}function Ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ci(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ci(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xg=Pt&&"documentMode"in document&&11>=document.documentMode,wn=null,Br=null,Ea=null,Nr=!1;function ef(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nr||wn==null||wn!==Ci(n)||(n=wn,"selectionStart"in n&&Dr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ea&&ja(Ea,n)||(Ea=n,n=Su(Br,"onSelect"),0<n.length&&(t=new Bi("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=wn)))}function Kl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Tn={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionrun:Kl("Transition","TransitionRun"),transitionstart:Kl("Transition","TransitionStart"),transitioncancel:Kl("Transition","TransitionCancel"),transitionend:Kl("Transition","TransitionEnd")},Ur={},tf={};Pt&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Wl(e){if(Ur[e])return Ur[e];if(!Tn[e])return e;var t=Tn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in tf)return Ur[e]=t[l];return e}var lf=Wl("animationend"),nf=Wl("animationiteration"),af=Wl("animationstart"),Qg=Wl("transitionrun"),Zg=Wl("transitionstart"),Vg=Wl("transitioncancel"),uf=Wl("transitionend"),rf=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hr.push("scrollEnd");function Bt(e,t){rf.set(e,t),Vl(t,[e])}var cf=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var l=cf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Es(t)},cf.set(e,t),t)}return{value:e,source:t,stack:Es(t)}}var wt=[],Rn=0,Gr=0;function Hi(){for(var e=Rn,t=Gr=Rn=0;t<e;){var l=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}u!==0&&of(l,i,u)}}function Gi(e,t,l,n){wt[Rn++]=e,wt[Rn++]=t,wt[Rn++]=l,wt[Rn++]=n,Gr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Lr(e,t,l,n){return Gi(e,t,l,n),Li(e)}function zn(e,t){return Gi(e,null,null,t),Li(e)}function of(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var i=!1,u=e.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(i=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,i&&t!==null&&(i=31-ft(l),e=u.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=l|536870912),u):null}function Li(e){if(50<Ka)throw Ka=0,Zc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function $g(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,l,n){return new $g(e,t,l,n)}function qr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var l=e.alternate;return l===null?(l=pt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function sf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,l,n,i,u){var f=0;if(n=e,typeof e=="function")qr(e)&&(f=1);else if(typeof e=="string")f=W1(e,l,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=pt(31,l,t,i),e.elementType=ye,e.lanes=u,e;case D:return Jl(l.children,i,u,t);case G:f=8,i|=24;break;case Y:return e=pt(12,l,t,i|2),e.elementType=Y,e.lanes=u,e;case $:return e=pt(13,l,t,i),e.elementType=$,e.lanes=u,e;case ee:return e=pt(19,l,t,i),e.elementType=ee,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case X:f=10;break e;case V:f=9;break e;case P:f=11;break e;case W:f=14;break e;case he:f=16,n=null;break e}f=29,l=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=pt(f,l,t,i),t.elementType=e,t.type=n,t.lanes=u,t}function Jl(e,t,l,n){return e=pt(7,e,n,t),e.lanes=l,e}function Yr(e,t,l){return e=pt(6,e,null,t),e.lanes=l,e}function kr(e,t,l){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cn=[],Mn=0,Yi=null,ki=0,Tt=[],Rt=0,Fl=null,el=1,tl="";function Pl(e,t){Cn[Mn++]=ki,Cn[Mn++]=Yi,Yi=e,ki=t}function ff(e,t,l){Tt[Rt++]=el,Tt[Rt++]=tl,Tt[Rt++]=Fl,Fl=e;var n=el;e=tl;var i=32-ft(n)-1;n&=~(1<<i),l+=1;var u=32-ft(t)+i;if(30<u){var f=i-i%5;u=(n&(1<<f)-1).toString(32),n>>=f,i-=f,el=1<<32-ft(t)+i|l<<i|n,tl=u+e}else el=1<<u|l<<i|n,tl=e}function Xr(e){e.return!==null&&(Pl(e,1),ff(e,1,0))}function Qr(e){for(;e===Yi;)Yi=Cn[--Mn],Cn[Mn]=null,ki=Cn[--Mn],Cn[Mn]=null;for(;e===Fl;)Fl=Tt[--Rt],Tt[Rt]=null,tl=Tt[--Rt],Tt[Rt]=null,el=Tt[--Rt],Tt[Rt]=null}var lt=null,_e=null,xe=!1,Il=null,Lt=!1,Zr=Error(c(519));function en(e){var t=Error(c(418,""));throw Ra(Et(t,e)),Zr}function df(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[at]=n,l){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(l=0;l<Ja.length;l++)de(Ja[l],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Rs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ai(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),As(t,n.value,n.defaultValue,n.children),Ai(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||Cp(t.textContent,l)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=ju),t=!0):t=!1,t||en(e)}function pf(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function wa(e){if(e!==lt)return!1;if(!xe)return pf(e),xe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ro(e.type,e.memoizedProps)),l=!l),l&&_e&&en(e),pf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){_e=Ut(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}_e=null}}else t===27?(t=_e,Bl(e.type)?(e=fo,fo=null,_e=e):_e=t):_e=lt?Ut(e.stateNode.nextSibling):null;return!0}function Ta(){_e=lt=null,xe=!1}function hf(){var e=Il;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Il=null),e}function Ra(e){Il===null?Il=[e]:Il.push(e)}var Vr=L(null),tn=null,ll=null;function yl(e,t,l){Z(Vr,t._currentValue),t._currentValue=l}function nl(e){e._currentValue=Vr.current,k(Vr)}function $r(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Kr(e,t,l,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){var f=i.child;u=u.firstContext;e:for(;u!==null;){var p=u;u=i;for(var v=0;v<t.length;v++)if(p.context===t[v]){u.lanes|=l,p=u.alternate,p!==null&&(p.lanes|=l),$r(u.return,l,e),n||(f=null);break e}u=p.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(c(341));f.lanes|=l,u=f.alternate,u!==null&&(u.lanes|=l),$r(f,l,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function za(e,t,l,n){e=null;for(var i=t,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var p=i.type;dt(i.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(i===ke.current){if(f=i.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(li):e=[li])}i=i.return}e!==null&&Kr(t,e,l,n),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ln(e){tn=e,ll=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return gf(tn,e)}function Qi(e,t){return tn===null&&ln(e),gf(e,t)}function gf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},ll===null){if(e===null)throw Error(c(308));ll=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ll=ll.next=t;return l}var Kg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Wg=a.unstable_scheduleCallback,Jg=a.unstable_NormalPriority,Ge={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wr(){return{controller:new Kg,data:new Map,refCount:0}}function Aa(e){e.refCount--,e.refCount===0&&Wg(Jg,function(){e.controller.abort()})}var Ca=null,Jr=0,_n=0,On=null;function Fg(e,t){if(Ca===null){var l=Ca=[];Jr=0,_n=Pc(),On={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Jr++,t.then(xf,xf),t}function xf(){if(--Jr===0&&Ca!==null){On!==null&&(On.status="fulfilled");var e=Ca;Ca=null,_n=0,On=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),n}var mf=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fg(e,t),mf!==null&&mf(e,t)};var nn=L(null);function Fr(){var e=nn.current;return e!==null?e:Re.pooledCache}function Zi(e,t){t===null?Z(nn,nn.current):Z(nn,t.pool)}function vf(){var e=Fr();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ma=Error(c(460)),yf=Error(c(474)),Vi=Error(c(542)),Pr={then:function(){}};function bf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $i(){}function Sf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then($i,$i),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ef(e),e;default:if(typeof t.status=="string")t.then($i,$i);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ef(e),e}throw _a=t,Ma}}var _a=null;function jf(){if(_a===null)throw Error(c(459));var e=_a;return _a=null,e}function Ef(e){if(e===Ma||e===Vi)throw Error(c(483))}var bl=!1;function Ir(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(be&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Li(e),of(e,null,l),t}return Gi(e,n,t,l),Li(e)}function Oa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,gs(e,l)}}function tc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=f:u=u.next=f,l=l.next}while(l!==null);u===null?i=u=t:u=u.next=t}else i=u=t;l={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var lc=!1;function Da(){if(lc){var e=On;if(e!==null)throw e}}function Ba(e,t,l,n){lc=!1;var i=e.updateQueue;bl=!1;var u=i.firstBaseUpdate,f=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var v=p,z=v.next;v.next=null,f===null?u=z:f.next=z,f=v;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==f&&(p===null?N.firstBaseUpdate=z:p.next=z,N.lastBaseUpdate=v))}if(u!==null){var H=i.baseState;f=0,N=z=v=null,p=u;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(pe&A)===A:(n&A)===A){A!==0&&A===_n&&(lc=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ae=e,te=p;A=t;var we=l;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){H=ae.call(we,H,A);break e}H=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,A=typeof ae=="function"?ae.call(we,H,A):ae,A==null)break e;H=T({},H,A);break e;case 2:bl=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(z=N=C,v=H):N=N.next=C,f|=A;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);N===null&&(v=H),i.baseState=v,i.firstBaseUpdate=z,i.lastBaseUpdate=N,u===null&&(i.shared.lanes=0),Ml|=f,e.lanes=f,e.memoizedState=H}}function wf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Tf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)wf(l[e],t)}var Dn=L(null),Ki=L(0);function Rf(e,t){e=sl,Z(Ki,e),Z(Dn,t),sl=e|t.baseLanes}function nc(){Z(Ki,sl),Z(Dn,Dn.current)}function ac(){sl=Ki.current,k(Dn),k(Ki)}var El=0,re=null,je=null,Ne=null,Wi=!1,Bn=!1,an=!1,Ji=0,Na=0,Nn=null,Ig=0;function De(){throw Error(c(321))}function ic(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!dt(e[l],t[l]))return!1;return!0}function uc(e,t,l,n,i,u){return El=u,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?od:sd,an=!1,u=l(n,i),an=!1,Bn&&(u=Af(t,l,n,i)),zf(e),u}function zf(e){B.H=lu;var t=je!==null&&je.next!==null;if(El=0,Ne=je=re=null,Wi=!1,Na=0,Nn=null,t)throw Error(c(300));e===null||Qe||(e=e.dependencies,e!==null&&Xi(e)&&(Qe=!0))}function Af(e,t,l,n){re=e;var i=0;do{if(Bn&&(Nn=null),Na=0,Bn=!1,25<=i)throw Error(c(301));if(i+=1,Ne=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=u1,u=t(l,n)}while(Bn);return u}function e1(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Ua(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(re.flags|=1024),t}function rc(){var e=Ji!==0;return Ji=0,e}function cc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function oc(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}El=0,Ne=je=re=null,Bn=!1,Na=Ji=0,Nn=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?re.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ue(){if(je===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ne===null?re.memoizedState:Ne.next;if(t!==null)Ne=t,je=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ne===null?re.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var t=Na;return Na+=1,Nn===null&&(Nn=[]),e=Sf(Nn,e,t),t=re,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?od:sd),e}function Fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===X)return et(e)}throw Error(c(438,String(e)))}function fc(e){var t=null,l=re.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=sc(),re.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=Ke;return t.index++,l}function al(e,t){return typeof t=="function"?t(e):t}function Pi(e){var t=Ue();return dc(t,je,e)}function dc(e,t,l){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var i=e.baseQueue,u=n.pending;if(u!==null){if(i!==null){var f=i.next;i.next=u.next,u.next=f}t.baseQueue=i=u,n.pending=null}if(u=e.baseState,i===null)e.memoizedState=u;else{t=i.next;var p=f=null,v=null,z=t,N=!1;do{var H=z.lane&-536870913;if(H!==z.lane?(pe&H)===H:(El&H)===H){var A=z.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),H===_n&&(N=!0);else if((El&A)===A){z=z.next,A===_n&&(N=!0);continue}else H={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(p=v=H,f=u):v=v.next=H,re.lanes|=A,Ml|=A;H=z.action,an&&l(u,H),u=z.hasEagerState?z.eagerState:l(u,H)}else A={lane:H,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(p=v=A,f=u):v=v.next=A,re.lanes|=H,Ml|=H;z=z.next}while(z!==null&&z!==t);if(v===null?f=u:v.next=p,!dt(u,e.memoizedState)&&(Qe=!0,N&&(l=On,l!==null)))throw l;e.memoizedState=u,e.baseState=f,e.baseQueue=v,n.lastRenderedState=u}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function pc(e){var t=Ue(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var n=l.dispatch,i=l.pending,u=t.memoizedState;if(i!==null){l.pending=null;var f=i=i.next;do u=e(u,f.action),f=f.next;while(f!==i);dt(u,t.memoizedState)||(Qe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,n]}function Cf(e,t,l){var n=re,i=Ue(),u=xe;if(u){if(l===void 0)throw Error(c(407));l=l()}else l=t();var f=!dt((je||i).memoizedState,l);f&&(i.memoizedState=l,Qe=!0),i=i.queue;var p=Of.bind(null,n,i,e);if(Ha(2048,8,p,[e]),i.getSnapshot!==t||f||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Un(9,Ii(),_f.bind(null,n,i,l,t),null),Re===null)throw Error(c(349));u||(El&124)!==0||Mf(n,t,l)}return l}function Mf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=re.updateQueue,t===null?(t=sc(),re.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function _f(e,t,l,n){t.value=l,t.getSnapshot=n,Df(t)&&Bf(e)}function Of(e,t,l){return l(function(){Df(t)&&Bf(e)})}function Df(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!dt(e,l)}catch{return!0}}function Bf(e){var t=zn(e,2);t!==null&&vt(t,e,2)}function hc(e){var t=ut();if(typeof e=="function"){var l=e;if(e=l(),an){xl(!0);try{l()}finally{xl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:e},t}function Nf(e,t,l,n){return e.baseState=l,dc(e,je,typeof n=="function"?n:al)}function t1(e,t,l,n,i){if(tu(e))throw Error(c(485));if(e=t.action,e!==null){var u={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};B.T!==null?l(!0):u.isTransition=!1,n(u),l=t.pending,l===null?(u.next=t.pending=u,Uf(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Uf(e,t){var l=t.action,n=t.payload,i=e.state;if(t.isTransition){var u=B.T,f={};B.T=f;try{var p=l(i,n),v=B.S;v!==null&&v(f,p),Hf(e,t,p)}catch(z){gc(e,t,z)}finally{B.T=u}}else try{u=l(i,n),Hf(e,t,u)}catch(z){gc(e,t,z)}}function Hf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Gf(e,t,n)},function(n){return gc(e,t,n)}):Gf(e,t,l)}function Gf(e,t,l){t.status="fulfilled",t.value=l,Lf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Uf(e,l)))}function gc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,Lf(t),t=t.next;while(t!==n)}e.action=null}function Lf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qf(e,t){return t}function Yf(e,t){if(xe){var l=Re.formState;if(l!==null){e:{var n=re;if(xe){if(_e){t:{for(var i=_e,u=Lt;i.nodeType!==8;){if(!u){i=null;break t}if(i=Ut(i.nextSibling),i===null){i=null;break t}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){_e=Ut(i.nextSibling),n=i.data==="F!";break e}}en(n)}n=!1}n&&(t=l[0])}}return l=ut(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qf,lastRenderedState:t},l.queue=n,l=ud.bind(null,re,n),n.dispatch=l,n=hc(!1),u=bc.bind(null,re,!1,n.queue),n=ut(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,l=t1.bind(null,re,i,u,l),i.dispatch=l,n.memoizedState=e,[t,l,!1]}function kf(e){var t=Ue();return Xf(t,je,e)}function Xf(e,t,l){if(t=dc(e,t,qf)[0],e=Pi(al)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Ua(t)}catch(f){throw f===Ma?Vi:f}else n=t;t=Ue();var i=t.queue,u=i.dispatch;return l!==t.memoizedState&&(re.flags|=2048,Un(9,Ii(),l1.bind(null,i,l),null)),[n,u,e]}function l1(e,t){e.action=t}function Qf(e){var t=Ue(),l=je;if(l!==null)return Xf(t,l,e);Ue(),t=t.memoizedState,l=Ue();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function Un(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=re.updateQueue,t===null&&(t=sc(),re.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function Ii(){return{destroy:void 0,resource:void 0}}function Zf(){return Ue().memoizedState}function eu(e,t,l,n){var i=ut();n=n===void 0?null:n,re.flags|=e,i.memoizedState=Un(1|t,Ii(),l,n)}function Ha(e,t,l,n){var i=Ue();n=n===void 0?null:n;var u=i.memoizedState.inst;je!==null&&n!==null&&ic(n,je.memoizedState.deps)?i.memoizedState=Un(t,u,l,n):(re.flags|=e,i.memoizedState=Un(1|t,u,l,n))}function Vf(e,t){eu(8390656,8,e,t)}function $f(e,t){Ha(2048,8,e,t)}function Kf(e,t){return Ha(4,2,e,t)}function Wf(e,t){return Ha(4,4,e,t)}function Jf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,l){l=l!=null?l.concat([e]):null,Ha(4,4,Jf.bind(null,t,e),l)}function xc(){}function Pf(e,t){var l=Ue();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&ic(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function If(e,t){var l=Ue();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&ic(t,n[1]))return n[0];if(n=e(),an){xl(!0);try{e()}finally{xl(!1)}}return l.memoizedState=[n,t],n}function mc(e,t,l){return l===void 0||(El&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=lp(),re.lanes|=e,Ml|=e,l)}function ed(e,t,l,n){return dt(l,t)?l:Dn.current!==null?(e=mc(e,l,n),dt(e,t)||(Qe=!0),e):(El&42)===0?(Qe=!0,e.memoizedState=l):(e=lp(),re.lanes|=e,Ml|=e,t)}function td(e,t,l,n,i){var u=Q.p;Q.p=u!==0&&8>u?u:8;var f=B.T,p={};B.T=p,bc(e,!1,t,l);try{var v=i(),z=B.S;if(z!==null&&z(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=Pg(v,n);Ga(e,t,N,mt(e))}else Ga(e,t,n,mt(e))}catch(H){Ga(e,t,{then:function(){},status:"rejected",reason:H},mt())}finally{Q.p=u,B.T=f}}function n1(){}function vc(e,t,l,n){if(e.tag!==5)throw Error(c(476));var i=ld(e).queue;td(e,i,t,I,l===null?n1:function(){return nd(e),l(n)})}function ld(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:I},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=ld(e).next.queue;Ga(e,t,{},mt())}function yc(){return et(li)}function ad(){return Ue().memoizedState}function id(){return Ue().memoizedState}function a1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=mt();e=Sl(l);var n=jl(t,e,l);n!==null&&(vt(n,t,l),Oa(n,t,l)),t={cache:Wr()},e.payload=t;return}t=t.return}}function i1(e,t,l){var n=mt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},tu(e)?rd(t,l):(l=Lr(e,t,l,n),l!==null&&(vt(l,e,n),cd(l,t,n)))}function ud(e,t,l){var n=mt();Ga(e,t,l,n)}function Ga(e,t,l,n){var i={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(tu(e))rd(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,p=u(f,l);if(i.hasEagerState=!0,i.eagerState=p,dt(p,f))return Gi(e,t,i,0),Re===null&&Hi(),!1}catch{}finally{}if(l=Lr(e,t,i,n),l!==null)return vt(l,e,n),cd(l,t,n),!0}return!1}function bc(e,t,l,n){if(n={lane:2,revertLane:Pc(),action:n,hasEagerState:!1,eagerState:null,next:null},tu(e)){if(t)throw Error(c(479))}else t=Lr(e,l,n,2),t!==null&&vt(t,e,2)}function tu(e){var t=e.alternate;return e===re||t!==null&&t===re}function rd(e,t){Bn=Wi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function cd(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,gs(e,l)}}var lu={readContext:et,use:Fi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},od={readContext:et,use:Fi,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Vf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,eu(4194308,4,Jf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return eu(4194308,4,e,t)},useInsertionEffect:function(e,t){eu(4,2,e,t)},useMemo:function(e,t){var l=ut();t=t===void 0?null:t;var n=e();if(an){xl(!0);try{e()}finally{xl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=ut();if(l!==void 0){var i=l(t);if(an){xl(!0);try{l(t)}finally{xl(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=i1.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=hc(e);var t=e.queue,l=ud.bind(null,re,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:xc,useDeferredValue:function(e,t){var l=ut();return mc(l,e,t)},useTransition:function(){var e=hc(!1);return e=td.bind(null,re,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=re,i=ut();if(xe){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Re===null)throw Error(c(349));(pe&124)!==0||Mf(n,t,l)}i.memoizedState=l;var u={value:l,getSnapshot:t};return i.queue=u,Vf(Of.bind(null,n,u,e),[e]),n.flags|=2048,Un(9,Ii(),_f.bind(null,n,u,l,t),null),l},useId:function(){var e=ut(),t=Re.identifierPrefix;if(xe){var l=tl,n=el;l=(n&~(1<<32-ft(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=Ji++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Ig++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:Yf,useActionState:Yf,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=bc.bind(null,re,!0,l),l.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return ut().memoizedState=a1.bind(null,re)}},sd={readContext:et,use:Fi,useCallback:Pf,useContext:et,useEffect:$f,useImperativeHandle:Ff,useInsertionEffect:Kf,useLayoutEffect:Wf,useMemo:If,useReducer:Pi,useRef:Zf,useState:function(){return Pi(al)},useDebugValue:xc,useDeferredValue:function(e,t){var l=Ue();return ed(l,je.memoizedState,e,t)},useTransition:function(){var e=Pi(al)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:Cf,useId:ad,useHostTransitionStatus:yc,useFormState:kf,useActionState:kf,useOptimistic:function(e,t){var l=Ue();return Nf(l,je,e,t)},useMemoCache:fc,useCacheRefresh:id},u1={readContext:et,use:Fi,useCallback:Pf,useContext:et,useEffect:$f,useImperativeHandle:Ff,useInsertionEffect:Kf,useLayoutEffect:Wf,useMemo:If,useReducer:pc,useRef:Zf,useState:function(){return pc(al)},useDebugValue:xc,useDeferredValue:function(e,t){var l=Ue();return je===null?mc(l,e,t):ed(l,je.memoizedState,e,t)},useTransition:function(){var e=pc(al)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:Cf,useId:ad,useHostTransitionStatus:yc,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var l=Ue();return je!==null?Nf(l,je,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fc,useCacheRefresh:id},Hn=null,La=0;function nu(e){var t=La;return La+=1,Hn===null&&(Hn=[]),Sf(Hn,e,t)}function qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function au(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fd(e){var t=e._init;return t(e._payload)}function dd(e){function t(w,j){if(e){var R=w.deletions;R===null?(w.deletions=[j],w.flags|=16):R.push(j)}}function l(w,j){if(!e)return null;for(;j!==null;)t(w,j),j=j.sibling;return null}function n(w){for(var j=new Map;w!==null;)w.key!==null?j.set(w.key,w):j.set(w.index,w),w=w.sibling;return j}function i(w,j){return w=It(w,j),w.index=0,w.sibling=null,w}function u(w,j,R){return w.index=R,e?(R=w.alternate,R!==null?(R=R.index,R<j?(w.flags|=67108866,j):R):(w.flags|=67108866,j)):(w.flags|=1048576,j)}function f(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function p(w,j,R,U){return j===null||j.tag!==6?(j=Yr(R,w.mode,U),j.return=w,j):(j=i(j,R),j.return=w,j)}function v(w,j,R,U){var K=R.type;return K===D?N(w,j,R.props.children,U,R.key):j!==null&&(j.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===he&&fd(K)===j.type)?(j=i(j,R.props),qa(j,R),j.return=w,j):(j=qi(R.type,R.key,R.props,null,w.mode,U),qa(j,R),j.return=w,j)}function z(w,j,R,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==R.containerInfo||j.stateNode.implementation!==R.implementation?(j=kr(R,w.mode,U),j.return=w,j):(j=i(j,R.children||[]),j.return=w,j)}function N(w,j,R,U,K){return j===null||j.tag!==7?(j=Jl(R,w.mode,U,K),j.return=w,j):(j=i(j,R),j.return=w,j)}function H(w,j,R){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Yr(""+j,w.mode,R),j.return=w,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return R=qi(j.type,j.key,j.props,null,w.mode,R),qa(R,j),R.return=w,R;case q:return j=kr(j,w.mode,R),j.return=w,j;case he:var U=j._init;return j=U(j._payload),H(w,j,R)}if(Ye(j)||qe(j))return j=Jl(j,w.mode,R,null),j.return=w,j;if(typeof j.then=="function")return H(w,nu(j),R);if(j.$$typeof===X)return H(w,Qi(w,j),R);au(w,j)}return null}function A(w,j,R,U){var K=j!==null?j.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return K!==null?null:p(w,j,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case _:return R.key===K?v(w,j,R,U):null;case q:return R.key===K?z(w,j,R,U):null;case he:return K=R._init,R=K(R._payload),A(w,j,R,U)}if(Ye(R)||qe(R))return K!==null?null:N(w,j,R,U,null);if(typeof R.then=="function")return A(w,j,nu(R),U);if(R.$$typeof===X)return A(w,j,Qi(w,R),U);au(w,R)}return null}function C(w,j,R,U,K){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return w=w.get(R)||null,p(j,w,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case _:return w=w.get(U.key===null?R:U.key)||null,v(j,w,U,K);case q:return w=w.get(U.key===null?R:U.key)||null,z(j,w,U,K);case he:var ce=U._init;return U=ce(U._payload),C(w,j,R,U,K)}if(Ye(U)||qe(U))return w=w.get(R)||null,N(j,w,U,K,null);if(typeof U.then=="function")return C(w,j,R,nu(U),K);if(U.$$typeof===X)return C(w,j,R,Qi(j,U),K);au(j,U)}return null}function ae(w,j,R,U){for(var K=null,ce=null,J=j,ne=j=0,Ve=null;J!==null&&ne<R.length;ne++){J.index>ne?(Ve=J,J=null):Ve=J.sibling;var ge=A(w,J,R[ne],U);if(ge===null){J===null&&(J=Ve);break}e&&J&&ge.alternate===null&&t(w,J),j=u(ge,j,ne),ce===null?K=ge:ce.sibling=ge,ce=ge,J=Ve}if(ne===R.length)return l(w,J),xe&&Pl(w,ne),K;if(J===null){for(;ne<R.length;ne++)J=H(w,R[ne],U),J!==null&&(j=u(J,j,ne),ce===null?K=J:ce.sibling=J,ce=J);return xe&&Pl(w,ne),K}for(J=n(J);ne<R.length;ne++)Ve=C(J,w,ne,R[ne],U),Ve!==null&&(e&&Ve.alternate!==null&&J.delete(Ve.key===null?ne:Ve.key),j=u(Ve,j,ne),ce===null?K=Ve:ce.sibling=Ve,ce=Ve);return e&&J.forEach(function(Ll){return t(w,Ll)}),xe&&Pl(w,ne),K}function te(w,j,R,U){if(R==null)throw Error(c(151));for(var K=null,ce=null,J=j,ne=j=0,Ve=null,ge=R.next();J!==null&&!ge.done;ne++,ge=R.next()){J.index>ne?(Ve=J,J=null):Ve=J.sibling;var Ll=A(w,J,ge.value,U);if(Ll===null){J===null&&(J=Ve);break}e&&J&&Ll.alternate===null&&t(w,J),j=u(Ll,j,ne),ce===null?K=Ll:ce.sibling=Ll,ce=Ll,J=Ve}if(ge.done)return l(w,J),xe&&Pl(w,ne),K;if(J===null){for(;!ge.done;ne++,ge=R.next())ge=H(w,ge.value,U),ge!==null&&(j=u(ge,j,ne),ce===null?K=ge:ce.sibling=ge,ce=ge);return xe&&Pl(w,ne),K}for(J=n(J);!ge.done;ne++,ge=R.next())ge=C(J,w,ne,ge.value,U),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?ne:ge.key),j=u(ge,j,ne),ce===null?K=ge:ce.sibling=ge,ce=ge);return e&&J.forEach(function(rx){return t(w,rx)}),xe&&Pl(w,ne),K}function we(w,j,R,U){if(typeof R=="object"&&R!==null&&R.type===D&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case _:e:{for(var K=R.key;j!==null;){if(j.key===K){if(K=R.type,K===D){if(j.tag===7){l(w,j.sibling),U=i(j,R.props.children),U.return=w,w=U;break e}}else if(j.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===he&&fd(K)===j.type){l(w,j.sibling),U=i(j,R.props),qa(U,R),U.return=w,w=U;break e}l(w,j);break}else t(w,j);j=j.sibling}R.type===D?(U=Jl(R.props.children,w.mode,U,R.key),U.return=w,w=U):(U=qi(R.type,R.key,R.props,null,w.mode,U),qa(U,R),U.return=w,w=U)}return f(w);case q:e:{for(K=R.key;j!==null;){if(j.key===K)if(j.tag===4&&j.stateNode.containerInfo===R.containerInfo&&j.stateNode.implementation===R.implementation){l(w,j.sibling),U=i(j,R.children||[]),U.return=w,w=U;break e}else{l(w,j);break}else t(w,j);j=j.sibling}U=kr(R,w.mode,U),U.return=w,w=U}return f(w);case he:return K=R._init,R=K(R._payload),we(w,j,R,U)}if(Ye(R))return ae(w,j,R,U);if(qe(R)){if(K=qe(R),typeof K!="function")throw Error(c(150));return R=K.call(R),te(w,j,R,U)}if(typeof R.then=="function")return we(w,j,nu(R),U);if(R.$$typeof===X)return we(w,j,Qi(w,R),U);au(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,j!==null&&j.tag===6?(l(w,j.sibling),U=i(j,R),U.return=w,w=U):(l(w,j),U=Yr(R,w.mode,U),U.return=w,w=U),f(w)):l(w,j)}return function(w,j,R,U){try{La=0;var K=we(w,j,R,U);return Hn=null,K}catch(J){if(J===Ma||J===Vi)throw J;var ce=pt(29,J,null,w.mode);return ce.lanes=U,ce.return=w,ce}finally{}}}var Gn=dd(!0),pd=dd(!1),zt=L(null),qt=null;function wl(e){var t=e.alternate;Z(Le,Le.current&1),Z(zt,e),qt===null&&(t===null||Dn.current!==null||t.memoizedState!==null)&&(qt=e)}function hd(e){if(e.tag===22){if(Z(Le,Le.current),Z(zt,e),qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qt=e)}}else Tl()}function Tl(){Z(Le,Le.current),Z(zt,zt.current)}function il(e){k(zt),qt===e&&(qt=null),k(Le)}var Le=L(0);function iu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||so(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Sc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:T({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var jc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=mt(),i=Sl(n);i.payload=t,l!=null&&(i.callback=l),t=jl(e,i,n),t!==null&&(vt(t,e,n),Oa(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=mt(),i=Sl(n);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=jl(e,i,n),t!==null&&(vt(t,e,n),Oa(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=mt(),n=Sl(l);n.tag=2,t!=null&&(n.callback=t),t=jl(e,n,l),t!==null&&(vt(t,e,l),Oa(t,e,l))}};function gd(e,t,l,n,i,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,f):t.prototype&&t.prototype.isPureReactComponent?!ja(l,n)||!ja(i,u):!0}function xd(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&jc.enqueueReplaceState(t,t.state,null)}function un(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=T({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}var uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function md(e){uu(e)}function vd(e){console.error(e)}function yd(e){uu(e)}function ru(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function bd(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ec(e,t,l){return l=Sl(l),l.tag=3,l.payload={element:null},l.callback=function(){ru(e,t)},l}function Sd(e){return e=Sl(e),e.tag=3,e}function jd(e,t,l,n){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;e.payload=function(){return i(u)},e.callback=function(){bd(t,l,n)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){bd(t,l,n),typeof i!="function"&&(_l===null?_l=new Set([this]):_l.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function r1(e,t,l,n,i){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&za(t,l,i,!0),l=zt.current,l!==null){switch(l.tag){case 13:return qt===null?$c():l.alternate===null&&Oe===0&&(Oe=3),l.flags&=-257,l.flags|=65536,l.lanes=i,n===Pr?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Wc(e,n,i)),!1;case 22:return l.flags|=65536,n===Pr?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Wc(e,n,i)),!1}throw Error(c(435,l.tag))}return Wc(e,n,i),$c(),!1}if(xe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Zr&&(e=Error(c(422),{cause:n}),Ra(Et(e,l)))):(n!==Zr&&(t=Error(c(423),{cause:n}),Ra(Et(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Et(n,l),i=Ec(e.stateNode,n,i),tc(e,i),Oe!==4&&(Oe=2)),!1;var u=Error(c(520),{cause:n});if(u=Et(u,l),$a===null?$a=[u]:$a.push(u),Oe!==4&&(Oe=2),t===null)return!0;n=Et(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=Ec(l.stateNode,n,e),tc(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(_l===null||!_l.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Sd(i),jd(i,e,l,n),tc(l,i),!1}l=l.return}while(l!==null);return!1}var Ed=Error(c(461)),Qe=!1;function We(e,t,l,n){t.child=e===null?pd(t,null,l,n):Gn(t,e.child,l,n)}function wd(e,t,l,n,i){l=l.render;var u=t.ref;if("ref"in n){var f={};for(var p in n)p!=="ref"&&(f[p]=n[p])}else f=n;return ln(t),n=uc(e,t,l,f,u,i),p=rc(),e!==null&&!Qe?(cc(e,t,i),ul(e,t,i)):(xe&&p&&Xr(t),t.flags|=1,We(e,t,n,i),t.child)}function Td(e,t,l,n,i){if(e===null){var u=l.type;return typeof u=="function"&&!qr(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,Rd(e,t,u,n,i)):(e=qi(l.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!_c(e,i)){var f=u.memoizedProps;if(l=l.compare,l=l!==null?l:ja,l(f,n)&&e.ref===t.ref)return ul(e,t,i)}return t.flags|=1,e=It(u,n),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,l,n,i){if(e!==null){var u=e.memoizedProps;if(ja(u,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=u,_c(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ul(e,t,i)}return wc(e,t,l,n,i)}function zd(e,t,l){var n=t.pendingProps,i=n.children,u=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=u!==null?u.baseLanes|l:l,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;t.childLanes=u&~n}else t.childLanes=0,t.child=null;return Ad(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,u!==null?u.cachePool:null),u!==null?Rf(t,u):nc(),hd(t);else return t.lanes=t.childLanes=536870912,Ad(e,t,u!==null?u.baseLanes|l:l,l)}else u!==null?(Zi(t,u.cachePool),Rf(t,u),Tl(),t.memoizedState=null):(e!==null&&Zi(t,null),nc(),Tl());return We(e,t,i,l),t.child}function Ad(e,t,l,n){var i=Fr();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Zi(t,null),nc(),hd(t),e!==null&&za(e,t,n,!0),null}function cu(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function wc(e,t,l,n,i){return ln(t),l=uc(e,t,l,n,void 0,i),n=rc(),e!==null&&!Qe?(cc(e,t,i),ul(e,t,i)):(xe&&n&&Xr(t),t.flags|=1,We(e,t,l,i),t.child)}function Cd(e,t,l,n,i,u){return ln(t),t.updateQueue=null,l=Af(t,n,l,i),zf(e),n=rc(),e!==null&&!Qe?(cc(e,t,u),ul(e,t,u)):(xe&&n&&Xr(t),t.flags|=1,We(e,t,l,u),t.child)}function Md(e,t,l,n,i){if(ln(t),t.stateNode===null){var u=An,f=l.contextType;typeof f=="object"&&f!==null&&(u=et(f)),u=new l(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Ir(t),f=l.contextType,u.context=typeof f=="object"&&f!==null?et(f):An,u.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Sc(t,l,f,n),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&jc.enqueueReplaceState(u,u.state,null),Ba(t,n,u,i),Da(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var p=t.memoizedProps,v=un(l,p);u.props=v;var z=u.context,N=l.contextType;f=An,typeof N=="object"&&N!==null&&(f=et(N));var H=l.getDerivedStateFromProps;N=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p||z!==f)&&xd(t,u,n,f),bl=!1;var A=t.memoizedState;u.state=A,Ba(t,n,u,i),Da(),z=t.memoizedState,p||A!==z||bl?(typeof H=="function"&&(Sc(t,l,H,n),z=t.memoizedState),(v=bl||gd(t,l,v,n,A,z,f))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=z),u.props=n,u.state=z,u.context=f,n=v):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,ec(e,t),f=t.memoizedProps,N=un(l,f),u.props=N,H=t.pendingProps,A=u.context,z=l.contextType,v=An,typeof z=="object"&&z!==null&&(v=et(z)),p=l.getDerivedStateFromProps,(z=typeof p=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==H||A!==v)&&xd(t,u,n,v),bl=!1,A=t.memoizedState,u.state=A,Ba(t,n,u,i),Da();var C=t.memoizedState;f!==H||A!==C||bl||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof p=="function"&&(Sc(t,l,p,n),C=t.memoizedState),(N=bl||gd(t,l,N,n,A,C,v)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,C,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,C,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=C),u.props=n,u.state=C,u.context=v,n=N):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,cu(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,l,i)):We(e,t,l,i),t.memoizedState=u.state,e=t.child):e=ul(e,t,i),e}function _d(e,t,l,n){return Ta(),t.flags|=256,We(e,t,l,n),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:vf()}}function zc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=At),e}function Od(e,t,l){var n=t.pendingProps,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(i?wl(t):Tl(),xe){var p=_e,v;if(v=p){e:{for(v=p,p=Lt;v.nodeType!==8;){if(!p){p=null;break e}if(v=Ut(v.nextSibling),v===null){p=null;break e}}p=v}p!==null?(t.memoizedState={dehydrated:p,treeContext:Fl!==null?{id:el,overflow:tl}:null,retryLane:536870912,hydrationErrors:null},v=pt(18,null,null,0),v.stateNode=p,v.return=t,t.child=v,lt=t,_e=null,v=!0):v=!1}v||en(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return so(p)?t.lanes=32:t.lanes=536870912,null;il(t)}return p=n.children,n=n.fallback,i?(Tl(),i=t.mode,p=ou({mode:"hidden",children:p},i),n=Jl(n,i,l,null),p.return=t,n.return=t,p.sibling=n,t.child=p,i=t.child,i.memoizedState=Rc(l),i.childLanes=zc(e,f,l),t.memoizedState=Tc,n):(wl(t),Ac(t,p))}if(v=e.memoizedState,v!==null&&(p=v.dehydrated,p!==null)){if(u)t.flags&256?(wl(t),t.flags&=-257,t=Cc(e,t,l)):t.memoizedState!==null?(Tl(),t.child=e.child,t.flags|=128,t=null):(Tl(),i=n.fallback,p=t.mode,n=ou({mode:"visible",children:n.children},p),i=Jl(i,p,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Gn(t,e.child,null,l),n=t.child,n.memoizedState=Rc(l),n.childLanes=zc(e,f,l),t.memoizedState=Tc,t=i);else if(wl(t),so(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var z=f.dgst;f=z,n=Error(c(419)),n.stack="",n.digest=f,Ra({value:n,source:null,stack:null}),t=Cc(e,t,l)}else if(Qe||za(e,t,l,!1),f=(l&e.childLanes)!==0,Qe||f){if(f=Re,f!==null&&(n=l&-l,n=(n&42)!==0?1:fr(n),n=(n&(f.suspendedLanes|l))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,zn(e,n),vt(f,e,n),Ed;p.data==="$?"||$c(),t=Cc(e,t,l)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=Ut(p.nextSibling),lt=t,xe=!0,Il=null,Lt=!1,e!==null&&(Tt[Rt++]=el,Tt[Rt++]=tl,Tt[Rt++]=Fl,el=e.id,tl=e.overflow,Fl=t),t=Ac(t,n.children),t.flags|=4096);return t}return i?(Tl(),i=n.fallback,p=t.mode,v=e.child,z=v.sibling,n=It(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,z!==null?i=It(z,i):(i=Jl(i,p,l,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,p=e.child.memoizedState,p===null?p=Rc(l):(v=p.cachePool,v!==null?(z=Ge._currentValue,v=v.parent!==z?{parent:z,pool:z}:v):v=vf(),p={baseLanes:p.baseLanes|l,cachePool:v}),i.memoizedState=p,i.childLanes=zc(e,f,l),t.memoizedState=Tc,n):(wl(t),l=e.child,e=l.sibling,l=It(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function Ac(e,t){return t=ou({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ou(e,t){return e=pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cc(e,t,l){return Gn(t,e.child,null,l),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dd(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),$r(e.return,t,l)}function Mc(e,t,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=l,u.tailMode=i)}function Bd(e,t,l){var n=t.pendingProps,i=n.revealOrder,u=n.tail;if(We(e,t,n.children,l),n=Le.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,l,t);else if(e.tag===19)Dd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Z(Le,n),i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&iu(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Mc(t,!1,i,l,u);break;case"backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&iu(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Mc(t,!0,l,null,u);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(za(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=It(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=It(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function _c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function c1(e,t,l){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),yl(t,Ge,e.memoizedState.cache),Ta();break;case 27:case 5:Ql(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(wl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Od(e,t,l):(wl(t),e=ul(e,t,l),e!==null?e.sibling:null);wl(t);break;case 19:var i=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(za(e,t,l,!1),n=(l&t.childLanes)!==0),i){if(n)return Bd(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(Le,Le.current),n)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,l);case 24:yl(t,Ge,e.memoizedState.cache)}return ul(e,t,l)}function Nd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!_c(e,l)&&(t.flags&128)===0)return Qe=!1,c1(e,t,l);Qe=(e.flags&131072)!==0}else Qe=!1,xe&&(t.flags&1048576)!==0&&ff(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")qr(n)?(e=un(n,e),t.tag=1,t=Md(null,t,n,e,l)):(t.tag=0,t=wc(null,t,n,e,l));else{if(n!=null){if(i=n.$$typeof,i===P){t.tag=11,t=wd(null,t,n,e,l);break e}else if(i===W){t.tag=14,t=Td(null,t,n,e,l);break e}}throw t=Wt(n)||n,Error(c(306,t,""))}}return t;case 0:return wc(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,i=un(n,t.pendingProps),Md(e,t,n,i,l);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var u=t.memoizedState;i=u.element,ec(e,t),Ba(t,n,null,l);var f=t.memoizedState;if(n=f.cache,yl(t,Ge,n),n!==u.cache&&Kr(t,[Ge],l,!0),Da(),n=f.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=_d(e,t,n,l);break e}else if(n!==i){i=Et(Error(c(424)),t),Ra(i),t=_d(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Ut(e.firstChild),lt=t,xe=!0,Il=null,Lt=!0,l=pd(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ta(),n===i){t=ul(e,t,l);break e}We(e,t,n,l)}t=t.child}return t;case 26:return cu(e,t),e===null?(l=Lp(t.type,null,t.pendingProps,null))?t.memoizedState=l:xe||(l=t.type,e=t.pendingProps,n=Eu(le.current).createElement(l),n[Ie]=t,n[at]=e,Fe(n,l,e),Xe(n),t.stateNode=n):t.memoizedState=Lp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ql(t),e===null&&xe&&(n=t.stateNode=Up(t.type,t.pendingProps,le.current),lt=t,Lt=!0,i=_e,Bl(t.type)?(fo=i,_e=Ut(n.firstChild)):_e=i),We(e,t,t.pendingProps.children,l),cu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((i=n=_e)&&(n=U1(n,t.type,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,_e=Ut(n.firstChild),Lt=!1,i=!0):i=!1),i||en(t)),Ql(t),i=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,n=u.children,ro(i,u)?n=null:f!==null&&ro(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=uc(e,t,e1,null,null,l),li._currentValue=i),cu(e,t),We(e,t,n,l),t.child;case 6:return e===null&&xe&&((e=l=_e)&&(l=H1(l,t.pendingProps,Lt),l!==null?(t.stateNode=l,lt=t,_e=null,e=!0):e=!1),e||en(t)),null;case 13:return Od(e,t,l);case 4:return me(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Gn(t,null,n,l):We(e,t,n,l),t.child;case 11:return wd(e,t,t.type,t.pendingProps,l);case 7:return We(e,t,t.pendingProps,l),t.child;case 8:return We(e,t,t.pendingProps.children,l),t.child;case 12:return We(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,yl(t,t.type,n.value),We(e,t,n.children,l),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,ln(t),i=et(i),n=n(i),t.flags|=1,We(e,t,n,l),t.child;case 14:return Td(e,t,t.type,t.pendingProps,l);case 15:return Rd(e,t,t.type,t.pendingProps,l);case 19:return Bd(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=ou(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=It(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return zd(e,t,l);case 24:return ln(t),n=et(Ge),e===null?(i=Fr(),i===null&&(i=Re,u=Wr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),t.memoizedState={parent:n,cache:i},Ir(t),yl(t,Ge,i)):((e.lanes&l)!==0&&(ec(e,t),Ba(t,null,null,l),Da()),i=e.memoizedState,u=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),yl(t,Ge,n)):(n=u.cache,yl(t,Ge,n),n!==i.cache&&Kr(t,[Ge],l,!0))),We(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function rl(e){e.flags|=4}function Ud(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qp(t)){if(t=zt.current,t!==null&&((pe&4194048)===pe?qt!==null:(pe&62914560)!==pe&&(pe&536870912)===0||t!==qt))throw _a=Pr,yf;e.flags|=8192}}function su(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ps():536870912,e.lanes|=t,kn|=t)}function Ya(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function o1(e,t,l){var n=t.pendingProps;switch(Qr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),nl(Ge),Pe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(wa(t)?rl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hf())),Ce(t),null;case 26:return l=t.memoizedState,e===null?(rl(t),l!==null?(Ce(t),Ud(t,l)):(Ce(t),t.flags&=-16777217)):l?l!==e.memoizedState?(rl(t),Ce(t),Ud(t,l)):(Ce(t),t.flags&=-16777217):(e.memoizedProps!==n&&rl(t),Ce(t),t.flags&=-16777217),null;case 27:Jt(t),l=le.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&rl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}e=F.current,wa(t)?df(t):(e=Up(i,n,l),t.stateNode=e,rl(t))}return Ce(t),null;case 5:if(Jt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&rl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}if(e=F.current,wa(t))df(t);else{switch(i=Eu(le.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(l,{is:n.is}):i.createElement(l)}}e[Ie]=t,e[at]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rl(t)}}return Ce(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&rl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,wa(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,i=lt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Cp(e.nodeValue,l)),e||en(t)}else e=Eu(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return Ce(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=wa(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Ie]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else i=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(il(t),t):(il(t),null)}if(il(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),su(t,t.updateQueue),Ce(t),null;case 4:return Pe(),e===null&&lo(t.stateNode.containerInfo),Ce(t),null;case 10:return nl(t.type),Ce(t),null;case 19:if(k(Le),i=t.memoizedState,i===null)return Ce(t),null;if(n=(t.flags&128)!==0,u=i.rendering,u===null)if(n)Ya(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=iu(e),u!==null){for(t.flags|=128,Ya(i,!1),e=u.updateQueue,t.updateQueue=e,su(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)sf(l,e),l=l.sibling;return Z(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&Gt()>pu&&(t.flags|=128,n=!0,Ya(i,!1),t.lanes=4194304)}else{if(!n)if(e=iu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,su(t,e),Ya(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!xe)return Ce(t),null}else 2*Gt()-i.renderingStartTime>pu&&l!==536870912&&(t.flags|=128,n=!0,Ya(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Gt(),t.sibling=null,e=Le.current,Z(Le,n?e&1|2:e&1),t):(Ce(t),null);case 22:case 23:return il(t),ac(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),l=t.updateQueue,l!==null&&su(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&k(nn),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),nl(Ge),Ce(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function s1(e,t){switch(Qr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nl(Ge),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 13:if(il(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(Le),null;case 4:return Pe(),null;case 10:return nl(t.type),null;case 22:case 23:return il(t),ac(),e!==null&&k(nn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return nl(Ge),null;case 25:return null;default:return null}}function Hd(e,t){switch(Qr(t),t.tag){case 3:nl(Ge),Pe();break;case 26:case 27:case 5:Jt(t);break;case 4:Pe();break;case 13:il(t);break;case 19:k(Le);break;case 10:nl(t.type);break;case 22:case 23:il(t),ac(),e!==null&&k(nn);break;case 24:nl(Ge)}}function ka(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){n=void 0;var u=l.create,f=l.inst;n=u(),f.destroy=n}l=l.next}while(l!==i)}}catch(p){Te(t,t.return,p)}}function Rl(e,t,l){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&e)===e){var f=n.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,i=t;var v=l,z=p;try{z()}catch(N){Te(i,v,N)}}}n=n.next}while(n!==u)}}catch(N){Te(t,t.return,N)}}function Gd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Tf(t,l)}catch(n){Te(e,e.return,n)}}}function Ld(e,t,l){l.props=un(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){Te(e,t,n)}}function Xa(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(i){Te(e,t,i)}}function Yt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Te(e,t,i)}else l.current=null}function qd(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(i){Te(e,e.return,i)}}function Oc(e,t,l){try{var n=e.stateNode;_1(n,e.type,l,t),n[at]=t}catch(i){Te(e,e.return,i)}}function Yd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bl(e.type)||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=ju));else if(n!==4&&(n===27&&Bl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Bc(e,t,l),e=e.sibling;e!==null;)Bc(e,t,l),e=e.sibling}function fu(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Bl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(fu(e,t,l),e=e.sibling;e!==null;)fu(e,t,l),e=e.sibling}function kd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,n,l),t[Ie]=e,t[at]=l}catch(u){Te(e,e.return,u)}}var cl=!1,Be=!1,Nc=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function f1(e,t){if(e=e.containerInfo,io=Cu,e=Is(e),Dr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var f=0,p=-1,v=-1,z=0,N=0,H=e,A=null;t:for(;;){for(var C;H!==l||i!==0&&H.nodeType!==3||(p=f+i),H!==u||n!==0&&H.nodeType!==3||(v=f+n),H.nodeType===3&&(f+=H.nodeValue.length),(C=H.firstChild)!==null;)A=H,H=C;for(;;){if(H===e)break t;if(A===l&&++z===i&&(p=f),A===u&&++N===n&&(v=f),(C=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=C}l=p===-1||v===-1?null:{start:p,end:v}}else l=null}l=l||{start:0,end:0}}else l=null;for(uo={focusedElem:e,selectionRange:l},Cu=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,i=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var ae=un(l.type,i,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(ae,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(te){Te(l,l.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)oo(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Qd(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:zl(e,l),n&4&&ka(5,l);break;case 1:if(zl(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){Te(l,l.return,f)}else{var i=un(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Te(l,l.return,f)}}n&64&&Gd(l),n&512&&Xa(l,l.return);break;case 3:if(zl(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Tf(e,t)}catch(f){Te(l,l.return,f)}}break;case 27:t===null&&n&4&&kd(l);case 26:case 5:zl(e,l),t===null&&n&4&&qd(l),n&512&&Xa(l,l.return);break;case 12:zl(e,l);break;case 13:zl(e,l),n&4&&$d(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=b1.bind(null,l),G1(e,l))));break;case 22:if(n=l.memoizedState!==null||cl,!n){t=t!==null&&t.memoizedState!==null||Be,i=cl;var u=Be;cl=n,(Be=t)&&!u?Al(e,l,(l.subtreeFlags&8772)!==0):zl(e,l),cl=i,Be=u}break;case 30:break;default:zl(e,l)}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,rt=!1;function ol(e,t,l){for(l=l.child;l!==null;)Vd(e,t,l),l=l.sibling}function Vd(e,t,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(sa,l)}catch{}switch(l.tag){case 26:Be||Yt(l,t),ol(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Be||Yt(l,t);var n=Ae,i=rt;Bl(l.type)&&(Ae=l.stateNode,rt=!1),ol(e,t,l),Pa(l.stateNode),Ae=n,rt=i;break;case 5:Be||Yt(l,t);case 6:if(n=Ae,i=rt,Ae=null,ol(e,t,l),Ae=n,rt=i,Ae!==null)if(rt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(l.stateNode)}catch(u){Te(l,t,u)}else try{Ae.removeChild(l.stateNode)}catch(u){Te(l,t,u)}break;case 18:Ae!==null&&(rt?(e=Ae,Bp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),ui(e)):Bp(Ae,l.stateNode));break;case 4:n=Ae,i=rt,Ae=l.stateNode.containerInfo,rt=!0,ol(e,t,l),Ae=n,rt=i;break;case 0:case 11:case 14:case 15:Be||Rl(2,l,t),Be||Rl(4,l,t),ol(e,t,l);break;case 1:Be||(Yt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Ld(l,t,n)),ol(e,t,l);break;case 21:ol(e,t,l);break;case 22:Be=(n=Be)||l.memoizedState!==null,ol(e,t,l),Be=n;break;default:ol(e,t,l)}}function $d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ui(e)}catch(l){Te(t,t.return,l)}}function d1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xd),t;default:throw Error(c(435,e.tag))}}function Uc(e,t){var l=d1(e);t.forEach(function(n){var i=S1.bind(null,e,n);l.has(n)||(l.add(n),n.then(i,i))})}function ht(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],u=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Bl(p.type)){Ae=p.stateNode,rt=!1;break e}break;case 5:Ae=p.stateNode,rt=!1;break e;case 3:case 4:Ae=p.stateNode.containerInfo,rt=!0;break e}p=p.return}if(Ae===null)throw Error(c(160));Vd(u,f,i),Ae=null,rt=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}var Nt=null;function Kd(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),gt(e),n&4&&(Rl(3,e,e.return),ka(3,e),Rl(5,e,e.return));break;case 1:ht(t,e),gt(e),n&512&&(Be||l===null||Yt(l,l.return)),n&64&&cl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var i=Nt;if(ht(t,e),gt(e),n&512&&(Be||l===null||Yt(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[pa]||u[Ie]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),Fe(u,n,l),u[Ie]=e,Xe(u),n=u;break e;case"link":var f=kp("link","href",i).get(n+(l.href||""));if(f){for(var p=0;p<f.length;p++)if(u=f[p],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(p,1);break t}}u=i.createElement(n),Fe(u,n,l),i.head.appendChild(u);break;case"meta":if(f=kp("meta","content",i).get(n+(l.content||""))){for(p=0;p<f.length;p++)if(u=f[p],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(p,1);break t}}u=i.createElement(n),Fe(u,n,l),i.head.appendChild(u);break;default:throw Error(c(468,n))}u[Ie]=e,Xe(u),n=u}e.stateNode=n}else Xp(i,e.type,e.stateNode);else e.stateNode=Yp(i,n,e.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Xp(i,e.type,e.stateNode):Yp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ht(t,e),gt(e),n&512&&(Be||l===null||Yt(l,l.return)),l!==null&&n&4&&Oc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ht(t,e),gt(e),n&512&&(Be||l===null||Yt(l,l.return)),e.flags&32){i=e.stateNode;try{bn(i,"")}catch(C){Te(e,e.return,C)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Oc(e,i,l!==null?l.memoizedProps:i)),n&1024&&(Nc=!0);break;case 6:if(ht(t,e),gt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(C){Te(e,e.return,C)}}break;case 3:if(Ru=null,i=Nt,Nt=wu(t.containerInfo),ht(t,e),Nt=i,gt(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(C){Te(e,e.return,C)}Nc&&(Nc=!1,Wd(e));break;case 4:n=Nt,Nt=wu(e.stateNode.containerInfo),ht(t,e),gt(e),Nt=n;break;case 12:ht(t,e),gt(e);break;case 13:ht(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(kc=Gt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 22:i=e.memoizedState!==null;var v=l!==null&&l.memoizedState!==null,z=cl,N=Be;if(cl=z||i,Be=N||v,ht(t,e),Be=N,cl=z,gt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||v||cl||Be||rn(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){v=l=t;try{if(u=v.stateNode,i)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=v.stateNode;var H=v.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(C){Te(v,v.return,C)}}}else if(t.tag===6){if(l===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(C){Te(v,v.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Uc(e,l))));break;case 19:ht(t,e),gt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uc(e,n)));break;case 30:break;case 21:break;default:ht(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(Yd(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var i=l.stateNode,u=Dc(e);fu(e,u,i);break;case 5:var f=l.stateNode;l.flags&32&&(bn(f,""),l.flags&=-33);var p=Dc(e);fu(e,p,f);break;case 3:case 4:var v=l.stateNode.containerInfo,z=Dc(e);Bc(e,z,v);break;default:throw Error(c(161))}}catch(N){Te(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qd(e,t.alternate,t),t=t.sibling}function rn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rl(4,t,t.return),rn(t);break;case 1:Yt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ld(t,t.return,l),rn(t);break;case 27:Pa(t.stateNode);case 26:case 5:Yt(t,t.return),rn(t);break;case 22:t.memoizedState===null&&rn(t);break;case 30:rn(t);break;default:rn(t)}e=e.sibling}}function Al(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:Al(i,u,l),ka(4,u);break;case 1:if(Al(i,u,l),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Te(n,n.return,z)}if(n=u,i=n.updateQueue,i!==null){var p=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)wf(v[i],p)}catch(z){Te(n,n.return,z)}}l&&f&64&&Gd(u),Xa(u,u.return);break;case 27:kd(u);case 26:case 5:Al(i,u,l),l&&n===null&&f&4&&qd(u),Xa(u,u.return);break;case 12:Al(i,u,l);break;case 13:Al(i,u,l),l&&f&4&&$d(i,u);break;case 22:u.memoizedState===null&&Al(i,u,l),Xa(u,u.return);break;case 30:break;default:Al(i,u,l)}t=t.sibling}}function Hc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Aa(l))}function Gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e))}function kt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(e,t,l,n),t=t.sibling}function Jd(e,t,l,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,l,n),i&2048&&ka(9,t);break;case 1:kt(e,t,l,n);break;case 3:kt(e,t,l,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e)));break;case 12:if(i&2048){kt(e,t,l,n),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,p=u.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Te(t,t.return,v)}}else kt(e,t,l,n);break;case 13:kt(e,t,l,n);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?kt(e,t,l,n):Qa(e,t):u._visibility&2?kt(e,t,l,n):(u._visibility|=2,Ln(e,t,l,n,(t.subtreeFlags&10256)!==0)),i&2048&&Hc(f,t);break;case 24:kt(e,t,l,n),i&2048&&Gc(t.alternate,t);break;default:kt(e,t,l,n)}}function Ln(e,t,l,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,f=t,p=l,v=n,z=f.flags;switch(f.tag){case 0:case 11:case 15:Ln(u,f,p,v,i),ka(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?Ln(u,f,p,v,i):Qa(u,f):(N._visibility|=2,Ln(u,f,p,v,i)),i&&z&2048&&Hc(f.alternate,f);break;case 24:Ln(u,f,p,v,i),i&&z&2048&&Gc(f.alternate,f);break;default:Ln(u,f,p,v,i)}t=t.sibling}}function Qa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,i=n.flags;switch(n.tag){case 22:Qa(l,n),i&2048&&Hc(n.alternate,n);break;case 24:Qa(l,n),i&2048&&Gc(n.alternate,n);break;default:Qa(l,n)}t=t.sibling}}var Za=8192;function qn(e){if(e.subtreeFlags&Za)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 26:qn(e),e.flags&Za&&e.memoizedState!==null&&F1(Nt,e.memoizedState,e.memoizedProps);break;case 5:qn(e);break;case 3:case 4:var t=Nt;Nt=wu(e.stateNode.containerInfo),qn(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Za,Za=16777216,qn(e),Za=t):qn(e));break;default:qn(e)}}function Pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Va(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ze=n,ep(n,e)}Pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Id(e),e=e.sibling}function Id(e){switch(e.tag){case 0:case 11:case 15:Va(e),e.flags&2048&&Rl(9,e,e.return);break;case 3:Va(e);break;case 12:Va(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,du(e)):Va(e);break;default:Va(e)}}function du(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ze=n,ep(n,e)}Pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rl(8,t,t.return),du(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,du(t));break;default:du(t)}e=e.sibling}}function ep(e,t){for(;Ze!==null;){var l=Ze;switch(l.tag){case 0:case 11:case 15:Rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Aa(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ze=n;else e:for(l=e;Ze!==null;){n=Ze;var i=n.sibling,u=n.return;if(Zd(n),n===l){Ze=null;break e}if(i!==null){i.return=u,Ze=i;break e}Ze=u}}}var p1={getCacheForType:function(e){var t=et(Ge),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},h1=typeof WeakMap=="function"?WeakMap:Map,be=0,Re=null,fe=null,pe=0,Se=0,xt=null,Cl=!1,Yn=!1,Lc=!1,sl=0,Oe=0,Ml=0,cn=0,qc=0,At=0,kn=0,$a=null,ct=null,Yc=!1,kc=0,pu=1/0,hu=null,_l=null,Je=0,Ol=null,Xn=null,Qn=0,Xc=0,Qc=null,tp=null,Ka=0,Zc=null;function mt(){if((be&2)!==0&&pe!==0)return pe&-pe;if(B.T!==null){var e=_n;return e!==0?e:Pc()}return xs()}function lp(){At===0&&(At=(pe&536870912)===0||xe?ds():536870912);var e=zt.current;return e!==null&&(e.flags|=32),At}function vt(e,t,l){(e===Re&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Zn(e,0),Dl(e,pe,At,!1)),da(e,l),((be&2)===0||e!==Re)&&(e===Re&&((be&2)===0&&(cn|=l),Oe===4&&Dl(e,pe,At,!1)),Xt(e))}function np(e,t,l){if((be&6)!==0)throw Error(c(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||fa(e,t),i=n?m1(e,t):Kc(e,t,!0),u=n;do{if(i===0){Yn&&!n&&Dl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!g1(l)){i=Kc(e,t,!1),u=!1;continue}if(i===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;i=$a;var v=p.current.memoizedState.isDehydrated;if(v&&(Zn(p,f).flags|=256),f=Kc(p,f,!1),f!==2){if(Lc&&!v){p.errorRecoveryDisabledLanes|=u,cn|=u,i=4;break e}u=ct,ct=i,u!==null&&(ct===null?ct=u:ct.push.apply(ct,u))}i=f}if(u=!1,i!==2)continue}}if(i===1){Zn(e,0),Dl(e,t,0,!0);break}e:{switch(n=e,u=i,u){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Dl(n,t,At,!Cl);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=kc+300-Gt(),10<i)){if(Dl(n,t,At,!Cl),Ti(n,0,!0)!==0)break e;n.timeoutHandle=Op(ap.bind(null,n,l,ct,hu,Yc,t,At,cn,kn,Cl,u,2,-0,0),i);break e}ap(n,l,ct,hu,Yc,t,At,cn,kn,Cl,u,0,-0,0)}}break}while(!0);Xt(e)}function ap(e,t,l,n,i,u,f,p,v,z,N,H,A,C){if(e.timeoutHandle=-1,H=t.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(ti={stylesheets:null,count:0,unsuspend:J1},Fd(t),H=P1(),H!==null)){e.cancelPendingCommit=H(fp.bind(null,e,t,u,l,n,i,f,p,v,N,1,A,C)),Dl(e,u,f,!z);return}fp(e,t,u,l,n,i,f,p,v)}function g1(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var i=l[n],u=i.getSnapshot;i=i.value;try{if(!dt(u(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dl(e,t,l,n){t&=~qc,t&=~cn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var u=31-ft(i),f=1<<u;n[u]=-1,i&=~f}l!==0&&hs(e,l,t)}function gu(){return(be&6)===0?(Wa(0),!1):!0}function Vc(){if(fe!==null){if(Se===0)var e=fe.return;else e=fe,ll=tn=null,oc(e),Hn=null,La=0,e=fe;for(;e!==null;)Hd(e.alternate,e),e=e.return;fe=null}}function Zn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,D1(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Vc(),Re=e,fe=l=It(e.current,null),pe=t,Se=0,xt=null,Cl=!1,Yn=fa(e,t),Lc=!1,kn=At=qc=cn=Ml=Oe=0,ct=$a=null,Yc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ft(n),u=1<<i;t|=e[i],n&=~u}return sl=t,Hi(),l}function ip(e,t){re=null,B.H=lu,t===Ma||t===Vi?(t=jf(),Se=3):t===yf?(t=jf(),Se=4):Se=t===Ed?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,fe===null&&(Oe=1,ru(e,Et(t,e.current)))}function up(){var e=B.H;return B.H=lu,e===null?lu:e}function rp(){var e=B.A;return B.A=p1,e}function $c(){Oe=4,Cl||(pe&4194048)!==pe&&zt.current!==null||(Yn=!0),(Ml&134217727)===0&&(cn&134217727)===0||Re===null||Dl(Re,pe,At,!1)}function Kc(e,t,l){var n=be;be|=2;var i=up(),u=rp();(Re!==e||pe!==t)&&(hu=null,Zn(e,t)),t=!1;var f=Oe;e:do try{if(Se!==0&&fe!==null){var p=fe,v=xt;switch(Se){case 8:Vc(),f=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var z=Se;if(Se=0,xt=null,Vn(e,p,v,z),l&&Yn){f=0;break e}break;default:z=Se,Se=0,xt=null,Vn(e,p,v,z)}}x1(),f=Oe;break}catch(N){ip(e,N)}while(!0);return t&&e.shellSuspendCounter++,ll=tn=null,be=n,B.H=i,B.A=u,fe===null&&(Re=null,pe=0,Hi()),f}function x1(){for(;fe!==null;)cp(fe)}function m1(e,t){var l=be;be|=2;var n=up(),i=rp();Re!==e||pe!==t?(hu=null,pu=Gt()+500,Zn(e,t)):Yn=fa(e,t);e:do try{if(Se!==0&&fe!==null){t=fe;var u=xt;t:switch(Se){case 1:Se=0,xt=null,Vn(e,t,u,1);break;case 2:case 9:if(bf(u)){Se=0,xt=null,op(t);break}t=function(){Se!==2&&Se!==9||Re!==e||(Se=7),Xt(e)},u.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:bf(u)?(Se=0,xt=null,op(t)):(Se=0,xt=null,Vn(e,t,u,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var p=fe;if(!f||Qp(f)){Se=0,xt=null;var v=p.sibling;if(v!==null)fe=v;else{var z=p.return;z!==null?(fe=z,xu(z)):fe=null}break t}}Se=0,xt=null,Vn(e,t,u,5);break;case 6:Se=0,xt=null,Vn(e,t,u,6);break;case 8:Vc(),Oe=6;break e;default:throw Error(c(462))}}v1();break}catch(N){ip(e,N)}while(!0);return ll=tn=null,B.H=n,B.A=i,be=l,fe!==null?0:(Re=null,pe=0,Hi(),Oe)}function v1(){for(;fe!==null&&!q0();)cp(fe)}function cp(e){var t=Nd(e.alternate,e,sl);e.memoizedProps=e.pendingProps,t===null?xu(e):fe=t}function op(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Cd(l,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Cd(l,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:oc(t);default:Hd(l,t),t=fe=sf(t,sl),t=Nd(l,t,sl)}e.memoizedProps=e.pendingProps,t===null?xu(e):fe=t}function Vn(e,t,l,n){ll=tn=null,oc(t),Hn=null,La=0;var i=t.return;try{if(r1(e,i,t,l,pe)){Oe=1,ru(e,Et(l,e.current)),fe=null;return}}catch(u){if(i!==null)throw fe=i,u;Oe=1,ru(e,Et(l,e.current)),fe=null;return}t.flags&32768?(xe||n===1?e=!0:Yn||(pe&536870912)!==0?e=!1:(Cl=e=!0,(n===2||n===9||n===3||n===6)&&(n=zt.current,n!==null&&n.tag===13&&(n.flags|=16384))),sp(t,e)):xu(t)}function xu(e){var t=e;do{if((t.flags&32768)!==0){sp(t,Cl);return}e=t.return;var l=o1(t.alternate,t,sl);if(l!==null){fe=l;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Oe===0&&(Oe=5)}function sp(e,t){do{var l=s1(e.alternate,e);if(l!==null){l.flags&=32767,fe=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=l}while(e!==null);Oe=6,fe=null}function fp(e,t,l,n,i,u,f,p,v){e.cancelPendingCommit=null;do mu();while(Je!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(u=t.lanes|t.childLanes,u|=Gr,J0(e,l,u,f,p,v),e===Re&&(fe=Re=null,pe=0),Xn=t,Ol=e,Qn=l,Xc=u,Qc=i,tp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,j1(ji,function(){return xp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null,i=Q.p,Q.p=2,f=be,be|=4;try{f1(e,t,l)}finally{be=f,Q.p=i,B.T=n}}Je=1,dp(),pp(),hp()}}function dp(){if(Je===1){Je=0;var e=Ol,t=Xn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null;var n=Q.p;Q.p=2;var i=be;be|=4;try{Kd(t,e);var u=uo,f=Is(e.containerInfo),p=u.focusedElem,v=u.selectionRange;if(f!==p&&p&&p.ownerDocument&&Ps(p.ownerDocument.documentElement,p)){if(v!==null&&Dr(p)){var z=v.start,N=v.end;if(N===void 0&&(N=z),"selectionStart"in p)p.selectionStart=z,p.selectionEnd=Math.min(N,p.value.length);else{var H=p.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var C=A.getSelection(),ae=p.textContent.length,te=Math.min(v.start,ae),we=v.end===void 0?te:Math.min(v.end,ae);!C.extend&&te>we&&(f=we,we=te,te=f);var w=Fs(p,te),j=Fs(p,we);if(w&&j&&(C.rangeCount!==1||C.anchorNode!==w.node||C.anchorOffset!==w.offset||C.focusNode!==j.node||C.focusOffset!==j.offset)){var R=H.createRange();R.setStart(w.node,w.offset),C.removeAllRanges(),te>we?(C.addRange(R),C.extend(j.node,j.offset)):(R.setEnd(j.node,j.offset),C.addRange(R))}}}}for(H=[],C=p;C=C.parentNode;)C.nodeType===1&&H.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var U=H[p];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Cu=!!io,uo=io=null}finally{be=i,Q.p=n,B.T=l}}e.current=t,Je=2}}function pp(){if(Je===2){Je=0;var e=Ol,t=Xn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=B.T,B.T=null;var n=Q.p;Q.p=2;var i=be;be|=4;try{Qd(e,t.alternate,t)}finally{be=i,Q.p=n,B.T=l}}Je=3}}function hp(){if(Je===4||Je===3){Je=0,Y0();var e=Ol,t=Xn,l=Qn,n=tp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Xn=Ol=null,gp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(_l=null),dr(l),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(sa,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=B.T,i=Q.p,Q.p=2,B.T=null;try{for(var u=e.onRecoverableError,f=0;f<n.length;f++){var p=n[f];u(p.value,{componentStack:p.stack})}}finally{B.T=t,Q.p=i}}(Qn&3)!==0&&mu(),Xt(e),i=e.pendingLanes,(l&4194090)!==0&&(i&42)!==0?e===Zc?Ka++:(Ka=0,Zc=e):Ka=0,Wa(0)}}function gp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Aa(t)))}function mu(e){return dp(),pp(),hp(),xp()}function xp(){if(Je!==5)return!1;var e=Ol,t=Xc;Xc=0;var l=dr(Qn),n=B.T,i=Q.p;try{Q.p=32>l?32:l,B.T=null,l=Qc,Qc=null;var u=Ol,f=Qn;if(Je=0,Xn=Ol=null,Qn=0,(be&6)!==0)throw Error(c(331));var p=be;if(be|=4,Id(u.current),Jd(u,u.current,f,l),be=p,Wa(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(sa,u)}catch{}return!0}finally{Q.p=i,B.T=n,gp(e,t)}}function mp(e,t,l){t=Et(l,t),t=Ec(e.stateNode,t,2),e=jl(e,t,2),e!==null&&(da(e,2),Xt(e))}function Te(e,t,l){if(e.tag===3)mp(e,e,l);else for(;t!==null;){if(t.tag===3){mp(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_l===null||!_l.has(n))){e=Et(l,e),l=Sd(2),n=jl(t,l,2),n!==null&&(jd(l,n,t,e),da(n,2),Xt(n));break}}t=t.return}}function Wc(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new h1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(l)||(Lc=!0,i.add(l),e=y1.bind(null,e,t,l),t.then(e,e))}function y1(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Re===e&&(pe&l)===l&&(Oe===4||Oe===3&&(pe&62914560)===pe&&300>Gt()-kc?(be&2)===0&&Zn(e,0):qc|=l,kn===pe&&(kn=0)),Xt(e)}function vp(e,t){t===0&&(t=ps()),e=zn(e,t),e!==null&&(da(e,t),Xt(e))}function b1(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),vp(e,l)}function S1(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),vp(e,l)}function j1(e,t){return cr(e,t)}var vu=null,$n=null,Jc=!1,yu=!1,Fc=!1,on=0;function Xt(e){e!==$n&&e.next===null&&($n===null?vu=$n=e:$n=$n.next=e),yu=!0,Jc||(Jc=!0,w1())}function Wa(e,t){if(!Fc&&yu){Fc=!0;do for(var l=!1,n=vu;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var f=n.suspendedLanes,p=n.pingedLanes;u=(1<<31-ft(42|e)+1)-1,u&=i&~(f&~p),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,jp(n,u))}else u=pe,u=Ti(n,n===Re?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||fa(n,u)||(l=!0,jp(n,u));n=n.next}while(l);Fc=!1}}function E1(){yp()}function yp(){yu=Jc=!1;var e=0;on!==0&&(O1()&&(e=on),on=0);for(var t=Gt(),l=null,n=vu;n!==null;){var i=n.next,u=bp(n,t);u===0?(n.next=null,l===null?vu=i:l.next=i,i===null&&($n=l)):(l=n,(e!==0||(u&3)!==0)&&(yu=!0)),n=i}Wa(e)}function bp(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-ft(u),p=1<<f,v=i[f];v===-1?((p&l)===0||(p&n)!==0)&&(i[f]=W0(p,t)):v<=t&&(e.expiredLanes|=p),u&=~p}if(t=Re,l=pe,l=Ti(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&or(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||fa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&or(n),dr(l)){case 2:case 8:l=ss;break;case 32:l=ji;break;case 268435456:l=fs;break;default:l=ji}return n=Sp.bind(null,e),l=cr(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&or(n),e.callbackPriority=2,e.callbackNode=null,2}function Sp(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(mu()&&e.callbackNode!==l)return null;var n=pe;return n=Ti(e,e===Re?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(np(e,n,t),bp(e,Gt()),e.callbackNode!=null&&e.callbackNode===l?Sp.bind(null,e):null)}function jp(e,t){if(mu())return null;np(e,t,!0)}function w1(){B1(function(){(be&6)!==0?cr(os,E1):yp()})}function Pc(){return on===0&&(on=ds()),on}function Ep(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function wp(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function T1(e,t,l,n,i){if(t==="submit"&&l&&l.stateNode===i){var u=Ep((i[at]||null).action),f=n.submitter;f&&(t=(t=f[at]||null)?Ep(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var p=new Bi("action","action",null,n,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(on!==0){var v=f?wp(i,f):new FormData(i);vc(l,{pending:!0,data:v,method:i.method,action:u},null,v)}}else typeof u=="function"&&(p.preventDefault(),v=f?wp(i,f):new FormData(i),vc(l,{pending:!0,data:v,method:i.method,action:u},u,v))},currentTarget:i}]})}}for(var Ic=0;Ic<Hr.length;Ic++){var eo=Hr[Ic],R1=eo.toLowerCase(),z1=eo[0].toUpperCase()+eo.slice(1);Bt(R1,"on"+z1)}Bt(lf,"onAnimationEnd"),Bt(nf,"onAnimationIteration"),Bt(af,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Qg,"onTransitionRun"),Bt(Zg,"onTransitionStart"),Bt(Vg,"onTransitionCancel"),Bt(uf,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function Tp(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],i=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var f=n.length-1;0<=f;f--){var p=n[f],v=p.instance,z=p.currentTarget;if(p=p.listener,v!==u&&i.isPropagationStopped())break e;u=p,i.currentTarget=z;try{u(i)}catch(N){uu(N)}i.currentTarget=null,u=v}else for(f=0;f<n.length;f++){if(p=n[f],v=p.instance,z=p.currentTarget,p=p.listener,v!==u&&i.isPropagationStopped())break e;u=p,i.currentTarget=z;try{u(i)}catch(N){uu(N)}i.currentTarget=null,u=v}}}}function de(e,t){var l=t[pr];l===void 0&&(l=t[pr]=new Set);var n=e+"__bubble";l.has(n)||(Rp(t,e,2,!1),l.add(n))}function to(e,t,l){var n=0;t&&(n|=4),Rp(l,e,n,t)}var bu="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[bu]){e[bu]=!0,vs.forEach(function(l){l!=="selectionchange"&&(A1.has(l)||to(l,!1,e),to(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bu]||(t[bu]=!0,to("selectionchange",!1,t))}}function Rp(e,t,l,n){switch(Jp(t)){case 2:var i=tx;break;case 8:i=lx;break;default:i=mo}l=i.bind(null,t,l,e),i=void 0,!wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function no(e,t,l,n,i){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var p=n.stateNode.containerInfo;if(p===i)break;if(f===4)for(f=n.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;p!==null;){if(f=hn(p),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){n=u=f;continue e}p=p.parentNode}}n=n.return}Os(function(){var z=u,N=jr(l),H=[];e:{var A=rf.get(e);if(A!==void 0){var C=Bi,ae=e;switch(e){case"keypress":if(Oi(l)===0)break e;case"keydown":case"keyup":C=jg;break;case"focusin":ae="focus",C=Ar;break;case"focusout":ae="blur",C=Ar;break;case"beforeblur":case"afterblur":C=Ar;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Tg;break;case lf:case nf:case af:C=pg;break;case uf:C=zg;break;case"scroll":case"scrollend":C=cg;break;case"wheel":C=Cg;break;case"copy":case"cut":case"paste":C=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Hs;break;case"toggle":case"beforetoggle":C=_g}var te=(t&4)!==0,we=!te&&(e==="scroll"||e==="scrollend"),w=te?A!==null?A+"Capture":null:A;te=[];for(var j=z,R;j!==null;){var U=j;if(R=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||R===null||w===null||(U=ga(j,w),U!=null&&te.push(Fa(j,U,R))),we)break;j=j.return}0<te.length&&(A=new C(A,ae,null,l,N),H.push({event:A,listeners:te}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&l!==Sr&&(ae=l.relatedTarget||l.fromElement)&&(hn(ae)||ae[pn]))break e;if((C||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,C?(ae=l.relatedTarget||l.toElement,C=z,ae=ae?hn(ae):null,ae!==null&&(we=h(ae),te=ae.tag,ae!==we||te!==5&&te!==27&&te!==6)&&(ae=null)):(C=null,ae=z),C!==ae)){if(te=Ns,U="onMouseLeave",w="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=Hs,U="onPointerLeave",w="onPointerEnter",j="pointer"),we=C==null?A:ha(C),R=ae==null?A:ha(ae),A=new te(U,j+"leave",C,l,N),A.target=we,A.relatedTarget=R,U=null,hn(N)===z&&(te=new te(w,j+"enter",ae,l,N),te.target=R,te.relatedTarget=we,U=te),we=U,C&&ae)t:{for(te=C,w=ae,j=0,R=te;R;R=Kn(R))j++;for(R=0,U=w;U;U=Kn(U))R++;for(;0<j-R;)te=Kn(te),j--;for(;0<R-j;)w=Kn(w),R--;for(;j--;){if(te===w||w!==null&&te===w.alternate)break t;te=Kn(te),w=Kn(w)}te=null}else te=null;C!==null&&zp(H,A,C,te,!1),ae!==null&&we!==null&&zp(H,we,ae,te,!0)}}e:{if(A=z?ha(z):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var K=Zs;else if(Xs(A))if(Vs)K=Yg;else{K=Lg;var ce=Gg}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?z&&br(z.elementType)&&(K=Zs):K=qg;if(K&&(K=K(e,z))){Qs(H,K,l,N);break e}ce&&ce(e,A,z),e==="focusout"&&z&&A.type==="number"&&z.memoizedProps.value!=null&&yr(A,"number",A.value)}switch(ce=z?ha(z):window,e){case"focusin":(Xs(ce)||ce.contentEditable==="true")&&(wn=ce,Br=z,Ea=null);break;case"focusout":Ea=Br=wn=null;break;case"mousedown":Nr=!0;break;case"contextmenu":case"mouseup":case"dragend":Nr=!1,ef(H,l,N);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":ef(H,l,N)}var J;if(Mr)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else En?Ys(e,l)&&(ne="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ne="onCompositionStart");ne&&(Gs&&l.locale!=="ko"&&(En||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&En&&(J=Ds()):(vl=N,Tr="value"in vl?vl.value:vl.textContent,En=!0)),ce=Su(z,ne),0<ce.length&&(ne=new Us(ne,e,null,l,N),H.push({event:ne,listeners:ce}),J?ne.data=J:(J=ks(l),J!==null&&(ne.data=J)))),(J=Dg?Bg(e,l):Ng(e,l))&&(ne=Su(z,"onBeforeInput"),0<ne.length&&(ce=new Us("onBeforeInput","beforeinput",null,l,N),H.push({event:ce,listeners:ne}),ce.data=J)),T1(H,e,z,l,N)}Tp(H,t)})}function Fa(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Su(e,t){for(var l=t+"Capture",n=[];e!==null;){var i=e,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=ga(e,l),i!=null&&n.unshift(Fa(e,i,u)),i=ga(e,t),i!=null&&n.push(Fa(e,i,u))),e.tag===3)return n;e=e.return}return[]}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zp(e,t,l,n,i){for(var u=t._reactName,f=[];l!==null&&l!==n;){var p=l,v=p.alternate,z=p.stateNode;if(p=p.tag,v!==null&&v===n)break;p!==5&&p!==26&&p!==27||z===null||(v=z,i?(z=ga(l,u),z!=null&&f.unshift(Fa(l,z,v))):i||(z=ga(l,u),z!=null&&f.push(Fa(l,z,v)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var C1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function Ap(e){return(typeof e=="string"?e:""+e).replace(C1,`
`).replace(M1,"")}function Cp(e,t){return t=Ap(t),Ap(e)===t}function ju(){}function Ee(e,t,l,n,i,u){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||bn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&bn(e,""+n);break;case"className":zi(e,"class",n);break;case"tabIndex":zi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(e,l,n);break;case"style":Ms(e,n,u);break;case"data":if(t!=="object"){zi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Mi(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Mi(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=ju);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Mi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":de("beforetoggle",e),de("toggle",e),Ri(e,"popover",n);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ri(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ug.get(l)||l,Ri(e,l,n))}}function ao(e,t,l,n,i,u){switch(l){case"style":Ms(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof n=="string"?bn(e,n):(typeof n=="number"||typeof n=="bigint")&&bn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ys.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),u=e[at]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,i);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Ri(e,l,n)}}}function Fe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var f=l[u];if(f!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,u,f,l,null)}}i&&Ee(e,t,"srcSet",l.srcSet,l,null),n&&Ee(e,t,"src",l.src,l,null);return;case"input":de("invalid",e);var p=u=f=i=null,v=null,z=null;for(n in l)if(l.hasOwnProperty(n)){var N=l[n];if(N!=null)switch(n){case"name":i=N;break;case"type":f=N;break;case"checked":v=N;break;case"defaultChecked":z=N;break;case"value":u=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:Ee(e,t,n,N,l,null)}}Rs(e,u,p,v,z,f,i,!1),Ai(e);return;case"select":de("invalid",e),n=f=u=null;for(i in l)if(l.hasOwnProperty(i)&&(p=l[i],p!=null))switch(i){case"value":u=p;break;case"defaultValue":f=p;break;case"multiple":n=p;default:Ee(e,t,i,p,l,null)}t=u,l=f,e.multiple=!!n,t!=null?yn(e,!!n,t,!1):l!=null&&yn(e,!!n,l,!0);return;case"textarea":de("invalid",e),u=i=n=null;for(f in l)if(l.hasOwnProperty(f)&&(p=l[f],p!=null))switch(f){case"value":n=p;break;case"defaultValue":i=p;break;case"children":u=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Ee(e,t,f,p,l,null)}As(e,n,i,u),Ai(e);return;case"option":for(v in l)if(l.hasOwnProperty(v)&&(n=l[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ee(e,t,v,n,l,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<Ja.length;n++)de(Ja[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(n=l[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,z,n,l,null)}return;default:if(br(t)){for(N in l)l.hasOwnProperty(N)&&(n=l[N],n!==void 0&&ao(e,t,N,n,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(n=l[p],n!=null&&Ee(e,t,p,n,l,null))}function _1(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,f=null,p=null,v=null,z=null,N=null;for(C in l){var H=l[C];if(l.hasOwnProperty(C)&&H!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=H;default:n.hasOwnProperty(C)||Ee(e,t,C,null,n,H)}}for(var A in n){var C=n[A];if(H=l[A],n.hasOwnProperty(A)&&(C!=null||H!=null))switch(A){case"type":u=C;break;case"name":i=C;break;case"checked":z=C;break;case"defaultChecked":N=C;break;case"value":f=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==H&&Ee(e,t,A,C,n,H)}}vr(e,f,p,v,z,N,u,i);return;case"select":C=f=p=A=null;for(u in l)if(v=l[u],l.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":C=v;default:n.hasOwnProperty(u)||Ee(e,t,u,null,n,v)}for(i in n)if(u=n[i],v=l[i],n.hasOwnProperty(i)&&(u!=null||v!=null))switch(i){case"value":A=u;break;case"defaultValue":p=u;break;case"multiple":f=u;default:u!==v&&Ee(e,t,i,u,n,v)}t=p,l=f,n=C,A!=null?yn(e,!!l,A,!1):!!n!=!!l&&(t!=null?yn(e,!!l,t,!0):yn(e,!!l,l?[]:"",!1));return;case"textarea":C=A=null;for(p in l)if(i=l[p],l.hasOwnProperty(p)&&i!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ee(e,t,p,null,n,i)}for(f in n)if(i=n[f],u=l[f],n.hasOwnProperty(f)&&(i!=null||u!=null))switch(f){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==u&&Ee(e,t,f,i,n,u)}zs(e,A,C);return;case"option":for(var ae in l)if(A=l[ae],l.hasOwnProperty(ae)&&A!=null&&!n.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ee(e,t,ae,null,n,A)}for(v in n)if(A=n[v],C=l[v],n.hasOwnProperty(v)&&A!==C&&(A!=null||C!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ee(e,t,v,A,n,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in l)A=l[te],l.hasOwnProperty(te)&&A!=null&&!n.hasOwnProperty(te)&&Ee(e,t,te,null,n,A);for(z in n)if(A=n[z],C=l[z],n.hasOwnProperty(z)&&A!==C&&(A!=null||C!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ee(e,t,z,A,n,C)}return;default:if(br(t)){for(var we in l)A=l[we],l.hasOwnProperty(we)&&A!==void 0&&!n.hasOwnProperty(we)&&ao(e,t,we,void 0,n,A);for(N in n)A=n[N],C=l[N],!n.hasOwnProperty(N)||A===C||A===void 0&&C===void 0||ao(e,t,N,A,n,C);return}}for(var w in l)A=l[w],l.hasOwnProperty(w)&&A!=null&&!n.hasOwnProperty(w)&&Ee(e,t,w,null,n,A);for(H in n)A=n[H],C=l[H],!n.hasOwnProperty(H)||A===C||A==null&&C==null||Ee(e,t,H,A,n,C)}var io=null,uo=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function Mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _p(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var co=null;function O1(){var e=window.event;return e&&e.type==="popstate"?e===co?!1:(co=e,!0):(co=null,!1)}var Op=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(e){return Dp.resolve(null).then(e).catch(N1)}:Op;function N1(e){setTimeout(function(){throw e})}function Bl(e){return e==="head"}function Bp(e,t){var l=t,n=0,i=0;do{var u=l.nextSibling;if(e.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<n&&8>n){l=n;var f=e.ownerDocument;if(l&1&&Pa(f.documentElement),l&2&&Pa(f.body),l&4)for(l=f.head,Pa(l),f=l.firstChild;f;){var p=f.nextSibling,v=f.nodeName;f[pa]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=p}}if(i===0){e.removeChild(u),ui(t);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:n=l.charCodeAt(0)-48;else n=0;l=u}while(l);ui(t)}function oo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":oo(l),hr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function U1(e,t,l,n){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[pa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function H1(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ut(e.nextSibling),e===null))return null;return e}function so(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function G1(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fo=null;function Np(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function Up(e,t,l){switch(t=Eu(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Pa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hr(e)}var Ct=new Map,Hp=new Set;function wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fl=Q.d;Q.d={f:L1,r:q1,D:Y1,C:k1,L:X1,m:Q1,X:V1,S:Z1,M:$1};function L1(){var e=fl.f(),t=gu();return e||t}function q1(e){var t=gn(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):fl.r(e)}var Wn=typeof document>"u"?null:document;function Gp(e,t,l){var n=Wn;if(n&&typeof t=="string"&&t){var i=jt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Hp.has(i)||(Hp.add(i),e={rel:e,crossOrigin:l,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Fe(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Y1(e){fl.D(e),Gp("dns-prefetch",e,null)}function k1(e,t){fl.C(e,t),Gp("preconnect",e,t)}function X1(e,t,l){fl.L(e,t,l);var n=Wn;if(n&&e&&t){var i='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+jt(l.imageSizes)+'"]')):i+='[href="'+jt(e)+'"]';var u=i;switch(t){case"style":u=Jn(e);break;case"script":u=Fn(e)}Ct.has(u)||(e=T({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ct.set(u,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ia(u))||t==="script"&&n.querySelector(ei(u))||(t=n.createElement("link"),Fe(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Q1(e,t){fl.m(e,t);var l=Wn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+jt(n)+'"][href="'+jt(e)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Fn(e)}if(!Ct.has(u)&&(e=T({rel:"modulepreload",href:e},t),Ct.set(u,e),l.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ei(u)))return}n=l.createElement("link"),Fe(n,"link",e),Xe(n),l.head.appendChild(n)}}}function Z1(e,t,l){fl.S(e,t,l);var n=Wn;if(n&&e){var i=xn(n).hoistableStyles,u=Jn(e);t=t||"default";var f=i.get(u);if(!f){var p={loading:0,preload:null};if(f=n.querySelector(Ia(u)))p.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ct.get(u))&&po(e,l);var v=f=n.createElement("link");Xe(v),Fe(v,"link",e),v._p=new Promise(function(z,N){v.onload=z,v.onerror=N}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Tu(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:p},i.set(u,f)}}}function V1(e,t){fl.X(e,t);var l=Wn;if(l&&e){var n=xn(l).hoistableScripts,i=Fn(e),u=n.get(i);u||(u=l.querySelector(ei(i)),u||(e=T({src:e,async:!0},t),(t=Ct.get(i))&&ho(e,t),u=l.createElement("script"),Xe(u),Fe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function $1(e,t){fl.M(e,t);var l=Wn;if(l&&e){var n=xn(l).hoistableScripts,i=Fn(e),u=n.get(i);u||(u=l.querySelector(ei(i)),u||(e=T({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&ho(e,t),u=l.createElement("script"),Xe(u),Fe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Lp(e,t,l,n){var i=(i=le.current)?wu(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Jn(l.href),l=xn(i).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Jn(l.href);var u=xn(i).hoistableStyles,f=u.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=i.querySelector(Ia(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Ct.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ct.set(e,l),u||K1(i,e,l,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fn(l),l=xn(i).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Jn(e){return'href="'+jt(e)+'"'}function Ia(e){return'link[rel="stylesheet"]['+e+"]"}function qp(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function K1(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Fe(t,"link",l),Xe(t),e.head.appendChild(t))}function Fn(e){return'[src="'+jt(e)+'"]'}function ei(e){return"script[async]"+e}function Yp(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+jt(l.href)+'"]');if(n)return t.instance=n,Xe(n),n;var i=T({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),Fe(n,"style",i),Tu(n,l.precedence,e),t.instance=n;case"stylesheet":i=Jn(l.href);var u=e.querySelector(Ia(i));if(u)return t.state.loading|=4,t.instance=u,Xe(u),u;n=qp(l),(i=Ct.get(i))&&po(n,i),u=(e.ownerDocument||e).createElement("link"),Xe(u);var f=u;return f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),Fe(u,"link",n),t.state.loading|=4,Tu(u,l.precedence,e),t.instance=u;case"script":return u=Fn(l.src),(i=e.querySelector(ei(u)))?(t.instance=i,Xe(i),i):(n=l,(i=Ct.get(u))&&(n=T({},l),ho(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Fe(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Tu(n,l.precedence,e));return t.instance}function Tu(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,f=0;f<n.length;f++){var p=n[f];if(p.dataset.precedence===t)u=p;else if(u!==i)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function po(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ru=null;function kp(e,t,l){if(Ru===null){var n=new Map,i=Ru=new Map;i.set(l,n)}else i=Ru,n=i.get(l),n||(n=new Map,i.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var u=l[i];if(!(u[pa]||u[Ie]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var p=n.get(f);p?p.push(u):n.set(f,[u])}}return n}function Xp(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function W1(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ti=null;function J1(){}function F1(e,t,l){if(ti===null)throw Error(c(475));var n=ti;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Jn(l.href),u=e.querySelector(Ia(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=zu.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=u,Xe(u);return}u=e.ownerDocument||e,l=qp(l),(i=Ct.get(i))&&po(l,i),u=u.createElement("link"),Xe(u);var f=u;f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),Fe(u,"link",l),t.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=zu.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function P1(){if(ti===null)throw Error(c(475));var e=ti;return e.stylesheets&&e.count===0&&go(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&go(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function zu(){if(this.count--,this.count===0){if(this.stylesheets)go(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Au=null;function go(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Au=new Map,t.forEach(I1,e),Au=null,zu.call(e))}function I1(e,t){if(!(t.state.loading&4)){var l=Au.get(e);if(l)var n=l.get(null);else{l=new Map,Au.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var f=i[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),n=f)}n&&l.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),u=l.get(f)||n,u===n&&l.set(null,i),l.set(f,i),this.count++,n=zu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var li={$$typeof:X,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function ex(e,t,l,n,i,u,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.hiddenUpdates=sr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Zp(e,t,l,n,i,u,f,p,v,z,N,H){return e=new ex(e,t,l,f,p,v,z,H),t=1,u===!0&&(t|=24),u=pt(3,null,null,t),e.current=u,u.stateNode=e,t=Wr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:t},Ir(u),e}function Vp(e){return e?(e=An,e):An}function $p(e,t,l,n,i,u){i=Vp(i),n.context===null?n.context=i:n.pendingContext=i,n=Sl(t),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=jl(e,n,t),l!==null&&(vt(l,e,t),Oa(l,e,t))}function Kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function xo(e,t){Kp(e,t),(e=e.alternate)&&Kp(e,t)}function Wp(e){if(e.tag===13){var t=zn(e,67108864);t!==null&&vt(t,e,67108864),xo(e,67108864)}}var Cu=!0;function tx(e,t,l,n){var i=B.T;B.T=null;var u=Q.p;try{Q.p=2,mo(e,t,l,n)}finally{Q.p=u,B.T=i}}function lx(e,t,l,n){var i=B.T;B.T=null;var u=Q.p;try{Q.p=8,mo(e,t,l,n)}finally{Q.p=u,B.T=i}}function mo(e,t,l,n){if(Cu){var i=vo(n);if(i===null)no(e,t,n,Mu,l),Fp(e,n);else if(ax(i,e,t,l,n))n.stopPropagation();else if(Fp(e,n),t&4&&-1<nx.indexOf(e)){for(;i!==null;){var u=gn(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Zl(u.pendingLanes);if(f!==0){var p=u;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var v=1<<31-ft(f);p.entanglements[1]|=v,f&=~v}Xt(u),(be&6)===0&&(pu=Gt()+500,Wa(0))}}break;case 13:p=zn(u,2),p!==null&&vt(p,u,2),gu(),xo(u,2)}if(u=vo(n),u===null&&no(e,t,n,Mu,l),u===i)break;i=u}i!==null&&n.stopPropagation()}else no(e,t,n,null,l)}}function vo(e){return e=jr(e),yo(e)}var Mu=null;function yo(e){if(Mu=null,e=hn(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=y(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mu=e,null}function Jp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case os:return 2;case ss:return 8;case ji:case X0:return 32;case fs:return 268435456;default:return 32}default:return 32}}var bo=!1,Nl=null,Ul=null,Hl=null,ni=new Map,ai=new Map,Gl=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fp(e,t){switch(e){case"focusin":case"focusout":Nl=null;break;case"dragenter":case"dragleave":Ul=null;break;case"mouseover":case"mouseout":Hl=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ii(e,t,l,n,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},t!==null&&(t=gn(t),t!==null&&Wp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ax(e,t,l,n,i){switch(t){case"focusin":return Nl=ii(Nl,e,t,l,n,i),!0;case"dragenter":return Ul=ii(Ul,e,t,l,n,i),!0;case"mouseover":return Hl=ii(Hl,e,t,l,n,i),!0;case"pointerover":var u=i.pointerId;return ni.set(u,ii(ni.get(u)||null,e,t,l,n,i)),!0;case"gotpointercapture":return u=i.pointerId,ai.set(u,ii(ai.get(u)||null,e,t,l,n,i)),!0}return!1}function Pp(e){var t=hn(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=y(l),t!==null){e.blockedOn=t,F0(e.priority,function(){if(l.tag===13){var n=mt();n=fr(n);var i=zn(l,n);i!==null&&vt(i,l,n),xo(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=vo(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Sr=n,l.target.dispatchEvent(n),Sr=null}else return t=gn(l),t!==null&&Wp(t),e.blockedOn=l,!1;t.shift()}return!0}function Ip(e,t,l){_u(e)&&l.delete(t)}function ix(){bo=!1,Nl!==null&&_u(Nl)&&(Nl=null),Ul!==null&&_u(Ul)&&(Ul=null),Hl!==null&&_u(Hl)&&(Hl=null),ni.forEach(Ip),ai.forEach(Ip)}function Ou(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ix)))}var Du=null;function eh(e){Du!==e&&(Du=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Du===e&&(Du=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(yo(n||l)===null)continue;break}var u=gn(l);u!==null&&(e.splice(t,3),t-=3,vc(u,{pending:!0,data:i,method:l.method,action:n},n,i))}}))}function ui(e){function t(v){return Ou(v,e)}Nl!==null&&Ou(Nl,e),Ul!==null&&Ou(Ul,e),Hl!==null&&Ou(Hl,e),ni.forEach(t),ai.forEach(t);for(var l=0;l<Gl.length;l++){var n=Gl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Gl.length&&(l=Gl[0],l.blockedOn===null);)Pp(l),l.blockedOn===null&&Gl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var i=l[n],u=l[n+1],f=i[at]||null;if(typeof u=="function")f||eh(l);else if(f){var p=null;if(u&&u.hasAttribute("formAction")){if(i=u,f=u[at]||null)p=f.formAction;else if(yo(i)!==null)continue}else p=f.action;typeof p=="function"?l[n+1]=p:(l.splice(n,3),n-=3),eh(l)}}}function So(e){this._internalRoot=e}Bu.prototype.render=So.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,n=mt();$p(l,n,e,t,null,null)},Bu.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$p(e.current,2,null,e,null,null),gu(),t[pn]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=xs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Gl.length&&t!==0&&t<Gl[l].priority;l++);Gl.splice(l,0,e),l===0&&Pp(e)}};var th=r.version;if(th!=="19.1.0")throw Error(c(527,th,"19.1.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ux={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{sa=Nu.inject(ux),st=Nu}catch{}}return ci.createRoot=function(e,t){if(!d(e))throw Error(c(299));var l=!1,n="",i=md,u=vd,f=yd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=Zp(e,1,!1,null,null,l,n,i,u,f,p,null),e[pn]=t.current,lo(e),new So(t)},ci.hydrateRoot=function(e,t,l){if(!d(e))throw Error(c(299));var n=!1,i="",u=md,f=vd,p=yd,v=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(v=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),t=Zp(e,1,!0,t,l??null,n,i,u,f,p,v,z),t.context=Vp(null),l=t.current,n=mt(),n=fr(n),i=Sl(n),i.callback=null,jl(l,i,n),l=n,t.current.lanes=l,da(t,l),Xt(t),e[pn]=t.current,lo(e),new Bu(t)},ci.version="19.1.0",ci}var fh;function mx(){if(fh)return wo.exports;fh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),wo.exports=xx(),wo.exports}var vx=mx(),ot=function(){return ot=Object.assign||function(r){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},ot.apply(this,arguments)};function Wu(a,r,o){if(o||arguments.length===2)for(var c=0,d=r.length,h;c<d;c++)(h||!(c in r))&&(h||(h=Array.prototype.slice.call(r,0,c)),h[c]=r[c]);return a.concat(h||Array.prototype.slice.call(r))}var ze="-ms-",pi="-moz-",ve="-webkit-",Xh="comm",er="rule",Wo="decl",yx="@import",Qh="@keyframes",bx="@layer",Zh=Math.abs,Jo=String.fromCharCode,Go=Object.assign;function Sx(a,r){return $e(a,0)^45?(((r<<2^$e(a,0))<<2^$e(a,1))<<2^$e(a,2))<<2^$e(a,3):0}function Vh(a){return a.trim()}function dl(a,r){return(a=r.exec(a))?a[0]:a}function ue(a,r,o){return a.replace(r,o)}function ku(a,r,o){return a.indexOf(r,o)}function $e(a,r){return a.charCodeAt(r)|0}function la(a,r,o){return a.slice(r,o)}function Qt(a){return a.length}function $h(a){return a.length}function fi(a,r){return r.push(a),a}function jx(a,r){return a.map(r).join("")}function dh(a,r){return a.filter(function(o){return!dl(o,r)})}var tr=1,na=1,Kh=0,Ot=0,He=0,ra="";function lr(a,r,o,c,d,h,y,E){return{value:a,root:r,parent:o,type:c,props:d,children:h,line:tr,column:na,length:y,return:"",siblings:E}}function Yl(a,r){return Go(lr("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function Pn(a){for(;a.root;)a=Yl(a.root,{children:[a]});fi(a,a.siblings)}function Ex(){return He}function wx(){return He=Ot>0?$e(ra,--Ot):0,na--,He===10&&(na=1,tr--),He}function Ht(){return He=Ot<Kh?$e(ra,Ot++):0,na++,He===10&&(na=1,tr++),He}function fn(){return $e(ra,Ot)}function Xu(){return Ot}function nr(a,r){return la(ra,a,r)}function Lo(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tx(a){return tr=na=1,Kh=Qt(ra=a),Ot=0,[]}function Rx(a){return ra="",a}function Ao(a){return Vh(nr(Ot-1,qo(a===91?a+2:a===40?a+1:a)))}function zx(a){for(;(He=fn())&&He<33;)Ht();return Lo(a)>2||Lo(He)>3?"":" "}function Ax(a,r){for(;--r&&Ht()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return nr(a,Xu()+(r<6&&fn()==32&&Ht()==32))}function qo(a){for(;Ht();)switch(He){case a:return Ot;case 34:case 39:a!==34&&a!==39&&qo(He);break;case 40:a===41&&qo(a);break;case 92:Ht();break}return Ot}function Cx(a,r){for(;Ht()&&a+He!==57;)if(a+He===84&&fn()===47)break;return"/*"+nr(r,Ot-1)+"*"+Jo(a===47?a:Ht())}function Mx(a){for(;!Lo(fn());)Ht();return nr(a,Ot)}function _x(a){return Rx(Qu("",null,null,null,[""],a=Tx(a),0,[0],a))}function Qu(a,r,o,c,d,h,y,E,m){for(var g=0,T=0,M=y,_=0,q=0,D=0,G=1,Y=1,O=1,V=0,X="",P=d,$=h,ee=c,W=X;Y;)switch(D=V,V=Ht()){case 40:if(D!=108&&$e(W,M-1)==58){ku(W+=ue(Ao(V),"&","&\f"),"&\f",Zh(g?E[g-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:W+=Ao(V);break;case 9:case 10:case 13:case 32:W+=zx(D);break;case 92:W+=Ax(Xu()-1,7);continue;case 47:switch(fn()){case 42:case 47:fi(Ox(Cx(Ht(),Xu()),r,o,m),m);break;default:W+="/"}break;case 123*G:E[g++]=Qt(W)*O;case 125*G:case 59:case 0:switch(V){case 0:case 125:Y=0;case 59+T:O==-1&&(W=ue(W,/\f/g,"")),q>0&&Qt(W)-M&&fi(q>32?hh(W+";",c,o,M-1,m):hh(ue(W," ","")+";",c,o,M-2,m),m);break;case 59:W+=";";default:if(fi(ee=ph(W,r,o,g,T,d,E,X,P=[],$=[],M,h),h),V===123)if(T===0)Qu(W,r,ee,ee,P,h,M,E,$);else switch(_===99&&$e(W,3)===110?100:_){case 100:case 108:case 109:case 115:Qu(a,ee,ee,c&&fi(ph(a,ee,ee,0,0,d,E,X,d,P=[],M,$),$),d,$,M,E,c?P:$);break;default:Qu(W,ee,ee,ee,[""],$,0,E,$)}}g=T=q=0,G=O=1,X=W="",M=y;break;case 58:M=1+Qt(W),q=D;default:if(G<1){if(V==123)--G;else if(V==125&&G++==0&&wx()==125)continue}switch(W+=Jo(V),V*G){case 38:O=T>0?1:(W+="\f",-1);break;case 44:E[g++]=(Qt(W)-1)*O,O=1;break;case 64:fn()===45&&(W+=Ao(Ht())),_=fn(),T=M=Qt(X=W+=Mx(Xu())),V++;break;case 45:D===45&&Qt(W)==2&&(G=0)}}return h}function ph(a,r,o,c,d,h,y,E,m,g,T,M){for(var _=d-1,q=d===0?h:[""],D=$h(q),G=0,Y=0,O=0;G<c;++G)for(var V=0,X=la(a,_+1,_=Zh(Y=y[G])),P=a;V<D;++V)(P=Vh(Y>0?q[V]+" "+X:ue(X,/&\f/g,q[V])))&&(m[O++]=P);return lr(a,r,o,d===0?er:E,m,g,T,M)}function Ox(a,r,o,c){return lr(a,r,o,Xh,Jo(Ex()),la(a,2,-2),0,c)}function hh(a,r,o,c,d){return lr(a,r,o,Wo,la(a,0,c),la(a,c+1,-1),c,d)}function Wh(a,r,o){switch(Sx(a,r)){case 5103:return ve+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+a+a;case 4789:return pi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+a+pi+a+ze+a+a;case 5936:switch($e(a,r+11)){case 114:return ve+a+ze+ue(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return ve+a+ze+ue(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return ve+a+ze+ue(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return ve+a+ze+a+a;case 6165:return ve+a+ze+"flex-"+a+a;case 5187:return ve+a+ue(a,/(\w+).+(:[^]+)/,ve+"box-$1$2"+ze+"flex-$1$2")+a;case 5443:return ve+a+ze+"flex-item-"+ue(a,/flex-|-self/g,"")+(dl(a,/flex-|baseline/)?"":ze+"grid-row-"+ue(a,/flex-|-self/g,""))+a;case 4675:return ve+a+ze+"flex-line-pack"+ue(a,/align-content|flex-|-self/g,"")+a;case 5548:return ve+a+ze+ue(a,"shrink","negative")+a;case 5292:return ve+a+ze+ue(a,"basis","preferred-size")+a;case 6060:return ve+"box-"+ue(a,"-grow","")+ve+a+ze+ue(a,"grow","positive")+a;case 4554:return ve+ue(a,/([^-])(transform)/g,"$1"+ve+"$2")+a;case 6187:return ue(ue(ue(a,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),a,"")+a;case 5495:case 3959:return ue(a,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return ue(ue(a,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+a+a;case 4200:if(!dl(a,/flex-|baseline/))return ze+"grid-column-align"+la(a,r)+a;break;case 2592:case 3360:return ze+ue(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(c,d){return r=d,dl(c.props,/grid-\w+-end/)})?~ku(a+(o=o[r].value),"span",0)?a:ze+ue(a,"-start","")+a+ze+"grid-row-span:"+(~ku(o,"span",0)?dl(o,/\d+/):+dl(o,/\d+/)-+dl(a,/\d+/))+";":ze+ue(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(c){return dl(c.props,/grid-\w+-start/)})?a:ze+ue(ue(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ue(a,/(.+)-inline(.+)/,ve+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(a)-1-r>6)switch($e(a,r+1)){case 109:if($e(a,r+4)!==45)break;case 102:return ue(a,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+pi+($e(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~ku(a,"stretch",0)?Wh(ue(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return ue(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,h,y,E,m,g){return ze+d+":"+h+g+(y?ze+d+"-span:"+(E?m:+m-+h)+g:"")+a});case 4949:if($e(a,r+6)===121)return ue(a,":",":"+ve)+a;break;case 6444:switch($e(a,$e(a,14)===45?18:11)){case 120:return ue(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+($e(a,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+ze+"$2box$3")+a;case 100:return ue(a,":",":"+ze)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(a,"scroll-","scroll-snap-")+a}return a}function Ju(a,r){for(var o="",c=0;c<a.length;c++)o+=r(a[c],c,a,r)||"";return o}function Dx(a,r,o,c){switch(a.type){case bx:if(a.children.length)break;case yx:case Wo:return a.return=a.return||a.value;case Xh:return"";case Qh:return a.return=a.value+"{"+Ju(a.children,c)+"}";case er:if(!Qt(a.value=a.props.join(",")))return""}return Qt(o=Ju(a.children,c))?a.return=a.value+"{"+o+"}":""}function Bx(a){var r=$h(a);return function(o,c,d,h){for(var y="",E=0;E<r;E++)y+=a[E](o,c,d,h)||"";return y}}function Nx(a){return function(r){r.root||(r=r.return)&&a(r)}}function Ux(a,r,o,c){if(a.length>-1&&!a.return)switch(a.type){case Wo:a.return=Wh(a.value,a.length,o);return;case Qh:return Ju([Yl(a,{value:ue(a.value,"@","@"+ve)})],c);case er:if(a.length)return jx(o=a.props,function(d){switch(dl(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pn(Yl(a,{props:[ue(d,/:(read-\w+)/,":"+pi+"$1")]})),Pn(Yl(a,{props:[d]})),Go(a,{props:dh(o,c)});break;case"::placeholder":Pn(Yl(a,{props:[ue(d,/:(plac\w+)/,":"+ve+"input-$1")]})),Pn(Yl(a,{props:[ue(d,/:(plac\w+)/,":"+pi+"$1")]})),Pn(Yl(a,{props:[ue(d,/:(plac\w+)/,ze+"input-$1")]})),Pn(Yl(a,{props:[d]})),Go(a,{props:dh(o,c)});break}return""})}}var Hx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},aa=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",Jh="active",Fh="data-styled-version",ar="6.1.19",Fo=`/*!sc*/
`,Fu=typeof window<"u"&&typeof document<"u",Gx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),ir=Object.freeze([]),ia=Object.freeze({});function Lx(a,r,o){return o===void 0&&(o=ia),a.theme!==o.theme&&a.theme||r||o.theme}var Ph=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yx=/(^-|-$)/g;function gh(a){return a.replace(qx,"-").replace(Yx,"")}var kx=/(a)(d)/gi,Uu=52,xh=function(a){return String.fromCharCode(a+(a>25?39:97))};function Yo(a){var r,o="";for(r=Math.abs(a);r>Uu;r=r/Uu|0)o=xh(r%Uu)+o;return(xh(r%Uu)+o).replace(kx,"$1-$2")}var Co,Ih=5381,In=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},e0=function(a){return In(Ih,a)};function Xx(a){return Yo(e0(a)>>>0)}function Qx(a){return a.displayName||a.name||"Component"}function Mo(a){return typeof a=="string"&&!0}var t0=typeof Symbol=="function"&&Symbol.for,l0=t0?Symbol.for("react.memo"):60115,Zx=t0?Symbol.for("react.forward_ref"):60112,Vx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$x={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kx=((Co={})[Zx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Co[l0]=n0,Co);function mh(a){return("type"in(r=a)&&r.type.$$typeof)===l0?n0:"$$typeof"in a?Kx[a.$$typeof]:Vx;var r}var Wx=Object.defineProperty,Jx=Object.getOwnPropertyNames,vh=Object.getOwnPropertySymbols,Fx=Object.getOwnPropertyDescriptor,Px=Object.getPrototypeOf,yh=Object.prototype;function a0(a,r,o){if(typeof r!="string"){if(yh){var c=Px(r);c&&c!==yh&&a0(a,c,o)}var d=Jx(r);vh&&(d=d.concat(vh(r)));for(var h=mh(a),y=mh(r),E=0;E<d.length;++E){var m=d[E];if(!(m in $x||o&&o[m]||y&&m in y||h&&m in h)){var g=Fx(r,m);try{Wx(a,m,g)}catch{}}}}return a}function ua(a){return typeof a=="function"}function Po(a){return typeof a=="object"&&"styledComponentId"in a}function sn(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function bh(a,r){if(a.length===0)return"";for(var o=a[0],c=1;c<a.length;c++)o+=a[c];return o}function gi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function ko(a,r,o){if(o===void 0&&(o=!1),!o&&!gi(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)a[c]=ko(a[c],r[c]);else if(gi(r))for(var c in r)a[c]=ko(a[c],r[c]);return a}function Io(a,r){Object.defineProperty(a,"toString",{value:r})}function mi(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Ix=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,c=0;c<r;c++)o+=this.groupSizes[c];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,h=d;r>=h;)if((h<<=1)<0)throw mi(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var y=d;y<h;y++)this.groupSizes[y]=0}for(var E=this.indexOfGroup(r+1),m=(y=0,o.length);y<m;y++)this.tag.insertRule(E,o[y])&&(this.groupSizes[r]++,E++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],c=this.indexOfGroup(r),d=c+o;this.groupSizes[r]=0;for(var h=c;h<d;h++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var c=this.groupSizes[r],d=this.indexOfGroup(r),h=d+c,y=d;y<h;y++)o+="".concat(this.tag.getRule(y)).concat(Fo);return o},a}(),Zu=new Map,Pu=new Map,Vu=1,Hu=function(a){if(Zu.has(a))return Zu.get(a);for(;Pu.has(Vu);)Vu++;var r=Vu++;return Zu.set(a,r),Pu.set(r,a),r},em=function(a,r){Vu=r+1,Zu.set(a,r),Pu.set(r,a)},tm="style[".concat(aa,"][").concat(Fh,'="').concat(ar,'"]'),lm=new RegExp("^".concat(aa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nm=function(a,r,o){for(var c,d=o.split(","),h=0,y=d.length;h<y;h++)(c=d[h])&&a.registerName(r,c)},am=function(a,r){for(var o,c=((o=r.textContent)!==null&&o!==void 0?o:"").split(Fo),d=[],h=0,y=c.length;h<y;h++){var E=c[h].trim();if(E){var m=E.match(lm);if(m){var g=0|parseInt(m[1],10),T=m[2];g!==0&&(em(T,g),nm(a,T,m[3]),a.getTag().insertRules(g,d)),d.length=0}else d.push(E)}}},Sh=function(a){for(var r=document.querySelectorAll(tm),o=0,c=r.length;o<c;o++){var d=r[o];d&&d.getAttribute(aa)!==Jh&&(am(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function im(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var i0=function(a){var r=document.head,o=a||r,c=document.createElement("style"),d=function(E){var m=Array.from(E.querySelectorAll("style[".concat(aa,"]")));return m[m.length-1]}(o),h=d!==void 0?d.nextSibling:null;c.setAttribute(aa,Jh),c.setAttribute(Fh,ar);var y=im();return y&&c.setAttribute("nonce",y),o.insertBefore(c,h),c},um=function(){function a(r){this.element=i0(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,d=0,h=c.length;d<h;d++){var y=c[d];if(y.ownerNode===o)return y}throw mi(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a}(),rm=function(){function a(r){this.element=i0(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),cm=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),jh=Fu,om={isServer:!Fu,useCSSOMInjection:!Gx},u0=function(){function a(r,o,c){r===void 0&&(r=ia),o===void 0&&(o={});var d=this;this.options=ot(ot({},om),r),this.gs=o,this.names=new Map(c),this.server=!!r.isServer,!this.server&&Fu&&jh&&(jh=!1,Sh(this)),Io(this,function(){return function(h){for(var y=h.getTag(),E=y.length,m="",g=function(M){var _=function(O){return Pu.get(O)}(M);if(_===void 0)return"continue";var q=h.names.get(_),D=y.getGroup(M);if(q===void 0||!q.size||D.length===0)return"continue";var G="".concat(aa,".g").concat(M,'[id="').concat(_,'"]'),Y="";q!==void 0&&q.forEach(function(O){O.length>0&&(Y+="".concat(O,","))}),m+="".concat(D).concat(G,'{content:"').concat(Y,'"}').concat(Fo)},T=0;T<E;T++)g(T);return m}(d)})}return a.registerId=function(r){return Hu(r)},a.prototype.rehydrate=function(){!this.server&&Fu&&Sh(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(ot(ot({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var c=o.useCSSOMInjection,d=o.target;return o.isServer?new cm(d):c?new um(d):new rm(d)}(this.options),new Ix(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(Hu(r),this.names.has(r))this.names.get(r).add(o);else{var c=new Set;c.add(o),this.names.set(r,c)}},a.prototype.insertRules=function(r,o,c){this.registerName(r,o),this.getTag().insertRules(Hu(r),c)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Hu(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),sm=/&/g,fm=/^\s*\/\/.*$/gm;function r0(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=r0(o.children,r)),o})}function dm(a){var r,o,c,d=ia,h=d.options,y=h===void 0?ia:h,E=d.plugins,m=E===void 0?ir:E,g=function(_,q,D){return D.startsWith(o)&&D.endsWith(o)&&D.replaceAll(o,"").length>0?".".concat(r):_},T=m.slice();T.push(function(_){_.type===er&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(sm,o).replace(c,g))}),y.prefix&&T.push(Ux),T.push(Dx);var M=function(_,q,D,G){q===void 0&&(q=""),D===void 0&&(D=""),G===void 0&&(G="&"),r=G,o=q,c=new RegExp("\\".concat(o,"\\b"),"g");var Y=_.replace(fm,""),O=_x(D||q?"".concat(D," ").concat(q," { ").concat(Y," }"):Y);y.namespace&&(O=r0(O,y.namespace));var V=[];return Ju(O,Bx(T.concat(Nx(function(X){return V.push(X)})))),V};return M.hash=m.length?m.reduce(function(_,q){return q.name||mi(15),In(_,q.name)},Ih).toString():"",M}var pm=new u0,Xo=dm(),c0=hi.createContext({shouldForwardProp:void 0,styleSheet:pm,stylis:Xo});c0.Consumer;hi.createContext(void 0);function Eh(){return S.useContext(c0)}var hm=function(){function a(r,o){var c=this;this.inject=function(d,h){h===void 0&&(h=Xo);var y=c.name+h.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,h(c.rules,y,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,Io(this,function(){throw mi(12,String(c.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=Xo),this.name+r.hash},a}(),gm=function(a){return a>="A"&&a<="Z"};function wh(a){for(var r="",o=0;o<a.length;o++){var c=a[o];if(o===1&&c==="-"&&a[0]==="-")return a;gm(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var o0=function(a){return a==null||a===!1||a===""},s0=function(a){var r,o,c=[];for(var d in a){var h=a[d];a.hasOwnProperty(d)&&!o0(h)&&(Array.isArray(h)&&h.isCss||ua(h)?c.push("".concat(wh(d),":"),h,";"):gi(h)?c.push.apply(c,Wu(Wu(["".concat(d," {")],s0(h),!1),["}"],!1)):c.push("".concat(wh(d),": ").concat((r=d,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in Hx||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function dn(a,r,o,c){if(o0(a))return[];if(Po(a))return[".".concat(a.styledComponentId)];if(ua(a)){if(!ua(h=a)||h.prototype&&h.prototype.isReactComponent||!r)return[a];var d=a(r);return dn(d,r,o,c)}var h;return a instanceof hm?o?(a.inject(o,c),[a.getName(c)]):[a]:gi(a)?s0(a):Array.isArray(a)?Array.prototype.concat.apply(ir,a.map(function(y){return dn(y,r,o,c)})):[a.toString()]}function xm(a){for(var r=0;r<a.length;r+=1){var o=a[r];if(ua(o)&&!Po(o))return!1}return!0}var mm=e0(ar),vm=function(){function a(r,o,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&xm(r),this.componentId=o,this.baseHash=In(mm,o),this.baseStyle=c,u0.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=sn(d,this.staticRulesId);else{var h=bh(dn(this.rules,r,o,c)),y=Yo(In(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,y)){var E=c(h,".".concat(y),void 0,this.componentId);o.insertRules(this.componentId,y,E)}d=sn(d,y),this.staticRulesId=y}else{for(var m=In(this.baseHash,c.hash),g="",T=0;T<this.rules.length;T++){var M=this.rules[T];if(typeof M=="string")g+=M;else if(M){var _=bh(dn(M,r,o,c));m=In(m,_+T),g+=_}}if(g){var q=Yo(m>>>0);o.hasNameForId(this.componentId,q)||o.insertRules(this.componentId,q,c(g,".".concat(q),void 0,this.componentId)),d=sn(d,q)}}return d},a}(),f0=hi.createContext(void 0);f0.Consumer;var _o={};function ym(a,r,o){var c=Po(a),d=a,h=!Mo(a),y=r.attrs,E=y===void 0?ir:y,m=r.componentId,g=m===void 0?function(P,$){var ee=typeof P!="string"?"sc":gh(P);_o[ee]=(_o[ee]||0)+1;var W="".concat(ee,"-").concat(Xx(ar+ee+_o[ee]));return $?"".concat($,"-").concat(W):W}(r.displayName,r.parentComponentId):m,T=r.displayName,M=T===void 0?function(P){return Mo(P)?"styled.".concat(P):"Styled(".concat(Qx(P),")")}(a):T,_=r.displayName&&r.componentId?"".concat(gh(r.displayName),"-").concat(r.componentId):r.componentId||g,q=c&&d.attrs?d.attrs.concat(E).filter(Boolean):E,D=r.shouldForwardProp;if(c&&d.shouldForwardProp){var G=d.shouldForwardProp;if(r.shouldForwardProp){var Y=r.shouldForwardProp;D=function(P,$){return G(P,$)&&Y(P,$)}}else D=G}var O=new vm(o,_,c?d.componentStyle:void 0);function V(P,$){return function(ee,W,he){var ye=ee.attrs,Ke=ee.componentStyle,nt=ee.defaultProps,qe=ee.foldedComponentIds,Kt=ee.styledComponentId,Wt=ee.target,Ye=hi.useContext(f0),B=Eh(),Q=ee.shouldForwardProp||B.shouldForwardProp,I=Lx(W,Ye,nt)||ia,oe=function(se,le,ke){for(var me,Pe=ot(ot({},le),{className:void 0,theme:ke}),Ql=0;Ql<se.length;Ql+=1){var Jt=ua(me=se[Ql])?me(Pe):me;for(var bt in Jt)Pe[bt]=bt==="className"?sn(Pe[bt],Jt[bt]):bt==="style"?ot(ot({},Pe[bt]),Jt[bt]):Jt[bt]}return le.className&&(Pe.className=sn(Pe.className,le.className)),Pe}(ye,W,I),b=oe.as||Wt,L={};for(var k in oe)oe[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&oe.theme===I||(k==="forwardedAs"?L.as=oe.forwardedAs:Q&&!Q(k,b)||(L[k]=oe[k]));var Z=function(se,le){var ke=Eh(),me=se.generateAndInjectStyles(le,ke.styleSheet,ke.stylis);return me}(Ke,oe),F=sn(qe,Kt);return Z&&(F+=" "+Z),oe.className&&(F+=" "+oe.className),L[Mo(b)&&!Ph.has(b)?"class":"className"]=F,he&&(L.ref=he),S.createElement(b,L)}(X,P,$)}V.displayName=M;var X=hi.forwardRef(V);return X.attrs=q,X.componentStyle=O,X.displayName=M,X.shouldForwardProp=D,X.foldedComponentIds=c?sn(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=_,X.target=c?d.target:a,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=c?function($){for(var ee=[],W=1;W<arguments.length;W++)ee[W-1]=arguments[W];for(var he=0,ye=ee;he<ye.length;he++)ko($,ye[he],!0);return $}({},d.defaultProps,P):P}}),Io(X,function(){return".".concat(X.styledComponentId)}),h&&a0(X,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function Th(a,r){for(var o=[a[0]],c=0,d=r.length;c<d;c+=1)o.push(r[c],a[c+1]);return o}var Rh=function(a){return Object.assign(a,{isCss:!0})};function Qo(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(ua(a)||gi(a))return Rh(dn(Th(ir,Wu([a],r,!0))));var c=a;return r.length===0&&c.length===1&&typeof c[0]=="string"?dn(c):Rh(dn(Th(c,r)))}function Zo(a,r,o){if(o===void 0&&(o=ia),!r)throw mi(1,r);var c=function(d){for(var h=[],y=1;y<arguments.length;y++)h[y-1]=arguments[y];return a(r,o,Qo.apply(void 0,Wu([d],h,!1)))};return c.attrs=function(d){return Zo(a,r,ot(ot({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Zo(a,r,ot(ot({},o),d))},c}var d0=function(a){return Zo(ym,a)},x=d0;Ph.forEach(function(a){x[a]=d0(a)});var oi={},zh;function bm(){if(zh)return oi;zh=1,Object.defineProperty(oi,"__esModule",{value:!0}),oi.parse=y,oi.serialize=g;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,h=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function y(_,q){const D=new h,G=_.length;if(G<2)return D;const Y=q?.decode||T;let O=0;do{const V=_.indexOf("=",O);if(V===-1)break;const X=_.indexOf(";",O),P=X===-1?G:X;if(V>P){O=_.lastIndexOf(";",V-1)+1;continue}const $=E(_,O,V),ee=m(_,V,$),W=_.slice($,ee);if(D[W]===void 0){let he=E(_,V+1,P),ye=m(_,P,he);const Ke=Y(_.slice(he,ye));D[W]=Ke}O=P+1}while(O<G);return D}function E(_,q,D){do{const G=_.charCodeAt(q);if(G!==32&&G!==9)return q}while(++q<D);return D}function m(_,q,D){for(;q>D;){const G=_.charCodeAt(--q);if(G!==32&&G!==9)return q+1}return D}function g(_,q,D){const G=D?.encode||encodeURIComponent;if(!a.test(_))throw new TypeError(`argument name is invalid: ${_}`);const Y=G(q);if(!r.test(Y))throw new TypeError(`argument val is invalid: ${q}`);let O=_+"="+Y;if(!D)return O;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);O+="; Max-Age="+D.maxAge}if(D.domain){if(!o.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);O+="; Domain="+D.domain}if(D.path){if(!c.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);O+="; Path="+D.path}if(D.expires){if(!M(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);O+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(O+="; HttpOnly"),D.secure&&(O+="; Secure"),D.partitioned&&(O+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return O}function T(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function M(_){return d.call(_)==="[object Date]"}return oi}bm();var Ah="popstate";function Sm(a={}){function r(c,d){let{pathname:h,search:y,hash:E}=c.location;return Vo("",{pathname:h,search:y,hash:E},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:xi(d)}return Em(r,o,null,a)}function Me(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Zt(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function jm(){return Math.random().toString(36).substring(2,10)}function Ch(a,r){return{usr:a.state,key:a.key,idx:r}}function Vo(a,r,o=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?ca(r):r,state:o,key:r&&r.key||c||jm()}}function xi({pathname:a="/",search:r="",hash:o=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function ca(a){let r={};if(a){let o=a.indexOf("#");o>=0&&(r.hash=a.substring(o),a=a.substring(0,o));let c=a.indexOf("?");c>=0&&(r.search=a.substring(c),a=a.substring(0,c)),a&&(r.pathname=a)}return r}function Em(a,r,o,c={}){let{window:d=document.defaultView,v5Compat:h=!1}=c,y=d.history,E="POP",m=null,g=T();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function T(){return(y.state||{idx:null}).idx}function M(){E="POP";let Y=T(),O=Y==null?null:Y-g;g=Y,m&&m({action:E,location:G.location,delta:O})}function _(Y,O){E="PUSH";let V=Vo(G.location,Y,O);g=T()+1;let X=Ch(V,g),P=G.createHref(V);try{y.pushState(X,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;d.location.assign(P)}h&&m&&m({action:E,location:G.location,delta:1})}function q(Y,O){E="REPLACE";let V=Vo(G.location,Y,O);g=T();let X=Ch(V,g),P=G.createHref(V);y.replaceState(X,"",P),h&&m&&m({action:E,location:G.location,delta:0})}function D(Y){return wm(Y)}let G={get action(){return E},get location(){return a(d,y)},listen(Y){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(Ah,M),m=Y,()=>{d.removeEventListener(Ah,M),m=null}},createHref(Y){return r(d,Y)},createURL:D,encodeLocation(Y){let O=D(Y);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:_,replace:q,go(Y){return y.go(Y)}};return G}function wm(a,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Me(o,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:xi(a);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function p0(a,r,o="/"){return Tm(a,r,o,!1)}function Tm(a,r,o,c){let d=typeof r=="string"?ca(r):r,h=hl(d.pathname||"/",o);if(h==null)return null;let y=h0(a);Rm(y);let E=null;for(let m=0;E==null&&m<y.length;++m){let g=Hm(h);E=Nm(y[m],g,c)}return E}function h0(a,r=[],o=[],c=""){let d=(h,y,E)=>{let m={relativePath:E===void 0?h.path||"":E,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};m.relativePath.startsWith("/")&&(Me(m.relativePath.startsWith(c),`Absolute route path "${m.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(c.length));let g=pl([c,m.relativePath]),T=o.concat(m);h.children&&h.children.length>0&&(Me(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),h0(h.children,r,T,g)),!(h.path==null&&!h.index)&&r.push({path:g,score:Dm(g,h.index),routesMeta:T})};return a.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))d(h,y);else for(let E of g0(h.path))d(h,y,E)}),r}function g0(a){let r=a.split("/");if(r.length===0)return[];let[o,...c]=r,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let y=g0(c.join("/")),E=[];return E.push(...y.map(m=>m===""?h:[h,m].join("/"))),d&&E.push(...y),E.map(m=>a.startsWith("/")&&m===""?"/":m)}function Rm(a){a.sort((r,o)=>r.score!==o.score?o.score-r.score:Bm(r.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var zm=/^:[\w-]+$/,Am=3,Cm=2,Mm=1,_m=10,Om=-2,Mh=a=>a==="*";function Dm(a,r){let o=a.split("/"),c=o.length;return o.some(Mh)&&(c+=Om),r&&(c+=Cm),o.filter(d=>!Mh(d)).reduce((d,h)=>d+(zm.test(h)?Am:h===""?Mm:_m),c)}function Bm(a,r){return a.length===r.length&&a.slice(0,-1).every((c,d)=>c===r[d])?a[a.length-1]-r[r.length-1]:0}function Nm(a,r,o=!1){let{routesMeta:c}=a,d={},h="/",y=[];for(let E=0;E<c.length;++E){let m=c[E],g=E===c.length-1,T=h==="/"?r:r.slice(h.length)||"/",M=Iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},T),_=m.route;if(!M&&g&&o&&!c[c.length-1].route.index&&(M=Iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},T)),!M)return null;Object.assign(d,M.params),y.push({params:d,pathname:pl([h,M.pathname]),pathnameBase:Ym(pl([h,M.pathnameBase])),route:_}),M.pathnameBase!=="/"&&(h=pl([h,M.pathnameBase]))}return y}function Iu(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,c]=Um(a.path,a.caseSensitive,a.end),d=r.match(o);if(!d)return null;let h=d[0],y=h.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:c.reduce((g,{paramName:T,isOptional:M},_)=>{if(T==="*"){let D=E[_]||"";y=h.slice(0,h.length-D.length).replace(/(.)\/+$/,"$1")}const q=E[_];return M&&!q?g[T]=void 0:g[T]=(q||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:y,pattern:a}}function Um(a,r=!1,o=!0){Zt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,m)=>(c.push({paramName:E,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),c]}function Hm(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Zt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function hl(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,c=a.charAt(o);return c&&c!=="/"?null:a.slice(o)||"/"}function Gm(a,r="/"){let{pathname:o,search:c="",hash:d=""}=typeof a=="string"?ca(a):a;return{pathname:o?o.startsWith("/")?o:Lm(o,r):r,search:km(c),hash:Xm(d)}}function Lm(a,r){let o=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Oo(a,r,o,c){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qm(a){return a.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function x0(a){let r=qm(a);return r.map((o,c)=>c===r.length-1?o.pathname:o.pathnameBase)}function m0(a,r,o,c=!1){let d;typeof a=="string"?d=ca(a):(d={...a},Me(!d.pathname||!d.pathname.includes("?"),Oo("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Oo("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Oo("#","search","hash",d)));let h=a===""||d.pathname==="",y=h?"/":d.pathname,E;if(y==null)E=o;else{let M=r.length-1;if(!c&&y.startsWith("..")){let _=y.split("/");for(;_[0]==="..";)_.shift(),M-=1;d.pathname=_.join("/")}E=M>=0?r[M]:"/"}let m=Gm(d,E),g=y&&y!=="/"&&y.endsWith("/"),T=(h||y===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(g||T)&&(m.pathname+="/"),m}var pl=a=>a.join("/").replace(/\/\/+/g,"/"),Ym=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),km=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Xm=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Qm(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var v0=["POST","PUT","PATCH","DELETE"];new Set(v0);var Zm=["GET",...v0];new Set(Zm);var oa=S.createContext(null);oa.displayName="DataRouter";var ur=S.createContext(null);ur.displayName="DataRouterState";var y0=S.createContext({isTransitioning:!1});y0.displayName="ViewTransition";var Vm=S.createContext(new Map);Vm.displayName="Fetchers";var $m=S.createContext(null);$m.displayName="Await";var Vt=S.createContext(null);Vt.displayName="Navigation";var vi=S.createContext(null);vi.displayName="Location";var gl=S.createContext({outlet:null,matches:[],isDataRoute:!1});gl.displayName="Route";var es=S.createContext(null);es.displayName="RouteError";function Km(a,{relative:r}={}){Me(yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=S.useContext(Vt),{hash:d,pathname:h,search:y}=bi(a,{relative:r}),E=h;return o!=="/"&&(E=h==="/"?o:pl([o,h])),c.createHref({pathname:E,search:y,hash:d})}function yi(){return S.useContext(vi)!=null}function $t(){return Me(yi(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(vi).location}var b0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function S0(a){S.useContext(Vt).static||S.useLayoutEffect(a)}function Dt(){let{isDataRoute:a}=S.useContext(gl);return a?rv():Wm()}function Wm(){Me(yi(),"useNavigate() may be used only in the context of a <Router> component.");let a=S.useContext(oa),{basename:r,navigator:o}=S.useContext(Vt),{matches:c}=S.useContext(gl),{pathname:d}=$t(),h=JSON.stringify(x0(c)),y=S.useRef(!1);return S0(()=>{y.current=!0}),S.useCallback((m,g={})=>{if(Zt(y.current,b0),!y.current)return;if(typeof m=="number"){o.go(m);return}let T=m0(m,JSON.parse(h),d,g.relative==="path");a==null&&r!=="/"&&(T.pathname=T.pathname==="/"?r:pl([r,T.pathname])),(g.replace?o.replace:o.push)(T,g.state,g)},[r,o,h,d,a])}S.createContext(null);function bi(a,{relative:r}={}){let{matches:o}=S.useContext(gl),{pathname:c}=$t(),d=JSON.stringify(x0(o));return S.useMemo(()=>m0(a,JSON.parse(d),c,r==="path"),[a,d,c,r])}function Jm(a,r){return j0(a,r)}function j0(a,r,o,c){Me(yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=S.useContext(Vt),{matches:h}=S.useContext(gl),y=h[h.length-1],E=y?y.params:{},m=y?y.pathname:"/",g=y?y.pathnameBase:"/",T=y&&y.route;{let O=T&&T.path||"";E0(m,!T||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let M=$t(),_;if(r){let O=typeof r=="string"?ca(r):r;Me(g==="/"||O.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),_=O}else _=M;let q=_.pathname||"/",D=q;if(g!=="/"){let O=g.replace(/^\//,"").split("/");D="/"+q.replace(/^\//,"").split("/").slice(O.length).join("/")}let G=p0(a,{pathname:D});Zt(T||G!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Zt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=tv(G&&G.map(O=>Object.assign({},O,{params:Object.assign({},E,O.params),pathname:pl([g,d.encodeLocation?d.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:pl([g,d.encodeLocation?d.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),h,o,c);return r&&Y?S.createElement(vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},Y):Y}function Fm(){let a=uv(),r=Qm(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",a),y=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:h},"ErrorBoundary")," or"," ",S.createElement("code",{style:h},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},r),o?S.createElement("pre",{style:d},o):null,y)}var Pm=S.createElement(Fm,null),Im=class extends S.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){console.error("React Router caught the following error during render",a,r)}render(){return this.state.error!==void 0?S.createElement(gl.Provider,{value:this.props.routeContext},S.createElement(es.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ev({routeContext:a,match:r,children:o}){let c=S.useContext(oa);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(gl.Provider,{value:a},o)}function tv(a,r=[],o=null,c=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let d=a,h=o?.errors;if(h!=null){let m=d.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Me(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,E=-1;if(o)for(let m=0;m<d.length;m++){let g=d[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(E=m),g.route.id){let{loaderData:T,errors:M}=o,_=g.route.loader&&!T.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||_){y=!0,E>=0?d=d.slice(0,E+1):d=[d[0]];break}}}return d.reduceRight((m,g,T)=>{let M,_=!1,q=null,D=null;o&&(M=h&&g.route.id?h[g.route.id]:void 0,q=g.route.errorElement||Pm,y&&(E<0&&T===0?(E0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,D=null):E===T&&(_=!0,D=g.route.hydrateFallbackElement||null)));let G=r.concat(d.slice(0,T+1)),Y=()=>{let O;return M?O=q:_?O=D:g.route.Component?O=S.createElement(g.route.Component,null):g.route.element?O=g.route.element:O=m,S.createElement(ev,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:o!=null},children:O})};return o&&(g.route.ErrorBoundary||g.route.errorElement||T===0)?S.createElement(Im,{location:o.location,revalidation:o.revalidation,component:q,error:M,children:Y(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):Y()},null)}function ts(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(a){let r=S.useContext(oa);return Me(r,ts(a)),r}function nv(a){let r=S.useContext(ur);return Me(r,ts(a)),r}function av(a){let r=S.useContext(gl);return Me(r,ts(a)),r}function ls(a){let r=av(a),o=r.matches[r.matches.length-1];return Me(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function iv(){return ls("useRouteId")}function uv(){let a=S.useContext(es),r=nv("useRouteError"),o=ls("useRouteError");return a!==void 0?a:r.errors?.[o]}function rv(){let{router:a}=lv("useNavigate"),r=ls("useNavigate"),o=S.useRef(!1);return S0(()=>{o.current=!0}),S.useCallback(async(d,h={})=>{Zt(o.current,b0),o.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:r,...h}))},[a,r])}var _h={};function E0(a,r,o){!r&&!_h[a]&&(_h[a]=!0,Zt(!1,o))}S.memo(cv);function cv({routes:a,future:r,state:o}){return j0(a,void 0,o,r)}function Mt(a){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ov({basename:a="/",children:r=null,location:o,navigationType:c="POP",navigator:d,static:h=!1}){Me(!yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=a.replace(/^\/*/,"/"),E=S.useMemo(()=>({basename:y,navigator:d,static:h,future:{}}),[y,d,h]);typeof o=="string"&&(o=ca(o));let{pathname:m="/",search:g="",hash:T="",state:M=null,key:_="default"}=o,q=S.useMemo(()=>{let D=hl(m,y);return D==null?null:{location:{pathname:D,search:g,hash:T,state:M,key:_},navigationType:c}},[y,m,g,T,M,_,c]);return Zt(q!=null,`<Router basename="${y}"> is not able to match the URL "${m}${g}${T}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:S.createElement(Vt.Provider,{value:E},S.createElement(vi.Provider,{children:r,value:q}))}function sv({children:a,location:r}){return Jm($o(a),r)}function $o(a,r=[]){let o=[];return S.Children.forEach(a,(c,d)=>{if(!S.isValidElement(c))return;let h=[...r,d];if(c.type===S.Fragment){o.push.apply(o,$o(c.props.children,h));return}Me(c.type===Mt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=$o(c.props.children,h)),o.push(y)}),o}var $u="get",Ku="application/x-www-form-urlencoded";function rr(a){return a!=null&&typeof a.tagName=="string"}function fv(a){return rr(a)&&a.tagName.toLowerCase()==="button"}function dv(a){return rr(a)&&a.tagName.toLowerCase()==="form"}function pv(a){return rr(a)&&a.tagName.toLowerCase()==="input"}function hv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function gv(a,r){return a.button===0&&(!r||r==="_self")&&!hv(a)}var Gu=null;function xv(){if(Gu===null)try{new FormData(document.createElement("form"),0),Gu=!1}catch{Gu=!0}return Gu}var mv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Do(a){return a!=null&&!mv.has(a)?(Zt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`),null):a}function vv(a,r){let o,c,d,h,y;if(dv(a)){let E=a.getAttribute("action");c=E?hl(E,r):null,o=a.getAttribute("method")||$u,d=Do(a.getAttribute("enctype"))||Ku,h=new FormData(a)}else if(fv(a)||pv(a)&&(a.type==="submit"||a.type==="image")){let E=a.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||E.getAttribute("action");if(c=m?hl(m,r):null,o=a.getAttribute("formmethod")||E.getAttribute("method")||$u,d=Do(a.getAttribute("formenctype"))||Do(E.getAttribute("enctype"))||Ku,h=new FormData(E,a),!xv()){let{name:g,type:T,value:M}=a;if(T==="image"){let _=g?`${g}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else g&&h.append(g,M)}}else{if(rr(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=$u,c=null,d=Ku,y=a}return h&&d==="text/plain"&&(y=h,h=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:h,body:y}}function ns(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}async function yv(a,r){if(a.id in r)return r[a.id];try{let o=await import(a.module);return r[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Sv(a,r,o){let c=await Promise.all(a.map(async d=>{let h=r.routes[d.route.id];if(h){let y=await yv(h,o);return y.links?y.links():[]}return[]}));return Tv(c.flat(1).filter(bv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Oh(a,r,o,c,d,h){let y=(m,g)=>o[g]?m.route.id!==o[g].route.id:!0,E=(m,g)=>o[g].pathname!==m.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==m.params["*"];return h==="assets"?r.filter((m,g)=>y(m,g)||E(m,g)):h==="data"?r.filter((m,g)=>{let T=c.routes[m.route.id];if(!T||!T.hasLoader)return!1;if(y(m,g)||E(m,g))return!0;if(m.route.shouldRevalidate){let M=m.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function jv(a,r,{includeHydrateFallback:o}={}){return Ev(a.map(c=>{let d=r.routes[c.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Ev(a){return[...new Set(a)]}function wv(a){let r={},o=Object.keys(a).sort();for(let c of o)r[c]=a[c];return r}function Tv(a,r){let o=new Set;return new Set(r),a.reduce((c,d)=>{let h=JSON.stringify(wv(d));return o.has(h)||(o.add(h),c.push({key:h,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rv=new Set([100,101,204,205]);function zv(a,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname="_root.data":r&&hl(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function w0(){let a=S.useContext(oa);return ns(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Av(){let a=S.useContext(ur);return ns(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var as=S.createContext(void 0);as.displayName="FrameworkContext";function T0(){let a=S.useContext(as);return ns(a,"You must render this element inside a <HydratedRouter> element"),a}function Cv(a,r){let o=S.useContext(as),[c,d]=S.useState(!1),[h,y]=S.useState(!1),{onFocus:E,onBlur:m,onMouseEnter:g,onMouseLeave:T,onTouchStart:M}=r,_=S.useRef(null);S.useEffect(()=>{if(a==="render"&&y(!0),a==="viewport"){let G=O=>{O.forEach(V=>{y(V.isIntersecting)})},Y=new IntersectionObserver(G,{threshold:.5});return _.current&&Y.observe(_.current),()=>{Y.disconnect()}}},[a]),S.useEffect(()=>{if(c){let G=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(G)}}},[c]);let q=()=>{d(!0)},D=()=>{d(!1),y(!1)};return o?a!=="intent"?[h,_,{}]:[h,_,{onFocus:si(E,q),onBlur:si(m,D),onMouseEnter:si(g,q),onMouseLeave:si(T,D),onTouchStart:si(M,q)}]:[!1,_,{}]}function si(a,r){return o=>{a&&a(o),o.defaultPrevented||r(o)}}function Mv({page:a,...r}){let{router:o}=w0(),c=S.useMemo(()=>p0(o.routes,a,o.basename),[o.routes,a,o.basename]);return c?S.createElement(Ov,{page:a,matches:c,...r}):null}function _v(a){let{manifest:r,routeModules:o}=T0(),[c,d]=S.useState([]);return S.useEffect(()=>{let h=!1;return Sv(a,r,o).then(y=>{h||d(y)}),()=>{h=!0}},[a,r,o]),c}function Ov({page:a,matches:r,...o}){let c=$t(),{manifest:d,routeModules:h}=T0(),{basename:y}=w0(),{loaderData:E,matches:m}=Av(),g=S.useMemo(()=>Oh(a,r,m,d,c,"data"),[a,r,m,d,c]),T=S.useMemo(()=>Oh(a,r,m,d,c,"assets"),[a,r,m,d,c]),M=S.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let D=new Set,G=!1;if(r.forEach(O=>{let V=d.routes[O.route.id];!V||!V.hasLoader||(!g.some(X=>X.route.id===O.route.id)&&O.route.id in E&&h[O.route.id]?.shouldRevalidate||V.hasClientLoader?G=!0:D.add(O.route.id))}),D.size===0)return[];let Y=zv(a,y);return G&&D.size>0&&Y.searchParams.set("_routes",r.filter(O=>D.has(O.route.id)).map(O=>O.route.id).join(",")),[Y.pathname+Y.search]},[y,E,c,d,g,r,a,h]),_=S.useMemo(()=>jv(T,d),[T,d]),q=_v(T);return S.createElement(S.Fragment,null,M.map(D=>S.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...o})),_.map(D=>S.createElement("link",{key:D,rel:"modulepreload",href:D,...o})),q.map(({key:D,link:G})=>S.createElement("link",{key:D,...G})))}function Dv(...a){return r=>{a.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R0&&(window.__reactRouterVersion="7.6.3")}catch{}function Bv({basename:a,children:r,window:o}){let c=S.useRef();c.current==null&&(c.current=Sm({window:o,v5Compat:!0}));let d=c.current,[h,y]=S.useState({action:d.action,location:d.location}),E=S.useCallback(m=>{S.startTransition(()=>y(m))},[y]);return S.useLayoutEffect(()=>d.listen(E),[d,E]),S.createElement(ov,{basename:a,children:r,location:h.location,navigationType:h.action,navigator:d})}var z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A0=S.forwardRef(function({onClick:r,discover:o="render",prefetch:c="none",relative:d,reloadDocument:h,replace:y,state:E,target:m,to:g,preventScrollReset:T,viewTransition:M,..._},q){let{basename:D}=S.useContext(Vt),G=typeof g=="string"&&z0.test(g),Y,O=!1;if(typeof g=="string"&&G&&(Y=g,R0))try{let ye=new URL(window.location.href),Ke=g.startsWith("//")?new URL(ye.protocol+g):new URL(g),nt=hl(Ke.pathname,D);Ke.origin===ye.origin&&nt!=null?g=nt+Ke.search+Ke.hash:O=!0}catch{Zt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Km(g,{relative:d}),[X,P,$]=Cv(c,_),ee=Gv(g,{replace:y,state:E,target:m,preventScrollReset:T,relative:d,viewTransition:M});function W(ye){r&&r(ye),ye.defaultPrevented||ee(ye)}let he=S.createElement("a",{..._,...$,href:Y||V,onClick:O||h?r:W,ref:Dv(q,P),target:m,"data-discover":!G&&o==="render"?"true":void 0});return X&&!G?S.createElement(S.Fragment,null,he,S.createElement(Mv,{page:V})):he});A0.displayName="Link";var Nv=S.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:c="",end:d=!1,style:h,to:y,viewTransition:E,children:m,...g},T){let M=bi(y,{relative:g.relative}),_=$t(),q=S.useContext(ur),{navigator:D,basename:G}=S.useContext(Vt),Y=q!=null&&Xv(M)&&E===!0,O=D.encodeLocation?D.encodeLocation(M).pathname:M.pathname,V=_.pathname,X=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;o||(V=V.toLowerCase(),X=X?X.toLowerCase():null,O=O.toLowerCase()),X&&G&&(X=hl(X,G)||X);const P=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let $=V===O||!d&&V.startsWith(O)&&V.charAt(P)==="/",ee=X!=null&&(X===O||!d&&X.startsWith(O)&&X.charAt(O.length)==="/"),W={isActive:$,isPending:ee,isTransitioning:Y},he=$?r:void 0,ye;typeof c=="function"?ye=c(W):ye=[c,$?"active":null,ee?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let Ke=typeof h=="function"?h(W):h;return S.createElement(A0,{...g,"aria-current":he,className:ye,ref:T,style:Ke,to:y,viewTransition:E},typeof m=="function"?m(W):m)});Nv.displayName="NavLink";var Uv=S.forwardRef(({discover:a="render",fetcherKey:r,navigate:o,reloadDocument:c,replace:d,state:h,method:y=$u,action:E,onSubmit:m,relative:g,preventScrollReset:T,viewTransition:M,..._},q)=>{let D=Yv(),G=kv(E,{relative:g}),Y=y.toLowerCase()==="get"?"get":"post",O=typeof E=="string"&&z0.test(E),V=X=>{if(m&&m(X),X.defaultPrevented)return;X.preventDefault();let P=X.nativeEvent.submitter,$=P?.getAttribute("formmethod")||y;D(P||X.currentTarget,{fetcherKey:r,method:$,navigate:o,replace:d,state:h,relative:g,preventScrollReset:T,viewTransition:M})};return S.createElement("form",{ref:q,method:Y,action:G,onSubmit:c?m:V,..._,"data-discover":!O&&a==="render"?"true":void 0})});Uv.displayName="Form";function Hv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C0(a){let r=S.useContext(oa);return Me(r,Hv(a)),r}function Gv(a,{target:r,replace:o,state:c,preventScrollReset:d,relative:h,viewTransition:y}={}){let E=Dt(),m=$t(),g=bi(a,{relative:h});return S.useCallback(T=>{if(gv(T,r)){T.preventDefault();let M=o!==void 0?o:xi(m)===xi(g);E(a,{replace:M,state:c,preventScrollReset:d,relative:h,viewTransition:y})}},[m,E,g,o,c,r,a,d,h,y])}var Lv=0,qv=()=>`__${String(++Lv)}__`;function Yv(){let{router:a}=C0("useSubmit"),{basename:r}=S.useContext(Vt),o=iv();return S.useCallback(async(c,d={})=>{let{action:h,method:y,encType:E,formData:m,body:g}=vv(c,r);if(d.navigate===!1){let T=d.fetcherKey||qv();await a.fetch(T,o,d.action||h,{preventScrollReset:d.preventScrollReset,formData:m,body:g,formMethod:d.method||y,formEncType:d.encType||E,flushSync:d.flushSync})}else await a.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:m,body:g,formMethod:d.method||y,formEncType:d.encType||E,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,r,o])}function kv(a,{relative:r}={}){let{basename:o}=S.useContext(Vt),c=S.useContext(gl);Me(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),h={...bi(a||".",{relative:r})},y=$t();if(a==null){h.search=y.search;let E=new URLSearchParams(h.search),m=E.getAll("index");if(m.some(T=>T==="")){E.delete("index"),m.filter(M=>M).forEach(M=>E.append("index",M));let T=E.toString();h.search=T?`?${T}`:""}}return(!a||a===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:pl([o,h.pathname])),xi(h)}function Xv(a,r={}){let o=S.useContext(y0);Me(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=C0("useViewTransitionState"),d=bi(a,{relative:r.relative});if(!o.isTransitioning)return!1;let h=hl(o.currentLocation.pathname,c)||o.currentLocation.pathname,y=hl(o.nextLocation.pathname,c)||o.nextLocation.pathname;return Iu(d.pathname,y)!=null||Iu(d.pathname,h)!=null}[...Rv];const Qv=x.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60px;

  background-color: ${({bgColor:a})=>a||"var(--White)"};
  z-index: 101;
`,Dh=x.button`
  display: flex;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  margin-right: 12px;
  cursor: pointer;
`,Zv=x.h1`
  color: var(--Gray8);
  text-align: center;
  font-size: ${a=>a.hasBackButton?"18px":"20px"};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.45px;
  text-align: ${a=>a.hasBackButton?"center":"left"};
  flex: 1;
`;function Xl({title:a,showBackButton:r=!1,bgColor:o}){const c=Dt();return s.jsxs(Qv,{bgColor:o,children:[r&&s.jsx(Dh,{onClick:()=>c(-1),children:s.jsx("img",{src:"/capstonePrototype0/Icon/chevron-left.svg",alt:"back"})}),a&&s.jsx(Zv,{hasBackButton:r,children:a}),s.jsx(Dh,{children:s.jsx("img",{src:"",alt:""})})]})}const M0=x.div`
  display: flex;
  flex-direction: ${({mini:a})=>a?"row":"column"};
  align-items: ${({mini:a})=>a?"center":"flex-start"};
  flex-grow: 1;
  justify-content: space-between;

  gap: ${({mini:a})=>a?"6px":"8px"};
`,Vv=x(M0)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  gap: 8px;
`,Bh=x.div`
  font-size: ${({mini:a})=>"14px"};
  color: ${({mini:a})=>a?"var(--Gray4)":"var(--Gray6)"};
  font-weight: 400;
`,Nh=x.div`
  font-size: ${({mini:a})=>a?"14px":"22px"};
  color: ${({mini:a})=>a?"var(--White)":"var(--Gray8)"};
  font-weight: 600;
  letter-spacing: -0.55px;
`;function _t({label:a,data:r,reverse:o=!1,mini:c=!1}){return o?s.jsxs(Vv,{children:[s.jsx(Nh,{children:r}),s.jsx(Bh,{children:a})]}):s.jsxs(M0,{mini:c,children:[s.jsx(Bh,{mini:c,children:a}),s.jsx(Nh,{mini:c,children:r})]})}const Uh=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  gap: 16px;
`,Hh=x.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({reverse:a})=>a&&"padding: 20px 0px;"}
`,$v=x.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Kv=x.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -1.2px;
  color: var(--Gray8);

  & > p {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
    line-height: normal;
    color: var(--Gray7);
    margin-bottom: 5px;
  }
`,Gh=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
  color: var(--Gray6);
`,Wv=x.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;

  background-color: var(--Gray2);
`,Jv=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;function Si({distance:a,reverse:r=!1,simple:o=!1,thumnail:c=!1}){return r?s.jsxs(Uh,{children:[s.jsx(Gh,{children:s.jsx("p",{children:"나중에 드롭다운으로 설정"})}),s.jsxs(Hh,{reverse:r,children:[s.jsx(_t,{label:"시간",data:"00:12:34",reverse:!0}),s.jsx(_t,{label:"평균 페이스",data:"5'30'",reverse:!0}),s.jsx(_t,{label:"평균 심박수",data:"161bpm",reverse:!0})]})]}):s.jsxs(Uh,{children:[s.jsxs(Jv,{children:[s.jsxs(Gh,{children:[s.jsx("p",{children:"루트 거리"}),s.jsxs(Kv,{children:[a,s.jsx("p",{children:"km"})]})]}),c&&s.jsx(Wv,{})]}),s.jsxs(Hh,{children:[s.jsx(_t,{label:"시간",data:"00:12:34"}),s.jsx(_t,{label:"평균 페이스",data:"5'30'"}),s.jsx(_t,{label:"평균 심박수",data:"161bpm"})]}),!o&&s.jsxs($v,{children:[s.jsx(_t,{label:"칼로리",data:"231kcal"}),s.jsx(_t,{label:"케이던스",data:"124"}),s.jsx(_t,{label:"고도상승",data:"16m"})]})]})}const Fv=x.div`
  width: 402px;
  height: 50px;
  display: flex;
  padding-top: 21px;
  justify-content: space-between;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: ${({bgColor:a})=>a};
`,Pv=x.span`
  width: 140px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: var(--Gray);
`,Iv=x.img`
  width: 140px;
  height: auto;
`;function _0(){const a=$t(),[r,o]=S.useState("");S.useEffect(()=>{const y=()=>{const m=new Date;let g=m.getHours(),T=m.getMinutes(),M=g%12===0?12:g%12;o(`${M}:${T.toString().padStart(2,"0")}`)};y();const E=setInterval(y,1e4);return()=>clearInterval(E)},[]);const c=a.pathname,h=["/","/running","/running/record","/fieldHistory","/history/record"].includes(c)?"transparent":"#fff";return s.jsxs(Fv,{bgColor:h,children:[s.jsx(Pv,{children:r}),s.jsx(Iv,{src:"/capstonePrototype0/Icon/StatusIcon.svg",alt:"status icons"})]})}const ey=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: var(--Gray7);
  }
`,ty=x.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    color: ${({selected:a})=>a?"var(--Gray7)":"var(--Gray4)"};
  }
`,ly=x.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: ${({selected:a})=>a?"var(--Gray7)":"var(--Gray4)"};
`;function Lu({menu:a,selected:r,icon:o,onClick:c}){const d=o;return s.jsxs(ey,{onClick:c,children:[s.jsx(ty,{selected:r,children:s.jsx(d,{})}),s.jsx(ly,{selected:r,children:a})]})}const ny=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("g",{clipPath:"url(#clip0_2698_10750)"},S.createElement("path",{d:"M12.9823 2.76376C12.631 2.4905 12.4553 2.35388 12.2613 2.30136C12.0902 2.25502 11.9098 2.25502 11.7387 2.30136C11.5447 2.35388 11.369 2.4905 11.0177 2.76375L4.23539 8.03888C3.78202 8.3915 3.55534 8.56781 3.39203 8.78861C3.24737 8.9842 3.1396 9.20454 3.07403 9.43881C3 9.70327 3 9.99045 3 10.5648V17.7997C3 18.9198 3 19.4799 3.21799 19.9077C3.40973 20.284 3.71569 20.59 4.09202 20.7818C4.51984 20.9997 5.0799 20.9997 6.2 20.9997H8.2C8.48003 20.9997 8.62004 20.9997 8.727 20.9452C8.82108 20.8973 8.89757 20.8208 8.9455 20.7267C9 20.6198 9 20.4798 9 20.1997V13.5997C9 13.0397 9 12.7597 9.10899 12.5457C9.20487 12.3576 9.35785 12.2046 9.54601 12.1087C9.75992 11.9997 10.0399 11.9997 10.6 11.9997H13.4C13.9601 11.9997 14.2401 11.9997 14.454 12.1087C14.6422 12.2046 14.7951 12.3576 14.891 12.5457C15 12.7597 15 13.0397 15 13.5997V20.1997C15 20.4798 15 20.6198 15.0545 20.7267C15.1024 20.8208 15.1789 20.8973 15.273 20.9452C15.38 20.9997 15.52 20.9997 15.8 20.9997H17.8C18.9201 20.9997 19.4802 20.9997 19.908 20.7818C20.2843 20.59 20.5903 20.284 20.782 19.9077C21 19.4799 21 18.9198 21 17.7997V10.5648C21 9.99045 21 9.70327 20.926 9.43881C20.8604 9.20454 20.7526 8.9842 20.608 8.78861C20.4447 8.56781 20.218 8.3915 19.7646 8.03888L12.9823 2.76376Z",fill:"currentColor"})),S.createElement("defs",null,S.createElement("clipPath",{id:"clip0_2698_10750"},S.createElement("rect",{width:24,height:24,fill:"white"})))),ay=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("g",{filter:"url(#filter0_n_2698_10800)"},S.createElement("path",{d:"M18.7842 7.8623L15.4746 13.2412L17.957 17.3799V23.1729H18.7842V24H14.6465V18.207L12.5781 14.8965H11.75L8.85352 19.4482H2.23242V20.2764H1.40527V16.1387H6.78418L11.3359 8.27637H6.21191V4.96582H14.6465L18.7842 7.8623ZM18.7842 0C20.6124 0 22.0947 1.48229 22.0947 3.31055C22.0946 5.13871 20.6124 6.62109 18.7842 6.62109C16.9561 6.62093 15.4747 5.13861 15.4746 3.31055C15.4746 1.4824 16.9561 0.000164017 18.7842 0Z",fill:"currentColor"})),S.createElement("defs",null,S.createElement("filter",{id:"filter0_n_2698_10800",x:1.40527,y:0,width:20.6895,height:24,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},S.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),S.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),S.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"12.083333015441895 12.083333015441895",stitchTiles:"stitch",numOctaves:3,result:"noise",seed:9084}),S.createElement("feComponentTransfer",{in:"noise",result:"coloredNoise1"},S.createElement("feFuncR",{type:"linear",slope:2,intercept:-.5}),S.createElement("feFuncG",{type:"linear",slope:2,intercept:-.5}),S.createElement("feFuncB",{type:"linear",slope:2,intercept:-.5}),S.createElement("feFuncA",{type:"discrete",tableValues:"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "})),S.createElement("feComposite",{operator:"in",in2:"shape",in:"coloredNoise1",result:"noise1Clipped"}),S.createElement("feComponentTransfer",{in:"noise1Clipped",result:"color1"},S.createElement("feFuncA",{type:"table",tableValues:"0 0.15"})),S.createElement("feMerge",{result:"effect1_noise_2698_10800"},S.createElement("feMergeNode",{in:"shape"}),S.createElement("feMergeNode",{in:"color1"}))))),iy=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("g",{clipPath:"url(#clip0_2698_10736)"},S.createElement("rect",{x:9,y:3,width:6,height:19,rx:1,fill:"currentColor"}),S.createElement("rect",{x:2,y:9,width:6,height:13,rx:1,fill:"currentColor"}),S.createElement("rect",{x:16,y:13,width:6,height:9,rx:1,fill:"currentColor"})),S.createElement("defs",null,S.createElement("clipPath",{id:"clip0_2698_10736"},S.createElement("rect",{width:24,height:24,fill:"white"})))),uy=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("g",{clipPath:"url(#clip0_2698_10710)"},S.createElement("path",{d:"M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z",fill:"currentColor",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),S.createElement("path",{d:"M12 15C9.38288 15 6.94639 15.8547 4.90659 17.3254C4.43358 17.6664 4.19708 17.837 3.84564 18.2877C3.59724 18.6062 3.27317 19.2394 3.16005 19.6272C3 20.1758 3 20.631 3 21.5413V22H21V21.5413C21 20.631 21 20.1758 20.84 19.6272C20.7268 19.2394 20.4028 18.6062 20.1544 18.2877C19.8029 17.837 19.5664 17.6664 19.0934 17.3254C17.0536 15.8547 14.6171 15 12 15Z",fill:"currentColor",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),S.createElement("defs",null,S.createElement("clipPath",{id:"clip0_2698_10710"},S.createElement("rect",{width:24,height:24,fill:"currentColor"})))),ry=x.div`
  /* width: 100%; */
  display: flex;
  padding: 12px 4px 36px 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #fff 100%);
  backdrop-filter: blur(10px);
  width: 402px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.06); */
  border-top: 1px solid #ebeced;
  z-index: 1000;
`;function cy(){const a=Dt(),[r,o]=S.useState("홈"),c=(d,h)=>{o(d),a(h)};return s.jsxs(ry,{children:[s.jsx(Lu,{menu:"홈",selected:r==="홈",onClick:()=>c("홈","/"),icon:ny}),s.jsx(Lu,{menu:"러닝",selected:r==="러닝",onClick:()=>c("러닝","/running"),icon:ay}),s.jsx(Lu,{menu:"기록",selected:r==="기록",onClick:()=>c("기록","/history"),icon:iy}),s.jsx(Lu,{menu:"마이",selected:r==="마이",onClick:()=>c("마이","/mypage"),icon:uy})]})}const oy=x.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 24px;
`,sy=x.div`
  padding: 14px 12px;
  border-radius: 8px;
  background-color: var(--Gray1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: var(--Gray7);
  }
`;function fy(){const a=Dt();return s.jsxs(oy,{children:[s.jsx(Si,{distance:"2.24",simple:!0,thumnail:!0}),s.jsxs(sy,{onClick:()=>a("/history/record"),children:[s.jsx("p",{children:"필드 히스토리 보러가기"}),s.jsx("img",{src:"/capstonePrototype0/Icon/chevron-right.svg",alt:"다음"})]})]})}const dy=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: ${({$width:a})=>a||"100%"};
  padding: ${({size:a})=>a==="large"?"16px 18px":"12px 18px"};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: ${({type:a})=>a==="disabled"?"not-allowed":"pointer"};
  border: none;

  background-color: ${({type:a})=>{switch(a){case"default":return"var(--Primary)";case"secondary":return"var(--Gray1)";case"disabled":return"var(--Gray1)";default:return"var(--Primary)"}}};

  color: ${({type:a})=>{switch(a){case"default":return"var(--White)";case"secondary":return"var(--Gray7)";case"disabled":return"var(--Gray4)";default:return"var(--White)"}}};
`,py=x.span`
  width: 16px;
  height: 16px;
`,hy=x.div`
  display: flex;
  font-weight: 700;
  color: var(--Gray4);
`;function kl({type:a="default",size:r="large",icon:o=!1,text:c="Button",unitToggle:d=!1,unitText:h="/ 20",unit:y="개",width:E="100%",onClick:m}){return s.jsxs(dy,{type:a,size:r,$width:E,onClick:m,children:[o&&s.jsx(py,{children:s.jsx("img",{src:"/capstonePrototype0/Icon/disabled-check.svg",alt:""})}),c,d&&s.jsxs(hy,{children:[s.jsx("p",{children:h}),s.jsx("p",{children:y})]})]})}const gy=x.div`
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  gap: 20px;
`,xy=x.div`
  font-size: 20px;
  color: var(--Gray8);
  font-weight: 700;
  letter-spacing: -0.5px;
  padding-bottom: 16px;
`,my=x.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Lh=x.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`,qu=x.div`
  padding: 4px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  & > p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--Gray8);
  }
`;function vy({onClose:a}){const r="/capstonePrototype0/";return s.jsxs(gy,{children:[s.jsx(xy,{children:"목표 설정"}),s.jsxs(my,{children:[s.jsxs(Lh,{children:[s.jsxs(qu,{children:[s.jsx("img",{src:r+"Icon/distance.svg",alt:"거리 설정 아이콘"}),s.jsx("p",{children:"거리로 설정"})]}),s.jsxs(qu,{children:[s.jsx("p",{children:"10km"}),s.jsx("img",{src:r+"Icon/chevron-right.svg",alt:"다음"})]})]}),s.jsxs(Lh,{children:[s.jsxs(qu,{children:[s.jsx("img",{src:r+"Icon/time.svg",alt:"시간 설정 아이콘"}),s.jsx("p",{children:"시간으로 설정"})]}),s.jsxs(qu,{children:[s.jsx("p",{children:"1시간"}),s.jsx("img",{src:r+"Icon/chevron-right.svg",alt:"다음"})]})]})]}),s.jsx(kl,{type:"default",size:"large",text:"닫기",onClick:a})]})}const yy=x.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 28px;
`;x.div`
  padding: 14px 12px;
  border-radius: 8px;
  background-color: var(--Gray1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: var(--Gray7);
  }
`;const by=x.div`
  display: flex;
  gap: 10px;

  height: fit-content;

  & > :nth-child(1) {
    flex-shrink: 0;
  }
`;function Sy({setIsRunning:a,pathData:r,setIsPaused:o}){const c=Dt(),[d,h]=S.useState(!1),y=()=>{h(!0),o(!0)},E=()=>{h(!1),o(!1)};return s.jsxs(yy,{children:[s.jsx(Si,{distance:"2.24",simple:!0}),d?s.jsxs(by,{children:[s.jsx(kl,{width:"100px",type:"secondary",size:"large",text:"러닝 종료",onClick:()=>{a(!1),console.log("넘어가는 pathData:",r),c("/running/record",{state:{path:r}})}}),s.jsx(kl,{type:"default",size:"large",text:"다시 시작",onClick:E})]}):s.jsx(kl,{type:"default",size:"large",text:"일시정지",onClick:y})]})}const jy=x.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 18px;
  border-radius: 100px;
  flex-shrink: 0;

  font-size: 16px;
  font-weight: ${({selected:a})=>a?"500":"400"};
  line-height: 150%;
  letter-spacing: -0.4px;

  cursor: pointer;

  /* background-color: ${({selected:a})=>a?"var(--Gray8)":"var(--Gray1)"}; */
  background-color: ${({selected:a,type:r})=>{if(a)return"var(--Gray8)";if(r==="default")return"var(--White)";if(r==="secondary")return"var(--Gray1)"}};
  color: ${({selected:a})=>a?"var(--White)":"var(--Gray8)"};
`;function di({text:a,type:r="default",selected:o=!1,onClick:c}){return s.jsx(jy,{selected:o,onClick:c,type:r,children:a})}const Ey=x.div`
  width: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;function is({chips:a,type:r}){const[o,c]=S.useState(a[0]);return s.jsx(Ey,{children:a.map((d,h)=>s.jsx(di,{text:d,selected:o===d,type:r,onClick:()=>c(d)},h))})}const wy=x.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 8px;

  cursor: pointer;
`,Ty=x.div`
  width: 66px;
  height: 66px;
  background-color: var(--Gray2);
`,Ry=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
  color: #37465e;
`,zy=x.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #37465e;

  color: var(--Gray1);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;function Ay({data:a}){return s.jsxs(wy,{children:[s.jsx(Ty,{}),s.jsxs(Ry,{children:[s.jsx(zy,{children:a.level}),s.jsx("p",{children:a.name})]})]})}const Cy=x.div`
  display: grid;
  width: 100%;
  height: 240px;
  row-gap: 10px;
  column-gap: 10px;
  flex-shrink: 0;
  grid-auto-rows: 114px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;function My({collectionData:a}){const[r,o]=S.useState(null);return s.jsx(Cy,{children:a?.map((c,d)=>s.jsx(Ay,{data:c,selected:r===d,onClick:()=>o(d)},d))})}const _y=x.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 16px;
`;x.div`
  padding: 14px 12px;
  border-radius: 8px;
  background-color: var(--Gray1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: var(--Gray7);
  }
`;function Oy(){const a=[{level:"Lv1",name:"비둘기"},{level:"Lv2",name:"비둘기"},{level:"Lv3",name:"비둘기"},{level:"Lv1",name:"오리"},{level:"Lv2",name:"오리"},{level:"Lv3",name:"오리"},{level:"Lv1",name:"참새"},{level:"Lv2",name:"참새"},{level:"Lv3",name:"참새"},{level:"Lv1",name:"까치"},{level:"Lv2",name:"까치"},{level:"Lv3",name:"까치"}];return s.jsxs(_y,{children:[s.jsx(is,{chips:["나무","풀","꽃","동물","소품","효과"]}),s.jsx(My,{collectionData:a})]})}const Dy=x.div`
  width: 100%;
  background-color: var(--White);
  border-radius: 24px 24px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: ${({open:a})=>a?"0px":"-400px"};
  left: 0;
  gap: 16px;

  z-index: ${({step:a})=>a==="ing"?"1002":"999"};

  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.08);

  padding: ${({step:a})=>a==="before"||a==="collection"?"12px 24px 104px 24px":"12px 24px 40px 24px"};

  transition: bottom 0.4s ease;
`,By=x.div`
  width: 60px;
  height: 6px;
  background-color: var(--Gray2);
  border-radius: 100px;

  cursor: pointer;
`,Ny=x.div`
  width: 100%;
  opacity: ${({visible:a})=>a?1:0};
  transition: opacity 0.3s ease;
`;function us({step:a="before",type:r="summary",open:o,onClose:c,onSelectCollection:d,setIsRunning:h,setIsPaused:y,pathData:E}){const m=S.useRef(null),[g,T]=S.useState(!1);return S.useEffect(()=>{if(o){const M=setTimeout(()=>T(!0),50);return()=>clearTimeout(M)}else T(!1)},[o,a,r]),S.useEffect(()=>{if(a==="ing")return;function M(_){m.current&&!m.current.contains(_.target)&&c?.()}return o?document.addEventListener("mousedown",M):document.removeEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[o,c]),s.jsxs(Dy,{step:a,open:o,ref:m,children:[s.jsx(By,{onClick:c}),s.jsxs(Ny,{visible:g,children:[a==="before"&&r==="summary"&&s.jsx(fy,{}),a==="before"&&r==="goal"&&s.jsx(vy,{onClose:c}),a==="ing"&&r==="running"&&s.jsx(Sy,{setIsRunning:h,setIsPaused:y,pathData:E}),a==="collection"&&s.jsx(Oy,{onSelectCollection:d})]})]})}const Uy=x.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  gap: 16px;
  padding: 14px;

  border-radius: 6px;
  background-color: var(--Gray9);
  box-shadow: 0px 0px 16px 0px rgba(12, 13, 45, 0.06);
`,Hy=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gy=x.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & > p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.35px;

    color: var(--White);
  }

  & > img {
    width: 16px;
    height: 16px;
  }
`;function O0({dayData:a,distanceData:r,onClick:o}){return s.jsxs(Uy,{onClick:o,children:[s.jsxs(Gy,{children:[s.jsx("p",{children:a}),s.jsx("img",{src:"/capstonePrototype0/Icon/chevron-right-white.svg",alt:""})]}),s.jsxs(Hy,{children:[s.jsx(_t,{label:"거리",data:r,mini:!0}),s.jsx(_t,{label:"시간",data:"12:32",mini:!0}),s.jsx(_t,{label:"평균 페이스",data:"5'30'",mini:!0})]})]})}const Ly=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: var(--White);
  gap: 10px;

  border-radius: 14px;
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
`,qy=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`,Yy=x.div`
  width: 64px;
  height: 64px;
  background-color: var(--Gray3);
  border-radius: 4px;
`,ky=x.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.35px;
  color: var(--Gray5);

  display: flex;
  flex-direction: column;
  gap: 4px;

  & > p1 {
    color: var(--Gray8);
    font-size: 16px;
    font-weight: 600;
  }
`;function ea({end:a}){return s.jsxs(Ly,{children:[s.jsxs(qy,{children:[s.jsx(Yy,{}),s.jsxs(ky,{children:[s.jsx("p",{children:"누적 거리"}),s.jsx("p1",{children:"누적 러닝거리 20km를 달성하세요."})]})]}),a?s.jsx(kl,{type:"disabled",size:"small",text:"✔︎ 수령 완료"}):s.jsx(kl,{type:"default",size:"small",text:"보상 받기"})]})}const Xy=x.div`
  width: 100%;
  height: ${({height:a})=>a||"14px"};
  background: linear-gradient(90deg, #eff1f3 0%, #f0f5fb 100%);
  border-radius: var(--MaxRadius);
  overflow: hidden;
`,Qy=x.div`
  width: ${({widthAnim:a})=>`${a}%`};
  height: 100%;
  background: linear-gradient(90deg, #9ab7ff 0%, #976eff 100%);
  border-radius: var(--MaxRadius);
  box-shadow: 0.8px 0.8px 1px 0px rgba(255, 255, 255, 0.36) inset,
    -1px -1px 1px 0px rgba(38, 61, 96, 0.1) inset;

  transition: all 0.6s ease-in-out;
`;function rs({value:a=0,height:r="14px"}){const[o,c]=S.useState(0);return S.useEffect(()=>{const d=setTimeout(()=>{c(a)},500);return()=>clearTimeout(d)},[a]),s.jsx(Xy,{height:r,children:s.jsx(Qy,{widthAnim:o})})}const Zy=x.div`
  width: 330px;
  height: 193px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 54px 20px 22px 20px;
  border-radius: 16px;
  border: 1px solid #fff;
  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.8) 4.14%,
    rgba(255, 255, 255, 0.4) 95.86%
  );
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  z-index: 998;
`,Vy=x.div`
  display: flex;
  flex-direction: column;
`,$y=x.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  font-size: 20px;
  font-weight: 700;
  color: var(--Gray9);
`,Ky=x.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #333;
  color: var(--Gray1);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
`,Wy=x.div`
  color: var(--Gray7);
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  white-space: pre-line;
`,Jy=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  margin-bottom: 18px;
`,Fy=x.div`
  display: flex;
  color: var(--Primary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.35px;

  & > p {
    color: var(--Gray6);
    font-weight: 400;
  }
`,Py=x.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -52px;
  left: 16px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;function Iy({data:a}){if(!a)return null;const r="/capstonePrototype0/",o=a.current/a.total*100;return s.jsx(Zy,{children:s.jsxs(Vy,{children:[s.jsx(Py,{children:s.jsx("img",{src:r+`Collection/${a.img}${a.level}.png`,alt:`${a.name} 레벨 ${a.level} 썸네일`})}),s.jsxs($y,{children:[a.name,s.jsxs(Ky,{children:["Lv",a.level]})]}),s.jsxs(Jy,{children:[s.jsxs(Fy,{children:[s.jsx("span",{children:a.current}),s.jsxs("p",{children:["/",a.total]})]}),s.jsx(rs,{value:o,height:"12px"})]}),s.jsx(Wy,{children:a.desc})]})})}const eb=x.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-y: visible;

  gap: 20px;
  padding: 92px 36px 0px 36px;

  & > * {
    scroll-snap-align: center;
    flex-shrink: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;function D0(){const a=[{name:"벚꽃나무",level:2,current:52,total:100,desc:`벚꽃나무가 성장 중이에요.
“봄날처럼 부드럽게”`,img:"sakura"},{name:"소나무",level:1,current:30,total:100,desc:`소나무가 막 심어졌어요.
“푸르게 자라나는 중”`,img:"pinetree"},{name:"비둘기",level:3,current:78,total:100,desc:`귀여운 비둘기가 서성이네요.
“멍청하게 생겼어”`,img:"googoo"},{name:"오리",level:2,current:12,total:100,desc:`개킹받는 오리에요.
“개귀엽네”`,img:"duck"}];return s.jsx(eb,{children:a.map((r,o)=>s.jsx(Iy,{data:r},o))})}const tb=x.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 14px 14px 14px;
  border-radius: 10px;

  border: 1px solid var(--White);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
  backdrop-filter: blur(8px);

  cursor: pointer;

  & > img {
    width: 18px;
  }
`,lb=x.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--Gray8);
  font-size: 18px;
  font-weight: 700;
`,nb=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  & > p {
    color: var(--Gray7);
    font-size: 16px;
    font-weight: 400;
  }
`,ab=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  & > p {
    color: var(--Gray7);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
`,ib=x.div`
  font-family: Paperlogy;
  color: var(--Gray9);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
`;function B0(){const a=Dt();return s.jsxs(tb,{children:[s.jsxs(nb,{children:[s.jsxs(lb,{children:[s.jsx("img",{src:"/capstonePrototype0/Illust/warning.svg",alt:"경고"}),s.jsx("p",{children:"나무가 시들고 있어요!"})]}),s.jsx("p",{children:"풀에게 줄 물과 비료가 필요해요."})]}),s.jsxs(ab,{children:[s.jsx("p",{children:"시들기까지 남은 시간"}),s.jsx(ib,{children:"05:22:13"})]}),s.jsx(kl,{size:"small",text:"뛰러 가기",onClick:()=>a("/running")})]})}const ub=x.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background: #fff2f2;
  border: 1px solid var(--Warning);

  cursor: pointer;

  & > img {
    width: 18px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;function N0({onClick:a}){return s.jsx(ub,{onClick:a,children:s.jsx("img",{src:"/capstonePrototype0/Illust/warning.svg",alt:"경고"})})}const rb=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  width: fit-content;

  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.71);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);

  /* hover 감지 */
  &:hover {
    cursor: pointer;
  }

  transition: all 0.5s ease-in-out;
  z-index: 1000;
`,cb=x.div`
  display: flex;
  align-items: center;
`,ob=x.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border: 1px solid var(--White);
  overflow: hidden;

  &:not(:last-child) {
    margin-right: ${({isHovered:a})=>a?"0px":"-8px"};
  }

  & > img {
    width: 24px;
    height: 24px;
  }
`,sb=x.div`
  color: var(--Primary);
  font-family: Paperlogy;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
`;function U0(){const[a,r]=S.useState(!1),o=Dt(),c="/capstonePrototype0/",d=[{rank:1,name:"구예진",distance:99.9},{rank:2,name:"박재민",distance:24.3},{rank:3,name:"이영재",distance:18.7},{rank:4,name:"김소리",distance:10.2},{rank:5,name:"김한주",distance:6.6},{rank:6,name:"나나나",distance:6.6}],h=a?6:3,y=d.slice(0,h),E=d.length-h,m=()=>{o("/fieldHistory")};return s.jsxs(rb,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:m,children:[s.jsx(cb,{children:y.map(g=>s.jsx(ob,{isHovered:a,children:s.jsx("img",{src:c+`Profile/${g.name}.png`,alt:g.name})},g.name))}),a&&s.jsx("img",{src:c+"Icon/chevron-right.svg",alt:"더보기"}),!a&&E>0&&s.jsxs(sb,{children:["+",E]})]})}const fb=x.div`
  width: 402px;
  height: 874px;

  background-color: #f3f3f3;
  position: relative;
`;function db(){return s.jsxs(s.Fragment,{children:[s.jsx(_0,{}),s.jsxs(fb,{children:[s.jsx(O0,{}),s.jsx(di,{text:"디폴트칩"}),s.jsx(di,{text:"세컨더리칩",type:"secondary"}),s.jsx(di,{text:"셀렉티드칩",selected:!0}),s.jsx(di,{text:"셀렉티드칩",type:"secondary",selected:!0}),s.jsx(is,{chips:["1번칩","2번칩","3번칩","4번칩","5번칩","6번칩","7번칩"]}),s.jsx(N0,{}),s.jsx(B0,{}),s.jsx(U0,{}),s.jsx(ea,{}),s.jsx(ea,{end:!0}),s.jsx(D0,{}),s.jsx(us,{step:"collection"})]})]})}const pb=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  height: fit-content;
  position: relative;

  ${({$type:a})=>a==="default"?Qo`
          cursor: pointer;
          padding: 4px 18px 4px 4px;
          border-top: 1px solid var(--White);
          border-left: 1px solid var(--White);
          border-radius: var(--MaxRadius);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: -4.5px -4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
            4.5px 4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
            3px 4.5px 1.5px -3px rgba(179, 179, 179, 0.2) inset,
            -3px -4.5px 1.5px -3px #b3b3b3 inset,
            0px 0px 33px 0px rgba(242, 242, 242, 0.5) inset;
          backdrop-filter: blur(18px);
        `:Qo`
          pointer-events: none;
          padding: 0;
        `}
`,hb=x.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: ${({$type:a})=>a==="default"?"#ffffff66":"#474D71"};
  border-radius: var(--MaxRadius);
`,gb=x.div`
  display: flex;
  flex-direction: column;
`,xb=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,mb=x.span`
  color: var(--Gray-Gray8);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.45px;
`,vb=x.span`
  width: 28px;
  height: 28px;
`,yb=x.div`
  display: flex;
  align-items: center;
`,bb=x.span`
  display: flex;
  width: 16px;
  height: 16px;
`,Sb=x.span`
  font-size: ${({$type:a})=>a==="default"?"14px":"16px"};
  line-height: ${({$type:a})=>a==="default"?"14px":"16px"};
  letter-spacing: ${({$type:a})=>a==="default"?"-0.35px":"-0.4px"};
  font-weight: 500;
  color: var(--Gray8);
`;function H0({type:a="default"}){const r=Dt(),o=()=>{a==="default"&&r("/crew")};return s.jsxs(pb,{onClick:o,$type:a,children:[s.jsx(hb,{$type:a,children:s.jsx("img",{src:"/capstonePrototype0/crewimg.png",alt:""})}),s.jsxs(gb,{children:[s.jsxs(xb,{children:[s.jsx(mb,{children:"한국공대"}),s.jsx(vb,{children:s.jsx("img",{src:"/capstonePrototype0/LevelBadge/Lv8.svg",alt:"레벨뱃지"})})]}),s.jsxs(yb,{children:[s.jsx(bb,{children:s.jsx("img",{src:"/capstonePrototype0/Icon/crewnumprofile.svg",alt:"멤버 수"})}),s.jsx(Sb,{$type:a,children:"13/20"})]})]})]})}const jb=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`,Eb=x.div`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-top: 1px solid var(--White);
  border-left: 1px solid var(--White);
  border-radius: 12px;

  box-shadow: -4.5px -4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
    4.5px 4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
    3px 4.5px 1.5px -3px rgba(179, 179, 179, 0.2) inset,
    -3px -4.5px 1.5px -3px #b3b3b3 inset,
    0px 0px 33px 0px rgba(242, 242, 242, 0.5) inset;
  backdrop-filter: blur(18px);
  cursor: pointer;
`,wb=x.div`
  position: absolute;
  inset: 0;
  background-color: #1d1d1d;
  opacity: 0.1;
  mix-blend-mode: color-burn;
  border-radius: inherit;
  pointer-events: none;
  z-index: 0;
`,Tb=x.div`
  position: absolute;
  inset: 0;
  background-color: #ffffff;
  opacity: 0.1;
  mix-blend-mode: normal;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
`,Rb=x.img`
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 3;
`,zb=x.span`
  color: #293b53;
  text-align: center;
  font-family: Paperlogy;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  position: relative;
  z-index: 3;
`,Ab=[{id:"map",label:"맵",icon:"/Illust/map.svg"},{id:"collection",label:"도감",icon:"/Illust/collection.svg"},{id:"mission",label:"미션",icon:"/Illust/mission.svg"}];function Cb({onClick:a}){const r=Dt(),o="/capstonePrototype0/";return s.jsx(jb,{children:Ab.map(c=>{const d=c.icon.startsWith("/")?c.icon.slice(1):c.icon;return s.jsxs(Eb,{onClick:()=>{c.id==="mission"?r("/mission"):c.id==="collection"&&a?.()},children:[s.jsx(wb,{}),s.jsx(Tb,{}),s.jsx(Rb,{src:o+d,alt:c.label}),s.jsx(zb,{children:c.label})]},c.id)})})}const Mb=()=>{const a=S.useRef(null);return S.useEffect(()=>{const r=document.createElement("script");return r.src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js",r.onload=()=>{new window.Sketchfab("1.12.1",a.current).init("8bb6749a0a214cbb952b6e3a185d7765",{autostart:1,preload:1,ui_controls:0,ui_infos:0,ui_hint:0,ui_watermark:0,success:function(d){d.start(),d.addEventListener("viewerready",function(){console.log("✅ Sketchfab Viewer 준비 완료!")})},error:function(){console.error("❌ Sketchfab API 초기화 실패")}})},document.body.appendChild(r),()=>{document.body.removeChild(r)}},[]),s.jsx("div",{children:s.jsx("iframe",{id:"api-frame",ref:a,title:"Sketchfab Viewer",allow:"autoplay; fullscreen; xr-spatial-tracking",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",style:{width:"402px",height:"874px",border:"none",position:"relative",zIndex:1}})})},_b=x.div`
  width: 184px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 10px 10px 10px;
  border-radius: 10px;
  overflow: visible;

  border: 1px solid #fff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #fff 100%);
  box-shadow: -2px -2px 1px -2px var(--Gray4) inset;
  backdrop-filter: blur(8.850000381469727px);
  z-index: 1000;
`,Ob=x.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Db=x.div`
  display: flex;
  justify-content: flex-start;
  gap: 2px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: var(--Gray8);
`,Bb=x.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--Sub);

  color: var(--Primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.3px;
`,Nb=x.div`
  color: var(--Gray7);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
`,Ub=x.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
`,Hb=x.div`
  display: flex;

  color: var(--Primary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.35px;

  & > p {
    color: var(--Gray6);
    font-weight: 400;
  }
`;function Gb({current:a=52,total:r=100}){const o=a/r*100;return s.jsxs(_b,{children:[s.jsxs(Ob,{children:[s.jsxs(Db,{children:["비둘기",s.jsx(Bb,{children:"Lv1"})]}),s.jsx(Nb,{children:"귀여운 아기 비둘기이다."})]}),s.jsxs(Ub,{children:[s.jsxs(Hb,{children:[s.jsx("span",{children:a}),s.jsxs("p",{children:["/",r]})]}),s.jsx(rs,{value:o,height:"8px"})]})]})}const Lb=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  overflow-y: hidden;
  background: linear-gradient(170deg, #ff9191 0%, #71baff 100%);
  height: 100%;

  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`,qb=x.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 2;

  padding: 20px 16px 20px;
`,Yb=x.div`
  width: 402px;
  position: absolute;
  bottom: 116px;

  ::-webkit-scrollbar {
    display: none;
  }
`,kb=x.div`
  position: absolute;
  top: 140px;
  left: 20px;
  z-index: 1000;
`,Xb=x.div`
  position: absolute;
  top: 264px;
  left: 20px;
  z-index: 1000;
`,Qb=x.div`
  position: absolute;
  top: 312px;
  left: 20px;
  z-index: 1000;
`,Zb=x.div`
  position: absolute;
  bottom: 116px;
  left: 20px;
  z-index: 1000;
`;function Vb(){const[a,r]=S.useState(!1),[o,c]=S.useState(!1);return s.jsxs(Lb,{children:[s.jsxs(qb,{children:[s.jsx(H0,{}),s.jsx(Cb,{onClick:()=>r(!0)})]}),s.jsx(kb,{children:s.jsx(Gb,{})}),s.jsx(Xb,{children:s.jsx(U0,{})}),s.jsx(Qb,{children:s.jsx(N0,{onClick:()=>c(d=>!d)})}),o&&s.jsx(Zb,{children:s.jsx(B0,{})}),s.jsx(Yb,{children:s.jsx(D0,{})}),s.jsx(Mb,{}),s.jsx(us,{step:"collection",open:a,onClose:()=>r(!1)})]})}const $b=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Kb=x.div`
  display: flex;
  gap: 4px;
  padding: 0 4px;

  color: var(--Gray8);
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.45px;

  & span {
    color: var(--Primary);
    font-weight: 700;
  }
`,Wb=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Jb=x.div`
  display: flex;
  justify-content: space-between;

  color: var(--Gray7);
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.35px;
`,Fb=x.div`
  display: flex;
  gap: 1px;

  & > span:nth-child(1) {
    color: var(--Gray8);
    font-weight: 600;
  }
`;function Pb({level:a=9,current:r=172.6,total:o=200}){const c=(o-r).toFixed(1),d=r/o*100;return s.jsxs($b,{children:[s.jsxs(Kb,{children:["Lv.",a,"까지 ",s.jsxs("span",{children:[c,"km"]})," 남았어요!"]}),s.jsxs(Wb,{children:[s.jsx(rs,{value:d}),s.jsxs(Jb,{children:[s.jsx("span",{children:"0 km"}),s.jsxs(Fb,{children:[s.jsx("span",{children:r}),s.jsxs("span",{children:["/",o," km"]})]})]})]})]})}const Ib=x.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`,e2=x.span`
  width: 28px;
  height: 28px;
`,t2=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,l2=x.div`
  color: var(--Gray6);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.35px;
`,n2=x.div`
  display: flex;
  color: var(--Gray8);
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.4px;
`;function ta({iconSrc:a,alt:r,label:o,value:c,unit:d}){return s.jsxs(Ib,{children:[s.jsx(e2,{children:s.jsx("img",{src:a,alt:r})}),s.jsxs(t2,{children:[s.jsx(l2,{children:o}),s.jsxs(n2,{children:[s.jsx("p",{children:c}),s.jsx("p",{children:d})]})]})]})}const a2=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  width: 100%;
  border-radius: 10px;
  background: rgba(246, 247, 251, 0.8);
`;function i2(){const a="/capstonePrototype0/";return s.jsxs(a2,{children:[s.jsx(ta,{iconSrc:a+"Illust/field.svg",alt:"생성 필드 수",label:"생성 필드 수",value:17,unit:"개"}),s.jsx(ta,{iconSrc:a+"Illust/mission2.svg",alt:"미션 달성률",label:"미션 달성률",value:22.2,unit:"%"}),s.jsx(ta,{iconSrc:a+"Illust/collection2.svg",alt:"도감 수집률",label:"도감 수집률",value:22.2,unit:"%"})]})}const u2=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  width: 100%;
  cursor: pointer;
`,r2=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 48px;
  justify-content: center;
`,c2=x.span`
  color: var(--Gray8);
  text-align: center;
  font-family: Paperlogy;
  font-size: 17px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.425px;
`,o2=x.img`
  width: 24px;
  height: 24px;
`,s2=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`,f2=x.span`
  width: 40px;
  height: 40px;
  border-radius: var(--MaxRadius);

  background-color: #ddd;
`,d2=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p2=x.div`
  color: var(--Gray8);
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.45px;
`,h2=x.span`
  color: var(--Gray6);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.4px;
`,g2=x.span`
  width: 24px;
  height: 24px;
`;function x2({rank:a,name:r,distance:o,onClick:c}){const d="/capstonePrototype0/";return s.jsxs(u2,{onClick:c,children:[s.jsxs(r2,{children:[a===1&&s.jsx(o2,{src:d+"Illust/crown.svg",alt:"1등"}),s.jsx(c2,{children:a})]}),s.jsxs(s2,{children:[s.jsx(f2,{children:s.jsx("img",{src:d+"crewimg.png",alt:""})}),s.jsxs(d2,{children:[s.jsx(p2,{children:r}),s.jsxs(h2,{children:[o,"km"]})]})]}),s.jsx(g2,{children:s.jsx("img",{src:d+"Icon/chevron-right-Gray6.svg",alt:""})})]})}const m2=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background-color: var(--White);
`,v2=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 2px;

  & > p {
    color: var(--Gray-Gray9);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`,y2=x.span`
  display: flex;
  width: 24px;
  height: 24px;
`,b2=[{rank:1,name:"구예진",distance:99.9},{rank:2,name:"박재민",distance:24.3},{rank:3,name:"이영재",distance:18.7},{rank:4,name:"김소리",distance:10.2},{rank:5,name:"김한주",distance:6.6}];function S2(){const a=Dt();return s.jsxs(m2,{children:[s.jsxs(v2,{children:[s.jsxs(y2,{children:["src=","/capstonePrototype0/"+"Icon/crew.svg"]}),s.jsx("p",{children:"크루원"})]}),b2.map(o=>s.jsx(x2,{rank:o.rank,name:o.name,distance:o.distance,onClick:()=>a("/crewMember")},o.rank))]})}const j2=x.div`
  display: flex;
  flex-direction: column;
`,E2=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`,w2=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f5f6f8;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header 높이만큼 띄우기 */
  position: relative;
  top: 110px;
`,T2=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--White);
`,R2=x.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;function z2(){return s.jsxs(j2,{children:[s.jsx(E2,{children:s.jsx(Xl,{title:"크루 정보",showBackButton:!0})}),s.jsxs(w2,{children:[s.jsxs(T2,{children:[s.jsxs(R2,{children:[s.jsx(H0,{type:"view"}),s.jsx(Pb,{})]}),s.jsx(i2,{})]}),s.jsx(S2,{})]})]})}const A2=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  width: 100%;
  border-radius: 10px;
  background: rgba(246, 247, 251, 0.8);
`;function C2(){const a="/capstonePrototype0/";return s.jsxs(A2,{children:[s.jsx(ta,{iconSrc:a+"Illust/distance.svg",alt:"러닝 거리",label:"러닝 거리",value:17,unit:"km"}),s.jsx(ta,{iconSrc:a+"Illust/field.svg",alt:"생성 필드 수",label:"생성 필드 수",value:22,unit:"개"}),s.jsx(ta,{iconSrc:a+"Illust/forest.svg",alt:"숲 가꾸기",label:"숲 가꾸기",value:12,unit:"회"})]})}const M2=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,_2=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
`,O2=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #ddd;
  border-radius: var(--MaxRadius);
`,D2=x.div`
  display: flex;
  flex-direction: column;
`,B2=x.div`
  color: var(--Gray8);
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.45px;
`,N2=x.div`
  color: var(--Gray5);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.35px;
`;function U2(){return s.jsxs(M2,{children:[s.jsxs(_2,{children:[s.jsx(O2,{children:s.jsx("img",{src:"",alt:""})}),s.jsxs(D2,{children:[s.jsx(B2,{children:"박재민"}),s.jsx(N2,{children:"비둘기를 좋아하는 러너입니다"})]})]}),s.jsx(C2,{})]})}const H2=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-radius: 4px;
  background: #fbfbfd;

  cursor: pointer;
`,G2=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,L2=x.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: var(--Sub);

  color: var(--Primary);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.35px;
`,q2=x.div`
  display: flex;
  align-items: center;
  gap: 2px;

  & > p {
    color: var(--Gray7);
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.4px;
  }
  & > p.date {
    font-weight: 600;
  }
`,Y2=x.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
`;function ql(){return s.jsxs(H2,{children:[s.jsxs(G2,{children:[s.jsx(L2,{children:"성장"}),s.jsxs(q2,{children:[s.jsx("p",{className:"date",children:"06월 06일"}),s.jsx("p",{children:"러닝"})]})]}),s.jsx(Y2,{children:s.jsx("img",{src:"/capstonePrototype0/Icon/chevron-down-Gray6.svg",alt:""})})]})}const k2=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px;
  background-color: var(--BG1);
`,X2=x.div`
  display: flex;
  align-items: center;

  & > p {
    color: var(--Gray-Gray9);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`,Q2=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qh=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Yh=x.div`
  color: #777;
  font-size: 14px;
  letter-spacing: -0.35px;
`;function Z2(){return s.jsxs(k2,{children:[s.jsx(X2,{children:s.jsx("p",{children:"러닝 기록"})}),s.jsxs(Q2,{children:[s.jsxs(qh,{children:[s.jsx(Yh,{children:"이번주"}),s.jsx(ql,{}),s.jsx(ql,{}),s.jsx(ql,{}),s.jsx(ql,{})]}),s.jsxs(qh,{children:[s.jsx(Yh,{children:"지난주"}),s.jsx(ql,{}),s.jsx(ql,{}),s.jsx(ql,{}),s.jsx(ql,{})]})]})]})}const V2=x.div`
  display: flex;
  flex-direction: column;
`,$2=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`,K2=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f5f6f8;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header 높이만큼 띄우기 */
  position: relative;
  top: 110px;
`,W2=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--White);
`;function J2(){return s.jsxs(V2,{children:[s.jsx($2,{children:s.jsx(Xl,{title:"크루원 정보",showBackButton:!0})}),s.jsxs(K2,{children:[s.jsx(W2,{children:s.jsx(U2,{})}),s.jsx(Z2,{})]})]})}const F2=x.div`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 100px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.6px;

  /* background-color: var(--Primary);
  color: var(--White); */

  ${({type:a})=>{if(a==="default")return`
        background-color: var(--Primary);
        color: var(--White);
      `;if(a==="secondary")return`
        background-color: var(--Sub);
        color: var(--Gray8);
      `;if(a==="white")return`
        background-color: var(--White);
        color: var(--Gray8);
      `}}

  cursor: pointer;
`;function P2({type:a,title:r,onClick:o}){return s.jsx(F2,{onClick:o,type:a,children:r})}const I2=x.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--White);
  border-radius: 100px;
  padding: 2px;
  height: 36px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin-top: 8px;
`,e4=x.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 48px;
  height: 32px;
  border-radius: 100px;
  background: var(--Primary);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({selected:a})=>a==="코스"?"translateX(0px)":"translateX(46px)"};
  z-index: 1;
`,kh=x.button`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 100px;
  background: transparent;
  color: ${({active:a})=>a?"var(--White)":"var(--Gray5)"};
  font-size: 14px;
  font-weight: ${({active:a})=>a?"600":"400"};
  line-height: 150%;
  letter-spacing: -0.5px;

  cursor: pointer;
  transition: color 0.2s;
  z-index: 2;
`;function t4({onChange:a}){const[r,o]=S.useState("코스"),c=d=>{o(d),a&&a(d)};return s.jsxs(I2,{children:[s.jsx(e4,{selected:r}),s.jsx(kh,{type:"button",active:r==="코스",onClick:()=>c("코스"),children:"코스"}),s.jsx(kh,{type:"button",active:r==="필드",onClick:()=>c("필드"),children:"필드"})]})}const l4=x.div`
  width: 100%;
  height: 340px;
  position: relative;
  background-color: var(--Gray5);
`,n4=x.div`
  display: flex;
  width: 100%;
  padding: 44px 20px 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  position: absolute;
  bottom: 0;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
`,a4=x.div`
  color: var(--White);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.6px;
`;function cs({pathData:a=[],type:r="running"}){const o=Dt();return S.useEffect(()=>{if(!window.naver||!window.naver.maps||a.length===0)return;const c=a.reduce((E,m)=>E+(m.lat||m._lat),0)/a.length,d=a.reduce((E,m)=>E+(m.lng||m._lng),0)/a.length,h=new window.naver.maps.LatLng(c,d),y=new window.naver.maps.Map("map",{center:h,zoom:17});new window.naver.maps.Polygon({map:y,paths:[a],fillColor:"rgba(130, 165, 255, 0.2)",fillOpacity:.6,strokeColor:"#4263eb",strokeOpacity:1,strokeWeight:4})},[a]),s.jsxs(l4,{children:[s.jsx("div",{id:"map",style:{width:"100%",height:"100%"}}),s.jsxs(n4,{children:[s.jsx(a4,{children:"4월 12일 러닝 기록"}),r==="running"?s.jsx(P2,{type:"default",title:"필드 생성",onClick:()=>{o("/genField",{state:{path:a}})}}):s.jsx(t4,{})]})]})}const Bo=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;

  border-radius: 8px;
  background: var(--BG1);
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
`,i4=x.span`
  background: #eef2ff;
  color: #5e66ff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  padding: 2px 6px;
`,No=x.span`
  font-weight: 600;
`;function u4({entry:a}){const r="/capstonePrototype0/",o=c=>c.startsWith("/")?r+c.slice(1):r+c;return a.type==="growth"?s.jsxs(Bo,{children:[s.jsxs("span",{children:[s.jsx(No,{children:a.user}),"님이 필드를 성장시켰어요."]}),a.badge&&s.jsx(i4,{children:a.badge})]}):a.type==="levelup"?s.jsxs(Bo,{children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx(No,{children:a.target}),"의 레벨이 올랐어요!"]}),s.jsxs("div",{style:{fontSize:"13px"},children:[a.from," ",s.jsxs("span",{style:{color:"#5e66ff"},children:["➤ ",a.to]})]})]}),s.jsx("img",{src:o(a.image),alt:"레벨업",width:40})]}):a.type==="asset"?s.jsxs(Bo,{children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx(No,{children:a.name}),"가 찾아왔어요!"]}),s.jsx("div",{style:{fontSize:"13px",color:"#aaa"},children:a.description})]}),s.jsx("img",{src:o(a.image),alt:"동물",width:40})]}):null}const r4=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c4=x.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--Gray6);
  gap: 4px;
`;function o4({data:a}){const{date:r,day:o,entries:c}=a;return s.jsxs(r4,{children:[s.jsxs(c4,{children:[s.jsx("span",{children:r}),s.jsx("span",{children:o})]}),c.map((d,h)=>s.jsx(u4,{entry:d},h))]})}const s4=x.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 18px;
  background-color: var(--BG1);
`,f4=x.div`
  display: flex;
  align-items: center;
  & > p {
    color: var(--Gray-Gray9);
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`;function d4(){const a="/capstonePrototype0/",r=[{date:"26",day:"목",entries:[{type:"growth",user:"구예진"},{type:"levelup",target:"벚꽃나무",from:"Lv.1",to:"Lv.2",image:a+"Tree/level2.png"}]},{date:"24",day:"수",entries:[{type:"growth",user:"박재민",badge:"성장"},{type:"growth",user:"구예진",badge:"성장"},{type:"asset",name:"비둘기",description:"부가설명",image:a+"Animal/bird.png"},{type:"levelup",target:"벚꽃나무",from:"Lv.1",to:"Lv.2",image:a+"Tree/level2.png"}]}];return s.jsxs(s4,{children:[s.jsx(f4,{children:s.jsx("p",{children:"필드 히스토리"})}),r.map(o=>s.jsx(o4,{data:o},o.date))]})}const p4=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  overflow-y: scroll;

  background-color: var(--BG2);

  &::-webkit-scrollbar {
    display: none;
  }
`,h4=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`,g4=x.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
`;x.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 12px;
  background-color: var(--White);
`;x.div`
  width: 100%;
  padding: 20px 20px 32px 20px;
  background-color: var(--White);
`;function x4(){return s.jsxs(p4,{children:[s.jsx(h4,{children:s.jsx(Xl,{showBackButton:!0,bgColor:"transparent"})}),s.jsxs(g4,{children:[s.jsx(cs,{type:"history"}),s.jsx(d4,{})]})]})}const m4=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  width: 100%;

  font-size: 16px;
  letter-spacing: -0.6px;

  background-color: #fff;
  cursor: pointer;

  border-bottom: 2px solid transparent;
  /* 호버댔을때 2px씩 움찔움찔 움직이는거 막으려고 해둔거 */

  color: ${({selected:a})=>a?"var(--Gray8)":"var(--Gray5)"};
  font-weight: ${({selected:a})=>a?"600":"400"};
  border-bottom: ${({selected:a})=>a?"2px solid var(--Primary)":"2px solid transparent"};
`;function v4({Name:a,selected:r,onClick:o}){return s.jsx(s.Fragment,{children:s.jsx(m4,{selected:r,onClick:o,children:a})})}const y4=x.div`
  display: flex;
  padding: 0px 20px;
  background-color: var(--White);

  z-index: 101;
`;function G0({tabs:a}){const[r,o]=S.useState(a[0]);return s.jsx(y4,{children:a.map((c,d)=>s.jsx(v4,{Name:c,selected:r===c,onClick:()=>o(c)},d))})}const b4=x.div`
  display: flex;
  flex-direction: column;
`,S4=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`,j4=x.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0 20px 0;
  background-color: var(--BG1);
`,E4=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;

  /* 스크롤 고려 css */
  padding: 24px 0 99px 0; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header 높이만큼 띄우기 */
  position: relative;
  top: 224px;
`,w4=x.div`
  display: flex;
  gap: 4px;
  padding: 2px 20px;

  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: var(--Gray8);

  & > p1 {
    color: var(--Primary);
  }
`,T4=x.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;function R4(){return s.jsxs(b4,{children:[s.jsxs(S4,{children:[s.jsx(Xl,{title:"크루 정보",showBackButton:!0}),s.jsx(G0,{tabs:["미완료 미션","완료 미션"]}),s.jsxs(j4,{children:[s.jsxs(w4,{children:[s.jsx("p",{children:"달성가능미션"}),s.jsx("p1",{children:"5"})]}),s.jsx(is,{chips:["전체","필드 생성","누적 거리","크루 레벨","기타"],type:"secondary"})]})]}),s.jsx(E4,{children:s.jsxs(T4,{children:[s.jsx(ea,{}),s.jsx(ea,{end:!0}),s.jsx(ea,{end:!0}),s.jsx(ea,{end:!0})]})})]})}const z4=x.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: var(--White);
`,A4=x.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--Gray7);
  letter-spacing: -0.45px;
`,C4=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 4px 0 4px;
  gap: 16px;
`,M4=x.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  padding: 0 4px;
  gap: 16px;
  color: var(--Gray6);

  span:first-child {
    width: 40px;
  }
  span:last-child {
    width: fit-content;
  }
`,_4=x.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,O4=x.div`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: var(--Gray8);
  min-width: 40px;
`,D4=x.div`
  display: flex;
  align-items: flex-start;
  background: var(--Gray1);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--Gray7, #565a61);
  padding: 9px 12px;
`;function L0({data:a=[{km:1,time:340,pace:5.67},{km:2,time:351,pace:5.85},{km:3,time:351,pace:6},{km:4,time:351,pace:6.2},{km:2.5,time:180,pace:6.7}]}){return s.jsxs(z4,{children:[s.jsx(A4,{children:"구간별 페이스"}),s.jsxs(C4,{children:[s.jsxs(M4,{children:[s.jsx("span",{children:"km"}),s.jsx("span",{children:"평균페이스"})]}),a.map((r,o)=>s.jsxs(_4,{children:[s.jsx(O4,{children:r.km}),s.jsx(D4,{style:{width:r.time+"px"},children:r.pace})]},o))]})]})}const B4=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  overflow-y: scroll;

  background-color: var(--BG2);

  &::-webkit-scrollbar {
    display: none;
  }
`,N4=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`,U4=x.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
`,H4=x.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 12px;
  background-color: var(--White);
`,G4=x.div`
  width: 100%;
  padding: 20px 20px 32px 20px;
  background-color: var(--White);
`;function L4(){return s.jsxs(B4,{children:[s.jsx(N4,{children:s.jsx(Xl,{showBackButton:!0,bgColor:"transparent"})}),s.jsxs(U4,{children:[s.jsx(cs,{type:"history"}),s.jsx(H4,{children:s.jsx(Si,{distance:"2.22"})}),s.jsx(G4,{children:s.jsx(L0,{})})]})]})}const q4=x.div`
  display: flex;
  flex-direction: column;
`,Y4=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`,k4=x.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: var(--Primary);
`;function X4(){const r=$t().state?.path||[],[o,c]=S.useState([]);return S.useEffect(()=>{console.log("genField로넘어온 pathData:",r)},[r]),S.useEffect(()=>{if(!window.simplify||r.length===0)return;const d=r.map(M=>({x:M.lng||M._lng,y:M.lat||M._lat})),h=window.simplify(d,1e-4,!0);console.log("단순화된 path:",h);let y=0,E=0;h.forEach(M=>{y+=M.x,E+=M.y});const m=y/h.length,g=E/h.length,T=[];h.forEach(M=>{T.push((M.x-m)*1e4),T.push((g-M.y)*1e4)}),c(T)},[r]),S.useEffect(()=>{if(!window.AFRAME||o.length===0)return;AFRAME.registerComponent("shape",{schema:{points:{type:"array",default:o},depth:{type:"number",default:1}},init:function(){const h=this.data.points,y=[];for(let M=0;M<h.length;M+=2)y.push(new THREE.Vector2(h[M],h[M+1]));const E=new THREE.Shape(y),m=new THREE.ExtrudeGeometry(E,{depth:this.data.depth,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelSegments:4}),g=new THREE.MeshStandardMaterial({color:"#5E66FF"}),T=new THREE.Mesh(m,g);this.el.setObject3D("mesh",T)}});const d=document.querySelector("#generatedField");d&&d.setAttribute("shape",{points:o,depth:1})},[o]),s.jsxs(q4,{children:[s.jsx(Y4,{children:s.jsx(Xl,{title:"필드 생성",showBackButton:!0})}),s.jsx(k4,{children:s.jsxs("a-scene",{embedded:!0,"vr-mode-ui":"enabled: false","post-processing":"effect: bloom",bloom:"threshold: -2; strength: 0.4; radius: 0.5",renderer:"toneMapping: ACESFilmic;",children:[s.jsx("a-entity",{id:"generatedField",position:"0 -7 -7",rotation:"90 0 45",shape:!0}),s.jsx("a-entity",{id:"ambient",light:"type: ambient; intensity: 0.48; color: #ffffff",children:" "}),s.jsx("a-entity",{id:"ambient",light:"type: ambient; intensity: 1; color: #ffffff",children:" "}),s.jsx("a-sky",{color:"#A5D1F2"}),s.jsx("a-entity",{position:"0 1.6 0",children:s.jsx("a-camera",{"wasd-controls-enabled":"true","look-controls-enabled":"true",position:"0 3 20"})})]})})]})}function Q4({onLoad:a}){return S.useEffect(()=>{if(document.getElementById("naver-maps")){a();return}const r=document.createElement("script");r.id="naver-maps",r.async=!0,r.src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=cizxlaqzq7",r.onload=a,document.head.appendChild(r)},[a]),null}const Z4=x.div`
  width: 100%;
  height: 100%;
  background-color: var(--Gray9);
  position: absolute;
`,V4=x.div`
  width: 100%;
  height: 100%;
`;function $4({isRunning:a,setPathData:r,isPaused:o}){const c="/capstonePrototype0/",d=S.useRef(null),h=S.useRef(null),y=S.useRef(null),E=S.useRef([]),m=S.useRef(null),[g,T]=S.useState(!1),[M,_]=S.useState(null),[q,D]=S.useState([]);return S.useEffect(()=>{if(!navigator.geolocation)return;const G=navigator.geolocation.watchPosition(Y=>{const{latitude:O,longitude:V}=Y.coords;_(new naver.maps.LatLng(O,V))},Y=>{console.error("위치정보 가져오기 실패:",Y)},{enableHighAccuracy:!0,maximumAge:0,timeout:1/0});return()=>navigator.geolocation.clearWatch(G)},[]),S.useEffect(()=>{!g||!M||!d.current||(h.current?(y.current?.setPosition(M),h.current?.setCenter(M)):(h.current=new naver.maps.Map(d.current,{center:M,zoom:17,mapTypeId:naver.maps.MapTypeId.NORMAL,gl:!0}),y.current=new naver.maps.Marker({position:M,map:h.current,icon:{url:c+"Icon/marker.png",size:new naver.maps.Size(48,48),origin:new naver.maps.Point(0,0),anchor:new naver.maps.Point(24,24),scaledSize:new naver.maps.Size(48,48)}})))},[M]),S.useEffect(()=>{if(a||q.length<3||!h.current)return;m.current&&m.current.setMap(null);const G=new naver.maps.Polygon({map:h.current,paths:[q],fillColor:"rgba(130, 165, 255, 0.2)",fillOpacity:.6,strokeColor:"#4263eb",strokeOpacity:1,strokeWeight:2});m.current=G},[a]),S.useEffect(()=>{!M||!a||o||!h.current||D(G=>{const Y=[...G,M];E.current.forEach(X=>X.setMap(null)),E.current=[];const O=new naver.maps.Polyline({path:Y,map:h.current,strokeColor:"#ffffff",strokeWeight:7,strokeOpacity:1,strokeStyle:"solid"}),V=new naver.maps.Polyline({path:Y,map:h.current,strokeColor:"#82A5FF",strokeWeight:3,strokeOpacity:1,strokeStyle:"solid"});return E.current=[O,V],console.log("경로 배열:",Y),r?.(Y),Y})},[M,a,o]),s.jsxs(Z4,{children:[s.jsx(Q4,{onLoad:()=>T(!0)}),g&&s.jsx(V4,{ref:d})]})}const K4=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  &:hover {
    transform: translateY(-4px);
  }
`,W4=x.div`
  font-family: "Paperlogy";
  color: var(--White);
  background-color: var(--Gray8);
  border-radius: 100px;

  padding: ${({type:a})=>a==="big"?"8px 14px":"6px 10px"};
  font-weight: ${({type:a})=>a==="big"?"500":"400"};
  font-size: ${({type:a})=>a==="big"?"14px":"12px"};
`,J4=x.div`
  width: 0;
  height: 0;
  border-left: ${({type:a})=>a==="big"?"8px solid transparent":"6px solid transparent"};
  border-right: ${({type:a})=>a==="big"?"8px solid transparent":"6px solid transparent"};
  border-top: ${({type:a})=>a==="big"?"6px solid var(--Gray8)":"4px solid var(--Gray8)"};
  margin-top: -1px;
`;function F4({tip:a,type:r,onClick:o}){return s.jsxs(K4,{onClick:o,type:r,children:[s.jsx(W4,{type:r,children:a}),s.jsx(J4,{type:r})]})}const P4=x.div`
  height: 100%;
  position: relative;

  overflow-y: hidden;
`,I4=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 44px;
  padding: 10px 0px;
  background-color: var(--White);
  border-radius: var(--MaxRadius);
  box-shadow: 0px 4px 8px 0px rgba(28, 39, 52, 0.08);

  & > p {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.325px;
    color: #323d4c;
  }

  cursor: pointer;

  position: absolute;
  left: 20px;
  bottom: 231px; /*바텀시트+러닝시작 영역+내위치버튼 만큼 띄우기*/
`,eS=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--White);
  border-radius: var(--MaxRadius);
  box-shadow: 0px 4px 8px 0px rgba(28, 39, 52, 0.08);

  cursor: pointer;

  position: absolute;
  left: 20px;
  bottom: 179px; /*바텀시트+러닝시작 영역 만큼 띄우기*/
`,tS=x.div`
  display: flex;
  width: calc(100% - 40px);
  gap: 8px;
  margin: 12px 20px;

  position: absolute;
  bottom: 99px; /*바텀시트 만큼 띄우기*/
`,lS=x.div`
  width: 80px;
  height: 80px;
  border: 4px solid var(--Primary);
  border-radius: 4px;
  z-index: 10000;
  background-color: rgba(94, 102, 255, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`,nS=x.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;function aS(){const[a,r]=S.useState(!1),[o,c]=S.useState("before"),[d,h]=S.useState("summary"),[y,E]=S.useState(!1),[m,g]=S.useState(!1),[T,M]=S.useState([]),_="/capstonePrototype0/",q=()=>{c("before"),h("summary"),r(!0)},D=()=>{c("before"),h("goal"),r(!0)},G=()=>{c("ing"),h("running"),E(!0),r(!0)};return s.jsxs(P4,{children:[s.jsx($4,{isRunning:y,setPathData:M,isPaused:m}),s.jsxs(I4,{onClick:D,children:[s.jsx("img",{src:_+"Icon/flag.svg",alt:"목표 설정"}),s.jsx("p",{children:"목표"})]}),s.jsx(eS,{children:s.jsx("img",{src:_+"Icon/mark.svg",alt:"내 위치로 이동"})}),s.jsx(tS,{children:s.jsx(kl,{text:"러닝 시작",onClick:G})}),s.jsxs(nS,{children:[s.jsx(F4,{tip:"2회 러닝",type:"big"}),s.jsx(lS,{onClick:q})]}),s.jsx(us,{step:o,type:d,open:a,setIsRunning:E,setIsPaused:g,pathData:T,onClose:()=>r(!1)})]})}const iS=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: var(--White);
  position: relative;
`,uS=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 4px;
`,rS=x.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
`,cS=x.div`
  font-family: "Paperlogy";
  font-size: 20px;
  font-weight: 700;
`,oS=x.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 16px;
  gap: auto;
`,sS=x.div`
  width: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
  color: var(--Gray7);
`,fS=x.div`
  width: 100%;
  position: relative;
  height: 120px;
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: flex-end;
  gap: auto;
`,dS=x.div`
  width: 20px;
  height: ${({heightAnim:a,runningData:r})=>a?`${r/60}%`:"0%"};
  /* background-color: var(--Gray1); */
  background-color: ${({isSelected:a})=>a?"var(--Primary)":"var(--Gray1)"};

  border-radius: 2px 2px 0px 0px;
  cursor: pointer;
  z-index: 50;

  transition: height 0.6s ease-in-out;
`,pS=x.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Yu=x.div`
  width: 362px;
  height: 1px;
  z-index: 1;
  background-color: #f3f3f8;
`,hS=x.div`
  z-index: 51;
  position: absolute;
  top: ${({$top:a})=>`${a}px`};
  left: ${({$left:a})=>`${a}px`};
`;function Uo({title:a,data:r}){const[o,c]=S.useState(null),[d,h]=S.useState(null),y=S.useRef(null),E=S.useRef([]),m=S.useRef(null),g=Dt(),[T,M]=S.useState(!1);S.useEffect(()=>{const G=setTimeout(()=>{M(!0)},500);return()=>clearTimeout(G)},[]);const _=[{day:"7월 1일",distance:2422},{day:"7월 2일",distance:4444},{day:"7월 3일",distance:3112},{day:"7월 4일",distance:4444},{day:"7월 5일",distance:2865},{day:"7월 6일",distance:2011},{day:"7월 7일",distance:1600}],q=(G,Y)=>{const O=E.current[Y],V=y.current;if(O&&V){const X=O.getBoundingClientRect(),P=V.getBoundingClientRect(),$=X.top-P.top,ee=X.left-P.left;let W=$-130,he;Y>=4?he=ee-142:he=ee-10,h({top:W,left:he}),c(G)}},D=["월","화","수","목","금","토","일"];return S.useEffect(()=>{function G(Y){m.current&&!m.current.contains(Y.target)&&!E.current.some(O=>O&&O.contains(Y.target))&&(c(null),h(null))}return o&&document.addEventListener("mousedown",G),()=>{document.removeEventListener("mousedown",G)}},[o]),s.jsxs(iS,{ref:y,children:[s.jsxs(uS,{children:[s.jsx(rS,{children:a}),s.jsx(cS,{children:r})]}),o&&d&&s.jsx(hS,{ref:m,$top:d.top,$left:d.left,children:s.jsx(O0,{dayData:o.day,distanceData:o.distance,onClick:()=>g("/history/record")})}),s.jsxs(fS,{children:[_.map((G,Y)=>s.jsx(dS,{runningData:G.distance,heightAnim:T,isSelected:o?.day===G.day,ref:O=>E.current[Y]=O,onClick:()=>q(G,Y)},Y)),s.jsxs(pS,{children:[s.jsx(Yu,{}),s.jsx(Yu,{}),s.jsx(Yu,{}),s.jsx(Yu,{})]})]}),s.jsx(oS,{children:D.map((G,Y)=>s.jsx(sS,{children:G},Y))})]})}const gS=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--BG2);
`,xS=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`,mS=x.div`
  display: flex;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header+TabNav 높이만큼 띄우기 */
  position: relative;
  top: 158px;
`,vS=x.div`
  width: 100%;
  padding: 16px 20px 12px 20px;
  background-color: var(--White);
  margin-bottom: 12px;
`,Ho=x.div`
  width: 100%;
  padding: 20px;
  background-color: var(--White);
`,yS=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--BG2);
`;function bS(){return s.jsxs(gS,{children:[s.jsxs(xS,{children:[s.jsx(Xl,{title:"기록"}),s.jsx(G0,{tabs:["일","주","월"]})]}),s.jsxs(mS,{children:[s.jsx(vS,{children:s.jsx(Si,{reverse:!0})}),s.jsxs(yS,{children:[s.jsx(Ho,{children:s.jsx(Uo,{title:"거리",data:"12.24"})}),s.jsx(Ho,{children:s.jsx(Uo,{title:"시간",data:"1:26:32"})}),s.jsx(Ho,{children:s.jsx(Uo,{title:"평균 페이스",data:"5'30'"})})]})]})]})}const SS=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  overflow-y: scroll;

  background-color: var(--BG2);

  &::-webkit-scrollbar {
    display: none;
  }
`,jS=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`,ES=x.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
`,wS=x.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 12px;
  background-color: var(--White);
`,TS=x.div`
  width: 100%;
  padding: 20px 20px 32px 20px;
  background-color: var(--White);
`;function RS(){const r=$t().state?.path||[];return console.log("넘어온 pathData:",r),s.jsxs(SS,{children:[s.jsx(jS,{children:s.jsx(Xl,{showBackButton:!0,bgColor:"transparent"})}),s.jsxs(ES,{children:[s.jsx(cs,{type:"running",pathData:r}),s.jsx(wS,{children:s.jsx(Si,{distance:"2.22"})}),s.jsx(TS,{children:s.jsx(L0,{})})]})]})}const zS=x.div`
  width: 402px;
  height: 874px;
  position: relative;

  overflow: hidden;
`,AS=x.div`
  height: 100%;
  overflow-y: scroll;
  /* padding-top: 50px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;function CS(){return s.jsx(Bv,{children:s.jsxs(zS,{children:[s.jsx(_0,{}),s.jsx(AS,{children:s.jsxs(sv,{children:[s.jsx(Mt,{path:"/",element:s.jsx(Vb,{})}),s.jsx(Mt,{path:"/crew",element:s.jsx(z2,{})}),s.jsx(Mt,{path:"/crew/crewMember",element:s.jsx(J2,{})}),s.jsx(Mt,{path:"/fieldHistory",element:s.jsx(x4,{})}),s.jsx(Mt,{path:"/mission",element:s.jsx(R4,{})}),s.jsx(Mt,{path:"/genField",element:s.jsx(X4,{})}),s.jsx(Mt,{path:"/running",element:s.jsx(aS,{})}),s.jsx(Mt,{path:"/running/record",element:s.jsx(RS,{})}),s.jsx(Mt,{path:"/history",element:s.jsx(bS,{})}),s.jsx(Mt,{path:"/history/record",element:s.jsx(L4,{})}),s.jsx(Mt,{path:"/mypage",element:s.jsx(db,{})})]})}),s.jsx(cy,{})]})})}x.div`
  width: 402px;
  height: 874px;

  background-color: #fff;
  position: relative;
`;x.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(170deg, #ff9191 0%, #71baff 100%);
  padding: 20px 16px 20px;
`;x.div`
  width: 402px;
  height: 874px;
  position: relative;

  overflow: hidden;
`;x.div`
  height: 100%;
  overflow-y: scroll;
  /* padding-top: 50px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;const MS=x.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  gap: 64px;
  overflow-y: hidden;

  & > p {
    font-family: "Paperlogy";
    font-size: 40px;
    font-weight: 700;
    color: #fff;
  }
`;x.div`
  display: flex;
  gap: 12px;

  &:last-child {
    flex-direction: row-reverse;
  }
`;const _S=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: "Paperlogy";
  font-size: 24px;
  color: #fff;
  gap: 10px;

  & p {
    font-family: "Paperlogy";
    color: #d3d3d3;
  }
`;x(_S)`
  align-items: flex-start;

  & p {
    color: #d3d3d3;
  }
`;x.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  & > img {
    width: 30px;
    height: 30px;
  }
`;vx.createRoot(document.getElementById("root")).render(s.jsx(S.StrictMode,{children:s.jsx(MS,{children:s.jsx(CS,{})})}));
