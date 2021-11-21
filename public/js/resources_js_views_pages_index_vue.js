"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    toggleMenu: function toggleMenu() {
      console.log("Gola");
      var element = document.getElementById("navbarSupportedContent");
      element.classList.toggle("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compontents_nav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../compontents/nav.vue */ "./resources/js/compontents/nav.vue");
/* harmony import */ var _compontents_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../compontents/footer.vue */ "./resources/js/compontents/footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Nav: _compontents_nav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _compontents_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_maintienda_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/maintienda.vue */ "./resources/js/views/layouts/maintienda.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LayoutTienda: _layouts_maintienda_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      plan1: 1,
      plan2: 2
    };
  },
  methods: {
    seleccionplan: function seleccionplan(plan) {
      localStorage.setItem('plan', plan);
      this.$router.push("/comprar");
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nfooter[data-v-47db7e4c]{\r\n    background-color: #080404;\n}\nnav.nav_bottom[data-v-47db7e4c]{\r\n    background-color: #080404;\n}\nnav.nav_bottom ul li a[data-v-47db7e4c]{\r\n    color: #FFF!important;\r\n    font-size: 20px;\n}\nnav.nav_bottom ul li.itemnav[data-v-47db7e4c]{\r\n    padding-left: 1rem!important;\r\n    padding-right: 1rem!important;\n}\n.btn-nav[data-v-47db7e4c]:hover {\r\n    border-bottom: 4px solid #04d28c;\r\n\r\n    transition: all 0.2s;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\r\n    font-family: fuente1;\r\n\r\n    src: url(\"/fonts/Gotham-Bold.otf\");\n}\n@font-face {\r\n    font-family: fuente2;\r\n\r\n    src: url(\"/fonts/AmazonEmber_Rg.ttf\");\n}\r\n\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47db7e4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47db7e4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47db7e4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_b2800518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_b2800518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_b2800518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/compontents/footer.vue":
/*!*********************************************!*\
  !*** ./resources/js/compontents/footer.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=47db7e4c&scoped=true& */ "./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_style_index_0_id_47db7e4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& */ "./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47db7e4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/compontents/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/compontents/nav.vue":
/*!******************************************!*\
  !*** ./resources/js/compontents/nav.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=b2800518&scoped=true& */ "./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true&");
/* harmony import */ var _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.vue?vue&type=script&lang=js& */ "./resources/js/compontents/nav.vue?vue&type=script&lang=js&");
/* harmony import */ var _nav_vue_vue_type_style_index_0_id_b2800518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& */ "./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b2800518",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/compontents/nav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/maintienda.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/maintienda.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintienda.vue?vue&type=template&id=4d3d494e& */ "./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e&");
/* harmony import */ var _maintienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintienda.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _maintienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__.render,
  _maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/maintienda.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=498ea718& */ "./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/compontents/nav.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/compontents/nav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maintienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maintienda.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maintienda_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47db7e4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=style&index=0&id=47db7e4c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_b2800518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=style&index=0&id=b2800518&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_47db7e4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=47db7e4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true&");


/***/ }),

/***/ "./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_b2800518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nav.vue?vue&type=template&id=b2800518&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true&");


/***/ }),

/***/ "./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maintienda_vue_vue_type_template_id_4d3d494e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./maintienda.vue?vue&type=template&id=4d3d494e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e&");


/***/ }),

/***/ "./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/index.vue?vue&type=template&id=498ea718& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=498ea718& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/footer.vue?vue&type=template&id=47db7e4c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("footer", { staticClass: "d-none d-md-block d-lg-block" }, [
        _c(
          "nav",
          { staticClass: "navbar navbar-expand-lg navbar-light nav_bottom" },
          [
            _c("div", { staticClass: "container" }, [
              _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
                _c("img", {
                  staticClass: "img-fluid",
                  staticStyle: { position: "relative", top: "-40px" },
                  attrs: {
                    alt: "",
                    src: "images/landing/logo.png",
                    width: "180",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "collapse navbar-collapse d-flex justify-content-between",
                  attrs: { id: "navbarSupportedContent" },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex justify-content-center",
                      staticStyle: { width: "60%" },
                    },
                    [
                      _c(
                        "ul",
                        {
                          staticClass:
                            "navbar-nav d-flex flex-row bd-highlight",
                        },
                        [
                          _c("li", { staticClass: "nav-item itemnav" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn-nav nav-link btn-acerca",
                                attrs: { href: "/acerca-de" },
                              },
                              [_vm._v("Acerca de")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "nav-item itemnav" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn-nav nav-link btn-como-funciona",
                                attrs: { href: "/como-funciona" },
                              },
                              [_vm._v("Como funciona")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "nav-item itemnav" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn-nav nav-link btn-contacto",
                                attrs: { href: "/contacto" },
                              },
                              [_vm._v("Contacto")]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "navbar-nav justify-content-end" }, [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn-nav nav-link btn-como-funciona",
                          attrs: {
                            href: "https://www.facebook.com/profile.php?id=100074940222842",
                            target: "_blank",
                          },
                        },
                        [
                          _c("img", {
                            attrs: { src: "images/landing/icon2-facebook.png" },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn-nav nav-link btn-como-funciona",
                          attrs: {
                            href: "https://www.instagram.com/lodevuelvo.cl/",
                            target: "_blank",
                          },
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: "images/landing/icon2-instagram.png",
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn-nav nav-link btn-como-funciona",
                          attrs: {
                            href: "https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w",
                            target: "_blank",
                          },
                        },
                        [
                          _c("img", {
                            attrs: { src: "images/landing/icon2-youtube.png" },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "d-xs-block d-lg-none d-md-none" }, [
        _c(
          "nav",
          { staticClass: "navbar navbar-expand-lg navbar-light nav_bottom" },
          [
            _c("div", { staticClass: "container" }, [
              _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
                _c("img", {
                  staticClass: "img-fluid",
                  staticStyle: { position: "relative", top: "-40px" },
                  attrs: {
                    alt: "",
                    src: "images/landing/logo.png",
                    width: "180",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav d-flex" }, [
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "btn-nav nav-link btn-acerca",
                      attrs: { href: "/acerca-de" },
                    },
                    [_vm._v("Acerca de")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "btn-nav nav-link btn-como-funciona",
                      attrs: { href: "/como-funciona" },
                    },
                    [_vm._v("Como funciona")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "btn-nav nav-link btn-contacto",
                      attrs: { href: "/contacto" },
                    },
                    [_vm._v("Contacto")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "ul",
                    { staticStyle: { display: "flex", "list-style": "none" } },
                    [
                      _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn-nav nav-link btn-como-funciona",
                            attrs: {
                              href: "https://www.facebook.com/profile.php?id=100074940222842",
                            },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "images/landing/icon2-facebook.png",
                              },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn-nav nav-link btn-como-funciona",
                            attrs: {
                              href: "https://www.instagram.com/lodevuelvo.cl/",
                            },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "images/landing/icon2-instagram.png",
                              },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn-nav nav-link btn-como-funciona",
                            attrs: {
                              href: "https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w",
                            },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "images/landing/icon2-youtube.png",
                              },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/compontents/nav.vue?vue&type=template&id=b2800518&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand-lg navbar-light nav_top_pc d-none d-md-block d-lg-block",
      },
      [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "router-link",
              { staticClass: "navbar-brand", attrs: { to: "/" } },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  staticStyle: { position: "relative", top: "40px" },
                  attrs: {
                    alt: "",
                    src: "/images/landing/logo.png",
                    width: "180",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "navbar-toggler",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarSupportedContent",
                },
                on: {
                  click: function ($event) {
                    return _vm.toggleMenu()
                  },
                },
              },
              [_c("span", { staticClass: "navbar-toggler-icon" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "collapse navbar-collapse d-flex justify-content-between",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "d-flex justify-content-center",
                    staticStyle: { width: "60%" },
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass: "navbar-nav d-flex flex-row bd-highlight",
                      },
                      [
                        _c(
                          "li",
                          { staticClass: "nav-item itemnav pr-3 pl-3" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn-nav nav-link btn-acerca",
                                attrs: { to: "/acerca-de" },
                              },
                              [_vm._v("Acerca de")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "nav-item itemnav pr-3 pl-3" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "btn-nav nav-link btn-como-funciona",
                                attrs: { to: "/como-funciona" },
                              },
                              [_vm._v("Como funciona")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "nav-item itemnav pr-3 pl-3" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn-nav nav-link btn-contacto",
                                attrs: { to: "/contacto" },
                              },
                              [_vm._v("Contacto")]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
              ]
            ),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand-lg navbar-light nav_top_movil d-xs-block d-md-none d-lg-none",
      },
      [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "router-link",
              { staticClass: "navbar-brand", attrs: { to: "/" } },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    alt: "",
                    src: "images/landing/logo.png",
                    width: "120",
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "navbar-toggler",
                staticStyle: { "background-color": "#04d28c" },
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarSupportedContent",
                },
                on: {
                  click: function ($event) {
                    return _vm.toggleMenu()
                  },
                },
              },
              [_c("span", { staticClass: "navbar-toggler-icon" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "navbarSupportedContent" },
              },
              [
                _c("ul", { staticClass: "navbar-nav" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item itemnav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn-nav nav-link btn-acerca",
                          attrs: { to: "/acerca-de" },
                        },
                        [_vm._v("Acerca de")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item itemnav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn-nav nav-link btn-como-funciona",
                          attrs: { to: "/" },
                        },
                        [_vm._v("Como funciona")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item itemnav" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn-nav nav-link btn-contacto",
                          attrs: { to: "/contacto" },
                        },
                        [_vm._v("Contacto")]
                      ),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticStyle: { display: "flex", "list-style": "none" } },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item " },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn-nav nav-link btn-como-funciona",
                            attrs: {
                              to: "https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w",
                            },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "/images/landing/icon-youtube.png",
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav justify-content-end" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "btn-nav nav-link btn-como-funciona",
            attrs: {
              href: "https://www.facebook.com/profile.php?id=100074940222842",
              target: "_blank",
            },
          },
          [_c("img", { attrs: { src: "/images/landing/icon-facebook.png" } })]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "btn-nav nav-link btn-como-funciona",
            attrs: {
              href: "https://www.instagram.com/lodevuelvo.cl/",
              target: "_blank",
            },
          },
          [_c("img", { attrs: { src: "/images/landing/icon-instagram.png" } })]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "btn-nav nav-link btn-como-funciona",
            attrs: {
              href: "https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w",
              target: "_blank",
            },
          },
          [_c("img", { attrs: { src: "/images/landing/icon-youtube.png" } })]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "btn-nav nav-link btn-como-funciona",
          attrs: {
            href: "https://www.facebook.com/profile.php?id=100074940222842",
          },
        },
        [_c("img", { attrs: { src: "/images/landing/icon-facebook.png" } })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "btn-nav nav-link btn-como-funciona",
          attrs: { href: "https://www.instagram.com/lodevuelvo.cl/" },
        },
        [_c("img", { attrs: { src: "/images/landing/icon-instagram.png" } })]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/maintienda.vue?vue&type=template&id=4d3d494e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("Nav"), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c("Footer")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("LayoutTienda", [
        _c(
          "section",
          { staticClass: "banner1", staticStyle: { overflow: "hidden" } },
          [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row justify-content-center mt-5" }, [
                _c("div", { staticClass: "col-md-7 text-center" }, [
                  _c(
                    "h1",
                    {
                      staticStyle: {
                        color: "#04d28c",
                        "font-size": "3.5rem",
                        "font-weight": "bold",
                      },
                    },
                    [
                      _vm._v(
                        "\n\n                            NO MÁS PRENDAS PERDIDAS\n\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    { staticStyle: { "line-height": "0.9", color: "#fff" } },
                    [
                      _vm._v(
                        "\n\n                            Con nuestro stickers QR\n\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    { staticStyle: { "line-height": "0.9", color: "#fff" } },
                    [
                      _vm._v(
                        "\n\n                            Siempre volverá tu ropa extraviada.\n\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "banner2 mb-5", staticStyle: { overflow: "hidden" } },
          [
            _c("div", { staticClass: "container" }, [
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-md-8 text-center" }, [
                  _c("h1", { staticStyle: { "font-size": "2.1rem" } }, [
                    _vm._v(
                      "\n\n                            CONOCE COMO FUNCIONA\n\n                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("h1", { staticStyle: { "font-size": "2.1rem" } }, [
                    _vm._v("LODEVUELVO.CL"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-1.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/1.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            Selecciona tu kit. Paga en nuestro carro de\n                            compra, elige tu método de despacho y espera que\n                            las etiquetas lleguen al hogar.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-2.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/2.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            Si elegiste etiquetas personalizadas, ingresa\n                            nombre para las etiquetas.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-3.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/3.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            Coloca las etiquetas en la ropa, siguiendo las\n                            instrucciones incluidas en el sobre.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-4.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/4.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            La prenda ya esta habilitada para que sea\n                            reportada en caso de extravío.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-5.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/5.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            Recibirás notificaciones en tu correo electrónico registrado en caso de que alguien reporte tu prenda extraviada.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row mt-4 d-xs-block d-md-none d-lg-none" },
                [
                  _c("div", { staticClass: "col-3 align-self-end" }, [
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/icon-6.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-9" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { alt: "", src: "/images/landing/6.png" },
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n\n                            Te confirmaremos en tu correo electrónico de seguimiento, cuando hayas recuperado tu prenda.\n\n                        "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-none d-md-block d-lg-block" }, [
                _c("div", { staticClass: "row " }, [
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c("div", { staticClass: "col " }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/1.png",
                            width: "110px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        Selecciona tu kit. Paga en nuestro\n                                        carro de compra, elige tu método de\n                                        despacho y espera que las etiquetas\n                                        lleguen al hogar.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/3.png",
                            width: "150px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        Coloca las etiquetas en la ropa,\n                                        siguiendo las instrucciones\n                                        incluidas en el sobre.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/5.png",
                            width: "75px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        Recibirás notificaciones en tu correo electrónico registrado en caso de que alguien reporte tu prenda extraviada.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid mb-4",
                      attrs: { alt: "", src: "/images/landing/pasos.png" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col " }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/2.png",
                            width: "110px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        Si elegiste etiquetas\n                                        personalizadas, ingresa nombre para\n                                        las etiquetas.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col " }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/4.png",
                            width: "110px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        La prenda ya esta habilitada para\n                                        que sea reportada en caso de\n                                        extravío.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col " }, [
                        _c("img", {
                          staticClass: "img-fluid rounded mx-auto d-block",
                          attrs: {
                            alt: "",
                            src: "/images/landing/6.png",
                            width: "125px",
                          },
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        Te confirmaremos en tu correo electrónico de seguimiento, cuando hayas recuperado tu prenda.\n\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "banner3",
            staticStyle: {
              overflow: "hidden",
              "background-color": "#040c0c",
              color: "#FFF",
            },
            attrs: { id: "planes" },
          },
          [
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-6 align-self-center text-center p-3" },
                  [
                    _c(
                      "h1",
                      {
                        staticClass: "text-center h1_movil",
                        staticStyle: { color: "#ffffff !important" },
                      },
                      [
                        _vm._v(
                          "\n                            Avisale a tus amigos y familiares lo genial que\n                            es\n                        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          color: "#04a28d",
                          "font-size": "2.1rem",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            LODEVUELVO.CL\n                        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "d-md-none d-lg-none d-xs-block btn btn-outline-primary btn-compartelo",
                        attrs: {
                          href: "https://api.whatsapp.com/send?text=https://www.lodevuelvo.cl#planes",
                        },
                      },
                      [_vm._v("Compártelo")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "d-none d-md-block d-lg-block btn btn-outline-primary btn-compartelo",
                        attrs: {
                          href: "https://web.whatsapp.com/send?text=https://www.lodevuelvo.cl#planes",
                        },
                      },
                      [_vm._v("Compártelo")]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-6",
                    staticStyle: {
                      "padding-right": "0px!important",
                      "padding-left": "0px!important",
                      "margin-left": "0px!important",
                      "margin-right": "0px!important",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { width: "100%" },
                      attrs: {
                        alt: "Creattiva",
                        src: "/images/landing/section1.png",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-6",
                    staticStyle: {
                      "padding-right": "0px!important",
                      "padding-left": "0px!important",
                      "margin-left": "0px!important",
                      "margin-right": "0px!important",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { width: "100%" },
                      attrs: {
                        alt: "Creattiva",
                        src: "/images/landing/section2.png",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6 align-self-center text-center p-3" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "h1",
                          {
                            staticClass: "text-center",
                            staticStyle: { color: "#fff" },
                          },
                          [
                            _vm._v(
                              "\n                                    PLANES\n                                    "
                            ),
                            _c("small", { staticStyle: { color: "#fff" } }, [
                              _vm._v("(Suscripción anual)"),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass: "text-center",
                            staticStyle: { color: "#fff" },
                          },
                          [
                            _vm._v(
                              "\n                                    Set de 24 etiquetas sin personalizar\n                                "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "precio_span",
                            staticStyle: { color: "#fff" },
                          },
                          [_vm._v("$ 7.990")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-loquiero1",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.seleccionplan(_vm.plan1)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                                    ¡Lo quiero!\n                                "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "pt-3 pb-2",
                          attrs: {
                            src: "/images/landing/puntos_hr.png",
                            width: "100%",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "h4",
                            {
                              staticClass: "text-center",
                              staticStyle: { color: "#fff" },
                            },
                            [
                              _vm._v(
                                "\n                                        Set de 24 etiquetas personalizadas\n                                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "precio_span" }, [
                            _vm._v("$ 10.990"),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-loquiero2",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.seleccionplan(_vm.plan2)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        ¡Lo quiero!\n                                    "
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "banner4",
            staticStyle: {
              overflow: "hidden",
              background:
                "rgba(0,0,0,0) linear-gradient(to right, #04d28c   0, #04746c  100%) repeat scroll 0 0/auto padding-box border-box",
              color: "#FFF",
              "min-height": "340px",
            },
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row pt-3 pb-5" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 align-self-center text-left mt-5 d-none d-md-block d-lg-block",
                  },
                  [
                    _c(
                      "h1",
                      {
                        staticStyle: {
                          "font-size": "3.5rem",
                          color: "#041414",
                          "font-weight": "bold",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            ¿Quieres que tu\n                        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticStyle: {
                          "font-size": "3.5rem",
                          color: "#041414",
                          "font-weight": "bold",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            colegio sea parte\n                        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticStyle: {
                          "font-size": "3.5rem",
                          color: "#041414",
                          "font-weight": "bold",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            de nuestra comunidad?\n                        "
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 align-self-center text-left mt-5 d-xs-block d-md-none d-lg-none",
                  },
                  [
                    _c(
                      "h1",
                      {
                        staticClass: "h1_movil",
                        staticStyle: {
                          color: "#041414",
                          "font-weight": "bold",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            ¿Quieres que tu colegio sea parte de nuestra\n                            comunidad?\n                        "
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6 align-self-center text-center" },
                  [
                    _c(
                      "h1",
                      {
                        staticClass: "text-center",
                        staticStyle: { color: "#fff" },
                      },
                      [_vm._v("Contáctanos aquí")]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid mt-4 img-flecha",
                      staticStyle: {
                        width: "85px",
                        position: "absolute",
                        "z-index": "1",
                        right: "0",
                        top: "-15px",
                      },
                      attrs: {
                        alt: "Creattiva",
                        src: "/images/landing/flecha.png",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-loquiero3 mt-3",
                        attrs: { href: "/contacto" },
                      },
                      [
                        _vm._v(
                          "\n                            Quiero ser parte\n                        "
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);