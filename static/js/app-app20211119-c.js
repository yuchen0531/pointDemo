webpackJsonp([0],{

/***/ "I6a5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MCeE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b02ba34","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("WCFv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./src/assets/data.json
var data = __webpack_require__("ZTUR");
var data_default = /*#__PURE__*/__webpack_require__.n(data);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Home = ({
  name: 'home',
  data: function data() {
    return {
      username: '',
      pointType: 'operate',
      addphone: '',
      addmoney: 0,
      addpoint: 0,
      subphone: '',
      subpoint: 0,
      operateType: 'add',
      recordType: 'cancel',
      enternum: '',
      today: new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate(),
      recordList: [],
      noticeFrame: false,
      msg: ''
    };
  },
  created: function created() {
    console.log(this.$route, data_default.a);
    this.username = this.$route.query.user;
  },

  watch: {
    operateType: function operateType() {
      this.enternum = '';
    },
    addmoney: function addmoney() {
      this.addpoint = parseInt(Number(this.addmoney) / 100);
    }
  },
  methods: {
    submit: function submit() {
      console.log(this.operateType);
      if (this.operateType === 'add') {
        if (this.addphone.length < 10 || this.addmoney < 1) {
          this.msg = '請輸入完整手機號碼及金額';
          this.noticeFrame = true;
        } else {
          this.recordList.unshift({ func: 0, time: new Date().getHours() + ':' + (Number(new Date().getMinutes()) < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()), phone: this.addphone, add: parseInt(Number(this.addmoney) / 100), sub: 0, money: this.addmoney });
          this.msg = '累點成功';
          this.noticeFrame = true;
          this.addphone = '';
          this.addmoney = 0;
        }
      } else if (this.operateType === 'sub') {
        if (this.subphone.length < 10 || this.subpoint < 1) {
          this.msg = '請輸入完整手機號碼及點數';
          this.noticeFrame = true;
        } else {
          this.recordList.unshift({ func: 0, time: new Date().getHours() + ':' + (Number(new Date().getMinutes()) < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()), phone: this.subphone, add: 0, sub: this.subpoint, money: 0 });
          this.msg = '兌點成功';
          this.noticeFrame = true;
          this.subphone = '';
          this.subpoint = 0;
        }
      }
    },
    enterNum: function enterNum(num) {
      switch (this.enternum) {
        case 'addphone':
          if (this.addphone.length > 9) return;
          this.addphone = this.addphone + num;
          break;
        case 'addmoney':
          this.addmoney = Number(String(this.addmoney) + num);
          break;
        case 'subphone':
          if (this.subphone.length > 9) return;
          this.subphone = this.subphone + num;
          break;
        case 'subpoint':
          this.subpoint = Number(String(this.subpoint) + num);
          break;
        default:
      }
    },
    clearNum: function clearNum() {
      console.log(this.enternum);
      switch (this.enternum) {
        case 'addphone':
          this.addphone = '';
          break;
        case 'addmoney':
          this.addmoney = 0;
          break;
        case 'subphone':
          if (this.subphone.length > 10) return;
          this.subphone = '';
          break;
        case 'subpoint':
          this.subpoint = 0;
          break;
        default:
      }
    },
    enterType: function enterType(item) {
      this.enternum = item;
      console.log(this.enternum);
    },
    cancel: function cancel(index) {
      this.recordList[index].func = 1;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-348d7454","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home pt-5 px-2"},[_c('div',{staticClass:"content px-lg-5 px-3 py-4 mx-auto"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('p',{staticClass:"h3 text-orange font-weight-bold text-center"},[_vm._v("潔旗雞排 "+_vm._s(this.username)+" 您好")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('button',{staticClass:"col-6 tab-btn h5 py-2 font-weight-bold",class:{'tab-btn-checked':_vm.pointType === 'operate'},on:{"click":function($event){_vm.pointType = 'operate'}}},[_vm._v("點數操作")]),_vm._v(" "),_c('button',{staticClass:"col-6 tab-btn h5 py-2 font-weight-bold",class:{'tab-btn-checked':_vm.pointType === 'record'},on:{"click":function($event){_vm.pointType = 'record'}}},[_vm._v("點數紀錄")])]),_vm._v(" "),(_vm.pointType === 'operate')?_c('div',{staticClass:"row pt-3"},[_c('div',{staticClass:"col px-0"},[_c('div',{staticClass:"w-100 d-flex justify-content-start"},[_c('button',{staticClass:"w-25 pointType-btn h5 py-2 mb-0",class:{'pointType-btn-checked':_vm.operateType === 'add'},on:{"click":function($event){_vm.operateType = 'add'}}},[_vm._v("累點")]),_vm._v(" "),_c('button',{staticClass:"w-25 pointType-btn h5 py-2 mb-0",class:{'pointType-btn-checked':_vm.operateType === 'sub'},on:{"click":function($event){_vm.operateType = 'sub'}}},[_vm._v("兌點")])])]),_vm._v(" "),(_vm.operateType === 'add')?_c('div',{staticClass:"col-12 bg-light-gray py-3"},[_c('div',{staticClass:"mb-3 text-gray"},[_vm._v("手機號碼 "),_c('div',{staticClass:"mt-1 input-btn text-center",class:{'input-btn-border': _vm.enternum  === 'addphone'},on:{"click":function($event){return _vm.enterType('addphone')}}},[_vm._v(_vm._s(_vm.addphone))])]),_vm._v(" "),_c('div',{staticClass:"mb-3 text-gray"},[_vm._v("本次消費金額 "),_c('div',{staticClass:"mt-1 input-btn text-center",class:{'input-btn-border': _vm.enternum === 'addmoney'},on:{"click":function($event){return _vm.enterType('addmoney')}}},[_vm._v(_vm._s(_vm.addmoney)+"元")])]),_vm._v(" "),_c('div',{staticClass:"text-gray"},[_vm._v("本次累點 "+_vm._s(_vm.addpoint))])]):_vm._e(),_vm._v(" "),(_vm.operateType === 'add')?_c('div',{staticClass:"col-12 keyboard-frame bg-light-gray pb-3"},[_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(7)}}},[_vm._v("7")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(8)}}},[_vm._v("8")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(9)}}},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(4)}}},[_vm._v("4")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(5)}}},[_vm._v("5")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(6)}}},[_vm._v("6")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(1)}}},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(2)}}},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(3)}}},[_vm._v("3")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.clearNum()}}},[_vm._v("清空")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(0)}}},[_vm._v("0")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.submit()}}},[_vm._v("執行")])])]):_vm._e(),_vm._v(" "),(_vm.operateType === 'sub')?_c('div',{staticClass:"col-12 bg-light-gray py-3"},[_c('div',{staticClass:"mb-3 text-gray"},[_vm._v("手機號碼 "),_c('div',{staticClass:"mt-1 input-btn text-center",class:{'input-btn-border': _vm.enternum  === 'subphone'},on:{"click":function($event){return _vm.enterType('subphone')}}},[_vm._v(_vm._s(_vm.subphone))])]),_vm._v(" "),_c('div',{staticClass:"mb-3 text-gray"},[_vm._v("本次折抵點數 "),_c('div',{staticClass:"mt-1 input-btn text-center",class:{'input-btn-border': _vm.enternum === 'subpoint'},on:{"click":function($event){return _vm.enterType('subpoint')}}},[_vm._v(_vm._s(_vm.subpoint))])])]):_vm._e(),_vm._v(" "),(_vm.operateType === 'sub')?_c('div',{staticClass:"col-12 keyboard-frame bg-light-gray pb-3"},[_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(7)}}},[_vm._v("7")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(8)}}},[_vm._v("8")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(9)}}},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(4)}}},[_vm._v("4")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(5)}}},[_vm._v("5")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(6)}}},[_vm._v("6")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(1)}}},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(2)}}},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(3)}}},[_vm._v("3")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center align-items-center"},[_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.clearNum()}}},[_vm._v("清空")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.enterNum(0)}}},[_vm._v("0")]),_vm._v(" "),_c('div',{staticClass:"keyboard-btn",on:{"click":function($event){return _vm.submit()}}},[_vm._v("執行")])])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.pointType === 'record')?_c('div',{staticClass:"row mt-3"},[_c('div',{staticClass:"col px-0"},[_c('div',{staticClass:"d-flex justify-content-start"},[_c('button',{staticClass:"pointType-btn h5 py-2 px-3 mb-0",class:{'pointType-btn-checked':_vm.recordType = 'cancel'},on:{"click":function($event){_vm.recordType = 'cancel'}}},[_vm._v("取消訂單")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 bg-light-gray py-3"},[_c('p',{staticClass:"h5 text-gray text-right"},[_vm._v(_vm._s(_vm.today))]),_vm._v(" "),_c('div',{staticClass:"table-frame"},[_c('table',{staticClass:"table"},[_vm._m(0),_vm._v(" "),_c('tbody',{staticClass:"bg-white text-center"},[_vm._l((_vm.recordList),function(item,index){return _c('tr',{key:index},[_c('th',{attrs:{"scope":"row"}},[(item.func === 0)?_c('button',{staticClass:"cancel-btn h6 mb-0",on:{"click":function($event){return _vm.cancel(index)}}},[_vm._v("取消")]):_vm._e(),_vm._v(" "),(item.func === 1)?_c('button',{staticClass:"cancel-btn h6 mb-0",attrs:{"disabled":""}},[_vm._v("已取消")]):_vm._e()]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.phone))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.add))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.sub))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.money))])])}),_vm._v(" "),(_vm.recordList.length < 1)?_c('tr',[_c('td',{attrs:{"colspan":"6"}},[_vm._v("目前無紀錄")])]):_vm._e()],2)])])])]):_vm._e()])]),_vm._v(" "),(_vm.noticeFrame)?_c('div',{staticClass:"model-frame d-flex align-items-center justify-content-center"},[_c('div',{staticClass:"model p-4"},[_c('p',{staticClass:"h4 font-weight-bold text-center my-4"},[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-center justify-content-center"},[_c('button',{staticClass:"cancel-btn h5 py-2 w-50",on:{"click":function($event){_vm.noticeFrame = false, _vm.msg = ''}}},[_vm._v("確認")])])])]):_vm._e()])}
var Home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"bg-orange text-white text-center"},[_c('tr',[_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("功能")]),_vm._v(" "),_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("時間")]),_vm._v(" "),_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("手機號碼")]),_vm._v(" "),_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("累")]),_vm._v(" "),_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("兌")]),_vm._v(" "),_c('th',{staticClass:"text-nowrap",attrs:{"scope":"col"}},[_vm._v("金額")])])])}]
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var views_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/views/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("MCeE")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  views_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_views_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Login.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Login = ({
  name: 'login',
  data: function data() {
    return {
      username: '',
      password: '',
      number: '',
      noticeFrame: false,
      msg: ''
    };
  },
  created: function created() {},

  methods: {
    submit: function submit() {
      console.log(this.username + '123', this.password);
      if (this.username + '123' === this.password) {
        this.$router.push({ path: '/main', query: { user: this.username } });
      } else if (this.username === '' || this.password === '') {
        this.msg = '請輸入帳號及密碼';
        this.noticeFrame = true;
      } else {
        this.msg = '帳號或密碼輸入錯誤';
        this.noticeFrame = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-001123ad","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Login.vue
var Login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('div',{staticClass:"container pt-5"},[_c('div',{staticClass:"row justify-content-center text-center mb-2 mx-auto p-3 login-frame"},[_c('div',{staticClass:"col-12 mb-3 h3 text-orange font-weight-bold"},[_vm._v("\n        潔旗雞排\n      ")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 mb-3 text-gray font-weight-bold text-left"},[_vm._v("\n        店家帳號 00000000\n      ")]),_vm._v(" "),_c('div',{staticClass:"col-12 mb-3 text-gray font-weight-bold text-left"},[_c('p',{staticClass:"mb-1"},[_vm._v("使用者帳號")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"w-100",attrs:{"type":"text","placeholder":"請輸入使用者帳號"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-12 mb-5 text-gray font-weight-bold text-left"},[_c('p',{staticClass:"mb-1"},[_vm._v("店家密碼")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"w-100",attrs:{"type":"password","placeholder":"請輸入密碼"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('button',{staticClass:"btn-submit py-2 h5 w-100 font-weight-bold text-white",on:{"click":_vm.submit}},[_vm._v("送出")])])])]),_vm._v(" "),(_vm.noticeFrame)?_c('div',{staticClass:"model-frame d-flex align-items-center justify-content-center"},[_c('div',{staticClass:"model p-4"},[_c('p',{staticClass:"h4 font-weight-bold text-center my-4"},[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-center justify-content-center"},[_c('button',{staticClass:"cancel-btn h5 py-2 w-50",on:{"click":function($event){_vm.noticeFrame = false, _vm.msg = ''}}},[_vm._v("確認")])])])]):_vm._e()])}
var Login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-12 mb-3"},[_c('img',{attrs:{"src":"https://uupon.tw/resources/front/zh/images/logo.svg","alt":"","width":"65%"}})])}]
var Login_esExports = { render: Login_render, staticRenderFns: Login_staticRenderFns }
/* harmony default export */ var views_Login = (Login_esExports);
// CONCATENATED MODULE: ./src/views/Login.vue
function Login_injectStyle (ssrContext) {
  __webpack_require__("I6a5")
}
var Login_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Login___vue_template_functional__ = false
/* styles */
var Login___vue_styles__ = Login_injectStyle
/* scopeId */
var Login___vue_scopeId__ = "data-v-001123ad"
/* moduleIdentifier (server only) */
var Login___vue_module_identifier__ = null
var Login_Component = Login_normalizeComponent(
  Login,
  views_Login,
  Login___vue_template_functional__,
  Login___vue_styles__,
  Login___vue_scopeId__,
  Login___vue_module_identifier__
)

/* harmony default export */ var src_views_Login = (Login_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js





vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'hash',
  routes: [{
    path: '/main',
    name: 'Home',
    component: src_views_Home
  }, {
    path: '/',
    name: 'Login',
    component: src_views_Login
  }]
}));
// EXTERNAL MODULE: ./src/assets/all.scss
var assets_all = __webpack_require__("pc4J");
var all_default = /*#__PURE__*/__webpack_require__.n(assets_all);

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__("7QTg");
var vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__("wNQb");
var swiper_bundle_default = /*#__PURE__*/__webpack_require__.n(swiper_bundle);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




// import vueaxios from 'vue-axios'
// import axios from 'axios'
// import './assets/js/loader.min.js'



// Vue.use(axios, vueaxios)
vue_esm["a" /* default */].use(vue_awesome_swiper_default.a);
vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "WCFv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZTUR":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "pc4J":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wNQb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app-app20211119-c.js.map