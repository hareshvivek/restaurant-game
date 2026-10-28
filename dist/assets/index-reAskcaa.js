var v_=Object.defineProperty;var y_=(n,e,t)=>e in n?v_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>y_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function x_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ym={exports:{}},Hl={},xm={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),S_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),C_=Symbol.for("react.forward_ref"),b_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),P_=Symbol.for("react.lazy"),Uh=Symbol.iterator;function L_(n){return n===null||typeof n!="object"?null:(n=Uh&&n[Uh]||n["@@iterator"],typeof n=="function"?n:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,wm={};function Xs(n,e,t){this.props=n,this.context=e,this.refs=wm,this.updater=t||Sm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Em(){}Em.prototype=Xs.prototype;function Td(n,e,t){this.props=n,this.context=e,this.refs=wm,this.updater=t||Sm}var Ad=Td.prototype=new Em;Ad.constructor=Td;Mm(Ad,Xs.prototype);Ad.isPureReactComponent=!0;var Oh=Array.isArray,Tm=Object.prototype.hasOwnProperty,Cd={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Jo,type:n,key:s,ref:o,props:r,_owner:Cd.current}}function I_(n,e){return{$$typeof:Jo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function bd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Jo}function D_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var kh=/\/+/g;function fc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?D_(""+n.key):e.toString(36)}function Za(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Jo:case S_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+fc(o,0):i,Oh(r)?(t="",n!=null&&(t=n.replace(kh,"$&/")+"/"),Za(r,e,t,"",function(c){return c})):r!=null&&(bd(r)&&(r=I_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Oh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+fc(s,a);o+=Za(s,e,t,l,r)}else if(l=L_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+fc(s,a++),o+=Za(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(n,e,t){if(n==null)return n;var i=[],r=0;return Za(n,i,"","",function(s){return e.call(t,s,r++)}),i}function N_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},Qa={transition:null},U_={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Cd};function bm(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:la,forEach:function(n,e,t){la(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return la(n,function(){e++}),e},toArray:function(n){return la(n,function(e){return e})||[]},only:function(n){if(!bd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=Xs;Ke.Fragment=M_;Ke.Profiler=E_;Ke.PureComponent=Td;Ke.StrictMode=w_;Ke.Suspense=b_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;Ke.act=bm;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Mm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Tm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Jo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:A_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:T_,_context:n},n.Consumer=n};Ke.createElement=Cm;Ke.createFactory=function(n){var e=Cm.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:C_,render:n}};Ke.isValidElement=bd;Ke.lazy=function(n){return{$$typeof:P_,_payload:{_status:-1,_result:n},_init:N_}};Ke.memo=function(n,e){return{$$typeof:R_,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=Qa.transition;Qa.transition={};try{n()}finally{Qa.transition=e}};Ke.unstable_act=bm;Ke.useCallback=function(n,e){return un.current.useCallback(n,e)};Ke.useContext=function(n){return un.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return un.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return un.current.useEffect(n,e)};Ke.useId=function(){return un.current.useId()};Ke.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return un.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};Ke.useRef=function(n){return un.current.useRef(n)};Ke.useState=function(n){return un.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return un.current.useTransition()};Ke.version="18.3.1";xm.exports=Ke;var Qe=xm.exports;const O_=x_(Qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=Qe,F_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,G_=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function Rm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)B_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F_,type:n,key:s,ref:o,props:r,_owner:G_.current}}Hl.Fragment=z_;Hl.jsx=Rm;Hl.jsxs=Rm;ym.exports=Hl;var $=ym.exports,Su={},Pm={exports:{}},Cn={},Lm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,U){var B=N.length;N.push(U);e:for(;0<B;){var J=B-1>>>1,te=N[J];if(0<r(te,U))N[J]=U,N[B]=te,B=J;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],B=N.pop();if(B!==U){N[0]=B;e:for(var J=0,te=N.length,j=te>>>1;J<j;){var ee=2*(J+1)-1,ue=N[ee],le=ee+1,fe=N[le];if(0>r(ue,B))le<te&&0>r(fe,ue)?(N[J]=fe,N[le]=B,J=le):(N[J]=ue,N[ee]=B,J=ee);else if(le<te&&0>r(fe,B))N[J]=fe,N[le]=B,J=le;else break e}}return U}function r(N,U){var B=N.sortIndex-U.sortIndex;return B!==0?B:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,y=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var U=t(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(c)}}function x(N){if(v=!1,_(N),!y)if(t(l)!==null)y=!0,G(C);else{var U=t(c);U!==null&&Z(x,U.startTime-N)}}function C(N,U){y=!1,v&&(v=!1,u(R),R=-1),m=!0;var B=h;try{for(_(U),f=t(l);f!==null&&(!(f.expirationTime>U)||N&&!k());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var te=J(f.expirationTime<=U);U=n.unstable_now(),typeof te=="function"?f.callback=te:f===t(l)&&i(l),_(U)}else i(l);f=t(l)}if(f!==null)var j=!0;else{var ee=t(c);ee!==null&&Z(x,ee.startTime-U),j=!1}return j}finally{f=null,h=B,m=!1}}var w=!1,T=null,R=-1,S=5,M=-1;function k(){return!(n.unstable_now()-M<S)}function F(){if(T!==null){var N=n.unstable_now();M=N;var U=!0;try{U=T(!0,N)}finally{U?q():(w=!1,T=null)}}else w=!1}var q;if(typeof g=="function")q=function(){g(F)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=F,q=function(){O.postMessage(null)}}else q=function(){p(F,0)};function G(N){T=N,w||(w=!0,q())}function Z(N,U){R=p(function(){N(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){y||m||(y=!0,G(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var B=h;h=U;try{return N()}finally{h=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return U()}finally{h=B}},n.unstable_scheduleCallback=function(N,U,B){var J=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,N){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=B+te,N={id:d++,callback:U,priorityLevel:N,startTime:B,expirationTime:te,sortIndex:-1},B>J?(N.sortIndex=B,e(c,N),t(l)===null&&N===t(c)&&(v?(u(R),R=-1):v=!0,Z(x,B-J))):(N.sortIndex=te,e(l,N),y||m||(y=!0,G(C))),N},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(N){var U=h;return function(){var B=h;h=U;try{return N.apply(this,arguments)}finally{h=B}}}})(Im);Lm.exports=Im;var V_=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=Qe,An=V_;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,Io={};function kr(n,e){Ds(n,e),Ds(n+"Capture",e)}function Ds(n,e){for(Io[n]=e,n=0;n<e.length;n++)Dm.add(e[n])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,X_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},zh={};function j_(n){return Mu.call(zh,n)?!0:Mu.call(Fh,n)?!1:X_.test(n)?zh[n]=!0:(Fh[n]=!0,!1)}function Y_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $_(n,e,t,i){if(e===null||typeof e>"u"||Y_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Xt[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Xt[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Xt[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Xt[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Xt[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Xt[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Xt[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Xt[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Xt[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rd=/[\-:]([a-z])/g;function Pd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rd,Pd);Xt[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rd,Pd);Xt[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rd,Pd);Xt[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Xt[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Xt[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ld(n,e,t,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($_(e,t,r,i)&&(t=null),i||r===null?j_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ci=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),us=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),Tu=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Js(n){return n===null||typeof n!="object"?null:(n=Bh&&n[Bh]||n["@@iterator"],typeof n=="function"?n:null)}var Mt=Object.assign,pc;function vo(n){if(pc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+n}var mc=!1;function gc(n,e){if(!n||mc)return"";mc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?vo(n):""}function q_(n){switch(n.tag){case 5:return vo(n.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return n=gc(n.type,!1),n;case 11:return n=gc(n.type.render,!1),n;case 1:return n=gc(n.type,!0),n;default:return""}}function Au(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ds:return"Fragment";case us:return"Portal";case wu:return"Profiler";case Id:return"StrictMode";case Eu:return"Suspense";case Tu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Um:return(n.displayName||"Context")+".Consumer";case Nm:return(n._context.displayName||"Context")+".Provider";case Dd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nd:return e=n.displayName||null,e!==null?e:Au(n.type)||"Memo";case Ni:e=n._payload,n=n._init;try{return Au(n(e))}catch{}}return null}function K_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function km(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z_(n){var e=km(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ua(n){n._valueTracker||(n._valueTracker=Z_(n))}function Fm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=km(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ul(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cu(n,e){var t=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Gh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=er(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(n,e){e=e.checked,e!=null&&Ld(n,"checked",e,!1)}function bu(n,e){zm(n,e);var t=er(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ru(n,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ru(n,e,t){(e!=="number"||ul(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var yo=Array.isArray;function Ts(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+er(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(yo(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:er(t)}}function Bm(n,e){var t=er(e.value),i=er(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Wh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var da,Hm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Do(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q_=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(n){Q_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mo[e]=Mo[n]})});function Vm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mo.hasOwnProperty(n)&&Mo[n]?(""+e).trim():e+"px"}function Wm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Vm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var J_=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(n,e){if(e){if(J_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Du(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Ud(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uu=null,As=null,Cs=null;function Xh(n){if(n=na(n)){if(typeof Uu!="function")throw Error(re(280));var e=n.stateNode;e&&(e=Yl(e),Uu(n.stateNode,n.type,e))}}function Xm(n){As?Cs?Cs.push(n):Cs=[n]:As=n}function jm(){if(As){var n=As,e=Cs;if(Cs=As=null,Xh(n),e)for(n=0;n<e.length;n++)Xh(e[n])}}function Ym(n,e){return n(e)}function $m(){}var _c=!1;function qm(n,e,t){if(_c)return n(e,t);_c=!0;try{return Ym(n,e,t)}finally{_c=!1,(As!==null||Cs!==null)&&($m(),jm())}}function No(n,e){var t=n.stateNode;if(t===null)return null;var i=Yl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var Ou=!1;if(Mi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Ou=!1}function ev(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var wo=!1,dl=null,hl=!1,ku=null,tv={onError:function(n){wo=!0,dl=n}};function nv(n,e,t,i,r,s,o,a,l){wo=!1,dl=null,ev.apply(tv,arguments)}function iv(n,e,t,i,r,s,o,a,l){if(nv.apply(this,arguments),wo){if(wo){var c=dl;wo=!1,dl=null}else throw Error(re(198));hl||(hl=!0,ku=c)}}function Fr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Km(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function jh(n){if(Fr(n)!==n)throw Error(re(188))}function rv(n){var e=n.alternate;if(!e){if(e=Fr(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return jh(r),n;if(s===i)return jh(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function Zm(n){return n=rv(n),n!==null?Qm(n):null}function Qm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Qm(n);if(e!==null)return e;n=n.sibling}return null}var Jm=An.unstable_scheduleCallback,Yh=An.unstable_cancelCallback,sv=An.unstable_shouldYield,ov=An.unstable_requestPaint,Rt=An.unstable_now,av=An.unstable_getCurrentPriorityLevel,Od=An.unstable_ImmediatePriority,eg=An.unstable_UserBlockingPriority,fl=An.unstable_NormalPriority,lv=An.unstable_LowPriority,tg=An.unstable_IdlePriority,Vl=null,si=null;function cv(n){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Vl,n,void 0,(n.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:hv,uv=Math.log,dv=Math.LN2;function hv(n){return n>>>=0,n===0?32:31-(uv(n)/dv|0)|0}var ha=64,fa=4194304;function xo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=t&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-qn(e),r=1<<t,i|=n[t],e&=~r;return i}function fv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=fv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Fu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ng(){var n=ha;return ha<<=1,!(ha&4194240)&&(ha=64),n}function vc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ea(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-qn(e),n[e]=t}function mv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-qn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function kd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function ig(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var rg,Fd,sg,og,ag,zu=!1,pa=[],Hi=null,Vi=null,Wi=null,Uo=new Map,Oo=new Map,Oi=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(n,e){switch(n){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function to(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=na(e),e!==null&&Fd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function _v(n,e,t,i,r){switch(e){case"focusin":return Hi=to(Hi,n,e,t,i,r),!0;case"dragenter":return Vi=to(Vi,n,e,t,i,r),!0;case"mouseover":return Wi=to(Wi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,to(Uo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oo.set(s,to(Oo.get(s)||null,n,e,t,i,r)),!0}return!1}function lg(n){var e=Sr(n.target);if(e!==null){var t=Fr(e);if(t!==null){if(e=t.tag,e===13){if(e=Km(t),e!==null){n.blockedOn=e,ag(n.priority,function(){sg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Nu=i,t.target.dispatchEvent(i),Nu=null}else return e=na(t),e!==null&&Fd(e),n.blockedOn=t,!1;e.shift()}return!0}function qh(n,e,t){Ja(n)&&t.delete(e)}function vv(){zu=!1,Hi!==null&&Ja(Hi)&&(Hi=null),Vi!==null&&Ja(Vi)&&(Vi=null),Wi!==null&&Ja(Wi)&&(Wi=null),Uo.forEach(qh),Oo.forEach(qh)}function no(n,e){n.blockedOn===e&&(n.blockedOn=null,zu||(zu=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,vv)))}function ko(n){function e(r){return no(r,n)}if(0<pa.length){no(pa[0],n);for(var t=1;t<pa.length;t++){var i=pa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Hi!==null&&no(Hi,n),Vi!==null&&no(Vi,n),Wi!==null&&no(Wi,n),Uo.forEach(e),Oo.forEach(e),t=0;t<Oi.length;t++)i=Oi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Oi.length&&(t=Oi[0],t.blockedOn===null);)lg(t),t.blockedOn===null&&Oi.shift()}var bs=Ci.ReactCurrentBatchConfig,ml=!0;function yv(n,e,t,i){var r=it,s=bs.transition;bs.transition=null;try{it=1,zd(n,e,t,i)}finally{it=r,bs.transition=s}}function xv(n,e,t,i){var r=it,s=bs.transition;bs.transition=null;try{it=4,zd(n,e,t,i)}finally{it=r,bs.transition=s}}function zd(n,e,t,i){if(ml){var r=Bu(n,e,t,i);if(r===null)bc(n,e,i,gl,t),$h(n,i);else if(_v(r,n,e,t,i))i.stopPropagation();else if($h(n,i),e&4&&-1<gv.indexOf(n)){for(;r!==null;){var s=na(r);if(s!==null&&rg(s),s=Bu(n,e,t,i),s===null&&bc(n,e,i,gl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(n,e,i,null,t)}}var gl=null;function Bu(n,e,t,i){if(gl=null,n=Ud(i),n=Sr(n),n!==null)if(e=Fr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Km(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gl=n,null}function cg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case Od:return 1;case eg:return 4;case fl:case lv:return 16;case tg:return 536870912;default:return 16}default:return 16}}var Fi=null,Bd=null,el=null;function ug(){if(el)return el;var n,e=Bd,t=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return el=r.slice(n,1<i?1-i:void 0)}function tl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ma(){return!0}function Kh(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:Kh,this.isPropagationStopped=Kh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=bn(js),ta=Mt({},js,{view:0,detail:0}),Sv=bn(ta),yc,xc,io,Wl=Mt({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==io&&(io&&n.type==="mousemove"?(yc=n.screenX-io.screenX,xc=n.screenY-io.screenY):xc=yc=0,io=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),Zh=bn(Wl),Mv=Mt({},Wl,{dataTransfer:0}),wv=bn(Mv),Ev=Mt({},ta,{relatedTarget:0}),Sc=bn(Ev),Tv=Mt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=bn(Tv),Cv=Mt({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bv=bn(Cv),Rv=Mt({},js,{data:0}),Qh=bn(Rv),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Iv[n])?!!e[n]:!1}function Hd(){return Dv}var Nv=Mt({},ta,{key:function(n){if(n.key){var e=Pv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Lv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Uv=bn(Nv),Ov=Mt({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=bn(Ov),kv=Mt({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),Fv=bn(kv),zv=Mt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=bn(zv),Gv=Mt({},Wl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=bn(Gv),Vv=[9,13,27,32],Vd=Mi&&"CompositionEvent"in window,Eo=null;Mi&&"documentMode"in document&&(Eo=document.documentMode);var Wv=Mi&&"TextEvent"in window&&!Eo,dg=Mi&&(!Vd||Eo&&8<Eo&&11>=Eo),ef=" ",tf=!1;function hg(n,e){switch(n){case"keyup":return Vv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function Xv(n,e){switch(n){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return n=e.data,n===ef&&tf?null:n;default:return null}}function jv(n,e){if(hs)return n==="compositionend"||!Vd&&hg(n,e)?(n=ug(),el=Bd=Fi=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Yv[n.type]:e==="textarea"}function pg(n,e,t,i){Xm(i),e=_l(e,"onChange"),0<e.length&&(t=new Gd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var To=null,Fo=null;function $v(n){Tg(n,0)}function Xl(n){var e=ms(n);if(Fm(e))return n}function qv(n,e){if(n==="change")return e}var mg=!1;if(Mi){var Mc;if(Mi){var wc="oninput"in document;if(!wc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),wc=typeof rf.oninput=="function"}Mc=wc}else Mc=!1;mg=Mc&&(!document.documentMode||9<document.documentMode)}function sf(){To&&(To.detachEvent("onpropertychange",gg),Fo=To=null)}function gg(n){if(n.propertyName==="value"&&Xl(Fo)){var e=[];pg(e,Fo,n,Ud(n)),qm($v,e)}}function Kv(n,e,t){n==="focusin"?(sf(),To=e,Fo=t,To.attachEvent("onpropertychange",gg)):n==="focusout"&&sf()}function Zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(Fo)}function Qv(n,e){if(n==="click")return Xl(e)}function Jv(n,e){if(n==="input"||n==="change")return Xl(e)}function ey(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Qn=typeof Object.is=="function"?Object.is:ey;function zo(n,e){if(Qn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mu.call(e,r)||!Qn(n[r],e[r]))return!1}return!0}function of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function af(n,e){var t=of(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=of(t)}}function _g(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?_g(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var n=window,e=ul();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ul(n.document)}return e}function Wd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ty(n){var e=vg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&_g(t.ownerDocument.documentElement,t)){if(i!==null&&Wd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=af(t,s);var o=af(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ny=Mi&&"documentMode"in document&&11>=document.documentMode,fs=null,Gu=null,Ao=null,Hu=!1;function lf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hu||fs==null||fs!==ul(i)||(i=fs,"selectionStart"in i&&Wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ao&&zo(Ao,i)||(Ao=i,i=_l(Gu,"onSelect"),0<i.length&&(e=new Gd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fs)))}function ga(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ps={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Ec={},yg={};Mi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function jl(n){if(Ec[n])return Ec[n];if(!ps[n])return n;var e=ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in yg)return Ec[n]=e[t];return n}var xg=jl("animationend"),Sg=jl("animationiteration"),Mg=jl("animationstart"),wg=jl("transitionend"),Eg=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,e){Eg.set(n,e),kr(e,[n])}for(var Tc=0;Tc<cf.length;Tc++){var Ac=cf[Tc],iy=Ac.toLowerCase(),ry=Ac[0].toUpperCase()+Ac.slice(1);or(iy,"on"+ry)}or(xg,"onAnimationEnd");or(Sg,"onAnimationIteration");or(Mg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(wg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function uf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,iv(i,e,void 0,n),n.currentTarget=null}function Tg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;uf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;uf(r,a,c),s=l}}}if(hl)throw n=ku,hl=!1,ku=null,n}function ht(n,e){var t=e[Yu];t===void 0&&(t=e[Yu]=new Set);var i=n+"__bubble";t.has(i)||(Ag(e,n,2,!1),t.add(i))}function Cc(n,e,t){var i=0;e&&(i|=4),Ag(t,n,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[_a]){n[_a]=!0,Dm.forEach(function(t){t!=="selectionchange"&&(sy.has(t)||Cc(t,!1,n),Cc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_a]||(e[_a]=!0,Cc("selectionchange",!1,e))}}function Ag(n,e,t,i){switch(cg(e)){case 1:var r=yv;break;case 4:r=xv;break;default:r=zd}t=r.bind(null,e,t,n),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function bc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qm(function(){var c=s,d=Ud(t),f=[];e:{var h=Eg.get(n);if(h!==void 0){var m=Gd,y=n;switch(n){case"keypress":if(tl(t)===0)break e;case"keydown":case"keyup":m=Uv;break;case"focusin":y="focus",m=Sc;break;case"focusout":y="blur",m=Sc;break;case"beforeblur":case"afterblur":m=Sc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fv;break;case xg:case Sg:case Mg:m=Av;break;case wg:m=Bv;break;case"scroll":m=Sv;break;case"wheel":m=Hv;break;case"copy":case"cut":case"paste":m=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jh}var v=(e&4)!==0,p=!v&&n==="scroll",u=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,u!==null&&(x=No(g,u),x!=null&&v.push(Go(g,x,_)))),p)break;g=g.return}0<v.length&&(h=new m(h,y,null,t,d),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==Nu&&(y=t.relatedTarget||t.fromElement)&&(Sr(y)||y[wi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=t.relatedTarget||t.toElement,m=c,y=y?Sr(y):null,y!==null&&(p=Fr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=Zh,x="onMouseLeave",u="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=Jh,x="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:ms(m),_=y==null?h:ms(y),h=new v(x,g+"leave",m,t,d),h.target=p,h.relatedTarget=_,x=null,Sr(d)===c&&(v=new v(u,g+"enter",y,t,d),v.target=_,v.relatedTarget=p,x=v),p=x,m&&y)t:{for(v=m,u=y,g=0,_=v;_;_=zr(_))g++;for(_=0,x=u;x;x=zr(x))_++;for(;0<g-_;)v=zr(v),g--;for(;0<_-g;)u=zr(u),_--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=zr(v),u=zr(u)}v=null}else v=null;m!==null&&df(f,h,m,v,!1),y!==null&&p!==null&&df(f,p,y,v,!0)}}e:{if(h=c?ms(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=qv;else if(nf(h))if(mg)C=Jv;else{C=Zv;var w=Kv}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Qv);if(C&&(C=C(n,c))){pg(f,C,t,d);break e}w&&w(n,h,c),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Ru(h,"number",h.value)}switch(w=c?ms(c):window,n){case"focusin":(nf(w)||w.contentEditable==="true")&&(fs=w,Gu=c,Ao=null);break;case"focusout":Ao=Gu=fs=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,lf(f,t,d);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":lf(f,t,d)}var T;if(Vd)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hs?hg(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(dg&&t.locale!=="ko"&&(hs||R!=="onCompositionStart"?R==="onCompositionEnd"&&hs&&(T=ug()):(Fi=d,Bd="value"in Fi?Fi.value:Fi.textContent,hs=!0)),w=_l(c,R),0<w.length&&(R=new Qh(R,n,null,t,d),f.push({event:R,listeners:w}),T?R.data=T:(T=fg(t),T!==null&&(R.data=T)))),(T=Wv?Xv(n,t):jv(n,t))&&(c=_l(c,"onBeforeInput"),0<c.length&&(d=new Qh("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=T))}Tg(f,e)})}function Go(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _l(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=No(n,t),s!=null&&i.unshift(Go(n,s,r)),s=No(n,e),s!=null&&i.push(Go(n,s,r))),n=n.return}return i}function zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function df(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=No(t,s),l!=null&&o.unshift(Go(t,l,a))):r||(l=No(t,s),l!=null&&o.push(Go(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var oy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function hf(n){return(typeof n=="string"?n:""+n).replace(oy,`
`).replace(ay,"")}function va(n,e,t){if(e=hf(e),hf(n)!==e&&t)throw Error(re(425))}function vl(){}var Vu=null,Wu=null;function Xu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(n){return ff.resolve(null).then(n).catch(uy)}:ju;function uy(n){setTimeout(function(){throw n})}function Rc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ko(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ko(e)}function Xi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ii="__reactFiber$"+Ys,Ho="__reactProps$"+Ys,wi="__reactContainer$"+Ys,Yu="__reactEvents$"+Ys,dy="__reactListeners$"+Ys,hy="__reactHandles$"+Ys;function Sr(n){var e=n[ii];if(e)return e;for(var t=n.parentNode;t;){if(e=t[wi]||t[ii]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pf(n);n!==null;){if(t=n[ii])return t;n=pf(n)}return e}n=t,t=n.parentNode}return null}function na(n){return n=n[ii]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function Yl(n){return n[Ho]||null}var $u=[],gs=-1;function ar(n){return{current:n}}function pt(n){0>gs||(n.current=$u[gs],$u[gs]=null,gs--)}function dt(n,e){gs++,$u[gs]=n.current,n.current=e}var tr={},Jt=ar(tr),pn=ar(!1),Rr=tr;function Ns(n,e){var t=n.type.contextTypes;if(!t)return tr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function yl(){pt(pn),pt(Jt)}function mf(n,e,t){if(Jt.current!==tr)throw Error(re(168));dt(Jt,e),dt(pn,t)}function Cg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,K_(n)||"Unknown",r));return Mt({},t,i)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Rr=Jt.current,dt(Jt,n),dt(pn,pn.current),!0}function gf(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=Cg(n,e,Rr),i.__reactInternalMemoizedMergedChildContext=n,pt(pn),pt(Jt),dt(Jt,n)):pt(pn),dt(pn,t)}var mi=null,$l=!1,Pc=!1;function bg(n){mi===null?mi=[n]:mi.push(n)}function fy(n){$l=!0,bg(n)}function lr(){if(!Pc&&mi!==null){Pc=!0;var n=0,e=it;try{var t=mi;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}mi=null,$l=!1}catch(r){throw mi!==null&&(mi=mi.slice(n+1)),Jm(Od,lr),r}finally{it=e,Pc=!1}}return null}var _s=[],vs=0,Sl=null,Ml=0,Ln=[],In=0,Pr=null,vi=1,yi="";function mr(n,e){_s[vs++]=Ml,_s[vs++]=Sl,Sl=n,Ml=e}function Rg(n,e,t){Ln[In++]=vi,Ln[In++]=yi,Ln[In++]=Pr,Pr=n;var i=vi;n=yi;var r=32-qn(i)-1;i&=~(1<<r),t+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-qn(e)+r|t<<r|i,yi=s+n}else vi=1<<s|t<<r|i,yi=n}function Xd(n){n.return!==null&&(mr(n,1),Rg(n,1,0))}function jd(n){for(;n===Sl;)Sl=_s[--vs],_s[vs]=null,Ml=_s[--vs],_s[vs]=null;for(;n===Pr;)Pr=Ln[--In],Ln[In]=null,yi=Ln[--In],Ln[In]=null,vi=Ln[--In],Ln[In]=null}var Tn=null,En=null,gt=!1,jn=null;function Pg(n,e){var t=On(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _f(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,En=Xi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Pr!==null?{id:vi,overflow:yi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=On(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,En=null,!0):!1;default:return!1}}function qu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ku(n){if(gt){var e=En;if(e){var t=e;if(!_f(n,e)){if(qu(n))throw Error(re(418));e=Xi(t.nextSibling);var i=Tn;e&&_f(n,e)?Pg(i,t):(n.flags=n.flags&-4097|2,gt=!1,Tn=n)}}else{if(qu(n))throw Error(re(418));n.flags=n.flags&-4097|2,gt=!1,Tn=n}}}function vf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function ya(n){if(n!==Tn)return!1;if(!gt)return vf(n),gt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xu(n.type,n.memoizedProps)),e&&(e=En)){if(qu(n))throw Lg(),Error(re(418));for(;e;)Pg(n,e),e=Xi(e.nextSibling)}if(vf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=Xi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=Tn?Xi(n.stateNode.nextSibling):null;return!0}function Lg(){for(var n=En;n;)n=Xi(n.nextSibling)}function Us(){En=Tn=null,gt=!1}function Yd(n){jn===null?jn=[n]:jn.push(n)}var py=Ci.ReactCurrentBatchConfig;function ro(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function xa(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function yf(n){var e=n._init;return e(n._payload)}function Ig(n){function e(u,g){if(n){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function t(u,g){if(!n)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=qi(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,n?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return n&&u.alternate===null&&(u.flags|=2),u}function a(u,g,_,x){return g===null||g.tag!==6?(g=kc(_,u.mode,x),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,x){var C=_.type;return C===ds?d(u,g,_.props.children,x,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ni&&yf(C)===g.type)?(x=r(g,_.props),x.ref=ro(u,g,_),x.return=u,x):(x=ll(_.type,_.key,_.props,null,u.mode,x),x.ref=ro(u,g,_),x.return=u,x)}function c(u,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Fc(_,u.mode,x),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function d(u,g,_,x,C){return g===null||g.tag!==7?(g=Tr(_,u.mode,x,C),g.return=u,g):(g=r(g,_),g.return=u,g)}function f(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return _=ll(g.type,g.key,g.props,null,u.mode,_),_.ref=ro(u,null,g),_.return=u,_;case us:return g=Fc(g,u.mode,_),g.return=u,g;case Ni:var x=g._init;return f(u,x(g._payload),_)}if(yo(g)||Js(g))return g=Tr(g,u.mode,_,null),g.return=u,g;xa(u,g)}return null}function h(u,g,_,x){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(u,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return _.key===C?l(u,g,_,x):null;case us:return _.key===C?c(u,g,_,x):null;case Ni:return C=_._init,h(u,g,C(_._payload),x)}if(yo(_)||Js(_))return C!==null?null:d(u,g,_,x,null);xa(u,_)}return null}function m(u,g,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(_)||null,a(g,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ca:return u=u.get(x.key===null?_:x.key)||null,l(g,u,x,C);case us:return u=u.get(x.key===null?_:x.key)||null,c(g,u,x,C);case Ni:var w=x._init;return m(u,g,_,w(x._payload),C)}if(yo(x)||Js(x))return u=u.get(_)||null,d(g,u,x,C,null);xa(g,x)}return null}function y(u,g,_,x){for(var C=null,w=null,T=g,R=g=0,S=null;T!==null&&R<_.length;R++){T.index>R?(S=T,T=null):S=T.sibling;var M=h(u,T,_[R],x);if(M===null){T===null&&(T=S);break}n&&T&&M.alternate===null&&e(u,T),g=s(M,g,R),w===null?C=M:w.sibling=M,w=M,T=S}if(R===_.length)return t(u,T),gt&&mr(u,R),C;if(T===null){for(;R<_.length;R++)T=f(u,_[R],x),T!==null&&(g=s(T,g,R),w===null?C=T:w.sibling=T,w=T);return gt&&mr(u,R),C}for(T=i(u,T);R<_.length;R++)S=m(T,u,R,_[R],x),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?R:S.key),g=s(S,g,R),w===null?C=S:w.sibling=S,w=S);return n&&T.forEach(function(k){return e(u,k)}),gt&&mr(u,R),C}function v(u,g,_,x){var C=Js(_);if(typeof C!="function")throw Error(re(150));if(_=C.call(_),_==null)throw Error(re(151));for(var w=C=null,T=g,R=g=0,S=null,M=_.next();T!==null&&!M.done;R++,M=_.next()){T.index>R?(S=T,T=null):S=T.sibling;var k=h(u,T,M.value,x);if(k===null){T===null&&(T=S);break}n&&T&&k.alternate===null&&e(u,T),g=s(k,g,R),w===null?C=k:w.sibling=k,w=k,T=S}if(M.done)return t(u,T),gt&&mr(u,R),C;if(T===null){for(;!M.done;R++,M=_.next())M=f(u,M.value,x),M!==null&&(g=s(M,g,R),w===null?C=M:w.sibling=M,w=M);return gt&&mr(u,R),C}for(T=i(u,T);!M.done;R++,M=_.next())M=m(T,u,R,M.value,x),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),g=s(M,g,R),w===null?C=M:w.sibling=M,w=M);return n&&T.forEach(function(F){return e(u,F)}),gt&&mr(u,R),C}function p(u,g,_,x){if(typeof _=="object"&&_!==null&&_.type===ds&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:e:{for(var C=_.key,w=g;w!==null;){if(w.key===C){if(C=_.type,C===ds){if(w.tag===7){t(u,w.sibling),g=r(w,_.props.children),g.return=u,u=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ni&&yf(C)===w.type){t(u,w.sibling),g=r(w,_.props),g.ref=ro(u,w,_),g.return=u,u=g;break e}t(u,w);break}else e(u,w);w=w.sibling}_.type===ds?(g=Tr(_.props.children,u.mode,x,_.key),g.return=u,u=g):(x=ll(_.type,_.key,_.props,null,u.mode,x),x.ref=ro(u,g,_),x.return=u,u=x)}return o(u);case us:e:{for(w=_.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{t(u,g);break}else e(u,g);g=g.sibling}g=Fc(_,u.mode,x),g.return=u,u=g}return o(u);case Ni:return w=_._init,p(u,g,w(_._payload),x)}if(yo(_))return y(u,g,_,x);if(Js(_))return v(u,g,_,x);xa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(u,g.sibling),g=r(g,_),g.return=u,u=g):(t(u,g),g=kc(_,u.mode,x),g.return=u,u=g),o(u)):t(u,g)}return p}var Os=Ig(!0),Dg=Ig(!1),wl=ar(null),El=null,ys=null,$d=null;function qd(){$d=ys=El=null}function Kd(n){var e=wl.current;pt(wl),n._currentValue=e}function Zu(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Rs(n,e){El=n,$d=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function Fn(n){var e=n._currentValue;if($d!==n)if(n={context:n,memoizedValue:e,next:null},ys===null){if(El===null)throw Error(re(308));ys=n,El.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return e}var Mr=null;function Zd(n){Mr===null?Mr=[n]:Mr.push(n)}function Ng(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Zd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ei(n,i)}function Ei(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ui=!1;function Qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Si(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(n,t)}return r=i.interleaved,r===null?(e.next=e,Zd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(n,t)}function nl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kd(n,t)}}function xf(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Tl(n,e,t,i){var r=n.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,v=a;switch(h=e,m=t,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(m,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,f,h):y,h==null)break e;f=Mt({},f,h);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,n.lanes=o,n.memoizedState=f}}function Sf(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ia={},oi=ar(ia),Vo=ar(ia),Wo=ar(ia);function wr(n){if(n===ia)throw Error(re(174));return n}function Jd(n,e){switch(dt(Wo,e),dt(Vo,n),dt(oi,ia),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lu(e,n)}pt(oi),dt(oi,e)}function ks(){pt(oi),pt(Vo),pt(Wo)}function Og(n){wr(Wo.current);var e=wr(oi.current),t=Lu(e,n.type);e!==t&&(dt(Vo,n),dt(oi,t))}function eh(n){Vo.current===n&&(pt(oi),pt(Vo))}var xt=ar(0);function Al(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function th(){for(var n=0;n<Lc.length;n++)Lc[n]._workInProgressVersionPrimary=null;Lc.length=0}var il=Ci.ReactCurrentDispatcher,Ic=Ci.ReactCurrentBatchConfig,Lr=0,St=null,Dt=null,Bt=null,Cl=!1,Co=!1,Xo=0,my=0;function Yt(){throw Error(re(321))}function nh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Qn(n[t],e[t]))return!1;return!0}function ih(n,e,t,i,r,s){if(Lr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=n===null||n.memoizedState===null?yy:xy,n=t(i,r),Co){s=0;do{if(Co=!1,Xo=0,25<=s)throw Error(re(301));s+=1,Bt=Dt=null,e.updateQueue=null,il.current=Sy,n=t(i,r)}while(Co)}if(il.current=bl,e=Dt!==null&&Dt.next!==null,Lr=0,Bt=Dt=St=null,Cl=!1,e)throw Error(re(300));return n}function rh(){var n=Xo!==0;return Xo=0,n}function ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?St.memoizedState=Bt=n:Bt=Bt.next=n,Bt}function zn(){if(Dt===null){var n=St.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=Bt===null?St.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=n;else{if(n===null)throw Error(re(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?St.memoizedState=Bt=n:Bt=Bt.next=n}return Bt}function jo(n,e){return typeof e=="function"?e(n):e}function Dc(n){var e=zn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,St.lanes|=s,Ir|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nc(n){var e=zn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function kg(){}function Fg(n,e){var t=St,i=zn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,sh(Gg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(t.flags|=2048,Yo(9,Bg.bind(null,t,i,r,e),void 0,null),Gt===null)throw Error(re(349));Lr&30||zg(t,e,r)}return r}function zg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Bg(n,e,t,i){e.value=t,e.getSnapshot=i,Hg(e)&&Vg(n)}function Gg(n,e,t){return t(function(){Hg(e)&&Vg(n)})}function Hg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Qn(n,t)}catch{return!0}}function Vg(n){var e=Ei(n,1);e!==null&&Kn(e,n,1,-1)}function Mf(n){var e=ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},e.queue=n,n=n.dispatch=vy.bind(null,St,n),[e.memoizedState,n]}function Yo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Wg(){return zn().memoizedState}function rl(n,e,t,i){var r=ti();St.flags|=n,r.memoizedState=Yo(1|e,t,void 0,i===void 0?null:i)}function ql(n,e,t,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&nh(i,o.deps)){r.memoizedState=Yo(e,t,s,i);return}}St.flags|=n,r.memoizedState=Yo(1|e,t,s,i)}function wf(n,e){return rl(8390656,8,n,e)}function sh(n,e){return ql(2048,8,n,e)}function Xg(n,e){return ql(4,2,n,e)}function jg(n,e){return ql(4,4,n,e)}function Yg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function $g(n,e,t){return t=t!=null?t.concat([n]):null,ql(4,4,Yg.bind(null,e,n),t)}function oh(){}function qg(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Kg(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Zg(n,e,t){return Lr&21?(Qn(t,e)||(t=ng(),St.lanes|=t,Ir|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function gy(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=Ic.transition;Ic.transition={};try{n(!1),e()}finally{it=t,Ic.transition=i}}function Qg(){return zn().memoizedState}function _y(n,e,t){var i=$i(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Jg(n))e0(e,t);else if(t=Ng(n,e,t,i),t!==null){var r=cn();Kn(t,n,i,r),t0(t,e,i)}}function vy(n,e,t){var i=$i(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jg(n))e0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Zd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ng(n,e,r,i),t!==null&&(r=cn(),Kn(t,n,i,r),t0(t,e,i))}}function Jg(n){var e=n.alternate;return n===St||e!==null&&e===St}function e0(n,e){Co=Cl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function t0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kd(n,t)}}var bl={readContext:Fn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},yy={readContext:Fn,useCallback:function(n,e){return ti().memoizedState=[n,e===void 0?null:e],n},useContext:Fn,useEffect:wf,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,rl(4194308,4,Yg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return rl(4194308,4,n,e)},useInsertionEffect:function(n,e){return rl(4,2,n,e)},useMemo:function(n,e){var t=ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=_y.bind(null,St,n),[i.memoizedState,n]},useRef:function(n){var e=ti();return n={current:n},e.memoizedState=n},useState:Mf,useDebugValue:oh,useDeferredValue:function(n){return ti().memoizedState=n},useTransition:function(){var n=Mf(!1),e=n[0];return n=gy.bind(null,n[1]),ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=St,r=ti();if(gt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),Gt===null)throw Error(re(349));Lr&30||zg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,wf(Gg.bind(null,i,s,n),[n]),i.flags|=2048,Yo(9,Bg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ti(),e=Gt.identifierPrefix;if(gt){var t=yi,i=vi;t=(i&~(1<<32-qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=my++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},xy={readContext:Fn,useCallback:qg,useContext:Fn,useEffect:sh,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Dc,useRef:Wg,useState:function(){return Dc(jo)},useDebugValue:oh,useDeferredValue:function(n){var e=zn();return Zg(e,Dt.memoizedState,n)},useTransition:function(){var n=Dc(jo)[0],e=zn().memoizedState;return[n,e]},useMutableSource:kg,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1},Sy={readContext:Fn,useCallback:qg,useContext:Fn,useEffect:sh,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:jg,useMemo:Kg,useReducer:Nc,useRef:Wg,useState:function(){return Nc(jo)},useDebugValue:oh,useDeferredValue:function(n){var e=zn();return Dt===null?e.memoizedState=n:Zg(e,Dt.memoizedState,n)},useTransition:function(){var n=Nc(jo)[0],e=zn().memoizedState;return[n,e]},useMutableSource:kg,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1};function Wn(n,e){if(n&&n.defaultProps){e=Mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Qu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Kl={isMounted:function(n){return(n=n._reactInternals)?Fr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=$i(n),s=Si(i,r);s.payload=e,t!=null&&(s.callback=t),e=ji(n,s,r),e!==null&&(Kn(e,n,r,i),nl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=$i(n),s=Si(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ji(n,s,r),e!==null&&(Kn(e,n,r,i),nl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=$i(n),r=Si(t,i);r.tag=2,e!=null&&(r.callback=e),e=ji(n,r,i),e!==null&&(Kn(e,n,i,t),nl(e,n,i))}};function Ef(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(t,i)||!zo(r,s):!0}function n0(n,e,t){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=mn(e)?Rr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Ns(n,r):tr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Tf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Kl.enqueueReplaceState(e,e.state,null)}function Ju(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Qd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=mn(e)?Rr:Jt.current,r.context=Ns(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),Tl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,e){try{var t="",i=e;do t+=q_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Uc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ed(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var My=typeof WeakMap=="function"?WeakMap:Map;function i0(n,e,t){t=Si(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Pl||(Pl=!0,ud=i),ed(n,e)},t}function r0(n,e,t){t=Si(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ed(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ed(n,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Af(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new My;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Oy.bind(null,n,e,t),e.then(n,n))}function Cf(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function bf(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Si(-1,1),e.tag=2,ji(t,e,1))),t.lanes|=1),n)}var wy=Ci.ReactCurrentOwner,fn=!1;function on(n,e,t,i){e.child=n===null?Dg(e,null,t,i):Os(e,n.child,t,i)}function Rf(n,e,t,i,r){t=t.render;var s=e.ref;return Rs(e,r),i=ih(n,e,t,i,s,r),t=rh(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ti(n,e,r)):(gt&&t&&Xd(e),e.flags|=1,on(n,e,i,r),e.child)}function Pf(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ph(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,s0(n,e,s,i,r)):(n=ll(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:zo,t(o,i)&&n.ref===e.ref)return Ti(n,e,r)}return e.flags|=1,n=qi(s,i),n.ref=e.ref,n.return=e,e.child=n}function s0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(zo(s,i)&&n.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,Ti(n,e,r)}return td(n,e,t,i,r)}function o0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ss,wn),wn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,dt(Ss,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,dt(Ss,wn),wn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,dt(Ss,wn),wn|=i;return on(n,e,r,t),e.child}function a0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function td(n,e,t,i,r){var s=mn(t)?Rr:Jt.current;return s=Ns(e,s),Rs(e,r),t=ih(n,e,t,i,s,r),i=rh(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ti(n,e,r)):(gt&&i&&Xd(e),e.flags|=1,on(n,e,t,r),e.child)}function Lf(n,e,t,i,r){if(mn(t)){var s=!0;xl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)sl(n,e),n0(e,t,i),Ju(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=mn(t)?Rr:Jt.current,c=Ns(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tf(e,o,i,c),Ui=!1;var h=e.memoizedState;o.state=h,Tl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||pn.current||Ui?(typeof d=="function"&&(Qu(e,t,d,i),l=e.memoizedState),(a=Ui||Ef(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ug(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=mn(t)?Rr:Jt.current,l=Ns(e,l));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Tf(e,o,i,l),Ui=!1,h=e.memoizedState,o.state=h,Tl(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||pn.current||Ui?(typeof m=="function"&&(Qu(e,t,m,i),y=e.memoizedState),(c=Ui||Ef(e,t,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return nd(n,e,t,i,s,r)}function nd(n,e,t,i,r,s){a0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gf(e,t,!1),Ti(n,e,s);i=e.stateNode,wy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Os(e,n.child,null,s),e.child=Os(e,null,a,s)):on(n,e,a,s),e.memoizedState=i.state,r&&gf(e,t,!0),e.child}function l0(n){var e=n.stateNode;e.pendingContext?mf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(n,e.context,!1),Jd(n,e.containerInfo)}function If(n,e,t,i,r){return Us(),Yd(r),e.flags|=256,on(n,e,t,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(n){return{baseLanes:n,cachePool:null,transitions:null}}function c0(n,e,t){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),dt(xt,r&1),n===null)return Ku(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,i,0,null),n=Tr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rd(t),e.memoizedState=id,n):ah(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ey(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=Tr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?rd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=id,i}return s=n.child,n=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ah(n,e){return e=Jl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Sa(n,e,t,i){return i!==null&&Yd(i),Os(e,n.child,null,t),n=ah(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ey(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Uc(Error(re(422))),Sa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,n.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if(!(e.mode&1))return Sa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Uc(s,i,void 0),Sa(n,e,o,i)}if(a=(o&n.childLanes)!==0,fn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(n,r),Kn(i,n,r,-1))}return fh(),i=Uc(Error(re(421))),Sa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=ky.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=Xi(r.nextSibling),Tn=e,gt=!0,jn=null,n!==null&&(Ln[In++]=vi,Ln[In++]=yi,Ln[In++]=Pr,vi=n.id,yi=n.overflow,Pr=e),e=ah(e,i.children),e.flags|=4096,e)}function Df(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zu(n.return,e,t)}function Oc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function u0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Df(n,t,e);else if(n.tag===19)Df(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(dt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Al(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Oc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Al(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Oc(e,!0,t,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ti(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ir|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=qi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=qi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ty(n,e,t){switch(e.tag){case 3:l0(e),Us();break;case 5:Og(e);break;case 1:mn(e.type)&&xl(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(xt,xt.current&1),e.flags|=128,null):t&e.child.childLanes?c0(n,e,t):(dt(xt,xt.current&1),n=Ti(n,e,t),n!==null?n.sibling:null);dt(xt,xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return u0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,o0(n,e,t)}return Ti(n,e,t)}var d0,sd,h0,f0;d0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sd=function(){};h0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,wr(oi.current);var s=null;switch(t){case"input":r=Cu(n,r),i=Cu(n,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(n,r),i=Pu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=vl)}Iu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f0=function(n,e,t,i){t!==i&&(e.flags|=4)};function so(n,e){if(!gt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function $t(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Ay(n,e,t){var i=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&yl(),$t(e),null;case 3:return i=e.stateNode,ks(),pt(pn),pt(Jt),th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ya(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(fd(jn),jn=null))),sd(n,e),$t(e),null;case 5:eh(e);var r=wr(Wo.current);if(t=e.type,n!==null&&e.stateNode!=null)h0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return $t(e),null}if(n=wr(oi.current),ya(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Ho]=s,n=(e.mode&1)!==0,t){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)ht(So[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Gh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Vh(i,s),ht("invalid",i)}Iu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,n),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(t){case"input":ua(i),Hh(i,s,!0);break;case"textarea":ua(i),Wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ii]=e,n[Ho]=i,d0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Du(t,i),t){case"dialog":ht("cancel",n),ht("close",n),r=i;break;case"iframe":case"object":case"embed":ht("load",n),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)ht(So[r],n);r=i;break;case"source":ht("error",n),r=i;break;case"img":case"image":case"link":ht("error",n),ht("load",n),r=i;break;case"details":ht("toggle",n),r=i;break;case"input":Gh(n,i),r=Cu(n,i),ht("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ht("invalid",n);break;case"textarea":Vh(n,i),r=Pu(n,i),ht("invalid",n);break;default:r=i}Iu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Do(n,l):typeof l=="number"&&Do(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",n):l!=null&&Ld(n,s,l,o))}switch(t){case"input":ua(n),Hh(n,i,!1);break;case"textarea":ua(n),Wh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+er(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ts(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=vl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(n&&e.stateNode!=null)f0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=wr(Wo.current),wr(oi.current),ya(e)){if(i=e.stateNode,t=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:va(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return $t(e),null;case 13:if(pt(xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gt&&En!==null&&e.mode&1&&!(e.flags&128))Lg(),Us(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ii]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else jn!==null&&(fd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||xt.current&1?Nt===0&&(Nt=3):fh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return ks(),sd(n,e),n===null&&Bo(e.stateNode.containerInfo),$t(e),null;case 10:return Kd(e.type._context),$t(e),null;case 17:return mn(e.type)&&yl(),$t(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(Nt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Al(n),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return dt(xt,xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>zs&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(n=Al(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return $t(e),null}else 2*Rt()-s.renderingStartTime>zs&&t!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=xt.current,dt(xt,i?t&1|2:t&1),e):($t(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Cy(n,e){switch(jd(e),e.tag){case 1:return mn(e.type)&&yl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ks(),pt(pn),pt(Jt),th(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return eh(e),null;case 13:if(pt(xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return pt(xt),null;case 4:return ks(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var Ma=!1,Zt=!1,by=typeof WeakSet=="function"?WeakSet:Set,ve=null;function xs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Tt(n,e,i)}else t.current=null}function od(n,e,t){try{t()}catch(i){Tt(n,e,i)}}var Nf=!1;function Ry(n,e){if(Vu=ml,n=vg(),Wd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wu={focusedElem:n,selectionRange:t},ml=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,p=y.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Wn(e.type,v),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Tt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return y=Nf,Nf=!1,y}function bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,t,s)}r=r.next}while(r!==i)}}function Zl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function p0(n){var e=n.alternate;e!==null&&(n.alternate=null,p0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ii],delete e[Ho],delete e[Yu],delete e[dy],delete e[hy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function m0(n){return n.tag===5||n.tag===3||n.tag===4}function Uf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||m0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(n=n.child,n!==null))for(ld(n,e,t),n=n.sibling;n!==null;)ld(n,e,t),n=n.sibling}function cd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(cd(n,e,t),n=n.sibling;n!==null;)cd(n,e,t),n=n.sibling}var Ht=null,Xn=!1;function bi(n,e,t){for(t=t.child;t!==null;)g0(n,e,t),t=t.sibling}function g0(n,e,t){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Vl,t)}catch{}switch(t.tag){case 5:Zt||xs(t,e);case 6:var i=Ht,r=Xn;Ht=null,bi(n,e,t),Ht=i,Xn=r,Ht!==null&&(Xn?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(Xn?(n=Ht,t=t.stateNode,n.nodeType===8?Rc(n.parentNode,t):n.nodeType===1&&Rc(n,t),ko(n)):Rc(Ht,t.stateNode));break;case 4:i=Ht,r=Xn,Ht=t.stateNode.containerInfo,Xn=!0,bi(n,e,t),Ht=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(t,e,o),r=r.next}while(r!==i)}bi(n,e,t);break;case 1:if(!Zt&&(xs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Tt(t,e,a)}bi(n,e,t);break;case 21:bi(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,bi(n,e,t),Zt=i):bi(n,e,t);break;default:bi(n,e,t)}}function Of(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new by),e.forEach(function(i){var r=Fy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Bn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Xn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ht===null)throw Error(re(160));g0(s,o,r),Ht=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,n),e=e.sibling}function _0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(e,n),ei(n),i&4){try{bo(3,n,n.return),Zl(3,n)}catch(v){Tt(n,n.return,v)}try{bo(5,n,n.return)}catch(v){Tt(n,n.return,v)}}break;case 1:Bn(e,n),ei(n),i&512&&t!==null&&xs(t,t.return);break;case 5:if(Bn(e,n),ei(n),i&512&&t!==null&&xs(t,t.return),n.flags&32){var r=n.stateNode;try{Do(r,"")}catch(v){Tt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),Du(a,o);var c=Du(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Wm(r,f):d==="dangerouslySetInnerHTML"?Hm(r,f):d==="children"?Do(r,f):Ld(r,d,f,c)}switch(a){case"input":bu(r,s);break;case"textarea":Bm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ts(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ho]=s}catch(v){Tt(n,n.return,v)}}break;case 6:if(Bn(e,n),ei(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Tt(n,n.return,v)}}break;case 3:if(Bn(e,n),ei(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(v){Tt(n,n.return,v)}break;case 4:Bn(e,n),ei(n);break;case 13:Bn(e,n),ei(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uh=Rt())),i&4&&Of(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||d,Bn(e,n),Zt=c):Bn(e,n),ei(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(ve=n,d=n.child;d!==null;){for(f=ve=d;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:xs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Tt(i,t,v)}}break;case 5:xs(h,h.return);break;case 22:if(h.memoizedState!==null){Ff(f);continue}}m!==null?(m.return=h,ve=m):Ff(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vm("display",o))}catch(v){Tt(n,n.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Tt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,n),ei(n),i&4&&Of(n);break;case 21:break;default:Bn(e,n),ei(n)}}function ei(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(m0(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Do(r,""),i.flags&=-33);var s=Uf(n);cd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Uf(n);ld(n,a,o);break;default:throw Error(re(161))}}catch(l){Tt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Py(n,e,t){ve=n,v0(n)}function v0(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ma;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Ma;var c=Zt;if(Ma=o,(Zt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?zf(r):l!==null?(l.return=o,ve=l):zf(r);for(;s!==null;)ve=s,v0(s),s=s.sibling;ve=r,Ma=a,Zt=c}kf(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):kf(n)}}function kf(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Wn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Sf(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Zt||e.flags&512&&ad(e)}catch(h){Tt(e,e.return,h)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Ff(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function zf(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zl(4,e)}catch(l){Tt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===n){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Ly=Math.ceil,Rl=Ci.ReactCurrentDispatcher,lh=Ci.ReactCurrentOwner,kn=Ci.ReactCurrentBatchConfig,tt=0,Gt=null,It=null,Vt=0,wn=0,Ss=ar(0),Nt=0,$o=null,Ir=0,Ql=0,ch=0,Ro=null,hn=null,uh=0,zs=1/0,pi=null,Pl=!1,ud=null,Yi=null,wa=!1,zi=null,Ll=0,Po=0,dd=null,ol=-1,al=0;function cn(){return tt&6?Rt():ol!==-1?ol:ol=Rt()}function $i(n){return n.mode&1?tt&2&&Vt!==0?Vt&-Vt:py.transition!==null?(al===0&&(al=ng()),al):(n=it,n!==0||(n=window.event,n=n===void 0?16:cg(n.type)),n):1}function Kn(n,e,t,i){if(50<Po)throw Po=0,dd=null,Error(re(185));ea(n,t,i),(!(tt&2)||n!==Gt)&&(n===Gt&&(!(tt&2)&&(Ql|=t),Nt===4&&ki(n,Vt)),gn(n,i),t===1&&tt===0&&!(e.mode&1)&&(zs=Rt()+500,$l&&lr()))}function gn(n,e){var t=n.callbackNode;pv(n,e);var i=pl(n,n===Gt?Vt:0);if(i===0)t!==null&&Yh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Yh(t),e===1)n.tag===0?fy(Bf.bind(null,n)):bg(Bf.bind(null,n)),cy(function(){!(tt&6)&&lr()}),t=null;else{switch(ig(i)){case 1:t=Od;break;case 4:t=eg;break;case 16:t=fl;break;case 536870912:t=tg;break;default:t=fl}t=A0(t,y0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function y0(n,e){if(ol=-1,al=0,tt&6)throw Error(re(327));var t=n.callbackNode;if(Ps()&&n.callbackNode!==t)return null;var i=pl(n,n===Gt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Il(n,i);else{e=i;var r=tt;tt|=2;var s=S0();(Gt!==n||Vt!==e)&&(pi=null,zs=Rt()+500,Er(n,e));do try{Ny();break}catch(a){x0(n,a)}while(!0);qd(),Rl.current=s,tt=r,It!==null?e=0:(Gt=null,Vt=0,e=Nt)}if(e!==0){if(e===2&&(r=Fu(n),r!==0&&(i=r,e=hd(n,r))),e===1)throw t=$o,Er(n,0),ki(n,i),gn(n,Rt()),t;if(e===6)ki(n,i);else{if(r=n.current.alternate,!(i&30)&&!Iy(r)&&(e=Il(n,i),e===2&&(s=Fu(n),s!==0&&(i=s,e=hd(n,s))),e===1))throw t=$o,Er(n,0),ki(n,i),gn(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:gr(n,hn,pi);break;case 3:if(ki(n,i),(i&130023424)===i&&(e=uh+500-Rt(),10<e)){if(pl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ju(gr.bind(null,n,hn,pi),e);break}gr(n,hn,pi);break;case 4:if(ki(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ly(i/1960))-i,10<i){n.timeoutHandle=ju(gr.bind(null,n,hn,pi),i);break}gr(n,hn,pi);break;case 5:gr(n,hn,pi);break;default:throw Error(re(329))}}}return gn(n,Rt()),n.callbackNode===t?y0.bind(null,n):null}function hd(n,e){var t=Ro;return n.current.memoizedState.isDehydrated&&(Er(n,e).flags|=256),n=Il(n,e),n!==2&&(e=hn,hn=t,e!==null&&fd(e)),n}function fd(n){hn===null?hn=n:hn.push.apply(hn,n)}function Iy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(n,e){for(e&=~ch,e&=~Ql,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-qn(e),i=1<<t;n[t]=-1,e&=~i}}function Bf(n){if(tt&6)throw Error(re(327));Ps();var e=pl(n,0);if(!(e&1))return gn(n,Rt()),null;var t=Il(n,e);if(n.tag!==0&&t===2){var i=Fu(n);i!==0&&(e=i,t=hd(n,i))}if(t===1)throw t=$o,Er(n,0),ki(n,e),gn(n,Rt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,gr(n,hn,pi),gn(n,Rt()),null}function dh(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(zs=Rt()+500,$l&&lr())}}function Dr(n){zi!==null&&zi.tag===0&&!(tt&6)&&Ps();var e=tt;tt|=1;var t=kn.transition,i=it;try{if(kn.transition=null,it=1,n)return n()}finally{it=i,kn.transition=t,tt=e,!(tt&6)&&lr()}}function hh(){wn=Ss.current,pt(Ss)}function Er(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ly(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:ks(),pt(pn),pt(Jt),th();break;case 5:eh(i);break;case 4:ks();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Kd(i.type._context);break;case 22:case 23:hh()}t=t.return}if(Gt=n,It=n=qi(n.current,null),Vt=wn=e,Nt=0,$o=null,ch=Ql=Ir=0,hn=Ro=null,Mr!==null){for(e=0;e<Mr.length;e++)if(t=Mr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Mr=null}return n}function x0(n,e){do{var t=It;try{if(qd(),il.current=bl,Cl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Lr=0,Bt=Dt=St=null,Co=!1,Xo=0,lh.current=null,t===null||t.return===null){Nt=1,$o=e,It=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Cf(o);if(m!==null){m.flags&=-257,bf(m,o,a,s,e),m.mode&1&&Af(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Af(s,c,e),fh();break e}l=Error(re(426))}}else if(gt&&a.mode&1){var p=Cf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),bf(p,o,a,s,e),Yd(Fs(l,a));break e}}s=l=Fs(l,a),Nt!==4&&(Nt=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=i0(s,l,e);xf(s,u);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Yi===null||!Yi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=r0(s,a,e);xf(s,x);break e}}s=s.return}while(s!==null)}w0(t)}catch(C){e=C,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function S0(){var n=Rl.current;return Rl.current=bl,n===null?bl:n}function fh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Gt===null||!(Ir&268435455)&&!(Ql&268435455)||ki(Gt,Vt)}function Il(n,e){var t=tt;tt|=2;var i=S0();(Gt!==n||Vt!==e)&&(pi=null,Er(n,e));do try{Dy();break}catch(r){x0(n,r)}while(!0);if(qd(),tt=t,Rl.current=i,It!==null)throw Error(re(261));return Gt=null,Vt=0,Nt}function Dy(){for(;It!==null;)M0(It)}function Ny(){for(;It!==null&&!sv();)M0(It)}function M0(n){var e=T0(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?w0(n):It=e,lh.current=null}function w0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Cy(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nt=6,It=null;return}}else if(t=Ay(t,e,wn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);Nt===0&&(Nt=5)}function gr(n,e,t){var i=it,r=kn.transition;try{kn.transition=null,it=1,Uy(n,e,t,i)}finally{kn.transition=r,it=i}return null}function Uy(n,e,t,i){do Ps();while(zi!==null);if(tt&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(mv(n,s),n===Gt&&(It=Gt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wa||(wa=!0,A0(fl,function(){return Ps(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=it;it=1;var a=tt;tt|=4,lh.current=null,Ry(n,t),_0(t,n),ty(Wu),ml=!!Vu,Wu=Vu=null,n.current=t,Py(t),ov(),tt=a,it=o,kn.transition=s}else n.current=t;if(wa&&(wa=!1,zi=n,Ll=r),s=n.pendingLanes,s===0&&(Yi=null),cv(t.stateNode),gn(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,n=ud,ud=null,n;return Ll&1&&n.tag!==0&&Ps(),s=n.pendingLanes,s&1?n===dd?Po++:(Po=0,dd=n):Po=0,lr(),null}function Ps(){if(zi!==null){var n=ig(Ll),e=kn.transition,t=it;try{if(kn.transition=null,it=16>n?16:n,zi===null)var i=!1;else{if(n=zi,zi=null,Ll=0,tt&6)throw Error(re(331));var r=tt;for(tt|=4,ve=n.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var f=d.child;if(f!==null)f.return=d,ve=f;else for(;ve!==null;){d=ve;var h=d.sibling,m=d.return;if(p0(d),d===c){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var g=n.current;for(ve=g;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=g;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){ve=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ve=x;break e}ve=a.return}}if(tt=r,lr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Vl,n)}catch{}i=!0}return i}finally{it=t,kn.transition=e}}return!1}function Gf(n,e,t){e=Fs(t,e),e=i0(n,e,1),n=ji(n,e,1),e=cn(),n!==null&&(ea(n,1,e),gn(n,e))}function Tt(n,e,t){if(n.tag===3)Gf(n,n,t);else for(;e!==null;){if(e.tag===3){Gf(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){n=Fs(t,n),n=r0(e,n,1),e=ji(e,n,1),n=cn(),e!==null&&(ea(e,1,n),gn(e,n));break}}e=e.return}}function Oy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Gt===n&&(Vt&t)===t&&(Nt===4||Nt===3&&(Vt&130023424)===Vt&&500>Rt()-uh?Er(n,0):ch|=t),gn(n,e)}function E0(n,e){e===0&&(n.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var t=cn();n=Ei(n,e),n!==null&&(ea(n,e,t),gn(n,t))}function ky(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),E0(n,t)}function Fy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),E0(n,t)}var T0;T0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,Ty(n,e,t);fn=!!(n.flags&131072)}else fn=!1,gt&&e.flags&1048576&&Rg(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(n,e),n=e.pendingProps;var r=Ns(e,Jt.current);Rs(e,t),r=ih(null,e,i,n,r,t);var s=rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qd(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,Ju(e,i,n,t),e=nd(null,e,i,!0,s,t)):(e.tag=0,gt&&s&&Xd(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),n=Wn(i,n),r){case 0:e=td(null,e,i,n,t);break e;case 1:e=Lf(null,e,i,n,t);break e;case 11:e=Rf(null,e,i,n,t);break e;case 14:e=Pf(null,e,i,Wn(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),td(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Lf(n,e,i,r,t);case 3:e:{if(l0(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(n,e),Tl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(re(423)),e),e=If(n,e,i,t,r);break e}else if(i!==r){r=Fs(Error(re(424)),e),e=If(n,e,i,t,r);break e}else for(En=Xi(e.stateNode.containerInfo.firstChild),Tn=e,gt=!0,jn=null,t=Dg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Us(),i===r){e=Ti(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return Og(e),n===null&&Ku(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Xu(i,r)?o=null:s!==null&&Xu(i,s)&&(e.flags|=32),a0(n,e),on(n,e,o,t),e.child;case 6:return n===null&&Ku(e),null;case 13:return c0(n,e,t);case 4:return Jd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Os(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Rf(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(wl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!pn.current){e=Ti(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zu(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zu(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,t),r=Fn(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Pf(n,e,i,r,t);case 15:return s0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),sl(n,e),e.tag=1,mn(i)?(n=!0,xl(e)):n=!1,Rs(e,t),n0(e,i,r),Ju(e,i,r,t),nd(null,e,i,!0,n,t);case 19:return u0(n,e,t);case 22:return o0(n,e,t)}throw Error(re(156,e.tag))};function A0(n,e){return Jm(n,e)}function zy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(n,e,t,i){return new zy(n,e,t,i)}function ph(n){return n=n.prototype,!(!n||!n.isReactComponent)}function By(n){if(typeof n=="function")return ph(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Dd)return 11;if(n===Nd)return 14}return 2}function qi(n,e){var t=n.alternate;return t===null?(t=On(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ll(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ph(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ds:return Tr(t.children,r,s,e);case Id:o=8,r|=8;break;case wu:return n=On(12,t,e,r|2),n.elementType=wu,n.lanes=s,n;case Eu:return n=On(13,t,e,r),n.elementType=Eu,n.lanes=s,n;case Tu:return n=On(19,t,e,r),n.elementType=Tu,n.lanes=s,n;case Om:return Jl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Nm:o=10;break e;case Um:o=9;break e;case Dd:o=11;break e;case Nd:o=14;break e;case Ni:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=On(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Tr(n,e,t,i){return n=On(7,n,i,e),n.lanes=t,n}function Jl(n,e,t,i){return n=On(22,n,i,e),n.elementType=Om,n.lanes=t,n.stateNode={isHidden:!1},n}function kc(n,e,t){return n=On(6,n,null,e),n.lanes=t,n}function Fc(n,e,t){return e=On(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Gy(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mh(n,e,t,i,r,s,o,a,l){return n=new Gy(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(s),n}function Hy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function C0(n){if(!n)return tr;n=n._reactInternals;e:{if(Fr(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(mn(t))return Cg(n,t,e)}return e}function b0(n,e,t,i,r,s,o,a,l){return n=mh(t,i,!0,n,r,s,o,a,l),n.context=C0(null),t=n.current,i=cn(),r=$i(t),s=Si(i,r),s.callback=e??null,ji(t,s,r),n.current.lanes=r,ea(n,r,i),gn(n,i),n}function ec(n,e,t,i){var r=e.current,s=cn(),o=$i(r);return t=C0(t),e.context===null?e.context=t:e.pendingContext=t,e=Si(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ji(r,e,o),n!==null&&(Kn(n,r,o,s),nl(n,r,o)),o}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function gh(n,e){Hf(n,e),(n=n.alternate)&&Hf(n,e)}function Vy(){return null}var R0=typeof reportError=="function"?reportError:function(n){console.error(n)};function _h(n){this._internalRoot=n}tc.prototype.render=_h.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));ec(n,e,null,null)};tc.prototype.unmount=_h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Dr(function(){ec(null,n,null,null)}),e[wi]=null}};function tc(n){this._internalRoot=n}tc.prototype.unstable_scheduleHydration=function(n){if(n){var e=og();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Oi.length&&e!==0&&e<Oi[t].priority;t++);Oi.splice(t,0,n),t===0&&lg(n)}};function vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function Wy(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dl(o);s.call(c)}}var o=b0(e,i,n,0,null,!1,!1,"",Vf);return n._reactRootContainer=o,n[wi]=o.current,Bo(n.nodeType===8?n.parentNode:n),Dr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Dl(l);a.call(c)}}var l=mh(n,0,!1,null,null,!1,!1,"",Vf);return n._reactRootContainer=l,n[wi]=l.current,Bo(n.nodeType===8?n.parentNode:n),Dr(function(){ec(e,l,t,i)}),l}function ic(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Dl(o);a.call(l)}}ec(e,o,n,r)}else o=Wy(t,e,n,r,i);return Dl(o)}rg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=xo(e.pendingLanes);t!==0&&(kd(e,t|1),gn(e,Rt()),!(tt&6)&&(zs=Rt()+500,lr()))}break;case 13:Dr(function(){var i=Ei(n,1);if(i!==null){var r=cn();Kn(i,n,1,r)}}),gh(n,1)}};Fd=function(n){if(n.tag===13){var e=Ei(n,134217728);if(e!==null){var t=cn();Kn(e,n,134217728,t)}gh(n,134217728)}};sg=function(n){if(n.tag===13){var e=$i(n),t=Ei(n,e);if(t!==null){var i=cn();Kn(t,n,e,i)}gh(n,e)}};og=function(){return it};ag=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};Uu=function(n,e,t){switch(e){case"input":if(bu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Yl(i);if(!r)throw Error(re(90));Fm(i),bu(i,r)}}}break;case"textarea":Bm(n,t);break;case"select":e=t.value,e!=null&&Ts(n,!!t.multiple,e,!1)}};Ym=dh;$m=Dr;var Xy={usingClientEntryPoint:!1,Events:[na,ms,Yl,Xm,jm,dh]},oo={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zm(n),n===null?null:n.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Vl=Ea.inject(jy),si=Ea}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(e))throw Error(re(200));return Hy(n,e,null,t)};Cn.createRoot=function(n,e){if(!vh(n))throw Error(re(299));var t=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mh(n,1,!1,null,null,t,!1,i,r),n[wi]=e.current,Bo(n.nodeType===8?n.parentNode:n),new _h(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=Zm(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return Dr(n)};Cn.hydrate=function(n,e,t){if(!nc(e))throw Error(re(200));return ic(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!vh(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=R0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=b0(e,null,n,1,t??null,r,!1,s,o),n[wi]=e.current,Bo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tc(e)};Cn.render=function(n,e,t){if(!nc(e))throw Error(re(200));return ic(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!nc(n))throw Error(re(40));return n._reactRootContainer?(Dr(function(){ic(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1};Cn.unstable_batchedUpdates=dh;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nc(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return ic(n,e,t,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function P0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P0)}catch(n){console.error(n)}}P0(),Pm.exports=Cn;var Yy=Pm.exports,Wf=Yy;Su.createRoot=Wf.createRoot,Su.hydrateRoot=Wf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="160",$y=0,Xf=1,qy=2,L0=1,I0=2,fi=3,nr=0,_n=1,ri=2,Ki=0,Ls=1,jf=2,Yf=3,$f=4,Ky=5,yr=100,Zy=101,Qy=102,qf=103,Kf=104,Jy=200,ex=201,tx=202,nx=203,pd=204,md=205,ix=206,rx=207,sx=208,ox=209,ax=210,lx=211,cx=212,ux=213,dx=214,hx=0,fx=1,px=2,Nl=3,mx=4,gx=5,_x=6,vx=7,D0=0,yx=1,xx=2,Zi=0,Sx=1,Mx=2,wx=3,N0=4,Ex=5,Tx=6,U0=300,Bs=301,Gs=302,gd=303,_d=304,rc=306,qo=1e3,Yn=1001,vd=1002,an=1003,Zf=1004,zc=1005,Qt=1006,Ax=1007,Hs=1008,Qi=1009,Cx=1010,bx=1011,xh=1012,O0=1013,Bi=1014,Gi=1015,Ko=1016,k0=1017,F0=1018,Ar=1020,Rx=1021,$n=1023,Px=1024,Lx=1025,Cr=1026,Vs=1027,Ix=1028,z0=1029,Dx=1030,B0=1031,G0=1033,Bc=33776,Gc=33777,Hc=33778,Vc=33779,Qf=35840,Jf=35841,ep=35842,tp=35843,H0=36196,np=37492,ip=37496,rp=37808,sp=37809,op=37810,ap=37811,lp=37812,cp=37813,up=37814,dp=37815,hp=37816,fp=37817,pp=37818,mp=37819,gp=37820,_p=37821,Wc=36492,vp=36494,yp=36495,Nx=36283,xp=36284,Sp=36285,Mp=36286,V0=3e3,br=3001,Ux=3200,Ox=3201,W0=0,kx=1,Un="",At="srgb",Ai="srgb-linear",Sh="display-p3",sc="display-p3-linear",Ul="linear",ft="srgb",Ol="rec709",kl="p3",Br=7680,wp=519,Fx=512,zx=513,Bx=514,X0=515,Gx=516,Hx=517,Vx=518,Wx=519,yd=35044,Ep="300 es",xd=1035,xi=2e3,Fl=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Sd=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function Xx(n,e){return(n%e+e)%e}function jc(n,e,t){return(1-t)*n+t*e}function Tp(n){return(n&n-1)===0&&n!==0}function Md(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],y=i[8],v=r[0],p=r[3],u=r[6],g=r[1],_=r[4],x=r[7],C=r[2],w=r[5],T=r[8];return s[0]=o*v+a*g+l*C,s[3]=o*p+a*_+l*w,s[6]=o*u+a*x+l*T,s[1]=c*v+d*g+f*C,s[4]=c*p+d*_+f*w,s[7]=c*u+d*x+f*T,s[2]=h*v+m*g+y*C,s[5]=h*p+m*_+y*w,s[8]=h*u+m*x+y*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,y=t*f+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new $e;function j0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jx(){const n=zl("canvas");return n.style.display="block",n}const Ap={};function Lo(n){n in Ap||(Ap[n]=!0,console.warn(n))}const Cp=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Ai]:{transfer:Ul,primaries:Ol,toReference:n=>n,fromReference:n=>n},[At]:{transfer:ft,primaries:Ol,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sc]:{transfer:Ul,primaries:kl,toReference:n=>n.applyMatrix3(bp),fromReference:n=>n.applyMatrix3(Cp)},[Sh]:{transfer:ft,primaries:kl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bp),fromReference:n=>n.applyMatrix3(Cp).convertLinearToSRGB()}},Yx=new Set([Ai,sc]),st={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ta[e].toReference,r=Ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===Un?Ul:Ta[n].transfer}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $c(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class Y0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gr===void 0&&(Gr=zl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Y0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class vn extends $s{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=Yn,r=Yn,s=Qt,o=Hs,a=$n,l=Qi,c=vn.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Ji(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===br?At:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?br:V0}set encoding(e){Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?At:Un}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=U0;vn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],y=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(m+1)/2,C=(u+1)/2,w=(d+h)/4,T=(f+v)/4,R=(y+p)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=T/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-y)*(p-y)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-y)/g,this.y=(f-v)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kx extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?At:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends Kx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class q0 extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zx extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==h||c!==m||d!==y){let p=1-a;const u=l*h+c*m+d*y+f*v,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,u*g);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const x=a*g;if(l=l*p+h*x,c=c*p+m*x,d=d*p+y*x,f=f*p+v*x,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+d*f+l*m-c*h,e[t+1]=l*y+d*h+c*f-a*m,e[t+2]=c*y+d*m+a*h-l*f,e[t+3]=d*y-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"YXZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"ZXY":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"ZYX":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"YZX":this._x=h*d*f+c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f-h*m*y;break;case"XZY":this._x=h*d*f-c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new I,Rp=new ra;class sa{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ca.subVectors(this.max,ao),Hr.subVectors(e.a,ao),Vr.subVectors(e.b,ao),Wr.subVectors(e.c,ao),Ri.subVectors(Vr,Hr),Pi.subVectors(Wr,Vr),dr.subVectors(Hr,Wr);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-dr.z,dr.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,dr.z,0,-dr.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-dr.y,dr.x,0];return!Zc(t,Hr,Vr,Wr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Hr,Vr,Wr,Ca))?!1:(ba.crossVectors(Ri,Pi),t=[ba.x,ba.y,ba.z],Zc(t,Hr,Vr,Wr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Aa=new sa,Hr=new I,Vr=new I,Wr=new I,Ri=new I,Pi=new I,dr=new I,ao=new I,Ca=new I,ba=new I,hr=new I;function Zc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Qx=new sa,lo=new I,Qc=new I;class Mh{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Qc)),this.expandByPoint(lo.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new I,Jc=new I,Ra=new I,Li=new I,eu=new I,Pa=new I,tu=new I;class Jx{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jc.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Li.dot(this.direction),l=-Li.dot(Ra),c=Li.lengthSq(),d=Math.abs(1-o*o);let f,h,m,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const v=1/d;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jc).addScaledVector(Ra,h),m}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){eu.subVectors(t,e),Pa.subVectors(i,e),tu.crossVectors(eu,Pa);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Pa.crossVectors(Li,Pa));if(l<0)return null;const c=a*this.direction.dot(eu.cross(Li));if(c<0||l+c>o)return null;const d=-a*Li.dot(tu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,s,o,a,l,c,d,f,h,m,y,v,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,f,h,m,y,v,p)}set(e,t,i,r,s,o,a,l,c,d,f,h,m,y,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=y,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,y=a*d,v=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+y*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,y=c*d,v=c*f;t[0]=h+v*a,t[4]=y*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-y,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,y=c*d,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,y=a*d,v=a*f;t[0]=l*d,t[4]=y*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,v=a*c;t[0]=l*d,t[4]=v-h*f,t[8]=y*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*f+y,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,v=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+v,t[5]=o*d,t[9]=m*f-y,t[2]=y*f-m,t[6]=a*d,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eS,e,tS)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ii.crossVectors(i,Sn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ii.crossVectors(i,Sn)),Ii.normalize(),La.crossVectors(Sn,Ii),r[0]=Ii.x,r[4]=La.x,r[8]=Sn.x,r[1]=Ii.y,r[5]=La.y,r[9]=Sn.y,r[2]=Ii.z,r[6]=La.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],y=i[2],v=i[6],p=i[10],u=i[14],g=i[3],_=i[7],x=i[11],C=i[15],w=r[0],T=r[4],R=r[8],S=r[12],M=r[1],k=r[5],F=r[9],q=r[13],P=r[2],O=r[6],G=r[10],Z=r[14],N=r[3],U=r[7],B=r[11],J=r[15];return s[0]=o*w+a*M+l*P+c*N,s[4]=o*T+a*k+l*O+c*U,s[8]=o*R+a*F+l*G+c*B,s[12]=o*S+a*q+l*Z+c*J,s[1]=d*w+f*M+h*P+m*N,s[5]=d*T+f*k+h*O+m*U,s[9]=d*R+f*F+h*G+m*B,s[13]=d*S+f*q+h*Z+m*J,s[2]=y*w+v*M+p*P+u*N,s[6]=y*T+v*k+p*O+u*U,s[10]=y*R+v*F+p*G+u*B,s[14]=y*S+v*q+p*Z+u*J,s[3]=g*w+_*M+x*P+C*N,s[7]=g*T+_*k+x*O+C*U,s[11]=g*R+_*F+x*G+C*B,s[15]=g*S+_*q+x*Z+C*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],y=e[3],v=e[7],p=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+v*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-t*l*f+t*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],y=e[12],v=e[13],p=e[14],u=e[15],g=f*p*c-v*h*c+v*l*m-a*p*m-f*l*u+a*h*u,_=y*h*c-d*p*c-y*l*m+o*p*m+d*l*u-o*h*u,x=d*v*c-y*f*c+y*a*m-o*v*m-d*a*u+o*f*u,C=y*f*l-d*v*l-y*a*h+o*v*h+d*a*p-o*f*p,w=t*g+i*_+r*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=g*T,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*u-i*h*u)*T,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=_*T,e[5]=(d*p*s-y*h*s+y*r*m-t*p*m-d*r*u+t*h*u)*T,e[6]=(y*l*s-o*p*s-y*r*c+t*p*c+o*r*u-t*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-t*h*c-o*r*m+t*l*m)*T,e[8]=x*T,e[9]=(y*f*s-d*v*s-y*i*m+t*v*m+d*i*u-t*f*u)*T,e[10]=(o*v*s-y*a*s+y*i*c-t*v*c-o*i*u+t*a*u)*T,e[11]=(d*a*s-o*f*s-d*i*c+t*f*c+o*i*m-t*a*m)*T,e[12]=C*T,e[13]=(d*v*r-y*f*r+y*i*h-t*v*h-d*i*p+t*f*p)*T,e[14]=(y*a*r-o*v*r-y*i*l+t*v*l+o*i*p-t*a*p)*T,e[15]=(o*f*r-d*a*r+d*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,y=s*f,v=o*d,p=o*f,u=a*f,g=l*c,_=l*d,x=l*f,C=i.x,w=i.y,T=i.z;return r[0]=(1-(v+u))*C,r[1]=(m+x)*C,r[2]=(y-_)*C,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(h+u))*w,r[6]=(p+g)*w,r[7]=0,r[8]=(y+_)*T,r[9]=(p-g)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,d=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xi){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,y;if(a===xi)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Fl)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xi){const l=this.elements,c=1/(t-e),d=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*d;let y,v;if(a===xi)y=(o+s)*f,v=-2*f;else if(a===Fl)y=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xr=new I,Hn=new Pt,eS=new I(0,0,0),tS=new I(1,1,1),Ii=new I,La=new I,Sn=new I,Pp=new Pt,Lp=new ra;class oc{constructor(e=0,t=0,i=0,r=oc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oc.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nS=0;const Ip=new I,jr=new ra,ui=new Pt,Ia=new I,co=new I,iS=new I,rS=new ra,Dp=new I(1,0,0),Np=new I(0,1,0),Up=new I(0,0,1),sS={type:"added"},oS={type:"removed"};class Wt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new I,t=new oc,i=new ra,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,t){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(co,Ia,this.up):ui.lookAt(Ia,co,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ui),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,iS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,rS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new I,di=new I,nu=new I,hi=new I,Yr=new I,$r=new I,Op=new I,iu=new I,ru=new I,su=new I;let Da=!1;class Dn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),di.subVectors(i,t),nu.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(nu),c=di.dot(di),d=di.dot(nu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),di.subVectors(e,t),Vn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),$r.subVectors(s,i),iu.subVectors(e,i);const l=Yr.dot(iu),c=$r.dot(iu);if(l<=0&&c<=0)return t.copy(i);ru.subVectors(e,r);const d=Yr.dot(ru),f=$r.dot(ru);if(d>=0&&f<=d)return t.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Yr,o);su.subVectors(e,s);const m=Yr.dot(su),y=$r.dot(su);if(y>=0&&m<=y)return t.copy(s);const v=m*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector($r,a);const p=d*y-m*f;if(p<=0&&f-d>=0&&m-y>=0)return Op.subVectors(s,r),a=(f-d)/(f-d+(m-y)),t.copy(r).addScaledVector(Op,a);const u=1/(p+v+h);return o=v*u,a=h*u,t.copy(i).addScaledVector(Yr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Na={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Xx(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(ln(Kt.r*255,0,255))*65536+Math.round(ln(Kt.g*255,0,255))*256+Math.round(ln(Kt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=At){st.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Na);const i=jc(Di.h,Na.h,t),r=jc(Di.s,Na.s,t),s=jc(Di.l,Na.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ze;Ze.NAMES=Z0;let aS=0;class qs extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ls,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ir extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new I,Ua=new Ie;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class Q0 extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class J0 extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lS=0;const Pn=new Pt,au=new Wt,qr=new I,Mn=new sa,uo=new sa,zt=new I;class yn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?J0:Q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Mn.min,uo.min),Mn.expandByPoint(zt),zt.addVectors(Mn.max,uo.max),Mn.expandByPoint(zt)):(Mn.expandByPoint(uo.min),Mn.expandByPoint(uo.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)zt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),zt.add(qr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<a;M++)c[M]=new I,d[M]=new I;const f=new I,h=new I,m=new I,y=new Ie,v=new Ie,p=new Ie,u=new I,g=new I;function _(M,k,F){f.fromArray(r,M*3),h.fromArray(r,k*3),m.fromArray(r,F*3),y.fromArray(o,M*2),v.fromArray(o,k*2),p.fromArray(o,F*2),h.sub(f),m.sub(f),v.sub(y),p.sub(y);const q=1/(v.x*p.y-p.x*v.y);isFinite(q)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(q),g.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(q),c[M].add(u),c[k].add(u),c[F].add(u),d[M].add(g),d[k].add(g),d[F].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let M=0,k=x.length;M<k;++M){const F=x[M],q=F.start,P=F.count;for(let O=q,G=q+P;O<G;O+=3)_(i[O+0],i[O+1],i[O+2])}const C=new I,w=new I,T=new I,R=new I;function S(M){T.fromArray(s,M*3),R.copy(T);const k=c[M];C.copy(k),C.sub(T.multiplyScalar(T.dot(k))).normalize(),w.crossVectors(R,k);const q=w.dot(d[M])<0?-1:1;l[M*4]=C.x,l[M*4+1]=C.y,l[M*4+2]=C.z,l[M*4+3]=q}for(let M=0,k=x.length;M<k;++M){const F=x[M],q=F.start,P=F.count;for(let O=q,G=q+P;O<G;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,y=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*d;for(let u=0;u<d;u++)h[y++]=c[m++]}return new Zn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new Pt,fr=new Jx,Oa=new Mh,Fp=new I,Kr=new I,Zr=new I,Qr=new I,lu=new I,ka=new I,Fa=new Ie,za=new Ie,Ba=new Ie,zp=new I,Bp=new I,Gp=new I,Ga=new I,Ha=new I;class D extends Wt{constructor(e=new yn,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(lu.fromBufferAttribute(f,e),o?ka.addScaledVector(lu,d):ka.addScaledVector(lu.sub(t),d))}t.add(ka)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Oa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Oa,Fp)===null||fr.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(kp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const p=h[y],u=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,C=_;x<C;x+=3){const w=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=Va(this,u,e,i,c,d,f,w,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=y,u=v;p<u;p+=3){const g=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);r=Va(this,o,e,i,c,d,f,g,_,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const p=h[y],u=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,C=_;x<C;x+=3){const w=x,T=x+1,R=x+2;r=Va(this,u,e,i,c,d,f,w,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=y,u=v;p<u;p+=3){const g=p,_=p+1,x=p+2;r=Va(this,o,e,i,c,d,f,g,_,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function cS(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:n}}function Va(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Kr),n.getVertexPosition(l,Zr),n.getVertexPosition(c,Qr);const d=cS(n,e,t,i,Kr,Zr,Qr,Ga);if(d){r&&(Fa.fromBufferAttribute(r,a),za.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),d.uv=Dn.getInterpolation(Ga,Kr,Zr,Qr,Fa,za,Ba,new Ie)),s&&(Fa.fromBufferAttribute(s,a),za.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),d.uv1=Dn.getInterpolation(Ga,Kr,Zr,Qr,Fa,za,Ba,new Ie),d.uv2=d.uv1),o&&(zp.fromBufferAttribute(o,a),Bp.fromBufferAttribute(o,l),Gp.fromBufferAttribute(o,c),d.normal=Dn.getInterpolation(Ga,Kr,Zr,Qr,zp,Bp,Gp,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Dn.getNormal(Kr,Zr,Qr,f.normal),d.face=f}return d}class ce extends yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(v,p,u,g,_,x,C,w,T,R,S){const M=x/T,k=C/R,F=x/2,q=C/2,P=w/2,O=T+1,G=R+1;let Z=0,N=0;const U=new I;for(let B=0;B<G;B++){const J=B*k-q;for(let te=0;te<O;te++){const j=te*M-F;U[v]=j*g,U[p]=J*_,U[u]=P,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[u]=w>0?1:-1,d.push(U.x,U.y,U.z),f.push(te/T),f.push(1-B/R),Z+=1}}for(let B=0;B<R;B++)for(let J=0;J<T;J++){const te=h+J+O*B,j=h+J+O*(B+1),ee=h+(J+1)+O*(B+1),ue=h+(J+1)+O*B;l.push(te,j,ue),l.push(j,ee,ue),N+=6}a.addGroup(m,N,S),m+=N,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ce(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const r in i)e[r]=i[r]}return e}function uS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function e_(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const dS={clone:Ws,merge:sn};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=uS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class t_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends t_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,es=1;class pS extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Jr,es,e,t);r.layers=this.layers,this.add(r);const s=new Nn(Jr,es,e,t);s.layers=this.layers,this.add(s);const o=new Nn(Jr,es,e,t);o.layers=this.layers,this.add(o);const a=new Nn(Jr,es,e,t);a.layers=this.layers,this.add(a);const l=new Nn(Jr,es,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Jr,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class n_ extends vn{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mS extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===br?At:Un),this.texture=new n_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ce(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ki});s.uniforms.tEquirect.value=t;const o=new D(r,s),a=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Qt),new pS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cu=new I,gS=new I,_S=new $e;class _r{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cu.subVectors(i,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_S.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Mh,Wa=new I;class wh{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],y=r[9],v=r[10],p=r[11],u=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,p-m,x-u).normalize(),i[1].setComponents(l+s,h+c,p+m,x+u).normalize(),i[2].setComponents(l+o,h+d,p+y,x+g).normalize(),i[3].setComponents(l-o,h-d,p-y,x-g).normalize(),i[4].setComponents(l-a,h-f,p-v,x-_).normalize(),t===xi)i[5].setComponents(l+a,h+f,p+v,x+_).normalize();else if(t===Fl)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,y=n.createBuffer();n.bindBuffer(d,y),n.bufferData(d,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,y=d.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&y.length===0&&n.bufferSubData(f,0,h),y.length!==0){for(let v=0,p=y.length;v<p;v++){const u=y[v];t?n.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):n.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class gi extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=t/l,m=[],y=[],v=[],p=[];for(let u=0;u<d;u++){const g=u*h-o;for(let _=0;_<c;_++){const x=_*f-s;y.push(x,-g,0),v.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,x=g+c*(u+1),C=g+1+c*(u+1),w=g+1+c*u;m.push(_,x,w),m.push(x,C,w)}this.setIndex(m),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
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
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
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
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IS=`#ifdef USE_IRIDESCENCE
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
#endif`,DS=`#ifdef USE_BUMPMAP
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
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
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
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WS=`vec3 transformedNormal = objectNormal;
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
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`
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
}`,ZS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JS=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#endif`,vM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,yM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,A1=`#define DISTANCE
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
}`,C1=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
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
}`,D1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,N1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,O1=`#define MATCAP
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
}`,k1=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,F1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B1=`#define PHONG
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
}`,G1=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,H1=`#define STANDARD
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
}`,V1=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,W1=`#define TOON
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
}`,X1=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,j1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,q1=`uniform vec3 color;
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
}`,K1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,He={alphahash_fragment:yS,alphahash_pars_fragment:xS,alphamap_fragment:SS,alphamap_pars_fragment:MS,alphatest_fragment:wS,alphatest_pars_fragment:ES,aomap_fragment:TS,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:bS,begin_vertex:RS,beginnormal_vertex:PS,bsdfs:LS,iridescence_fragment:IS,bumpmap_pars_fragment:DS,clipping_planes_fragment:NS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:OS,clipping_planes_vertex:kS,color_fragment:FS,color_pars_fragment:zS,color_pars_vertex:BS,color_vertex:GS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:WS,displacementmap_pars_vertex:XS,displacementmap_vertex:jS,emissivemap_fragment:YS,emissivemap_pars_fragment:$S,colorspace_fragment:qS,colorspace_pars_fragment:KS,envmap_fragment:ZS,envmap_common_pars_fragment:QS,envmap_pars_fragment:JS,envmap_pars_vertex:eM,envmap_physical_pars_fragment:hM,envmap_vertex:tM,fog_vertex:nM,fog_pars_vertex:iM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_fragment:aM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:dM,lights_toon_fragment:fM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:yM,lights_fragment_maps:xM,lights_fragment_end:SM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:AM,map_pars_fragment:CM,map_particle_fragment:bM,map_particle_pars_fragment:RM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:LM,morphcolor_vertex:IM,morphnormal_vertex:DM,morphtarget_pars_vertex:NM,morphtarget_vertex:UM,normal_fragment_begin:OM,normal_fragment_maps:kM,normal_pars_fragment:FM,normal_pars_vertex:zM,normal_vertex:BM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:jM,packing:YM,premultiplied_alpha_fragment:$M,project_vertex:qM,dithering_fragment:KM,dithering_pars_fragment:ZM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:r1,skinning_pars_vertex:s1,skinning_vertex:o1,skinnormal_vertex:a1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:d1,transmission_fragment:h1,transmission_pars_fragment:f1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:y1,backgroundCube_vert:x1,backgroundCube_frag:S1,cube_vert:M1,cube_frag:w1,depth_vert:E1,depth_frag:T1,distanceRGBA_vert:A1,distanceRGBA_frag:C1,equirect_vert:b1,equirect_frag:R1,linedashed_vert:P1,linedashed_frag:L1,meshbasic_vert:I1,meshbasic_frag:D1,meshlambert_vert:N1,meshlambert_frag:U1,meshmatcap_vert:O1,meshmatcap_frag:k1,meshnormal_vert:F1,meshnormal_frag:z1,meshphong_vert:B1,meshphong_frag:G1,meshphysical_vert:H1,meshphysical_frag:V1,meshtoon_vert:W1,meshtoon_frag:X1,points_vert:j1,points_frag:Y1,shadow_vert:$1,shadow_frag:q1,sprite_vert:K1,sprite_frag:Z1},he={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ni={basic:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:sn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:sn([he.lights,he.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Xa={r:0,b:0,g:0};function Q1(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function y(p,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),g=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===rc)?(d===void 0&&(d=new D(new ce(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Ws(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=st.getTransfer(_.colorSpace)!==ft,(f!==_||h!==_.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new D(new gi(2,2),new Ur({name:"BackgroundMaterial",uniforms:Ws(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(Xa,e_(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:y}}function J1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function f(P,O,G,Z,N){let U=!1;if(o){const B=v(Z,G,O);c!==B&&(c=B,m(c.object)),U=u(P,Z,G,N),U&&g(P,Z,G,N)}else{const B=O.wireframe===!0;(c.geometry!==Z.id||c.program!==G.id||c.wireframe!==B)&&(c.geometry=Z.id,c.program=G.id,c.wireframe=B,U=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,R(P,O,G,Z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function y(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,O,G){const Z=G.wireframe===!0;let N=a[P.id];N===void 0&&(N={},a[P.id]=N);let U=N[O.id];U===void 0&&(U={},N[O.id]=U);let B=U[Z];return B===void 0&&(B=p(h()),U[Z]=B),B}function p(P){const O=[],G=[],Z=[];for(let N=0;N<r;N++)O[N]=0,G[N]=0,Z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Z,object:P,attributes:{},index:null}}function u(P,O,G,Z){const N=c.attributes,U=O.attributes;let B=0;const J=G.getAttributes();for(const te in J)if(J[te].location>=0){const ee=N[te];let ue=U[te];if(ue===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;B++}return c.attributesNum!==B||c.index!==Z}function g(P,O,G,Z){const N={},U=O.attributes;let B=0;const J=G.getAttributes();for(const te in J)if(J[te].location>=0){let ee=U[te];ee===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),N[te]=ue,B++}c.attributes=N,c.attributesNum=B,c.index=Z}function _(){const P=c.newAttributes;for(let O=0,G=P.length;O<G;O++)P[O]=0}function x(P){C(P,0)}function C(P,O){const G=c.newAttributes,Z=c.enabledAttributes,N=c.attributeDivisors;G[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),N[P]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),N[P]=O)}function w(){const P=c.newAttributes,O=c.enabledAttributes;for(let G=0,Z=O.length;G<Z;G++)O[G]!==P[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function T(P,O,G,Z,N,U,B){B===!0?n.vertexAttribIPointer(P,O,G,N,U):n.vertexAttribPointer(P,O,G,Z,N,U)}function R(P,O,G,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=Z.attributes,U=G.getAttributes(),B=O.defaultAttributeValues;for(const J in U){const te=U[J];if(te.location>=0){let j=N[J];if(j===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const ee=j.normalized,ue=j.itemSize,le=t.get(j);if(le===void 0)continue;const fe=le.buffer,Re=le.type,Oe=le.bytesPerElement,De=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||j.gpuType===O0);if(j.isInterleavedBufferAttribute){const et=j.data,H=et.stride,en=j.offset;if(et.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)C(te.location+Ce,et.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)x(te.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Ce=0;Ce<te.locationSize;Ce++)T(te.location+Ce,ue/te.locationSize,Re,ee,H*Oe,(en+ue/te.locationSize*Ce)*Oe,De)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<te.locationSize;et++)C(te.location+et,j.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<te.locationSize;et++)x(te.location+et);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let et=0;et<te.locationSize;et++)T(te.location+et,ue/te.locationSize,Re,ee,ue*Oe,ue/te.locationSize*et*Oe,De)}}else if(B!==void 0){const ee=B[J];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(te.location,ee);break;case 3:n.vertexAttrib3fv(te.location,ee);break;case 4:n.vertexAttrib4fv(te.location,ee);break;default:n.vertexAttrib1fv(te.location,ee)}}}}w()}function S(){F();for(const P in a){const O=a[P];for(const G in O){const Z=O[G];for(const N in Z)y(Z[N].object),delete Z[N];delete O[G]}delete a[P]}}function M(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const G in O){const Z=O[G];for(const N in Z)y(Z[N].object),delete Z[N];delete O[G]}delete a[P.id]}function k(P){for(const O in a){const G=a[O];if(G[P.id]===void 0)continue;const Z=G[P.id];for(const N in Z)y(Z[N].object),delete Z[N];delete G[P.id]}}function F(){q(),d=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:x,disableUnusedAttributes:w}}function ew(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){n.drawArrays(s,d,f),t.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,y;if(r)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,d,f,h),t.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h;y++)this.render(d[y],f[y]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let y=0;for(let v=0;v<h;v++)y+=f[v];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,x=o||e.has("OES_texture_float"),C=_&&x,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:w}}function nw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,m){const y=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||y===null||y.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,_=g*4;let x=u.clippingState||null;l.value=x,x=d(y,h,_,m);for(let C=0;C!==_;++C)x[C]=t[C];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,y){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,y!==!0||p===null){const u=m+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,x=m;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(g,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function iw(n){let e=new WeakMap;function t(o,a){return a===gd?o.mapping=Bs:a===_d&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gd||a===_d)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mS(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Eh extends t_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,Hp=[.125,.215,.35,.446,.526,.582],xr=20,uu=new Eh,Vp=new Ze;let du=null,hu=0,fu=0;const vr=(1+Math.sqrt(5))/2,ts=1/vr,Wp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,vr,ts),new I(0,vr,-ts),new I(ts,0,vr),new I(-ts,0,vr),new I(vr,ts,0),new I(-vr,ts,0)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){du=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,hu,fu),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ko,format:$n,colorSpace:Ai,depthBuffer:!1},r=jp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(s)),this._blurMaterial=sw(s,e,t)}return r}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,r){const a=new Nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Vp),d.toneMapping=Zi,d.autoClear=!1;const m=new ir({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new D(new ce,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Vp),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;ja(r,g*_,u>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wp[(r-1)%Wp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new D(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),v=s/y,p=isFinite(s)?1+Math.floor(d*v):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const u=[];let g=0;for(let T=0;T<xr;++T){const R=T/v,S=Math.exp(-R*R/2);u.push(S),T===0?g+=S:T<p&&(g+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Ms?r-_+Ms:0),w=4*(this._cubeSize-x);ja(t,C,w,3*x,2*x),l.setRenderTarget(t),l.render(f,uu)}}function rw(n){const e=[],t=[],i=[];let r=n;const s=n-Ms+1+Hp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ms?l=Hp[o-n+Ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,y=6,v=3,p=2,u=1,g=new Float32Array(v*y*m),_=new Float32Array(p*y*m),x=new Float32Array(u*y*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];g.set(S,v*y*w),_.set(h,p*y*w);const M=[w,w,w,w,w,w];x.set(M,u*y*w)}const C=new yn;C.setAttribute("position",new Zn(g,v)),C.setAttribute("uv",new Zn(_,p)),C.setAttribute("faceIndex",new Zn(x,u)),e.push(C),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jp(n,e,t){const i=new Nr(n,e,t);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sw(n,e,t){const i=new Float32Array(xr),r=new I(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Yp(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function $p(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function ow(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gd||l===_d,d=l===Bs||l===Gs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Xp(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Xp(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function aw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lw(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const y in m){const v=m[y];for(let p=0,u=v.length;p<u;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,y=f.attributes.position;let v=0;if(m!==null){const g=m.array;v=m.version;for(let _=0,x=g.length;_<x;_+=3){const C=g[_+0],w=g[_+1],T=g[_+2];h.push(C,w,w,T,T,C)}}else if(y!==void 0){const g=y.array;v=y.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const C=_+0,w=_+1,T=_+2;h.push(C,w,w,T,T,C)}}else return;const p=new(j0(h)?J0:Q0)(h,1);p.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function cw(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,y){n.drawElements(s,y,a,m*l),t.update(y,s,1)}function f(m,y,v){if(v===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,m*l,v),t.update(y,s,v)}function h(m,y,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,m,0,v);let u=0;for(let g=0;g<v;g++)u+=y[g];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function uw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dw(n,e){return n[0]-e[0]}function hw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=y!==void 0?y.length:0;let p=s.get(d);if(p===void 0||p.count!==v){let O=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),C===!0&&(S=3);let M=d.attributes.position.count*S,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*k*4*v),q=new q0(F,M,k,v);q.type=Gi,q.needsUpdate=!0;const P=S*4;for(let G=0;G<v;G++){const Z=w[G],N=T[G],U=R[G],B=M*k*4*G;for(let J=0;J<Z.count;J++){const te=J*P;_===!0&&(o.fromBufferAttribute(Z,J),F[B+te+0]=o.x,F[B+te+1]=o.y,F[B+te+2]=o.z,F[B+te+3]=0),x===!0&&(o.fromBufferAttribute(N,J),F[B+te+4]=o.x,F[B+te+5]=o.y,F[B+te+6]=o.z,F[B+te+7]=0),C===!0&&(o.fromBufferAttribute(U,J),F[B+te+8]=o.x,F[B+te+9]=o.y,F[B+te+10]=o.z,F[B+te+11]=U.itemSize===4?o.w:1)}}p={count:v,texture:q,size:new Ie(M,k)},s.set(d,p),d.addEventListener("dispose",O)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let v=i[d.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[d.id]=v}for(let x=0;x<y;x++){const C=v[x];C[0]=x,C[1]=h[x]}v.sort(hw);for(let x=0;x<8;x++)x<y&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dw);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const C=a[x],w=C[0],T=C[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&d.getAttribute("morphTarget"+x)!==p[w]&&d.setAttribute("morphTarget"+x,p[w]),u&&d.getAttribute("morphNormal"+x)!==u[w]&&d.setAttribute("morphNormal"+x,u[w]),r[x]=T,g+=T):(p&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const _=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function pw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class r_ extends vn{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Cr,d!==Cr&&d!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Cr&&(i=Bi),i===void 0&&d===Vs&&(i=Ar),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const s_=new vn,o_=new r_(1,1);o_.compareFunction=X0;const a_=new q0,l_=new Zx,c_=new n_,qp=[],Kp=[],Zp=new Float32Array(16),Qp=new Float32Array(9),Jp=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ac(n,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function _w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function yw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Jp.set(i),n.uniformMatrix2fv(this.addr,!1,Jp),Ot(t,i)}}function xw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Qp.set(i),n.uniformMatrix3fv(this.addr,!1,Qp),Ot(t,i)}}function Sw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Zp.set(i),n.uniformMatrix4fv(this.addr,!1,Zp),Ot(t,i)}}function Mw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Aw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function Pw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?o_:s_;t.setTexture2D(e||s,r)}function Lw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||l_,r)}function Iw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||c_,r)}function Dw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||a_,r)}function Nw(n){switch(n){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return yw;case 35675:return xw;case 35676:return Sw;case 5124:case 35670:return Mw;case 35667:case 35671:return ww;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return Aw;case 36294:return Cw;case 36295:return bw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Uw(n,e){n.uniform1fv(this.addr,e)}function Ow(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function kw(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Fw(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function zw(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bw(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gw(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hw(n,e){n.uniform1iv(this.addr,e)}function Vw(n,e){n.uniform2iv(this.addr,e)}function Ww(n,e){n.uniform3iv(this.addr,e)}function Xw(n,e){n.uniform4iv(this.addr,e)}function jw(n,e){n.uniform1uiv(this.addr,e)}function Yw(n,e){n.uniform2uiv(this.addr,e)}function $w(n,e){n.uniform3uiv(this.addr,e)}function qw(n,e){n.uniform4uiv(this.addr,e)}function Kw(n,e,t){const i=this.cache,r=e.length,s=ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s_,s[o])}function Zw(n,e,t){const i=this.cache,r=e.length,s=ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||l_,s[o])}function Qw(n,e,t){const i=this.cache,r=e.length,s=ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||c_,s[o])}function Jw(n,e,t){const i=this.cache,r=e.length,s=ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||a_,s[o])}function eE(n){switch(n){case 5126:return Uw;case 35664:return Ow;case 35665:return kw;case 35666:return Fw;case 35674:return zw;case 35675:return Bw;case 35676:return Gw;case 5124:case 35670:return Hw;case 35667:case 35671:return Vw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return Yw;case 36295:return $w;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}class tE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nw(t.type)}}class nE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eE(t.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function em(n,e){n.seq.push(e),n.map[e.id]=e}function rE(n,e,t){const i=n.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),o=pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){em(t,c===void 0?new tE(a,n,e):new nE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iE(a),em(t,f)),t=f}}}class cl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function tm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sE=37297;let oE=0;function aE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lE(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===kl&&t===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&t===kl&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case sc:return[i,"LinearTransferOETF"];case At:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aE(n.getShaderSource(e),o)}else return r}function cE(n,e){const t=lE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uE(n,e){let t;switch(e){case Sx:t="Linear";break;case Mx:t="Reinhard";break;case wx:t="OptimizedCineon";break;case N0:t="ACESFilmic";break;case Tx:t="AgX";break;case Ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function hE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ws).join(`
`)}function fE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ws(n){return n!==""}function im(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(n){return n.replace(mE,_E)}const gE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _E(n,e){let t=He[e];if(t===void 0){const i=gE.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(n){return n.replace(vE,yE)}function yE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function om(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===L0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function SE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Gs:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ME(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function wE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case D0:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function EE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xE(t),c=SE(t),d=ME(t),f=wE(t),h=EE(t),m=t.isWebGL2?"":dE(t),y=hE(t),v=fE(s),p=r.createProgram();let u,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ws).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ws).join(`
`),g.length>0&&(g+=`
`)):(u=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),g=[m,om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?He.tonemapping_pars_fragment:"",t.toneMapping!==Zi?uE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,cE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=wd(o),o=im(o,t),o=rm(o,t),a=wd(a),a=im(a,t),a=rm(a,t),o=sm(o),a=sm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+u+o,C=_+g+a,w=tm(r,r.VERTEX_SHADER,x),T=tm(r,r.FRAGMENT_SHADER,C);r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function R(F){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(T).trim();let G=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,w,T);else{const N=nm(r,w,"vertex"),U=nm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+N+`
`+U)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||O==="")&&(Z=!1);Z&&(F.diagnostics={runnable:G,programLog:q,vertexShader:{log:P,prefix:u},fragmentShader:{log:O,prefix:g}})}r.deleteShader(w),r.deleteShader(T),S=new cl(r,p),M=pE(r,p)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,sE)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let AE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bE(e),t.set(e,i)),i}}class bE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function RE(n,e,t,i,r,s,o){const a=new K0,l=new CE,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,M,k,F,q){const P=F.fog,O=q.geometry,G=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),N=Z&&Z.mapping===rc?Z.image.height:null,U=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=B!==void 0?B.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let j,ee,ue,le;if(U){const tn=ni[U];j=tn.vertexShader,ee=tn.fragmentShader}else j=S.vertexShader,ee=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);const fe=n.getRenderTarget(),Re=q.isInstancedMesh===!0,Oe=q.isBatchedMesh===!0,De=!!S.map,et=!!S.matcap,H=!!Z,en=!!S.aoMap,Ce=!!S.lightMap,Fe=!!S.bumpMap,we=!!S.normalMap,vt=!!S.displacementMap,Ve=!!S.emissiveMap,b=!!S.metalnessMap,E=!!S.roughnessMap,W=S.anisotropy>0,se=S.clearcoat>0,ie=S.iridescence>0,oe=S.sheen>0,Ee=S.transmission>0,ge=W&&!!S.anisotropyMap,xe=se&&!!S.clearcoatMap,Le=se&&!!S.clearcoatNormalMap,We=se&&!!S.clearcoatRoughnessMap,ne=ie&&!!S.iridescenceMap,rt=ie&&!!S.iridescenceThicknessMap,qe=oe&&!!S.sheenColorMap,ke=oe&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Se=!!S.specularColorMap,Ge=!!S.specularIntensityMap,nt=Ee&&!!S.transmissionMap,wt=Ee&&!!S.thicknessMap,je=!!S.gradientMap,de=!!S.alphaMap,L=S.alphaTest>0,pe=!!S.alphaHash,me=!!S.extensions,Ne=!!O.attributes.uv1,be=!!O.attributes.uv2,at=!!O.attributes.uv3;let lt=Zi;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(lt=n.toneMapping),{isWebGL2:d,shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:ee,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Oe,instancing:Re,instancingColor:Re&&q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ai,map:De,matcap:et,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:N,aoMap:en,lightMap:Ce,bumpMap:Fe,normalMap:we,displacementMap:h&&vt,emissiveMap:Ve,normalMapObjectSpace:we&&S.normalMapType===kx,normalMapTangentSpace:we&&S.normalMapType===W0,metalnessMap:b,roughnessMap:E,anisotropy:W,anisotropyMap:ge,clearcoat:se,clearcoatMap:xe,clearcoatNormalMap:Le,clearcoatRoughnessMap:We,iridescence:ie,iridescenceMap:ne,iridescenceThicknessMap:rt,sheen:oe,sheenColorMap:qe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:Se,specularIntensityMap:Ge,transmission:Ee,transmissionMap:nt,thicknessMap:wt,gradientMap:je,opaque:S.transparent===!1&&S.blending===Ls,alphaMap:de,alphaTest:L,alphaHash:pe,combine:S.combine,mapUv:De&&v(S.map.channel),aoMapUv:en&&v(S.aoMap.channel),lightMapUv:Ce&&v(S.lightMap.channel),bumpMapUv:Fe&&v(S.bumpMap.channel),normalMapUv:we&&v(S.normalMap.channel),displacementMapUv:vt&&v(S.displacementMap.channel),emissiveMapUv:Ve&&v(S.emissiveMap.channel),metalnessMapUv:b&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:ge&&v(S.anisotropyMap.channel),clearcoatMapUv:xe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(S.sheenRoughnessMap.channel),specularMapUv:Ae&&v(S.specularMap.channel),specularColorMapUv:Se&&v(S.specularColorMap.channel),specularIntensityMapUv:Ge&&v(S.specularIntensityMap.channel),transmissionMapUv:nt&&v(S.transmissionMap.channel),thicknessMapUv:wt&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(we||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:be,vertexUv3s:at,pointsUvs:q.isPoints===!0&&!!O.attributes.uv&&(De||de),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(g(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const M=y[S.type];let k;if(M){const F=ni[M];k=dS.clone(F.uniforms)}else k=S.uniforms;return k}function C(S,M){let k;for(let F=0,q=c.length;F<q;F++){const P=c[F];if(P.cacheKey===M){k=P,++k.usedTimes;break}}return k===void 0&&(k=new TE(n,M,S,s),c.push(k)),k}function w(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function PE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function LE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,y,v,p){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:y,renderOrder:f.renderOrder,z:v,group:p},n[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=v,u.group=p),e++,u}function a(f,h,m,y,v,p){const u=o(f,h,m,y,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,h,m,y,v,p){const u=o(f,h,m,y,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||LE),i.length>1&&i.sort(h||am),r.length>1&&r.sort(h||am)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function IE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new lm,n.set(i,[o])):r>=s.length?(o=new lm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function NE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UE=0;function OE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kE(n,e){const t=new DE,i=NE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new Pt,a=new Pt;function l(d,f){let h=0,m=0,y=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,p=0,u=0,g=0,_=0,x=0,C=0,w=0,T=0,R=0,S=0;d.sort(OE);const M=f===!0?Math.PI:1;for(let F=0,q=d.length;F<q;F++){const P=d[F],O=P.color,G=P.intensity,Z=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*G*M,m+=O.g*G*M,y+=O.b*G*M;else if(P.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(P.sh.coefficients[U],G);S++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const B=P.shadow,J=i.get(P);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,r.directionalShadow[v]=J,r.directionalShadowMap[v]=N,r.directionalShadowMatrix[v]=P.shadow.matrix,x++}r.directional[v]=U,v++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(O).multiplyScalar(G*M),U.distance=Z,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,r.spot[u]=U;const B=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&R++),r.spotLightMatrix[u]=B.matrix,P.castShadow){const J=i.get(P);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=N,w++}u++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(O).multiplyScalar(G),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=U,g++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*M),U.distance=P.distance,U.decay=P.decay,P.castShadow){const B=P.shadow,J=i.get(P);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=P.shadow.matrix,C++}r.point[p]=U,p++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(G*M),U.groundColor.copy(P.groundColor).multiplyScalar(G*M),r.hemi[_]=U,_++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==v||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==g||k.hemiLength!==_||k.numDirectionalShadows!==x||k.numPointShadows!==C||k.numSpotShadows!==w||k.numSpotMaps!==T||k.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=S,k.directionalLength=v,k.pointLength=p,k.spotLength=u,k.rectAreaLength=g,k.hemiLength=_,k.numDirectionalShadows=x,k.numPointShadows=C,k.numSpotShadows=w,k.numSpotMaps=T,k.numLightProbes=S,r.version=UE++)}function c(d,f){let h=0,m=0,y=0,v=0,p=0;const u=f.matrixWorldInverse;for(let g=0,_=d.length;g<_;g++){const x=d[g];if(x.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(x.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),y++}else if(x.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),m++}else if(x.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function cm(n,e){const t=new kE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function FE(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new cm(n,e),t.set(s,[l])):o>=a.length?(l=new cm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zE extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BE extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
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
}`;function VE(n,e,t){let i=new wh;const r=new Ie,s=new Ie,o=new _t,a=new zE({depthPacking:Ox}),l=new BE,c={},d=t.maxTextureSize,f={[nr]:_n,[_n]:nr,[ri]:ri},h=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:GE,fragmentShader:HE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new yn;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let u=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ki),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=u!==fi&&this.type===fi,P=u===fi&&this.type!==fi;for(let O=0,G=w.length;O<G;O++){const Z=w[O],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||q===!0||P===!0){const J=this.type!==fi?{minFilter:an,magFilter:an}:{};N.map!==null&&N.map.dispose(),N.map=new Nr(r.x,r.y,J),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const B=N.getViewportCount();for(let J=0;J<B;J++){const te=N.getViewport(J);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),F.viewport(o),N.updateMatrices(Z,J),i=N.getFrustum(),x(T,R,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===fi&&g(N,R),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,M,k)};function g(w,T){const R=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,R,m,v,null)}function _(w,T,R,S){let M=null;const k=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)M=k;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=M.uuid,q=T.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let O=P[q];O===void 0&&(O=M.clone(),P[q]=O,T.addEventListener("dispose",C)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,S===fi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=R}return M}function x(w,T,R,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const q=e.update(w),P=w.material;if(Array.isArray(P)){const O=q.groups;for(let G=0,Z=O.length;G<Z;G++){const N=O[G],U=P[N.materialIndex];if(U&&U.visible){const B=_(w,U,S,M);w.onBeforeShadow(n,w,T,R,q,B,N),n.renderBufferDirect(R,null,q,B,w,N),w.onAfterShadow(n,w,T,R,q,B,N)}}}else if(P.visible){const O=_(w,P,S,M);w.onBeforeShadow(n,w,T,R,q,O,null),n.renderBufferDirect(R,null,q,O,w,null),w.onAfterShadow(n,w,T,R,q,O,null)}}const F=w.children;for(let q=0,P=F.length;q<P;q++)x(F[q],T,R,S,M)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function WE(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const pe=new _t;let me=null;const Ne=new _t(0,0,0,0);return{setMask:function(be){me!==be&&!L&&(n.colorMask(be,be,be,be),me=be)},setLocked:function(be){L=be},setClear:function(be,at,lt,kt,tn){tn===!0&&(be*=kt,at*=kt,lt*=kt),pe.set(be,at,lt,kt),Ne.equals(pe)===!1&&(n.clearColor(be,at,lt,kt),Ne.copy(pe))},reset:function(){L=!1,me=null,Ne.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,Ne=null;return{setTest:function(be){be?Oe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(be){pe!==be&&!L&&(n.depthMask(be),pe=be)},setFunc:function(be){if(me!==be){switch(be){case hx:n.depthFunc(n.NEVER);break;case fx:n.depthFunc(n.ALWAYS);break;case px:n.depthFunc(n.LESS);break;case Nl:n.depthFunc(n.LEQUAL);break;case mx:n.depthFunc(n.EQUAL);break;case gx:n.depthFunc(n.GEQUAL);break;case _x:n.depthFunc(n.GREATER);break;case vx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=be}},setLocked:function(be){L=be},setClear:function(be){Ne!==be&&(n.clearDepth(be),Ne=be)},reset:function(){L=!1,pe=null,me=null,Ne=null}}}function o(){let L=!1,pe=null,me=null,Ne=null,be=null,at=null,lt=null,kt=null,tn=null;return{setTest:function(ct){L||(ct?Oe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!L&&(n.stencilMask(ct),pe=ct)},setFunc:function(ct,nn,Jn){(me!==ct||Ne!==nn||be!==Jn)&&(n.stencilFunc(ct,nn,Jn),me=ct,Ne=nn,be=Jn)},setOp:function(ct,nn,Jn){(at!==ct||lt!==nn||kt!==Jn)&&(n.stencilOp(ct,nn,Jn),at=ct,lt=nn,kt=Jn)},setLocked:function(ct){L=ct},setClear:function(ct){tn!==ct&&(n.clearStencil(ct),tn=ct)},reset:function(){L=!1,pe=null,me=null,Ne=null,be=null,at=null,lt=null,kt=null,tn=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},m={},y=new WeakMap,v=[],p=null,u=!1,g=null,_=null,x=null,C=null,w=null,T=null,R=null,S=new Ze(0,0,0),M=0,k=!1,F=null,q=null,P=null,O=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=U>=2);let J=null,te={};const j=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ue=new _t().fromArray(j),le=new _t().fromArray(ee);function fe(L,pe,me,Ne){const be=new Uint8Array(4),at=n.createTexture();n.bindTexture(L,at),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<me;lt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(pe+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return at}const Re={};Re[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(Nl),Ve(!1),b(Xf),Oe(n.CULL_FACE),we(Ki);function Oe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function De(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function et(L,pe){return m[L]!==pe?(n.bindFramebuffer(L,pe),m[L]=pe,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=pe),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function H(L,pe){let me=v,Ne=!1;if(L)if(me=y.get(pe),me===void 0&&(me=[],y.set(pe,me)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(me.length!==be.length||me[0]!==n.COLOR_ATTACHMENT0){for(let at=0,lt=be.length;at<lt;at++)me[at]=n.COLOR_ATTACHMENT0+at;me.length=be.length,Ne=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,Ne=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,Ne=!0);Ne&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function en(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const Ce={[yr]:n.FUNC_ADD,[Zy]:n.FUNC_SUBTRACT,[Qy]:n.FUNC_REVERSE_SUBTRACT};if(i)Ce[qf]=n.MIN,Ce[Kf]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ce[qf]=L.MIN_EXT,Ce[Kf]=L.MAX_EXT)}const Fe={[Jy]:n.ZERO,[ex]:n.ONE,[tx]:n.SRC_COLOR,[pd]:n.SRC_ALPHA,[ax]:n.SRC_ALPHA_SATURATE,[sx]:n.DST_COLOR,[ix]:n.DST_ALPHA,[nx]:n.ONE_MINUS_SRC_COLOR,[md]:n.ONE_MINUS_SRC_ALPHA,[ox]:n.ONE_MINUS_DST_COLOR,[rx]:n.ONE_MINUS_DST_ALPHA,[lx]:n.CONSTANT_COLOR,[cx]:n.ONE_MINUS_CONSTANT_COLOR,[ux]:n.CONSTANT_ALPHA,[dx]:n.ONE_MINUS_CONSTANT_ALPHA};function we(L,pe,me,Ne,be,at,lt,kt,tn,ct){if(L===Ki){u===!0&&(De(n.BLEND),u=!1);return}if(u===!1&&(Oe(n.BLEND),u=!0),L!==Ky){if(L!==g||ct!==k){if((_!==yr||w!==yr)&&(n.blendEquation(n.FUNC_ADD),_=yr,w=yr),ct)switch(L){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $f:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,C=null,T=null,R=null,S.set(0,0,0),M=0,g=L,k=ct}return}be=be||pe,at=at||me,lt=lt||Ne,(pe!==_||be!==w)&&(n.blendEquationSeparate(Ce[pe],Ce[be]),_=pe,w=be),(me!==x||Ne!==C||at!==T||lt!==R)&&(n.blendFuncSeparate(Fe[me],Fe[Ne],Fe[at],Fe[lt]),x=me,C=Ne,T=at,R=lt),(kt.equals(S)===!1||tn!==M)&&(n.blendColor(kt.r,kt.g,kt.b,tn),S.copy(kt),M=tn),g=L,k=!1}function vt(L,pe){L.side===ri?De(n.CULL_FACE):Oe(n.CULL_FACE);let me=L.side===_n;pe&&(me=!me),Ve(me),L.blending===Ls&&L.transparent===!1?we(Ki):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ne=L.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),W(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){F!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),F=L)}function b(L){L!==$y?(Oe(n.CULL_FACE),L!==q&&(L===Xf?n.cullFace(n.BACK):L===qy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),q=L}function E(L){L!==P&&(N&&n.lineWidth(L),P=L)}function W(L,pe,me){L?(Oe(n.POLYGON_OFFSET_FILL),(O!==pe||G!==me)&&(n.polygonOffset(pe,me),O=pe,G=me)):De(n.POLYGON_OFFSET_FILL)}function se(L){L?Oe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function ie(L){L===void 0&&(L=n.TEXTURE0+Z-1),J!==L&&(n.activeTexture(L),J=L)}function oe(L,pe,me){me===void 0&&(J===null?me=n.TEXTURE0+Z-1:me=J);let Ne=te[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},te[me]=Ne),(Ne.type!==L||Ne.texture!==pe)&&(J!==me&&(n.activeTexture(me),J=me),n.bindTexture(L,pe||Re[L]),Ne.type=L,Ne.texture=pe)}function Ee(){const L=te[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(L){ue.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function nt(L){le.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function wt(L,pe){let me=f.get(pe);me===void 0&&(me=new WeakMap,f.set(pe,me));let Ne=me.get(L);Ne===void 0&&(Ne=n.getUniformBlockIndex(pe,L.name),me.set(L,Ne))}function je(L,pe){const Ne=f.get(pe).get(L);d.get(pe)!==Ne&&(n.uniformBlockBinding(pe,Ne,L.__bindingPointIndex),d.set(pe,Ne))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,te={},m={},y=new WeakMap,v=[],p=null,u=!1,g=null,_=null,x=null,C=null,w=null,T=null,R=null,S=new Ze(0,0,0),M=0,k=!1,F=null,q=null,P=null,O=null,G=null,ue.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:De,bindFramebuffer:et,drawBuffers:H,useProgram:en,setBlending:we,setMaterial:vt,setFlipSided:Ve,setCullFace:b,setLineWidth:E,setPolygonOffset:W,setScissorTest:se,activeTexture:ie,bindTexture:oe,unbindTexture:Ee,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:Se,updateUBOMapping:wt,uniformBlockBinding:je,texStorage2D:qe,texStorage3D:ke,texSubImage2D:Le,texSubImage3D:We,compressedTexSubImage2D:ne,compressedTexSubImage3D:rt,scissor:Ge,viewport:nt,reset:de}}function XE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,E){return m?new OffscreenCanvas(b,E):zl("canvas")}function v(b,E,W,se){let ie=1;if((b.width>se||b.height>se)&&(ie=se/Math.max(b.width,b.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=E?Md:Math.floor,Ee=oe(ie*b.width),ge=oe(ie*b.height);f===void 0&&(f=y(Ee,ge));const xe=W?y(Ee,ge):f;return xe.width=Ee,xe.height=ge,xe.getContext("2d").drawImage(b,0,0,Ee,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ee+"x"+ge+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Tp(b.width)&&Tp(b.height)}function u(b){return a?!1:b.wrapS!==Yn||b.wrapT!==Yn||b.minFilter!==an&&b.minFilter!==Qt}function g(b,E){return b.generateMipmaps&&E&&b.minFilter!==an&&b.minFilter!==Qt}function _(b){n.generateMipmap(b)}function x(b,E,W,se,ie=!1){if(a===!1)return E;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=E;if(E===n.RED&&(W===n.FLOAT&&(oe=n.R32F),W===n.HALF_FLOAT&&(oe=n.R16F),W===n.UNSIGNED_BYTE&&(oe=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(oe=n.R8UI),W===n.UNSIGNED_SHORT&&(oe=n.R16UI),W===n.UNSIGNED_INT&&(oe=n.R32UI),W===n.BYTE&&(oe=n.R8I),W===n.SHORT&&(oe=n.R16I),W===n.INT&&(oe=n.R32I)),E===n.RG&&(W===n.FLOAT&&(oe=n.RG32F),W===n.HALF_FLOAT&&(oe=n.RG16F),W===n.UNSIGNED_BYTE&&(oe=n.RG8)),E===n.RGBA){const Ee=ie?Ul:st.getTransfer(se);W===n.FLOAT&&(oe=n.RGBA32F),W===n.HALF_FLOAT&&(oe=n.RGBA16F),W===n.UNSIGNED_BYTE&&(oe=Ee===ft?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(b,E,W){return g(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==an&&b.minFilter!==Qt?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function w(b){return b===an||b===Zf||b===zc?n.NEAREST:n.LINEAR}function T(b){const E=b.target;E.removeEventListener("dispose",T),S(E),E.isVideoTexture&&d.delete(E)}function R(b){const E=b.target;E.removeEventListener("dispose",R),k(E)}function S(b){const E=i.get(b);if(E.__webglInit===void 0)return;const W=b.source,se=h.get(W);if(se){const ie=se[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(b),Object.keys(se).length===0&&h.delete(W)}i.remove(b)}function M(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const W=b.source,se=h.get(W);delete se[E.__cacheKey],o.memory.textures--}function k(b){const E=b.texture,W=i.get(b),se=i.get(E);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(W.__webglFramebuffer[ie]))for(let oe=0;oe<W.__webglFramebuffer[ie].length;oe++)n.deleteFramebuffer(W.__webglFramebuffer[ie][oe]);else n.deleteFramebuffer(W.__webglFramebuffer[ie]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ie])}else{if(Array.isArray(W.__webglFramebuffer))for(let ie=0;ie<W.__webglFramebuffer.length;ie++)n.deleteFramebuffer(W.__webglFramebuffer[ie]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,oe=E.length;ie<oe;ie++){const Ee=i.get(E[ie]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(b)}let F=0;function q(){F=0}function P(){const b=F;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),F+=1,b}function O(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function G(b,E){const W=i.get(b);if(b.isVideoTexture&&vt(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(W,b,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function Z(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ue(W,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function N(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ue(W,b,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function U(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){le(W,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const B={[qo]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[vd]:n.MIRRORED_REPEAT},J={[an]:n.NEAREST,[Zf]:n.NEAREST_MIPMAP_NEAREST,[zc]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Ax]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},te={[Fx]:n.NEVER,[Wx]:n.ALWAYS,[zx]:n.LESS,[X0]:n.LEQUAL,[Bx]:n.EQUAL,[Vx]:n.GEQUAL,[Gx]:n.GREATER,[Hx]:n.NOTEQUAL};function j(b,E,W){if(W?(n.texParameteri(b,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,B[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[E.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Yn||E.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==an&&E.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===an||E.minFilter!==zc&&E.minFilter!==Hs||E.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ko&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ee(b,E){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",T));const se=E.source;let ie=h.get(se);ie===void 0&&(ie={},h.set(se,ie));const oe=O(E);if(oe!==b.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[oe].usedTimes++;const Ee=ie[b.__cacheKey];Ee!==void 0&&(ie[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(E)),b.__cacheKey=oe,b.__webglTexture=ie[oe].texture}return W}function ue(b,E,W){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ie=ee(b,E),oe=E.source;t.bindTexture(se,b.__webglTexture,n.TEXTURE0+W);const Ee=i.get(oe);if(oe.version!==Ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const ge=st.getPrimaries(st.workingColorSpace),xe=E.colorSpace===Un?null:st.getPrimaries(E.colorSpace),Le=E.colorSpace===Un||ge===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=u(E)&&p(E.image)===!1;let ne=v(E.image,We,!1,r.maxTextureSize);ne=Ve(E,ne);const rt=p(ne)||a,qe=s.convert(E.format,E.colorSpace);let ke=s.convert(E.type),Ae=x(E.internalFormat,qe,ke,E.colorSpace,E.isVideoTexture);j(se,E,rt);let Se;const Ge=E.mipmaps,nt=a&&E.isVideoTexture!==!0&&Ae!==H0,wt=Ee.__version===void 0||ie===!0,je=C(E,ne,rt);if(E.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?E.type===Gi?Ae=n.DEPTH_COMPONENT32F:E.type===Bi?Ae=n.DEPTH_COMPONENT24:E.type===Ar?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:E.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Cr&&Ae===n.DEPTH_COMPONENT&&E.type!==xh&&E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Bi,ke=s.convert(E.type)),E.format===Vs&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,E.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ar,ke=s.convert(E.type))),wt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,qe,ke,null));else if(E.isDataTexture)if(Ge.length>0&&rt){nt&&wt&&t.texStorage2D(n.TEXTURE_2D,je,Ae,Ge[0].width,Ge[0].height);for(let de=0,L=Ge.length;de<L;de++)Se=Ge[de],nt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,qe,ke,Se.data):t.texImage2D(n.TEXTURE_2D,de,Ae,Se.width,Se.height,0,qe,ke,Se.data);E.generateMipmaps=!1}else nt?(wt&&t.texStorage2D(n.TEXTURE_2D,je,Ae,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,qe,ke,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,qe,ke,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ae,Ge[0].width,Ge[0].height,ne.depth);for(let de=0,L=Ge.length;de<L;de++)Se=Ge[de],E.format!==$n?qe!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ne.depth,qe,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ae,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ne.depth,qe,ke,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ae,Se.width,Se.height,ne.depth,0,qe,ke,Se.data)}else{nt&&wt&&t.texStorage2D(n.TEXTURE_2D,je,Ae,Ge[0].width,Ge[0].height);for(let de=0,L=Ge.length;de<L;de++)Se=Ge[de],E.format!==$n?qe!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,qe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,qe,ke,Se.data):t.texImage2D(n.TEXTURE_2D,de,Ae,Se.width,Se.height,0,qe,ke,Se.data)}else if(E.isDataArrayTexture)nt?(wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ae,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,qe,ke,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,qe,ke,ne.data);else if(E.isData3DTexture)nt?(wt&&t.texStorage3D(n.TEXTURE_3D,je,Ae,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,qe,ke,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,qe,ke,ne.data);else if(E.isFramebufferTexture){if(wt)if(nt)t.texStorage2D(n.TEXTURE_2D,je,Ae,ne.width,ne.height);else{let de=ne.width,L=ne.height;for(let pe=0;pe<je;pe++)t.texImage2D(n.TEXTURE_2D,pe,Ae,de,L,0,qe,ke,null),de>>=1,L>>=1}}else if(Ge.length>0&&rt){nt&&wt&&t.texStorage2D(n.TEXTURE_2D,je,Ae,Ge[0].width,Ge[0].height);for(let de=0,L=Ge.length;de<L;de++)Se=Ge[de],nt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,qe,ke,Se):t.texImage2D(n.TEXTURE_2D,de,Ae,qe,ke,Se);E.generateMipmaps=!1}else nt?(wt&&t.texStorage2D(n.TEXTURE_2D,je,Ae,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,ke,ne)):t.texImage2D(n.TEXTURE_2D,0,Ae,qe,ke,ne);g(E,rt)&&_(se),Ee.__version=oe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function le(b,E,W){if(E.image.length!==6)return;const se=ee(b,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);const oe=i.get(ie);if(ie.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+W);const Ee=st.getPrimaries(st.workingColorSpace),ge=E.colorSpace===Un?null:st.getPrimaries(E.colorSpace),xe=E.colorSpace===Un||Ee===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let de=0;de<6;de++)!Le&&!We?ne[de]=v(E.image[de],!1,!0,r.maxCubemapSize):ne[de]=We?E.image[de].image:E.image[de],ne[de]=Ve(E,ne[de]);const rt=ne[0],qe=p(rt)||a,ke=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Se=x(E.internalFormat,ke,Ae,E.colorSpace),Ge=a&&E.isVideoTexture!==!0,nt=oe.__version===void 0||se===!0;let wt=C(E,rt,qe);j(n.TEXTURE_CUBE_MAP,E,qe);let je;if(Le){Ge&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Se,rt.width,rt.height);for(let de=0;de<6;de++){je=ne[de].mipmaps;for(let L=0;L<je.length;L++){const pe=je[L];E.format!==$n?ke!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,0,0,pe.width,pe.height,ke,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,Se,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,0,0,pe.width,pe.height,ke,Ae,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,Se,pe.width,pe.height,0,ke,Ae,pe.data)}}}else{je=E.mipmaps,Ge&&nt&&(je.length>0&&wt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Se,ne[0].width,ne[0].height));for(let de=0;de<6;de++)if(We){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ne[de].width,ne[de].height,ke,Ae,ne[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Se,ne[de].width,ne[de].height,0,ke,Ae,ne[de].data);for(let L=0;L<je.length;L++){const me=je[L].image[de].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,0,0,me.width,me.height,ke,Ae,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,Se,me.width,me.height,0,ke,Ae,me.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke,Ae,ne[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Se,ke,Ae,ne[de]);for(let L=0;L<je.length;L++){const pe=je[L];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,0,0,ke,Ae,pe.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,Se,ke,Ae,pe.image[de])}}}g(E,qe)&&_(n.TEXTURE_CUBE_MAP),oe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function fe(b,E,W,se,ie,oe){const Ee=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),xe=x(W.internalFormat,Ee,ge,W.colorSpace);if(!i.get(E).__hasExternalTextures){const We=Math.max(1,E.width>>oe),ne=Math.max(1,E.height>>oe);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,oe,xe,We,ne,E.depth,0,Ee,ge,null):t.texImage2D(ie,oe,xe,We,ne,0,Ee,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),we(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ie,i.get(W).__webglTexture,0,Fe(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ie,i.get(W).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(b,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||we(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Gi?se=n.DEPTH_COMPONENT32F:ie.type===Bi&&(se=n.DEPTH_COMPONENT24));const oe=Fe(E);we(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,se,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,se,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const se=Fe(E);W&&we(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,E.width,E.height):we(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const se=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<se.length;ie++){const oe=se[ie],Ee=s.convert(oe.format,oe.colorSpace),ge=s.convert(oe.type),xe=x(oe.internalFormat,Ee,ge,oe.colorSpace),Le=Fe(E);W&&we(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,xe,E.width,E.height):we(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const se=i.get(E.depthTexture).__webglTexture,ie=Fe(E);if(E.depthTexture.format===Cr)we(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(E.depthTexture.format===Vs)we(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function De(b){const E=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,b)}else if(W){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=n.createRenderbuffer(),Re(E.__webglDepthbuffer[se],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Re(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(b,E,W){const se=i.get(b);E!==void 0&&fe(se.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&De(b)}function H(b){const E=b.texture,W=i.get(b),se=i.get(E);b.addEventListener("dispose",R),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,Ee=p(b)||a;if(ie){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)W.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else W.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)W.__webglFramebuffer[ge]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){const ge=b.texture;for(let xe=0,Le=ge.length;xe<Le;xe++){const We=i.get(ge[xe]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&we(b)===!1){const ge=oe?E:[E];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const Le=ge[xe];W.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[xe]);const We=s.convert(Le.format,Le.colorSpace),ne=s.convert(Le.type),rt=x(Le.internalFormat,We,ne,Le.colorSpace,b.isXRRenderTarget===!0),qe=Fe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,rt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,W.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),j(n.TEXTURE_CUBE_MAP,E,Ee);for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(W.__webglFramebuffer[ge][xe],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else fe(W.__webglFramebuffer[ge],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(E,Ee)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ge=b.texture;for(let xe=0,Le=ge.length;xe<Le;xe++){const We=ge[xe],ne=i.get(We);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),j(n.TEXTURE_2D,We,Ee),fe(W.__webglFramebuffer,b,We,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),g(We,Ee)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ge=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,se.__webglTexture),j(ge,E,Ee),a&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(W.__webglFramebuffer[xe],b,E,n.COLOR_ATTACHMENT0,ge,xe);else fe(W.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,ge,0);g(E,Ee)&&_(ge),t.unbindTexture()}b.depthBuffer&&De(b)}function en(b){const E=p(b)||a,W=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ie=W.length;se<ie;se++){const oe=W[se];if(g(oe,E)){const Ee=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(oe).__webglTexture;t.bindTexture(Ee,ge),_(Ee),t.unbindTexture()}}}function Ce(b){if(a&&b.samples>0&&we(b)===!1){const E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],W=b.width,se=b.height;let ie=n.COLOR_BUFFER_BIT;const oe=[],Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){oe.push(n.COLOR_ATTACHMENT0+Le),b.depthBuffer&&oe.push(Ee);const We=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(We===!1&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),xe){const ne=i.get(E[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,W,se,0,0,W,se,ie,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]);const We=i.get(E[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Fe(b){return Math.min(r.maxSamples,b.samples)}function we(b){const E=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(b){const E=o.render.frame;d.get(b)!==E&&(d.set(b,E),b.update())}function Ve(b,E){const W=b.colorSpace,se=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xd||W!==Ai&&W!==Un&&(st.getTransfer(W)===ft?a===!1?e.has("EXT_sRGB")===!0&&se===$n?(b.format=xd,b.minFilter=Qt,b.generateMipmaps=!1):E=Y0.sRGBToLinear(E):(se!==$n||ie!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=et,this.setupRenderTarget=H,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=we}function jE(n,e,t){const i=t.isWebGL2;function r(s,o=Un){let a;const l=st.getTransfer(o);if(s===Qi)return n.UNSIGNED_BYTE;if(s===k0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===F0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Cx)return n.BYTE;if(s===bx)return n.SHORT;if(s===xh)return n.UNSIGNED_SHORT;if(s===O0)return n.INT;if(s===Bi)return n.UNSIGNED_INT;if(s===Gi)return n.FLOAT;if(s===Ko)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rx)return n.ALPHA;if(s===$n)return n.RGBA;if(s===Px)return n.LUMINANCE;if(s===Lx)return n.LUMINANCE_ALPHA;if(s===Cr)return n.DEPTH_COMPONENT;if(s===Vs)return n.DEPTH_STENCIL;if(s===xd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ix)return n.RED;if(s===z0)return n.RED_INTEGER;if(s===Dx)return n.RG;if(s===B0)return n.RG_INTEGER;if(s===G0)return n.RGBA_INTEGER;if(s===Bc||s===Gc||s===Hc||s===Vc)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qf||s===Jf||s===ep||s===tp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===H0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===np||s===ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===np)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ip)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===dp||s===hp||s===fp||s===pp||s===mp||s===gp||s===_p)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===op)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ap)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===up)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_p)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wc||s===vp||s===yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wc)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nx||s===xp||s===Sp||s===Mp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YE extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Me extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($E)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qE extends $s{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,y=null;const v=t.getContextAttributes();let p=null,u=null;const g=[],_=[],x=new Ie;let C=null;const w=new Nn;w.layers.enable(1),w.viewport=new _t;const T=new Nn;T.layers.enable(2),T.viewport=new _t;const R=[w,T],S=new YE;S.layers.enable(1),S.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=g[j];return ee===void 0&&(ee=new mu,g[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=g[j];return ee===void 0&&(ee=new mu,g[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=g[j];return ee===void 0&&(ee=new mu,g[j]=ee),ee.getHandSpace()};function F(j){const ee=_.indexOf(j.inputSource);if(ee===-1)return;const ue=g[ee];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",P);for(let j=0;j<g.length;j++){const ee=_[j];ee!==null&&(_[j]=null,g[j].disconnect(ee))}M=null,k=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",q),r.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Nr(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,ue=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Vs:Cr,ue=v.stencil?Ar:Bi);const fe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Nr(h.textureWidth,h.textureHeight,{format:$n,type:Qi,depthTexture:new r_(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(u);Re.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(j){for(let ee=0;ee<j.removed.length;ee++){const ue=j.removed[ee],le=_.indexOf(ue);le>=0&&(_[le]=null,g[le].disconnect(ue))}for(let ee=0;ee<j.added.length;ee++){const ue=j.added[ee];let le=_.indexOf(ue);if(le===-1){for(let Re=0;Re<g.length;Re++)if(Re>=_.length){_.push(ue),le=Re;break}else if(_[Re]===null){_[Re]=ue,le=Re;break}if(le===-1)break}const fe=g[le];fe&&fe.connect(ue)}}const O=new I,G=new I;function Z(j,ee,ue){O.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const le=O.distanceTo(G),fe=ee.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Oe=fe[14]/(fe[10]-1),De=fe[14]/(fe[10]+1),et=(fe[9]+1)/fe[5],H=(fe[9]-1)/fe[5],en=(fe[8]-1)/fe[0],Ce=(Re[8]+1)/Re[0],Fe=Oe*en,we=Oe*Ce,vt=le/(-en+Ce),Ve=vt*-en;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ve),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=Oe+vt,E=De+vt,W=Fe-Ve,se=we+(le-Ve),ie=et*De/E*b,oe=H*De/E*b;j.projectionMatrix.makePerspective(W,se,ie,oe,b,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function N(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=T.near=w.near=j.near,S.far=T.far=w.far=j.far,(M!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,k=S.far);const ee=j.parent,ue=S.cameras;N(S,ee);for(let le=0;le<ue.length;le++)N(ue[le],ee);ue.length===2?Z(S,w,T):S.projectionMatrix.copy(w.projectionMatrix),U(j,S,ee)};function U(j,ee,ue){ue===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)};let B=null;function J(j,ee){if(d=ee.getViewerPose(c||o),y=ee,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let le=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let fe=0;fe<ue.length;fe++){const Re=ue[fe];let Oe=null;if(m!==null)Oe=m.getViewport(Re);else{const et=f.getViewSubImage(h,Re);Oe=et.viewport,fe===0&&(e.setRenderTargetTextures(u,et.colorTexture,h.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(u))}let De=R[fe];De===void 0&&(De=new Nn,De.layers.enable(fe),De.viewport=new _t,R[fe]=De),De.matrix.fromArray(Re.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Re.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),fe===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(De)}}for(let ue=0;ue<g.length;ue++){const le=_[ue],fe=g[ue];le!==null&&fe!==void 0&&fe.update(le,ee,c||o)}B&&B(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),y=null}const te=new i_;te.setAnimationLoop(J),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function KE(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,e_(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,_,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===_n&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===_n&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=_*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_n&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function c(g,_){let x=r[g.id];x===void 0&&(y(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(g,C);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function d(g){const _=f();g.__bindingPointIndex=_;const x=n.createBuffer(),C=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],x=g.uniforms,C=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,T=x.length;w<T;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=R.length;S<M;S++){const k=R[S];if(m(k,w,S,C)===!0){const F=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let O=0;O<q.length;O++){const G=q[O],Z=v(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+P,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(g,_,x,C){const w=g.value,T=_+"_"+x;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function y(g){const _=g.uniforms;let x=0;const C=16;for(let T=0,R=_.length;T<R;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,k=S.length;M<k;M++){const F=S[M],q=Array.isArray(F.value)?F.value:[F.value];for(let P=0,O=q.length;P<O;P++){const G=q[P],Z=v(G),N=x%C;N!==0&&C-N<Z.boundary&&(x+=C-N),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const w=x%C;return w>0&&(x+=C-w),g.__size=x,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class u_{constructor(e={}){const{canvas:t=jx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),y=new Int32Array(4);let v=null,p=null;const u=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let x=!1,C=0,w=0,T=null,R=-1,S=null;const M=new _t,k=new _t;let F=null;const q=new Ze(0);let P=0,O=t.width,G=t.height,Z=1,N=null,U=null;const B=new _t(0,0,O,G),J=new _t(0,0,O,G);let te=!1;const j=new wh;let ee=!1,ue=!1,le=null;const fe=new Pt,Re=new Ie,Oe=new I,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return T===null?Z:1}let H=i;function en(A,z){for(let X=0;X<A.length;X++){const Y=A[X],V=t.getContext(Y,z);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),H=en(z,A),H===null)throw en(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,Fe,we,vt,Ve,b,E,W,se,ie,oe,Ee,ge,xe,Le,We,ne,rt,qe,ke,Ae,Se,Ge,nt;function wt(){Ce=new aw(H),Fe=new tw(H,Ce,e),Ce.init(Fe),Se=new jE(H,Ce,Fe),we=new WE(H,Ce,Fe),vt=new uw(H),Ve=new PE,b=new XE(H,Ce,we,Ve,Fe,Se,vt),E=new iw(_),W=new ow(_),se=new vS(H,Fe),Ge=new J1(H,Ce,se,Fe),ie=new lw(H,se,vt,Ge),oe=new pw(H,ie,se,vt),qe=new fw(H,Fe,b),We=new nw(Ve),Ee=new RE(_,E,W,Ce,Fe,Ge,We),ge=new KE(_,Ve),xe=new IE,Le=new FE(Ce,Fe),rt=new Q1(_,E,W,we,oe,h,l),ne=new VE(_,oe,Fe),nt=new ZE(H,vt,Fe,we),ke=new ew(H,Ce,vt,Fe),Ae=new cw(H,Ce,vt,Fe),vt.programs=Ee.programs,_.capabilities=Fe,_.extensions=Ce,_.properties=Ve,_.renderLists=xe,_.shadowMap=ne,_.state=we,_.info=vt}wt();const je=new qE(_,H);this.xr=je,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(O,G,!1))},this.getSize=function(A){return A.set(O,G)},this.setSize=function(A,z,X=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,G=z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),X===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(O*Z,G*Z).floor()},this.setDrawingBufferSize=function(A,z,X){O=A,G=z,Z=X,t.width=Math.floor(A*X),t.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,z,X,Y){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,z,X,Y),we.viewport(M.copy(B).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,z,X,Y){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,X,Y),we.scissor(k.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){we.setScissorTest(te=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(A=!0,z=!0,X=!0){let Y=0;if(A){let V=!1;if(T!==null){const _e=T.texture.format;V=_e===G0||_e===B0||_e===z0}if(V){const _e=T.texture.type,Te=_e===Qi||_e===Bi||_e===xh||_e===Ar||_e===k0||_e===F0,Pe=rt.getClearColor(),Ue=rt.getClearAlpha(),Xe=Pe.r,ze=Pe.g,Be=Pe.b;Te?(m[0]=Xe,m[1]=ze,m[2]=Be,m[3]=Ue,H.clearBufferuiv(H.COLOR,0,m)):(y[0]=Xe,y[1]=ze,y[2]=Be,y[3]=Ue,H.clearBufferiv(H.COLOR,0,y))}else Y|=H.COLOR_BUFFER_BIT}z&&(Y|=H.DEPTH_BUFFER_BIT),X&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Le.dispose(),Ve.dispose(),E.dispose(),W.dispose(),oe.dispose(),Ge.dispose(),nt.dispose(),Ee.dispose(),je.dispose(),je.removeEventListener("sessionstart",tn),je.removeEventListener("sessionend",ct),le&&(le.dispose(),le=null),nn.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=vt.autoReset,z=ne.enabled,X=ne.autoUpdate,Y=ne.needsUpdate,V=ne.type;wt(),vt.autoReset=A,ne.enabled=z,ne.autoUpdate=X,ne.needsUpdate=Y,ne.type=V}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const z=A.target;z.removeEventListener("dispose",me),Ne(z)}function Ne(A){be(A),Ve.remove(A)}function be(A){const z=Ve.get(A).programs;z!==void 0&&(z.forEach(function(X){Ee.releaseProgram(X)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,Y,V,_e){z===null&&(z=De);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Pe=p_(A,z,X,Y,V);we.setMaterial(Y,Te);let Ue=X.index,Xe=1;if(Y.wireframe===!0){if(Ue=ie.getWireframeAttribute(X),Ue===void 0)return;Xe=2}const ze=X.drawRange,Be=X.attributes.position;let Ct=ze.start*Xe,xn=(ze.start+ze.count)*Xe;_e!==null&&(Ct=Math.max(Ct,_e.start*Xe),xn=Math.min(xn,(_e.start+_e.count)*Xe)),Ue!==null?(Ct=Math.max(Ct,0),xn=Math.min(xn,Ue.count)):Be!=null&&(Ct=Math.max(Ct,0),xn=Math.min(xn,Be.count));const Ft=xn-Ct;if(Ft<0||Ft===1/0)return;Ge.setup(V,Y,Pe,X,Ue);let ai,yt=ke;if(Ue!==null&&(ai=se.get(Ue),yt=Ae,yt.setIndex(ai)),V.isMesh)Y.wireframe===!0?(we.setLineWidth(Y.wireframeLinewidth*et()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(V.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),we.setLineWidth(Ye*et()),V.isLineSegments?yt.setMode(H.LINES):V.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else V.isPoints?yt.setMode(H.POINTS):V.isSprite&&yt.setMode(H.TRIANGLES);if(V.isBatchedMesh)yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)yt.renderInstances(Ct,Ft,V.count);else if(X.isInstancedBufferGeometry){const Ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,cc=Math.min(X.instanceCount,Ye);yt.renderInstances(Ct,Ft,cc)}else yt.render(Ct,Ft)};function at(A,z,X){A.transparent===!0&&A.side===ri&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,aa(A,z,X),A.side=nr,A.needsUpdate=!0,aa(A,z,X),A.side=ri):aa(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),p=Le.get(X),p.init(),g.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==X&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(_._useLegacyLights);const Y=new Set;return A.traverse(function(V){const _e=V.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Pe=_e[Te];at(Pe,X,V),Y.add(Pe)}else at(_e,X,V),Y.add(_e)}),g.pop(),p=null,Y},this.compileAsync=function(A,z,X=null){const Y=this.compile(A,z,X);return new Promise(V=>{function _e(){if(Y.forEach(function(Te){Ve.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){V(A);return}setTimeout(_e,10)}Ce.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let lt=null;function kt(A){lt&&lt(A)}function tn(){nn.stop()}function ct(){nn.start()}const nn=new i_;nn.setAnimationLoop(kt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(A){lt=A,je.setAnimationLoop(A),A===null?nn.stop():nn.start()},je.addEventListener("sessionstart",tn),je.addEventListener("sessionend",ct),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(z),z=je.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,T),p=Le.get(A,g.length),p.init(),g.push(p),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(fe),ue=this.localClippingEnabled,ee=We.init(this.clippingPlanes,ue),v=xe.get(A,u.length),v.init(),u.push(v),Jn(A,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(N,U),this.info.render.frame++,ee===!0&&We.beginShadows();const X=p.state.shadowsArray;if(ne.render(X,A,z),ee===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(v,A),p.setupLights(_._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let V=0,_e=Y.length;V<_e;V++){const Te=Y[V];Rh(v,A,Te,Te.viewport)}}else Rh(v,A,z);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,z),Ge.resetDefaultState(),R=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Jn(A,z,X,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Te=oe.update(A),Pe=A.material;Pe.visible&&v.push(A,Te,Pe,X,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Te=oe.update(A),Pe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Oe.copy(Te.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(Pe)){const Ue=Te.groups;for(let Xe=0,ze=Ue.length;Xe<ze;Xe++){const Be=Ue[Xe],Ct=Pe[Be.materialIndex];Ct&&Ct.visible&&v.push(A,Te,Ct,X,Oe.z,Be)}}else Pe.visible&&v.push(A,Te,Pe,X,Oe.z,null)}}const _e=A.children;for(let Te=0,Pe=_e.length;Te<Pe;Te++)Jn(_e[Te],z,X,Y)}function Rh(A,z,X,Y){const V=A.opaque,_e=A.transmissive,Te=A.transparent;p.setupLightsView(X),ee===!0&&We.setGlobalState(_.clippingPlanes,X),_e.length>0&&f_(V,_e,z,X),Y&&we.viewport(M.copy(Y)),V.length>0&&oa(V,z,X),_e.length>0&&oa(_e,z,X),Te.length>0&&oa(Te,z,X),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function f_(A,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const _e=Fe.isWebGL2;le===null&&(le=new Nr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ko:Qi,minFilter:Hs,samples:_e?4:0})),_.getDrawingBufferSize(Re),_e?le.setSize(Re.x,Re.y):le.setSize(Md(Re.x),Md(Re.y));const Te=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(q),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Pe=_.toneMapping;_.toneMapping=Zi,oa(A,X,Y),b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le);let Ue=!1;for(let Xe=0,ze=z.length;Xe<ze;Xe++){const Be=z[Xe],Ct=Be.object,xn=Be.geometry,Ft=Be.material,ai=Be.group;if(Ft.side===ri&&Ct.layers.test(Y.layers)){const yt=Ft.side;Ft.side=_n,Ft.needsUpdate=!0,Ph(Ct,X,Y,xn,Ft,ai),Ft.side=yt,Ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le)),_.setRenderTarget(Te),_.setClearColor(q,P),_.toneMapping=Pe}function oa(A,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,_e=A.length;V<_e;V++){const Te=A[V],Pe=Te.object,Ue=Te.geometry,Xe=Y===null?Te.material:Y,ze=Te.group;Pe.layers.test(X.layers)&&Ph(Pe,z,X,Ue,Xe,ze)}}function Ph(A,z,X,Y,V,_e){A.onBeforeRender(_,z,X,Y,V,_e),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(_,z,X,Y,A,_e),V.transparent===!0&&V.side===ri&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,_.renderBufferDirect(X,z,Y,V,A,_e),V.side=nr,V.needsUpdate=!0,_.renderBufferDirect(X,z,Y,V,A,_e),V.side=ri):_.renderBufferDirect(X,z,Y,V,A,_e),A.onAfterRender(_,z,X,Y,V,_e)}function aa(A,z,X){z.isScene!==!0&&(z=De);const Y=Ve.get(A),V=p.state.lights,_e=p.state.shadowsArray,Te=V.state.version,Pe=Ee.getParameters(A,V.state,_e,z,X),Ue=Ee.getProgramCacheKey(Pe);let Xe=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?W:E).get(A.envMap||Y.environment),Xe===void 0&&(A.addEventListener("dispose",me),Xe=new Map,Y.programs=Xe);let ze=Xe.get(Ue);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Te)return Ih(A,Pe),ze}else Pe.uniforms=Ee.getUniforms(A),A.onBuild(X,Pe,_),A.onBeforeCompile(Pe,_),ze=Ee.acquireProgram(Pe,Ue),Xe.set(Ue,ze),Y.uniforms=Pe.uniforms;const Be=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=We.uniform),Ih(A,Pe),Y.needsLights=g_(A),Y.lightsStateVersion=Te,Y.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function Lh(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=cl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ih(A,z){const X=Ve.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function p_(A,z,X,Y,V){z.isScene!==!0&&(z=De),b.resetTextureUnits();const _e=z.fog,Te=Y.isMeshStandardMaterial?z.environment:null,Pe=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ai,Ue=(Y.isMeshStandardMaterial?W:E).get(Y.envMap||Te),Xe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!X.morphAttributes.position,Ct=!!X.morphAttributes.normal,xn=!!X.morphAttributes.color;let Ft=Zi;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ft=_.toneMapping);const ai=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=ai!==void 0?ai.length:0,Ye=Ve.get(Y),cc=p.state.lights;if(ee===!0&&(ue===!0||A!==S)){const Rn=A===S&&Y.id===R;We.setState(Y,A,Rn)}let Et=!1;Y.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==cc.state.version||Ye.outputColorSpace!==Pe||V.isBatchedMesh&&Ye.batching===!1||!V.isBatchedMesh&&Ye.batching===!0||V.isInstancedMesh&&Ye.instancing===!1||!V.isInstancedMesh&&Ye.instancing===!0||V.isSkinnedMesh&&Ye.skinning===!1||!V.isSkinnedMesh&&Ye.skinning===!0||V.isInstancedMesh&&Ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ye.instancingColor===!1&&V.instanceColor!==null||Ye.envMap!==Ue||Y.fog===!0&&Ye.fog!==_e||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==We.numPlanes||Ye.numIntersection!==We.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==ze||Ye.morphTargets!==Be||Ye.morphNormals!==Ct||Ye.morphColors!==xn||Ye.toneMapping!==Ft||Fe.isWebGL2===!0&&Ye.morphTargetsCount!==yt)&&(Et=!0):(Et=!0,Ye.__version=Y.version);let cr=Ye.currentProgram;Et===!0&&(cr=aa(Y,z,V));let Dh=!1,Qs=!1,uc=!1;const jt=cr.getUniforms(),ur=Ye.uniforms;if(we.useProgram(cr.program)&&(Dh=!0,Qs=!0,uc=!0),Y.id!==R&&(R=Y.id,Qs=!0),Dh||S!==A){jt.setValue(H,"projectionMatrix",A.projectionMatrix),jt.setValue(H,"viewMatrix",A.matrixWorldInverse);const Rn=jt.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,Oe.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&jt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&jt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Qs=!0,uc=!0)}if(V.isSkinnedMesh){jt.setOptional(H,V,"bindMatrix"),jt.setOptional(H,V,"bindMatrixInverse");const Rn=V.skeleton;Rn&&(Fe.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),jt.setValue(H,"boneTexture",Rn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(jt.setOptional(H,V,"batchingTexture"),jt.setValue(H,"batchingTexture",V._matricesTexture,b));const dc=X.morphAttributes;if((dc.position!==void 0||dc.normal!==void 0||dc.color!==void 0&&Fe.isWebGL2===!0)&&qe.update(V,X,cr),(Qs||Ye.receiveShadow!==V.receiveShadow)&&(Ye.receiveShadow=V.receiveShadow,jt.setValue(H,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ur.envMap.value=Ue,ur.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Qs&&(jt.setValue(H,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&m_(ur,uc),_e&&Y.fog===!0&&ge.refreshFogUniforms(ur,_e),ge.refreshMaterialUniforms(ur,Y,Z,G,le),cl.upload(H,Lh(Ye),ur,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(cl.upload(H,Lh(Ye),ur,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&jt.setValue(H,"center",V.center),jt.setValue(H,"modelViewMatrix",V.modelViewMatrix),jt.setValue(H,"normalMatrix",V.normalMatrix),jt.setValue(H,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Rn=Y.uniformsGroups;for(let hc=0,__=Rn.length;hc<__;hc++)if(Fe.isWebGL2){const Nh=Rn[hc];nt.update(Nh,cr),nt.bind(Nh,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function m_(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function g_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,z,X){Ve.get(A.texture).__webglTexture=z,Ve.get(A.depthTexture).__webglTexture=X;const Y=Ve.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const X=Ve.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){T=A,C=z,w=X;let Y=!0,V=null,_e=!1,Te=!1;if(A){const Ue=Ve.get(A);Ue.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ue.__hasExternalTextures&&b.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const ze=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?V=ze[z][X]:V=ze[z],_e=!0):Fe.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?V=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[X]:V=ze,M.copy(A.viewport),k.copy(A.scissor),F=A.scissorTest}else M.copy(B).multiplyScalar(Z).floor(),k.copy(J).multiplyScalar(Z).floor(),F=te;if(we.bindFramebuffer(H.FRAMEBUFFER,V)&&Fe.drawBuffers&&Y&&we.drawBuffers(A,V),we.viewport(M),we.scissor(k),we.setScissorTest(F),_e){const Ue=Ve.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,X)}else if(Te){const Ue=Ve.get(A.texture),Xe=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,Xe)}R=-1},this.readRenderTargetPixels=function(A,z,X,Y,V,_e,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){we.bindFramebuffer(H.FRAMEBUFFER,Pe);try{const Ue=A.texture,Xe=Ue.format,ze=Ue.type;if(Xe!==$n&&Se.convert(Xe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Ko&&(Ce.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ze!==Qi&&Se.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Gi&&(Fe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&X>=0&&X<=A.height-V&&H.readPixels(z,X,Y,V,Se.convert(Xe),Se.convert(ze),_e)}finally{const Ue=T!==null?Ve.get(T).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,z,X=0){const Y=Math.pow(2,-X),V=Math.floor(z.image.width*Y),_e=Math.floor(z.image.height*Y);b.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,A.x,A.y,V,_e),we.unbindTexture()},this.copyTextureToTexture=function(A,z,X,Y=0){const V=z.image.width,_e=z.image.height,Te=Se.convert(X.format),Pe=Se.convert(X.type);b.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,V,_e,Te,Pe,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Te,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,Te,Pe,z.image),Y===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X,Y,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,Te=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,Ue=Se.convert(Y.format),Xe=Se.convert(Y.type);let ze;if(Y.isData3DTexture)b.setTexture3D(Y,0),ze=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),ze=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),Ct=H.getParameter(H.UNPACK_IMAGE_HEIGHT),xn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ft=H.getParameter(H.UNPACK_SKIP_ROWS),ai=H.getParameter(H.UNPACK_SKIP_IMAGES),yt=X.isCompressedTexture?X.mipmaps[V]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,yt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(ze,V,z.x,z.y,z.z,_e,Te,Pe,Ue,Xe,yt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ze,V,z.x,z.y,z.z,_e,Te,Pe,Ue,yt.data)):H.texSubImage3D(ze,V,z.x,z.y,z.z,_e,Te,Pe,Ue,Xe,yt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ft),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ai),V===0&&Y.generateMipmaps&&H.generateMipmap(ze),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,we.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===sc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?br:V0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?At:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class QE extends u_{}QE.prototype.isWebGL1Renderer=!0;class JE extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class eT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new I;class Bl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rr extends qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ns;const ho=new I,is=new I,rs=new I,ss=new Ie,fo=new Ie,d_=new Pt,Ya=new I,po=new I,$a=new I,um=new Ie,gu=new Ie,dm=new Ie;class Or extends Wt{constructor(e=new rr){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new eT(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Bl(i,3,0,!1)),ns.setAttribute("uv",new Bl(i,2,3,!1))}this.geometry=ns,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),d_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-rs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;qa(Ya.set(-.5,-.5,0),rs,o,is,r,s),qa(po.set(.5,-.5,0),rs,o,is,r,s),qa($a.set(.5,.5,0),rs,o,is,r,s),um.set(0,0),gu.set(1,0),dm.set(1,1);let a=e.ray.intersectTriangle(Ya,po,$a,!1,ho);if(a===null&&(qa(po.set(-.5,.5,0),rs,o,is,r,s),gu.set(0,1),a=e.ray.intersectTriangle(Ya,$a,po,!1,ho),a===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:Dn.getInterpolation(ho,Ya,po,$a,um,gu,dm,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qa(n,e,t,i,r,s){ss.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(fo.x=s*ss.x-r*ss.y,fo.y=r*ss.x+s*ss.y):fo.copy(ss),n.copy(e),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(d_)}class sr extends vn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends yn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,d=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ye extends yn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let y=0;const v=[],p=i/2;let u=0;g(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(m,2));function g(){const x=new I,C=new I;let w=0;const T=(t-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,k=M*(t-e)+e;for(let F=0;F<=r;F++){const q=F/r,P=q*l+a,O=Math.sin(P),G=Math.cos(P);C.x=k*O,C.y=-M*i+p,C.z=k*G,f.push(C.x,C.y,C.z),x.set(O,T,G).normalize(),h.push(x.x,x.y,x.z),m.push(q,1-M),S.push(y++)}v.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=v[S][R],k=v[S+1][R],F=v[S+1][R+1],q=v[S][R+1];d.push(M,k,q),d.push(k,F,q),w+=6}c.addGroup(u,w,0),u+=w}function _(x){const C=y,w=new Ie,T=new I;let R=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,p*M,0),h.push(0,M,0),m.push(.5,.5),y++;const k=y;for(let F=0;F<=r;F++){const P=F/r*l+a,O=Math.cos(P),G=Math.sin(P);T.x=S*G,T.y=p*M,T.z=S*O,f.push(T.x,T.y,T.z),h.push(0,M,0),w.x=O*.5+.5,w.y=G*.5*M+.5,m.push(w.x,w.y),y++}for(let F=0;F<r;F++){const q=C+F,P=k+F;x===!0?d.push(P,P+1,q):d.push(P+1,P,q),R+=3}c.addGroup(u,R,x===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ye(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lc extends ye{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ah extends yn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new I,x=new I,C=new I;for(let w=0;w<t.length;w+=3)m(t[w+0],_),m(t[w+1],x),m(t[w+2],C),l(_,x,C,g)}function l(g,_,x,C){const w=C+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=g.clone().lerp(x,R/w),M=_.clone().lerp(x,R/w),k=w-R;for(let F=0;F<=k;F++)F===0&&R===w?T[R][F]=S:T[R][F]=S.clone().lerp(M,F/k)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const M=Math.floor(S/2);S%2===0?(h(T[R][M+1]),h(T[R+1][M]),h(T[R][M])):(h(T[R][M+1]),h(T[R+1][M+1]),h(T[R+1][M]))}}function c(g){const _=new I;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(g),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function d(){const g=new I;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const x=p(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;o.push(x,1-C)}y(),f()}function f(){for(let g=0;g<o.length;g+=6){const _=o[g+0],x=o[g+2],C=o[g+4],w=Math.max(_,x,C),T=Math.min(_,x,C);w>.9&&T<.1&&(_<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,_){const x=g*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function y(){const g=new I,_=new I,x=new I,C=new I,w=new Ie,T=new Ie,R=new Ie;for(let S=0,M=0;S<s.length;S+=9,M+=6){g.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),w.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(g).add(_).add(x).divideScalar(3);const k=p(C);v(w,M+0,g,k),v(T,M+2,_,k),v(R,M+4,x,k)}}function v(g,_,x,C){C<0&&g.x===1&&(o[_]=g.x-1),x.x===0&&x.z===0&&(o[_]=C/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.vertices,e.indices,e.radius,e.details)}}class Gl extends Ah{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gl(e.radius,e.detail)}}class Ch extends yn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(t-e)/r,m=new I,y=new Ie;for(let v=0;v<=r;v++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/t+1)/2,y.y=(m.y/t+1)/2,d.push(y.x,y.y)}f+=h}for(let v=0;v<r;v++){const p=v*(i+1);for(let u=0;u<i;u++){const g=u+p,_=g,x=g+i+1,C=g+i+2,w=g+1;a.push(_,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ut extends yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new I,h=new I,m=[],y=[],v=[],p=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let x=0;u===0&&o===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(w+x,1-_),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<t;g++){const _=d[u][g+1],x=d[u][g],C=d[u+1][g],w=d[u+1][g+1];(u!==0||o>0)&&m.push(_,x,w),(u!==i-1||l<Math.PI)&&m.push(x,C,w)}this.setIndex(m),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zo extends yn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new I,f=new I,h=new I;for(let m=0;m<=i;m++)for(let y=0;y<=r;y++){const v=y/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=r;y++){const v=(r+1)*m+y-1,p=(r+1)*(m-1)+y-1,u=(r+1)*(m-1)+y,g=(r+1)*m+y;o.push(v,p,g),o.push(p,u,g)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Q extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W0,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tT extends Q{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bh extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _u=new Pt,hm=new I,fm=new I;class h_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(hm),fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fm),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pm=new Pt,mo=new I,vu=new I;class nT extends h_{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),vu.copy(i.position),vu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vu),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class Es extends bh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new nT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iT extends h_{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mm extends bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new iT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rT extends bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);const ae={warmWood:13144661,warmWoodDark:9067054,cream:16645111,creamDark:15920353,coral:15891821,coralDark:14180947,mint:7783070,mintLight:10412226,softYellow:16375668,softYellowDark:15058772,brass:14727515,stainless:14015198,charcoal:4013892,plantGreen:5215840,plantStem:5848357,warmLight:16774107,walnutDark:7226143,walnutLight:11566411},bt={DINING:{name:"Dining Hall"},COUNTER:{name:"Order & Pickup Counter"},KITCHEN:{name:"Kitchen"},RESTROOM:{name:"Guest Restroom"}},go={radius:.45,moveSpeed:5.8,turnSpeed:16,acceleration:24,deceleration:18},yu={frustumSize:20,lerpSpeed:.08};class sT{constructor(){K(this,"colliders",[])}clear(){this.colliders=[]}addBox(e,t,i,r,s,o){const a=s/2,l=o/2;this.colliders.push({id:e,name:t,minX:i-a,maxX:i+a,minZ:r-l,maxZ:r+l})}getColliders(){return this.colliders}checkCollision(e,t,i){const r=i*i;for(let s=0;s<this.colliders.length;s++){const o=this.colliders[s],a=Math.max(o.minX,Math.min(e,o.maxX)),l=Math.max(o.minZ,Math.min(t,o.maxZ)),c=e-a,d=t-l;if(c*c+d*d<r)return!0}return!1}moveWithCollision(e,t,i,r,s){let o=e,a=t;return i!==0&&(this.checkCollision(e+i,t,s)||(o=e+i)),r!==0&&(this.checkCollision(o,t+r,s)||(a=t+r)),this.checkCollision(o,a,s)&&(this.checkCollision(o,t,s)?this.checkCollision(e,a,s)?(o=e,a=t):o=e:a=t),{x:o,z:a}}}class oT{constructor(){K(this,"objects",[]);K(this,"activeTarget",null);K(this,"onTargetChange");K(this,"onTrigger")}register(e){this.objects.push(e)}clear(){this.objects=[],this.activeTarget=null}setListeners(e,t){this.onTargetChange=e,this.onTrigger=t}update(e,t){var s;let i=null,r=1/0;for(let o=0;o<this.objects.length;o++){const a=this.objects[o],l=e-a.x,c=t-a.z,d=l*l+c*c;d<=a.interactionRadius*a.interactionRadius&&d<r&&(r=d,i=a)}((s=this.activeTarget)==null?void 0:s.id)!==(i==null?void 0:i.id)&&(this.activeTarget=i,this.onTargetChange&&this.onTargetChange(this.activeTarget))}interact(){return this.activeTarget&&this.onTrigger?(this.onTrigger(this.activeTarget),this.activeTarget):null}getActiveTarget(){return this.activeTarget}getAllObjects(){return this.objects}}function xu(n,e={}){const t=e.width||1024,i=e.height||1024,r=e.columns||6,s=e.grainIntensity??.18,o=e.knots??!0,a=document.createElement("canvas");a.width=t,a.height=i;const l=a.getContext("2d"),c=n>>16&255,d=n>>8&255,f=n&255;l.fillStyle=`rgb(${c}, ${d}, ${f})`,l.fillRect(0,0,t,i);const h=t/r;for(let y=0;y<r;y++){const v=y*h,p=[0],u=2+y%2;for(let g=1;g<u;g++){const _=.28+(y*.37+g*.43)%.48;p.push(Math.floor(i*_))}p.sort((g,_)=>g-_),p.push(i);for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1],C=x-_,w=((y*17+g*23)%15-7)/100,T=Math.min(255,Math.max(0,Math.round(c*(1+w)))),R=Math.min(255,Math.max(0,Math.round(d*(1+w)))),S=Math.min(255,Math.max(0,Math.round(f*(1+w)))),M=l.createLinearGradient(v,_,v+h,_);M.addColorStop(0,`rgb(${Math.round(T*.94)}, ${Math.round(R*.94)}, ${Math.round(S*.94)})`),M.addColorStop(.3,`rgb(${T}, ${R}, ${S})`),M.addColorStop(.85,`rgb(${Math.round(T*1.04)}, ${Math.round(R*1.04)}, ${Math.round(S*1.04)})`),M.addColorStop(1,`rgb(${Math.round(T*.92)}, ${Math.round(R*.92)}, ${Math.round(S*.92)})`),l.fillStyle=M,l.fillRect(v,_,h,C),l.save(),l.beginPath(),l.rect(v,_,h,C),l.clip();const k=Math.floor(h*.7);for(let F=0;F<k;F++){const q=v+F/k*h,P=(y*31+F*13)%40-20,O=(.04+F*7%10*.015)*s,G=F%3!==0;l.strokeStyle=G?`rgba(0, 0, 0, ${O})`:`rgba(255, 255, 255, ${O*.7})`,l.lineWidth=1+F*3%2,l.beginPath(),l.moveTo(q,_);const Z=q+Math.sin((_+50)*.015)*P,N=_+C*.35,U=q-Math.sin((_+200)*.015)*P*.8,B=_+C*.7,J=q+Math.sin((_+350)*.02)*(P*.5);l.bezierCurveTo(Z,N,U,B,J,x),l.stroke()}if(o&&(y+g)%3===1){const F=v+h*(.35+y*9%30/100),q=_+C*(.3+g*11%40/100),P=6+y*7%8;l.strokeStyle=`rgba(0, 0, 0, ${s*.35})`,l.lineWidth=1.5;for(let O=1;O<=4;O++)l.beginPath(),l.ellipse(F,q,P*O*.6,P*O*1.5,.05,0,Math.PI*2),l.stroke()}l.restore(),g>0&&(l.fillStyle="rgba(60, 40, 20, 0.45)",l.fillRect(v,_-1,h,1.5),l.fillStyle="rgba(255, 255, 255, 0.18)",l.fillRect(v,_+.5,h,1))}y>0&&(l.fillStyle="rgba(60, 40, 20, 0.45)",l.fillRect(v-1,0,1.5,i),l.fillStyle="rgba(255, 255, 255, 0.16)",l.fillRect(v+.5,0,1,i))}l.fillStyle="rgba(60, 40, 20, 0.35)",l.fillRect(0,0,1,i),l.fillRect(t-1,0,1,i);const m=new sr(a);return m.wrapS=qo,m.wrapT=qo,m.colorSpace=At,m.minFilter=Hs,m.magFilter=Qt,m.generateMipmaps=!0,m}class aT{constructor(e,t,i){K(this,"group");K(this,"interactiveMarkers",[]);this.scene=e,this.physics=t,this.interactions=i,this.group=new Me,this.scene.add(this.group),this.buildFloors(),this.buildPerimeterAndDividers(),this.buildKitchenZone(),this.buildCounterZone(),this.buildDiningZone(),this.buildRestroomZone(),this.buildAtmosphericProps()}buildFloors(){const e=new Q({color:3813416,roughness:.9}),t=new D(new ce(38,.4,30),e);t.position.set(0,-.21,0),t.receiveShadow=!0,this.group.add(t);const i=xu(ae.warmWood,{columns:6,grainIntensity:.16,knots:!0});i.repeat.set(24,7);const r=new Q({color:ae.warmWood,map:i,roughness:.48,metalness:.04}),s=new D(new gi(34,17.3),r);s.rotation.x=-Math.PI/2,s.position.set(.5,.002,4.85),s.receiveShadow=!0,this.group.add(s);const o=xu(ae.warmWood,{columns:6,grainIntensity:.16,knots:!0});o.repeat.set(8,4);const a=new Q({color:ae.warmWood,map:o,roughness:.48,metalness:.04}),l=new D(new gi(10.8,9.7),a);l.rotation.x=-Math.PI/2,l.position.set(-1.4,.002,-8.65),l.receiveShadow=!0,this.group.add(l);const c=new Q({color:ae.brass,metalness:.75,roughness:.25}),d=new D(new ce(.12,.012,11),c);d.position.set(3.95,.006,-8),this.group.add(d);const f=new D(new ce(.12,.012,9.5),c);f.position.set(-6.75,.006,-8.5),this.group.add(f);const h=new Me,m=new Q({color:ae.mint,roughness:.45}),y=new Q({color:ae.creamDark,roughness:.38}),v=1,p=14,u=11,g=4,_=-13.5;for(let T=0;T<p;T++)for(let R=0;R<u;R++){const S=(T+R)%2===0?m:y,M=new D(new gi(v-.04,v-.04),S);M.rotation.x=-Math.PI/2,M.position.set(g+T*v,.003,_+R*v),M.receiveShadow=!0,h.add(M)}this.group.add(h);const x=xu(ae.mintLight,{columns:6,grainIntensity:.14,knots:!1});x.repeat.set(7,4);const C=new Q({color:ae.mintLight,map:x,roughness:.45,metalness:.03}),w=new D(new gi(9.5,9.5),C);w.rotation.x=-Math.PI/2,w.position.set(-11.5,.003,-8.5),w.receiveShadow=!0,this.group.add(w)}buildPerimeterAndDividers(){const e=new Q({color:ae.cream,roughness:.85}),t=new Q({color:ae.warmWoodDark,roughness:.65}),i=new Q({color:ae.creamDark,roughness:.75}),r=new Q({color:ae.mint,roughness:.6}),s=(m,y,v,p,u,g=3.2,_=!0)=>{const x=new D(new ce(p,g,u),e);x.position.set(y,g/2,v),x.castShadow=!0,x.receiveShadow=!0,this.group.add(x);const C=new D(new ce(p+.06,.12,u+.06),t);if(C.position.set(y,g+.06,v),this.group.add(C),_&&g>=2){const w=new D(new ce(p+.02,1.1,u+.02),i);w.position.set(y,.55,v),this.group.add(w);const T=new D(new ce(p+.04,.06,u+.04),r);T.position.set(y,1.1,v),this.group.add(T)}this.physics.addBox(m,"Wall",y,v,p,u)};s("wall-north",.5,-13.5,34,.6,3.2),s("wall-west",-16.5,0,.6,27,3.2),s("wall-east",17.5,0,.6,27,3.2),s("wall-south-left",-13.5,13.5,5.5,.5,.6,!1),s("wall-south-mid",2,13.5,11,.5,.6,!1),s("wall-south-right",13.5,13.5,8,.5,.6,!1),s("restroom-east-top",-6.8,-11.5,.4,4,3),s("restroom-east-bottom",-6.8,-5.5,.4,3,3);const o=new Q({color:ae.warmWoodDark,roughness:.6}),a=new D(new ce(.5,.6,2.5),o);a.position.set(-6.8,2.7,-8.2),this.group.add(a),s("restroom-south",-11.8,-3.8,9.6,.4,3);const l=new Q({color:ae.mint,roughness:.35}),c=new D(new ce(.1,.35,1.2),l);c.position.set(-6.55,2.3,-8.2),this.group.add(c),s("kitchen-west-top",3.5,-10.5,.4,5.5,3),s("kitchen-west-bottom",3.5,-3,.4,2,3);const d=new D(new ce(.5,.6,3.2),o);d.position.set(3.5,2.7,-6),this.group.add(d),s("kitchen-south-left",6,-2.5,4.5,.4,3),s("kitchen-south-right",16,-2.5,3,.4,3);const f=new Q({color:ae.warmWood,roughness:.5}),h=new D(new ce(6,.15,.8),f);h.position.set(11.5,1.05,-2.5),this.group.add(h),this.physics.addBox("pass-window-counter","Pass Window",11.5,-2.5,6,.6)}buildKitchenZone(){const e=new Q({color:ae.stainless,metalness:.85,roughness:.25}),t=new Q({color:ae.brass,metalness:.8,roughness:.2}),i=new Q({color:ae.charcoal,roughness:.85}),r=new Me;r.position.set(6.5,0,-12.5);const s=new D(new ce(3.2,.95,1.3),e);s.position.y=.475,s.castShadow=!0,r.add(s);for(let le=0;le<2;le++)for(let fe=0;fe<3;fe++){const Re=new D(new ce(.7,.05,.45),i);Re.position.set(-1+fe*1,.98,-.3+le*.55),r.add(Re);const Oe=new D(new ye(.04,.04,.03,10),t);Oe.rotation.x=Math.PI/2,Oe.position.set(-1+fe*1,.78,.66),r.add(Oe)}const o=new D(new ce(3.6,.7,1.4),e);o.position.set(0,2.3,0),r.add(o),this.group.add(r),this.physics.addBox("kitchen-stove","Commercial Range & Grill",6.5,-12.5,3.4,1.5),this.interactions.register({id:"station-stove",name:"Stovetop Range & Grill",zone:bt.KITCHEN.name,actionLabel:"Examine Stovetop & Grill",detailTitle:"Stovetop Range & Sizzle Grill",detailDescription:"Heavy-duty commercial burners and flat-top sizzle grill. Used for grilling prime beef patties and simmering savory pasta marinara.",category:"kitchen",x:6.5,z:-11.4,interactionRadius:1.8,icon:"flame"}),this.createInteractionBeacon(6.5,-11.4);const a=new Me;a.position.set(9.8,0,-12.5);const l=new D(new ce(2.4,1.4,1.3),e);l.position.y=.7,l.castShadow=!0,a.add(l);const c=new Q({color:2234901,emissive:14242590,emissiveIntensity:.65,roughness:.8}),d=new D(new ce(1.9,.35,.2),c);d.position.set(0,.85,.6),a.add(d);const f=new D(new ye(.025,.025,1.4,8),t);f.rotation.z=Math.PI/2,f.position.set(0,1.15,.68),a.add(f),this.group.add(a),this.physics.addBox("kitchen-oven","Stone Pizza Deck Oven",9.8,-12.5,2.6,1.4),this.interactions.register({id:"station-oven",name:"Stone Pizza Oven",zone:bt.KITCHEN.name,actionLabel:"Examine Pizza Deck Oven",detailTitle:"Artisanal Stone Deck Pizza Oven",detailDescription:"High-temperature refractory stone hearth chamber heated to 450°C. Bakes unbaked pizzas into golden bubbly perfection.",category:"kitchen",x:9.8,z:-11.4,interactionRadius:1.8,icon:"box"}),this.createInteractionBeacon(9.8,-11.4);const h=new Me;h.position.set(12.8,0,-12.5);const m=new D(new ce(1.8,1.05,1.3),e);m.position.y=.525,m.castShadow=!0,h.add(m);const y=new Q({color:13934615,roughness:.2,metalness:.2});for(let le=-1;le<=1;le+=2){const fe=new D(new ce(.65,.05,.8),y);fe.position.set(le*.45,1.04,0),h.add(fe);const Re=new D(new ye(.015,.015,.45,8),t);Re.rotation.x=Math.PI/4,Re.position.set(le*.45,1.25,.35),h.add(Re)}this.group.add(h),this.physics.addBox("kitchen-fryer","Commercial Deep Fryer",12.8,-12.5,2,1.4),this.interactions.register({id:"station-fryer",name:"Commercial Deep Fryer",zone:bt.KITCHEN.name,actionLabel:"Examine Deep Fryer",detailTitle:"Twin-Vat Commercial Deep Fryer",detailDescription:"Precision thermostatically controlled oil fryer at 180°C. Perfect for frying seasoned battered chicken cutlets to a crunchy golden crisp.",category:"kitchen",x:12.8,z:-11.4,interactionRadius:1.8,icon:"flame"}),this.createInteractionBeacon(12.8,-11.4);const v=new Me;v.position.set(15.8,0,-12.5);const p=new D(new ce(1.8,.9,1.2),e);p.position.y=.45,v.add(p);const u=new D(new ye(.03,.03,.55,8),t);u.position.set(0,1.2,-.3),v.add(u);const g=new D(new Zo(.15,.025,8,12,Math.PI),t);g.rotation.z=Math.PI/2,g.position.set(0,1.45,-.15),v.add(g),this.group.add(v),this.physics.addBox("kitchen-sink","Wash Sink",15.8,-12.5,2,1.4),this.interactions.register({id:"interact-sink",name:"Kitchen Sink",zone:bt.KITCHEN.name,actionLabel:"Use Kitchen Sink",detailTitle:"Double Commercial Sink",detailDescription:"Stainless steel wash station with brass high-pressure sprayer for sanitizing kitchenware.",category:"kitchen",x:15.8,z:-11.4,interactionRadius:1.8,icon:"droplet"}),this.createInteractionBeacon(15.8,-11.4);const _=new Me;_.position.set(11.5,0,-8);const x=new D(new ce(3.6,.92,1.6),e);x.position.y=.46,x.castShadow=!0,_.add(x);const C=new Q({color:ae.walnutLight,roughness:.6}),w=new D(new ce(1.6,.08,1.1),C);w.position.set(-.6,.96,0),_.add(w);const T=new D(new ce(.04,.02,.35),e);T.position.set(-.6,1.01,0),_.add(T);const R=new Q({color:ae.stainless,metalness:.9});for(let le=0;le<3;le++){const fe=new D(new ye(.18,.1,.12,12),R);fe.position.set(.5+le*.45,.98,.2),_.add(fe)}this.group.add(_),this.physics.addBox("kitchen-prep","Prep Island",11.5,-8,3.8,1.8),this.interactions.register({id:"station-prep",name:"Prep & Assembly Board",zone:bt.KITCHEN.name,actionLabel:"Examine Prep Counter",detailTitle:"Prep & Recipe Assembly Station",detailDescription:"Central butcher block assembly station. Combine dough, sauce, cheese & pepperoni for Pizza; bun, cooked patty, cheese & veg for Burger; dredge chicken; or assemble Artisan Sandwiches!",category:"kitchen",x:11.5,z:-6.6,interactionRadius:1.8,icon:"utensils"}),this.createInteractionBeacon(11.5,-6.6);const S=new Me;S.position.set(4.3,0,-8.5);const M=new D(new ce(1.2,2.4,1.8),e);M.position.y=1.2,M.castShadow=!0,S.add(M);for(let le=0;le<2;le++){const fe=new D(new ye(.025,.025,.7,8),t);fe.position.set(.62,1.2,-.4+le*.8),S.add(fe)}this.group.add(S),this.physics.addBox("kitchen-fridge","Walk-in Refrigerator",4.3,-8.5,1.4,2),this.interactions.register({id:"station-fridge",name:"Cold Storage / Chiller",zone:bt.KITCHEN.name,actionLabel:"Open Cold Storage",detailTitle:"Walk-in Chiller & Cold Storage",detailDescription:"Chilled food unit containing Prime Beef Patties, Fresh Chicken Cutlets, Smoked Deli Ham, Mozzarella/Cheddar Cheese, and San Marzano Tomato Sauce.",category:"kitchen",x:5.6,z:-8.5,interactionRadius:1.8,icon:"box"}),this.createInteractionBeacon(5.6,-8.5);const k=new Me;k.position.set(16.5,0,-8.5);const F=new Q({color:ae.warmWoodDark,roughness:.65}),q=new D(new ce(1,2.4,2.2),F);q.position.y=1.2,q.castShadow=!0,k.add(q);const P=new Q({color:15586996,roughness:.9});for(let le=0;le<3;le++){const fe=new D(new ce(.35,.45,.35),P);fe.position.set(0,.75+le*.5,-.5+le*.45),k.add(fe)}this.group.add(k),this.physics.addBox("kitchen-pantry","Dry Pantry",16.5,-8.5,1.2,2.4),this.interactions.register({id:"station-pantry",name:"Dry Grain & Dough Pantry",zone:bt.KITCHEN.name,actionLabel:"Open Dry Pantry",detailTitle:"Dry Grain & Bakery Pantry",detailDescription:"Stocks Artisan Pizza Dough, Brioche Burger Buns, Country Sliced Bread, Fresh Fettuccine, Dredging Flour, and Pepperoni.",category:"kitchen",x:15.2,z:-8.5,interactionRadius:1.8,icon:"box"}),this.createInteractionBeacon(15.2,-8.5);const O=new Me;O.position.set(16.5,0,-5.5);const G=new Q({color:ae.warmWood,roughness:.75}),Z=new D(new ce(1,.9,1.4),G);Z.position.y=.45,Z.castShadow=!0,O.add(Z);const N=new Q({color:4769652,roughness:.7}),U=new Q({color:15680580,roughness:.4}),B=new D(new ut(.18,8,8),N);B.position.set(0,.95,-.3);const J=new D(new ut(.14,8,8),U);J.position.set(0,.94,.25),O.add(B,J),this.group.add(O),this.physics.addBox("kitchen-produce","Produce Crate",16.5,-5.5,1.2,1.6),this.interactions.register({id:"station-produce",name:"Fresh Farm Produce Bin",zone:bt.KITCHEN.name,actionLabel:"Pick Fresh Produce",detailTitle:"Fresh Produce Harvest Crate",detailDescription:"Crisp organic romaine lettuce heads and ripe vine heirloom tomatoes.",category:"kitchen",x:15.2,z:-5.5,interactionRadius:1.8,icon:"utensils"}),this.createInteractionBeacon(15.2,-5.5);const te=new Me;te.position.set(4.3,0,-5);const j=new D(new ye(.32,.28,.9,14),e);j.position.y=.45,j.castShadow=!0,te.add(j);const ee=new Q({color:2237480,roughness:.5}),ue=new D(new ye(.34,.34,.08,14),ee);ue.position.y=.92,te.add(ue),this.group.add(te),this.physics.addBox("kitchen-trash","Kitchen Trash Bin",4.3,-5,.9,.9),this.interactions.register({id:"station-trash",name:"Kitchen Waste Disposal",zone:bt.KITCHEN.name,actionLabel:"Use Kitchen Waste Bin",detailTitle:"Sanitary Kitchen Disposal Bin",detailDescription:"Step-pedal waste receptacle for throwing away ruined/burnt food or clearing unwanted ingredients.",category:"kitchen",x:5.4,z:-5,interactionRadius:1.8,icon:"trash"}),this.createInteractionBeacon(5.4,-5)}buildCounterZone(){const e=new Q({color:ae.warmWoodDark,roughness:.6}),t=new Q({color:ae.cream,roughness:.3,metalness:.05}),i=new Q({color:ae.brass,metalness:.75,roughness:.25}),r=new Me;r.position.set(10,0,1.5);const s=new Me;s.position.set(10,0,2.2);const o=9.8,a=4.2,l=new Q({color:ae.coral,roughness:.85,metalness:.02}),c=new D(new gi(o,a),l);c.rotation.x=-Math.PI/2,c.position.y=.004,c.receiveShadow=!0,s.add(c);const d=new Q({color:ae.mint,roughness:.5}),f=.08,h=new D(new ce(o,.008,f),d);h.position.set(0,.005,-a/2);const m=new D(new ce(o,.008,f),d);m.position.set(0,.005,a/2);const y=new D(new ce(f,.008,a),d);y.position.set(-o/2,.005,0);const v=new D(new ce(f,.008,a),d);v.position.set(o/2,.005,0),s.add(h,m,y,v),this.group.add(s);const p=new D(new ce(8,1,1.2),e);p.position.y=.5,p.castShadow=!0,r.add(p);const u=new D(new ce(8.2,.08,1.3),t);u.position.y=1.04,r.add(u);const g=new Q({color:ae.mint,roughness:.5}),_=new D(new ce(8.1,.12,1.25),g);_.position.y=.06,r.add(_);const x=new Q({color:2040615,roughness:.3}),C=new D(new ye(.04,.06,.22,10),i);C.position.set(-1.8,1.15,.1),r.add(C);const w=new D(new ce(.35,.24,.04),x);w.rotation.x=-Math.PI/6,w.position.set(-1.8,1.3,.05),r.add(w);const T=new D(new ye(.08,.1,.04,12),i);T.position.set(-.8,1.1,.2);const R=new D(new ut(.07,12,8,0,Math.PI*2,0,Math.PI/2),i);R.position.set(-.8,1.12,.2),r.add(T,R);const S=new tT({color:16777215,transmission:.9,opacity:1,transparent:!0,roughness:.1,ior:1.5}),M=new D(new ce(2.2,.65,.8),S);M.position.set(1.5,1.4,0),r.add(M);const k=new D(new ce(2.24,.04,.84),i);k.position.set(1.5,1.73,0),r.add(k);const F=new Me;F.position.set(14,0,5);const q=new D(new ce(1,2.4,3.2),e);q.position.y=1.2,q.castShadow=!0,F.add(q);const P=new Q({color:13151615,roughness:.8});for(let O=0;O<3;O++){const G=new D(new ce(.3,.38,.25),P);G.position.set(0,1.45,-.8+O*.8),F.add(G)}this.group.add(F),this.physics.addBox("counter-shelf","Takeaway Racks",14,5,1.2,3.4),this.group.add(r),this.physics.addBox("main-counter","Service Counter",10,1.5,8.2,1.4),this.interactions.register({id:"interact-pos",name:"POS Terminal",zone:bt.COUNTER.name,actionLabel:"Examine POS Register",detailTitle:"Bistro POS & Payment Terminal",detailDescription:"Digital order management system. In Phase 2, this will tally patron checks, manage payment processing, and trigger order queues.",category:"counter",x:8.2,z:2.5,interactionRadius:1.8,icon:"terminal"}),this.createInteractionBeacon(8.2,2.5),this.interactions.register({id:"interact-bell",name:"Order Bell",zone:bt.COUNTER.name,actionLabel:"Ring Service Bell",detailTitle:"Brass Call Bell",detailDescription:"Polished solid brass bell. Pressing E will ring the bell with a crisp chime to signal front-of-house staff.",category:"counter",x:9.2,z:2.5,interactionRadius:1.8,icon:"bell"}),this.createInteractionBeacon(9.2,2.5),this.interactions.register({id:"interact-takeaway",name:"Takeaway Counter",zone:bt.COUNTER.name,actionLabel:"Check Takeaway Orders",detailTitle:"Express Takeaway Station",detailDescription:"Dedicated takeaway order holding shelves with insulated packaging and guest order tickets.",category:"counter",x:12.5,z:5,interactionRadius:1.8,icon:"box"}),this.createInteractionBeacon(12.5,5)}buildDiningZone(){const e=new Q({color:ae.warmWood,roughness:.45}),t=new Q({color:ae.warmWoodDark,roughness:.6}),i=new Q({color:ae.brass,metalness:.75,roughness:.25}),r=new Q({color:ae.coral,roughness:.65,metalness:.05}),s=new Q({color:ae.mint,roughness:.65,metalness:.05}),o=(y,v,p,u,g=!1,_=!1)=>{const x=new Me;x.position.set(p,0,u);const C=new D(new ye(.08,.4,.76,16),t);C.position.y=.38,x.add(C);const w=new D(new ye(1.2,1.2,.08,24),e);w.position.y=.78,w.castShadow=!0,x.add(w);const T=new Q({color:ae.cream,roughness:.3}),R=new D(new ye(.06,.08,.2,12),T);R.position.y=.9,x.add(R);const S=new Q({color:ae.softYellow,roughness:.4}),M=new D(new ut(.06,8,8),S);M.position.y=1.04,x.add(M);const k=_?s:r;[0,Math.PI/2,Math.PI,3*Math.PI/2].forEach(N=>{const U=new Me,B=1.45;U.position.set(Math.cos(N)*B,0,Math.sin(N)*B),U.rotation.y=-N-Math.PI/2;const J=new Q({color:ae.warmWoodDark,roughness:.7});for(let ee=-1;ee<=1;ee+=2)for(let ue=-1;ue<=1;ue+=2){const le=new D(new ye(.03,.025,.45,8),J);le.position.set(ee*.18,.225,ue*.18),U.add(le)}const te=new D(new ce(.48,.1,.46),k);te.position.y=.48,te.castShadow=!0,U.add(te);const j=new D(new ce(.48,.45,.08),k);j.position.set(0,.72,-.2),U.add(j),x.add(U)});const q=new Me;q.position.set(p,2.7,u);const P=new D(new ye(.01,.01,.9,6),i);P.position.y=.45,q.add(P);const O=new Q({color:ae.cream,roughness:.5}),G=new D(new lc(.35,.25,16,1,!0),O);G.rotation.x=Math.PI,q.add(G);const Z=new D(new ut(.1,10,8),new ir({color:ae.warmLight}));Z.position.y=-.05,q.add(Z),this.group.add(x),this.group.add(q),this.physics.addBox(y,v,p,u,3.2,3.2),g&&(this.interactions.register({id:`interact-${y}`,name:v,zone:bt.DINING.name,actionLabel:`Inspect ${v}`,detailTitle:`${v} (4-Seater)`,detailDescription:"Handcrafted walnut dining table with deep burgundy velvet armchairs and warm overhead brass lighting.",category:"dining",x:p,z:u+1.8,interactionRadius:1.8,icon:"utensils"}),this.createInteractionBeacon(p,u+1.8))};o("dining-table-1","Dining Table 1",-6,.5,!0,!1),o("dining-table-2","Dining Table 2",-6,7.5,!0,!0),o("dining-table-3","Dining Table 3",.5,7.5,!0,!1);const a=(y,v,p=!1)=>{const u=new Me;u.position.set(-14.2,0,v);const g=new Q({color:ae.warmWoodDark,roughness:.65}),_=new D(new ce(1.6,1.4,2.6),g);_.position.set(-.2,.7,0),u.add(_);const x=p?s:r,C=new D(new ce(.9,.45,2.4),x);C.position.set(.15,.42,0),u.add(C);const w=new D(new ce(.2,.8,2.4),x);w.position.set(-.4,.95,0),u.add(w);const T=new D(new ce(.8,.76,1.6),e);T.position.set(.9,.38,0),u.add(T);const R=new D(new ce(.25,.78,1.62),new Q({color:ae.cream,roughness:.5}));R.position.set(.9,.39,0),u.add(R);const S=new D(new ye(.04,.05,.15,10),new Q({color:ae.softYellow,roughness:.4}));S.position.set(.9,.86,0),u.add(S),this.group.add(u),this.physics.addBox(y,"Cosy Booth",-13.5,v,2.8,2.8),this.interactions.register({id:`interact-${y}`,name:"Cosy Booth",zone:bt.DINING.name,actionLabel:"Examine Booth",detailTitle:"Cosy Dining Booth",detailDescription:"Comfortable private booth seating with soft cushions, warm honey wood, and fresh table accents.",category:"dining",x:-11.5,z:v,interactionRadius:1.8,icon:"utensils"}),this.createInteractionBeacon(-11.5,v)};a("booth-1",1,!1),a("booth-2",7.5,!0);const l=new Me;l.position.set(-3.5,0,11.5);const c=new Q({color:ae.warmWoodDark,roughness:.6}),d=new D(new ce(.7,1.15,.6),c);d.position.y=.575,l.add(d);const f=new D(new ce(.74,.04,.64),new Q({color:ae.softYellowDark,roughness:.4}));f.position.y=1.16,l.add(f);const h=new Q({color:ae.coralDark,roughness:.7}),m=new D(new ce(.35,.05,.28),h);m.position.set(0,1.2,0),m.rotation.y=.15,l.add(m),this.group.add(l),this.physics.addBox("host-podium","Host Podium",-3.5,11.5,.9,.8),this.interactions.register({id:"interact-host-podium",name:"Host Podium",zone:bt.DINING.name,actionLabel:"Check Reservations",detailTitle:"Maître D' Reception Podium",detailDescription:"Reception stand with leather-bound guest directory and dining reservations. Welcomes patrons into the restaurant.",category:"dining",x:-3.5,z:10.2,interactionRadius:1.8,icon:"bookmark"}),this.createInteractionBeacon(-3.5,10.2)}buildRestroomZone(){const e=new Q({color:ae.warmWoodDark,roughness:.6}),t=new Q({color:ae.warmWood,roughness:.65}),i=new Q({color:16645629,roughness:.15,metalness:.05}),r=new Q({color:ae.brass,metalness:.75,roughness:.25}),s=new Me;s.position.set(-11.5,0,-8.5);const o=new Me;o.position.set(0,0,-3.8);const a=new D(new ce(3.4,.85,1.1),e);a.position.y=.425,o.add(a);const l=new D(new ce(3.5,.08,1.2),new Q({color:ae.cream,roughness:.25}));l.position.y=.88,o.add(l);for(let g=-1;g<=1;g+=2){const _=new D(new ye(.38,.32,.2,16),i);_.position.set(g*.9,.98,0),o.add(_);const x=new D(new ye(.025,.025,.35,8),r);x.position.set(g*.9,1.25,-.3),o.add(x)}const c=new Q({color:14084846,metalness:.9,roughness:.05}),d=new D(new ce(3,1.2,.06),c);d.position.set(0,1.85,-.55),o.add(d);const f=new D(new ce(3.1,1.3,.04),new Q({color:ae.mint,roughness:.5}));f.position.set(0,1.85,-.56),o.add(f),s.add(o),this.physics.addBox("restroom-vanity","Restroom Vanity",-11.5,-12.3,3.6,1.4),this.interactions.register({id:"interact-restroom-vanity",name:"Vanity & Sink",zone:bt.RESTROOM.name,actionLabel:"Use Restroom Sink",detailTitle:"Porcelain Vanity & Wash Station",detailDescription:"Clean cream wash counter equipped with dual vessel porcelain sinks, brass gooseneck taps, and full-length mirror.",category:"restroom",x:-11.5,z:-11.2,interactionRadius:1.8,icon:"droplet"}),this.createInteractionBeacon(-11.5,-11.2);const h=new Me;h.position.set(-3.5,0,0);const m=new D(new ce(.1,2.2,2.6),t);m.position.set(0,1.1,0),h.add(m);const y=new D(new ce(1.8,2,.08),t);y.position.set(.9,1.1,1.3),h.add(y);const v=new D(new ye(.02,.02,.16,8),r);v.position.set(1.5,1.1,1.36),h.add(v);const p=new D(new ce(.45,.45,.65),i);p.position.set(.85,.225,-.3),h.add(p);const u=new D(new ce(.5,.6,.3),i);u.position.set(.85,.65,-.55),h.add(u),s.add(h),this.physics.addBox("restroom-stall","Restroom Stall",-15,-8.5,2.8,3),this.interactions.register({id:"interact-restroom-stall",name:"Privacy Stall",zone:bt.RESTROOM.name,actionLabel:"Check Restroom Stall",detailTitle:"Private Restroom Cabin",detailDescription:"Spotless private guest facility featuring warm wood partition and privacy latch.",category:"restroom",x:-13.2,z:-6.5,interactionRadius:1.8,icon:"box"}),this.createInteractionBeacon(-13.2,-6.5),this.group.add(s)}buildAtmosphericProps(){const e=new Q({color:ae.warmWoodDark,roughness:.7}),t=new Q({color:ae.brass,metalness:.75,roughness:.25}),i=(o,a,l=ae.creamDark)=>{const c=new Me;c.position.set(o,0,a);const d=new Q({color:l,roughness:.5}),f=new D(new ye(.38,.28,.7,14),d);f.position.y=.35,f.castShadow=!0,c.add(f);const h=new D(new Zo(.39,.02,8,16),t);h.rotation.x=Math.PI/2,h.position.y=.62,c.add(h);const m=new Q({color:ae.plantGreen,roughness:.6}),y=new Q({color:ae.plantStem,roughness:.85}),v=new D(new ye(.05,.07,.85,8),y);v.position.y=.85,c.add(v);const p=new D(new ut(.5,12,10),m);p.position.set(0,1.4,0),p.castShadow=!0,c.add(p);const u=new D(new ut(.38,10,8),m);u.position.set(.18,1.7,.1),u.castShadow=!0,c.add(u),this.group.add(c),this.physics.addBox(`plant-${o}-${a}`,"Potted Plant",o,a,.9,.9)},r=(o,a,l,c,d,f,h,m)=>{const y=new Me;y.position.set(o,a,l),y.rotation.y=f;const v=.06,p=new D(new ce(c,d,v),e);y.add(p);const u=new D(new ce(c-.12,d-.12,v+.01),new Q({color:ae.cream,roughness:.6}));y.add(u);const g=new Q({color:h,roughness:.65}),_=new D(new gi(c-.26,d-.26),g);_.position.z=v/2+.008,y.add(_);const x=new Q({color:m,roughness:.5}),C=new D(new Zs((d-.35)/2.8,20),x);C.position.set((c-.3)*.18,0,v/2+.01),y.add(C);const w=new D(new ce(c*.45,.04,.08),t);w.position.set(0,d/2+.12,.14),y.add(w);const T=new D(new ye(.015,.015,.14,8),t);T.rotation.x=Math.PI/4,T.position.set(0,d/2+.06,.07),y.add(T),this.group.add(y)},s=(o,a,l,c)=>{const d=new Me;d.position.set(o,a,l),d.rotation.y=c;const f=new D(new ye(.12,.12,.03,12),t);f.rotation.x=Math.PI/2,d.add(f);const h=new D(new ye(.02,.02,.22,8),t);h.rotation.x=Math.PI/3,h.position.set(0,.05,.1),d.add(h);const m=new Q({color:16775400,emissive:16771261,emissiveIntensity:.6,roughness:.25}),y=new D(new ut(.11,14,12),m);y.position.set(0,.12,.19),d.add(y);const v=new Es(ae.warmLight,.5,6,1.5);v.position.set(0,.12,.22),d.add(v),this.group.add(d)};r(-1.65,2,-13.15,3.8,2,0,ae.creamDark,ae.coral),i(-4.4,-12.4,ae.mint),i(1.1,-12.4,ae.softYellow),s(-3.9,2.3,-13.15,0),s(.6,2.3,-13.15,0),r(-16.15,2,1,2.4,1.4,Math.PI/2,ae.coral,ae.softYellow),r(-16.15,2,7.5,2.4,1.4,Math.PI/2,ae.mint,ae.cream),s(-16.15,2.35,4.25,Math.PI/2),s(-16.15,2.35,11,Math.PI/2),r(17.15,2,6.5,2.4,1.4,-Math.PI/2,ae.softYellow,ae.coral),s(17.15,2.35,2.2,-Math.PI/2),i(-15.5,12,ae.coral),i(16.5,12,ae.mint),i(-6.2,12,ae.cream),i(16.5,-2.8,ae.softYellow)}createInteractionBeacon(e,t){const i=new Ch(.35,.45,24),r=new ir({color:ae.brass,side:ri,transparent:!0,opacity:.65}),s=new D(i,r);s.rotation.x=-Math.PI/2,s.position.set(e,.015,t),this.group.add(s),this.interactiveMarkers.push(s)}updateAnimation(e){const t=1+Math.sin(e*3.5)*.12,i=.45+Math.sin(e*3.5)*.25;for(let r=0;r<this.interactiveMarkers.length;r++)this.interactiveMarkers[r].scale.set(t,t,1),this.interactiveMarkers[r].material.opacity=i}}class lT{constructor(){K(this,"ctx",null);K(this,"isMuted",!1)}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playFootstep(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(320,this.ctx.currentTime),e.type="triangle",e.frequency.setValueAtTime(80+Math.random()*20,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.06),t.gain.setValueAtTime(.04,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.06),e.connect(i),i.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.06)}catch{}}playInteract(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,e+i*.05),s.gain.setValueAtTime(.08,e+i*.05),s.gain.exponentialRampToValueAtTime(.001,e+i*.05+.35),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.05),r.stop(e+i*.05+.35)})}catch{}}playBell(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1760,e),t.frequency.exponentialRampToValueAtTime(1750,e+.6),i.gain.setValueAtTime(.18,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.6),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.6)}catch{}}playSizzle(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.5,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2800,e),o.Q.setValueAtTime(1.8,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.12,e),a.gain.exponentialRampToValueAtTime(.001,e+.5),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.5)}catch{}}playFryerBubbling(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.6,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=(Math.random()*2-1)*(.8+Math.sin(l*.05)*.2);const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(1400,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.15,e),a.gain.exponentialRampToValueAtTime(.001,e+.6),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.6)}catch{}}playOvenRoar(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(120,e),t.frequency.linearRampToValueAtTime(80,e+.4),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.4)}catch{}}playChop(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(90,e+.08),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}catch{}}playPickup(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(880,e+.12),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.12)}catch{}}playTrashDrop(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(45,e+.18),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.18)}catch{}}playBurnSizzle(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.linearRampToValueAtTime(90,e+.35),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.35)}catch{}}playCash(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[987.77,1318.51,1975.53].forEach((t,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,e+i*.08),s.gain.setValueAtTime(.14,e+i*.08),s.gain.exponentialRampToValueAtTime(1e-4,e+i*.08+.45),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.08),r.stop(e+i*.08+.45)})}catch{}}playOrderPlaced(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[587.33,880].forEach((t,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(t,e+i*.07),s.gain.setValueAtTime(.1,e+i*.07),s.gain.exponentialRampToValueAtTime(.001,e+i*.07+.25),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.07),r.stop(e+i*.07+.25)})}catch{}}playServeFood(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(659.25,e+.15),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.3)}catch{}}playCleanTable(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.25,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1800,e),o.frequency.exponentialRampToValueAtTime(3200,e+.25);const a=this.ctx.createGain();a.gain.setValueAtTime(.1,e),a.gain.exponentialRampToValueAtTime(.001,e+.25),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.25)}catch{}}playCustomerAngry(){if(!this.isMuted)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.linearRampToValueAtTime(70,e+.4),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.4)}catch{}}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}}const Je=new lT;class cT{constructor(e=-4,t=6){K(this,"mesh");K(this,"position");K(this,"velocity",new Ie(0,0));K(this,"facingAngle",0);K(this,"walkCycle",0);K(this,"stepTimer",0);K(this,"bodyGroup");K(this,"leftArm");K(this,"rightArm");K(this,"shadowMesh");K(this,"chefHat");K(this,"carriedItemGroup");K(this,"carriedItemCanvas");K(this,"carriedItemTexture");K(this,"carriedItemSprite");this.mesh=new Me,this.position=new I(e,0,t),this.mesh.position.copy(this.position);const i=new Zs(.5,24),r=new ir({color:1118485,transparent:!0,opacity:.35,depthWrite:!1});this.shadowMesh=new D(i,r),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.02,this.mesh.add(this.shadowMesh),this.bodyGroup=new Me,this.mesh.add(this.bodyGroup);const s=new Q({color:2237480,roughness:.8}),o=new D(new ye(.1,.09,.6,12),s);o.position.set(-.16,.3,0),o.castShadow=!0,this.bodyGroup.add(o);const a=new D(new ye(.1,.09,.6,12),s);a.position.set(.16,.3,0),a.castShadow=!0,this.bodyGroup.add(a);const l=new Q({color:1381912,roughness:.5}),c=new D(new ce(.15,.1,.26),l);c.position.set(-.16,.05,.04),this.bodyGroup.add(c);const d=new D(new ce(.15,.1,.26),l);d.position.set(.16,.05,.04),this.bodyGroup.add(d);const f=new Q({color:ae.coral,roughness:.6,metalness:.05}),h=new D(new ce(.55,.65,.38),f);h.position.y=.88,h.castShadow=!0,this.bodyGroup.add(h);const m=new Q({color:ae.cream,roughness:.4}),y=new D(new ce(.24,.5,.02),m);y.position.set(0,.92,.2),this.bodyGroup.add(y);const v=new Q({color:ae.softYellowDark,metalness:.6,roughness:.3});for(let N=0;N<3;N++){const U=new D(new ye(.025,.025,.02,8),v);U.rotation.x=Math.PI/2,U.position.set(0,.78+N*.1,.21),this.bodyGroup.add(U)}const p=new Q({color:ae.coral,roughness:.6}),u=new Q({color:15910043,roughness:.6});this.leftArm=new Me,this.leftArm.position.set(-.35,1.1,0);const g=new D(new ye(.08,.07,.45,10),p);g.position.y=-.2,g.castShadow=!0;const _=new D(new ut(.07,10,10),u);_.position.y=-.42,this.leftArm.add(g,_),this.bodyGroup.add(this.leftArm),this.rightArm=new Me,this.rightArm.position.set(.35,1.1,0);const x=new D(new ye(.08,.07,.45,10),p);x.position.y=-.2,x.castShadow=!0;const C=new D(new ut(.07,10,10),u);C.position.y=-.42,this.rightArm.add(x,C),this.bodyGroup.add(this.rightArm);const w=new Q({color:15910043,roughness:.7}),T=new D(new ut(.24,16,16),w);T.position.y=1.45,T.castShadow=!0,this.bodyGroup.add(T);const R=new Q({color:ae.walnutDark,roughness:.9}),S=new D(new ut(.25,16,16,0,Math.PI*2,0,Math.PI*.55),R);S.position.y=1.5,this.bodyGroup.add(S),this.chefHat=new Me,this.chefHat.position.set(0,1.62,0);const M=new Q({color:16514040,roughness:.4}),k=new D(new ye(.2,.2,.12,16),v);k.position.y=.06,this.chefHat.add(k);const F=new D(new ye(.26,.19,.35,16),M);F.position.y=.28,F.castShadow=!0,this.chefHat.add(F);const q=new D(new ut(.26,16,10),M);q.position.y=.45,q.scale.set(1.05,.5,1.05),this.chefHat.add(q),this.bodyGroup.add(this.chefHat),this.carriedItemGroup=new Me,this.carriedItemGroup.position.set(0,.85,.45),this.carriedItemGroup.visible=!1;const P=new ye(.24,.22,.03,16),O=new Q({color:ae.brass,metalness:.85,roughness:.25}),G=new D(P,O);this.carriedItemGroup.add(G),this.carriedItemCanvas=document.createElement("canvas"),this.carriedItemCanvas.width=256,this.carriedItemCanvas.height=96,this.carriedItemTexture=new sr(this.carriedItemCanvas),this.carriedItemTexture.colorSpace=At;const Z=new rr({map:this.carriedItemTexture,transparent:!0,depthTest:!1});this.carriedItemSprite=new Or(Z),this.carriedItemSprite.scale.set(.9,.35,1),this.carriedItemSprite.position.set(0,.32,0),this.carriedItemGroup.add(this.carriedItemSprite),this.bodyGroup.add(this.carriedItemGroup)}setCarriedItemVisual(e){if(!e){this.carriedItemGroup.visible=!1;return}this.carriedItemGroup.visible=!0;const t=this.carriedItemCanvas.getContext("2d"),i=this.carriedItemCanvas.width,r=this.carriedItemCanvas.height;t.clearRect(0,0,i,r),t.fillStyle="rgba(20, 21, 24, 0.9)",t.strokeStyle="#d4af37",t.lineWidth=3,t.beginPath(),typeof t.roundRect=="function"?t.roundRect(6,6,i-12,r-12,16):t.rect(6,6,i-12,r-12),t.fill(),t.stroke(),t.font="36px sans-serif",t.textAlign="center",t.fillText(e.icon,i/2,44),t.font="bold 18px sans-serif",t.fillStyle="#fbf7ee";const s=e,o=s.targetLocationName?`${s.targetLocationName}`:e.name,a=o.length>16?o.slice(0,15)+"…":o;t.fillText(a,i/2,74),this.carriedItemTexture.needsUpdate=!0}update(e,t,i){const r=e.x!==0||e.z!==0,s=r?go.moveSpeed:0,o=r?go.acceleration:go.deceleration,a=e.x*s,l=e.z*s;this.velocity.x+=(a-this.velocity.x)*Math.min(1,o*t),this.velocity.y+=(l-this.velocity.y)*Math.min(1,o*t);const c=Math.hypot(this.velocity.x,this.velocity.y);if(c>.05){let h=Math.atan2(this.velocity.x,this.velocity.y)-this.facingAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.facingAngle+=h*Math.min(1,go.turnSpeed*t),this.mesh.rotation.y=this.facingAngle;const m=this.velocity.x*t,y=this.velocity.y*t,v=i.moveWithCollision(this.position.x,this.position.z,m,y,go.radius);this.position.x=v.x,this.position.z=v.z,this.mesh.position.x=this.position.x,this.mesh.position.z=this.position.z,this.walkCycle+=c*t*2.8;const p=Math.abs(Math.sin(this.walkCycle))*.08;this.bodyGroup.position.y=p,this.bodyGroup.rotation.z=Math.sin(this.walkCycle)*.04,this.bodyGroup.rotation.x=.05,this.leftArm.rotation.x=Math.sin(this.walkCycle)*.7,this.rightArm.rotation.x=-Math.sin(this.walkCycle)*.7,this.stepTimer+=t*c,this.stepTimer>1.9&&(Je.playFootstep(),this.stepTimer=0)}else{const f=performance.now()*.0025;this.bodyGroup.position.y=Math.sin(f)*.02,this.bodyGroup.rotation.z=0,this.bodyGroup.rotation.x=0,this.leftArm.rotation.x=Math.sin(f)*.05,this.rightArm.rotation.x=-Math.sin(f)*.05}const d=this.calculateZone(this.position.x,this.position.z);return{x:this.position.x,z:this.position.z,zone:d}}calculateZone(e,t){return e<=-5.5&&t<=-1.5?bt.RESTROOM.name:e>=2&&t<=0?bt.KITCHEN.name:e>=2&&t>0&&t<=8.5?bt.COUNTER.name:bt.DINING.name}}class uT{constructor(e,t,i,r){K(this,"id");K(this,"name");K(this,"type");K(this,"position");K(this,"state","IDLE");K(this,"loadedItems",[]);K(this,"currentOutput",null);K(this,"cookTimer",0);K(this,"targetCookTime",0);K(this,"burnTimer",0);K(this,"targetBurnTime",0);K(this,"badgeGroup");K(this,"canvas");K(this,"ctx");K(this,"badgeTexture");K(this,"badgeSprite");this.id=e,this.name=t,this.type=i,this.position=r.clone(),this.canvas=document.createElement("canvas"),this.canvas.width=512,this.canvas.height=192,this.ctx=this.canvas.getContext("2d"),this.badgeTexture=new sr(this.canvas),this.badgeTexture.colorSpace=At,this.badgeTexture.minFilter=Qt;const s=new rr({map:this.badgeTexture,transparent:!0,depthTest:!1});this.badgeSprite=new Or(s),this.badgeSprite.scale.set(1.9,.72,1),this.badgeSprite.position.set(r.x,r.y+1.85,r.z),this.badgeGroup=new Me,this.badgeGroup.add(this.badgeSprite),this.updateBadgeTexture()}update(e,t,i){var r;this.state==="COOKING"?(this.cookTimer+=e,this.cookTimer>=this.targetCookTime&&(this.state="READY",this.cookTimer=this.targetCookTime,t&&t()),this.updateBadgeTexture()):this.state==="READY"&&(this.burnTimer+=e,this.burnTimer>=this.targetBurnTime&&(this.state="BURNT",this.currentOutput={id:"burnt_food",name:`Burnt ${((r=this.currentOutput)==null?void 0:r.name)||"Meal"}`,icon:"🔥",type:"burnt"},i&&i()),this.updateBadgeTexture())}updateBadgeTexture(){var r,s,o;const e=this.ctx,t=this.canvas.width,i=this.canvas.height;if(e.clearRect(0,0,t,i),e.save(),e.fillStyle="rgba(18, 19, 23, 0.9)",e.strokeStyle="#d4af37",e.lineWidth=4,e.beginPath(),typeof e.roundRect=="function"?e.roundRect(10,10,t-20,i-20,24):e.rect(10,10,t-20,i-20),e.fill(),e.stroke(),e.font="bold 26px sans-serif",e.fillStyle="#fbf7ee",e.textAlign="center",e.fillText(this.name,t/2,48),e.strokeStyle="rgba(212, 175, 55, 0.4)",e.lineWidth=2,e.beginPath(),e.moveTo(30,60),e.lineTo(t-30,60),e.stroke(),this.state==="IDLE"){this.badgeGroup.visible=!1;return}if(this.badgeGroup.visible=!0,this.state==="PREPARING"){const a=this.loadedItems.length;e.font="bold 24px sans-serif",e.fillStyle="#60a5fa",e.fillText(`Assembling: ${a} Items Loaded`,t/2,98);const l=this.loadedItems.map(c=>c.icon).join(" ");e.font="28px sans-serif",e.fillText(l,t/2,142)}else if(this.state==="COOKING"){const a=Math.min(1,this.cookTimer/this.targetCookTime),l=Math.floor(a*100);e.font="bold 24px sans-serif",e.fillStyle="#f59e0b",e.fillText(`Cooking ${((r=this.currentOutput)==null?void 0:r.icon)||""} ${l}%`,t/2,95);const c=t-80,d=20,f=40,h=114;e.fillStyle="#2b1b13",e.fillRect(f,h,c,d),e.fillStyle="#f59e0b",e.fillRect(f,h,c*a,d),e.strokeStyle="#d4af37",e.lineWidth=2,e.strokeRect(f,h,c,d)}else if(this.state==="READY"){const a=Math.max(0,Math.ceil(this.targetBurnTime-this.burnTimer));e.font="bold 26px sans-serif",e.fillStyle="#10b981",e.fillText(`✨ READY: ${(s=this.currentOutput)==null?void 0:s.icon} ${(o=this.currentOutput)==null?void 0:o.name}`,t/2,98),e.font="20px sans-serif",e.fillStyle="#fcd34d",e.fillText(`[E] Collect! (Burns in ${a}s)`,t/2,140)}else this.state==="BURNT"&&(e.font="bold 26px sans-serif",e.fillStyle="#ef4444",e.fillText("🔥 BURNT! Food Ruined",t/2,98),e.font="20px sans-serif",e.fillStyle="#fca5a5",e.fillText("[E] Clear Burnt Food",t/2,140));e.restore(),this.badgeTexture.needsUpdate=!0}reset(){this.state="IDLE",this.loadedItems=[],this.currentOutput=null,this.cookTimer=0,this.burnTimer=0,this.targetCookTime=0,this.targetBurnTime=0,this.updateBadgeTexture()}}class dT{constructor(){K(this,"carriedItem",null);K(this,"onChangeListeners",[])}getCarriedItem(){return this.carriedItem}setCarriedItem(e){this.carriedItem=e,this.notify()}clear(){this.carriedItem=null,this.notify()}subscribe(e){this.onChangeListeners.push(e),e(this.carriedItem)}unsubscribe(e){this.onChangeListeners=this.onChangeListeners.filter(t=>t!==e)}notify(){for(const e of this.onChangeListeners)e(this.carriedItem)}}const hT={dough:{id:"dough",name:"Artisan Pizza Dough",icon:"🫓",category:"grain",color:16113331,description:"Slow-fermented pizza dough ball ready for stretching."},burger_bun:{id:"burger_bun",name:"Brioche Burger Bun",icon:"🍞",category:"grain",color:13805177,description:"Golden buttered brioche sesame burger bun."},sliced_bread:{id:"sliced_bread",name:"Artisan Sliced Bread",icon:"🥪",category:"grain",color:15123072,description:"Thick sliced country sourdough loaf."},pasta_noodles:{id:"pasta_noodles",name:"Fresh Fettuccine Pasta",icon:"🍝",category:"grain",color:16769154,description:"Handmade fresh egg fettuccine noodles."},flour_batter:{id:"flour_batter",name:"Seasoned Flour & Batter",icon:"🥣",category:"grain",color:16775399,description:"Special blend of 11 herbs, spices, and dredging flour."},raw_patty:{id:"raw_patty",name:"Raw Prime Beef Patty",icon:"🥩",category:"meat",color:11088422,description:"Freshly ground prime chuck steak beef patty."},raw_chicken:{id:"raw_chicken",name:"Raw Chicken Tender",icon:"🍗",category:"meat",color:16103345,description:"Tender fresh chicken cutlet ready for dredging."},deli_meat:{id:"deli_meat",name:"Smoked Honey Ham",icon:"🥓",category:"meat",color:14256256,description:"Slow-smoked sliced deli ham."},pepperoni:{id:"pepperoni",name:"Spicy Pepperoni Slices",icon:"🍕",category:"meat",color:11549230,description:"Authentic cured spicy Italian pepperoni slices."},cheese:{id:"cheese",name:"Fior di Latte & Cheddar",icon:"🧀",category:"dairy",color:16377759,description:"Melty mozzarella and sharp Wisconsin cheddar."},tomato_sauce:{id:"tomato_sauce",name:"San Marzano Tomato Sauce",icon:"🍅",category:"produce",color:12597547,description:"Rich crushed plum tomato sauce with basil and garlic."},lettuce:{id:"lettuce",name:"Crisp Romaine Lettuce",icon:"🥬",category:"produce",color:5822093,description:"Freshly harvested chilled organic romaine leaves."},tomato:{id:"tomato",name:"Ripe Heirloom Tomato",icon:"🍅",category:"produce",color:15495267,description:"Plump ripe vine tomato slices."}};class fT{constructor(e,t){K(this,"inventory");K(this,"stations",new Map);K(this,"scene");this.callbacks=t,this.scene=e,this.inventory=new dT,this.inventory.subscribe(i=>{this.callbacks.onInventoryChange(i)}),this.initStations()}getCarriedItem(){return this.inventory.getCarriedItem()}clearCarriedItem(){this.inventory.clear()}initStations(){const e=[{id:"station-prep",name:"Prep & Assembly Board",type:"prep_table",pos:new I(11.5,0,-8)},{id:"station-stove",name:"Stovetop Range & Grill",type:"stovetop_grill",pos:new I(6.5,0,-12.5)},{id:"station-oven",name:"Stone Pizza Oven",type:"pizza_oven",pos:new I(10.5,0,-12.5)},{id:"station-fryer",name:"Commercial Deep Fryer",type:"deep_fryer",pos:new I(13.2,0,-12.5)},{id:"station-fridge",name:"Cold Storage / Chiller",type:"storage_fridge",pos:new I(4.3,0,-8.5)},{id:"station-pantry",name:"Dry Grain & Dough Pantry",type:"storage_pantry",pos:new I(16.5,0,-8.5)},{id:"station-produce",name:"Fresh Farm Produce Bin",type:"storage_produce",pos:new I(16.5,0,-5.5)},{id:"station-trash",name:"Kitchen Waste Disposal",type:"trash_bin",pos:new I(4.5,0,-5)}];for(const t of e){const i=new uT(t.id,t.name,t.type,t.pos);this.stations.set(t.id,i),this.scene.add(i.badgeGroup)}}update(e){this.stations.forEach(t=>{t.update(e,()=>{var i;Je.playBell(),this.callbacks.onShowCookingToast(`✨ ${t.name}: Dish is Ready!`,(i=t.currentOutput)==null?void 0:i.icon)},()=>{Je.playBurnSizzle(),this.callbacks.onShowCookingToast(`🔥 Alert: Food on ${t.name} has burnt!`,"🔥")})})}getStation(e){return this.stations.get(e)}getInteractionPrompt(e){var r,s;const t=this.stations.get(e);if(!t)return null;const i=this.inventory.getCarriedItem();if(t.type.startsWith("storage_"))return i&&i.type==="ingredient"?`Restock ${i.name} into Storage`:`Open ${t.name}`;if(t.type==="trash_bin")return i?`Discard ${i.name} in Trash`:"Kitchen Waste Bin (Empty)";if(["stovetop_grill","pizza_oven","deep_fryer"].includes(t.type)){if(t.state==="BURNT")return`Clean & Clear ${t.name}`;if(t.state==="READY")return`Collect ${((r=t.currentOutput)==null?void 0:r.name)||"Cooked Meal"}`;if(t.state==="COOKING")return`Cooking in progress (${Math.floor(t.cookTimer/t.targetCookTime*100)}%)`;if(i){if(t.type==="stovetop_grill"){if(i.id==="raw_patty")return"Grill Beef Patty on Stove";if(i.id==="pasta_noodles")return"Boil Fettuccine & Sauce";if(i.id==="tomato_sauce")return"Simmer Tomato Sauce"}else if(t.type==="pizza_oven"){if(i.id==="raw_pizza")return"Slide Pizza into Oven"}else if(t.type==="deep_fryer"&&i.id==="battered_chicken")return"Lower Chicken into Hot Oil"}return`Examine ${t.name}`}return t.type==="prep_table"?t.state==="READY"?`Collect ${((s=t.currentOutput)==null?void 0:s.name)||"Prepped Dish"}`:i?`Add ${i.name} to Prep Board`:t.loadedItems.length>0?`Take Back ${t.loadedItems[t.loadedItems.length-1].name} from Board`:"Examine Prep & Assembly Board":null}handleInteraction(e){const t=this.stations.get(e);if(!t)return!1;const i=this.inventory.getCarriedItem();if(t.type==="trash_bin")return i?(Je.playTrashDrop(),this.inventory.clear(),this.callbacks.onShowCookingToast(`Discarded ${i.name} in waste bin.`,"🗑️"),!0):(this.callbacks.onShowCookingToast("Hands are already empty.","ℹ️"),!0);if(t.type.startsWith("storage_"))return i&&i.type==="ingredient"?(Je.playPickup(),this.inventory.clear(),this.callbacks.onShowCookingToast(`Restocked ${i.name} into storage.`,"📦"),!0):(this.callbacks.onOpenStorageModal(t.type,r=>{const s=hT[r];s&&(Je.playPickup(),this.inventory.setCarriedItem({id:s.id,name:s.name,icon:s.icon,type:"ingredient"}),this.callbacks.onShowCookingToast(`Collected ${s.name}`,s.icon))}),!0);if(t.state==="READY"&&t.currentOutput){if(i)return this.callbacks.onShowCookingToast("Hands are full! Empty your hands before collecting.","⚠️"),!0;const r=t.currentOutput;return Je.playPickup(),this.inventory.setCarriedItem(r),t.reset(),this.callbacks.onShowCookingToast(`Collected ${r.name}!`,r.icon),!0}if(t.state==="BURNT")return Je.playTrashDrop(),t.reset(),this.callbacks.onShowCookingToast(`Cleaned and scraped ${t.name}.`,"✨"),!0;if(t.state==="COOKING")return this.callbacks.onShowCookingToast(`${t.name} is currently cooking! Please wait.`,"⏳"),!0;if(t.type==="stovetop_grill"){if(!i)return this.callbacks.onShowCookingToast("Bring Raw Beef Patty or Pasta Noodles to cook here.","ℹ️"),!0;if(i.id==="raw_patty")return this.inventory.clear(),Je.playSizzle(),t.state="COOKING",t.targetCookTime=5.5,t.targetBurnTime=7.5,t.currentOutput={id:"cooked_patty",name:"Grilled Beef Patty",icon:"🥩",type:"intermediate",recipeId:"burger"},t.updateBadgeTexture(),this.callbacks.onShowCookingToast("Sizzling beef patty on the grill...","🥩"),!0;if(i.id==="pasta_noodles"||i.id==="tomato_sauce")return this.inventory.clear(),Je.playSizzle(),t.state="COOKING",t.targetCookTime=5.5,t.targetBurnTime=7.5,t.currentOutput={id:"simmered_pasta",name:"Simmered Pasta Marinara",icon:"🍲",type:"intermediate",recipeId:"pasta"},t.updateBadgeTexture(),this.callbacks.onShowCookingToast("Simmering fettuccine and marinara sauce on the burner...","🍲"),!0}if(t.type==="pizza_oven")return i&&i.id==="raw_pizza"?(this.inventory.clear(),Je.playOvenRoar(),t.state="COOKING",t.targetCookTime=6.5,t.targetBurnTime=8,t.currentOutput={id:"dish_pizza",name:"Crispy Pepperoni Pizza",icon:"🍕",type:"dish",recipeId:"pizza"},t.updateBadgeTexture(),this.callbacks.onShowCookingToast("Baking pizza in stone deck oven...","🍕"),!0):(this.callbacks.onShowCookingToast("Assemble Unbaked Pizza at the Prep Board first, then bring it here!","ℹ️"),!0);if(t.type==="deep_fryer")return i&&i.id==="battered_chicken"?(this.inventory.clear(),Je.playFryerBubbling(),t.state="COOKING",t.targetCookTime=6,t.targetBurnTime=8,t.currentOutput={id:"dish_chicken",name:"Crispy Fried Chicken",icon:"🍗",type:"dish",recipeId:"fried_chicken"},t.updateBadgeTexture(),this.callbacks.onShowCookingToast("Lowered chicken into bubbling fryer oil...","🍗"),!0):(this.callbacks.onShowCookingToast("Dredge Raw Chicken in Flour Batter at Prep Board first!","ℹ️"),!0);if(t.type==="prep_table"){if(i)return t.loadedItems.push(i),Je.playChop(),this.inventory.clear(),t.state="PREPARING",this.checkPrepAssembly(t),t.updateBadgeTexture(),!0;if(t.loadedItems.length>0){const r=t.loadedItems.pop();return this.inventory.setCarriedItem(r),Je.playPickup(),t.loadedItems.length===0?t.reset():t.updateBadgeTexture(),this.callbacks.onShowCookingToast(`Took back ${r.name} from board.`,r.icon),!0}return this.callbacks.onShowCookingToast("Place ingredients here to assemble Pizza, Burger, Pasta, Sandwich, or dredge Chicken.","ℹ️"),!0}return!1}checkPrepAssembly(e){const t=e.loadedItems.map(i=>i.id);if(this.hasAll(t,["dough","tomato_sauce","cheese","pepperoni"])){e.state="READY",e.currentOutput={id:"raw_pizza",name:"Unbaked Pepperoni Pizza",icon:"🫓",type:"intermediate",recipeId:"pizza"},e.loadedItems=[],Je.playBell(),this.callbacks.onShowCookingToast("Assembled Unbaked Pizza! Take it to the Pizza Oven to bake.","🫓");return}if(this.hasAll(t,["burger_bun","cooked_patty","cheese","lettuce","tomato"])){e.state="READY",e.currentOutput={id:"dish_burger",name:"Deluxe Cheeseburger",icon:"🍔",type:"dish",recipeId:"burger"},e.loadedItems=[],Je.playBell(),this.callbacks.onShowCookingToast("Deluxe Cheeseburger assembled! Ready to serve.","🍔");return}if(this.hasAll(t,["simmered_pasta","cheese"])){e.state="READY",e.currentOutput={id:"dish_pasta",name:"Parmesan Pasta Marinara",icon:"🍝",type:"dish",recipeId:"pasta"},e.loadedItems=[],Je.playBell(),this.callbacks.onShowCookingToast("Parmesan Pasta Marinara finished! Ready to serve.","🍝");return}if(this.hasAll(t,["sliced_bread","deli_meat","cheese","lettuce","tomato"])){e.state="READY",e.currentOutput={id:"dish_sandwich",name:"Artisan Club Sandwich",icon:"🥪",type:"dish",recipeId:"sandwich"},e.loadedItems=[],Je.playBell(),this.callbacks.onShowCookingToast("Artisan Club Sandwich assembled! Ready to serve.","🥪");return}if(this.hasAll(t,["raw_chicken","flour_batter"])){e.state="READY",e.currentOutput={id:"battered_chicken",name:"Battered Raw Chicken",icon:"🥣",type:"intermediate",recipeId:"fried_chicken"},e.loadedItems=[],Je.playBell(),this.callbacks.onShowCookingToast("Chicken dredged in batter! Take it to the Deep Fryer.","🥣");return}this.callbacks.onShowCookingToast(`Added ${e.loadedItems[e.loadedItems.length-1].name} to board (${e.loadedItems.length} loaded).`,"🔪")}hasAll(e,t){return t.every(i=>e.includes(i))}}const gm=[{coat:4020864,pants:2371650,hair:2365202,hat:!1},{coat:7783070,pants:3492672,hair:7227174,hat:!0},{coat:14259543,pants:4007958,hair:11041096,hat:!1},{coat:15891821,pants:2893098,hair:1578777,hat:!1},{coat:15058772,pants:3879704,hair:4007705,hat:!0},{coat:6330042,pants:2175551,hair:12884576,hat:!1}],_m=["Arthur Pendelton","Eleanor Vance","Marcus Sterling","Sophia Laurent","Julian Mercer","Claire Dupont","Oliver Finch","Charlotte Beaumont","Victor Hale","Diana Ross"];class pT{constructor(e,t){K(this,"group");K(this,"customerId");K(this,"name");K(this,"paletteIndex");K(this,"bodyGroup");K(this,"leftLeg");K(this,"rightLeg");K(this,"leftArm");K(this,"rightArm");K(this,"head");K(this,"shadowMesh");K(this,"badgeSprite");K(this,"badgeCanvas");K(this,"badgeContext");K(this,"badgeTexture");K(this,"lastRenderKey","");K(this,"isSeated",!1);K(this,"walkTime",0);this.customerId=e,this.paletteIndex=t??Math.floor(Math.random()*gm.length);const i=gm[this.paletteIndex];this.name=_m[Math.floor(Math.random()*_m.length)],this.group=new Me;const r=new Zs(.45,20),s=new ir({color:1118485,transparent:!0,opacity:.32,depthWrite:!1});this.shadowMesh=new D(r,s),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.02,this.group.add(this.shadowMesh),this.bodyGroup=new Me,this.group.add(this.bodyGroup);const o=new Q({color:i.pants,roughness:.8}),a=new Q({color:1315862,roughness:.5});this.leftLeg=new Me,this.leftLeg.position.set(-.15,.55,0);const l=new D(new ye(.08,.075,.5,10),o);l.position.y=-.25,l.castShadow=!0;const c=new D(new ce(.13,.09,.22),a);c.position.set(0,-.48,.03),this.leftLeg.add(l,c),this.bodyGroup.add(this.leftLeg),this.rightLeg=new Me,this.rightLeg.position.set(.15,.55,0);const d=new D(new ye(.08,.075,.5,10),o);d.position.y=-.25,d.castShadow=!0;const f=new D(new ce(.13,.09,.22),a);f.position.set(0,-.48,.03),this.rightLeg.add(d,f),this.bodyGroup.add(this.rightLeg);const h=new Q({color:i.coat,roughness:.65,metalness:.08}),m=new D(new ce(.48,.58,.32),h);m.position.y=.82,m.castShadow=!0,this.bodyGroup.add(m);const y=new Q({color:16117468,roughness:.5}),v=new D(new ce(.24,.12,.06),y);v.position.set(0,1.05,.16),this.bodyGroup.add(v),this.leftArm=new Me,this.leftArm.position.set(-.31,1,0);const p=new D(new ye(.065,.055,.44,8),h);p.position.y=-.22,p.castShadow=!0,this.leftArm.add(p),this.bodyGroup.add(this.leftArm),this.rightArm=new Me,this.rightArm.position.set(.31,1,0);const u=new D(new ye(.065,.055,.44,8),h);u.position.y=-.22,u.castShadow=!0,this.rightArm.add(u),this.bodyGroup.add(this.rightArm),this.head=new Me,this.head.position.set(0,1.25,0);const g=new Q({color:15978426,roughness:.5}),_=new D(new ut(.18,12,10),g);this.head.add(_);const x=new Q({color:i.hair,roughness:.8}),C=new D(new ut(.19,12,8,0,Math.PI*2,0,Math.PI/1.7),x);if(C.position.y=.04,this.head.add(C),i.hat){const T=new D(new ye(.28,.28,.03,16),h);T.position.y=.15;const R=new D(new ye(.18,.2,.14,16),h);R.position.y=.22,this.head.add(T,R)}this.bodyGroup.add(this.head),this.badgeCanvas=document.createElement("canvas"),this.badgeCanvas.width=256,this.badgeCanvas.height=120,this.badgeContext=this.badgeCanvas.getContext("2d"),this.badgeTexture=new sr(this.badgeCanvas),this.badgeTexture.minFilter=Qt,this.badgeTexture.magFilter=Qt;const w=new rr({map:this.badgeTexture,transparent:!0,depthTest:!1});this.badgeSprite=new Or(w),this.badgeSprite.scale.set(1.6,.75,1),this.badgeSprite.position.set(0,2.15,0),this.group.add(this.badgeSprite),this.drawBadge("...","💭",100,"#e8be5d")}updateAnimation(e,t){if(this.isSeated){this.bodyGroup.position.y=-.22,this.leftLeg.rotation.x=-Math.PI/2.2,this.rightLeg.rotation.x=-Math.PI/2.2,this.leftArm.rotation.x=-Math.PI/3,this.rightArm.rotation.x=-Math.PI/3,this.shadowMesh.visible=!1;return}if(this.shadowMesh.visible=!0,this.bodyGroup.position.y=0,e){this.walkTime+=t*9;const i=Math.sin(this.walkTime)*.55;this.leftLeg.rotation.x=i,this.rightLeg.rotation.x=-i,this.leftArm.rotation.x=-i*.8,this.rightArm.rotation.x=i*.8,this.bodyGroup.position.y=Math.abs(Math.sin(this.walkTime*2))*.05}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.bodyGroup.position.y=0}setSeated(e,t){this.isSeated=e,t!==void 0&&(this.group.rotation.y=t)}updateStateVisual(e,t){if(!t){this.badgeSprite.visible=!1;return}this.badgeSprite.visible=!0;const i=Math.max(0,Math.min(100,t.patience));let r="#2ecc71";switch(i<30?r="#e74c3c":i<60&&(r="#f39c12"),e){case"ENTERING":case"WALKING_TO_TABLE":case"WALKING_TO_COUNTER":this.badgeSprite.visible=!1;break;case"SEATED_THINKING":this.drawBadge("Perusing Menu...","💭",100,"#d5c4a1");break;case"READY_TO_ORDER":this.drawBadge("Order Ready!",`🛎️ ${t.dishIcon}`,i,r);break;case"WAITING_FOR_FOOD":this.drawBadge(`${t.dishName}`,t.dishIcon,i,r);break;case"EATING":this.drawBadge("Delicious! 😋","🍴",100,"#b8bb26");break;case"PAYING":this.drawBadge(`Paid $${t.price+t.tip}`,"💰",100,"#fabd2f");break;case"LEAVING_HAPPY":this.drawBadge("Loved it! ⭐⭐⭐⭐⭐","😊",100,"#b8bb26");break;case"LEAVING_ANGRY":this.drawBadge("Too slow! 💨","😡",0,"#fb4934");break}}drawBadge(e,t,i,r){const s=`${e}|${t}|${Math.round(i/2)}|${r}`;if(s===this.lastRenderKey)return;this.lastRenderKey=s;const o=this.badgeContext,a=this.badgeCanvas.width,l=this.badgeCanvas.height;o.clearRect(0,0,a,l),o.fillStyle="rgba(23, 20, 24, 0.92)",o.strokeStyle="#d4af37",o.lineWidth=3;const c=10,d=8,f=a-20,h=l-28,m=16;o.beginPath(),o.moveTo(c+m,d),o.lineTo(c+f-m,d),o.quadraticCurveTo(c+f,d,c+f,d+m),o.lineTo(c+f,d+h-m),o.quadraticCurveTo(c+f,d+h,c+f-m,d+h),o.lineTo(a/2+10,d+h),o.lineTo(a/2,d+h+16),o.lineTo(a/2-10,d+h),o.lineTo(c+m,d+h),o.quadraticCurveTo(c,d+h,c,d+h-m),o.lineTo(c,d+m),o.quadraticCurveTo(c,d,c+m,d),o.closePath(),o.fill(),o.stroke(),o.font="28px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,c+32,d+34),o.font='bold 19px "Cinzel", "Outfit", "Segoe UI", sans-serif',o.textAlign="left",o.fillStyle="#ffffff",o.shadowColor="rgba(0, 0, 0, 0.8)",o.shadowBlur=4;const y=e.length>17?e.substring(0,16)+"...":e;o.fillText(y,c+64,d+32),o.shadowBlur=0;const v=c+16,p=d+h-14,u=f-32,g=6;if(o.fillStyle="rgba(255, 255, 255, 0.15)",o.beginPath(),o.roundRect?o.roundRect(v,p,u,g,3):o.rect(v,p,u,g),o.fill(),i>0){const _=Math.max(4,u*i/100);o.fillStyle=r,o.beginPath(),o.roundRect?o.roundRect(v,p,_,g,3):o.rect(v,p,_,g),o.fill()}this.badgeTexture.needsUpdate=!0}dispose(){this.badgeTexture.dispose()}}const Ed={x:-5.5,z:13},as={x:-5.5,z:10.8},ls={x:-3.5,z:10.2},vm={x:-3.5,z:.8},cs=[{id:"dining-table-1",interactionId:"interact-dining-table-1",name:"Dining Table 1",tableCenter:{x:-6,z:.5},seatPosition:{x:-6,z:2.1},seatRotationY:Math.PI,isBooth:!1,pathWaypoints:[as,ls,vm,{x:-6,z:2.1}]},{id:"dining-table-2",interactionId:"interact-dining-table-2",name:"Dining Table 2",tableCenter:{x:-6,z:7.5},seatPosition:{x:-6,z:9.1},seatRotationY:Math.PI,isBooth:!1,pathWaypoints:[as,ls,{x:-6,z:10.2},{x:-6,z:9.1}]},{id:"dining-table-3",interactionId:"interact-dining-table-3",name:"Dining Table 3",tableCenter:{x:.5,z:7.5},seatPosition:{x:.5,z:9.1},seatRotationY:Math.PI,isBooth:!1,pathWaypoints:[as,ls,{x:.5,z:10.2},{x:.5,z:9.1}]},{id:"booth-1",interactionId:"interact-booth-1",name:"VIP Velvet Booth 1",tableCenter:{x:-14.2,z:1},seatPosition:{x:-13,z:1},seatRotationY:Math.PI/2,isBooth:!0,pathWaypoints:[as,ls,vm,{x:-10.5,z:.8},{x:-13,z:1}]},{id:"booth-2",interactionId:"interact-booth-2",name:"VIP Velvet Booth 2",tableCenter:{x:-14.2,z:7.5},seatPosition:{x:-13,z:7.5},seatRotationY:Math.PI/2,isBooth:!0,pathWaypoints:[as,ls,{x:-10.5,z:10.2},{x:-13,z:7.5}]}],os={waitingPosition:{x:8.2,z:3.2},waitingRotationY:Math.PI,pathWaypoints:[as,ls,{x:3,z:10.2},{x:8.2,z:7.5},{x:8.2,z:3.2}]};function Ka(n){return[...[...n].reverse(),Ed]}class mT{constructor(e){K(this,"tableVisuals",new Map);this.scene=e,cs.forEach(i=>{const r=new Me;r.position.set(i.tableCenter.x,.78,i.tableCenter.z),this.scene.add(r),this.tableVisuals.set(i.id,r)});const t=new Me;t.position.set(8.2,1.08,1.55),this.scene.add(t),this.tableVisuals.set("counter-takeaway",t)}showServedFood(e,t){const i=this.tableVisuals.get(e);if(!i)return;this.clearTableVisuals(e);const r=new Q({color:16447730,roughness:.2,metalness:.1}),s=new D(new ye(.35,.28,.04,16),r);s.castShadow=!0,i.add(s);const o=this.createFoodMesh(t);o.position.y=.05,i.add(o)}showDirtyTable(e,t){const i=this.tableVisuals.get(e);if(!i)return;this.clearTableVisuals(e);const r=new Q({color:14603973,roughness:.4}),s=new D(new ye(.35,.28,.04,16),r);i.add(s);const o=new Q({color:15724006,roughness:.9}),a=new D(new Gl(.08),o);a.position.set(.2,.06,.1),i.add(a);const l=new Q({color:ae.brass,metalness:.85,roughness:.2});for(let c=0;c<3;c++){const d=new D(new ye(.04,.04,.015,10),l);d.position.set(-.25+c*.06,.02,.15+c%2*.03),i.add(d)}}showTakeawayBag(e){const t=this.tableVisuals.get("counter-takeaway");if(t){for(;t.children.length>0;)t.remove(t.children[0]);if(e){const i=new Q({color:12885351,roughness:.85}),r=new D(new ce(.34,.42,.28),i);r.position.y=.21,r.castShadow=!0;const s=new Q({color:ae.brass,metalness:.8,roughness:.2}),o=new D(new ye(.04,.04,.01,10),s);o.rotation.x=Math.PI/2,o.position.set(0,.35,.145),t.add(r,o)}}}clearTableVisuals(e){const t=this.tableVisuals.get(e);if(t)for(;t.children.length>0;){const i=t.children[0];t.remove(i),i.geometry&&i.geometry.dispose()}}createFoodMesh(e){const t=new Me;if(e==="dish_pizza"){const i=new Q({color:13405763,roughness:.7}),r=new D(new ye(.24,.24,.03,14),i),s=new Q({color:16106306,roughness:.4}),o=new D(new ye(.22,.22,.035,14),s);o.position.y=.01,t.add(r,o);const a=new Q({color:11020318,roughness:.5});for(let l=0;l<5;l++){const c=new D(new ye(.045,.045,.01,8),a),d=l/5*Math.PI*2;c.position.set(Math.cos(d)*.12,.03,Math.sin(d)*.12),t.add(c)}}else if(e==="dish_burger"){const i=new Q({color:13602382,roughness:.6}),r=new Q({color:4858648,roughness:.8}),s=new Q({color:4757806,roughness:.5}),o=new D(new ye(.18,.18,.04,12),i),a=new D(new ye(.19,.19,.045,12),r);a.position.y=.04;const l=new D(new ye(.21,.21,.02,10),s);l.position.y=.07;const c=new D(new ut(.18,12,8,0,Math.PI*2,0,Math.PI/2),i);c.position.y=.08,t.add(o,a,l,c)}else if(e==="dish_pasta"){const i=new Q({color:15658734,roughness:.3}),r=new D(new ye(.22,.14,.08,14),i),s=new Q({color:14564136,roughness:.6}),o=new D(new ut(.18,10,8,0,Math.PI*2,0,Math.PI/2),s);o.position.y=.04,t.add(r,o)}else if(e==="dish_sandwich"){const i=new Q({color:14657896,roughness:.7}),r=new D(new ce(.28,.03,.28),i);r.rotation.y=Math.PI/4,new Q({color:4033580});const s=new Q({color:11879749}),o=new D(new ce(.26,.03,.26),s);o.rotation.y=Math.PI/4,o.position.y=.03;const a=new D(new ce(.28,.03,.28),i);a.rotation.y=Math.PI/4,a.position.y=.06,t.add(r,o,a)}else{const i=new Q({color:11493665,roughness:.85});for(let r=0;r<2;r++){const s=new D(new Gl(.11),i);s.position.set(-.08+r*.16,.06,0),t.add(s)}}return t}}const Qo={pizza:{id:"pizza",name:"Pepperoni Pizza",icon:"🍕",category:"pizza",description:"Crispy stone-baked pizza loaded with tomato sauce, mozzarella, and spicy pepperoni.",ingredients:["dough","tomato_sauce","cheese","pepperoni"],steps:[{name:"Assemble Raw Pizza",station:"prep_table",requiredItemIds:["dough","tomato_sauce","cheese","pepperoni"],producesItem:{id:"raw_pizza",name:"Unbaked Pepperoni Pizza",icon:"🫓",type:"intermediate",recipeId:"pizza"}},{name:"Bake in Pizza Oven",station:"pizza_oven",requiredItemIds:["raw_pizza"],cookTimeSec:6.5,burnTimeSec:8,producesItem:{id:"dish_pizza",name:"Crispy Pepperoni Pizza",icon:"🍕",type:"dish",recipeId:"pizza"}}],finalDish:{id:"dish_pizza",name:"Crispy Pepperoni Pizza",icon:"🍕",type:"dish",recipeId:"pizza"}},burger:{id:"burger",name:"Deluxe Cheeseburger",icon:"🍔",category:"burger",description:"Juicy grilled beef patty with melted cheddar, ripe tomato, crisp lettuce on toasted brioche.",ingredients:["burger_bun","raw_patty","cheese","lettuce","tomato"],steps:[{name:"Grill Beef Patty",station:"stovetop_grill",requiredItemIds:["raw_patty"],cookTimeSec:5.5,burnTimeSec:7.5,producesItem:{id:"cooked_patty",name:"Grilled Beef Patty",icon:"🥩",type:"intermediate",recipeId:"burger"}},{name:"Assemble Deluxe Burger",station:"prep_table",requiredItemIds:["burger_bun","cooked_patty","cheese","lettuce","tomato"],producesItem:{id:"dish_burger",name:"Deluxe Cheeseburger",icon:"🍔",type:"dish",recipeId:"burger"}}],finalDish:{id:"dish_burger",name:"Deluxe Cheeseburger",icon:"🍔",type:"dish",recipeId:"burger"}},pasta:{id:"pasta",name:"Parmesan Pasta Marinara",icon:"🍝",category:"pasta",description:"Al dente fettuccine tossed in rich San Marzano marinara and dusted with fresh parmesan.",ingredients:["pasta_noodles","tomato_sauce","cheese"],steps:[{name:"Simmer Pasta & Marinara",station:"stovetop_grill",requiredItemIds:["pasta_noodles","tomato_sauce"],cookTimeSec:5.5,burnTimeSec:7.5,producesItem:{id:"simmered_pasta",name:"Simmered Pasta Marinara",icon:"🍲",type:"intermediate",recipeId:"pasta"}},{name:"Garnish with Cheese",station:"prep_table",requiredItemIds:["simmered_pasta","cheese"],producesItem:{id:"dish_pasta",name:"Parmesan Pasta Marinara",icon:"🍝",type:"dish",recipeId:"pasta"}}],finalDish:{id:"dish_pasta",name:"Parmesan Pasta Marinara",icon:"🍝",type:"dish",recipeId:"pasta"}},sandwich:{id:"sandwich",name:"Artisan Club Sandwich",icon:"🥪",category:"sandwich",description:"Triple-decker artisan sandwich layered with smoked ham, melted cheese, crisp greens, and vine tomato.",ingredients:["sliced_bread","deli_meat","cheese","lettuce","tomato"],steps:[{name:"Assemble Artisan Club",station:"prep_table",requiredItemIds:["sliced_bread","deli_meat","cheese","lettuce","tomato"],producesItem:{id:"dish_sandwich",name:"Artisan Club Sandwich",icon:"🥪",type:"dish",recipeId:"sandwich"}}],finalDish:{id:"dish_sandwich",name:"Artisan Club Sandwich",icon:"🥪",type:"dish",recipeId:"sandwich"}},fried_chicken:{id:"fried_chicken",name:"Crispy Fried Chicken",icon:"🍗",category:"fried_chicken",description:"Tender chicken cutlet dredged in 11 seasoned spices and fried golden crisp.",ingredients:["raw_chicken","flour_batter"],steps:[{name:"Dredge in Seasoned Batter",station:"prep_table",requiredItemIds:["raw_chicken","flour_batter"],producesItem:{id:"battered_chicken",name:"Battered Raw Chicken",icon:"🥣",type:"intermediate",recipeId:"fried_chicken"}},{name:"Deep Fry in Hot Oil",station:"deep_fryer",requiredItemIds:["battered_chicken"],cookTimeSec:6,burnTimeSec:8,producesItem:{id:"dish_chicken",name:"Crispy Fried Chicken",icon:"🍗",type:"dish",recipeId:"fried_chicken"}}],finalDish:{id:"dish_chicken",name:"Crispy Fried Chicken",icon:"🍗",type:"dish",recipeId:"fried_chicken"}}};class gT{constructor(e,t){K(this,"activeCustomers",new Map);K(this,"tables",new Map);K(this,"tableVisuals");K(this,"spawnCooldown",2);K(this,"customerCounter",1);K(this,"takeawayOccupied",!1);this.scene=e,this.callbacks=t,this.tableVisuals=new mT(this.scene),cs.forEach(i=>{this.tables.set(i.id,{id:i.id,interactionId:i.interactionId,name:i.name,tableCenter:i.tableCenter,seatPosition:i.seatPosition,seatRotationY:i.seatRotationY,isBooth:i.isBooth,cleanState:"CLEAN",currentCustomerId:null})})}update(e){this.spawnCooldown-=e,this.spawnCooldown<=0&&(this.spawnCooldown=12+Math.random()*5,this.trySpawnCustomer());const t=[];this.activeCustomers.forEach(i=>{this.updateCustomer(i,e,t)}),t.forEach(i=>{const r=this.activeCustomers.get(i);r&&(this.scene.remove(r.mesh.group),r.mesh.dispose(),this.activeCustomers.delete(i),r.isTakeaway&&(this.takeawayOccupied=!1))}),this.notifyOrders()}trySpawnCustomer(){if(this.activeCustomers.size>=4)return;const e=Array.from(this.tables.values()).filter(p=>p.cleanState==="CLEAN"&&!p.currentCustomerId),t=!this.takeawayOccupied;if(e.length===0&&!t)return;let i=!1;t&&(e.length===0||Math.random()<.3)&&(i=!0);const r=`cust-${this.customerCounter++}`,s=new pT(r);s.group.position.set(Ed.x,0,Ed.z),this.scene.add(s.group);const o=Object.keys(Qo),a=o[Math.floor(Math.random()*o.length)],l=Qo[a],d={dish_pizza:28,dish_burger:22,dish_pasta:24,dish_sandwich:18,dish_chicken:20}[l.finalDish.id]||20;let f,h;i?(this.takeawayOccupied=!0,h=[...os.pathWaypoints]):(f=e[Math.floor(Math.random()*e.length)],f.currentCustomerId=r,f.cleanState="OCCUPIED",h=[...cs.find(u=>u.id===f.id).pathWaypoints]);const m=95+Math.random()*25,y={id:`ord-${r}`,customerId:r,customerName:s.name,type:i?"takeaway":"dine_in",tableId:f?f.id:void 0,targetLocationName:f?f.name:"Takeaway Counter",dishId:l.finalDish.id,dishName:l.name,dishIcon:l.icon,recipeId:l.id,price:d,tip:0,status:i?"PREPARING":"THINKING",patience:100,maxPatience:m,patienceRemainingSec:m},v={id:r,mesh:s,state:i?"WALKING_TO_COUNTER":"WALKING_TO_TABLE",order:y,currentPath:h,pathIndex:0,assignedTableId:f==null?void 0:f.id,isTakeaway:i,timer:0,speed:3.2};s.updateStateVisual(v.state,y),this.activeCustomers.set(r,v),i&&(this.callbacks.onToast(`Guest ${s.name} ordered ${l.name} for takeaway!`,"🥡"),Je.playOrderPlaced())}updateCustomer(e,t,i){const r=e.state==="ENTERING"||e.state==="WALKING_TO_TABLE"||e.state==="WALKING_TO_COUNTER"||e.state==="LEAVING_HAPPY"||e.state==="LEAVING_ANGRY";if(r&&e.currentPath.length>0){const s=e.currentPath[e.pathIndex],o=e.mesh.group.position,a=s.x-o.x,l=s.z-o.z,c=Math.sqrt(a*a+l*l);if(c<.15)e.pathIndex++,e.pathIndex>=e.currentPath.length&&this.handlePathArrival(e,i);else{const d=Math.min(c,e.speed*t);o.x+=a/c*d,o.z+=l/c*d;const f=Math.atan2(a,l);e.mesh.group.rotation.y=f}}e.mesh.updateAnimation(r,t),(e.state==="READY_TO_ORDER"||e.state==="WAITING_FOR_FOOD")&&(e.order.patienceRemainingSec-=t,e.order.patience=Math.max(0,e.order.patienceRemainingSec/e.order.maxPatience*100),e.order.patienceRemainingSec<=0&&this.handlePatienceExpired(e)),e.state==="SEATED_THINKING"?(e.timer+=t,e.timer>=3.5&&(e.state="READY_TO_ORDER",e.order.status="WAITING_TO_BE_TAKEN",Je.playOrderPlaced(),this.callbacks.onToast(`${e.mesh.name} at ${e.order.targetLocationName} is ready to order!`,"🛎️"))):e.state==="EATING"&&(e.timer+=t,e.timer>=6.5&&this.handleCustomerPayAndLeave(e)),e.mesh.updateStateVisual(e.state,e.order)}handlePathArrival(e,t){if(e.state==="WALKING_TO_TABLE"){const i=cs.find(r=>r.id===e.assignedTableId);i&&(e.mesh.group.position.set(i.seatPosition.x,0,i.seatPosition.z),e.mesh.setSeated(!0,i.seatRotationY)),e.state="SEATED_THINKING",e.timer=0}else e.state==="WALKING_TO_COUNTER"?(e.mesh.group.position.set(os.waitingPosition.x,0,os.waitingPosition.z),e.mesh.group.rotation.y=os.waitingRotationY,e.state="WAITING_FOR_FOOD"):(e.state==="LEAVING_HAPPY"||e.state==="LEAVING_ANGRY")&&t.push(e.id)}handlePatienceExpired(e){if(e.state="LEAVING_ANGRY",e.order.status="CANCELLED",e.mesh.setSeated(!1),Je.playCustomerAngry(),this.callbacks.onToast(`${e.mesh.name} waited too long and left angry!`,"😡"),e.assignedTableId){const t=this.tables.get(e.assignedTableId);t&&(t.cleanState="CLEAN",t.currentCustomerId=null);const i=cs.find(r=>r.id===e.assignedTableId);e.currentPath=Ka(i.pathWaypoints)}else e.currentPath=Ka(os.pathWaypoints);e.pathIndex=0}handleCustomerPayAndLeave(e){e.state="PAYING",e.mesh.setSeated(!1);const t=Math.round(e.order.patience/100*35),i=Math.max(3,Math.round(e.order.price*t/100));e.order.tip=i,e.order.status="COMPLETED";const r=e.order.price+i;if(Je.playCash(),this.callbacks.onRevenueEarned(e.order.price,i),this.callbacks.onToast(`${e.mesh.name} paid $${r} ($${e.order.price} + $${i} tip)! ⭐⭐⭐⭐⭐`,"💰"),e.assignedTableId){const s=this.tables.get(e.assignedTableId);s&&(s.cleanState="DIRTY",s.currentCustomerId=null),this.tableVisuals.showDirtyTable(e.assignedTableId,i);const o=cs.find(a=>a.id===e.assignedTableId);e.currentPath=Ka(o.pathWaypoints)}e.state="LEAVING_HAPPY",e.pathIndex=0}getInteractionPrompt(e,t){for(const i of this.tables.values())if(i.interactionId===e){if(i.cleanState==="DIRTY")return`Clean ${i.name}`;if(i.currentCustomerId){const r=this.activeCustomers.get(i.currentCustomerId);if(r){if(r.state==="READY_TO_ORDER")return`Take Order from ${i.name}`;if(r.state==="WAITING_FOR_FOOD")return t&&t.id===r.order.dishId?`Serve ${r.order.dishName} to ${i.name}`:`Waiting for ${r.order.dishName}`;if(r.state==="SEATED_THINKING")return"Customer is reading menu...";if(r.state==="EATING")return"Customer is enjoying meal 😋"}}return"Table is clean & ready"}if(e==="interact-pos"){const i=Array.from(this.activeCustomers.values()).find(r=>r.isTakeaway&&(r.state==="WAITING_FOR_FOOD"||r.state==="WALKING_TO_COUNTER"));return i?t&&t.id===i.order.dishId?`Package & Hand ${i.order.dishName} to Guest`:`Takeaway waiting for ${i.order.dishName}`:"POS Register (Service Counter)"}return null}handleInteraction(e,t,i){for(const r of this.tables.values())if(r.interactionId===e){if(r.cleanState==="DIRTY")return r.cleanState="CLEAN",this.tableVisuals.clearTableVisuals(r.id),Je.playCleanTable(),this.callbacks.onToast(`${r.name} wiped sparkling clean! ✨`,"🧹"),!0;if(r.currentCustomerId){const s=this.activeCustomers.get(r.currentCustomerId);if(s&&s.state==="READY_TO_ORDER")return s.state="WAITING_FOR_FOOD",s.order.status="PREPARING",Je.playOrderPlaced(),this.callbacks.onToast(`Order taken: ${s.order.dishName} for ${r.name}!`,"📝"),!0;if(s&&s.state==="WAITING_FOR_FOOD"){if(t&&t.id===s.order.dishId)return i(),s.state="EATING",s.order.status="EATING",s.timer=0,this.tableVisuals.showServedFood(r.id,s.order.dishId),Je.playServeFood(),this.callbacks.onToast(`Served hot ${s.order.dishName} to ${r.name}!`,"🍽️"),!0;if(t)return this.callbacks.onToast(`${s.mesh.name} ordered ${s.order.dishName}, not ${t.name}!`,"⚠️"),!0}}}if(e==="interact-pos"){const r=Array.from(this.activeCustomers.values()).find(s=>s.isTakeaway&&s.state==="WAITING_FOR_FOOD");if(r){if(t&&t.id===r.order.dishId){i(),this.tableVisuals.showTakeawayBag(!0);const s=Math.round(r.order.patience/100*25),o=Math.max(2,Math.round(r.order.price*s/100));r.order.tip=o,r.order.status="COMPLETED";const a=r.order.price+o;return Je.playCash(),this.callbacks.onRevenueEarned(r.order.price,o),this.callbacks.onToast(`Packaged & handed ${r.order.dishName} to ${r.mesh.name}! Paid $${a}!`,"🥡"),setTimeout(()=>{this.tableVisuals.showTakeawayBag(!1)},1500),r.state="LEAVING_HAPPY",r.currentPath=Ka(os.pathWaypoints),r.pathIndex=0,this.takeawayOccupied=!1,!0}else if(t)return this.callbacks.onToast(`Guest ordered ${r.order.dishName}, not ${t.name}!`,"⚠️"),!0}}return!1}getActiveOrders(){const e=[];return this.activeCustomers.forEach(t=>{(t.state==="WALKING_TO_TABLE"||t.state==="WALKING_TO_COUNTER"||t.state==="READY_TO_ORDER"||t.state==="WAITING_FOR_FOOD"||t.state==="SEATED_THINKING"||t.state==="EATING")&&e.push(t.order)}),e}notifyOrders(){this.callbacks.onOrdersChange(this.getActiveOrders())}}class _T{constructor(e,t,i){K(this,"group");K(this,"dishes",[]);K(this,"dishVisuals",[]);K(this,"heatLight");K(this,"counterPassPos",new I(11.2,1.05,1.5));this.scene=e,this.interactions=t,this.onToast=i,this.group=new Me,this.scene.add(this.group),this.buildCounterFixture(),this.registerInteraction()}buildCounterFixture(){const e=new Q({color:ae.brass,metalness:.85,roughness:.25}),t=new Q({color:ae.stainless,metalness:.9,roughness:.2}),i=new D(new ce(2.4,.05,.9),t);i.position.set(this.counterPassPos.x,this.counterPassPos.y,this.counterPassPos.z),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i);const r=new Me;r.position.set(this.counterPassPos.x,this.counterPassPos.y,this.counterPassPos.z);const s=new D(new ye(.025,.025,.7,8),e);s.position.set(-1,.35,-.3);const o=new D(new ye(.025,.025,.7,8),e);o.position.set(1,.35,-.3);const a=new D(new ye(.02,.02,2.1,8),e);a.rotation.z=Math.PI/2,a.position.set(0,.7,-.3);for(let h=0;h<2;h++){const m=-.5+h*1,y=new D(new lc(.14,.16,12,1,!0),e);y.position.set(m,.6,-.15),r.add(y);const v=new D(new ut(.04,8,8),new ir({color:16755251}));v.position.set(m,.56,-.15),r.add(v)}r.add(s,o,a),this.group.add(r),this.heatLight=new Es(16750882,1.2,4.5,1.8),this.heatLight.position.set(this.counterPassPos.x,this.counterPassPos.y+.55,this.counterPassPos.z),this.group.add(this.heatLight);const l=document.createElement("canvas");l.width=256,l.height=64;const c=l.getContext("2d");c.fillStyle="#1e1c20",c.strokeStyle="#d4af37",c.lineWidth=3,c.beginPath(),c.roundRect?c.roundRect(4,4,248,56,10):c.rect(4,4,248,56),c.fill(),c.stroke(),c.font="bold 20px serif",c.fillStyle="#fbf7ee",c.textAlign="center",c.fillText("🛎️ ORDER PICKUP",128,38);const d=new sr(l),f=new Or(new rr({map:d,transparent:!0}));f.scale.set(.9,.25,1),f.position.set(this.counterPassPos.x,this.counterPassPos.y+.85,this.counterPassPos.z-.28),this.group.add(f)}registerInteraction(){this.interactions.register({id:"interact-pickup-counter",name:"Order Pickup Counter",zone:"Takeaway & Order Counter",actionLabel:"Check Pickup Pass",detailTitle:"Chef Pass & Food Pickup Counter",detailDescription:"Warming pass where chefs place freshly cooked meals for waitstaff to pick up and serve.",category:"counter",x:this.counterPassPos.x,z:2.2,interactionRadius:2,icon:"bell"})}addReadyDish(e){this.dishes.push(e),this.updateDishVisuals()}getReadyDishes(){return this.dishes}removeDishByOrderId(e){const t=this.dishes.findIndex(i=>i.orderId===e);if(t!==-1){const i=this.dishes.splice(t,1)[0];return this.updateDishVisuals(),i}}updateDishVisuals(){for(const i of this.dishVisuals)this.group.remove(i);this.dishVisuals=[];const e=Math.min(this.dishes.length,3),t=this.counterPassPos.x-(e-1)*.45;for(let i=0;i<e;i++){const r=this.dishes[i],s=new Me;s.position.set(t+i*.9,this.counterPassPos.y+.03,this.counterPassPos.z);const o=new Q({color:ae.brass,metalness:.85,roughness:.25}),a=new D(new ye(.24,.22,.03,16),o);s.add(a);const l=document.createElement("canvas");l.width=160,l.height=70;const c=l.getContext("2d");c.fillStyle="rgba(20, 22, 26, 0.92)",c.strokeStyle="#d4af37",c.lineWidth=3,c.beginPath(),c.roundRect?c.roundRect(4,4,152,62,12):c.rect(4,4,152,62),c.fill(),c.stroke(),c.font="28px sans-serif",c.textAlign="center",c.fillText(r.dishIcon,80,36),c.font="bold 15px sans-serif",c.fillStyle="#fdfaf2";const d=r.targetLocationName.length>12?r.targetLocationName.slice(0,11)+"…":r.targetLocationName;c.fillText(d,80,56);const f=new sr(l),h=new Or(new rr({map:f,transparent:!0,depthTest:!1}));h.scale.set(.68,.3,1),h.position.set(0,.28,0),s.add(h),this.group.add(s),this.dishVisuals.push(s)}}getInteractionPrompt(e){if(this.dishes.length===0)return e?`Hands full (${e.name})`:"Pickup Counter (Waiting for chefs...)";const t=this.dishes[0];return e?`Hands full! Deliver ${e.name} first`:`Pick up ${t.dishName} (for ${t.targetLocationName})`}handleInteraction(e,t){if(this.dishes.length===0)return this.onToast("The pickup counter is empty. Chefs are preparing orders!","👨‍🍳"),!0;if(e)return this.onToast(`Your hands are full carrying ${e.name}! Deliver it first.`,"⚠️"),!0;const i=this.dishes.shift();return this.updateDishVisuals(),Je.playBell(),this.onToast(`Picked up ${i.dishName}! Deliver to ${i.targetLocationName}.`,"🍽️"),t(i),!0}}class vT{constructor(e){K(this,"group");K(this,"config");K(this,"bodyGroup");K(this,"leftLeg");K(this,"rightLeg");K(this,"leftArm");K(this,"rightArm");K(this,"head");K(this,"chefHat");K(this,"shadowMesh");K(this,"platterGroup");K(this,"platterCanvas");K(this,"platterTexture");K(this,"platterSprite");K(this,"statusSprite");K(this,"statusCanvas");K(this,"statusCtx");K(this,"statusTexture");K(this,"isWalking",!1);K(this,"isCooking",!1);K(this,"walkTime",0);K(this,"cookTime",0);this.config=e,this.group=new Me,this.group.position.set(e.homePos.x,0,e.homePos.z);const t=new Zs(.46,20),i=new ir({color:1118485,transparent:!0,opacity:.32,depthWrite:!1});this.shadowMesh=new D(t,i),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.02,this.group.add(this.shadowMesh),this.bodyGroup=new Me,this.group.add(this.bodyGroup);const r=new Q({color:e.skinTone,roughness:.7}),s=new Q({color:e.hairColor,roughness:.8}),o=new Q({color:16645628,roughness:.45}),a=new Q({color:e.neckerchiefColor,roughness:.5}),l=new Q({color:e.pantsColor,roughness:.75}),c=new Q({color:1579292,roughness:.4}),d=new Q({color:ae.brass,metalness:.85,roughness:.25});this.leftLeg=new Me,this.leftLeg.position.set(-.16,.55,0);const f=new D(new ye(.09,.08,.52,10),l);f.position.y=-.26,f.castShadow=!0;const h=new D(new ce(.14,.1,.24),c);h.position.set(0,-.5,.04),this.leftLeg.add(f,h),this.bodyGroup.add(this.leftLeg),this.rightLeg=new Me,this.rightLeg.position.set(.16,.55,0);const m=new D(new ye(.09,.08,.52,10),l);m.position.y=-.26,m.castShadow=!0;const y=new D(new ce(.14,.1,.24),c);y.position.set(0,-.5,.04),this.rightLeg.add(m,y),this.bodyGroup.add(this.rightLeg);const v=new D(new ce(.56,.65,.36),o);v.position.y=.95,v.castShadow=!0,this.bodyGroup.add(v);const p=new Q({color:1118484,roughness:.3});for(let O=0;O<3;O++)for(let G=0;G<2;G++){const Z=new D(new ye(.018,.018,.02,8),p);Z.rotation.x=Math.PI/2,Z.position.set(-.08+G*.16,1.12-O*.14,.19),this.bodyGroup.add(Z)}const u=new D(new Zo(.14,.04,8,16),a);u.rotation.x=Math.PI/2,u.position.set(0,1.28,0),this.bodyGroup.add(u),this.head=new Me,this.head.position.set(0,1.48,0);const g=new D(new ut(.2,16,14),r);g.scale.set(1,1.05,1),g.castShadow=!0,this.head.add(g);const _=new D(new ut(.21,14,10,0,Math.PI*2,0,Math.PI/2),s);_.position.set(0,.04,-.02),this.head.add(_);const x=new D(new ut(.04,8,8),r);x.position.set(0,0,.2),this.head.add(x);const C=new D(new ce(.12,.03,.03),s);C.position.set(0,-.06,.19),this.head.add(C),this.chefHat=new Me,this.chefHat.position.set(0,.16,0);const w=new Q({color:16777215,roughness:.35}),T=new D(new ye(.2,.2,.1,16),d);T.position.y=.05,this.chefHat.add(T);const R=new D(new ye(.25,.19,.32,16),w);R.position.y=.24,R.castShadow=!0,this.chefHat.add(R);const S=new D(new ut(.26,16,10),w);S.position.y=.4,S.scale.set(1.05,.5,1.05),this.chefHat.add(S),this.head.add(this.chefHat),this.bodyGroup.add(this.head),this.leftArm=new Me,this.leftArm.position.set(-.35,1.2,0);const M=new D(new ye(.07,.065,.32,10),o);M.position.y=-.16,M.castShadow=!0;const k=new D(new ut(.055,10,10),r);k.position.y=-.34,this.leftArm.add(M,k),this.bodyGroup.add(this.leftArm),this.rightArm=new Me,this.rightArm.position.set(.35,1.2,0);const F=new D(new ye(.07,.065,.32,10),o);F.position.y=-.16,F.castShadow=!0;const q=new D(new ut(.055,10,10),r);q.position.y=-.34,this.rightArm.add(F,q),this.bodyGroup.add(this.rightArm),this.platterGroup=new Me,this.platterGroup.position.set(0,.88,.45),this.platterGroup.visible=!1;const P=new D(new ye(.24,.22,.03,16),new Q({color:ae.brass,metalness:.85,roughness:.25}));this.platterGroup.add(P),this.platterCanvas=document.createElement("canvas"),this.platterCanvas.width=128,this.platterCanvas.height=64,this.platterTexture=new sr(this.platterCanvas),this.platterTexture.colorSpace=At,this.platterSprite=new Or(new rr({map:this.platterTexture,transparent:!0,depthTest:!1})),this.platterSprite.scale.set(.65,.32,1),this.platterSprite.position.set(0,.26,0),this.platterGroup.add(this.platterSprite),this.bodyGroup.add(this.platterGroup),this.statusCanvas=document.createElement("canvas"),this.statusCanvas.width=256,this.statusCanvas.height=80,this.statusCtx=this.statusCanvas.getContext("2d"),this.statusTexture=new sr(this.statusCanvas),this.statusTexture.colorSpace=At,this.statusSprite=new Or(new rr({map:this.statusTexture,transparent:!0,depthTest:!1})),this.statusSprite.scale.set(1.2,.38,1),this.statusSprite.position.set(0,2.35,0),this.statusSprite.visible=!1,this.group.add(this.statusSprite)}setMovement(e){this.isWalking=e}setCookingAnimation(e){this.isCooking=e}setCarriedDish(e){if(!e){this.platterGroup.visible=!1;return}this.platterGroup.visible=!0;const t=this.platterCanvas.getContext("2d");t.clearRect(0,0,128,64),t.fillStyle="rgba(20, 22, 26, 0.9)",t.strokeStyle="#d4af37",t.lineWidth=2,t.beginPath(),t.roundRect?t.roundRect(4,4,120,56,12):t.rect(4,4,120,56),t.fill(),t.stroke(),t.font="28px sans-serif",t.textAlign="center",t.fillText(e.icon,64,40),this.platterTexture.needsUpdate=!0}setStatusBadge(e,t,i="#d4af37"){if(!e){this.statusSprite.visible=!1;return}this.statusSprite.visible=!0;const r=this.statusCtx,s=this.statusCanvas.width,o=this.statusCanvas.height;r.clearRect(0,0,s,o),r.save(),r.fillStyle="rgba(22, 20, 24, 0.92)",r.strokeStyle=i,r.lineWidth=3,r.beginPath(),r.roundRect?r.roundRect(6,6,s-12,o-12,16):r.rect(6,6,s-12,o-12),r.fill(),r.stroke(),r.font="bold 14px sans-serif",r.fillStyle="#d4af37",r.textAlign="center",r.fillText(`${this.config.name.toUpperCase()}`,s/2,26),r.font="bold 18px sans-serif",r.fillStyle="#fdfaf2";const a=t?`${t} ${e}`:e;r.fillText(a,s/2,54),r.restore(),this.statusTexture.needsUpdate=!0}update(e){if(this.isWalking){this.walkTime+=e*8;const t=Math.sin(this.walkTime)*.5;this.leftLeg.rotation.x=t,this.rightLeg.rotation.x=-t,this.platterGroup.visible?(this.leftArm.rotation.x=-.5+Math.sin(this.walkTime*2)*.05,this.rightArm.rotation.x=-.5-Math.sin(this.walkTime*2)*.05):(this.leftArm.rotation.x=-t*.7,this.rightArm.rotation.x=t*.7),this.bodyGroup.position.y=Math.abs(Math.sin(this.walkTime*2))*.04}else this.isCooking?(this.cookTime+=e*7,this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.bodyGroup.position.y=0,this.leftArm.rotation.x=-.6+Math.sin(this.cookTime)*.3,this.rightArm.rotation.x=-.6-Math.cos(this.cookTime)*.3,this.head.rotation.x=.15+Math.sin(this.cookTime)*.05):(this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftArm.rotation.x=this.platterGroup.visible?-.5:0,this.rightArm.rotation.x=this.platterGroup.visible?-.5:0,this.head.rotation.x=0,this.bodyGroup.position.y=0)}dispose(){this.statusTexture.dispose(),this.platterTexture.dispose()}}const _o={PREP:{x:11.5,z:-6.6},STOVE:{x:6.5,z:-11},OVEN:{x:10.5,z:-11},FRYER:{x:13.2,z:-11},PICKUP_PASS:{x:11.2,z:.4}};class yT{constructor(e,t,i){K(this,"chefs",[]);this.scene=e,this.pickupCounter=t,this.onToast=i,this.initChefs()}initChefs(){const e=[{id:"chef-1",name:"Chef Marco",title:"Executive Chef",neckerchiefColor:15891821,pantsColor:4013892,skinTone:16109491,hairColor:2234389,homePos:{x:8.5,z:-8}},{id:"chef-2",name:"Chef Antoine",title:"Sous Chef",neckerchiefColor:7783070,pantsColor:4737874,skinTone:15251606,hairColor:6044710,homePos:{x:14,z:-8}}];for(const t of e){const i=new vT(t);this.scene.add(i.group),this.chefs.push({mesh:i,state:"IDLE",currentOrder:null,recipe:null,timer:0,targetPos:{...t.homePos},waypoints:[],waypointIdx:0,speed:3.2,homePos:{...t.homePos}})}}update(e,t){this.dispatchOrders(t);for(const i of this.chefs)this.updateChef(i,e,t)}dispatchOrders(e){const t=e.filter(i=>i.status!=="PREPARING"?!1:!this.chefs.some(s=>{var o;return((o=s.currentOrder)==null?void 0:o.id)===i.id}));if(t.length!==0){for(const i of this.chefs)if(i.state==="IDLE"&&t.length>0){const r=t.shift();this.assignOrderToChef(i,r)}}}assignOrderToChef(e,t){const i=Qo[t.recipeId]||Qo.pizza;e.currentOrder=t,e.recipe=i,e.state="WALKING_TO_PREP",e.timer=0,e.waypoints=this.buildKitchenPath({x:e.mesh.group.position.x,z:e.mesh.group.position.z},_o.PREP),e.waypointIdx=0,e.mesh.setStatusBadge("Prepping...",t.dishIcon,"#d4af37"),e.mesh.setMovement(!0),e.mesh.setCookingAnimation(!1),e.mesh.setCarriedDish(null)}updateChef(e,t,i){var r,s;switch(e.currentOrder&&e.state!=="IDLE"&&e.state!=="RETURNING_HOME"&&(i.some(a=>a.id===e.currentOrder.id&&a.status!=="CANCELLED")||(this.onToast(`${e.mesh.config.name} discarded cancelled order.`,"🗑️"),e.state="RETURNING_HOME",e.currentOrder=null,e.recipe=null,e.mesh.setCarriedDish(null),e.mesh.setStatusBadge(null),e.waypoints=this.buildKitchenPath({x:e.mesh.group.position.x,z:e.mesh.group.position.z},e.homePos),e.waypointIdx=0,e.mesh.setMovement(!0),e.mesh.setCookingAnimation(!1))),e.state){case"IDLE":e.mesh.setMovement(!1),e.mesh.setCookingAnimation(!1),e.mesh.setStatusBadge(null);break;case"WALKING_TO_PREP":this.followWaypoints(e,t)&&(e.state="PREPPING",e.timer=2.8,e.mesh.setMovement(!1),e.mesh.setCookingAnimation(!0),e.mesh.group.rotation.y=Math.PI,e.mesh.setStatusBadge("Chopping & Mixing...","🔪","#e5c07b"),Je.playChop());break;case"PREPPING":if(e.timer-=t,e.timer<=0){e.mesh.setCookingAnimation(!1);const o=this.determineCookingStation(e.recipe);o?(e.cookingStationName=o.name,e.state="WALKING_TO_COOK",e.waypoints=this.buildKitchenPath({x:e.mesh.group.position.x,z:e.mesh.group.position.z},o.pos),e.waypointIdx=0,e.mesh.setMovement(!0),e.mesh.setStatusBadge(`To ${o.name}...`,"🚶","#61afef")):this.finishDish(e)}break;case"WALKING_TO_COOK":this.followWaypoints(e,t)&&(e.state="COOKING",e.timer=4.5,e.mesh.setMovement(!1),e.mesh.setCookingAnimation(!0),e.mesh.group.rotation.y=0,e.mesh.setStatusBadge(`Cooking ${(r=e.currentOrder)==null?void 0:r.dishIcon}...`,"🔥","#e06c75"),Je.playSizzle());break;case"COOKING":e.timer-=t,e.timer<=0?(e.mesh.setCookingAnimation(!1),this.finishDish(e)):e.mesh.setStatusBadge(`Baking ${(s=e.currentOrder)==null?void 0:s.dishIcon} ${Math.ceil(e.timer)}s`,"🔥","#e06c75");break;case"WALKING_TO_PICKUP":this.followWaypoints(e,t)&&(e.state="DEPOSITING",e.timer=.8,e.mesh.setMovement(!1),e.mesh.group.rotation.y=Math.PI,e.mesh.setStatusBadge("Plating...","🍽️","#98c379"));break;case"DEPOSITING":if(e.timer-=t,e.timer<=0){if(e.currentOrder){const o={id:`ready-${e.currentOrder.id}`,orderId:e.currentOrder.id,dishId:e.currentOrder.dishId,dishName:e.currentOrder.dishName,dishIcon:e.currentOrder.dishIcon,targetLocationName:e.currentOrder.targetLocationName,targetTableId:e.currentOrder.tableId,isTakeaway:e.currentOrder.type==="takeaway"};this.pickupCounter.addReadyDish(o),e.currentOrder.status="READY_TO_SERVE",Je.playBell(),this.onToast(`✨ ${e.mesh.config.name} plated hot ${o.dishName} for ${o.targetLocationName} at Pickup Counter!`,o.dishIcon)}e.mesh.setCarriedDish(null),e.currentOrder=null,e.recipe=null,e.state="RETURNING_HOME",e.waypoints=this.buildKitchenPath({x:e.mesh.group.position.x,z:e.mesh.group.position.z},e.homePos),e.waypointIdx=0,e.mesh.setMovement(!0),e.mesh.setStatusBadge(null)}break;case"RETURNING_HOME":this.followWaypoints(e,t)&&(e.state="IDLE",e.mesh.setMovement(!1),e.mesh.group.rotation.y=Math.PI,e.mesh.setStatusBadge(null));break}e.mesh.update(t)}finishDish(e){e.currentOrder&&(e.state="WALKING_TO_PICKUP",e.mesh.setCarriedDish({name:e.currentOrder.dishName,icon:e.currentOrder.dishIcon}),e.waypoints=this.buildKitchenPath({x:e.mesh.group.position.x,z:e.mesh.group.position.z},_o.PICKUP_PASS),e.waypointIdx=0,e.mesh.setMovement(!0),e.mesh.setStatusBadge("Serving to Pass...","🛎️","#98c379"))}determineCookingStation(e){return e.category==="pizza"?{name:"Pizza Oven",pos:_o.OVEN}:e.category==="burger"||e.category==="pasta"?{name:"Grill & Range",pos:_o.STOVE}:e.category==="fried_chicken"?{name:"Deep Fryer",pos:_o.FRYER}:null}followWaypoints(e,t){if(e.waypointIdx>=e.waypoints.length)return!0;const i=e.waypoints[e.waypointIdx],r=e.mesh.group.position.x,s=e.mesh.group.position.z,o=i.x-r,a=i.z-s,l=Math.hypot(o,a);if(l<.15)return e.waypointIdx++,e.waypointIdx>=e.waypoints.length;const c=Math.min(l,e.speed*t);e.mesh.group.position.x+=o/l*c,e.mesh.group.position.z+=a/l*c;let f=Math.atan2(o,a)-e.mesh.group.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;return e.mesh.group.rotation.y+=f*Math.min(1,10*t),!1}buildKitchenPath(e,t){const i=[];if(e.z<-8.5&&t.z>-7||e.z>-7&&t.z<-8.5){const o=(e.x+t.x)/2<11?7.5:14.5;i.push({x:o,z:e.z}),i.push({x:o,z:t.z}),i.push(t)}else i.push(t);return i}}class xT{constructor(e,t){K(this,"renderer");K(this,"scene");K(this,"camera");K(this,"world");K(this,"player");K(this,"physics");K(this,"interactions");K(this,"cookingManager");K(this,"customerManager");K(this,"pickupCounter");K(this,"chefManager");K(this,"isRunning",!1);K(this,"lastTime",0);K(this,"animationFrameId",null);K(this,"promptRefreshTimer",0);K(this,"keys",{});K(this,"inputDir",{x:0,z:0});K(this,"frustumSize",yu.frustumSize);K(this,"cameraOffset",new I(26,32,26));K(this,"cameraLookTarget",new I);K(this,"resizeObserver",null);K(this,"onKeyDown",e=>{if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")){if(e.code==="KeyE"){this.interactions.interact();return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&(e.preventDefault(),this.keys[e.code]=!0,this.updateInputDir())}});K(this,"onKeyUp",e=>{["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&(e.preventDefault(),this.keys[e.code]=!1,this.updateInputDir())});K(this,"loop",()=>{if(!this.isRunning)return;const e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e,this.cookingManager.update(t),this.customerManager.update(t),this.chefManager.update(t,this.customerManager.getActiveOrders());const i=this.player.update(this.inputDir,t,this.physics);if(this.callbacks.onZoneChange(i.zone),this.interactions.update(i.x,i.z),this.promptRefreshTimer+=t,this.promptRefreshTimer>.2){this.promptRefreshTimer=0;const o=this.interactions.getActiveTarget();if(o){if(o.id==="interact-pickup-counter"){const a=this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());a&&this.callbacks.onActiveTargetChange({...o,actionLabel:a})}else if(o.id.startsWith("station-")){const a=this.cookingManager.getInteractionPrompt(o.id);a&&this.callbacks.onActiveTargetChange({...o,actionLabel:a})}else if(o.id.startsWith("interact-dining-table-")||o.id.startsWith("interact-booth-")||o.id==="interact-pos"){const a=this.customerManager.getInteractionPrompt(o.id,this.cookingManager.getCarriedItem());a&&this.callbacks.onActiveTargetChange({...o,actionLabel:a})}}}this.world.updateAnimation(e*.001);const r=this.player.position.x,s=this.player.position.z;this.cameraLookTarget.x+=(r-this.cameraLookTarget.x)*yu.lerpSpeed,this.cameraLookTarget.z+=(s-this.cameraLookTarget.z)*yu.lerpSpeed,this.camera.position.set(this.cameraLookTarget.x+this.cameraOffset.x,this.cameraLookTarget.y+this.cameraOffset.y,this.cameraLookTarget.z+this.cameraOffset.z),this.camera.lookAt(this.cameraLookTarget),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.loop)});this.container=e,this.callbacks=t,this.scene=new JE,this.scene.background=new Ze(2303275);const i=e.clientWidth/e.clientHeight,r=this.frustumSize/2,s=r*i;this.camera=new Eh(-s,s,r,-r,.1,500),this.renderer=new u_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=I0,this.renderer.toneMapping=N0,this.renderer.toneMappingExposure=1.15,e.appendChild(this.renderer.domElement),this.physics=new sT,this.interactions=new oT,this.setupLighting(),this.world=new aT(this.scene,this.physics,this.interactions),this.player=new cT(-3,6),this.scene.add(this.player.mesh),this.cookingManager=new fT(this.scene,{onInventoryChange:o=>{this.player&&this.player.setCarriedItemVisual(o),this.callbacks.onInventoryChange(o)},onOpenStorageModal:t.onOpenStorageModal,onShowCookingToast:t.onShowCookingToast}),this.customerManager=new gT(this.scene,{onOrdersChange:t.onOrdersChange,onRevenueEarned:t.onRevenueEarned,onToast:t.onShowCookingToast}),this.pickupCounter=new _T(this.scene,this.interactions,t.onShowCookingToast),this.chefManager=new yT(this.scene,this.pickupCounter,t.onShowCookingToast),this.interactions.setListeners(o=>{if(!o){t.onActiveTargetChange(null);return}if(o.id==="interact-pickup-counter"){const a=this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());t.onActiveTargetChange({...o,actionLabel:a||o.actionLabel})}else if(o.id.startsWith("station-")){const a=this.cookingManager.getInteractionPrompt(o.id);t.onActiveTargetChange({...o,actionLabel:a||o.actionLabel})}else if(o.id.startsWith("interact-dining-table-")||o.id.startsWith("interact-booth-")||o.id==="interact-pos"){const a=this.customerManager.getInteractionPrompt(o.id,this.cookingManager.getCarriedItem());t.onActiveTargetChange({...o,actionLabel:a||o.actionLabel})}else t.onActiveTargetChange(o)},o=>{if(o.id==="interact-pickup-counter"&&this.pickupCounter.handleInteraction(this.cookingManager.getCarriedItem(),l=>{this.cookingManager.inventory.setCarriedItem({id:l.dishId,name:l.dishName,icon:l.dishIcon,type:"dish",orderId:l.orderId,targetLocationName:l.targetLocationName,targetTableId:l.targetTableId,isTakeaway:l.isTakeaway})})){const l=this.pickupCounter.getInteractionPrompt(this.cookingManager.getCarriedItem());t.onActiveTargetChange({...o,actionLabel:l||o.actionLabel});return}if(o.id.startsWith("station-")&&this.cookingManager.handleInteraction(o.id)){const l=this.cookingManager.getInteractionPrompt(o.id);t.onActiveTargetChange({...o,actionLabel:l||o.actionLabel});return}if((o.id.startsWith("interact-dining-table-")||o.id.startsWith("interact-booth-")||o.id==="interact-pos")&&this.customerManager.handleInteraction(o.id,this.cookingManager.getCarriedItem(),()=>this.cookingManager.clearCarriedItem())){const l=this.customerManager.getInteractionPrompt(o.id,this.cookingManager.getCarriedItem());t.onActiveTargetChange({...o,actionLabel:l||o.actionLabel});return}o.id==="interact-bell"?Je.playBell():Je.playInteract(),t.onTriggerInteraction(o)}),this.cameraLookTarget.set(this.player.position.x,1,this.player.position.z),this.camera.position.copy(this.cameraLookTarget).add(this.cameraOffset),this.camera.lookAt(this.cameraLookTarget),this.bindEvents(),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(e)}setupLighting(){const e=new rT(16774630,1.15);this.scene.add(e);const t=new mm(16772822,1.75);t.position.set(28,42,22),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=10,t.shadow.camera.far=120,t.shadow.camera.left=-26,t.shadow.camera.right=26,t.shadow.camera.top=26,t.shadow.camera.bottom=-26,t.shadow.bias=-5e-4,this.scene.add(t);const i=new mm(16313301,.6);i.position.set(-20,20,-20),this.scene.add(i);const r=new Es(ae.warmLight,1.1,18,1.4);r.position.set(-5,3.5,4),this.scene.add(r);const s=new Es(16775918,1.3,20,1.4);s.position.set(10,3.6,-7),this.scene.add(s);const o=new Es(ae.warmLight,1.1,14,1.4);o.position.set(10,3.2,2),this.scene.add(o);const a=new Es(16774374,.95,12,1.4);a.position.set(-11.5,3,-8.5),this.scene.add(a)}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}unbindEvents(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}updateInputDir(){let e=0,t=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),e===0&&t===0){this.inputDir.x=0,this.inputDir.z=0;return}const i=Math.hypot(e,t),r=e/i,s=t/i,o=Math.SQRT1_2,a=Math.SQRT1_2;this.inputDir.x=r*o+s*a,this.inputDir.z=-r*a+s*o}handleResize(){if(!this.container)return;const e=this.container.clientWidth,t=this.container.clientHeight;if(e===0||t===0)return;const i=e/t,r=this.frustumSize/2,s=r*i;this.camera.left=-s,this.camera.right=s,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.loop())}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}triggerInteract(){this.interactions.interact()}destroy(){this.stop(),this.unbindEvents(),this.resizeObserver&&this.resizeObserver.disconnect(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}const ST=({onZoneChange:n,onActiveTargetChange:e,onTriggerInteraction:t,onInventoryChange:i,onOpenStorageModal:r,onShowCookingToast:s,onOrdersChange:o,onRevenueEarned:a,engineRef:l})=>{const c=Qe.useRef(null),[d,f]=Qe.useState(null);return Qe.useEffect(()=>{if(!c.current)return;let h=null;try{h=new xT(c.current,{onZoneChange:n,onActiveTargetChange:e,onTriggerInteraction:t,onInventoryChange:i,onOpenStorageModal:r,onShowCookingToast:s,onOrdersChange:o,onRevenueEarned:a}),l.current=h,h.start()}catch(m){console.error("Failed to initialize GameEngine:",m),f((m==null?void 0:m.message)||"Failed to initialize 3D graphics")}return()=>{h&&h.destroy(),l.current=null}},[n,e,t,i,r,s,o,a,l]),d?$.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fbf7ee",background:"#121315",fontFamily:"sans-serif",padding:"24px",textAlign:"center"},children:[$.jsx("h2",{style:{color:"#ef4444",marginBottom:"12px"},children:"Graphics Initialization Error"}),$.jsx("p",{style:{maxWidth:"480px",color:"#ede4d3",marginBottom:"20px"},children:d}),$.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 24px",background:"#8b2536",color:"#fff",border:"1px solid #d4af37",borderRadius:"9999px",cursor:"pointer",fontWeight:700},children:"Reload Bistro Deluxe"})]}):$.jsx("div",{ref:c,id:"game-canvas-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,overflow:"hidden"}})},MT=({activeTarget:n,carriedItem:e,cookingToast:t,orders:i,totalRevenue:r,lastTip:s,onTriggerInteract:o,isMuted:a,onToggleMute:l,onClearCarriedItem:c})=>{const[d,f]=Qe.useState(!1),[h,m]=Qe.useState(!1),[y,v]=Qe.useState(!0);return $.jsxs("div",{className:"hud-layer",children:[t&&$.jsxs("div",{className:"hud-toast animate-toast",children:[$.jsx("span",{className:"toast-icon",children:t.icon||"👨‍🍳"}),$.jsx("span",{className:"toast-text",children:t.message})]}),$.jsxs("header",{className:"hud-header",children:[$.jsxs("div",{className:"header-left",children:[$.jsxs("div",{className:"brand-badge",children:[$.jsx("span",{className:"brand-crest",children:"🍽️"}),$.jsxs("div",{className:"brand-titles",children:[$.jsx("span",{className:"brand-name",children:"Bistro Deluxe"}),$.jsx("span",{className:"brand-tagline",children:"Restaurant Service"})]})]}),$.jsxs("div",{className:"revenue-card",children:[$.jsx("span",{className:"revenue-icon",children:"🪙"}),$.jsxs("span",{className:"revenue-val",children:["$",r]}),s>0&&$.jsxs("span",{className:"tip-bubble",children:["+$",s," tip!"]})]})]}),$.jsxs("div",{className:"header-right",children:[$.jsx("button",{className:"hud-pill-btn",onClick:()=>f(!0),title:"View Restaurant Dishes & Prices",children:"📋 Menu"}),$.jsx("button",{className:"hud-pill-btn",onClick:()=>m(!0),title:"How to Play",children:"❓ Guide"}),$.jsx("button",{className:"hud-circle-btn",onClick:l,title:a?"Unmute Sound":"Mute Sound","aria-label":"Toggle Mute",children:a?"🔇":"🔔"})]})]}),$.jsxs("aside",{className:"orders-sidebar",children:[$.jsxs("div",{className:"orders-toggle-tab",onClick:()=>v(!y),role:"button",tabIndex:0,children:[$.jsxs("div",{className:"orders-tab-info",children:[$.jsx("span",{className:"orders-tab-title",children:"📋 Orders"}),$.jsx("span",{className:"orders-count-badge",children:i.length})]}),$.jsx("span",{className:"orders-chevron",children:y?"▲":"▼"})]}),y&&$.jsx("div",{className:"orders-list-scroll",children:i.length===0?$.jsx("div",{className:"orders-empty-state",children:$.jsx("span",{children:"All caught up! Waiting for guests to arrive..."})}):i.map(p=>{const u=Math.max(0,Math.min(100,p.patience));let g="#2ecc71";return u<30?g="#e74c3c":u<60&&(g="#f39c12"),$.jsxs("div",{className:"order-ticket",children:[$.jsxs("div",{className:"order-ticket-top",children:[$.jsxs("span",{className:"order-location",children:[p.type==="takeaway"?"🥡":"🍽️"," ",p.targetLocationName]}),$.jsx("span",{className:"order-customer-name",children:p.customerName})]}),$.jsxs("div",{className:"order-ticket-dish",children:[$.jsxs("div",{className:"order-dish-name-row",children:[$.jsx("span",{className:"order-dish-icon",children:p.dishIcon}),$.jsx("span",{className:"order-dish-name",children:p.dishName})]}),$.jsxs("span",{className:"order-dish-price",children:["$",p.price]})]}),$.jsxs("div",{className:"order-ticket-footer",children:[$.jsxs("span",{className:`order-status-pill status-${p.status.toLowerCase().replace(/_/g,"-")}`,children:[p.status==="THINKING"&&"Reading Menu...",p.status==="WAITING_TO_BE_TAKEN"&&"Take Order [E]",p.status==="PREPARING"&&"👨‍🍳 Chefs Cooking",p.status==="READY_TO_SERVE"&&"🛎️ Ready at Pickup!",p.status==="EATING"&&"Dining 😋",p.status==="COMPLETED"&&"Paid & Happy ✨",p.status==="CANCELLED"&&"Cancelled"]}),(p.status==="WAITING_TO_BE_TAKEN"||p.status==="PREPARING"||p.status==="READY_TO_SERVE")&&$.jsxs("div",{className:"order-timer-group",children:[$.jsx("div",{className:"patience-track",children:$.jsx("div",{className:"patience-fill",style:{width:`${u}%`,backgroundColor:g}})}),$.jsxs("span",{className:"patience-secs",children:[Math.ceil(p.patienceRemainingSec),"s"]})]})]})]},p.id)})})]}),n&&$.jsxs("div",{className:"context-prompt animate-prompt-glow",onClick:o,role:"button",tabIndex:0,children:[$.jsx("div",{className:"prompt-key-badge",children:"E"}),$.jsx("span",{className:"prompt-action-text",children:n.actionLabel})]}),e&&$.jsxs("div",{className:"carried-food-bar animate-slide-up",children:[$.jsxs("div",{className:"carried-food-content",children:[$.jsx("span",{className:"carried-food-icon",children:e.icon}),$.jsxs("div",{className:"carried-food-info",children:[$.jsxs("span",{className:"carried-food-title",children:["Holding: ",e.name]}),$.jsxs("span",{className:"carried-food-sub",children:["👉 Deliver to: ",e.targetLocationName||"Customer"]})]})]}),$.jsx("button",{className:"carried-clear-btn",onClick:c,title:"Clear hands",children:"✕ Put Down"})]}),d&&$.jsx("div",{className:"modal-overlay",onClick:()=>f(!1),children:$.jsxs("div",{className:"menu-card",onClick:p=>p.stopPropagation(),children:[$.jsxs("div",{className:"menu-header",children:[$.jsx("span",{className:"menu-crest",children:"✦"}),$.jsx("h2",{className:"menu-title",children:"Bistro Deluxe Menu"}),$.jsx("p",{className:"menu-subtitle",children:"Prepared fresh by Chefs Marco & Antoine"}),$.jsx("button",{className:"modal-close-btn",onClick:()=>f(!1),children:"✕"})]}),$.jsx("div",{className:"menu-items-grid",children:Object.values(Qo).map(p=>$.jsxs("div",{className:"menu-dish-item",children:[$.jsx("div",{className:"menu-dish-icon-box",children:p.icon}),$.jsxs("div",{className:"menu-dish-details",children:[$.jsxs("div",{className:"menu-dish-header",children:[$.jsx("h3",{className:"menu-dish-name",children:p.name}),$.jsxs("span",{className:"menu-dish-price",children:["$",p.id==="pizza"?28:p.id==="burger"?22:p.id==="pasta"?24:p.id==="sandwich"?18:20]})]}),$.jsx("p",{className:"menu-dish-desc",children:p.description}),$.jsxs("div",{className:"menu-station-tag",children:["🍳 Station:"," ",p.category==="pizza"?"Stone Pizza Oven":p.category==="burger"||p.category==="pasta"?"Stovetop Range & Grill":p.category==="fried_chicken"?"Deep Fryer":"Prep Board"]})]})]},p.id))}),$.jsx("div",{className:"menu-footer",children:$.jsx("button",{className:"primary-modal-btn",onClick:()=>f(!1),children:"Back to Restaurant"})})]})}),h&&$.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:$.jsxs("div",{className:"guide-card",onClick:p=>p.stopPropagation(),children:[$.jsxs("div",{className:"menu-header",children:[$.jsx("span",{className:"menu-crest",children:"✦"}),$.jsx("h2",{className:"menu-title",children:"Restaurant Service Guide"}),$.jsx("p",{className:"menu-subtitle",children:"How to run Bistro Deluxe"}),$.jsx("button",{className:"modal-close-btn",onClick:()=>m(!1),children:"✕"})]}),$.jsxs("div",{className:"guide-content",children:[$.jsxs("div",{className:"guide-step",children:[$.jsx("span",{className:"step-num",children:"1"}),$.jsxs("div",{children:[$.jsx("strong",{children:"Greet & Take Orders"}),$.jsxs("p",{children:["When guests sit down at tables, wait for them to read the menu, then press ",$.jsx("code",{children:"[E]"})," to take their order."]})]})]}),$.jsxs("div",{className:"guide-step",children:[$.jsx("span",{className:"step-num",children:"2"}),$.jsxs("div",{children:[$.jsx("strong",{children:"Autonomous Chefs Cook"}),$.jsxs("p",{children:["Chefs Marco and Antoine automatically assemble recipes, cook them at the oven, stove, or fryer, and plate them at the ",$.jsx("strong",{children:"Order Pickup Counter"}),"."]})]})]}),$.jsxs("div",{className:"guide-step",children:[$.jsx("span",{className:"step-num",children:"3"}),$.jsxs("div",{children:[$.jsx("strong",{children:"Pick Up & Serve Hot Food"}),$.jsxs("p",{children:["Walk to the Pickup Counter and press ",$.jsx("code",{children:"[E]"})," to collect ready meals, then deliver them to the designated table or takeaway guest."]})]})]}),$.jsxs("div",{className:"guide-step",children:[$.jsx("span",{className:"step-num",children:"4"}),$.jsxs("div",{children:[$.jsx("strong",{children:"Collect Tips & Clean Tables"}),$.jsxs("p",{children:["Guests pay generous tips when food is served promptly. After they leave, press ",$.jsx("code",{children:"[E]"})," at dirty tables to clean them for new patrons!"]})]})]})]}),$.jsxs("div",{className:"guide-controls-row",children:[$.jsxs("div",{className:"kb-hint",children:[$.jsx("span",{className:"key-cap",children:"W"}),$.jsx("span",{className:"key-cap",children:"A"}),$.jsx("span",{className:"key-cap",children:"S"}),$.jsx("span",{className:"key-cap",children:"D"}),$.jsx("span",{children:"or Arrow Keys to Move"})]}),$.jsxs("div",{className:"kb-hint",children:[$.jsx("span",{className:"key-cap",children:"E"}),$.jsx("span",{children:"Interact / Take Order / Pick up / Serve / Clean"})]})]}),$.jsx("div",{className:"menu-footer",children:$.jsx("button",{className:"primary-modal-btn",onClick:()=>m(!1),children:"Got it, Let's Serve!"})})]})})]})},wT=()=>{const[n,e]=Qe.useState("Dining Hall"),[t,i]=Qe.useState(null),[r,s]=Qe.useState(null),[o,a]=Qe.useState(!1),[l,c]=Qe.useState(null),[d,f]=Qe.useState([]),[h,m]=Qe.useState(0),[y,v]=Qe.useState(0),[p,u]=Qe.useState(null),[g,_]=Qe.useState(null),x=Qe.useRef(null),C=Qe.useRef(null),w=Qe.useCallback(U=>{f(U)},[]),T=Qe.useCallback((U,B)=>{m(J=>J+U+B),v(B),setTimeout(()=>{v(0)},4e3)},[]),R=Qe.useCallback(U=>{e(U)},[]),S=Qe.useCallback(U=>{i(U)},[]),M=Qe.useCallback(U=>{s(U)},[]),k=Qe.useCallback(()=>{s(null)},[]),F=Qe.useCallback(()=>{const U=Je.toggleMute();a(U)},[]),q=Qe.useCallback(()=>{C.current&&C.current.triggerInteract()},[]),P=Qe.useCallback(U=>{c(U)},[]),O=Qe.useCallback((U,B)=>{u({isOpen:!0,stationType:U,onSelect:B})},[]),G=Qe.useCallback(()=>{u(null)},[]),Z=Qe.useCallback((U,B)=>{x.current!==null&&clearTimeout(x.current),_({message:U,icon:B}),x.current=window.setTimeout(()=>{_(null),x.current=null},3200)},[]),N=Qe.useCallback(()=>{C.current&&(C.current.cookingManager.inventory.clear(),Z("Cleared item from hands.","🧹"))},[Z]);return Qe.useEffect(()=>{const U=B=>{B.key==="Escape"&&(p&&u(null),r&&s(null))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[r,p]),$.jsxs("div",{className:"game-app-container",children:[$.jsx(ST,{onZoneChange:R,onActiveTargetChange:S,onTriggerInteraction:M,onInventoryChange:P,onOpenStorageModal:O,onShowCookingToast:Z,onOrdersChange:w,onRevenueEarned:T,engineRef:C}),$.jsx(MT,{currentZone:n,activeTarget:t,inspectedTarget:r,carriedItem:l,storageModal:p,cookingToast:g,orders:d,totalRevenue:h,lastTip:y,onCloseInspect:k,onCloseStorageModal:G,onTriggerInteract:q,isMuted:o,onToggleMute:F,onClearCarriedItem:N})]})};Su.createRoot(document.getElementById("root")).render($.jsx(O_.StrictMode,{children:$.jsx(wT,{})}));
