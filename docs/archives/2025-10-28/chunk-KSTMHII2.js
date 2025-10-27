import{B as le,C as mt,D as ze,F as Ge,L as de,M as $e,N as We,O as ue,Q as qe,S as Qe,T as Ze,U as Ye,V as Ke,X as Xe,Y as Je,Z as Ht,_ as N,a as ae,ba as ce,ca as ct,da as bt,ea as V,fa as tn,l as Bt,m as je,n as Lt,p as Q,t as jt,u as He,x as Ue}from"./chunk-2IDRKIVU.js";import{$a as U,Ab as K,B as Ae,Cb as Ne,Db as gt,Eb as D,Fb as X,Ga as u,Gb as $,Hb as I,Jb as F,Ka as St,Kb as A,La as b,M as ke,Mb as Re,Nb as Nt,Ob as Be,P as Te,Pb as y,Qb as dt,R as it,Rb as ut,T as ft,Ta as P,U as C,Ua as O,V as T,Va as w,X as ot,Xa as g,Xb as v,Z as d,Za as E,Zb as re,a as f,ab as Oe,b as B,d as Y,db as Pe,e as nt,ea as kt,fc as W,g as ee,gc as J,ha as Tt,hc as se,ia as Ot,ib as L,ic as q,ja as Dt,k as Ve,kc as Rt,ma as H,n as Me,o as Ie,oc as S,pc as Le,q as Fe,qa as rt,ra as p,rb as c,sa as st,sb as z,tb as G,ub as xt,v as wt,vb as ne,wa as Pt,wb as ie,xb as oe,yb as at,zb as lt}from"./chunk-VEKRYUGM.js";function ir(e){e||(e=d(Dt));let i=new Ve(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(Te(i))}function or(e,i){let n=!i?.manualCleanup?i?.injector?.get(Dt)??d(Dt):null,o=si(i?.equal),r;i?.requireSync?r=H({kind:0},{equal:o}):r=H({kind:1,value:i?.initialValue},{equal:o});let s,a=e.subscribe({next:l=>r.set({kind:1,value:l}),error:l=>{r.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(i?.requireSync&&r().kind===0)throw new it(601,!1);return s=n?.onDestroy(a.unsubscribe.bind(a)),J(()=>{let l=r();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new it(601,!1)}},{equal:i?.equal})}function si(e=Object.is){return(i,t)=>i.kind===1&&t.kind===1&&e(i.value,t.value)}var yt=class{static crypt(i){let t="",{length:n}=en;for(let o=0;o<i.length;o++)t+=String.fromCharCode(i.charCodeAt(o)^en.charCodeAt(o%n));return t}},en="s3cr3+_UT42";var ur=(()=>{var i,t;let n=class n{constructor(){nt(this,i,new Ie(!1));nt(this,t,new Map(pe.map(({passphrase:r,username:s})=>[s,r])))}get accessControl(){return Y(this,i).asObservable()}applyUser(r){Y(this,i).next(ai.has(yt.crypt(r)))}checkCredentials(r,s){let a=yt.crypt(r);return Y(this,t).has(a)?Y(this,t).get(a)===yt.crypt(s):!1}};i=new WeakMap,t=new WeakMap,n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})(),pe=[{passphrase:`D
QC`,username:"W"},{passphrase:"@WC",username:"=ZGm30!F"},{passphrase:"G\0PD",username:"FG"},{passphrase:"JUF",username:"SA"},{passphrase:"FVA",username:"UK"},{passphrase:"EW@",username:"\x07ZG"},{passphrase:"J\vTF",username:`
WJ`},{passphrase:`E
ZG
`,username:"\vWB"},{passphrase:"BTF",username:"VC"},{passphrase:"@\0TK\0",username:"UE"},{passphrase:"@WG",username:"VB"},{passphrase:"B\0VK",username:"RE"},{passphrase:`E\0ZE
`,username:"\vZA"}],ai=new Set([pe[0].username,pe[1].username]);var pn=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(b(St),b(st))};static \u0275dir=w({type:e})}return e})(),hn=(()=>{class e extends pn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275dir=w({type:e,features:[g]})}return e})(),Yt=new ot(""),li={provide:Yt,useExisting:ft(()=>di),multi:!0},di=(()=>{class e extends hn{writeValue(t){this.setProperty("checked",t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275dir=w({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,o){n&1&&gt("change",function(s){return o.onChange(s.target.checked)})("blur",function(){return o.onTouched()})},standalone:!1,features:[v([li]),g]})}return e})(),ui={provide:Yt,useExisting:ft(()=>fn),multi:!0};function ci(){let e=ae()?ae().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var pi=new ot(""),fn=(()=>{class e extends pn{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!ci())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(b(St),b(st),b(pi,8))};static \u0275dir=w({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&gt("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[v([ui]),g]})}return e})();function be(e){return e==null||ye(e)===0}function ye(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var ve=new ot(""),_e=new ot(""),hi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,nn=class{static min(i){return fi(i)}static max(i){return gi(i)}static required(i){return mi(i)}static requiredTrue(i){return bi(i)}static email(i){return yi(i)}static minLength(i){return vi(i)}static maxLength(i){return _i(i)}static pattern(i){return Ci(i)}static nullValidator(i){return gn()}static compose(i){return Cn(i)}static composeAsync(i){return Dn(i)}};function fi(e){return i=>{if(i.value==null||e==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<e?{min:{min:e,actual:i.value}}:null}}function gi(e){return i=>{if(i.value==null||e==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>e?{max:{max:e,actual:i.value}}:null}}function mi(e){return be(e.value)?{required:!0}:null}function bi(e){return e.value===!0?null:{required:!0}}function yi(e){return be(e.value)||hi.test(e.value)?null:{email:!0}}function vi(e){return i=>{let t=i.value?.length??ye(i.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function _i(e){return i=>{let t=i.value?.length??ye(i.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Ci(e){if(!e)return gn;let i,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=e.toString(),i=e),n=>{if(be(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function gn(e){return null}function mn(e){return e!=null}function bn(e){return Pe(e)?Fe(e):e}function yn(e){let i={};return e.forEach(t=>{i=t!=null?f(f({},i),t):i}),Object.keys(i).length===0?null:i}function vn(e,i){return i.map(t=>t(e))}function wi(e){return!e.validate}function _n(e){return e.map(i=>wi(i)?i:t=>i.validate(t))}function Cn(e){if(!e)return null;let i=e.filter(mn);return i.length==0?null:function(t){return yn(vn(t,i))}}function wn(e){return e!=null?Cn(_n(e)):null}function Dn(e){if(!e)return null;let i=e.filter(mn);return i.length==0?null:function(t){let n=vn(t,i).map(bn);return Ae(n).pipe(wt(yn))}}function Sn(e){return e!=null?Dn(_n(e)):null}function on(e,i){return e===null?[i]:Array.isArray(e)?[...e,i]:[e,i]}function xn(e){return e._rawValidators}function En(e){return e._rawAsyncValidators}function he(e){return e?Array.isArray(e)?e:[e]:[]}function zt(e,i){return Array.isArray(e)?e.includes(i):e===i}function rn(e,i){let t=he(i);return he(e).forEach(o=>{zt(t,o)||t.push(o)}),t}function sn(e,i){return he(i).filter(t=>!zt(e,t))}var Gt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=wn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Sn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},pt=class extends Gt{name;get formDirective(){return null}get path(){return null}},ht=class extends Gt{_parent=null;name=null;valueAccessor=null},$t=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Di={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ar=B(f({},Di),{"[class.ng-submitted]":"isSubmitted"}),kr=(()=>{class e extends $t{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(b(ht,2))};static \u0275dir=w({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Nt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[g]})}return e})(),Tr=(()=>{class e extends $t{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(b(pt,10))};static \u0275dir=w({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&Nt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[g]})}return e})();var Et="VALID",Ut="INVALID",vt="PENDING",Vt="DISABLED",tt=class{},Wt=class extends tt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},Mt=class extends tt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},It=class extends tt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},_t=class extends tt{status;source;constructor(i,t){super(),this.status=i,this.source=t}},fe=class extends tt{source;constructor(i){super(),this.source=i}},ge=class extends tt{source;constructor(i){super(),this.source=i}};function Vn(e){return(Kt(e)?e.validators:e)||null}function Si(e){return Array.isArray(e)?wn(e):e||null}function Mn(e,i){return(Kt(i)?i.asyncValidators:e)||null}function xi(e){return Array.isArray(e)?Sn(e):e||null}function Kt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Ei(e,i,t){let n=e.controls;if(!(i?Object.keys(n):n).length)throw new it(1e3,"");if(!n[t])throw new it(1001,"")}function Vi(e,i,t){e._forEachChild((n,o)=>{if(t[o]===void 0)throw new it(1002,"")})}var qt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return W(this.statusReactive)}set status(i){W(()=>this.statusReactive.set(i))}_status=J(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===Et}get invalid(){return this.status===Ut}get pending(){return this.status==vt}get disabled(){return this.status===Vt}get enabled(){return this.status!==Vt}errors;get pristine(){return W(this.pristineReactive)}set pristine(i){W(()=>this.pristineReactive.set(i))}_pristine=J(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return W(this.touchedReactive)}set touched(i){W(()=>this.touchedReactive.set(i))}_touched=J(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new Me;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(rn(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(rn(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(sn(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(sn(i,this._rawAsyncValidators))}hasValidator(i){return zt(this._rawValidators,i)}hasAsyncValidator(i){return zt(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(B(f({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new It(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),t&&i.emitEvent!==!1&&this._events.next(new It(!1,n))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(B(f({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new Mt(!1,n))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),t&&i.emitEvent!==!1&&this._events.next(new Mt(!0,n))}markAsPending(i={}){this.status=vt;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new _t(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(B(f({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Vt,this.errors=null,this._forEachChild(o=>{o.disable(B(f({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wt(this.value,n)),this._events.next(new _t(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(B(f({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Et,this._forEachChild(n=>{n.enable(B(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(B(f({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,t){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Et||this.status===vt)&&this._runAsyncValidator(n,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wt(this.value,t)),this._events.next(new _t(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(B(f({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vt:Et}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=vt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let n=bn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(i,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new _t(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,n)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?Vt:this.errors?Ut:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vt)?vt:this._anyControlsHaveStatus(Ut)?Ut:Et}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,t),o&&this._events.next(new Mt(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new It(this.touched,t)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Kt(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let t=this._parent&&this._parent.dirty;return!i&&!!t&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Si(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=xi(this._rawAsyncValidators)}},an=class extends qt{constructor(i,t,n){super(Vn(t),Mn(n,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,n={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){Vi(this,!0,i),Object.keys(i).forEach(n=>{Ei(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(i,t,n)=>(i[n]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&i(n,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,n,o)=>((n.enabled||this.disabled)&&(t[o]=n.value),t))}_reduceChildren(i,t){let n=i;return this._forEachChild((o,r)=>{n=t(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Xt=new ot("",{providedIn:"root",factory:()=>Jt}),Jt="always";function In(e,i){return[...i.path,e]}function me(e,i,t=Jt){Ce(e,i),i.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(e.disabled),Ii(e,i),Ai(e,i),Fi(e,i),Mi(e,i)}function ln(e,i,t=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),Zt(e,i),e&&(i._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Qt(e,i){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Mi(e,i){if(i.valueAccessor.setDisabledState){let t=n=>{i.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),i._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Ce(e,i){let t=xn(e);i.validator!==null?e.setValidators(on(t,i.validator)):typeof t=="function"&&e.setValidators([t]);let n=En(e);i.asyncValidator!==null?e.setAsyncValidators(on(n,i.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let o=()=>e.updateValueAndValidity();Qt(i._rawValidators,o),Qt(i._rawAsyncValidators,o)}function Zt(e,i){let t=!1;if(e!==null){if(i.validator!==null){let o=xn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(i.asyncValidator!==null){let o=En(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let n=()=>{};return Qt(i._rawValidators,n),Qt(i._rawAsyncValidators,n),t}function Ii(e,i){i.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Fn(e,i)})}function Fi(e,i){i.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Fn(e,i),e.updateOn!=="submit"&&e.markAsTouched()})}function Fn(e,i){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Ai(e,i){let t=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};e.registerOnChange(t),i._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function ki(e,i){e==null,Ce(e,i)}function Ti(e,i){return Zt(e,i)}function An(e,i){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function Oi(e){return Object.getPrototypeOf(e.constructor)===hn}function Pi(e,i){e._syncPendingControls(),i.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function kn(e,i){if(!i)return null;Array.isArray(i);let t,n,o;return i.forEach(r=>{r.constructor===fn?t=r:Oi(r)?n=r:o=r}),o||n||t||null}function Ni(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function dn(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function un(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Tn=class extends qt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,n){super(Vn(t),Mn(n,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Kt(t)&&(t.nonNullable||t.initialValueIsDefault)&&(un(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){dn(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){dn(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){un(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Ri=e=>e instanceof Tn;var Bi={provide:ht,useExisting:ft(()=>Li)},cn=Promise.resolve(),Li=(()=>{class e extends ht{_changeDetectorRef;callSetDisabledState;control=new Tn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new U;constructor(t,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=kn(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),An(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){me(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){cn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&S(n);cn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?In(t,this._parent):[t]}static \u0275fac=function(n){return new(n||e)(b(pt,9),b(ve,10),b(_e,10),b(Yt,10),b(Rt,8),b(Xt,8))};static \u0275dir=w({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[v([Bi]),g,rt]})}return e})();var Pr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=w({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var On=new ot("");var ji={provide:pt,useExisting:ft(()=>Hi)},Hi=(()=>{class e extends pt{callSetDisabledState;get submitted(){return W(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=J(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new U;constructor(t,n,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Zt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return me(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){ln(t.control||null,t,!1),Ni(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Pi(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new fe(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(!1),n?.emitEvent!==!1&&this.form._events.next(new ge(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,o=this.form.get(t.path);n!==o&&(ln(n||null,t),Ri(o)&&(me(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ki(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Ti(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ce(this.form,this),this._oldForm&&Zt(this._oldForm,this)}static \u0275fac=function(n){return new(n||e)(b(ve,10),b(_e,10),b(Xt,8))};static \u0275dir=w({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&gt("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[v([ji]),g,rt]})}return e})();var Ui={provide:ht,useExisting:ft(()=>zi)},zi=(()=>{class e extends ht{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new U;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=kn(this,r)}ngOnChanges(t){this._added||this._setUpControl(),An(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return In(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||e)(b(pt,13),b(ve,10),b(_e,10),b(Yt,10),b(On,8))};static \u0275dir=w({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[v([Ui]),g,rt]})}return e})();var Pn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({})}return e})();var Nr=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Xt,useValue:t.callSetDisabledState??Jt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[Pn]})}return e})(),Rr=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:On,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Xt,useValue:t.callSetDisabledState??Jt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[Pn]})}return e})();function Ct(...e){if(e){let i=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Ct(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}var te={};function Ft(e="pui_id_"){return Object.hasOwn(te,e)||(te[e]=0),te[e]++,`${e}${te[e]}`}var Nn=(()=>{class e extends V{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),k=(()=>{class e{document=d(Ot);platformId=d(Pt);el=d(st);injector=d(Tt);cd=d(Rt);renderer=d(St);config=d(tn);baseComponentStyle=d(Nn);baseStyle=d(V);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ft("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return Ke(t,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!He(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>ce.off("theme:change",t))}_loadStyles(){let t=()=>{bt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),bt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!bt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),bt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!ct.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},this.styleOptions),r),ct.setLoadedStyleName("common")}if(!ct.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),ct.setLoadedStyleName(this.componentStyle?.name)}if(!ct.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,f({name:"layer-order",first:!0},this.styleOptions)),ct.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){bt.clearLoadedStyleNames(),ce.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return Ct(this._getOptionValue(this.$style?.classes,t,f({instance:this},n)))}sx(t="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,f({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Ct;static \u0275fac=function(n){return new(n||e)};static \u0275dir=w({type:e,inputs:{dt:"dt"},features:[v([Nn,V]),rt]})}return e})();var we=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=et=>{if(et)return getComputedStyle(et).getPropertyValue("position")==="relative"?et:r(et.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),m=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),_=this.getViewport(),x=r(t)?.getBoundingClientRect()||{top:-1*m,left:-1*h},R,Z,At="top";l.top+a+s.height>_.height?(R=l.top-x.top-s.height,At="bottom",l.top+R<0&&(R=-1*l.top)):(R=a+l.top-x.top,At="top");let Ee=l.left+s.width-_.width,ri=l.left-x.left;if(s.width>_.width?Z=(l.left-x.left)*-1:Ee>0?Z=ri-Ee:Z=l.left-x.left,t.style.top=R+"px",t.style.left=Z+"px",t.style.transformOrigin=At,o){let et=ze(/-anchor-gutter$/)?.value;t.style.marginTop=At==="bottom"?`calc(${et??"2px"} * -1)`:et??""}}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,m=n.offsetWidth,h=n.getBoundingClientRect(),_=this.getWindowScrollTop(),M=this.getWindowScrollLeft(),x=this.getViewport(),R,Z;h.top+l+s>x.height?(R=h.top+_-s,t.style.transformOrigin="bottom",R<0&&(R=_)):(R=l+h.top+_,t.style.transformOrigin="top"),h.left+a>x.width?Z=Math.max(0,h.left+M+m-a):Z=h.left+M,t.style.top=R+"px",t.style.left=Z+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let m=l.split(",");for(let h of m){let _=this.findSingle(a,h);_&&s(_)&&n.push(_)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,_=t.scrollTop,M=t.clientHeight,x=this.getOuterHeight(n);h<0?t.scrollTop=_+h:h+x>M&&(t.scrollTop=_+h-M+x)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,m)=>{if(m!=null){let h=typeof m;if(h==="string"||h==="number")l.push(m);else if(h==="object"){let _=Array.isArray(m)?o(r,m):Object.entries(m).map(([M,x])=>r==="style"&&(x||x===0)?`${M.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${x}`:x?M:void 0);l=_.length?l.concat(_.filter(M=>!!M)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var Rn=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=we.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Bn=(()=>{class e extends k{autofocus=!1;focused=!1;platformId=d(Pt);document=d(Ot);host=d(st);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){jt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=we.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275dir=w({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[g]})}return e})();var Ln=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Gi=`
    ${Ln}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,$i={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":Ze(e.value())&&String(e.value()).length===1,"p-badge-dot":Qe(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},jn=(()=>{class e extends V{name="badge";theme=Gi;classes=$i;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var De=(()=>{class e extends k{styleClass=q();badgeSize=q();size=q();severity=q();value=q();badgeDisabled=q(!1,{transform:S});_componentStyle=d(jn);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(y(o.cn(o.cx("root"),o.styleClass())),Re("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[v([jn]),g],decls:1,vars:1,template:function(n,o){n&1&&dt(0),n&2&&ut(o.value())},dependencies:[Q,N],encapsulation:2,changeDetection:0})}return e})(),Hn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[De,N,N]})}return e})();var Un=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var qi=["*"],Qi={root:"p-fluid"},zn=(()=>{class e extends V{name="fluid";classes=Qi;theme=Un;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Gn=(()=>{class e extends k{_componentStyle=d(zn);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&y(o.cx("root"))},features:[v([zn]),g],ngContentSelectors:qi,decls:1,vars:0,template:function(n,o){n&1&&(X(),$(0))},dependencies:[Q],encapsulation:2,changeDetection:0})}return e})();var Zi=["*"],Yi=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,$n=(()=>{class e extends V{name="baseicon";css=Yi;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Wn=(()=>{class e extends k{spin=!1;_componentStyle=d($n);getClassNames(){return Ct("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&y(o.getClassNames())},inputs:{spin:[2,"spin","spin",S]},features:[v([$n]),g],ngContentSelectors:Zi,decls:1,vars:0,template:function(n,o){n&1&&(X(),$(0))},encapsulation:2,changeDetection:0})}return e})();var Ki=["data-p-icon","spinner"],qn=(()=>{class e extends Wn{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ft()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["","data-p-icon","spinner"]],features:[g],attrs:Ki,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(kt(),ne(0,"g"),oe(1,"path",0),ie(),ne(2,"defs")(3,"clipPath",1),oe(4,"rect",2),ie()()),n&2&&(L("clip-path",o.pathId),u(3),Ne("id",o.pathId))},encapsulation:2})}return e})();var Qn=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Xi=`
    ${Qn}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ji={root:"p-ink"},Zn=(()=>{class e extends V{name="ripple";theme=Xi;classes=Ji;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Yn=(()=>{class e extends k{zone=d(Oe);_componentStyle=d(Zn);animationListener;mouseDownListener;timeout;constructor(){super(),se(()=>{jt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(mt(n,"p-ink-active"),!de(n)&&!ue(n)){let a=Math.max(Ge(this.el.nativeElement),We(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=$e(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-ue(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-de(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),le(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&mt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&mt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),mt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,qe(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=w({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[v([Zn]),g]})}return e})();var Kn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var eo=["content"],no=["loadingicon"],io=["icon"],oo=["*"],Jn=e=>({class:e});function ro(e,i){e&1&&K(0)}function so(e,i){if(e&1&&xt(0,"span"),e&2){let t=D(3);y(t.cx("loadingIcon")),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function ao(e,i){if(e&1&&(kt(),xt(0,"svg",7)),e&2){let t=D(3);y(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),c("spin",!0),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function lo(e,i){if(e&1&&(at(0),E(1,so,1,4,"span",3)(2,ao,1,5,"svg",6),lt()),e&2){let t=D(2);u(),c("ngIf",t.loadingIcon),u(),c("ngIf",!t.loadingIcon)}}function uo(e,i){}function co(e,i){if(e&1&&E(0,uo,0,0,"ng-template",8),e&2){let t=D(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function po(e,i){if(e&1&&(at(0),E(1,lo,3,2,"ng-container",2)(2,co,1,1,null,5),lt()),e&2){let t=D();u(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),u(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",re(3,Jn,t.cx("loadingIcon")))}}function ho(e,i){if(e&1&&xt(0,"span"),e&2){let t=D(2);y(t.cx("icon")),L("data-pc-section","icon")}}function fo(e,i){}function go(e,i){if(e&1&&E(0,fo,0,0,"ng-template",8),e&2){let t=D(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function mo(e,i){if(e&1&&(at(0),E(1,ho,1,3,"span",3)(2,go,1,1,null,5),lt()),e&2){let t=D();u(),c("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),u(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",re(3,Jn,t.cx("icon")))}}function bo(e,i){if(e&1&&(z(0,"span"),dt(1),G()),e&2){let t=D();y(t.cx("label")),L("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),u(),ut(t.label)}}function yo(e,i){if(e&1&&xt(0,"p-badge",9),e&2){let t=D();c("value",t.badge)("severity",t.badgeSeverity)}}var vo={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Xn=(()=>{class e extends V{name="button";theme=Kn;classes=vo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var _o=(()=>{class e extends k{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=q(void 0,{transform:S});onClick=new U;onFocus=new U;onBlur=new U;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(Gn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=d(Xn);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(I(r,eo,5),I(r,no,5),I(r,io,5),I(r,Ht,4)),n&2){let s;F(s=A())&&(o.contentTemplate=s.first),F(s=A())&&(o.loadingIconTemplate=s.first),F(s=A())&&(o.iconTemplate=s.first),F(s=A())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",S],loading:[2,"loading","loading",S],loadingIcon:"loadingIcon",raised:[2,"raised","raised",S],rounded:[2,"rounded","rounded",S],text:[2,"text","text",S],plain:[2,"plain","plain",S],severity:"severity",outlined:[2,"outlined","outlined",S],link:[2,"link","link",S],tabindex:[2,"tabindex","tabindex",Le],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",S],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[v([Xn]),g],ngContentSelectors:oo,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(X(),z(0,"button",0),gt("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),$(1),E(2,ro,1,0,"ng-container",1)(3,po,3,5,"ng-container",2)(4,mo,3,5,"ng-container",2)(5,bo,2,5,"span",3)(6,yo,1,2,"p-badge",4),G()),n&2&&(y(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),c("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),L("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),u(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),u(),c("ngIf",o.loading),u(),c("ngIf",!o.loading),u(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),u(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[Q,Bt,Lt,je,Yn,Bn,qn,Hn,De,N],encapsulation:2,changeDetection:0})}return e})(),ka=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[Q,_o,N,N]})}return e})();var ti=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Co=["header"],wo=["title"],Do=["subtitle"],So=["content"],xo=["footer"],Eo=["*",[["p-header"]],[["p-footer"]]],Vo=["*","p-header","p-footer"];function Mo(e,i){e&1&&K(0)}function Io(e,i){if(e&1&&(z(0,"div"),$(1,1),E(2,Mo,1,0,"ng-container",1),G()),e&2){let t=D();y(t.cx("header")),u(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Fo(e,i){if(e&1&&(at(0),dt(1),lt()),e&2){let t=D(2);u(),ut(t.header)}}function Ao(e,i){e&1&&K(0)}function ko(e,i){if(e&1&&(z(0,"div"),E(1,Fo,2,1,"ng-container",2)(2,Ao,1,0,"ng-container",1),G()),e&2){let t=D();y(t.cx("title")),u(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),u(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function To(e,i){if(e&1&&(at(0),dt(1),lt()),e&2){let t=D(2);u(),ut(t.subheader)}}function Oo(e,i){e&1&&K(0)}function Po(e,i){if(e&1&&(z(0,"div"),E(1,To,2,1,"ng-container",2)(2,Oo,1,0,"ng-container",1),G()),e&2){let t=D();y(t.cx("subtitle")),u(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),u(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function No(e,i){e&1&&K(0)}function Ro(e,i){e&1&&K(0)}function Bo(e,i){if(e&1&&(z(0,"div"),$(1,2),E(2,Ro,1,0,"ng-container",1),G()),e&2){let t=D();y(t.cx("footer")),u(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Lo=`
    ${ti}

    .p-card {
        display: block;
    }
`,jo={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ei=(()=>{class e extends V{name="card";theme=Lo;classes=jo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Ho=(()=>{class e extends k{header;subheader;set style(t){Ye(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=H(null);_componentStyle=d(ei);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-card"]],contentQueries:function(n,o,r){if(n&1&&(I(r,Xe,5),I(r,Je,5),I(r,Co,4),I(r,wo,4),I(r,Do,4),I(r,So,4),I(r,xo,4),I(r,Ht,4)),n&2){let s;F(s=A())&&(o.headerFacet=s.first),F(s=A())&&(o.footerFacet=s.first),F(s=A())&&(o.headerTemplate=s.first),F(s=A())&&(o.titleTemplate=s.first),F(s=A())&&(o.subtitleTemplate=s.first),F(s=A())&&(o.contentTemplate=s.first),F(s=A())&&(o.footerTemplate=s.first),F(s=A())&&(o.templates=s)}},hostVars:5,hostBindings:function(n,o){n&2&&(L("data-pc-name","card"),Be(o._style()),y(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[v([ei]),g],ngContentSelectors:Vo,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(X(Eo),E(0,Io,3,3,"div",0),z(1,"div"),E(2,ko,3,4,"div",0)(3,Po,3,4,"div",0),z(4,"div"),$(5),E(6,No,1,0,"ng-container",1),G(),E(7,Bo,3,3,"div",0),G()),n&2&&(c("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),u(),y(o.cx("body")),u(),c("ngIf",o.header||o.titleTemplate||o._titleTemplate),u(),c("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),u(),y(o.cx("content")),u(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),u(),c("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[Q,Bt,Lt,N],encapsulation:2,changeDetection:0})}return e})(),Ya=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[Ho,N,N]})}return e})();function Uo(){let e=[],i=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},n=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:t}}var bl=Uo(),yl=e=>!!e;function Se(e,i){if(e===void 0)throw $o(i)}var zo=`[UniT dev]
`,Go="Unspecified error.";function $o(e){return new Error(zo+(e||Go))}function xe(e){return ni+e}function wl(e){return ni+e}var ni="https://universytest.github.io/archives/2025-10-28/";var Fl=(()=>{var i,t,n,ii,oi;let s=class s{constructor(){nt(this,n);nt(this,i,new Map([["customerReviewsSectionRelativeURL","sections/customerReviews"],["frequentlyAskedQuestionsSectionRelativeURL","sections/frequentlyAskedQuestions"],["headerSectionRelativeURL","sections/headerSection"],["heroSectionRelativeURL","sections/heroSection"],["howAndWhatWeMakeSectionRelativeURL","sections/howAndWhatWeMake"],["improvementsAndGuaranteesSectionRelativeURL","sections/improvementsAndGuarantees"],["inHouseExpertsSectionRelativeURL","sections/inHouseExperts"],["navigationSettingsRelativeURL","settings/navigation"],["userAuthenticationSettingsRelativeURL","settings/userAuthentication"],["utContactsSectionRelativeURL","sections/utContacts"],["utPeculiaritiesSectionRelativeURL","sections/utPeculiarities"],["utServicesSectionRelativeURL","sections/utServices"]]));nt(this,t,ee(this,n,oi).call(this,d(Ue)).pipe(wt(l=>{let m=ee(this,n,ii).call(this,l);return new Map(m)}),ke(1)))}readURL(l){return Y(this,t).pipe(wt(m=>{let h=m.get(l);return Se(h,`[BackendAPIConfigurationService] Wrong data. The URL codename ('${l}') does not exist.`),h}))}};i=new WeakMap,t=new WeakMap,n=new WeakSet,ii=function(l){return Object.entries(l).map(([h,_])=>{let M=Y(this,i).get(h);return Se(M,`[BackendAPIConfigurationService] Wrong data. The relative URL codename ('${h}') does not exist.`),[M,xe(_)]})},oi=function(l){let m=xe("data/settings/backend-api-configuration.json");return l.get(m)},s.\u0275fac=function(m){return new(m||s)},s.\u0275prov=C({token:s,factory:s.\u0275fac,providedIn:"root"});let e=s;return e})();export{ir as a,or as b,Yt as c,di as d,fn as e,nn as f,ht as g,kr as h,Tr as i,an as j,Tn as k,Li as l,Pr as m,Hi as n,zi as o,Nr as p,Rr as q,Ft as r,k as s,we as t,Rn as u,Bn as v,Gn as w,Wn as x,Yn as y,_o as z,ka as A,Ho as B,Ya as C,bl as D,yl as E,$o as F,xe as G,wl as H,Fl as I,ur as J};
