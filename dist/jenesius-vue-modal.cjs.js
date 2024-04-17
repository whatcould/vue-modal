(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".modal-container{position:fixed;left:0;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:#3e3e3e21;cursor:pointer}.modal-item{cursor:default}.modal-list-enter-active,.modal-list-leave-active,.modal-list-enter-active .modal-item,.modal-list-leave-active .modal-item{transition:all .2s ease}.modal-list-enter-from,.modal-list-leave-to{opacity:0!important}.modal-list-enter-from .modal-item,.modal-list-leave-to .modal-item{transform:translateY(-60px)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
"use strict";/*!
  * jenesius-vue-modal v1.11.1
  * (c) 2024 Jenesius
  * @license MIT
  */Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("vue");var E=function(t,e){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},E(t,e)};function q(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");E(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function p(t,e,n,i){function o(r){return r instanceof n?r:new n(function(u){u(r)})}return new(n||(n=Promise))(function(r,u){function c(d){try{a(i.next(d))}catch(b){u(b)}}function l(d){try{a(i.throw(d))}catch(b){u(b)}}function a(d){d.done?r(d.value):o(d.value).then(c,l)}a((i=i.apply(t,e||[])).next())})}function g(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(d){return l([a,d])}}function l(a){if(i)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(n=0)),n;)try{if(i=1,o&&(r=a[0]&2?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[a[0]&2,r.value]),a[0]){case 0:case 1:r=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){n.label=a[1];break}if(a[0]===6&&n.label<r[1]){n.label=r[1],r=a;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(a);break}r[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(d){a=[6,d],o=0}finally{i=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var f=function(t){q(e,t);function e(n,i){i===void 0&&(i=null);var o=t.call(this)||this;return o.isModalError=!0,o.message=n,o.details=i,o}return e.Undefined=function(n){return new e("Modal with id: ".concat(n," not founded. The modal window may have been closed earlier."))},e.UndefinedGuardName=function(n){return new e("Guard's name ".concat(n," is not declaration."))},e.NextReject=function(n){return new e("Guard returned false. Modal navigation was stopped. Modal id ".concat(n))},e.GuardDeclarationType=function(n){return new e("Guard's type should be a function. Provided:",n)},e.ConfigurationType=function(n){return new e("Configuration type must be an Object. Provided",n)},e.ConfigurationUndefinedParam=function(n,i){return new e("In configuration founded unknown parameter: ".concat(n,". Available are ").concat(i.join(", ")," "))},e.QueueNoEmpty=function(){return new e("Modal's queue is not empty. Probably some modal reject closing by onClose hook.")},e.EmptyModalQueue=function(){return new e("Modal queue is empty.")},e.NotInitialized=function(n){return new e("Modal Container not found. Put container from jenesius-vue-modal in App's template. Namespace: ".concat(n,". Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started."))},e.ModalComponentNotProvided=function(){return new e("The first parameter(VueComponent) was not specified.")},e.DuplicatedRouterIntegration=function(){return new e("useModalRouter.init should escaped only once.")},e.ModalRouterIntegrationNotInitialized=function(){return new e("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation")},e.ModalEventNameMustBeString=function(n){return new e("Event name must be a string. Provided: ".concat(n))},e.ModalNotFoundByID=function(n){return new e("Modal with ID ".concat(n," was not found."))},e.ModalNotExistsInStore=function(n){return new e("Provided name(".concat(n,") don't exist in the store. Has the given name been added to the store?"))},e}(Error),m=function(){function t(){this.state=new Map,t.instance=this}return t.prototype.getByName=function(e){return e===void 0&&(e=t.DEFAULT_NAMESPACE),this.state.has(e)||this.state.set(e,{queue:s.reactive([]),initialized:!1}),this.state.get(e)},t.prototype.forceClean=function(){this.state.forEach(function(e){e.queue.splice(0,e.queue.length)})},t.DEFAULT_NAMESPACE="default",t}(),N=function(){var t=new m,e={scrollLock:!0,animation:"modal-list",backgroundClose:!0,escClose:!0,store:{},skipInitCheck:!1},n=t.getByName().queue;return s.watch(function(){return n},function(){e.scrollLock&&(n.length?document.body.style.overflowY="hidden":document.body.style.overflowY="auto")},{deep:!0}),{namespaceStore:t,configuration:e}}();function v(t){return N.namespaceStore.getByName(t)}var y=N.configuration;function R(t){var e={backgroundClose:y.backgroundClose,isRoute:!1,namespace:m.DEFAULT_NAMESPACE};return t.backgroundClose!==void 0&&(e.backgroundClose=t.backgroundClose),t.isRoute&&(e.isRoute=t.isRoute),t.namespace&&(e.namespace=t.namespace),e}function P(t){t===void 0&&(t={});var e={background:!1,esc:!1};return Object.assign(e,t)}function T(t){return t||(t={}),t}function w(t,e){e===void 0&&(e={});var n=M.STORE.get(t);if(!n)return Promise.reject(f.ModalNotFoundByID(t));var i=v(n.namespace),o=i.queue.findIndex(function(u){return u.id===t});if(o===-1)return Promise.reject(f.Undefined(t));var r=h.get(t,"close").map(function(u){return z(u,t,P(e))});return O(r).then(function(){i.queue.splice(o,1)}).then(function(){h.get(t,"destroy").forEach(function(u){return u(P(e))})}).then(function(){h.delete(t)})}var M=function(){function t(e,n,i){var o=this;this.events=s.reactive({}),this.backgroundClose=!0,this.isRoute=!1,this.id=t.modalId++,this.component=e,this.props=s.ref(n),this.closed=s.computed(function(){return!v(i.namespace).queue.includes(o)}),e.beforeModalClose&&h.add(this.id,"close",e.beforeModalClose);var r=R(i);this.backgroundClose=r.backgroundClose,this.isRoute=r.isRoute,this.namespace=r.namespace,t.STORE.set(this.id,this)}return t.prototype.close=function(){return w(this.id)},Object.defineProperty(t.prototype,"onclose",{set:function(e){h.add(this.id,"close",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ondestroy",{set:function(e){h.add(this.id,"destroy",e)},enumerable:!1,configurable:!0}),t.prototype.on=function(e,n){var i=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(n),function(){var o=i.events[e].indexOf(n);o!==-1&&i.events[e].splice(o,1)}},t.STORE=new Map,t.modalId=0,t.EVENT_PROMPT="jenesius-vue-modal:____P____R____O____M____P____T",t}();function I(t){return M.STORE.get(t)}var D={store:{},add:function(t,e,n){var i,o;if(typeof n!="function")throw f.GuardDeclarationType(n);this.store[t]||(this.store[t]=(i={},i[e]=[],i)),this.store[t][e]||(this.store[t][e]=[]),(o=this.store[t][e])===null||o===void 0||o.push(n)},get:function(t,e){return t in this.store?e in this.store[t]?this.store[t][e]||[]:[]:[]},delete:function(t){t in this.store&&delete this.store[t]}};const h=D;function O(t){return t.reduce(function(e,n){return e.then(function(){return n()})},Promise.resolve())}function z(t,e,n){return function(){return new Promise(function(i,o){var r,u=function(c){c===void 0&&(c=!0),c===!1&&o(f.NextReject(e)),i()};Promise.resolve(t.call((r=I(e))===null||r===void 0?void 0:r.instance,n)).then(u).catch(function(c){return o(c)})})}}function A(t){return t=T(t),O(v(t.namespace).queue.map(function(e){return function(){return e.close()}}))}function C(t){var e=v(t),n=e.queue;if(n.length!==0)return n[n.length-1]}function F(t){t=T(t);var e=C(t.namespace);return e?e.close():Promise.resolve()}function G(t,e,n){var i=R(n),o=v(i.namespace);if(i.namespace===m.DEFAULT_NAMESPACE&&!o.initialized&&!y.skipInitCheck)throw f.NotInitialized(i.namespace);if(typeof t=="string"){var r=j(t);if(!r)throw f.ModalNotExistsInStore(t);t=r}if(!t)throw f.ModalComponentNotProvided();var u=new M(t,e,i);return o.queue.push(s.markRaw(u)),u}function S(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),Promise.resolve().then(function(){return G(t,e,n)})}function x(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),A({namespace:n.namespace}).then(function(){var i=v(n.namespace);if(i.queue.length)throw f.QueueNoEmpty()}).then(function(){return S(t,e,n)})}function Q(t){if(typeof t!="object")throw f.ConfigurationType(t);Object.assign(y,t)}function U(t){var e,n,i,o=s.getCurrentInstance(),r=String(((e=o==null?void 0:o.props)===null||e===void 0?void 0:e.modalId)||((n=o==null?void 0:o.props)===null||n===void 0?void 0:n["modal-id"])||((i=o==null?void 0:o.attrs)===null||i===void 0?void 0:i.modalId)),u=r.replace(/[^0-9]/g,"");h.add(Number(u),"close",t)}function L(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),p(this,void 0,void 0,function(){var i,o,r=this;return g(this,function(u){switch(u.label){case 0:return[4,S(t,e,n)];case 1:return i=u.sent(),o=!1,[2,new Promise(function(c){i.on(M.EVENT_PROMPT,function(l){return p(r,void 0,void 0,function(){return g(this,function(a){return o=!0,[2,i.close().then(function(){return c(l)}).catch(function(){return o=!1})]})})}),i.ondestroy=function(){o||c(null)}})]}})})}function j(t){return y.store[t]||void 0}const k={__name:"WidgetModalContainerItem",props:{id:Number,class:{type:String,default:null}},setup(t){const e=s.ref(null),i=I(t.id);function o(){if(i.backgroundClose)return w(i.id,{background:!0}).catch(()=>{})}return s.watch(()=>e.value,r=>{i.instance=r}),(r,u)=>(s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass(["widget__modal-container__item modal-container",t.class]),onPointerdown:s.withModifiers(o,["self","stop"])},[(s.openBlock(),s.createBlock(s.resolveDynamicComponent(s.unref(i).component),s.mergeProps(s.unref(i).props.value,{class:"modal-item widget__modal-wrap",modalId:`_modal_${t.id}`,ref_key:"modalRef",ref:e},s.toHandlers(s.unref(i).events)),null,16,["modalId"]))],34))}};function V(t){t===void 0&&(t=m.DEFAULT_NAMESPACE);var e=m.instance.getByName(t);e.initialized=!0,t===m.DEFAULT_NAMESPACE&&document.addEventListener("keyup",function(n){if(y.escClose&&(n.key==="Escape"||n.code==="Escape")){var i=C(t);if(!i)return;w(i.id,{esc:!0}).catch(function(){})}})}const W={props:{namespace:String},setup(t){return s.onMounted(()=>{V(t.namespace)}),()=>{const e=v(t.namespace);return s.h(s.TransitionGroup,{name:y.animation,tag:"div"},{default:()=>e.queue.map(n=>s.h(k,{key:n.id,id:n.id}))})}},components:{WidgetContainerModalItem:k}};var _={router:null};function $(t){var e=this;if(_.router)throw f.DuplicatedRouterIntegration();_.router=t;function n(i){for(var o=i.matched.length-1;o>=0;o--){var r=i.matched[o].components,u=Object.values(r).find(function(c){return c._isModal});if(u)return u}return null}t.beforeEach(function(i,o){return p(e,void 0,void 0,function(){var r,u,c;return g(this,function(l){switch(l.label){case 0:return l.trys.push([0,3,,4]),r=n(o),r&&!(!((c=(u=r.getModalObject())===null||u===void 0?void 0:u.closed)===null||c===void 0)&&c.value)?[4,r.close(!0)]:[3,2];case 1:l.sent(),l.label=2;case 2:return[3,4];case 3:return l.sent(),[2,!1];case 4:return[2]}})})}),t.afterEach(function(i){return p(e,void 0,void 0,function(){var o;return g(this,function(r){switch(r.label){case 0:return o=n(i),o?[4,o.initialize()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})})}function B(t){var e=null,n=!1;function i(){return p(this,void 0,void 0,function(){return g(this,function(o){switch(o.label){case 0:if(!_.router)throw f.ModalRouterIntegrationNotInitialized();return n=!1,e=null,[4,x(t,s.computed(function(){var r;return(r=_.router)===null||r===void 0?void 0:r.currentRoute.value.params}),{isRoute:!0})];case 1:return e=o.sent(),e.onclose=function(){var r;n||(r=_.router)===null||r===void 0||r.back()},[2]}})})}return{getModalObject:function(){return e},_isModal:!0,close:function(o){return o===void 0&&(o=!1),p(this,void 0,void 0,function(){return g(this,function(r){switch(r.label){case 0:return n=o,e?[4,e.close()]:[3,2];case 1:return[2,r.sent()];case 2:return[2]}})})},initialize:i,setup:function(){return function(){return null}}}}B.init=$;var H=v().queue;function Y(t){return v(t).queue}exports.Modal=M;exports.closeById=w;exports.closeModal=A;exports.config=Q;exports.container=W;exports.getComponentFromStore=j;exports.getCurrentModal=C;exports.getQueueByNamespace=Y;exports.modalQueue=H;exports.onBeforeModalClose=U;exports.openModal=x;exports.popModal=F;exports.promptModal=L;exports.pushModal=S;exports.useModalRouter=B;
//# sourceMappingURL=jenesius-vue-modal.cjs.js.map
