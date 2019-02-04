(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//配置路由
var routes = [
    // {
    //   path: 'home',
    //   component:HomeComponent,
    // },
    {
        path: '**',
        // component:HomeComponent
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n:host\r\n使用:host伪类选择器，用来选择组件宿主元素中的元素（相对于组件模板内部的元素）\r\n\r\n\r\n\r\n\r\n::ng-deep\r\n\r\nstyle its child component, we can use '::ng-deep':\r\n*/\r\n\r\n\r\n:host ::ng-deep .logo {\r\n  height: 32px;\r\n  background: #333;\r\n  border-radius: 6px;\r\n  margin: 16px;\r\n}\r\n\r\n\r\n:host ::ng-deep .ant-layout-sider-collapsed .nav-text {\r\n  display: none;\r\n}\r\n\r\n\r\n:host ::ng-deep .ant-layout-sider-collapsed .ant-menu-submenu-title:after {\r\n  display: none;\r\n}\r\n\r\n\r\n:host ::ng-deep .ant-layout-sider-collapsed .anticon {\r\n  font-size: 16px;\r\n  margin-left: 8px;\r\n}\r\n\r\n\r\n:host ::ng-deep .trigger {\r\n  font-size: 18px;\r\n  line-height: 64px;\r\n  padding: 0 16px;\r\n  cursor: pointer;\r\n  transition: color .3s;\r\n}\r\n\r\n\r\n:host ::ng-deep .trigger:hover {\r\n  color: #108ee9;\r\n}\r\n\r\n\r\n/*右浮动*/\r\n\r\n\r\n.fr{\r\n    float: right;\r\n    padding-right: 10px;\r\n}\r\n\r\n\r\n/*设置logo*/\r\n\r\n\r\n:host ::ng-deep .logo{\r\n  height: 32px;\r\n  line-height: 32px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n:host ::ng-deep .logo img{\r\n  \r\n    height: 32px;\r\n    float: left;\r\n}\r\n\r\n\r\n:host ::ng-deep .logo span{\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Q0FVQzs7O0FBR0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUEsTUFBTTs7O0FBR047SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOzs7QUFFQSxTQUFTOzs7QUFFVDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOmhvc3Rcclxu5L2/55SoOmhvc3TkvKrnsbvpgInmi6nlmajvvIznlKjmnaXpgInmi6nnu4Tku7blrr/kuLvlhYPntKDkuK3nmoTlhYPntKDvvIjnm7jlr7nkuo7nu4Tku7bmqKHmnb/lhoXpg6jnmoTlhYPntKDvvIlcclxuXHJcblxyXG5cclxuXHJcbjo6bmctZGVlcFxyXG5cclxuc3R5bGUgaXRzIGNoaWxkIGNvbXBvbmVudCwgd2UgY2FuIHVzZSAnOjpuZy1kZWVwJzpcclxuKi9cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxvZ28ge1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW46IDE2cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQgLm5hdi10ZXh0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlOmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkIC5hbnRpY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50cmlnZ2VyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudHJpZ2dlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMxMDhlZTk7XHJcbn1cclxuXHJcbi8q5Y+z5rWu5YqoKi9cclxuXHJcblxyXG4uZnJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKuiuvue9rmxvZ28qL1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5sb2dve1xyXG4gIGhlaWdodDogMzJweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxvZ28gaW1ne1xyXG4gIFxyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5sb2dvIHNwYW57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  \n  <a routerLink=\"/home\" routerLinkActive=\"active\">首页</a>\n  <a routerLink=\"/shop\" routerLinkActive=\"active\">商铺</a>\n  <a routerLink=\"/product\" routerLinkActive=\"active\">商品</a>\n  <a routerLink=\"/user\" routerLinkActive=\"active\">用户</a>\n</div> -->\n\n\n\n\n\n\n<nz-layout>\n\n  <!-- 侧边栏 -->\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"null\">\n    <div class=\"logo\">\n        <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n        <span class=\"logo_title\">Angular后台管理系统</span>\n    </div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"isCollapsed?'vertical':'inline'\">\n      <li nz-submenu>\n        <span title><i class=\"anticon anticon-user\"></i><span class=\"nav-text\">用户管理</span></span>\n        <ul>\n          <li nz-menu-item> <a routerLink=\"/user/list\" routerLinkActive=\"active\">用户列表</a></li>\n          <li nz-menu-item><a routerLink=\"/user/vip\" routerLinkActive=\"active\">Vip用户</a></li>         \n        </ul>\n      </li>\n      <li nz-submenu>\n        <span title><i class=\"anticon anticon-team\"></i><span class=\"nav-text\">Team</span></span>\n        <ul>\n          <li nz-menu-item>Team 1</li>\n          <li nz-menu-item>Team 2</li>\n        </ul>\n      </li>\n      <li nz-menu-item><span><i class=\"anticon anticon-file\"></i><span class=\"nav-text\">File</span></span></li>\n    </ul>\n  </nz-sider>\n  <nz-layout>\n\n    <!-- 头部区域 -->\n    <nz-header style=\"background: #fff; padding:0;\">\n      <i class=\"anticon trigger\" [class.anticon-menu-fold]=\"!isCollapsed\" [class.anticon-menu-unfold]=\"isCollapsed\" (click)=\"isCollapsed=!isCollapsed\"></i>\n\n      <nz-dropdown class=\"fr\">\n          <a class=\"ant-dropdown-link\" nz-dropdown>\n           管理员<i class=\"anticon anticon-down\"></i>\n          </a>\n          <ul nz-menu>\n            <li nz-menu-item>\n              <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"#\">退出</a>\n            </li>\n           \n          </ul>\n        </nz-dropdown>\n\n    </nz-header>\n\n    <!-- 内容区域 -->\n    <nz-content style=\"margin:0 16px;\">\n      <!-- 历史导航 -->\n      <nz-breadcrumb style=\"margin:12px 0;\">\n        <nz-breadcrumb-item>User</nz-breadcrumb-item>\n        <nz-breadcrumb-item>Bill</nz-breadcrumb-item>\n      </nz-breadcrumb>\n\n      <!-- 右侧内容区域 -->\n\n      <div style=\"padding:24px; background: #fff; min-height: 360px;\">\n      \n          <router-outlet></router-outlet>\n          \n\n      </div>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Ant Design ©2017 Implement By Angular</nz-footer>\n  </nz-layout>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-project';
        this.isCollapsed = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);











Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\angular-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map