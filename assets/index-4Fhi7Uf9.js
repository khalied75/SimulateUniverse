var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():ee=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Yd(t),e=Xd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Xd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),ep._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yf(e);e!==null;){if(n=e[_t])return n;e=yf(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,o,Ht(n)):Qt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Qt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&an(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function dn(){}var fn=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,hn=null;function gn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var _n=!1;function vn(e,t,n){if(_n)return e(t,n);_n=!0;try{return e(t)}finally{if(_n=!1,(mn!==null||hn!==null)&&(Ou(),mn&&(t=mn,e=hn,hn=mn=null,gn(t),e)))for(t=0;t<e.length;t++)gn(e[t])}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var bn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),xn=!1;if(bn)try{var Sn={};Object.defineProperty(Sn,`passive`,{get:function(){xn=!0}}),window.addEventListener(`test`,Sn,Sn),window.removeEventListener(`test`,Sn,Sn)}catch{xn=!1}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=h({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,Ln,Rn=h({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Ln&&(Ln&&e.type===`mousemove`?(Fn=e.screenX-Ln.screenX,In=e.screenY-Ln.screenY):In=Fn=0,Ln=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),zn=An(Rn),Bn=An(h({},Rn,{dataTransfer:0})),Vn=An(h({},Nn,{relatedTarget:0})),Hn=An(h({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Un=An(h({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Wn=An(h({},jn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=An(h({},Nn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),O=An(h({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=An(h({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),Qn=An(h({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=An(h({},Rn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=An(h({},jn,{newState:0,oldState:0})),tr=[9,13,27,32],nr=bn&&`CompositionEvent`in window,rr=null;bn&&`documentMode`in document&&(rr=document.documentMode);var ir=bn&&`TextEvent`in window&&!rr,ar=bn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=En(),Tn=wn=Cn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){mn?hn?hn.push(r):hn=[r]:mn=r,t=Pd(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){Dd(e,0)}function yr(e){if(Kt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(bn){var Sr;if(bn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,pn(e)),vn(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=bn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==qt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Pd(Vr,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};bn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Nt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function k(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return k(e,t,n,r),mi(e)}function fi(e,t){return k(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<yu)throw yu=0,bu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Kf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=_i(13,n,t,a),e.elementType=w,e.lanes=o,e;case te:return e=_i(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Je(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:W(`cancel`,t),W(`close`,t);break;case`iframe`:case`object`:case`embed`:W(`load`,t);break;case`video`:case`audio`:for(n=0;n<Td.length;n++)W(Td[n],t);break;case`source`:W(`error`,t);break;case`img`:case`image`:case`link`:W(`error`,t),W(`load`,t);break;case`details`:W(`toggle`,t);break;case`input`:W(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:W(`invalid`,t);break;case`textarea`:W(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Bd(t.textContent,n)?(r.popover!=null&&(W(`beforetoggle`,t),W(`toggle`,t)),r.onScroll!=null&&W(`scroll`,t),r.onScrollEnd!=null&&W(`scrollend`,t),r.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Zd(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=vf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=vf(e)}else t===27?(t=A,of(e.type)?(e=_f,_f=null,A=e):A=t):A=Hi?gf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(au===null?au=e:au.push.apply(au,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){D($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,he($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,ha={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ga(){return{controller:new fa,data:new Map,refCount:0}}function _a(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var va=null,ya=0,ba=0,xa=null;function Sa(e,t){if(va===null){var n=va=[];ya=0,ba=yd(),xa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ya++,t.then(Ca,Ca),t}function Ca(){if(--ya===0&&va!==null){xa!==null&&(xa.status=`fulfilled`);var e=va;va=null,ba=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ta=T.S;T.S=function(e,t){cu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&Sa(e,t),Ta!==null&&Ta(e,t)};var Ea=me(null);function Da(){var e=Ea.current;return e===null?z.pooledCache:e}function Oa(e,t){t===null?D(Ea,Ea.current):D(Ea,t.pool)}function ka(){var e=Da();return e===null?null:{parent:ha._currentValue,pool:e}}var Aa=Error(i(460)),ja=Error(i(474)),Ma=Error(i(542)),Na={then:function(){}};function Pa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Fa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e;default:if(typeof t.status==`string`)t.then(dn,dn);else{if(e=z,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e}throw La=t,Aa}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(La=e,Aa):e}}var La=null;function Ra(){if(La===null)throw Error(i(459));var e=La;return La=null,e}function za(e){if(e===Aa||e===Ma)throw Error(i(483))}var Ba=null,Va=0;function Ha(e){var t=Va;return Va+=1,Ba===null&&(Ba=[]),Fa(Ba,e,t)}function Ua(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Wa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ga(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Ia(i)===t.type)?(t=a(t,n.props),Ua(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ua(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ua(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case re:return t=Ia(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ha(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Wa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Ia(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ha(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Wa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Ia(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ha(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Wa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Ia(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ua(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ua(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Ia(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ha(o),c);if(o.$$typeof===S)return b(e,r,ua(e,o),c);Wa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Va=0;var i=b(e,t,n,r);return Ba=null,i}catch(t){if(t===Aa||t===Ma)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ka=Ga(!0),qa=Ga(!1),Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return k(e,r,t,n),mi(e)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var to=!1;function no(){if(to){var e=xa;if(e!==null)throw e}}function ro(e,t,n,r){to=!1;var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(V&f)===f:(r&f)===f){f!==0&&f===ba&&(to=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),$l|=o,e.lanes=o,e.memoizedState=d}}function io(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function M(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)io(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Zl,D(oo,e),D(ao,t),Zl=e|t.baseLanes}function co(){D(oo,Zl),D(ao,ao.current)}function lo(){Zl=oo.current,he(ao),he(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;D(vo,vo.current&1),D(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){D(vo,vo.current),D(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(D(vo,vo.current),D(uo,e),fo===null&&(fo=e)):go(e)}function go(){D(vo,vo.current),D(uo,uo.current)}function _o(e){he(uo),fo===e&&(fo=null),he(vo)}var vo=me(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||pf(n)||mf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var N=0,P=null,F=null,bo=null,xo=!1,So=!1,Co=!1,wo=0,To=0,Eo=null,Do=0;function I(){throw Error(i(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,a){return N=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ks:qs,Co=!1,a=n(r,i),Co=!1,So&&(a=jo(t,n,r,i)),Ao(e),a}function Ao(e){T.H=Gs;var t=F!==null&&F.next!==null;if(N=0,bo=F=P=null,xo=!1,To=0,Eo=null,t)throw Error(i(300));e===null||uc||(e=e.dependencies,e!==null&&sa(e)&&(uc=!0))}function jo(e,t,n,r){P=e;var a=0;do{if(So&&(Eo=null),To=0,So=!1,25<=a)throw Error(i(301));if(a+=1,bo=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Js,o=t(n,r)}while(So);return o}function Mo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?zo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function No(){var e=wo!==0;return wo=0,e}function Po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xo=!1}N=0,bo=F=P=null,So=!1,To=wo=0,Eo=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bo===null?P.memoizedState=bo=e:bo=bo.next=e,bo}function Lo(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=bo===null?P.memoizedState:bo.next;if(t!==null)bo=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},bo===null?P.memoizedState=bo=e:bo=bo.next=e}return bo}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var t=To;return To+=1,Eo===null&&(Eo=[]),e=Fa(Eo,e,t),t=P,(bo===null?t.memoizedState:bo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ks:qs),e}function Bo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return zo(e);if(e.$$typeof===S)return la(e)}throw Error(i(438,String(e)))}function Vo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ro(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ho(e,t){return typeof t==`function`?t(e):t}function Uo(e){return Wo(Lo(),F,e)}function Wo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(N&f)===f:(V&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ba&&(d=!0);else if((N&p)===p){u=u.next,p===ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,$l|=p;f=u.action,Co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,$l|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Mr(o,e.memoizedState)&&(uc=!0,d&&(n=xa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Lo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(uc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ko(e,t,n){var r=P,a=Lo(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Mr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,uc=!0),a=a.queue,_s(Yo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||bo!==null&&bo.memoizedState.tag&1){if(r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,a,n,t),null),z===null)throw Error(i(349));o||N&127||qo(r,t,n)}return n}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Ro(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jo(e,t,n,r){t.value=n,t.getSnapshot=r,Xo(t)&&Zo(e)}function Yo(e,t,n){return n(function(){Xo(t)&&Zo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Zo(e){var t=fi(e,2);t!==null&&Cu(t,e,2)}function Qo(e){var t=Io();if(typeof e==`function`){var n=e;if(e=n(),Co){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function $o(e,t,n,r){return e.baseState=n,Wo(e,F,typeof r==`function`?r:Ho)}function es(e,t,n,r,a){if(Hs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),ns(e,t,s)}catch(n){is(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),ns(e,t,a)}catch(n){is(e,t,n)}}function ns(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){rs(e,t,n)},function(n){return is(e,t,n)}):rs(e,t,n)}function rs(e,t,n){t.status=`fulfilled`,t.value=n,as(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ts(e,n)))}function is(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,as(t),t=t.next;while(t!==r)}e.action=null}function as(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function ss(e,t){if(j){var n=z.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=gf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=gf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Io(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},n.queue=r,n=zs.bind(null,P,r),r.dispatch=n,r=Qo(!1),a=Vs.bind(null,P,!1,r.queue),r=Io(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=es.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function cs(e){return ls(Lo(),F,e)}function ls(e,t,n){if(t=Wo(e,t,os)[0],e=Uo(Ho)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=zo(t)}catch(e){throw e===Aa?Ma:e}else r=t;t=Lo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,fs(9,{destroy:void 0},us.bind(null,i,n),null)),[r,a,e]}function us(e,t){e.action=t}function ds(e){var t=Lo(),n=F;if(n!==null)return ls(t,n,e);Lo(),t=t.memoizedState,n=Lo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Ro(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ps(){return Lo().memoizedState}function ms(e,t,n,r){var i=Io();P.flags|=e,i.memoizedState=fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function hs(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Oo(r,F.memoizedState.deps)?i.memoizedState=fs(t,a,n,r):(P.flags|=e,i.memoizedState=fs(1|t,a,n,r))}function gs(e,t){ms(8390656,8,e,t)}function _s(e,t){hs(2048,8,e,t)}function vs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Ro(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ys(e){var t=Lo().memoizedState;return vs({ref:t,nextImpl:e}),function(){if(R&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function bs(e,t){return hs(4,2,e,t)}function xs(e,t){return hs(4,4,e,t)}function Ss(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){n=n==null?null:n.concat([e]),hs(4,4,Ss.bind(null,t,e),n)}function ws(){}function Ts(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Es(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),Co){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ds(e,t,n){return n===void 0||N&1073741824&&!(V&261930)?e.memoizedState=t:(e.memoizedState=n,e=Su(),P.lanes|=e,$l|=e,n)}function Os(e,t,n,r){return Mr(n,t)?n:ao.current===null?!(N&42)||N&1073741824&&!(V&261930)?(uc=!0,e.memoizedState=n):(e=Su(),P.lanes|=e,$l|=e,t):(e=Ds(e,n,r),Mr(e,t)||(uc=!0),e)}function ks(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Vs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Bs(e,t,wa(c,r),xu(e)):Bs(e,t,r,xu(e))}catch(n){Bs(e,t,{then:function(){},status:`rejected`,reason:n},xu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function As(){}function js(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ms(e).queue;ks(e,a,t,de,n===null?As:function(){return Ns(e),n(r)})}function Ms(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ns(e){var t=Ms(e);t.next===null&&(t=e.alternate.memoizedState),Bs(e,t.next.queue,{},xu())}function Ps(){return la(ep)}function Fs(){return Lo().memoizedState}function Is(){return Lo().memoizedState}function Ls(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xu();e=Za(n);var r=Qa(t,e,n);r!==null&&(Cu(r,t,n),$a(r,t,n)),t={cache:ga()},e.payload=t;return}t=t.return}}function Rs(e,t,n){var r=xu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hs(e)?Us(t,n):(n=di(e,t,n,r),n!==null&&(Cu(n,e,r),Ws(n,t,r)))}function zs(e,t,n){Bs(e,t,n,xu())}function Bs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hs(e))Us(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return k(e,t,i,0),z===null&&ui(),!1}catch{}if(n=di(e,t,i,r),n!==null)return Cu(n,e,r),Ws(n,t,r),!0}return!1}function Vs(e,t,n,r){if(r={lane:2,revertLane:yd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&Cu(t,e,2)}function Hs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Us(e,t){So=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ws(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Gs={readContext:la,use:Bo,useCallback:I,useContext:I,useEffect:I,useImperativeHandle:I,useLayoutEffect:I,useInsertionEffect:I,useMemo:I,useReducer:I,useRef:I,useState:I,useDebugValue:I,useDeferredValue:I,useTransition:I,useSyncExternalStore:I,useId:I,useHostTransitionStatus:I,useFormState:I,useActionState:I,useOptimistic:I,useMemoCache:I,useCacheRefresh:I};Gs.useEffectEvent=I;var Ks={readContext:la,use:Bo,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:gs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ms(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){ms(4,2,e,t)},useMemo:function(e,t){var n=Io();t=t===void 0?null:t;var r=e();if(Co){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(n!==void 0){var i=n(t);if(Co){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Rs.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,n=zs.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ws,useDeferredValue:function(e,t){return Ds(Io(),e,t)},useTransition:function(){var e=Qo(!1);return e=ks.bind(null,P,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Io();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),z===null)throw Error(i(349));V&127||qo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,gs(Yo.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,o,n,t),null),n},useId:function(){var e=Io(),t=z.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Do++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ps,useFormState:ss,useActionState:ss,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Io().memoizedState=Ls.bind(null,P)},useEffectEvent:function(e){var t=Io(),n={impl:e};return t.memoizedState=n,function(){if(R&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},qs={readContext:la,use:Bo,useCallback:Ts,useContext:la,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Uo,useRef:ps,useState:function(){return Uo(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){return Os(Lo(),F.memoizedState,e,t)},useTransition:function(){var e=Uo(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){return $o(Lo(),F,e,t)},useMemoCache:Vo,useCacheRefresh:Is};qs.useEffectEvent=ys;var Js={readContext:la,use:Bo,useCallback:Ts,useContext:la,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Go,useRef:ps,useState:function(){return Go(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){var n=Lo();return F===null?Ds(n,e,t):Os(n,F.memoizedState,e,t)},useTransition:function(){var e=Go(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var n=Lo();return F===null?(n.baseState=e,[e,n.queue.dispatch]):$o(n,F,e,t)},useMemoCache:Vo,useCacheRefresh:Is};Js.useEffectEvent=ys;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xu(),i=Za(r);i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(Cu(t,e,r),$a(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xu(),i=Za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(Cu(t,e,r),$a(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xu(),r=Za(n);r.tag=2,t!=null&&(r.callback=t),t=Qa(e,r,n),t!==null&&(Cu(t,e,n),$a(t,e,n))}};function Zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function $s(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function ec(e){oi(e)}function tc(e){console.error(e)}function nc(e){oi(e)}function rc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ic(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ac(e,t,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){rc(e,t)},n}function oc(e){return e=Za(e),e.tag=3,e}function sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ic(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ic(t,n,r),typeof i!=`function`&&(du===null?du=new Set([this]):du.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Fu():n.alternate===null&&Ql===0&&(Ql=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),$u(e,r,a)),!1;case 22:return n.flags|=65536,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),$u(e,r,a)),!1}throw Error(i(435,n.tag))}return $u(e,r,a),Fu(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=ac(e.stateNode,r,a),eo(e,a),Ql!==4&&(Ql=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),iu===null?iu=[o]:iu.push(o),Ql!==4&&(Ql=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ac(n.stateNode,r,e),eo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(du===null||!du.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=oc(a),sc(a,e,n,r),eo(n,a),!1}n=n.return}while(n!==null);return!1}var lc=Error(i(461)),uc=!1;function dc(e,t,n,r){t.child=e===null?qa(t,null,n,r):Ka(t,e.child,n,r)}function fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=ko(e,t,n,o,a,i),s=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(j&&s&&zi(t),t.flags|=1,dc(e,t,r,i),t.child)}function pc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,mc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Lc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Ic(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(uc=!1,t.pendingProps=r=a,Lc(e,i))e.flags&131072&&(uc=!0);else return t.lanes=e.lanes,Ic(e,t,i)}return Sc(e,t,n,r,i)}function hc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return _c(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oa(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,_c(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Oa(t,null),co(),go(t)):(Oa(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return dc(e,t,i,n),t.child}function gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _c(e,t,n,r,i){var a=Da();return a=a===null?null:{parent:ha._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Oa(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function vc(e,t){return t=jc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yc(e,t,n){return Ka(t,e.child,null,n),e=vc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function bc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=vc(t,r),t.lanes=536870912,gc(null,e);if(mo(t),(e=A)?(e=ff(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=yc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(uc||oa(e,t,n,!1),a=(n&e.childLanes)!==0,uc||a){if(r=z,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),Cu(r,e,s),lc;Fu(),t=yc(e,t,n)}else e=o.treeContext,A=gf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=vc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sc(e,t,n,r,i){return ca(t),n=ko(e,t,n,r,void 0,i),r=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(j&&r&&zi(t),t.flags|=1,dc(e,t,n,i),t.child)}function Cc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=jo(t,r,n,i),Ao(e),r=No(),e!==null&&!uc?(Po(e,t,a),Ic(e,t,a)):(j&&r&&zi(t),t.flags|=1,dc(e,t,n,a),t.child)}function wc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Xs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ya(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ys(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Xs.enqueueReplaceState(a,a.state,null),ro(t,r,a,i),no(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=$s(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Qs(t,a,r,o),Ja=!1;var f=t.memoizedState;a.state=f,ro(t,r,a,i),no(),l=t.memoizedState,s||f!==l||Ja?(typeof d==`function`&&(Ys(t,n,d,r),l=t.memoizedState),(c=Ja||Zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xa(e,t),o=t.memoizedProps,u=$s(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Qs(t,a,r,c),Ja=!1,f=t.memoizedState,a.state=f,ro(t,r,a,i),no();var p=t.memoizedState;o!==d||f!==p||Ja||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(Ys(t,n,s,r),p=t.memoizedState),(u=Ja||Zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,xc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,n,i)):dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ic(e,t,i),e}function Tc(e,t,n,r){return Xi(),t.flags|=256,dc(e,t,n,r),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(e){return{baseLanes:e,cachePool:ka()}}function Oc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=nu),e}function kc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(vo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=ff(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return mf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=jc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(null,r)):(po(t),Ac(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=Mc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=jc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ka(t,e.child,null,n),r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,t=gc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),mf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=Mc(e,t,n)}else if(uc||oa(e,t,n,!1),s=(n&e.childLanes)!==0,uc||s){if(s=z,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),Cu(s,e,r),lc;pf(c)||Fu(),t=Mc(e,t,n)}else pf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=gf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Ac(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,gc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Dc(n):(a=c.cachePool,a===null?a=ka():(l=ha._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ac(e,t){return t=jc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function jc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function Mc(e,t,n){return Ka(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function Pc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Fc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=vo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(vo,o),dc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nc(e,n,t);else if(e.tag===19)Nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pc(t,!0,n,null,a,r);break;case`together`:Pc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ic(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$l|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Rc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),na(t,ha,e.memoizedState.cache),Xi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Ic(e,t,n),e===null?null:e.sibling):kc(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Fc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(vo,vo.current),r)break;return null;case 22:return t.lanes=0,hc(e,t,n,t.pendingProps);case 24:na(t,ha,e.memoizedState.cache)}return Ic(e,t,n)}function zc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)uc=!0;else{if(!Lc(e,n)&&!(t.flags&128))return uc=!1,Rc(e,t,n);uc=!!(e.flags&131072)}else uc=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=$s(e,r),t.tag=1,t=wc(null,t,e,r,n)):(t.tag=0,t=Sc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=fc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=pc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=$s(r,t.pendingProps),wc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Xa(e,t),ro(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,ha,r),r!==o.cache&&aa(t,[ha],n,!0),no(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Tc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Tc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=gf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Ic(e,t,n);break a}dc(e,t,r,n)}t=t.child}return t;case 26:return xc(e,t),e===null?(n=Nf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Jd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Hd(r,n,e),At(r),t.stateNode=r):t.memoizedState=Nf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&j&&(r=t.stateNode=bf(t.type,t.pendingProps,ve.current),Hi=t,Wi=!0,a=A,of(t.type)?(_f=a,A=gf(r.firstChild)):A=a),dc(e,t,t.pendingProps.children,n),xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=uf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=gf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Zd(a,o)?r=null:s!==null&&Zd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ko(e,t,Mo,null,null,n),ep._currentValue=a),xc(e,t),dc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=df(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return kc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ka(t,null,r,n):dc(e,t,r,n),t.child;case 11:return fc(e,t,t.type,t.pendingProps,n);case 7:return dc(e,t,t.pendingProps,n),t.child;case 8:return dc(e,t,t.pendingProps.children,n),t.child;case 12:return dc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),dc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,dc(e,t,r,n),t.child;case 14:return pc(e,t,t.type,t.pendingProps,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 19:return Fc(e,t,n);case 31:return bc(e,t,n);case 22:return hc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(ha),e===null?(a=Da(),a===null&&(a=z,o=ga(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ya(t),na(t,ha,a)):((e.lanes&n)!==0&&(Xa(e,t),ro(t,null,null,n),no()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,ha,r),r!==a.cache&&aa(t,[ha],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,ha,r))),dc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Bc(e){e.flags|=4}function Vc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Mu())e.flags|=8192;else throw La=Na,ja}else e.flags&=-16777217}function Hc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qf(t))if(Mu())e.flags|=8192;else throw La=Na,ja}function Uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,ru|=t)}function Wc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function L(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return L(t),null;case 1:return L(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(ha),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Bc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),L(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Bc(t),o===null?(L(t),Vc(t,a,null,r,n)):(L(t),Hc(t,o))):o?o===e.memoizedState?(L(t),t.flags&=-16777217):(Bc(t),L(t),Hc(t,o)):(e=e.memoizedProps,e!==r&&Bc(t),L(t),Vc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return L(t),null}e=ge.current,Yi(t)?qi(t,e):(e=bf(a,r,n),t.stateNode=e,Bc(t))}return L(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return L(t),null}if(o=ge.current,Yi(t))qi(t,o);else{var s=Jd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Hd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Bc(t)}}return L(t),Vc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Bd(e.nodeValue,n)),e||Ki(t,!0)}else e=Jd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return L(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;L(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return L(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;L(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Uc(t,t.updateQueue),L(t),null);case 4:return xe(),e===null&&Ad(t.stateNode.containerInfo),L(t),null;case 10:return ra(t.type),L(t),null;case 19:if(he(vo),r=t.memoizedState,r===null)return L(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Wc(r,!1);else{if(Ql!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yo(e),o!==null){for(t.flags|=128,Wc(r,!1),e=o.updateQueue,t.updateQueue=e,Uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return D(vo,vo.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>lu&&(t.flags|=128,a=!0,Wc(r,!1),t.lanes=4194304)}else{if(!a)if(e=yo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Uc(t,e),Wc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return L(t),null}else 2*Ie()-r.renderingStartTime>lu&&n!==536870912&&(t.flags|=128,a=!0,Wc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(L(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=vo.current,D(vo,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(L(t),t.subtreeFlags&6&&(t.flags|=8192)):L(t),n=t.updateQueue,n!==null&&Uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(ha),L(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Kc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(ha),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(vo),null;case 4:return xe(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&he(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(ha),null;case 25:return null;default:return null}}function qc(e,t){switch(Bi(t),t.tag){case 3:ra(ha),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:he(vo);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&he(Ea);break;case 24:ra(ha)}}function Jc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){U(t,t.return,e)}}function Yc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){U(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){U(t,t.return,e)}}function Xc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{M(t,n)}catch(t){U(e,e.return,t)}}}function Zc(e,t,n){n.props=$s(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){U(e,t,n)}}function Qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){U(e,t,n)}}function $c(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){U(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){U(e,t,n)}else n.current=null}function el(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){U(e,e.return,t)}}function tl(e,t,n){try{var r=e.stateNode;Ud(r,e.type,n,t),r[vt]=t}catch(t){U(e,e.return,t)}}function nl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&of(e.type)||e.tag===4}function rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||nl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&of(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(r!==4&&(r===27&&of(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&of(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function ol(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Hd(t,r,n),t[_t]=e,t[vt]=n}catch(t){U(e,e.return,t)}}var sl=!1,cl=!1,ll=!1,ul=typeof WeakSet==`function`?WeakSet:Set,dl=null;function fl(e,t){if(e=e.containerInfo,Kd=lp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(qd={focusedElem:e,selectionRange:n},lp=!1,dl=t;dl!==null;)if(t=dl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,dl=e;else for(;dl!==null;){switch(t=dl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=$s(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){U(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)lf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:lf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,dl=e;break}dl=t.return}}function pl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ol(e,n),r&4&&Jc(5,n);break;case 1:if(Ol(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){U(n,n.return,e)}else{var i=$s(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){U(n,n.return,e)}}r&64&&Xc(n),r&512&&Qc(n,n.return);break;case 3:if(Ol(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{M(e,t)}catch(e){U(n,n.return,e)}}break;case 27:t===null&&r&4&&ol(n);case 26:case 5:Ol(e,n),t===null&&r&4&&el(n),r&512&&Qc(n,n.return);break;case 12:Ol(e,n);break;case 31:Ol(e,n),r&4&&yl(e,n);break;case 13:Ol(e,n),r&4&&bl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nd.bind(null,n),hf(e,n))));break;case 22:if(r=n.memoizedState!==null||sl,!r){t=t!==null&&t.memoizedState!==null||cl,i=sl;var a=cl;sl=r,(cl=t)&&!a?Al(e,n,(n.subtreeFlags&8772)!=0):Ol(e,n),sl=i,cl=a}break;case 30:break;default:Ol(e,n)}}function ml(e){var t=e.alternate;t!==null&&(e.alternate=null,ml(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hl=null,gl=!1;function _l(e,t,n){for(n=n.child;n!==null;)vl(e,t,n),n=n.sibling}function vl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:cl||$c(n,t),_l(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:cl||$c(n,t);var r=hl,i=gl;of(n.type)&&(hl=n.stateNode,gl=!1),_l(e,t,n),xf(n.stateNode),hl=r,gl=i;break;case 5:cl||$c(n,t);case 6:if(r=hl,i=gl,hl=null,_l(e,t,n),hl=r,gl=i,hl!==null)if(gl)try{(hl.nodeType===9?hl.body:hl.nodeName===`HTML`?hl.ownerDocument.body:hl).removeChild(n.stateNode)}catch(e){U(n,t,e)}else try{hl.removeChild(n.stateNode)}catch(e){U(n,t,e)}break;case 18:hl!==null&&(gl?(e=hl,sf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):sf(hl,n.stateNode));break;case 4:r=hl,i=gl,hl=n.stateNode.containerInfo,gl=!0,_l(e,t,n),hl=r,gl=i;break;case 0:case 11:case 14:case 15:Yc(2,n,t),cl||Yc(4,n,t),_l(e,t,n);break;case 1:cl||($c(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Zc(n,t,r)),_l(e,t,n);break;case 21:_l(e,t,n);break;case 22:cl=(r=cl)||n.memoizedState!==null,_l(e,t,n),cl=r;break;default:_l(e,t,n)}}function yl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){U(t,t.return,e)}}}function bl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){U(t,t.return,e)}}function xl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ul),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ul),t;default:throw Error(i(435,e.tag))}}function Sl(e,t){var n=xl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=rd.bind(null,e,t);t.then(r,r)}})}function Cl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(of(c.type)){hl=c.stateNode,gl=!1;break a}break;case 5:hl=c.stateNode,gl=!1;break a;case 3:case 4:hl=c.stateNode.containerInfo,gl=!0;break a}c=c.return}if(hl===null)throw Error(i(160));vl(o,s,a),hl=null,gl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tl(t,e),t=t.sibling}var wl=null;function Tl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cl(t,e),El(e),r&4&&(Yc(3,e,e.return),Jc(3,e),Yc(5,e,e.return));break;case 1:Cl(t,e),El(e),r&512&&(cl||n===null||$c(n,n.return)),r&64&&sl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=wl;if(Cl(t,e),El(e),r&512&&(cl||n===null||$c(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Hd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Wf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Hd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Wf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Hd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Gf(a,e.type,e.stateNode);else e.stateNode=zf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&tl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Gf(a,e.type,e.stateNode):zf(a,r,e.memoizedProps))}break;case 27:Cl(t,e),El(e),r&512&&(cl||n===null||$c(n,n.return)),n!==null&&r&4&&tl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Cl(t,e),El(e),r&512&&(cl||n===null||$c(n,n.return)),e.flags&32){a=e.stateNode;try{nn(a,``)}catch(t){U(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,tl(e,a,n===null?a:n.memoizedProps)),r&1024&&(ll=!0);break;case 6:if(Cl(t,e),El(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){U(e,e.return,t)}}break;case 3:if(Uf=null,a=wl,wl=wf(t.containerInfo),Cl(t,e),wl=a,El(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){U(e,e.return,t)}ll&&(ll=!1,Dl(e));break;case 4:r=wl,wl=wf(e.stateNode.containerInfo),Cl(t,e),El(e),wl=r;break;case 12:Cl(t,e),El(e);break;case 31:Cl(t,e),El(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Sl(e,r)));break;case 13:Cl(t,e),El(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(su=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Sl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=sl,d=cl;if(sl=u||a,cl=d||l,Cl(t,e),cl=d,sl=u,El(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||sl||cl||kl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){U(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){U(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?cf(m,!0):cf(l.stateNode,!1)}catch(e){U(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Sl(e,n))));break;case 19:Cl(t,e),El(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Sl(e,r)));break;case 30:break;case 21:break;default:Cl(t,e),El(e)}}function El(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(nl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;al(e,rl(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(nn(o,``),n.flags&=-33),al(e,rl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;il(e,rl(e),s);break;default:throw Error(i(161))}}catch(t){U(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ol(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pl(e,t.alternate,t),t=t.sibling}function kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yc(4,t,t.return),kl(t);break;case 1:$c(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Zc(t,t.return,n),kl(t);break;case 27:xf(t.stateNode);case 26:case 5:$c(t,t.return),kl(t);break;case 22:t.memoizedState===null&&kl(t);break;case 30:kl(t);break;default:kl(t)}e=e.sibling}}function Al(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Al(i,a,n),Jc(4,a);break;case 1:if(Al(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){U(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)io(c[i],s)}catch(e){U(r,r.return,e)}}n&&o&64&&Xc(a),Qc(a,a.return);break;case 27:ol(a);case 26:case 5:Al(i,a,n),n&&r===null&&o&4&&el(a),Qc(a,a.return);break;case 12:Al(i,a,n);break;case 31:Al(i,a,n),n&&o&4&&yl(i,a);break;case 13:Al(i,a,n),n&&o&4&&bl(i,a);break;case 22:a.memoizedState===null&&Al(i,a,n),Qc(a,a.return);break;case 30:break;default:Al(i,a,n)}t=t.sibling}}function jl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_a(n))}function Ml(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e))}function Nl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pl(e,t,n,r),t=t.sibling}function Pl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Nl(e,t,n,r),i&2048&&Jc(9,t);break;case 1:Nl(e,t,n,r);break;case 3:Nl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e)));break;case 12:if(i&2048){Nl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){U(t,t.return,e)}}else Nl(e,t,n,r);break;case 31:Nl(e,t,n,r);break;case 13:Nl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Nl(e,t,n,r):(a._visibility|=2,Fl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Nl(e,t,n,r):Il(e,t),i&2048&&jl(o,t);break;case 24:Nl(e,t,n,r),i&2048&&Ml(t.alternate,t);break;default:Nl(e,t,n,r)}}function Fl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Fl(a,o,s,c,i),Jc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Fl(a,o,s,c,i)):u._visibility&2?Fl(a,o,s,c,i):Il(a,o),i&&l&2048&&jl(o.alternate,o);break;case 24:Fl(a,o,s,c,i),i&&l&2048&&Ml(o.alternate,o);break;default:Fl(a,o,s,c,i)}t=t.sibling}}function Il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Il(n,r),i&2048&&jl(r.alternate,r);break;case 24:Il(n,r),i&2048&&Ml(r.alternate,r);break;default:Il(n,r)}t=t.sibling}}var Ll=8192;function Rl(e,t,n){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)zl(e,t,n),e=e.sibling}function zl(e,t,n){switch(e.tag){case 26:Rl(e,t,n),e.flags&Ll&&e.memoizedState!==null&&Jf(n,wl,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,n);break;case 3:case 4:var r=wl;wl=wf(e.stateNode.containerInfo),Rl(e,t,n),wl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ll,Ll=16777216,Rl(e,t,n),Ll=r):Rl(e,t,n));break;default:Rl(e,t,n)}}function Bl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];dl=r,Wl(r,e)}Bl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hl(e),e=e.sibling}function Hl(e){switch(e.tag){case 0:case 11:case 15:Vl(e),e.flags&2048&&Yc(9,e,e.return);break;case 3:Vl(e);break;case 12:Vl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ul(e)):Vl(e);break;default:Vl(e)}}function Ul(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];dl=r,Wl(r,e)}Bl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yc(8,t,t.return),Ul(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ul(t));break;default:Ul(t)}e=e.sibling}}function Wl(e,t){for(;dl!==null;){var n=dl;switch(n.tag){case 0:case 11:case 15:Yc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_a(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,dl=r;else a:for(n=e;dl!==null;){r=dl;var i=r.sibling,a=r.return;if(ml(r),r===n){dl=null;break a}if(i!==null){i.return=a,dl=i;break a}dl=a}}}var Gl={getCacheForType:function(e){var t=la(ha),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(ha).controller.signal}},Kl=typeof WeakMap==`function`?WeakMap:Map,R=0,z=null,B=null,V=0,H=0,ql=null,Jl=!1,Yl=!1,Xl=!1,Zl=0,Ql=0,$l=0,eu=0,tu=0,nu=0,ru=0,iu=null,au=null,ou=!1,su=0,cu=0,lu=1/0,uu=null,du=null,fu=0,pu=null,mu=null,hu=0,gu=0,_u=null,vu=null,yu=0,bu=null;function xu(){return R&2&&V!==0?V&-V:T.T===null?mt():yd()}function Su(){if(nu===0)if(!(V&536870912)||j){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),nu=e}else nu=536870912;return e=uo.current,e!==null&&(e.flags|=32),nu}function Cu(e,t,n){(e===z&&(H===2||H===9)||e.cancelPendingCommit!==null)&&(Au(e,0),Du(e,V,nu,!1)),st(e,n),(!(R&2)||e!==z)&&(e===z&&(!(R&2)&&(eu|=n),Ql===4&&Du(e,V,nu,!1)),dd(e))}function wu(e,t,n){if(R&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Ru(e,t):Iu(e,t,!0),o=r;do{if(a===0){Yl&&!r&&Du(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Eu(n)){a=Iu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=iu;var l=c.current.memoizedState.isDehydrated;if(l&&(Au(c,s).flags|=256),s=Iu(c,s,!1),s!==2){if(Xl&&!l){c.errorRecoveryDisabledLanes|=o,eu|=o,a=4;break a}o=au,au=a,o!==null&&(au===null?au=o:au.push.apply(au,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Au(e,0),Du(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Du(r,t,nu,!Jl);break a;case 2:au=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=su+300-Ie(),10<a)){if(Du(r,t,nu,!Jl),nt(r,0,!0)!==0)break a;hu=t,r.timeoutHandle=ef(Tu.bind(null,r,n,au,uu,ou,t,nu,eu,ru,Jl,o,`Throttled`,-0,0),a);break a}Tu(r,n,au,uu,ou,t,nu,eu,ru,Jl,o,null,-0,0)}}break}while(1);dd(e)}function Tu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},zl(t,a,d);var m=(a&62914560)===a?su-Ie():(a&4194048)===a?cu-Ie():0;if(m=Xf(d,m),m!==null){hu=a,e.cancelPendingCommit=m(Gu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Du(e,a,o,!l);return}}Gu(e,t,a,n,r,i,o,s,c)}function Eu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Du(e,t,n,r){t&=~tu,t&=~eu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function Ou(){return R&6?!0:(fd(0,!1),!1)}function ku(){if(B!==null){if(H===0)var e=B.return;else e=B,ta=ea=null,Fo(e),Ba=null,Va=0,e=B;for(;e!==null;)qc(e.alternate,e),e=e.return;B=null}}function Au(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,tf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),hu=0,ku(),z=e,B=n=yi(e.current,null),V=t,H=0,ql=null,Jl=!1,Yl=rt(e,t),Xl=!1,ru=nu=tu=eu=$l=Ql=0,au=iu=null,ou=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Zl=t,ui(),n}function ju(e,t){P=null,T.H=Gs,t===Aa||t===Ma?(t=Ra(),H=3):t===ja?(t=Ra(),H=4):H=t===lc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ql=t,B===null&&(Ql=1,rc(e,Di(t,e.current)))}function Mu(){var e=uo.current;return e===null?!0:(V&4194048)===V?fo===null:(V&62914560)===V||V&536870912?e===fo:!1}function Nu(){var e=T.H;return T.H=Gs,e===null?Gs:e}function Pu(){var e=T.A;return T.A=Gl,e}function Fu(){Ql=4,Jl||(V&4194048)!==V&&uo.current!==null||(Yl=!0),!($l&134217727)&&!(eu&134217727)||z===null||Du(z,V,nu,!1)}function Iu(e,t,n){var r=R;R|=2;var i=Nu(),a=Pu();(z!==e||V!==t)&&(uu=null,Au(e,t)),t=!1;var o=Ql;a:do try{if(H!==0&&B!==null){var s=B,c=ql;switch(H){case 8:ku(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=H;if(H=0,ql=null,Hu(e,s,c,l),n&&Yl){o=0;break a}break;default:l=H,H=0,ql=null,Hu(e,s,c,l)}}Lu(),o=Ql;break}catch(t){ju(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,R=r,T.H=i,T.A=a,B===null&&(z=null,V=0,ui()),o}function Lu(){for(;B!==null;)Bu(B)}function Ru(e,t){var n=R;R|=2;var r=Nu(),a=Pu();z!==e||V!==t?(uu=null,lu=Ie()+500,Au(e,t)):Yl=rt(e,t);a:do try{if(H!==0&&B!==null){t=B;var o=ql;b:switch(H){case 1:H=0,ql=null,Hu(e,t,o,1);break;case 2:case 9:if(Pa(o)){H=0,ql=null,Vu(t);break}t=function(){H!==2&&H!==9||z!==e||(H=7),dd(e)},o.then(t,t);break a;case 3:H=7;break a;case 4:H=5;break a;case 7:Pa(o)?(H=0,ql=null,Vu(t)):(H=0,ql=null,Hu(e,t,o,7));break;case 5:var s=null;switch(B.tag){case 26:s=B.memoizedState;case 5:case 27:var c=B;if(s?qf(s):c.stateNode.complete){H=0,ql=null;var l=c.sibling;if(l!==null)B=l;else{var u=c.return;u===null?B=null:(B=u,Uu(u))}break b}}H=0,ql=null,Hu(e,t,o,5);break;case 6:H=0,ql=null,Hu(e,t,o,6);break;case 8:ku(),Ql=6;break a;default:throw Error(i(462))}}zu();break}catch(t){ju(e,t)}while(1);return ta=ea=null,T.H=r,T.A=a,R=n,B===null?(z=null,V=0,ui(),Ql):0}function zu(){for(;B!==null&&!Pe();)Bu(B)}function Bu(e){var t=zc(e.alternate,e,Zl);e.memoizedProps=e.pendingProps,t===null?Uu(e):B=t}function Vu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cc(n,t,t.pendingProps,t.type,void 0,V);break;case 11:t=Cc(n,t,t.pendingProps,t.type.render,t.ref,V);break;case 5:Fo(t);default:qc(n,t),t=B=bi(t,Zl),t=zc(n,t,Zl)}e.memoizedProps=e.pendingProps,t===null?Uu(e):B=t}function Hu(e,t,n,r){ta=ea=null,Fo(t),Ba=null,Va=0;var i=t.return;try{if(cc(e,i,t,n,V)){Ql=1,rc(e,Di(n,e.current)),B=null;return}}catch(t){if(i!==null)throw B=i,t;Ql=1,rc(e,Di(n,e.current)),B=null;return}t.flags&32768?(j||r===1?e=!0:Yl||V&536870912?e=!1:(Jl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wu(t,e)):Uu(t)}function Uu(e){var t=e;do{if(t.flags&32768){Wu(t,Jl);return}e=t.return;var n=Gc(t.alternate,t,Zl);if(n!==null){B=n;return}if(t=t.sibling,t!==null){B=t;return}B=t=e}while(t!==null);Ql===0&&(Ql=5)}function Wu(e,t){do{var n=Kc(e.alternate,e);if(n!==null){n.flags&=32767,B=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){B=e;return}B=e=n}while(e!==null);Ql=6,B=null}function Gu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Xu();while(fu!==0);if(R&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=li,ct(e,n,o,s,c,l),e===z&&(B=z=null,V=0),mu=t,pu=e,hu=n,gu=o,_u=a,vu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,id(Be,function(){return Zu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=R,R|=4;try{fl(e,t,n)}finally{R=s,E.p=a,T.T=r}}fu=1,Ku(),qu(),Ju()}}function Ku(){if(fu===1){fu=0;var e=pu,t=mu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=R;R|=4;try{Tl(t,e);var a=qd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Kd,qd=Kd=null}finally{R=i,E.p=r,T.T=n}}e.current=t,fu=2}}function qu(){if(fu===2){fu=0;var e=pu,t=mu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=R;R|=4;try{pl(e,t.alternate,t)}finally{R=i,E.p=r,T.T=n}}fu=3}}function Ju(){if(fu===4||fu===3){fu=0,Fe();var e=pu,t=mu,n=hu,r=vu;t.subtreeFlags&10256||t.flags&10256?fu=5:(fu=0,mu=pu=null,Yu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(du=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}hu&3&&Xu(),dd(e),i=e.pendingLanes,n&261930&&i&42?e===bu?yu++:(yu=0,bu=e):yu=0,fd(0,!1)}}function Yu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_a(t)))}function Xu(){return Ku(),qu(),Ju(),Zu()}function Zu(){if(fu!==5)return!1;var e=pu,t=gu;gu=0;var n=pt(hu),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=_u,_u=null;var o=pu,s=hu;if(fu=0,mu=pu=null,hu=0,R&6)throw Error(i(331));var c=R;if(R|=4,Hl(o.current),Pl(o,o.current,s,n),R=c,fd(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Yu(e,t)}}function Qu(e,t,n){t=Di(n,t),t=ac(e.stateNode,t,2),e=Qa(e,t,2),e!==null&&(st(e,2),dd(e))}function U(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(du===null||!du.has(r))){e=Di(n,e),n=oc(2),r=Qa(t,n,2),r!==null&&(sc(n,r,t,e),st(r,2),dd(r));break}}t=t.return}}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Xl=!0,i.add(n),e=ed.bind(null,e,t,n),t.then(e,e))}function ed(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,z===e&&(V&n)===n&&(Ql===4||Ql===3&&(V&62914560)===V&&300>Ie()-su?!(R&2)&&Au(e,0):tu|=n,ru===V&&(ru=0)),dd(e)}function td(e,t){t===0&&(t=at()),e=fi(e,t),e!==null&&(st(e,t),dd(e))}function nd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function rd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),td(e,n)}function id(e,t){return Me(e,t)}var ad=null,od=null,sd=!1,cd=!1,ld=!1,ud=0;function dd(e){e!==od&&e.next===null&&(od===null?ad=od=e:od=od.next=e),cd=!0,sd||(sd=!0,vd())}function fd(e,t){if(!ld&&cd){ld=!0;do for(var n=!1,r=ad;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,_d(r,a))}else a=V,a=nt(r,r===z?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,_d(r,a));r=r.next}while(n);ld=!1}}function pd(){md()}function md(){cd=sd=!1;var e=0;ud!==0&&$d()&&(e=ud);for(var t=Ie(),n=null,r=ad;r!==null;){var i=r.next,a=hd(r,t);a===0?(r.next=null,n===null?ad=i:n.next=i,i===null&&(od=n)):(n=r,(e!==0||a&3)&&(cd=!0)),r=i}fu!==0&&fu!==5||fd(e,!1),ud!==0&&(ud=0)}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=z,n=V,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(H===2||H===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=gd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function gd(e,t){if(fu!==0&&fu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xu()&&e.callbackNode!==n)return null;var r=V;return r=nt(e,e===z?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(wu(e,r,t),hd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?gd.bind(null,e):null)}function _d(e,t){if(Xu())return null;wu(e,t,!0)}function vd(){rf(function(){R&6?Me(Re,pd):md()})}function yd(){if(ud===0){var e=ba;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),ud=e}return ud}function bd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(``+e)}function xd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=bd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?bd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Mn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ud!==0){var e=o?xd(i,o):new FormData(i);js(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?xd(i,o):new FormData(i),js(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Cd=0;Cd<ii.length;Cd++){var wd=ii[Cd];ai(wd.toLowerCase(),`on`+(wd[0].toUpperCase()+wd.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Td=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Ed=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Td));function Dd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function W(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(jd(t,e,2,!1),n.add(r))}function Od(e,t,n){var r=0;t&&(r|=4),jd(n,e,r,t)}var kd=`_reactListening`+Math.random().toString(36).slice(2);function Ad(e){if(!e[kd]){e[kd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(Ed.has(t)||Od(t,!1,e),Od(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kd]||(t[kd]=!0,Od(`selectionchange`,!1,t))}}function jd(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!xn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Md(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}vn(function(){var r=a,i=pn(n),s=[];a:{var c=ri.get(e);if(c!==void 0){var l=Mn,u=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=Vn;break;case`focusout`:u=`blur`,l=Vn;break;case`beforeblur`:case`afterblur`:l=Vn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Xr:case Zr:case Qr:l=Hn;break;case ni:l=Qn;break;case`scroll`:case`scrollend`:l=Pn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=O;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=yn(m,p),g!=null&&d.push(Nd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==fn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=O,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Fd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Id(s,c,l,d,!1),u!==null&&f!==null&&Id(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c))if(xr)v=Ar;else{v=Or;var y=Dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Qt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(s,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,ur=!0)),y=Pd(r,x),0<y.length&&(x=new Wn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Pd(r,`onBeforeInput`),0<x.length&&(y=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Sd(s,e,r,n,i)}Dd(s,t)})}function Nd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=yn(e,n),i!=null&&r.unshift(Nd(e,i,a)),i=yn(e,t),i!=null&&r.push(Nd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Fd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Id(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=yn(n,a),l!=null&&o.unshift(Nd(n,l,c))):i||(l=yn(n,a),l!=null&&o.push(Nd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ld=/\r\n?/g,Rd=/\u0000|\uFFFD/g;function zd(e){return(typeof e==`string`?e:``+e).replace(Ld,`
`).replace(Rd,``)}function Bd(e,t){return t=zd(t),zd(e)===t}function G(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&nn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:on(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&G(e,t,`name`,a.name,a,null),G(e,t,`formEncType`,a.formEncType,a,null),G(e,t,`formMethod`,a.formMethod,a,null),G(e,t,`formTarget`,a.formTarget,a,null)):(G(e,t,`encType`,a.encType,a,null),G(e,t,`method`,a.method,a,null),G(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`onScroll`:r!=null&&W(`scroll`,e);break;case`onScrollEnd`:r!=null&&W(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:W(`beforetoggle`,e),W(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=cn.get(n)||n,zt(e,n,r))}}function Vd(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&nn(e,``+r);break;case`onScroll`:r!=null&&W(`scroll`,e);break;case`onScrollEnd`:r!=null&&W(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Hd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:W(`error`,e),W(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:G(e,t,o,s,n,null)}}a&&G(e,t,`srcSet`,n.srcSet,n,null),r&&G(e,t,`src`,n.src,n,null);return;case`input`:W(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:G(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in W(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:G(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in W(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:G(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:G(e,t,l,r,n,null)}return;case`dialog`:W(`beforetoggle`,e),W(`toggle`,e),W(`cancel`,e),W(`close`,e);break;case`iframe`:case`object`:W(`load`,e);break;case`video`:case`audio`:for(r=0;r<Td.length;r++)W(Td[r],e);break;case`image`:W(`error`,e),W(`load`,e);break;case`details`:W(`toggle`,e);break;case`embed`:case`source`:case`link`:W(`error`,e),W(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:G(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Vd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&G(e,t,c,r,n,null))}function Ud(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||G(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&G(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||G(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&G(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:G(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&G(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:G(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:G(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&G(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:G(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Vd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Vd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&G(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||G(e,t,f,p,r,m)}function Wd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Gd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Wd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Wd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Kd=null,qd=null;function Jd(e){return e.nodeType===9?e:e.ownerDocument}function Yd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Xd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Zd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qd=null;function $d(){var e=window.event;return e&&e.type===`popstate`?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var ef=typeof setTimeout==`function`?setTimeout:void 0,tf=typeof clearTimeout==`function`?clearTimeout:void 0,nf=typeof Promise==`function`?Promise:void 0,rf=typeof queueMicrotask==`function`?queueMicrotask:nf===void 0?ef:function(e){return nf.resolve(null).then(e).catch(af)};function af(e){setTimeout(function(){throw e})}function of(e){return e===`head`}function sf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)xf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,xf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&xf(e.ownerDocument.body);n=i}while(n);Pp(t)}function cf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function lf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:lf(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function uf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=gf(e.nextSibling),e===null)break}return null}function df(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=gf(e.nextSibling),e===null))return null;return e}function ff(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=gf(e.nextSibling),e===null))return null;return e}function pf(e){return e.data===`$?`||e.data===`$~`}function mf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function hf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function gf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var _f=null;function vf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return gf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function bf(e,t,n){switch(t=Jd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function xf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var Sf=new Map,Cf=new Set;function wf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tf=E.d;E.d={f:Ef,r:Df,D:q,C:J,L:kf,m:Y,X:jf,S:Af,M:Mf};function Ef(){var e=Tf.f(),t=Ou();return e||t}function Df(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Ns(t):Tf.r(e)}var Of=typeof document>`u`?null:document;function K(e,t,n){var r=Of;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Cf.has(i)||(Cf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Hd(t,`link`,e),At(t),r.head.appendChild(t)))}}function q(e){Tf.D(e),K(`dns-prefetch`,e,null)}function J(e,t){Tf.C(e,t),K(`preconnect`,e,t)}function kf(e,t,n){Tf.L(e,t,n);var r=Of;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Pf(e);break;case`script`:a=Lf(e)}Sf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Sf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(X(a))||t===`script`&&r.querySelector(Rf(a))||(t=r.createElement(`link`),Hd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Y(e,t){Tf.m(e,t);var n=Of;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Lf(e)}if(!Sf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),Sf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Rf(a)))return}r=n.createElement(`link`),Hd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Af(e,t,n){Tf.S(e,t,n);var r=Of;if(r&&e){var i=kt(r).hoistableStyles,a=Pf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(X(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Sf.get(a))&&Vf(e,n);var c=o=r.createElement(`link`);At(c),Hd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Bf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jf(e,t){Tf.X(e,t);var n=Of;if(n&&e){var r=kt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=h({src:e,async:!0},t),(t=Sf.get(i))&&Hf(e,t),a=n.createElement(`script`),At(a),Hd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t){Tf.M(e,t);var n=Of;if(n&&e){var r=kt(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=Sf.get(i))&&Hf(e,t),a=n.createElement(`script`),At(a),Hd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t,n,r){var a=(a=ve.current)?wf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Pf(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pf(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(X(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Sf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sf.set(e,n),o||If(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Lf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pf(e){return`href="`+Yt(e)+`"`}function X(e){return`link[rel="stylesheet"][`+e+`]`}function Ff(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function If(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Hd(t,`link`,n),At(t),e.head.appendChild(t))}function Lf(e){return`[src="`+Yt(e)+`"]`}function Rf(e){return`script[async]`+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Hd(r,`style`,a),Bf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pf(n.href);var o=e.querySelector(X(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Ff(n),(a=Sf.get(a))&&Vf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Hd(o,`link`,r),t.state.loading|=4,Bf(o,n.precedence,e),t.instance=o;case`script`:return o=Lf(n.src),(a=e.querySelector(Rf(o)))?(t.instance=a,At(a),a):(r=n,(a=Sf.get(o))&&(r=h({},n),Hf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Hd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Bf(r,n.precedence,e));return t.instance}function Bf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Uf=null;function Wf(e,t,n){if(Uf===null){var r=new Map,i=Uf=new Map;i.set(n,r)}else i=Uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Kf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function qf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Jf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pf(r.href),a=t.querySelector(X(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Zf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Ff(r),(i=Sf.get(i))&&Vf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Hd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Zf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Yf=0;function Xf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Yf===0&&(Yf=62500*Gd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Z=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Z=new Map,t.forEach($f,e),Z=null,Zf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Z.get(e);if(n)var r=n.get(null);else{n=new Map,Z.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Zf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ga(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ya(a),e}function rp(e){return e?(e=hi,e):hi}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Qa(e,r,t),n!==null&&(Cu(n,e,t),$a(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&Cu(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=xu();t=ft(t);var n=fi(e,t);n!==null&&Cu(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,fp(e,t,n,r)}finally{E.p=a,T.T=i}}function dp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,fp(e,t,n,r)}finally{E.p=a,T.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)Md(e,t,r,mp,n),Tp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}dd(a),!(R&6)&&(lu=Ie()+500,fd(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&Cu(s,a,2),Ou(),op(a,2)}if(a=pp(r),a===null&&Md(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Md(e,t,r,null,n)}}function pp(e){return e=pn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Q(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return vp=Q(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Q(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Q(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Q(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Q(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fn=r,n.target.dispatchEvent(r),fn=null}else return t=Dt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){_p=!1,vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp!==null&&Op(bp)&&(bp=null),xp.forEach(kp),Sp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,js(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp!==null&&jp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,xu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Ou(),t[yt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.4`)throw Error(i(527,Rp,`19.2.4`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ge=Bp.inject(zp),Ke=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=ec,s=tc,c=nc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[yt]=t.current,Ad(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/SimulateUniverse/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=`popstate`;function S(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function C(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ie(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ae(t)}return se(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function te(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substring(2,10)}function re(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ie(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?oe(t):t,state:n,key:t&&t.key||r||ne(),unstable_mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function oe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function se(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=S(e)?e:ie(h.location,e,t);n&&n(r,e),l=u()+1;let d=re(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=S(e)?e:ie(h.location,e,t);n&&n(r,e),l=u();let i=re(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ce(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ce(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ae(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function le(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r){let i=Te((typeof t==`string`?oe(t):t).pathname||`/`,n);if(i==null)return null;let a=E(e);fe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=we(i);o=xe(a[e],t,r)}return o}function T(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function E(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ne([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),E(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,me=3,he=2,D=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=he),n.filter(e=>!ve(e)).reduce((e,t)=>e+(pe.test(t)?me:t===``?D:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ne([a,u.pathname]),pathnameBase:Pe(Ne([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ne([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){te(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return te(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?oe(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function Oe(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=oe(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.join(`/`).replace(/\/\/+/g,`/`),Pe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{te(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var Ue=[`GET`,...He];new Set(Ue);var We=x.createContext(null);We.displayName=`DataRouter`;var Ge=x.createContext(null);Ge.displayName=`DataRouterState`;var Ke=x.createContext(!1),qe=x.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=x.createContext(new Map);Je.displayName=`Fetchers`;var Ye=x.createContext(null);Ye.displayName=`Await`;var Xe=x.createContext(null);Xe.displayName=`Navigation`;var Ze=x.createContext(null);Ze.displayName=`Location`;var Qe=x.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName=`Route`;var $e=x.createContext(null);$e.displayName=`RouteError`;var et=`REACT_ROUTER_ERROR`,tt=`REDIRECT`,nt=`ROUTE_ERROR_RESPONSE`;function rt(e){if(e.startsWith(`${et}:${tt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function it(e){if(e.startsWith(`${et}:${nt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function at(e,{relative:t}={}){w(ot(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Xe),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ne([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ot(){return x.useContext(Ze)!=null}function st(){return w(ot(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(Ze).location}var ct=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function lt(e){x.useContext(Xe).static||x.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=x.useContext(Qe);return e?Nt():dt()}function dt(){w(ot(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(We),{basename:t,navigator:n}=x.useContext(Xe),{matches:r}=x.useContext(Qe),{pathname:i}=st(),a=JSON.stringify(je(r)),o=x.useRef(!1);return lt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(te(o.current,ct),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ne([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var ft=x.createContext(null);function pt(e){let t=x.useContext(Qe).outlet;return x.useMemo(()=>t&&x.createElement(ft.Provider,{value:e},t),[t,e])}function mt(e,{relative:t}={}){let{matches:n}=x.useContext(Qe),{pathname:r}=st(),i=JSON.stringify(je(n));return x.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){w(ot(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Xe),{matches:i}=x.useContext(Qe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ft(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=st(),d;if(t){let e=typeof t==`string`?oe(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=le(e,{pathname:p});te(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),te(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ne([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ne([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(Ze.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=Mt(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var vt=x.createElement(_t,null),yt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=it(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(Qe.Provider,{value:this.props.routeContext},x.createElement($e.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(xt,{error:e},t):t}};yt.contextType=Ke;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=x.useContext(Xe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=rt(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=x.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Qe.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Ft(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=x.useContext(We);return w(t,wt(e)),t}function Et(e){let t=x.useContext(Ge);return w(t,wt(e)),t}function Dt(e){let t=x.useContext(Qe);return w(t,wt(e)),t}function Ot(e){let t=Dt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function kt(){return Ot(`useRouteId`)}function At(){return Et(`useNavigation`).navigation}function jt(){let{matches:e,loaderData:t}=Et(`useMatches`);return x.useMemo(()=>e.map(e=>T(e,t)),[e,t])}function Mt(){let e=x.useContext($e),t=Et(`useRouteError`),n=Ot(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Nt(){let{router:e}=Tt(`useNavigate`),t=Ot(`useNavigate`),n=x.useRef(!1);return lt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{te(n.current,ct),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Pt={};function Ft(e,t,n){!t&&!Pt[e]&&(Pt[e]=!0,te(!1,n))}x.useOptimistic,x.memo(It);function It({routes:e,future:t,state:n,isStatic:r,onError:i}){return gt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Lt(e){return pt(e.context)}function Rt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!ot(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=oe(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return te(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Xe.Provider,{value:c},x.createElement(Ze.Provider,{children:t,value:h}))}function Bt({children:e,location:t}){return ht(Vt(e),t)}x.Component;function Vt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Vt(e.props.children,i));return}w(e.type===Rt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vt(e.props.children,i)),n.push(a)}),n}var Ht=`get`,Ut=`application/x-www-form-urlencoded`;function Wt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gt(e){return Wt(e)&&e.tagName.toLowerCase()===`button`}function Kt(e){return Wt(e)&&e.tagName.toLowerCase()===`form`}function qt(e){return Wt(e)&&e.tagName.toLowerCase()===`input`}function Jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!Jt(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(te(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`),null):e}function en(e,t){let n,r,i,a,o;if(Kt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`enctype`))||Ut,a=new FormData(e)}else if(Gt(e)||qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Ut,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Wt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ht,r=null,i=Ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=x.useContext(We);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=x.useContext(Ge);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=x.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=x.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=x.useContext(vn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let{router:n}=gn(),r=x.useMemo(()=>le(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(wn,{page:e,matches:r,...t}):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=st(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=x.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.13.2`)}catch{}function Dn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=C({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function On({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(zt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(Xe),v=typeof l==`string`&&kn.test(l),y=Ve(l,h);l=y.to;let b=at(l,{relative:r}),ee=st(),S=null;if(o){let e=Me(o,[],ee.unstable_mask?ee.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ne([h,e.pathname])),S=g.createHref(e)}let[C,w,te]=bn(n,p),ne=Ln(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||ne(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...te,href:(ie?S:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:Tn(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?x.createElement(x.Fragment,null,ae,x.createElement(Sn,{page:b})):ae});An.displayName=`Link`;var jn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=st(),f=x.useContext(Ge),{navigator:p,basename:m}=x.useContext(Xe),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Te(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(S):i;return x.createElement(An,{...c,"aria-current":C,className:w,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(S):s)});jn.displayName=`NavLink`;var Mn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ht,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(Xe),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&kn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=x.useContext(vn),{basename:i}=x.useContext(Xe),a=st(),o=jt();Gn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(We);return w(t,Pn(e)),t}function In(e){let t=x.useContext(Ge);return w(t,Pn(e)),t}function Ln(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ut(),d=st(),f=mt(e,{relative:o});return x.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?ae(d)===ae(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(Xe),n=kt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=x.useContext(Xe),r=x.useContext(Qe);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=st();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ne([n,a.pathname])),ae(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=x.useContext(Xe),o=st(),s=jt(),c=At();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(x.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){te(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{te(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=x.useContext(qe);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Jn=g(),Yn=()=>void 0,Xn={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},O=function(e,t){if(!e)throw Zn(t)},Zn=function(e){return Error(`Firebase Database (`+Xn.SDK_VERSION+`) INTERNAL ASSERT FAILED: `+e)},Qn=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$n=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},er={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let s=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||s==null)throw new tr;let c=i<<2|a>>4;if(r.push(c),o!==64){let e=a<<4&240|o>>2;if(r.push(e),s!==64){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},tr=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},nr=function(e){let t=Qn(e);return er.encodeByteArray(t,!0)},rr=function(e){return nr(e).replace(/\./g,``)},ir=function(e){try{return er.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};function ar(e){return or(void 0,e)}function or(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)!t.hasOwnProperty(n)||!sr(n)||(e[n]=or(e[n],t[n]));return e}function sr(e){return e!==`__proto__`}function cr(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}var lr=()=>cr().__FIREBASE_DEFAULTS__,ur=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dr=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&ir(e[1]);return t&&JSON.parse(t)},fr=()=>{try{return Yn()||lr()||ur()||dr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pr=e=>fr()?.emulatorHosts?.[e],mr=e=>{let t=pr(e);if(!t)return;let n=t.lastIndexOf(`:`);if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]===`[`?[t.substring(1,n-1),r]:[t.substring(0,n),r]},hr=()=>fr()?.config,gr=e=>fr()?.[`_${e}`],_r=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function vr(e,t){if(e.uid)throw Error(`The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`);let n={alg:`none`,type:`JWT`},r=t||`demo-project`,i=e.iat||0,a=e.sub||e.user_id;if(!a)throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:`custom`,identities:{}},...e};return[rr(JSON.stringify(n)),rr(JSON.stringify(o)),``].join(`.`)}function yr(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function br(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yr())}function xr(){return typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`}function Sr(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function Cr(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function wr(){let e=yr();return e.indexOf(`MSIE `)>=0||e.indexOf(`Trident/`)>=0}function Tr(){return Xn.NODE_CLIENT===!0||Xn.NODE_ADMIN===!0}function Er(){try{return typeof indexedDB==`object`}catch{return!1}}function Dr(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}var Or=`FirebaseError`,kr=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Or,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}},Ar=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?jr(i,n):`Error`;return new kr(r,`${this.serviceName}: ${a} (${r}).`,n)}};function jr(e,t){return e.replace(Mr,(e,n)=>{let r=t[n];return r==null?`<${n}?>`:String(r)})}var Mr=/\{\$([^}]+)}/g;function Nr(e){return JSON.parse(e)}function Pr(e){return JSON.stringify(e)}var Fr=function(e){let t={},n={},r={},i=``;try{let a=e.split(`.`);t=Nr(ir(a[0])||``),n=Nr(ir(a[1])||``),i=a[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Ir=function(e){let t=Fr(e).claims;return!!t&&typeof t==`object`&&t.hasOwnProperty(`iat`)},Lr=function(e){let t=Fr(e).claims;return typeof t==`object`&&t.admin===!0};function Rr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function zr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Br(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vr(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Hr(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(Ur(n)&&Ur(a)){if(!Hr(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function Ur(e){return typeof e==`object`&&!!e}function Wr(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}function Gr(e){let t={};return e.replace(/^\?/,``).split(`&`).forEach(e=>{if(e){let[n,r]=e.split(`=`);t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Kr(e){let t=e.indexOf(`?`);if(!t)return``;let n=e.indexOf(`#`,t);return e.substring(t,n>0?n:void 0)}var qr=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||=0;let n=this.W_;if(typeof e==`string`)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=(t<<1|t>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],a=this.chain_[2],o=this.chain_[3],s=this.chain_[4],c,l;for(let e=0;e<80;e++){e<40?e<20?(c=o^i&(a^o),l=1518500249):(c=i^a^o,l=1859775393):e<60?(c=i&a|o&(i|a),l=2400959708):(c=i^a^o,l=3395469782);let t=(r<<5|r>>>27)+c+s+l+n[e]&4294967295;s=o,o=a,a=(i<<30|i>>>2)&4294967295,i=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+s&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e==`string`){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};function Jr(e,t){let n=new Yr(e,t);return n.subscribe.bind(n)}var Yr=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw Error(`Missing Observer.`);r=Xr(e,[`next`,`error`,`complete`])?e:{next:e,error:t,complete:n},r.next===void 0&&(r.next=Zr),r.error===void 0&&(r.error=Zr),r.complete===void 0&&(r.complete=Zr);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],--this.observerCount,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(e){typeof console<`u`&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Xr(e,t){if(typeof e!=`object`||!e)return!1;for(let n of t)if(n in e&&typeof e[n]==`function`)return!0;return!1}function Zr(){}function Qr(e,t){return`${e} failed: ${t} argument `}var $r=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let t=i-55296;r++,O(r<e.length,`Surrogate pair missing trail surrogate.`);let n=e.charCodeAt(r)-56320;i=65536+(t<<10)+n}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ei=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};function ti(e){return e&&e._delegate?e._delegate:e}function ni(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function ri(e){return(await fetch(e,{credentials:`include`})).ok}var ii=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},ai=`[DEFAULT]`,oi=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new _r;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}else if(n)return null;else throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ci(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:si(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function si(e){return e===ai?void 0:e}function ci(e){return e.instantiationMode===`EAGER`}var li=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new oi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},ui=[],k;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(k||={});var di={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},fi=k.INFO,pi={[k.DEBUG]:`log`,[k.VERBOSE]:`log`,[k.INFO]:`info`,[k.WARN]:`warn`,[k.ERROR]:`error`},mi=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=pi[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},hi=class{constructor(e){this.name=e,this._logLevel=fi,this._logHandler=mi,this._userLogHandler=null,ui.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?di[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}},gi=(e,t)=>t.some(t=>e instanceof t),_i,vi;function yi(){return _i||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function bi(){return vi||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var xi=new WeakMap,Si=new WeakMap,Ci=new WeakMap,wi=new WeakMap,Ti=new WeakMap;function Ei(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(Mi(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&xi.set(t,e)}).catch(()=>{}),Ti.set(t,e),t}function Di(e){if(Si.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});Si.set(e,t)}var Oi={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return Si.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||Ci.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function ki(e){Oi=e(Oi)}function Ai(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(Ni(this),t,...n);return Ci.set(r,t.sort?t.sort():[t]),Mi(r)}:bi().includes(e)?function(...t){return e.apply(Ni(this),t),Mi(xi.get(this))}:function(...t){return Mi(e.apply(Ni(this),t))}}function ji(e){return typeof e==`function`?Ai(e):(e instanceof IDBTransaction&&Di(e),gi(e,yi())?new Proxy(e,Oi):e)}function Mi(e){if(e instanceof IDBRequest)return Ei(e);if(wi.has(e))return wi.get(e);let t=ji(e);return t!==e&&(wi.set(e,t),Ti.set(t,e)),t}var Ni=e=>Ti.get(e);function Pi(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=Mi(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(Mi(o.result),e.oldVersion,e.newVersion,Mi(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Fi=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Ii=[`put`,`add`,`delete`,`clear`],Li=new Map;function Ri(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(Li.get(t))return Li.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Ii.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fi.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Li.set(t,a),a}ki(e=>({...e,get:(t,n,r)=>Ri(t,n)||e.get(t,n,r),has:(t,n)=>!!Ri(t,n)||e.has(t,n)}));var zi=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bi(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(` `)}};function Bi(e){return e.getComponent()?.type===`VERSION`}var Vi=`@firebase/app`,Hi=`0.14.10`,A=new hi(`@firebase/app`),j=`@firebase/app-compat`,Ui=`@firebase/analytics-compat`,Wi=`@firebase/analytics`,Gi=`@firebase/app-check-compat`,Ki=`@firebase/app-check`,qi=`@firebase/auth`,Ji=`@firebase/auth-compat`,Yi=`@firebase/database`,Xi=`@firebase/data-connect`,Zi=`@firebase/database-compat`,Qi=`@firebase/functions`,$i=`@firebase/functions-compat`,ea=`@firebase/installations`,ta=`@firebase/installations-compat`,na=`@firebase/messaging`,ra=`@firebase/messaging-compat`,ia=`@firebase/performance`,aa=`@firebase/performance-compat`,oa=`@firebase/remote-config`,sa=`@firebase/remote-config-compat`,ca=`@firebase/storage`,la=`@firebase/storage-compat`,ua=`@firebase/firestore`,da=`@firebase/ai`,fa=`@firebase/firestore-compat`,pa=`firebase`,ma=`12.11.0`,ha=`[DEFAULT]`,ga={[Vi]:`fire-core`,[j]:`fire-core-compat`,[Wi]:`fire-analytics`,[Ui]:`fire-analytics-compat`,[Ki]:`fire-app-check`,[Gi]:`fire-app-check-compat`,[qi]:`fire-auth`,[Ji]:`fire-auth-compat`,[Yi]:`fire-rtdb`,[Xi]:`fire-data-connect`,[Zi]:`fire-rtdb-compat`,[Qi]:`fire-fn`,[$i]:`fire-fn-compat`,[ea]:`fire-iid`,[ta]:`fire-iid-compat`,[na]:`fire-fcm`,[ra]:`fire-fcm-compat`,[ia]:`fire-perf`,[aa]:`fire-perf-compat`,[oa]:`fire-rc`,[sa]:`fire-rc-compat`,[ca]:`fire-gcs`,[la]:`fire-gcs-compat`,[ua]:`fire-fst`,[fa]:`fire-fst-compat`,[da]:`fire-vertex`,"fire-js":`fire-js`,[pa]:`fire-js-all`},_a=new Map,va=new Map,ya=new Map;function ba(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xa(e){let t=e.name;if(ya.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;ya.set(t,e);for(let t of _a.values())ba(t,e);for(let t of va.values())ba(t,e);return!0}function Sa(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ca(e){return e==null?!1:e.settings!==void 0}var wa=new Ar(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different options or config`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),Ta=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ii(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wa.create(`app-deleted`,{appName:this._name})}},Ea=ma;function Da(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:ha,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw wa.create(`bad-app-name`,{appName:String(i)});if(n||=hr(),!n)throw wa.create(`no-options`);let a=_a.get(i);if(a){if(Hr(n,a.options)&&Hr(r,a.config))return a;throw wa.create(`duplicate-app`,{appName:i})}let o=new li(i);for(let e of ya.values())o.addComponent(e);let s=new Ta(n,r,o);return _a.set(i,s),s}function Oa(e=ha){let t=_a.get(e);if(!t&&e===`[DEFAULT]`&&hr())return Da();if(!t)throw wa.create(`no-app`,{appName:e});return t}function ka(e,t,n){let r=ga[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),A.warn(e.join(` `));return}xa(new ii(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}var Aa=`firebase-heartbeat-database`,ja=1,Ma=`firebase-heartbeat-store`,Na=null;function Pa(){return Na||=Pi(Aa,ja,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ma)}catch(e){console.warn(e)}}}}).catch(e=>{throw wa.create(`idb-open`,{originalErrorMessage:e.message})}),Na}async function Fa(e){try{let t=(await Pa()).transaction(Ma),n=await t.objectStore(Ma).get(La(e));return await t.done,n}catch(e){if(e instanceof kr)A.warn(e.message);else{let t=wa.create(`idb-get`,{originalErrorMessage:e?.message});A.warn(t.message)}}}async function Ia(e,t){try{let n=(await Pa()).transaction(Ma,`readwrite`);await n.objectStore(Ma).put(t,La(e)),await n.done}catch(e){if(e instanceof kr)A.warn(e.message);else{let t=wa.create(`idb-set`,{originalErrorMessage:e?.message});A.warn(t.message)}}}function La(e){return`${e.name}!${e.options.appId}`}var Ra=1024,za=30,Ba=class{constructor(e){this.container=e,this._heartbeatsCache=null,this._storage=new Ua(this.container.getProvider(`app`).getImmediate()),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=Va();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>za){let e=Ga(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){A.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=Va(),{heartbeatsToSend:t,unsentEntries:n}=Ha(this._heartbeatsCache.heartbeats),r=rr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return A.warn(e),``}}};function Va(){return new Date().toISOString().substring(0,10)}function Ha(e,t=Ra){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(!e){if(n.push({agent:i.agent,dates:[i.date]}),Wa(n)>t){n.pop();break}}else if(e.dates.push(i.date),Wa(n)>t){e.dates.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Ua=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Er()?Dr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await Fa(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Ia(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Ia(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}};function Wa(e){return rr(JSON.stringify({version:2,heartbeats:e})).length}function Ga(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function Ka(e){xa(new ii(`platform-logger`,e=>new zi(e),`PRIVATE`)),xa(new ii(`heartbeat`,e=>new Ba(e),`PRIVATE`)),ka(Vi,Hi,e),ka(Vi,Hi,`esm2020`),ka(`fire-js`,``)}Ka(``),ka(`firebase`,`12.11.0`,`app`);function qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Ja=qa,Ya=new Ar(`auth`,`Firebase`,qa()),Xa=new hi(`@firebase/auth`);function Za(e,...t){Xa.logLevel<=k.WARN&&Xa.warn(`Auth (${Ea}): ${e}`,...t)}function Qa(e,...t){Xa.logLevel<=k.ERROR&&Xa.error(`Auth (${Ea}): ${e}`,...t)}function $a(e,...t){throw io(e,...t)}function eo(e,...t){return io(e,...t)}function to(e,t,n){return new Ar(`auth`,`Firebase`,{...Ja(),[t]:n}).create(t,{appName:e.name})}function no(e){return to(e,`operation-not-supported-in-this-environment`,`Operations that alter the current user are not supported in conjunction with FirebaseServerApp`)}function ro(e,t,n){let r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&$a(e,`argument-error`),to(e,`argument-error`,`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function io(e,...t){if(typeof e!=`string`){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ya.create(e,...t)}function M(e,t,...n){if(!e)throw io(t,...n)}function ao(e){let t=`INTERNAL ASSERTION FAILED: `+e;throw Qa(t),Error(t)}function oo(e,t){e||ao(t)}function so(){return typeof self<`u`&&self.location?.href||``}function co(){return lo()===`http:`||lo()===`https:`}function lo(){return typeof self<`u`&&self.location?.protocol||null}function uo(){return typeof navigator<`u`&&navigator&&`onLine`in navigator&&typeof navigator.onLine==`boolean`&&(co()||Sr()||`connection`in navigator)?navigator.onLine:!0}function fo(){if(typeof navigator>`u`)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}var po=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,oo(t>e,`Short delay should be less than long delay!`),this.isMobile=br()||Cr()}get(){return uo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function mo(e,t){oo(e.emulator,`Emulator should always be set here`);let{url:n}=e.emulator;return t?`${n}${t.startsWith(`/`)?t.slice(1):t}`:n}var ho=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<`u`&&`fetch`in self)return self.fetch;if(typeof globalThis<`u`&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<`u`)return fetch;ao(`Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<`u`&&`Headers`in self)return self.Headers;if(typeof globalThis<`u`&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<`u`)return Headers;ao(`Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<`u`&&`Response`in self)return self.Response;if(typeof globalThis<`u`&&globalThis.Response)return globalThis.Response;if(typeof Response<`u`)return Response;ao(`Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}},go={CREDENTIAL_MISMATCH:`custom-token-mismatch`,MISSING_CUSTOM_TOKEN:`internal-error`,INVALID_IDENTIFIER:`invalid-email`,MISSING_CONTINUE_URI:`internal-error`,INVALID_PASSWORD:`wrong-password`,MISSING_PASSWORD:`missing-password`,INVALID_LOGIN_CREDENTIALS:`invalid-credential`,EMAIL_EXISTS:`email-already-in-use`,PASSWORD_LOGIN_DISABLED:`operation-not-allowed`,INVALID_IDP_RESPONSE:`invalid-credential`,INVALID_PENDING_TOKEN:`invalid-credential`,FEDERATED_USER_ID_ALREADY_LINKED:`credential-already-in-use`,MISSING_REQ_TYPE:`internal-error`,EMAIL_NOT_FOUND:`user-not-found`,RESET_PASSWORD_EXCEED_LIMIT:`too-many-requests`,EXPIRED_OOB_CODE:`expired-action-code`,INVALID_OOB_CODE:`invalid-action-code`,MISSING_OOB_CODE:`internal-error`,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:`requires-recent-login`,INVALID_ID_TOKEN:`invalid-user-token`,TOKEN_EXPIRED:`user-token-expired`,USER_NOT_FOUND:`user-token-expired`,TOO_MANY_ATTEMPTS_TRY_LATER:`too-many-requests`,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:`password-does-not-meet-requirements`,INVALID_CODE:`invalid-verification-code`,INVALID_SESSION_INFO:`invalid-verification-id`,INVALID_TEMPORARY_PROOF:`invalid-credential`,MISSING_SESSION_INFO:`missing-verification-id`,SESSION_EXPIRED:`code-expired`,MISSING_ANDROID_PACKAGE_NAME:`missing-android-pkg-name`,UNAUTHORIZED_DOMAIN:`unauthorized-continue-uri`,INVALID_OAUTH_CLIENT_ID:`invalid-oauth-client-id`,ADMIN_ONLY_OPERATION:`admin-restricted-operation`,INVALID_MFA_PENDING_CREDENTIAL:`invalid-multi-factor-session`,MFA_ENROLLMENT_NOT_FOUND:`multi-factor-info-not-found`,MISSING_MFA_ENROLLMENT_ID:`missing-multi-factor-info`,MISSING_MFA_PENDING_CREDENTIAL:`missing-multi-factor-session`,SECOND_FACTOR_EXISTS:`second-factor-already-in-use`,SECOND_FACTOR_LIMIT_EXCEEDED:`maximum-second-factor-count-exceeded`,BLOCKING_FUNCTION_ERROR_RESPONSE:`internal-error`,RECAPTCHA_NOT_ENABLED:`recaptcha-not-enabled`,MISSING_RECAPTCHA_TOKEN:`missing-recaptcha-token`,INVALID_RECAPTCHA_TOKEN:`invalid-recaptcha-token`,INVALID_RECAPTCHA_ACTION:`invalid-recaptcha-action`,MISSING_CLIENT_TYPE:`missing-client-type`,MISSING_RECAPTCHA_VERSION:`missing-recaptcha-version`,INVALID_RECAPTCHA_VERSION:`invalid-recaptcha-version`,INVALID_REQ_TYPE:`invalid-req-type`},_o=[`/v1/accounts:signInWithCustomToken`,`/v1/accounts:signInWithEmailLink`,`/v1/accounts:signInWithIdp`,`/v1/accounts:signInWithPassword`,`/v1/accounts:signInWithPhoneNumber`,`/v1/token`],vo=new po(3e4,6e4);function yo(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function N(e,t,n,r,i={}){return P(e,i,async()=>{let i={},a={};r&&(t===`GET`?a=r:i={body:JSON.stringify(r)});let o=Wr({key:e.config.apiKey,...a}).slice(1),s=await e._getAdditionalHeaders();s[`Content-Type`]=`application/json`,e.languageCode&&(s[`X-Firebase-Locale`]=e.languageCode);let c={method:t,headers:s,...i};return xr()||(c.referrerPolicy=`no-referrer`),e.emulatorConfig&&ni(e.emulatorConfig.host)&&(c.credentials=`include`),ho.fetch()(await bo(e,e.config.apiHost,n,o),c)})}async function P(e,t,n){e._canInitEmulator=!1;let r={...go,...t};try{let t=new So(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if(`needConfirmation`in a)throw Co(e,`account-exists-with-different-credential`,a);if(i.ok&&!(`errorMessage`in a))return a;{let[t,n]=(i.ok?a.errorMessage:a.error.message).split(` : `);if(t===`FEDERATED_USER_ID_ALREADY_LINKED`)throw Co(e,`credential-already-in-use`,a);if(t===`EMAIL_EXISTS`)throw Co(e,`email-already-in-use`,a);if(t===`USER_DISABLED`)throw Co(e,`user-disabled`,a);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,`-`);if(n)throw to(e,o,n);$a(e,o)}}catch(t){if(t instanceof kr)throw t;$a(e,`network-request-failed`,{message:String(t)})}}async function F(e,t,n,r,i={}){let a=await N(e,t,n,r,i);return`mfaPendingCredential`in a&&$a(e,`multi-factor-auth-required`,{_serverResponse:a}),a}async function bo(e,t,n,r){let i=`${t}${n}?${r}`,a=e,o=a.config.emulator?mo(e.config,i):`${e.config.apiScheme}://${i}`;return _o.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()===`COOKIE`)?a._getPersistence()._getFinalTarget(o).toString():o}function xo(e){switch(e){case`ENFORCE`:return`ENFORCE`;case`AUDIT`:return`AUDIT`;case`OFF`:return`OFF`;default:return`ENFORCEMENT_STATE_UNSPECIFIED`}}var So=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(eo(this.auth,`network-request-failed`)),vo.get())})}};function Co(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=eo(e,t,r);return i.customData._tokenResponse=n,i}function wo(e){return e!==void 0&&e.enterprise!==void 0}var To=class{constructor(e){if(this.siteKey=``,this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw Error(`recaptchaKey undefined`);this.siteKey=e.recaptchaKey.split(`/`)[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xo(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)===`ENFORCE`||this.getProviderEnforcementState(e)===`AUDIT`}isAnyProviderEnabled(){return this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)||this.isProviderEnabled(`PHONE_PROVIDER`)}};async function Eo(e,t){return N(e,`GET`,`/v2/recaptchaConfig`,yo(e,t))}async function Do(e,t){return N(e,`POST`,`/v1/accounts:delete`,t)}async function I(e,t){return N(e,`POST`,`/v1/accounts:lookup`,t)}function Oo(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ko(e,t=!1){let n=ti(e),r=await n.getIdToken(t),i=jo(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,`internal-error`);let a=typeof i.firebase==`object`?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:Oo(Ao(i.auth_time)),issuedAtTime:Oo(Ao(i.iat)),expirationTime:Oo(Ao(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ao(e){return Number(e)*1e3}function jo(e){let[t,n,r]=e.split(`.`);if(t===void 0||n===void 0||r===void 0)return Qa(`JWT malformed, contained fewer than 3 sections`),null;try{let e=ir(n);return e?JSON.parse(e):(Qa(`Failed to decode base64 JWT payload`),null)}catch(e){return Qa(`Caught error parsing JWT payload as JSON`,e?.toString()),null}}function Mo(e){let t=jo(e);return M(t,`internal-error`),M(t.exp!==void 0,`internal-error`),M(t.iat!==void 0,`internal-error`),Number(t.exp)-Number(t.iat)}async function No(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof kr&&Po(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function Po({code:e}){return e===`auth/user-disabled`||e===`auth/user-token-expired`}var Fo=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;let e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code===`auth/network-request-failed`&&this.schedule(!0);return}this.schedule()}},Io=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Lo(e){let t=e.auth,n=await No(e,I(t,{idToken:await e.getIdToken()}));M(n?.users.length,t,`internal-error`);let r=n.users[0];e._notifyReloadListener(r);let i=r.providerUserInfo?.length?Bo(r.providerUserInfo):[],a=zo(e.providerData,i),o=e.isAnonymous,s=!(e.email&&r.passwordHash)&&!a?.length,c=o?s:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Io(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,l)}async function Ro(e){let t=ti(e);await Lo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function zo(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function Bo(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||``,displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function Vo(e,t){let n=await P(e,{},async()=>{let n=Wr({grant_type:`refresh_token`,refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await bo(e,r,`/v1/token`,`key=${i}`),o=await e._getAdditionalHeaders();o[`Content-Type`]=`application/x-www-form-urlencoded`;let s={method:`POST`,headers:o,body:n};return e.emulatorConfig&&ni(e.emulatorConfig.host)&&(s.credentials=`include`),ho.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ho(e,t){return N(e,`POST`,`/v2/accounts:revokeToken`,yo(e,t))}var Uo=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,`internal-error`),M(e.idToken!==void 0,`internal-error`),M(e.refreshToken!==void 0,`internal-error`);let t=`expiresIn`in e&&e.expiresIn!==void 0?Number(e.expiresIn):Mo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,`internal-error`);let t=Mo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,`user-token-expired`),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await Vo(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new e;return r&&(M(typeof r==`string`,`internal-error`,{appName:t}),o.refreshToken=r),i&&(M(typeof i==`string`,`internal-error`,{appName:t}),o.accessToken=i),a&&(M(typeof a==`number`,`internal-error`,{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return ao(`not implemented`)}};function Wo(e,t){M(typeof e==`string`||e===void 0,`internal-error`,{appName:t})}var Go=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId=`firebase`,this.proactiveRefresh=new Fo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Io(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await No(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,`internal-error`),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ko(this,e)}reload(){return Ro(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,`internal-error`),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){let n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,`internal-error`),this.reloadListener=e,this.reloadUserInfo&&=(this._notifyReloadListener(this.reloadUserInfo),null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Lo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ca(this.auth.app))return Promise.reject(no(this.auth));let e=await this.getIdToken();return await No(this,Do(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||``}static _fromJSON(t,n){let r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,s=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:m,stsTokenManager:h}=n;M(d&&h,t,`internal-error`);let g=Uo.fromJSON(this.name,h);M(typeof d==`string`,t,`internal-error`),Wo(r,t.name),Wo(i,t.name),M(typeof f==`boolean`,t,`internal-error`),M(typeof p==`boolean`,t,`internal-error`),Wo(a,t.name),Wo(o,t.name),Wo(s,t.name),Wo(c,t.name),Wo(l,t.name),Wo(u,t.name);let _=new e({uid:d,auth:t,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:g,createdAt:l,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(e=>({...e}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(t,n,r=!1){let i=new Uo;i.updateFromServerResponse(n);let a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Lo(a),a}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];M(i.localId!==void 0,`internal-error`);let a=i.providerUserInfo===void 0?[]:Bo(i.providerUserInfo),o=!(i.email&&i.passwordHash)&&!a?.length,s=new Uo;s.updateFromIdToken(r);let c=new e({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Io(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}},Ko=new Map;function qo(e){oo(e instanceof Function,`Expected a class definition`);let t=Ko.get(e);return t?(oo(t instanceof e,`Instance stored in cache mismatched with class`),t):(t=new e,Ko.set(e,t),t)}var Jo=class{constructor(){this.type=`NONE`,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Jo.type=`NONE`;var Yo=Jo;function Xo(e,t,n){return`firebase:${e}:${t}:${n}`}var Zo=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=Xo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xo(`persistence`,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e==`string`){let t=await I(this.auth,{idToken:e}).catch(()=>void 0);return t?Go._fromGetAccountInfoResponse(this.auth,t,e):null}return Go._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r=`authUser`){if(!n.length)return new e(qo(Yo),t,r);let i=(await Promise.all(n.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),a=i[0]||qo(Yo),o=Xo(r,t.config.apiKey,t.name),s=null;for(let e of n)try{let n=await e._get(o);if(n){let r;if(typeof n==`string`){let e=await I(t,{idToken:n}).catch(()=>void 0);if(!e)break;r=await Go._fromGetAccountInfoResponse(t,e,n)}else r=Go._fromJSON(t,n);e!==a&&(s=r),a=e;break}}catch{}let c=i.filter(e=>e._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new e(a,t,r):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new e(a,t,r))}};function Qo(e){let t=e.toLowerCase();if(t.includes(`opera/`)||t.includes(`opr/`)||t.includes(`opios/`))return`Opera`;if(ns(t))return`IEMobile`;if(t.includes(`msie`)||t.includes(`trident/`))return`IE`;if(t.includes(`edge/`))return`Edge`;if($o(t))return`Firefox`;if(t.includes(`silk/`))return`Silk`;if(is(t))return`Blackberry`;if(as(t))return`Webos`;if(es(t))return`Safari`;if((t.includes(`chrome/`)||ts(t))&&!t.includes(`edge/`))return`Chrome`;if(rs(t))return`Android`;{let t=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(t?.length===2)return t[1]}return`Other`}function $o(e=yr()){return/firefox\//i.test(e)}function es(e=yr()){let t=e.toLowerCase();return t.includes(`safari/`)&&!t.includes(`chrome/`)&&!t.includes(`crios/`)&&!t.includes(`android`)}function ts(e=yr()){return/crios\//i.test(e)}function ns(e=yr()){return/iemobile/i.test(e)}function rs(e=yr()){return/android/i.test(e)}function is(e=yr()){return/blackberry/i.test(e)}function as(e=yr()){return/webos/i.test(e)}function os(e=yr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ss(e=yr()){return os(e)&&!!window.navigator?.standalone}function cs(){return wr()&&document.documentMode===10}function ls(e=yr()){return os(e)||rs(e)||as(e)||is(e)||/windows phone/i.test(e)||ns(e)}function us(e,t=[]){let n;switch(e){case`Browser`:n=Qo(yr());break;case`Worker`:n=`${Qo(yr())}-${e}`;break;default:n=e}let r=t.length?t.join(`,`):`FirebaseCore-web`;return`${n}/JsCore/${Ea}/${r}`}var ds=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(let e of t)try{e()}catch{}throw this.auth._errorFactory.create(`login-blocked`,{originalMessage:e?.message})}}};async function fs(e,t={}){return N(e,`GET`,`/v2/passwordPolicy`,yo(e,t))}var ps=6,ms=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ps,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState===`ENFORCEMENT_STATE_UNSPECIFIED`&&(this.enforcementState=`OFF`),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join(``)??``,this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&=t.meetsMinPasswordLength??!0,t.isValid&&=t.meetsMaxPasswordLength??!0,t.isValid&&=t.containsLowercaseLetter??!0,t.isValid&&=t.containsUppercaseLetter??!0,t.isValid&&=t.containsNumericCharacter??!0,t.isValid&&=t.containsNonAlphanumericCharacter??!0,t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>=`a`&&n<=`z`,n>=`A`&&n<=`Z`,n>=`0`&&n<=`9`,this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||=t),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||=n),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||=r),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||=i)}},hs=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _s(this),this.idTokenSubscription=new _s(this),this.beforeStateQueue=new ds(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ya,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qo(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Zo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await I(this,{idToken:e}),n=await Go._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn(`FirebaseServerApp could not login user with provided authIdToken: `,e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ca(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!t||t===i)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,`argument-error`),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(e){if(e?.code!==`auth/network-request-failed`)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ca(this.app))return Promise.reject(no(this));let t=e?ti(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,`invalid-user-token`),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,`tenant-id-mismatch`),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ca(this.app)?Promise.reject(no(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ca(this.app)?Promise.reject(no(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qo(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?t.validatePassword(e):Promise.reject(this._errorFactory.create(`unsupported-password-policy-schema-version`,{}))}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ms(await fs(this));this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ar(`auth`,`Firebase`,e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:`apple.com`,tokenType:`ACCESS_TOKEN`,token:e,idToken:await this.currentUser.getIdToken()};this.tenantId!=null&&(t.tenantId=this.tenantId),await Ho(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&qo(e)||this._popupRedirectResolver;M(t,this,`argument-error`),this.redirectPersistenceManager=await Zo.create(this,[qo(t._redirectPersistence)],`redirectUser`),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i=typeof t==`function`?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(o,this,`internal-error`),o.then(()=>{a||i(this.currentUser)}),typeof t==`function`){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}else{let n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,`internal-error`),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=us(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e[`X-Firebase-gmpid`]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e[`X-Firebase-Client`]=t);let n=await this._getAppCheckToken();return n&&(e[`X-Firebase-AppCheck`]=n),e}async _getAppCheckToken(){if(Ca(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Za(`Error while retrieving App Check token: ${e.error}`),e?.token}};function gs(e){return ti(e)}var _s=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jr(e=>this.observer=e)}get next(){return M(this.observer,this.auth,`internal-error`),this.observer.next.bind(this.observer)}},vs={async loadJS(){throw Error(`Unable to load external scripts`)},recaptchaV2Script:``,recaptchaEnterpriseScript:``,gapiScript:``};function ys(e){vs=e}function bs(e){return vs.loadJS(e)}function xs(){return vs.recaptchaEnterpriseScript}function Ss(){return vs.gapiScript}function Cs(e){return`__${e}${Math.floor(Math.random()*1e6)}`}var ws=class{constructor(){this.enterprise=new Ts}ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Ts=class{ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Es=`recaptcha-enterprise`,Ds=`NO_RECAPTCHA`,Os=class{constructor(e){this.type=Es,this.auth=gs(e)}async verify(e=`verify`,t=!1){async function n(e){if(!t){if(e.tenantId==null&&e._agentRecaptchaConfig!=null)return e._agentRecaptchaConfig.siteKey;if(e.tenantId!=null&&e._tenantRecaptchaConfigs[e.tenantId]!==void 0)return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Eo(e,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}).then(r=>{if(r.recaptchaKey===void 0)n(Error(`recaptcha Enterprise site key undefined`));else{let n=new To(r);return e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;wo(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Ds)})}):r(Error(`No reCAPTCHA enterprise script loaded.`))}return this.auth.settings.appVerificationDisabledForTesting?new ws().execute(`siteKey`,{action:`verify`}):new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&wo(window.grecaptcha))r(n,e,i);else{if(typeof window>`u`){i(Error(`RecaptchaVerifier is only supported in browser`));return}let t=xs();t.length!==0&&(t+=n),bs(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}};async function ks(e,t,n,r=!1,i=!1){let a=new Os(e),o;if(i)o=Ds;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}let s={...t};if(n===`mfaSmsEnrollment`||n===`mfaSmsSignIn`){if(`phoneEnrollmentInfo`in s){let e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}else if(`phoneSignInInfo`in s){let e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:`CLIENT_TYPE_WEB`}),Object.assign(s,{recaptchaVersion:`RECAPTCHA_ENTERPRISE`}),s}async function As(e,t,n,r,i){return i===`EMAIL_PASSWORD_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)?r(e,await ks(e,t,n,n===`getOobCode`)):r(e,t).catch(async i=>i.code===`auth/missing-recaptcha-token`?(console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`),r(e,await ks(e,t,n,n===`getOobCode`))):Promise.reject(i)):i===`PHONE_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)?r(e,await ks(e,t,n)).catch(async i=>e._getRecaptchaConfig()?.getProviderEnforcementState(`PHONE_PROVIDER`)===`AUDIT`&&(i.code===`auth/missing-recaptcha-token`||i.code===`auth/invalid-app-credential`)?(console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`),r(e,await ks(e,t,n,!1,!0))):Promise.reject(i)):r(e,await ks(e,t,n,!1,!0)):Promise.reject(i+` provider is not supported.`)}async function js(e){let t=gs(e),n=new To(await Eo(t,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}));t.tenantId==null?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,n.isAnyProviderEnabled()&&new Os(t).verify()}function Ms(e,t){let n=Sa(e,`auth`);if(n.isInitialized()){let e=n.getImmediate();if(Hr(n.getOptions(),t??{}))return e;$a(e,`already-initialized`)}return n.initialize({options:t})}function Ns(e,t){let n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(qo);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Ps(e,t,n){let r=gs(e);M(/^https?:\/\//.test(t),r,`invalid-emulator-scheme`);let i=!!n?.disableWarnings,a=Fs(t),{host:o,port:s}=Is(t),c=s===null?``:`:${s}`,l={url:`${a}//${o}${c}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(`:`,``),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,`emulator-config-failed`),M(Hr(l,r.config.emulator)&&Hr(u,r.emulatorConfig),r,`emulator-config-failed`);return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ni(o)?ri(`${a}//${o}${c}`):i||Rs()}function Fs(e){let t=e.indexOf(`:`);return t<0?``:e.substr(0,t+1)}function Is(e){let t=Fs(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:``,port:null};let r=n[2].split(`@`).pop()||``,i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:Ls(r.substr(e.length+1))}}else{let[e,t]=r.split(`:`);return{host:e,port:Ls(t)}}}function Ls(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}function Rs(){function e(){let e=document.createElement(`p`),t=e.style;e.innerText=`Running in emulator mode. Do not use with production credentials.`,t.position=`fixed`,t.width=`100%`,t.backgroundColor=`#ffffff`,t.border=`.1em solid #000000`,t.color=`#b50000`,t.bottom=`0px`,t.left=`0px`,t.margin=`0px`,t.zIndex=`10000`,t.textAlign=`center`,e.classList.add(`firebase-emulator-warning`),document.body.appendChild(e)}typeof console<`u`&&typeof console.info==`function`&&console.info(`WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`),typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,e):e())}var zs=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ao(`not implemented`)}_getIdTokenResponse(e){return ao(`not implemented`)}_linkToIdToken(e,t){return ao(`not implemented`)}_getReauthenticationResolver(e){return ao(`not implemented`)}};async function Bs(e,t){return N(e,`POST`,`/v1/accounts:signUp`,t)}async function Vs(e,t){return F(e,`POST`,`/v1/accounts:signInWithPassword`,yo(e,t))}async function Hs(e,t){return F(e,`POST`,`/v1/accounts:signInWithEmailLink`,yo(e,t))}async function Us(e,t){return F(e,`POST`,`/v1/accounts:signInWithEmailLink`,yo(e,t))}var Ws=class e extends zs{constructor(e,t,n,r=null){super(`password`,n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,`password`)}static _fromEmailAndCode(t,n,r=null){return new e(t,n,`emailLink`,r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e==`string`?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod===`password`)return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod===`emailLink`)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case`password`:return As(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signInWithPassword`,Vs,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Hs(e,{email:this._email,oobCode:this._password});default:$a(e,`internal-error`)}}async _linkToIdToken(e,t){switch(this.signInMethod){case`password`:return As(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signUpPassword`,Bs,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Us(e,{idToken:t,email:this._email,oobCode:this._password});default:$a(e,`internal-error`)}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Gs(e,t){return F(e,`POST`,`/v1/accounts:signInWithIdp`,yo(e,t))}var Ks=`http://localhost`,qs=class e extends zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$a(`argument-error`),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let{providerId:n,signInMethod:r,...i}=typeof t==`string`?JSON.parse(t):t;if(!n||!r)return null;let a=new e(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Gs(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Gs(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Gs(e,t)}buildRequest(){let e={requestUri:Ks,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wr(t)}return e}};async function Js(e,t){return N(e,`POST`,`/v1/accounts:sendVerificationCode`,yo(e,t))}async function Ys(e,t){return F(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,yo(e,t))}async function Xs(e,t){let n=await F(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,yo(e,t));if(n.temporaryProof)throw Co(e,`account-exists-with-different-credential`,n);return n}var Zs={USER_NOT_FOUND:`user-not-found`};async function Qs(e,t){return F(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,yo(e,{...t,operation:`REAUTH`}),Zs)}var $s=class e extends zs{constructor(e){super(`phone`,`phone`),this.params=e}static _fromVerification(t,n){return new e({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new e({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(e){return Ys(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Xs(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Qs(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(t){typeof t==`string`&&(t=JSON.parse(t));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=t;return!r&&!n&&!i&&!a?null:new e({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}};function ec(e){switch(e){case`recoverEmail`:return`RECOVER_EMAIL`;case`resetPassword`:return`PASSWORD_RESET`;case`signIn`:return`EMAIL_SIGNIN`;case`verifyEmail`:return`VERIFY_EMAIL`;case`verifyAndChangeEmail`:return`VERIFY_AND_CHANGE_EMAIL`;case`revertSecondFactorAddition`:return`REVERT_SECOND_FACTOR_ADDITION`;default:return null}}function tc(e){let t=Gr(Kr(e)).link,n=t?Gr(Kr(t)).deep_link_id:null,r=Gr(Kr(e)).deep_link_id;return(r?Gr(Kr(r)).link:null)||r||n||t||e}var nc=class e{constructor(e){let t=Gr(Kr(e)),n=t.apiKey??null,r=t.oobCode??null,i=ec(t.mode??null);M(n&&r&&i,`argument-error`),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){let n=tc(t);try{return new e(n)}catch{return null}}},rc=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=nc.parseLink(t);return M(n,`argument-error`),Ws._fromEmailAndCode(e,n.code,n.tenantId)}};rc.PROVIDER_ID=`password`,rc.EMAIL_PASSWORD_SIGN_IN_METHOD=`password`,rc.EMAIL_LINK_SIGN_IN_METHOD=`emailLink`;var ic=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},ac=class extends ic{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},oc=class e extends ac{constructor(){super(`facebook.com`)}static credential(t){return qs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};oc.FACEBOOK_SIGN_IN_METHOD=`facebook.com`,oc.PROVIDER_ID=`facebook.com`;var sc=class e extends ac{constructor(){super(`google.com`),this.addScope(`profile`)}static credential(t,n){return qs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};sc.GOOGLE_SIGN_IN_METHOD=`google.com`,sc.PROVIDER_ID=`google.com`;var cc=class e extends ac{constructor(){super(`github.com`)}static credential(t){return qs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};cc.GITHUB_SIGN_IN_METHOD=`github.com`,cc.PROVIDER_ID=`github.com`;var lc=class e extends ac{constructor(){super(`twitter.com`)}static credential(t,n){return qs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};lc.TWITTER_SIGN_IN_METHOD=`twitter.com`,lc.PROVIDER_ID=`twitter.com`;async function uc(e,t){return F(e,`POST`,`/v1/accounts:signUp`,yo(e,t))}var dc=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){return new e({user:await Go._fromIdTokenResponse(t,r,i),providerId:fc(r),_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){return await t._updateTokensIfNecessary(r,!0),new e({user:t,providerId:fc(r),_tokenResponse:r,operationType:n})}};function fc(e){return e.providerId?e.providerId:`phoneNumber`in e?`phone`:null}var pc=class e extends kr{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function mc(e,t,n,r){return(t===`reauthenticate`?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{throw n.code===`auth/multi-factor-auth-required`?pc._fromErrorAndOperation(e,n,t,r):n})}async function hc(e,t,n=!1){let r=await No(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dc._forOperation(e,`link`,r)}async function gc(e,t,n=!1){let{auth:r}=e;if(Ca(r.app))return Promise.reject(no(r));let i=`reauthenticate`;try{let a=await No(e,mc(r,i,t,e),n);M(a.idToken,r,`internal-error`);let o=jo(a.idToken);M(o,r,`internal-error`);let{sub:s}=o;return M(e.uid===s,r,`user-mismatch`),dc._forOperation(e,i,a)}catch(e){throw e?.code===`auth/user-not-found`&&$a(r,`user-mismatch`),e}}async function _c(e,t,n=!1){if(Ca(e.app))return Promise.reject(no(e));let r=`signIn`,i=await mc(e,r,t),a=await dc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function vc(e,t){return _c(gs(e),t)}async function yc(e){let t=gs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function bc(e,t,n){if(Ca(e.app))return Promise.reject(no(e));let r=gs(e),i=await As(r,{returnSecureToken:!0,email:t,password:n,clientType:`CLIENT_TYPE_WEB`},`signUpPassword`,uc,`EMAIL_PASSWORD_PROVIDER`).catch(t=>{throw t.code===`auth/password-does-not-meet-requirements`&&yc(e),t}),a=await dc._fromIdTokenResponse(r,`signIn`,i);return await r._updateCurrentUser(a.user),a}function xc(e,t,n){return Ca(e.app)?Promise.reject(no(e)):vc(ti(e),rc.credential(t,n)).catch(async t=>{throw t.code===`auth/password-does-not-meet-requirements`&&yc(e),t})}async function Sc(e,t){return N(e,`POST`,`/v1/accounts:update`,t)}async function Cc(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;let r=ti(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await No(r,Sc(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;let o=r.providerData.find(({providerId:e})=>e===`password`);o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function wc(e,t,n,r){return ti(e).onIdTokenChanged(t,n,r)}function Tc(e,t,n){return ti(e).beforeAuthStateChanged(t,n)}function Ec(e,t,n,r){return ti(e).onAuthStateChanged(t,n,r)}function Dc(e){return ti(e).signOut()}function Oc(e,t){return N(e,`POST`,`/v2/accounts/mfaEnrollment:start`,yo(e,t))}function kc(e,t){return N(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,yo(e,t))}function Ac(e,t){return N(e,`POST`,`/v2/accounts/mfaEnrollment:start`,yo(e,t))}function jc(e,t){return N(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,yo(e,t))}var Mc=`__sak`,Nc=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mc,`1`),this.storage.removeItem(Mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},Pc=1e3,Fc=10,Ic=class extends Nc{constructor(){super(()=>window.localStorage,`LOCAL`),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ls(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let e=this.storage.getItem(n);!t&&this.localCache[n]===e||this.notifyListeners(n,e)},i=this.storage.getItem(n);cs()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fc):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent(`storage`,{key:e,oldValue:t,newValue:n}),!0)})},Pc)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}attachListener(){window.addEventListener(`storage`,this.boundEventHandler)}detachListener(){window.removeEventListener(`storage`,this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ic.type=`LOCAL`;var Lc=Ic,Rc=1e3;function zc(e){let t=e.replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Bc(e){return`${window.location.protocol===`http:`?`__dev_`:`__HOST-`}FIREBASE_${e.split(`:`)[3]}`}var Vc=class{constructor(){this.type=`COOKIE`,this.listenerUnsubscribes=new Map}_getFinalTarget(e){let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set(`finalTarget`,e),t}async _isAvailable(){return typeof isSecureContext==`boolean`&&!isSecureContext||typeof navigator>`u`||typeof document>`u`?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Bc(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:zc(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let t=Bc(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch(`/__cookies__`,{method:`DELETE`}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let n=Bc(e);if(window.cookieStore){let e=(e=>{let r=e.changed.find(e=>e.name===n);r&&t(r.value),e.deleted.find(e=>e.name===n)&&t(null)});return this.listenerUnsubscribes.set(t,()=>window.cookieStore.removeEventListener(`change`,e)),window.cookieStore.addEventListener(`change`,e)}let r=zc(n),i=setInterval(()=>{let e=zc(n);e!==r&&(t(e),r=e)},Rc);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};Vc.type=`COOKIE`;var Hc=class extends Nc{constructor(){super(()=>window.sessionStorage,`SESSION`)}_addListener(e,t){}_removeListener(e,t){}};Hc.type=`SESSION`;var Uc=Hc;function Wc(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}var L=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;let r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:`ack`,eventId:n,eventType:r});let o=await Wc(Array.from(a).map(async e=>e(t.origin,i)));t.ports[0].postMessage({status:`done`,eventId:n,eventType:r,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener(`message`,this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener(`message`,this.boundEventHandler)}};L.receivers=[];function Gc(e=``,t=10){let n=``;for(let e=0;e<t;e++)n+=Math.floor(Math.random()*10);return e+n}var Kc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener(`message`,e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r=typeof MessageChannel<`u`?new MessageChannel:null;if(!r)throw Error(`connection_unavailable`);let i,a;return new Promise((o,s)=>{let c=Gc(``,20);r.port1.start();let l=setTimeout(()=>{s(Error(`unsupported_event`))},n);a={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===c)switch(t.data.status){case`ack`:clearTimeout(l),i=setTimeout(()=>{s(Error(`timeout`))},3e3);break;case`done`:clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(Error(`invalid_response`));break}}},this.handlers.add(a),r.port1.addEventListener(`message`,a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function qc(){return window}function Jc(e){qc().location.href=e}function Yc(){return qc().WorkerGlobalScope!==void 0&&typeof qc().importScripts==`function`}async function Xc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zc(){return navigator?.serviceWorker?.controller||null}function Qc(){return Yc()?self:null}var $c=`firebaseLocalStorageDb`,el=1,tl=`firebaseLocalStorage`,nl=`fbase_key`,rl=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener(`success`,()=>{e(this.request.result)}),this.request.addEventListener(`error`,()=>{t(this.request.error)})})}};function il(e,t){return e.transaction([tl],t?`readwrite`:`readonly`).objectStore(tl)}function al(){return new rl(indexedDB.deleteDatabase($c)).toPromise()}function ol(){let e=indexedDB.open($c,el);return new Promise((t,n)=>{e.addEventListener(`error`,()=>{n(e.error)}),e.addEventListener(`upgradeneeded`,()=>{let t=e.result;try{t.createObjectStore(tl,{keyPath:nl})}catch(e){n(e)}}),e.addEventListener(`success`,async()=>{let n=e.result;n.objectStoreNames.contains(tl)?t(n):(n.close(),await al(),t(await ol()))})})}async function sl(e,t,n){return new rl(il(e,!0).put({[nl]:t,value:n})).toPromise()}async function cl(e,t){let n=await new rl(il(e,!1).get(t)).toPromise();return n===void 0?null:n.value}function ll(e,t){return new rl(il(e,!0).delete(t)).toPromise()}var ul=800,dl=3,fl=class{constructor(){this.type=`LOCAL`,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||=await ol(),this.db}async _withRetries(e){let t=0;for(;;)try{return await e(await this._openDb())}catch(e){if(t++>dl)throw e;this.db&&=(this.db.close(),void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=L._getInstance(Qc()),this.receiver._subscribe(`keyChanged`,async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe(`ping`,async(e,t)=>[`keyChanged`])}async initializeSender(){if(this.activeServiceWorker=await Xc(),!this.activeServiceWorker)return;this.sender=new Kc(this.activeServiceWorker);let e=await this.sender._send(`ping`,{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes(`keyChanged`)&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zc()!==this.activeServiceWorker))try{await this.sender._send(`keyChanged`,{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ol();return await sl(e,Mc,`1`),await ll(e,Mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>sl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>cl(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ll(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new rl(il(e,!1).getAll()).toPromise());if(!e||this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ul)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};fl.type=`LOCAL`;var pl=fl;function ml(e,t){return N(e,`POST`,`/v2/accounts/mfaSignIn:start`,yo(e,t))}function hl(e,t){return N(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,yo(e,t))}function gl(e,t){return N(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,yo(e,t))}Cs(`rcb`),new po(3e4,6e4);var _l=`recaptcha`;async function vl(e,t,n){if(!e._getRecaptchaConfig())try{await js(e)}catch{console.log(`Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`)}try{let r;if(r=typeof t==`string`?{phoneNumber:t}:t,`session`in r){let t=r.session;if(`phoneNumber`in r)return M(t.type===`enroll`,e,`internal-error`),(await As(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`}},`mfaSmsEnrollment`,async(e,t)=>t.phoneEnrollmentInfo.captchaResponse===Ds?(M(n?.type===_l,e,`argument-error`),Oc(e,await yl(e,t,n))):Oc(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo;{M(t.type===`signin`,e,`internal-error`);let i=r.multiFactorHint?.uid||r.multiFactorUid;return M(i,e,`missing-multi-factor-info`),(await As(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:`CLIENT_TYPE_WEB`}},`mfaSmsSignIn`,async(e,t)=>t.phoneSignInInfo.captchaResponse===Ds?(M(n?.type===_l,e,`argument-error`),ml(e,await yl(e,t,n))):ml(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}else return(await As(e,{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`},`sendVerificationCode`,async(e,t)=>t.captchaResponse===Ds?(M(n?.type===_l,e,`argument-error`),Js(e,await yl(e,t,n))):Js(e,t),`PHONE_PROVIDER`).catch(e=>Promise.reject(e))).sessionInfo}finally{n?._reset()}}async function yl(e,t,n){M(n.type===_l,e,`argument-error`);let r=await n.verify();M(typeof r==`string`,e,`argument-error`);let i={...t};if(`phoneEnrollmentInfo`in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}else if(`phoneSignInInfo`in i){let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var bl=class e{constructor(t){this.providerId=e.PROVIDER_ID,this.auth=gs(t)}verifyPhoneNumber(e,t){return vl(this.auth,e,ti(t))}static credential(e,t){return $s._fromVerification(e,t)}static credentialFromResult(t){let n=t;return e.credentialFromTaggedObject(n)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?$s._fromTokenResponse(t,n):null}};bl.PROVIDER_ID=`phone`,bl.PHONE_SIGN_IN_METHOD=`phone`;function xl(e,t){return t?qo(t):(M(e._popupRedirectResolver,e,`argument-error`),e._popupRedirectResolver)}var Sl=class extends zs{constructor(e){super(`custom`,`custom`),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Cl(e){return _c(e.auth,new Sl(e),e.bypassAuthState)}function wl(e){let{auth:t,user:n}=e;return M(n,t,`internal-error`),gc(n,new Sl(e),e.bypassAuthState)}async function Tl(e){let{auth:t,user:n}=e;return M(n,t,`internal-error`),hc(n,new Sl(e),e.bypassAuthState)}var El=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case`signInViaPopup`:case`signInViaRedirect`:return Cl;case`linkViaPopup`:case`linkViaRedirect`:return Tl;case`reauthViaPopup`:case`reauthViaRedirect`:return wl;default:$a(this.auth,`internal-error`)}}resolve(e){oo(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){oo(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}},Dl=new po(2e3,1e4);async function Ol(e,t,n){if(Ca(e.app))return Promise.reject(eo(e,`operation-not-supported-in-this-environment`));let r=gs(e);return ro(e,t,ic),new kl(r,`signInViaPopup`,t,xl(r,n)).executeNotNull()}var kl=class e extends El{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return M(e,this.auth,`internal-error`),e}async onExecution(){oo(this.filter.length===1,`Popup operations only handle one event`);let e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(eo(this.auth,`web-storage-unsupported`))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(eo(this.auth,`cancelled-popup-request`))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(eo(this.auth,`popup-closed-by-user`))},8e3);return}this.pollId=window.setTimeout(e,Dl.get())};e()}};kl.currentPopupAction=null;var Al=`pendingRedirect`,jl=new Map,Ml=class extends El{constructor(e,t,n=!1){super(e,[`signInViaRedirect`,`linkViaRedirect`,`reauthViaRedirect`,`unknown`],t,void 0,n),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{let t=await Nl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type===`signInViaRedirect`)return super.onAuthEvent(e);if(e.type===`unknown`){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Nl(e,t){let n=Il(t),r=Fl(e);if(!await r._isAvailable())return!1;let i=await r._get(n)===`true`;return await r._remove(n),i}function Pl(e,t){jl.set(e._key(),t)}function Fl(e){return qo(e._redirectPersistence)}function Il(e){return Xo(Al,e.config.apiKey,e.name)}async function Ll(e,t,n=!1){if(Ca(e.app))return Promise.reject(no(e));let r=gs(e),i=await new Ml(r,xl(r,t),n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,t)),i}var Rl=600*1e3,zl=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hl(e)?t:(this.hasHandledPotentialRedirect=!0,t||=(this.queuedRedirectEvent=e,!0),t)}sendToConsumer(e,t){if(e.error&&!Vl(e)){let n=e.error.code?.split(`auth/`)[1]||`internal-error`;t.onError(eo(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bl(e))}saveEventToCache(e){this.cachedEventUids.add(Bl(e)),this.lastProcessedEventTime=Date.now()}};function Bl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join(`-`)}function Vl({type:e,error:t}){return e===`unknown`&&t?.code===`auth/no-auth-event`}function Hl(e){switch(e.type){case`signInViaRedirect`:case`linkViaRedirect`:case`reauthViaRedirect`:return!0;case`unknown`:return Vl(e);default:return!1}}async function Ul(e,t={}){return N(e,`GET`,`/v1/projects`,t)}var Wl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gl=/^https?/;async function Kl(e){if(e.config.emulator)return;let{authorizedDomains:t}=await Ul(e);for(let e of t)try{if(R(e))return}catch{}$a(e,`unauthorized-domain`)}function R(e){let t=so(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith(`chrome-extension://`)){let i=new URL(e);return i.hostname===``&&r===``?n===`chrome-extension:`&&e.replace(`chrome-extension://`,``)===t.replace(`chrome-extension://`,``):n===`chrome-extension:`&&i.hostname===r}if(!Gl.test(n))return!1;if(Wl.test(e))return r===e;let i=e.replace(/\./g,`\\.`);return RegExp(`^(.+\\.`+i+`|`+i+`)$`,`i`).test(r)}var z=new po(3e4,6e4);function B(){let e=qc().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function V(e){return new Promise((t,n)=>{function r(){B(),gapi.load(`gapi.iframes`,{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{B(),n(eo(e,`network-request-failed`))},timeout:z.get()})}if(qc().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(qc().gapi?.load)r();else{let t=Cs(`iframefcb`);return qc()[t]=()=>{gapi.load?r():n(eo(e,`network-request-failed`))},bs(`${Ss()}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw H=null,e})}var H=null;function ql(e){return H||=V(e),H}var Jl=new po(5e3,15e3),Yl=`__/auth/iframe`,Xl=`emulator/auth/iframe`,Zl={style:{position:`absolute`,top:`-100px`,width:`1px`,height:`1px`},"aria-hidden":`true`,tabindex:`-1`},Ql=new Map([[`identitytoolkit.googleapis.com`,`p`],[`staging-identitytoolkit.sandbox.googleapis.com`,`s`],[`test-identitytoolkit.sandbox.googleapis.com`,`t`]]);function $l(e){let t=e.config;M(t.authDomain,e,`auth-domain-config-required`);let n=t.emulator?mo(t,Xl):`https://${e.config.authDomain}/${Yl}`,r={apiKey:t.apiKey,appName:e.name,v:Ea},i=Ql.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(`,`)),`${n}?${Wr(r).slice(1)}`}async function eu(e){let t=await ql(e),n=qc().gapi;return M(n,e,`internal-error`),t.open({where:document.body,url:$l(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zl,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=eo(e,`network-request-failed`),a=qc().setTimeout(()=>{r(i)},Jl.get());function o(){qc().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}var tu={location:`yes`,resizable:`yes`,statusbar:`yes`,toolbar:`no`},nu=500,ru=600,iu=`_blank`,au=`http://localhost`,ou=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function su(e,t,n,r=nu,i=ru){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s=``,c={...tu,width:r.toString(),height:i.toString(),top:a,left:o},l=yr().toLowerCase();n&&(s=ts(l)?iu:n),$o(l)&&(t||=au,c.scrollbars=`yes`);let u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,``);if(ss(l)&&s!==`_self`)return cu(t||``,s),new ou(null);let d=window.open(t||``,s,u);M(d,e,`popup-blocked`);try{d.focus()}catch{}return new ou(d)}function cu(e,t){let n=document.createElement(`a`);n.href=e,n.target=t;let r=document.createEvent(`MouseEvent`);r.initMouseEvent(`click`,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var lu=`__/auth/handler`,uu=`emulator/auth/handler`,du=`fac`;async function fu(e,t,n,r,i,a){M(e.config.authDomain,e,`auth-domain-config-required`),M(e.config.apiKey,e,`invalid-api-key`);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ea,eventId:i};if(t instanceof ic){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||``,Br(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof ac){let e=t.getScopes().filter(e=>e!==``);e.length>0&&(o.scopes=e.join(`,`))}e.tenantId&&(o.tid=e.tenantId);let s=o;for(let e of Object.keys(s))s[e]===void 0&&delete s[e];let c=await e._getAppCheckToken(),l=c?`#${du}=${encodeURIComponent(c)}`:``;return`${pu(e)}?${Wr(s).slice(1)}${l}`}function pu({config:e}){return e.emulator?mo(e,uu):`https://${e.authDomain}/${lu}`}var mu=`webStorageSupport`,hu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uc,this._completeRedirectFn=Ll,this._overrideRedirectResult=Pl}async _openPopup(e,t,n,r){return oo(this.eventManagers[e._key()]?.manager,`_initialize() not called before _openPopup()`),su(e,await fu(e,t,n,so(),r),Gc())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Jc(await fu(e,t,n,so(),r)),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(oo(n,`If manager is not set, promise should be`),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await eu(e),n=new zl(e);return t.register(`authEvent`,t=>(M(t?.authEvent,e,`invalid-auth-event`),{status:n.onEvent(t.authEvent)?`ACK`:`ERROR`}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mu,{type:mu},n=>{let r=n?.[0]?.[mu];r!==void 0&&t(!!r),$a(e,`internal-error`)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ls()||es()||os()}},gu=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case`enroll`:return this._finalizeEnroll(e,t.credential,n);case`signin`:return this._finalizeSignIn(e,t.credential);default:return ao(`unexpected MultiFactorSessionType`)}}},_u=class e extends gu{constructor(e){super(`phone`),this.credential=e}static _fromCredential(t){return new e(t)}_finalizeEnroll(e,t,n){return kc(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hl(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},vu=class{constructor(){}static assertion(e){return _u._fromCredential(e)}};vu.FACTOR_ID=`phone`;var yu=class{static assertionForEnrollment(e,t){return bu._fromSecret(e,t)}static assertionForSignIn(e,t){return bu._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;M(t.user?.auth!==void 0,`internal-error`);let n=await Ac(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return xu._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}};yu.FACTOR_ID=`totp`;var bu=class e extends gu{constructor(e,t,n){super(`totp`),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(t,n){return new e(n,void 0,t)}static _fromEnrollmentId(t,n){return new e(n,t)}async _finalizeEnroll(e,t,n){return M(this.secret!==void 0,e,`argument-error`),jc(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){M(this.enrollmentId!==void 0&&this.otp!==void 0,e,`argument-error`);let n={verificationCode:this.otp};return gl(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},xu=class e{constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Su(e)||Su(t))&&(n=!0),n&&(Su(e)&&(e=this.auth.currentUser?.email||`unknownuser`),Su(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Su(e){return e===void 0||e?.length===0}var Cu=`@firebase/auth`,wu=`1.12.2`,Tu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,`dependent-sdk-initialized-before-auth`)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Eu(e){switch(e){case`Node`:return`node`;case`ReactNative`:return`rn`;case`Worker`:return`webworker`;case`Cordova`:return`cordova`;case`WebExtension`:return`web-extension`;default:return}}function Du(e){xa(new ii(`auth`,(t,{options:n})=>{let r=t.getProvider(`app`).getImmediate(),i=t.getProvider(`heartbeat`),a=t.getProvider(`app-check-internal`),{apiKey:o,authDomain:s}=r.options;M(o&&!o.includes(`:`),`invalid-api-key`,{appName:r.name});let c=new hs(r,i,a,{apiKey:o,authDomain:s,clientPlatform:e,apiHost:`identitytoolkit.googleapis.com`,tokenApiHost:`securetoken.googleapis.com`,apiScheme:`https`,sdkClientVersion:us(e)});return Ns(c,n),c},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{e.getProvider(`auth-internal`).initialize()})),xa(new ii(`auth-internal`,e=>(e=>new Tu(e))(gs(e.getProvider(`auth`).getImmediate())),`PRIVATE`).setInstantiationMode(`EXPLICIT`)),ka(Cu,wu,Eu(e)),ka(Cu,wu,`esm2020`)}var Ou=gr(`authIdTokenMaxAge`)||300,ku=null,Au=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ou)return;let i=n?.token;ku!==i&&(ku=i,await fetch(e,{method:i?`POST`:`DELETE`,headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ju(e=Oa()){let t=Sa(e,`auth`);if(t.isInitialized())return t.getImmediate();let n=Ms(e,{popupRedirectResolver:hu,persistence:[pl,Lc,Uc]}),r=gr(`authTokenSyncURL`);if(r&&typeof isSecureContext==`boolean`&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){let t=Au(e.toString());Tc(n,t,()=>t(n.currentUser)),wc(n,e=>t(e))}}let i=pr(`auth`);return i&&Ps(n,`http://${i}`),n}function Mu(){return document.getElementsByTagName(`head`)?.[0]??document}ys({loadJS(e){return new Promise((t,n)=>{let r=document.createElement(`script`);r.setAttribute(`src`,e),r.onload=t,r.onerror=e=>{let t=eo(`internal-error`);t.customData=e,n(t)},r.type=`text/javascript`,r.charset=`UTF-8`,Mu().appendChild(r)})},gapiScript:`https://apis.google.com/js/api.js`,recaptchaV2Script:`https://www.google.com/recaptcha/api.js`,recaptchaEnterpriseScript:`https://www.google.com/recaptcha/enterprise.js?render=`}),Du(`Browser`);var Nu=`@firebase/database`,Pu=`1.1.2`,Fu=``;function Iu(e){Fu=e}var Lu=class{constructor(e){this.domStorage_=e,this.prefix_=`firebase:`}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pr(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Nr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}},Ru=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}},zu=function(e){try{if(typeof window<`u`&&window[e]!==void 0){let t=window[e];return t.setItem(`firebase:sentinel`,`cache`),t.removeItem(`firebase:sentinel`),new Lu(t)}}catch{}return new Ru},Bu=zu(`localStorage`),Vu=zu(`sessionStorage`),Hu=new hi(`@firebase/database`),Uu=(function(){let e=1;return function(){return e++}})(),Wu=function(e){let t=$r(e),n=new qr;n.update(t);let r=n.digest();return er.encodeByteArray(r)},Gu=function(...e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&typeof r==`object`&&typeof r.length==`number`?t+=Gu.apply(null,r):typeof r==`object`?t+=Pr(r):t+=r,t+=` `}return t},Ku=null,qu=!0,Ju=function(e,t){O(!t||e===!0||e===!1,`Can't turn on custom loggers persistently.`),e===!0?(Hu.logLevel=k.VERBOSE,Ku=Hu.log.bind(Hu),t&&Vu.set(`logging_enabled`,!0)):typeof e==`function`?Ku=e:(Ku=null,Vu.remove(`logging_enabled`))},Yu=function(...e){if(qu===!0&&(qu=!1,Ku===null&&Vu.get(`logging_enabled`)===!0&&Ju(!0)),Ku){let t=Gu.apply(null,e);Ku(t)}},Xu=function(e){return function(...t){Yu(e,...t)}},Zu=function(...e){let t=`FIREBASE INTERNAL ERROR: `+Gu(...e);Hu.error(t)},Qu=function(...e){let t=`FIREBASE FATAL ERROR: ${Gu(...e)}`;throw Hu.error(t),Error(t)},U=function(...e){let t=`FIREBASE WARNING: `+Gu(...e);Hu.warn(t)},$u=function(){typeof window<`u`&&window.location&&window.location.protocol&&window.location.protocol.indexOf(`https:`)!==-1&&U(`Insecure Firebase access from a secure page. Please use https in calls to new Firebase().`)},ed=function(e){return typeof e==`number`&&(e!==e||e===1/0||e===-1/0)},td=function(e){if(Tr()||document.readyState===`complete`)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,10);return}t||(t=!0,e())};document.addEventListener?(document.addEventListener(`DOMContentLoaded`,n,!1),window.addEventListener(`load`,n,!1)):document.attachEvent&&(document.attachEvent(`onreadystatechange`,()=>{document.readyState===`complete`&&n()}),window.attachEvent(`onload`,n))}},nd=`[MIN_NAME]`,rd=`[MAX_NAME]`,id=function(e,t){if(e===t)return 0;if(e===nd||t===rd)return-1;if(t===nd||e===rd)return 1;{let n=gd(e),r=gd(t);return n===null?r===null&&e<t?-1:1:r===null?-1:n-r===0?e.length-t.length:n-r}},ad=function(e,t){return e===t?0:e<t?-1:1},od=function(e,t){if(t&&e in t)return t[e];throw Error(`Missing required key (`+e+`) in object: `+Pr(t))},sd=function(e){if(typeof e!=`object`||!e)return Pr(e);let t=[];for(let n in e)t.push(n);t.sort();let n=`{`;for(let r=0;r<t.length;r++)r!==0&&(n+=`,`),n+=Pr(t[r]),n+=`:`,n+=sd(e[t[r]]);return n+=`}`,n},cd=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function ld(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}var ud=function(e){O(!ed(e),`Invalid JSON number`);let t=1023,n,r,i,a,o;e===0?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,e=Math.abs(e),e>=2**(1-t)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=a+t,i=Math.round(e*2**(52-a)-2**52)):(r=0,i=Math.round(e/2**(1-t-52))));let s=[];for(o=52;o;--o)s.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;--o)s.push(r%2?1:0),r=Math.floor(r/2);s.push(n?1:0),s.reverse();let c=s.join(``),l=``;for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);e.length===1&&(e=`0`+e),l+=e}return l.toLowerCase()},dd=function(){return!!(typeof window==`object`&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fd=function(){return typeof Windows==`object`&&typeof Windows.UI==`object`},pd=RegExp(`^-?(0*)\\d{1,10}$`),md=-2147483648,hd=2147483647,gd=function(e){if(pd.test(e)){let t=Number(e);if(t>=md&&t<=hd)return t}return null},_d=function(e){try{e()}catch(e){setTimeout(()=>{throw U(`Exception was thrown by user callback.`,e.stack||``),e},0)}},vd=function(){return(typeof window==`object`&&window.navigator&&window.navigator.userAgent||``).search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yd=function(e,t){let n=setTimeout(e,t);return typeof n==`number`&&typeof Deno<`u`&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n==`object`&&n.unref&&n.unref(),n},bd=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ca(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){U(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}},xd=class{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&e.code===`auth/token-not-initialized`?(Yu(`Got auth/token-not-initialized error.  Treating as null token.`),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e=`Provided authentication credentials for the app named "`+this.appName_+`" are invalid. This usually indicates your app was not initialized correctly. `;`credential`in this.firebaseOptions_?e+=`Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:`serviceAccount`in this.firebaseOptions_?e+=`Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:e+=`Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.`,U(e)}},Sd=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Sd.OWNER=`owner`;var Cd=`5`,wd=`v`,Td=`s`,Ed=`r`,Dd=`f`,W=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Od=`ls`,kd=`p`,Ad=`ac`,jd=`websocket`,Md=`long_polling`,Nd=class{constructor(e,t,n,r,i=!1,a=``,o=!1,s=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=s,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(`.`)+1),this.internalHost=Bu.get(`host:`+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)===`s-`}isCustomHost(){return this._domain!==`firebaseio.com`&&this._domain!==`firebaseio-demo.com`}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bu.set(`host:`+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+=`<`+this.persistenceKey+`>`),e}toURLString(){let e=this.secure?`https://`:`http://`,t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:``;return`${e}${this.host}/${t}`}};function Pd(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Fd(e,t,n){O(typeof t==`string`,`typeof type must == string`),O(typeof n==`object`,`typeof params must == object`);let r;if(t===jd)r=(e.secure?`wss://`:`ws://`)+e.internalHost+`/.ws?`;else if(t===Md)r=(e.secure?`https://`:`http://`)+e.internalHost+`/.lp?`;else throw Error(`Unknown connection type: `+t);Pd(e)&&(n.ns=e.namespace);let i=[];return ld(n,(e,t)=>{i.push(e+`=`+t)}),r+i.join(`&`)}var Id=class{constructor(){this.counters_={}}incrementCounter(e,t=1){Rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ar(this.counters_)}},Ld={},Rd={};function zd(e){let t=e.toString();return Ld[t]||(Ld[t]=new Id),Ld[t]}function Bd(e,t){let n=e.toString();return Rd[n]||(Rd[n]=t()),Rd[n]}var G=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&_d(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&=(this.onClose(),null);break}this.currentResponseNum++}}},Vd=`start`,Hd=`close`,Ud=`pLPCommand`,Wd=`pRTLPCB`,Gd=`id`,Kd=`pw`,qd=`ser`,Jd=`cb`,Yd=`dframe`,Xd=1870,Zd=30,Qd=Xd-Zd,$d=25e3,ef=3e4,tf=class e{constructor(e,t,n,r,i,a,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=zd(t),this.urlFn=e=>(this.appCheckToken&&(e[Ad]=this.appCheckToken),Fd(t,Md,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new G(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_(`Timed out trying to connect.`),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ef)),td(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nf((...e)=>{let[t,n,r,i,a]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null),this.everConnected_=!0,t===Vd)this.id=n,this.password=r;else if(t===Hd)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error(`Unrecognized command received: `+t)},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[Vd]=`t`,e[qd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Jd]=this.scriptTagHolder.uniqueCallbackIdentifier),e[wd]=Cd,this.transportSessionId&&(e[Td]=this.transportSessionId),this.lastSessionId&&(e[Od]=this.lastSessionId),this.applicationId&&(e[kd]=this.applicationId),this.appCheckToken&&(e[Ad]=this.appCheckToken),typeof location<`u`&&location.hostname&&W.test(location.hostname)&&(e[Ed]=Dd);let t=this.urlFn(e);this.log_(`Connecting via long-poll to `+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){e.forceAllow_=!0}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){return Tr()?!1:e.forceAllow_?!0:!e.forceDisallow_&&typeof document<`u`&&document.createElement!=null&&!dd()&&!fd()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&=(this.scriptTagHolder.close(),null),this.myDisconnFrame&&=(document.body.removeChild(this.myDisconnFrame),null),this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null)}onClosed_(){this.isClosed_||(this.log_(`Longpoll is closing itself`),this.shutdown_(),this.onDisconnect_&&=(this.onDisconnect_(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`Longpoll is being closed.`),this.shutdown_())}send(e){let t=Pr(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=cd(nr(t),Qd);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Tr())return;this.myDisconnFrame=document.createElement(`iframe`);let n={};n[Yd]=`t`,n[Gd]=e,n[Kd]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display=`none`,document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=Pr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter(`bytes_received`,t)}},nf=class e{constructor(t,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Tr())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=Uu(),window[Ud+this.uniqueCallbackIdentifier]=t,window[Wd+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();let r=``;this.myIFrame.src&&this.myIFrame.src.substr(0,11)===`javascript:`&&(r=`<script>document.domain="`+document.domain+`";<\/script>`);let i=`<html><body>`+r+`</body></html>`;try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Yu(`frame writing exception`),e.stack&&Yu(e.stack),Yu(e)}}}static createIFrame_(){let e=document.createElement(`iframe`);if(e.style.display=`none`,document.body){document.body.appendChild(e);try{e.contentWindow.document||Yu(`No IE domain setting required`)}catch{e.src=`javascript:void((function(){document.open();document.domain='`+document.domain+`';document.close();})())`}}else throw`Document body has not initialized. Wait to initialize Firebase until after the document is ready.`;return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent=``,setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},0));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Gd]=this.myID,e[Kd]=this.myPW,e[qd]=this.currentSerial;let t=this.urlFn(e),n=``,r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zd+n.length<=Xd;){let e=this.pendingSegs.shift();n=n+`&seg`+r+`=`+e.seg+`&ts`+r+`=`+e.ts+`&d`+r+`=`+e.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor($d));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){Tr()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement(`script`);n.type=`text/javascript`,n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;(!e||e===`loaded`||e===`complete`)&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Yu(`Long-poll script failed to load: `+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},1)}},rf=16384,af=45e3,of=null;typeof MozWebSocket<`u`?of=MozWebSocket:typeof WebSocket<`u`&&(of=WebSocket);var sf=class e{constructor(t,n,r,i,a,o,s){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=zd(n),this.connURL=e.connectionURL_(n,o,s,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,t,n,r,i){let a={};return a[wd]=Cd,!Tr()&&typeof location<`u`&&location.hostname&&W.test(location.hostname)&&(a[Ed]=Dd),t&&(a[Td]=t),n&&(a[Od]=n),r&&(a[Ad]=r),i&&(a[kd]=i),Fd(e,jd,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_(`Websocket connecting to `+this.connURL),this.everConnected_=!1,Bu.set(`previous_websocket_failure`,!0);try{let e;if(Tr()){let t=this.nodeAdmin?`AdminNode`:`Node`;e={headers:{"User-Agent":`Firebase/${Cd}/${Fu}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||``}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers[`X-Firebase-AppCheck`]=this.appCheckToken);let n={},r=this.connURL.indexOf(`wss://`)===0?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new of(this.connURL,[],e)}catch(e){this.log_(`Error instantiating WebSocket.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_();return}this.mySock.onopen=()=>{this.log_(`Websocket connected.`),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_(`Websocket connection was disconnected.`),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_(`WebSocket error.  Closing connection.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<`u`&&navigator.userAgent){let e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);e&&e.length>1&&parseFloat(e[1])<4.4&&(t=!0)}return!t&&of!==null&&!e.forceDisallow_}static previouslyFailed(){return Bu.isInMemoryStorage||Bu.get(`previous_websocket_failure`)===!0}markConnectionHealthy(){Bu.remove(`previous_websocket_failure`)}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join(``);this.frames=null;let t=Nr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,`We already have a frame buffer`),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter(`bytes_received`,t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);e!==null&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=Pr(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=cd(t,rf);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&=(clearInterval(this.keepaliveTimer),null),this.mySock&&=(this.mySock.close(),null)}onClosed_(){this.isClosed_||(this.log_(`WebSocket is closing itself`),this.shutdown_(),this.onDisconnect&&=(this.onDisconnect(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`WebSocket is being closed`),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_(`0`),this.resetKeepAlive()},Math.floor(af))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_(`Exception thrown from WebSocket.send():`,e.message||e.data,`Closing connection.`),setTimeout(this.onClosed_.bind(this),0)}}};sf.responsesRequiredToBeHealthy=2,sf.healthyTimeout=3e4;var cf=class e{static get ALL_TRANSPORTS(){return[tf,sf]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(t){let n=sf&&sf.isAvailable(),r=n&&!sf.previouslyFailed();if(t.webSocketOnly&&(n||U(`wss:// URL used, but browser isn't known to support websockets.  Trying anyway.`),r=!0),r)this.transports_=[sf];else{let t=this.transports_=[];for(let n of e.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n);e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error(`No transports available`)}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};cf.globalTransportInitialized_=!1;var lf=6e4,uf=5e3,df=10*1024,ff=100*1024,pf=`t`,mf=`d`,hf=`s`,gf=`r`,_f=`e`,vf=`o`,yf=`a`,bf=`n`,xf=`p`,Sf=`h`,Cf=class{constructor(e,t,n,r,i,a,o,s,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=s,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu(`c:`+this.id+`:`),this.transportManager_=new cf(t),this.log_(`Connection created`),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},0);let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=yd(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ff?(this.log_(`Connection exceeded healthy timeout but has received `+this.conn_.bytesReceived+` bytes.  Marking connection healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>df?this.log_(`Connection exceeded healthy timeout but has sent `+this.conn_.bytesSent+` bytes.  Leaving connection alive.`):(this.log_(`Closing unhealthy connection after timeout.`),this.close()))},Math.floor(r)))}nextTransportId_(){return`c:`+this.id+`:`+ this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_(`Secondary connection lost.`),this.onSecondaryConnectionLost_()):this.log_(`closing an old connection`)}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_(`message on old connection`))}}sendRequest(e){let t={t:`d`,d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_(`cleaning up and promoting a connection: `+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pf in e){let t=e[pf];t===yf?this.upgradeIfSecondaryHealthy_():t===gf?(this.log_(`Got a reset on secondary, closing it`),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vf&&(this.log_(`got pong on secondary.`),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=od(`t`,e),n=od(`d`,e);if(t===`c`)this.onSecondaryControl_(n);else if(t===`d`)this.pendingDataMessages.push(n);else throw Error(`Unknown protocol layer: `+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_(`Secondary connection is healthy.`),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_(`sending ping on secondary.`),this.secondaryConn_.send({t:`c`,d:{t:xf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_(`sending client ack on secondary`),this.secondaryConn_.send({t:`c`,d:{t:yf,d:{}}}),this.log_(`Ending transmission on primary`),this.conn_.send({t:`c`,d:{t:bf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=od(`t`,e),n=od(`d`,e);t===`c`?this.onControl_(n):t===`d`&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=od(pf,e);if(mf in e){let n=e[mf];if(t===Sf){let e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===bf){this.log_(`recvd end transmission on primary`),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hf?this.onConnectionShutdown_(n):t===gf?this.onReset_(n):t===_f?Zu(`Server Error: `+n):t===vf?(this.log_(`got pong on primary.`),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu(`Unknown control packet command: `+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cd!==n&&U(`Protocol version mismatch detected`),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),yd(()=>{this.secondaryConn_&&(this.log_(`Timed out trying to upgrade.`),this.secondaryConn_.close())},Math.floor(lf))}onReset_(e){this.log_(`Reset packet received.  New host: `+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_(`Realtime connection established.`),this.conn_=e,this.state_=1,this.onReady_&&=(this.onReady_(t,this.sessionId),null),this.primaryResponsesRequired_===0?(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0):yd(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_(`sending ping on primary.`),this.sendData_({t:`c`,d:{t:xf,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_(`Realtime connection failed.`),this.repoInfo_.isCacheableHost()&&(Bu.remove(`host:`+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_(`Realtime connection lost.`),this.close()}onConnectionShutdown_(e){this.log_(`Connection shutdown command received. Shutting down...`),this.onKill_&&=(this.onKill_(e),null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw`Connection is not connected`;this.tx_.send(e)}close(){this.state_!==2&&(this.log_(`Closing realtime connection.`),this.state_=2,this.closeConnections_(),this.onDisconnect_&&=(this.onDisconnect_(),null))}closeConnections_(){this.log_(`Shutting down all connections`),this.conn_&&=(this.conn_.close(),null),this.secondaryConn_&&=(this.secondaryConn_.close(),null),this.healthyTimeout_&&=(clearTimeout(this.healthyTimeout_),null)}},wf=class{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}},Tf=class{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,`Requires a non-empty array`)}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context)){r.splice(e,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),`Unknown event: `+e)}},Ef=class e extends Tf{static getInstance(){return new e}constructor(){super([`online`]),this.online_=!0,typeof window<`u`&&window.addEventListener!==void 0&&!br()&&(window.addEventListener(`online`,()=>{this.online_||(this.online_=!0,this.trigger(`online`,!0))},!1),window.addEventListener(`offline`,()=>{this.online_&&(this.online_=!1,this.trigger(`online`,!1))},!1))}getInitialEvent(e){return O(e===`online`,`Unknown event type: `+e),[this.online_]}currentlyOnline(){return this.online_}},Df=32,Of=768,K=class{constructor(e,t){if(t===void 0){this.pieces_=e.split(`/`);let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=``;for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==``&&(e+=`/`+this.pieces_[t]);return e||`/`}};function q(){return new K(``)}function J(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function kf(e){return e.pieces_.length-e.pieceNum_}function Y(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new K(e.pieces_,t)}function Af(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function jf(e){let t=``;for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==``&&(t+=`/`+encodeURIComponent(String(e.pieces_[n])));return t||`/`}function Mf(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Nf(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new K(t,0)}function Pf(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof K)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split(`/`);for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new K(n,0)}function X(e){return e.pieceNum_>=e.pieces_.length}function Ff(e,t){let n=J(e),r=J(t);if(n===null)return t;if(n===r)return Ff(Y(e),Y(t));throw Error(`INTERNAL ERROR: innerPath (`+t+`) is not within outerPath (`+e+`)`)}function If(e,t){if(kf(e)!==kf(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Lf(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(kf(e)>kf(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Rf=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Mf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ei(this.parts_[e]);Vf(this)}};function zf(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=ei(t),Vf(e)}function Bf(e){let t=e.parts_.pop();e.byteLength_-=ei(t),e.parts_.length>0&&--e.byteLength_}function Vf(e){if(e.byteLength_>Of)throw Error(e.errorPrefix_+`has a key path longer than 768 bytes (`+e.byteLength_+`).`);if(e.parts_.length>Df)throw Error(e.errorPrefix_+`path specified exceeds the maximum depth that can be written (32) or object contains a cycle `+Hf(e))}function Hf(e){return e.parts_.length===0?``:`in property '`+e.parts_.join(`.`)+`'`}var Uf=class e extends Tf{static getInstance(){return new e}constructor(){super([`visible`]);let e,t;typeof document<`u`&&document.addEventListener!==void 0&&(document.hidden===void 0?document.mozHidden===void 0?document.msHidden===void 0?document.webkitHidden!==void 0&&(t=`webkitvisibilitychange`,e=`webkitHidden`):(t=`msvisibilitychange`,e=`msHidden`):(t=`mozvisibilitychange`,e=`mozHidden`):(t=`visibilitychange`,e=`hidden`)),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger(`visible`,t))},!1)}getInitialEvent(e){return O(e===`visible`,`Unknown event type: `+e),[this.visible_]}},Wf=1e3,Gf=300*1e3,Kf=30*1e3,qf=1.3,Jf=3e4,Yf=`server_kill`,Xf=3,Zf=class e extends wf{constructor(t,n,r,i,a,o,s,c){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=c,this.id=e.nextPersistentConnectionId_++,this.log_=Xu(`p:`+this.id+`:`),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wf,this.maxReconnectDelay_=Gf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Tr())throw Error(`Auth override specified in options, but not supported on non Node.js platforms`);Uf.getInstance().on(`visible`,this.onVisible_,this),t.host.indexOf(`fblocal`)===-1&&Ef.getInstance().on(`online`,this.onOnline_,this)}sendRequest(e,t,n){let r=++this.requestNumber_,i={r,a:e,b:t};this.log_(Pr(i)),O(this.connected_,`sendRequest call when we're not connected not allowed.`),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();let t=new _r,n={action:`g`,request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{let n=e.d;e.s===`ok`?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();let i=e._queryIdentifier,a=e._path.toString();this.log_(`Listen called for `+a+` `+i),this.listens.has(a)||this.listens.set(a,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`listen() called for non-default but complete query`),O(!this.listens.get(a).has(i),`listen() called twice for same path/queryId.`);let o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest(`g`,t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(t){let n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_(`Listen on `+r+` for `+i);let a={p:r};t.tag&&(a.q=n._queryObject,a.t=t.tag),a.h=t.hashFn(),this.sendRequest(`q`,a,a=>{let o=a.d,s=a.s;e.warnOnListenWarnings_(o,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_(`listen response`,a),s!==`ok`&&this.removeListen_(r,i),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e==`object`&&Rr(e,`w`)){let n=zr(e,`w`);Array.isArray(n)&&~n.indexOf(`no_index`)&&U(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${`".indexOn": "`+t._queryParams.getIndex().toString()+`"`} at ${t._path.toString()} to your security rules for better performance.`)}}refreshAuthToken(e){this.authToken_=e,this.log_(`Auth token refreshed`),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest(`unauth`,{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lr(e))&&(this.log_(`Admin auth credential detected.  Reducing max reconnect time.`),this.maxReconnectDelay_=Kf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_(`App check token refreshed`),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest(`unappeck`,{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=Ir(e)?`auth`:`gauth`,n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_==`object`&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||`error`;this.authToken_===e&&(n===`ok`?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest(`appcheck`,{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||`error`;t===`ok`?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),r=e._queryIdentifier;this.log_(`Unlisten called for `+n+` `+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`unlisten() called for non-default but complete query`),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_(`Unlisten on `+e+` for `+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest(`n`,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`o`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`o`,data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`om`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`om`,data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`oc`,e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:`oc`,data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_(`onDisconnect `+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},0)})}put(e,t,n,r){this.putInternal(`p`,e,t,n,r)}merge(e,t,n,r){this.putInternal(`m`,e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let a={p:t,d:n};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_(`Buffering put: `+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+` response`,n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_(`reportStats`,t),this.sendRequest(`s`,t,e=>{if(e.s!==`ok`){let t=e.d;this.log_(`reportStats`,`Error sending stats: `+t)}})}}onDataMessage_(e){if(`r`in e){this.log_(`from server: `+Pr(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if(`error`in e)throw`A server-side error has occurred: `+e.error;else `a`in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_(`handleServerMessage`,e,t),e===`d`?this.onDataUpdate_(t.p,t.d,!1,t.t):e===`m`?this.onDataUpdate_(t.p,t.d,!0,t.t):e===`c`?this.onListenRevoked_(t.p,t.q):e===`ac`?this.onAuthRevoked_(t.s,t.d):e===`apc`?this.onAppCheckRevoked_(t.s,t.d):e===`sd`?this.onSecurityDebugPacket_(t):Zu(`Unrecognized action received from server: `+Pr(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_(`connection ready`),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,`Scheduling a connect when we're already connected/ing?`),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_(`Window became visible.  Reducing delay.`),this.reconnectDelay_=Wf,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_(`Browser went online.`),this.reconnectDelay_=Wf,this.realtime_||this.scheduleConnect_(0)):(this.log_(`Browser went offline.  Killing connection.`),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_(`data client disconnected`),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&=(new Date().getTime()-this.lastConnectionEstablishedTime_>Jf&&(this.reconnectDelay_=Wf),null):(this.log_(`Window isn't visible.  Delaying reconnect.`),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_(`Trying to reconnect in `+t+`ms`),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_(`Making a connection attempt`),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+`:`+ e.nextConnectionId_++,a=this.lastSessionId,o=!1,s=null,c=function(){s?s.close():(o=!0,r())};this.realtime_={close:c,sendRequest:function(e){O(s,`sendRequest call when we're not connected not allowed.`),s.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[e,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?Yu(`getToken() completed but was canceled`):(Yu(`getToken() completed. Creating connection.`),this.authToken_=e&&e.accessToken,this.appCheckToken_=c&&c.token,s=new Cf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,e=>{U(e+` (`+this.repoInfo_.toString()+`)`),this.interrupt(Yf)},a))}catch(e){this.log_(`Failed to get token: `+e),o||(this.repoInfo_.nodeAdmin&&U(e),c())}}}interrupt(e){Yu(`Interrupting connection for reason: `+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&=(clearTimeout(this.establishConnectionTimer_),null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yu(`Resuming connection for reason: `+e),delete this.interruptReasons_[e],Br(this.interruptReasons_)&&(this.reconnectDelay_=Wf,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&`h`in t.request&&t.queued&&(t.onComplete&&t.onComplete(`disconnect`),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>sd(e)).join(`$`):`default`;let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete(`permission_denied`)}removeListen_(e,t){let n=new K(e).toString(),r;if(this.listens.has(n)){let e=this.listens.get(n);r=e.get(t),e.delete(t),e.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Yu(`Auth token revoked: `+e+`/`+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xf&&(this.reconnectDelay_=Kf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Yu(`App check token revoked: `+e+`/`+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):`msg`in e&&console.log(`FIREBASE: `+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t=`js`;Tr()&&(t=this.repoInfo_.nodeAdmin?`admin_node`:`node`),e[`sdk.`+t+`.`+Fu.replace(/\./g,`-`)]=1,br()?e[`framework.cordova`]=1:Cr()&&(e[`framework.reactnative`]=1),this.reportStats(e)}shouldReconnect_(){let e=Ef.getInstance().currentlyOnline();return Br(this.interruptReasons_)&&e}};Zf.nextPersistentConnectionId_=0,Zf.nextConnectionId_=0;var Z=class e{constructor(e,t){this.name=e,this.node=t}static Wrap(t,n){return new e(t,n)}},Qf=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new Z(nd,e),r=new Z(nd,t);return this.compare(n,r)!==0}minPost(){return Z.MIN}},$f,ep=class extends Qf{static get __EMPTY_NODE(){return $f}static set __EMPTY_NODE(e){$f=e}compare(e,t){return id(e.name,t.name)}isDefinedOn(e){throw Zn(`KeyIndex.isDefinedOn not expected to be called.`)}indexedValueChanged(e,t){return!1}minPost(){return Z.MIN}maxPost(){return new Z(rd,$f)}makePost(e,t){return O(typeof e==`string`,`KeyIndex indexValue must always be a string.`),new Z(e,$f)}toString(){return`.key`}},tp=new ep,np=class{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?n(e.key,t):1,r&&(a*=-1),a<0)e=this.isReverse_?e.left:e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},rp=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??ap.EMPTY_NODE,this.right=a??ap.EMPTY_NODE}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ap.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return ap.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return 2**this.check_()<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error(`Red node has red child(`+this.key+`,`+this.value+`)`);if(this.right.isRed_())throw Error(`Right child of (`+this.key+`,`+this.value+`) is red`);let e=this.left.check_();if(e!==this.right.check_())throw Error(`Black depths differ`);return e+(this.isRed_()?0:1)}};rp.RED=!0,rp.BLACK=!1;var ip=class{copy(e,t,n,r,i){return this}insert(e,t,n){return new rp(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},ap=class e{constructor(t,n=e.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,rp.BLACK,null,null))}remove(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,rp.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0)if(!n.left.isEmpty()){for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else if(r)return r.key;else return null;else t<0?n=n.left:t>0&&(r=n,n=n.right);throw Error(`Attempted to find predecessor key for a nonexistent key.  What gives?`)}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new np(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new np(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new np(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new np(this.root_,null,this.comparator_,!0,e)}};ap.EMPTY_NODE=new ip;function op(e,t){return id(e.name,t.name)}function sp(e,t){return id(e,t)}var cp;function lp(e){cp=e}var up=function(e){return typeof e==`number`?`number:`+ud(e):`string:`+e},dp=function(e){if(e.isLeafNode()){let t=e.val();O(typeof t==`string`||typeof t==`number`||typeof t==`object`&&Rr(t,`.sv`),`Priority must be a string or number.`)}else O(e===cp||e.isEmpty(),`priority of unexpected type.`);O(e===cp||e.getPriority().isEmpty(),`Priority nodes can't have a priority of their own.`)},fp,pp=class e{static set __childrenNodeConstructor(e){fp=e}static get __childrenNodeConstructor(){return fp}constructor(t,n=e.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,`LeafNode shouldn't be created with null/undefined value.`),dp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new e(this.value_,t)}getImmediateChild(t){return t===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return X(t)?this:J(t)===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(t,n){return t===`.priority`?this.updatePriority(n):n.isEmpty()&&t!==`.priority`?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){let r=J(t);return r===null?n:n.isEmpty()&&r!==`.priority`?this:(O(r!==`.priority`||kf(t)===1,`.priority must be the last token in a path`),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e=``;this.priorityNode_.isEmpty()||(e+=`priority:`+up(this.priorityNode_.val())+`:`);let t=typeof this.value_;e+=t+`:`,t===`number`?e+=ud(this.value_):e+=this.value_,this.lazyHash_=Wu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(O(t.isLeafNode(),`Unknown node type`),this.compareToLeafNode_(t))}compareToLeafNode_(t){let n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),a=e.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,`Unknown leaf type: `+n),O(a>=0,`Unknown leaf type: `+r),i===a?r===`object`?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};pp.VALUE_TYPE_ORDER=[`object`,`boolean`,`number`,`string`];var mp,hp;function gp(e){mp=e}function _p(e){hp=e}var vp=new class extends Qf{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?id(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(rd,new pp(`[PRIORITY-POST]`,hp))}makePost(e,t){return new Z(t,new pp(`[PRIORITY-POST]`,mp(e)))}toString(){return`.priority`}},yp=Math.log(2),bp=class{constructor(e){let t=e=>parseInt(Math.log(e)/yp,10),n=e=>parseInt(Array(e+1).join(`1`),2);this.count=t(e+1),this.current_=this.count-1;let r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},xp=function(e,t,n,r){e.sort(t);let i=function(t,r){let a=r-t,o,s;if(a===0)return null;if(a===1)return o=e[t],s=n?n(o):o,new rp(s,o.node,rp.BLACK,null,null);{let c=parseInt(a/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],s=n?n(o):o,new rp(s,o.node,rp.BLACK,l,u)}},a=function(t){let r=null,a=null,o=e.length,s=function(t,r){let a=o-t,s=o;o-=t;let l=i(a+1,s),u=e[a];c(new rp(n?n(u):u,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(a=e,r=e)};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),r=2**(t.count-(e+1));n?s(r,rp.BLACK):(s(r,rp.BLACK),s(r,rp.RED))}return a}(new bp(e.length));return new ap(r||t,a)},Sp,Cp={},wp=class e{static get Default(){return O(Cp&&vp,`ChildrenNode.ts has not been loaded`),Sp||=new e({".priority":Cp},{".priority":vp}),Sp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=zr(this.indexes_,e);if(!t)throw Error(`No index defined for `+e);return t instanceof ap?t:null}hasIndex(e){return Rr(this.indexSet_,e.toString())}addIndex(t,n){O(t!==tp,`KeyIndex always exists and isn't meant to be added to the IndexMap.`);let r=[],i=!1,a=n.getIterator(Z.Wrap),o=a.getNext();for(;o;)i||=t.isDefinedOn(o.node),r.push(o),o=a.getNext();let s;s=i?xp(r,t.getCompare()):Cp;let c=t.toString(),l={...this.indexSet_};l[c]=t;let u={...this.indexes_};return u[c]=s,new e(u,l)}addToIndexes(t,n){return new e(Vr(this.indexes_,(e,r)=>{let i=zr(this.indexSet_,r);if(O(i,`Missing index implementation for `+r),e===Cp)if(i.isDefinedOn(t.node)){let e=[],r=n.getIterator(Z.Wrap),a=r.getNext();for(;a;)a.name!==t.name&&e.push(a),a=r.getNext();return e.push(t),xp(e,i.getCompare())}else return Cp;else{let r=n.get(t.name),i=e;return r&&(i=i.remove(new Z(t.name,r))),i.insert(t,t.node)}}),this.indexSet_)}removeFromIndexes(t,n){return new e(Vr(this.indexes_,e=>{if(e===Cp)return e;{let r=n.get(t.name);return r?e.remove(new Z(t.name,r)):e}}),this.indexSet_)}},Tp,Q=class e{static get EMPTY_NODE(){return Tp||=new e(new ap(sp),null,wp.Default)}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&dp(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),`An empty node cannot have a priority`)}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tp}updatePriority(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}getImmediateChild(e){if(e===`.priority`)return this.getPriority();{let t=this.children_.get(e);return t===null?Tp:t}}getChild(e){let t=J(e);return t===null?this:this.getImmediateChild(t).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(t,n){if(O(n,`We should always be passing snapshot nodes`),t===`.priority`)return this.updatePriority(n);{let r=new Z(t,n),i,a;n.isEmpty()?(i=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),a=this.indexMap_.addToIndexes(r,this.children_));let o=i.isEmpty()?Tp:this.priorityNode_;return new e(i,o,a)}}updateChild(e,t){let n=J(e);if(n===null)return t;{O(J(e)!==`.priority`||kf(e)===1,`.priority must be the last token in a path`);let r=this.getImmediateChild(n).updateChild(Y(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;let n={},r=0,i=0,a=!0;if(this.forEachChild(vp,(o,s)=>{n[o]=s.val(t),r++,a&&e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1}),!t&&a&&i<2*r){let e=[];for(let t in n)e[t]=n[t];return e}else return t&&!this.getPriority().isEmpty()&&(n[`.priority`]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e=``;this.getPriority().isEmpty()||(e+=`priority:`+up(this.getPriority().val())+`:`),this.forEachChild(vp,(t,n)=>{let r=n.hash();r!==``&&(e+=`:`+t+`:`+r)}),this.lazyHash_=e===``?``:Wu(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(r){let n=r.getPredecessorKey(new Z(e,t));return n?n.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.minKey();return e&&e.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new Z(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.maxKey();return e&&e.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new Z(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,Z.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,Z.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ep?-1:0}withIndex(t){if(t===tp||this.indexMap_.hasIndex(t))return this;{let n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===tp||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(!this.getPriority().equals(t.getPriority()))return!1;if(this.children_.count()===t.children_.count()){let e=this.getIterator(vp),n=t.getIterator(vp),r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return r===null&&i===null}else return!1}}resolveIndex_(e){return e===tp?null:this.indexMap_.get(e.toString())}};Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Ep=new class extends Q{constructor(){super(new ap(sp),Q.EMPTY_NODE,wp.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Z,{MIN:{value:new Z(nd,Q.EMPTY_NODE)},MAX:{value:new Z(rd,Ep)}}),ep.__EMPTY_NODE=Q.EMPTY_NODE,pp.__childrenNodeConstructor=Q,lp(Ep),_p(Ep);var Dp=!0;function Op(e,t=null){if(e===null)return Q.EMPTY_NODE;if(typeof e==`object`&&`.priority`in e&&(t=e[`.priority`]),O(t===null||typeof t==`string`||typeof t==`number`||typeof t==`object`&&`.sv`in t,`Invalid priority type found: `+typeof t),typeof e==`object`&&`.value`in e&&e[`.value`]!==null&&(e=e[`.value`]),typeof e!=`object`||`.sv`in e)return new pp(e,Op(t));if(!(e instanceof Array)&&Dp){let n=[],r=!1;if(ld(e,(e,t)=>{if(e.substring(0,1)!==`.`){let i=Op(t);i.isEmpty()||(r||=!i.getPriority().isEmpty(),n.push(new Z(e,i)))}}),n.length===0)return Q.EMPTY_NODE;let i=xp(n,op,e=>e.name,sp);if(r){let e=xp(n,vp.getCompare());return new Q(i,Op(t),new wp({".priority":e},{".priority":vp}))}else return new Q(i,Op(t),wp.Default)}else{let n=Q.EMPTY_NODE;return ld(e,(t,r)=>{if(Rr(e,t)&&t.substring(0,1)!==`.`){let e=Op(r);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(Op(t))}}gp(Op);var kp=class extends Qf{constructor(e){super(),this.indexPath_=e,O(!X(e)&&J(e)!==`.priority`,`Can't create PathIndex with empty path or .priority key`)}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?id(e.name,t.name):i}makePost(e,t){let n=Op(e);return new Z(t,Q.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new Z(rd,Q.EMPTY_NODE.updateChild(this.indexPath_,Ep))}toString(){return Mf(this.indexPath_,0).join(`/`)}},Ap=new class extends Qf{compare(e,t){let n=e.node.compareTo(t.node);return n===0?id(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,t){return new Z(t,Op(e))}toString(){return`.value`}};function jp(e){return{type:`value`,snapshotNode:e}}function Mp(e,t){return{type:`child_added`,snapshotNode:t,childName:e}}function Np(e,t){return{type:`child_removed`,snapshotNode:t,childName:e}}function Pp(e,t,n){return{type:`child_changed`,snapshotNode:t,childName:e,oldSnap:n}}function Fp(e,t){return{type:`child_moved`,snapshotNode:t,childName:e}}var Ip=class e{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_=``,this.indexStartValue_=null,this.indexStartName_=``,this.indexEndValue_=null,this.indexEndName_=``,this.index_=vp}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===``?this.startSet_:this.viewFrom_===`l`}getIndexStartValue(){return O(this.startSet_,`Only valid if start has been set`),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,`Only valid if start has been set`),this.startNameSet_?this.indexStartName_:nd}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,`Only valid if end has been set`),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,`Only valid if end has been set`),this.endNameSet_?this.indexEndName_:rd}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==``}getLimit(){return O(this.limitSet_,`Only valid if limit has been set`),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vp}copy(){let t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}};function Lp(e){let t={};if(e.isDefault())return t;let n;if(e.index_===vp?n=`$priority`:e.index_===Ap?n=`$value`:e.index_===tp?n=`$key`:(O(e.index_ instanceof kp,`Unrecognized index type!`),n=e.index_.toString()),t.orderBy=Pr(n),e.startSet_){let n=e.startAfterSet_?`startAfter`:`startAt`;t[n]=Pr(e.indexStartValue_),e.startNameSet_&&(t[n]+=`,`+Pr(e.indexStartName_))}if(e.endSet_){let n=e.endBeforeSet_?`endBefore`:`endAt`;t[n]=Pr(e.indexEndValue_),e.endNameSet_&&(t[n]+=`,`+Pr(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Rp(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===``&&(n=e.isViewFromLeft()?`l`:`r`),t.vf=n}return e.index_!==vp&&(t.i=e.index_.toString()),t}var zp=class e extends wf{reportStats(e){throw Error(`Method not implemented.`)}static getListenId_(e,t){return t===void 0?(O(e._queryParams.isDefault(),`should have a tag if it's not a default query.`),e._path.toString()):`tag$`+t}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Xu(`p:rest:`),this.listens_={}}listen(t,n,r,i){let a=t._path.toString();this.log_(`Listen called for `+a+` `+t._queryIdentifier);let o=e.getListenId_(t,r),s={};this.listens_[o]=s;let c=Lp(t._queryParams);this.restRequest_(a+`.json`,c,(e,t)=>{let n=t;if(e===404&&(n=null,e=null),e===null&&this.onDataUpdate_(a,n,!1,r),zr(this.listens_,o)===s){let t;t=e?e===401?`permission_denied`:`rest_error:`+e:`ok`,i(t,null)}})}unlisten(t,n){let r=e.getListenId_(t,n);delete this.listens_[r]}get(e){let t=Lp(e._queryParams),n=e._path.toString(),r=new _r;return this.restRequest_(n+`.json`,t,(e,t)=>{let i=t;e===404&&(i=null,e=null),e===null?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format=`export`,Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let a=(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host+e+`?ns=`+this.repoInfo_.namespace+Wr(t);this.log_(`Sending REST request for `+a);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&o.readyState===4){this.log_(`REST Response for `+a+` received. status:`,o.status,`response:`,o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Nr(o.responseText)}catch{U(`Failed to parse JSON response for `+a+`: `+o.responseText)}n(null,e)}else o.status!==401&&o.status!==404&&U(`Got unsuccessful REST response for `+a+` Status: `+o.status),n(o.status);n=null}},o.open(`GET`,a,!0),o.send()})}},Bp=class{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function Vp(){return{value:null,children:new Map}}function Hp(e,t,n){if(X(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{let r=J(t);e.children.has(r)||e.children.set(r,Vp());let i=e.children.get(r);t=Y(t),Hp(i,t,n)}}function Up(e,t,n){e.value===null?Wp(e,(e,r)=>{Up(r,new K(t.toString()+`/`+e),n)}):n(t,e.value)}function Wp(e,t){e.children.forEach((e,n)=>{t(n,e)})}var Gp=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&ld(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}},Kp=10*1e3,qp=30*1e3,Jp=300*1e3,Yp=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Gp(e);let n=Kp+(qp-Kp)*Math.random();yd(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;ld(e,(e,r)=>{r>0&&Rr(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),yd(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jp))}},Xp;(function(e){e[e.OVERWRITE=0]=`OVERWRITE`,e[e.MERGE=1]=`MERGE`,e[e.ACK_USER_WRITE=2]=`ACK_USER_WRITE`,e[e.LISTEN_COMPLETE=3]=`LISTEN_COMPLETE`})(Xp||={});function Zp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $p(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}var em=class e{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Xp.ACK_USER_WRITE,this.source=Zp()}operationForChild(t){if(!X(this.path))return O(J(this.path)===t,`operationForChild called for unrelated child.`),new e(Y(this.path),this.affectedTree,this.revert);if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),`affectedTree should not have overlapping affected paths.`),this;{let n=this.affectedTree.subtree(new K(t));return new e(q(),n,this.revert)}}},tm=class e{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Xp.OVERWRITE}operationForChild(t){return X(this.path)?new e(this.source,q(),this.snap.getImmediateChild(t)):new e(this.source,Y(this.path),this.snap)}},nm=class e{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Xp.MERGE}operationForChild(t){if(X(this.path)){let n=this.children.subtree(new K(t));return n.isEmpty()?null:n.value?new tm(this.source,q(),n.value):new e(this.source,q(),n)}else return O(J(this.path)===t,`Can't get a merge for a child not on the path of the operation`),new e(this.source,Y(this.path),this.children)}toString(){return`Operation(`+this.path+`: `+this.source.toString()+` merge: `+this.children.toString()+`)`}},rm=class{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;let t=J(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};function im(e,t,n,r){let i=[],a=[];return t.forEach(t=>{t.type===`child_changed`&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push(Fp(t.childName,t.snapshotNode))}),am(e,i,`child_removed`,t,r,n),am(e,i,`child_added`,t,r,n),am(e,i,`child_moved`,a,r,n),am(e,i,`child_changed`,t,r,n),am(e,i,`value`,t,r,n),i}function am(e,t,n,r,i,a){let o=r.filter(e=>e.type===n);o.sort((t,n)=>sm(e,t,n)),o.forEach(n=>{let r=om(e,n,a);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function om(e,t,n){return t.type===`value`||t.type===`child_removed`||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sm(e,t,n){if(t.childName==null||n.childName==null)throw Zn(`Should only compare child_ events.`);let r=new Z(t.childName,t.snapshotNode),i=new Z(n.childName,n.snapshotNode);return e.index_.compare(r,i)}function cm(e,t){return{eventCache:e,serverCache:t}}function lm(e,t,n,r){return cm(new rm(t,n,r),e.serverCache)}function um(e,t,n,r){return cm(e.eventCache,new rm(t,n,r))}function dm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fm(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}var pm,mm=()=>(pm||=new ap(ad),pm),hm=class e{static fromObject(t){let n=new e(null);return ld(t,(e,t)=>{n=n.set(new K(e),t)}),n}constructor(e,t=mm()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:q(),value:this.value};if(X(e))return null;{let n=J(e),r=this.children.get(n);if(r!==null){let i=r.findRootMostMatchingPathAndValue(Y(e),t);return i==null?null:{path:Pf(new K(n),i.path),value:i.value}}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(t){if(X(t))return this;{let n=J(t),r=this.children.get(n);return r===null?new e(null):r.subtree(Y(t))}}set(t,n){if(X(t))return new e(n,this.children);{let r=J(t),i=(this.children.get(r)||new e(null)).set(Y(t),n),a=this.children.insert(r,i);return new e(this.value,a)}}remove(t){if(X(t))return this.children.isEmpty()?new e(null):new e(null,this.children);{let n=J(t),r=this.children.get(n);if(r){let i=r.remove(Y(t)),a;return a=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),this.value===null&&a.isEmpty()?new e(null):new e(this.value,a)}else return this}}get(e){if(X(e))return this.value;{let t=J(e),n=this.children.get(t);return n?n.get(Y(e)):null}}setTree(t,n){if(X(t))return n;{let r=J(t),i=(this.children.get(r)||new e(null)).setTree(Y(t),n),a;return a=i.isEmpty()?this.children.remove(r):this.children.insert(r,i),new e(this.value,a)}}fold(e){return this.fold_(q(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Pf(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,q(),t)}findOnPath_(e,t,n){let r=this.value?n(t,this.value):!1;if(r)return r;if(X(e))return null;{let r=J(e),i=this.children.get(r);return i?i.findOnPath_(Y(e),Pf(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,q(),t)}foreachOnPath_(t,n,r){if(X(t))return this;{this.value&&r(n,this.value);let i=J(t),a=this.children.get(i);return a?a.foreachOnPath_(Y(t),Pf(n,i),r):new e(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Pf(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}},gm=class e{constructor(e){this.writeTree_=e}static empty(){return new e(new hm(null))}};function _m(e,t,n){if(X(t))return new gm(new hm(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){let i=r.path,a=r.value,o=Ff(i,t);return a=a.updateChild(o,n),new gm(e.writeTree_.set(i,a))}else{let r=new hm(n);return new gm(e.writeTree_.setTree(t,r))}}}function vm(e,t,n){let r=e;return ld(n,(e,n)=>{r=_m(r,Pf(t,e),n)}),r}function ym(e,t){return X(t)?gm.empty():new gm(e.writeTree_.setTree(t,new hm(null)))}function bm(e,t){return xm(e,t)!=null}function xm(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return n==null?null:e.writeTree_.get(n.path).getChild(Ff(n.path,t))}function Sm(e){let t=[],n=e.writeTree_.value;return n==null?e.writeTree_.children.inorderTraversal((e,n)=>{n.value!=null&&t.push(new Z(e,n.value))}):n.isLeafNode()||n.forEachChild(vp,(e,n)=>{t.push(new Z(e,n))}),t}function Cm(e,t){if(X(t))return e;{let n=xm(e,t);return n==null?new gm(e.writeTree_.subtree(t)):new gm(new hm(n))}}function wm(e){return e.writeTree_.isEmpty()}function Tm(e,t){return Em(q(),e.writeTree_,t)}function Em(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{t===`.priority`?(O(i.value!==null,`Priority writes must always be leaf nodes`),r=i.value):n=Em(Pf(e,t),i,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Pf(e,`.priority`),r)),n}}function Dm(e,t){return Ym(t,e)}function Om(e,t,n,r,i){O(r>e.lastWriteId,`Stacking an older write on top of newer ones`),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=_m(e.visibleWrites,t,n)),e.lastWriteId=r}function km(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}function Am(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);O(n>=0,`removeWrite called with nonexistent writeId.`);let r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,a=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&jm(t,r.path)?i=!1:Lf(r.path,t.path)&&(a=!0)),o--}if(!i)return!1;if(a)return Mm(e),!0;if(r.snap)e.visibleWrites=ym(e.visibleWrites,r.path);else{let t=r.children;ld(t,t=>{e.visibleWrites=ym(e.visibleWrites,Pf(r.path,t))})}return!0}function jm(e,t){if(e.snap)return Lf(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&Lf(Pf(e.path,n),t))return!0;return!1}function Mm(e){e.visibleWrites=Pm(e.allWrites,Nm,q()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Nm(e){return e.visible}function Pm(e,t,n){let r=gm.empty();for(let i=0;i<e.length;++i){let a=e[i];if(t(a)){let e=a.path,t;if(a.snap)Lf(n,e)?(t=Ff(n,e),r=_m(r,t,a.snap)):Lf(e,n)&&(t=Ff(e,n),r=_m(r,q(),a.snap.getChild(t)));else if(a.children){if(Lf(n,e))t=Ff(n,e),r=vm(r,t,a.children);else if(Lf(e,n))if(t=Ff(e,n),X(t))r=vm(r,q(),a.children);else{let e=zr(a.children,J(t));if(e){let n=e.getChild(Y(t));r=_m(r,q(),n)}}}else throw Zn(`WriteRecord should have .snap or .children`)}}return r}function Fm(e,t,n,r,i){if(!r&&!i){let r=xm(e.visibleWrites,t);if(r!=null)return r;{let r=Cm(e.visibleWrites,t);return wm(r)?n:n==null&&!bm(r,q())?null:Tm(r,n||Q.EMPTY_NODE)}}else{let a=Cm(e.visibleWrites,t);return!i&&wm(a)?n:!i&&n==null&&!bm(a,q())?null:Tm(Pm(e.allWrites,function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Lf(e.path,t)||Lf(t,e.path))},t),n||Q.EMPTY_NODE)}}function Im(e,t,n){let r=Q.EMPTY_NODE,i=xm(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(vp,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){let i=Cm(e.visibleWrites,t);return n.forEachChild(vp,(e,t)=>{let n=Tm(Cm(i,new K(e)),t);r=r.updateImmediateChild(e,n)}),Sm(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}else return Sm(Cm(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}function Lm(e,t,n,r,i){O(r||i,`Either existingEventSnap or existingServerSnap must exist`);let a=Pf(t,n);if(bm(e.visibleWrites,a))return null;{let t=Cm(e.visibleWrites,a);return wm(t)?i.getChild(n):Tm(t,i.getChild(n))}}function Rm(e,t,n,r){let i=Pf(t,n);return xm(e.visibleWrites,i)??(r.isCompleteForChild(n)?Tm(Cm(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null)}function zm(e,t){return xm(e.visibleWrites,t)}function Bm(e,t,n,r,i,a,o){let s,c=Cm(e.visibleWrites,t),l=xm(c,q());if(l!=null)s=l;else if(n!=null)s=Tm(c,n);else return[];if(s=s.withIndex(o),!s.isEmpty()&&!s.isLeafNode()){let e=[],t=o.getCompare(),n=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),c=n.getNext();for(;c&&e.length<i;)t(c,r)!==0&&e.push(c),c=n.getNext();return e}else return[]}function Vm(){return{visibleWrites:gm.empty(),allWrites:[],lastWriteId:-1}}function Hm(e,t,n,r){return Fm(e.writeTree,e.treePath,t,n,r)}function Um(e,t){return Im(e.writeTree,e.treePath,t)}function Wm(e,t,n,r){return Lm(e.writeTree,e.treePath,t,n,r)}function Gm(e,t){return zm(e.writeTree,Pf(e.treePath,t))}function Km(e,t,n,r,i,a){return Bm(e.writeTree,e.treePath,t,n,r,i,a)}function qm(e,t,n){return Rm(e.writeTree,e.treePath,t,n)}function Jm(e,t){return Ym(Pf(e.treePath,t),e.writeTree)}function Ym(e,t){return{treePath:e,writeTree:t}}var Xm=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;O(t===`child_added`||t===`child_changed`||t===`child_removed`,`Only child changes supported for tracking`),O(n!==`.priority`,`Only non-priority child changes can be tracked.`);let r=this.changeMap.get(n);if(r){let i=r.type;if(t===`child_added`&&i===`child_removed`)this.changeMap.set(n,Pp(n,e.snapshotNode,r.snapshotNode));else if(t===`child_removed`&&i===`child_added`)this.changeMap.delete(n);else if(t===`child_removed`&&i===`child_changed`)this.changeMap.set(n,Np(n,r.oldSnap));else if(t===`child_changed`&&i===`child_added`)this.changeMap.set(n,Mp(n,e.snapshotNode));else if(t===`child_changed`&&i===`child_changed`)this.changeMap.set(n,Pp(n,e.snapshotNode,r.oldSnap));else throw Zn(`Illegal combination of changes: `+e+` occurred after `+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}},Zm=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}},Qm=class{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=this.optCompleteServerCache_==null?this.viewCache_.serverCache:new rm(this.optCompleteServerCache_,!0,!1);return qm(this.writes_,e,t)}}getChildAfterChild(e,t,n){let r=this.optCompleteServerCache_==null?fm(this.viewCache_):this.optCompleteServerCache_,i=Km(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}};function $m(e,t){O(t.eventCache.getNode().isIndexed(e.filter.getIndex()),`Event snap not indexed`),O(t.serverCache.getNode().isIndexed(e.filter.getIndex()),`Server snap not indexed`)}function eh(e,t,n,r,i){let a=new Xm,o,s;if(n.type===Xp.OVERWRITE){let c=n;c.source.fromUser?o=ih(e,t,c.path,c.snap,r,i,a):(O(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered()&&!X(c.path),o=rh(e,t,c.path,c.snap,r,i,s,a))}else if(n.type===Xp.MERGE){let c=n;c.source.fromUser?o=oh(e,t,c.path,c.children,r,i,a):(O(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered(),o=ch(e,t,c.path,c.children,r,i,s,a))}else if(n.type===Xp.ACK_USER_WRITE){let s=n;o=s.revert?dh(e,t,s.path,r,i,a):lh(e,t,s.path,s.affectedTree,r,i,a)}else if(n.type===Xp.LISTEN_COMPLETE)o=uh(e,t,n.path,r,a);else throw Zn(`Unknown operation type: `+n.type);let c=a.getChanges();return th(t,o,c),{viewCache:o,changes:c}}function th(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=dm(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(jp(dm(t)))}}function nh(e,t,n,r,i,a){let o=t.eventCache;if(Gm(r,n)!=null)return t;{let s,c;if(X(n))if(O(t.serverCache.isFullyInitialized(),`If change path is empty, we must have complete server data`),t.serverCache.isFiltered()){let n=fm(t),i=Um(r,n instanceof Q?n:Q.EMPTY_NODE);s=e.filter.updateFullNode(t.eventCache.getNode(),i,a)}else{let n=Hm(r,fm(t));s=e.filter.updateFullNode(t.eventCache.getNode(),n,a)}else{let l=J(n);if(l===`.priority`){O(kf(n)===1,`Can't have a priority with additional path components`);let i=o.getNode();c=t.serverCache.getNode();let a=Wm(r,n,i,c);s=a==null?o.getNode():e.filter.updatePriority(i,a)}else{let u=Y(n),d;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();let e=Wm(r,n,o.getNode(),c);d=e==null?o.getNode().getImmediateChild(l):o.getNode().getImmediateChild(l).updateChild(u,e)}else d=qm(r,l,t.serverCache);s=d==null?o.getNode():e.filter.updateChild(o.getNode(),l,d,u,i,a)}}return lm(t,s,o.isFullyInitialized()||X(n),e.filter.filtersNodes())}}function rh(e,t,n,r,i,a,o,s){let c=t.serverCache,l,u=o?e.filter:e.filter.getIndexedFilter();if(X(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){let e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{let e=J(n);if(!c.isCompleteForPath(n)&&kf(n)>1)return t;let i=Y(n),a=c.getNode().getImmediateChild(e).updateChild(i,r);l=e===`.priority`?u.updatePriority(c.getNode(),a):u.updateChild(c.getNode(),e,a,i,Zm,null)}let d=um(t,l,c.isFullyInitialized()||X(n),u.filtersNodes());return nh(e,d,n,i,new Qm(i,d,a),s)}function ih(e,t,n,r,i,a,o){let s=t.eventCache,c,l,u=new Qm(i,t,a);if(X(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=lm(t,l,!0,e.filter.filtersNodes());else{let i=J(n);if(i===`.priority`)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=lm(t,l,s.isFullyInitialized(),s.isFiltered());else{let a=Y(n),l=s.getNode().getImmediateChild(i),d;if(X(a))d=r;else{let e=u.getCompleteChild(i);d=e==null?Q.EMPTY_NODE:Af(a)===`.priority`&&e.getChild(Nf(a)).isEmpty()?e:e.updateChild(a,r)}c=l.equals(d)?t:lm(t,e.filter.updateChild(s.getNode(),i,d,a,u,o),s.isFullyInitialized(),e.filter.filtersNodes())}}return c}function ah(e,t){return e.eventCache.isCompleteForChild(t)}function oh(e,t,n,r,i,a,o){let s=t;return r.foreach((r,c)=>{let l=Pf(n,r);ah(t,J(l))&&(s=ih(e,s,l,c,i,a,o))}),r.foreach((r,c)=>{let l=Pf(n,r);ah(t,J(l))||(s=ih(e,s,l,c,i,a,o))}),s}function sh(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ch(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t,l;l=X(n)?r:new hm(null).setTree(n,r);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){let l=sh(e,t.serverCache.getNode().getImmediateChild(n),r);c=rh(e,c,new K(n),l,i,a,o,s)}}),l.children.inorderTraversal((n,r)=>{let l=!t.serverCache.isCompleteForChild(n)&&r.value===null;if(!u.hasChild(n)&&!l){let l=sh(e,t.serverCache.getNode().getImmediateChild(n),r);c=rh(e,c,new K(n),l,i,a,o,s)}}),c}function lh(e,t,n,r,i,a,o){if(Gm(i,n)!=null)return t;let s=t.serverCache.isFiltered(),c=t.serverCache;if(r.value!=null){if(X(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return rh(e,t,n,c.getNode().getChild(n),i,a,s,o);if(X(n)){let r=new hm(null);return c.getNode().forEachChild(tp,(e,t)=>{r=r.set(new K(e),t)}),ch(e,t,n,r,i,a,s,o)}else return t}else{let l=new hm(null);return r.foreach((e,t)=>{let r=Pf(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),ch(e,t,n,l,i,a,s,o)}}function uh(e,t,n,r,i){let a=t.serverCache;return nh(e,um(t,a.getNode(),a.isFullyInitialized()||X(n),a.isFiltered()),n,r,Zm,i)}function dh(e,t,n,r,i,a){let o;if(Gm(r,n)!=null)return t;{let s=new Qm(r,t,i),c=t.eventCache.getNode(),l;if(X(n)||J(n)===`.priority`){let n;if(t.serverCache.isFullyInitialized())n=Hm(r,fm(t));else{let e=t.serverCache.getNode();O(e instanceof Q,`serverChildren would be complete if leaf node`),n=Um(r,e)}n=n,l=e.filter.updateFullNode(c,n,a)}else{let i=J(n),u=qm(r,i,t.serverCache);u==null&&t.serverCache.isCompleteForChild(i)&&(u=c.getImmediateChild(i)),l=u==null?t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,Q.EMPTY_NODE,Y(n),s,a):c:e.filter.updateChild(c,i,u,Y(n),s,a),l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Hm(r,fm(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,a)))}return o=t.serverCache.isFullyInitialized()||Gm(r,q())!=null,lm(t,l,o,e.filter.filtersNodes())}}function fh(e,t){let n=fm(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!X(t)&&!n.getImmediateChild(J(t)).isEmpty())?n.getChild(t):null}function ph(e,t,n,r){t.type===Xp.MERGE&&t.source.queryId!==null&&(O(fm(e.viewCache_),`We should always have a full cache before handling merges`),O(dm(e.viewCache_),`Missing event cache, even though we have a server cache`));let i=e.viewCache_,a=eh(e.processor_,i,t,n,r);return $m(e.processor_,a.viewCache),O(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),`Once a server snap is complete, it should never go back`),e.viewCache_=a.viewCache,mh(e,a.changes,a.viewCache.eventCache.getNode(),null)}function mh(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return im(e.eventGenerator_,t,n,i)}var hh;function gh(e){O(!hh,`__referenceConstructor has already been defined`),hh=e}function _h(e,t,n,r){let i=t.source.queryId;if(i!==null){let a=e.views.get(i);return O(a!=null,`SyncTree gave us an op for an invalid query.`),ph(a,t,n,r)}else{let i=[];for(let a of e.views.values())i=i.concat(ph(a,t,n,r));return i}}function vh(e,t){let n=null;for(let r of e.views.values())n||=fh(r,t);return n}var yh;function bh(e){O(!yh,`__referenceConstructor has already been defined`),yh=e}var xh=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new hm(null),this.pendingWriteTree_=Vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Sh(e,t,n,r,i){return Om(e.pendingWriteTree_,t,n,r,i),i?kh(e,new tm(Zp(),t,n)):[]}function Ch(e,t,n=!1){let r=km(e.pendingWriteTree_,t);if(Am(e.pendingWriteTree_,t)){let t=new hm(null);return r.snap==null?ld(r.children,e=>{t=t.set(new K(e),!0)}):t=t.set(q(),!0),kh(e,new em(r.path,t,n))}else return[]}function wh(e,t,n){return kh(e,new tm(Qp(),t,n))}function Th(e,t,n){let r=hm.fromObject(n);return kh(e,new nm(Qp(),t,r))}function Eh(e,t,n,r){let i=Mh(e,r);if(i!=null){let r=Nh(i),a=r.path,o=r.queryId,s=Ff(a,t);return Ph(e,a,new tm($p(o),s,n))}else return[]}function Dh(e,t,n,r){let i=Mh(e,r);if(i){let r=Nh(i),a=r.path,o=r.queryId,s=Ff(a,t),c=hm.fromObject(n);return Ph(e,a,new nm($p(o),s,c))}else return[]}function Oh(e,t,n){let r=e.pendingWriteTree_;return Fm(r,t,e.syncPointTree_.findOnPath(t,(e,n)=>{let r=vh(n,Ff(e,t));if(r)return r}),n,!0)}function kh(e,t){return Ah(t,e.syncPointTree_,null,Dm(e.pendingWriteTree_,q()))}function Ah(e,t,n,r){if(X(e.path))return jh(e,t,n,r);{let i=t.get(q());n==null&&i!=null&&(n=vh(i,q()));let a=[],o=J(e.path),s=e.operationForChild(o),c=t.children.get(o);if(c&&s){let e=n?n.getImmediateChild(o):null,t=Jm(r,o);a=a.concat(Ah(s,c,e,t))}return i&&(a=a.concat(_h(i,e,r,n))),a}}function jh(e,t,n,r){let i=t.get(q());n==null&&i!=null&&(n=vh(i,q()));let a=[];return t.children.inorderTraversal((t,i)=>{let o=n?n.getImmediateChild(t):null,s=Jm(r,t),c=e.operationForChild(t);c&&(a=a.concat(jh(c,i,o,s)))}),i&&(a=a.concat(_h(i,e,r,n))),a}function Mh(e,t){return e.tagToQueryMap.get(t)}function Nh(e){let t=e.indexOf(`$`);return O(t!==-1&&t<e.length-1,`Bad queryKey.`),{queryId:e.substr(t+1),path:new K(e.substr(0,t))}}function Ph(e,t,n){let r=e.syncPointTree_.get(t);return O(r,`Missing sync point for query tag that we're tracking`),_h(r,n,Dm(e.pendingWriteTree_,t),null)}var Fh=class e{constructor(e){this.node_=e}getImmediateChild(t){return new e(this.node_.getImmediateChild(t))}node(){return this.node_}},Ih=class e{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(t){let n=Pf(this.path_,t);return new e(this.syncTree_,n)}node(){return Oh(this.syncTree_,this.path_)}},Lh=function(e){return e||={},e.timestamp=e.timestamp||new Date().getTime(),e},Rh=function(e,t,n){if(!e||typeof e!=`object`)return e;if(O(`.sv`in e,`Unexpected leaf node or priority contents`),typeof e[`.sv`]==`string`)return zh(e[`.sv`],t,n);if(typeof e[`.sv`]==`object`)return Bh(e[`.sv`],t);O(!1,`Unexpected server value: `+JSON.stringify(e,null,2))},zh=function(e,t,n){switch(e){case`timestamp`:return n.timestamp;default:O(!1,`Unexpected server value: `+e)}},Bh=function(e,t,n){e.hasOwnProperty(`increment`)||O(!1,`Unexpected server value: `+JSON.stringify(e,null,2));let r=e.increment;typeof r!=`number`&&O(!1,`Unexpected increment value: `+r);let i=t.node();if(O(i!=null,`Expected ChildrenNode.EMPTY_NODE for nulls`),!i.isLeafNode())return r;let a=i.getValue();return typeof a==`number`?a+r:r},Vh=function(e,t,n,r){return Uh(t,new Ih(n,e),r)},Hh=function(e,t,n){return Uh(e,new Fh(t),n)};function Uh(e,t,n){let r=Rh(e.getPriority().val(),t.getImmediateChild(`.priority`),n),i;if(e.isLeafNode()){let i=e,a=Rh(i.getValue(),t,n);return a!==i.getValue()||r!==i.getPriority().val()?new pp(a,Op(r)):e}else{let a=e;return i=a,r!==a.getPriority().val()&&(i=i.updatePriority(new pp(r))),a.forEachChild(vp,(e,r)=>{let a=Uh(r,t.getImmediateChild(e),n);a!==r&&(i=i.updateImmediateChild(e,a))}),i}}var Wh=class{constructor(e=``,t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}};function Gh(e,t){let n=t instanceof K?t:new K(t),r=e,i=J(n);for(;i!==null;){let e=zr(r.node.children,i)||{children:{},childCount:0};r=new Wh(i,r,e),n=Y(n),i=J(n)}return r}function Kh(e){return e.node.value}function qh(e,t){e.node.value=t,eg(e)}function Jh(e){return e.node.childCount>0}function Yh(e){return Kh(e)===void 0&&!Jh(e)}function Xh(e,t){ld(e.node.children,(n,r)=>{t(new Wh(n,e,r))})}function Zh(e,t,n,r){n&&!r&&t(e),Xh(e,e=>{Zh(e,t,!0,r)}),n&&r&&t(e)}function Qh(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function $h(e){return new K(e.parent===null?e.name:$h(e.parent)+`/`+e.name)}function eg(e){e.parent!==null&&tg(e.parent,e.name,e)}function tg(e,t,n){let r=Yh(n),i=Rr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,eg(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,eg(e))}var ng=/[\[\].#$\/\u0000-\u001F\u007F]/,rg=/[\[\].#$\u0000-\u001F\u007F]/,ig=10*1024*1024,ag=function(e){return typeof e==`string`&&e.length!==0&&!ng.test(e)},og=function(e){return typeof e==`string`&&e.length!==0&&!rg.test(e)},sg=function(e){return e&&=e.replace(/^\/*\.info(\/|$)/,`/`),og(e)},cg=function(e,t,n){let r=n instanceof K?new Rf(n,e):n;if(t===void 0)throw Error(e+`contains undefined `+Hf(r));if(typeof t==`function`)throw Error(e+`contains a function `+Hf(r)+` with contents = `+t.toString());if(ed(t))throw Error(e+`contains `+t.toString()+` `+Hf(r));if(typeof t==`string`&&t.length>ig/3&&ei(t)>ig)throw Error(e+`contains a string greater than 10485760 utf8 bytes `+Hf(r)+` ('`+t.substring(0,50)+`...')`);if(t&&typeof t==`object`){let n=!1,i=!1;if(ld(t,(t,a)=>{if(t===`.value`)n=!0;else if(t!==`.priority`&&t!==`.sv`&&(i=!0,!ag(t)))throw Error(e+` contains an invalid key (`+t+`) `+Hf(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zf(r,t),cg(e,a,r),Bf(r)}),n&&i)throw Error(e+` contains ".value" child `+Hf(r)+` in addition to actual children.`)}},lg=function(e,t){let n=t.path.toString();if(typeof t.repoInfo.host!=`string`||t.repoInfo.host.length===0||!ag(t.repoInfo.namespace)&&t.repoInfo.host.split(`:`)[0]!==`localhost`||n.length!==0&&!sg(n))throw Error(Qr(e,`url`)+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},ug=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function dg(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],a=i.getPath();n!==null&&!If(a,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function fg(e,t,n){dg(e,n),pg(e,e=>Lf(e,t)||Lf(t,e))}function pg(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];if(i){let a=i.path;t(a)?(mg(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function mg(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(n!==null){e.events[t]=null;let r=n.getEventRunner();Ku&&Yu(`event: `+n.toString()),_d(r)}}}var hg=`repo_interrupt`,gg=25,_g=class{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ug,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vp(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host}};function vg(e,t,n){if(e.stats_=zd(e.repoInfo_),e.forceRestClient_||vd())e.server_=new zp(e.repoInfo_,(t,n,r,i)=>{xg(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Sg(e,!0),0);else{if(n!=null){if(typeof n!=`object`)throw Error(`Only objects are supported for option databaseAuthVariableOverride`);try{Pr(n)}catch(e){throw Error(`Invalid authOverride provided: `+e)}}e.persistentConnection_=new Zf(e.repoInfo_,t,(t,n,r,i)=>{xg(e,t,n,r,i)},t=>{Sg(e,t)},t=>{Cg(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=Bd(e.repoInfo_,()=>new Yp(e.stats_,e.server_)),e.infoData_=new Bp,e.infoSyncTree_=new xh({startListening:(t,n,r,i)=>{let a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=wh(e.infoSyncTree_,t._path,o),setTimeout(()=>{i(`ok`)},0)),a},stopListening:()=>{}}),wg(e,`connected`,!1),e.serverSyncTree_=new xh({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let a=i(n,r);fg(e.eventQueue_,t._path,a)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function yg(e){let t=e.infoData_.getNode(new K(`.info/serverTimeOffset`)).val()||0;return new Date().getTime()+t}function bg(e){return Lh({timestamp:yg(e)})}function xg(e,t,n,r,i){e.dataUpdateCount++;let a=new K(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){let t=Vr(n,e=>Op(e));o=Dh(e.serverSyncTree_,a,t,i)}else{let t=Op(n);o=Eh(e.serverSyncTree_,a,t,i)}else if(r){let t=Vr(n,e=>Op(e));o=Th(e.serverSyncTree_,a,t)}else{let t=Op(n);o=wh(e.serverSyncTree_,a,t)}let s=a;o.length>0&&(s=Mg(e,a)),fg(e.eventQueue_,s,o)}function Sg(e,t){wg(e,`connected`,t),t===!1&&Eg(e)}function Cg(e,t){ld(t,(t,n)=>{wg(e,t,n)})}function wg(e,t,n){let r=new K(`/.info/`+t),i=Op(n);e.infoData_.updateSnapshot(r,i);let a=wh(e.infoSyncTree_,r,i);fg(e.eventQueue_,r,a)}function Tg(e){return e.nextWriteId_++}function Eg(e){Og(e,`onDisconnectEvents`);let t=bg(e),n=Vp();Up(e.onDisconnect_,q(),(r,i)=>{Hp(n,r,Vh(r,i,e.serverSyncTree_,t))});let r=[];Up(n,q(),(t,n)=>{r=r.concat(wh(e.serverSyncTree_,t,n)),Mg(e,Rg(e,t))}),e.onDisconnect_=Vp(),fg(e.eventQueue_,q(),r)}function Dg(e){e.persistentConnection_&&e.persistentConnection_.interrupt(hg)}function Og(e,...t){let n=``;e.persistentConnection_&&(n=e.persistentConnection_.id+`:`),Yu(n,...t)}function kg(e,t,n){return Oh(e.serverSyncTree_,t,n)||Q.EMPTY_NODE}function Ag(e,t=e.transactionQueueTree_){if(t||Lg(e,t),Kh(t)){let n=Fg(e,t);O(n.length>0,`Sending zero length transaction queue`),n.every(e=>e.status===0)&&jg(e,$h(t),n)}else Jh(t)&&Xh(t,t=>{Ag(e,t)})}function jg(e,t,n){let r=kg(e,t,n.map(e=>e.currentWriteId)),i=r,a=r.hash();for(let e=0;e<n.length;e++){let r=n[e];O(r.status===0,`tryToSendTransactionQueue_: items in queue should all be run.`),r.status=1,r.retryCount++;let a=Ff(t,r.path);i=i.updateChild(a,r.currentOutputSnapshotRaw)}let o=i.val(!0),s=t;e.server_.put(s.toString(),o,r=>{Og(e,`transaction put response`,{path:s.toString(),status:r});let i=[];if(r===`ok`){let r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ch(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Lg(e,Gh(e.transactionQueueTree_,t)),Ag(e,e.transactionQueueTree_),fg(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)_d(r[e])}else{if(r===`datastale`)for(let e=0;e<n.length;e++)n[e].status===3?n[e].status=4:n[e].status=0;else{U(`transaction at `+s.toString()+` failed: `+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Mg(e,t)}},a)}function Mg(e,t){let n=Pg(e,t),r=$h(n);return Ng(e,Fg(e,n),r),r}function Ng(e,t,n){if(t.length===0)return;let r=[],i=[],a=t.filter(e=>e.status===0).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let s=t[o],c=Ff(n,s.path),l=!1,u;if(O(c!==null,`rerunTransactionsUnderNode_: relativePath should not be null.`),s.status===4)l=!0,u=s.abortReason,i=i.concat(Ch(e.serverSyncTree_,s.currentWriteId,!0));else if(s.status===0)if(s.retryCount>=gg)l=!0,u=`maxretry`,i=i.concat(Ch(e.serverSyncTree_,s.currentWriteId,!0));else{let n=kg(e,s.path,a);s.currentInputSnapshot=n;let r=t[o].update(n.val());if(r!==void 0){cg(`transaction failed: Data returned `,r,s.path);let t=Op(r);typeof r==`object`&&r&&Rr(r,`.priority`)||(t=t.updatePriority(n.getPriority()));let o=s.currentWriteId,c=bg(e),l=Hh(t,n,c);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=l,s.currentWriteId=Tg(e),a.splice(a.indexOf(o),1),i=i.concat(Sh(e.serverSyncTree_,s.path,l,s.currentWriteId,s.applyLocally)),i=i.concat(Ch(e.serverSyncTree_,o,!0))}else l=!0,u=`nodata`,i=i.concat(Ch(e.serverSyncTree_,s.currentWriteId,!0))}fg(e.eventQueue_,n,i),i=[],l&&(t[o].status=2,(function(e){setTimeout(e,0)})(t[o].unwatcher),t[o].onComplete&&(u===`nodata`?r.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):r.push(()=>t[o].onComplete(Error(u),!1,null))))}Lg(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)_d(r[e]);Ag(e,e.transactionQueueTree_)}function Pg(e,t){let n,r=e.transactionQueueTree_;for(n=J(t);n!==null&&Kh(r)===void 0;)r=Gh(r,n),t=Y(t),n=J(t);return r}function Fg(e,t){let n=[];return Ig(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Ig(e,t,n){let r=Kh(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Xh(t,t=>{Ig(e,t,n)})}function Lg(e,t){let n=Kh(t);if(n){let e=0;for(let t=0;t<n.length;t++)n[t].status!==2&&(n[e]=n[t],e++);n.length=e,qh(t,n.length>0?n:void 0)}Xh(t,t=>{Lg(e,t)})}function Rg(e,t){let n=$h(Pg(e,t)),r=Gh(e.transactionQueueTree_,t);return Qh(r,t=>{zg(e,t)}),zg(e,r),Zh(r,t=>{zg(e,t)}),n}function zg(e,t){let n=Kh(t);if(n){let r=[],i=[],a=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(O(a===t-1,`All SENT items should be at beginning of queue.`),a=t,n[t].status=3,n[t].abortReason=`set`):(O(n[t].status===0,`Unexpected transaction status in abort`),n[t].unwatcher(),i=i.concat(Ch(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,Error(`set`),!1,null))));a===-1?qh(t,void 0):n.length=a+1,fg(e.eventQueue_,$h(t),i);for(let e=0;e<r.length;e++)_d(r[e])}}function Bg(e){let t=``,n=e.split(`/`);for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g,` `))}catch{}t+=`/`+r}return t}function Vg(e){let t={};e.charAt(0)===`?`&&(e=e.substring(1));for(let n of e.split(`&`)){if(n.length===0)continue;let r=n.split(`=`);r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):U(`Invalid query segment '${n}' in query '${e}'`)}return t}var Hg=function(e,t){let n=Ug(e),r=n.namespace;n.domain===`firebase.com`&&Qu(n.host+` is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead`),(!r||r===`undefined`)&&n.domain!==`localhost`&&Qu(`Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com`),n.secure||$u();let i=n.scheme===`ws`||n.scheme===`wss`;return{repoInfo:new Nd(n.host,n.secure,r,i,t,``,r!==n.subdomain),path:new K(n.pathString)}},Ug=function(e){let t=``,n=``,r=``,i=``,a=``,o=!0,s=`https`,c=443;if(typeof e==`string`){let l=e.indexOf(`//`);l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf(`/`);u===-1&&(u=e.length);let d=e.indexOf(`?`);d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=Bg(e.substring(u,d)));let f=Vg(e.substring(Math.min(e.length,d)));l=t.indexOf(`:`),l>=0?(o=s===`https`||s===`wss`,c=parseInt(t.substring(l+1),10)):l=t.length;let p=t.slice(0,l);if(p.toLowerCase()===`localhost`)n=`localhost`;else if(p.split(`.`).length<=2)n=p;else{let e=t.indexOf(`.`);r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),a=r}`ns`in f&&(a=f.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Wg=`-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz`;(function(){let e=0,t=[];return function(n){let r=n===e;e=n;let i,a=Array(8);for(i=7;i>=0;i--)a[i]=Wg.charAt(n%64),n=Math.floor(n/64);O(n===0,`Cannot push at time == 0`);let o=a.join(``);if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Wg.charAt(t[i]);return O(o.length===20,`nextPushId: Length should be 20.`),o}})();var Gg=class e{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return X(this._path)?null:Af(this._path)}get ref(){return new Kg(this._repo,this._path)}get _queryIdentifier(){let e=sd(Rp(this._queryParams));return e===`{}`?`default`:e}get _queryObject(){return Rp(this._queryParams)}isEqual(t){if(t=ti(t),!(t instanceof e))return!1;let n=this._repo===t._repo,r=If(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jf(this._path)}},Kg=class e extends Gg{constructor(e,t){super(e,t,new Ip,!1)}get parent(){let t=Nf(this._path);return t===null?null:new e(this._repo,t)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}};gh(Kg),bh(Kg);var qg=`FIREBASE_DATABASE_EMULATOR_HOST`,Jg={},Yg=!1;function Xg(e,t,n,r){let i=t.lastIndexOf(`:`);e.repoInfo_=new Nd(t,ni(t.substring(0,i)),e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(e.authTokenProvider_=r)}function Zg(e,t,n,r,i){let a=r||e.options.databaseURL;a===void 0&&(e.options.projectId||Qu(`Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().`),Yu(`Using default host for project `,e.options.projectId),a=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Hg(a,i),s=o.repoInfo,c,l;typeof process<`u`&&(l={}[qg]),l?(c=!0,a=`http://${l}?ns=${s.namespace}`,o=Hg(a,i),s=o.repoInfo):c=!o.repoInfo.secure;let u=i&&c?new Sd(Sd.OWNER):new xd(e.name,e.options,t);return lg(`Invalid Firebase Database URL`,o),X(o.path)||Qu(`Database URL must point to the root of a Firebase Database (not including a child path).`),new e_($g(s,e,u,new bd(e,n)),e)}function Qg(e,t){let n=Jg[t];(!n||n[e.key]!==e)&&Qu(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Dg(e),delete n[e.key]}function $g(e,t,n,r){let i=Jg[t.name];i||(i={},Jg[t.name]=i);let a=i[e.toURLString()];return a&&Qu(`Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.`),a=new _g(e,Yg,n,r),i[e.toURLString()]=a,a}var e_=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type=`database`,this._instanceStarted=!1}get _repo(){return this._instanceStarted||=(vg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),!0),this._repoInternal}get _root(){return this._rootInternal||=new Kg(this._repo,q()),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qu(`Cannot call `+e+` on a deleted database.`)}};function t_(e=Oa(),t){let n=Sa(e,`database`).getImmediate({identifier:t});if(!n._instanceStarted){let e=mr(`database`);e&&n_(n,...e)}return n}function n_(e,t,n,r={}){e=ti(e),e._checkNotDeleted(`useEmulator`);let i=`${t}:${n}`,a=e._repoInternal;if(e._instanceStarted){if(i===e._repoInternal.repoInfo_.host&&Hr(r,a.repoInfo_.emulatorOptions))return;Qu(`connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.`)}let o;a.repoInfo_.nodeAdmin?(r.mockUserToken&&Qu(`mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".`),o=new Sd(Sd.OWNER)):r.mockUserToken&&(o=new Sd(typeof r.mockUserToken==`string`?r.mockUserToken:vr(r.mockUserToken,e.app.options.projectId))),ni(t)&&ri(t),Xg(a,i,r,o)}function r_(e){Iu(Ea),xa(new ii(`database`,(e,{instanceIdentifier:t})=>Zg(e.getProvider(`app`).getImmediate(),e.getProvider(`auth-internal`),e.getProvider(`app-check-internal`),t),`PUBLIC`).setMultipleInstances(!0)),ka(Nu,Pu,e),ka(Nu,Pu,`esm2020`)}Zf.prototype.simpleListen=function(e,t){this.sendRequest(`q`,{p:e},t)},Zf.prototype.echo=function(e,t){this.sendRequest(`echo`,{d:e},t)},r_();var i_=Da({apiKey:`AIzaSyCdoPR4qV7oUb5T9Llvg7Ch9_Qnjjf-8KM`,authDomain:`dbastronmy.firebaseapp.com`,databaseURL:`https://dbastronmy-default-rtdb.firebaseio.com`,projectId:`dbastronmy`,storageBucket:`dbastronmy.firebasestorage.app`,messagingSenderId:`79982729417`,appId:`1:79982729417:web:4487cdcb9794f59fc79518`}),a_=ju(i_);t_(i_);var o_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),$=o(((e,t)=>{t.exports=o_()}))();function s_(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),c=(0,x.useRef)(null),l=ut();(0,x.useEffect)(()=>Ec(a_,t),[]),(0,x.useEffect)(()=>{let e=()=>r(window.scrollY>24);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let u=async()=>{await Dc(a_),s(!1),l(`/`)},d=t=>{if(t===`/`){l(t),a(!1);return}if(!e){alert(`يجب تسجيل الدخول للوصول إلى هذه الصفحة`),l(`/login`);return}l(t),a(!1)},f=[{to:`/`,label:`الرئيسية`,icon:`⬡`},{to:`/black-hole`,label:`الثقوب السوداء`,icon:`◉`},{to:`/spacetime`,label:`الزمكان`,icon:`⊛`},{to:`/solar-system`,label:`النظام الشمسي`,icon:`◎`},{to:`/schrodinger`,label:`قطة شرودنغر`,icon:`⊕`},{to:`/stars`,label:`النجوم`,icon:`✦`}];return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Cairo', sans-serif;
        }

        .nav-root.scrolled {
          padding: 0 1.5rem;
        }

        .nav-inner {
          max-width: 1340px;
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-root.scrolled .nav-inner {
          height: 60px;
          background: rgba(5, 7, 18, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom-color: rgba(212, 175, 55, 0.12);
          border-radius: 0 0 20px 20px;
          padding: 0 1.5rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.06);
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-glyph {
          position: relative;
          width: 38px;
          height: 38px;
        }

        .nav-logo-glyph svg {
          width: 100%;
          height: 100%;
          animation: spin-slow 12s linear infinite;
        }

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        .nav-logo-center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          animation: spin-slow 12s linear infinite reverse;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }

        .nav-logo-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          font-weight: 800;
          color: #d4af37;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .nav-logo-sub {
          font-size: 0.62rem;
          color: rgba(180,180,200,0.5);
          font-weight: 300;
          letter-spacing: 0.08em;
        }

        /* LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.1rem;
          list-style: none;
        }

        .nav-links a {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.42rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.75);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.22s ease;
          white-space: nowrap;
          letter-spacing: 0.02em;
          position: relative;
        }

        .nav-links a .link-icon {
          font-size: 0.7rem;
          opacity: 0.5;
          transition: opacity 0.2s;
        }

        .nav-links a:hover {
          color: #d4af37;
          background: rgba(212, 175, 55, 0.07);
        }

        .nav-links a:hover .link-icon {
          opacity: 1;
        }

        .nav-links a.active {
          color: #d4af37;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .nav-links a.active .link-icon {
          opacity: 1;
        }

        /* ACTIONS */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .nav-login-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 9px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all 0.22s ease;
          text-decoration: none;
          letter-spacing: 0.03em;
          box-shadow: 0 2px 12px rgba(212, 175, 55, 0.25);
        }

        .nav-login-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(212, 175, 55, 0.38);
          background: linear-gradient(135deg, #e0be4a 0%, #c9a020 100%);
        }

        /* USER MENU */
        .nav-user-wrap {
          position: relative;
        }

        .nav-user-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.22);
          color: #d4af37;
          padding: 0.42rem 0.9rem 0.42rem 0.5rem;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all 0.22s ease;
          letter-spacing: 0.02em;
        }

        .nav-user-btn:hover {
          background: rgba(212, 175, 55, 0.14);
          border-color: rgba(212, 175, 55, 0.4);
        }

        .nav-avatar {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #d4af37, #8a6820);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #08090f;
          flex-shrink: 0;
        }

        .nav-chevron {
          font-size: 0.6rem;
          opacity: 0.6;
          transition: transform 0.2s;
        }

        .nav-user-btn[aria-expanded="true"] .nav-chevron {
          transform: rotate(180deg);
        }

        .nav-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 200px;
          background: #0d1024;
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03);
          animation: dd-in 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dd-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .nav-dropdown-email {
          padding: 0.5rem 0.75rem 0.6rem;
          font-size: 0.7rem;
          color: rgba(180,185,210,0.45);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.55rem 0.75rem;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.8);
          cursor: pointer;
          text-align: right;
          transition: all 0.18s;
          text-decoration: none;
        }

        .nav-dropdown-item:hover {
          background: rgba(255,255,255,0.04);
          color: #fff;
        }

        .nav-dropdown-item.danger:hover {
          background: rgba(239,68,68,0.08);
          color: #f87171;
        }

        .nav-dropdown-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 0.4rem 0;
        }

        /* MOBILE TOGGLE */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4.5px;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 8px;
          padding: 8px 9px;
          cursor: pointer;
          transition: all 0.22s;
        }

        .nav-hamburger:hover {
          background: rgba(212, 175, 55, 0.07);
          border-color: rgba(212, 175, 55, 0.38);
        }

        .nav-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #d4af37;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .nav-hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .nav-hamburger.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .nav-hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* MOBILE MENU */
        .nav-mobile-menu {
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: rgba(5, 7, 18, 0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          padding: 1rem 1.5rem 1.5rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          animation: mobile-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes mobile-in {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-menu a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.75);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .nav-mobile-menu a .link-icon {
          font-size: 0.8rem;
          width: 20px;
          text-align: center;
          opacity: 0.5;
        }

        .nav-mobile-menu a:hover,
        .nav-mobile-menu a.active {
          color: #d4af37;
          background: rgba(212, 175, 55, 0.08);
        }

        .nav-mobile-menu a.active .link-icon {
          opacity: 1;
        }

        .nav-mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 0.5rem 0;
        }

        .nav-mobile-actions {
          display: flex;
          gap: 0.6rem;
          padding-top: 0.2rem;
        }

        .nav-mobile-actions > * {
          flex: 1;
          justify-content: center;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }

        @media (max-width: 480px) {
          .nav-root { padding: 0 1rem; }
          .nav-logo-title { font-size: 0.78rem; }
        }
      `}),(0,$.jsx)(`nav`,{className:`nav-root${n?` scrolled`:``}`,dir:`rtl`,children:(0,$.jsxs)(`div`,{className:`nav-inner`,children:[(0,$.jsxs)(An,{to:`/`,className:`nav-logo`,children:[(0,$.jsxs)(`div`,{className:`nav-logo-glyph`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 38 38`,fill:`none`,children:[(0,$.jsx)(`circle`,{cx:`19`,cy:`19`,r:`17.5`,stroke:`url(#g1)`,strokeWidth:`0.8`,strokeDasharray:`3 2.5`}),(0,$.jsx)(`circle`,{cx:`19`,cy:`19`,r:`11`,stroke:`url(#g1)`,strokeWidth:`0.6`}),(0,$.jsx)(`defs`,{children:(0,$.jsxs)(`linearGradient`,{id:`g1`,x1:`0`,y1:`0`,x2:`38`,y2:`38`,gradientUnits:`userSpaceOnUse`,children:[(0,$.jsx)(`stop`,{stopColor:`#d4af37`}),(0,$.jsx)(`stop`,{offset:`1`,stopColor:`#8a6820`,stopOpacity:`0`})]})})]}),(0,$.jsx)(`div`,{className:`nav-logo-center`,children:`✦`})]}),(0,$.jsxs)(`div`,{className:`nav-logo-text`,children:[(0,$.jsx)(`span`,{className:`nav-logo-title`,children:`ASTRO`}),(0,$.jsx)(`span`,{className:`nav-logo-sub`,children:`الموسوعة الفلكية`})]})]}),(0,$.jsx)(`ul`,{className:`nav-links`,children:f.map(e=>(0,$.jsx)(`li`,{children:(0,$.jsxs)(`button`,{onClick:()=>d(e.to),style:{display:`flex`,alignItems:`center`,gap:`0.35rem`,padding:`0.42rem 0.8rem`,fontSize:`0.78rem`,fontWeight:600,color:window.location.pathname===e.to?`#d4af37`:`rgba(180, 185, 210, 0.75)`,textDecoration:`none`,borderRadius:`8px`,border:window.location.pathname===e.to?`1px solid rgba(212, 175, 55, 0.2)`:`none`,background:window.location.pathname===e.to?`rgba(212, 175, 55, 0.1)`:`transparent`,transition:`all 0.22s ease`,whiteSpace:`nowrap`,letterSpacing:`0.02em`,position:`relative`,cursor:`pointer`},onMouseEnter:t=>{window.location.pathname!==e.to&&(t.target.style.color=`#d4af37`,t.target.style.background=`rgba(212, 175, 55, 0.07)`)},onMouseLeave:t=>{window.location.pathname!==e.to&&(t.target.style.color=`rgba(180, 185, 210, 0.75)`,t.target.style.background=`transparent`)},children:[(0,$.jsx)(`span`,{className:`link-icon`,style:{fontSize:`0.7rem`,opacity:.5},children:e.icon}),e.label]})},e.to))}),(0,$.jsxs)(`div`,{className:`nav-actions`,children:[e?(0,$.jsxs)(`div`,{className:`nav-user-wrap`,ref:c,children:[(0,$.jsxs)(`button`,{className:`nav-user-btn`,onClick:()=>s(e=>!e),"aria-expanded":o,children:[(0,$.jsx)(`div`,{className:`nav-avatar`,children:(e.displayName||e.email||`U`)[0].toUpperCase()}),(0,$.jsx)(`span`,{style:{maxWidth:90,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.displayName||e.email?.split(`@`)[0]}),(0,$.jsx)(`span`,{className:`nav-chevron`,children:`▼`})]}),o&&(0,$.jsxs)(`div`,{className:`nav-dropdown`,children:[(0,$.jsx)(`div`,{className:`nav-dropdown-email`,children:e.email}),(0,$.jsxs)(`button`,{className:`nav-dropdown-item danger`,onClick:u,children:[(0,$.jsx)(`span`,{children:`→`}),` تسجيل الخروج`]})]})]}):(0,$.jsxs)(An,{to:`/login`,className:`nav-login-btn`,children:[(0,$.jsx)(`span`,{children:`✦`}),`تسجيل الدخول`]}),(0,$.jsxs)(`button`,{className:`nav-hamburger${i?` open`:``}`,onClick:()=>a(e=>!e),"aria-label":`القائمة`,children:[(0,$.jsx)(`span`,{}),(0,$.jsx)(`span`,{}),(0,$.jsx)(`span`,{})]})]})]})}),i&&(0,$.jsxs)(`div`,{className:`nav-mobile-menu`,dir:`rtl`,children:[f.map(e=>(0,$.jsxs)(`button`,{onClick:()=>d(e.to),style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,padding:`0.7rem 0.9rem`,fontSize:`0.85rem`,fontWeight:600,color:window.location.pathname===e.to?`#d4af37`:`rgba(180, 185, 210, 0.75)`,background:window.location.pathname===e.to?`rgba(212, 175, 55, 0.08)`:`transparent`,border:`none`,borderRadius:`10px`,transition:`all 0.2s`,letterSpacing:`0.02em`,cursor:`pointer`,width:`100%`},onMouseEnter:t=>{window.location.pathname!==e.to&&(t.target.style.color=`#d4af37`,t.target.style.background=`rgba(212, 175, 55, 0.08)`)},onMouseLeave:t=>{window.location.pathname!==e.to&&(t.target.style.color=`rgba(180, 185, 210, 0.75)`,t.target.style.background=`transparent`)},children:[(0,$.jsx)(`span`,{style:{fontSize:`0.8rem`,width:`20px`,textAlign:`center`,opacity:.5},children:e.icon}),e.label]},e.to)),(0,$.jsx)(`div`,{className:`nav-mobile-divider`}),(0,$.jsx)(`div`,{className:`nav-mobile-actions`,children:e?(0,$.jsx)(`button`,{onClick:()=>{u(),a(!1)},style:{background:`rgba(239,68,68,0.08)`,border:`1px solid rgba(239,68,68,0.2)`,borderRadius:9,color:`#f87171`,padding:`0.55rem 1rem`,fontSize:`0.8rem`,fontFamily:`Cairo, sans-serif`,fontWeight:600,cursor:`pointer`,flex:1},children:`→ تسجيل الخروج`}):(0,$.jsx)(An,{to:`/login`,className:`nav-login-btn`,onClick:()=>a(!1),children:`✦ تسجيل الدخول`})})]})]})}function c_(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(s_,{}),(0,$.jsx)(`main`,{children:(0,$.jsx)(Lt,{})})]})}var l_=[{id:`black-hole`,path:`/black-hole`,emoji:`◉`,label:`الثقوب السوداء`,sublabel:`Black Holes`,desc:`استكشف كيف تحني الجاذبية الشديدة الضوء والزمان عند حافة نقطة اللاعودة.`,tag:`GRAVITY`,accent:`#7c3aed`,glow:`rgba(124,58,237,0.15)`,border:`rgba(124,58,237,0.25)`},{id:`spacetime`,path:`/spacetime`,emoji:`⊛`,label:`الزمكان`,sublabel:`Spacetime`,desc:`شاهد كيف تشوّه الكتلة نسيج الزمكان وفق نظرية النسبية العامة لأينشتاين.`,tag:`RELATIVITY`,accent:`#0ea5e9`,glow:`rgba(14,165,233,0.13)`,border:`rgba(14,165,233,0.22)`},{id:`solar-system`,path:`/solar-system`,emoji:`◎`,label:`النظام الشمسي`,sublabel:`Solar System`,desc:`تجوّل بين كواكب نظامنا الشمسي بمقياس حقيقي مع معلومات تفصيلية عن كل جرم.`,tag:`ORBITAL`,accent:`#f59e0b`,glow:`rgba(245,158,11,0.12)`,border:`rgba(245,158,11,0.22)`},{id:`schrodinger`,path:`/schrodinger`,emoji:`⊕`,label:`قطة شرودنغر`,sublabel:`Schrödinger's Cat`,desc:`تجربة فكرية تكشف غرابة ميكانيكا الكم وازدواجية الوجود على المستوى الكمي.`,tag:`QUANTUM`,accent:`#ec4899`,glow:`rgba(236,72,153,0.12)`,border:`rgba(236,72,153,0.22)`},{id:`stars`,path:`/stars`,emoji:`✦`,label:`النجوم`,sublabel:`Stars`,desc:`اشهد دورة حياة النجوم كاملةً — من السديم إلى المستعر الأعظم والنجم النيوتروني.`,tag:`STELLAR`,accent:`#d4af37`,glow:`rgba(212,175,55,0.12)`,border:`rgba(212,175,55,0.22)`}];function u_({target:e,suffix:t=``}){let[n,r]=(0,x.useState)(0),i=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=new IntersectionObserver(([n])=>{if(!n.isIntersecting)return;t.disconnect();let i=0,a=t=>{i||=t;let n=Math.min((t-i)/1400,1);r(Math.floor(n*e)),n<1?requestAnimationFrame(a):r(e)};requestAnimationFrame(a)},{threshold:.4});return i.current&&t.observe(i.current),()=>t.disconnect()},[e]),(0,$.jsxs)(`span`,{ref:i,children:[n,t]})}function d_({sim:e,user:t,onLoginRequired:n}){let r=ut(),i=()=>{if(!t){n();return}r(e.path)};return(0,$.jsxs)(`div`,{className:`sim-card`,style:{"--accent":e.accent,"--glow":e.glow,"--bd":e.border},onClick:i,children:[(0,$.jsxs)(`div`,{className:`sim-card-top`,children:[(0,$.jsx)(`div`,{className:`sim-card-icon`,children:e.emoji}),(0,$.jsx)(`span`,{className:`sim-card-tag`,children:e.tag})]}),(0,$.jsxs)(`div`,{className:`sim-card-body`,children:[(0,$.jsx)(`h3`,{className:`sim-card-title`,children:e.label}),(0,$.jsx)(`p`,{className:`sim-card-sub`,children:e.sublabel}),(0,$.jsx)(`p`,{className:`sim-card-desc`,children:e.desc})]}),(0,$.jsxs)(`div`,{className:`sim-card-footer`,children:[(0,$.jsxs)(`span`,{className:`sim-card-cta`,children:[t?`تشغيل المحاكاة`:`تسجيل الدخول للوصول`,(0,$.jsx)(`span`,{className:`sim-cta-arrow`,children:`→`})]}),(0,$.jsx)(`span`,{className:`sim-card-dot`,style:{background:t?`#22c55e`:`rgba(255,255,255,0.15)`}})]})]})}function f_(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(!0),[i,a]=(0,x.useState)(!1);ut(),(0,x.useEffect)(()=>Ec(a_,e=>{t(e),r(!1)}),[]);let o=()=>{a(!0),setTimeout(()=>a(!1),3500)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          min-height: 100vh;
          background: #05070f;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
        }

        /* ─── BG ─── */
        .home-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .home-glow-1 {
          position: absolute;
          width: 700px; height: 700px;
          top: -200px; right: -150px;
          background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%);
          filter: blur(60px);
        }

        .home-glow-2 {
          position: absolute;
          width: 600px; height: 600px;
          top: 40%; left: -100px;
          background: radial-gradient(circle, rgba(40,60,140,0.1) 0%, transparent 65%);
          filter: blur(60px);
        }

        .home-glow-3 {
          position: absolute;
          width: 500px; height: 500px;
          bottom: -100px; right: 20%;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%);
          filter: blur(70px);
        }

        .home-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 100%);
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 5rem 2rem 4rem;
        }

        .hero-inner {
          max-width: 1340px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.18);
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          width: fit-content;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }

        .hero-eyebrow-dot {
          width: 5px; height: 5px;
          background: #d4af37;
          border-radius: 50%;
          animation: dot-pulse 2s ease-in-out infinite;
        }

        @keyframes dot-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }

        .hero-title {
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 900;
          line-height: 1.04;
          color: #e8eaf5;
          letter-spacing: -0.02em;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }

        .hero-title-gold {
          color: #d4af37;
          position: relative;
          display: inline-block;
        }

        .hero-title-gold::after {
          content: '';
          position: absolute;
          bottom: 2px;
          right: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          border-radius: 2px;
          opacity: 0.5;
        }

        .hero-desc {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(180,185,210,0.6);
          line-height: 1.75;
          max-width: 480px;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }

        @keyframes hero-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          padding: 0.78rem 1.6rem;
          border-radius: 11px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 24px rgba(212,175,55,0.25);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(212,175,55,0.38);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255,255,255,0.04);
          color: rgba(200,205,225,0.8);
          border: 1px solid rgba(255,255,255,0.09);
          padding: 0.76rem 1.6rem;
          border-radius: 11px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
          letter-spacing: 0.02em;
        }

        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(212,175,55,0.22);
          color: #d4af37;
        }

        /* Hero visual */
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        .orbit-canvas {
          position: relative;
          width: 340px;
          height: 340px;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-r1 {
          width: 340px; height: 340px;
          border: 1px dashed rgba(212,175,55,0.1);
          animation: spin 28s linear infinite;
        }
        .orbit-r2 {
          width: 254px; height: 254px;
          border: 1px solid rgba(212,175,55,0.12);
          animation: spin 18s linear infinite reverse;
        }
        .orbit-r3 {
          width: 170px; height: 170px;
          border: 1px solid rgba(212,175,55,0.18);
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        .orbit-dot {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
        }

        .orbit-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 72px; height: 72px;
          background: radial-gradient(circle, #d4af37 0%, #8a6820 55%, transparent 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          box-shadow:
            0 0 30px rgba(212,175,55,0.5),
            0 0 70px rgba(212,175,55,0.2),
            0 0 130px rgba(212,175,55,0.08);
          animation: pulse-glow 3.5s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 30px rgba(212,175,55,0.5), 0 0 70px rgba(212,175,55,0.2); }
          50%      { box-shadow: 0 0 50px rgba(212,175,55,0.7), 0 0 110px rgba(212,175,55,0.3); }
        }

        /* ─── STATS ─── */
        .stats-strip {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          padding: 2.4rem 2rem;
        }

        .stats-inner {
          max-width: 1340px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1.2rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.04);
          background: rgba(255,255,255,0.02);
          transition: all 0.22s;
        }

        .stat-item:hover {
          border-color: rgba(212,175,55,0.15);
          background: rgba(212,175,55,0.03);
        }

        .stat-icon-wrap {
          width: 40px; height: 40px;
          background: rgba(212,175,55,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .stat-text h3 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #d4af37;
          line-height: 1;
        }

        .stat-text p {
          font-size: 0.72rem;
          color: rgba(180,185,210,0.45);
          margin-top: 0.15rem;
          font-weight: 400;
        }

        /* ─── SIMS SECTION ─── */
        .sims-section {
          position: relative;
          z-index: 1;
          padding: 5rem 2rem;
        }

        .sims-inner {
          max-width: 1340px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.06);
          border: 1px solid rgba(212,175,55,0.15);
          padding: 0.28rem 0.8rem;
          border-radius: 50px;
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(212,175,55,0.85);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        .section-title {
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 900;
          color: #e8eaf5;
          letter-spacing: -0.02em;
          margin-bottom: 0.6rem;
          line-height: 1.1;
        }

        .section-title span { color: #d4af37; }

        .section-subtitle {
          font-size: 0.9rem;
          color: rgba(180,185,210,0.45);
          font-weight: 300;
        }

        /* Sim cards grid */
        .sims-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .sims-grid > .sim-card:first-child {
          grid-column: span 2;
        }

        /* Card */
        .sim-card {
          background: rgba(10, 13, 28, 0.7);
          border: 1px solid var(--bd);
          border-radius: 18px;
          padding: 1.7rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .sim-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, var(--glow) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.28s ease;
          pointer-events: none;
        }

        .sim-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03);
        }

        .sim-card:hover::before {
          opacity: 1;
        }

        .sim-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sim-card-icon {
          width: 48px; height: 48px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--bd);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--accent);
          transition: all 0.28s;
        }

        .sim-card:hover .sim-card-icon {
          background: var(--glow);
          border-color: var(--accent);
        }

        .sim-card-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.14em;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--bd);
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .sim-card:hover .sim-card-tag {
          opacity: 1;
        }

        .sim-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .sim-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e8eaf5;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .sims-grid > .sim-card:first-child .sim-card-title {
          font-size: 1.35rem;
        }

        .sim-card-sub {
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(180,185,210,0.35);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }

        .sim-card-desc {
          font-size: 0.82rem;
          color: rgba(180,185,210,0.5);
          line-height: 1.65;
          font-weight: 300;
          margin-top: 0.4rem;
        }

        .sim-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .sim-card-cta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.03em;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .sim-card:hover .sim-card-cta {
          opacity: 1;
        }

        .sim-cta-arrow {
          transition: transform 0.22s cubic-bezier(0.16,1,0.3,1);
          display: inline-block;
        }

        .sim-card:hover .sim-cta-arrow {
          transform: translateX(-4px);
        }

        .sim-card-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          transition: all 0.22s;
        }

        /* ─── CTA ─── */
        .cta-section {
          position: relative;
          z-index: 1;
          padding: 4rem 2rem 6rem;
        }

        .cta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          background: rgba(10,13,28,0.7);
          border: 1px solid rgba(212,175,55,0.14);
          border-radius: 24px;
          padding: 3.5rem 3rem;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .cta-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent);
        }

        .cta-glow {
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
        }

        .cta-symbol {
          font-size: 2.8rem;
          display: block;
          margin-bottom: 1.2rem;
          animation: pulse-glow 4s ease-in-out infinite;
          filter: drop-shadow(0 0 12px rgba(212,175,55,0.5));
        }

        .cta-inner h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #e8eaf5;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .cta-inner h2 span { color: #d4af37; }

        .cta-inner p {
          font-size: 0.9rem;
          color: rgba(180,185,210,0.5);
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.65;
        }

        /* ─── TOAST ─── */
        .toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10,13,28,0.96);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 12px;
          padding: 0.75rem 1.5rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #e8eaf5;
          z-index: 9999;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: toast-in 0.3s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap;
        }

        @keyframes toast-in {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .sims-grid { grid-template-columns: 1fr 1fr; }
          .sims-grid > .sim-card:first-child { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .hero-visual { order: -1; }
          .orbit-canvas { width: 240px; height: 240px; }
          .orbit-r1 { width: 240px; height: 240px; }
          .orbit-r2 { width: 180px; height: 180px; }
          .orbit-r3 { width: 120px; height: 120px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .sims-grid { grid-template-columns: 1fr; }
          .sims-grid > .sim-card:first-child { grid-column: span 1; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .cta-inner { padding: 2.5rem 1.5rem; }
        }

        @media (max-width: 480px) {
          .hero { padding: 5rem 1rem 3rem; }
          .sims-section { padding: 3rem 1rem; }
          .cta-section { padding: 2rem 1rem 4rem; }
          .stats-strip { padding: 2rem 1rem; }
          .stat-item { padding: 0.7rem; gap: 0.7rem; }
        }
      `}),(0,$.jsxs)(`div`,{className:`home-root`,children:[(0,$.jsxs)(`div`,{className:`home-bg`,children:[(0,$.jsx)(`div`,{className:`home-glow-1`}),(0,$.jsx)(`div`,{className:`home-glow-2`}),(0,$.jsx)(`div`,{className:`home-glow-3`}),(0,$.jsx)(`div`,{className:`home-grid`})]}),(0,$.jsx)(`section`,{className:`hero`,children:(0,$.jsxs)(`div`,{className:`hero-inner`,children:[(0,$.jsxs)(`div`,{className:`hero-content`,children:[(0,$.jsxs)(`div`,{className:`hero-eyebrow`,children:[(0,$.jsx)(`div`,{className:`hero-eyebrow-dot`}),`موسوعة فلكية تفاعلية`]}),(0,$.jsxs)(`h1`,{className:`hero-title`,children:[`اكتشف`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{className:`hero-title-gold`,children:`أسرار الكون`})]}),(0,$.jsx)(`p`,{className:`hero-desc`,children:`خمس محاكيات تفاعلية تأخذك في رحلة علمية عبر الثقوب السوداء، الزمكان، النجوم، وأعماق ميكانيكا الكم.`}),(0,$.jsxs)(`div`,{className:`hero-actions`,children:[(0,$.jsx)(An,{to:e?`/black-hole`:`/login`,className:`hero-btn-primary`,children:`✦ ابدأ الاستكشاف`}),(0,$.jsx)(`a`,{href:`#sims`,className:`hero-btn-secondary`,onClick:e=>{e.preventDefault(),document.getElementById(`sims`)?.scrollIntoView({behavior:`smooth`})},children:`تصفح المحاكيات ↓`})]})]}),(0,$.jsx)(`div`,{className:`hero-visual`,children:(0,$.jsxs)(`div`,{className:`orbit-canvas`,children:[(0,$.jsx)(`div`,{className:`orbit-ring orbit-r1`}),(0,$.jsx)(`div`,{className:`orbit-ring orbit-r2`}),(0,$.jsx)(`div`,{className:`orbit-ring orbit-r3`}),(0,$.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%) rotate(0deg) translateX(127px) rotate(0deg)`,animation:`spin 18s linear infinite`,width:14,height:14,background:`#60a5fa`,borderRadius:`50%`,boxShadow:`0 0 10px rgba(96,165,250,0.7)`}}),(0,$.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%) rotate(120deg) translateX(85px)`,animation:`spin 10s linear infinite reverse`,width:10,height:10,background:`#f87171`,borderRadius:`50%`,boxShadow:`0 0 8px rgba(248,113,113,0.7)`}}),(0,$.jsx)(`div`,{className:`orbit-center`,children:`✦`})]})})]})}),(0,$.jsx)(`div`,{className:`stats-strip`,children:(0,$.jsx)(`div`,{className:`stats-inner`,children:[{icon:`⬡`,val:5,suffix:``,label:`محاكيات`},{icon:`✦`,val:100,suffix:`%`,label:`تفاعلية`},{icon:`◎`,val:50,suffix:`+`,label:`موضوع علمي`},{icon:`⊛`,val:1,suffix:``,label:`موسوعة كونية`}].map(e=>(0,$.jsxs)(`div`,{className:`stat-item`,children:[(0,$.jsx)(`div`,{className:`stat-icon-wrap`,children:e.icon}),(0,$.jsxs)(`div`,{className:`stat-text`,children:[(0,$.jsx)(`h3`,{children:(0,$.jsx)(u_,{target:e.val,suffix:e.suffix})}),(0,$.jsx)(`p`,{children:e.label})]})]},e.label))})}),(0,$.jsx)(`section`,{className:`sims-section`,id:`sims`,children:(0,$.jsxs)(`div`,{className:`sims-inner`,children:[(0,$.jsxs)(`div`,{className:`section-header`,children:[(0,$.jsx)(`div`,{className:`section-eyebrow`,children:`◉ محاكيات تفاعلية`}),(0,$.jsxs)(`h2`,{className:`section-title`,children:[`استكشف `,(0,$.jsx)(`span`,{children:`الكون`}),` من الداخل`]}),(0,$.jsx)(`p`,{className:`section-subtitle`,children:`تجارب علمية غامرة تجمع بين الفيزياء الحقيقية والتصور التفاعلي`})]}),(0,$.jsx)(`div`,{className:`sims-grid`,children:l_.map(t=>(0,$.jsx)(d_,{sim:t,user:e,onLoginRequired:o},t.id))})]})}),!n&&!e&&(0,$.jsx)(`section`,{className:`cta-section`,children:(0,$.jsxs)(`div`,{className:`cta-inner`,children:[(0,$.jsx)(`div`,{className:`cta-glow`}),(0,$.jsx)(`span`,{className:`cta-symbol`,children:`✦`}),(0,$.jsxs)(`h2`,{children:[`انضم إلى `,(0,$.jsx)(`span`,{children:`رحلة الاستكشاف`})]}),(0,$.jsx)(`p`,{children:`سجّل دخولك للوصول إلى جميع المحاكيات التفاعلية والانطلاق في رحلة علمية فريدة عبر الكون.`}),(0,$.jsx)(An,{to:`/login`,className:`hero-btn-primary`,children:`✦ سجّل دخولك الآن`})]})})]}),i&&(0,$.jsxs)(`div`,{className:`toast`,dir:`rtl`,children:[(0,$.jsx)(`span`,{children:`🔒`}),`يجب تسجيل الدخول للوصول إلى المحاكيات —`,` `,(0,$.jsx)(An,{to:`/login`,style:{color:`#d4af37`,textDecoration:`none`,fontWeight:700},children:`سجّل الآن`})]})]})}function p_(){let[e,t]=(0,x.useState)(`login`),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(``),[c,l]=(0,x.useState)(``),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(!1),m=ut();(0,x.useEffect)(()=>Ec(a_,e=>{e&&m(`/`,{replace:!0})}),[m]);let h=()=>l(``);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          background: #05070f;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-family: 'Cairo', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Background atmosphere */
        .login-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .login-bg-glow-1 {
          width: 560px; height: 560px;
          top: -180px; right: -100px;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
        }

        .login-bg-glow-2 {
          width: 440px; height: 440px;
          bottom: -120px; left: -80px;
          background: radial-gradient(circle, rgba(40, 60, 140, 0.12) 0%, transparent 70%);
        }

        /* Grid texture */
        .login-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* Stars */
        .login-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .login-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: star-twinkle var(--d, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: var(--op, 0.2); }
          50% { opacity: 0.9; }
        }

        /* Card */
        .login-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 440px;
          background: rgba(10, 13, 28, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.14);
          border-radius: 24px;
          padding: 2.8rem 2.4rem;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 32px 80px rgba(0,0,0,0.55),
            0 0 60px rgba(212,175,55,0.04);
          animation: card-in 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes card-in {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Top accent line */
        .login-card::before {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);
          border-radius: 50%;
        }

        /* Logo area */
        .login-logo {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo-ring {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          position: relative;
          margin-bottom: 0.9rem;
        }

        .login-logo-ring svg {
          position: absolute;
          inset: 0;
          animation: spin-slow 10s linear infinite;
        }

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        .login-logo-ring-inner {
          font-size: 1.5rem;
          z-index: 1;
          animation: spin-slow 10s linear infinite reverse;
        }

        .login-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #d4af37;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .login-logo-sub {
          font-size: 0.68rem;
          color: rgba(180,185,210,0.4);
          font-weight: 300;
          letter-spacing: 0.06em;
        }

        /* Heading */
        .login-heading {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .login-heading h1 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #e8eaf5;
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }

        .login-heading p {
          font-size: 0.78rem;
          color: rgba(180,185,210,0.45);
          font-weight: 300;
        }

        /* Mode tabs */
        .login-tabs {
          display: flex;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 11px;
          padding: 3px;
          margin-bottom: 1.6rem;
          gap: 3px;
        }

        .login-tab {
          flex: 1;
          padding: 0.52rem;
          border-radius: 9px;
          border: none;
          background: transparent;
          font-family: 'Cairo', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.5);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.02em;
        }

        .login-tab.active {
          background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.08));
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.22);
          box-shadow: 0 2px 12px rgba(212,175,55,0.1);
        }

        /* Error */
        .login-error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          font-size: 0.78rem;
          color: #fca5a5;
          margin-bottom: 1.1rem;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        /* Form */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .login-field {
          display: flex;
          flex-direction: column;
          gap: 0.38rem;
        }

        .login-label {
          font-size: 0.73rem;
          font-weight: 600;
          color: rgba(180,185,210,0.6);
          letter-spacing: 0.04em;
        }

        .login-input-wrap {
          position: relative;
        }

        .login-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 11px;
          padding: 0.7rem 1rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          color: #e8eaf5;
          outline: none;
          transition: all 0.22s ease;
          direction: ltr;
          text-align: left;
        }

        .login-input.rtl-input {
          direction: rtl;
          text-align: right;
        }

        .login-input::placeholder {
          color: rgba(180,185,210,0.25);
        }

        .login-input:focus {
          border-color: rgba(212,175,55,0.45);
          background: rgba(212,175,55,0.04);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.07);
        }

        .login-input-eye {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(180,185,210,0.35);
          cursor: pointer;
          font-size: 0.85rem;
          transition: color 0.18s;
          padding: 2px;
          line-height: 1;
        }

        .login-input-eye:hover {
          color: rgba(212,175,55,0.7);
        }

        /* Submit */
        .login-submit {
          width: 100%;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          border-radius: 11px;
          padding: 0.8rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 20px rgba(212,175,55,0.22);
          position: relative;
          overflow: hidden;
          margin-top: 0.2rem;
        }

        .login-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.22s;
        }

        .login-submit:hover:not(:disabled)::after {
          opacity: 1;
        }

        .login-submit:hover:not(:disabled) {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 30px rgba(212,175,55,0.36);
        }

        .login-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .login-submit-spinner {
          display: inline-block;
          width: 14px; height: 14px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-left: 6px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Divider */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin: 1.2rem 0;
          color: rgba(180,185,210,0.3);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        /* Google */
        .login-google {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 11px;
          padding: 0.72rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(200,205,225,0.85);
          cursor: pointer;
          transition: all 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          letter-spacing: 0.02em;
        }

        .login-google:hover:not(:disabled) {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          color: #fff;
        }

        .login-google:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .google-icon {
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        /* Footer link */
        .login-footer {
          text-align: center;
          margin-top: 1.6rem;
          font-size: 0.72rem;
          color: rgba(180,185,210,0.35);
        }

        .login-footer a {
          color: rgba(212,175,55,0.75);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.18s;
        }

        .login-footer a:hover {
          color: #d4af37;
        }

        /* Back to home */
        .login-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(180,185,210,0.4);
          font-size: 0.72rem;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.18s;
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 2;
        }

        .login-back:hover {
          color: rgba(212,175,55,0.75);
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
        }
      `}),(0,$.jsxs)(`div`,{className:`login-root`,dir:`rtl`,children:[(0,$.jsx)(`div`,{className:`login-bg-glow login-bg-glow-1`}),(0,$.jsx)(`div`,{className:`login-bg-glow login-bg-glow-2`}),(0,$.jsx)(`div`,{className:`login-grid`}),(0,$.jsx)(`div`,{className:`login-stars`,id:`login-stars`}),(0,$.jsx)(An,{to:`/`,className:`login-back`,children:`← الرئيسية`}),(0,$.jsxs)(`div`,{className:`login-card`,children:[(0,$.jsxs)(`div`,{className:`login-logo`,children:[(0,$.jsxs)(`div`,{className:`login-logo-ring`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 58 58`,fill:`none`,children:[(0,$.jsx)(`circle`,{cx:`29`,cy:`29`,r:`27.5`,stroke:`url(#lg1)`,strokeWidth:`0.8`,strokeDasharray:`4 3`}),(0,$.jsx)(`circle`,{cx:`29`,cy:`29`,r:`18`,stroke:`url(#lg1)`,strokeWidth:`0.6`,strokeDasharray:`2 4`}),(0,$.jsx)(`defs`,{children:(0,$.jsxs)(`linearGradient`,{id:`lg1`,x1:`0`,y1:`0`,x2:`58`,y2:`58`,gradientUnits:`userSpaceOnUse`,children:[(0,$.jsx)(`stop`,{stopColor:`#d4af37`}),(0,$.jsx)(`stop`,{offset:`1`,stopColor:`#d4af37`,stopOpacity:`0.1`})]})})]}),(0,$.jsx)(`div`,{className:`login-logo-ring-inner`,children:`✦`})]}),(0,$.jsx)(`div`,{className:`login-logo-name`,children:`ASTRO`}),(0,$.jsx)(`div`,{className:`login-logo-sub`,children:`الموسوعة الفلكية`})]}),(0,$.jsxs)(`div`,{className:`login-heading`,children:[(0,$.jsx)(`h1`,{children:e===`login`?`مرحباً بعودتك`:`انضم إلى الكون`}),(0,$.jsx)(`p`,{children:e===`login`?`سجّل دخولك لاستكشاف المحاكيات التفاعلية`:`أنشئ حسابك وابدأ رحلة الاستكشاف`})]}),(0,$.jsxs)(`div`,{className:`login-tabs`,children:[(0,$.jsx)(`button`,{className:`login-tab${e===`login`?` active`:``}`,onClick:()=>{t(`login`),h()},children:`تسجيل الدخول`}),(0,$.jsx)(`button`,{className:`login-tab${e===`signup`?` active`:``}`,onClick:()=>{t(`signup`),h()},children:`إنشاء حساب`})]}),c&&(0,$.jsxs)(`div`,{className:`login-error`,children:[(0,$.jsx)(`span`,{children:`⚠`}),` `,c]}),(0,$.jsxs)(`form`,{className:`login-form`,onSubmit:async t=>{t.preventDefault(),h(),d(!0);try{if(e===`login`)await xc(a_,n,i);else{let e=await bc(a_,n,i);o.trim()&&await Cc(e.user,{displayName:o.trim()})}m(`/`)}catch(e){let t=e.code||``;t.includes(`user-not-found`)||t.includes(`wrong-password`)||t.includes(`invalid-credential`)?l(`البريد الإلكتروني أو كلمة المرور غير صحيحة`):t.includes(`email-already-in-use`)?l(`هذا البريد الإلكتروني مستخدم بالفعل`):t.includes(`weak-password`)?l(`كلمة المرور قصيرة جداً (6 أحرف على الأقل)`):t.includes(`invalid-email`)?l(`صيغة البريد الإلكتروني غير صحيحة`):l(`حدث خطأ ما، حاول مجدداً`)}d(!1)},children:[e===`signup`&&(0,$.jsxs)(`div`,{className:`login-field`,children:[(0,$.jsx)(`label`,{className:`login-label`,children:`الاسم`}),(0,$.jsx)(`div`,{className:`login-input-wrap`,children:(0,$.jsx)(`input`,{type:`text`,className:`login-input rtl-input`,placeholder:`اسمك الكامل`,value:o,onChange:e=>s(e.target.value),autoComplete:`name`})})]}),(0,$.jsxs)(`div`,{className:`login-field`,children:[(0,$.jsx)(`label`,{className:`login-label`,children:`البريد الإلكتروني`}),(0,$.jsx)(`div`,{className:`login-input-wrap`,children:(0,$.jsx)(`input`,{type:`email`,className:`login-input`,placeholder:`example@email.com`,value:n,onChange:e=>r(e.target.value),required:!0,autoComplete:`email`,style:{paddingLeft:`2.4rem`}})})]}),(0,$.jsxs)(`div`,{className:`login-field`,children:[(0,$.jsx)(`label`,{className:`login-label`,children:`كلمة المرور`}),(0,$.jsxs)(`div`,{className:`login-input-wrap`,children:[(0,$.jsx)(`input`,{type:f?`text`:`password`,className:`login-input`,placeholder:`••••••••`,value:i,onChange:e=>a(e.target.value),required:!0,autoComplete:e===`login`?`current-password`:`new-password`,style:{paddingLeft:`2.4rem`}}),(0,$.jsx)(`button`,{type:`button`,className:`login-input-eye`,onClick:()=>p(e=>!e),tabIndex:-1,children:f?`🙈`:`👁`})]})]}),(0,$.jsx)(`button`,{type:`submit`,className:`login-submit`,disabled:u,children:u?(0,$.jsxs)($.Fragment,{children:[`جارٍ التحميل`,(0,$.jsx)(`span`,{className:`login-submit-spinner`})]}):e===`login`?`دخول ✦`:`إنشاء الحساب ✦`})]}),(0,$.jsx)(`div`,{className:`login-divider`,children:`أو`}),(0,$.jsxs)(`button`,{className:`login-google`,onClick:async()=>{h(),d(!0);try{await Ol(a_,new sc),m(`/`)}catch(e){e.code?.includes(`popup-closed`)||l(`فشل تسجيل الدخول بجوجل، حاول مجدداً`)}d(!1)},disabled:u,children:[(0,$.jsx)(`span`,{className:`google-icon`,children:(0,$.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,children:[(0,$.jsx)(`path`,{d:`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,fill:`#4285F4`}),(0,$.jsx)(`path`,{d:`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,fill:`#34A853`}),(0,$.jsx)(`path`,{d:`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,fill:`#FBBC05`}),(0,$.jsx)(`path`,{d:`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,fill:`#EA4335`})]})}),`المتابعة مع Google`]}),(0,$.jsx)(`div`,{className:`login-footer`,children:e===`login`?(0,$.jsxs)($.Fragment,{children:[`ليس لديك حساب؟`,` `,(0,$.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),t(`signup`),h()},children:`أنشئ حساباً`})]}):(0,$.jsxs)($.Fragment,{children:[`لديك حساب بالفعل؟`,` `,(0,$.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),t(`login`),h()},children:`سجّل دخولك`})]})})]})]}),(0,$.jsx)(`script`,{dangerouslySetInnerHTML:{__html:`
          (function() {
            var c = document.getElementById('login-stars');
            if (!c) return;
            for (var i = 0; i < 80; i++) {
              var s = document.createElement('div');
              s.className = 'login-star';
              var sz = Math.random() * 2 + 0.5;
              s.style.cssText = 'left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+sz+'px;height:'+sz+'px;--op:'+(Math.random()*0.4+0.05)+';--d:'+(Math.random()*4+2)+'s;--delay:'+(Math.random()*6)+'s';
              c.appendChild(s);
            }
          })();
        `}})]})}var m_={white:{id:`white`,label:`ثقب أبيض`,icon:`⬜`,color:`#f5e642`,glow:`#f5e642`,glowRgb:`245,230,66`,bgGlow:`rgba(245,230,66,0.18)`,border:`rgba(245,230,66,0.35)`,headerBg:`rgba(245,230,66,0.08)`,sliderTrack:`#f5e642`,desc:`يقذف المادة والطاقة للخارج بعنف`,zRange:[-1,0],sizeBase:90,gravity:.3,actions:[{icon:`💥`,label:`انفجار`,event:`انفجار مادي من الثقب الأبيض!`},{icon:`🌊`,label:`موجة`,event:`موجة طاقة اندفعت للخارج`},{icon:`✨`,label:`إشعاع`,event:`إشعاع كثيف انبعث من الثقب`},{icon:`🔀`,label:`عشوائي`,event:`حدث عشوائي غير متوقع!`}]},neutron:{id:`neutron`,label:`نجم نيوتروني`,icon:`⚡`,color:`#00e5d4`,glow:`#00e5d4`,glowRgb:`0,229,212`,bgGlow:`rgba(0,229,212,0.15)`,border:`rgba(0,229,212,0.32)`,headerBg:`rgba(0,229,212,0.07)`,sliderTrack:`#00e5d4`,desc:`جاذبية هائلة مع نبضات راديوية`,zRange:[.5,2],sizeBase:78,gravity:1.8,actions:[{icon:`📡`,label:`نبضة`,event:`نبضة راديوية صدرت من النجم!`},{icon:`🧲`,label:`مغناطيس`,event:`حقل مغناطيسي هائل نشط`},{icon:`💫`,label:`دوران`,event:`النجم يدور بسرعة قياسية`},{icon:`👤`,label:`تأثير`,event:`تأثير جاذبية على محيطه`}]},black:{id:`black`,label:`ثقب أسود`,icon:`🌀`,color:`#a855f7`,glow:`#a855f7`,glowRgb:`168,85,247`,bgGlow:`rgba(168,85,247,0.15)`,border:`rgba(168,85,247,0.32)`,headerBg:`rgba(168,85,247,0.07)`,sliderTrack:`#a855f7`,desc:`تشويه الزمكان عند نقطة اللاعودة`,zRange:[1,3],sizeBase:72,gravity:3.5,actions:[{icon:`🍝`,label:`امتداد`,event:`تمدد كباغيتي! جسيم تمزق`},{icon:`🌑`,label:`ابتلاع`,event:`ابتلع الثقب مادة جديدة`},{icon:`⏱️`,label:`زمن`,event:`تمدد زمني شديد عند الأفق`},{icon:`💔`,label:`تمزيق`,event:`قوى المد مزقت جسم قريب`}]}};function h_({type:e,distance:t,pulse:n}){let r=(0,x.useRef)(null),i=(0,x.useRef)(null),a=(0,x.useRef)(0),o=(0,x.useRef)([]);return(0,x.useEffect)(()=>{let s=r.current;if(!s)return;let c=s.getContext(`2d`),l=s.width=s.offsetWidth,u=s.height=s.offsetHeight,d=l/2,f=u/2,p=m_[e],m=1-t/100,h=p.sizeBase+m*30,g=e=>{let t=s.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;for(let e=0;e<8;e++){let e=Math.random()*Math.PI*2,t=2+Math.random()*4;o.current.push({x:n,y:r,vx:Math.cos(e)*t,vy:Math.sin(e)*t,life:1,trail:[],color:p.color})}};function _(){a.current++;let t=a.current;if(c.clearRect(0,0,l,u),e===`white`){for(let e=3;e>=1;e--){let n=h+e*28+Math.sin(t*.04+e)*6,r=(.06-e*.015)*(1+m*.5);c.beginPath(),c.arc(d,f,n,0,Math.PI*2),c.fillStyle=`rgba(245,230,66,${r})`,c.fill()}let e=c.createRadialGradient(d,f,0,d,f,h);if(e.addColorStop(0,`#fffde0`),e.addColorStop(.4,`#f5e642`),e.addColorStop(.8,`#e6c200`),e.addColorStop(1,`rgba(230,194,0,0)`),c.beginPath(),c.arc(d,f,h,0,Math.PI*2),c.fillStyle=e,c.fill(),n){let e=h+t%40*2.5;c.beginPath(),c.arc(d,f,e,0,Math.PI*2),c.strokeStyle=`rgba(245,230,66,${.5-t%40/80})`,c.lineWidth=2,c.stroke()}c.font=`${h*.55}px serif`,c.fillStyle=`rgba(80,60,0,0.85)`,c.textAlign=`center`,c.textBaseline=`middle`,c.fillText(`◈`,d,f)}if(e===`neutron`){for(let e=3;e>=1;e--){let n=h+e*25+Math.sin(t*.05+e)*5;c.beginPath(),c.arc(d,f,n,0,Math.PI*2),c.fillStyle=`rgba(0,229,212,${.05*(1+m*.6)/e})`,c.fill()}let e=c.createRadialGradient(d,f,0,d,f,h);e.addColorStop(0,`#e0fffd`),e.addColorStop(.35,`#00e5d4`),e.addColorStop(.75,`#009e94`),e.addColorStop(1,`rgba(0,158,148,0)`),c.beginPath(),c.arc(d,f,h,0,Math.PI*2),c.fillStyle=e,c.fill();let r=t*.06;c.save(),c.translate(d,f),c.rotate(r);let i=c.createLinearGradient(0,0,l*.7,0);if(i.addColorStop(0,`rgba(0,229,212,0.55)`),i.addColorStop(1,`rgba(0,229,212,0)`),c.fillStyle=i,c.fillRect(0,-3,l*.7,6),c.rotate(Math.PI),c.fillStyle=i,c.fillRect(0,-3,l*.7,6),c.restore(),n){let e=h+t%35*3;c.beginPath(),c.arc(d,f,e,0,Math.PI*2),c.strokeStyle=`rgba(0,229,212,${.6-t%35/58})`,c.lineWidth=1.5,c.stroke()}c.font=`${h*.52}px serif`,c.fillStyle=`rgba(0,60,55,0.9)`,c.textAlign=`center`,c.textBaseline=`middle`,c.fillText(`⚡`,d,f)}if(e===`black`){let e=h*2.2+m*20,r=h*.38;c.save(),c.translate(d,f),c.rotate(t*.012);for(let t=0;t<3;t++){c.beginPath(),c.ellipse(0,0,e-t*12,r-t*4,0,0,Math.PI*2);let n=c.createLinearGradient(-e,0,e,0),i=(.22-t*.06)*(1+m*.4);n.addColorStop(0,`rgba(168,85,247,${i})`),n.addColorStop(.3,`rgba(220,130,255,${i*1.3})`),n.addColorStop(.5,`rgba(255,200,100,${i*.8})`),n.addColorStop(.7,`rgba(220,130,255,${i*1.3})`),n.addColorStop(1,`rgba(168,85,247,${i})`),c.strokeStyle=n,c.lineWidth=6-t*1.5,c.stroke()}c.restore();let i=h*1.35;c.beginPath(),c.arc(d,f,i,0,Math.PI*2),c.fillStyle=`rgba(168,85,247,${.08+Math.sin(t*.03)*.03})`,c.fill(),c.beginPath(),c.arc(d,f,h,0,Math.PI*2),c.fillStyle=`#000`,c.fill(),c.strokeStyle=`rgba(168,85,247,${.6+Math.sin(t*.04)*.2})`,c.lineWidth=2.5,c.stroke(),c.save(),c.translate(d,f),c.rotate(t*.02);for(let e=0;e<2;e++){c.rotate(Math.PI);for(let e=0;e<20;e++){let t=e/20*h*.85,n=e/20*Math.PI*3,r=Math.cos(n)*t,i=Math.sin(n)*t;c.beginPath(),c.arc(r,i,1.5,0,Math.PI*2),c.fillStyle=`rgba(168,85,247,${.4-e*.018})`,c.fill()}}if(c.restore(),n){let e=h*1.5+t%45*2.2;c.beginPath(),c.arc(d,f,e,0,Math.PI*2),c.strokeStyle=`rgba(168,85,247,${.5-t%45/90})`,c.lineWidth=1.5,c.stroke()}}if(m>.6){let e=Math.floor(m*8);for(let n=0;n<e;n++){let r=n/e*Math.PI*2+t*.008,i=h*1.6,a=h*2.4;c.beginPath(),c.moveTo(d+Math.cos(r)*i,f+Math.sin(r)*i),c.lineTo(d+Math.cos(r+.15)*a,f+Math.sin(r+.15)*a),c.strokeStyle=`rgba(255,255,255,${(m-.6)*.25})`,c.lineWidth=1,c.stroke()}}let r=o.current;r.forEach((e,t)=>{let n=d-e.x,i=f-e.y,a=Math.sqrt(n*n+i*i),o=p.gravity*(m+.5);if(a>10){let t=n/a*o,r=i/a*o;e.vx+=t,e.vy+=r}e.vx*=.98,e.vy*=.98,e.x+=e.vx,e.y+=e.vy,e.trail.push({x:e.x,y:e.y}),e.trail.length>12&&e.trail.shift(),e.life-=.015,(e.life<=0||a<h*.8)&&r.splice(t,1)}),r.forEach(e=>{if(e.trail.length>1){c.beginPath(),c.moveTo(e.trail[0].x,e.trail[0].y);for(let t=1;t<e.trail.length;t++)c.lineTo(e.trail[t].x,e.trail[t].y);c.strokeStyle=`rgba(${e.color===`#f5e642`?`245,230,66`:e.color===`#00e5d4`?`0,229,212`:`168,85,247`},${e.life*.3})`,c.lineWidth=1.5,c.stroke()}c.beginPath(),c.arc(e.x,e.y,4,0,Math.PI*2),c.fillStyle=`rgba(${e.color===`#f5e642`?`245,230,66`:e.color===`#00e5d4`?`0,229,212`:`168,85,247`},${e.life})`,c.fill(),c.strokeStyle=`rgba(255,255,255,${e.life*.5})`,c.lineWidth=1,c.stroke()}),i.current=requestAnimationFrame(_)}return _(),s.addEventListener(`click`,g),()=>{cancelAnimationFrame(i.current),s.removeEventListener(`click`,g)}},[e,t,n]),(0,$.jsx)(`canvas`,{ref:r,style:{width:`100%`,height:`100%`,display:`block`,cursor:`crosshair`},title:`انقر لرمي الجزيئات`})}function g_({typeKey:e,onLog:t}){let n=m_[e],[r,i]=(0,x.useState)(50),[a,o]=(0,x.useState)(!1),s=1-r/100,c=(.85+s*.5).toFixed(2),l=(n.zRange[0]+s*(n.zRange[1]-n.zRange[0])).toFixed(2),u=r<30?`قريب جداً`:r<60?`متوسط`:`بعيد`,d=e=>{o(!0),setTimeout(()=>o(!1),1200),t(`${n.icon} ${e.event}`)};return(0,$.jsxs)(`div`,{className:`obj-card`,style:{"--accent":n.color,"--glow":n.bgGlow,"--bd":n.border},children:[(0,$.jsxs)(`div`,{className:`obj-header`,style:{background:n.headerBg},children:[(0,$.jsx)(`span`,{className:`obj-title`,children:n.label}),(0,$.jsx)(`span`,{className:`obj-icon-badge`,children:n.icon})]}),(0,$.jsxs)(`div`,{className:`obj-slider-row`,children:[(0,$.jsx)(`span`,{className:`slider-label`,children:`قريب`}),(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`,style:{width:`${r}%`,background:`linear-gradient(90deg, ${n.color}99, ${n.color})`}}),(0,$.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:r,onChange:e=>i(+e.target.value),className:`slider-input`,style:{"--thumb-color":n.color}})]}),(0,$.jsx)(`span`,{className:`slider-label`,children:`بعيد`})]}),(0,$.jsxs)(`div`,{className:`obj-stats`,children:[(0,$.jsxs)(`div`,{className:`obj-stat`,children:[(0,$.jsx)(`span`,{className:`stat-key`,children:u}),(0,$.jsxs)(`span`,{className:`stat-val`,style:{color:n.color},children:[c,`x`]}),(0,$.jsxs)(`span`,{className:`stat-key`,style:{color:`rgba(200,200,220,0.4)`},children:[`z=`,l]})]}),(0,$.jsxs)(`div`,{className:`stat-bar-wrap`,children:[(0,$.jsx)(`div`,{className:`stat-bar`,style:{width:`${r}%`,background:n.color}}),(0,$.jsx)(`div`,{className:`stat-bar stat-bar-2`,style:{width:`${100-r}%`,background:`linear-gradient(90deg,${n.color}40,${n.color}20)`}})]})]}),(0,$.jsxs)(`div`,{className:`obj-canvas-wrap`,children:[(0,$.jsx)(h_,{type:e,distance:r,pulse:a}),(0,$.jsx)(`div`,{style:{position:`absolute`,bottom:`8px`,right:`8px`,fontSize:`0.65rem`,color:`rgba(180,185,210,0.3)`,fontStyle:`italic`,pointerEvents:`none`},children:`انقر للرمي →`})]}),(0,$.jsx)(`div`,{className:`obj-actions`,children:n.actions.map(e=>(0,$.jsxs)(`button`,{className:`action-btn`,onClick:()=>d(e),title:e.label,style:{"--btn-color":n.color,"--btn-glow":n.bgGlow},children:[(0,$.jsx)(`span`,{className:`action-icon`,children:e.icon}),(0,$.jsx)(`span`,{className:`action-label`,children:e.label})]},e.label))})]})}function __(){let[e,t]=(0,x.useState)([{id:0,text:`🌌 مرحباً! اسحب الأشياء بإصبعك أو استخدم المنزلقات`,time:``}]),n=(0,x.useCallback)(e=>{let n=new Date,r=`${n.getHours()}:${String(n.getMinutes()).padStart(2,`0`)} م`;t(t=>[{id:Date.now(),text:e,time:r},...t].slice(0,20))},[]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0;
          padding: 0;
          border: none !important;
          outline: none !important;
          width: 100%;
          min-height: 100vh;
          display: block;
          background: #05070f !important;
        }

        .bh-root {
          min-height: 100vh;
          min-width: 100vw;
          background: #05070f;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          padding: 0;
          margin: 0;
          position: relative;
          overflow-x: hidden;
          width: 100%;
        }

        .bh-bg-glow {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .bh-bg-1 {
          width: 600px; height: 600px; top: -150px; right: -120px;
          background: radial-gradient(circle, rgba(212,175,55,.06) 0%, transparent 65%);
        }
        .bh-bg-2 {
          width: 500px; height: 500px; bottom: 0; left: -80px;
          background: radial-gradient(circle, rgba(168,85,247,.07) 0%, transparent 65%);
        }
        .bh-bg-3 {
          width: 400px; height: 400px; top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(0,229,212,.05) 0%, transparent 65%);
        }
        .bh-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(212,175,55,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,.02) 1px, transparent 1px);
          background-size: 68px 68px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 15%, transparent 100%);
        }

        .bh-content { 
          position: relative; 
          z-index: 1; 
          max-width: 1340px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .bh-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding-top: 1rem;
          margin: 0;
        }
        .bh-page-eyebrow {
          display: inline-flex; align-items: center; gap: .45rem;
          background: rgba(212,175,55,.07); border: 1px solid rgba(212,175,55,.18);
          padding: .28rem .85rem; border-radius: 50px;
          font-size: .68rem; font-weight: 700; color: #d4af37;
          letter-spacing: .14em; text-transform: uppercase; margin-bottom: 1rem;
        }
        .bh-page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800; color: #e8eaf5;
          letter-spacing: -.02em; line-height: 1.1;
          margin-bottom: .55rem;
        }
        .bh-page-title span { color: #d4af37; }
        .bh-page-sub {
          font-size: .85rem; color: rgba(180,185,210,.45);
          font-weight: 300; letter-spacing: .03em;
        }

        .bh-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .obj-card {
          background: rgba(10,13,28,.82);
          border: 1px solid var(--bd);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(0,0,0,.4);
          transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s;
        }
        .obj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px var(--bd), 0 0 40px var(--glow);
        }

        .obj-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: .85rem 1.1rem;
        }
        .obj-title {
          font-size: 1.05rem; font-weight: 700;
          color: var(--accent);
          letter-spacing: -.01em;
        }
        .obj-icon-badge {
          font-size: 1.2rem;
          filter: drop-shadow(0 0 6px var(--accent));
        }

        .obj-slider-row {
          display: flex; align-items: center; gap: .6rem;
          padding: .6rem 1.1rem .4rem;
        }
        .slider-label {
          font-size: .65rem; font-weight: 700;
          color: rgba(180,185,210,.4);
          letter-spacing: .06em; white-space: nowrap;
        }
        .slider-wrap {
          flex: 1; position: relative; height: 6px;
          background: rgba(100,100,120,.15); border-radius: 3px;
        }
        .slider-fill {
          position: absolute; top: 0; right: 0;
          height: 100%; border-radius: 3px;
          pointer-events: none; transition: width .05s;
        }
        .slider-input {
          position: absolute; inset: -5px 0;
          width: 100%; opacity: 0; cursor: pointer;
          height: 16px;
        }

        .obj-stats {
          padding: .4rem 1.1rem .6rem;
          display: flex; flex-direction: column; gap: .35rem;
        }
        .obj-stat {
          display: flex; align-items: center;
          justify-content: space-between;
          font-size: .72rem; font-weight: 600;
          color: rgba(180,185,210,.55);
        }
        .stat-val {
          font-size: .85rem; font-weight: 700;
          font-family: 'Syne', monospace;
        }
        .stat-bar-wrap {
          display: flex; height: 3px; border-radius: 2px; overflow: hidden; gap: 1px;
        }
        .stat-bar { height: 100%; border-radius: 2px; transition: width .1s; }

        .obj-canvas-wrap {
          flex: 1; min-height: 220px;
          margin: 0 .8rem .8rem;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(0,0,0,.5);
          position: relative;
        }

        .obj-actions {
          display: flex; justify-content: center;
          gap: .55rem;
          padding: 0 .8rem 1rem;
        }
        .action-btn {
          display: flex; flex-direction: column;
          align-items: center; gap: .2rem;
          background: rgba(255,255,255,.05);
          border: none;
          border-radius: 12px;
          padding: .5rem .65rem;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all .22s ease;
          flex: 1;
        }
        .action-btn:hover {
          background: var(--btn-glow);
          border-color: var(--btn-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--btn-glow);
        }
        .action-btn:active { transform: translateY(0) scale(.96); }
        .action-icon { font-size: 1.1rem; line-height: 1; }
        .action-label {
          font-size: .58rem; font-weight: 700;
          color: rgba(180,185,210,.55);
          letter-spacing: .04em;
          white-space: nowrap;
        }
        .action-btn:hover .action-label { color: var(--btn-color); }

        .bh-log {
          background: rgba(10,13,28,.85);
          border: 1px solid rgba(212,175,55,.13);
          border-radius: 18px;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }
        .bh-log-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: .85rem 1.2rem;
          background: rgba(212,175,55,.05);
        }
        .bh-log-title {
          font-size: .88rem; font-weight: 700; color: #d4af37;
          display: flex; align-items: center; gap: .45rem;
        }
        .bh-log-clear {
          background: transparent;
          border: 1px solid rgba(212,175,55,.2);
          border-radius: 7px;
          color: rgba(180,185,210,.5);
          font-family: 'Cairo', sans-serif;
          font-size: .72rem; font-weight: 600;
          padding: .28rem .75rem;
          cursor: pointer;
          transition: all .2s;
        }
        .bh-log-clear:hover { border-color: rgba(239,68,68,.4); color: #f87171; }
        .bh-log-body {
          padding: .8rem 1.2rem;
          max-height: 200px;
          overflow-y: auto;
          display: flex; flex-direction: column; gap: .4rem;
        }
        .bh-log-body::-webkit-scrollbar { width: 4px; }
        .bh-log-body::-webkit-scrollbar-thumb { background: rgba(212,175,55,.2); border-radius: 2px; }
        .log-entry {
          display: flex; align-items: baseline;
          justify-content: space-between; gap: .75rem;
          padding: .38rem .6rem;
          border-radius: 8px;
          background: transparent;
          font-size: .76rem;
          animation: log-in .25s cubic-bezier(.16,1,.3,1);
        }
        @keyframes log-in {
          from { opacity:0; transform: translateX(8px); }
          to   { opacity:1; transform: translateX(0); }
        }
        .log-text { color: rgba(200,205,225,.75); font-weight: 400; flex: 1; }
        .log-time {
          font-size: .65rem; color: rgba(180,185,210,.3);
          font-weight: 300; white-space: nowrap; font-family: monospace;
        }
        .log-entry:first-child { background: rgba(212,175,55,.05); }
        .log-entry:first-child .log-text { color: rgba(212,175,55,.85); }

        @media (max-width: 900px) {
          .bh-grid-cards { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .bh-root { padding: 1.5rem .9rem 3rem; }
          .obj-actions { gap: .35rem; }
          .action-btn { padding: .45rem .45rem; }
          .action-label { display: none; }
        }
      `}),(0,$.jsxs)(`div`,{className:`bh-root`,children:[(0,$.jsx)(`div`,{className:`bh-bg-glow bh-bg-1`}),(0,$.jsx)(`div`,{className:`bh-bg-glow bh-bg-2`}),(0,$.jsx)(`div`,{className:`bh-bg-glow bh-bg-3`}),(0,$.jsx)(`div`,{className:`bh-grid`}),(0,$.jsxs)(`div`,{className:`bh-content`,children:[(0,$.jsxs)(`div`,{className:`bh-page-header`,children:[(0,$.jsx)(`div`,{className:`bh-page-eyebrow`,children:`◉ محاكاة تفاعلية`}),(0,$.jsxs)(`h1`,{className:`bh-page-title`,children:[`الثقوب `,(0,$.jsx)(`span`,{children:`السوداء`})]}),(0,$.jsx)(`p`,{className:`bh-page-sub`,children:`اسحب بإصبعك · تمدد زمن · ازاحة · أشياء عشوائية`})]}),(0,$.jsxs)(`div`,{className:`bh-grid-cards`,children:[(0,$.jsx)(g_,{typeKey:`white`,onLog:n}),(0,$.jsx)(g_,{typeKey:`neutron`,onLog:n}),(0,$.jsx)(g_,{typeKey:`black`,onLog:n})]}),(0,$.jsxs)(`div`,{className:`bh-log`,children:[(0,$.jsxs)(`div`,{className:`bh-log-header`,children:[(0,$.jsx)(`span`,{className:`bh-log-title`,children:`📋 سجل الأحداث`}),(0,$.jsx)(`button`,{className:`bh-log-clear`,onClick:()=>t([]),children:`مسح`})]}),(0,$.jsxs)(`div`,{className:`bh-log-body`,children:[e.length===0&&(0,$.jsx)(`span`,{style:{fontSize:`.76rem`,color:`rgba(180,185,210,.3)`,padding:`.3rem .6rem`},children:`لا توجد أحداث بعد...`}),e.map(e=>(0,$.jsxs)(`div`,{className:`log-entry`,children:[(0,$.jsx)(`span`,{className:`log-text`,children:e.text}),e.time&&(0,$.jsx)(`span`,{className:`log-time`,children:e.time})]},e.id))]})]})]})]})]})}var v_=[{label:`قمر صغير`,value:12},{label:`كوكب صخري`,value:28},{label:`نجم قزم`,value:54},{label:`نجم نيوتروني`,value:82},{label:`ثقب أسود حاد`,value:100}];function y_(e){return e>=90?`ثقب أسود حاد`:e>=70?`نجم نيوتروني`:e>=45?`نجم كثيف`:e>=20?`كوكب/نجم صغير`:`جسم خفيف`}function b_(e){return e>=90?`انحناء قوي - الزمن يتمدد بشكل حاد`:e>=70?`انحناء شديد جدا`:e>=45?`انحناء واضح حول مركز الكتلة`:e>=20?`انحناء متوسط وسلس`:`انحناء خفيف`}function x_({mass:e,dragging:t,onPointerChange:n}){let r=(0,x.useRef)(null),i=(0,x.useRef)({x:.24,y:.5,active:!1}),a=(0,x.useRef)(Math.PI*.9),o=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=r.current;if(!t)return;let s=t.getContext(`2d`),c=window.devicePixelRatio||1,l=()=>{let e=t.getBoundingClientRect();t.width=e.width*c,t.height=e.height*c,s.setTransform(c,0,0,c,0,0)};l(),window.addEventListener(`resize`,l);let u=()=>{let n=t.clientWidth,r=t.clientHeight,c=n/2,l=r/2,d=e/100,f=18+d*118,p=70+(1-d)*90;s.clearRect(0,0,n,r);let m=s.createLinearGradient(0,0,n,r);m.addColorStop(0,`rgba(8,10,24,0.98)`),m.addColorStop(1,`rgba(11,13,30,0.98)`),s.fillStyle=m,s.fillRect(0,0,n,r),s.save(),s.beginPath(),s.roundRect(1,1,n-2,r-2,18),s.clip();let h=s.createRadialGradient(c,l,0,c,l,180);h.addColorStop(0,`rgba(166,91,255,${.44+d*.18})`),h.addColorStop(.35,`rgba(135,70,255,0.18)`),h.addColorStop(1,`rgba(135,70,255,0)`),s.fillStyle=h,s.fillRect(0,0,n,r),s.strokeStyle=`rgba(137,88,255,0.34)`,s.lineWidth=1;for(let e=0;e<13;e+=1){let t=e/12*r;s.beginPath();for(let e=0;e<=120;e+=1){let r=e/120*n,i=r-c,a=t-l,o=Math.sqrt(i*i+a*a)+22,u=f*110/(o+55)*Math.exp((-Math.abs(i)/(n*.52))**1.8),d=t+(a>=0?1:-1)*u;e===0?s.moveTo(r,d):s.lineTo(r,d)}s.stroke()}for(let e=0;e<19;e+=1){let t=e/18*n;s.beginPath();for(let e=0;e<=90;e+=1){let n=e/90*r,i=t-c,a=n-l,o=Math.sqrt(i*i+a*a)+26,u=f*48/(o+40),d=t-Math.sign(i||1)*u*Math.exp((Math.abs(a)/(r*.7))**2);e===0?s.moveTo(d,n):s.lineTo(d,n)}s.stroke()}a.current+=.012-d*.0045;let g=i.current,_=g.active?g.x*n:c-Math.cos(a.current)*p,v=g.active?g.y*r:l+Math.sin(a.current*1.2)*(40+(1-d)*42),y=_-c,b=v-l,x=Math.sqrt(y*y+b*b)+1,ee=Math.max(42,p+8-d*18),S=Math.min(x,ee)/x,C=c+y*S,w=l+b*S;s.beginPath(),s.moveTo(C,w),s.quadraticCurveTo((C+c)/2,w-24-d*34,c,l),s.strokeStyle=`rgba(255, 198, 53, 0.25)`,s.lineWidth=1.5,s.stroke(),s.beginPath(),s.arc(C,w,5.2,0,Math.PI*2),s.fillStyle=`#ffc83a`,s.shadowColor=`rgba(255, 200, 58, 0.95)`,s.shadowBlur=20,s.fill(),s.shadowBlur=0;let te=28+d*22,ne=s.createRadialGradient(c,l,0,c,l,78+d*24);ne.addColorStop(0,`rgba(231,217,255,0.98)`),ne.addColorStop(.14,`rgba(204,169,255,0.95)`),ne.addColorStop(.4,`rgba(154,92,255,0.68)`),ne.addColorStop(1,`rgba(140,76,255,0)`),s.fillStyle=ne,s.beginPath(),s.arc(c,l,80+d*22,0,Math.PI*2),s.fill();for(let e=0;e<3;e+=1){s.beginPath();let t=te+26+e*28+Math.sin(a.current*3+e)*2;s.strokeStyle=`rgba(145, 92, 255, ${.42-e*.1})`,s.lineWidth=1.1,s.arc(c,l,t,0,Math.PI*2),s.stroke()}s.strokeStyle=`rgba(140, 92, 255, 0.5)`,s.lineWidth=1.1,s.beginPath(),s.moveTo(c,0),s.lineTo(c,r),s.stroke(),s.fillStyle=`rgba(167, 140, 255, 0.42)`,s.font=`11px Cairo, sans-serif`,s.textAlign=`right`,s.fillText(`محاكاة غشاء الزمكان`,n-16,r-14),s.restore(),s.strokeStyle=`rgba(120, 88, 255, 0.24)`,s.lineWidth=1,s.beginPath(),s.roundRect(1,1,n-2,r-2,18),s.stroke(),o.current=requestAnimationFrame(u)};o.current=requestAnimationFrame(u);let d=(e,r)=>{let a=t.getBoundingClientRect();i.current={x:Math.max(0,Math.min(1,(e-a.left)/a.width)),y:Math.max(0,Math.min(1,(r-a.top)/a.height)),active:!0},n(!0)},f=e=>d(e.clientX,e.clientY),p=e=>{let t=e.touches[0];t&&d(t.clientX,t.clientY)},m=()=>{i.current.active=!1,n(!1)};return t.addEventListener(`mousemove`,f),t.addEventListener(`touchstart`,p,{passive:!0}),t.addEventListener(`touchmove`,p,{passive:!0}),t.addEventListener(`mouseleave`,m),t.addEventListener(`touchend`,m),()=>{cancelAnimationFrame(o.current),window.removeEventListener(`resize`,l),t.removeEventListener(`mousemove`,f),t.removeEventListener(`touchstart`,p),t.removeEventListener(`touchmove`,p),t.removeEventListener(`mouseleave`,m),t.removeEventListener(`touchend`,m)}},[e,t,n]),(0,$.jsx)(`canvas`,{ref:r,className:`spacetime-canvas`})}function S_({value:e,label:t,sublabel:n,hint:r,accent:i=`purple`}){return(0,$.jsx)(`div`,{className:`metric-card metric-${i}`,children:(0,$.jsxs)(`div`,{className:`metric-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`metric-value`,children:e}),(0,$.jsx)(`div`,{className:`metric-chip`,children:r})]}),(0,$.jsxs)(`div`,{className:`metric-copy`,children:[(0,$.jsx)(`h3`,{children:t}),(0,$.jsx)(`p`,{children:n})]})]})})}function C_(){let[e,t]=(0,x.useState)(100),[n,r]=(0,x.useState)(!1),i=(0,x.useMemo)(()=>{let t=e/100,n=Math.round(t*100),r=Math.round(25+t*155);return{massLabel:y_(e),curveLevel:n,spacetimeFactor:r,hint:b_(e)}},[e]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #070913 !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #070913 !important;
          overflow-x: hidden !important;
        }

        .spacetime-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at top right, rgba(106, 54, 255, 0.16), transparent 28%),
            radial-gradient(circle at 20% 70%, rgba(88, 32, 180, 0.12), transparent 24%),
            #070913;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          overflow-x: hidden;
          color: #ebe8ff;
        }

        .spacetime-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(136, 96, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(136, 96, 255, 0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }

        .spacetime-shell {
          max-width: 980px;
          margin: 0 auto;
          padding: 5.5rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .spacetime-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .spacetime-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          background: rgba(135, 92, 255, 0.08);
          border: 1px solid rgba(135, 92, 255, 0.22);
          color: #b898ff;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .spacetime-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.35rem);
          line-height: 1.06;
          font-weight: 900;
          color: #f1eeff;
        }

        .spacetime-title span {
          color: #a875ff;
        }

        .spacetime-subtitle {
          font-family: 'Syne', sans-serif;
          margin-top: 0.45rem;
          color: rgba(205, 197, 255, 0.46);
          letter-spacing: 0.12em;
          font-size: 0.82rem;
          text-transform: uppercase;
        }

        .spacetime-lead {
          max-width: 720px;
          margin: 1rem auto 0;
          color: rgba(208, 202, 235, 0.58);
          line-height: 1.95;
          font-size: 0.96rem;
        }

        .visual-card,
        .facts-card,
        .metric-card,
        .control-card {
          background: rgba(9, 12, 28, 0.88);
          border: 1px solid rgba(125, 96, 255, 0.13);
          border-radius: 20px;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
        }

        .visual-card {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .spacetime-canvas {
          width: 100%;
          height: 370px;
          display: block;
          border-radius: 18px;
          cursor: crosshair;
        }

        .facts-card {
          padding: 1rem 1.2rem;
          margin-bottom: 1.2rem;
        }

        .fact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(221, 215, 247, 0.78);
          line-height: 1.8;
          font-size: 0.92rem;
        }

        .fact-item + .fact-item {
          margin-top: 0.5rem;
        }

        .fact-dot {
          width: 8px;
          height: 8px;
          margin-top: 0.7rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #d9b8ff, #7f4dff);
          box-shadow: 0 0 14px rgba(151, 102, 255, 0.75);
          flex-shrink: 0;
        }

        .metrics-grid {
          display: grid;
          gap: 1rem;
        }

        .metric-card {
          padding: 1.15rem 1.2rem 1.2rem;
        }

        .metric-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .metric-copy {
          text-align: right;
        }

        .metric-copy h3 {
          margin: 0;
          font-size: 1.08rem;
          color: #ded7ff;
          font-weight: 800;
        }

        .metric-copy p {
          margin: 0.12rem 0 0;
          color: rgba(186, 177, 227, 0.38);
          font-size: 0.78rem;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
        }

        .metric-value {
          color: #ab7dff;
          font-size: clamp(1.9rem, 5vw, 2.6rem);
          line-height: 1;
          font-weight: 900;
          font-family: 'Syne', sans-serif;
        }

        .metric-chip {
          display: inline-flex;
          margin-top: 0.5rem;
          padding: 0.28rem 0.72rem;
          border-radius: 999px;
          background: rgba(135, 92, 255, 0.08);
          color: #c5b1ff;
          border: 1px solid rgba(135, 92, 255, 0.18);
          font-size: 0.76rem;
          font-weight: 700;
        }

        .control-card {
          margin-top: 1rem;
          padding: 1.15rem 1.2rem 1.25rem;
        }

        .control-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.85rem;
        }

        .control-head h3 {
          margin: 0;
          font-size: 1.08rem;
          color: #e9e4ff;
        }

        .control-head p {
          margin: 0.12rem 0 0;
          color: rgba(191, 183, 229, 0.45);
          font-size: 0.82rem;
        }

        .pointer-chip {
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(135, 92, 255, 0.18);
          background: rgba(135, 92, 255, 0.07);
          color: ${n?`#f7c94d`:`#bda8ff`};
          font-size: 0.74rem;
          font-weight: 700;
          box-shadow: ${n?`0 0 24px rgba(247, 201, 77, 0.12)`:`none`};
        }

        .slider-group {
          margin-top: 0.8rem;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: ${e}%;
          background: linear-gradient(90deg, #6f35ff, #a46aff 60%, #d4b3ff);
          box-shadow: 0 0 24px rgba(142, 92, 255, 0.34);
          border-radius: 999px;
          pointer-events: none;
        }

        .slider-input {
          position: absolute;
          inset: -8px 0;
          width: 100%;
          opacity: 0;
          cursor: pointer;
          direction: ltr;
        }

        .slider-scale {
          display: flex;
          justify-content: space-between;
          margin-top: 0.38rem;
          color: rgba(188, 180, 225, 0.35);
          font-size: 0.72rem;
        }

        .preset-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .preset-btn {
          border: 1px solid rgba(135, 92, 255, 0.16);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(225, 218, 255, 0.82);
          border-radius: 999px;
          padding: 0.45rem 0.85rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          border-color: rgba(160, 118, 255, 0.32);
          color: #fff;
          background: rgba(135, 92, 255, 0.08);
        }

        .preset-btn.active {
          color: #0d0b16;
          background: linear-gradient(135deg, #d3b4ff, #8e59ff);
          border-color: transparent;
          box-shadow: 0 10px 26px rgba(132, 86, 255, 0.22);
        }

        .canvas-help {
          margin-top: 0.8rem;
          color: rgba(201, 194, 233, 0.52);
          font-size: 0.82rem;
          line-height: 1.8;
        }

        @media (max-width: 720px) {
          .spacetime-shell {
            padding-top: 4.8rem;
            padding-inline: 1rem;
          }

          .spacetime-canvas {
            height: 280px;
          }

          .metric-head,
          .control-head {
            flex-direction: column;
            align-items: flex-start;
          }

          .metric-copy {
            text-align: right;
            width: 100%;
          }
        }
      `}),(0,$.jsx)(`div`,{className:`spacetime-root`,children:(0,$.jsxs)(`div`,{className:`spacetime-shell`,children:[(0,$.jsxs)(`header`,{className:`spacetime-header`,children:[(0,$.jsx)(`div`,{className:`spacetime-pill`,children:`◉ محاكاة تفاعلية`}),(0,$.jsxs)(`h1`,{className:`spacetime-title`,children:[`انحناء `,(0,$.jsx)(`span`,{children:`غشاء الزمكان`})]}),(0,$.jsx)(`div`,{className:`spacetime-subtitle`,children:`SPACETIME CURVATURE`}),(0,$.jsx)(`p`,{className:`spacetime-lead`,children:`انحناء الزمكان من الأساس في النسبية العامة حيث تشوّه الكتلة والطاقة نسيج الفضاء-الزمن، وهنا يمكنك تتبع أثر الجاذبية على حركة الجسم القريب من البئر الجذبي.`})]}),(0,$.jsx)(`section`,{className:`visual-card`,children:(0,$.jsx)(x_,{mass:e,dragging:n,onPointerChange:r})}),(0,$.jsxs)(`section`,{className:`facts-card`,children:[(0,$.jsxs)(`div`,{className:`fact-item`,children:[(0,$.jsx)(`span`,{className:`fact-dot`}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`النسبية العامة:`}),` الكتلة تثني الفضاء كما تثني قوة اليد سطحًا مرنًا، والأجسام تتبع هذا الانحناء.`]})]}),(0,$.jsxs)(`div`,{className:`fact-item`,children:[(0,$.jsx)(`span`,{className:`fact-dot`}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`التأثير:`}),` كلما اقترب الجسم من المركز زاد انحراف مساره وتسارع سقوطه نحو البئر الجذبي.`]})]})]}),(0,$.jsxs)(`section`,{className:`metrics-grid`,children:[(0,$.jsx)(S_,{value:e,label:`الكتلة والتشويه`,sublabel:`Mass and Distortion`,hint:i.massLabel}),(0,$.jsx)(S_,{value:`${i.curveLevel}%`,label:`مستوى الانحناء`,sublabel:`Curvature Level`,hint:i.hint}),(0,$.jsx)(S_,{value:`${i.spacetimeFactor}%`,label:`معامل انحناء الزمكان`,sublabel:`Spacetime Curvature Factor`,hint:e>=90?`أفق الحدث قريب`:`زمن محلي يتمدد تدريجيًا`})]}),(0,$.jsxs)(`section`,{className:`control-card`,children:[(0,$.jsxs)(`div`,{className:`control-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`تحكم بالكتلة المركزية`}),(0,$.jsx)(`p`,{children:`غيّر شدة الكتلة أو حرّك المؤشر فوق الرسم لرؤية تغير المسار بشكل فوري.`})]}),(0,$.jsx)(`div`,{className:`pointer-chip`,children:n?`المسبار يتبع المؤشر الآن`:`حرّك المؤشر داخل الرسم`})]}),(0,$.jsxs)(`div`,{className:`slider-group`,children:[(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`}),(0,$.jsx)(`input`,{className:`slider-input`,type:`range`,min:`0`,max:`100`,value:e,onChange:e=>t(Number(e.target.value))})]}),(0,$.jsxs)(`div`,{className:`slider-scale`,children:[(0,$.jsx)(`span`,{children:`0 مجال شبه مسطّح`}),(0,$.jsx)(`span`,{children:`100 تشوّه حاد`})]})]}),(0,$.jsx)(`div`,{className:`preset-row`,children:v_.map(n=>(0,$.jsx)(`button`,{type:`button`,className:`preset-btn${e===n.value?` active`:``}`,onClick:()=>t(n.value),children:n.label},n.label))}),(0,$.jsx)(`div`,{className:`canvas-help`,children:`الفكرة هنا بصرية تعليمية: الشبكة تتمدد نحو المركز مع زيادة الكتلة، والنقطة الصفراء تمثل جسمًا قريبًا يتأثر بالانحناء ويتغير مساره عند تحريكك للمؤشر.`})]})]})})]})}var w_=[{id:`mercury`,name:`عطارد`,en:`Mercury`,color:`#b7a488`,orbit:58,size:4.5,speed:4.15,day:`88 يوم`,year:`88 يوم`,fact:`أقرب الكواكب إلى الشمس وأسرعها دورانًا حولها.`},{id:`venus`,name:`الزهرة`,en:`Venus`,color:`#d8a46a`,orbit:108,size:7.5,speed:1.62,day:`243 يوم`,year:`225 يوم`,fact:`أشد الكواكب حرارة بسبب غلافه الجوي الكثيف.`},{id:`earth`,name:`الأرض`,en:`Earth`,color:`#3c82ff`,orbit:150,size:7.9,speed:1,day:`24 ساعة`,year:`365 يوم`,fact:`الكوكب الوحيد المعروف بوجود حياة ومحيطات سائلة على سطحه.`},{id:`mars`,name:`المريخ`,en:`Mars`,color:`#d95f4c`,orbit:228,size:6.1,speed:.53,day:`24.6 ساعة`,year:`687 يوم`,fact:`يتميز بلونه الأحمر نتيجة أكاسيد الحديد على سطحه.`},{id:`jupiter`,name:`المشتري`,en:`Jupiter`,color:`#d6a13f`,orbit:778,size:18,speed:.084,day:`10 ساعات`,year:`11.86 سنة`,fact:`أكبر كواكب النظام الشمسي ويملك عاصفة هائلة تسمى البقعة الحمراء الكبرى.`},{id:`saturn`,name:`زحل`,en:`Saturn`,color:`#e4c07d`,orbit:1433,size:15.5,speed:.034,day:`10.7 ساعة`,year:`29.4 سنة`,fact:`يشتهر بحلقاته الواسعة المكوّنة من الجليد والصخور.`},{id:`uranus`,name:`أورانوس`,en:`Uranus`,color:`#7dd8e7`,orbit:2872,size:11,speed:.012,day:`17 ساعة`,year:`84 سنة`,fact:`يميل على جانبه تقريبًا، لذلك يبدو كأنه يدور وهو متمدّد.`},{id:`neptune`,name:`نبتون`,en:`Neptune`,color:`#517cff`,orbit:4495,size:10.8,speed:.006,day:`16 ساعة`,year:`165 سنة`,fact:`أبعد كوكب رئيسي، ويتميز برياح من الأسرع في النظام الشمسي.`}];function T_({speed:e,selectedPlanet:t,onSelectPlanet:n}){let r=(0,x.useRef)(null),i=(0,x.useRef)(null),a=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let o=r.current;if(!o)return;let s=o.getContext(`2d`),c=window.devicePixelRatio||1,l=0,u=[],d=()=>{let e=o.getBoundingClientRect();o.width=e.width*c,o.height=e.height*c,s.setTransform(c,0,0,c,0,0)},f=(e,t)=>54+Math.sqrt(e.orbit/w_[w_.length-1].orbit)*t,p=()=>{let n=o.clientWidth,r=o.clientHeight,c=n/2,d=r/2+18,m=Math.min(n*.42,390),h=.34;s.clearRect(0,0,n,r);let g=s.createLinearGradient(0,0,n,r);g.addColorStop(0,`rgba(11,14,31,0.98)`),g.addColorStop(1,`rgba(10,13,27,0.98)`),s.fillStyle=g,s.fillRect(0,0,n,r);for(let e=0;e<100;e+=1){let t=e*97.13%n,i=e*53.71%r,a=.06+e%6*.03;s.beginPath(),s.arc(t,i,e%3+.6,0,Math.PI*2),s.fillStyle=`rgba(255,255,255,${a})`,s.fill()}let _=s.createRadialGradient(c,d,0,c,d,90);_.addColorStop(0,`rgba(255,242,150,0.95)`),_.addColorStop(.28,`rgba(255,212,90,0.7)`),_.addColorStop(1,`rgba(255,200,70,0)`),s.fillStyle=_,s.beginPath(),s.arc(c,d,90,0,Math.PI*2),s.fill(),s.strokeStyle=`rgba(121, 130, 175, 0.19)`,s.lineWidth=1,w_.forEach(e=>{let t=f(e,m);s.beginPath(),s.ellipse(c,d,t,t*h,0,0,Math.PI*2),s.stroke()}),s.beginPath(),s.arc(c,d,33,0,Math.PI*2),s.fillStyle=`#f6e972`,s.shadowColor=`rgba(255, 224, 95, 0.6)`,s.shadowBlur=32,s.fill(),s.shadowBlur=0,u=[],l+=.0038*e,w_.forEach((e,n)=>{let r=f(e,m),i=r*h,o=l*e.speed+n*.85,p=c+Math.cos(o)*r,g=d+Math.sin(o)*i,_=t===e.id,v=e.size+(_?2.5:0);e.id===`saturn`&&(s.save(),s.translate(p,g),s.rotate(-.22),s.beginPath(),s.ellipse(0,0,v+9,v+3.2,0,0,Math.PI*2),s.strokeStyle=`rgba(226, 196, 138, 0.8)`,s.lineWidth=2.1,s.stroke(),s.restore()),s.beginPath(),s.arc(p,g,v+12,0,Math.PI*2),s.fillStyle=_?`rgba(168,117,255,0.17)`:`rgba(255,255,255,0.02)`,s.fill(),s.beginPath(),s.arc(p,g,v,0,Math.PI*2),s.fillStyle=e.color,s.shadowColor=_?`rgba(168,117,255,0.7)`:`${e.color}99`,s.shadowBlur=_?20:8,s.fill(),s.shadowBlur=0,(_||a.current===e.id)&&(s.fillStyle=`rgba(230,225,255,0.82)`,s.font=`12px Cairo, sans-serif`,s.textAlign=`center`,s.fillText(e.name,p,g-v-16)),u.push({id:e.id,x:p,y:g,radius:v+8})}),s.fillStyle=`rgba(176, 184, 215, 0.38)`,s.font=`12px Cairo, sans-serif`,s.textAlign=`right`,s.fillText(`محاكاة مدارات كوكبية`,n-16,r-18),i.current=requestAnimationFrame(p)};d(),window.addEventListener(`resize`,d),i.current=requestAnimationFrame(p);let m=(e,t)=>{let n=o.getBoundingClientRect(),r=e-n.left,i=t-n.top;return u.find(e=>{let t=r-e.x,n=i-e.y;return Math.sqrt(t*t+n*n)<=e.radius})},h=e=>{let t=m(e.clientX,e.clientY);a.current=t?.id||null,o.style.cursor=t?`pointer`:`crosshair`},g=()=>{a.current=null,o.style.cursor=`crosshair`},_=e=>{let t=m(e.clientX,e.clientY);t&&n(t.id)};return o.addEventListener(`mousemove`,h),o.addEventListener(`mouseleave`,g),o.addEventListener(`click`,_),()=>{cancelAnimationFrame(i.current),window.removeEventListener(`resize`,d),o.removeEventListener(`mousemove`,h),o.removeEventListener(`mouseleave`,g),o.removeEventListener(`click`,_)}},[e,t,n]),(0,$.jsx)(`canvas`,{ref:r,className:`solar-canvas`})}function E_(){let[e,t]=(0,x.useState)(50),[n,r]=(0,x.useState)(`earth`),i=(0,x.useMemo)(()=>w_.find(e=>e.id===n)||w_[2],[n]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        .solar-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 80% 15%, rgba(217, 175, 55, 0.1), transparent 18%),
            radial-gradient(circle at 18% 72%, rgba(57, 103, 255, 0.08), transparent 22%),
            #05070f;
          color: #f4f0dc;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
          position: relative;
        }

        .solar-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 38%, transparent 100%);
        }

        .solar-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 5.4rem 1.5rem 4rem;
        }

        .solar-header { text-align: center; margin-bottom: 1.8rem; }
        .solar-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .solar-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.3rem);
          line-height: 1.08;
          font-weight: 900;
          color: #f7f2df;
        }

        .solar-title span { color: #d4af37; }

        .solar-subtitle {
          margin-top: 0.45rem;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: rgba(208, 199, 163, 0.48);
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }

        .solar-lead {
          max-width: 760px;
          margin: 1rem auto 0;
          font-size: 0.96rem;
          line-height: 1.9;
          color: rgba(216, 213, 196, 0.58);
        }

        .solar-visual, .solar-info, .solar-control, .solar-planet-card {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.12);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          backdrop-filter: blur(18px);
        }

        .solar-visual { padding: 1rem; margin-bottom: 1rem; }
        .solar-canvas {
          width: 100%;
          height: 540px;
          display: block;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(16,20,40,0.98), rgba(11,14,29,0.98));
        }

        .solar-info { padding: 1rem 1.2rem; margin-bottom: 1rem; }
        .solar-info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.9;
          color: rgba(223, 218, 196, 0.77);
          font-size: 0.92rem;
        }

        .solar-info-row + .solar-info-row { margin-top: 0.4rem; }

        .solar-dot {
          width: 8px;
          height: 8px;
          margin-top: 0.8rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffe17b, #d4af37);
          box-shadow: 0 0 14px rgba(212, 175, 55, 0.7);
          flex-shrink: 0;
        }

        .solar-bottom {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
          align-items: start;
        }

        .solar-control, .solar-planet-card { padding: 1.2rem; }

        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .section-head h3 { margin: 0; color: #f1ebd6; font-size: 1.08rem; }
        .section-head p { margin: 0.12rem 0 0; color: rgba(194, 189, 167, 0.42); font-size: 0.82rem; }

        .speed-chip {
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.18);
          color: #d4af37;
          font-size: 0.76rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
          margin-bottom: 0.35rem;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: ${e}%;
          background: linear-gradient(90deg, #9b6b14, #d4af37, #f7de7e);
          box-shadow: 0 0 22px rgba(212, 175, 55, 0.28);
          border-radius: 999px;
        }

        .slider-input {
          position: absolute;
          inset: -8px 0;
          width: 100%;
          opacity: 0;
          cursor: pointer;
          direction: ltr;
        }

        .slider-scale {
          display: flex;
          justify-content: space-between;
          color: rgba(188, 183, 160, 0.35);
          font-size: 0.72rem;
        }

        .planet-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .planet-pill {
          border: 1px solid rgba(212, 175, 55, 0.16);
          background: rgba(255,255,255,0.03);
          color: rgba(235, 229, 202, 0.84);
          border-radius: 999px;
          padding: 0.45rem 0.8rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .planet-pill:hover { background: rgba(212, 175, 55, 0.08); color: #fff5cf; }
        .planet-pill.active {
          background: linear-gradient(135deg, #f2d36a, #c99a17);
          color: #181308;
          border-color: transparent;
          box-shadow: 0 10px 24px rgba(212, 175, 55, 0.22);
        }

        .solar-help {
          margin-top: 0.95rem;
          font-size: 0.83rem;
          line-height: 1.8;
          color: rgba(199, 194, 171, 0.52);
        }

        .planet-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .planet-title { margin: 0; font-size: 1.35rem; color: #f5f0dd; }
        .planet-sub {
          margin-top: 0.12rem;
          color: rgba(196, 188, 156, 0.45);
          font-size: 0.8rem;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
        }

        .planet-preview {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: ${i.color};
          box-shadow: 0 0 30px ${i.color}77;
          position: relative;
          flex-shrink: 0;
        }

        .planet-preview.saturn::after {
          content: "";
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%) rotate(-16deg);
          width: 92px;
          height: 28px;
          border-radius: 50%;
          border: 3px solid rgba(238, 209, 145, 0.7);
        }

        .planet-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 0.9rem;
        }

        .planet-metric {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212, 175, 55, 0.08);
          border-radius: 16px;
          padding: 0.85rem 0.9rem;
        }

        .planet-metric span {
          display: block;
          color: rgba(186, 180, 151, 0.4);
          font-size: 0.74rem;
          margin-bottom: 0.2rem;
        }

        .planet-metric strong { color: #f5e8ba; font-size: 1rem; }
        .planet-fact { color: rgba(223, 217, 192, 0.72); line-height: 1.9; font-size: 0.9rem; }

        @media (max-width: 920px) {
          .solar-bottom { grid-template-columns: 1fr; }
          .solar-canvas { height: 420px; }
        }

        @media (max-width: 640px) {
          .solar-shell { padding-inline: 1rem; padding-top: 4.8rem; }
          .solar-canvas { height: 320px; }
          .section-head, .planet-top { flex-direction: column; align-items: flex-start; }
        }
      `}),(0,$.jsx)(`div`,{className:`solar-root`,children:(0,$.jsxs)(`div`,{className:`solar-shell`,children:[(0,$.jsxs)(`header`,{className:`solar-header`,children:[(0,$.jsx)(`div`,{className:`solar-pill`,children:`☉ محاكاة مدارية`}),(0,$.jsxs)(`h1`,{className:`solar-title`,children:[(0,$.jsx)(`span`,{children:`النظام الشمسي`}),` بدقة بصرية أعلى`]}),(0,$.jsx)(`div`,{className:`solar-subtitle`,children:`SOLAR SYSTEM SIMULATION`}),(0,$.jsx)(`p`,{className:`solar-lead`,children:`نموذج بصري تفاعلي لحركة الكواكب حول الشمس بأسلوب أقرب للواقع من النسخة السابقة، مع مدارات أوضح، أحجام منمّقة، وسرعة زمنية قابلة للتحكم دون الخروج عن لغة التصميم الداكنة للمشروع.`})]}),(0,$.jsx)(`section`,{className:`solar-visual`,children:(0,$.jsx)(T_,{speed:Math.max(e/16,.2),selectedPlanet:n,onSelectPlanet:r})}),(0,$.jsxs)(`section`,{className:`solar-info`,children:[(0,$.jsxs)(`div`,{className:`solar-info-row`,children:[(0,$.jsx)(`span`,{className:`solar-dot`}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`المدارات:`}),` تم توزيعها بصريًا باستخدام مقياس مضغوط حتى تظهر الكواكب الداخلية والخارجية في نفس المشهد بشكل مقروء.`]})]}),(0,$.jsxs)(`div`,{className:`solar-info-row`,children:[(0,$.jsx)(`span`,{className:`solar-dot`}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`التفاعل:`}),` حرّك المؤشر فوق الرسم أو اضغط على كوكب لتحديده، ثم راقب تفاصيله وسرعته المدارية مقارنة ببقية الأجرام.`]})]})]}),(0,$.jsxs)(`div`,{className:`solar-bottom`,children:[(0,$.jsxs)(`section`,{className:`solar-control`,children:[(0,$.jsxs)(`div`,{className:`section-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:`تحكم بالزمن المداري`}),(0,$.jsx)(`p`,{children:`عدّل سرعة المحاكاة أو اختر كوكبًا محددًا للتركيز عليه.`})]}),(0,$.jsxs)(`div`,{className:`speed-chip`,children:[`سرعة المحاكاة: `,e,`%`]})]}),(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`}),(0,$.jsx)(`input`,{className:`slider-input`,type:`range`,min:`0`,max:`100`,value:e,onChange:e=>t(Number(e.target.value))})]}),(0,$.jsxs)(`div`,{className:`slider-scale`,children:[(0,$.jsx)(`span`,{children:`بطيء`}),(0,$.jsx)(`span`,{children:`سريع`})]}),(0,$.jsx)(`div`,{className:`planet-pills`,children:w_.map(e=>(0,$.jsx)(`button`,{type:`button`,className:`planet-pill${n===e.id?` active`:``}`,onClick:()=>r(e.id),children:e.name},e.id))}),(0,$.jsx)(`div`,{className:`solar-help`,children:`تحسين الدقة هنا بصري وتعليمي: الكواكب الخارجية ما تزال أصغر نسبيًا من الصورة الواقعية، لكن توزيع المسافات والحركة صار أوضح وأكثر اتزانًا داخل نفس تصميم صفحاتك.`})]}),(0,$.jsxs)(`section`,{className:`solar-planet-card`,children:[(0,$.jsxs)(`div`,{className:`planet-top`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`planet-title`,children:i.name}),(0,$.jsx)(`div`,{className:`planet-sub`,children:i.en})]}),(0,$.jsx)(`div`,{className:`planet-preview${i.id===`saturn`?` saturn`:``}`})]}),(0,$.jsxs)(`div`,{className:`planet-grid`,children:[(0,$.jsxs)(`div`,{className:`planet-metric`,children:[(0,$.jsx)(`span`,{children:`زمن الدوران حول الشمس`}),(0,$.jsx)(`strong`,{children:i.year})]}),(0,$.jsxs)(`div`,{className:`planet-metric`,children:[(0,$.jsx)(`span`,{children:`طول اليوم`}),(0,$.jsx)(`strong`,{children:i.day})]}),(0,$.jsxs)(`div`,{className:`planet-metric`,children:[(0,$.jsx)(`span`,{children:`المسافة المدارية`}),(0,$.jsxs)(`strong`,{children:[i.orbit,` مليون كم`]})]}),(0,$.jsxs)(`div`,{className:`planet-metric`,children:[(0,$.jsx)(`span`,{children:`السرعة النسبية`}),(0,$.jsxs)(`strong`,{children:[i.speed.toFixed(2),`x`]})]})]}),(0,$.jsx)(`div`,{className:`planet-fact`,children:i.fact})]})]})]})})]})}var D_=[{id:`alive-calm`,label:`القط السالم`,en:`Alive / Calm`,color:`#67d96a`,icon:`🐈`},{id:`alive-alert`,label:`القط المتحفز`,en:`Alive / Alert`,color:`#1fd4ff`,icon:`👁️`},{id:`alive-curious`,label:`القط الفضولي`,en:`Alive / Curious`,color:`#7c9dff`,icon:`🌌`},{id:`dead-silent`,label:`القط الساكن`,en:`Dead / Silent`,color:`#a855f7`,icon:`🕯️`},{id:`dead-toxic`,label:`الغاز المنبعث`,en:`Toxic Release`,color:`#ff7a59`,icon:`☢️`},{id:`dead-box`,label:`الصندوق المغلق`,en:`Closed Box`,color:`#ff4f9b`,icon:`📦`}];function O_(e,t,n){let r=Math.max(.12,e/100*.68+(100-t)/100*.52-n/100*.12),i=Math.max(.12,t/100*.74+n/100*.3),a={"alive-calm":r*(.44+e/280),"alive-alert":r*(.24+n/230),"alive-curious":r*(.2+(100-t)/300),"dead-silent":i*(.34+t/260),"dead-toxic":i*(.27+t/180),"dead-box":i*(.2+n/220)},o=Object.values(a).reduce((e,t)=>e+t,0);return D_.map(e=>({...e,probability:Math.round(a[e.id]/o*100)})).map((e,t,n)=>{if(t!==n.length-1)return e;let r=100-n.reduce((e,t)=>e+t.probability,0);return{...e,probability:e.probability+r}})}function k_({collapseColor:e,measuring:t}){let n=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let e=n.current;if(!e)return;let t=t=>{let n=e.getBoundingClientRect(),r=((t.clientX-n.left)/n.width-.5)*18,i=((t.clientY-n.top)/n.height-.5)*18;e.style.setProperty(`--mx`,`${r}px`),e.style.setProperty(`--my`,`${i}px`)},r=()=>{e.style.setProperty(`--mx`,`0px`),e.style.setProperty(`--my`,`0px`)};return e.addEventListener(`mousemove`,t),e.addEventListener(`mouseleave`,r),()=>{e.removeEventListener(`mousemove`,t),e.removeEventListener(`mouseleave`,r)}},[]),(0,$.jsxs)(`div`,{ref:n,className:`quantum-orb${t?` measuring`:``}`,style:{"--collapse":e},children:[(0,$.jsx)(`div`,{className:`orb-core`}),(0,$.jsx)(`div`,{className:`orb-halo`}),(0,$.jsx)(`div`,{className:`orb-noise orb-noise-a`}),(0,$.jsx)(`div`,{className:`orb-noise orb-noise-b`}),(0,$.jsx)(`div`,{className:`orb-rings`})]})}function A_(){let[e,t]=(0,x.useState)(63),[n,r]=(0,x.useState)(38),[i,a]=(0,x.useState)(27),[o,s]=(0,x.useState)(null),[c,l]=(0,x.useState)([]),[u,d]=(0,x.useState)(!1),f=(0,x.useMemo)(()=>O_(e,n,i),[e,n,i]),p=(0,x.useMemo)(()=>f.filter(e=>e.id.startsWith(`alive`)).reduce((e,t)=>e+t.probability,0),[f]),m=(0,x.useMemo)(()=>o?{title:o.label,subtitle:`انهارت الدالة الموجية على الحالة: ${o.en}`,color:o.color}:{title:`حالة تراكب كمّي`,subtitle:`يمكن أن يكون القط حيًا أو ميتًا في الوقت نفسه حتى لحظة القياس.`,color:`#8b5cf6`},[o]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        .sch-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 50% 0%, rgba(26, 214, 255, 0.08), transparent 18%),
            radial-gradient(circle at 78% 18%, rgba(255, 74, 125, 0.09), transparent 22%),
            #05070f;
          color: #f2f0ff;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
          position: relative;
        }

        .sch-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(49, 86, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49, 86, 136, 0.03) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }

        .sch-shell {
          max-width: 1120px;
          margin: 0 auto;
          padding: 5.4rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .sch-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.95fr;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 1.15rem;
        }

        .sch-card,
        .sch-grid-card,
        .sch-outcomes,
        .sch-measure-card,
        .sch-history {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(70, 124, 255, 0.14);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .sch-copy {
          padding: 1.2rem 0.2rem;
        }

        .sch-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          background: rgba(103, 73, 255, 0.08);
          border: 1px solid rgba(103, 73, 255, 0.22);
          color: #9f8cff;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .sch-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.15rem);
          line-height: 1.08;
          font-weight: 900;
        }

        .sch-title span {
          color: #9f8cff;
        }

        .sch-lead {
          margin-top: 0.95rem;
          max-width: 520px;
          line-height: 1.9;
          color: rgba(214, 214, 233, 0.62);
          font-size: 0.96rem;
        }

        .status-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .status-chip {
          padding: 0.36rem 0.8rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid rgba(46, 198, 255, 0.18);
          background: rgba(46, 198, 255, 0.08);
          color: #7de6ff;
        }

        .hero-visual {
          padding: 1rem;
        }

        .quantum-orb {
          --mx: 0px;
          --my: 0px;
          --collapse: #8b5cf6;
          height: 330px;
          border-radius: 26px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 38%),
            linear-gradient(180deg, rgba(15, 20, 37, 0.98), rgba(12, 16, 29, 0.98));
          border: 1px solid rgba(89, 119, 255, 0.14);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .orb-core,
        .orb-halo,
        .orb-noise,
        .orb-rings {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my)));
        }

        .orb-core {
          width: 210px;
          height: 210px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 30%, rgba(125, 172, 255, 0.5), transparent 22%),
            radial-gradient(circle at 65% 68%, rgba(195, 160, 255, 0.45), transparent 20%),
            radial-gradient(circle at 50% 50%, rgba(242, 115, 145, 0.65), rgba(114, 20, 30, 0.95));
          box-shadow:
            0 0 0 12px rgba(82, 113, 255, 0.08),
            0 0 80px rgba(255, 84, 126, 0.18);
        }

        .orb-halo {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          box-shadow: 0 0 0 1px rgba(130, 147, 255, 0.15), 0 0 60px rgba(108, 78, 255, 0.1) inset;
        }

        .orb-noise {
          border-radius: 50%;
          filter: blur(12px);
          mix-blend-mode: screen;
          opacity: 0.7;
        }

        .orb-noise-a {
          width: 260px;
          height: 140px;
          background: radial-gradient(circle, rgba(104, 182, 255, 0.35), transparent 68%);
          animation: drift-a 8s ease-in-out infinite;
        }

        .orb-noise-b {
          width: 230px;
          height: 230px;
          background: radial-gradient(circle, rgba(187, 104, 255, 0.25), transparent 72%);
          animation: drift-b 9s ease-in-out infinite;
        }

        .orb-rings {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(90, 106, 255, 0.14);
          box-shadow: 0 0 0 22px rgba(77, 103, 255, 0.04), 0 0 0 46px rgba(77, 103, 255, 0.03);
        }

        .quantum-orb.measuring .orb-core {
          animation: collapse-flash 0.95s ease;
          box-shadow:
            0 0 0 12px rgba(82, 113, 255, 0.08),
            0 0 110px color-mix(in srgb, var(--collapse) 60%, transparent);
        }

        @keyframes drift-a {
          0%,100% { transform: translate(-45%, -48%) scale(1); }
          50% { transform: translate(-54%, -42%) scale(1.08); }
        }

        @keyframes drift-b {
          0%,100% { transform: translate(-48%, -52%) scale(1); }
          50% { transform: translate(-42%, -56%) scale(1.05); }
        }

        @keyframes collapse-flash {
          0% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(0.92); filter: saturate(1); }
          35% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1.12); filter: saturate(1.35); }
          100% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1); filter: saturate(1); }
        }

        .sch-measure-card {
          padding: 1.2rem;
          margin-bottom: 1rem;
        }

        .measure-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .measure-head h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .measure-head p {
          margin: 0.2rem 0 0;
          color: rgba(207, 207, 229, 0.5);
          font-size: 0.84rem;
        }

        .collapse-badge {
          padding: 0.42rem 0.82rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          background: color-mix(in srgb, ${m.color} 70%, #0f1120);
          border: 1px solid color-mix(in srgb, ${m.color} 40%, transparent);
          white-space: nowrap;
        }

        .measure-button {
          width: 100%;
          border: none;
          border-radius: 18px;
          padding: 1rem 1.2rem;
          background: linear-gradient(90deg, #15c5ff, #7c4dff 55%, #a855f7);
          color: #f7fbff;
          font-family: 'Cairo', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 18px 34px rgba(94, 93, 255, 0.18);
        }

        .measure-button:hover {
          transform: translateY(-2px);
        }

        .measure-button:disabled {
          opacity: 0.72;
          cursor: wait;
          transform: none;
        }

        .collapse-sub {
          margin-top: 0.7rem;
          color: rgba(103, 214, 255, 0.72);
          text-align: center;
          font-size: 0.84rem;
        }

        .control-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .sch-grid-card {
          padding: 1rem;
        }

        .sch-grid-card h4 {
          margin: 0;
          font-size: 1rem;
        }

        .sch-grid-card p {
          margin: 0.15rem 0 0.7rem;
          color: rgba(207, 207, 229, 0.42);
          font-size: 0.78rem;
        }

        .metric-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #8fd9ff;
          margin-bottom: 0.6rem;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #1fd4ff, #8b5cf6);
          box-shadow: 0 0 22px rgba(90, 149, 255, 0.25);
        }

        .slider-input {
          position: absolute;
          inset: -8px 0;
          width: 100%;
          opacity: 0;
          cursor: pointer;
          direction: ltr;
        }

        .slider-scale {
          display: flex;
          justify-content: space-between;
          margin-top: 0.4rem;
          color: rgba(191, 194, 215, 0.34);
          font-size: 0.72rem;
        }

        .sch-outcomes {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .outcomes-title {
          margin: 0 0 0.8rem;
          color: rgba(206, 222, 255, 0.88);
          font-size: 0.96rem;
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .outcome-card {
          border: 1px solid rgba(74, 127, 255, 0.14);
          border-radius: 16px;
          padding: 0.85rem;
          background: rgba(255,255,255,0.02);
        }

        .outcome-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          margin-bottom: 0.55rem;
        }

        .outcome-label {
          font-size: 0.88rem;
          font-weight: 700;
        }

        .outcome-pct {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .outcome-bar {
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          overflow: hidden;
        }

        .outcome-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
        }

        .sch-bottom {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
        }

        .concept-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .concept-card {
          padding: 1rem;
          border-radius: 20px;
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(74, 127, 255, 0.14);
        }

        .concept-card h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .concept-card p {
          margin: 0;
          line-height: 1.85;
          color: rgba(210, 214, 234, 0.62);
          font-size: 0.86rem;
        }

        .sch-history {
          padding: 1rem;
        }

        .sch-history h3 {
          margin: 0 0 0.85rem;
          font-size: 1rem;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.8rem;
          padding: 0.72rem 0.8rem;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
        }

        .history-item + .history-item {
          margin-top: 0.55rem;
        }

        .history-item strong {
          display: block;
          font-size: 0.86rem;
        }

        .history-item span {
          color: rgba(196, 201, 224, 0.42);
          font-size: 0.74rem;
        }

        .history-time {
          font-family: monospace;
          color: rgba(214, 219, 241, 0.55);
          font-size: 0.74rem;
        }

        @media (max-width: 980px) {
          .sch-hero,
          .sch-bottom,
          .control-grid,
          .outcomes-grid,
          .concept-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .sch-shell {
            padding-inline: 1rem;
            padding-top: 4.8rem;
          }

          .measure-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .quantum-orb {
            height: 280px;
          }
        }
      `}),(0,$.jsx)(`div`,{className:`sch-root`,children:(0,$.jsxs)(`div`,{className:`sch-shell`,children:[(0,$.jsxs)(`section`,{className:`sch-hero`,children:[(0,$.jsxs)(`div`,{className:`sch-copy`,children:[(0,$.jsx)(`div`,{className:`sch-pill`,children:`🌀 تجربة فكرية كمية`}),(0,$.jsxs)(`h1`,{className:`sch-title`,children:[(0,$.jsx)(`span`,{children:`قطة شرودنجر`}),` والتراكب الكمي`]}),(0,$.jsx)(`p`,{className:`sch-lead`,children:`قبل القياس تبقى الحالة في تراكب بين احتمالات متعددة. عند الرصد تنهار الدالة الموجية ويجبر النظام الكمّي على اختيار نتيجة واحدة فقط من بين جميع الإمكانات.`}),(0,$.jsxs)(`div`,{className:`status-row`,children:[(0,$.jsxs)(`div`,{className:`status-chip`,children:[`احتمال الحياة: `,p,`%`]}),(0,$.jsxs)(`div`,{className:`status-chip`,children:[`الرصد الحالي: `,i,`%`]})]})]}),(0,$.jsx)(`div`,{className:`hero-visual sch-card`,children:(0,$.jsx)(k_,{collapseColor:m.color,measuring:u})})]}),(0,$.jsxs)(`section`,{className:`sch-measure-card`,children:[(0,$.jsxs)(`div`,{className:`measure-top`,children:[(0,$.jsxs)(`div`,{className:`measure-head`,children:[(0,$.jsx)(`h3`,{children:m.title}),(0,$.jsx)(`p`,{children:m.subtitle})]}),(0,$.jsx)(`div`,{className:`collapse-badge`,children:`انهيار الدالة الموجية`})]}),(0,$.jsx)(`button`,{className:`measure-button`,onClick:()=>{d(!0),window.setTimeout(()=>{let e=Math.random()*100,t=0,n=f.find(n=>(t+=n.probability,e<=t))||f[0],r=new Date,i=`${r.getHours()}:${String(r.getMinutes()).padStart(2,`0`)}:${String(r.getSeconds()).padStart(2,`0`)}`;s(n),l(e=>[{...n,stamp:i},...e].slice(0,5)),d(!1)},950)},disabled:u,children:u?`جاري القياس الكمّي...`:`قياس الحالة الآن`}),(0,$.jsx)(`div`,{className:`collapse-sub`,children:`[COLLAPSE WAVEFUNCTION] - forcing reality to choose one state`})]}),(0,$.jsxs)(`section`,{className:`control-grid`,children:[(0,$.jsxs)(`div`,{className:`sch-grid-card`,children:[(0,$.jsx)(`h4`,{children:`تماسك الحالة`}),(0,$.jsx)(`p`,{children:`Quantum Coherence`}),(0,$.jsxs)(`div`,{className:`metric-value`,children:[e,`%`]}),(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`,style:{width:`${e}%`}}),(0,$.jsx)(`input`,{className:`slider-input`,type:`range`,min:`0`,max:`100`,value:e,onChange:e=>t(Number(e.target.value))})]}),(0,$.jsxs)(`div`,{className:`slider-scale`,children:[(0,$.jsx)(`span`,{children:`فوضى`}),(0,$.jsx)(`span`,{children:`تماسك`})]})]}),(0,$.jsxs)(`div`,{className:`sch-grid-card`,children:[(0,$.jsx)(`h4`,{children:`معدل الاضمحلال`}),(0,$.jsx)(`p`,{children:`Decay Trigger`}),(0,$.jsxs)(`div`,{className:`metric-value`,children:[n,`%`]}),(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`,style:{width:`${n}%`}}),(0,$.jsx)(`input`,{className:`slider-input`,type:`range`,min:`0`,max:`100`,value:n,onChange:e=>r(Number(e.target.value))})]}),(0,$.jsxs)(`div`,{className:`slider-scale`,children:[(0,$.jsx)(`span`,{children:`هادئ`}),(0,$.jsx)(`span`,{children:`نشط`})]})]}),(0,$.jsxs)(`div`,{className:`sch-grid-card`,children:[(0,$.jsx)(`h4`,{children:`شدة الملاحظة`}),(0,$.jsx)(`p`,{children:`Observation Strength`}),(0,$.jsxs)(`div`,{className:`metric-value`,children:[i,`%`]}),(0,$.jsxs)(`div`,{className:`slider-wrap`,children:[(0,$.jsx)(`div`,{className:`slider-fill`,style:{width:`${i}%`}}),(0,$.jsx)(`input`,{className:`slider-input`,type:`range`,min:`0`,max:`100`,value:i,onChange:e=>a(Number(e.target.value))})]}),(0,$.jsxs)(`div`,{className:`slider-scale`,children:[(0,$.jsx)(`span`,{children:`خفية`}),(0,$.jsx)(`span`,{children:`رصد مباشر`})]})]})]}),(0,$.jsxs)(`section`,{className:`sch-outcomes`,children:[(0,$.jsx)(`h3`,{className:`outcomes-title`,children:`احتمالات التراكب قبل القياس`}),(0,$.jsx)(`div`,{className:`outcomes-grid`,children:f.map(e=>(0,$.jsxs)(`div`,{className:`outcome-card`,children:[(0,$.jsxs)(`div`,{className:`outcome-top`,children:[(0,$.jsxs)(`div`,{className:`outcome-label`,style:{color:e.color},children:[e.icon,` `,e.label]}),(0,$.jsxs)(`div`,{className:`outcome-pct`,style:{color:e.color},children:[e.probability,`%`]})]}),(0,$.jsx)(`div`,{className:`outcome-bar`,children:(0,$.jsx)(`span`,{style:{width:`${e.probability}%`,background:e.color}})})]},e.id))})]}),(0,$.jsxs)(`section`,{className:`sch-bottom`,children:[(0,$.jsxs)(`div`,{className:`concept-grid`,children:[(0,$.jsxs)(`div`,{className:`concept-card`,children:[(0,$.jsx)(`h4`,{style:{color:`#1fd4ff`},children:`التراكب الكمي`}),(0,$.jsx)(`p`,{children:`قبل القياس لا نملك حالة مفردة مؤكدة، بل تتعايش عدة إمكانات معًا داخل وصف موجي واحد.`})]}),(0,$.jsxs)(`div`,{className:`concept-card`,children:[(0,$.jsx)(`h4`,{style:{color:`#9f8cff`},children:`انهيار الدالة`}),(0,$.jsx)(`p`,{children:`عند القياس تختفي بقية الاحتمالات من المشهد المرصود وتبقى نتيجة واحدة فقط قابلة للملاحظة.`})]}),(0,$.jsxs)(`div`,{className:`concept-card`,children:[(0,$.jsx)(`h4`,{style:{color:`#ff7a59`},children:`عدم اليقين`}),(0,$.jsx)(`p`,{children:`كلما ازدادت التفاعلات أو المراقبة، ضعفت نقاوة التراكب وأصبح النظام أقرب إلى حالة محددة.`})]})]}),(0,$.jsxs)(`aside`,{className:`sch-history`,children:[(0,$.jsx)(`h3`,{children:`نتائج القياس الأخيرة`}),c.length===0?(0,$.jsx)(`div`,{className:`history-item`,children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:`لا توجد قياسات بعد`}),(0,$.jsx)(`span`,{children:`اضغط على زر القياس لرؤية نتيجة انهيار الدالة الموجية.`})]})}):c.map((e,t)=>(0,$.jsxs)(`div`,{className:`history-item`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{style:{color:e.color},children:e.label}),(0,$.jsx)(`span`,{children:e.en})]}),(0,$.jsx)(`div`,{className:`history-time`,children:e.stamp})]},`${e.id}-${e.stamp}-${t}`))]})]})]})})]})}var j_=[{id:`blue-giant`,name:`النجوم الزرقاء العملاقة`,en:`Blue Giants`,color:`#4f7cff`,glow:`rgba(79,124,255,0.45)`,radius:24,temp:`20,000 - 50,000 كلفن`,life:`قصير جدًا`,mass:`10 - 50 كتلة شمسية`,fact:`نجوم شديدة السخونة واللمعان، تستهلك وقودها بسرعة هائلة وتعيش عمرًا قصيرًا نسبيًا.`,bullets:[`سطوع استثنائي`,`حرارة فائقة`,`نهاية عنيفة غالبًا`]},{id:`red-giant`,name:`العمالقة الحمر`,en:`Red Giants`,color:`#ff5f3d`,glow:`rgba(255,95,61,0.42)`,radius:31,temp:`3,000 - 4,500 كلفن`,life:`مرحلة متأخرة`,mass:`0.5 - 8 كتل شمسية`,fact:`تتمدد هذه النجوم عندما تنفد نواتها من الهيدروجين، فتزداد حجمًا ويبرد سطحها نسبيًا.`,bullets:[`سطح أبرد`,`حجم هائل`,`مرحلة انتقالية قبل النهاية`]},{id:`yellow-dwarf`,name:`النجوم القزمة`,en:`Dwarf Stars`,color:`#ffb703`,glow:`rgba(255,183,3,0.4)`,radius:16,temp:`2,500 - 50,000 كلفن`,life:`قد تطول مليارات السنين`,mass:`أقل من 1 كتلة شمسية غالبًا`,fact:`تشمل عدة أنواع، لكنها عمومًا أكثر شيوعًا واستقرارًا من النجوم العملاقة.`,bullets:[`منتشرة بكثرة`,`أحجام أصغر`,`استقرار أعلى`]},{id:`variable`,name:`النجوم المتغيرة`,en:`Variable Stars`,color:`#c93cff`,glow:`rgba(201,60,255,0.38)`,radius:18,temp:`متفاوتة`,life:`تذبذب مستمر`,mass:`متنوعة`,fact:`يتغير سطوعها مع الزمن نتيجة نبضات داخلية أو ظروف فيزيائية خارجية أو ثنائيات نجمية.`,bullets:[`سطوع متبدل`,`مفيدة في القياس الكوني`,`أنماط نبض مختلفة`]},{id:`neutron`,name:`النجوم النيوترونية`,en:`Neutron Stars`,color:`#14b8ff`,glow:`rgba(20,184,255,0.4)`,radius:11,temp:`ملايين الدرجات داخليًا`,life:`بقايا فائقة الكثافة`,mass:`1.4 - 2.1 كتلة شمسية`,fact:`تتشكل بعد انفجار نجوم ضخمة، وتُعد من أكثر الأجسام كثافة في الكون بعد الثقوب السوداء.`,bullets:[`دوران سريع جدًا`,`نبضات راديوية محتملة`,`جاذبية هائلة`]},{id:`white-dwarf`,name:`الأقزام البيضاء`,en:`White Dwarfs`,color:`#e9eefb`,glow:`rgba(233,238,251,0.35)`,radius:13,temp:`8,000 - 100,000 كلفن`,life:`تبرد تدريجيًا`,mass:`قرابة كتلة شمسية ضمن حجم صغير`,fact:`نوى نجمية متبقية بعد طرد الطبقات الخارجية، وهي صغيرة جدًا لكنها كثيفة بشكل ملحوظ.`,bullets:[`كثافة مرتفعة`,`حجم أرضي تقريبًا`,`بقايا نجوم متوسطة`]}];function M_({activeStar:e,pulse:t}){let n=(0,x.useRef)(null),r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let i=n.current;if(!i)return;let a=i.getContext(`2d`),o=window.devicePixelRatio||1,s=0,c=Array.from({length:120},(e,t)=>({x:t*71.3%1e3/1e3,y:t*41.7%1e3/1e3,size:.8+t%3*.55,alpha:.12+t%5*.05})),l=()=>{let e=i.getBoundingClientRect();i.width=e.width*o,i.height=e.height*o,a.setTransform(o,0,0,o,0,0)},u=(e,t,n,r=1,i=!1)=>{let o=e.radius*r,c=a.createRadialGradient(t,n,0,t,n,o*2.6);if(c.addColorStop(0,e.color),c.addColorStop(.3,e.glow),c.addColorStop(1,`rgba(255,255,255,0)`),a.fillStyle=c,a.beginPath(),a.arc(t,n,o*2.6,0,Math.PI*2),a.fill(),e.id===`variable`)a.beginPath(),a.arc(t,n,o*(.84+Math.sin(s*.08)*.08),0,Math.PI*2),a.fillStyle=e.color,a.fill();else if(e.id===`neutron`){a.beginPath(),a.arc(t,n,o*.9,0,Math.PI*2),a.fillStyle=e.color,a.fill(),a.save(),a.translate(t,n),a.rotate(s*.05);let r=a.createLinearGradient(0,0,o*5,0);r.addColorStop(0,`rgba(20,184,255,0.65)`),r.addColorStop(1,`rgba(20,184,255,0)`),a.fillStyle=r,a.fillRect(0,-2,o*5,4),a.rotate(Math.PI),a.fillStyle=r,a.fillRect(0,-2,o*5,4),a.restore()}else if(e.id===`white-dwarf`)a.beginPath(),a.arc(t,n,o,0,Math.PI*2),a.fillStyle=`#f7fbff`,a.fill();else{let r=a.createRadialGradient(t-o*.3,n-o*.3,0,t,n,o*1.15);r.addColorStop(0,`rgba(255,255,255,0.9)`),r.addColorStop(.32,e.color),r.addColorStop(1,e.color),a.fillStyle=r,a.beginPath(),a.arc(t,n,o,0,Math.PI*2),a.fill()}i&&(a.beginPath(),a.arc(t,n,o*1.65,0,Math.PI*2),a.strokeStyle=`rgba(255,255,255,0.28)`,a.lineWidth=1.5,a.stroke())},d=()=>{let n=i.clientWidth,o=i.clientHeight;s+=1,a.clearRect(0,0,n,o);let l=a.createLinearGradient(0,0,n,o);l.addColorStop(0,`rgba(8,12,26,1)`),l.addColorStop(1,`rgba(4,7,16,1)`),a.fillStyle=l,a.fillRect(0,0,n,o),c.forEach((e,t)=>{a.beginPath(),a.arc(e.x*n,e.y*o,e.size,0,Math.PI*2);let r=e.alpha+Math.sin(s*.015+t)*.08;a.fillStyle=`rgba(255,255,255,${Math.max(.06,r)})`,a.fill()});let f=[{x:n*.2,y:o*.68,scale:.95},{x:n*.34,y:o*.36,scale:1.12},{x:n*.52,y:o*.58,scale:.85},{x:n*.66,y:o*.33,scale:1},{x:n*.79,y:o*.63,scale:.84},{x:n*.9,y:o*.42,scale:.92}];j_.forEach((n,r)=>{let i=f[r],o=e.id===n.id,s=o&&t?1.22:o?1.08:1;u(n,i.x,i.y,i.scale*s,o),o&&(a.fillStyle=`rgba(236, 239, 255, 0.88)`,a.font=`13px Cairo, sans-serif`,a.textAlign=`center`,a.fillText(n.name,i.x,i.y-n.radius*i.scale*s-22))}),a.fillStyle=`rgba(198, 204, 233, 0.32)`,a.textAlign=`right`,a.font=`12px Cairo, sans-serif`,a.fillText(`محاكاة أنواع النجوم`,n-18,o-18),r.current=requestAnimationFrame(d)};return l(),window.addEventListener(`resize`,l),r.current=requestAnimationFrame(d),()=>{cancelAnimationFrame(r.current),window.removeEventListener(`resize`,l)}},[e,t]),(0,$.jsx)(`canvas`,{ref:n,className:`stars-canvas`})}function N_(){let[e,t]=(0,x.useState)(`blue-giant`),[n,r]=(0,x.useState)(!1),i=(0,x.useMemo)(()=>j_.find(t=>t.id===e)||j_[0],[e]),a=e=>{t(e),r(!0),window.setTimeout(()=>r(!1),650)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        .stars-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 18% 15%, rgba(22, 184, 255, 0.08), transparent 22%),
            radial-gradient(circle at 82% 24%, rgba(255, 115, 60, 0.08), transparent 24%),
            #05070f;
          color: #f4f4ff;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          overflow-x: hidden;
        }

        .stars-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .stars-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 5.4rem 1.5rem 4rem;
        }

        .stars-header {
          text-align: center;
          margin-bottom: 1.4rem;
        }

        .stars-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .stars-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.25rem);
          line-height: 1.08;
          font-weight: 900;
          color: #f8f6ff;
        }

        .stars-title span {
          color: #d4af37;
        }

        .stars-subtitle {
          margin-top: 0.45rem;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: rgba(215, 211, 233, 0.45);
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }

        .stars-lead {
          max-width: 770px;
          margin: 1rem auto 0;
          color: rgba(214, 214, 232, 0.58);
          line-height: 1.9;
          font-size: 0.96rem;
        }

        .stars-visual,
        .stars-focus,
        .star-card {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.12);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .stars-visual {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .stars-canvas {
          width: 100%;
          height: 500px;
          display: block;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(13,18,34,1), rgba(5,9,18,1));
        }

        .stars-focus {
          padding: 1.1rem 1.2rem;
          margin-bottom: 1rem;
        }

        .focus-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.95rem;
        }

        .focus-top h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .focus-top p {
          margin: 0.15rem 0 0;
          color: rgba(210, 214, 234, 0.45);
          font-size: 0.82rem;
          font-family: 'Syne', sans-serif;
        }

        .focus-star {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: ${i.color};
          box-shadow: 0 0 38px ${i.glow};
          flex-shrink: 0;
          position: relative;
        }

        .focus-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 0.9rem;
        }

        .focus-metric {
          padding: 0.9rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .focus-metric span {
          display: block;
          color: rgba(186, 189, 210, 0.4);
          font-size: 0.74rem;
          margin-bottom: 0.22rem;
        }

        .focus-metric strong {
          color: #f2eeff;
          font-size: 0.98rem;
        }

        .focus-fact {
          color: rgba(218, 219, 236, 0.72);
          line-height: 1.9;
          font-size: 0.92rem;
        }

        .stars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .star-card {
          padding: 1.05rem;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .star-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.12);
        }

        .star-card.active {
          border-color: color-mix(in srgb, ${i.color} 45%, transparent);
          box-shadow: 0 18px 40px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in srgb, ${i.color} 18%, transparent);
        }

        .star-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-bottom: 0.9rem;
          position: relative;
        }

        .star-title {
          margin: 0;
          font-size: 1.04rem;
          color: #f6f4ff;
        }

        .star-en {
          display: inline-flex;
          margin-top: 0.5rem;
          padding: 0.24rem 0.7rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(255,255,255,0.05);
          color: rgba(220, 221, 236, 0.82);
        }

        .star-text {
          margin-top: 0.85rem;
          color: rgba(210, 214, 233, 0.7);
          line-height: 1.85;
          font-size: 0.86rem;
        }

        .star-bullets {
          margin-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .star-bullet {
          color: rgba(219, 220, 236, 0.82);
          font-size: 0.8rem;
        }

        @media (max-width: 980px) {
          .stars-grid {
            grid-template-columns: 1fr 1fr;
          }

          .focus-metrics {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .stars-shell {
            padding-inline: 1rem;
            padding-top: 4.8rem;
          }

          .stars-canvas {
            height: 340px;
          }

          .stars-grid {
            grid-template-columns: 1fr;
          }

          .focus-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}),(0,$.jsx)(`div`,{className:`stars-root`,children:(0,$.jsxs)(`div`,{className:`stars-shell`,children:[(0,$.jsxs)(`header`,{className:`stars-header`,children:[(0,$.jsx)(`div`,{className:`stars-pill`,children:`✦ أطياف نجمية`}),(0,$.jsxs)(`h1`,{className:`stars-title`,children:[(0,$.jsx)(`span`,{children:`النجوم`}),` وأنواعها الرئيسية`]}),(0,$.jsx)(`div`,{className:`stars-subtitle`,children:`STELLAR CLASSES AND BEHAVIOR`}),(0,$.jsx)(`p`,{className:`stars-lead`,children:`صفحة تعليمية تفاعلية تعرض طيفًا من أنواع النجوم بأسلوب بصري أقوى من النسخة البسيطة، مع محاكٍ يبرز الفروق في اللون والحجم والسلوك والسطوع ضمن نفس الهوية التصميمية للمشروع.`})]}),(0,$.jsx)(`section`,{className:`stars-visual`,children:(0,$.jsx)(M_,{activeStar:i,pulse:n})}),(0,$.jsxs)(`section`,{className:`stars-focus`,children:[(0,$.jsxs)(`div`,{className:`focus-top`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:i.name}),(0,$.jsx)(`p`,{children:i.en})]}),(0,$.jsx)(`div`,{className:`focus-star`})]}),(0,$.jsxs)(`div`,{className:`focus-metrics`,children:[(0,$.jsxs)(`div`,{className:`focus-metric`,children:[(0,$.jsx)(`span`,{children:`درجة الحرارة`}),(0,$.jsx)(`strong`,{children:i.temp})]}),(0,$.jsxs)(`div`,{className:`focus-metric`,children:[(0,$.jsx)(`span`,{children:`الكتلة التقريبية`}),(0,$.jsx)(`strong`,{children:i.mass})]}),(0,$.jsxs)(`div`,{className:`focus-metric`,children:[(0,$.jsx)(`span`,{children:`العمر/الحالة`}),(0,$.jsx)(`strong`,{children:i.life})]})]}),(0,$.jsx)(`div`,{className:`focus-fact`,children:i.fact})]}),(0,$.jsx)(`section`,{className:`stars-grid`,children:j_.map(t=>(0,$.jsxs)(`div`,{className:`star-card${e===t.id?` active`:``}`,onClick:()=>a(t.id),children:[(0,$.jsx)(`div`,{className:`star-icon`,style:{background:t.color,boxShadow:`0 0 28px ${t.glow}`}}),(0,$.jsx)(`h3`,{className:`star-title`,children:t.name}),(0,$.jsx)(`div`,{className:`star-en`,children:t.en}),(0,$.jsx)(`div`,{className:`star-text`,children:t.fact}),(0,$.jsx)(`div`,{className:`star-bullets`,children:t.bullets.map(e=>(0,$.jsxs)(`div`,{className:`star-bullet`,children:[`• `,e]},e))})]},t.id))})]})})]})}(0,Jn.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(x.StrictMode,{children:(0,$.jsx)(Dn,{basename:`/SimulateUniverse`,children:(0,$.jsx)(Bt,{children:(0,$.jsxs)(Rt,{element:(0,$.jsx)(c_,{}),children:[(0,$.jsx)(Rt,{path:`/`,element:(0,$.jsx)(f_,{})}),(0,$.jsx)(Rt,{path:`/black-hole`,element:(0,$.jsx)(__,{})}),(0,$.jsx)(Rt,{path:`/login`,element:(0,$.jsx)(p_,{})}),(0,$.jsx)(Rt,{path:`/spacetime`,element:(0,$.jsx)(C_,{})}),(0,$.jsx)(Rt,{path:`/solar-system`,element:(0,$.jsx)(E_,{})}),(0,$.jsx)(Rt,{path:`/schrodinger`,element:(0,$.jsx)(A_,{})}),(0,$.jsx)(Rt,{path:`/stars`,element:(0,$.jsx)(N_,{})})]})})})}));