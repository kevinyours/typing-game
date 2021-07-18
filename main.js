(()=>{"use strict";var t,e={9709:(t,e,n)=>{n(6253),n(851),n(5666),n(2310),n(9357);const r=function(){var t=[],e=function(){},n={},r=function(){var n=t.find((function(t){return t.fragment===window.location.hash.replace("#","")}));n?n.component():e()};return n.addRoute=function(e,r){return t.push({fragment:e,component:r}),n},n.addNotFound=function(t){return e=t,n},n.navigate=function(t){window.location.hash=t},n.on=function(t){document.body.addEventListener("click",(function(e){var r=e.target;if(r.matches(t)){var o=r.dataset.navigate;n.navigate(o)}}))},n.start=function(){window.addEventListener("hashchange",r),window.location.hash||(window.location.hash="#/"),r()},n};n(1520),n(2139),n(5767),n(9115),n(6997),n(1181),n(9375);const o=Object.freeze({CLICK:"click",KEYUP:"keyup",KEYDOWN:"keydown",SUBMIT:"@submit",ENTER:13,NAV_SELECTOR:"button[data-navigate]",NAV_DATASET:"data-navigate",READY:"ready",INIT:"init",START:"start",NAV:"@nav",VISIBLE:"visible",HIDDEN:"hidden"});n(7476);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)throw new Error("HTML element is empty");return this.element=e,this.eventHandlers={},this}var e,n,r;return e=t,(n=[{key:"on",value:function(t,e){return this._addEvent(t,e),this.element.addEventListener(t,e),this}},{key:"_addEvent",value:function(t,e){this.destroy(t),this.eventHandlers[t]=e}},{key:"_getEvent",value:function(t){return this.eventHandlers[t]}},{key:"_removeEvent",value:function(t){delete this.eventHandlers[t]}},{key:"destroy",value:function(t){return this.element.removeEventListener(t,this._getEvent(t)),this._removeEvent(t),this}},{key:"destroyAll",value:function(){var t=this;return Object.keys(this.eventHandlers).forEach((function(e){return t.destroy(e)})),this}},{key:"emit",value:function(t,e){return this.element.dispatchEvent(new CustomEvent(t,{detail:e})),this}},{key:"show",value:function(){this.element.style.visibility=o.VISIBLE}},{key:"hide",value:function(){this.element.style.visibility=o.HIDDEN}}])&&i(e.prototype,n),r&&i(e,r),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p,h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(u,t);var e,n,r,i=f(u);function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"disabled",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.element.disabled=t,this}},{key:"focus",value:function(){return this.element.focus(),this}},{key:"clear",value:function(){return this.element.value="",this}},{key:"_onKeydown",value:function(t){t.keyCode===o.ENTER&&this.emit(o.SUBMIT,{value:t.target.value})}},{key:"bindEvent",value:function(){var t=this;return this.on(o.KEYDOWN,(function(e){return t._onKeydown(e)})),this}},{key:"mount",value:function(){this.bindEvent(),this.show()}},{key:"unmount",value:function(){this.hide()}}])&&s(e.prototype,n),r&&s(e,r),u}(u);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(u,t);var e,n,r,i=d(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=i.call(this,t),w(e,p||(p=O(e)))}return e=u,(n=[{key:"setText",value:function(t){this.element.innerText=t}},{key:"bindEvent",value:function(){var t=this;this.on(o.CLICK,(function(e){return t._onClick(e)}))}},{key:"_onClick",value:function(t){this.emit(o.NAV,{detail:t})}},{key:"setNavigate",value:function(t){this.removeNavigate(),this.element.setAttribute(o.NAV_DATASET,t)}},{key:"removeNavigate",value:function(){this.element.removeAttribute(o.NAV_DATASET)}},{key:"disabled",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.element.disabled=t}},{key:"mount",value:function(){this.bindEvent(),this.show()}},{key:"unmount",value:function(){this.hide()}}])&&m(e.prototype,n),r&&m(e,r),u}(u);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,r,o=T(i);function i(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return k(this,i),(e=o.call(this,t)).total=n,e.prefix="",e.suffix="",e}return e=i,(n=[{key:"setPrefix",value:function(t){this.prefix=t}},{key:"setSuffix",value:function(t){this.suffix=t}},{key:"resolve",value:function(){this.element.innerText="".concat(this.prefix," ").concat(this.total," ").concat(this.suffix)}},{key:"reset",value:function(t){this.total=t,this.resolve()}},{key:"mount",value:function(){this.resolve(),this.show()}},{key:"unmount",value:function(){this.hide()}}])&&_(e.prototype,n),r&&_(e,r),i}(u);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=null,q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(i,t);var e,n,r,o=A(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e=o.call(this,t),z?I(e,z):(e.time=10,e.timer=function(){},I(e,z=C(e)))}return e=i,(n=[{key:"setPrefix",value:function(t){this.prefix=t}},{key:"setSuffix",value:function(t){this.suffix=t}},{key:"resolve",value:function(){this.element.innerText="".concat(this.prefix," ").concat(this.time," ").concat(this.suffix)}},{key:"reset",value:function(t){this.time=t,this.resolve()}},{key:"stop",value:function(){clearInterval(this.timer),this.timer=null}},{key:"tick",value:function(){var t=this;this.stop(),this.timer=setInterval((function(){if(t.time--,t.reset(t.time),t.time<=0||"#/quiz"!==window.location.hash)return clearInterval(t.timer)}),1e3)}},{key:"mount",value:function(){this.resolve(),this.show()}},{key:"unmount",value:function(){this.hide()}}])&&B(e.prototype,n),r&&B(e,r),i}(u);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(i,t);var e,n,r,o=M(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return e=i,(n=[{key:"_getElement",value:function(t){switch(t){case"title":return this.element.querySelector(".title");case"info":return this.element.querySelector(".info");case"summary":default:return this.element.querySelector(".summary")}}},{key:"writeText",value:function(t){var e=t.type,n=t.text;this._getElement(e).innerText=n}},{key:"emptyText",value:function(t){var e=t.type;this._getElement(e).innerText=null}},{key:"mount",value:function(){this.show()}},{key:"unmount",value:function(){this.hide()}}])&&W(e.prototype,n),r&&W(e,r),i}(u);var G=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.getElementById("timer"),n=document.getElementById("score"),r=document.querySelector("[type=text]"),o=document.getElementById("notice"),i=document.getElementById("primary-btn");this.$timer=new q(e),this.$score=new j(n),this.$input=new h(r),this.$notice=new K(o),this.$primaryBtn=new E(i)},Y=(n(1736),n(1246),[{second:10,text:"HelloWorld"},{second:10,text:"LotteWorld"},{second:8,text:"WonderLand"},{second:3,text:"ZombieLand"},{second:15,text:"WeAreTheWorld"},{second:5,text:"DisneyLand"},{second:5,text:"ComedyWorld"},{second:15,text:"AnotherWorld"},{second:15,text:"BetterWorld"},{second:20,text:"PeacefulWorld"},{second:15,text:"MyWorld"},{second:10,text:"YourWorld"}]),U=(n(8837),function(t){return JSON.parse(JSON.stringify(t))}),J=function(t){return Object.freeze(U(t))};const Q=function(t){var e=[],n=new Proxy(U(t),{set:function(t,r,o){return t[r]=o,e.forEach((function(t){return t(J(n))})),!0}});return n.addListener=function(t){return e.push(t),t(J(n)),function(){e=e.filter((function(e){return e!==t}))}},n};function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var tt={data:[],cursor:Number.MAX_SAFE_INTEGER,quiz:{word:"",remain:10},score:{credit:0,time:0,cnt:0}},et=null,nt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt;return X(this,t),et||(this.state=Q(e),et=this)}var e,n,r;return e=t,(n=[{key:"useObserver",get:function(){return this.state.addListener}},{key:"init",value:function(){return this.state.cursor=Number.MAX_SAFE_INTEGER,this.state.score={credit:0,time:0,cnt:0},this}},{key:"load",value:function(){return this.state.data=Y,this.state.score={credit:0,time:0,cnt:0},this.switch(),this}},{key:"switch",value:function(){if(0===this.state.cursor)return!1;var t=this.state.data.pop();return this.state.cursor=this.state.data.length,this.state.quiz={word:t.text,remain:t.second},!0}},{key:"update",value:function(t){var e=this.state.score,n=e.credit,r=e.time,o=e.cnt;this.state.score={credit:n+1,time:r+(this.state.quiz.remain-t),cnt:o+1}}}])&&Z(e.prototype,n),r&&Z(e,r),t}();function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=at(t);if(e){var o=at(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return st(this,n)}}function st(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ft=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(u,t);var e,n,r,i=ct(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new nt;return ot(this,u),(t=i.call(this)).status=o.READY,t.actions=e,t.bindEvent(),t.render(),t}return e=u,(n=[{key:"bindEvent",value:function(){var t=this;this.initElements(),this.$primaryBtn.setText("Ready"),this.$primaryBtn.disabled(!1),this.$primaryBtn.removeNavigate(),this.$primaryBtn.on(o.NAV,(function(e){return t.handleEvent()}))}},{key:"initElements",value:function(){this.$timer.setPrefix(" "),this.$timer.setSuffix("Sec"),this.$score.reset(0),this.$score.setPrefix("Score: "),this.$score.setSuffix(""),this.$notice.writeText({type:"summary",text:"Typing Game"}),this.$notice.emptyText({type:"title"}),this.$notice.emptyText({type:"info"})}},{key:"readyForInitEvent",value:function(){this.status=o.INIT,this.$notice.writeText({type:"summary",text:"Initialize"}),this.$primaryBtn.setText("Initialize")}},{key:"prepareNextEvent",value:function(){this.actions.load(),this.status=o.START,this.$notice.writeText({type:"summary",text:"Start"}),this.$primaryBtn.setText("Start")}},{key:"goToGameEvent",value:function(){this.$primaryBtn.destroy(o.NAV),this.$primaryBtn.setNavigate("/quiz")}},{key:"handleEvent",value:function(){var t=this;switch(this.$primaryBtn.disabled(!0),setTimeout((function(){return t.$primaryBtn.disabled(!1)}),500),this.status){case o.READY:this.readyForInitEvent();break;case o.INIT:this.prepareNextEvent();break;case o.START:default:this.goToGameEvent()}}},{key:"render",value:function(){this.$timer.mount(),this.$score.mount(),this.$input.unmount(),this.$notice.mount(),this.$primaryBtn.mount()}}])&&it(e.prototype,n),r&&it(e,r),u}(G);function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=bt(t);if(e){var o=bt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return mt(this,n)}}function mt(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function bt(t){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var dt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(u,t);var e,n,r,i=vt(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new nt;return yt(this,u),(t=i.call(this)).state=e.state,t.actions=e,t.actions.init(),t.bindEvent(),t.render(),t.unSubscribe=t.actions.useObserver((function(e){return t.reRender(e)})),t}return e=u,(n=[{key:"bindEvent",value:function(){var t=this;this.initElements(),this.prepareNextEvent(),this.$input.on(o.SUBMIT,(function(e){return t.submit(e)})).focus(),this.$primaryBtn.on(o.CLICK,(function(){return t.goToNextEvent()}))}},{key:"initElements",value:function(){this.$timer.setPrefix(""),this.$timer.setSuffix("Sec"),this.$score.setPrefix("Score: "),this.$score.setSuffix(""),this.$notice.emptyText({type:"title"}),this.$notice.emptyText({type:"info"}),this.$input.disabled(!1)}},{key:"prepareNextEvent",value:function(){this.$primaryBtn.disabled(!1),this.$primaryBtn.setText("Finish"),this.$primaryBtn.setNavigate("/result")}},{key:"goToNextEvent",value:function(){this.unSubscribe(),this.$input.destroy(o.SUBMIT),this.$primaryBtn.destroy(o.CLICK)}},{key:"blockTyping",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.$input.disabled(!0),setTimeout((function(){t.$input.disabled(!1).focus()}),e)}},{key:"moveOnNextQuiz",value:function(){this.actions.switch()||(this.$notice.unmount(),this.$input.disabled(!0),this.$input.unmount(),this.$primaryBtn.mount())}},{key:"submit",value:function(t){t.detail.value===this.state.quiz.word&&(this.blockTyping(400),this.$timer.time>0&&this.actions.update(this.$timer.time),this.moveOnNextQuiz()),this.$input.clear()}},{key:"render",value:function(){this.$timer.mount(),this.$score.mount(),this.$notice.mount(),this.$input.mount(),this.$primaryBtn.unmount()}},{key:"reRender",value:function(t){this.$timer.reset(t.quiz.remain),this.$timer.tick(),this.$score.reset(t.score.credit),this.$notice.writeText({type:"summary",text:t.quiz.word})}}])&&pt(e.prototype,n),r&&pt(e,r),u}(G);function wt(t){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Et(t,e){return(Et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_t(t);if(e){var o=_t(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return kt(this,n)}}function kt(t,e){return!e||"object"!==wt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _t(t){return(_t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var St=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Et(t,e)}(i,t);var e,n,r,o=xt(i);function i(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new nt;return Ot(this,i),(t=o.call(this)).state=e.state,t.score=t.state.score.credit,t.avg=t.getAverage(t.state.score.time,t.state.score.cnt),t.bindEvent(),t.render(),t}return e=i,(n=[{key:"bindEvent",value:function(){this.$notice.writeText({type:"title",text:"Mission Complete!"}),this.$notice.writeText({type:"summary",text:"Final score is ".concat(this.state.score.credit,".")}),this.$notice.writeText({type:"info",text:"Average typing time is ".concat(this.avg||0," second.")}),this.$primaryBtn.setText("Retry"),this.$primaryBtn.setNavigate("/")}},{key:"getAverage",value:function(t,e){return Math.ceil(Number(t)/Number(e))}},{key:"render",value:function(){this.$timer.unmount(),this.$score.unmount(),this.$input.unmount(),this.$notice.mount(),this.$primaryBtn.mount()}}])&&gt(e.prototype,n),r&&gt(e,r),i}(G);function Tt(t){return(Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Rt(t,e){return(Rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Bt(t);if(e){var o=Bt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Pt(this,n)}}function Pt(t,e){return!e||"object"!==Tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Bt(t){return(Bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Rt(t,e)}(i,t);var e,n,r,o=jt(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).bindEvent(),t.render(),t}return e=i,(n=[{key:"bindEvent",value:function(){this.$notice.writeText({type:"summary",text:"Page Not Found."}),this.$notice.emptyText({type:"title"}),this.$notice.emptyText({type:"info"}),this.$primaryBtn.setText("Home"),this.$primaryBtn.setNavigate("/")}},{key:"render",value:function(){this.$timer.unmount(),this.$score.unmount(),this.$input.unmount(),this.$primaryBtn.mount()}}])&&$t(e.prototype,n),r&&$t(e,r),i}(G);function At(t,e,n,r,o,i,u){try{var c=t[i](u),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function It(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){At(i,r,o,u,c,"next",t)}function c(t){At(i,r,o,u,c,"throw",t)}u(void 0)}))}}document.addEventListener("DOMContentLoaded",It(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=new r,n={home:function(){return new ft},quiz:function(){return new dt},result:function(){return new St},notFound:function(){return new Nt}},e.addRoute("/",n.home),e.addRoute("/quiz",n.quiz),e.addRoute("/result",n.result),e.addNotFound(n.notFound),e.on(o.NAV_SELECTOR),e.start();case 8:case"end":return t.stop()}}),t)}))))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var u=1/0;for(a=0;a<t.length;a++){for(var[n,o,i]=t[a],c=!0,s=0;s<n.length;s++)(!1&i||u>=i)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(c=!1,i<u&&(u=i));c&&(t.splice(a--,1),e=o())}return e}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[n,o,i]},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[u,c,s]=n,a=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var f=s(r);for(e&&e(n);a<u.length;a++)i=u[a],r.o(t,i)&&t[i]&&t[i][0](),t[u[a]]=0;return r.O(f)},n=self.webpackChunkTyping_Game=self.webpackChunkTyping_Game||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[883],(()=>r(9709)));o=r.O(o)})();