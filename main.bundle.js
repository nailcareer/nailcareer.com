(function () {
    'use strict';

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$6=window,e$b=t$6.ShadowRoot&&(void 0===t$6.ShadyCSS||t$6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$a=Symbol(),n$b=new WeakMap;let o$b = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$b&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$b.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$b.set(s,t));}return t}toString(){return this.cssText}};const r$b=t=>new o$b("string"==typeof t?t:t+"",void 0,s$a),i$8=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$b(n,t,s$a)},S$5=(s,n)=>{e$b?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$6.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$8=e$b?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$b(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$9;const e$a=window,r$a=e$a.trustedTypes,h$6=r$a?r$a.emptyScript:"",o$a=e$a.reactiveElementPolyfillSupport,n$a={toAttribute(t,i){switch(i){case Boolean:t=t?h$6:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$5=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:n$a,reflect:!1,hasChanged:a$5};let d$5 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$8(i));}else void 0!==i&&s.push(c$8(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$5(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$6){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$a).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$a;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$5)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$5.finalized=!0,d$5.elementProperties=new Map,d$5.elementStyles=[],d$5.shadowRootOptions={mode:"open"},null==o$a||o$a({ReactiveElement:d$5}),(null!==(s$9=e$a.reactiveElementVersions)&&void 0!==s$9?s$9:e$a.reactiveElementVersions=[]).push("1.6.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$5;const i$7=window,s$8=i$7.trustedTypes,e$9=s$8?s$8.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$9="$lit$",n$9=`lit$${(Math.random()+"").slice(9)}$`,l$5="?"+n$9,h$5=`<${l$5}>`,r$9=document,u$4=()=>r$9.createComment(""),d$4=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$7=Array.isArray,v$2=t=>c$7(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$4="[ \t\n\f\r]",f$6=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$2=/-->/g,m$2=/>/g,p$4=RegExp(`>|${a$4}(?:([^\\s"'>=/]+)(${a$4}*=${a$4}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$2=/'/g,$$2=/"/g,y$3=/^(?:script|style|textarea|title)$/i,w$2=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=w$2(1),b$3=w$2(2),T$2=Symbol.for("lit-noChange"),A$2=Symbol.for("lit-nothing"),E$2=new WeakMap,C$2=r$9.createTreeWalker(r$9,129,null,!1);function P$2(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$9?e$9.createHTML(i):i}const V$2=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$6;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$6?"!--"===c[1]?u=_$2:void 0!==c[1]?u=m$2:void 0!==c[2]?(y$3.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$4):void 0!==c[3]&&(u=p$4):u===p$4?">"===c[0]?(u=null!=l?l:f$6,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$4:'"'===c[3]?$$2:g$2):u===$$2||u===g$2?u=p$4:u===_$2||u===m$2?u=f$6:(u=p$4,l=void 0);const w=u===p$4&&t[i+1].startsWith("/>")?" ":"";r+=u===f$6?s+h$5:v>=0?(e.push(d),s.slice(0,v)+o$9+s.slice(v)+n$9+w):s+n$9+(-2===v?(e.push(void 0),i):w);}return [P$2(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};let N$2 = class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$2(t,i);if(this.el=N.createElement(a,e),C$2.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$2.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$9)||i.startsWith(n$9)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$9).split(n$9),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$2:"?"===i[1]?L$2:"@"===i[1]?z:k$2});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y$3.test(h.tagName)){const t=h.textContent.split(n$9),i=t.length-1;if(i>0){h.textContent=s$8?s$8.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$4()),C$2.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$4());}}}else if(8===h.nodeType)if(h.data===l$5)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$9,t+1));)v.push({type:7,index:r}),t+=n$9.length-1;}r++;}}static createElement(t,i){const s=r$9.createElement("template");return s.innerHTML=t,s}};function S$4(t,i,s=t,e){var o,n,l,h;if(i===T$2)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$4(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$4(t,r._$AS(t,i.values),r,e)),i}let M$2 = class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$9).importNode(s,!0);C$2.currentNode=o;let n=C$2.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R$2(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$2(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$2.nextNode(),l++);}return C$2.currentNode=r$9,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$2 = class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$2,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$4(this,t,i),d$4(t)?t===A$2||null==t||""===t?(this._$AH!==A$2&&this._$AR(),this._$AH=A$2):t!==this._$AH&&t!==T$2&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$2(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$2&&d$4(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$9.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N$2.createElement(P$2(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M$2(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$2.get(t.strings);return void 0===i&&E$2.set(t.strings,i=new N$2(t)),i}T(t){c$7(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$4()),this.k(u$4()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}};let k$2 = class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$2,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$2;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$4(this,t,i,0),n=!d$4(t)||t!==this._$AH&&t!==T$2,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$4(this,e[s+l],i,l),h===T$2&&(h=this._$AH[l]),n||(n=!d$4(h)||h!==this._$AH[l]),h===A$2?t=A$2:t!==A$2&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$2?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}};let H$2 = class H extends k$2{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$2?void 0:t;}};const I$2=s$8?s$8.emptyScript:"";let L$2 = class L extends k$2{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$2?this.element.setAttribute(this.name,I$2):this.element.removeAttribute(this.name);}};class z extends k$2{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$4(this,t,i,0))&&void 0!==s?s:A$2)===T$2)return;const e=this._$AH,o=t===A$2&&e!==A$2||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$2&&(e===A$2||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}let Z$2 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$4(this,t);}};const B=i$7.litHtmlPolyfillSupport;null==B||B(N$2,R$2),(null!==(t$5=i$7.litHtmlVersions)&&void 0!==t$5?t$5:i$7.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R$2(i.insertBefore(u$4(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$4,o$8;let s$7 = class s extends d$5{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T$2}};s$7.finalized=!0,s$7._$litElement$=!0,null===(l$4=globalThis.litElementHydrateSupport)||void 0===l$4||l$4.call(globalThis,{LitElement:s$7});const n$8=globalThis.litElementPolyfillSupport;null==n$8||n$8({LitElement:s$7});(null!==(o$8=globalThis.litElementVersions)&&void 0!==o$8?o$8:globalThis.litElementVersions=[]).push("3.3.0");

    function mixinInitiallyHidden(Base) {
        return class extends Base {
            connectedCallback() {
                super.connectedCallback();
                if (this.hasAttribute("initially-hidden"))
                    this.removeAttribute("initially-hidden");
            }
        };
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$6=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$8(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$6(e,n)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n$7;null!=(null===(n$7=window.HTMLSlotElement)||void 0===n$7?void 0:n$7.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    function arrayize$2(item) {
        return [item].flat();
    }
    const notUndefined$2 = (x) => x !== undefined;
    function combineStyles$2(parentStyles, newStyles) {
        var _a;
        const styles = [
            ...((_a = arrayize$2(parentStyles)) !== null && _a !== void 0 ? _a : []),
            ...arrayize$2(newStyles),
        ];
        return styles
            .flat()
            .filter(notUndefined$2);
    }
    function mixinStyles$1(...newStyles) {
        return function (Base) {
            var _a;
            return _a = class extends Base {
                },
                _a.styles = combineStyles$2(Base.styles, newStyles),
                _a;
        };
    }

    function objectMap$2(input, mapper) {
        const output = {};
        for (const [key, value] of Object.entries(input))
            output[key] = mapper(value, key);
        return output;
    }

    const themeComponents$1 = (theme, components) => {
        return objectMap$2(components, Component => mixinStyles$1(theme)(Component));
    };

    /**
     * Convert a camel-case name into a dashed name
     * - for example
     *       dashify("BigManStyle")
     *       //> "big-man-style"
     */
    function dashify$3(camel) {
        return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    }

    function registerComponents$2(components) {
        for (const [name, component] of Object.entries(components))
            customElements.define(dashify$3(name), component);
    }

    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    var __classPrivateFieldGet$D = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$v = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _Component_subscriptions, _Component_unsubscribe;
    let Component$2 = class Component extends mixinInitiallyHidden(s$7) {
        constructor() {
            super(...arguments);
            _Component_subscriptions.set(this, []);
            _Component_unsubscribe.set(this, () => { });
        }
        init() { }
        firstUpdated(changes) {
            super.firstUpdated(changes);
            this.init();
        }
        addSubscription(subscribe) {
            __classPrivateFieldGet$D(this, _Component_subscriptions, "f").push(subscribe);
            if (this.isConnected) {
                const unsubscribe = subscribe();
                const existingUnsubscribe = __classPrivateFieldGet$D(this, _Component_unsubscribe, "f");
                __classPrivateFieldSet$v(this, _Component_unsubscribe, () => {
                    unsubscribe();
                    existingUnsubscribe();
                }, "f");
            }
        }
        subscribe() {
            const unsubscribes = __classPrivateFieldGet$D(this, _Component_subscriptions, "f").map(s => s());
            return () => unsubscribes.forEach(u => u());
        }
        connectedCallback() {
            super.connectedCallback();
            __classPrivateFieldSet$v(this, _Component_unsubscribe, this.subscribe(), "f");
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            __classPrivateFieldGet$D(this, _Component_unsubscribe, "f").call(this);
            __classPrivateFieldSet$v(this, _Component_unsubscribe, () => { }, "f");
        }
        render() {
            throw new Error("component render method not implemented");
        }
    };
    _Component_subscriptions = new WeakMap(), _Component_unsubscribe = new WeakMap();

    var theme$1 = i$8 `

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

`;

    var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let NceEmail = class NceEmail extends Component$2 {
        render() {
            const email = `${this.user}@${this.domain}`;
            return x$1 `
			<a part=link target=_blank href="mailto:${email}" title="Send email to ${email}">
				${email}
			</a>
		`;
        }
    };
    __decorate$a([
        e$8({ type: String, reflect: true })
    ], NceEmail.prototype, "user", void 0);
    __decorate$a([
        e$8({ type: String, reflect: true })
    ], NceEmail.prototype, "domain", void 0);
    NceEmail = __decorate$a([
        mixinStyles$1(i$8 `

:host {
	display: inline-block;
}

`)
    ], NceEmail);

    var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let NcePhone = class NcePhone extends Component$2 {
        render() {
            const phoneNumberWithDashes = this.first + "-" + this.second;
            const phoneNumber = phoneNumberWithDashes.replace(/-/g, "");
            return x$1 `
			<a
				part=link
				target=_blank
				href="tel:${phoneNumber}"
				title="Phone ${phoneNumberWithDashes}">
					${phoneNumberWithDashes}
			</a>
		`;
        }
    };
    __decorate$9([
        e$8({ type: String, reflect: true })
    ], NcePhone.prototype, "first", void 0);
    __decorate$9([
        e$8({ type: String, reflect: true })
    ], NcePhone.prototype, "second", void 0);
    NcePhone = __decorate$9([
        mixinStyles$1(i$8 `:host { display: inline-block; }`)
    ], NcePhone);

    var NceLogo = b$3 `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 894.93 508"><defs><style>.cls-3{fill:currentColor}</style></defs><g id="circle-and-dots"><circle cx="447.3" cy="254" r="233.5" stroke-linecap="round" stroke-width="10" stroke-dasharray="0 29.94" fill="none" stroke="currentColor" stroke-miterlimit="10" id="_Group_" data-name="&lt;Group&gt;"/><circle id="circle" cx="447.3" cy="254" r="250.5" stroke-width="7" fill="none" stroke="currentColor" stroke-miterlimit="10"/></g><g fill="currentColor"><path d="M259 667.88c8.19-10.44-14-26.67-18.91-10.69-3.35 10.81 9.91 23.57 20.49 21.23 16.8-3.73 16.9-22 9.93-34.63-6-10.76-15.65-19.12-25.89-25.67-12.78-8.17-30.19-14.92-45-8.12-7.12 3.26-14.85 10.14-16.82 18-1.44 5.76 1.9 10.4 6.08 14 10.68 9.32 28.78 7.42 39.65-.46 8-5.84 14-14.57 17.39-23.85 5.32-14.48 3.49-29.27-7.09-40.7-8.86-9.59-20.94-14.73-33.6-17.1-24.66-4.63-63.31-3-75.77 23.08-6.59 13.76 3.53 26.26 16.47 30.86 15.21 5.41 29.7-.3 43.18-7.47s25.78-17.13 31.73-31.43c4.93-11.83 5.87-26.91 1.28-39-10.36-27.33-41.51-44.23-68.17-51.25a117.85 117.85 0 00-50.3-2.5C88 485 69.36 490.35 57.88 502.05c-8.77 8.95-5.33 19.51 2.36 27.9 10.32 11.27 25.31 16.81 40.06 19.37 33.68 5.85 70.94-.65 98.87-20.94 11.17-8.11 21.39-19.16 24.64-32.93 3.36-14.24-.61-29.91-8.94-41.71s-20.23-20.64-33.1-27.07c-13.22-6.6-27.07-11.33-41.61-5.73-6.86 2.63-12.86 7.77-13.09 15.62-.19 6.62 3.64 12.91 7.5 18 8.55 11.33 21.1 17.26 34.83 19.84a110.59 110.59 0 0041.9-.17c12.61-2.54 26.26-8 33.27-19.47 13.09-21.42-3.76-51.87-23-63.48a35.41 35.41 0 00-20.73-4.88c-6.14.38-15 2-17.7 8.36-2.58 6.12 2.19 12.93 5.94 17.41 4.56 5.43 10.3 10.33 17 12.93 13.59 5.3 30 1.78 42.16-5.66 5.73-3.52 9.68-8.15 14.15-13 3.8-4.11 7.28-8.26 9.68-13.38 5.81-12.36 3-28-9.91-34.6-6.28-3.22-14-3.83-19.12 1.71-4 4.26-4.29 10.09-1.62 15.13 2.37 4.49 7.43 10.16 13.06 9.06 7.44-1.46 7.79-8.8 3.82-13.86-.94-1.2-6.36-5.56-3.51-1.91 2.54 3.22.47 7.63-2.76 9.33-3.61 1.91-6.58 1.4-7.16-2.82-.65-4.73 2.14-9.29 6.07-11.73 5.58-3.46 16.26-2.15 18.13 5a27.86 27.86 0 01-1.91 18.63c-3.34 7.44-9.55 14.34-15.3 20.08a53 53 0 01-33.94 14.84 38.88 38.88 0 01-16-2.18c-7-2.68-16.77-10.38-13.9-19 3.71-11.1 23.64-10 32.13-6.79 19.57 7.41 30.09 37 19.59 54.88-11 18.78-38 22.38-57.65 21.82-11.6-.33-23.9-2-34.42-7.16-10.84-5.3-21.79-20.65-11.17-31.61 8.52-8.81 23.65-9.51 34.59-6.13a96.26 96.26 0 0131.79 17c19.62 16.17 22.1 45.9 6.61 65.61S168 539.27 143.9 543.68a143 143 0 01-42.52.91c-13-1.58-28.87-5.11-38.8-14.39-7.95-7.43-5.32-17.61 2-24.14 9.57-8.58 22.81-13.29 35.06-16.4 26.95-6.82 55.61-3.29 80.72 8.44 11.53 5.38 23.31 12.61 31 23 6.47 8.7 8.51 18.37 8.32 29-.49 26.66-19.93 43.86-42.59 54.29-11.53 5.3-23.32 8.41-35.75 4-3.36-1.21-6.84-2.73-8.23-6.22-1.5-3.74-.76-8.08.68-11.72a36.23 36.23 0 017.85-11.89c15.73-15.92 45.16-16.74 65.86-13.41 10.3 1.67 23 4.93 30.3 13 9.16 10.07 6.68 26.32 1.64 37.69-8 18-26 31.46-46.39 25.44-3.28-1-5.61-1.82-5.42-5.55s2.22-7 4.39-9.84a33.92 33.92 0 0115.51-11.36c12.83-4.31 27.09.66 38.21 7.23 10 5.92 18.77 12.55 22.69 24.06 1.89 5.58 2.18 12.25-.14 17.77-2.62 6.25-10.53 10.65-17.3 9.64-4.23-.64-5.45-1.55-6.1-5.28a11.94 11.94 0 011.8-8.32c1.75-2.71 4.47-4.27 7.75-3.63 1.92.37 2 .41 1.43 2.09a13.77 13.77 0 01-1.91 4.41c-.86 1.09 4.63 6.09 5.1 5.5z" transform="translate(-52.7 -263.55)" id="_Group_2" data-name="&lt;Group&gt;"/><path d="M745.27 666.08c-2.54-3.22-.47-7.63 2.76-9.34 3.61-1.9 6.58-1.39 7.16 2.83.65 4.73-2.14 9.28-6.07 11.72-5.58 3.46-16.26 2.16-18.13-5a27.86 27.86 0 011.85-18.59c3.92-8.73 10.66-15.21 18.24-20.8 11.06-8.15 25-15.16 39.18-13.89 7.16.65 14.54 3.81 19 9.66 4.28 5.62 4.25 12.67-2.09 16.46-10.84 6.47-26.94 3.95-36.3-3.91-15.25-12.8-20.45-40.31-6.26-55.29 14.91-15.73 41.43-17.61 61.66-15.59 11.54 1.16 26.06 3.66 34.48 12.28 4 4.1 7.2 10.47 7 16.25-.25 6.85-5.14 11.63-11 14.34-11.67 5.38-23.89 3.58-35.29-1.39s-23.38-11.18-31.18-21c-14.48-18.32-13-45.82 1.8-63.22 16.35-19.25 42.46-30.06 66.9-34a113.2 113.2 0 0141 .92c13 2.69 28.51 7.14 38.54 16.35 7.9 7.25 2.53 18.14-4.06 24.14-9.42 8.57-22.65 12.69-34.94 14.82-27.66 4.8-57.12 1.11-82.32-11.37-11.39-5.63-23-13.16-30-24-6.79-10.38-8.13-22.69-5.59-34.7 5.08-24 27.08-38.37 48.51-46.71 6.75-2.62 14.06-4 21.29-2.82 5.67.9 14.48 3 16 9.32 2.57 10.61-6.85 22.09-15.22 27.45-10.12 6.47-22.8 8.72-34.62 9.48a105.26 105.26 0 01-33.23-2.83c-10.33-2.69-22-7.45-26.11-18.12-4.17-10.83-1.48-23.29 3.64-33.34 4-7.93 10.07-15.3 17.82-19.81a33.77 33.77 0 0118.25-4.45 36 36 0 019.11 1.37c3.5 1 5.71 2.09 5.37 6.07-.59 6.69-6.59 12.7-11.72 16.4a33.14 33.14 0 01-17 6.11 51.56 51.56 0 01-35.06-10.45c-3.22-2.51-7-7.29-9-9.36a35.8 35.8 0 01-8-13.08c-1.89-5.57-2.18-12.25.14-17.76 2.62-6.25 10.53-10.65 17.3-9.64 4.23.63 5.45 1.55 6.1 5.28a12 12 0 01-1.8 8.32c-1.75 2.71-4.47 4.27-7.75 3.63-1.92-.38-2-.41-1.43-2.09a13.68 13.68 0 011.91-4.41c.86-1.09-4.63-6.09-5.1-5.5-8.19 10.43 14 26.66 18.91 10.69 3.35-10.81-9.91-23.56-20.49-21.23-16.81 3.72-16.9 22.05-9.93 34.63a60 60 0 0010.21 13.31c.51.51 1 1 1.55 1.5 1.15 1.08-.37-.36-.36-.38l-.86-.82 1.35 1.72a60.61 60.61 0 007.46 7.65c11.16 9.56 26.56 15.22 41.31 13.38a34 34 0 0019.65-9.36c4.73-4.54 10-11.91 6.86-18.72-5.78-12.39-22.67-14.9-34.5-11.57s-20.69 13.28-25.87 23.95c-5.91 12.16-7.77 26.9-.45 38.88 6.41 10.51 17 17.65 28.57 21.44 13.71 4.51 28.77 5.27 43 3.7 13.79-1.53 29.2-5.31 38.29-16.6 4.17-5.2 8-12 7.11-18.89-.79-6.39-5.89-12-11-15.6-12.17-8.56-27.47-7.08-40.47-1.47-13.87 6-27.73 14-36.69 26.52-8.63 12-12.21 28.94-7.85 43.27 8.41 27.65 39.12 45.34 65 53.06 16.87 5 34.21 6.15 51.7 4.79 16-1.23 34.27-5.26 46.33-16.56 4-3.79 7.26-8.7 7.7-14.35.4-5.23-2.48-9.72-5.77-13.54-9.82-11.41-24.75-17.6-39-21.47-33-9-69.68-2.78-98.23 16-11.87 7.8-23.16 18.57-27.59 32.43-4 12.63-2.33 28.11 3.49 39.87 6.19 12.51 16.9 22.47 28.65 29.74 12.2 7.54 27.61 15.38 42.35 13 6.39-1 13.65-3.51 17.9-8.63 5.19-6.23 3.71-14.32.12-20.93-6.57-12.13-17.72-20.39-30.86-24.26s-27.68-4.62-41.34-3.09c-13 1.45-27.11 5.14-36.79 14.46-19.5 18.76-6.22 49.55 11 64.75 10.47 9.23 26.51 13.76 39.62 7.09 15.6-7.95-1.65-26.07-10.19-32-13.21-9.19-29.66-6.12-43.17.81-11.93 6.12-24 15.21-29.88 27.67s-3 28 9.91 34.6c6.28 3.22 14 3.82 19.12-1.71 4-4.26 4.29-10.09 1.62-15.13-2.37-4.49-7.44-10.16-13.06-9.06-7.44 1.46-7.79 8.8-3.82 13.86.94 1.2 6.36 5.55 3.51 1.91z" transform="translate(-52.7 -263.55)" id="_Group_3" data-name="&lt;Group&gt;"/></g><g id="text"><g id="text-nce"><path class="cls-3" d="M324.69 475.06v123.7h-20.55v-162h16l100.4 126.16v-126h20.54v161.84h-17.34zM446.56 516.59a86.66 86.66 0 015.13-29.09 80.91 80.91 0 0115.07-26 75.74 75.74 0 0124.3-18.6q14.38-7.08 32.64-7.08 21.67 0 37.2 9.82a61 61 0 0123.1 25.54l-16.2 10.5a47.14 47.14 0 00-8.79-13 45.08 45.08 0 00-11.18-8.45 48.14 48.14 0 00-12.44-4.56 59.37 59.37 0 00-12.55-1.37 49.48 49.48 0 00-23.85 5.59 55 55 0 00-17.46 14.61 63.15 63.15 0 00-10.62 20.31 75.54 75.54 0 00-3.53 22.71 69.93 69.93 0 004.22 24.3 66.8 66.8 0 0011.75 20.43 57.36 57.36 0 0017.8 14.15 48.43 48.43 0 0022.37 5.25 56.47 56.47 0 0013.12-1.6 47.89 47.89 0 0012.9-5.13A55.09 55.09 0 00561 566a43.42 43.42 0 008.79-12.9l17.12 9.36a50.45 50.45 0 01-10.84 16.09 68.82 68.82 0 01-15.75 11.75 80.35 80.35 0 01-18.6 7.31 77.45 77.45 0 01-19.17 2.51 64.83 64.83 0 01-30.55-7.3 81.54 81.54 0 01-24.07-19.05 88.67 88.67 0 01-21.34-57.18zM699.89 580.5v18.26h-110v-162h108V455h-87.47v52.5h76v17.11h-76v55.89z" transform="translate(-52.7 -263.55)"/></g></g></svg>
`;

    const navlinks = [
        navlink("Home", "/"),
        navlink("Store", "/store/"),
        navlink("Blog", "https://www.blog.nailcareer.com/"),
        // navlink("Academy", "/academy/livestream"),
        // navlink("Academy", "/academy/livestream", ["new"]),
    ];
    function navlink(label, href, tags = []) {
        return { label, href, tags };
    }

    function renderNavlink(currentPage) {
        return function ({ label, href, tags }) {
            const tagString = tags.join(" ");
            const partString = [
                "navlink",
                ...((tags.length > 0)
                    ? ["tag"]
                    : []),
                ...tags,
            ].join(" ");
            const pageName = label.toLowerCase();
            const isCurrentPage = pageName === currentPage;
            return ((tags.length > 0)
                ? x$1 `
				<a
					href="${href}"
					part="${partString}"
					data-tag="${tagString}"
					?data-marked=${isCurrentPage}>
						${label}
				</a>
			`
                : x$1 `
				<a
					href="${href}"
					part="${partString}"
					?data-marked=${isCurrentPage}>
						${label}
				</a>
			`);
        };
    }

    var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let NceHeader = class NceHeader extends Component$2 {
        render() {
            return x$1 `
			<header>
				<slot></slot>
				<div>

					<a href="/">
						${NceLogo}
					</a>

					<nav>
						${navlinks.map(renderNavlink(this["current-page"]))}
					</nav>

				</div>
			</header>
		`;
        }
    };
    __decorate$8([
        e$8({ type: String })
    ], NceHeader.prototype, "current-page", void 0);
    NceHeader = __decorate$8([
        mixinStyles$1(i$8 `

	:host {
		display: block;
	}

	header > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
	}

	nav {
		font-size: 1.5em;
		margin: 0.5em;
		user-select: none;
	}

	nav a {
		display: inline-block;
		padding: 0.1em 0.5em;
		margin: 0.2em 0;
	}

	svg {
		display: block;
		height: 7em;
		user-select: none;
		max-width: 100%;
	}

	a {
		position: relative;
		opacity: 0.7;
		color: inherit;
		text-decoration: none;
		transition: opacity 250ms ease;
	}

	a:hover, a:focus {
		opacity: 1;
		text-decoration: underline;
	}

	a[data-marked] {
		text-decoration: underline;
	}

`)
    ], NceHeader);

    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let NceFooter = class NceFooter extends Component$2 {
        render() {
            return x$1 `
			<footer>
				<p><strong>Suzie’s Nail Career Education Inc</strong></p>
				<p>For customer support or business inquiries,</p>
				<p>Email <nce-email exportparts="link" user="hello" domain="nailcareer.com"></nce-email></p>
				<p>Phone (international) <nce-phone exportparts="link" first="1-833" second="391-1119"></nce-phone></p>
				<p>Phone (british columbia) <nce-phone exportparts="link" first="250-391" second="1118"></nce-phone></p>
				<p><em>Staff are available Monday to Thursday</em></p>
				<br/>
				<p>
					Store
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/privacy-policy.md">privacy policy</a>
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/terms-of-service.md">terms of service</a>
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/refund-policy.md">refund policy</a>
				</p>
				<p>
					Community
					<a part=link target=_blank href="https://xiome.io/legal">policies and terms of service</a>
				</p>
			</footer>
		`;
        }
    };
    NceFooter = __decorate$7([
        mixinStyles$1(i$8 `
	
	:host {
		display: block;
		font-size: 0.8em;
		opacity: 0.8;
	}

	footer {
		text-align: center;
		margin: 5em auto;
		padding: 0 1rem;
	}

	footer > * + * {
		margin-top: 0.5em;
	}

	footer strong {
		font-size: 1.2em;
	}

	footer ul {
		list-style: none;
	}

`)
    ], NceFooter);

    const parseConfig$1 = (element) => ({
        mock: element.getAttribute("mock"),
        shopifyDomain: element.getAttribute("shopify-domain"),
        shopifyStorefrontAccessToken: element.getAttribute("shopify-storefront-access-token"),
        baseCurrency: element.getAttribute("base-currency") || undefined,
        currencies: element.getAttribute("currencies") || undefined,
        defaultQuantityMax: parseInt(element.getAttribute("default-quantity-max") || "25"),
    });

    /*
    @license
    The MIT License (MIT)

    Copyright (c) 2016 Shopify Inc.

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be included
    in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    */

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };











    var classCallCheck$1 = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass$1 = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();









    var inherits$1 = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };











    var possibleConstructorReturn$1 = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    /*
    The MIT License (MIT)
    Copyright (c) 2016 Shopify Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
    OR OTHER DEALINGS IN THE SOFTWARE.


    */
    function join() {
      for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
        fields[_key] = arguments[_key];
      }

      return fields.join(' ');
    }

    function isObject(value) {
      return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === '[object Object]';
    }

    function deepFreezeCopyExcept(predicate, structure) {
      if (predicate(structure)) {
        return structure;
      } else if (isObject(structure)) {
        return Object.freeze(Object.keys(structure).reduce(function (copy, key) {
          copy[key] = deepFreezeCopyExcept(predicate, structure[key]);

          return copy;
        }, {}));
      } else if (Array.isArray(structure)) {
        return Object.freeze(structure.map(function (item) {
          return deepFreezeCopyExcept(predicate, item);
        }));
      } else {
        return structure;
      }
    }

    function schemaForType(typeBundle, typeName) {
      var typeSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var type = typeBundle.types[typeName];

      if (type) {
        return type;
      } else if (typeSchema && typeSchema.kind === 'INTERFACE') {
        return typeSchema;
      }

      throw new Error('No type of ' + typeName + ' found in schema');
    }

    var classCallCheck = function classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var inherits = function inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    };

    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var toConsumableArray = function toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }return arr2;
      } else {
        return Array.from(arr);
      }
    };

    var VariableDefinition = function () {

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link Client#variable} to create a VariableDefinition.
       *
       * @param {String} name The name of the variable.
       * @param {String} type The GraphQL type of the variable.
       * @param {*} [defaultValue] The default value of the variable.
       */
      function VariableDefinition(name, type, defaultValue) {
        classCallCheck(this, VariableDefinition);

        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        Object.freeze(this);
      }

      /**
       * Returns the GraphQL query string for the variable as an input value (e.g. `$variableName`).
       *
       * @return {String} The GraphQL query string for the variable as an input value.
       */

      createClass(VariableDefinition, [{
        key: 'toInputValueString',
        value: function toInputValueString() {
          return '$' + this.name;
        }

        /**
         * Returns the GraphQL query string for the variable (e.g. `$variableName:VariableType = defaultValue`).
         *
         * @return {String} The GraphQL query string for the variable.
         */

      }, {
        key: 'toString',
        value: function toString() {
          var defaultValueString = this.defaultValue ? ' = ' + formatInputValue(this.defaultValue) : '';

          return '$' + this.name + ':' + this.type + defaultValueString;
        }
      }]);
      return VariableDefinition;
    }();

    function isVariable(value) {
      return VariableDefinition.prototype.isPrototypeOf(value);
    }

    function variable(name, type, defaultValue) {
      return new VariableDefinition(name, type, defaultValue);
    }

    var Enum = function () {

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link Client#enum} to create an Enum.
       *
       * @param {String} key The key of the enum.
       */
      function Enum(key) {
        classCallCheck(this, Enum);

        this.key = key;
      }

      /**
       * Returns the GraphQL query string for the enum (e.g. `enumKey`).
       *
       * @return {String} The GraphQL query string for the enum.
       */

      createClass(Enum, [{
        key: "toString",
        value: function toString() {
          return this.key;
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          return this.key.valueOf();
        }
      }]);
      return Enum;
    }();

    var enumFunction = function enumFunction(key) {
      return new Enum(key);
    };

    var Scalar = function () {
      function Scalar(value) {
        classCallCheck(this, Scalar);

        this.value = value;
      }

      createClass(Scalar, [{
        key: "toString",
        value: function toString() {
          return this.value.toString();
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          return this.value.valueOf();
        }
      }, {
        key: "unwrapped",
        get: function get$$1() {
          return this.value;
        }
      }]);
      return Scalar;
    }();

    function formatInputValue(value) {
      if (VariableDefinition.prototype.isPrototypeOf(value)) {
        return value.toInputValueString();
      } else if (Enum.prototype.isPrototypeOf(value)) {
        return String(value);
      } else if (Scalar.prototype.isPrototypeOf(value)) {
        return JSON.stringify(value.valueOf());
      } else if (Array.isArray(value)) {
        return '[' + join.apply(undefined, toConsumableArray(value.map(formatInputValue))) + ']';
      } else if (isObject(value)) {
        return formatObject(value, '{', '}');
      } else {
        return JSON.stringify(value);
      }
    }

    function formatObject(value) {
      var openChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var closeChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var argPairs = Object.keys(value).map(function (key) {
        return key + ': ' + formatInputValue(value[key]);
      });

      return '' + openChar + join.apply(undefined, toConsumableArray(argPairs)) + closeChar;
    }

    function formatArgs(args) {
      if (!Object.keys(args).length) {
        return '';
      }

      return ' (' + formatObject(args) + ')';
    }

    function formatDirectives(directives) {
      if (!Object.keys(directives).length) {
        return '';
      }

      var directiveStrings = Object.keys(directives).map(function (key) {
        var directiveArgs = directives[key];
        var arg = directiveArgs && Object.keys(directiveArgs).length ? '(' + formatObject(directiveArgs) + ')' : '';

        return '@' + key + arg;
      });

      return ' ' + join.apply(undefined, toConsumableArray(directiveStrings));
    }

    // eslint-disable-next-line no-empty-function
    var noop = function noop() {};

    var Profiler = {
      trackTypeDependency: noop,
      trackFieldDependency: noop
    };

    var trackTypeDependency = Profiler.trackTypeDependency;
    var trackFieldDependency = Profiler.trackFieldDependency;

    function parseFieldCreationArgs(creationArgs) {
      var callback = noop;
      var options = {};
      var selectionSet = null;

      if (creationArgs.length === 2) {
        if (typeof creationArgs[1] === 'function') {
          var _creationArgs = slicedToArray(creationArgs, 2);

          options = _creationArgs[0];
          callback = _creationArgs[1];
        } else {
          var _creationArgs2 = slicedToArray(creationArgs, 2);

          options = _creationArgs2[0];
          selectionSet = _creationArgs2[1];
        }
      } else if (creationArgs.length === 1) {
        // SelectionSet is defined before this function is called since it's
        // called by SelectionSet
        // eslint-disable-next-line no-use-before-define
        if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
          selectionSet = creationArgs[0];
        } else if (typeof creationArgs[0] === 'function') {
          callback = creationArgs[0];
        } else {
          options = creationArgs[0];
        }
      }

      return { options: options, selectionSet: selectionSet, callback: callback };
    }

    var emptyArgs = Object.freeze({});
    var emptyDirectives = Object.freeze({});

    var Field = function () {

      /**
       * This constructor should not be invoked directly.
       * Fields are added to a selection by {@link SelectionSetBuilder#add}, {@link SelectionSetBuilder#addConnection}
       * and {@link SelectionSetBuilder#addInlineFragmentOn}.
       *
       * @param {String} name The name of the field.
       * @param {Object} [options] An options object containing:
       *   @param {Object} [options.args] Arguments for the field.
       *   @param {String} [options.alias] An alias for the field.
       *   @param {Object} [options.directives] Directives for the field.
       * @param {SelectionSet} selectionSet The selection set on the field.
       */
      function Field(name, options, selectionSet) {
        classCallCheck(this, Field);

        this.name = name;
        this.alias = options.alias || null;
        this.responseKey = this.alias || this.name;
        this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
        this.directives = options.directives ? deepFreezeCopyExcept(isVariable, options.directives) : emptyDirectives;
        this.selectionSet = selectionSet;
        Object.freeze(this);
      }

      /**
       * Returns the GraphQL query string for the Field (e.g. `catAlias: cat(size: 'small') { name }` or `name`).
       *
       * @return {String} The GraphQL query string for the Field.
       */

      createClass(Field, [{
        key: 'toString',
        value: function toString() {
          var aliasPrefix = this.alias ? this.alias + ': ' : '';

          return '' + aliasPrefix + this.name + formatArgs(this.args) + formatDirectives(this.directives) + this.selectionSet;
        }
      }]);
      return Field;
    }();

    // This is an interface that defines a usage, and simplifies type checking
    var Spread = function Spread() {
      classCallCheck(this, Spread);
    };

    var InlineFragment = function (_Spread) {
      inherits(InlineFragment, _Spread);

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link SelectionSetBuilder#addInlineFragmentOn} to create an InlineFragment.
       *
       * @param {String} typeName The type of the fragment.
       * @param {SelectionSet} selectionSet The selection set on the fragment.
       */
      function InlineFragment(typeName, selectionSet) {
        classCallCheck(this, InlineFragment);

        var _this = possibleConstructorReturn(this, (InlineFragment.__proto__ || Object.getPrototypeOf(InlineFragment)).call(this));

        _this.typeName = typeName;
        _this.selectionSet = selectionSet;
        Object.freeze(_this);
        return _this;
      }

      /**
       * Returns the GraphQL query string for the InlineFragment (e.g. `... on Cat { name }`).
       *
       * @return {String} The GraphQL query string for the InlineFragment.
       */

      createClass(InlineFragment, [{
        key: 'toString',
        value: function toString() {
          return '... on ' + this.typeName + this.selectionSet;
        }
      }]);
      return InlineFragment;
    }(Spread);

    var FragmentSpread = function (_Spread2) {
      inherits(FragmentSpread, _Spread2);

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link Document#defineFragment} to create a FragmentSpread.
       *
       * @param {FragmentDefinition} fragmentDefinition The corresponding fragment definition.
       */
      function FragmentSpread(fragmentDefinition) {
        classCallCheck(this, FragmentSpread);

        var _this2 = possibleConstructorReturn(this, (FragmentSpread.__proto__ || Object.getPrototypeOf(FragmentSpread)).call(this));

        _this2.name = fragmentDefinition.name;
        _this2.selectionSet = fragmentDefinition.selectionSet;
        Object.freeze(_this2);
        return _this2;
      }

      /**
       * Returns the GraphQL query string for the FragmentSpread (e.g. `...catName`).
       *
       * @return {String} The GraphQL query string for the FragmentSpread.
       */

      createClass(FragmentSpread, [{
        key: 'toString',
        value: function toString() {
          return '...' + this.name;
        }
      }, {
        key: 'toDefinition',
        value: function toDefinition() {
          // eslint-disable-next-line no-use-before-define
          return new FragmentDefinition(this.name, this.selectionSet.typeSchema.name, this.selectionSet);
        }
      }]);
      return FragmentSpread;
    }(Spread);

    var FragmentDefinition = function () {

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link Document#defineFragment} to create a FragmentDefinition on a {@link Document}.
       *
       * @param {String} name The name of the fragment definition.
       * @param {String} typeName The type of the fragment.
       */
      function FragmentDefinition(name, typeName, selectionSet) {
        classCallCheck(this, FragmentDefinition);

        this.name = name;
        this.typeName = typeName;
        this.selectionSet = selectionSet;
        this.spread = new FragmentSpread(this);
        Object.freeze(this);
      }

      /**
       * Returns the GraphQL query string for the FragmentDefinition (e.g. `fragment catName on Cat { name }`).
       *
       * @return {String} The GraphQL query string for the FragmentDefinition.
       */

      createClass(FragmentDefinition, [{
        key: 'toString',
        value: function toString() {
          return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet;
        }
      }]);
      return FragmentDefinition;
    }();

    function selectionsHaveIdField(selections) {
      return selections.some(function (fieldOrFragment) {
        if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
          return fieldOrFragment.name === 'id';
        } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
          return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
        }

        return false;
      });
    }

    function selectionsHaveTypenameField(selections) {
      return selections.some(function (fieldOrFragment) {
        if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
          return fieldOrFragment.name === '__typename';
        } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
          return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
        }

        return false;
      });
    }

    function indexSelectionsByResponseKey(selections) {
      function assignOrPush(obj, key, value) {
        if (Array.isArray(obj[key])) {
          obj[key].push(value);
        } else {
          obj[key] = [value];
        }
      }
      var unfrozenObject = selections.reduce(function (acc, selection) {
        if (selection.responseKey) {
          assignOrPush(acc, selection.responseKey, selection);
        } else {
          var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);

          responseKeys.forEach(function (responseKey) {
            assignOrPush(acc, responseKey, selection);
          });
        }

        return acc;
      }, {});

      Object.keys(unfrozenObject).forEach(function (key) {
        Object.freeze(unfrozenObject[key]);
      });

      return Object.freeze(unfrozenObject);
    }

    /**
     * Class that specifies the full selection of data to query.
     */

    var SelectionSet = function () {

      /**
       * This constructor should not be invoked directly. SelectionSets are created when building queries/mutations.
       *
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       * @param {(Object|String)} type The type of the current selection.
       * @param {Function} builderFunction Callback function used to build the SelectionSet.
       *   The callback takes a {@link SelectionSetBuilder} as its argument.
       */
      function SelectionSet(typeBundle, type, builderFunction) {
        classCallCheck(this, SelectionSet);

        if (typeof type === 'string') {
          this.typeSchema = schemaForType(typeBundle, type);
        } else {
          this.typeSchema = type;
        }

        trackTypeDependency(this.typeSchema.name);

        this.typeBundle = typeBundle;
        this.selections = [];
        if (builderFunction) {
          // eslint-disable-next-line no-use-before-define
          builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
        }

        if (this.typeSchema.implementsNode || this.typeSchema.name === 'Node') {
          if (!selectionsHaveIdField(this.selections)) {
            this.selections.unshift(new Field('id', {}, new SelectionSet(typeBundle, 'ID')));
          }
        }

        if (this.typeSchema.kind === 'INTERFACE') {
          if (!selectionsHaveTypenameField(this.selections)) {
            this.selections.unshift(new Field('__typename', {}, new SelectionSet(typeBundle, 'String')));
          }
        }

        this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
        Object.freeze(this.selections);
        Object.freeze(this);
      }

      /**
       * Returns the GraphQL query string for the SelectionSet (e.g. `{ cat { name } }`).
       *
       * @return {String} The GraphQL query string for the SelectionSet.
       */

      createClass(SelectionSet, [{
        key: 'toString',
        value: function toString() {
          if (this.typeSchema.kind === 'SCALAR' || this.typeSchema.kind === 'ENUM') {
            return '';
          } else {
            return ' { ' + join(this.selections) + ' }';
          }
        }
      }]);
      return SelectionSet;
    }();

    var SelectionSetBuilder = function () {

      /**
       * This constructor should not be invoked directly. SelectionSetBuilders are created when building queries/mutations.
       *
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       * @param {Object} typeSchema The schema object for the type of the current selection.
       * @param {Field[]} selections The fields on the current selection.
       */
      function SelectionSetBuilder(typeBundle, typeSchema, selections) {
        classCallCheck(this, SelectionSetBuilder);

        this.typeBundle = typeBundle;
        this.typeSchema = typeSchema;
        this.selections = selections;
      }

      createClass(SelectionSetBuilder, [{
        key: 'hasSelectionWithResponseKey',
        value: function hasSelectionWithResponseKey(responseKey) {
          return this.selections.some(function (field) {
            return field.responseKey === responseKey;
          });
        }

        /**
         * Adds a field to be queried on the current selection.
         *
         * @example
         * client.query((root) => {
         *   root.add('cat', {args: {id: '123456'}, alias: 'meow'}, (cat) => {
         *     cat.add('name');
         *   });
         * });
         *
         * @param {SelectionSet|String} selectionOrFieldName The selection or name of the field to add.
         * @param {Object} [options] Options on the query including:
         *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
         *   @param {String} [options.alias] Alias for the field being added.
         * @param {Function|SelectionSet} [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
         */

      }, {
        key: 'add',
        value: function add(selectionOrFieldName) {
          var selection = void 0;

          if (Object.prototype.toString.call(selectionOrFieldName) === '[object String]') {
            trackFieldDependency(this.typeSchema.name, selectionOrFieldName);

            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
          } else {
            if (Field.prototype.isPrototypeOf(selectionOrFieldName)) {
              trackFieldDependency(this.typeSchema.name, selectionOrFieldName.name);
            }

            selection = selectionOrFieldName;
          }

          if (selection.responseKey && this.hasSelectionWithResponseKey(selection.responseKey)) {
            throw new Error('The field name or alias \'' + selection.responseKey + '\' has already been added.');
          }
          this.selections.push(selection);
        }
      }, {
        key: 'field',
        value: function field(name) {
          for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            creationArgs[_key2 - 1] = arguments[_key2];
          }

          var parsedArgs = parseFieldCreationArgs(creationArgs);
          var options = parsedArgs.options,
              callback = parsedArgs.callback;
          var selectionSet = parsedArgs.selectionSet;

          if (!selectionSet) {
            if (!this.typeSchema.fieldBaseTypes[name]) {
              throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
            }

            var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);

            selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
          }

          return new Field(name, options, selectionSet);
        }

        /**
         * Creates an inline fragment.
         *
         * @access private
         * @param {String} typeName The type  the inline fragment.
         * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
         * @return {InlineFragment} An inline fragment.
         */

      }, {
        key: 'inlineFragmentOn',
        value: function inlineFragmentOn(typeName) {
          var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

          var selectionSet = void 0;

          if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
            selectionSet = builderFunctionOrSelectionSet;
          } else {
            selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
          }

          return new InlineFragment(typeName, selectionSet);
        }

        /**
         * Adds a field to be queried on the current selection.
         *
         * @access private
         * @param {String}    name The name of the field to add to the query.
         * @param {Object} [options] Options on the query including:
         *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
         *   @param {String} [options.alias] Alias for the field being added.
         * @param {Function}  [callback] Callback which will be used to create a new {@link SelectionSet} for the field added.
         */

      }, {
        key: 'addField',
        value: function addField(name) {
          for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            creationArgs[_key3 - 1] = arguments[_key3];
          }

          this.add.apply(this, [name].concat(creationArgs));
        }

        /**
         * Adds a connection to be queried on the current selection.
         * This adds all the fields necessary for pagination.
         *
         * @example
         * client.query((root) => {
         *   root.add('cat', (cat) => {
         *     cat.addConnection('friends', {args: {first: 10}, alias: 'coolCats'}, (friends) => {
         *       friends.add('name');
         *     });
         *   });
         * });
         *
         * @param {String}    name The name of the connection to add to the query.
         * @param {Object} [options] Options on the query including:
         *   @param {Object} [options.args] Arguments on the query (e.g. `{first: 10}`).
         *   @param {String} [options.alias] Alias for the field being added.
         * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
         */

      }, {
        key: 'addConnection',
        value: function addConnection(name) {
          for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            creationArgs[_key4 - 1] = arguments[_key4];
          }

          var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs),
              options = _parseFieldCreationAr.options,
              callback = _parseFieldCreationAr.callback,
              selectionSet = _parseFieldCreationAr.selectionSet;

          this.add(name, options, function (connection) {
            connection.add('pageInfo', {}, function (pageInfo) {
              pageInfo.add('hasNextPage');
              pageInfo.add('hasPreviousPage');
            });
            connection.add('edges', {}, function (edges) {
              edges.add('cursor');
              edges.addField('node', {}, selectionSet || callback); // This is bad. Don't do this
            });
          });
        }

        /**
         * Adds an inline fragment on the current selection.
         *
         * @example
         * client.query((root) => {
         *   root.add('animal', (animal) => {
         *     animal.addInlineFragmentOn('cat', (cat) => {
         *       cat.add('name');
         *     });
         *   });
         * });
         *
         * @param {String} typeName The name of the type of the inline fragment.
         * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
         */

      }, {
        key: 'addInlineFragmentOn',
        value: function addInlineFragmentOn(typeName) {
          var fieldTypeCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

          this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
        }

        /**
         * Adds a fragment spread on the current selection.
         *
         * @example
         * client.query((root) => {
         *   root.addFragment(catFragmentSpread);
         * });
         *
         * @param {FragmentSpread} fragmentSpread The fragment spread to add.
         */

      }, {
        key: 'addFragment',
        value: function addFragment(fragmentSpread) {
          this.add(fragmentSpread);
        }
      }]);
      return SelectionSetBuilder;
    }();

    function parseArgs(args) {
      var name = void 0;
      var variables = void 0;
      var selectionSetCallback = void 0;

      if (args.length === 3) {
        var _args = slicedToArray(args, 3);

        name = _args[0];
        variables = _args[1];
        selectionSetCallback = _args[2];
      } else if (args.length === 2) {
        if (Object.prototype.toString.call(args[0]) === '[object String]') {
          name = args[0];
          variables = null;
        } else if (Array.isArray(args[0])) {
          variables = args[0];
          name = null;
        }

        selectionSetCallback = args[1];
      } else {
        selectionSetCallback = args[0];
        name = null;
      }

      return { name: name, variables: variables, selectionSetCallback: selectionSetCallback };
    }

    var VariableDefinitions = function () {
      function VariableDefinitions(variableDefinitions) {
        classCallCheck(this, VariableDefinitions);

        this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray(variableDefinitions)) : [];
        Object.freeze(this.variableDefinitions);
        Object.freeze(this);
      }

      createClass(VariableDefinitions, [{
        key: 'toString',
        value: function toString() {
          if (this.variableDefinitions.length === 0) {
            return '';
          }

          return ' (' + join(this.variableDefinitions) + ') ';
        }
      }]);
      return VariableDefinitions;
    }();

    /**
     * Base class for {@link Query} and {@link Mutation}.
     * @abstract
     */

    var Operation = function () {

      /**
       * This constructor should not be invoked. The subclasses {@link Query} and {@link Mutation} should be used instead.
       */
      function Operation(typeBundle, operationType) {
        classCallCheck(this, Operation);

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _parseArgs = parseArgs(args),
            name = _parseArgs.name,
            variables = _parseArgs.variables,
            selectionSetCallback = _parseArgs.selectionSetCallback;

        this.typeBundle = typeBundle;
        this.name = name;
        this.variableDefinitions = new VariableDefinitions(variables);
        this.operationType = operationType;
        if (operationType === 'query') {
          this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
          this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
        } else {
          this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
          this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
        }
        Object.freeze(this);
      }

      /**
       * Whether the operation is anonymous (i.e. has no name).
       */

      createClass(Operation, [{
        key: 'toString',

        /**
         * Returns the GraphQL query or mutation string (e.g. `query myQuery { cat { name } }`).
         *
         * @return {String} The GraphQL query or mutation string.
         */
        value: function toString() {
          var nameString = this.name ? ' ' + this.name : '';

          return '' + this.operationType + nameString + this.variableDefinitions + this.selectionSet;
        }
      }, {
        key: 'isAnonymous',
        get: function get$$1() {
          return !this.name;
        }
      }]);
      return Operation;
    }();

    /**
     * GraphQL Query class.
     * @extends Operation
     */

    var Query = function (_Operation) {
      inherits(Query, _Operation);

      /**
       * This constructor should not be invoked directly.
       * Use the factory functions {@link Client#query} or {@link Document#addQuery} to create a Query.
       *
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       * @param {String} [name] A name for the query.
       * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
       * @param {Function} selectionSetCallback The query builder callback.
       *   A {@link SelectionSet} is created using this callback.
       */
      function Query(typeBundle) {
        var _ref;

        classCallCheck(this, Query);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return possibleConstructorReturn(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this, typeBundle, 'query'].concat(args)));
      }

      return Query;
    }(Operation);

    /**
     * GraphQL Mutation class.
     * @extends Operation
     */

    var Mutation = function (_Operation) {
      inherits(Mutation, _Operation);

      /**
       * This constructor should not be invoked directly.
       * Use the factory functions {@link Client#mutation} or {@link Document#addMutation} to create a Mutation.
       *
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       * @param {String} [name] A name for the mutation.
       * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
       * @param {Function} selectionSetCallback The mutation builder callback.
       *   A {@link SelectionSet} is created using this callback.
       */
      function Mutation(typeBundle) {
        var _ref;

        classCallCheck(this, Mutation);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return possibleConstructorReturn(this, (_ref = Mutation.__proto__ || Object.getPrototypeOf(Mutation)).call.apply(_ref, [this, typeBundle, 'mutation'].concat(args)));
      }

      return Mutation;
    }(Operation);

    function isAnonymous(operation) {
      return operation.isAnonymous;
    }

    function hasAnonymousOperations(operations) {
      return operations.some(isAnonymous);
    }

    function hasDuplicateOperationNames(operations) {
      var names = operations.map(function (operation) {
        return operation.name;
      });

      return names.reduce(function (hasDuplicates, name, index) {
        return hasDuplicates || names.indexOf(name) !== index;
      }, false);
    }

    function extractOperation(typeBundle, operationType) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      if (Operation.prototype.isPrototypeOf(args[0])) {
        return args[0];
      }

      if (operationType === 'query') {
        return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
      } else {
        return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
      }
    }

    function isInvalidOperationCombination(operations) {
      if (operations.length === 1) {
        return false;
      }

      return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
    }

    function fragmentNameIsNotUnique(existingDefinitions, name) {
      return existingDefinitions.some(function (definition) {
        return definition.name === name;
      });
    }

    var Document$1 = function () {

      /**
       * This constructor should not be invoked directly.
       * Use the factory function {@link Client#document} to create a Document.
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       */
      function Document(typeBundle) {
        classCallCheck(this, Document);

        this.typeBundle = typeBundle;
        this.definitions = [];
      }

      /**
       * Returns the GraphQL query string for the Document (e.g. `query queryOne { ... } query queryTwo { ... }`).
       *
       * @return {String} The GraphQL query string for the Document.
       */

      createClass(Document, [{
        key: 'toString',
        value: function toString() {
          return join(this.definitions);
        }

        /**
         * Adds an operation to the Document.
         *
         * @private
         * @param {String} operationType The type of the operation. Either 'query' or 'mutation'.
         * @param {(Operation|String)} [query|queryName] Either an instance of an operation
         *   object, or the name of an operation. Both are optional.
         * @param {Object[]} [variables] A list of variables in the operation. See {@link Client#variable}.
         * @param {Function} [callback] The query builder callback. If an operation
         *   instance is passed, this callback will be ignored.
         *   A {@link SelectionSet} is created using this callback.
          */

      }, {
        key: 'addOperation',
        value: function addOperation(operationType) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          var operation = extractOperation.apply(undefined, [this.typeBundle, operationType].concat(args));

          if (isInvalidOperationCombination(this.operations.concat(operation))) {
            throw new Error('All operations must be uniquely named on a multi-operation document');
          }

          this.definitions.push(operation);
        }

        /**
         * Adds a query to the Document.
         *
         * @example
         * document.addQuery('myQuery', (root) => {
         *   root.add('cat', (cat) => {
         *    cat.add('name');
         *   });
         * });
         *
         * @param {(Query|String)} [query|queryName] Either an instance of a query
         *   object, or the name of a query. Both are optional.
         * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
         * @param {Function} [callback] The query builder callback. If a query
         *   instance is passed, this callback will be ignored.
         *   A {@link SelectionSet} is created using this callback.
         */

      }, {
        key: 'addQuery',
        value: function addQuery() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this.addOperation.apply(this, ['query'].concat(args));
        }

        /**
         * Adds a mutation to the Document.
         *
         * @example
         * const input = client.variable('input', 'CatCreateInput!');
         *
         * document.addMutation('myMutation', [input], (root) => {
         *   root.add('catCreate', {args: {input}}, (catCreate) => {
         *     catCreate.add('cat', (cat) => {
         *       cat.add('name');
         *     });
         *   });
         * });
         *
         * @param {(Mutation|String)} [mutation|mutationName] Either an instance of a mutation
         *   object, or the name of a mutation. Both are optional.
         * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
         * @param {Function} [callback] The mutation builder callback. If a mutation
         *   instance is passed, this callback will be ignored.
         *   A {@link SelectionSet} is created using this callback.
         */

      }, {
        key: 'addMutation',
        value: function addMutation() {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          this.addOperation.apply(this, ['mutation'].concat(args));
        }

        /**
         * Defines a fragment on the Document.
         *
         * @param {String} name The name of the fragment.
         * @param {String} onType The type the fragment is on.
         * @param {Function} [builderFunction] The query builder callback.
         *   A {@link SelectionSet} is created using this callback.
         * @return {FragmentSpread} A {@link FragmentSpread} to be used with {@link SelectionSetBuilder#addFragment}.
         */

      }, {
        key: 'defineFragment',
        value: function defineFragment(name, onType, builderFunction) {
          if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
            throw new Error('All fragments must be uniquely named on a multi-fragment document');
          }

          var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
          var fragment = new FragmentDefinition(name, onType, selectionSet);

          this.definitions.push(fragment);

          return fragment.spread;
        }

        /**
         * All operations ({@link Query} and {@link Mutation}) on the Document.
         */

      }, {
        key: 'operations',
        get: function get$$1() {
          return this.definitions.filter(function (definition) {
            return Operation.prototype.isPrototypeOf(definition);
          });
        }

        /**
         * All {@link FragmentDefinition}s on the Document.
         */

      }, {
        key: 'fragmentDefinitions',
        get: function get$$1() {
          return this.definitions.filter(function (definition) {
            return FragmentDefinition.prototype.isPrototypeOf(definition);
          });
        }
      }]);
      return Document;
    }();

    /**
     * The base class used when deserializing response data.
     * Provides rich features, like functions to generate queries to refetch a node or fetch the next page.
     *
     * @class
     */
    var GraphModel =

    /**
     * @param {Object} attrs Attributes on the GraphModel.
     */
    function GraphModel(attrs) {
      var _this = this;

      classCallCheck(this, GraphModel);

      Object.defineProperty(this, 'attrs', { value: attrs, enumerable: false });

      Object.keys(this.attrs).filter(function (key) {
        return !(key in _this);
      }).forEach(function (key) {
        var descriptor = void 0;

        if (attrs[key] === null) {
          descriptor = {
            enumerable: true,
            get: function get$$1() {
              return null;
            }
          };
        } else {
          descriptor = {
            enumerable: true,
            get: function get$$1() {
              return this.attrs[key].valueOf();
            }
          };
        }
        Object.defineProperty(_this, key, descriptor);
      });
    };

    /**
     * A registry of classes used to deserialize the response data. Uses {@link GraphModel} by default.
     */

    var ClassRegistry = function () {
      function ClassRegistry() {
        classCallCheck(this, ClassRegistry);

        this.classStore = {};
      }

      /**
       * Registers a class for a GraphQL type in the registry.
       *
       * @param {Class} constructor The constructor of the class.
       * @param {String} type The GraphQL type of the object to deserialize into the class.
       */

      createClass(ClassRegistry, [{
        key: 'registerClassForType',
        value: function registerClassForType(constructor, type) {
          this.classStore[type] = constructor;
        }

        /**
         * Unregisters a class for a GraphQL type in the registry.
         *
         * @param {String} type The GraphQL type to unregister.
         */

      }, {
        key: 'unregisterClassForType',
        value: function unregisterClassForType(type) {
          delete this.classStore[type];
        }

        /**
         * Returns the class for the given GraphQL type.
         *
         * @param {String} type The GraphQL type to look up.
         * @return {Class|GraphModel} The class for the given GraphQL type. Defaults to {@link GraphModel} if no class is registered for the GraphQL type.
         */

      }, {
        key: 'classForType',
        value: function classForType(type) {
          return this.classStore[type] || GraphModel;
        }
      }]);
      return ClassRegistry;
    }();

    function isValue(arg) {
      return Object.prototype.toString.call(arg) !== '[object Null]' && Object.prototype.toString.call(arg) !== '[object Undefined]';
    }

    function isNodeContext(context) {
      return context.selection.selectionSet.typeSchema.implementsNode;
    }

    function isConnection(context) {
      return context.selection.selectionSet.typeSchema.name.endsWith('Connection');
    }

    function nearestNode(context) {
      if (context == null) {
        return null;
      } else if (isNodeContext(context)) {
        return context;
      } else {
        return nearestNode(context.parent);
      }
    }

    function contextsFromRoot(context) {
      if (context.parent) {
        return contextsFromRoot(context.parent).concat(context);
      } else {
        return [context];
      }
    }

    function contextsFromNearestNode(context) {
      if (context.selection.selectionSet.typeSchema.implementsNode) {
        return [context];
      } else {
        return contextsFromNearestNode(context.parent).concat(context);
      }
    }

    function initializeDocumentAndVars(currentContext, contextChain) {
      var lastInChain = contextChain[contextChain.length - 1];
      var first = lastInChain.selection.args.first;
      var variableDefinitions = Object.keys(lastInChain.selection.args).filter(function (key) {
        return isVariable(lastInChain.selection.args[key]);
      }).map(function (key) {
        return lastInChain.selection.args[key];
      });

      var firstVar = variableDefinitions.find(function (definition) {
        return definition.name === 'first';
      });

      if (!firstVar) {
        if (isVariable(first)) {
          firstVar = first;
        } else {
          firstVar = variable('first', 'Int', first);
          variableDefinitions.push(firstVar);
        }
      }

      var document = new Document$1(currentContext.selection.selectionSet.typeBundle);

      return [document, variableDefinitions, firstVar];
    }

    function addNextFieldTo(currentSelection, contextChain, path, cursor) {
      // There are always at least two. When we start, it's the root context, and the first set
      var nextContext = contextChain.shift();

      path.push(nextContext.selection.responseKey);

      if (contextChain.length) {
        currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function (newSelection) {
          addNextFieldTo(newSelection, contextChain, path, cursor);
        });
      } else {
        var edgesField = nextContext.selection.selectionSet.selections.find(function (field) {
          return field.name === 'edges';
        });
        var nodeField = edgesField.selectionSet.selections.find(function (field) {
          return field.name === 'node';
        });
        var first = void 0;

        if (isVariable(nextContext.selection.args.first)) {
          first = nextContext.selection.args.first;
        } else {
          first = variable('first', 'Int', nextContext.selection.args.first);
        }

        var options = {
          alias: nextContext.selection.alias,
          args: Object.assign({}, nextContext.selection.args, { after: cursor, first: first })
        };

        currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
      }
    }

    function collectFragments(selections) {
      return selections.reduce(function (fragmentDefinitions, field) {
        if (FragmentSpread.prototype.isPrototypeOf(field)) {
          fragmentDefinitions.push(field.toDefinition());
        }

        fragmentDefinitions.push.apply(fragmentDefinitions, toConsumableArray(collectFragments(field.selectionSet.selections)));

        return fragmentDefinitions;
      }, []);
    }

    function nextPageQueryAndPath(context, cursor) {
      var nearestNodeContext = nearestNode(context);

      if (nearestNodeContext) {
        return function () {
          var _document$definitions;

          var path = [];
          var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
          var nodeId = nearestNodeContext.responseData.id;
          var contextChain = contextsFromNearestNode(context);

          var _initializeDocumentAn = initializeDocumentAndVars(context, contextChain),
              _initializeDocumentAn2 = slicedToArray(_initializeDocumentAn, 2),
              document = _initializeDocumentAn2[0],
              variableDefinitions = _initializeDocumentAn2[1];

          document.addQuery(variableDefinitions, function (root) {
            path.push('node');
            root.add('node', { args: { id: nodeId } }, function (node) {
              node.addInlineFragmentOn(nodeType.name, function (fragment) {
                addNextFieldTo(fragment, contextChain.slice(1), path, cursor);
              });
            });
          });

          var fragments = collectFragments(document.operations[0].selectionSet.selections);

          (_document$definitions = document.definitions).unshift.apply(_document$definitions, toConsumableArray(fragments));

          return [document, path];
        };
      } else {
        return function () {
          var _document$definitions2;

          var path = [];
          var contextChain = contextsFromRoot(context);

          var _initializeDocumentAn3 = initializeDocumentAndVars(context, contextChain),
              _initializeDocumentAn4 = slicedToArray(_initializeDocumentAn3, 2),
              document = _initializeDocumentAn4[0],
              variableDefinitions = _initializeDocumentAn4[1];

          document.addQuery(variableDefinitions, function (root) {
            addNextFieldTo(root, contextChain.slice(1), path, cursor);
          });

          var fragments = collectFragments(document.operations[0].selectionSet.selections);

          (_document$definitions2 = document.definitions).unshift.apply(_document$definitions2, toConsumableArray(fragments));

          return [document, path];
        };
      }
    }

    function hasNextPage$1(connection, edge) {
      if (edge !== connection.edges[connection.edges.length - 1]) {
        return new Scalar(true);
      }

      return connection.pageInfo.hasNextPage;
    }

    function hasPreviousPage(connection, edge) {
      if (edge !== connection.edges[0]) {
        return new Scalar(true);
      }

      return connection.pageInfo.hasPreviousPage;
    }

    function transformConnections(variableValues) {
      return function (context, value) {
        if (isConnection(context)) {
          if (!(value.pageInfo && value.pageInfo.hasOwnProperty('hasNextPage') && value.pageInfo.hasOwnProperty('hasPreviousPage'))) {
            throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
          }

          return value.edges.map(function (edge) {
            return Object.assign(edge.node, {
              nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
              hasNextPage: hasNextPage$1(value, edge),
              hasPreviousPage: hasPreviousPage(value, edge),
              variableValues: variableValues
            });
          });
        } else {
          return value;
        }
      };
    }

    /* eslint-disable no-warning-comments */
    var DecodingContext = function () {
      function DecodingContext(selection, responseData) {
        var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        classCallCheck(this, DecodingContext);

        this.selection = selection;
        this.responseData = responseData;
        this.parent = parent;
        Object.freeze(this);
      }

      createClass(DecodingContext, [{
        key: 'contextForObjectProperty',
        value: function contextForObjectProperty(responseKey) {
          var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
          var nextSelection = nestedSelections && nestedSelections[0];
          var nextContext = void 0;

          // fragment spreads operate inside the current context, so we recurse to get the proper
          // selection set, but retain the current response context
          if (Spread.prototype.isPrototypeOf(nextSelection)) {
            nextContext = new DecodingContext(nextSelection, this.responseData, this.parent);
          } else {
            nextContext = new DecodingContext(nextSelection, this.responseData[responseKey], this);
          }

          if (!nextSelection) {
            throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
          }

          if (Field.prototype.isPrototypeOf(nextSelection)) {
            return nextContext;
          } else {
            return nextContext.contextForObjectProperty(responseKey);
          }
        }
      }, {
        key: 'contextForArrayItem',
        value: function contextForArrayItem(item) {
          return new DecodingContext(this.selection, item, this.parent);
        }
      }]);
      return DecodingContext;
    }();

    function decodeArrayItems(context, transformers) {
      return context.responseData.map(function (item) {
        return decodeContext(context.contextForArrayItem(item), transformers);
      });
    }

    function decodeObjectValues(context, transformers) {
      return Object.keys(context.responseData).reduce(function (acc, responseKey) {
        acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);

        return acc;
      }, {});
    }

    function runTransformers(transformers, context, value) {
      return transformers.reduce(function (acc, transformer) {
        return transformer(context, acc);
      }, value);
    }

    function decodeContext(context, transformers) {
      var value = context.responseData;

      if (Array.isArray(value)) {
        value = decodeArrayItems(context, transformers);
      } else if (isObject(value)) {
        value = decodeObjectValues(context, transformers);
      }

      return runTransformers(transformers, context, value);
    }

    function generateRefetchQueries(context, value) {
      if (isValue(value) && isNodeContext(context)) {
        value.refetchQuery = function () {
          return new Query(context.selection.selectionSet.typeBundle, function (root) {
            root.add('node', { args: { id: context.responseData.id } }, function (node) {
              node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
            });
          });
        };
      }

      return value;
    }

    function transformPojosToClassesWithRegistry(classRegistry) {
      return function transformPojosToClasses(context, value) {
        if (isObject(value)) {
          var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);

          return new Klass(value);
        } else {
          return value;
        }
      };
    }

    function transformScalars(context, value) {
      if (isValue(value)) {
        if (context.selection.selectionSet.typeSchema.kind === 'SCALAR') {
          return new Scalar(value);
        } else if (context.selection.selectionSet.typeSchema.kind === 'ENUM') {
          return new Enum(value);
        }
      }

      return value;
    }

    function recordTypeInformation(context, value) {
      var _context$selection$se = context.selection.selectionSet,
          typeBundle = _context$selection$se.typeBundle,
          typeSchema = _context$selection$se.typeSchema;

      if (isValue(value)) {
        if (value.__typename) {
          value.type = schemaForType(typeBundle, value.__typename, typeSchema);
        } else {
          value.type = typeSchema;
        }
      }

      return value;
    }

    function defaultTransformers(_ref) {
      var _ref$classRegistry = _ref.classRegistry,
          classRegistry = _ref$classRegistry === undefined ? new ClassRegistry() : _ref$classRegistry,
          variableValues = _ref.variableValues;

      return [transformScalars, generateRefetchQueries, transformConnections(variableValues), recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
    }

    /**
     * A function used to decode the response data.
     *
     * @function decode
     * @param {SelectionSet} selection The selection set used to query the response data.
     * @param {Object} responseData The response data returned.
     * @param {Object} [options] Options to use when decoding including:
     *   @param {ClassRegistry} [options.classRegistry] A class registry to use when deserializing the data into classes.
     * @return {GraphModel} The decoded response data.
     */
    function decode(selection, responseData) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var transformers = options.transformers || defaultTransformers(options);
      var context = new DecodingContext(selection, responseData);

      return decodeContext(context, transformers);
    }

    function httpFetcher(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return function fetcher(graphQLParams, headers) {
        return fetch(url, _extends({
          body: JSON.stringify(graphQLParams),
          method: 'POST',
          mode: 'cors'
        }, options, {
          headers: _extends({
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }, options.headers, headers)
        })).then(function (response) {
          var contentType = response.headers.get('content-type');

          if (contentType.indexOf('application/json') > -1) {
            return response.json();
          }

          return response.text().then(function (text) {
            return { text: text };
          });
        });
      };
    }

    function hasNextPage(paginatedModels) {
      return paginatedModels && paginatedModels.length && paginatedModels[paginatedModels.length - 1].hasNextPage;
    }

    /**
     * The Client class used to create and send GraphQL documents, fragments, queries and mutations.
     */

    var Client$2 = function () {

      /**
       * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
       * @param {Object} options An options object. Must include either `url` and optional `fetcherOptions` OR a `fetcher` function.
       *   @param {(String|Function)} options.url|fetcher Either the URL of the GraphQL API endpoint, or a custom fetcher function for further customization.
       *   @param {Object} [options.fetcherOptions] Additional options to use with `fetch`, like headers. Do not specify this argument if `fetcher` is specified.
       *   @param {ClassRegistry} [options.registry=new ClassRegistry()] A {@link ClassRegistry} used to decode the response data.
       */
      function Client(typeBundle, _ref) {
        var url = _ref.url,
            fetcherOptions = _ref.fetcherOptions,
            fetcher = _ref.fetcher,
            _ref$registry = _ref.registry,
            registry = _ref$registry === undefined ? new ClassRegistry() : _ref$registry;
        classCallCheck(this, Client);

        this.typeBundle = typeBundle;
        this.classRegistry = registry;

        if (url && fetcher) {
          throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
        }

        if (url) {
          this.fetcher = httpFetcher(url, fetcherOptions);
        } else if (fetcher) {
          if (fetcherOptions) {
            throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
          }

          this.fetcher = fetcher;
        } else {
          throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.');
        }
      }

      /**
       * Creates a GraphQL document.
       *
       * @example
       * const document = client.document();
       *
       * @return {Document} A GraphQL document.
       */

      createClass(Client, [{
        key: 'document',
        value: function document() {
          return new Document$1(this.typeBundle);
        }

        /**
         * Creates a GraphQL query.
         *
         * @example
         * const query = client.query('myQuery', (root) => {
         *   root.add('cat', (cat) => {
         *    cat.add('name');
         *   });
         * });
         *
         * @param {String} [name] A name for the query.
         * @param {VariableDefinition[]} [variables] A list of variables in the query. See {@link Client#variable}.
         * @param {Function} selectionSetCallback The query builder callback.
         *   A {@link SelectionSet} is created using this callback.
         * @return {Query} A GraphQL query.
         */

      }, {
        key: 'query',
        value: function query() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
        }

        /**
         * Creates a GraphQL mutation.
         *
         * @example
         * const input = client.variable('input', 'CatCreateInput!');
         *
         * const mutation = client.mutation('myMutation', [input], (root) => {
         *   root.add('catCreate', {args: {input}}, (catCreate) => {
         *     catCreate.add('cat', (cat) => {
         *       cat.add('name');
         *     });
         *   });
         * });
         *
         * @param {String} [name] A name for the mutation.
         * @param {VariableDefinition[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
         * @param {Function} selectionSetCallback The mutation builder callback.
         *   A {@link SelectionSet} is created using this callback.
         * @return {Mutation} A GraphQL mutation.
         */

      }, {
        key: 'mutation',
        value: function mutation() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
        }

        /**
         * Sends a GraphQL operation (query or mutation) or a document.
         *
         * @example
         * client.send(query, {id: '12345'}).then((result) => {
         *   // Do something with the returned result
         *   console.log(result);
         * });
         *
         * @param {(Query|Mutation|Document|Function)} request The operation or document to send. If represented
         * as a function, it must return `Query`, `Mutation`, or `Document` and recieve the client as the only param.
         * @param {Object} [variableValues] The values for variables in the operation or document.
         * @param {Object} [otherProperties] Other properties to send with the query. For example, a custom operation name.
         * @param {Object} [headers] Additional headers to be applied on a request by request basis.
         * @return {Promise.<Object>} A promise resolving to an object containing the response data.
         */

      }, {
        key: 'send',
        value: function send(request) {
          var variableValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var _this = this;

          var otherProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

          var operationOrDocument = void 0;

          if (Function.prototype.isPrototypeOf(request)) {
            operationOrDocument = request(this);
          } else {
            operationOrDocument = request;
          }

          var graphQLParams = { query: operationOrDocument.toString() };

          if (variableValues) {
            graphQLParams.variables = variableValues;
          }

          Object.assign(graphQLParams, otherProperties);

          var operation = void 0;

          if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
            operation = operationOrDocument;
          } else {
            var document = operationOrDocument;

            if (document.operations.length === 1) {
              operation = document.operations[0];
            } else if (otherProperties.operationName) {
              operation = document.operations.find(function (documentOperation) {
                return documentOperation.name === otherProperties.operationName;
              });
            } else {
              throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ');
            }
          }

          return this.fetcher(graphQLParams, headers).then(function (response) {
            if (response.data) {
              response.model = decode(operation, response.data, {
                classRegistry: _this.classRegistry,
                variableValues: variableValues
              });
            }

            return response;
          });
        }

        /**
         * Fetches the next page of a paginated node or array of nodes.
         *
         * @example
         * client.fetchNextPage(node, {first: 10}).then((result) => {
         *   // Do something with the next page
         *   console.log(result);
         * });
         *
         * @param {(GraphModel|GraphModel[])} nodeOrNodes The node or list of nodes on which to fetch the next page.
         * @param {Object} [options] Options object containing:
         *   @param {Integer} [options.first] The number of nodes to query on the next page. Defaults to the page size of the previous query.
         * @return {Promise.<GraphModel[]>} A promise resolving with the next page of {@link GraphModel}s.
         */

      }, {
        key: 'fetchNextPage',
        value: function fetchNextPage(nodeOrNodes, options) {
          var node = void 0;

          if (Array.isArray(nodeOrNodes)) {
            node = nodeOrNodes[nodeOrNodes.length - 1];
          } else {
            node = nodeOrNodes;
          }

          var _node$nextPageQueryAn = node.nextPageQueryAndPath(),
              _node$nextPageQueryAn2 = slicedToArray(_node$nextPageQueryAn, 2),
              query = _node$nextPageQueryAn2[0],
              path = _node$nextPageQueryAn2[1];

          var variableValues = void 0;

          if (node.variableValues || options) {
            variableValues = Object.assign({}, node.variableValues, options);
          }

          return this.send(query, variableValues).then(function (response) {
            response.model = path.reduce(function (object, key) {
              return object[key];
            }, response.model);

            return response;
          });
        }

        /**
         * Fetches all subsequent pages of a paginated array of nodes.
         *
         * @example
         * client.fetchAllPages(nodes, {pageSize: 20}).then((result) => {
         *   // Do something with all the models
         *   console.log(result);
         * });
         *
         * @param {GraphModel[]} paginatedModels The list of nodes on which to fetch all pages.
         * @param {Object} options Options object containing:
         *   @param {Integer} options.pageSize The number of nodes to query on each page.
         * @return {Promise.<GraphModel[]>} A promise resolving with all pages of {@link GraphModel}s, including the original list.
         */

      }, {
        key: 'fetchAllPages',
        value: function fetchAllPages(paginatedModels, _ref2) {
          var _this2 = this;

          var pageSize = _ref2.pageSize;

          if (hasNextPage(paginatedModels)) {
            return this.fetchNextPage(paginatedModels, { first: pageSize }).then(function (_ref3) {
              var model = _ref3.model;

              var pages = paginatedModels.concat(model);

              return _this2.fetchAllPages(pages, { pageSize: pageSize });
            });
          }

          return Promise.resolve(paginatedModels);
        }

        /**
         * Refetches a {@link GraphModel} whose type implements `Node`.
         *
         * @example
         * client.refetch(node).then((result) => {
         *   // Do something with the refetched node
         *   console.log(result);
         * });
         *
         * @param {GraphModel} nodeType A {@link GraphModel} whose type implements `Node`.
         * @return {Promise.<GraphModel>} The refetched {@link GraphModel}.
         */

      }, {
        key: 'refetch',
        value: function refetch(nodeType) {
          if (!nodeType) {
            throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');
          } else if (!nodeType.type.implementsNode) {
            throw new Error('\'client#refetch\' must be called with a type that implements Node. Received ' + nodeType.type.name + '.');
          }

          return this.send(nodeType.refetchQuery()).then(function (_ref4) {
            var model = _ref4.model;
            return model.node;
          });
        }

        /**
         * Creates a variable to be used in a {@link Query} or {@link Mutation}.
         *
         * @example
         * const idVariable = client.variable('id', 'ID!', '12345');
         *
         * @param {String} name The name of the variable.
         * @param {String} type The GraphQL type of the variable.
         * @param {*} [defaultValue] The default value of the variable.
         * @return {VariableDefinition} A variable object that can be used in a {@link Query} or {@link Mutation}.
         */

      }, {
        key: 'variable',
        value: function variable$$1(name, type, defaultValue) {
          return variable(name, type, defaultValue);
        }

        /**
         * Creates an enum to be used in a {@link Query} or {@link Mutation}.
         *
         * @example
         * const titleEnum = client.enum('TITLE');
         *
         * @param {String} key The key of the enum.
         * @return {Enum} An enum object that can be used in a {@link Query} or {@link Mutation}.
         */

      }, {
        key: 'enum',
        value: function _enum(key) {
          return enumFunction(key);
        }
      }]);
      return Client;
    }();

    /**
     * The class used to configure the JS Buy SDK Client.
     * @class
     */
    var Config = function () {
      createClass$1(Config, [{
        key: 'requiredProperties',


        /**
         * Properties that must be set on initializations
         * @attribute requiredProperties
         * @default ['storefrontAccessToken', 'domain']
         * @type Array
         * @private
         */
        get: function get$$1() {
          return ['storefrontAccessToken', 'domain'];
        }

        /**
         * Deprecated properties that map directly to required properties
         * @attribute deprecatedProperties
         * @default {'accessToken': 'storefrontAccessToken', 'apiKey': 'storefrontAccessToken'}
         * @type Object
         * @private
         */

      }, {
        key: 'deprecatedProperties',
        get: function get$$1() {
          return {
            accessToken: 'storefrontAccessToken',
            apiKey: 'storefrontAccessToken'
          };
        }

        /**
         * @constructs Config
         * @param {Object} attrs An object specifying the configuration. Requires the following properties:
         *   @param {String} attrs.storefrontAccessToken The {@link https://help.shopify.com/api/reference/storefront_access_token|Storefront access token} for the shop.
         *   @param {String} attrs.domain The `myshopify` domain for the shop (e.g. `graphql.myshopify.com`).
         */

      }]);

      function Config(attrs) {
        var _this = this;

        classCallCheck$1(this, Config);

        Object.keys(this.deprecatedProperties).forEach(function (key) {
          if (!attrs.hasOwnProperty(key)) {
            return;
          }
          // eslint-disable-next-line no-console
          console.warn('[ShopifyBuy] Config property ' + key + ' is deprecated as of v1.0, please use ' + _this.deprecatedProperties[key] + ' instead.');
          attrs[_this.deprecatedProperties[key]] = attrs[key];
        });

        this.requiredProperties.forEach(function (key) {
          if (attrs.hasOwnProperty(key)) {
            _this[key] = attrs[key];
          } else {
            throw new Error('new Config() requires the option \'' + key + '\'');
          }
        });

        if (attrs.hasOwnProperty('apiVersion')) {
          this.apiVersion = attrs.apiVersion;
        } else {
          this.apiVersion = '2023-04';
        }

        if (attrs.hasOwnProperty('source')) {
          this.source = attrs.source;
        }

        if (attrs.hasOwnProperty('language')) {
          this.language = attrs.language;
        }
      }

      return Config;
    }();

    var Resource = function Resource(client) {
      classCallCheck$1(this, Resource);

      this.graphQLClient = client;
    };

    var defaultErrors = [{ message: 'an unknown error has occurred.' }];

    function defaultResolver(path) {
      var keys = path.split('.');

      return function (_ref) {
        var model = _ref.model,
            errors = _ref.errors;

        return new Promise(function (resolve, reject) {
          try {
            var result = keys.reduce(function (ref, key) {
              return ref[key];
            }, model);

            resolve(result);
          } catch (_) {
            if (errors) {
              reject(errors);
            } else {
              reject(defaultErrors);
            }
          }
        });
      };
    }

    function fetchResourcesForProducts(productOrProduct, client) {
      var products = [].concat(productOrProduct);

      return Promise.all(products.reduce(function (promiseAcc, product) {

        // If the graphql query doesn't find a match, skip fetching variants and images.
        if (product === null) {
          return promiseAcc;
        }

        // Fetch the rest of the images and variants for this product
        promiseAcc.push(client.fetchAllPages(product.images, { pageSize: 250 }).then(function (images) {
          product.attrs.images = images;
        }));

        promiseAcc.push(client.fetchAllPages(product.variants, { pageSize: 250 }).then(function (variants) {
          product.attrs.variants = variants;
        }));

        return promiseAcc;
      }, []));
    }

    function paginateProductConnectionsAndResolve(client) {
      return function (products) {
        return fetchResourcesForProducts(products, client).then(function () {
          return products;
        });
      };
    }

    function paginateCollectionsProductConnectionsAndResolve(client) {
      return function (collectionOrCollections) {
        var collections = [].concat(collectionOrCollections);

        return Promise.all(collections.reduce(function (promiseAcc, collection) {
          return promiseAcc.concat(fetchResourcesForProducts(collection.products, client));
        }, [])).then(function () {
          return collectionOrCollections;
        });
      };
    }

    /**
     * @namespace ProductHelpers
     */
    var productHelpers = {

      /**
       * Returns the variant of a product corresponding to the options given.
       *
       * @example
       * const selectedVariant = client.product.helpers.variantForOptions(product, {
       *   size: "Small",
       *   color: "Red"
       * });
       *
       * @memberof ProductHelpers
       * @method variantForOptions
       * @param {GraphModel} product The product to find the variant on. Must include `variants`.
       * @param {Object} options An object containing the options for the variant.
       * @return {GraphModel} The variant corresponding to the options given.
       */
      variantForOptions: function variantForOptions(product, options) {
        return product.variants.find(function (variant) {
          return variant.selectedOptions.every(function (selectedOption) {
            return options[selectedOption.name] === selectedOption.value.valueOf();
          });
        });
      }
    };

    function query(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function (root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }

    function query$1(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.ids = client.variable("ids", "[ID!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.ids], function (root) {
        root.add("nodes", {
          args: {
            ids: variables.__defaultOperation__.ids
          }
        }, function (nodes) {
          nodes.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }

    function query$2(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "ProductSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
        root.add("products", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function (products) {
          products.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
      return document;
    }

    function query$3(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.handle = client.variable("handle", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.handle], function (root) {
        root.add("productByHandle", {
          args: {
            handle: variables.__defaultOperation__.handle
          }
        }, function (productByHandle) {
          productByHandle.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }

    function query$4(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.productId = client.variable("productId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.productId], function (root) {
        root.add("productRecommendations", {
          args: {
            productId: variables.__defaultOperation__.productId
          }
        }, function (productRecommendations) {
          productRecommendations.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }

    // GraphQL
    /**
     * The JS Buy SDK product resource
     * @class
     */

    var ProductResource = function (_Resource) {
      inherits$1(ProductResource, _Resource);

      function ProductResource() {
        classCallCheck$1(this, ProductResource);
        return possibleConstructorReturn$1(this, (ProductResource.__proto__ || Object.getPrototypeOf(ProductResource)).apply(this, arguments));
      }

      createClass$1(ProductResource, [{
        key: 'fetchAll',


        /**
         * Fetches all products on the shop.
         *
         * @example
         * client.product.fetchAll().then((products) => {
         *   // Do something with the products
         * });
         *
         * @param {Int} [pageSize] The number of products to fetch per page
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
         */
        value: function fetchAll() {
          var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

          return this.graphQLClient.send(query$2, { first: first }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches a single product by ID on the shop.
         *
         * @example
         * client.product.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==').then((product) => {
         *   // Do something with the product
         * });
         *
         * @param {String} id The id of the product to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
         */

      }, {
        key: 'fetch',
        value: function fetch(id) {
          return this.graphQLClient.send(query, { id: id }).then(defaultResolver('node')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches multiple products by ID on the shop.
         *
         * @example
         * const ids = ['Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];
         * client.product.fetchMultiple(ids).then((products) => {
         *   // Do something with the products
         * });
         *
         * @param {String[]} ids The ids of the products to fetch
         * @return {Promise|GraphModel[]} A promise resolving with a `GraphModel` of the product.
         */

      }, {
        key: 'fetchMultiple',
        value: function fetchMultiple(ids) {
          return this.graphQLClient.send(query$1, { ids: ids }).then(defaultResolver('nodes')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches a single product by handle on the shop.
         *
         * @example
         * client.product.fetchByHandle('my-product').then((product) => {
         *   // Do something with the product
         * });
         *
         * @param {String} handle The handle of the product to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
         */

      }, {
        key: 'fetchByHandle',
        value: function fetchByHandle(handle) {
          return this.graphQLClient.send(query$3, { handle: handle }).then(defaultResolver('productByHandle')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches all products on the shop that match the query.
         *
         * @example
         * client.product.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((products) => {
         *   // Do something with the first 10 products sorted by title in ascending order
         * });
         *
         * @param {Object} [args] An object specifying the query data containing zero or more of:
         *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
         *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
         *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/productsortkeys|Product Sort Keys}.
         *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#products|here}
         *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
         */

      }, {
        key: 'fetchQuery',
        value: function fetchQuery() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$first = _ref.first,
              first = _ref$first === undefined ? 20 : _ref$first,
              _ref$sortKey = _ref.sortKey,
              sortKey = _ref$sortKey === undefined ? 'ID' : _ref$sortKey,
              query$$1 = _ref.query,
              reverse = _ref.reverse;

          return this.graphQLClient.send(query$2, {
            first: first,
            sortKey: sortKey,
            query: query$$1,
            reverse: reverse
          }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Find recommended products related to a given productId.
         * To learn more about how recommendations are generated, see https://shopify.dev/themes/product-merchandising/recommendations.
         *
         * @example
         * const productId 'Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==';
         * client.product.fetchProductRecommendations(productId).then((products) => {
         *   // Do something with the products
         * });
         *
         * @param {String} productId The id of the product to fetch.
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
         */

      }, {
        key: 'fetchRecommendations',
        value: function fetchRecommendations(productId) {
          return this.graphQLClient.send(query$4, { productId: productId }).then(defaultResolver('productRecommendations')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: 'helpers',
        get: function get$$1() {
          return productHelpers;
        }
      }]);
      return ProductResource;
    }(Resource);

    function query$5(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function (root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function (node) {
          node.addFragment(spreads.CollectionFragment);
        });
      });
      return document;
    }

    function query$6(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id, variables.__defaultOperation__.productsFirst], function (root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function (node) {
          node.addFragment(spreads.CollectionFragment);
          node.addInlineFragmentOn("Collection", function (Collection) {
            Collection.add("products", {
              args: {
                first: variables.__defaultOperation__.productsFirst
              }
            }, function (products) {
              products.add("pageInfo", function (pageInfo) {
                pageInfo.add("hasNextPage");
                pageInfo.add("hasPreviousPage");
              });
              products.add("edges", function (edges) {
                edges.add("cursor");
                edges.add("node", function (node) {
                  node.addFragment(spreads.ProductFragment);
                });
              });
            });
          });
        });
      });
      return document;
    }

    function query$7(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
        root.add("collections", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function (collections) {
          collections.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          collections.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.CollectionFragment);
            });
          });
        });
      });
      return document;
    }

    function query$8(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse, variables.__defaultOperation__.productsFirst], function (root) {
        root.add("collections", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function (collections) {
          collections.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          collections.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.CollectionFragment);
              node.add("products", {
                args: {
                  first: variables.__defaultOperation__.productsFirst
                }
              }, function (products) {
                products.add("pageInfo", function (pageInfo) {
                  pageInfo.add("hasNextPage");
                  pageInfo.add("hasPreviousPage");
                });
                products.add("edges", function (edges) {
                  edges.add("cursor");
                  edges.add("node", function (node) {
                    node.addFragment(spreads.ProductFragment);
                  });
                });
              });
            });
          });
        });
      });
      return document;
    }

    function query$9(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.handle = client.variable("handle", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function (options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function (images) {
          images.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("url", {
                alias: "src"
              });
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function (variants) {
          variants.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.CollectionsProductsFragment = document.defineFragment("CollectionsProductsFragment", "Collection", function (root) {
        root.add("products", {
          args: {
            first: 20
          }
        }, function (products) {
          products.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.handle], function (root) {
        root.add("collectionByHandle", {
          args: {
            handle: variables.__defaultOperation__.handle
          }
        }, function (collectionByHandle) {
          collectionByHandle.addFragment(spreads.CollectionFragment);
          collectionByHandle.addFragment(spreads.CollectionsProductsFragment);
        });
      });
      return document;
    }

    // GraphQL
    /**
     * The JS Buy SDK collection resource
     * @class
     */

    var CollectionResource = function (_Resource) {
      inherits$1(CollectionResource, _Resource);

      function CollectionResource() {
        classCallCheck$1(this, CollectionResource);
        return possibleConstructorReturn$1(this, (CollectionResource.__proto__ || Object.getPrototypeOf(CollectionResource)).apply(this, arguments));
      }

      createClass$1(CollectionResource, [{
        key: 'fetchAll',


        /**
         * Fetches all collections on the shop, not including products.
         * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
         *
         * @example
         * client.collection.fetchAll().then((collections) => {
         *   // Do something with the collections
         * });
         *
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
         */
        value: function fetchAll() {
          var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

          return this.graphQLClient.send(query$7, { first: first }).then(defaultResolver('collections'));
        }

        /**
         * Fetches all collections on the shop, including products.
         *
         * @example
         * client.collection.fetchAllWithProducts().then((collections) => {
         *   // Do something with the collections
         * });
         *
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
         */

      }, {
        key: 'fetchAllWithProducts',
        value: function fetchAllWithProducts() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$first = _ref.first,
              first = _ref$first === undefined ? 20 : _ref$first,
              _ref$productsFirst = _ref.productsFirst,
              productsFirst = _ref$productsFirst === undefined ? 20 : _ref$productsFirst;

          return this.graphQLClient.send(query$8, { first: first, productsFirst: productsFirst }).then(defaultResolver('collections')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches a single collection by ID on the shop, not including products.
         * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
         *
         * @example
         * client.collection.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
         *   // Do something with the collection
         * });
         *
         * @param {String} id The id of the collection to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
         */

      }, {
        key: 'fetch',
        value: function fetch(id) {
          return this.graphQLClient.send(query$5, { id: id }).then(defaultResolver('node'));
        }

        /**
         * Fetches a single collection by ID on the shop, including products.
         *
         * @example
         * client.collection.fetchWithProducts('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
         *   // Do something with the collection
         * });
         *
         * @param {String} id The id of the collection to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
         */

      }, {
        key: 'fetchWithProducts',
        value: function fetchWithProducts(id) {
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref2$productsFirst = _ref2.productsFirst,
              productsFirst = _ref2$productsFirst === undefined ? 20 : _ref2$productsFirst;

          return this.graphQLClient.send(query$6, { id: id, productsFirst: productsFirst }).then(defaultResolver('node')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
        }

        /**
         * Fetches a collection by handle on the shop.
         *
         * @example
         * client.collection.fetchByHandle('my-collection').then((collection) => {
         *   // Do something with the collection
         * });
         *
         * @param {String} handle The handle of the collection to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
         */

      }, {
        key: 'fetchByHandle',
        value: function fetchByHandle(handle) {
          return this.graphQLClient.send(query$9, { handle: handle }).then(defaultResolver('collectionByHandle'));
        }

        /**
         * Fetches all collections on the shop that match the query.
         *
         * @example
         * client.collection.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((collections) => {
         *   // Do something with the first 10 collections sorted by title in ascending order
         * });
         *
         * @param {Object} [args] An object specifying the query data containing zero or more of:
         *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
         *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
         *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/collectionsortkeys|Collection Sort Keys}.
         *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#collections|here}
         *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
         * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
         */

      }, {
        key: 'fetchQuery',
        value: function fetchQuery() {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref3$first = _ref3.first,
              first = _ref3$first === undefined ? 20 : _ref3$first,
              _ref3$sortKey = _ref3.sortKey,
              sortKey = _ref3$sortKey === undefined ? 'ID' : _ref3$sortKey,
              query = _ref3.query,
              reverse = _ref3.reverse;

          return this.graphQLClient.send(query$7, {
            first: first,
            sortKey: sortKey,
            query: query,
            reverse: reverse
          }).then(defaultResolver('collections'));
        }
      }]);
      return CollectionResource;
    }(Resource);

    function query$10(client) {
      var document = client.document();
      document.addQuery(function (root) {
        root.add("shop", function (shop) {
          shop.add("paymentSettings", function (paymentSettings) {
            paymentSettings.add("enabledPresentmentCurrencies");
          });
          shop.add("description");
          shop.add("moneyFormat");
          shop.add("name");
          shop.add("primaryDomain", function (primaryDomain) {
            primaryDomain.add("host");
            primaryDomain.add("sslEnabled");
            primaryDomain.add("url");
          });
        });
      });
      return document;
    }

    function query$11(client) {
      var document = client.document();
      var spreads = {};
      spreads.PolicyFragment = document.defineFragment("PolicyFragment", "ShopPolicy", function (root) {
        root.add("id");
        root.add("title");
        root.add("url");
        root.add("body");
      });
      document.addQuery(function (root) {
        root.add("shop", function (shop) {
          shop.add("privacyPolicy", function (privacyPolicy) {
            privacyPolicy.addFragment(spreads.PolicyFragment);
          });
          shop.add("termsOfService", function (termsOfService) {
            termsOfService.addFragment(spreads.PolicyFragment);
          });
          shop.add("refundPolicy", function (refundPolicy) {
            refundPolicy.addFragment(spreads.PolicyFragment);
          });
        });
      });
      return document;
    }

    // GraphQL
    /**
     * The JS Buy SDK shop resource
     * @class
     */

    var ShopResource = function (_Resource) {
      inherits$1(ShopResource, _Resource);

      function ShopResource() {
        classCallCheck$1(this, ShopResource);
        return possibleConstructorReturn$1(this, (ShopResource.__proto__ || Object.getPrototypeOf(ShopResource)).apply(this, arguments));
      }

      createClass$1(ShopResource, [{
        key: 'fetchInfo',


        /**
         * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
         * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
         *
         * @example
         * client.shop.fetchInfo().then((shop) => {
         *   // Do something with the shop
         * });
         *
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
         */
        value: function fetchInfo() {
          return this.graphQLClient.send(query$10).then(defaultResolver('shop'));
        }

        /**
         * Fetches shop policies (privacy policy, terms of service and refund policy).
         *
         * @example
         * client.shop.fetchPolicies().then((shop) => {
         *   // Do something with the shop
         * });
         *
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
         */

      }, {
        key: 'fetchPolicies',
        value: function fetchPolicies() {
          return this.graphQLClient.send(query$11).then(defaultResolver('shop'));
        }
      }]);
      return ShopResource;
    }(Resource);

    function handleCheckoutMutation(mutationRootKey, client) {
      return function (_ref) {
        var _ref$data = _ref.data,
            data = _ref$data === undefined ? {} : _ref$data,
            errors = _ref.errors,
            _ref$model = _ref.model,
            model = _ref$model === undefined ? {} : _ref$model;

        var rootData = data[mutationRootKey];
        var rootModel = model[mutationRootKey];

        if (rootData && rootData.checkout) {
          return client.fetchAllPages(rootModel.checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
            rootModel.checkout.attrs.lineItems = lineItems;
            rootModel.checkout.errors = errors;
            rootModel.checkout.userErrors = rootModel.userErrors;

            return rootModel.checkout;
          });
        }

        if (errors && errors.length) {
          return Promise.reject(new Error(JSON.stringify(errors)));
        }

        if (rootData && rootData.checkoutUserErrors && rootData.checkoutUserErrors.length) {
          return Promise.reject(new Error(JSON.stringify(rootData.checkoutUserErrors)));
        }

        if (rootData && rootData.userErrors && rootData.userErrors.length) {
          return Promise.reject(new Error(JSON.stringify(rootData.userErrors)));
        }

        return Promise.reject(new Error("The " + mutationRootKey + " mutation failed due to an unknown error."));
      };
    }

    function query$12(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function (root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function (node) {
          node.addFragment(spreads.CheckoutFragment);
        });
      });
      return document;
    }

    function query$13(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.input = client.variable("input", "CheckoutCreateInput!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.input], function (root) {
        root.add("checkoutCreate", {
          args: {
            input: variables.__defaultOperation__.input
          }
        }, function (checkoutCreate) {
          checkoutCreate.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutCreate.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutCreate.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$14(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
        root.add("checkoutLineItemsAdd", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function (checkoutLineItemsAdd) {
          checkoutLineItemsAdd.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsAdd.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsAdd.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$15(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItemIds = client.variable("lineItemIds", "[ID!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItemIds], function (root) {
        root.add("checkoutLineItemsRemove", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItemIds: variables.__defaultOperation__.lineItemIds
          }
        }, function (checkoutLineItemsRemove) {
          checkoutLineItemsRemove.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsRemove.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$16(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
        root.add("checkoutLineItemsReplace", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function (checkoutLineItemsReplace) {
          checkoutLineItemsReplace.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsReplace.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$17(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemUpdateInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
        root.add("checkoutLineItemsUpdate", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function (checkoutLineItemsUpdate) {
          checkoutLineItemsUpdate.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsUpdate.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsUpdate.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$18(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutAttributesUpdateV2 = {};
      variables.checkoutAttributesUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      variables.checkoutAttributesUpdateV2.input = client.variable("input", "CheckoutAttributesUpdateV2Input!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutAttributesUpdateV2", [variables.checkoutAttributesUpdateV2.checkoutId, variables.checkoutAttributesUpdateV2.input], function (root) {
        root.add("checkoutAttributesUpdateV2", {
          args: {
            checkoutId: variables.checkoutAttributesUpdateV2.checkoutId,
            input: variables.checkoutAttributesUpdateV2.input
          }
        }, function (checkoutAttributesUpdateV2) {
          checkoutAttributesUpdateV2.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutAttributesUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutAttributesUpdateV2.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$19(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutDiscountCodeApplyV2 = {};
      variables.checkoutDiscountCodeApplyV2.discountCode = client.variable("discountCode", "String!");
      variables.checkoutDiscountCodeApplyV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutDiscountCodeApplyV2", [variables.checkoutDiscountCodeApplyV2.discountCode, variables.checkoutDiscountCodeApplyV2.checkoutId], function (root) {
        root.add("checkoutDiscountCodeApplyV2", {
          args: {
            discountCode: variables.checkoutDiscountCodeApplyV2.discountCode,
            checkoutId: variables.checkoutDiscountCodeApplyV2.checkoutId
          }
        }, function (checkoutDiscountCodeApplyV2) {
          checkoutDiscountCodeApplyV2.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutDiscountCodeApplyV2.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutDiscountCodeApplyV2.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$20(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutDiscountCodeRemove = {};
      variables.checkoutDiscountCodeRemove.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutDiscountCodeRemove", [variables.checkoutDiscountCodeRemove.checkoutId], function (root) {
        root.add("checkoutDiscountCodeRemove", {
          args: {
            checkoutId: variables.checkoutDiscountCodeRemove.checkoutId
          }
        }, function (checkoutDiscountCodeRemove) {
          checkoutDiscountCodeRemove.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutDiscountCodeRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutDiscountCodeRemove.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$21(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutGiftCardsAppend = {};
      variables.checkoutGiftCardsAppend.giftCardCodes = client.variable("giftCardCodes", "[String!]!");
      variables.checkoutGiftCardsAppend.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutGiftCardsAppend", [variables.checkoutGiftCardsAppend.giftCardCodes, variables.checkoutGiftCardsAppend.checkoutId], function (root) {
        root.add("checkoutGiftCardsAppend", {
          args: {
            giftCardCodes: variables.checkoutGiftCardsAppend.giftCardCodes,
            checkoutId: variables.checkoutGiftCardsAppend.checkoutId
          }
        }, function (checkoutGiftCardsAppend) {
          checkoutGiftCardsAppend.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutGiftCardsAppend.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutGiftCardsAppend.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$22(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutGiftCardRemoveV2 = {};
      variables.checkoutGiftCardRemoveV2.appliedGiftCardId = client.variable("appliedGiftCardId", "ID!");
      variables.checkoutGiftCardRemoveV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutGiftCardRemoveV2", [variables.checkoutGiftCardRemoveV2.appliedGiftCardId, variables.checkoutGiftCardRemoveV2.checkoutId], function (root) {
        root.add("checkoutGiftCardRemoveV2", {
          args: {
            appliedGiftCardId: variables.checkoutGiftCardRemoveV2.appliedGiftCardId,
            checkoutId: variables.checkoutGiftCardRemoveV2.checkoutId
          }
        }, function (checkoutGiftCardRemoveV2) {
          checkoutGiftCardRemoveV2.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutGiftCardRemoveV2.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutGiftCardRemoveV2.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$23(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutEmailUpdateV2 = {};
      variables.checkoutEmailUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      variables.checkoutEmailUpdateV2.email = client.variable("email", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutEmailUpdateV2", [variables.checkoutEmailUpdateV2.checkoutId, variables.checkoutEmailUpdateV2.email], function (root) {
        root.add("checkoutEmailUpdateV2", {
          args: {
            checkoutId: variables.checkoutEmailUpdateV2.checkoutId,
            email: variables.checkoutEmailUpdateV2.email
          }
        }, function (checkoutEmailUpdateV2) {
          checkoutEmailUpdateV2.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutEmailUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutEmailUpdateV2.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    function query$24(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutShippingAddressUpdateV2 = {};
      variables.checkoutShippingAddressUpdateV2.shippingAddress = client.variable("shippingAddress", "MailingAddressInput!");
      variables.checkoutShippingAddressUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price", function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("price", {
          alias: "priceV2"
        }, function (price) {
          price.add("amount");
          price.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice", function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("compareAtPrice", {
          alias: "compareAtPriceV2"
        }, function (compareAtPrice) {
          compareAtPrice.add("amount");
          compareAtPrice.add("currencyCode");
        });
        root.add("image", function (image) {
          image.add("id");
          image.add("url", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function (value) {
          value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
            MoneyV2.add("amount");
            MoneyV2.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
            PricingPercentageValue.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
          ManualDiscountApplication.add("title");
          ManualDiscountApplication.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
          DiscountCodeApplication.add("code");
          DiscountCodeApplication.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
          ScriptDiscountApplication.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
          AutomaticDiscountApplication.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
        root.add("amountUsed", function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("amountUsed", {
          alias: "amountUsedV2"
        }, function (amountUsed) {
          amountUsed.add("amount");
          amountUsed.add("currencyCode");
        });
        root.add("balance", function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("balance", {
          alias: "balanceV2"
        }, function (balance) {
          balance.add("amount");
          balance.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function (product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue", function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("paymentDue", {
          alias: "paymentDueV2"
        }, function (paymentDue) {
          paymentDue.add("amount");
          paymentDue.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax", function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("totalTax", {
          alias: "totalTaxV2"
        }, function (totalTax) {
          totalTax.add("amount");
          totalTax.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice", {
          alias: "subtotalPriceV2"
        }, function (subtotalPrice) {
          subtotalPrice.add("amount");
          subtotalPrice.add("currencyCode");
        });
        root.add("totalPrice", function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("totalPrice", {
          alias: "totalPriceV2"
        }, function (totalPrice) {
          totalPrice.add("amount");
          totalPrice.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function (discountApplications) {
          discountApplications.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function (edges) {
            edges.add("node", function (node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function (appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function (shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function (shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("price", {
            alias: "priceV2"
          }, function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function (customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function (order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice", function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("subtotalPrice", {
            alias: "subtotalPriceV2"
          }, function (subtotalPrice) {
            subtotalPrice.add("amount");
            subtotalPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalShippingPrice", {
            alias: "totalShippingPriceV2"
          }, function (totalShippingPrice) {
            totalShippingPrice.add("amount");
            totalShippingPrice.add("currencyCode");
          });
          order.add("totalTax", function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalTax", {
            alias: "totalTaxV2"
          }, function (totalTax) {
            totalTax.add("amount");
            totalTax.add("currencyCode");
          });
          order.add("totalPrice", function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("totalPrice", {
            alias: "totalPriceV2"
          }, function (totalPrice) {
            totalPrice.add("amount");
            totalPrice.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded", function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("totalRefunded", {
            alias: "totalRefundedV2"
          }, function (totalRefunded) {
            totalRefunded.add("amount");
            totalRefunded.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function (shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function (lineItems) {
            lineItems.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.add("title");
                node.add("variant", function (variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function (customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function (lineItems) {
          lineItems.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.add("id");
              node.add("title");
              node.add("variant", function (variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function (customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function (discountAllocations) {
                discountAllocations.add("allocatedAmount", function (allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function (discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutShippingAddressUpdateV2", [variables.checkoutShippingAddressUpdateV2.shippingAddress, variables.checkoutShippingAddressUpdateV2.checkoutId], function (root) {
        root.add("checkoutShippingAddressUpdateV2", {
          args: {
            shippingAddress: variables.checkoutShippingAddressUpdateV2.shippingAddress,
            checkoutId: variables.checkoutShippingAddressUpdateV2.checkoutId
          }
        }, function (checkoutShippingAddressUpdateV2) {
          checkoutShippingAddressUpdateV2.add("userErrors", function (userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutShippingAddressUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutShippingAddressUpdateV2.add("checkout", function (checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }

    // GraphQL
    /**
     * The JS Buy SDK checkout resource
     * @class
     */

    var CheckoutResource = function (_Resource) {
      inherits$1(CheckoutResource, _Resource);

      function CheckoutResource() {
        classCallCheck$1(this, CheckoutResource);
        return possibleConstructorReturn$1(this, (CheckoutResource.__proto__ || Object.getPrototypeOf(CheckoutResource)).apply(this, arguments));
      }

      createClass$1(CheckoutResource, [{
        key: 'fetch',


        /**
         * Fetches a checkout by ID.
         *
         * @example
         * client.checkout.fetch('FlZj9rZXlN5MDY4ZDFiZTUyZTUwNTE2MDNhZjg=').then((checkout) => {
         *   // Do something with the checkout
         * });
         *
         * @param {String} id The id of the checkout to fetch.
         * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the checkout.
         */
        value: function fetch(id) {
          var _this2 = this;

          return this.graphQLClient.send(query$12, { id: id }).then(defaultResolver('node')).then(function (checkout) {
            if (!checkout) {
              return null;
            }

            return _this2.graphQLClient.fetchAllPages(checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
              checkout.attrs.lineItems = lineItems;

              return checkout;
            });
          });
        }

        /**
         * Creates a checkout.
         *
         * @example
         * const input = {
         *   lineItems: [
         *     {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}
         *   ]
         * };
         *
         * client.checkout.create(input).then((checkout) => {
         *   // Do something with the newly created checkout
         * });
         *
         * @param {Object} [input] An input object containing zero or more of:
         *   @param {String} [input.email] An email connected to the checkout.
         *   @param {Object[]} [input.lineItems] A list of line items in the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
         *   @param {Object} [input.shippingAddress] A shipping address. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/mailingaddressinput|Storefront API reference} for valid input fields.
         *   @param {String} [input.note] A note for the checkout.
         *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
         *   @param {String} [input.presentmentCurrencyCode ] A presentment currency code. See the {@link https://help.shopify.com/en/api/storefront-api/reference/enum/currencycode|Storefront API reference} for valid currency code values.
         * @return {Promise|GraphModel} A promise resolving with the created checkout.
         */

      }, {
        key: 'create',
        value: function create() {
          var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          return this.graphQLClient.send(query$13, { input: input }).then(handleCheckoutMutation('checkoutCreate', this.graphQLClient));
        }

        /**
         * Replaces the value of checkout's custom attributes and/or note with values defined in the input
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};
         *
         * client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to update.
         * @param {Object} [input] An input object containing zero or more of:
         *   @param {Boolean} [input.allowPartialAddresses] An email connected to the checkout.
         *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
         *   @param {String} [input.note] A note for the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'updateAttributes',
        value: function updateAttributes(checkoutId) {
          var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.graphQLClient.send(query$18, { checkoutId: checkoutId, input: input }).then(handleCheckoutMutation('checkoutAttributesUpdateV2', this.graphQLClient));
        }

        /**
         * Replaces the value of checkout's email address
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const email = 'user@example.com';
         *
         * client.checkout.updateEmail(checkoutId, email).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to update.
         * @param {String} email The email address to apply to the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'updateEmail',
        value: function updateEmail(checkoutId, email) {
          return this.graphQLClient.send(query$23, { checkoutId: checkoutId, email: email }).then(handleCheckoutMutation('checkoutEmailUpdateV2', this.graphQLClient));
        }

        /**
         * Adds line items to an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
         *
         * client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to add line items to.
         * @param {Object[]} lineItems A list of line items to add to the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'addLineItems',
        value: function addLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$14, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsAdd', this.graphQLClient));
        }

        /**
         * Applies a discount to an existing checkout using a discount code.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const discountCode = 'best-discount-ever';
         *
         * client.checkout.addDiscount(checkoutId, discountCode).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to add discount to.
         * @param {String} discountCode The discount code to apply to the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'addDiscount',
        value: function addDiscount(checkoutId, discountCode) {
          return this.graphQLClient.send(query$19, { checkoutId: checkoutId, discountCode: discountCode }).then(handleCheckoutMutation('checkoutDiscountCodeApplyV2', this.graphQLClient));
        }

        /**
         * Removes the applied discount from an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         *
         * client.checkout.removeDiscount(checkoutId).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to remove the discount from.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'removeDiscount',
        value: function removeDiscount(checkoutId) {
          return this.graphQLClient.send(query$20, { checkoutId: checkoutId }).then(handleCheckoutMutation('checkoutDiscountCodeRemove', this.graphQLClient));
        }

        /**
         * Applies gift cards to an existing checkout using a list of gift card codes
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const giftCardCodes = ['6FD8853DAGAA949F'];
         *
         * client.checkout.addGiftCards(checkoutId, giftCardCodes).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to add gift cards to.
         * @param {String[]} giftCardCodes The gift card codes to apply to the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'addGiftCards',
        value: function addGiftCards(checkoutId, giftCardCodes) {
          return this.graphQLClient.send(query$21, { checkoutId: checkoutId, giftCardCodes: giftCardCodes }).then(handleCheckoutMutation('checkoutGiftCardsAppend', this.graphQLClient));
        }

        /**
         * Remove a gift card from an existing checkout
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const appliedGiftCardId = 'Z2lkOi8vc2hvcGlmeS9BcHBsaWVkR2lmdENhcmQvNDI4NTQ1ODAzMTI=';
         *
         * client.checkout.removeGiftCard(checkoutId, appliedGiftCardId).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to add gift cards to.
         * @param {String} appliedGiftCardId The gift card id to remove from the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'removeGiftCard',
        value: function removeGiftCard(checkoutId, appliedGiftCardId) {
          return this.graphQLClient.send(query$22, { checkoutId: checkoutId, appliedGiftCardId: appliedGiftCardId }).then(handleCheckoutMutation('checkoutGiftCardRemoveV2', this.graphQLClient));
        }

        /**
         * Removes line items from an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const lineItemIds = ['TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU='];
         *
         * client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to remove line items from.
         * @param {String[]} lineItemIds A list of the ids of line items to remove from the checkout.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'removeLineItems',
        value: function removeLineItems(checkoutId, lineItemIds) {
          return this.graphQLClient.send(query$15, { checkoutId: checkoutId, lineItemIds: lineItemIds }).then(handleCheckoutMutation('checkoutLineItemsRemove', this.graphQLClient));
        }

        /**
         * Replace line items on an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
         *
         * client.checkout.replaceLineItems(checkoutId, lineItems).then((checkout) => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to add line items to.
         * @param {Object[]} lineItems A list of line items to set on the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'replaceLineItems',
        value: function replaceLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$16, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsReplace', this.graphQLClient));
        }

        /**
         * Updates line items on an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const lineItems = [
         *   {
         *     id: 'TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU=',
         *     quantity: 5,
         *     variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg=='
         *   }
         * ];
         *
         * client.checkout.updateLineItems(checkoutId, lineItems).then(checkout => {
         *   // Do something with the updated checkout
         * });
         *
         * @param {String} checkoutId The ID of the checkout to update a line item on.
         * @param {Object[]} lineItems A list of line item information to update. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineitemupdateinput|Storefront API reference} for valid input fields for each line item.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'updateLineItems',
        value: function updateLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$17, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsUpdate', this.graphQLClient));
        }

        /**
         * Updates shipping address on an existing checkout.
         *
         * @example
         * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
         * const shippingAddress = {
         *    address1: 'Chestnut Street 92',
         *    address2: 'Apartment 2',
         *    city: 'Louisville',
         *    company: null,
         *    country: 'United States',
         *    firstName: 'Bob',
         *    lastName: 'Norman',
         *    phone: '555-625-1199',
         *    province: 'Kentucky',
         *    zip: '40202'
         *  };
         *
         * client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
         *   // Do something with the updated checkout
         * });
         *
         * @param  {String} checkoutId The ID of the checkout to update shipping address.
         * @param  {Object} shippingAddress A shipping address.
         * @return {Promise|GraphModel} A promise resolving with the updated checkout.
         */

      }, {
        key: 'updateShippingAddress',
        value: function updateShippingAddress(checkoutId, shippingAddress) {
          return this.graphQLClient.send(query$24, { checkoutId: checkoutId, shippingAddress: shippingAddress }).then(handleCheckoutMutation('checkoutShippingAddressUpdateV2', this.graphQLClient));
        }
      }]);
      return CheckoutResource;
    }(Resource);

    /**
     * @namespace ImageHelpers
     */
    var imageHelpers = {

      /**
       * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
       * Images do not scale up.
       *
       * @example
       * const url = client.image.helpers.imageForSize(product.variants[0].image, {maxWidth: 50, maxHeight: 50});
       *
       * @memberof ImageHelpers
       * @method imageForSize
       * @param {Object} image The original image model to generate the image src for.
       * @param {Object} options An options object containing:
       *  @param {Integer} options.maxWidth The maximum width for the image.
       *  @param {Integer} options.maxHeight The maximum height for the image.
       * @return {String} The image src for the resized image.
       */
      imageForSize: function imageForSize(image, _ref) {
        var maxWidth = _ref.maxWidth,
            maxHeight = _ref.maxHeight;

        var splitUrl = image.src.split('?');
        var notQuery = splitUrl[0];
        var query = splitUrl[1] ? '?' + splitUrl[1] : '';

        // Use the section before the query
        var imageTokens = notQuery.split('.');

        // Take the token before the file extension and append the dimensions
        var imagePathIndex = imageTokens.length - 2;

        imageTokens[imagePathIndex] = imageTokens[imagePathIndex] + '_' + maxWidth + 'x' + maxHeight;

        return '' + imageTokens.join('.') + query;
      }
    };

    /**
     * The JS Buy SDK image resource
     * @class
     */

    var ImageResource = function (_Resource) {
      inherits$1(ImageResource, _Resource);

      function ImageResource() {
        classCallCheck$1(this, ImageResource);
        return possibleConstructorReturn$1(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).apply(this, arguments));
      }

      createClass$1(ImageResource, [{
        key: 'helpers',
        get: function get$$1() {
          return imageHelpers;
        }
      }]);
      return ImageResource;
    }(Resource);

    var version = "2.19.0";

    var AppliedGiftCard = {
      "name": "AppliedGiftCard",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "amountUsed": "MoneyV2",
        "balance": "MoneyV2",
        "id": "ID",
        "lastCharacters": "String",
        "presentmentAmountUsed": "MoneyV2"
      },
      "implementsNode": true
    };

    var Attribute = {
      "name": "Attribute",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "key": "String",
        "value": "String"
      },
      "implementsNode": false
    };

    var AutomaticDiscountApplication = {
      "name": "AutomaticDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "title": "String"
      },
      "implementsNode": false
    };

    var Boolean$1 = {
      "name": "Boolean",
      "kind": "SCALAR"
    };

    var Checkout = {
      "name": "Checkout",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "appliedGiftCards": "AppliedGiftCard",
        "completedAt": "DateTime",
        "createdAt": "DateTime",
        "currencyCode": "CurrencyCode",
        "customAttributes": "Attribute",
        "discountApplications": "DiscountApplicationConnection",
        "email": "String",
        "id": "ID",
        "lineItems": "CheckoutLineItemConnection",
        "lineItemsSubtotalPrice": "MoneyV2",
        "note": "String",
        "order": "Order",
        "orderStatusUrl": "URL",
        "paymentDue": "MoneyV2",
        "ready": "Boolean",
        "requiresShipping": "Boolean",
        "shippingAddress": "MailingAddress",
        "shippingLine": "ShippingRate",
        "subtotalPrice": "MoneyV2",
        "taxExempt": "Boolean",
        "taxesIncluded": "Boolean",
        "totalPrice": "MoneyV2",
        "totalTax": "MoneyV2",
        "updatedAt": "DateTime",
        "webUrl": "URL"
      },
      "implementsNode": true
    };

    var CheckoutAttributesUpdateV2Payload = {
      "name": "CheckoutAttributesUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutCreatePayload = {
      "name": "CheckoutCreatePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutDiscountCodeApplyV2Payload = {
      "name": "CheckoutDiscountCodeApplyV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutDiscountCodeRemovePayload = {
      "name": "CheckoutDiscountCodeRemovePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutEmailUpdateV2Payload = {
      "name": "CheckoutEmailUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutErrorCode = {
      "name": "CheckoutErrorCode",
      "kind": "ENUM"
    };

    var CheckoutGiftCardRemoveV2Payload = {
      "name": "CheckoutGiftCardRemoveV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutGiftCardsAppendPayload = {
      "name": "CheckoutGiftCardsAppendPayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutLineItem = {
      "name": "CheckoutLineItem",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "customAttributes": "Attribute",
        "discountAllocations": "DiscountAllocation",
        "id": "ID",
        "quantity": "Int",
        "title": "String",
        "variant": "ProductVariant"
      },
      "implementsNode": true
    };

    var CheckoutLineItemConnection = {
      "name": "CheckoutLineItemConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "CheckoutLineItemEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var CheckoutLineItemEdge = {
      "name": "CheckoutLineItemEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "CheckoutLineItem"
      },
      "implementsNode": false
    };

    var CheckoutLineItemsAddPayload = {
      "name": "CheckoutLineItemsAddPayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutLineItemsRemovePayload = {
      "name": "CheckoutLineItemsRemovePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutLineItemsReplacePayload = {
      "name": "CheckoutLineItemsReplacePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "userErrors": "CheckoutUserError"
      },
      "implementsNode": false
    };

    var CheckoutLineItemsUpdatePayload = {
      "name": "CheckoutLineItemsUpdatePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutShippingAddressUpdateV2Payload = {
      "name": "CheckoutShippingAddressUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };

    var CheckoutUserError = {
      "name": "CheckoutUserError",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "code": "CheckoutErrorCode",
        "field": "String",
        "message": "String"
      },
      "implementsNode": false
    };

    var Collection = {
      "name": "Collection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "descriptionHtml": "HTML",
        "handle": "String",
        "id": "ID",
        "image": "Image",
        "products": "ProductConnection",
        "title": "String",
        "updatedAt": "DateTime"
      },
      "implementsNode": true
    };

    var CollectionConnection = {
      "name": "CollectionConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "CollectionEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var CollectionEdge = {
      "name": "CollectionEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Collection"
      },
      "implementsNode": false
    };

    var CountryCode = {
      "name": "CountryCode",
      "kind": "ENUM"
    };

    var CurrencyCode = {
      "name": "CurrencyCode",
      "kind": "ENUM"
    };

    var DateTime = {
      "name": "DateTime",
      "kind": "SCALAR"
    };

    var Decimal = {
      "name": "Decimal",
      "kind": "SCALAR"
    };

    var DiscountAllocation = {
      "name": "DiscountAllocation",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "allocatedAmount": "MoneyV2",
        "discountApplication": "DiscountApplication"
      },
      "implementsNode": false
    };

    var DiscountApplication = {
      "name": "DiscountApplication",
      "kind": "INTERFACE",
      "fieldBaseTypes": {
        "allocationMethod": "DiscountApplicationAllocationMethod",
        "targetSelection": "DiscountApplicationTargetSelection",
        "targetType": "DiscountApplicationTargetType",
        "value": "PricingValue"
      },
      "possibleTypes": ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"]
    };

    var DiscountApplicationAllocationMethod = {
      "name": "DiscountApplicationAllocationMethod",
      "kind": "ENUM"
    };

    var DiscountApplicationConnection = {
      "name": "DiscountApplicationConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "DiscountApplicationEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var DiscountApplicationEdge = {
      "name": "DiscountApplicationEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "node": "DiscountApplication"
      },
      "implementsNode": false
    };

    var DiscountApplicationTargetSelection = {
      "name": "DiscountApplicationTargetSelection",
      "kind": "ENUM"
    };

    var DiscountApplicationTargetType = {
      "name": "DiscountApplicationTargetType",
      "kind": "ENUM"
    };

    var DiscountCodeApplication = {
      "name": "DiscountCodeApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "applicable": "Boolean",
        "code": "String"
      },
      "implementsNode": false
    };

    var Domain = {
      "name": "Domain",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "host": "String",
        "sslEnabled": "Boolean",
        "url": "URL"
      },
      "implementsNode": false
    };

    var Float = {
      "name": "Float",
      "kind": "SCALAR"
    };

    var HTML = {
      "name": "HTML",
      "kind": "SCALAR"
    };

    var ID = {
      "name": "ID",
      "kind": "SCALAR"
    };

    var Image = {
      "name": "Image",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "altText": "String",
        "height": "Int",
        "id": "ID",
        "url": "URL",
        "width": "Int"
      },
      "implementsNode": false
    };

    var ImageConnection = {
      "name": "ImageConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ImageEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var ImageEdge = {
      "name": "ImageEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Image"
      },
      "implementsNode": false
    };

    var Int = {
      "name": "Int",
      "kind": "SCALAR"
    };

    var MailingAddress = {
      "name": "MailingAddress",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "address1": "String",
        "address2": "String",
        "city": "String",
        "company": "String",
        "country": "String",
        "countryCodeV2": "CountryCode",
        "firstName": "String",
        "formatted": "String",
        "id": "ID",
        "lastName": "String",
        "latitude": "Float",
        "longitude": "Float",
        "name": "String",
        "phone": "String",
        "province": "String",
        "provinceCode": "String",
        "zip": "String"
      },
      "implementsNode": true
    };

    var ManualDiscountApplication = {
      "name": "ManualDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "title": "String"
      },
      "implementsNode": false
    };

    var MoneyV2 = {
      "name": "MoneyV2",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "amount": "Decimal",
        "currencyCode": "CurrencyCode"
      },
      "implementsNode": false
    };

    var Mutation$1 = {
      "name": "Mutation",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Payload",
        "checkoutCreate": "CheckoutCreatePayload",
        "checkoutDiscountCodeApplyV2": "CheckoutDiscountCodeApplyV2Payload",
        "checkoutDiscountCodeRemove": "CheckoutDiscountCodeRemovePayload",
        "checkoutEmailUpdateV2": "CheckoutEmailUpdateV2Payload",
        "checkoutGiftCardRemoveV2": "CheckoutGiftCardRemoveV2Payload",
        "checkoutGiftCardsAppend": "CheckoutGiftCardsAppendPayload",
        "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
        "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
        "checkoutLineItemsReplace": "CheckoutLineItemsReplacePayload",
        "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
        "checkoutShippingAddressUpdateV2": "CheckoutShippingAddressUpdateV2Payload"
      },
      "implementsNode": false,
      "relayInputObjectBaseTypes": {
        "cartCreate": "CartInput",
        "cartMetafieldDelete": "CartMetafieldDeleteInput",
        "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Input",
        "checkoutCreate": "CheckoutCreateInput",
        "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
        "customerActivate": "CustomerActivateInput",
        "customerCreate": "CustomerCreateInput",
        "customerReset": "CustomerResetInput"
      }
    };

    var Node$1 = {
      "name": "Node",
      "kind": "INTERFACE",
      "fieldBaseTypes": {},
      "possibleTypes": ["AppliedGiftCard", "Article", "Blog", "Cart", "CartLine", "Checkout", "CheckoutLineItem", "Collection", "Comment", "ExternalVideo", "GenericFile", "Location", "MailingAddress", "Market", "MediaImage", "MediaPresentation", "Menu", "MenuItem", "Metafield", "Metaobject", "Model3d", "Order", "Page", "Payment", "Product", "ProductOption", "ProductVariant", "Shop", "ShopPolicy", "UrlRedirect", "Video"]
    };

    var Order = {
      "name": "Order",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "currencyCode": "CurrencyCode",
        "customerUrl": "URL",
        "id": "ID",
        "lineItems": "OrderLineItemConnection",
        "orderNumber": "Int",
        "processedAt": "DateTime",
        "shippingAddress": "MailingAddress",
        "subtotalPrice": "MoneyV2",
        "totalPrice": "MoneyV2",
        "totalRefunded": "MoneyV2",
        "totalShippingPrice": "MoneyV2",
        "totalTax": "MoneyV2"
      },
      "implementsNode": true
    };

    var OrderLineItem = {
      "name": "OrderLineItem",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "customAttributes": "Attribute",
        "quantity": "Int",
        "title": "String",
        "variant": "ProductVariant"
      },
      "implementsNode": false
    };

    var OrderLineItemConnection = {
      "name": "OrderLineItemConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "OrderLineItemEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var OrderLineItemEdge = {
      "name": "OrderLineItemEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "OrderLineItem"
      },
      "implementsNode": false
    };

    var PageInfo = {
      "name": "PageInfo",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "hasNextPage": "Boolean",
        "hasPreviousPage": "Boolean"
      },
      "implementsNode": false
    };

    var PaymentSettings = {
      "name": "PaymentSettings",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "enabledPresentmentCurrencies": "CurrencyCode"
      },
      "implementsNode": false
    };

    var PricingPercentageValue = {
      "name": "PricingPercentageValue",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "percentage": "Float"
      },
      "implementsNode": false
    };

    var PricingValue = {
      "name": "PricingValue",
      "kind": "UNION"
    };

    var Product = {
      "name": "Product",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "availableForSale": "Boolean",
        "createdAt": "DateTime",
        "description": "String",
        "descriptionHtml": "HTML",
        "handle": "String",
        "id": "ID",
        "images": "ImageConnection",
        "onlineStoreUrl": "URL",
        "options": "ProductOption",
        "productType": "String",
        "publishedAt": "DateTime",
        "title": "String",
        "updatedAt": "DateTime",
        "variants": "ProductVariantConnection",
        "vendor": "String"
      },
      "implementsNode": true
    };

    var ProductConnection = {
      "name": "ProductConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ProductEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var ProductEdge = {
      "name": "ProductEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Product"
      },
      "implementsNode": false
    };

    var ProductOption = {
      "name": "ProductOption",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "name": "String",
        "values": "String"
      },
      "implementsNode": true
    };

    var ProductVariant = {
      "name": "ProductVariant",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "availableForSale": "Boolean",
        "compareAtPrice": "MoneyV2",
        "id": "ID",
        "image": "Image",
        "price": "MoneyV2",
        "product": "Product",
        "selectedOptions": "SelectedOption",
        "sku": "String",
        "title": "String",
        "unitPrice": "MoneyV2",
        "unitPriceMeasurement": "UnitPriceMeasurement",
        "weight": "Float"
      },
      "implementsNode": true
    };

    var ProductVariantConnection = {
      "name": "ProductVariantConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ProductVariantEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };

    var ProductVariantEdge = {
      "name": "ProductVariantEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "ProductVariant"
      },
      "implementsNode": false
    };

    var QueryRoot = {
      "name": "QueryRoot",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "collectionByHandle": "Collection",
        "collections": "CollectionConnection",
        "node": "Node",
        "nodes": "Node",
        "productByHandle": "Product",
        "productRecommendations": "Product",
        "products": "ProductConnection",
        "shop": "Shop"
      },
      "implementsNode": false
    };

    var ScriptDiscountApplication = {
      "name": "ScriptDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "title": "String"
      },
      "implementsNode": false
    };

    var SelectedOption = {
      "name": "SelectedOption",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "name": "String",
        "value": "String"
      },
      "implementsNode": false
    };

    var ShippingRate = {
      "name": "ShippingRate",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "handle": "String",
        "price": "MoneyV2",
        "title": "String"
      },
      "implementsNode": false
    };

    var Shop = {
      "name": "Shop",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "moneyFormat": "String",
        "name": "String",
        "paymentSettings": "PaymentSettings",
        "primaryDomain": "Domain",
        "privacyPolicy": "ShopPolicy",
        "refundPolicy": "ShopPolicy",
        "termsOfService": "ShopPolicy"
      },
      "implementsNode": true
    };

    var ShopPolicy = {
      "name": "ShopPolicy",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "body": "String",
        "id": "ID",
        "title": "String",
        "url": "URL"
      },
      "implementsNode": true
    };

    var String$1 = {
      "name": "String",
      "kind": "SCALAR"
    };

    var URL$1 = {
      "name": "URL",
      "kind": "SCALAR"
    };

    var UnitPriceMeasurement = {
      "name": "UnitPriceMeasurement",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "measuredType": "UnitPriceMeasurementMeasuredType",
        "quantityUnit": "UnitPriceMeasurementMeasuredUnit",
        "quantityValue": "Float",
        "referenceUnit": "UnitPriceMeasurementMeasuredUnit",
        "referenceValue": "Int"
      },
      "implementsNode": false
    };

    var UnitPriceMeasurementMeasuredType = {
      "name": "UnitPriceMeasurementMeasuredType",
      "kind": "ENUM"
    };

    var UnitPriceMeasurementMeasuredUnit = {
      "name": "UnitPriceMeasurementMeasuredUnit",
      "kind": "ENUM"
    };

    var UserError = {
      "name": "UserError",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "field": "String",
        "message": "String"
      },
      "implementsNode": false
    };

    var Types = {
      types: {}
    };
    Types.types["AppliedGiftCard"] = AppliedGiftCard;
    Types.types["Attribute"] = Attribute;
    Types.types["AutomaticDiscountApplication"] = AutomaticDiscountApplication;
    Types.types["Boolean"] = Boolean$1;
    Types.types["Checkout"] = Checkout;
    Types.types["CheckoutAttributesUpdateV2Payload"] = CheckoutAttributesUpdateV2Payload;
    Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload;
    Types.types["CheckoutDiscountCodeApplyV2Payload"] = CheckoutDiscountCodeApplyV2Payload;
    Types.types["CheckoutDiscountCodeRemovePayload"] = CheckoutDiscountCodeRemovePayload;
    Types.types["CheckoutEmailUpdateV2Payload"] = CheckoutEmailUpdateV2Payload;
    Types.types["CheckoutErrorCode"] = CheckoutErrorCode;
    Types.types["CheckoutGiftCardRemoveV2Payload"] = CheckoutGiftCardRemoveV2Payload;
    Types.types["CheckoutGiftCardsAppendPayload"] = CheckoutGiftCardsAppendPayload;
    Types.types["CheckoutLineItem"] = CheckoutLineItem;
    Types.types["CheckoutLineItemConnection"] = CheckoutLineItemConnection;
    Types.types["CheckoutLineItemEdge"] = CheckoutLineItemEdge;
    Types.types["CheckoutLineItemsAddPayload"] = CheckoutLineItemsAddPayload;
    Types.types["CheckoutLineItemsRemovePayload"] = CheckoutLineItemsRemovePayload;
    Types.types["CheckoutLineItemsReplacePayload"] = CheckoutLineItemsReplacePayload;
    Types.types["CheckoutLineItemsUpdatePayload"] = CheckoutLineItemsUpdatePayload;
    Types.types["CheckoutShippingAddressUpdateV2Payload"] = CheckoutShippingAddressUpdateV2Payload;
    Types.types["CheckoutUserError"] = CheckoutUserError;
    Types.types["Collection"] = Collection;
    Types.types["CollectionConnection"] = CollectionConnection;
    Types.types["CollectionEdge"] = CollectionEdge;
    Types.types["CountryCode"] = CountryCode;
    Types.types["CurrencyCode"] = CurrencyCode;
    Types.types["DateTime"] = DateTime;
    Types.types["Decimal"] = Decimal;
    Types.types["DiscountAllocation"] = DiscountAllocation;
    Types.types["DiscountApplication"] = DiscountApplication;
    Types.types["DiscountApplicationAllocationMethod"] = DiscountApplicationAllocationMethod;
    Types.types["DiscountApplicationConnection"] = DiscountApplicationConnection;
    Types.types["DiscountApplicationEdge"] = DiscountApplicationEdge;
    Types.types["DiscountApplicationTargetSelection"] = DiscountApplicationTargetSelection;
    Types.types["DiscountApplicationTargetType"] = DiscountApplicationTargetType;
    Types.types["DiscountCodeApplication"] = DiscountCodeApplication;
    Types.types["Domain"] = Domain;
    Types.types["Float"] = Float;
    Types.types["HTML"] = HTML;
    Types.types["ID"] = ID;
    Types.types["Image"] = Image;
    Types.types["ImageConnection"] = ImageConnection;
    Types.types["ImageEdge"] = ImageEdge;
    Types.types["Int"] = Int;
    Types.types["MailingAddress"] = MailingAddress;
    Types.types["ManualDiscountApplication"] = ManualDiscountApplication;
    Types.types["MoneyV2"] = MoneyV2;
    Types.types["Mutation"] = Mutation$1;
    Types.types["Node"] = Node$1;
    Types.types["Order"] = Order;
    Types.types["OrderLineItem"] = OrderLineItem;
    Types.types["OrderLineItemConnection"] = OrderLineItemConnection;
    Types.types["OrderLineItemEdge"] = OrderLineItemEdge;
    Types.types["PageInfo"] = PageInfo;
    Types.types["PaymentSettings"] = PaymentSettings;
    Types.types["PricingPercentageValue"] = PricingPercentageValue;
    Types.types["PricingValue"] = PricingValue;
    Types.types["Product"] = Product;
    Types.types["ProductConnection"] = ProductConnection;
    Types.types["ProductEdge"] = ProductEdge;
    Types.types["ProductOption"] = ProductOption;
    Types.types["ProductVariant"] = ProductVariant;
    Types.types["ProductVariantConnection"] = ProductVariantConnection;
    Types.types["ProductVariantEdge"] = ProductVariantEdge;
    Types.types["QueryRoot"] = QueryRoot;
    Types.types["ScriptDiscountApplication"] = ScriptDiscountApplication;
    Types.types["SelectedOption"] = SelectedOption;
    Types.types["ShippingRate"] = ShippingRate;
    Types.types["Shop"] = Shop;
    Types.types["ShopPolicy"] = ShopPolicy;
    Types.types["String"] = String$1;
    Types.types["URL"] = URL$1;
    Types.types["UnitPriceMeasurement"] = UnitPriceMeasurement;
    Types.types["UnitPriceMeasurementMeasuredType"] = UnitPriceMeasurementMeasuredType;
    Types.types["UnitPriceMeasurementMeasuredUnit"] = UnitPriceMeasurementMeasuredUnit;
    Types.types["UserError"] = UserError;
    Types.queryType = "QueryRoot";
    Types.mutationType = "Mutation";
    Types.subscriptionType = null;

    function recursivelyFreezeObject(structure) {
      Object.getOwnPropertyNames(structure).forEach(function (key) {
        var value = structure[key];
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
          recursivelyFreezeObject(value);
        }
      });
      Object.freeze(structure);
      return structure;
    }

    var types = recursivelyFreezeObject(Types);

    // GraphQL
    /**
     * The JS Buy SDK Client.
     * @class
     *
     * @property {ProductResource} product The property under which product fetching methods live.
     * @property {CollectionResource} collection The property under which collection fetching methods live.
     * @property {ShopResource} shop The property under which shop fetching methods live.
     * @property {CheckoutResource} checkout The property under which shop fetching and mutating methods live.
     * @property {ImageResource} image The property under which image helper methods live.
     */

    var Client = function () {
      createClass$1(Client, null, [{
        key: 'buildClient',


        /**
         * Primary entry point for building a new Client.
         */
        value: function buildClient(config, fetchFunction) {
          var newConfig = new Config(config);
          var client = new Client(newConfig, Client$2, fetchFunction);

          client.config = newConfig;

          return client;
        }

        /**
         * @constructs Client
         * @param {Config} config An instance of {@link Config} used to configure the Client.
         */

      }]);

      function Client(config) {
        var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client$2;
        var fetchFunction = arguments[2];
        classCallCheck$1(this, Client);

        var url = 'https://' + config.domain + '/api/' + config.apiVersion + '/graphql';

        var headers = {
          'X-SDK-Variant': 'javascript',
          'X-SDK-Version': version,
          'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken
        };

        if (config.source) {
          headers['X-SDK-Variant-Source'] = config.source;
        }

        var languageHeader = config.language ? config.language : '*';

        headers['Accept-Language'] = languageHeader;

        if (fetchFunction) {
          headers['Content-Type'] = 'application/json';
          headers.Accept = 'application/json';

          this.graphQLClient = new GraphQLClientClass(types, {
            fetcher: function fetcher(graphQLParams) {
              return fetchFunction(url, {
                body: JSON.stringify(graphQLParams),
                method: 'POST',
                mode: 'cors',
                headers: headers
              }).then(function (response) {
                return response.json();
              });
            }
          });
        } else {
          this.graphQLClient = new GraphQLClientClass(types, {
            url: url,
            fetcherOptions: { headers: headers }
          });
        }

        this.product = new ProductResource(this.graphQLClient);
        this.collection = new CollectionResource(this.graphQLClient);
        this.shop = new ShopResource(this.graphQLClient);
        this.checkout = new CheckoutResource(this.graphQLClient);
        this.image = new ImageResource(this.graphQLClient);
      }

      /**
       * Fetches the next page of models
       *
       * @example
       * client.fetchNextPage(products).then((nextProducts) => {
       *   // Do something with the products
       * });
       *
       * @param {models} [Array] The paginated set to fetch the next page of
       * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the type provided.
       */


      createClass$1(Client, [{
        key: 'fetchNextPage',
        value: function fetchNextPage(models) {
          return this.graphQLClient.fetchNextPage(models);
        }
      }]);
      return Client;
    }();

    class ShopifyAdapter {
        constructor({ domain, storefrontAccessToken }) {
            this._shopifyClient = Client.buildClient({
                domain,
                storefrontAccessToken
            });
        }
        async fetchEverything() {
            try {
                const collections = await this._shopifyClient.collection
                    .fetchAllWithProducts({
                    first: 249,
                    productsFirst: 249,
                });
                let products = [];
                for (const collection of collections) {
                    for (const shopifyProduct of collection.products) {
                        const product = products.find(product => product.id === shopifyProduct.id);
                        // if the product is already known, add the collection id
                        if (product) {
                            const existingCollectionId = product.collections.find(id => id === collection.id);
                            if (!existingCollectionId)
                                product.collections.push(collection.id);
                        }
                        // else, add the new product to the products array
                        else {
                            const product = this._shopifyProductToShopperProduct(shopifyProduct, collection.id);
                            products.push(product);
                        }
                    }
                }
                return {
                    products,
                    collectionIds: collections.map((collection) => collection.id)
                };
            }
            catch (error) {
                error.message = "shopify error" + error.message;
                throw error;
            }
        }
        async checkout(items) {
            const checkout = await this._shopifyClient.checkout.create({
                lineItems: items.map(item => ({
                    variantId: item.product.firstVariantId,
                    quantity: item.quantity
                }))
            });
            return checkout.webUrl;
        }
        _shopifyProductToShopperProduct(shopifyProduct, collectionId) {
            var _a;
            const [firstVariant] = shopifyProduct.variants;
            function parsePrice({ amount }) {
                return Number(amount);
            }
            return {
                id: shopifyProduct.id,
                available: shopifyProduct.availableForSale,
                value: parsePrice(firstVariant.price),
                comparedValue: firstVariant.compareAtPrice
                    ? parsePrice(firstVariant.compareAtPrice)
                    : null,
                title: shopifyProduct.title,
                description: shopifyProduct.descriptionHtml,
                collections: collectionId ? [collectionId] : [],
                firstVariantId: firstVariant.id,
                image: firstVariant.image
                    ? {
                        alt: (_a = firstVariant.image.alt) !== null && _a !== void 0 ? _a : "",
                        src: firstVariant.image.src,
                    }
                    : null,
            };
        }
    }

    async function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    class MockAdapter extends ShopifyAdapter {
        constructor() {
            super({ domain: "", storefrontAccessToken: "" });
        }
    }
    class MockPassingShopifyAdapter extends MockAdapter {
        async fetchEverything() {
            return { "products": [{ "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMjMyMTQ1OTkx", "available": true, "value": 3, "title": "Crumble-top Banana-muffin", "description": "", "collections": ["Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MDUxOQ==", "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="], "firstVariantId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjIyNTYyMjIxNQ==", "comparedValue": 8 }, { "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMjMyMTYyMTgz", "available": true, "value": 5.25, "title": "Avocado Breakfast Toast", "description": "<p>Enjoy a <strong>fresh</strong> start to the day with this simple <em>homestyle</em> creation</p>\n<p>Sourdough, avocado, cherry tomatoes</p>", "collections": ["Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="], "firstVariantId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjIyNTY0ODMyNw==", "comparedValue": null }, { "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMjMyMTUzNTQz", "available": false, "value": 6.5, "title": "Chocolate Soufflé", "description": "", "collections": ["Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="], "firstVariantId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjIyNTYzNDE4Mw==", "comparedValue": null }], "collectionIds": ["Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MDUxOQ==", "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="] };
        }
        async checkout() {
            return "#mock-checkout-link";
        }
    }
    class MockFailingShopifyAdapter extends MockAdapter {
        async fetchEverything() {
            throw new Error("mock failure");
        }
        async checkout() {
            throw new Error("mock failure");
        }
    }
    function prepSlowAdapter({ ms, Adapter, }) {
        return class MockSlowShopifyAdapter extends Adapter {
            async fetchEverything() {
                await wait(ms);
                return Adapter.prototype.fetchEverything.call(this);
                // // HACK makes Edge 18 work ¯\_(ツ)_/¯
                // // supposed to be this:
                // return super.fetchEverything()
            }
            async checkout(items) {
                await wait(ms);
                return Adapter.prototype.checkout.call(this, items);
                // // HACK makes Edge 18 work ¯\_(ツ)_/¯
                // // supposed to be this:
                // return super.checkout(items)
            }
        };
    }

    const anoop = async () => { };
    function asyncHitch(handler, { before = anoop, after = anoop }) {
        return (async (...args) => {
            await before();
            const result = await handler(...args);
            await after();
            return result;
        });
    }

    function pubsub() {
        let listeners = [];
        return {
            publish: (async (...args) => {
                const operations = listeners.map(listener => listener(...args));
                await Promise.all(operations);
            }),
            subscribe(func) {
                listeners.push(func);
                return () => {
                    listeners = listeners.filter(listener => listener !== func);
                };
            }
        };
    }
    /**
     * Produce a "reader" for a given state object
     * - a reader is a pubsub context (controls to publish/subscribe to changes)
     */
    function makeReader(state) {
        const { publish, subscribe } = pubsub();
        return {
            reader: {
                subscribe,
                get state() { return Object.freeze({ ...state }); },
            },
            update: () => publish(Object.freeze({ ...state })),
        };
    }

    function objectMap$1(input, mapper) {
        const output = {};
        for (const [key, value] of Object.entries(input))
            output[key] = mapper(value, key);
        return output;
    }

    function prepareActions({ state, update, getters, checkout, defaultQuantityMax, }) {
        function zeroAllQuantity() {
            for (const item of state.catalog)
                item.quantity = 0;
        }
        return {
            async addToCart(item) {
                item.quantity = (item.quantity < 1)
                    ? 1
                    : item.quantity;
                state.checkedOut = false;
            },
            async setItemQuantity(item, quantity) {
                item.quantity = quantity;
                state.checkedOut = false;
            },
            async clearCart() {
                zeroAllQuantity();
                state.checkedOut = false;
            },
            async checkout({ checkoutInSameWindow }) {
                const checkoutLocation = checkoutInSameWindow
                    ? window.location
                    : (() => {
                        const checkoutWindow = window.open("", "_blank");
                        checkoutWindow.document.write(`loading checkout... if you are experiencing issues, please contact support`);
                        return checkoutWindow.location;
                    })();
                state.checkoutInProgress = true;
                update();
                const url = await checkout(getters.itemsInCart);
                state.checkoutInProgress = false;
                state.checkedOut = true;
                update();
                zeroAllQuantity();
                checkoutLocation.href = url;
            },
            async setError(message) {
                state.error = message;
                state.catalog = [];
                state.checkedOut = false;
            },
            async setShopifyResults({ products }) {
                state.catalog = products.map(product => ({
                    product,
                    quantity: 0,
                    quantityMin: 1,
                    quantityMax: defaultQuantityMax,
                }));
                state.checkedOut = false;
            }
        };
    }

    function prepareStateAndGetters() {
        const state = {
            error: "",
            catalog: [],
            checkedOut: false,
            checkoutInProgress: false,
        };
        const getters = {
            get itemsInCart() {
                return state.catalog.filter(item => item.quantity > 0);
            },
            get cartValue() {
                return getters.itemsInCart.reduce((subtotal, item) => subtotal + (item.product.value * item.quantity), 0);
            },
            get cartQuantity() {
                return (() => {
                    let sum = 0;
                    for (const item of getters.itemsInCart)
                        sum += item.quantity;
                    return sum;
                })();
            },
            getUnitValue(item) {
                return item.product.value;
            },
            getLineValue(item) {
                return item.product.value * item.quantity;
            },
            getLineComparedValue(item) {
                return item.product.comparedValue
                    ? item.product.comparedValue * item.quantity
                    : null;
            },
        };
        return { state, getters };
    }

    function assembleModel({ mock, cartStorage, shopifyDomain, defaultQuantityMax, shopifyStorefrontAccessToken, }) {
        //
        // setup shopify adapter, mock or real
        //
        const shopifyAdapter = mock !== null
            ? new (prepSlowAdapter({
                ms: 2 * 1000,
                Adapter: mock === "fail"
                    ? MockFailingShopifyAdapter
                    : MockPassingShopifyAdapter,
            }))
            : new ShopifyAdapter({
                domain: shopifyDomain,
                storefrontAccessToken: shopifyStorefrontAccessToken
            });
        const checkout = async (items) => shopifyAdapter.checkout(items);
        //
        // create shopper model
        //
        const { state, getters } = prepareStateAndGetters();
        const { reader, update } = makeReader(state);
        const model = {
            reader,
            getters,
            actions: objectMap$1(prepareActions({ state, checkout, getters, update, defaultQuantityMax }), value => asyncHitch(value, { after: async () => {
                    await cartStorage.saveCart(state.catalog);
                    update();
                } }))
        };
        //
        // return a function to begin loading the catalog
        //
        return {
            model,
            async loadCatalog() {
                try {
                    const results = await shopifyAdapter.fetchEverything();
                    await model.actions.setShopifyResults(results);
                    await cartStorage.loadCart(state.catalog);
                    update();
                }
                catch (error) {
                    const message = "shopping cart error";
                    model.actions.setError(message);
                    error.message = `${message}: ${error.message}`;
                    console.error(error);
                }
            },
            refreshCartStorage: async () => {
                await cartStorage.loadCart(state.catalog);
                update();
            },
        };
    }

    function select(selector) {
        return document.querySelector(selector);
    }

    function wireCartToMenuDisplay({ cartSelector }) {
        // toggle open the menu display when the cart's first item is added
        try {
            const shopperCart = select(cartSelector);
            if (!shopperCart)
                return false;
            shopperCart.onFirstAdd = () => {
                const parent = shopperCart.parentElement;
                if (parent
                    && parent.tagName.toLowerCase() === "menu-display"
                    && !parent.open
                    && parent.toggle) {
                    parent.toggle();
                }
            };
        }
        catch (error) {
            error.message = `failed to wire cart to menu-display: ${error.message}`;
            console.error(error);
        }
    }

    var xSvg = b$3 `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    const _unsubscribe = Symbol();
    class ShopperComponent extends s$7 {
        constructor() {
            super(...arguments);
            this.model = this.constructor.model;
        }
        shopperUpdate(state, model) { }
        connectedCallback() {
            super.connectedCallback();
            const { model } = this;
            if (!model)
                throw new Error("shopper components require model");
            this.shopperUpdate(model.reader.state, model);
            this[_unsubscribe] = model.reader.subscribe((state) => {
                this.shopperUpdate(state, model);
                this.requestUpdate();
            });
        }
        disconnectedCallback() {
            this[_unsubscribe]();
            this[_unsubscribe] = null;
            super.disconnectedCallback();
        }
    }

    var loaderSvg = b$3 `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`;

    var alertTriangleSvg = b$3 `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var _a$4;
    var LoadableState;
    (function (LoadableState) {
        LoadableState[LoadableState["Loading"] = 0] = "Loading";
        LoadableState[LoadableState["Error"] = 1] = "Error";
        LoadableState[LoadableState["Ready"] = 2] = "Ready";
    })(LoadableState || (LoadableState = {}));
    const _state = Symbol();
    const _renderError = Symbol();
    const _renderLoading = Symbol();
    class LoadableComponent extends ShopperComponent {
        constructor() {
            super(...arguments);
            this.errorMessage = "error";
            this.loadingMessage = "loading...";
            this[_a$4] = LoadableState.Loading;
            this.loadingIcon = loaderSvg;
            this.errorIcon = alertTriangleSvg;
        }
        set loadableState(value) { this[_state] = value; }
        get loadableState() { return this[_state]; }
        static get styles() {
            return [i$8 `
		.loadable {
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: monospace;
			color: var(--shopper-loading-color, currentColor);
		}

		.loadable svg {
			width: 2em;
			height: 2em;
			margin-right: 1em;
		}

		@keyframes loadable-spin {
			from { transform: rotate(0deg); }
			to { transform: rotate(360deg); }
		}

		@keyframes loadable-fade {
			from { opacity: 0.8; }
			to { opacity: 0.4; }
		}

		.loadable.loading svg {
			opacity: 0.5;
			animation:
				loadable-spin 10s linear infinite,
				loadable-fade 500ms linear infinite alternate;
		}

		.loadable.error {
			color: var(--shopper-loading-error, maroon);
		}
	`];
        }
        renderReady() {
            throw new Error("loadable: renderReady must be implemented");
        }
        render() {
            switch (this[_state]) {
                case LoadableState.Loading: return this[_renderLoading]();
                case LoadableState.Error: return this[_renderError]();
                case LoadableState.Ready: return this.renderReady();
            }
        }
        [(_a$4 = _state, _renderLoading)]() {
            return x$1 `
			<div class="loadable loading">
				${this.loadingIcon}
				<p>${this.loadingMessage}</p>
			</div>
		`;
        }
        [_renderError]() {
            return x$1 `
			<div class="loadable error">
				${this.errorIcon}
				<p>${this.errorMessage}</p>
			</div>
		`;
        }
    }
    __decorate$6([
        e$8({ type: String })
    ], LoadableComponent.prototype, "errorMessage", void 0);
    __decorate$6([
        e$8({ type: String })
    ], LoadableComponent.prototype, "loadingMessage", void 0);
    __decorate$6([
        e$8({ type: Number })
    ], LoadableComponent.prototype, _a$4, void 0);
    __decorate$6([
        e$8()
    ], LoadableComponent.prototype, "loadingIcon", void 0);
    __decorate$6([
        e$8()
    ], LoadableComponent.prototype, "errorIcon", void 0);

    const shopperCartStyles = i$8 `

/*
FUNDAMENTAL STYLES
==================
*/

.shopper-cart, .shopper-cart * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.shopper-cart {
	font-family: var(--shopper-font-family, sans-serif);
}

/*
CART ITEM TABLE
===============
*/

.shopper-cart table {
	width: 100%;
	margin: 1em auto;
}

.shopper-cart th,
.shopper-cart td {
	padding: 0.25rem;
}

.shopper-cart th {
	opacity: 0.5;
	font-size: 0.7em;
	font-style: sans-serif;
	text-transform: uppercase;
	text-align: left;
}

.shopper-cart td {
	border: var(--shopper-cart-table-border, 1px solid rgba(0,0,0, 0.1));
}

.shopper-cart th:nth-child(1),
.shopper-cart td:nth-child(1),
.shopper-cart th:nth-child(2),
.shopper-cart td:nth-child(2) {
	text-align: center;
}

.shopper-cart th:nth-child(3),
.shopper-cart td:nth-child(3) {
	width: 99%;
}

.shopper-cart th:nth-last-child(1),
.shopper-cart td:nth-last-child(1) {
	text-align: right;
	white-space: nowrap;
}

/*
TABLE: REMOVE BUTTONS
=====================
*/

.shopper-cart .remove-button {
	opacity: 0.5;
	width: 100%;
	background: transparent;
	border: none;
	cursor: pointer;
	color: inherit;
}

.shopper-cart .remove-button:hover,
.shopper-cart .remove-button:focus {
	opacity: 1;
}

.shopper-cart .remove-button svg {
	width: 100%;
	min-width: 1.5em;
	height: 1.5em;
	stroke-width: 4px;
}

/*
TABLE: QUANTITY
===============
*/

.shopper-cart quantity-input {
	display: flex;
	width: 3em;
	--border-color: transparent;
}

/*
TABLE: QUANTITY
===============
*/

.shopper-cart table 

/*
TABLE: SUBTOTAL
===============
*/

.shopper-cart .cart-subtotal {
	text-align: right;
	border-top: 1px solid grey;
}

.shopper-cart .cart-subtotal th {
	width: 99%;
	text-align: right;
}

.shopper-cart .cart-subtotal td {
	white-space: nowrap;
}

/*
TABLE: MEDIA QUERIES
====================
*/

@media (max-width: 600px) {
	.shopper-cart thead {
		display: none;
	}
	.shopper-cart table tr {
		margin-top: 2em;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-top: 1px solid #8884;
	}
	.shopper-cart tr > * {
		display: block;
		flex: 0 0 auto;
	}
	.shopper-cart .remove-cell {
		display: flex;
		align-items: center;
	}
	.shopper-cart quantity-input {
		font-size: 1.2em;
		width: 3em;
		--button-scale: 1.5;
	}
	.shopper-cart .product-title {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 1.2em;
		flex: 1 1 auto;
		width: unset !important;
		font-weight: bold;
		text-align: right;
	}
	.shopper-cart .line-price {
		flex: 1 0 auto;
		width: 100%;
	}
	.shopper-cart .cart-subtotal td {
		width: 100%;
	}
	.shopper-cart table * {
		border: none;
	}
	/* .shopper-cart .product-title {
		flex: 1 0 100%;
		display: block;
	} */
	/* .shopper-cart tr {
		display: block;
		margin-top: 2em;
	}
	.shopper-cart th,
	.shopper-cart td {
		padding: 0.1rem;
		display: inline-block;
	}
	.shopper-cart td {
		border: none;
	}
	.shopper-cart .product-title {
		font-weight: bold;
	}
	.shopper-cart price-display {
		margin-left: 1em;
	}
	.shopper-cart quantity-input {
		display: flex;
		font-size: 1em;
		width: 5em;
		--button-scale: 1.2;
		--button-padding: 0.3em 0.6em;
		--border-color: #3332;
	}
	.shopper-cart tr {
		display: flex;
		flex-direction: column;
		margin-top: 2em;
	}
	.shopper-cart .product-title {
		order: -1;
	} */
}

/*
CART CHECKOUT
=============
*/

.shopper-cart .cart-checkout {
	text-align: right;
}

.shopper-cart .cart-checkout button {
	font-size: 1.2em;
	padding: 0.5em 1em;
	font-weight: bold;
}

`;

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __classPrivateFieldSet$u = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$C = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ShopperCart_instances, _ShopperCart_termsChecked, _ShopperCart_resetTermsCheckedFalse, _ShopperCart_checkoutIsDisabled_get, _ShopperCart_handleTermsChange;
    class ShopperCart extends LoadableComponent {
        constructor() {
            super(...arguments);
            _ShopperCart_instances.add(this);
            this.onFirstAdd = () => { };
            this._lastQuantity = 0;
            this.removeIcon = xSvg;
            _ShopperCart_termsChecked.set(this, false);
            _ShopperCart_handleTermsChange.set(this, () => {
                const input = this.shadowRoot.querySelector(`[part="terms-checkbox"]`);
                __classPrivateFieldSet$u(this, _ShopperCart_termsChecked, input.checked, "f");
                this.requestUpdate();
            });
            this._handleCheckoutButtonClick = () => {
                __classPrivateFieldGet$C(this, _ShopperCart_instances, "m", _ShopperCart_resetTermsCheckedFalse).call(this);
                this.model.actions.checkout({
                    checkoutInSameWindow: !!this["checkout-in-same-window"]
                });
            };
        }
        static get styles() { return [...super.styles, shopperCartStyles]; }
        updated() {
            this["checkout-is-disabled"] = __classPrivateFieldGet$C(this, _ShopperCart_instances, "a", _ShopperCart_checkoutIsDisabled_get);
        }
        shopperUpdate(state, { getters }) {
            // trigger callback when quantity goes from 0 to 1
            const quantity = getters.cartQuantity;
            const { _lastQuantity } = this;
            if (_lastQuantity === 0 && quantity === 1)
                this.onFirstAdd();
            this._lastQuantity = quantity;
            // set loading/error/ready states
            this.loadableState = state.error
                ? LoadableState.Error
                : state.catalog.length > 0
                    ? LoadableState.Ready
                    : LoadableState.Loading;
        }
        renderReady() {
            const cartIsEmpty = this.model.getters.cartQuantity < 1;
            const { checkoutInProgress } = this.model.reader.state;
            const disabled = __classPrivateFieldGet$C(this, _ShopperCart_instances, "a", _ShopperCart_checkoutIsDisabled_get);
            const showTermsBox = !checkoutInProgress && this["require-terms-checked"];
            return x$1 `
			<section class="shopper-cart">
				${this._renderCartTitle()}
				${cartIsEmpty ? null : x$1 `
					${this._renderCartLineItems()}
					<slot name="before-checkout"></slot>
					<div class="cart-checkout">
						${showTermsBox ? x$1 `
							<span part=terms-box>
								<input
									type="checkbox"
									part=terms-checkbox
									@change=${__classPrivateFieldGet$C(this, _ShopperCart_handleTermsChange, "f")}/>
								<slot name=terms-consent part=terms-consent>
									I understand the terms above.
								</slot>
							</span>
						` : null}
						<button
							class="checkout-button"
							part="checkout-button"
							title="Checkout Cart"
							@click=${this._handleCheckoutButtonClick}
							?disabled=${disabled}
							?hidden=${cartIsEmpty}>
								Checkout!
						</button>
					</div>
					<slot name="after-checkout"></slot>
				`}
			</section>
		`;
        }
        _renderCartTitle() {
            const { cartQuantity: quantity } = this.model.getters;
            const { checkedOut } = this.model.reader.state;
            return checkedOut ? x$1 `
			<h2>
				Cart checked out
			</h2>
		` : x$1 `
			<h2>
				<span>Cart</span>
				<span>– ${quantity === 0
            ? "empty"
            : `${quantity} item${quantity === 1
                ? ""
                : "s"}`}</span>
			</h2>
		`;
        }
        _renderCartLineItems() {
            const { getters } = this.model;
            const { itemsInCart, cartValue } = getters;
            const lineItems = itemsInCart.map(item => this._renderCartItem(item));
            return x$1 `
			<table>
				<thead>
					<tr>
						<th>Remove</th>
						<th>Quantity</th>
						<th>Item name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody class="cart-lines">
					${lineItems}
				</tbody>
				<tbody class="cart-subtotal">
					<tr>
						<th colspan="3">Subtotal</th>
						<td>
							<crnc-price right value="${cartValue}"></crnc-price>
						</td>
					</tr>
				</tbody>
			</table>
		`;
        }
        _renderCartItem(item) {
            const { getters, actions } = this.model;
            const handleQuantityChange = ({ detail: value }) => {
                actions.setItemQuantity(item, value);
            };
            const handleRemoveClick = () => actions.setItemQuantity(item, 0);
            const lineValue = getters.getLineValue(item);
            const lineComparedValue = getters.getLineComparedValue(item);
            return x$1 `
			<tr>
				<td class="remove-cell">
					<button
						class="remove-button"
						title="Remove item"
						@click=${handleRemoveClick}>
							${this.removeIcon}
					</button>
				</td>
				<td class="quantity">
					<quantity-input
						.value=${item.quantity}
						.min=${item.quantityMin}
						.max=${item.quantityMax}
						.step=${1}
						@quantitychange=${handleQuantityChange}
					></quantity-input>
				</td>
				<td class="product-title">${item.product.title}</td>
				<td class="line-price">
					<crnc-price right value="${lineValue}" comparison="${lineComparedValue}"></crnc-price>
				</td>
			</tr>
		`;
        }
    }
    _ShopperCart_termsChecked = new WeakMap(), _ShopperCart_handleTermsChange = new WeakMap(), _ShopperCart_instances = new WeakSet(), _ShopperCart_resetTermsCheckedFalse = function _ShopperCart_resetTermsCheckedFalse() {
        __classPrivateFieldSet$u(this, _ShopperCart_termsChecked, false, "f");
        this.requestUpdate();
    }, _ShopperCart_checkoutIsDisabled_get = function _ShopperCart_checkoutIsDisabled_get() {
        const { checkoutInProgress } = this.model.reader.state;
        const checkboxIndicatesDisabledButton = this["require-terms-checked"] && !__classPrivateFieldGet$C(this, _ShopperCart_termsChecked, "f");
        return checkoutInProgress || checkboxIndicatesDisabledButton;
    };
    __decorate$5([
        e$8({ type: Boolean })
    ], ShopperCart.prototype, "checkout-in-same-window", void 0);
    __decorate$5([
        e$8({ type: Boolean })
    ], ShopperCart.prototype, "require-terms-checked", void 0);
    __decorate$5([
        e$8({ type: Boolean, reflect: true })
    ], ShopperCart.prototype, "checkout-is-disabled", void 0);
    __decorate$5([
        e$8()
    ], ShopperCart.prototype, "removeIcon", void 0);

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class ShopperButton extends ShopperComponent {
        constructor() {
            super(...arguments);
            this.numeral = 0;
        }
        shopperUpdate(state, { getters }) {
            this.numeral = getters.cartQuantity;
        }
        static get styles() {
            return i$8 `
			* {
				box-sizing: border-box;
			}

			:host {
				display: block;
				position: relative;
				background: var(--shopper-button-background, white);
				width: var(--shopper-button-size, 2em);
				height: var(--shopper-button-size, 2em);
			}

			.cart-button {
				padding: var(--shopper-button-padding, 0.5em);
			}

			svg {
				width: 100%;
				height: 100%;
			}

			.cart-numeral {
				position: absolute;
				top: -0.2em;
				right: -0.2em;
				font-size: var(--shopper-button-numeral-size, 1em);
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: center;
				width: 1.4em;
				height: 1.4em;
				background: var(--shopper-button-numeral-color, red);
				border-radius: 1.4em;
				color: white;
				font-weight: bold;
				text-shadow: 0.5px 1px 1px rgba(0,0,0, 0.2);
				box-shadow: 1px 2px 2px rgba(0,0,0, 0.2);
			}
		`;
        }
        render() {
            return x$1 `
			<div class="cart-button" part=button>
				${b$3 `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`}

				${this.numeral
            ? x$1 `<div class="cart-numeral" part=numeral>${this.numeral}</div>`
            : null}
			</div>
		`;
        }
    }
    __decorate$4([
        e$8({ type: Number, reflect: true })
    ], ShopperButton.prototype, "numeral", void 0);

    function LightDom(C) {
        return class LightDomComponent extends C {
            static get styles() { return [...super.styles]; }
            // use light dom (opt out of shadow dom)
            createRenderRoot() { return this; }
            // render the styles straight to the light dom
            render() {
                const { styles } = this.constructor;
                return x$1 `
				${super.render()}
				<style>${styles}</style>
			`;
            }
        };
    }

    function isDefined(x) {
        return x !== undefined && x !== null;
    }

    function calculatePercentOff$1({ currentValue, comparisonValue }) {
        const difference = comparisonValue - currentValue;
        const fraction = difference / comparisonValue;
        const percentage = Math.round(fraction * 100);
        return percentage;
    }

    function shopifyUidToGid(uid) {
        return atob(uid);
    }

    function shopifyUnknownToGid(id) {
        const isGid = id.includes(":");
        return isGid
            ? id
            : shopifyUidToGid(id);
    }

    function shopifyProductLinkToGid(link) {
        var _a;
        const parse = link.match(/^(\d+)$|\/(\d+$)/);
        const id = (_a = parse[1]) !== null && _a !== void 0 ? _a : parse[2];
        const gid = `gid://shopify/Product/${id}`;
        return gid;
        // // older shopify api
        // const uid = btoa(gid)
        // return uid
    }

    function chooseShopifyId({ gid, uid, link }) {
        return gid
            ? gid
            : uid
                ? shopifyUnknownToGid(uid)
                : link
                    ? shopifyProductLinkToGid(link)
                    : undefined;
    }

    const shopifyImageRegex = /(https:\/\/cdn.shopify.com\/.+\/products)\/(.*)/i;
    function parseImageSize(spec) {
        if (spec) {
            let width = 200;
            let height = 200;
            if (spec.includes("x")) {
                const [widthstring, heightstring] = spec.split("x");
                width = parseInt(widthstring);
                height = parseInt(heightstring);
            }
            else {
                width = parseInt(spec);
                height = width;
            }
            return { width, height };
        }
        else
            return undefined;
    }
    function sizeShopifyImage(url, size) {
        if (!size)
            return url;
        const width = Math.round(size.width).toFixed(0);
        const height = Math.round(size.height).toFixed(0);
        const match = url.match(shopifyImageRegex);
        if (match) {
            const [, preamble, filepart] = match;
            let filename;
            let querystring = "";
            if (filepart.includes("?")) {
                const peices = filepart.split("?");
                filename = peices[0];
                querystring = peices[1];
            }
            else {
                filename = filepart;
                querystring = "";
            }
            const nameparts = filename.split(".");
            const extension = nameparts.pop();
            const filelabel = nameparts.join(".");
            const dimensions = `${width}x${height}`;
            const query = querystring ? `?${querystring}` : "";
            return `${preamble}/${filelabel}_${dimensions}.${extension}${query}`;
        }
        else
            return url;
    }

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class ShopperProduct extends LightDom(LoadableComponent) {
        constructor() {
            super(...arguments);
            this["in-cart"] = false;
            this["show-image"] = false;
            this["out-of-stock"] = false;
            this._handleAddToCart = () => {
                this.model.actions.addToCart(this.cartItem);
            };
        }
        static get styles() { return [...super.styles, i$8 ``]; }
        get shopifyId() {
            const { gid, uid, link } = this;
            return chooseShopifyId({ gid, uid, link });
        }
        shopperUpdate(state, { getters }) {
            this.cartItem = state.catalog.find(item => item.product.id === this.shopifyId);
            this.loadableState = this.cartItem
                ? LoadableState.Ready
                : state.error
                    ? LoadableState.Error
                    : LoadableState.Loading;
            this["in-cart"] = getters.itemsInCart.includes(this.cartItem);
            this["out-of-stock"] = this.cartItem
                ? !this.cartItem.product.available
                : false;
            this["sale"] = this.cartItem
                ? isDefined(this.cartItem.product.comparedValue)
                    ? calculatePercentOff$1({
                        currentValue: this.cartItem.product.value,
                        comparisonValue: this.cartItem.product.comparedValue,
                    }).toString()
                    : undefined
                : undefined;
        }
        renderReady() {
            const { cartItem, _handleAddToCart } = this;
            const href = this["href"];
            const inCart = this["in-cart"];
            const showImage = this["show-image"];
            const outOfStock = this["out-of-stock"];
            const imageSize = this["image-size"];
            const value = this.model.getters.getUnitValue(cartItem);
            const { product } = cartItem;
            const linkify = (content) => href
                ? x$1 `<a href=${href}>${content}</a>`
                : content;
            return !cartItem ? null : x$1 `
			${(showImage && product.image) ? x$1 `
				<div class=product-image>
					${linkify(x$1 `
						<img
							src=${sizeShopifyImage(product.image.src, parseImageSize(imageSize))}
							alt=${product.image.alt}
							/>
					`)}
				</div>
			` : null}
			<div class=product-content>
				<h3 class=title>
					${linkify(x$1 `${product.title}`)}
				</h3>
				${outOfStock
            ? x$1 `<p class=out-of-stock>Out of stock</p>`
            : null}
				<div class=box>
					<crnc-price
						value="${value}"
						comparison="${product.comparedValue}"
					></crnc-price>
					<button
						class=add-to-cart-button
						title=${inCart ? undefined : "Add to Cart"}
						@click=${_handleAddToCart}
						?disabled=${outOfStock || inCart}>
							${outOfStock
            ? "Sold out"
            : inCart ? "In Cart" : "Add to Cart"}
					</button>
				</div>
			</div>
		`;
        }
    }
    __decorate$3([
        e$8({ type: Object })
    ], ShopperProduct.prototype, "cartItem", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "gid", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "uid", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "link", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "href", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "sale", void 0);
    __decorate$3([
        e$8({ type: String, reflect: true })
    ], ShopperProduct.prototype, "image-size", void 0);
    __decorate$3([
        e$8({ type: Boolean, reflect: true })
    ], ShopperProduct.prototype, "in-cart", void 0);
    __decorate$3([
        e$8({ type: Boolean, reflect: true })
    ], ShopperProduct.prototype, "show-image", void 0);
    __decorate$3([
        e$8({ type: Boolean, reflect: true })
    ], ShopperProduct.prototype, "out-of-stock", void 0);

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class ShopperCollection extends LightDom(LoadableComponent) {
        constructor() {
            super(...arguments);
            this.items = null;
        }
        static get styles() { return [...super.styles, i$8 ``]; }
        get shopifyId() {
            const { gid, uid, link } = this;
            return chooseShopifyId({ gid, uid, link });
        }
        shopperUpdate(state) {
            const { shopifyId, all } = this;
            this.items = all
                ? [...state.catalog]
                : shopifyId
                    ? state.catalog.filter(item => item.product.collections.includes(shopifyId))
                    : [];
            this.loadableState = (this.items && this.items.length > 0)
                ? LoadableState.Ready
                : state.error
                    ? LoadableState.Error
                    : LoadableState.Loading;
        }
        renderReady() {
            const { items: cartItems } = this;
            return x$1 `
			<ol>
				${cartItems && cartItems.map(cartItem => x$1 `
					<li>
						<shopper-product
							show-image=${this["show-images"]}
							image-size=${this["image-sizes"]}
							uid=${cartItem.product.id}
						></shopper-product>
					</li>
				`)}
			</ol>
		`;
        }
    }
    __decorate$2([
        e$8({ type: Array })
    ], ShopperCollection.prototype, "items", void 0);
    __decorate$2([
        e$8({ type: String, reflect: true })
    ], ShopperCollection.prototype, "gid", void 0);
    __decorate$2([
        e$8({ type: String, reflect: true })
    ], ShopperCollection.prototype, "uid", void 0);
    __decorate$2([
        e$8({ type: String, reflect: true })
    ], ShopperCollection.prototype, "link", void 0);
    __decorate$2([
        e$8({ type: Boolean, reflect: true })
    ], ShopperCollection.prototype, "all", void 0);
    __decorate$2([
        e$8({ type: String, reflect: true })
    ], ShopperCollection.prototype, "image-sizes", void 0);
    __decorate$2([
        e$8({ type: Boolean, reflect: true })
    ], ShopperCollection.prototype, "show-images", void 0);

    var styles$a = i$8 `

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

*:focus {
	outline: var(--focus-outline, 2px solid cyan)
}

:host {
	--button-scale: 1;
	--button-padding: 0.1em;
	--button-hover-background: #8882;
	--button-active-background: #7772;
	--border-radius: 0.2rem;
	--border-color: inherit;
	display: inline-flex;
	flex-direction: row;
	width: 3em;
}

#textinput, button {
	font-size: 1em;
}

#textinput {
	display: block;
	width: 100%;
	color: inherit;
	background: transparent;
	box-sizing: content-box;
	text-align: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius) 0 0 var(--border-radius)
}

#buttons {
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	border-left: 0;
}

button {
	display: block;
	color: inherit;
	background: none;
	flex: 1 0 auto;
	font-size: calc(0.6em * var(--button-scale));
	padding: var(--button-padding);
	border: 1px solid var(--border-color);
	border-left: 0;
	line-height: 0.8em;
}

button:hover,
button:focus {
	background: var(--button-hover-background);
}

button:active {
	background: var(--button-active-background);
}

button:nth-child(1) {
	border-bottom: 0;
	border-top-right-radius: var(--border-radius);
}

button:nth-child(2) {
	border-top: 0;
	border-left: 0;
	border-bottom-right-radius: var(--border-radius);
}

`;

    class QuantityChangeEvent extends CustomEvent {
        constructor(value) {
            super(QuantityChangeEvent.event, { detail: value });
        }
    }
    QuantityChangeEvent.event = "quantitychange";

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __classPrivateFieldGet$B = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$t = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _QuantityInput_value, _QuantityInput_roundStep, _QuantityInput_validateProperties, _QuantityInput_cap, _QuantityInput_fireQuantityChange, _QuantityInput_textAsInteger, _QuantityInput_handleInputChange;
    class QuantityInput extends s$7 {
        constructor() {
            super(...arguments);
            this.step = 1;
            this.min = 1;
            this.max = 25;
            _QuantityInput_value.set(this, this.min);
            _QuantityInput_roundStep.set(this, (n, step, up) => {
                return up
                    ? n + (step - (n % step))
                    : n - (n % step);
            });
            _QuantityInput_validateProperties.set(this, () => {
                const warn = (message) => {
                    console.warn(`<${QuantityInput.tag}>: ${message}`);
                };
                const mustBeInteger = (n, label) => {
                    if (n % 1 !== 0) {
                        const int = Math.floor(n);
                        warn(`${label}=${n} must be integer (using ${label}=${int})`);
                        n = int;
                    }
                    return n;
                };
                this.step = mustBeInteger(this.step, "step");
                this.min = mustBeInteger(this.min, "min");
                this.max = mustBeInteger(this.max, "max");
                __classPrivateFieldSet$t(this, _QuantityInput_value, mustBeInteger(__classPrivateFieldGet$B(this, _QuantityInput_value, "f"), "value"), "f");
                if (this.step < 1) {
                    warn(`step=${this.step} must be at least 1 (using step=1)`);
                    this.step = 1;
                }
                const value = __classPrivateFieldGet$B(this, _QuantityInput_value, "f");
                const { step, min, max } = this;
                const up = true;
                const down = false;
                const lockstep = (n, label, up) => {
                    if (n % step !== 0) {
                        const newValue = __classPrivateFieldGet$B(this, _QuantityInput_roundStep, "f").call(this, n, step, up);
                        warn(`${label}=${n} not allowed with step=${step} `
                            + `(using ${label}=${newValue})`);
                        n = newValue;
                    }
                    return n;
                };
                this.min = lockstep(min, "min", up);
                this.max = lockstep(max, "max", down);
                __classPrivateFieldSet$t(this, _QuantityInput_value, lockstep(value, "value", down), "f");
                if (this.max < this.min) {
                    this.max = this.min + step;
                    warn(`max=${max} cannot be less than min=${min} `
                        + `(using max=${this.max})`);
                }
                this.value = __classPrivateFieldGet$B(this, _QuantityInput_value, "f");
            });
            _QuantityInput_cap.set(this, (value) => {
                value = __classPrivateFieldGet$B(this, _QuantityInput_roundStep, "f").call(this, value, this.step, false);
                value = value >= this.max ? this.max : value;
                value = value <= this.min ? this.min : value;
                return value;
            });
            _QuantityInput_fireQuantityChange.set(this, () => {
                this.dispatchEvent(new QuantityInput.QuantityChangeEvent(__classPrivateFieldGet$B(this, _QuantityInput_value, "f")));
            });
            this.increment = () => {
                this.value = this.value + this.step;
                __classPrivateFieldGet$B(this, _QuantityInput_fireQuantityChange, "f").call(this);
            };
            this.decrement = () => {
                this.value = this.value - this.step;
                __classPrivateFieldGet$B(this, _QuantityInput_fireQuantityChange, "f").call(this);
            };
            _QuantityInput_textAsInteger.set(this, (text) => {
                return /^[\d]+$/.test(text)
                    ? parseInt(text)
                    : false;
            });
            _QuantityInput_handleInputChange.set(this, () => {
                const originalValue = __classPrivateFieldGet$B(this, _QuantityInput_value, "f");
                const input = this.shadowRoot.querySelector("#textinput");
                const { value: text } = input;
                const converted = __classPrivateFieldGet$B(this, _QuantityInput_textAsInteger, "f").call(this, text);
                const newValue = converted === false
                    ? originalValue
                    : __classPrivateFieldGet$B(this, _QuantityInput_cap, "f").call(this, converted);
                if (newValue.toString() !== text)
                    input.value = newValue.toString();
                if (newValue !== originalValue) {
                    __classPrivateFieldSet$t(this, _QuantityInput_value, newValue, "f");
                    __classPrivateFieldGet$B(this, _QuantityInput_fireQuantityChange, "f").call(this);
                }
            });
        }
        set value(value) {
            const oldValue = __classPrivateFieldGet$B(this, _QuantityInput_value, "f");
            __classPrivateFieldSet$t(this, _QuantityInput_value, __classPrivateFieldGet$B(this, _QuantityInput_cap, "f").call(this, value), "f");
            this.requestUpdate("value", oldValue);
        }
        get value() {
            return __classPrivateFieldGet$B(this, _QuantityInput_value, "f");
        }
        firstUpdated() {
            __classPrivateFieldGet$B(this, _QuantityInput_validateProperties, "f").call(this);
            if (this.onquantitychange)
                this.addEventListener(QuantityInput.QuantityChangeEvent.event, this.onquantitychange);
        }
        render() {
            return x$1 `
			<input
				id=textinput
				type=text
				inputmode=numeric
				.value=${__classPrivateFieldGet$B(this, _QuantityInput_value, "f").toString()}
				min=${this.min}
				max=${this.max}
				step=${this.step}
				@change=${__classPrivateFieldGet$B(this, _QuantityInput_handleInputChange, "f")}
				/>

			<div id=buttons>
				<button
					part=button
					@click=${this.increment}>
						△
				</button>
				
				<button
					part=button
					@click=${this.decrement}>
						▽
				</button>
			</div>
		`;
        }
    }
    _QuantityInput_value = new WeakMap(), _QuantityInput_roundStep = new WeakMap(), _QuantityInput_validateProperties = new WeakMap(), _QuantityInput_cap = new WeakMap(), _QuantityInput_fireQuantityChange = new WeakMap(), _QuantityInput_textAsInteger = new WeakMap(), _QuantityInput_handleInputChange = new WeakMap();
    QuantityInput.tag = "quantity-input";
    QuantityInput.QuantityChangeEvent = QuantityChangeEvent;
    QuantityInput.styles = styles$a;
    __decorate$1([
        e$8({ type: Number, reflect: true })
    ], QuantityInput.prototype, "step", void 0);
    __decorate$1([
        e$8({ type: Number, reflect: true })
    ], QuantityInput.prototype, "min", void 0);
    __decorate$1([
        e$8({ type: Number, reflect: true })
    ], QuantityInput.prototype, "max", void 0);
    __decorate$1([
        e$8({ type: Number, reflect: true })
    ], QuantityInput.prototype, "value", null);

    function isVoid(x) {
        return x === undefined || x === null;
    }

    function obtain(object, path) {
        let current = object;
        for (const key of path) {
            current = current[key];
            if (isVoid(current))
                break;
        }
        return current;
    }

    function objectMap(input, mapper) {
        const output = {};
        for (const [key, value] of Object.entries(input))
            output[key] = mapper(value, key);
        return output;
    }

    function isPlainObject(value) {
        if (typeof value !== "object" || value === null)
            return false;
        const prototype = Object.getPrototypeOf(value);
        return prototype === Object.prototype || prototype === null;
    }

    const symbolToAllowProxyIntoState = Symbol("symbolToAllowProxyIntoState");

    function unproxy(x, unlessSymbol = symbolToAllowProxyIntoState) {
        return (isPlainObject(x) && !x[unlessSymbol])
            ? objectMap(x, value => unproxy(value, unlessSymbol))
            : x;
    }

    function debounce$1(delay, action) {
        let latestArgs;
        let timeout;
        let waitingQueue = [];
        function reset() {
            latestArgs = undefined;
            if (timeout)
                clearTimeout(timeout);
            timeout = undefined;
            waitingQueue = [];
        }
        reset();
        return ((...args) => {
            latestArgs = args;
            if (timeout)
                clearTimeout(timeout);
            const promise = new Promise((resolve, reject) => {
                waitingQueue.push({ resolve, reject });
            });
            timeout = setTimeout(() => {
                Promise.resolve()
                    .then(() => action(...latestArgs))
                    .then(r => {
                    for (const { resolve } of waitingQueue)
                        resolve(r);
                    reset();
                })
                    .catch(err => {
                    for (const { reject } of waitingQueue)
                        reject(err);
                    reset();
                });
            }, delay);
            return promise;
        });
    }

    function attemptNestedProperty(object, path, value) {
        const pathToSubObject = [...path];
        const finalKey = pathToSubObject.pop();
        let currentSubObject = object;
        for (const key of pathToSubObject) {
            if (typeof currentSubObject[key] === "object") {
                currentSubObject = currentSubObject[key];
            }
            else {
                throw new Error("unable to write property to object tree containing undefined");
            }
        }
        currentSubObject[finalKey] = value;
    }

    class SnapstateError extends Error {
        constructor() {
            super(...arguments);
            this.name = this.constructor.name;
        }
    }
    class SnapstateReadonlyError extends SnapstateError {
    }
    class SnapstateCircularError extends SnapstateError {
    }

    function containsPath(paths, path) {
        for (const comparisonPath of paths) {
            let mismatch = false;
            if (path.length === comparisonPath.length) {
                for (let i = 0; i < path.length; i++) {
                    if (path[i] !== comparisonPath[i]) {
                        mismatch = true;
                        break;
                    }
                }
                if (!mismatch)
                    return true;
            }
        }
        return false;
    }
    function containsPathOrChildren(paths, path) {
        for (const comparisonPath of paths) {
            let mismatch = false;
            if (path.length <= comparisonPath.length) {
                for (let i = 0; i < path.length; i++) {
                    if (path[i] !== comparisonPath[i]) {
                        mismatch = true;
                        break;
                    }
                }
                if (!mismatch)
                    return true;
            }
        }
        return false;
    }
    function containsPathOrParents(paths, path) {
        for (const comparisonPath of paths) {
            let mismatch = false;
            if (path.length >= comparisonPath.length) {
                for (let i = 0; i < comparisonPath.length; i++) {
                    if (comparisonPath[i] !== path[i]) {
                        mismatch = true;
                        break;
                    }
                }
                if (!mismatch)
                    return true;
            }
        }
        return false;
    }

    function snapstate(tree) {
        const masterTree = unproxy(tree, symbolToAllowProxyIntoState);
        let activeUpdate = false;
        let activeTrackThatIsRecording;
        const trackingSessions = new Map();
        const subscriptions = new Set();
        function findTrackingSessions(path) {
            const sessions = [];
            for (const [, session] of trackingSessions) {
                if (session.flip) {
                    if (containsPathOrParents(session.paths, path))
                        sessions.push(session);
                }
                else {
                    if (containsPathOrChildren(session.paths, path))
                        sessions.push(session);
                }
            }
            return sessions;
        }
        const writable = recurse(masterTree, true, []);
        const readable = recurse(masterTree, false, []);
        let updateQueue = [];
        const update = debounce$1(1, () => {
            for (const path of updateQueue) {
                activeUpdate = true;
                try {
                    for (const subscription of subscriptions) {
                        subscription(readable);
                    }
                    for (const { observer, reaction } of findTrackingSessions(path)) {
                        if (reaction)
                            reaction(observer(readable));
                        else
                            observer(readable);
                    }
                }
                finally {
                    activeUpdate = false;
                }
            }
            updateQueue = [];
        });
        let waiter = Promise.resolve();
        function queueUpdate(path) {
            if (!containsPath(updateQueue, path))
                updateQueue.push(path);
            waiter = update();
        }
        function recurse(target, allowWrites, path) {
            return new Proxy(target, {
                get(t, property) {
                    var _a;
                    const currentPath = [...path, property];
                    if (activeTrackThatIsRecording) {
                        if (!containsPath(activeTrackThatIsRecording.paths, currentPath)) {
                            activeTrackThatIsRecording.paths.push(currentPath);
                        }
                    }
                    const value = (_a = obtain(masterTree, currentPath)) !== null && _a !== void 0 ? _a : obtain(t, [property]);
                    return isPlainObject(value)
                        ? recurse(value, allowWrites, currentPath)
                        : value;
                },
                set(t, property, value) {
                    const currentPath = [...path, property];
                    if (allowWrites) {
                        if (activeTrackThatIsRecording || activeUpdate)
                            throw new SnapstateCircularError("forbidden state circularity");
                        const existingValue = obtain(masterTree, currentPath);
                        const isChanged = value !== existingValue;
                        if (isChanged) {
                            attemptNestedProperty(masterTree, currentPath, unproxy(value, symbolToAllowProxyIntoState));
                            queueUpdate(currentPath);
                        }
                        return true;
                    }
                    else {
                        throw new SnapstateReadonlyError(`state is read-only here, cannot set ${currentPath.join(".")}`);
                    }
                }
            });
        }
        const untrackers = new Set();
        const unsubscribers = new Set();
        return {
            state: writable,
            writable,
            readable,
            readonly: readable,
            subscribe(subscription) {
                subscriptions.add(subscription);
                const unsubscribe = () => subscriptions.delete(subscription);
                unsubscribers.add(unsubscribe);
                return unsubscribe;
            },
            track(observer, reaction, { flip = false } = {}) {
                const identifier = Symbol();
                activeTrackThatIsRecording = { paths: [], flip, observer, reaction };
                trackingSessions.set(identifier, activeTrackThatIsRecording);
                observer(readable);
                activeTrackThatIsRecording = undefined;
                const untrack = () => trackingSessions.delete(identifier);
                untrackers.add(untrack);
                return untrack;
            },
            unsubscribeAll() {
                for (const unsubscribe of unsubscribers)
                    unsubscribe();
                unsubscribers.clear();
            },
            untrackAll() {
                for (const untrack of untrackers)
                    untrack();
                untrackers.clear();
            },
            async wait() {
                await waiter;
            },
        };
    }
    function restricted(snap) {
        return {
            state: snap.readable,
            readable: snap.readable,
            readonly: snap.readonly,
            subscribe: snap.subscribe,
            track: snap.track,
            unsubscribeAll: snap.unsubscribeAll,
            untrackAll: snap.untrackAll,
            wait: snap.wait,
        };
    }

    /*

    code adapted from "locale2" v2.3.1
     - https://www.npmjs.com/package/locale2
     - https://github.com/moimikey/locale2
     - adapted by Chase Moskal (@chase-moskal)

    ------

    The MIT License (MIT)

    Copyright (c) 2015 Michael Scott Hertzberg

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    */
    const global = Function("return this")();
    const process = undefined;
    function formatLocale(locale) {
        if (typeof locale !== 'string')
            return locale;
        // 'en-US-u-VA-posix'.split('-').slice(0, 2)
        // ["en", "US"]
        return locale.split('-').slice(0, 2).map(function (chunk, index) {
            // en[0]-US[1] <- chunk[1].toUpperCase()
            if (index !== 0 && chunk.length === 2)
                return chunk.toUpperCase();
            return chunk;
        }).join('-');
    }
    function getLocale(locale) {
        if (locale)
            return locale;
        if (global.chrome && global.chrome.runtime && typeof global.chrome.runtime.getManifest === 'function') {
            locale = global.chrome.runtime.getManifest();
            if (locale && locale.current_locale) {
                return locale.current_locale;
            }
        }
        locale = (global.navigator && ((global.navigator.languages && global.navigator.languages[0]) ||
            global.navigator.language ||
            global.navigator.userLanguage));
        if (!locale && global.navigator && global.navigator.userAgent) {
            locale = global.navigator.userAgent.match(/;.(\w+-\w+)/i);
            if (locale)
                return locale[1];
        }
        if (!locale) {
            locale = (global.clientInformation || Object.create(null)).language;
        }
        if (!locale) {
            if (global.Intl && typeof global.Intl.DateTimeFormat === 'function') {
                locale = global.Intl.DateTimeFormat().resolvedOptions && global.Intl.DateTimeFormat().resolvedOptions().locale;
            }
            if (!locale && ['LANG', 'LANGUAGE'].some(Object.hasOwnProperty, process.env)) {
                return (process.env.LANG || process.env.LANGUAGE || String())
                    .replace(/[.:].*/, '')
                    .replace('_', '-');
            }
        }
        return locale;
    }
    function locale2(locale) {
        return formatLocale(getLocale(locale));
    }

    const currencyLibrary$1 = {
        USD: {
            code: "USD",
            symbol: "$",
            name: "United States Dollar",
        },
        CAD: {
            code: "CAD",
            symbol: "$",
            name: "Canadian Dollar",
        },
        AUD: {
            code: "AUD",
            symbol: "$",
            name: "Australian Dollar",
        },
        EUR: {
            code: "EUR",
            symbol: "€",
            name: "Euro",
        },
        GBP: {
            code: "GBP",
            symbol: "£",
            name: "British Pound Sterling",
        },
        JPY: {
            code: "JPY",
            symbol: "¥",
            name: "Japanese Yen",
        },
        XBT: {
            code: "XBT",
            symbol: "Ƀ",
            name: "Bitcoin",
        },
    };

    /**
     * Round a number to the desired number of decimal places
     */
    function precisionRound(value, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(value * factor) / factor;
    }
    /**
     * Display a number as a human-readable locale-abiding string
     */
    function localize({ value, precision, locale }) {
        return precisionRound(value, precision).toLocaleString(locale, {
            maximumFractionDigits: precision,
            minimumFractionDigits: precision
        });
    }
    /**
     * Format currency
     *  + express monetary value in human-readable format
     *  + displays large number groupings differently based on locale
     *  + defaults to 2 digits of precision
     *  + you can provide your own set of currency formatters
     *  + returns a string
     */
    function formatCurrency({ code, value, precision = 2, locale = undefined, currencyLibrary = currencyLibrary$1, }) {
        const currency = currencyLibrary[code];
        if (!currency)
            throw new Error(`unknown currency code "${code}"`);
        const { symbol } = currency;
        const amount = localize({ value, locale, precision });
        const price = `${symbol}${amount} ${code}`;
        return { currency, amount, value, price };
    }

    function isCurrencyAllowed(code, currencies) {
        return currencies.indexOf(code) !== -1;
    }

    const currenciesByLocales = Object.freeze({
        "en": "USD",
        "en-us": "USD",
        "en-ca": "CAD",
        "fr-ca": "CAD",
        "en-gb": "GBP",
    });

    /**
     * Assume what currency the user might want to see
     *  + guess is based on locale
     *  + if a currency doesn't exist for the given locale, fallback is used
     */
    function assumeUserCurrency({ fallback, locale = locale2(), currencies, currenciesByLocales: currenciesByLocales$1 = currenciesByLocales }) {
        var _a;
        const currency = (_a = currenciesByLocales$1[locale.toLowerCase()]) !== null && _a !== void 0 ? _a : fallback;
        return isCurrencyAllowed(currency, currencies)
            ? currency
            : fallback;
    }

    function getDetailsForCurrencies(currencies, library) {
        const details = {};
        for (const code of currencies) {
            const found = library[code];
            if (found)
                details[code] = found;
        }
        return details;
    }

    function validateConverterParams({ baseCurrency, currencies, currencyLibrary }) {
        baseCurrency = baseCurrency.toUpperCase();
        currencies = currencies.map(currency => currency.toUpperCase());
        currencies = [...new Set([baseCurrency, ...currencies])];
        const libraryKeys = Object.keys(currencyLibrary);
        const notInLibrary = currencies
            .filter(currency => libraryKeys.indexOf(currency) === -1);
        if (notInLibrary.length)
            throw new Error(`these currency codes are not in the currencyLibrary (${notInLibrary.join(", ")})`);
        return { baseCurrency, currencies };
    }

    /**
     * Convert currency
     *  + exchange monetary value from one currency into another
     *  + provide a 'rates' object of relativistic currency values
     *  + returns a number
     */
    function convertCurrency({ value, inputCurrency, outputCurrency, exchangeRates }) {
        // get currency rates
        const inputRate = exchangeRates[inputCurrency];
        const outputRate = exchangeRates[outputCurrency];
        // scrutinize currencies and rates for validity
        const currenciesAndRates = [
            [inputCurrency, inputRate],
            [outputCurrency, outputRate]
        ];
        for (const [currency, rate] of currenciesAndRates) {
            if (rate === undefined || rate === null || isNaN(rate))
                throw new Error(`invalid rate "${currency}"`);
        }
        // calculate exchanged currency value
        return value * (outputRate / inputRate);
    }

    /**
     * Convert and format currency
     *  + exchange and format money in one shot
     *  + convenience function combining 'convertCurrency' and 'formatCurrency'
     */
    function convertAndFormatCurrency({ value, exchangeRates, inputCurrency, outputCurrency, precision = 2, locale = undefined }) {
        return formatCurrency({
            locale,
            precision,
            code: outputCurrency,
            value: convertCurrency({ value, inputCurrency, outputCurrency, exchangeRates })
        });
    }

    function jsonStorage(storage) {
        return {
            getItem(key) {
                const data = storage.getItem(key);
                let value;
                if (data) {
                    try {
                        value = JSON.parse(data);
                    }
                    catch (error) { }
                }
                return value;
            },
            setItem(key, value) {
                storage.setItem(key, JSON.stringify(value));
            },
            removeItem(key) {
                storage.removeItem(key);
            },
        };
    }

    function cache({ lifespan, storage, storageKey, load, }) {
        const store = jsonStorage(storage);
        function timeHasNotExpired(time) {
            const since = Date.now() - time;
            return since < lifespan;
        }
        function getCachedPayload() {
            const record = store.getItem(storageKey);
            return (record && timeHasNotExpired(record.time))
                ? record.payload
                : undefined;
        }
        function setCachedPayload(payload) {
            const record = {
                payload,
                time: Date.now(),
            };
            store.setItem(storageKey, record);
        }
        async function loadFreshAndWriteToCache() {
            const payload = await load();
            setCachedPayload(payload);
            return payload;
        }
        return {
            async read() {
                const payload = getCachedPayload();
                return payload
                    ? payload
                    : await loadFreshAndWriteToCache();
            },
            async readFresh() {
                return loadFreshAndWriteToCache();
            },
            async readCache() {
                return getCachedPayload();
            },
            async write(payload) {
                setCachedPayload(payload);
            },
            async clear() {
                storage.removeItem(storageKey);
            },
        };
    }

    async function rememberOrDownloadExchangeRates({ currencies, persistence: { storage, storageKeys, cacheLifespan }, downloadExchangeRates, }) {
        const ratesCache = cache({
            storage,
            lifespan: cacheLifespan,
            storageKey: storageKeys.exchangeRatesCache,
            load: async () => downloadExchangeRates({ currencies }),
        });
        let results = await ratesCache.readCache();
        const shouldDownloadFreshResults = results
            ? !ratesAreSufficient(results.exchangeRates, currencies)
            : true;
        if (shouldDownloadFreshResults)
            results = await ratesCache.readFresh();
        const validAndSufficient = ((results === null || results === void 0 ? void 0 : results.exchangeRates)
            && ratesAreSufficient(results.exchangeRates, currencies));
        const exchangeRates = validAndSufficient
            ? trimOffIrrelevantRates(results.exchangeRates, currencies)
            : undefined;
        return exchangeRates;
    }
    function ratesAreSufficient(rates, currencies) {
        const exchangeKeys = Object.keys(rates);
        const currenciesMissingInRates = currencies.filter(currency => exchangeKeys.indexOf(currency) === -1);
        return currenciesMissingInRates.length
            ? false
            : true;
    }
    function trimOffIrrelevantRates(rates, currencies) {
        const relevant = {};
        for (const code of currencies)
            relevant[code] = rates[code];
        return relevant;
    }

    const oneHour = 1000 * 60 * 60;
    const defaultPersistenceStorageKeys = Object.freeze({
        exchangeRatesCache: "crnc-exchange-rates-cache",
        currencyPreference: "crnc-currency-preference",
    });
    const defaultPersistence = () => ({
        storage: window.localStorage,
        cacheLifespan: oneHour,
        storageKeys: defaultPersistenceStorageKeys,
    });
    const defaultListenForStorageChange = ((persistence) => ({ reloadCurrencyPreference }) => window.addEventListener("storage", storageEvent => {
        const storageEventIsRelevant = storageEvent.storageArea === persistence.storage
            && storageEvent.key === persistence.storageKeys.currencyPreference;
        if (storageEventIsRelevant)
            reloadCurrencyPreference();
    }));

    async function requestXml(link) {
        const response = await fetch(link);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        return xml;
    }

    const bankOfCanadaSupportedCurrencies = [
        "CAD",
        "AUD",
        "BRL",
        "CNY",
        "EUR",
        "HKD",
        "INR",
        "IDR",
        "JPY",
        "MYR",
        "MXN",
        "NZD",
        "NOK",
        "PEN",
        "RUB",
        "SAR",
        "SGD",
        "ZAR",
        "KRW",
        "SEK",
        "CHF",
        "TWD",
        "THB",
        "TRY",
        "GBP",
        "USD",
        "VND",
    ];
    function filterOutCurrenciesNotSupportedByBankOfCanada(currencies) {
        return currencies.filter(currency => bankOfCanadaSupportedCurrencies.indexOf(currency) !== -1);
    }

    /**
     * Download exchange rates
     * - from bank of canada valet service https://www.bankofcanada.ca/valet/docs
     */
    async function downloadExchangeRates({ currencies, }) {
        currencies = filterOutCurrenciesNotSupportedByBankOfCanada(currencies);
        const canadian = "CAD";
        const nonCanadianOnly = (currency) => currency !== canadian;
        const toBankOfCanadaSeries = (currency) => `FX${currency}${canadian}`;
        const series = currencies
            .filter(nonCanadianOnly)
            .map(toBankOfCanadaSeries)
            .join(",");
        const url = `https://www.bankofcanada.ca/valet/fx_rss/${series}`;
        const xml = await requestXml(url);
        const exchangeRateElements = Array.from(xml.querySelectorAll("exchangeRate"));
        const rawRates = exchangeRateElements.map(element => {
            const value = parseFloat(element.querySelector("value").textContent);
            const currency = element.querySelector("targetCurrency").textContent;
            return { currency, value };
        });
        const exchangeRates = {};
        exchangeRates["CAD"] = 1.0;
        for (const rate of rawRates)
            exchangeRates[rate.currency] = 1 / rate.value;
        return { exchangeRates };
    }

    const currencyLibrary = currencyLibrary$1;
    function makeCurrencyConverter({ baseCurrency, currencies = [baseCurrency], locale = locale2(), persistence = defaultPersistence(), downloadExchangeRates: downloadExchangeRates$1 = downloadExchangeRates, listenForStorageChange = defaultListenForStorageChange(persistence), }) {
        const validated = validateConverterParams({ baseCurrency, currencies, currencyLibrary });
        currencies = validated.currencies;
        baseCurrency = validated.baseCurrency;
        const isOnlyBaseCurrency = currencies.length === 1;
        const snap = snapstate({
            currencyPreference: baseCurrency,
            exchangeRates: undefined,
        });
        let exchangeRatesDownload = Promise.resolve();
        if (!isOnlyBaseCurrency) {
            exchangeRatesDownload = rememberOrDownloadExchangeRates({
                currencies,
                persistence,
                downloadExchangeRates: downloadExchangeRates$1,
            })
                .then(rates => snap.state.exchangeRates = rates)
                .catch(() => { });
        }
        function getAvailableCurrencies() {
            const { exchangeRates } = snap.state;
            return exchangeRates
                ? getDetailsForCurrencies([baseCurrency, ...Object.keys(exchangeRates)], currencyLibrary)
                : getDetailsForCurrencies([baseCurrency], currencyLibrary);
        }
        function getTargetCurrency() {
            const { currencyPreference } = snap.state;
            const preferenceIsAvailable = Object.keys(getAvailableCurrencies())
                .indexOf(currencyPreference) !== -1;
            return preferenceIsAvailable
                ? currencyPreference
                : baseCurrency;
        }
        function updateLocalCurrencyPreference(code) {
            code = code
                ? code.toUpperCase()
                : assumeUserCurrency({
                    locale,
                    currencies,
                    currenciesByLocales,
                    fallback: baseCurrency,
                });
            const display = isCurrencyAllowed(code, currencies)
                ? code
                : baseCurrency;
            snap.state.currencyPreference = display;
        }
        const reloadCurrencyPreference = () => updateLocalCurrencyPreference(persistence.storage.getItem(persistence.storageKeys.currencyPreference));
        reloadCurrencyPreference();
        listenForStorageChange({ reloadCurrencyPreference });
        return {
            snap: restricted(snap),
            get exchangeRatesDownload() {
                return exchangeRatesDownload;
            },
            get baseCurrency() {
                return baseCurrency;
            },
            get currencyPreference() {
                return snap.readable.currencyPreference;
            },
            get targetCurrency() {
                return getTargetCurrency();
            },
            get availableCurrencies() {
                return getAvailableCurrencies();
            },
            setCurrencyPreference(currency) {
                currency = currency.toUpperCase();
                updateLocalCurrencyPreference(currency);
                persistence.storage.setItem(persistence.storageKeys.currencyPreference, snap.state.currencyPreference);
            },
            display(valueInBaseCurrency, { currency, precision = 2 } = {}) {
                const { exchangeRates } = snap.state;
                currency = currency
                    ? Object.keys(getAvailableCurrencies()).includes(currency)
                        ? currency
                        : getTargetCurrency()
                    : getTargetCurrency();
                const conversionMustHappen = baseCurrency !== currency;
                return (conversionMustHappen && exchangeRates)
                    ? convertAndFormatCurrency({
                        value: valueInBaseCurrency,
                        locale,
                        precision,
                        exchangeRates,
                        inputCurrency: baseCurrency,
                        outputCurrency: currency,
                    })
                    : formatCurrency({
                        locale,
                        precision,
                        currencyLibrary,
                        code: baseCurrency,
                        value: valueInBaseCurrency,
                    });
            },
        };
    }

    var themeCss = i$8 `

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:focus {
	outline: var(--focus-outline, 3px solid cyan);
}

`;

    let Component$1 = class Component extends s$7 {
    };
    Component$1.styles = [themeCss];

    function arrayize$1(item) {
        return [item].flat();
    }
    const notUndefined$1 = (x) => x !== undefined;
    function combineStyles$1(parentStyles, newStyles) {
        var _a;
        const styles = [
            ...((_a = arrayize$1(parentStyles)) !== null && _a !== void 0 ? _a : []),
            ...arrayize$1(newStyles),
        ];
        return styles
            .flat()
            .filter(notUndefined$1);
    }
    function mixinStyles(...newStyles) {
        return function (Base) {
            var _a;
            return _a = class extends Base {
                },
                _a.styles = combineStyles$1(Base.styles, newStyles),
                _a;
        };
    }

    function calculatePercentOff({ currentValue, comparisonValue }) {
        const difference = comparisonValue - currentValue;
        const fraction = difference / comparisonValue;
        const percentage = Math.round(fraction * 100);
        return percentage;
    }

    function mixinContext(providedContext) {
        return function (Base) {
            return class extends Base {
                get context() {
                    return providedContext;
                }
            };
        };
    }
    function mixinRequireContext(name) {
        return function (Base) {
            return class extends Base {
                get context() {
                    throw new Error(`context required by component${name ? " " + name : ""}`);
                }
            };
        };
    }

    var crncPriceCss = i$8 `

:host {
	display: inline-block;
}

.price-display {
	display: flex;
	flex-direction: var(--price-display-flex-direction, column);
	align-items: var(--price-display-align-items, flex-start);
}

.price-display > div {
	flex: 1 1 auto;
}

.price-area {
	position: relative;
}

.price-display > .price-area > span {
	display: inline-block;
}

.symbol {
	vertical-align: top;
}

.price-area .amount {
	font-size: 1.5em;
}

.compared .amount {
	font-size: 1em;
}

button {
	border: none;
	background: transparent;
	font: inherit;
	color: inherit;
	text-align: inherit;
	line-height: 1em;
}

.code {
	padding: 0.1em;
	display: inline-block;
	border: 1px solid transparent;
	border-radius: 3px;
}

.price-display[data-menu-is-allowed] .code {
	cursor: pointer;
}

.price-display[data-menu-is-allowed] .code:hover {
	border: var(
		--price-display-code-hover-border,
		1px solid rgba(128,128,128, 0.5)
	);
}

.code .down {
	opacity: 0.5;
	margin-left: 0.2em;
}

.menu {
	list-style: none;
	position: absolute;
	font-size: var(--price-display-menu-font-size, 1rem);
	top: 100%;
	left: 0;
	width: 100%;
	min-width: var(--price-display-menu-min-width, 14em);
	z-index: 1;
	text-align: left;
	color: var(--price-display-menu-color, #222);
	white-space: normal;
}

/* disable the triangle nub
.menu::before {
	position: absolute;
	content: "";
	display: block;
	width: 0px;
	height: 0px;
	border: 10px solid transparent;
	border-bottom-color: var(--price-display-menu-background, white);
	top: -20px;
	left: 0;
	right: 0;
	margin: auto;
}
*/

:host([right]) .menu {
	left: unset;
	right: 0;
}

.menu > li > button {
	display: block;
	width: 100%;
	cursor: pointer;
	background: var(--price-display-menu-background, white);
}

.menu > li:first-child > button {
	border-radius:
		var(--price-display-menu-border-radius, 5px)
		var(--price-display-menu-border-radius, 5px)
		0 0;
}

.menu > *:last-child {
	border-radius:
		0 0
		var(--price-display-menu-border-radius, 5px)
		var(--price-display-menu-border-radius, 5px);
}

.menu-note,
.menu > li > button {
	padding: 0.6rem;
}

.menu-note {
	padding: 0.2rem 0.6rem;
}

.menu > li > button:hover,
.menu > li > button:focus {
	background: var(--price-display-menu-hover-background, deepskyblue);
	color: var(--price-display-menu-hover-color, white);
}
.menu > li > button:active {
	background: var(--price-display-menu-active-background, #0080ab);
	color: var(--price-display-menu-active-color, unset);
}

.menu > li > button > span {
	vertical-align: middle;
}

.menu-symbol {
	font-weight: bold;
}

.menu-star {
	opacity: 0.75;
}

.menu-name {
	margin-left: 0.5em;
}

.menu-note {
	font-size: var(--price-display-menu-font-size, 0.8em);
	font-style: var(--price-display-menu-font-style, italic);
	color: var(--price-display-menu-note-color, #222222bd);
	background: var(--price-display-menu-note-background, #f9e996);
}

.blanket {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0,0,0, 0.5);
	z-index: 1;
	backdrop-filter: var(--price-display-blanket-backdrop, blur(5px));
	-webkit-backdrop-filter: var(--price-display-blanket-backdrop, blur(5px));
}

.discount-area {
	display: flex;
	font-size: var(--price-display-discount-area-font-size, 1em);
	flex-direction: var(--price-display-discount-area-flex-direction, row);
}

.discount-area > * {
	margin: 0 0.1em;
}

.compared {
	font-size: var(--price-display-compared-font-size, 1em);
	opacity: var(--price-display-compared-opacity, 0.3);
}

.compared .amount {
	text-decoration: line-through;
}

.compared, .percent-off {
	display: flex;
	align-items: center;
}

.compared .symbol {
	font-size: 0.7em;
	align-self: flex-start;
}

.percent-off {
	opacity: var(--price-display-percent-off-opacity, 0.5);
	font-size: var(--price-display-percent-off-font-size, 1em);
	padding: var(--price-display-percent-off-padding, 0 0.2em);
	color: var(--price-display-percent-off-color, inherit);
	background: var(--price-display-percent-off-background, transparent);
	border: var(--price-display-percent-off-border, none);
	border-radius: var(--price-display-percent-off-border-radius, 3px);
}

`;

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __classPrivateFieldGet$A = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _CrncPrice_instances, _CrncPrice_toggleMenu, _CrncPrice_prepareMenuClickHandler, _CrncPrice_renderValidPrice, _CrncPrice_renderCurrencyCode, _CrncPrice_renderNoValue;
    var CrncPrice_1;
    let CrncPrice = CrncPrice_1 = class CrncPrice extends mixinRequireContext()(Component$1) {
        constructor() {
            super(...arguments);
            _CrncPrice_instances.add(this);
            this.right = false;
            _CrncPrice_toggleMenu.set(this, () => {
                this["menu-is-open"] = !this["menu-is-open"];
            });
            _CrncPrice_prepareMenuClickHandler.set(this, (currency) => () => {
                this.context.currencyConverter.setCurrencyPreference(currency);
                __classPrivateFieldGet$A(this, _CrncPrice_toggleMenu, "f").call(this);
            });
        }
        static withContext(context) {
            return mixinContext(context)(CrncPrice_1);
        }
        render() {
            const { value } = this;
            return value !== undefined
                ? __classPrivateFieldGet$A(this, _CrncPrice_instances, "m", _CrncPrice_renderValidPrice).call(this, value)
                : __classPrivateFieldGet$A(this, _CrncPrice_instances, "m", _CrncPrice_renderNoValue).call(this);
        }
    };
    _CrncPrice_toggleMenu = new WeakMap(), _CrncPrice_prepareMenuClickHandler = new WeakMap(), _CrncPrice_instances = new WeakSet(), _CrncPrice_renderValidPrice = function _CrncPrice_renderValidPrice(value) {
        const { currencyConverter } = this.context;
        const { baseCurrency, availableCurrencies } = currencyConverter;
        const { currency, precision, comparison, "menu-is-open": menuIsOpen, } = this;
        const money = currencyConverter.display(value, { currency, precision });
        const currencyIsConverted = money.currency.code !== baseCurrency;
        const conversionMark = currencyIsConverted ? "*" : "";
        const comparedMoney = comparison
            ? currencyConverter.display(comparison, { currency, precision })
            : undefined;
        const isOnlyBaseCurrency = Object.keys(currencyConverter.availableCurrencies).length === 1;
        const menuIsAllowed = !(isOnlyBaseCurrency || currency);
        const codeButtonClick = menuIsAllowed
            ? __classPrivateFieldGet$A(this, _CrncPrice_toggleMenu, "f")
            : () => { };
        const showComparison = comparedMoney
            ? comparedMoney.value > money.value
            : false;
        return x$1 `
			<div class="price-display" ?data-menu-is-allowed=${menuIsAllowed}>
				<div class="price-area">
					<span class="symbol">${money.currency.symbol}</span
					><span class="amount">${money.amount}</span>
					${__classPrivateFieldGet$A(this, _CrncPrice_instances, "m", _CrncPrice_renderCurrencyCode).call(this, {
        currencyCode: money.currency.code,
        menuIsAllowed,
        conversionMark,
        currencyIsConverted,
        codeButtonClick,
    })}
					${menuIsOpen ? x$1 `
						<div class="blanket" @click=${__classPrivateFieldGet$A(this, _CrncPrice_toggleMenu, "f")}></div>
						<ul class="menu">
							${Object.values(availableCurrencies).map(({ symbol, code, name }) => x$1 `
								<li>
									<button @click=${__classPrivateFieldGet$A(this, _CrncPrice_prepareMenuClickHandler, "f").call(this, code)}>
										<span class="menu-symbol">${symbol}</span
										><span class="menu-star">${code === baseCurrency ? "" : "*"}</span>
										<span class="menu-name">${name}</span>
									</button>
								</li>
							`)}
							<div class="menu-note">
								<slot name="menu-note">
									* converted currency: prices are estimates and may be 
									different at checkout
								</slot>
							</div>
						</ul>
					` : x$1 ``}
				</div>
				${showComparison ? x$1 `
					<div class="discount-area">
						<span class="compared">
							<span class="symbol">${comparedMoney.currency.symbol}</span
							><span class="amount">${comparedMoney.amount}</span>
						</span>
						<span class="percent-off">
							${calculatePercentOff({
        currentValue: money.value,
        comparisonValue: comparedMoney.value,
    })}% off
						</span>
					</div>
				` : null}
			</div>
		`;
    }, _CrncPrice_renderCurrencyCode = function _CrncPrice_renderCurrencyCode({ currencyCode, conversionMark, menuIsAllowed, currencyIsConverted, codeButtonClick, }) {
        const codeButtonTitle = currencyIsConverted
            ? "estimated currency conversion"
            : "";
        return menuIsAllowed
            ? x$1 `
				<button class="code" @click=${codeButtonClick} title=${codeButtonTitle}>
					${currencyCode}${conversionMark}<span class="down">▼</span>
				</button>
			`
            : x$1 `
				<span class="code" @click=${codeButtonClick} title=${codeButtonTitle}>
					${currencyCode}${conversionMark}
				</span>
			`;
    }, _CrncPrice_renderNoValue = function _CrncPrice_renderNoValue() {
        return x$1 `
			--
		`;
    };
    __decorate([
        e$8({ type: Number, reflect: true })
    ], CrncPrice.prototype, "value", void 0);
    __decorate([
        e$8({ type: String, reflect: true })
    ], CrncPrice.prototype, "currency", void 0);
    __decorate([
        e$8({ type: Number, reflect: true })
    ], CrncPrice.prototype, "precision", void 0);
    __decorate([
        e$8({ type: Number, reflect: true })
    ], CrncPrice.prototype, "comparison", void 0);
    __decorate([
        e$8({ type: Boolean, reflect: true })
    ], CrncPrice.prototype, "right", void 0);
    __decorate([
        e$8({ type: Boolean, reflect: true })
    ], CrncPrice.prototype, "menu-is-open", void 0);
    CrncPrice = CrncPrice_1 = __decorate([
        mixinStyles(crncPriceCss)
    ], CrncPrice);

    const themeComponents = (theme, components) => {
        return objectMap(components, Component => mixinStyles(theme)(Component));
    };

    var __classPrivateFieldSet$s = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$z = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    function mixinSnapstateSubscriptions(...subscribes) {
        return function (Base) {
            var _unsubscribes, _a;
            return _a = class extends Base {
                    constructor() {
                        super(...arguments);
                        _unsubscribes.set(this, []);
                    }
                    connectedCallback() {
                        super.connectedCallback();
                        const update = () => { this.requestUpdate(); };
                        __classPrivateFieldSet$s(this, _unsubscribes, subscribes.map(subscribe => subscribe(update)), "f");
                    }
                    disconnectedCallback() {
                        super.disconnectedCallback();
                        for (const unsubscribe of __classPrivateFieldGet$z(this, _unsubscribes, "f"))
                            unsubscribe();
                        __classPrivateFieldSet$s(this, _unsubscribes, [], "f");
                    }
                },
                _unsubscribes = new WeakMap(),
                _a;
        };
    }

    function prepareComponents({ currencyConverter }) {
        const components = themeComponents(themeCss, {
            CrncPrice: mixinSnapstateSubscriptions(currencyConverter.snap.subscribe)(CrncPrice.withContext({ currencyConverter })),
        });
        return components;
    }

    function parseConfig({ baseCurrency, errorLabel = "<crnc-config> error:", ...raw }) {
        if (!baseCurrency)
            throw new Error(`${errorLabel} "base-currency" attribute is required.`);
        const currencies = raw.currencies
            ? raw.currencies
                .split(/[\s,]+/)
                .map(c => c.trim())
                .filter(c => c.length > 0)
            : [baseCurrency];
        if (!currencies)
            throw new Error(`${errorLabel} "currencies" attribute is required.`);
        return { baseCurrency, currencies };
    }

    function setupCrnc(config) {
        const { baseCurrency, currencies } = parseConfig({
            baseCurrency: config.baseCurrency,
            currencies: config.currencies,
            errorLabel: "<shopper-config> error:",
        });
        try {
            const currencyConverter = makeCurrencyConverter({
                baseCurrency,
                currencies,
            });
            const components = prepareComponents({ currencyConverter });
            return { currencyConverter, components };
        }
        catch (error) {
            error.message = `shopper startup error in crnc: ${error.message}`;
            throw error;
        }
    }

    class SimpleDataStore {
        constructor({ storage }) {
            this._storage = storage;
        }
        async getItem(key) {
            return this._storage.getItem(key);
        }
        async setItem(key, value) {
            return this._storage.setItem(key, value);
        }
    }

    function createCartStorage({ key, dataStore }) {
        let loaded = false;
        return {
            async saveCart(catalog) {
                if (!loaded)
                    return;
                const store = {};
                for (const { product, quantity } of catalog) {
                    store[product.id] = { quantity };
                }
                await dataStore.setItem(key, JSON.stringify(store));
            },
            async loadCart(catalog) {
                try {
                    const raw = await dataStore.getItem(key);
                    loaded = true;
                    if (!raw)
                        return;
                    const store = JSON.parse(raw);
                    for (const [id, data] of Object.entries(store)) {
                        const gid = shopifyUnknownToGid(id);
                        const item = catalog.find(item => item.product.id === gid);
                        if (item)
                            item.quantity = data.quantity;
                    }
                }
                catch (error) {
                    console.error("error reading cart", error);
                }
            },
        };
    }

    function dashify$2(camel) {
        return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    }
    function registerComponents$1(components) {
        for (const componentName of Object.keys(components))
            customElements.define(dashify$2(componentName), components[componentName]);
    }

    function provideModel(model, C) {
        var _a;
        return _a = class extends C {
            },
            _a.model = model,
            _a;
    }

    function wireModelToComponents(model, components) {
        const newComponents = {};
        for (const [key, value] of Object.entries(components)) {
            newComponents[key] = provideModel(model, value);
        }
        return newComponents;
    }

    async function setupShopper({ 
    // parse shopper config
    config = parseConfig$1(select("shopper-config")), 
    // cart storage mechanism
    cartStorage = createCartStorage({
        key: "shopper-cart",
        dataStore: new SimpleDataStore({ storage: localStorage })
    }), } = {}) {
        // assemble the shopper model
        const { model, loadCatalog, refreshCartStorage } = assembleModel({
            ...config,
            cartStorage
        });
        // listen for localstorage changes
        window.addEventListener("storage", refreshCartStorage);
        // prepare the crnc converter and components
        const crncSetup = setupCrnc(config);
        // wire the model to the components, and register those components
        registerComponents$1({
            QuantityInput,
            ...wireModelToComponents(model, {
                ShopperCart,
                ShopperButton,
                ShopperProduct,
                ShopperCollection,
            }),
            ...crncSetup.components,
        });
        // do a bunch of concurrent stuff
        await Promise.all([
            // begin loading the catalog from shopify
            loadCatalog()
                // specify how the cart interacts with the menu system
                .then(() => wireCartToMenuDisplay({
                cartSelector: dashify$2(ShopperCart.name)
            })),
            // wait for crnc exchange rates to download
            crncSetup.currencyConverter.exchangeRatesDownload,
        ]);
    }

    setupShopper()
        .catch(error => console.error("shopper failed to initialize", error));

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * True if the custom elements polyfill is in use.
     */
    const isCEPolyfill = typeof window !== 'undefined' &&
        window.customElements != null &&
        window.customElements.polyfillWrapFlushCallback !==
            undefined;
    /**
     * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
     * `container`.
     */
    const removeNodes = (container, start, end = null) => {
        while (start !== end) {
            const n = start.nextSibling;
            container.removeChild(start);
            start = n;
        }
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
    /**
     * An expression marker used text-positions, multi-binding attributes, and
     * attributes with markup-like text values.
     */
    const nodeMarker = `<!--${marker}-->`;
    const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
    /**
     * Suffix appended to all bound attribute names.
     */
    const boundAttributeSuffix = '$lit$';
    /**
     * An updatable Template that tracks the location of dynamic parts.
     */
    class Template {
        constructor(result, element) {
            this.parts = [];
            this.element = element;
            const nodesToRemove = [];
            const stack = [];
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            let index = -1;
            let partIndex = 0;
            const { strings, values: { length } } = result;
            while (partIndex < length) {
                const node = walker.nextNode();
                if (node === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    continue;
                }
                index++;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        const { length } = attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondence between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < length; i++) {
                            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            node.removeAttribute(attributeLookupName);
                            const statics = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings: statics });
                            partIndex += statics.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            let insert;
                            let s = strings[i];
                            if (s === '') {
                                insert = createMarker();
                            }
                            else {
                                const match = lastAttributeNameRegex.exec(s);
                                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                    s = s.slice(0, match.index) + match[1] +
                                        match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                                }
                                insert = document.createTextNode(s);
                            }
                            parent.insertBefore(insert, node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                            partIndex++;
                        }
                    }
                }
            }
            // Remove text binding nodes after the walk to not disturb the TreeWalker
            for (const n of nodesToRemove) {
                n.parentNode.removeChild(n);
            }
        }
    }
    const endsWith = (str, suffix) => {
        const index = str.length - suffix.length;
        return index >= 0 && str.slice(index) === suffix;
    };
    const isTemplatePartActive = (part) => part.index !== -1;
    // Allows `document.createComment('')` to be renamed for a
    // small manual size-savings.
    const createMarker = () => document.createComment('');
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#elements-attributes
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-characters
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
     * space character except " ".
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    const lastAttributeNameRegex = 
    // eslint-disable-next-line no-control-regex
    /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
    /**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1,
     * removed 4 nodes)
     */
    function removeNodesFromTemplate(template, nodesToRemove) {
        const { element: { content }, parts } = template;
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let part = parts[partIndex];
        let nodeIndex = -1;
        let removeCount = 0;
        const nodesToRemoveInTemplate = [];
        let currentRemovingNode = null;
        while (walker.nextNode()) {
            nodeIndex++;
            const node = walker.currentNode;
            // End removal if stepped past the removing node
            if (node.previousSibling === currentRemovingNode) {
                currentRemovingNode = null;
            }
            // A node to remove was found in the template
            if (nodesToRemove.has(node)) {
                nodesToRemoveInTemplate.push(node);
                // Track node we're removing
                if (currentRemovingNode === null) {
                    currentRemovingNode = node;
                }
            }
            // When removing, increment count by which to adjust subsequent part indices
            if (currentRemovingNode !== null) {
                removeCount++;
            }
            while (part !== undefined && part.index === nodeIndex) {
                // If part is in a removed node deactivate it by setting index to -1 or
                // adjust the index as needed.
                part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                // go to the next active part.
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                part = parts[partIndex];
            }
        }
        nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
    }
    const countNodes = (node) => {
        let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
        const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
        while (walker.nextNode()) {
            count++;
        }
        return count;
    };
    const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
        for (let i = startIndex + 1; i < parts.length; i++) {
            const part = parts[i];
            if (isTemplatePartActive(part)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */
    function insertNodeIntoTemplate(template, node, refNode = null) {
        const { element: { content }, parts } = template;
        // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.
        if (refNode === null || refNode === undefined) {
            content.appendChild(node);
            return;
        }
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let insertCount = 0;
        let walkerIndex = -1;
        while (walker.nextNode()) {
            walkerIndex++;
            const walkerNode = walker.currentNode;
            if (walkerNode === refNode) {
                insertCount = countNodes(node);
                refNode.parentNode.insertBefore(node, refNode);
            }
            while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                // If we've inserted the node, simply adjust all subsequent parts
                if (insertCount > 0) {
                    while (partIndex !== -1) {
                        parts[partIndex].index += insertCount;
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                    return;
                }
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            }
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const directives = new WeakMap();
    const isDirective = (o) => {
        return typeof o === 'function' && directives.has(o);
    };

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    const noChange = {};
    /**
     * A sentinel value that signals a NodePart to fully clear its content.
     */
    const nothing = {};

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */
    class TemplateInstance {
        constructor(template, processor, options) {
            this.__parts = [];
            this.template = template;
            this.processor = processor;
            this.options = options;
        }
        update(values) {
            let i = 0;
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.setValue(values[i]);
                }
                i++;
            }
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.commit();
                }
            }
        }
        _clone() {
            // There are a number of steps in the lifecycle of a template instance's
            // DOM fragment:
            //  1. Clone - create the instance fragment
            //  2. Adopt - adopt into the main document
            //  3. Process - find part markers and create parts
            //  4. Upgrade - upgrade custom elements
            //  5. Update - set node, attribute, property, etc., values
            //  6. Connect - connect to the document. Optional and outside of this
            //     method.
            //
            // We have a few constraints on the ordering of these steps:
            //  * We need to upgrade before updating, so that property values will pass
            //    through any property setters.
            //  * We would like to process before upgrading so that we're sure that the
            //    cloned fragment is inert and not disturbed by self-modifying DOM.
            //  * We want custom elements to upgrade even in disconnected fragments.
            //
            // Given these constraints, with full custom elements support we would
            // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
            //
            // But Safari does not implement CustomElementRegistry#upgrade, so we
            // can not implement that order and still have upgrade-before-update and
            // upgrade disconnected fragments. So we instead sacrifice the
            // process-before-upgrade constraint, since in Custom Elements v1 elements
            // must not modify their light DOM in the constructor. We still have issues
            // when co-existing with CEv0 elements like Polymer 1, and with polyfills
            // that don't strictly adhere to the no-modification rule because shadow
            // DOM, which may be created in the constructor, is emulated by being placed
            // in the light DOM.
            //
            // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
            // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
            // in one step.
            //
            // The Custom Elements v1 polyfill supports upgrade(), so the order when
            // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
            // Connect.
            const fragment = isCEPolyfill ?
                this.template.element.content.cloneNode(true) :
                document.importNode(this.template.element.content, true);
            const stack = [];
            const parts = this.template.parts;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let partIndex = 0;
            let nodeIndex = 0;
            let part;
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length) {
                part = parts[partIndex];
                if (!isTemplatePartActive(part)) {
                    this.__parts.push(undefined);
                    partIndex++;
                    continue;
                }
                // Progress the tree walker until we find our next part's node.
                // Note that multiple parts may share the same node (attribute parts
                // on a single element), so this loop may not run at all.
                while (nodeIndex < part.index) {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                    if ((node = walker.nextNode()) === null) {
                        // We've exhausted the content inside a nested template element.
                        // Because we still have parts (the outer for-loop), we know:
                        // - There is a template in the stack
                        // - The walker will find a nextNode outside the template
                        walker.currentNode = stack.pop();
                        node = walker.nextNode();
                    }
                }
                // We've arrived at our part's node.
                if (part.type === 'node') {
                    const part = this.processor.handleTextExpression(this.options);
                    part.insertAfterNode(node.previousSibling);
                    this.__parts.push(part);
                }
                else {
                    this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                }
                partIndex++;
            }
            if (isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * @module lit-html
     */
    /**
     * Our TrustedTypePolicy for HTML which is declared using the html template
     * tag function.
     *
     * That HTML is a developer-authored constant, and is parsed with innerHTML
     * before any untrusted expressions have been mixed in. Therefor it is
     * considered safe by construction.
     */
    const policy = window.trustedTypes &&
        trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
    const commentMarker = ` ${marker} `;
    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */
    class TemplateResult {
        constructor(strings, values, type, processor) {
            this.strings = strings;
            this.values = values;
            this.type = type;
            this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */
        getHTML() {
            const l = this.strings.length - 1;
            let html = '';
            let isCommentBinding = false;
            for (let i = 0; i < l; i++) {
                const s = this.strings[i];
                // For each binding we want to determine the kind of marker to insert
                // into the template source before it's parsed by the browser's HTML
                // parser. The marker type is based on whether the expression is in an
                // attribute, text, or comment position.
                //   * For node-position bindings we insert a comment with the marker
                //     sentinel as its text content, like <!--{{lit-guid}}-->.
                //   * For attribute bindings we insert just the marker sentinel for the
                //     first binding, so that we support unquoted attribute bindings.
                //     Subsequent bindings can use a comment marker because multi-binding
                //     attributes must be quoted.
                //   * For comment bindings we insert just the marker sentinel so we don't
                //     close the comment.
                //
                // The following code scans the template source, but is *not* an HTML
                // parser. We don't need to track the tree structure of the HTML, only
                // whether a binding is inside a comment, and if not, if it appears to be
                // the first binding in an attribute.
                const commentOpen = s.lastIndexOf('<!--');
                // We're in comment position if we have a comment open with no following
                // comment close. Because <-- can appear in an attribute value there can
                // be false positives.
                isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                    s.indexOf('-->', commentOpen + 1) === -1;
                // Check to see if we have an attribute-like sequence preceding the
                // expression. This can match "name=value" like structures in text,
                // comments, and attribute values, so there can be false-positives.
                const attributeMatch = lastAttributeNameRegex.exec(s);
                if (attributeMatch === null) {
                    // We're only in this branch if we don't have a attribute-like
                    // preceding sequence. For comments, this guards against unusual
                    // attribute values like <div foo="<!--${'bar'}">. Cases like
                    // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                    // below.
                    html += s + (isCommentBinding ? commentMarker : nodeMarker);
                }
                else {
                    // For attributes we use just a marker sentinel, and also append a
                    // $lit$ suffix to the name to opt-out of attribute-specific parsing
                    // that IE and Edge do for style and certain SVG attributes.
                    html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                        attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                        marker;
                }
            }
            html += this.strings[l];
            return html;
        }
        getTemplateElement() {
            const template = document.createElement('template');
            let value = this.getHTML();
            if (policy !== undefined) {
                // this is secure because `this.strings` is a TemplateStringsArray.
                // TODO: validate this when
                // https://github.com/tc39/proposal-array-is-template-object is
                // implemented.
                value = policy.createHTML(value);
            }
            template.innerHTML = value;
            return template;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const isPrimitive = (value) => {
        return (value === null ||
            !(typeof value === 'object' || typeof value === 'function'));
    };
    const isIterable = (value) => {
        return Array.isArray(value) ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            !!(value && value[Symbol.iterator]);
    };
    /**
     * Writes attribute values to the DOM for a group of AttributeParts bound to a
     * single attribute. The value is only set once even if there are multiple parts
     * for an attribute.
     */
    class AttributeCommitter {
        constructor(element, name, strings) {
            this.dirty = true;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.parts = [];
            for (let i = 0; i < strings.length - 1; i++) {
                this.parts[i] = this._createPart();
            }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */
        _createPart() {
            return new AttributePart(this);
        }
        _getValue() {
            const strings = this.strings;
            const l = strings.length - 1;
            const parts = this.parts;
            // If we're assigning an attribute via syntax like:
            //    attr="${foo}"  or  attr=${foo}
            // but not
            //    attr="${foo} ${bar}" or attr="${foo} baz"
            // then we don't want to coerce the attribute value into one long
            // string. Instead we want to just return the value itself directly,
            // so that sanitizeDOMValue can get the actual value rather than
            // String(value)
            // The exception is if v is an array, in which case we do want to smash
            // it together into a string without calling String() on the array.
            //
            // This also allows trusted values (when using TrustedTypes) being
            // assigned to DOM sinks without being stringified in the process.
            if (l === 1 && strings[0] === '' && strings[1] === '') {
                const v = parts[0].value;
                if (typeof v === 'symbol') {
                    return String(v);
                }
                if (typeof v === 'string' || !isIterable(v)) {
                    return v;
                }
            }
            let text = '';
            for (let i = 0; i < l; i++) {
                text += strings[i];
                const part = parts[i];
                if (part !== undefined) {
                    const v = part.value;
                    if (isPrimitive(v) || !isIterable(v)) {
                        text += typeof v === 'string' ? v : String(v);
                    }
                    else {
                        for (const t of v) {
                            text += typeof t === 'string' ? t : String(t);
                        }
                    }
                }
            }
            text += strings[l];
            return text;
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }
    /**
     * A Part that controls all or part of an attribute value.
     */
    class AttributePart {
        constructor(committer) {
            this.value = undefined;
            this.committer = committer;
        }
        setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!isDirective(value)) {
                    this.committer.dirty = true;
                }
            }
        }
        commit() {
            while (isDirective(this.value)) {
                const directive = this.value;
                this.value = noChange;
                directive(this);
            }
            if (this.value === noChange) {
                return;
            }
            this.committer.commit();
        }
    }
    /**
     * A Part that controls a location within a Node tree. Like a Range, NodePart
     * has start and end locations and can set and update the Nodes between those
     * locations.
     *
     * NodeParts support several value types: primitives, Nodes, TemplateResults,
     * as well as arrays and iterables of those types.
     */
    class NodePart {
        constructor(options) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.options = options;
        }
        /**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendInto(container) {
            this.startNode = container.appendChild(createMarker());
            this.endNode = container.appendChild(createMarker());
        }
        /**
         * Inserts this part after the `ref` node (between `ref` and `ref`'s next
         * sibling). Both `ref` and its next sibling must be static, unchanging nodes
         * such as those that appear in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendIntoPart(part) {
            part.__insert(this.startNode = createMarker());
            part.__insert(this.endNode = createMarker());
        }
        /**
         * Inserts this part after the `ref` part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterPart(ref) {
            ref.__insert(this.startNode = createMarker());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            if (this.startNode.parentNode === null) {
                return;
            }
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            const value = this.__pendingValue;
            if (value === noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this.__commitText(value);
                }
            }
            else if (value instanceof TemplateResult) {
                this.__commitTemplateResult(value);
            }
            else if (value instanceof Node) {
                this.__commitNode(value);
            }
            else if (isIterable(value)) {
                this.__commitIterable(value);
            }
            else if (value === nothing) {
                this.value = nothing;
                this.clear();
            }
            else {
                // Fallback, will render the string representation
                this.__commitText(value);
            }
        }
        __insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
        __commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this.__insert(value);
            this.value = value;
        }
        __commitText(value) {
            const node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            // If `value` isn't already a string, we explicitly convert it here in case
            // it can't be implicitly converted - i.e. it's a symbol.
            const valueAsString = typeof value === 'string' ? value : String(value);
            if (node === this.endNode.previousSibling &&
                node.nodeType === 3 /* Node.TEXT_NODE */) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = valueAsString;
            }
            else {
                this.__commitNode(document.createTextNode(valueAsString));
            }
            this.value = value;
        }
        __commitTemplateResult(value) {
            const template = this.options.templateFactory(value);
            if (this.value instanceof TemplateInstance &&
                this.value.template === template) {
                this.value.update(value.values);
            }
            else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                const instance = new TemplateInstance(template, value.processor, this.options);
                const fragment = instance._clone();
                instance.update(value.values);
                this.__commitNode(fragment);
                this.value = instance;
            }
        }
        __commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            const itemParts = this.value;
            let partIndex = 0;
            let itemPart;
            for (const item of value) {
                // Try to reuse an existing part
                itemPart = itemParts[partIndex];
                // If no existing part, create a new one
                if (itemPart === undefined) {
                    itemPart = new NodePart(this.options);
                    itemParts.push(itemPart);
                    if (partIndex === 0) {
                        itemPart.appendIntoPart(this);
                    }
                    else {
                        itemPart.insertAfterPart(itemParts[partIndex - 1]);
                    }
                }
                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
            }
            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
        clear(startNode = this.startNode) {
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }
    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */
    class BooleanAttributePart {
        constructor(element, name, strings) {
            this.value = undefined;
            this.__pendingValue = undefined;
            if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
                throw new Error('Boolean attributes can only contain a single expression');
            }
            this.element = element;
            this.name = name;
            this.strings = strings;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const value = !!this.__pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                }
                else {
                    this.element.removeAttribute(this.name);
                }
                this.value = value;
            }
            this.__pendingValue = noChange;
        }
    }
    /**
     * Sets attribute values for PropertyParts, so that the value is only set once
     * even if there are multiple parts for a property.
     *
     * If an expression controls the whole property value, then the value is simply
     * assigned to the property under control. If there are string literals or
     * multiple expressions, then the strings are expressions are interpolated into
     * a string first.
     */
    class PropertyCommitter extends AttributeCommitter {
        constructor(element, name, strings) {
            super(element, name, strings);
            this.single =
                (strings.length === 2 && strings[0] === '' && strings[1] === '');
        }
        _createPart() {
            return new PropertyPart(this);
        }
        _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return super._getValue();
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.element[this.name] = this._getValue();
            }
        }
    }
    class PropertyPart extends AttributePart {
    }
    // Detect event listener options support. If the `capture` property is read
    // from the options object, then options are supported. If not, then the third
    // argument to add/removeEventListener is interpreted as the boolean capture
    // value so we should only pass the `capture` property.
    let eventOptionsSupported = false;
    // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
    // blocks right into the body of a module
    (() => {
        try {
            const options = {
                get capture() {
                    eventOptionsSupported = true;
                    return false;
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.addEventListener('test', options, options);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.removeEventListener('test', options, options);
        }
        catch (_e) {
            // event options not supported
        }
    })();
    class EventPart {
        constructor(element, eventName, eventContext) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.element = element;
            this.eventName = eventName;
            this.eventContext = eventContext;
            this.__boundHandleEvent = (e) => this.handleEvent(e);
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const newListener = this.__pendingValue;
            const oldListener = this.value;
            const shouldRemoveListener = newListener == null ||
                oldListener != null &&
                    (newListener.capture !== oldListener.capture ||
                        newListener.once !== oldListener.once ||
                        newListener.passive !== oldListener.passive);
            const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            if (shouldAddListener) {
                this.__options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            this.value = newListener;
            this.__pendingValue = noChange;
        }
        handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            }
            else {
                this.value.handleEvent(event);
            }
        }
    }
    // We copy options because of the inconsistent behavior of browsers when reading
    // the third argument of add/removeEventListener. IE11 doesn't support options
    // at all. Chrome 41 only reads `capture` if the argument is an object.
    const getOptions = (o) => o &&
        (eventOptionsSupported ?
            { capture: o.capture, passive: o.passive, once: o.once } :
            o.capture);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function templateFactory(result) {
        let templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(result.type, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        // If the TemplateStringsArray is new, generate a key from the strings
        // This key is shared between all templates with identical content
        const key = result.strings.join(marker);
        // Check if we already have a Template for this key
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            // If we have not seen this key before, create a new Template
            template = new Template(result, result.getTemplateElement());
            // Cache the Template for this key
            templateCache.keyString.set(key, template);
        }
        // Cache all future queries for this TemplateStringsArray
        templateCache.stringsArray.set(result.strings, template);
        return template;
    }
    const templateCaches = new Map();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const parts = new WeakMap();
    /**
     * Renders a template result or other value to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result Any value renderable by NodePart - typically a TemplateResult
     *     created by evaluating a template tag like `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param options RenderOptions for the entire render tree rendered to this
     *     container. Render options must *not* change between renders to the same
     *     container, as those changes will not effect previously rendered DOM.
     */
    const render$1 = (result, container, options) => {
        let part = parts.get(container);
        if (part === undefined) {
            removeNodes(container, container.firstChild);
            parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
            part.appendInto(container);
        }
        part.setValue(result);
        part.commit();
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Creates Parts when a template is instantiated.
     */
    class DefaultTemplateProcessor {
        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        handleAttributeExpressions(element, name, strings, options) {
            const prefix = name[0];
            if (prefix === '.') {
                const committer = new PropertyCommitter(element, name.slice(1), strings);
                return committer.parts;
            }
            if (prefix === '@') {
                return [new EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new BooleanAttributePart(element, name.slice(1), strings)];
            }
            const committer = new AttributeCommitter(element, name, strings);
            return committer.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */
        handleTextExpression(options) {
            return new NodePart(options);
        }
    }
    const defaultTemplateProcessor = new DefaultTemplateProcessor();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     *
     * Main lit-html module.
     *
     * Main exports:
     *
     * -  [[html]]
     * -  [[svg]]
     * -  [[render]]
     *
     * @packageDocumentation
     */
    /**
     * Do not remove this comment; it keeps typedoc from misplacing the module
     * docs.
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for lit-html usage.
    // TODO(justinfagnani): inject version number at build time
    if (typeof window !== 'undefined') {
        (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
    }
    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    const html$1 = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Module to add shady DOM/shady CSS polyfill support to lit-html template
     * rendering. See the [[render]] method for details.
     *
     * @packageDocumentation
     */
    /**
     * Do not remove this comment; it keeps typedoc from misplacing the module
     * docs.
     */
    // Get a key to lookup in `templateCaches`.
    const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
    let compatibleShadyCSSVersion = true;
    if (typeof window.ShadyCSS === 'undefined') {
        compatibleShadyCSSVersion = false;
    }
    else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
        console.warn(`Incompatible ShadyCSS version detected. ` +
            `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
            `@webcomponents/shadycss@1.3.1.`);
        compatibleShadyCSSVersion = false;
    }
    /**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */
    const shadyTemplateFactory = (scopeName) => (result) => {
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        const key = result.strings.join(marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) {
                window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }
            template = new Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
    const TEMPLATE_TYPES = ['html', 'svg'];
    /**
     * Removes all style elements from Templates for the given scopeName.
     */
    const removeStylesFromLitTemplates = (scopeName) => {
        TEMPLATE_TYPES.forEach((type) => {
            const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
            if (templates !== undefined) {
                templates.keyString.forEach((template) => {
                    const { element: { content } } = template;
                    // IE 11 doesn't support the iterable param Set constructor
                    const styles = new Set();
                    Array.from(content.querySelectorAll('style')).forEach((s) => {
                        styles.add(s);
                    });
                    removeNodesFromTemplate(template, styles);
                });
            }
        });
    };
    const shadyRenderSet = new Set();
    /**
     * For the given scope name, ensures that ShadyCSS style scoping is performed.
     * This is done just once per scope name so the fragment and template cannot
     * be modified.
     * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
     * to be scoped and appended to the document
     * (2) removes style elements from all lit-html Templates for this scope name.
     *
     * Note, <style> elements can only be placed into templates for the
     * initial rendering of the scope. If <style> elements are included in templates
     * dynamically rendered to the scope (after the first scope render), they will
     * not be scoped and the <style> will be left in the template and rendered
     * output.
     */
    const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
        shadyRenderSet.add(scopeName);
        // If `renderedDOM` is stamped from a Template, then we need to edit that
        // Template's underlying template element. Otherwise, we create one here
        // to give to ShadyCSS, which still requires one while scoping.
        const templateElement = !!template ? template.element : document.createElement('template');
        // Move styles out of rendered DOM and store.
        const styles = renderedDOM.querySelectorAll('style');
        const { length } = styles;
        // If there are no styles, skip unnecessary work
        if (length === 0) {
            // Ensure prepareTemplateStyles is called to support adding
            // styles via `prepareAdoptedCssText` since that requires that
            // `prepareTemplateStyles` is called.
            //
            // ShadyCSS will only update styles containing @apply in the template
            // given to `prepareTemplateStyles`. If no lit Template was given,
            // ShadyCSS will not be able to update uses of @apply in any relevant
            // template. However, this is not a problem because we only create the
            // template for the purpose of supporting `prepareAdoptedCssText`,
            // which doesn't support @apply at all.
            window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
            return;
        }
        const condensedStyle = document.createElement('style');
        // Collect styles into a single style. This helps us make sure ShadyCSS
        // manipulations will not prevent us from being able to fix up template
        // part indices.
        // NOTE: collecting styles is inefficient for browsers but ShadyCSS
        // currently does this anyway. When it does not, this should be changed.
        for (let i = 0; i < length; i++) {
            const style = styles[i];
            style.parentNode.removeChild(style);
            condensedStyle.textContent += style.textContent;
        }
        // Remove styles from nested templates in this scope.
        removeStylesFromLitTemplates(scopeName);
        // And then put the condensed style into the "root" template passed in as
        // `template`.
        const content = templateElement.content;
        if (!!template) {
            insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
        }
        else {
            content.insertBefore(condensedStyle, content.firstChild);
        }
        // Note, it's important that ShadyCSS gets the template that `lit-html`
        // will actually render so that it can update the style inside when
        // needed (e.g. @apply native Shadow DOM case).
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        const style = content.querySelector('style');
        if (window.ShadyCSS.nativeShadow && style !== null) {
            // When in native Shadow DOM, ensure the style created by ShadyCSS is
            // included in initially rendered output (`renderedDOM`).
            renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
        }
        else if (!!template) {
            // When no style is left in the template, parts will be broken as a
            // result. To fix this, we put back the style node ShadyCSS removed
            // and then tell lit to remove that node from the template.
            // There can be no style in the template in 2 cases (1) when Shady DOM
            // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
            // is in use ShadyCSS removes the style if it contains no content.
            // NOTE, ShadyCSS creates its own style so we can safely add/remove
            // `condensedStyle` here.
            content.insertBefore(condensedStyle, content.firstChild);
            const removes = new Set();
            removes.add(condensedStyle);
            removeNodesFromTemplate(template, removes);
        }
    };
    /**
     * Extension to the standard `render` method which supports rendering
     * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
     * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
     * or when the webcomponentsjs
     * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
     *
     * Adds a `scopeName` option which is used to scope element DOM and stylesheets
     * when native ShadowDOM is unavailable. The `scopeName` will be added to
     * the class attribute of all rendered DOM. In addition, any style elements will
     * be automatically re-written with this `scopeName` selector and moved out
     * of the rendered DOM and into the document `<head>`.
     *
     * It is common to use this render method in conjunction with a custom element
     * which renders a shadowRoot. When this is done, typically the element's
     * `localName` should be used as the `scopeName`.
     *
     * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
     * custom properties (needed only on older browsers like IE11) and a shim for
     * a deprecated feature called `@apply` that supports applying a set of css
     * custom properties to a given location.
     *
     * Usage considerations:
     *
     * * Part values in `<style>` elements are only applied the first time a given
     * `scopeName` renders. Subsequent changes to parts in style elements will have
     * no effect. Because of this, parts in style elements should only be used for
     * values that will never change, for example parts that set scope-wide theme
     * values or parts which render shared style elements.
     *
     * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
     * custom element's `constructor` is not supported. Instead rendering should
     * either done asynchronously, for example at microtask timing (for example
     * `Promise.resolve()`), or be deferred until the first time the element's
     * `connectedCallback` runs.
     *
     * Usage considerations when using shimmed custom properties or `@apply`:
     *
     * * Whenever any dynamic changes are made which affect
     * css custom properties, `ShadyCSS.styleElement(element)` must be called
     * to update the element. There are two cases when this is needed:
     * (1) the element is connected to a new parent, (2) a class is added to the
     * element that causes it to match different custom properties.
     * To address the first case when rendering a custom element, `styleElement`
     * should be called in the element's `connectedCallback`.
     *
     * * Shimmed custom properties may only be defined either for an entire
     * shadowRoot (for example, in a `:host` rule) or via a rule that directly
     * matches an element with a shadowRoot. In other words, instead of flowing from
     * parent to child as do native css custom properties, shimmed custom properties
     * flow only from shadowRoots to nested shadowRoots.
     *
     * * When using `@apply` mixing css shorthand property names with
     * non-shorthand names (for example `border` and `border-width`) is not
     * supported.
     */
    const render = (result, container, options) => {
        if (!options || typeof options !== 'object' || !options.scopeName) {
            throw new Error('The `scopeName` option is required.');
        }
        const scopeName = options.scopeName;
        const hasRendered = parts.has(container);
        const needsScoping = compatibleShadyCSSVersion &&
            container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
            !!container.host;
        // Handle first render to a scope specially...
        const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
        // On first scope render, render into a fragment; this cannot be a single
        // fragment that is reused since nested renders can occur synchronously.
        const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
        render$1(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
        // When performing first scope render,
        // (1) We've rendered into a fragment so that there's a chance to
        // `prepareTemplateStyles` before sub-elements hit the DOM
        // (which might cause them to render based on a common pattern of
        // rendering in a custom element's `connectedCallback`);
        // (2) Scope the template with ShadyCSS one time only for this scope.
        // (3) Render the fragment into the container and make sure the
        // container knows its `part` is the one we just rendered. This ensures
        // DOM will be re-used on subsequent renders.
        if (firstScopeRender) {
            const part = parts.get(renderContainer);
            parts.delete(renderContainer);
            // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
            // that should apply to `renderContainer` even if the rendered value is
            // not a TemplateInstance. However, it will only insert scoped styles
            // into the document if `prepareTemplateStyles` has already been called
            // for the given scope name.
            const template = part.value instanceof TemplateInstance ?
                part.value.template :
                undefined;
            prepareTemplateStyles(scopeName, renderContainer, template);
            removeNodes(container, container.firstChild);
            container.appendChild(renderContainer);
            parts.set(container, part);
        }
        // After elements have hit the DOM, update styling if this is the
        // initial render to this container.
        // This is needed whenever dynamic changes are made so it would be
        // safest to do every render; however, this would regress performance
        // so we leave it up to the user to call `ShadyCSS.styleElement`
        // for dynamic changes.
        if (!hasRendered && needsScoping) {
            window.ShadyCSS.styleElement(container.host);
        }
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    var _a$3;
    /**
     * Use this module if you want to create your own base class extending
     * [[UpdatingElement]].
     * @packageDocumentation
     */
    /*
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
     * replaced at compile time by the munged name for object[property]. We cannot
     * alias this function, so we have to use a small shim that has the same
     * behavior when not compiling.
     */
    window.JSCompiler_renameProperty =
        (prop, _obj) => prop;
    const defaultConverter = {
        toAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value ? '' : null;
                case Object:
                case Array:
                    // if the value is `null` or `undefined` pass this through
                    // to allow removing/no change behavior.
                    return value == null ? value : JSON.stringify(value);
            }
            return value;
        },
        fromAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value !== null;
                case Number:
                    return value === null ? null : Number(value);
                case Object:
                case Array:
                    // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                    return JSON.parse(value);
            }
            return value;
        }
    };
    /**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */
    const notEqual = (value, old) => {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
    };
    const defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual
    };
    const STATE_HAS_UPDATED = 1;
    const STATE_UPDATE_REQUESTED = 1 << 2;
    const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
    const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
    /**
     * The Closure JS Compiler doesn't currently have good support for static
     * property semantics where "this" is dynamic (e.g.
     * https://github.com/google/closure-compiler/issues/3177 and others) so we use
     * this hack to bypass any rewriting by the compiler.
     */
    const finalized = 'finalized';
    /**
     * Base element class which manages element properties and attributes. When
     * properties change, the `update` method is asynchronously called. This method
     * should be supplied by subclassers to render updates as desired.
     * @noInheritDoc
     */
    class UpdatingElement extends HTMLElement {
        constructor() {
            super();
            this.initialize();
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */
        static get observedAttributes() {
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            const attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this._classProperties.forEach((v, p) => {
                const attr = this._attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    this._attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
        /**
         * Ensures the private `_classProperties` property metadata is created.
         * In addition to `finalize` this is also called in `createProperty` to
         * ensure the `@property` decorator can add property metadata.
         */
        /** @nocollapse */
        static _ensureClassProperties() {
            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                this._classProperties = new Map();
                // NOTE: Workaround IE11 not supporting Map constructor argument.
                const superProperties = Object.getPrototypeOf(this)._classProperties;
                if (superProperties !== undefined) {
                    superProperties.forEach((v, k) => this._classProperties.set(k, v));
                }
            }
        }
        /**
         * Creates a property accessor on the element prototype if one does not exist
         * and stores a PropertyDeclaration for the property with the given options.
         * The property setter calls the property's `hasChanged` property option
         * or uses a strict identity check to determine whether or not to request
         * an update.
         *
         * This method may be overridden to customize properties; however,
         * when doing so, it's important to call `super.createProperty` to ensure
         * the property is setup correctly. This method calls
         * `getPropertyDescriptor` internally to get a descriptor to install.
         * To customize what properties do when they are get or set, override
         * `getPropertyDescriptor`. To customize the options for a property,
         * implement `createProperty` like this:
         *
         * static createProperty(name, options) {
         *   options = Object.assign(options, {myOption: true});
         *   super.createProperty(name, options);
         * }
         *
         * @nocollapse
         */
        static createProperty(name, options = defaultPropertyDeclaration) {
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();
            this._classProperties.set(name, options);
            // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
                return;
            }
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
            }
        }
        /**
         * Returns a property descriptor to be defined on the given named property.
         * If no descriptor is returned, the property will not become an accessor.
         * For example,
         *
         *   class MyElement extends LitElement {
         *     static getPropertyDescriptor(name, key, options) {
         *       const defaultDescriptor =
         *           super.getPropertyDescriptor(name, key, options);
         *       const setter = defaultDescriptor.set;
         *       return {
         *         get: defaultDescriptor.get,
         *         set(value) {
         *           setter.call(this, value);
         *           // custom action.
         *         },
         *         configurable: true,
         *         enumerable: true
         *       }
         *     }
         *   }
         *
         * @nocollapse
         */
        static getPropertyDescriptor(name, key, options) {
            return {
                // tslint:disable-next-line:no-any no symbol in index
                get() {
                    return this[key];
                },
                set(value) {
                    const oldValue = this[name];
                    this[key] = value;
                    this
                        .requestUpdateInternal(name, oldValue, options);
                },
                configurable: true,
                enumerable: true
            };
        }
        /**
         * Returns the property options associated with the given property.
         * These options are defined with a PropertyDeclaration via the `properties`
         * object or the `@property` decorator and are registered in
         * `createProperty(...)`.
         *
         * Note, this method should be considered "final" and not overridden. To
         * customize the options for a given property, override `createProperty`.
         *
         * @nocollapse
         * @final
         */
        static getPropertyOptions(name) {
            return this._classProperties && this._classProperties.get(name) ||
                defaultPropertyDeclaration;
        }
        /**
         * Creates property accessors for registered properties and ensures
         * any superclasses are also finalized.
         * @nocollapse
         */
        static finalize() {
            // finalize any superclasses
            const superCtor = Object.getPrototypeOf(this);
            if (!superCtor.hasOwnProperty(finalized)) {
                superCtor.finalize();
            }
            this[finalized] = true;
            this._ensureClassProperties();
            // initialize Map populated in observedAttributes
            this._attributeToPropertyMap = new Map();
            // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                const props = this.properties;
                // support symbols in properties (IE11 does not support this)
                const propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...(typeof Object.getOwnPropertySymbols === 'function') ?
                        Object.getOwnPropertySymbols(props) :
                        []
                ];
                // This for/of is ok because propKeys is an array
                for (const p of propKeys) {
                    // note, use of `any` is due to TypeSript lack of support for symbol in
                    // index types
                    // tslint:disable-next-line:no-any no symbol in index
                    this.createProperty(p, props[p]);
                }
            }
        }
        /**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */
        static _attributeNameForProperty(name, options) {
            const attribute = options.attribute;
            return attribute === false ?
                undefined :
                (typeof attribute === 'string' ?
                    attribute :
                    (typeof name === 'string' ? name.toLowerCase() : undefined));
        }
        /**
         * Returns true if a property should request an update.
         * Called when a property value is set and uses the `hasChanged`
         * option for the property if present or a strict identity check.
         * @nocollapse
         */
        static _valueHasChanged(value, old, hasChanged = notEqual) {
            return hasChanged(value, old);
        }
        /**
         * Returns the property value for the given attribute value.
         * Called via the `attributeChangedCallback` and uses the property's
         * `converter` or `converter.fromAttribute` property option.
         * @nocollapse
         */
        static _propertyValueFromAttribute(value, options) {
            const type = options.type;
            const converter = options.converter || defaultConverter;
            const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
            return fromAttribute ? fromAttribute(value, type) : value;
        }
        /**
         * Returns the attribute value for the given property value. If this
         * returns undefined, the property will *not* be reflected to an attribute.
         * If this returns null, the attribute will be removed, otherwise the
         * attribute will be set to the value.
         * This uses the property's `reflect` and `type.toAttribute` property options.
         * @nocollapse
         */
        static _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
                return;
            }
            const type = options.type;
            const converter = options.converter;
            const toAttribute = converter && converter.toAttribute ||
                defaultConverter.toAttribute;
            return toAttribute(value, type);
        }
        /**
         * Performs element initialization. By default captures any pre-set values for
         * registered properties.
         */
        initialize() {
            this._updateState = 0;
            this._updatePromise =
                new Promise((res) => this._enableUpdatingResolver = res);
            this._changedProperties = new Map();
            this._saveInstanceProperties();
            // ensures first update will be caught by an early access of
            // `updateComplete`
            this.requestUpdateInternal();
        }
        /**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */
        _saveInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor
                ._classProperties.forEach((_v, p) => {
                if (this.hasOwnProperty(p)) {
                    const value = this[p];
                    delete this[p];
                    if (!this._instanceProperties) {
                        this._instanceProperties = new Map();
                    }
                    this._instanceProperties.set(p, value);
                }
            });
        }
        /**
         * Applies previously saved instance properties.
         */
        _applyInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach((v, p) => this[p] = v);
            this._instanceProperties = undefined;
        }
        connectedCallback() {
            // Ensure first connection completes an update. Updates cannot complete
            // before connection.
            this.enableUpdating();
        }
        enableUpdating() {
            if (this._enableUpdatingResolver !== undefined) {
                this._enableUpdatingResolver();
                this._enableUpdatingResolver = undefined;
            }
        }
        /**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         */
        disconnectedCallback() {
        }
        /**
         * Synchronizes property values when attributes change.
         */
        attributeChangedCallback(name, old, value) {
            if (old !== value) {
                this._attributeToProperty(name, value);
            }
        }
        _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
            const ctor = this.constructor;
            const attr = ctor._attributeNameForProperty(name, options);
            if (attr !== undefined) {
                const attrValue = ctor._propertyValueToAttribute(value, options);
                // an undefined value does not change the attribute.
                if (attrValue === undefined) {
                    return;
                }
                // Track if the property is being reflected to avoid
                // setting the property again via `attributeChangedCallback`. Note:
                // 1. this takes advantage of the fact that the callback is synchronous.
                // 2. will behave incorrectly if multiple attributes are in the reaction
                // stack at time of calling. However, since we process attributes
                // in `update` this should not be possible (or an extreme corner case
                // that we'd like to discover).
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
                if (attrValue == null) {
                    this.removeAttribute(attr);
                }
                else {
                    this.setAttribute(attr, attrValue);
                }
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
        }
        _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
                return;
            }
            const ctor = this.constructor;
            // Note, hint this as an `AttributeMap` so closure clearly understands
            // the type; it has issues with tracking types through statics
            // tslint:disable-next-line:no-unnecessary-type-assertion
            const propName = ctor._attributeToPropertyMap.get(name);
            if (propName !== undefined) {
                const options = ctor.getPropertyOptions(propName);
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
                this[propName] =
                    // tslint:disable-next-line:no-any
                    ctor._propertyValueFromAttribute(value, options);
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
        }
        /**
         * This protected version of `requestUpdate` does not access or return the
         * `updateComplete` promise. This promise can be overridden and is therefore
         * not free to access.
         */
        requestUpdateInternal(name, oldValue, options) {
            let shouldRequestUpdate = true;
            // If we have a property key, perform property update steps.
            if (name !== undefined) {
                const ctor = this.constructor;
                options = options || ctor.getPropertyOptions(name);
                if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                    if (!this._changedProperties.has(name)) {
                        this._changedProperties.set(name, oldValue);
                    }
                    // Add to reflecting properties set.
                    // Note, it's important that every change has a chance to add the
                    // property to `_reflectingProperties`. This ensures setting
                    // attribute + property reflects correctly.
                    if (options.reflect === true &&
                        !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                        if (this._reflectingProperties === undefined) {
                            this._reflectingProperties = new Map();
                        }
                        this._reflectingProperties.set(name, options);
                    }
                }
                else {
                    // Abort the request if the property should not be considered changed.
                    shouldRequestUpdate = false;
                }
            }
            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
                this._updatePromise = this._enqueueUpdate();
            }
        }
        /**
         * Requests an update which is processed asynchronously. This should
         * be called when an element should update based on some state not triggered
         * by setting a property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored. Returns the `updateComplete` Promise which is resolved
         * when the update completes.
         *
         * @param name {PropertyKey} (optional) name of requesting property
         * @param oldValue {any} (optional) old value of requesting property
         * @returns {Promise} A Promise that is resolved when the update completes.
         */
        requestUpdate(name, oldValue) {
            this.requestUpdateInternal(name, oldValue);
            return this.updateComplete;
        }
        /**
         * Sets up the element to asynchronously update.
         */
        async _enqueueUpdate() {
            this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
            try {
                // Ensure any previous update has resolved before updating.
                // This `await` also ensures that property changes are batched.
                await this._updatePromise;
            }
            catch (e) {
                // Ignore any previous errors. We only care that the previous cycle is
                // done. Any error should have been handled in the previous update.
            }
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
            return !this._hasRequestedUpdate;
        }
        get _hasRequestedUpdate() {
            return (this._updateState & STATE_UPDATE_REQUESTED);
        }
        get hasUpdated() {
            return (this._updateState & STATE_HAS_UPDATED);
        }
        /**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * You can override this method to change the timing of updates. If this
         * method is overridden, `super.performUpdate()` must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```
         * protected async performUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.performUpdate();
         * }
         * ```
         */
        performUpdate() {
            // Abort any update if one is not pending when this is called.
            // This can happen if `performUpdate` is called early to "flush"
            // the update.
            if (!this._hasRequestedUpdate) {
                return;
            }
            // Mixin instance properties once, if they exist.
            if (this._instanceProperties) {
                this._applyInstanceProperties();
            }
            let shouldUpdate = false;
            const changedProperties = this._changedProperties;
            try {
                shouldUpdate = this.shouldUpdate(changedProperties);
                if (shouldUpdate) {
                    this.update(changedProperties);
                }
                else {
                    this._markUpdated();
                }
            }
            catch (e) {
                // Prevent `firstUpdated` and `updated` from running when there's an
                // update exception.
                shouldUpdate = false;
                // Ensure element can accept additional updates after an exception.
                this._markUpdated();
                throw e;
            }
            if (shouldUpdate) {
                if (!(this._updateState & STATE_HAS_UPDATED)) {
                    this._updateState = this._updateState | STATE_HAS_UPDATED;
                    this.firstUpdated(changedProperties);
                }
                this.updated(changedProperties);
            }
        }
        _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
        }
        /**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `_getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super._getUpdateComplete()`, then any subsequent state.
         *
         * @returns {Promise} The Promise returns a boolean that indicates if the
         * update resolved without triggering another update.
         */
        get updateComplete() {
            return this._getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async _getUpdateComplete() {
         *       await super._getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         * @deprecated Override `getUpdateComplete()` instead for forward
         *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
         */
        _getUpdateComplete() {
            return this.getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async getUpdateComplete() {
         *       await super.getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         */
        getUpdateComplete() {
            return this._updatePromise;
        }
        /**
         * Controls whether or not `update` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        shouldUpdate(_changedProperties) {
            return true;
        }
        /**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        update(_changedProperties) {
            if (this._reflectingProperties !== undefined &&
                this._reflectingProperties.size > 0) {
                // Use forEach so this works even if for/of loops are compiled to for
                // loops expecting arrays
                this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
                this._reflectingProperties = undefined;
            }
            this._markUpdated();
        }
        /**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        updated(_changedProperties) {
        }
        /**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        firstUpdated(_changedProperties) {
        }
    }
    _a$3 = finalized;
    /**
     * Marks class as having finished creating properties.
     */
    UpdatingElement[_a$3] = true;

    /**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
    /**
     * Whether the current browser supports `adoptedStyleSheets`.
     */
    const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
        (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
        ('adoptedStyleSheets' in Document.prototype) &&
        ('replace' in CSSStyleSheet.prototype);
    const constructionToken = Symbol();
    class CSSResult {
        constructor(cssText, safeToken) {
            if (safeToken !== constructionToken) {
                throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            }
            this.cssText = cssText;
        }
        // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.
        get styleSheet() {
            if (this._styleSheet === undefined) {
                // Note, if `supportsAdoptingStyleSheets` is true then we assume
                // CSSStyleSheet is constructable.
                if (supportsAdoptingStyleSheets) {
                    this._styleSheet = new CSSStyleSheet();
                    this._styleSheet.replaceSync(this.cssText);
                }
                else {
                    this._styleSheet = null;
                }
            }
            return this._styleSheet;
        }
        toString() {
            return this.cssText;
        }
    }
    /**
     * Wrap a value for interpolation in a [[`css`]] tagged template literal.
     *
     * This is unsafe because untrusted CSS text can be used to phone home
     * or exfiltrate data to an attacker controlled site. Take care to only use
     * this with trusted input.
     */
    const unsafeCSS = (value) => {
        return new CSSResult(String(value), constructionToken);
    };
    const textFromCSSResult = (value) => {
        if (value instanceof CSSResult) {
            return value.cssText;
        }
        else if (typeof value === 'number') {
            return value;
        }
        else {
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
        }
    };
    /**
     * Template tag which which can be used with LitElement's [[LitElement.styles |
     * `styles`]] property to set element styles. For security reasons, only literal
     * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
     * may be used inside a template string part.
     */
    const css$1 = (strings, ...values) => {
        const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
        return new CSSResult(cssText, constructionToken);
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * The main LitElement module, which defines the [[`LitElement`]] base class and
     * related APIs.
     *
     *  LitElement components can define a template and a set of observed
     * properties. Changing an observed property triggers a re-render of the
     * element.
     *
     *  Import [[`LitElement`]] and [[`html`]] from this module to create a
     * component:
     *
     *  ```js
     * import {LitElement, html} from 'lit-element';
     *
     * class MyElement extends LitElement {
     *
     *   // Declare observed properties
     *   static get properties() {
     *     return {
     *       adjective: {}
     *     }
     *   }
     *
     *   constructor() {
     *     this.adjective = 'awesome';
     *   }
     *
     *   // Define the element's template
     *   render() {
     *     return html`<p>your ${adjective} template here</p>`;
     *   }
     * }
     *
     * customElements.define('my-element', MyElement);
     * ```
     *
     * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
     * The `UpdatingElement` class is provided for users that want to build
     * their own custom element base classes that don't use lit-html.
     *
     * @packageDocumentation
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for LitElement usage.
    // TODO(justinfagnani): inject version number at build time
    (window['litElementVersions'] || (window['litElementVersions'] = []))
        .push('2.5.1');
    /**
     * Sentinal value used to avoid calling lit-html's render function when
     * subclasses do not implement `render`
     */
    const renderNotImplemented = {};
    /**
     * Base element class that manages element properties and attributes, and
     * renders a lit-html template.
     *
     * To define a component, subclass `LitElement` and implement a
     * `render` method to provide the component's template. Define properties
     * using the [[`properties`]] property or the [[`property`]] decorator.
     */
    class LitElement extends UpdatingElement {
        /**
         * Return the array of styles to apply to the element.
         * Override this method to integrate into a style management system.
         *
         * @nocollapse
         */
        static getStyles() {
            return this.styles;
        }
        /** @nocollapse */
        static _getUniqueStyles() {
            // Only gather styles once per class
            if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
                return;
            }
            // Take care not to call `this.getStyles()` multiple times since this
            // generates new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.
            const userStyles = this.getStyles();
            if (Array.isArray(userStyles)) {
                // De-duplicate styles preserving the _last_ instance in the set.
                // This is a performance optimization to avoid duplicated styles that can
                // occur especially when composing via subclassing.
                // The last item is kept to try to preserve the cascade order with the
                // assumption that it's most important that last added styles override
                // previous styles.
                const addStyles = (styles, set) => styles.reduceRight((set, s) => 
                // Note: On IE set.add() does not return the set
                Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
                // Array.from does not work on Set in IE, otherwise return
                // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
                const set = addStyles(userStyles, new Set());
                const styles = [];
                set.forEach((v) => styles.unshift(v));
                this._styles = styles;
            }
            else {
                this._styles = userStyles === undefined ? [] : [userStyles];
            }
            // Ensure that there are no invalid CSSStyleSheet instances here. They are
            // invalid in two conditions.
            // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
            //     this is impossible to check except via .replaceSync or use
            // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
            //     false)
            this._styles = this._styles.map((s) => {
                if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                    // Flatten the cssText from the passed constructible stylesheet (or
                    // undetectable non-constructible stylesheet). The user might have
                    // expected to update their stylesheets over time, but the alternative
                    // is a crash.
                    const cssText = Array.prototype.slice.call(s.cssRules)
                        .reduce((css, rule) => css + rule.cssText, '');
                    return unsafeCSS(cssText);
                }
                return s;
            });
        }
        /**
         * Performs element initialization. By default this calls
         * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
         * captures any pre-set values for registered properties.
         */
        initialize() {
            super.initialize();
            this.constructor._getUniqueStyles();
            this.renderRoot = this.createRenderRoot();
            // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.
            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
                this.adoptStyles();
            }
        }
        /**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         * @returns {Element|DocumentFragment} Returns a node into which to render.
         */
        createRenderRoot() {
            return this.attachShadow(this.constructor.shadowRootOptions);
        }
        /**
         * Applies styling to the element shadowRoot using the [[`styles`]]
         * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
         * available and will fallback otherwise. When Shadow DOM is polyfilled,
         * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
         * is available but `adoptedStyleSheets` is not, styles are appended to the
         * end of the `shadowRoot` to [mimic spec
         * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
         */
        adoptStyles() {
            const styles = this.constructor._styles;
            if (styles.length === 0) {
                return;
            }
            // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering
            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
                window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
            }
            else if (supportsAdoptingStyleSheets) {
                this.renderRoot.adoptedStyleSheets =
                    styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
            }
            else {
                // This must be done after rendering so the actual style insertion is done
                // in `update`.
                this._needsShimAdoptedStyleSheets = true;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            // Note, first update/render handles styleElement so we only call this if
            // connected after first update.
            if (this.hasUpdated && window.ShadyCSS !== undefined) {
                window.ShadyCSS.styleElement(this);
            }
        }
        /**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * @param _changedProperties Map of changed properties with old values
         */
        update(changedProperties) {
            // Setting properties in `render` should not trigger an update. Since
            // updates are allowed after super.update, it's important to call `render`
            // before that.
            const templateResult = this.render();
            super.update(changedProperties);
            // If render is not implemented by the component, don't call lit-html render
            if (templateResult !== renderNotImplemented) {
                this.constructor
                    .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
            }
            // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.
            if (this._needsShimAdoptedStyleSheets) {
                this._needsShimAdoptedStyleSheets = false;
                this.constructor._styles.forEach((s) => {
                    const style = document.createElement('style');
                    style.textContent = s.cssText;
                    this.renderRoot.appendChild(style);
                });
            }
        }
        /**
         * Invoked on each update to perform rendering tasks. This method may return
         * any value renderable by lit-html's `NodePart` - typically a
         * `TemplateResult`. Setting properties inside this method will *not* trigger
         * the element to update.
         */
        render() {
            return renderNotImplemented;
        }
    }
    /**
     * Ensure this class is marked as `finalized` as an optimization ensuring
     * it will not needlessly try to `finalize`.
     *
     * Note this property name is a string to prevent breaking Closure JS Compiler
     * optimizations. See updating-element.ts for more information.
     */
    LitElement['finalized'] = true;
    /**
     * Reference to the underlying library method used to render the element's
     * DOM. By default, points to the `render` method from lit-html's shady-render
     * module.
     *
     * **Most users will never need to touch this property.**
     *
     * This  property should not be confused with the `render` instance method,
     * which should be overridden to define a template for the element.
     *
     * Advanced users creating a new base class based on LitElement can override
     * this property to point to a custom render method with a signature that
     * matches [shady-render's `render`
     * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
     *
     * @nocollapse
     */
    LitElement.render = render;
    /** @nocollapse */
    LitElement.shadowRootOptions = { mode: 'open' };

    class Component extends LitElement {}

    function getAssignedElements(slot) {
    	const nodes = Array.from(slot.assignedNodes());
    	return nodes.filter(node => node instanceof HTMLElement)
    }

    const _activeIndex = Symbol("activeIndex");
    const _forwardClickHandler = Symbol("forwardClickHandler");
    const _backwardClickHandler = Symbol("backwardClickHandler");
    const _totalSlottedElements = Symbol("totalSlottedElements");

    class CarouseCarousel extends Component {

    	static get styles() {
    		return css$1`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			*:focus {
				outline: var(--focus-outline, 2px solid #0ef);
			}

			:host {
				position: relative;
				display: flex;
				flex-direction: column;
			}

			.slate {
				display: block;
				height: 100%;
				min-width: 100px;
				min-height: 100px;
				background: var(--carouse-slate-bg, rgba(255,255,255, 0.1));
			}

			.slate button {
				opacity: 0.6;
				z-index: 2;
				position: absolute;
				display: block;
				top: 0;
				bottom: 0;
				margin: auto;
				padding: calc(var(--carouse-arrow-size, 4em) / 4);
				width: var(--carouse-arrow-size, 4em);
				height: var(--carouse-arrow-size, 4em);
				border: 0;
				background: var(--carouse-arrow-bg, rgba(100,100,100, 0.8));
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center center;
				cursor: pointer;
			}

			.slate button:hover,
			.slate button:focus {
				opacity: 0.8;
			}

			.slate button:active {
				opacity: 1;
			}

			.slate button:nth-child(1) {
				left: 0;
				background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16"><path fill="white" fill-rule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z"/></svg>');
			}

			.slate button:nth-child(2) {
				right: 0;
				background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16"><path fill="white" fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"/></svg>');
			}

			.slate button[hidden] {
				display: none;
			}

			.dots {
				z-index: 1;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: var(--carouse-dotbar-bg, rgba(0,0,0, 0.3));
			}

			.dots > button {
				opacity: 0.3;
				display: block;
				border: none;
				--dotsize: var(--carouse-dot-size, 0.8em);
				width: var(--dotsize);
				height: var(--dotsize);
				margin: calc(var(--dotsize) * 1) calc(var(--dotsize) / 3);
				border-radius: var(--dotsize);
				background: var(--carouse-dot-bg, white);
				cursor: pointer;
			}

			.dots > button:hover,
			.dots > button:focus {
				opacity: 0.6;
			}

			.dots > button[active],
			.dots > button:active {
				opacity: 1;
			}
		`
    	}

    	static get properties() {
    		return {
    			[_activeIndex]: {type: Number},
    			dots: {type: Boolean, reflect: true},
    			arrows: {type: Boolean, reflect: true},
    			loop: {type: Boolean, reflect: true}
    		}
    	}

    	constructor() {
    		super();
    		this.dots = false;
    		this.arrows = false;
    		this.loop = false;
    		this[_activeIndex] = 0;
    		this[_forwardClickHandler] = () => this.forward();
    		this[_backwardClickHandler] = () => this.backward();
    		this.shadowRoot.addEventListener("slotchange", () => this.requestUpdate());
    	}

    	// workaround for bug in edge, fix initial appearance of dots
    	// force an update 100ms after connecting
    	connectedCallback() {
    		super.connectedCallback();
    		if (this.isConnected) setTimeout(() => this.requestUpdate(), 100);
    	}

    	jump(index) {
    		const tooLittle = index < 0;
    		const tooLate = index >= this[_totalSlottedElements];
    		let target = index;
    		let doable = false;
    		if (this.loop) {
    			doable = true;
    			if (tooLittle) target = this[_totalSlottedElements] - 1;
    			else if (tooLate) target = 0;
    		}
    		else {
    			doable = (!tooLittle && !tooLate);
    		}
    		if (doable)
    			this[_activeIndex] = target;
    		return doable
    	}

    	forward() {
    		return this.jump(this[_activeIndex] + 1)
    	}

    	backward() {
    		return this.jump(this[_activeIndex] - 1)
    	}

    	updated() {
    		const slot = this.shadowRoot.querySelector("slot");
    		const activeIndex = this[_activeIndex];
    		const slottedElements = getAssignedElements(slot);
    		slottedElements.forEach((slotted, index) => {
    			const active = index === activeIndex;
    			slotted.hidden = !active;
    		});
    		this[_totalSlottedElements] = slottedElements.length;
    	}

    	render() {
    		const activeIndex = this[_activeIndex];
    		const first = activeIndex === 0;
    		const last = activeIndex === (this[_totalSlottedElements] - 1);

    		const renderDots = () => {
    			const dots = [];
    			for (let i = 0; i < this[_totalSlottedElements]; i++) {
    				dots.push(html$1`
					<button
						tabindex="0"
						?active="${i === this[_activeIndex]}"
						@click="${() => this.jump(i)}">
					</button>
				`);
    			}
    			return html$1`<div class="dots">${dots}</div>`
    		};

    		return html$1`
			<div class="slate">
				${this.arrows
					? html$1`
						<button @click="${this[_backwardClickHandler]}" ?hidden="${!this.loop && first}"></button>
						<button @click="${this[_forwardClickHandler]}" ?hidden="${!this.loop && last}"></button>
					`
					: null}
				<slot></slot>
			</div>
			${this.dots
				? renderDots()
				: null}
		`
    	}
    }

    function dashify$1(camel) {
    	return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
    }

    function registerComponents(components) {
    	for (const Component of components)
    		customElements.define(dashify$1(Component.name), Component);
    }

    registerComponents([CarouseCarousel]);

    var __classPrivateFieldSet$r = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$y = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Locker_locked;
    class Locker {
        constructor() {
            _Locker_locked.set(this, false);
        }
        lock(fn) {
            __classPrivateFieldSet$r(this, _Locker_locked, true, "f");
            const result = fn();
            __classPrivateFieldSet$r(this, _Locker_locked, false, "f");
            return result;
        }
        get locked() {
            return __classPrivateFieldGet$y(this, _Locker_locked, "f");
        }
    }
    _Locker_locked = new WeakMap();

    const make_map = () => new Map();
    const make_set = () => new Set();

    function maptool(map) {
        return new MapTool(map);
    }
    class MapTool {
        constructor(map) {
            this.map = map;
        }
        grab(key, make) {
            const { map } = this;
            if (map.has(key))
                return map.get(key);
            else {
                const value = make();
                map.set(key, value);
                return value;
            }
        }
    }

    var __classPrivateFieldGet$x = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$q = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _Tracker_tracking;
    class Tracker {
        constructor() {
            _Tracker_tracking.set(this, new WeakMap());
        }
        grab_keymap(state) {
            const keymap = maptool(__classPrivateFieldGet$x(this, _Tracker_tracking, "f")).grab(state, make_map);
            return {
                keymap,
                grab_symbolmap(key) {
                    return maptool(keymap).grab(key, make_map);
                },
            };
        }
        clear() {
            __classPrivateFieldSet$q(this, _Tracker_tracking, new WeakMap(), "f");
        }
    }
    _Tracker_tracking = new WeakMap();

    var __classPrivateFieldGet$w = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Stopper_map;
    class Stopper {
        constructor() {
            _Stopper_map.set(this, new Map);
        }
        stop(symbol) {
            const stop = __classPrivateFieldGet$w(this, _Stopper_map, "f").get(symbol);
            if (stop) {
                __classPrivateFieldGet$w(this, _Stopper_map, "f").delete(symbol);
                stop();
            }
        }
        add(symbol, fun) {
            __classPrivateFieldGet$w(this, _Stopper_map, "f").set(symbol, fun);
        }
    }
    _Stopper_map = new WeakMap();

    var __classPrivateFieldGet$v = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Recorder_recordings;
    class Recorder {
        constructor() {
            _Recorder_recordings.set(this, []);
        }
        record(fn) {
            const recording = make_map();
            __classPrivateFieldGet$v(this, _Recorder_recordings, "f").push(recording);
            const payload = fn();
            __classPrivateFieldGet$v(this, _Recorder_recordings, "f").pop();
            return { payload, recording };
        }
        record_that_key_was_accessed(state, key) {
            const recording = __classPrivateFieldGet$v(this, _Recorder_recordings, "f").at(-1);
            if (recording) {
                const keyset = maptool(recording).grab(state, make_set);
                keyset.add(key);
            }
        }
    }
    _Recorder_recordings = new WeakMap();

    class FlatstateError extends Error {
        constructor() {
            super(...arguments);
            this.name = this.constructor.name;
        }
    }
    class CircularFlatstateError extends FlatstateError {
        constructor(key) {
            super(`forbidden circularity, rejected assignment to "${key}"`);
        }
    }
    class ReadonlyError extends FlatstateError {
        constructor(key) {
            super(`forbidden assignment to readonly property "${key}"`);
        }
    }

    function readonly(s) {
        return new Proxy(s, {
            get(target, key) {
                return target[key];
            },
            set(_, key) {
                throw new ReadonlyError(key);
            },
        });
    }

    function debounce(delay, action) {
        let latestArgs;
        let timeout;
        let waitingQueue = [];
        function reset() {
            latestArgs = [];
            if (timeout)
                clearTimeout(timeout);
            timeout = undefined;
            waitingQueue = [];
        }
        reset();
        return ((...args) => {
            latestArgs = args;
            if (timeout)
                clearTimeout(timeout);
            const promise = new Promise((resolve, reject) => {
                waitingQueue.push({ resolve, reject });
            });
            timeout = setTimeout(() => {
                Promise.resolve()
                    .then(() => action(...latestArgs))
                    .then(r => {
                    for (const { resolve } of waitingQueue)
                        resolve(r);
                    reset();
                })
                    .catch(err => {
                    for (const { reject } of waitingQueue)
                        reject(err);
                    reset();
                });
            }, delay);
            return promise;
        });
    }

    var __classPrivateFieldGet$u = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$p = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _Scheduler_queue, _Scheduler_wait, _Scheduler_actuate;
    class Scheduler {
        constructor() {
            _Scheduler_queue.set(this, new Map());
            _Scheduler_wait.set(this, Promise.resolve());
            _Scheduler_actuate.set(this, debounce(0, () => {
                const functions = [...__classPrivateFieldGet$u(this, _Scheduler_queue, "f").values()];
                __classPrivateFieldGet$u(this, _Scheduler_queue, "f").clear();
                for (const fun of functions)
                    fun();
            }));
        }
        get wait() {
            return __classPrivateFieldGet$u(this, _Scheduler_wait, "f");
        }
        add(symbol, fun) {
            __classPrivateFieldGet$u(this, _Scheduler_queue, "f").set(symbol, fun);
            __classPrivateFieldSet$p(this, _Scheduler_wait, __classPrivateFieldGet$u(this, _Scheduler_actuate, "f").call(this), "f");
        }
    }
    _Scheduler_queue = new WeakMap(), _Scheduler_wait = new WeakMap(), _Scheduler_actuate = new WeakMap();

    function collectivize(state) {
        return function (collector) {
            return () => {
                const s = typeof state === "function"
                    ? state()
                    : state;
                return collector(s);
            };
        };
    }

    function save_reaction(symbol, recording, tracker, reaction) {
        const stoppers = [];
        for (const [state, keyset] of recording) {
            const { grab_symbolmap } = tracker.grab_keymap(state);
            for (const key of keyset) {
                const symbolmap = grab_symbolmap(key);
                symbolmap.set(symbol, reaction);
                stoppers.push(() => symbolmap.delete(symbol));
            }
        }
        return () => stoppers.forEach(stop => stop());
    }

    function proxy_handlers(tracker, recorder, locker, stopper, scheduler) {
        function actuate([symbol, reaction]) {
            if ("lean" in reaction) {
                reaction.actor();
            }
            else {
                const { payload, recording } = recorder.record(reaction.collector);
                stopper.add(symbol, save_reaction(symbol, recording, tracker, reaction));
                if (reaction.responder)
                    reaction.responder(payload);
            }
        }
        return {
            get: (state, key) => {
                recorder.record_that_key_was_accessed(state, key);
                return state[key];
            },
            set: (state, key, value) => {
                if (locker.locked)
                    throw new CircularFlatstateError(key);
                state[key] = value;
                const reactions = [...tracker.grab_keymap(state).grab_symbolmap(key)];
                for (const entry of reactions) {
                    const [symbol] = entry;
                    scheduler.add(symbol, () => locker.lock(() => actuate(entry)));
                }
                return true;
            },
        };
    }

    var __classPrivateFieldGet$t = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Flat_tracker, _Flat_recorder, _Flat_locker, _Flat_stopper, _Flat_scheduler, _Flat_proxy_handlers;
    class Flat {
        constructor() {
            _Flat_tracker.set(this, new Tracker());
            _Flat_recorder.set(this, new Recorder());
            _Flat_locker.set(this, new Locker());
            _Flat_stopper.set(this, new Stopper());
            _Flat_scheduler.set(this, new Scheduler());
            _Flat_proxy_handlers.set(this, proxy_handlers(__classPrivateFieldGet$t(this, _Flat_tracker, "f"), __classPrivateFieldGet$t(this, _Flat_recorder, "f"), __classPrivateFieldGet$t(this, _Flat_locker, "f"), __classPrivateFieldGet$t(this, _Flat_stopper, "f"), __classPrivateFieldGet$t(this, _Flat_scheduler, "f")));
        }
        get wait() {
            return __classPrivateFieldGet$t(this, _Flat_scheduler, "f").wait;
        }
        state(state) {
            return new Proxy(state, __classPrivateFieldGet$t(this, _Flat_proxy_handlers, "f"));
        }
        reaction(collector, responder) {
            const symbol = Symbol();
            const { recording } = __classPrivateFieldGet$t(this, _Flat_recorder, "f").record(() => __classPrivateFieldGet$t(this, _Flat_locker, "f").lock(collector));
            __classPrivateFieldGet$t(this, _Flat_stopper, "f").add(symbol, save_reaction(symbol, recording, __classPrivateFieldGet$t(this, _Flat_tracker, "f"), { collector, responder }));
            return () => __classPrivateFieldGet$t(this, _Flat_stopper, "f").stop(symbol);
        }
        lean(actor) {
            const symbol = Symbol();
            return {
                stop: () => __classPrivateFieldGet$t(this, _Flat_stopper, "f").stop(symbol),
                collect: collector => {
                    const { payload, recording } = __classPrivateFieldGet$t(this, _Flat_recorder, "f").record(() => __classPrivateFieldGet$t(this, _Flat_locker, "f").lock(collector));
                    __classPrivateFieldGet$t(this, _Flat_stopper, "f").add(symbol, save_reaction(symbol, recording, __classPrivateFieldGet$t(this, _Flat_tracker, "f"), { lean: true, actor }));
                    return payload;
                },
            };
        }
        clear() {
            __classPrivateFieldGet$t(this, _Flat_tracker, "f").clear();
        }
    }
    _Flat_tracker = new WeakMap(), _Flat_recorder = new WeakMap(), _Flat_locker = new WeakMap(), _Flat_stopper = new WeakMap(), _Flat_scheduler = new WeakMap(), _Flat_proxy_handlers = new WeakMap();
    Flat.readonly = readonly;
    Flat.collectivize = collectivize;

    const JsError = Error;
    var Op;
    (function (Op) {
        Op.loading = () => ({ mode: "loading" });
        Op.error = (reason) => ({ mode: "error", reason });
        Op.ready = (payload) => ({ mode: "ready", payload });
        Op.is = Object.freeze({
            loading: (op) => op.mode === "loading",
            error: (op) => op.mode === "error",
            ready: (op) => op.mode === "ready",
        });
        function payload(op) {
            return (op.mode === "ready")
                ? op.payload
                : undefined;
        }
        Op.payload = payload;
        function select(op, choices) {
            switch (op.mode) {
                case "loading":
                    return choices.loading();
                case "error":
                    return choices.error(op.reason);
                case "ready":
                    return choices.ready(op.payload);
                default:
                    console.error("op", op);
                    throw new JsError("invalid op mode");
            }
        }
        Op.select = select;
        async function run(set_op, operation) {
            set_op(Op.loading());
            try {
                const payload = await operation();
                set_op(Op.ready(payload));
                return payload;
            }
            catch (err) {
                const reason = (err instanceof JsError)
                    ? err.message
                    : (typeof err === "string")
                        ? err
                        : "error";
                set_op(Op.error(reason));
            }
        }
        Op.run = run;
        function morph(op, transmute) {
            return select(op, {
                loading: () => Op.loading(),
                error: reason => Op.error(reason),
                ready: a => Op.ready(transmute(a)),
            });
        }
        Op.morph = morph;
    })(Op || (Op = {}));

    function prep_render_op({ loading, error }) {
        return function render_op(op, on_ready) {
            return Op.select(op, {
                loading,
                error,
                ready: on_ready,
            });
        };
    }

    var __classPrivateFieldGet$s = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Reactor_wait;
    class Reactor {
        constructor(flat, signals) {
            this.flat = flat;
            this.signals = signals;
            _Reactor_wait.set(this, Promise.resolve());
        }
        get wait() {
            return Promise
                .all([this.flat.wait, this.signals.wait])
                .then(() => __classPrivateFieldGet$s(this, _Reactor_wait, "f"));
        }
        reaction(collector, responder) {
            const actuate = responder
                ? () => responder(collect())
                : () => collect();
            const lean = this.lean(actuate);
            const collect = () => lean.collect(collector);
            collect();
            return lean.stop;
        }
        lean(actor) {
            const lean1 = this.flat.lean(actor);
            const lean2 = this.signals.lean(actor);
            return {
                stop() {
                    lean1.stop();
                    lean2.stop();
                },
                collect(collector) {
                    return lean1.collect(() => lean2.collect(collector));
                },
            };
        }
    }
    _Reactor_wait = new WeakMap();

    var __classPrivateFieldSet$o = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$r = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Slice_options;
    class Slice {
        constructor(options) {
            _Slice_options.set(this, void 0);
            __classPrivateFieldSet$o(this, _Slice_options, options, "f");
        }
        get state() {
            return __classPrivateFieldGet$r(this, _Slice_options, "f").getter(__classPrivateFieldGet$r(this, _Slice_options, "f").parent.state);
        }
        transmute(fun) {
            __classPrivateFieldGet$r(this, _Slice_options, "f").parent.transmute(state => {
                const x1 = __classPrivateFieldGet$r(this, _Slice_options, "f").getter(state);
                const x2 = fun(x1);
                const new_state = __classPrivateFieldGet$r(this, _Slice_options, "f").setter(state, x2);
                return new_state;
            });
        }
        slice({ getter, setter }) {
            return new Slice({
                parent: this,
                getter,
                setter,
            });
        }
    }
    _Slice_options = new WeakMap();

    function deepFreeze(obj) {
        if (obj === null || typeof obj !== 'object')
            return obj;
        Object.values(obj).forEach(value => {
            if (typeof value === 'object' && value !== null)
                deepFreeze(value);
        });
        return Object.freeze(obj);
    }

    var __classPrivateFieldGet$q = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$n = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _StateTree_instances, _StateTree_state, _StateTree_readable, _StateTree_onChange, _StateTree_circularity_lock, _StateTree_make_frozen_clone;
    class StateTree {
        constructor(state, onChange = () => { }) {
            _StateTree_instances.add(this);
            _StateTree_state.set(this, void 0);
            _StateTree_readable.set(this, void 0);
            _StateTree_onChange.set(this, void 0);
            _StateTree_circularity_lock.set(this, false);
            __classPrivateFieldSet$n(this, _StateTree_state, structuredClone(state), "f");
            __classPrivateFieldSet$n(this, _StateTree_readable, __classPrivateFieldGet$q(this, _StateTree_instances, "m", _StateTree_make_frozen_clone).call(this), "f");
            __classPrivateFieldSet$n(this, _StateTree_onChange, onChange, "f");
        }
        get state() {
            return __classPrivateFieldGet$q(this, _StateTree_readable, "f");
        }
        transmute(fun) {
            if (__classPrivateFieldGet$q(this, _StateTree_circularity_lock, "f"))
                throw new Error("circular error");
            __classPrivateFieldSet$n(this, _StateTree_circularity_lock, true, "f");
            __classPrivateFieldSet$n(this, _StateTree_state, fun(structuredClone(__classPrivateFieldGet$q(this, _StateTree_state, "f"))), "f");
            __classPrivateFieldSet$n(this, _StateTree_readable, __classPrivateFieldGet$q(this, _StateTree_instances, "m", _StateTree_make_frozen_clone).call(this), "f");
            __classPrivateFieldGet$q(this, _StateTree_onChange, "f").call(this);
            __classPrivateFieldSet$n(this, _StateTree_circularity_lock, false, "f");
        }
        slice({ getter, setter }) {
            return new Slice({
                parent: this,
                getter,
                setter,
            });
        }
    }
    _StateTree_state = new WeakMap(), _StateTree_readable = new WeakMap(), _StateTree_onChange = new WeakMap(), _StateTree_circularity_lock = new WeakMap(), _StateTree_instances = new WeakSet(), _StateTree_make_frozen_clone = function _StateTree_make_frozen_clone() {
        return deepFreeze(structuredClone(__classPrivateFieldGet$q(this, _StateTree_state, "f")));
    };

    const deepEqual = (alpha, bravo) => {
        if (alpha === bravo)
            return true;
        if (typeof alpha !== 'object' || alpha === null || typeof bravo !== 'object' || bravo === null)
            return false;
        const keys1 = Object.keys(alpha);
        const keys2 = Object.keys(bravo);
        if (keys1.length !== keys2.length)
            return false;
        for (const key of keys1) {
            if (!keys2.includes(key))
                return false;
            if (!deepEqual(alpha[key], bravo[key]))
                return false;
        }
        return true;
    };

    var __classPrivateFieldSet$m = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$p = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _WatchTower_signals, _WatchTower_computeds, _WatchTower_listeners, _WatchTower_memory;
    class WatchTower {
        constructor(signals) {
            _WatchTower_signals.set(this, void 0);
            _WatchTower_computeds.set(this, new Set());
            _WatchTower_listeners.set(this, new Set());
            _WatchTower_memory.set(this, new Map());
            __classPrivateFieldSet$m(this, _WatchTower_signals, signals, "f");
        }
        dispatch() {
            for (const computed of __classPrivateFieldGet$p(this, _WatchTower_computeds, "f"))
                computed();
            for (const listener of __classPrivateFieldGet$p(this, _WatchTower_listeners, "f"))
                listener();
        }
        computed(fun) {
            const box = __classPrivateFieldGet$p(this, _WatchTower_signals, "f").signal(fun());
            __classPrivateFieldGet$p(this, _WatchTower_computeds, "f").add(() => { box.value = fun(); });
            return box;
        }
        track(collector, responder) {
            let first = true;
            const listener = () => {
                const current = collector();
                const previous = __classPrivateFieldGet$p(this, _WatchTower_memory, "f").get(collector);
                if (first || !deepEqual(current, previous)) {
                    first = false;
                    __classPrivateFieldGet$p(this, _WatchTower_memory, "f").set(collector, current);
                    responder(current);
                }
            };
            listener();
            __classPrivateFieldGet$p(this, _WatchTower_listeners, "f").add(listener);
            return collector();
        }
        stateTree(state) {
            return new StateTree(state, () => this.dispatch());
        }
    }
    _WatchTower_signals = new WeakMap(), _WatchTower_computeds = new WeakMap(), _WatchTower_listeners = new WeakMap(), _WatchTower_memory = new WeakMap();

    var ob;
    (function (ob) {
        ob.map = (o, transform) => (Object.fromEntries(Object.entries(o)
            .map(([key, value]) => [key, transform(value, key)])));
        ob.filter = (o, judge) => Object.fromEntries(Object.entries(o)
            .filter(([key, value]) => judge(value, key)));
        (function (pipe) {
            pipe.map = (transform) => ((o) => ob.map(o, transform));
            pipe.filter = (transform) => ((o) => ob.filter(o, transform));
        })(ob.pipe || (ob.pipe = {}));
    })(ob || (ob = {}));

    const accessed = Symbol();

    class SignalCircularError extends Error {
        constructor() {
            super(...arguments);
            this.name = this.constructor.name;
        }
    }

    var __classPrivateFieldSet$l = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$o = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Signal_value, _Signal_lock, _Signal_wait, _Signal_listeners, _Signal_invoke_listeners, _a$2;
    class Signal {
        constructor(v) {
            _Signal_value.set(this, void 0);
            _Signal_lock.set(this, false);
            _Signal_wait.set(this, void 0);
            _Signal_listeners.set(this, new Set());
            this[_a$2] = false;
            _Signal_invoke_listeners.set(this, debounce(0, () => {
                const value = __classPrivateFieldGet$o(this, _Signal_value, "f");
                __classPrivateFieldSet$l(this, _Signal_lock, true, "f");
                for (const listener of __classPrivateFieldGet$o(this, _Signal_listeners, "f"))
                    listener(value);
                __classPrivateFieldSet$l(this, _Signal_lock, false, "f");
                return value;
            }));
            __classPrivateFieldSet$l(this, _Signal_value, v, "f");
            __classPrivateFieldSet$l(this, _Signal_wait, Promise.resolve(v), "f");
        }
        subscribe(listener) {
            __classPrivateFieldGet$o(this, _Signal_listeners, "f").add(listener);
            return () => void __classPrivateFieldGet$o(this, _Signal_listeners, "f").delete(listener);
        }
        once(listener) {
            const actual_listener = v => {
                listener(v);
                __classPrivateFieldGet$o(this, _Signal_listeners, "f").delete(actual_listener);
            };
            __classPrivateFieldGet$o(this, _Signal_listeners, "f").add(actual_listener);
            return () => void __classPrivateFieldGet$o(this, _Signal_listeners, "f").delete(actual_listener);
        }
        clear() {
            return __classPrivateFieldGet$o(this, _Signal_listeners, "f").clear();
        }
        async publish() {
            __classPrivateFieldSet$l(this, _Signal_wait, __classPrivateFieldGet$o(this, _Signal_invoke_listeners, "f").call(this), "f");
            await __classPrivateFieldGet$o(this, _Signal_wait, "f");
        }
        get wait() {
            return __classPrivateFieldGet$o(this, _Signal_wait, "f");
        }
        get value() {
            this[accessed] = true;
            return __classPrivateFieldGet$o(this, _Signal_value, "f");
        }
        set value(s) {
            if (__classPrivateFieldGet$o(this, _Signal_lock, "f"))
                throw new SignalCircularError("you can't set a signal in a signal's subscription listener (infinite loop forbidden)");
            __classPrivateFieldSet$l(this, _Signal_value, s, "f");
            this.publish();
        }
    }
    _Signal_value = new WeakMap(), _Signal_lock = new WeakMap(), _Signal_wait = new WeakMap(), _Signal_listeners = new WeakMap(), _Signal_invoke_listeners = new WeakMap(), _a$2 = accessed;

    class OpSignal extends Signal {
        constructor() {
            super(Op.loading());
        }
        async run(operation) {
            return Op.run(op => this.value = op, operation);
        }
        setLoading() {
            this.value = Op.loading();
        }
        setError(reason) {
            this.value = Op.error(reason);
        }
        setReady(payload) {
            this.value = Op.ready(payload);
        }
        get loading() {
            return Op.is.loading(this.value);
        }
        get error() {
            return Op.is.error(this.value);
        }
        get ready() {
            return Op.is.ready(this.value);
        }
        get payload() {
            return Op.payload(this.value);
        }
        select(choices) {
            return Op.select(this.value, choices);
        }
    }

    var __classPrivateFieldSet$k = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$n = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _SignalTracker_instances, _SignalTracker_active, _SignalTracker_all_signals, _SignalTracker_waiters, _SignalTracker_relevant_signals, _SignalTracker_stoppers, _SignalTracker_actuate, _SignalTracker_reset_all_signals_accessed_indicator, _SignalTracker_signals_that_should_be_tracked_get;
    class SignalTracker {
        constructor({ all_signals, waiters, }) {
            _SignalTracker_instances.add(this);
            _SignalTracker_active.set(this, true);
            _SignalTracker_all_signals.set(this, void 0);
            _SignalTracker_waiters.set(this, void 0);
            _SignalTracker_relevant_signals.set(this, new Set());
            _SignalTracker_stoppers.set(this, new Set());
            _SignalTracker_actuate.set(this, debounce(0, (track) => {
                if (__classPrivateFieldGet$n(this, _SignalTracker_active, "f")) {
                    if ("lean" in track)
                        track.actor();
                    else {
                        const { payload, recording } = this.observe(track.collector);
                        this.add_listeners(track, recording);
                        if (track.responder)
                            track.responder(payload);
                    }
                }
            }));
            __classPrivateFieldSet$k(this, _SignalTracker_all_signals, all_signals, "f");
            __classPrivateFieldSet$k(this, _SignalTracker_waiters, waiters, "f");
        }
        observe(collector) {
            __classPrivateFieldGet$n(this, _SignalTracker_instances, "m", _SignalTracker_reset_all_signals_accessed_indicator).call(this);
            const payload = collector();
            return {
                payload,
                recording: __classPrivateFieldGet$n(this, _SignalTracker_instances, "a", _SignalTracker_signals_that_should_be_tracked_get),
            };
        }
        add_listeners(track, recording) {
            for (const signal of recording) {
                __classPrivateFieldGet$n(this, _SignalTracker_relevant_signals, "f").add(signal);
                __classPrivateFieldGet$n(this, _SignalTracker_stoppers, "f").add(signal.subscribe(() => __classPrivateFieldGet$n(this, _SignalTracker_waiters, "f").add(__classPrivateFieldGet$n(this, _SignalTracker_actuate, "f").call(this, track))));
            }
        }
        shutdown() {
            __classPrivateFieldSet$k(this, _SignalTracker_active, false, "f");
            __classPrivateFieldGet$n(this, _SignalTracker_stoppers, "f").forEach(stop => stop());
        }
    }
    _SignalTracker_active = new WeakMap(), _SignalTracker_all_signals = new WeakMap(), _SignalTracker_waiters = new WeakMap(), _SignalTracker_relevant_signals = new WeakMap(), _SignalTracker_stoppers = new WeakMap(), _SignalTracker_actuate = new WeakMap(), _SignalTracker_instances = new WeakSet(), _SignalTracker_reset_all_signals_accessed_indicator = function _SignalTracker_reset_all_signals_accessed_indicator() {
        for (const signal of __classPrivateFieldGet$n(this, _SignalTracker_all_signals, "f"))
            signal[accessed] = false;
    }, _SignalTracker_signals_that_should_be_tracked_get = function _SignalTracker_signals_that_should_be_tracked_get() {
        return [...__classPrivateFieldGet$n(this, _SignalTracker_all_signals, "f")].filter(signal => (signal[accessed] &&
            !__classPrivateFieldGet$n(this, _SignalTracker_relevant_signals, "f").has(signal)));
    };

    var __classPrivateFieldGet$m = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _SignalTower_signals, _SignalTower_waiters;
    class SignalTower {
        constructor() {
            // TODO wrap all signals in WeakRef, to promote garbage collection?
            _SignalTower_signals.set(this, new Set());
            _SignalTower_waiters.set(this, new Set());
        }
        signal(value) {
            const signal = new Signal(value);
            __classPrivateFieldGet$m(this, _SignalTower_signals, "f").add(signal);
            return signal;
        }
        computed(fun) {
            const signal = this.signal(fun());
            this.reaction(() => { signal.value = fun(); });
            return signal;
        }
        op() {
            const signal = new OpSignal();
            __classPrivateFieldGet$m(this, _SignalTower_signals, "f").add(signal);
            return signal;
        }
        many(states) {
            return (ob.map(states, state => this.signal(state)));
        }
        reaction(collector, responder) {
            const tracker = new SignalTracker({
                waiters: __classPrivateFieldGet$m(this, _SignalTower_waiters, "f"),
                all_signals: __classPrivateFieldGet$m(this, _SignalTower_signals, "f"),
            });
            const track = { collector, responder };
            const { recording } = tracker.observe(track.collector);
            tracker.add_listeners(track, recording);
            return () => tracker.shutdown();
        }
        lean(actor) {
            const tracker = new SignalTracker({
                waiters: __classPrivateFieldGet$m(this, _SignalTower_waiters, "f"),
                all_signals: __classPrivateFieldGet$m(this, _SignalTower_signals, "f"),
            });
            const track = { lean: true, actor };
            return {
                stop: () => tracker.shutdown(),
                collect: collector => {
                    const { payload, recording } = tracker.observe(collector);
                    tracker.add_listeners(track, recording);
                    return payload;
                },
            };
        }
        get wait() {
            return Promise.all([...__classPrivateFieldGet$m(this, _SignalTower_signals, "f")].map(s => s.wait))
                .then(() => Promise.all([...__classPrivateFieldGet$m(this, _SignalTower_waiters, "f")]))
                .then(() => { __classPrivateFieldGet$m(this, _SignalTower_waiters, "f").clear(); });
        }
    }
    _SignalTower_signals = new WeakMap(), _SignalTower_waiters = new WeakMap();

    const flat = new Flat();
    const signals = new SignalTower();
    const watch = new WatchTower(signals);
    flat.state.bind(flat);
    signals.signal.bind(signals);
    const reactor = new Reactor(flat, signals);

    /**
     * Convert a camel-case name into a dashed name
     * - for example
     *       dashify("BigManStyle")
     *        // "big-man-style"
     */
    function dashify(camel) {
        return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    }

    function explode_promise() {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    }

    var __classPrivateFieldSet$j = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$l = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Pipe_input;
    class Pipe {
        static with(input) {
            return new this(input);
        }
        constructor(input) {
            _Pipe_input.set(this, void 0);
            __classPrivateFieldSet$j(this, _Pipe_input, input, "f");
        }
        to(fun) {
            return new Pipe(fun(__classPrivateFieldGet$l(this, _Pipe_input, "f")));
        }
        done() {
            return __classPrivateFieldGet$l(this, _Pipe_input, "f");
        }
    }
    _Pipe_input = new WeakMap();

    function pub() {
        const listeners = new Set();
        function subscribe(listener) {
            listeners.add(listener);
            return () => void listeners.delete(listener);
        }
        subscribe.publish = (x) => {
            for (const listener of listeners)
                listener(x);
        };
        subscribe.clear = () => listeners.clear();
        subscribe.once = (listener) => {
            const actual_listener = (x) => {
                listener(x);
                listeners.delete(actual_listener);
            };
            listeners.add(actual_listener);
            return () => void listeners.delete(actual_listener);
        };
        return subscribe;
    }

    var ZipAction;
    (function (ZipAction) {
        function actualize(tree, blueprint) {
            return ob.map(blueprint, value => {
                if (typeof value === "function") {
                    return (...params) => {
                        tree.transmute(state => {
                            const setState = (newState) => { state = newState; };
                            value(state, setState)(...params);
                            return state;
                        });
                    };
                }
                else {
                    return actualize(tree, value);
                }
            });
        }
        ZipAction.actualize = actualize;
        function fn() {
            return (fn) => fn;
        }
        ZipAction.fn = fn;
        function blueprint() {
            return (blueprint) => blueprint;
        }
        ZipAction.blueprint = blueprint;
        ZipAction.prepFn = (helpers) => (fun) => ((state, setState) => (...params) => {
            fun(helpers(state, setState))(...params);
            return state;
        });
        ZipAction.prepBlueprint = (helpers) => (makeBp) => (makeBp(ZipAction.prepFn(helpers)));
        function prep(helpers) {
            return {
                action: ZipAction.prepFn(helpers),
                blueprint: ZipAction.prepBlueprint(helpers),
            };
        }
        ZipAction.prep = prep;
    })(ZipAction || (ZipAction = {}));

    function attributes(element, spec) {
        Attributes.on_change(element, () => element.requestUpdate());
        return Attributes.proxy(element, spec);
    }
    var Attributes;
    (function (Attributes) {
        Attributes.proxy = (element, spec) => new Proxy(spec, {
            get: (_target, name) => {
                const type = spec[name];
                const raw = element.getAttribute(name);
                switch (type) {
                    case String:
                        return raw !== null && raw !== void 0 ? raw : undefined;
                    case Number:
                        return raw !== null
                            ? Number(raw)
                            : undefined;
                    case Boolean:
                        return raw !== null;
                    default:
                        throw new Error(`invalid attribute type for "${name}"`);
                }
            },
            set: (_target, name, value) => {
                const type = spec[name];
                switch (type) {
                    case String: {
                        element.setAttribute(name, value);
                        return true;
                    }
                    case Number: {
                        element.setAttribute(name, value.toString());
                        return true;
                    }
                    case Boolean: {
                        if (value)
                            element.setAttribute(name, "");
                        else
                            element.removeAttribute(name);
                        return true;
                    }
                    default:
                        throw new Error(`invalid attribute type for "${name}"`);
                }
            },
        });
        function on_change(element, handle_change) {
            const observer = new MutationObserver(handle_change);
            observer.observe(element, { attributes: true });
            return () => observer.disconnect();
        }
        Attributes.on_change = on_change;
    })(Attributes || (Attributes = {}));

    var __classPrivateFieldGet$k = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$i = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var mixin;
    (function (mixin) {
        function css(...newStyles) {
            return function (Base) {
                return class extends Base {
                    static get styles() {
                        return combineStyles(Base.styles, newStyles);
                    }
                };
            };
        }
        mixin.css = css;
        function css_deferred(getNewStyles) {
            return function (Base) {
                return class extends Base {
                    static get styles() {
                        return combineStyles(Base.styles, getNewStyles());
                    }
                };
            };
        }
        mixin.css_deferred = css_deferred;
        function signals(signals) {
            return function (Base) {
                var _lean, _a;
                return _a = class extends Base {
                        constructor() {
                            super(...arguments);
                            _lean.set(this, null);
                        }
                        render() {
                            var _b;
                            return (_b = __classPrivateFieldGet$k(this, _lean, "f")) === null || _b === void 0 ? void 0 : _b.collect(() => super.render());
                        }
                        connectedCallback() {
                            super.connectedCallback();
                            __classPrivateFieldSet$i(this, _lean, signals.lean(() => this.requestUpdate()), "f");
                        }
                        disconnectedCallback() {
                            super.disconnectedCallback();
                            if (__classPrivateFieldGet$k(this, _lean, "f")) {
                                __classPrivateFieldGet$k(this, _lean, "f").stop();
                                __classPrivateFieldSet$i(this, _lean, null, "f");
                            }
                        }
                    },
                    _lean = new WeakMap(),
                    _a;
            };
        }
        mixin.signals = signals;
        function flat(flat) {
            return function (Base) {
                var _lean_1, _a;
                return _a = class extends Base {
                        constructor() {
                            super(...arguments);
                            _lean_1.set(this, null);
                        }
                        render() {
                            var _b;
                            return (_b = __classPrivateFieldGet$k(this, _lean_1, "f")) === null || _b === void 0 ? void 0 : _b.collect(() => super.render());
                        }
                        connectedCallback() {
                            super.connectedCallback();
                            __classPrivateFieldSet$i(this, _lean_1, flat.lean(() => this.requestUpdate()), "f");
                        }
                        disconnectedCallback() {
                            super.disconnectedCallback();
                            if (__classPrivateFieldGet$k(this, _lean_1, "f")) {
                                __classPrivateFieldGet$k(this, _lean_1, "f").stop();
                                __classPrivateFieldSet$i(this, _lean_1, null, "f");
                            }
                        }
                    },
                    _lean_1 = new WeakMap(),
                    _a;
            };
        }
        mixin.flat = flat;
        function reactor$1(r = reactor) {
            return function (Base) {
                var _lean_2, _a;
                return _a = class extends Base {
                        constructor() {
                            super(...arguments);
                            _lean_2.set(this, null);
                        }
                        render() {
                            var _b;
                            return (_b = __classPrivateFieldGet$k(this, _lean_2, "f")) === null || _b === void 0 ? void 0 : _b.collect(() => super.render());
                        }
                        connectedCallback() {
                            super.connectedCallback();
                            __classPrivateFieldSet$i(this, _lean_2, r.lean(() => this.requestUpdate()), "f");
                        }
                        disconnectedCallback() {
                            super.disconnectedCallback();
                            if (__classPrivateFieldGet$k(this, _lean_2, "f")) {
                                __classPrivateFieldGet$k(this, _lean_2, "f").stop();
                                __classPrivateFieldSet$i(this, _lean_2, null, "f");
                            }
                        }
                    },
                    _lean_2 = new WeakMap(),
                    _a;
            };
        }
        mixin.reactor = reactor$1;
    })(mixin || (mixin = {}));
    function arrayize(item) {
        return [item].flat().filter(i => !!i);
    }
    const notUndefined = (x) => x !== undefined;
    function combineStyles(parentStyles, newStyles) {
        var _a;
        const styles = [
            ...((_a = arrayize(parentStyles)) !== null && _a !== void 0 ? _a : []),
            ...arrayize(newStyles),
        ];
        return styles
            .flat()
            .filter(notUndefined);
    }

    var apply;
    (function (apply) {
        apply.css = ((theme) => ((elements) => (ob.map(elements, Element => mixin.css(theme)(Element)))));
        apply.flat = ((flat) => ((elements) => (ob.map(elements, (Element) => mixin.flat(flat)(Element)))));
        apply.signals = ((signals) => ((elements) => (ob.map(elements, (Element) => mixin.signals(signals)(Element)))));
        apply.reactor = ((r = reactor) => ((elements) => (ob.map(elements, (Element) => mixin.reactor(r)(Element)))));
        apply.context = ((context) => ((elements) => Pipe.with(elements)
            .to(apply.css(context.theme))
            .to(apply.reactor())
            .done()));
    })(apply || (apply = {}));

    const register_to_dom = (elements) => {
        for (const [name, Element] of Object.entries(elements))
            customElements.define(dashify(name), Element);
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$4=globalThis,e$7=t$4.ShadowRoot&&(void 0===t$4.ShadyCSS||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),o$7=new WeakMap;let n$6 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$7&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$7.set(s,t));}return t}toString(){return this.cssText}};const r$8=t=>new n$6("string"==typeof t?t:t+"",void 0,s$6),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$6(o,t,s$6)},S$3=(s,o)=>{if(e$7)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$4.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$6=e$7?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$8(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{is:i$4,defineProperty:e$6,getOwnPropertyDescriptor:r$7,getOwnPropertyNames:h$4,getOwnPropertySymbols:o$6,getPrototypeOf:n$5}=Object,a$3=globalThis,c$5=a$3.trustedTypes,l$3=c$5?c$5.emptyScript:"",p$3=a$3.reactiveElementPolyfillSupport,d$3=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$5=(t,s)=>!i$4(t,s),y$2={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$5};Symbol.metadata??=Symbol("metadata"),a$3.litPropertyMetadata??=new WeakMap;let b$2 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$2){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$6(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$7(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$2}static _$Ei(){if(this.hasOwnProperty(d$3("elementProperties")))return;const t=n$5(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$3("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$3("properties"))){const t=this.properties,s=[...h$4(t),...o$6(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$6(s));}else void 0!==s&&i.push(c$6(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$3(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$5)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}};b$2.elementStyles=[],b$2.shadowRootOptions={mode:"open"},b$2[d$3("elementProperties")]=new Map,b$2[d$3("finalized")]=new Map,p$3?.({ReactiveElement:b$2}),(a$3.reactiveElementVersions??=[]).push("2.0.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3=globalThis,i$3=t$3.trustedTypes,s$5=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$5="$lit$",h$3=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+h$3,n$4=`<${o$5}>`,r$6=document,l$2=()=>r$6.createComment(""),c$4=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$2=Array.isArray,u$2=t=>a$2(t)||"function"==typeof t?.[Symbol.iterator],d$2="[ \t\n\f\r]",f$4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_$1=/>/g,m$1=RegExp(`>|${d$2}(?:([^\\s"'>=/]+)(${d$2}*=${d$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$2=/'/g,g$1=/"/g,$$1=/^(?:script|style|textarea|title)$/i,y$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y$1(1),b$1=y$1(2),w$1=Symbol.for("lit-noChange"),T$1=Symbol.for("lit-nothing"),A$1=new WeakMap,E$1=r$6.createTreeWalker(r$6,129);function C$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$5?s$5.createHTML(i):i}const P$1=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$4;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$4?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_$1:void 0!==u[2]?($$1.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$4,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g$1:p$2):c===g$1||c===p$2?c=m$1:c===v$1||c===_$1?c=f$4:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$4?s+n$4:d>=0?(o.push(a),s.slice(0,d)+e$5+s.slice(d)+h$3+x):s+h$3+(-2===d?i:x);}return [C$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};let V$1 = class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$1(t,s);if(this.el=V.createElement(f,n),E$1.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$5)){const i=v[a++],s=r.getAttribute(t).split(h$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$1:"?"===e[1]?H$1:"@"===e[1]?I$1:R$1}),r.removeAttribute(t);}else t.startsWith(h$3)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$1.test(r.tagName)){const t=r.textContent.split(h$3),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),E$1.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$5)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$3,t+1));)d.push({type:7,index:c}),t+=h$3.length-1;}c++;}}static createElement(t,i){const s=r$6.createElement("template");return s.innerHTML=t,s}};function N$1(t,i,s=t,e){if(i===w$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$4(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$1(t,h._$AS(t,i.values),h,e)),i}let S$2 = class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$6).importNode(i,!0);E$1.currentNode=e;let h=E$1.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$1(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$1(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$1.nextNode(),o++);}return E$1.currentNode=r$6,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let M$1 = class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$1(this,t,i),c$4(t)?t===T$1||null==t||""===t?(this._$AH!==T$1&&this._$AR(),this._$AH=T$1):t!==this._$AH&&t!==w$1&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$2(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T$1&&c$4(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$6.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$1.createElement(C$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$2(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A$1.get(t.strings);return void 0===i&&A$1.set(t.strings,i=new V$1(t)),i}T(t){a$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l$2()),this.k(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let R$1 = class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$1(this,t,i,0),o=!c$4(t)||t!==this._$AH&&t!==w$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$1(this,e[s+n],i,n),r===w$1&&(r=this._$AH[n]),o||=!c$4(r)||r!==this._$AH[n],r===T$1?t=T$1:t!==T$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let k$1 = class k extends R$1{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T$1?void 0:t;}};let H$1 = class H extends R$1{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T$1);}};let I$1 = class I extends R$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$1(this,t,i,0)??T$1)===w$1)return;const s=this._$AH,e=t===T$1&&s!==T$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$1&&(s===T$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let L$1 = class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$1(this,t);}};const Z$1=t$3.litHtmlPolyfillSupport;Z$1?.(V$1,M$1),(t$3.litHtmlVersions??=[]).push("3.1.0");const j$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M$1(i.insertBefore(l$2(),t),t,void 0,s??{});}return h._$AI(t),h};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let s$4 = class s extends b$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w$1}};s$4._$litElement$=!0,s$4[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$4});const r$5=globalThis.litElementPolyfillSupport;r$5?.({LitElement:s$4});(globalThis.litElementVersions??=[]).push("4.0.2");

    var __classPrivateFieldGet$j = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    function mixinSetups(Base) {
        var _setups, _setdowns, _a;
        return _a = class extends Base {
                constructor() {
                    super(...arguments);
                    _setups.set(this, new Set()
                        .add(() => this.setup()));
                    _setdowns.set(this, new Set());
                }
                register_setup(setup) {
                    __classPrivateFieldGet$j(this, _setups, "f").add(setup);
                }
                setup() {
                    return () => { };
                }
                connectedCallback() {
                    for (const setup of __classPrivateFieldGet$j(this, _setups, "f"))
                        __classPrivateFieldGet$j(this, _setdowns, "f").add(setup());
                }
                disconnectedCallback() {
                    for (const setdown of __classPrivateFieldGet$j(this, _setdowns, "f"))
                        setdown();
                    __classPrivateFieldGet$j(this, _setdowns, "f").clear();
                }
            },
            _setups = new WeakMap(),
            _setdowns = new WeakMap(),
            _a;
    }

    class MetallicElement extends mixinSetups(HTMLElement) {
    }

    function finalize_styles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            const set = new Set(styles.flat(Infinity).reverse());
            for (const s of set)
                elementStyles.unshift(c$6(s));
        }
        else if (styles !== undefined)
            elementStyles.push(c$6(styles));
        return elementStyles;
    }

    function apply_styles_to_shadow(shadow, styles) {
        S$3(shadow, finalize_styles(styles));
    }

    var __classPrivateFieldSet$h = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$i = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _GoldElement_root, _GoldElement_init, _GoldElement_wait, _GoldElement_render_debounced;
    class GoldElement extends MetallicElement {
        static get styles() { return undefined; }
        init() { }
        constructor() {
            super();
            _GoldElement_root.set(this, void 0);
            _GoldElement_init.set(this, explode_promise());
            _GoldElement_wait.set(this, __classPrivateFieldGet$i(this, _GoldElement_init, "f").promise);
            _GoldElement_render_debounced.set(this, debounce(0, () => {
                const root = __classPrivateFieldGet$i(this, _GoldElement_root, "f");
                const template = this.render();
                if (template)
                    j$1(template, root, { host: this });
            }));
            __classPrivateFieldSet$h(this, _GoldElement_root, this.attachShadow({ mode: "open" }), "f");
            const C = this.constructor;
            apply_styles_to_shadow(__classPrivateFieldGet$i(this, _GoldElement_root, "f"), C.styles);
            this.init();
        }
        get root() {
            return __classPrivateFieldGet$i(this, _GoldElement_root, "f");
        }
        get updateComplete() {
            return __classPrivateFieldGet$i(this, _GoldElement_wait, "f").then(() => true);
        }
        render() { }
        async requestUpdate() {
            const promise = __classPrivateFieldGet$i(this, _GoldElement_render_debounced, "f").call(this);
            if (__classPrivateFieldGet$i(this, _GoldElement_init, "f")) {
                promise.then(__classPrivateFieldGet$i(this, _GoldElement_init, "f").resolve);
                __classPrivateFieldSet$h(this, _GoldElement_init, undefined, "f");
            }
            __classPrivateFieldSet$h(this, _GoldElement_wait, promise, "f");
            return promise;
        }
        connectedCallback() {
            super.connectedCallback();
            this.requestUpdate();
        }
    }
    _GoldElement_root = new WeakMap(), _GoldElement_init = new WeakMap(), _GoldElement_wait = new WeakMap(), _GoldElement_render_debounced = new WeakMap();

    var __classPrivateFieldGet$h = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$g = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _SilverElement_init, _SilverElement_wait, _SilverElement_render_debounced;
    class SilverElement extends MetallicElement {
        init() { }
        constructor() {
            super();
            _SilverElement_init.set(this, explode_promise());
            _SilverElement_wait.set(this, __classPrivateFieldGet$h(this, _SilverElement_init, "f").promise);
            _SilverElement_render_debounced.set(this, debounce(0, () => {
                const template = this.render();
                j$1(template, this, { host: this });
            }));
            this.init();
        }
        get updateComplete() {
            return __classPrivateFieldGet$h(this, _SilverElement_wait, "f").then(() => true);
        }
        render() { }
        async requestUpdate() {
            const promise = __classPrivateFieldGet$h(this, _SilverElement_render_debounced, "f").call(this);
            if (__classPrivateFieldGet$h(this, _SilverElement_init, "f")) {
                promise.then(__classPrivateFieldGet$h(this, _SilverElement_init, "f").resolve);
                __classPrivateFieldSet$g(this, _SilverElement_init, undefined, "f");
            }
            __classPrivateFieldSet$g(this, _SilverElement_wait, promise, "f");
            return promise;
        }
        connectedCallback() {
            super.connectedCallback();
            this.requestUpdate();
        }
    }
    _SilverElement_init = new WeakMap(), _SilverElement_wait = new WeakMap(), _SilverElement_render_debounced = new WeakMap();

    var __classPrivateFieldGet$g = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$f = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _Use_context, _Use_rerender, _Use_counter, _Use_setups, _Use_setdowns, _Use_initStarts, _Use_initResults, _Use_initDowns, _Use_states, _Use_preparations, _Use_flatstates, _Use_signals, _Use_watches, _Counter_value;
    class Use {
        static wrap(use, fun) {
            return ((...args) => {
                __classPrivateFieldGet$g(use, _Use_counter, "f").reset();
                return fun(...args);
            });
        }
        static disconnect(use) {
            // cleanup setups
            for (const down of __classPrivateFieldGet$g(use, _Use_setdowns, "f"))
                down();
            __classPrivateFieldGet$g(use, _Use_setdowns, "f").clear();
            // cleanup inits
            for (const down of __classPrivateFieldGet$g(use, _Use_initDowns, "f"))
                down();
            __classPrivateFieldGet$g(use, _Use_initDowns, "f").clear();
            __classPrivateFieldGet$g(use, _Use_initResults, "f").clear();
        }
        static reconnect(use) {
            // call all setups
            for (const up of __classPrivateFieldGet$g(use, _Use_setups, "f").values())
                __classPrivateFieldGet$g(use, _Use_setdowns, "f").add(up());
            // call all inits
            for (const [count, start] of __classPrivateFieldGet$g(use, _Use_initStarts, "f").entries()) {
                const [result, down] = start();
                __classPrivateFieldGet$g(use, _Use_initResults, "f").set(count, result);
                __classPrivateFieldGet$g(use, _Use_initDowns, "f").add(down);
            }
        }
        constructor(rerender, context) {
            _Use_context.set(this, void 0);
            _Use_rerender.set(this, void 0);
            _Use_counter.set(this, new Counter());
            _Use_setups.set(this, new Map());
            _Use_setdowns.set(this, new Set());
            _Use_initStarts.set(this, new Map());
            _Use_initResults.set(this, new Map());
            _Use_initDowns.set(this, new Set());
            _Use_states.set(this, new Map());
            _Use_preparations.set(this, new Map());
            _Use_flatstates.set(this, new Map());
            _Use_signals.set(this, new Map());
            _Use_watches.set(this, new Map());
            __classPrivateFieldSet$f(this, _Use_rerender, rerender, "f");
            __classPrivateFieldSet$f(this, _Use_context, context, "f");
        }
        get context() {
            return __classPrivateFieldGet$g(this, _Use_context, "f");
        }
        rerender() {
            __classPrivateFieldGet$g(this, _Use_rerender, "f").call(this);
        }
        setup(func) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            if (!__classPrivateFieldGet$g(this, _Use_setups, "f").has(count)) {
                __classPrivateFieldGet$g(this, _Use_setups, "f").set(count, func);
                __classPrivateFieldGet$g(this, _Use_setdowns, "f").add(func());
            }
        }
        init(func) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            if (!__classPrivateFieldGet$g(this, _Use_initStarts, "f").has(count)) {
                __classPrivateFieldGet$g(this, _Use_initStarts, "f").set(count, func);
                const [result, down] = func();
                __classPrivateFieldGet$g(this, _Use_initResults, "f").set(count, result);
                __classPrivateFieldGet$g(this, _Use_initDowns, "f").add(down);
                return result;
            }
            return __classPrivateFieldGet$g(this, _Use_initResults, "f").get(count);
        }
        prepare(prep) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_preparations, "f")).grab(count, prep);
        }
        state(init) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            const value = maptool(__classPrivateFieldGet$g(this, _Use_states, "f")).grab(count, () => ((typeof init === "function")
                ? init()
                : init));
            const setter = (v) => {
                __classPrivateFieldGet$g(this, _Use_states, "f").set(count, v);
                __classPrivateFieldGet$g(this, _Use_rerender, "f").call(this);
            };
            const getter = () => __classPrivateFieldGet$g(this, _Use_states, "f").get(count);
            return [value, setter, getter];
        }
        flatstate(init) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_flatstates, "f")).grab(count, () => (flat.state((typeof init === "function")
                ? init()
                : init)));
        }
        signal(init) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_signals, "f")).grab(count, () => (signals.signal((typeof init === "function")
                ? init()
                : init)));
        }
        computed(update) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_signals, "f")).grab(count, () => (signals.computed(update)));
        }
        op() {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_signals, "f")).grab(count, () => signals.op());
        }
        watch(collector) {
            const count = __classPrivateFieldGet$g(this, _Use_counter, "f").pull();
            return maptool(__classPrivateFieldGet$g(this, _Use_watches, "f")).grab(count, () => watch.track(collector, data => {
                __classPrivateFieldGet$g(this, _Use_watches, "f").set(count, data);
                __classPrivateFieldGet$g(this, _Use_rerender, "f").call(this);
            }));
        }
    }
    _Use_context = new WeakMap(), _Use_rerender = new WeakMap(), _Use_counter = new WeakMap(), _Use_setups = new WeakMap(), _Use_setdowns = new WeakMap(), _Use_initStarts = new WeakMap(), _Use_initResults = new WeakMap(), _Use_initDowns = new WeakMap(), _Use_states = new WeakMap(), _Use_preparations = new WeakMap(), _Use_flatstates = new WeakMap(), _Use_signals = new WeakMap(), _Use_watches = new WeakMap();
    class Counter {
        constructor() {
            _Counter_value.set(this, 0);
        }
        pull() {
            var _a, _b;
            return __classPrivateFieldSet$f(this, _Counter_value, (_b = __classPrivateFieldGet$g(this, _Counter_value, "f"), _a = _b++, _b), "f"), _a;
        }
        reset() {
            __classPrivateFieldSet$f(this, _Counter_value, 0, "f");
        }
    }
    _Counter_value = new WeakMap();

    var __classPrivateFieldGet$f = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$e = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _UseShadow_element, _UseShadow_shadow;
    class UseShadow extends Use {
        get element() { return __classPrivateFieldGet$f(this, _UseShadow_element, "f"); }
        get shadow() { return __classPrivateFieldGet$f(this, _UseShadow_shadow, "f"); }
        constructor(element, shadow, rerender, context) {
            super(rerender, context);
            _UseShadow_element.set(this, void 0);
            _UseShadow_shadow.set(this, void 0);
            __classPrivateFieldSet$e(this, _UseShadow_element, element, "f");
            __classPrivateFieldSet$e(this, _UseShadow_shadow, shadow, "f");
        }
    }
    _UseShadow_element = new WeakMap(), _UseShadow_shadow = new WeakMap();

    function setup_use_attrs(element) {
        let attrs;
        return function (spec) {
            if (!attrs)
                attrs = attributes(element, spec);
            return attrs;
        };
    }

    class UseGold extends UseShadow {
        constructor(element, shadow, rerender, context) {
            super(element, shadow, rerender, context);
            this.attrs = setup_use_attrs(element);
        }
    }

    var __classPrivateFieldGet$e = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$d = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _UseSilver_element;
    class UseSilver extends Use {
        get element() { return __classPrivateFieldGet$e(this, _UseSilver_element, "f"); }
        constructor(element, rerender, context) {
            super(rerender, context);
            _UseSilver_element.set(this, void 0);
            __classPrivateFieldSet$d(this, _UseSilver_element, element, "f");
            this.attrs = setup_use_attrs(element);
        }
    }
    _UseSilver_element = new WeakMap();

    class UseCarbon extends UseGold {
    }
    class UseOxygen extends UseSilver {
    }
    class UseQuartz extends Use {
    }
    class UseObsidian extends UseShadow {
    }

    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    function setup_reactivity(render, rerender) {
        const lean = reactor.lean(rerender);
        return {
            stop: lean.stop,
            render: (...props) => lean.collect(() => render(...props)),
        };
    }

    var __classPrivateFieldGet$d = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$c = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    const prepare_carbon = ((shell) => (settings, renderer) => {
        var _use, _rend, _reactivity, _a;
        return _a = class extends GoldElement {
                constructor() {
                    super(...arguments);
                    _use.set(this, new UseCarbon(this, this.root, () => void this.requestUpdate(), shell.context));
                    _rend.set(this, UseCarbon.wrap(__classPrivateFieldGet$d(this, _use, "f"), () => renderer(__classPrivateFieldGet$d(this, _use, "f"))));
                    _reactivity.set(this, void 0);
                }
                static get styles() {
                    var _b;
                    return [
                        shell.context.theme,
                        (_b = settings.styles) !== null && _b !== void 0 ? _b : i$5 ``,
                    ];
                }
                render() {
                    var _b;
                    return (_b = __classPrivateFieldGet$d(this, _reactivity, "f")) === null || _b === void 0 ? void 0 : _b.render();
                }
                connectedCallback() {
                    super.connectedCallback();
                    UseCarbon.reconnect(__classPrivateFieldGet$d(this, _use, "f"));
                    __classPrivateFieldSet$c(this, _reactivity, setup_reactivity(__classPrivateFieldGet$d(this, _rend, "f"), () => void this.requestUpdate()), "f");
                }
                disconnectedCallback() {
                    super.disconnectedCallback();
                    UseCarbon.disconnect(__classPrivateFieldGet$d(this, _use, "f"));
                    if (__classPrivateFieldGet$d(this, _reactivity, "f")) {
                        __classPrivateFieldGet$d(this, _reactivity, "f").stop();
                        __classPrivateFieldSet$c(this, _reactivity, undefined, "f");
                    }
                }
            },
            _use = new WeakMap(),
            _rend = new WeakMap(),
            _reactivity = new WeakMap(),
            _a.label = settings.name,
            _a;
    });

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const f$3=o=>void 0===o.strings;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$4=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const s$3=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s$3(i,t);return !0},o$4=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r$4=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$3(t);}};function h$2(i){void 0!==this._$AN?(o$4(this),this._$AM=i,r$4(this)):this._$AM=i;}function n$3(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$3(r[i],!1),o$4(r[i]);else null!=r&&(s$3(r,!1),o$4(r));else s$3(this,i);}const c$3=i=>{i.type==t$2.CHILD&&(i._$AP??=n$3,i._$AQ??=h$2);};let f$2 = class f extends i$2{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r$4(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s$3(this,i),o$4(this));}setValue(t){if(f$3(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}};

    class ObsidianView extends HTMLElement {
        constructor() {
            super(...arguments);
            this.onConnected = pub();
            this.onDisconnected = pub();
        }
        connectedCallback() {
            this.onConnected.publish();
        }
        disconnectedCallback() {
            this.onDisconnected.publish();
        }
    }
    ObsidianView.tag = "obsidian-view";
    register_to_dom({ ObsidianView });

    function parse_prefixes(...partstrings) {
        const prefixes = new Set();
        const parts = partstrings
            .map(part => part !== null && part !== void 0 ? part : "")
            .flatMap(parse_part);
        for (const part of parts)
            prefixes.add(part);
        return prefixes;
    }
    function query_attributes(container, attributes) {
        return Object.fromEntries(Object.entries(attributes).map(([key, attr]) => [
            key,
            Array.from(container.querySelectorAll(`[${attr}]`))
                .map(e => e.getAttribute(attr)),
        ]));
    }
    function parse_part(attr) {
        return attr
            .split(/\s+/)
            .map(s => s.trim())
            .filter(s => !!s);
    }
    function parse_exportparts(attr) {
        return attr
            .split(",")
            .map(s => s.trim())
            .filter(s => !!s)
            .map(s => s.includes(":")
            ? s.split(":").map(s => s.trim())[1]
            : s);
    }
    function stitch_exportparts_together(parts, gparts) {
        return ((prefix) => [...parts].flatMap(part => [
            `${part}:${prefix}-${part}`,
            ...(gparts.has(part) ? [part] : []),
        ]));
    }

    function auto_exportparts(container, root) {
        const prefixes = parse_prefixes(container.getAttribute("part"));
        const gprefixes = parse_prefixes(container.getAttribute("data-gpart"));
        const attrs = query_attributes(root, {
            part: "part",
            gpart: "data-gpart",
            exportparts: "exportparts",
            gexportparts: "gexportparts",
        });
        const parts = new Set([
            ...attrs.part.flatMap(parse_part),
            ...attrs.exportparts.flatMap(parse_exportparts),
        ]);
        const gparts = new Set([
            ...attrs.gpart.flatMap(parse_part),
            ...attrs.gexportparts.flatMap(parse_part),
        ]);
        if (parts.size)
            container.setAttribute("exportparts", [...prefixes]
                .flatMap(stitch_exportparts_together(parts, gparts))
                .join(", "));
        if (gparts.size || container.hasAttribute("data-gpart"))
            container.setAttribute("gexportparts", [
                ...gparts,
                ...[...gprefixes]
                    .flatMap(prefix => [...parts].map(part => `${prefix}-${part}`)),
            ].join(" "));
    }

    function make_view_root({ name, css, onConnected, onDisconnected }) {
        const container = document.createElement(ObsidianView.tag);
        container.setAttribute("view", name);
        container.onConnected(onConnected);
        container.onDisconnected(onDisconnected);
        const shadow = container.attachShadow({ mode: "open" });
        apply_styles_to_shadow(shadow, css);
        let auto_exportparts_is_enabled = false;
        return {
            container,
            shadow,
            set auto_exportparts(enabled) {
                auto_exportparts_is_enabled = enabled;
            },
            render_into_shadow(content) {
                j$1(content, shadow);
                if (auto_exportparts_is_enabled)
                    auto_exportparts(container, shadow);
                return container;
            },
        };
    }

    function apply_attributes(elements, attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            if (typeof value === "string")
                elements.setAttribute(key, value);
            else if (typeof value === "number")
                elements.setAttribute(key, value.toString());
            else if (typeof value === "boolean") {
                if (value === true)
                    elements.setAttribute(key, "");
                else
                    elements.removeAttribute(key);
            }
            else if (typeof value === "undefined")
                elements.removeAttribute(key);
            else
                console.warn(`invalid attribute type ${key} is ${typeof value}`);
        }
    }

    function apply_details(element, freshMeta = {}, oldMeta = {}) {
        const { content, attrs: fresh = {} } = freshMeta;
        const { attrs: old = {} } = oldMeta;
        function actuate(freshvalue, oldvalue, name, value) {
            if (freshvalue !== oldvalue) {
                if (freshvalue === undefined)
                    element.removeAttribute(name);
                else
                    element.setAttribute(name, value());
            }
        }
        if (fresh)
            apply_attributes(element, fresh);
        actuate(fresh.class, old === null || old === void 0 ? void 0 : old.class, "class", () => fresh.class);
        actuate(fresh.part, old === null || old === void 0 ? void 0 : old.part, "part", () => fresh.part);
        actuate(fresh.gpart, old === null || old === void 0 ? void 0 : old.gpart, "data-gpart", () => fresh.gpart);
        if (content)
            j$1(content, element, { host: element });
    }

    const obsidian_custom_lit_directive = ((c) => ((props, meta = {}) => ({
        ['_$litDirective$']: c,
        values: [{ meta, props }],
    })));

    var __classPrivateFieldGet$c = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$b = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    const prepare_obsidian = ((shell) => (settings = {}, renderer) => {
        var _input, _first_connection, _root, _rerender, _use, _rend, _reactivity, _a;
        return (obsidian_custom_lit_directive((_a = class extends f$2 {
                constructor() {
                    var _b, _c;
                    super(...arguments);
                    _input.set(this, void 0);
                    _first_connection.set(this, true);
                    _root.set(this, make_view_root({
                        name: (_b = settings.name) !== null && _b !== void 0 ? _b : "",
                        css: [shell.context.theme, (_c = settings.styles) !== null && _c !== void 0 ? _c : i$5 ``],
                        onDisconnected: () => this.disconnected(),
                        onConnected: () => {
                            if (!__classPrivateFieldGet$c(this, _first_connection, "f"))
                                this.reconnected();
                            __classPrivateFieldSet$b(this, _first_connection, false, "f");
                        },
                    }));
                    _rerender.set(this, debounce(0, () => {
                        if (__classPrivateFieldGet$c(this, _input, "f"))
                            this.setValue(__classPrivateFieldGet$c(this, _root, "f").render_into_shadow(this.render(__classPrivateFieldGet$c(this, _input, "f"))));
                    }));
                    _use.set(this, new UseObsidian(__classPrivateFieldGet$c(this, _root, "f").container, __classPrivateFieldGet$c(this, _root, "f").shadow, __classPrivateFieldGet$c(this, _rerender, "f"), shell.context));
                    _rend.set(this, UseObsidian.wrap(__classPrivateFieldGet$c(this, _use, "f"), renderer(__classPrivateFieldGet$c(this, _use, "f"))));
                    _reactivity.set(this, setup_reactivity(__classPrivateFieldGet$c(this, _rend, "f"), __classPrivateFieldGet$c(this, _rerender, "f")));
                }
                update(_, props) {
                    return __classPrivateFieldGet$c(this, _root, "f").render_into_shadow(this.render(...props));
                }
                render(input) {
                    var _b, _c, _d, _e;
                    apply_details(__classPrivateFieldGet$c(this, _root, "f").container, input.meta, (_b = __classPrivateFieldGet$c(this, _input, "f")) === null || _b === void 0 ? void 0 : _b.meta);
                    __classPrivateFieldSet$b(this, _input, input, "f");
                    __classPrivateFieldGet$c(this, _root, "f").auto_exportparts = ((_d = (_c = input.meta.auto_exportparts) !== null && _c !== void 0 ? _c : settings.auto_exportparts) !== null && _d !== void 0 ? _d : true);
                    return (_e = __classPrivateFieldGet$c(this, _reactivity, "f")) === null || _e === void 0 ? void 0 : _e.render(...input.props);
                }
                reconnected() {
                    UseObsidian.reconnect(__classPrivateFieldGet$c(this, _use, "f"));
                    __classPrivateFieldSet$b(this, _reactivity, setup_reactivity(__classPrivateFieldGet$c(this, _rend, "f"), __classPrivateFieldGet$c(this, _rerender, "f")), "f");
                }
                disconnected() {
                    UseObsidian.disconnect(__classPrivateFieldGet$c(this, _use, "f"));
                    if (__classPrivateFieldGet$c(this, _reactivity, "f")) {
                        __classPrivateFieldGet$c(this, _reactivity, "f").stop();
                        __classPrivateFieldSet$b(this, _reactivity, undefined, "f");
                    }
                }
            },
            _input = new WeakMap(),
            _first_connection = new WeakMap(),
            _root = new WeakMap(),
            _rerender = new WeakMap(),
            _use = new WeakMap(),
            _rend = new WeakMap(),
            _reactivity = new WeakMap(),
            _a)));
    });

    var __classPrivateFieldGet$b = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$a = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    const prepare_oxygen = ((shell) => (renderer) => {
        var _use, _rend, _reactivity, _a;
        return (_a = class extends SilverElement {
                constructor() {
                    super(...arguments);
                    _use.set(this, new UseOxygen(this, () => void this.requestUpdate(), shell.context));
                    _rend.set(this, UseOxygen.wrap(__classPrivateFieldGet$b(this, _use, "f"), () => renderer(__classPrivateFieldGet$b(this, _use, "f"))));
                    _reactivity.set(this, void 0);
                }
                render() {
                    var _b;
                    return (_b = __classPrivateFieldGet$b(this, _reactivity, "f")) === null || _b === void 0 ? void 0 : _b.render();
                }
                connectedCallback() {
                    super.connectedCallback();
                    __classPrivateFieldSet$a(this, _reactivity, setup_reactivity(__classPrivateFieldGet$b(this, _rend, "f"), () => void this.requestUpdate()), "f");
                    UseOxygen.reconnect(__classPrivateFieldGet$b(this, _use, "f"));
                }
                disconnectedCallback() {
                    super.disconnectedCallback();
                    if (__classPrivateFieldGet$b(this, _reactivity, "f")) {
                        __classPrivateFieldGet$b(this, _reactivity, "f").stop();
                        __classPrivateFieldSet$a(this, _reactivity, undefined, "f");
                    }
                    UseOxygen.disconnect(__classPrivateFieldGet$b(this, _use, "f"));
                }
            },
            _use = new WeakMap(),
            _rend = new WeakMap(),
            _reactivity = new WeakMap(),
            _a);
    });

    var __classPrivateFieldSet$9 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$a = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    const prepare_quartz = ((shell) => (renderer) => {
        var _props, _rerender, _use, _rend, _reactivity, _a;
        return e$4((_a = class extends f$2 {
                constructor() {
                    super(...arguments);
                    _props.set(this, void 0);
                    _rerender.set(this, debounce(0, () => {
                        if (__classPrivateFieldGet$a(this, _props, "f"))
                            this.setValue(this.render(...__classPrivateFieldGet$a(this, _props, "f")));
                    }));
                    _use.set(this, new UseQuartz(__classPrivateFieldGet$a(this, _rerender, "f"), shell.context));
                    _rend.set(this, UseQuartz.wrap(__classPrivateFieldGet$a(this, _use, "f"), renderer(__classPrivateFieldGet$a(this, _use, "f"))));
                    _reactivity.set(this, setup_reactivity(__classPrivateFieldGet$a(this, _rend, "f"), __classPrivateFieldGet$a(this, _rerender, "f")));
                }
                render(...props) {
                    var _b;
                    __classPrivateFieldSet$9(this, _props, props, "f");
                    return (_b = __classPrivateFieldGet$a(this, _reactivity, "f")) === null || _b === void 0 ? void 0 : _b.render(...props);
                }
                reconnected() {
                    UseQuartz.reconnect(__classPrivateFieldGet$a(this, _use, "f"));
                    __classPrivateFieldSet$9(this, _reactivity, setup_reactivity(__classPrivateFieldGet$a(this, _rend, "f"), __classPrivateFieldGet$a(this, _rerender, "f")), "f");
                }
                disconnected() {
                    UseQuartz.disconnect(__classPrivateFieldGet$a(this, _use, "f"));
                    if (__classPrivateFieldGet$a(this, _reactivity, "f")) {
                        __classPrivateFieldGet$a(this, _reactivity, "f").stop();
                        __classPrivateFieldSet$9(this, _reactivity, undefined, "f");
                    }
                }
            },
            _props = new WeakMap(),
            _rerender = new WeakMap(),
            _use = new WeakMap(),
            _rend = new WeakMap(),
            _reactivity = new WeakMap(),
            _a));
    });

    let Context$1 = class Context {
        constructor() {
            this.theme = i$5 `
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
	`;
        }
    };

    const html = (strings, ...values) => (x(strings, ...values.map(value => ((value instanceof Signal)
        ? value.value
        : value))));

    var __classPrivateFieldSet$8 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$9 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Shell_context;
    class Shell {
        constructor(context) {
            _Shell_context.set(this, void 0);
            __classPrivateFieldSet$8(this, _Shell_context, context, "f");
        }
        get context() {
            if (__classPrivateFieldGet$9(this, _Shell_context, "f"))
                return __classPrivateFieldGet$9(this, _Shell_context, "f");
            else
                throw new Error("slate.context was not set, but it's necessary");
        }
        set context(context) {
            __classPrivateFieldSet$8(this, _Shell_context, context, "f");
        }
    }
    _Shell_context = new WeakMap();

    class Slate extends Shell {
        constructor(context) {
            super(context);
            this.light_component = prepare_oxygen(this);
            this.shadow_component = prepare_carbon(this);
            this.light_view = prepare_quartz(this);
            this.shadow_view = prepare_obsidian(this);
        }
        components(elements) {
            return apply.context(this.context)(elements);
        }
    }

    function* compile(expressions) {
        function recurse(expression, previousSelector) {
            let css = [];
            const selector = expression[0];
            // This is an at-rule, not a regular selector.
            if (selector.startsWith("@")) {
                const directive = expression[0];
                const children = expression[1];
                css.push(`${stripAwayComments(directive)}`);
                for (const child of children)
                    css = [...css, ...recurse(child, undefined)];
                css.push(`}`);
            }
            // This is a regular selector.
            else {
                const rules = expression[1];
                const children = expression[2];
                const compoundSelector = previousSelector
                    ? handleParentReference(`${previousSelector} ${selector}`)
                    : selector;
                const ruleEntries = Object.entries(rules);
                if (ruleEntries.length > 0) {
                    const rulesString = ruleEntries
                        .map(([ruleName, ruleValue]) => `\t${ruleName}: ${stripAwayComments(ruleValue)};`)
                        .join("\n");
                    css.push(`${stripAwayComments(compoundSelector)} {\n${rulesString}\n}`);
                }
                for (const child of children)
                    css = [...css, ...recurse(child, compoundSelector)];
            }
            return css;
        }
        yield "\n";
        for (const expression of expressions)
            yield "\n" + recurse(expression, undefined).join("\n");
        yield "\n";
    }
    function stripAwayComments(text) {
        return text.replaceAll(/(\s*)(\/\/.*)$/gm, "");
    }
    function handleParentReference(groupedSelector) {
        return groupedSelector.replaceAll(/(\s+)*(\^|&)/gm, "");
    }

    var Token;
    (function (Token) {
        (function (Type) {
            Type[Type["AtRule"] = 0] = "AtRule";
            Type[Type["Open"] = 1] = "Open";
            Type[Type["Close"] = 2] = "Close";
            Type[Type["RuleName"] = 3] = "RuleName";
            Type[Type["RuleValue"] = 4] = "RuleValue";
            Type[Type["SlashSlashComment"] = 5] = "SlashSlashComment";
        })(Token.Type || (Token.Type = {}));
    })(Token || (Token = {}));

    class CamelCssError extends Error {
        constructor() {
            super(...arguments);
            this.name = this.constructor.name;
        }
    }
    //
    // untracable errors
    //
    class CamelCssMissingClosingBraceError extends CamelCssError {
        constructor(missingCloses) {
            const message = missingCloses > 1
                ? `missing ${missingCloses} closing braces "}"`
                : `missing ${missingCloses} closing brace "}"`;
            super(message);
        }
    }
    //
    // traceable errors
    //
    class CamelCssTraceableError extends CamelCssError {
        constructor(trace, message) {
            super(`(${trace.cursor.line}:${trace.cursor.column}) ${message}`);
            this.trace = trace;
        }
    }
    class CamelCssMissingSelectorOrAtRuleError extends CamelCssTraceableError {
        constructor(trace) {
            super(trace, `expression is missing selector (or at-rule)`);
        }
    }
    class CamelCssExcessClosingBraceError extends CamelCssTraceableError {
        constructor(trace) {
            super(trace, `unwanted closing brace "}"`);
        }
    }
    class CamelCssRuleNamePlacementError extends CamelCssTraceableError {
        constructor(trace, ruleName) {
            super(trace, `invalid place for rule name "${ruleName}"`);
        }
    }
    class CamelCssRuleValuePlacementError extends CamelCssTraceableError {
        constructor(trace, ruleValue) {
            super(trace, `invalid place for rule value "${ruleValue}"`);
        }
    }
    const setupTracedErrors = (trace) => ({
        error: (message) => new CamelCssTraceableError(trace, message),
        missingSelectorOrAtRule: () => new CamelCssMissingSelectorOrAtRuleError(trace),
        excessClosingBrace: () => new CamelCssExcessClosingBraceError(trace),
        ruleNamePlacement: (ruleName) => new CamelCssRuleNamePlacementError(trace, ruleName),
        ruleValuePlacement: (ruleValue) => new CamelCssRuleValuePlacementError(trace, ruleValue),
    });

    function* parse(tokens) {
        let frame;
        const stack = [];
        for (const token of tokens) {
            const error = setupTracedErrors(token.trace);
            switch (token.type) {
                case Token.Type.Open:
                case Token.Type.AtRule:
                    {
                        frame = {
                            selector: (token.type === Token.Type.AtRule)
                                ? token.directive
                                : token.selector.replaceAll(/\s+/gm, " "),
                            ruleName: undefined,
                            rules: {},
                            childFrames: [],
                        };
                        stack.push(frame);
                    }
                    break;
                case Token.Type.RuleName:
                    {
                        if (!frame)
                            throw error.ruleNamePlacement(token.name);
                        frame.ruleName = token.name;
                    }
                    break;
                case Token.Type.RuleValue:
                    {
                        if (!frame || !frame.ruleName)
                            throw error.ruleValuePlacement(token.value);
                        frame.rules[frame.ruleName] = token.value;
                        frame.ruleName = undefined;
                    }
                    break;
                case Token.Type.Close:
                    {
                        const completedFrame = stack.pop();
                        const parentFrame = stack.length > 0
                            ? stack[stack.length - 1]
                            : undefined;
                        frame = parentFrame;
                        if (!completedFrame)
                            throw error.excessClosingBrace();
                        if (!completedFrame.selector)
                            throw error.missingSelectorOrAtRule();
                        if (parentFrame)
                            parentFrame.childFrames.push(completedFrame);
                        else {
                            function recursiveFrameToExpression(frame) {
                                if (frame.selector.startsWith("@")) {
                                    return [
                                        frame.selector,
                                        frame.childFrames.map(recursiveFrameToExpression),
                                    ];
                                }
                                else {
                                    return [
                                        frame.selector,
                                        frame.rules,
                                        frame.childFrames.map(recursiveFrameToExpression),
                                    ];
                                }
                            }
                            yield recursiveFrameToExpression(completedFrame);
                        }
                    }
                    break;
            }
        }
        if (stack.length > 0)
            throw new CamelCssMissingClosingBraceError(stack.length);
    }

    function runTokenRegex({ source, regex, index, setIndex, }) {
        regex.lastIndex = index;
        const match = regex.exec(source.code);
        if (match)
            setIndex(regex.lastIndex);
        return match;
    }

    const leadingWhitespaceRegex = /(\s*)/my;
    function runLeadingWhitespaceRegex({ source, index, setIndex }) {
        leadingWhitespaceRegex.lastIndex = index;
        const match = leadingWhitespaceRegex.exec(source.code);
        if (match)
            setIndex(leadingWhitespaceRegex.lastIndex);
        const [, whitespace = ""] = match ?? [];
        return whitespace;
    }

    function updateCursor(part, cursor, newIndex) {
        const linebreaks = (/\n/g.exec(part) ?? []).length;
        const line = cursor.line + linebreaks;
        let column = 0;
        if (linebreaks > 0) {
            const [, lastLine] = /\n(.*)$/.exec(part) ?? [];
            column = 1 + lastLine.length;
        }
        else
            column = cursor.column + (newIndex - cursor.index);
        return {
            line,
            column,
            index: newIndex,
        };
    }

    function defineMakeTraceFunction({ index, cursor, leadingWhitespace }) {
        return (valueLength) => {
            const subcursor = updateCursor(leadingWhitespace, cursor, cursor.index + leadingWhitespace.length);
            return {
                cursor: subcursor,
                length: valueLength ?? (index - subcursor.index),
            };
        };
    }

    function makeLexer(regex, readToken) {
        return ((source, cursor) => {
            let index = cursor.index;
            const setIndex = (newIndex) => index = newIndex;
            const leadingWhitespace = runLeadingWhitespaceRegex({
                source, index, setIndex,
            });
            const match = runTokenRegex({
                source, regex, index, setIndex,
            });
            return match
                ? {
                    newIndex: index,
                    token: readToken(match, defineMakeTraceFunction({ index, cursor, leadingWhitespace }))
                }
                : undefined;
        });
    }

    const lexers = {
        slashSlashComment: makeLexer(/(\/\/.*)$/my, (match, makeTrace) => {
            const [, value] = match;
            const trimmedValue = value.trim();
            return {
                type: Token.Type.SlashSlashComment,
                trace: makeTrace(trimmedValue.length),
                value: trimmedValue,
            };
        }),
        atRule: makeLexer(/(@(?:[^;{]+[;]|[^{]+{))/my, (match, makeTrace) => {
            const [, directive] = match;
            const trimmedDirective = directive.trim();
            return {
                type: Token.Type.AtRule,
                trace: makeTrace(trimmedDirective.length),
                directive: trimmedDirective,
            };
        }),
        open: makeLexer(/([^{};]*){/my, (match, makeTrace) => {
            const [, selector] = match;
            const trimmedSelector = selector.trim();
            return {
                type: Token.Type.Open,
                trace: makeTrace(trimmedSelector.length),
                selector: trimmedSelector,
            };
        }),
        close: makeLexer(/}/my, (match, makeTrace) => {
            return {
                type: Token.Type.Close,
                trace: makeTrace(1),
            };
        }),
        ruleName: makeLexer(/([\S]+):/my, (match, makeTrace) => {
            const [, name] = match;
            const trimmedName = name.trim();
            return {
                type: Token.Type.RuleName,
                trace: makeTrace(trimmedName.length),
                name: trimmedName,
            };
        }),
        ruleValue: makeLexer(/([^;}]+)(;|(?=}))/my, (match, makeTrace) => {
            const [, value] = match;
            const trimmedValue = value.trim();
            return {
                type: Token.Type.RuleValue,
                trace: makeTrace(trimmedValue.length),
                value: trimmedValue,
            };
        }),
    };

    function* tokenize(code) {
        const source = { code };
        let done = false;
        let cursor = {
            index: 0,
            line: 1,
            column: 1,
        };
        while (!done) {
            let token;
            for (const lexer of Object.values(lexers)) {
                let result = lexer(source, cursor);
                if (result) {
                    token = result.token;
                    cursor = updateCursor(source.code.slice(cursor.index, result.newIndex), cursor, result.newIndex);
                    break;
                }
            }
            if (token)
                yield token;
            else
                done = true;
        }
    }

    function camelCss(input) {
        const tokens = tokenize(input);
        const expressions = parse(tokens);
        return [...compile(expressions)].join("");
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=globalThis,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{is:i$1,defineProperty:e$2,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$2(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t=globalThis,i=t.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n=`<${o$1}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$1+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$1)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.0");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.2");

    function css(strings, ...values) {
        const input = Array.from(strings).reduce((previous, current, index) => previous + current + (values[index] ?? ""), "");
        const output = camelCss(input);
        return r$3(output);
    }

    const ev = (Event) => ({
        target: (target) => ({
            dispatch(detail, options) {
                target.dispatchEvent(new Event(Event.type, { ...options, detail }));
            },
            listen(listener, options) {
                target.addEventListener(Event.type, listener, options);
                return () => target
                    .removeEventListener(Event.type, listener, options);
            },
        })
    });

    const defaultDispatchOptions = {
        bubbles: true,
        composed: true,
        cancelable: true,
    };

    var _a$1;
    class MagicEventBase extends CustomEvent {
        constructor(name, options) {
            super(name, { ...defaultDispatchOptions, ...options });
        }
    }
    _a$1 = MagicEventBase;
    MagicEventBase.target = ev(_a$1).target;

    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    var __classPrivateFieldGet$8 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$7 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _TemplateSlots_instances, _a, _TemplateSlots_parent, _TemplateSlots_templates, _TemplateSlots_parentObserver, _TemplateSlots_templateObservers, _TemplateSlots_onChange, _TemplateSlots_refresh;
    class TemplateSlots {
        constructor(parent, onChange = () => { }) {
            _TemplateSlots_instances.add(this);
            _TemplateSlots_parent.set(this, void 0);
            _TemplateSlots_templates.set(this, new Map());
            _TemplateSlots_parentObserver.set(this, void 0);
            _TemplateSlots_templateObservers.set(this, new Set);
            _TemplateSlots_onChange.set(this, () => { });
            __classPrivateFieldSet$7(this, _TemplateSlots_parent, parent, "f");
            __classPrivateFieldSet$7(this, _TemplateSlots_onChange, onChange, "f");
            __classPrivateFieldSet$7(this, _TemplateSlots_parentObserver, new MutationObserver(() => __classPrivateFieldGet$8(this, _TemplateSlots_instances, "m", _TemplateSlots_refresh).call(this)), "f");
            __classPrivateFieldGet$8(this, _TemplateSlots_parentObserver, "f").observe(parent, _a.parentObservationOptions);
            __classPrivateFieldGet$8(this, _TemplateSlots_instances, "m", _TemplateSlots_refresh).call(this);
        }
        get(name) {
            const selector = name
                ? `:scope > template[slot="${name}"]`
                : `:scope > template:not([slot])`;
            const template = __classPrivateFieldGet$8(this, _TemplateSlots_parent, "f")
                .querySelector(selector);
            return template?.content.cloneNode(true);
        }
    }
    _a = TemplateSlots, _TemplateSlots_parent = new WeakMap(), _TemplateSlots_templates = new WeakMap(), _TemplateSlots_parentObserver = new WeakMap(), _TemplateSlots_templateObservers = new WeakMap(), _TemplateSlots_onChange = new WeakMap(), _TemplateSlots_instances = new WeakSet(), _TemplateSlots_refresh = function _TemplateSlots_refresh() {
        for (const observer of __classPrivateFieldGet$8(this, _TemplateSlots_templateObservers, "f"))
            observer.disconnect();
        __classPrivateFieldGet$8(this, _TemplateSlots_templates, "f").clear();
        __classPrivateFieldGet$8(this, _TemplateSlots_templateObservers, "f").clear();
        const templates = Array.from(__classPrivateFieldGet$8(this, _TemplateSlots_parent, "f").querySelectorAll(":scope > template"));
        for (const template of templates) {
            const name = template.getAttribute("slot") ?? undefined;
            __classPrivateFieldGet$8(this, _TemplateSlots_templates, "f").set(name, template);
            const deepObserver = new MutationObserver(__classPrivateFieldGet$8(this, _TemplateSlots_onChange, "f"));
            const attributeObserver = new MutationObserver(() => {
                __classPrivateFieldGet$8(this, _TemplateSlots_instances, "m", _TemplateSlots_refresh).call(this);
                __classPrivateFieldGet$8(this, _TemplateSlots_onChange, "f").call(this);
            });
            deepObserver.observe(template.content, _a.templateDeepObserverationOptions);
            attributeObserver.observe(template, _a.templateAttributeObserverationOptions);
            __classPrivateFieldGet$8(this, _TemplateSlots_templateObservers, "f").add(deepObserver);
        }
    };
    TemplateSlots.parentObservationOptions = {
        childList: true,
    };
    TemplateSlots.templateDeepObserverationOptions = {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
    };
    TemplateSlots.templateAttributeObserverationOptions = {
        attributes: true,
    };

    const theme = css `

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:not(:defined) {
	display: none;
}

.standard-content {
	& * + * {
		margin-top: 0.7em;
	}

	:is(ul, ol) {
		padding-left: 1.2em;
	}
}

.op {
	& svg {
		width: 2em;
		height: 2em;
	}

	&.error {
		display: flex;
		color: red;
		align-items: center;
		& svg {
			margin-right: 0.5em;
		}
	}

	&.loading svg {
		animation: rotate-animation 10s infinite linear;
	}
}

@keyframes rotate-animation {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

`;

    const defaults = {
        // 250 is shopify's maximum page size
        page_size: 250,
        api_version: "2023-04",
        image_format: "WEBP"
    };

    class ShopifyShepherdError extends Error {
        constructor() {
            super(...arguments);
            this.name = this.constructor.name;
        }
    }
    class ShopifyResponseError extends ShopifyShepherdError {
        constructor({ message, path }) {
            super(`${message} ⮞ ${path.join(" 🡪 ")}`);
        }
    }
    class ShopifyNotFoundError extends ShopifyShepherdError {
        constructor(subject) {
            super(`not found (${subject})`);
        }
    }
    class ShopifyCheckoutError extends ShopifyShepherdError {
        constructor(errors) {
            super(ShopifyCheckoutError.format(errors));
            this.errors = errors;
        }
        static format(errors) {
            return errors.map(error => `(${error.code}) ${error.field.join('.')}: ${error.message}`).join(";");
        }
    }

    var __classPrivateFieldSet$6 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$7 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Remote_settings;
    class Remote {
        constructor(settings) {
            _Remote_settings.set(this, void 0);
            __classPrivateFieldSet$6(this, _Remote_settings, settings, "f");
        }
        async request({ query, variables }) {
            const { domain, storefront_access_token, api_version = defaults.api_version, } = __classPrivateFieldGet$7(this, _Remote_settings, "f");
            const url = `https://${domain}/api/${api_version}/graphql`;
            const method = "POST";
            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Sdk-Variant": "javascript",
                "X-Sdk-Version": "2.19.0",
                "X-Shopify-Storefront-Access-Token": storefront_access_token,
            };
            const response = await fetch(url, {
                method,
                headers,
                mode: "cors",
                body: JSON.stringify({ query, variables }),
                credentials: "omit",
            });
            const result = await response.json();
            if ("errors" in result)
                for (const error of result.errors)
                    throw new ShopifyResponseError(error);
            return result.data;
        }
    }
    _Remote_settings = new WeakMap();

    async function concurrent(o) {
        const keys = Object.keys(o);
        const awaitables = Object.values(o);
        const values = await Promise.all(awaitables);
        const result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        return result;
    }

    async function all(generator) {
        const all = [];
        for await (const [nodes] of generator)
            for (const node of nodes)
                all.push(node);
        return all;
    }

    async function* paginate(fetch) {
        let after;
        let fetch_count = 0;
        const there_are_more_pages = () => !!((fetch_count === 0) || after);
        let more = true;
        while (more) {
            fetch_count += 1;
            const result = await fetch(after);
            if (!result)
                throw new ShopifyNotFoundError(`paginated resource not found`);
            const { edges, pageInfo: { hasNextPage, endCursor }, } = result;
            after = hasNextPage
                ? endCursor
                : undefined;
            const nodes = edges.map(edge => edge.node);
            more = there_are_more_pages();
            yield [nodes, more];
        }
    }

    async function first(generator) {
        const { value } = await generator.next();
        const [nodes] = value;
        return nodes;
    }

    function template_noop(strings, ...values) {
        return Array.from(strings).reduce((previous, current, index) => { var _a; return previous + current + ((_a = values[index]) !== null && _a !== void 0 ? _a : ""); }, "");
    }

    const gql = template_noop;

    function make_request_for_shop() {
        return {
            query: gql `
			query FetchShopInfo {
				shop {
					name
					description
					shipsToCountries
					paymentSettings {
						currencyCode
						countryCode
					}
				}
			}
		`,
        };
    }

    const pageInfo = () => gql `
	pageInfo {
		hasNextPage
		endCursor
	}
`;
    const paginated = (node) => gql `
	edges {
		node {
			${node}
		}
	}
	${pageInfo()}
`;
    const paginated_node = () => gql `
	edges {
		node
	}
	${pageInfo()}
`;

    function make_request_for_tags({ page_size }) {
        return {
            query: gql `
			query FetchTags($first: Int!) {
				productTags(first: $first) {
					${paginated_node()}
				}
			}
		`,
            variables: {
                first: page_size,
            },
        };
    }

    const edges = (node) => gql `
	edges {
		node {
			${node}
		}
	}
`;

    function variants() {
        // "quantityAvailable" is omitted because it's broken on the storefront api
        //  - https://community.shopify.com/c/hydrogen-headless-and-storefront/need-unauthenticated-read-product-inventory-to-access/td-p/1955913
        return gql `
		variants(first: ${defaults.page_size}) {
			${edges(gql `

				id
				title
				availableForSale
				currentlyNotInStock

				price {
					amount
					currencyCode
				}

				compareAtPrice {
					amount
					currencyCode
				}

				image {
					id
				}

				selectedOptions {
					name
					value
				}

			`)}
		}
	`;
    }

    function image(format) {
        function url_with_transform(x, y) {
            return gql `
			url(
				transform: {
					maxWidth: ${x}
					maxHeight: ${y}
					preferredContentType: ${format}
				}
			)
		`;
        }
        return gql `
		id
		altText
		url_original: url
		url_tiny: ${url_with_transform(200, 200)}
		url_small: ${url_with_transform(500, 500)}
		url_medium: ${url_with_transform(1000, 1000)}
		url_large: ${url_with_transform(2000, 2000)}
	`;
    }

    function product({ image_format }) {
        // "totalInventory" is omitted because it triggers a shopify bug
        //  - https://community.shopify.com/c/hydrogen-headless-and-storefront/need-unauthenticated-read-product-inventory-to-access/td-p/1955913
        return gql `
		availableForSale
		createdAt
		description
		descriptionHtml
		handle
		id
		isGiftCard
		onlineStoreUrl
		productType
		publishedAt
		requiresSellingPlan
		tags
		title
		updatedAt
		vendor

		options(first: ${defaults.page_size}) {
			name
			values
		}

		featuredImage {
			id
		}

		collections(first: ${defaults.page_size}) {
			${edges(gql `
				id
			`)}
		}

		images(first: ${defaults.page_size}) {
			${edges(image(image_format))}
		}

		${variants()}
	`;
    }

    function make_request_for_single_product({ id, image_format }) {
        return {
            query: gql `
			query FetchProduct($id: ID!) {
				product(id: $id) {
					${product({ image_format })}
				}
			}
		`,
            variables: {
                id,
            },
        };
    }

    function make_request_for_products({ query, after, image_format, page_size, sort, reverse, }) {
        return {
            query: gql `
			query FetchProducts(
				$first: Int!,
				$after: String,
				$sort: ProductSortKeys,
				$reverse: Boolean,
				$query: String,
				) {
				products(
					first: $first,
					after: $after,
					sortKey: $sort,
					reverse: $reverse,
					query: $query,
					) {
					${paginated(product({ image_format }))}
				}
			}
		`,
            variables: {
                query,
                after,
                first: page_size,
                sort,
                reverse,
            },
        };
    }

    function make_request_for_specific_products({ ids, image_format }) {
        return {
            query: gql `
			query FetchProducts($ids: [ID!]!) {
				products: nodes(ids: $ids) {
					... on Product {
						${product({ image_format })}
					}
				}
			}
		`,
            variables: {
                ids,
            },
        };
    }

    function make_request_for_collections({ after, image_format, page_size, }) {
        return {
            query: gql `
			query FetchCollections($first: Int!, $after: String) {
				collections(first: $first, after: $after) {
					${paginated(gql `

						description
						descriptionHtml
						handle
						id
						title
						updatedAt
						onlineStoreUrl

						image {
							${image(image_format)}
						}

					`)}
				}
			}
		`,
            variables: {
                after,
                first: page_size,
            },
        };
    }

    function make_request_for_checkout_create({ line_items, }) {
        return {
            query: gql `
			mutation CreateCheckout($input: CheckoutCreateInput!) {
				checkoutCreate(input: $input) {
					checkoutUserErrors {
						code
						field
						message
					}
					checkout {
						id
						webUrl
					}
				}
			}
		`,
            variables: {
                input: {
                    lineItems: (line_items
                        .filter(quantity_is_greater_than_zero)
                        .map(i => ({
                        variantId: i.variant_id,
                        quantity: i.quantity
                    })))
                },
            },
        };
    }
    function quantity_is_greater_than_zero(item) {
        return item.quantity > 0;
    }

    const backslash = "\\";
    const characters_to_escape_in_queries = "\\:()\"\'";
    function escape_query_text(text) {
        for (const character of characters_to_escape_in_queries)
            text = text.replace(character, backslash + character);
        return text;
    }

    function querytext(strings, ...values) {
        return Array.from(strings).reduce((previous, current, index) => {
            var _a;
            return previous +
                current +
                escape_query_text((_a = values[index]) !== null && _a !== void 0 ? _a : "");
        }, "");
    }

    function convert_product_query_spec_to_string({ tags = [], terms = [], } = {}) {
        const segments = [];
        if (tags.length)
            segments.push(tags
                .map(tag => querytext `(tag:${tag})`)
                .join(" AND "));
        if (terms.length)
            segments.push(terms
                .map(term => querytext `(title:*${term}* OR tag:*${term}*)`)
                .join(" AND "));
        return segments.length
            ? segments
                .map(segment => `(${segment})`)
                .join(" AND ")
            : undefined;
    }

    function make_request_for_products_in_collection({ after, page_size, image_format, collection_id, filters, }) {
        return {
            query: gql `
			query FetchProductsInCollection(
					$collection_id: ID!,
					$first: Int!,
					$after: String,
					$filters: [ProductFilter!],
				) {
				collection(id: $collection_id) {
					products(first: $first, after: $after, filters: $filters) {
						${paginated(product({ image_format }))}
					}
				}
			}
		`,
            variables: {
                collection_id,
                first: page_size,
                after,
                filters,
            },
        };
    }

    function make_request_for_product_recommendations({ intent, product_id, image_format, }) {
        return {
            query: gql `
			query FetchProductRecommendations($product_id: ID!, $intent: ProductRecommendationIntent) {
				productRecommendations(productId: $product_id, intent: $intent) {
					${product({ image_format })}
				}
			}
		`,
            variables: {
                intent,
                product_id,
            },
        };
    }

    class Shopify {
        static setup(settings) {
            return new this({ remote: new Remote(settings) });
        }
        constructor(o) {
            this.remote = o.remote;
        }
        async shop() {
            return this.remote.request(make_request_for_shop());
        }
        async product(o) {
            var _a;
            const { product } = await this.remote.request(make_request_for_single_product({
                id: o.id,
                image_format: (_a = o.image_format) !== null && _a !== void 0 ? _a : defaults.image_format,
            }));
            if (!product)
                throw new ShopifyNotFoundError(`product ${o.id}`);
            return product;
        }
        async *products(o = {}) {
            yield* paginate(async (after) => {
                var _a, _b, _c;
                return (await this.remote.request(make_request_for_products({
                    after,
                    page_size: (_a = o.page_size) !== null && _a !== void 0 ? _a : defaults.page_size,
                    image_format: (_b = o.image_format) !== null && _b !== void 0 ? _b : defaults.image_format,
                    query: convert_product_query_spec_to_string(o.query),
                    sort: (_c = o.sort) !== null && _c !== void 0 ? _c : "BEST_SELLING",
                    reverse: o.reverse,
                }))).products;
            });
        }
        async *collections(o = {}) {
            yield* paginate(async (after) => {
                var _a, _b;
                return (await this.remote.request(make_request_for_collections({
                    after,
                    page_size: (_a = o.page_size) !== null && _a !== void 0 ? _a : defaults.page_size,
                    image_format: (_b = o.image_format) !== null && _b !== void 0 ? _b : defaults.image_format,
                }))).collections;
            });
        }
        async *tags(o = {}) {
            var _a;
            const result = await this.remote.request(make_request_for_tags({ page_size: (_a = o.page_size) !== null && _a !== void 0 ? _a : defaults.page_size }));
            const tags = result.productTags.edges.map(e => e.node);
            const more = false;
            yield [tags, more];
        }
        async *products_in_collection(o) {
            yield* paginate(async (after) => {
                var _a, _b, _c, _d;
                return (_d = (await this.remote.request(make_request_for_products_in_collection({
                    after,
                    collection_id: o.collection_id,
                    page_size: (_a = o.page_size) !== null && _a !== void 0 ? _a : defaults.page_size,
                    image_format: (_b = o.image_format) !== null && _b !== void 0 ? _b : defaults.image_format,
                    filters: (_c = o.filters) !== null && _c !== void 0 ? _c : [],
                }))).collection) === null || _d === void 0 ? void 0 : _d.products;
            });
        }
        async product_recommendations(o) {
            var _a;
            return (await this.remote.request(make_request_for_product_recommendations({
                intent: o.intent,
                product_id: o.product_id,
                image_format: (_a = o.image_format) !== null && _a !== void 0 ? _a : defaults.image_format,
            }))).productRecommendations;
        }
        async specific_products(o) {
            var _a;
            return (await this.remote
                .request(make_request_for_specific_products({
                ids: o.ids,
                image_format: (_a = o.image_format) !== null && _a !== void 0 ? _a : defaults.image_format,
            }))).products;
        }
        async checkout(o) {
            const raw = await this.remote.request(make_request_for_checkout_create({
                line_items: o.line_items,
            }));
            if (!(raw === null || raw === void 0 ? void 0 : raw.checkoutCreate))
                throw new ShopifyNotFoundError(`Failed to create checkout`);
            const { checkout, checkoutUserErrors } = raw.checkoutCreate;
            if (checkoutUserErrors.length > 0)
                throw new ShopifyCheckoutError(checkoutUserErrors);
            return checkout;
        }
        async everything() {
            return concurrent({
                shop: this.shop(),
                tags: Shopify.all(this.tags()),
                products: Shopify.all(this.products()),
                collections: Shopify.all(this.collections()),
            });
        }
    }
    Shopify.all = all;
    Shopify.first = first;

    const slate = new Slate();

    function translator(t) {
        return t;
    }

    function expand_id(pre, num) {
        return `gid://shopify/${pre}/${num}`;
    }
    function expander(pre) {
        return (n) => expand_id(pre, n);
    }
    const utransform = {
        label: (label) => label.toLowerCase(),
        id: {
            shorten: (id) => id.split("/").at(-1),
            expand: {
                collection: expander("Collection"),
                product: expander("Product"),
            },
        },
    };

    const translators = (home) => ({
        home: translator({
            hashify: () => "/",
            routify: () => ({ zone: "home", area: home }),
        }),
        products: translator({
            hashify: () => "/products",
            routify: () => ({ zone: "products" }),
        }),
        collections: translator({
            hashify: () => "/collections",
            routify: () => ({ zone: "collections" }),
        }),
        search: translator({
            hashify: ({ terms, tags }) => {
                const e = (t) => t.map(encodeURIComponent).join(":");
                const query = tags.length > 0
                    ? e(terms) + "::" + e(tags)
                    : e(terms);
                return `/search/${query}`;
            },
            routify: hashparts => {
                const [raw] = hashparts;
                const splitty = (s) => s.split(":").filter(t => t.length);
                if (raw.includes("::")) {
                    const [rawterms, rawtags] = raw.split("::");
                    const tags = splitty(rawtags);
                    const terms = splitty(rawterms);
                    return { zone: "search", terms, tags };
                }
                else
                    return { zone: "search", terms: splitty(raw), tags: [] };
            },
        }),
        collection: translator({
            hashify: ({ label, id }) => `/collection/${label}/${utransform.id.shorten(id)}`,
            routify: ([label, id]) => ({
                zone: "collection",
                label,
                id: utransform.id.expand.collection(id),
            }),
        }),
        product: translator({
            hashify: ({ label, id }) => `/product/${label}/${utransform.id.shorten(id)}`,
            routify: ([label, id]) => ({
                zone: "product",
                label,
                id: utransform.id.expand.product(id),
            }),
        }),
        not_found: translator({
            hashify: () => "/",
            routify: () => ({ zone: "not_found" }),
        }),
    });

    // import {decode_from_hash} from "./decode_from_hash.js"
    function parse_hash_parts(prefix, hash) {
        if (hash && hash[0] === "#")
            hash = hash.slice(1);
        if (prefix && hash && hash.startsWith(prefix))
            hash = hash.slice(prefix.length);
        return hash.includes("/")
            ? hash.split("/").slice(1)
            : [hash];
        // return parts.map(part => decode_from_hash(part))
    }

    var __classPrivateFieldSet$5 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$6 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Translation_instances, _Translation_prefix, _Translation_home, _Translation_get;
    class Translation {
        constructor(home, prefix) {
            _Translation_instances.add(this);
            _Translation_prefix.set(this, void 0);
            _Translation_home.set(this, void 0);
            __classPrivateFieldSet$5(this, _Translation_prefix, prefix, "f");
            __classPrivateFieldSet$5(this, _Translation_home, home, "f");
        }
        routify(hash) {
            const [zone, ...hashparts] = parse_hash_parts(__classPrivateFieldGet$6(this, _Translation_prefix, "f"), hash);
            return __classPrivateFieldGet$6(this, _Translation_instances, "m", _Translation_get).call(this, zone).routify(hashparts);
        }
        hashify(route) {
            return __classPrivateFieldGet$6(this, _Translation_prefix, "f") + __classPrivateFieldGet$6(this, _Translation_instances, "m", _Translation_get).call(this, route.zone).hashify(route);
        }
    }
    _Translation_prefix = new WeakMap(), _Translation_home = new WeakMap(), _Translation_instances = new WeakSet(), _Translation_get = function _Translation_get(zone) {
        const t = translators(__classPrivateFieldGet$6(this, _Translation_home, "f"));
        if (zone === "")
            zone = "home";
        if (!(zone in t))
            zone = "not_found";
        return t[zone];
    };

    var __classPrivateFieldSet$4 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$5 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Router_instances, _Router_set_hash, _Router_translation, _Router_route, _Router_home, _Router_routefor;
    class Router {
        constructor({ home, prefix = "", set_hash }) {
            _Router_instances.add(this);
            _Router_set_hash.set(this, void 0);
            _Router_translation.set(this, void 0);
            _Router_route.set(this, void 0);
            _Router_home.set(this, void 0);
            this.on_route_change = pub();
            this.hashchange = (event) => {
                const { hash } = new URL(event.newURL);
                this.apply_hash(hash);
            };
            this.routes = {
                home: () => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "home", area: __classPrivateFieldGet$5(this, _Router_home, "f") }),
                collections: () => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "collections" }),
                products: () => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "products" }),
                search: (terms, tags) => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "search", terms, tags }),
                collection: ({ id, handle: label }) => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "collection", id, label }),
                product: ({ id, handle: label }) => __classPrivateFieldGet$5(this, _Router_instances, "m", _Router_routefor).call(this, { zone: "product", id, label }),
            };
            __classPrivateFieldSet$4(this, _Router_home, home, "f");
            __classPrivateFieldSet$4(this, _Router_set_hash, set_hash, "f");
            __classPrivateFieldSet$4(this, _Router_route, { zone: "home", area: home }, "f");
            __classPrivateFieldSet$4(this, _Router_translation, new Translation(home, prefix), "f");
        }
        static setup(home, prefix = "") {
            const router = new Router({
                home,
                prefix,
                set_hash: hash => location.hash = hash,
            });
            router.apply_hash(location.hash);
            addEventListener("hashchange", router.hashchange);
            return router;
        }
        get route() {
            return __classPrivateFieldGet$5(this, _Router_route, "f");
        }
        set route(r) {
            const hash = __classPrivateFieldGet$5(this, _Router_translation, "f").hashify(r);
            __classPrivateFieldGet$5(this, _Router_set_hash, "f").call(this, hash);
        }
        apply_hash(hash) {
            const route = __classPrivateFieldGet$5(this, _Router_translation, "f").routify(hash);
            __classPrivateFieldSet$4(this, _Router_route, route, "f");
            this.on_route_change.publish(route);
        }
        get search_terms() {
            const route = __classPrivateFieldGet$5(this, _Router_route, "f");
            return (route && route.zone === "search")
                ? route.terms
                : [];
        }
        get search_tags() {
            const route = __classPrivateFieldGet$5(this, _Router_route, "f");
            return (route && route.zone === "search")
                ? route.tags
                : [];
        }
    }
    _Router_set_hash = new WeakMap(), _Router_translation = new WeakMap(), _Router_route = new WeakMap(), _Router_home = new WeakMap(), _Router_instances = new WeakSet(), _Router_routefor = function _Router_routefor(route) {
        const hash = __classPrivateFieldGet$5(this, _Router_translation, "f").hashify(route);
        return {
            url: "#" + hash,
            go: () => __classPrivateFieldGet$5(this, _Router_set_hash, "f").call(this, hash),
        };
    };

    var __classPrivateFieldSet$3 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$4 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Cart_instances, _Cart_shopify, _Cart_store, _Cart_state, _Cart_flatstate, _Cart_get_item, _Cart_get_product, _Cart_fetch_products;
    class Cart {
        constructor(shopify, store) {
            _Cart_instances.add(this);
            _Cart_shopify.set(this, void 0);
            _Cart_store.set(this, void 0);
            _Cart_state.set(this, void 0);
            _Cart_flatstate.set(this, (x) => flat.state(x));
            __classPrivateFieldSet$3(this, _Cart_shopify, shopify, "f");
            __classPrivateFieldSet$3(this, _Cart_store, store, "f");
            __classPrivateFieldSet$3(this, _Cart_state, flat.state({
                items: [],
                products: [],
            }), "f");
            this.state = Flat.readonly(__classPrivateFieldGet$4(this, _Cart_state, "f"));
        }
        save() {
            const { items } = __classPrivateFieldGet$4(this, _Cart_state, "f");
            __classPrivateFieldGet$4(this, _Cart_store, "f").save({ items });
        }
        async load() {
            const pack = __classPrivateFieldGet$4(this, _Cart_store, "f").load();
            const promise = __classPrivateFieldGet$4(this, _Cart_instances, "m", _Cart_fetch_products).call(this, pack.items);
            __classPrivateFieldGet$4(this, _Cart_state, "f").items = pack.items.map(__classPrivateFieldGet$4(this, _Cart_flatstate, "f"));
            await promise;
        }
        get units() {
            return __classPrivateFieldGet$4(this, _Cart_state, "f").items
                .map(item => ({ item, product: __classPrivateFieldGet$4(this, _Cart_instances, "m", _Cart_get_product).call(this, item.product_id) }))
                .filter(data => !!data.product && Op.is.ready(data.product.op))
                .map(data => {
                const product = Op.payload(data.product.op);
                const variant = product === null || product === void 0 ? void 0 : product.variants.edges.map(e => e.node).find(v => v.id === data.item.variant_id);
                return (!!product && !!variant && variant.availableForSale)
                    ? {
                        product,
                        variant,
                        product_id: data.item.product_id,
                        variant_id: data.item.variant_id,
                        quantity: data.item.quantity,
                    }
                    : undefined;
            })
                .filter(u => !!u);
        }
        add(variant_id, product) {
            // add item
            __classPrivateFieldGet$4(this, _Cart_state, "f").items = [
                __classPrivateFieldGet$4(this, _Cart_flatstate, "f").call(this, {
                    product_id: product.id,
                    variant_id,
                    quantity: 1,
                }),
                ...__classPrivateFieldGet$4(this, _Cart_state, "f").items.filter(i => i.variant_id !== variant_id),
            ];
            // add product in ready state
            __classPrivateFieldGet$4(this, _Cart_state, "f").products = [
                __classPrivateFieldGet$4(this, _Cart_flatstate, "f").call(this, {
                    product_id: product.id,
                    op: Op.ready(product),
                }),
                ...__classPrivateFieldGet$4(this, _Cart_state, "f").products.filter(p => p.product_id !== product.id),
            ];
            this.save();
        }
        remove(variant_id) {
            __classPrivateFieldGet$4(this, _Cart_state, "f").items = __classPrivateFieldGet$4(this, _Cart_state, "f").items
                .filter(i => i.variant_id !== variant_id);
            this.save();
        }
        set_quantity(variant_id, quantity) {
            const item = __classPrivateFieldGet$4(this, _Cart_instances, "m", _Cart_get_item).call(this, variant_id);
            item.quantity = quantity;
            this.save();
        }
        clear() {
            __classPrivateFieldGet$4(this, _Cart_state, "f").items = [];
            this.save();
        }
    }
    _Cart_shopify = new WeakMap(), _Cart_store = new WeakMap(), _Cart_state = new WeakMap(), _Cart_flatstate = new WeakMap(), _Cart_instances = new WeakSet(), _Cart_get_item = function _Cart_get_item(variant_id) {
        return __classPrivateFieldGet$4(this, _Cart_state, "f").items.find(i => i.variant_id === variant_id);
    }, _Cart_get_product = function _Cart_get_product(product_id) {
        return __classPrivateFieldGet$4(this, _Cart_state, "f").products.find(i => i.product_id === product_id);
    }, _Cart_fetch_products = async function _Cart_fetch_products(items) {
        var _a;
        const new_product_ids = items
            .filter(i => !__classPrivateFieldGet$4(this, _Cart_instances, "m", _Cart_get_product).call(this, i.product_id))
            .map(i => i.product_id);
        const new_caches = new_product_ids
            .map(product_id => ({ product_id, op: Op.loading() }))
            .map(__classPrivateFieldGet$4(this, _Cart_flatstate, "f"));
        __classPrivateFieldGet$4(this, _Cart_state, "f").products = [
            ...__classPrivateFieldGet$4(this, _Cart_state, "f").products,
            ...new_caches
        ];
        if (new_product_ids.length > 0) {
            try {
                const products = (_a = (await __classPrivateFieldGet$4(this, _Cart_shopify, "f")
                    .specific_products({ ids: new_product_ids }))) !== null && _a !== void 0 ? _a : [];
                for (const cache of new_caches) {
                    const product = products.find(p => (p === null || p === void 0 ? void 0 : p.id) === cache.product_id);
                    cache.op = product
                        ? Op.ready(product)
                        : Op.error("error retrieving product");
                }
            }
            catch (error) {
                console.error("a cart product could not be loaded,", error);
                this.clear();
            }
        }
    };

    var __classPrivateFieldGet$3 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet$2 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _IdPuller_counter;
    class IdPuller {
        constructor() {
            _IdPuller_counter.set(this, 0);
        }
        pull() {
            var _a, _b;
            return __classPrivateFieldSet$2(this, _IdPuller_counter, (_b = __classPrivateFieldGet$3(this, _IdPuller_counter, "f"), _a = _b++, _b), "f"), _a;
        }
    }
    _IdPuller_counter = new WeakMap();

    var __classPrivateFieldGet$2 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Modal_id;
    class Modal {
        constructor() {
            _Modal_id.set(this, new IdPuller());
            this.on = {
                open: pub(),
            };
        }
        open(modal) {
            this.on.open.publish({
                modal,
                id: __classPrivateFieldGet$2(this, _Modal_id, "f").pull().toString(),
            });
        }
    }
    _Modal_id = new WeakMap();

    function init_state(router) {
        return flat.state({
            route: router.route,
            tags: [],
            collections: [],
            situation_op: Op.loading(),
            cart_open: false,
        });
    }

    var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Context_state;
    class Context extends Context$1 {
        constructor(shopify, router, theme, cart_store) {
            super();
            this.shopify = shopify;
            this.router = router;
            this.theme = theme;
            _Context_state.set(this, void 0);
            this.modal = new Modal();
            this.set_route = (route) => __classPrivateFieldGet$1(this, _Context_state, "f").route = route;
            this.set_tags = (tags) => __classPrivateFieldGet$1(this, _Context_state, "f").tags = tags;
            this.set_collections = (collections) => __classPrivateFieldGet$1(this, _Context_state, "f").collections = collections;
            this.set_situation_op = (op) => __classPrivateFieldGet$1(this, _Context_state, "f").situation_op = op;
            this.toggle_cart_open = (open = !__classPrivateFieldGet$1(this, _Context_state, "f").cart_open) => {
                __classPrivateFieldGet$1(this, _Context_state, "f").cart_open = open;
            };
            __classPrivateFieldSet$1(this, _Context_state, init_state(router), "f");
            this.state = Flat.readonly(__classPrivateFieldGet$1(this, _Context_state, "f"));
            this.cart = new Cart(this.shopify, cart_store);
        }
    }
    _Context_state = new WeakMap();

    const style$3 = css `

:host {
	display: flex;
	gap: 1em;
}

a {
	color: inherit;
	text-decoration: none;

	&[data-marked] {
		text-decoration: underline;
	}
}

`;

    const SheepNav = slate.shadow_component({ styles: style$3 }, use => {
        const { route } = use.context.state;
        const { routes } = use.context.router;
        function get_areas() {
            return {
                collections: {
                    url: routes.collections().url,
                    marked: (route.zone === "collections" ||
                        (route.zone === "home" && route.area === "collections"))
                },
                products: {
                    url: routes.products().url,
                    marked: (route.zone === "products" ||
                        (route.zone === "home" && route.area === "products"))
                },
            };
        }
        const areas = get_areas();
        return html `
		<a
			href="${areas.collections.url}"
			?data-marked="${areas.collections.marked}">
			<slot name=collections>
				collections
			</slot>
		</a>

		<a
			href="${areas.products.url}"
			?data-marked="${areas.products.marked}">
			<slot name=products>
				all products
			</slot>
		</a>
	`;
    });

    const styles$9 = css `

:host {
	display: flex;
	flex-direction: column;
	--slash-color: var(--sheep-slash-color, #f008);
}

.sale {
	width: max-content;
	align-self: end;
	padding: 0.2em 0.4em;
	border-radius: 1em;
	background: #0808;
	text-transform: uppercase;
}

.coolstack {
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5em;
	flex: flex-wrap;
}

.pricetag {
	display: flex;
	align-items: center;
	gap: 0.1em;

	.symbol {
		font-size: 2em;
		align-self: center;
	}

	.big {
		font-size: 2.4em;
	}

	.stack {
		display: inline-flex;
		flex-direction: column;
		line-height: 1em;

		> .currency {
			opacity: 0.5;
			font-size: 0.75em;
		}
	}

	&.comparison {
		font-size: 0.7em;
		position: relative;
		width: max-content;

		& > * {
			opacity: 0.4;
		}

		& [part="slash"] {
			color: var(--slash-color);
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to top left,
				transparent 0%,
				transparent calc(50% - 2px),
				currentColor calc(50% - 2px),
				currentColor calc(50% + 2px),
				transparent calc(50% + 2px),
				transparent 100%);
			pointer-events: none;
		}
	}
}

`;

    function get_symbol_for_currency_code(currencyCode) {
        switch (currencyCode.toUpperCase()) {
            case "USD":
            case "CAD":
            case "AUD":
            case "NZD":
            case "HKD":
            case "SGD":
                return "$";
            case "EUR":
                return "€";
            case "GBP":
                return "£";
            case "JPY":
            case "CNY":
                return "¥";
            case "INR":
                return "₹";
            case "BRL":
                return "R$";
            case "ZAR":
                return "R";
            case "RUB":
                return "₽";
            case "KRW":
                return "₩";
            case "TRY":
                return "₺";
            default:
                return undefined;
        }
    }

    function parse_money({ price, compareAtPrice }) {
        return {
            value: parse_money_value(price),
            comparison: compareAtPrice
                ? parse_money_value(compareAtPrice)
                : undefined,
        };
    }
    function parse_money_value(price) {
        const { amount, currencyCode: currency } = price;
        const number = parseFloat(amount);
        const symbol = get_symbol_for_currency_code(currency);
        const [big, smallraw] = number
            .toFixed(2)
            .split(".")
            .map(part => parseInt(part).toLocaleString());
        const small = (smallraw !== null && smallraw !== void 0 ? smallraw : "0").padStart(2, "0");
        return { number, symbol, currency, big, small };
    }

    function render_sale_tag(price, comparison) {
        const fraction = (comparison.number - price.number) / comparison.number;
        const percent = Math.round(fraction * 100);
        return html `
		<span class=sale part=sale data-gpart=sale>
			${percent}% off
		</span>
	`;
    }

    function render_money_value({ symbol, currency, big, small }) {
        return html `
		${symbol
        ? html `<span class=symbol>${symbol}</span>`
        : undefined}
		<span class=big>${big}</span>
		<span class=stack>
			${small
        ? html `<span class=small>${small}</span>`
        : undefined}
			<span class=currency>${currency}</span>
		</span>
	`;
    }

    const Price = slate.shadow_view({
        styles: styles$9,
        name: "price",
    }, _use => (variant) => {
        const { value, comparison } = parse_money(variant);
        return html `
		${comparison
        ? render_sale_tag(value, comparison)
        : undefined}

		<div class=coolstack>
			<div class="pricetag" ?data-sale=${!!comparison}>
				${render_money_value(value)}
			</div>

			${comparison
        ? html `
					<div class="pricetag comparison">
						${render_money_value(comparison)}
						<div part=slash></div>
					</div>
				`
        : undefined}
		</div>
	`;
    });

    const style$2 = css `

:host {
	display: flex;
	flex-direction: column;
	gap: 1em;
}

:host([hidden]) {
	display: none;
}

h2 {
	opacity: 0.4;
	text-transform: uppercase;
	text-align: center;
}

.listing {
	list-style: none;
	display: grid;
	grid-template-columns: auto auto 2fr auto;
	grid-auto-rows: auto;
	gap: 1em;
	align-items: center;

	> li {
		display: contents;

		> .thumb {
			grid-column: 1;
			> img {
				display: block;
				width: 3em;
				height: 5em;
				object-fit: cover;
				padding: 0.3rem;
				background: #fff4;
			}
		}

		> .quantity {
			grid-column: 2;
			> input {
				font-size: 1.5em;
				width: 3em;
				background: transparent;
				color: currentColor;
				border: 1px solid currentColor;
				border-radius: 0.5em;
				padding: 0.2em 0.5em;
			}
		}

		> .title {
			grid-column: 3;
		}

		> .price {
			grid-column: 4;
			justify-self: end;
		}

		> .remove {
			grid-column: 5;
			& button {
				display: flex;
				border: none;
				background: transparent;
				opacity: 0.4;
				cursor: pointer;
				color: currentColor;
				&:is(:hover, :focus) { opacity: 0.8; }
				&:active { opacity: 1; }
				& svg {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}
	}
}

.subtotal {
	display: flex;
	justify-content: end;
	padding-right: 2.5rem;

	& .group {
		display: flex;
		flex-direction: column;
		width: max-content;
	}

	& hr {
		opacity: 0.3;
		display: block;
		border: none;
		width: 100%;
		height: 0.1em;
		margin: 1em auto;
		background: currentColor;
	}

	& .block {
		display: flex;
	}

	& .heading {
		opacity: 0.4;
		display: flex;
		align-items: end;
		padding-bottom: 0.5em;
		padding-right: 3em;
		text-transform: uppercase;
		font-weight: bold;
	}
}

.terms, .terms-checkbox {
	display: block;
	padding-right: 2.5rem;

	&:is(.terms) {
		margin-top: 2rem;
	}

	&:is(.terms-checkbox) {
		margin-top: 2rem;
		margin-left: auto;
		text-align: right;
	}
}

.terms-checkbox {
	& label {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	& input {
		width: 1.5em;
		height: 1.5em;
	}
}

.actions {
	display: flex;
	flex-direction: row-reverse;
	gap: 1em;
	padding-top: 1em;
	padding-right: 2.5rem;
	align-items: center;
}

[part="checkout"]{
	font-size: 1.5em;

	&::part(button) {
		padding: 0.5em 1em;
	}
}

[part="clear-cart"] {
	font-size: 1em;

	&::part(button) {
		padding: 0.5em 1em;
		background: transparent;
	}
}

:host {
	container: layout / inline-size;
}

@container (width < 40em) {
	.listing {
		display: flex;
		grid: none;
		flex-direction: column;
		align-items: stretch;
		gap: 1em;

		> li {
			display: grid;
			grid:
				"thumb  title quantity"
				"remove price price   "
				/ auto  minmax(1em, 1fr)   auto;

			background: #fff4;
			padding: 0.5rem;
			box-shadow: 0.2em 0.3em 0.2em #0001;

			> .thumb { grid-area: thumb; }
			> .title { grid-area: title; }
			> .quantity { grid-area: quantity; }
			> .price { grid-area: price; }
			> .remove { grid-area: remove; }

			> .title { padding: 0 0.5rem; }

			> .remove {
				justify-self: center;
				align-self: end;
				> button > svg {
					width: 3rem;
					height: 3rem;
				}
			}

			& input {
				font-size: 1em !important;
			}

			& [view="price"] {
				font-size: 0.8em;
			}
		}
	}

	.subtotal {
		padding: 0;
		& hr { display: none; }
		& .block {
			justify-content: end;
			flex-wrap: wrap;
			gap: 0.5rem;
			padding: 0;
		}
		& .heading { }
	}

	.actions {
		padding-right: 0;
	}

	.terms, .terms-checkbox {
		padding: 0;
	}

	[part="checkout"], [part="clear-cart"] {
		font-size: 1em;
	}
}

@container (width < 20em) {
	.listing > li {
		position: relative;
		grid:
			"thumb  title"
			"remove quantity"
			"price  price"
			/ auto  minmax(1em, 1fr);
	}
	:is(.quantity, .remove) {
		align-self: center;
	}
	.quantity {
		margin-left: auto;
	}

	.actions {
		flex-direction: column;
	}
}

`;

    function sum_subtotal([firstunit, ...units]) {
        var _a;
        const currencyCode = firstunit.variant.price.currencyCode;
        const first = get_values(firstunit);
        const totals = {
            price: first.price,
            comparison: (_a = first.comparison) !== null && _a !== void 0 ? _a : first.price,
        };
        for (const unit of units) {
            const { price, comparison } = get_values(unit);
            totals.price += price;
            totals.comparison += comparison !== null && comparison !== void 0 ? comparison : price;
        }
        return {
            price: {
                currencyCode,
                amount: totals.price.toString(),
            },
            compareAtPrice: (totals.price !== totals.comparison)
                ? {
                    currencyCode,
                    amount: totals.comparison.toString(),
                }
                : undefined,
        };
    }
    function get_values({ variant, quantity }) {
        return {
            price: parseFloat(variant.price.amount) * quantity,
            comparison: variant.compareAtPrice && parseFloat(variant.compareAtPrice.amount) * quantity,
        };
    }

    const styles$8 = css `

:host {
	display: block;
	height: max-content;
	width: max-content;
}

button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	cursor: pointer;
	user-select: none;
	padding: 0.2em 0.5em;
	font: inherit;
	font-weight: bold;
	border: none;
	border: 0.2em solid #fff8;
	border-radius: 0.5em;
	text-transform: uppercase;

	opacity: 0.7;
	color: white;
	background: #0b0;
	text-shadow: 0.1em 0.1em 0.1em #0004;

	&:is(:hover, :focus) {
		opacity: 0.9;
	}

	&:active {
		opacity: 1;
	}

	&[disabled] {
		opacity: 0.2;
		background: #888;
		color: white;
		cursor: default;
	}
}

`;

    const Coolbutton = slate.shadow_view({
        name: "coolbutton",
        styles: styles$8,
    }, _use => ({ active, text, onclick }) => html `

	<button
		part=button
		@click=${onclick}
		?disabled=${!active}>
		<slot part=slot></slot>
		${text}
	</button>

`);

    const placeholder_img = {
        src: "https://i.imgur.com/h1v2noQ.webp",
        alt: "",
    };

    function prep(fun) {
        return (image) => image
            ? { src: fun(image), alt: image.altText }
            : placeholder_img;
    }
    const img = {
        tiny: prep(i => i.url_tiny),
        small: prep(i => i.url_small),
        medium: prep(i => i.url_medium),
        large: prep(i => i.url_large),
        original: prep(i => i.url_original),
    };

    function render_img({ img, part = "", onclick = () => { }, }) {
        return html `
		<img
			alt="${img.alt}"
			src="${img.src}"
			part="${part}"
			@click=${(event) => onclick(event, img)}
			/>
	`;
    }

    class ProductHelper {
        constructor(product) {
            this.product = product;
        }
        get images() {
            return this.product.images.edges.map(e => e.node);
        }
        get variants() {
            return this.product.variants.edges.map(e => e.node);
        }
        get first_variant() {
            return this.variants[0];
        }
        get featured_image() {
            const { product } = this;
            let image;
            const product_has_any_image_at_all = (product.featuredImage &&
                product.images.edges.length);
            if (product_has_any_image_at_all) {
                image = product.images.edges
                    .map(e => e.node)
                    .find(node => { var _a; return node.id === ((_a = product.featuredImage) === null || _a === void 0 ? void 0 : _a.id); });
            }
            return image;
        }
        get_variant(variant_id) {
            return this.variants.find(v => v.id === variant_id);
        }
        get_variant_image(variant_id) {
            const variant = this.get_variant(variant_id);
            if (variant && variant.image) {
                return this.images.find(i => i.id === variant.image.id);
            }
        }
        cross_reference_collections(all_collections) {
            const collections = [];
            const product_collection_records = this.product.collections.edges
                .map(e => e.node);
            for (const c of product_collection_records) {
                const found = all_collections.find(ac => ac.id === c.id);
                if (found)
                    collections.push(found);
            }
            return collections;
        }
    }

    function icon(strings, ...values) {
        return (tag) => tag(strings, ...values);
    }

    var icon_x = icon `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    const SheepCart = slate.shadow_component({ styles: style$2 }, use => {
        const { cart, shopify } = use.context;
        const { units } = use.context.cart;
        const state = use.flatstate({ termsChecked: false });
        const attrs = use.attrs({ "require-checkout-terms": Boolean });
        function render_unit(unit) {
            const producthelp = new ProductHelper(unit.product);
            const image = producthelp.get_variant_image(unit.variant_id);
            const variant = producthelp.get_variant(unit.variant_id);
            if (!variant)
                throw new Error("unknown variant");
            const handle_quantity_change = (e) => {
                const target = e.target;
                const quantity = parseInt(target.value);
                if (!isNaN(quantity))
                    cart.set_quantity(unit.variant_id, quantity);
            };
            const handle_remove = () => {
                cart.remove(unit.variant_id);
            };
            const currencyCode = variant.price.currencyCode;
            const summed_pricing = {
                price: {
                    currencyCode,
                    amount: (parseFloat(variant.price.amount) * unit.quantity).toString(),
                },
                compareAtPrice: variant.compareAtPrice
                    ? {
                        currencyCode,
                        amount: (parseFloat(variant.compareAtPrice.amount) * unit.quantity).toString(),
                    }
                    : undefined,
            };
            return html `
			<div class=thumb>
				${render_img({
            img: img.tiny(image),
            part: "img",
        })}
			</div>

			<div class=quantity>
				<input
					type=number
					min=1
					.value="${unit.quantity}"
					@change="${handle_quantity_change}"/>
			</div>

			<div class=title>
				<h3>${unit.product.title}</h3>
				${producthelp.variants.length > 1
            ? html `<p>${variant.title}</p>`
            : undefined}
			</div>

			<div class=price>
				${Price([summed_pricing], { attrs: { part: "price" } })}
			</div>

			<div class=remove>
				<button
					title="remove from cart"
					@click="${handle_remove}">
					${icon_x(b$1)}
				</button>
			</div>
		`;
        }
        async function checkout() {
            const line_items = (cart.units
                .map(({ variant_id, quantity }) => ({
                variant_id,
                quantity,
            })));
            const win = window.open("", "_blank");
            if (!win)
                throw new Error("error opening window");
            win.document.body.innerHTML = `
			<h1>
				loading checkout...
			</h1>
			<style>
				html, body {
					background: #888;
					color: white;
					padding: 10%;
				}
				h1 {
					text-align: center;
				}
			</style>
		`;
            const { webUrl } = await shopify.checkout({ line_items });
            win.location.href = webUrl;
            win.focus();
            cart.clear();
        }
        return html `
		<h2>
			${units.length > 0
        ? "Your Cart"
        : "Cart is Empty"}
		</h2>

		<ol class=listing>
			${units.map(unit => html `
				<li part=line-item data-gpart=line-item>
					${render_unit(unit)}
				</li>
			`)}
		</ol>

		${units.length > 0
        ? html `
				<div class=subtotal>
					<div class=group>
						<hr/>
						<div class=block>
							<div class=heading>
								Subtotal
							</div>
							<div class=price>
								${Price([sum_subtotal(units)], { attrs: { part: "price" } })}
							</div>
						</div>
					</div>
				</div>
				<slot class=terms name=terms></slot>
				${attrs["require-checkout-terms"] ? html `
					<div class=terms-checkbox>
						<label>
							<input type="checkbox" @input=${(event) => {
            const input = event.currentTarget;
            state.termsChecked = input.checked;
        }} />
							<slot name=terms-checkbox-label>
								I accept the terms above <em>(required for checkout)</em>
							</slot>
						</label>
					</div>
				` : undefined}
				<div class=actions>
					${Coolbutton([{
                active: attrs["require-checkout-terms"]
                    ? state.termsChecked
                    : true,
                text: "Checkout",
                onclick: checkout,
            }], { attrs: { part: "checkout" } })}
					${Coolbutton([{
                active: true,
                text: "clear cart",
                onclick: () => cart.clear(),
            }], { attrs: { part: "clear-cart" } })}
				</div>
			`
        : undefined}
	`;
    });

    var icon_x_circle = icon `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

    const styles$7 = css `

dialog {
	margin: auto;
	margin-top: 2em;
	background: transparent;
	border: none;

	&::backdrop {
		background: #222222f8;
	}
}

.actions, sheep-cart {
	width: 86em;
	max-width: 100%;
	margin: 0.2em auto;
}

sheep-cart {
	padding: 1em;
}

.actions {
	display: flex;
	justify-content: end;
	align-items: center;

	pointer-events: none;

	> * {
		pointer-events: all;
	}
}

.close {
	font: inherit;
	background: transparent;
	color: #fffc;
	border: none;

	opacity: 0.7;
	cursor: pointer;

	&:focus { opacity: 0.8; }
	&:hover { opacity: 0.9; }
	&:active { opacity: 1; }

	> svg {
		width: 2em;
		height: 2em;
	}
}

.contents {
	padding: 1em;
	color: #fff;
	box-shadow: 1px 2px 5px #0008;

	> [part="img"] {
		position: fixed;
		max-width: 90vw;
		max-height: 90vh;
		inset: 0;
		margin: auto;

		cursor: pointer;
		user-select: none;
		border-radius: var(--sheep-border-radius, 0.2em);
	}
}

`;

    const SheepModal = slate.shadow_component({ styles: styles$7 }, use => {
        const attrs = use.attrs({ "cart-require-checkout-terms": Boolean });
        use.setup(() => use.context.modal.on.open(o => open_modal(o)));
        const is_slotted = {
            cart_terms_checkbox_label: use.element.querySelector(`[slot="cart-terms-checkbox-label"]`),
        };
        function modal_dressing(id, content) {
            return html `
			<div class=actions>
				<button class=close @click=${() => close_modal(id)}>
					${icon_x_circle(b$1)}
				</button>
			</div>
			<div class=contents>
				${content}
			</div>
		`;
        }
        function distinguish_modal_details(id, modal) {
            switch (modal.kind) {
                case "image": {
                    const { img: { src, alt } } = modal;
                    const closer = () => close_modal(id);
                    return {
                        on_backdrop_click: closer,
                        content: html `
						<img
							part=img
							src="${src}"
							alt="${alt}"
							@click=${closer} />
					`,
                    };
                }
                case "cart": {
                    return {
                        on_backdrop_click: () => close_modal(id),
                        content: html `
						<sheep-cart
							part=cart
							require-checkout-terms=${attrs["cart-require-checkout-terms"]}
							>
							<slot name=cart-terms slot=terms></slot>
							${is_slotted.cart_terms_checkbox_label ? html `
								<slot name=cart-terms-checkbox-label slot=terms-checkbox-label></slot>
							` : undefined}
						</sheep-cart>
					`,
                    };
                }
            }
        }
        function open_modal({ id, modal }) {
            const dialog = document.createElement("dialog");
            dialog.setAttribute("data-id", id);
            const { content, on_backdrop_click } = (distinguish_modal_details(id, modal));
            dialog.onclick = event => {
                if (event.target === dialog)
                    on_backdrop_click();
            };
            j$1(modal_dressing(id, content), dialog);
            use.shadow.appendChild(dialog);
            dialog.showModal();
        }
        function close_modal(id) {
            const dialog = use
                .shadow
                .querySelector(`[data-id="${id}"]`);
            if (dialog) {
                dialog.close();
                dialog.remove();
            }
        }
        return html ``;
    });

    var icon_search = icon `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;

    const style$1 = css `

:host {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	--highlight: var(--sheep-highlight, lime);
}

.searchbox {
	position: relative;

	> input {
		display: block;
		font-size: 1.5em;
		width: 100%;
		min-width: 4em;
		max-width: 20em;
		background: transparent;
		border: 0.1em solid;
		border-radius: 0.5em;
		padding: 0.3em;
		padding-left: 2em;
		color: inherit;
		transition: transform 0.3s ease-in-out;

		&:focus {
			transform: scale(1.03);
		}
	}

	> svg {
		position: absolute;
		left: 0.5em;
		top: 0;
		bottom: 0;
		margin: auto;
		transition: all 0.3s ease-in-out;
	}

	&[data-active] {
		color: var(--highlight);
		+ svg {
			color: inherit;
		}
	}
}


.searchtags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.1em;
	min-width: 0;

	> label {
		display: flex;
		align-items: center;
		border: 1px solid;
		border-radius: 1em;
		padding: 0 0.3em;
		min-width: 0;
		gap: 0.5em;

		& input {
			display: none;
			opacity: 0.5;
		}

		&[data-active] {
			color: var(--highlight);
			& input { opacity: 1; }
		}

		> span {
			font-size: 0.8em;
			user-select: none;
		}
	}
}

`;

    function update_tag(tag, router) {
        return (event) => {
            const target = event.target;
            const terms = router.search_terms;
            const tag_set = new Set(router.search_tags);
            if (target.checked)
                tag_set.add(tag);
            else
                tag_set.delete(tag);
            const nada = tag_set.size === 0 && terms.length === 0;
            if (nada)
                router.routes.home().go();
            else
                router.routes.search(terms, [...tag_set]).go();
        };
    }

    function get_tag_data({ state }) {
        const { route, tags } = state;
        const active_tag_names = (route && route.zone === "search")
            ? route.tags
            : [];
        const is_tag_active = (tag) => {
            return active_tag_names.includes(tag);
        };
        const tag_data = tags.map(tag => ({
            tag,
            active: is_tag_active(tag),
        }));
        return tag_data;
    }

    function render_search_tags(context) {
        return html `
		${get_tag_data(context).map(({ tag, active }) => html `
			<label part="${part(active)}" data-tag="${tag}" ?data-active="${active}">
				<input
					type="checkbox"
					.checked="${active}"
					@input="${update_tag(tag, context.router)}"
					/>
				<span>${tag}</span>
			</label>
		`)}
	`;
    }
    function part(active) {
        return active
            ? "tag x-active"
            : "tag";
    }

    function ascertain_search_details(router, value) {
        const terms = value.split(/\s+/).filter(t => t.length);
        const tags = router.search_tags;
        const there_is_nothing_to_search_for = terms.length === 0 && tags.length === 0;
        return {
            terms,
            there_is_nothing_to_search_for,
        };
    }

    async function populate_input_with_route_search_terms(wait, router, get_input) {
        await wait;
        if (router.route.zone === "search")
            get_input().value = router.route.terms.join(" ");
    }

    function populate_input_with_route_search_terms_when_user_is_not_focused_on_input(route, user_is_focused_on_input, input) {
        const is_search = route.zone === "search";
        const not_focused = !user_is_focused_on_input;
        if (not_focused) {
            if (is_search)
                input.value = route.terms.join(" ");
            else
                input.value = "";
        }
    }

    const SheepSearch = slate.shadow_component({ styles: style$1 }, use => {
        const { router } = use.context;
        const is_search = router.route.zone === "search" && router.route.terms.length;
        function get_input() {
            return use.shadow.querySelector("input");
        }
        function get_user_is_focused_on_input() {
            return document.activeElement === use.element || use.element.contains(document.activeElement);
        }
        use.setup(() => {
            populate_input_with_route_search_terms(use.element.updateComplete.then(() => undefined), use.context.router, get_input);
            return use.context.router.on_route_change(route => populate_input_with_route_search_terms_when_user_is_not_focused_on_input(route, get_user_is_focused_on_input(), get_input()));
        });
        const search = debounce(250, () => {
            const { router } = use.context;
            const details = ascertain_search_details(router, get_input().value);
            if (details.there_is_nothing_to_search_for)
                router.routes.home().go();
            else
                router.routes.search(details.terms, router.search_tags).go();
        });
        return html `
		<div ?data-active=${is_search} class=searchbox>
			<input part=input type=text @input="${search}"/>
			${icon_search(b$1)}
		</div>
		<div class=searchtags>
			${render_search_tags(use.context)}
		</div>
	`;
    });

    var icon_loader = icon `<svg xmlns="http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="feather feather-loader" > <line x1="12" y1 = "2" x2 = "12" y2 = "6" > </line><line x1="12" y1="18" x2="12" y2="22"></line > <line x1="4.93" y1 = "4.93" x2 = "7.76" y2 = "7.76" > </line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line > <line x1="2" y1 = "12" x2 = "6" y2 = "12" > </line><line x1="18" y1="12" x2="22" y2="12"></line > <line x1="4.93" y1 = "19.07" x2 = "7.76" y2 = "16.24" > </line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line > </svg>`;

    var icon_alert_circle = icon `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    const render_op = prep_render_op({
        loading: () => html `
		<span class="op loading">
			${icon_loader(b$1)}
		</span>
	`,
        error: reason => html `
		<span class="op error">
			${icon_alert_circle(b$1)}
			${reason}
		</span>
	`
    });

    const style = css `

:host {
	display: block;
}

[part="collection-tab-list"] {
	display: flex;
	margin-bottom: 1em;
	flex-wrap: wrap;
	justify-content: center;

	> [part="collection-tab"] {
		color: inherit;
		text-shadow: none;
		padding: 0.2em 0.5em;
		border-radius: 0.5em;
		font-size: 1.1em;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		font-weight: bold;
		-webkit-user-drag: none;
		user-drag: none;
		user-select: none;
		overflow: hidden;

		position: relative;

		> .bgimg {
			opacity: 0;
			z-index: 1;
			position: absolute;
			inset: 0;
			background-size: cover;
			background-position: top center;
			transition: all 1s ease;
		}

		> .text {
			z-index: 2;
			position: relative;
		}

		&[data-active-collection] {
			color: white;
			text-shadow: 0.05em 0.1em 0.1em #0008;
			box-shadow: 0.1em 0.2em 0.3em #0002;
			& > .bgimg {
				opacity: 0.5;
				background-position: center center;
			}
		}
	}
}

`;

    const styles$6 = css `

:host {
	display: block;
	container-type: inline-size;
}

.collection_header {
	margin-bottom: 1em;
	text-align: center;
	text-transform: capitalize;
	font-size: 1.2rem;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
	width: 100%;
	gap: 0.5rem;
}

@container (width < 16em) {
	.grid {
		display: flex;
		flex-direction: column;
	}
}

[view="product-card"] {
	font-size: 0.8em;
	max-width: 100%;
}

footer {
	display: flex;
	padding: 1em;
	justify-content: center;
	align-items: center;

	> button {
		opacity: 0.7;
		font: inherit;
		text-transform: uppercase;
		font-size: 1em;
		padding: 1em 2em;
		background: #fffa;
		color: #000a;
		border: none;
		cursor: pointer;
		user-select: none;
		border-radius: 3em;
		&:is(:hover, :focus) { opacity: 0.8; }
		&:active { opacity: 1; }
	}
}

`;

    const styles$5 = css `

:host > a {
	display: flex;
	width: 100%;
	height: 100%;
	gap: 0.5em;
	text-decoration: none;
	color: inherit;

	> img {
		flex: 1;
		max-width: 4rem;
		object-fit: cover;
		user-select: none;
	}

	> [part="plate"] {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		gap: 0.5em;

		> h1 {
			font-size: 1.2em;
		}

		> .action {
			display: flex;
			margin-top: auto;
			gap: 0.5em;
			align-items: end;
			flex-wrap: wrap-reverse;

			> .button {
				flex: 1 1 6em;
				width: 100%;
				max-width: 10em;

				&::part(button) {
					min-height: 3em;
				}

				&::part(slot) {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				small {
					font-weight: normal;
				}
			}

			> .pricebox {
				margin-left: auto;
			}
		}
	}
}

`;

    const styles$4 = css `

ol {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	gap: 0.1em;
}

li {
	border: 1px solid currentColor;
	padding: 0 0.3em;

	&[part="collection"] {
		border-radius: 0.3em;
	}

	&[part="tag"] {
		opacity: 0.7;
		border-radius: 1em;
	}
}

`;

    const Pills = slate.shadow_view({
        name: "pills",
        styles: styles$4,
    }, use => (product) => {
        const productHelper = new ProductHelper(product);
        const collections = productHelper
            .cross_reference_collections(use.context.state.collections);
        return html `
		<ol part=list>

			${collections.map(collection => html `
				<li part=collection>${collection.title}</li>
			`)}

			${product.tags.map(tag => html `
				<li part=tag>${tag}</li>
			`)}
		</ol>
	`;
    });

    function display_price({ product, single_price, multiple_prices, }) {
        const more_than_one_variant = product.variants.edges.length > 1;
        const all_the_same_price = product.variants.edges
            .every(p => p.node.price.amount === product.variants.edges[0].node.price.amount);
        function numerical(price) {
            return parseFloat(price.amount);
        }
        const variants = product.variants.edges.map(e => e.node);
        let cheapest_variant = variants[0];
        for (const variant of variants) {
            if (numerical(variant.price) < numerical(cheapest_variant.price))
                cheapest_variant = variant;
        }
        return (more_than_one_variant && !all_the_same_price)
            ? multiple_prices(cheapest_variant)
            : single_price(cheapest_variant);
    }

    function add_button({ cart, product, variant_id, allow_select, Coolbutton, }) {
        const number_of_variants = product
            .variants
            .edges
            .length;
        const variant = product
            .variants
            .edges
            .map(e => e.node)
            .find(v => v.id === variant_id);
        const unit = cart
            .units
            .find(u => u.variant_id === variant_id);
        const button_type = (allow_select && number_of_variants > 1)
            ? "select_from_variants"
            : unit
                ? "in_cart"
                : variant.availableForSale
                    ? "add_to_cart"
                    : "sold_out";
        switch (button_type) {
            case "select_from_variants":
                return Coolbutton([{ active: true, onclick: () => { } }], {
                    attrs: {
                        part: "addbutton x-select-from-variants",
                        gpart: "addbutton x-select-from-variants",
                    },
                    content: html `
					${number_of_variants} Options
				`,
                });
            case "in_cart":
                return Coolbutton([{ active: false, onclick: () => { } }], {
                    attrs: {
                        part: "addbutton x-in-cart",
                        gpart: "addbutton x-in-cart",
                    },
                    content: html `
					in cart
				`,
                });
            case "add_to_cart":
                return Coolbutton([{
                        active: true,
                        onclick: event => {
                            event.preventDefault();
                            cart.add(variant_id, product);
                        },
                    }], {
                    attrs: {
                        part: "addbutton x-add-to-cart",
                        gpart: "addbutton x-add-to-cart",
                    },
                    content: html `
					Add to Cart
				`,
                });
            case "sold_out":
                return Coolbutton([{ active: false, onclick: () => { } }], {
                    attrs: {
                        part: "addbutton x-sold-out",
                        gpart: "addbutton x-sold-out",
                    },
                    content: html `
					Sold Out
				`,
                });
            default:
                throw new Error(`unknown button type "${button_type}"`);
        }
    }

    const ProductCard = slate.shadow_view({
        styles: styles$5,
        name: "product-card",
    }, use => (product) => html `

	<a href="${use.context.router.routes.product(product).url}">

		${render_img({
    part: "img",
    img: img.tiny(new ProductHelper(product).featured_image),
})}

		<div part=plate>
			<h1 part="title a" data-gpart="a">
				${product.title}
			</h1>

			${Pills([product], { attrs: { part: "pills", gpart: "pills" } })}

			<div class=action>
				${add_button({
    product,
    cart: use.context.cart,
    allow_select: true,
    Coolbutton,
    variant_id: new ProductHelper(product).first_variant.id,
})}

				<div class=pricebox>
					${display_price({
    product,
    single_price: variant => html `
							${Price([variant], { attrs: { part: "price singleprice" } })}
						`,
    multiple_prices: variant => html `
							<div class=info>starts at</div>
							${Price([variant], { attrs: { part: "price multiprice" } })}
						`,
})}
				</div>

			</div>
		</div>
	</a>
`);

    const ProductList = slate.shadow_view({
        styles: styles$6,
        name: "product-list",
    }, _use => ({ situation: { products, load_more_op, load_more } }) => (((products.length > 0)
        ? html `
				<div class=grid>
					${products.map(product => ProductCard([product], { attrs: { part: "card", gpart: "card" } }))}
				</div>

				<footer>
					${render_op(load_more_op, () => load_more
        ? html `<button @click=${load_more}>load more</button>`
        : undefined)}
				</footer>
			`
        : html `
				<p>No products found</p>
			`)));

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class e extends i$2{constructor(i){if(super(i),this.et=T$1,i.type!==t$2.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T$1||null==r)return this.vt=void 0,this.et=r;if(r===w$1)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.vt;this.et=r;const s=[r];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$4(e);

    const styles$3 = css `

:host {
	display: block;
	container-type: inline-size;
	--border-radius: var(--sheep-border-radius, 0.2em);
	--frame-padding: var(--sheep-frame-padding, 1em);
	--frame-background: var(--sheep-frame-background, #fff2);
}

[part="grid"] {
	display: grid;
	gap: 1em;
	grid:
		"feature feature feature .       .       .      " 1fr
		"feature feature feature heading heading heading"
		"feature feature feature pills   pills   pills  "
		"feature feature feature options options options"
		"feature feature feature buy     buy     buy    "
		"feature feature feature .       .       .      " 1fr
		"essay   essay   essay   essay   essay   essay  "
		"images  images  images  images  images  images ";
	grid-template-columns: repeat(auto-fit, minmax(1em, 1fr));
	align-items: start;
}

@container (width < 30em) {
	[part="grid"] {
		grid:
			"feature"
			"heading"
			"pills"
			"options"
			"buy"
			"essay"
			"images"
			/ 1fr;
		grid-template-columns: repeat(auto-fit, minmax(1em, 1fr));
	}
}

@container (width < 30em) {
	[part="aside"] > img {
		width: 50cqi;
		height: 50cqi;
	}
}

[part="grid"] {
	> figure { grid-area: feature; }
	> h1 { grid-area: heading; }
	> .pills { grid-area: pills; }
	> .options { grid-area: options; }
	> .buy { grid-area: buy; }
	> aside { grid-area: images; }
	> section {
		grid-area: essay;
		max-width: 48em;
		justify-self: center;
		line-height: 1.5;
	}

	> figure {
		padding: var(--frame-padding);
		background: var(--frame-background);
		width: 100%;
		height: 100%;
		align-self: center;
		justify-self: end;

		> img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			user-select: none;
			border-radius: var(--border-radius);
		}
	}

	> h1 {
		font-size: 2em;
	}

	> .pills {
		font-size: 0.8em;
	}

	> .options {
		font-size: 1.2em;
		justify-self: end;

		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 1em;
		padding: 1em;

		& select {
			padding: 0.5em;
			margin-left: 1em;
		}
	}

	.buy {
		display: flex;
		justify-content: end;
		font-size: 1em;
		gap: 1rem;

		> .price {
			flex: 1;
			display: flex;
			justify-content: center;
		}

		> [view="coolbutton"] {
			flex: 2;
			&::part(button) {
				padding: 1em;
			}
		}
	}

	> aside {
		display: flex;
		flex-wrap: wrap;
		container-type: inline-size;
		padding: var(--frame-padding);
		background: var(--frame-background);
		justify-content: center;

		> img {
			display: block;
			width: 25cqi;
			height: 25cqi;
			aspect-ratio: 1 / 1;
			object-fit: cover;
			user-select: none;
			border-radius: var(--border-radius);
		}
	}

	&[data-no-additional-images] {
		> aside {
			display: none;
		}
		> section {
			grid-area: images / images / essay / essay;
		}
	}

	&[data-no-options] {
		> .options {
			display: none;
		}
		> .pills {
			grid-row: span 2;
		}
	}
}

[part="recbox"] {
	margin-top: 4em;

	> h2 {
		text-align: center;
		margin-bottom: 1em;
	}

	> [view="product-recommendation"] {
		justify-content: center;
	}
}

`;

    class ChoiceHelper {
        constructor(productHelper, choices) {
            this.productHelper = productHelper;
            this.choices = choices;
        }
        get_choice(name) {
            var _a;
            const { productHelper, choices } = this;
            const initial_choices = productHelper.first_variant.selectedOptions;
            const found = (_a = choices.find(choice => choice.name === name)) !== null && _a !== void 0 ? _a : initial_choices.find(choice => choice.name === name);
            if (!found)
                throw new Error(`choice not found (${name})`);
            return found.value;
        }
        get selected_variant() {
            var _a;
            const { productHelper } = this;
            return (_a = (productHelper.variants
                .find(variant => variant.selectedOptions
                .every(({ name, value }) => value === this.get_choice(name))))) !== null && _a !== void 0 ? _a : productHelper.first_variant;
        }
        get chosen_image() {
            const { productHelper } = this;
            const variant = this.selected_variant;
            let image;
            if (variant.image)
                image = productHelper.images
                    .find(i => i.id === variant.image.id);
            if (!image)
                image = productHelper.featured_image;
            return image;
        }
        get side_images() {
            const primary_image = this.chosen_image;
            return this.productHelper.images
                .filter(image => image.id !== (primary_image === null || primary_image === void 0 ? void 0 : primary_image.id));
        }
    }

    function render_options(choiceHelper, set_choice) {
        const { productHelper: { product } } = choiceHelper;
        function is_selected(name, value) {
            return value === choiceHelper.get_choice(name);
        }
        function handle_input(name) {
            return (event) => {
                const target = event.target;
                set_choice(name, target.value);
            };
        }
        return product.options.map(({ name, values }) => html `
		<label>
			<span>${name}</span>
			<select @input=${handle_input(name)}>
				${values.map(value => html `
					<option ?selected=${is_selected(name, value)}>
						${value}
					</option>
				`)}
			</select>
		</label>
	`);
    }

    const styles$2 = css `

:host {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
}

[view="product-card"] {
	flex: 30%;
	min-width: 18em;
	max-width: 30em;
}

`;

    const ProductRecommendation = slate.shadow_view({
        styles: styles$2,
        name: "product-recommendation",
    }, use => (id, count) => {
        const state = use.flatstate({ recommendations: [] });
        use.setup(() => {
            void async function () {
                const products = await use.context
                    .shopify
                    .product_recommendations({ product_id: id });
                state.recommendations = products;
            }();
            return () => { };
        });
        return html `
		${state.recommendations.slice(0, count).map(r => ProductCard([r], { attrs: { part: "card", gpart: "card" } }))}
	`;
    });

    const ProductFocus = slate.shadow_view({
        styles: styles$3,
        name: "product-focus",
    }, use => (product) => {
        const { cart, modal } = use.context;
        const state = use.flatstate({
            choices: [],
        });
        const productHelper = new ProductHelper(product);
        const choiceHelper = new ChoiceHelper(productHelper, state.choices);
        function set_choice(name, value) {
            state.choices = state.choices
                .filter(choice => choice.name !== name);
            if (value !== undefined)
                state.choices.push({ name, value });
        }
        return html `
		<div
			part=grid
			?data-no-additional-images=${productHelper.images.length < 2}
			?data-no-options=${productHelper.variants.length < 2}>

			<figure part=figure>
				${render_img({
        part: "img",
        img: img.large(choiceHelper.chosen_image),
        onclick: (_, img) => (modal.open({
            kind: "image",
            img,
        })),
    })}
			</figure>

			<h1 part=title>${product.title}</h1>

			${Pills([product], { attrs: { class: "pills", part: "pills", gpart: "pills" } })}

			<div part=options class=options>
				${render_options(choiceHelper, set_choice)}
			</div>

			<div part=buy class=buy>
				${Price([choiceHelper.selected_variant], { attrs: { class: "price" } })}
				${add_button({
        Coolbutton,
        cart,
        product,
        variant_id: choiceHelper.selected_variant.id,
        allow_select: false,
    })}
			</div>

			<aside part=aside class=aside>
				${choiceHelper.side_images.map(image => render_img({
        part: "img",
        img: img.large(image),
        onclick: (_, img) => (modal.open({
            kind: "image",
            img,
        })),
    }))}
			</aside>

			<section part=standard-content class="standard-content">
				${o(product.descriptionHtml)}
			</section>

		</div>
		<div part=recbox class=recommendations>
			<h2>Customers also bought:</h2>
			${ProductRecommendation([product.id, 3], {
        attrs: {
            part: "recommendations",
        },
    })}
		</div>
	`;
    });

    function bg_img(collection) {
        return collection.image
            ? `background-image: url("${collection.image.url_small}");`
            : "";
    }

    const styles$1 = css `

:host {
	display: block;
	container: collection-list / inline-size;
}

[part="grid"] {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(24em, 1fr));
	gap: 1em;
	--plate-color: var(--collection-list-plate-color, #8884);
}

[part="grid"] > a {
	padding: 1em 2em;
	background-color: var(--plate-color);
	background-size: cover, cover;
	background-position: center center, center center;
	color: white;
	font-weight: bold;
	border-radius: 0.5em;
	box-shadow: 0.1em 0.2em 0.5em #0004;

	font-size: 1.5em;
	color: white;
	text-decoration: none;
	text-shadow:
		0.05em 0.10em 0.5em black,
		0.05em 0.10em 0.5em black,
		0.05em 0.10em 0 black;

	&:hover { text-decoration: underline; }
	&:active { text-decoration: double underline; }
}

@container collection-list (width < 30em) {
	[part="grid"] {
		display: flex;
		flex-direction: column;
	}
}

@container collection-list (width < 16em) {
	[part="grid"] > a {
		font-size: 1.2em;
		padding: 0.5em 1em;
	}
}

`;

    function sort_collections(collections, prioritized_ids, hidden_ids) {
        let prioritized = [];
        let unprioritized = [];
        for (const collection of collections) {
            if (prioritized_ids.includes(collection.id))
                prioritized.push(collection);
            else
                unprioritized.push(collection);
        }
        const prioritized_in_order = prioritized_ids
            .map(id => prioritized.find(c => c.id === id))
            .filter(c => !!c);
        const unprioritized_in_order = unprioritized
            .sort(alphabetize);
        return [
            ...prioritized_in_order,
            ...unprioritized_in_order,
        ].filter(c => !hidden_ids.includes(c.id));
    }
    function alphabetize(a, b) {
        return a.title.localeCompare(b.title);
    }

    const CollectionList = slate.shadow_view({
        name: "collection-list",
        styles: styles$1,
    }, use => ({ collections, prioritized, hidden }) => html `

	<div part=grid>
		${sort_collections(collections, prioritized, hidden)
    .map(collection => html `
				<a
					part=bar
					data-id="${collection.id}"
					style="${bg_img(collection)}"
					href="${use.context.router.routes.collection(collection).url}">
					${collection.title}
				</a>
			`)}
	</div>
`);

    function process_comma_list(raw) {
        return raw
            ? raw.split(/\s+/).map(id => id.trim())
            : [];
    }

    const SheepCatalog = slate.shadow_component({ styles: style }, use => {
        const { state, router } = use.context;
        const attrs = use.attrs({
            "prioritized-collections": String,
            "hidden-collections": String,
        });
        function get_option_attributes() {
            return {
                hidden: process_comma_list(attrs["hidden-collections"]),
                prioritized: process_comma_list(attrs["prioritized-collections"]),
            };
        }
        function render_collections_tabs(prioritized, hidden) {
            const active_collection_id = state.route.zone === "collection"
                ? state.route.id
                : undefined;
            if (!active_collection_id)
                return undefined;
            const collections = sort_collections(state.collections, prioritized, hidden);
            return html `
			<div part=collection-tab-list>
				${collections.map(collection => html `
					<a
						part=collection-tab
						href="${router.routes.collection(collection).url}"
						?data-active-collection=${collection.id === active_collection_id}>
						<span class=bgimg style="${bg_img(collection)}"></span>
						<span class=text>${collection.title}</span>
					</a>
				`)}
			</div>
		`;
        }
        const { hidden, prioritized } = get_option_attributes();
        return html `
		<div>
			${render_collections_tabs(prioritized, hidden)}
			${render_op(state.situation_op, situation => {
        switch (situation === null || situation === void 0 ? void 0 : situation.type) {
            case "collection_list":
                return CollectionList([{
                        hidden,
                        prioritized,
                        collections: situation.collections,
                    }], { attrs: { part: "collection-list" } });
            case "products_in_collection": {
                return ProductList([{ situation }], { attrs: { part: "product-list" } });
            }
            case "all_products":
                return ProductList([{ situation }], { attrs: { part: "product-list" } });
            case "search_results":
                return ProductList([{ situation }], { attrs: { part: "product-list" } });
            case "single_product":
                return ProductFocus([situation.product], { attrs: { part: "product-focus" } });
            case "not_found":
                return html `
							${situation.message
                    ? html `<h1>${situation.message}</h1>`
                    : html `<h1>Not found</h1>`}
							<p>
								<a part=a href="${router.routes.home().url}">
									back
								</a>
							</p>
						`;
            default:
                return undefined;
        }
    })}
		</div>
	`;
    });

    var icon_shopping_cart = icon `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;

    const styles = css `

button {
	position: relative;
	padding: 1em;
	background: #eeee;
	color: #222;
	border: none;
	border-radius: 1em;
	box-shadow: 0.1em 0.1em 0.3em #0008;
	cursor: pointer;
}

.count {
	position: absolute;
	top: -0.5em;
	right: -0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5em;
	height: 1.5em;
	border-radius: 1em;
	background: red;
	font-family: sans-serif;
	font-weight: bold;
	color: white;
	text-shadow: 0.1em 0.1em 0.1em #0008;
	&[hidden] { display: none; }
}

`;

    const SheepCartButton = slate.shadow_component({ styles }, use => {
        const attrs = use.attrs({ "triggers-modal": Boolean });
        const { units } = use.context.cart;
        const onclick = attrs["triggers-modal"]
            ? () => use.context.modal.open({ kind: "cart" })
            : () => { };
        return html `
		<button
			part=button
			@click=${onclick}>

			${icon_shopping_cart(b$1)}

			<div class=count ?hidden=${units.length === 0}>
				${units.length}
			</div>
		</button>
	`;
    });

    const elements = {
        SheepNav,
        SheepCart,
        SheepModal,
        SheepSearch,
        SheepCatalog,
        SheepCartButton,
    };

    async function load_single_product(set_situation_op, product) {
        await Op.run(set_situation_op, async () => {
            try {
                return {
                    type: "single_product",
                    product: await product,
                };
            }
            catch (error) {
                if (error instanceof ShopifyNotFoundError)
                    return {
                        type: "not_found",
                        message: "Product not found",
                    };
                else
                    throw error;
            }
        });
    }

    async function load_products_with_recursive_apparatus({ subject, wrap, set_situation_op, generator, previous_products = [], }) {
        const this_is_the_initial_listing_call = previous_products.length === 0;
        async function load_next_page_of_products() {
            try {
                const { value } = await generator.next();
                const [new_products, more] = value;
                const products = [...previous_products, ...new_products];
                const load_more = more
                    ? () => load_products_with_recursive_apparatus({
                        subject,
                        wrap,
                        set_situation_op,
                        generator,
                        previous_products: products,
                    })
                    : undefined;
                return wrap({
                    products,
                    load_more,
                    load_more_op: Op.ready(undefined),
                });
            }
            catch (error) {
                if (error instanceof ShopifyNotFoundError)
                    return {
                        type: "not_found",
                        message: `${subject} not found`,
                    };
                else
                    throw error;
            }
        }
        if (this_is_the_initial_listing_call) {
            await Op.run(set_situation_op, async () => await load_next_page_of_products());
        }
        else {
            set_situation_op(Op.ready(wrap({
                products: previous_products,
                load_more: undefined,
                load_more_op: Op.loading(),
            })));
            set_situation_op(Op.ready(await load_next_page_of_products()));
        }
    }

    const prepare_pilot = (params) => (route) => {
        const { home, shopify, page_size, collections_promise, set_situation_op, } = params;
        function go_collections() {
            return Op.run(op => set_situation_op(Op.morph(op, collections => ({
                type: "collection_list",
                collections,
            }))), async () => collections_promise);
        }
        function go_products() {
            return load_products_with_recursive_apparatus({
                subject: "Products",
                wrap: list => ({ ...list, type: "all_products" }),
                set_situation_op,
                generator: shopify.products({ page_size }),
            });
        }
        try {
            switch (route.zone) {
                case "home":
                    return home === "products"
                        ? go_products()
                        : go_collections();
                case "products":
                    return go_products();
                case "collections":
                    return go_collections();
                case "search":
                    return load_products_with_recursive_apparatus({
                        subject: "Products",
                        wrap: list => ({ ...list, type: "search_results" }),
                        set_situation_op,
                        generator: shopify.products({
                            page_size,
                            query: {
                                tags: route.tags,
                                terms: route.terms,
                            },
                        })
                    });
                case "collection":
                    return load_products_with_recursive_apparatus({
                        subject: "Collection",
                        wrap: list => ({
                            ...list,
                            type: "products_in_collection",
                            collection_id: route.id,
                        }),
                        set_situation_op,
                        generator: shopify.products_in_collection({
                            page_size,
                            collection_id: route.id,
                        })
                    });
                case "product":
                    return load_single_product(set_situation_op, shopify.product({ id: route.id }));
                case "not_found":
                    return set_situation_op(Op.ready({ type: "not_found" }));
            }
        }
        catch (error) {
            console.error("pilot error", error);
        }
    };

    var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _CartStore_key, _CartStore_storage;
    class CartStore {
        constructor(key, storage) {
            _CartStore_key.set(this, void 0);
            _CartStore_storage.set(this, void 0);
            __classPrivateFieldSet(this, _CartStore_key, key, "f");
            __classPrivateFieldSet(this, _CartStore_storage, storage, "f");
        }
        save(pack) {
            const v1 = {
                version: 1,
                pack,
            };
            __classPrivateFieldGet(this, _CartStore_storage, "f").setItem(__classPrivateFieldGet(this, _CartStore_key, "f"), JSON.stringify(v1));
        }
        load() {
            let pack = { items: [] };
            const text = __classPrivateFieldGet(this, _CartStore_storage, "f").getItem(__classPrivateFieldGet(this, _CartStore_key, "f"));
            if (text) {
                try {
                    const data = JSON.parse(text);
                    if (data.version === 1)
                        pack = data.pack;
                }
                catch (err) { }
            }
            return pack;
        }
    }
    _CartStore_key = new WeakMap(), _CartStore_storage = new WeakMap();

    function install_sheep_cart({ domain, storefront_access_token, page_size = 50, home = "products", theme: theme$1 = theme, }) {
        const shopify = Shopify.setup({
            domain,
            storefront_access_token,
        });
        const router = Router.setup(home);
        const context = new Context(shopify, router, theme$1, new CartStore("sheep_cart", localStorage));
        slate.context = context;
        context.cart.load();
        window.addEventListener("storage", () => {
            context.cart.load();
        });
        const collections_promise = Shopify.all(shopify.collections());
        const pilot = prepare_pilot({
            home,
            shopify,
            page_size,
            collections_promise,
            set_situation_op: context.set_situation_op,
        });
        router.on_route_change(context.set_route);
        router.on_route_change(() => pilot(context.state.route));
        return {
            elements,
            async load() {
                await Promise.all([
                    void async function load_the_initial_route() {
                        await pilot(context.state.route);
                    }(),
                    void async function load_product_tags() {
                        context.set_tags(await Shopify.all(shopify.tags()));
                    }(),
                    void async function load_product_collections() {
                        context.set_collections(await collections_promise);
                    }(),
                ]);
            },
        };
    }

    registerComponents$2(themeComponents$1(theme$1, {
        NceEmail,
        NcePhone,
        NceHeader,
        NceFooter,
    }));
    void async function main() {
        const { elements, load } = install_sheep_cart({
            home: "collections",
            domain: "nail-career-education.myshopify.com",
            storefront_access_token: "493f6df6e7fb5bfc231bb9f221fecdee",
        });
        register_to_dom(elements);
        await load();
        console.log("💅");
    }();

})();
//# sourceMappingURL=main.bundle.js.map