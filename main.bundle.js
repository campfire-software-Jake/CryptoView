webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<app-coinlist></app-coinlist>\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
        // @Pipe({name: 'keys' })
        // export class KeysPipe implements PipeTransform {
        //   transform(value, args:string[]) : any {
        //     let keys = [];
        //     for (let key in value) {
        //       keys.push(key);
        //     }
        //     return keys;
        //   }
        // }
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coinlist_coinlist_module__ = __webpack_require__("../../../../../src/app/coinlist/coinlist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__coinlist_coinlist_module__["a" /* CoinlistModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/coinlist/coinlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n.rows {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    background-color: #353535;\r\n    margin: 0 -360px 0 -360px;\r\n    padding: 0;\r\n}\r\n.sortButtonLayout {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.sort {\r\n    padding: 0.4rem;\r\n    width: 6rem;\r\n    height: 3rem;\r\n    color: #e0e0e6;\r\n    border: 1px solid rgba(224, 224, 230, 0.5);\r\n    font-size: 0.7rem;\r\n    font-family: \"Roboto\";\r\n    font-weight: 500;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n}\r\n.group1, .group2, .group3, .group4, .group5, .group6 {\r\n  float: left;\r\n}\r\n.price, .volume, .twentyFourHour, .sevenDay, .oneHour {\r\n  margin-right: 12px;\r\n}\r\n.greenHover, .redHover {\r\n  transition: all 0.2s ease-in-out;\r\n  background-color: #353535;\r\n  font-weight: 700;\r\n}\r\n.greenHover:hover {\r\n  background-color: rgba(51, 204, 0, 0.5);\r\n  border: 2px solid #33FF00;\r\n}\r\n.redHover:hover {\r\n  background-color: rgba(251, 51, 0, 0.5);\r\n  border: 2px solid #FF3300;\r\n}\r\n.price:not(:last-child),\r\n.volume:not(:last-child), \r\n.twentyFourHour:not(:last-child), \r\n.sevenDay:not(:last-child), \r\n.oneHour:not(:last-child), \r\n.cap:not(:last-child) {\r\n  border-right: none;\r\n}\r\n.sortDisplayContainer {\r\n    width: 100%;\r\n    height: 3rem;\r\n}\r\n.currentSort {\r\n    text-align: center;\r\n}\r\n.currentSort h2 {\r\n    margin: 0 auto;\r\n    font-family: 'Roboto';\r\n    color: #e0e0e6;\r\n    font-size: 2em;\r\n    font-weight: 400;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.rows #img {\r\n    max-width: 960px;\r\n}\r\n#img {\r\n    margin: 3rem auto 2rem;\r\n    text-align: center;\r\n}\r\n#img .item {\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 150px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/card_texture.png") + ");\r\n    border: 1px solid rgba(10, 10, 20, 0.25);\r\n    border-radius: 2px;\r\n    box-shadow: 3px 3px 4px -1px rgba(31, 31, 31, 0.7);\r\n    overflow: hidden;\r\n    margin: 13px 9px;\r\n}\r\n#img .item:hover .icon {\r\n    -webkit-transform: rotate(-14deg);\r\n            transform: rotate(-14deg);\r\n    -webkit-transform-origin: 50% 40%;\r\n            transform-origin: 50% 40%;\r\n}\r\n#img .item:hover .name {\r\n    color: #202020;\r\n}\r\n#img .icon {\r\n    margin-top: 8px;\r\n    font-size: 3.2rem;\r\n    color: #202020;\r\n}\r\n#img .name {\r\n    font-family: 'Roboto';\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n#img .key {\r\n    margin-top: 10px;\r\n}\r\n#img .key input {\r\n    width: 100%;\r\n    height: 1.4rem;\r\n    margin: 15px auto 5px auto;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: monospace;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    -webkit-font-smoothing: antialiased;\r\n    color: forestgreen;\r\n    background: none;\r\n    border: none;\r\n}\r\n#img .item i,\r\n#img .item:hover .key input,\r\n#img .icon,\r\n#img .name,\r\na {\r\n    transition: all 0.3s;\r\n}\r\ni {\r\n    display: block;\r\n    height: 59px;\r\n    color: #333;\r\n}\r\n@media screen and (min-width: 1024px) {\r\n    .rows img {\r\n        width: calc(100%/6);\r\n        height: calc(100%/6);\r\n    }\r\n}\r\n@media screen and (min-width: 769px) and (max-width: 1024px) {\r\n    .rows img {\r\n        width: calc(100%/4);\r\n        height: calc(100%/4);\r\n    }\r\n}\r\n@media screen and (min-width: 481px) and (max-width: 768px) {\r\n    .rows img {\r\n        width: calc(100%/3);\r\n        height: calc(100%/3);\r\n    }\r\n}\r\n@media screen and (min-width: 321px) and (max-width: 480px) {\r\n    .rows img {\r\n        width: calc(100%/2);\r\n        height: calc(100%/2);\r\n    }\r\n}\r\n@media screen and (max-width: 320px) {\r\n    .rows img {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n/*------------------COIN FONTS AND HOVER EFFECTS------------------ */\r\n\r\n@font-face {\r\n    font-family: \"cryptocoins-icons\";\r\n    src: url(" + __webpack_require__("../../../../../src/app/coinlist/cryptocoins-icons.eot") + ");\r\n    src:\r\n    /*url('./cryptocoins-icons.eot?#iefix') format('eot'),*/\r\n    /*url('./cryptocoins-icons.woff2') format('woff2'),*/\r\n    \r\n    url(" + __webpack_require__("../../../../../src/app/coinlist/cryptocoins-icons.woff") + ") format('woff'), url(" + __webpack_require__("../../../../../src/app/coinlist/cryptocoins-icons.ttf") + ") format('truetype');\r\n    /*url('./cryptocoins-icons.svg#cryptocoins-icons') format('svg');*/\r\n}\r\n@font-face {\r\n    font-family: \"icomoon\";\r\n    src: url(" + __webpack_require__("../../../../../src/app/coinlist/icomoon.eot") + ");\r\n    src: url(" + __webpack_require__("../../../../../src/app/coinlist/icomoon.woff") + ") format('woff'), url(" + __webpack_require__("../../../../../src/app/coinlist/icomoon.ttf") + ") format('truetype');\r\n}\r\n/* .cc:before { */\r\n\r\n[class*=\"cc-\"]::before {\r\n    font-family: \"cryptocoins-icons\", \"icomoon\";\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: normal;\r\n    text-decoration: none;\r\n    text-transform: none;\r\n}\r\n.cc-ADC-alt:before {\r\n    content: \"\\E001\";\r\n}\r\n.cc-ADC:before {\r\n    content: \"\\E002\";\r\n}\r\n.cc-AEON-alt:before {\r\n    content: \"\\E003\";\r\n}\r\n.cc-AEON:before {\r\n    content: \"\\E004\";\r\n}\r\n.cc-AMP-alt:before {\r\n    content: \"\\E005\";\r\n}\r\n.cc-AMP:before {\r\n    content: \"\\E006\";\r\n}\r\n.cc-ANC-alt:before {\r\n    content: \"\\E007\";\r\n}\r\n.cc-ANC:before {\r\n    content: \"\\E008\";\r\n}\r\n.cc-ARCH-alt:before {\r\n    content: \"\\E009\";\r\n}\r\n.cc-ARCH:before {\r\n    content: \"\\E00A\";\r\n}\r\n.cc-ARDR-alt:before {\r\n    content: \"\\E00B\";\r\n}\r\n.cc-ARDR:before {\r\n    content: \"\\E00C\";\r\n}\r\n.cc-AUR-alt:before {\r\n    content: \"\\E00D\";\r\n}\r\n.cc-AUR:before {\r\n    content: \"\\E00E\";\r\n}\r\n.cc-BANX-alt:before {\r\n    content: \"\\E00F\";\r\n}\r\n.cc-BANX:before {\r\n    content: \"\\E010\";\r\n}\r\n.cc-BAT-alt:before {\r\n    content: \"\\E011\";\r\n}\r\n.cc-BAT:before {\r\n    content: \"\\E012\";\r\n}\r\n.cc-BAY-alt:before {\r\n    content: \"\\E013\";\r\n}\r\n.cc-BAY:before {\r\n    content: \"\\E014\";\r\n}\r\n.cc-BC-alt:before {\r\n    content: \"\\E015\";\r\n}\r\n.cc-BC:before {\r\n    content: \"\\E016\";\r\n}\r\n.cc-BCN-alt:before {\r\n    content: \"\\E017\";\r\n}\r\n.cc-BCN:before {\r\n    content: \"\\E018\";\r\n}\r\n.cc-BFT-alt:before {\r\n    content: \"\\E019\";\r\n}\r\n.cc-BFT:before {\r\n    content: \"\\E01A\";\r\n}\r\n.cc-BRK-alt:before {\r\n    content: \"\\E01B\";\r\n}\r\n.cc-BRK:before {\r\n    content: \"\\E01C\";\r\n}\r\n.cc-BRX-alt:before {\r\n    content: \"\\E01D\";\r\n}\r\n.cc-BRX:before {\r\n    content: \"\\E01E\";\r\n}\r\n.cc-BCH:before {\r\n    content: \"\\E022\";\r\n}\r\n.cc-BSD-alt:before {\r\n    content: \"\\E01F\";\r\n}\r\n.cc-BSD:before {\r\n    content: \"\\E020\";\r\n}\r\n.cc-BTA:before {\r\n    content: \"\\E021\";\r\n}\r\n.cc-BTC-alt:before {\r\n    content: \"\\E022\";\r\n}\r\n.cc-BTC:before {\r\n    content: \"\\E023\";\r\n}\r\n.cc-BTCD-alt:before {\r\n    content: \"\\E024\";\r\n}\r\n.cc-BTCD:before {\r\n    content: \"\\E025\";\r\n}\r\n.cc-BTS-alt:before {\r\n    content: \"\\E026\";\r\n}\r\n.cc-BTS:before {\r\n    content: \"\\E027\";\r\n}\r\n.cc-CLAM-alt:before {\r\n    content: \"\\E028\";\r\n}\r\n.cc-CLAM:before {\r\n    content: \"\\E029\";\r\n}\r\n.cc-CLOAK-alt:before {\r\n    content: \"\\E02A\";\r\n}\r\n.cc-CLOAK:before {\r\n    content: \"\\E02B\";\r\n}\r\n.cc-DAO-alt:before {\r\n    content: \"\\E02C\";\r\n}\r\n.cc-DAO:before {\r\n    content: \"\\E02D\";\r\n}\r\n.cc-DASH-alt:before {\r\n    content: \"\\E02E\";\r\n}\r\n.cc-DASH:before {\r\n    content: \"\\E02F\";\r\n}\r\n.cc-DCR-alt:before {\r\n    content: \"\\E030\";\r\n}\r\n.cc-DCR:before {\r\n    content: \"\\E031\";\r\n}\r\n.cc-DGB-alt:before {\r\n    content: \"\\E032\";\r\n}\r\n.cc-DGB:before {\r\n    content: \"\\E033\";\r\n}\r\n.cc-DGD:before {\r\n    content: \"\\E034\";\r\n}\r\n.cc-DGX:before {\r\n    content: \"\\E035\";\r\n}\r\n.cc-DMD-alt:before {\r\n    content: \"\\E036\";\r\n}\r\n.cc-DMD:before {\r\n    content: \"\\E037\";\r\n}\r\n.cc-DOGE-alt:before {\r\n    content: \"\\E038\";\r\n}\r\n.cc-DOGE:before {\r\n    content: \"\\E039\";\r\n}\r\n.cc-EMC-alt:before {\r\n    content: \"\\E03A\";\r\n}\r\n.cc-EMC:before {\r\n    content: \"\\E03B\";\r\n}\r\n.cc-ERC-alt:before {\r\n    content: \"\\E03C\";\r\n}\r\n.cc-ERC:before {\r\n    content: \"\\E03D\";\r\n}\r\n.cc-ETC-alt:before {\r\n    content: \"\\E03E\";\r\n}\r\n.cc-ETC:before {\r\n    content: \"\\E03F\";\r\n}\r\n.cc-ETH-alt:before {\r\n    content: \"\\E040\";\r\n}\r\n.cc-ETH:before {\r\n    content: \"\\E041\";\r\n}\r\n.cc-FC2-alt:before {\r\n    content: \"\\E042\";\r\n}\r\n.cc-FC2:before {\r\n    content: \"\\E043\";\r\n}\r\n.cc-FCT-alt:before {\r\n    content: \"\\E044\";\r\n}\r\n.cc-FCT:before {\r\n    content: \"\\E045\";\r\n}\r\n.cc-FLO-alt:before {\r\n    content: \"\\E046\";\r\n}\r\n.cc-FLO:before {\r\n    content: \"\\E047\";\r\n}\r\n.cc-FRK-alt:before {\r\n    content: \"\\E048\";\r\n}\r\n.cc-FRK:before {\r\n    content: \"\\E049\";\r\n}\r\n.cc-FTC-alt:before {\r\n    content: \"\\E04A\";\r\n}\r\n.cc-FTC:before {\r\n    content: \"\\E04B\";\r\n}\r\n.cc-GAME-alt:before {\r\n    content: \"\\E04C\";\r\n}\r\n.cc-GAME:before {\r\n    content: \"\\E04D\";\r\n}\r\n.cc-GDC-alt:before {\r\n    content: \"\\E04E\";\r\n}\r\n.cc-GDC:before {\r\n    content: \"\\E04F\";\r\n}\r\n.cc-GEMZ-alt:before {\r\n    content: \"\\E050\";\r\n}\r\n.cc-GEMZ:before {\r\n    content: \"\\E051\";\r\n}\r\n.cc-GLD-alt:before {\r\n    content: \"\\E052\";\r\n}\r\n.cc-GLD:before {\r\n    content: \"\\E053\";\r\n}\r\n.cc-GNO-alt:before {\r\n    content: \"\\E054\";\r\n}\r\n.cc-GNO:before {\r\n    content: \"\\E055\";\r\n}\r\n.cc-GNT-alt:before {\r\n    content: \"\\E056\";\r\n}\r\n.cc-GNT:before {\r\n    content: \"\\E057\";\r\n}\r\n.cc-GRC-alt:before {\r\n    content: \"\\E058\";\r\n}\r\n.cc-GRC:before {\r\n    content: \"\\E059\";\r\n}\r\n.cc-GRS:before {\r\n    content: \"\\E05A\";\r\n}\r\n.cc-HEAT-alt:before {\r\n    content: \"\\E05B\";\r\n}\r\n.cc-HEAT:before {\r\n    content: \"\\E05C\";\r\n}\r\n.cc-ICN-alt:before {\r\n    content: \"\\E05D\";\r\n}\r\n.cc-ICN:before {\r\n    content: \"\\E05E\";\r\n}\r\n.cc-IFC-alt:before {\r\n    content: \"\\E05F\";\r\n}\r\n.cc-IFC:before {\r\n    content: \"\\E060\";\r\n}\r\n.cc-INCNT-alt:before {\r\n    content: \"\\E061\";\r\n}\r\n.cc-INCNT:before {\r\n    content: \"\\E062\";\r\n}\r\n.cc-IOC-alt:before {\r\n    content: \"\\E063\";\r\n}\r\n.cc-IOC:before {\r\n    content: \"\\E064\";\r\n}\r\n.cc-MIOTA-alt:before {\r\n    content: \"\\E065\";\r\n}\r\n.cc-MIOTA:before {\r\n    content: \"\\E066\";\r\n}\r\n.cc-JBS-alt:before {\r\n    content: \"\\E067\";\r\n}\r\n.cc-JBS:before {\r\n    content: \"\\E068\";\r\n}\r\n.cc-KMD-alt:before {\r\n    content: \"\\E069\";\r\n}\r\n.cc-KMD:before {\r\n    content: \"\\E06A\";\r\n}\r\n.cc-KOBO:before {\r\n    content: \"\\E06B\";\r\n}\r\n.cc-KORE-alt:before {\r\n    content: \"\\E06C\";\r\n}\r\n.cc-KORE:before {\r\n    content: \"\\E06D\";\r\n}\r\n.cc-LBC-alt:before {\r\n    content: \"\\E06E\";\r\n}\r\n.cc-LBC:before {\r\n    content: \"\\E06F\";\r\n}\r\n.cc-LDOGE-alt:before {\r\n    content: \"\\E070\";\r\n}\r\n.cc-LDOGE:before {\r\n    content: \"\\E071\";\r\n}\r\n.cc-LISK-alt:before {\r\n    content: \"\\E072\";\r\n}\r\n.cc-LISK:before {\r\n    content: \"\\E073\";\r\n}\r\n.cc-LTC-alt:before {\r\n    content: \"\\E074\";\r\n}\r\n.cc-LTC:before {\r\n    content: \"\\E075\";\r\n}\r\n.cc-MAID-alt:before {\r\n    content: \"\\E076\";\r\n}\r\n.cc-MAID:before {\r\n    content: \"\\E077\";\r\n}\r\n.cc-MINT-alt:before {\r\n    content: \"\\E078\";\r\n}\r\n.cc-MINT:before {\r\n    content: \"\\E079\";\r\n}\r\n.cc-MONA-alt:before {\r\n    content: \"\\E07A\";\r\n}\r\n.cc-MONA:before {\r\n    content: \"\\E07B\";\r\n}\r\n.cc-MRC:before {\r\n    content: \"\\E07C\";\r\n}\r\n.cc-MSC-alt:before {\r\n    content: \"\\E07D\";\r\n}\r\n.cc-MSC:before {\r\n    content: \"\\E07E\";\r\n}\r\n.cc-MTR-alt:before {\r\n    content: \"\\E07F\";\r\n}\r\n.cc-MTR:before {\r\n    content: \"\\E080\";\r\n}\r\n.cc-MUE-alt:before {\r\n    content: \"\\E081\";\r\n}\r\n.cc-MUE:before {\r\n    content: \"\\E082\";\r\n}\r\n.cc-NBT:before {\r\n    content: \"\\E083\";\r\n}\r\n.cc-NEOS-alt:before {\r\n    content: \"\\E084\";\r\n}\r\n.cc-NEOS:before {\r\n    content: \"\\E085\";\r\n}\r\n.cc-NEU-alt:before {\r\n    content: \"\\E086\";\r\n}\r\n.cc-NEU:before {\r\n    content: \"\\E087\";\r\n}\r\n.cc-NLG-alt:before {\r\n    content: \"\\E088\";\r\n}\r\n.cc-NLG:before {\r\n    content: \"\\E089\";\r\n}\r\n.cc-NMC-alt:before {\r\n    content: \"\\E08A\";\r\n}\r\n.cc-NMC:before {\r\n    content: \"\\E08B\";\r\n}\r\n.cc-NOTE-alt:before {\r\n    content: \"\\E08C\";\r\n}\r\n.cc-NOTE:before {\r\n    content: \"\\E08D\";\r\n}\r\n.cc-NVC-alt:before {\r\n    content: \"\\E08E\";\r\n}\r\n.cc-NVC:before {\r\n    content: \"\\E08F\";\r\n}\r\n.cc-NXT-alt:before {\r\n    content: \"\\E090\";\r\n}\r\n.cc-NXT:before {\r\n    content: \"\\E091\";\r\n}\r\n.cc-OK-alt:before {\r\n    content: \"\\E092\";\r\n}\r\n.cc-OK:before {\r\n    content: \"\\E093\";\r\n}\r\n.cc-OMNI-alt:before {\r\n    content: \"\\E094\";\r\n}\r\n.cc-OMNI:before {\r\n    content: \"\\E095\";\r\n}\r\n.cc-OPAL-alt:before {\r\n    content: \"\\E096\";\r\n}\r\n.cc-OPAL:before {\r\n    content: \"\\E097\";\r\n}\r\n.cc-PIGGY-alt:before {\r\n    content: \"\\E098\";\r\n}\r\n.cc-PIGGY:before {\r\n    content: \"\\E099\";\r\n}\r\n.cc-PINK-alt:before {\r\n    content: \"\\E09A\";\r\n}\r\n.cc-PINK:before {\r\n    content: \"\\E09B\";\r\n}\r\n.cc-PIVX-alt:before {\r\n    content: \"\\E09C\";\r\n}\r\n.cc-PIVX:before {\r\n    content: \"\\E09D\";\r\n}\r\n.cc-POT-alt:before {\r\n    content: \"\\E09E\";\r\n}\r\n.cc-POT:before {\r\n    content: \"\\E09F\";\r\n}\r\n.cc-PPC-alt:before {\r\n    content: \"\\E0A0\";\r\n}\r\n.cc-PPC:before {\r\n    content: \"\\E0A1\";\r\n}\r\n.cc-QRK-alt:before {\r\n    content: \"\\E0A2\";\r\n}\r\n.cc-QRK:before {\r\n    content: \"\\E0A3\";\r\n}\r\n.cc-RADS-alt:before {\r\n    content: \"\\E0A4\";\r\n}\r\n.cc-RADS:before {\r\n    content: \"\\E0A5\";\r\n}\r\n.cc-RBIES-alt:before {\r\n    content: \"\\E0A6\";\r\n}\r\n.cc-RBIES:before {\r\n    content: \"\\E0A7\";\r\n}\r\n.cc-RBT-alt:before {\r\n    content: \"\\E0A8\";\r\n}\r\n.cc-RBT:before {\r\n    content: \"\\E0A9\";\r\n}\r\n.cc-RBY-alt:before {\r\n    content: \"\\E0AA\";\r\n}\r\n.cc-RBY:before {\r\n    content: \"\\E0AB\";\r\n}\r\n.cc-RDD-alt:before {\r\n    content: \"\\E0AC\";\r\n}\r\n.cc-RDD:before {\r\n    content: \"\\E0AD\";\r\n}\r\n.cc-REP-alt:before {\r\n    content: \"\\E0AE\";\r\n}\r\n.cc-REP:before {\r\n    content: \"\\E0AF\";\r\n}\r\n.cc-RISE-alt:before {\r\n    content: \"\\E0B0\";\r\n}\r\n.cc-RISE:before {\r\n    content: \"\\E0B1\";\r\n}\r\n.cc-SAR-alt:before {\r\n    content: \"\\E0B2\";\r\n}\r\n.cc-SAR:before {\r\n    content: \"\\E0B3\";\r\n}\r\n.cc-SCOT-alt:before {\r\n    content: \"\\E0B4\";\r\n}\r\n.cc-SCOT:before {\r\n    content: \"\\E0B5\";\r\n}\r\n.cc-SDC-alt:before {\r\n    content: \"\\E0B6\";\r\n}\r\n.cc-SDC:before {\r\n    content: \"\\E0B7\";\r\n}\r\n.cc-SIA-alt:before {\r\n    content: \"\\E0B8\";\r\n}\r\n.cc-SIA:before {\r\n    content: \"\\E0B9\";\r\n}\r\n.cc-SJCX-alt:before {\r\n    content: \"\\E0BA\";\r\n}\r\n.cc-SJCX:before {\r\n    content: \"\\E0BB\";\r\n}\r\n.cc-SLG-alt:before {\r\n    content: \"\\E0BC\";\r\n}\r\n.cc-SLG:before {\r\n    content: \"\\E0BD\";\r\n}\r\n.cc-SLS-alt:before {\r\n    content: \"\\E0BE\";\r\n}\r\n.cc-SLS:before {\r\n    content: \"\\E0BF\";\r\n}\r\n.cc-SNRG-alt:before {\r\n    content: \"\\E0C0\";\r\n}\r\n.cc-SNRG:before {\r\n    content: \"\\E0C1\";\r\n}\r\n.cc-START-alt:before {\r\n    content: \"\\E0C2\";\r\n}\r\n.cc-START:before {\r\n    content: \"\\E0C3\";\r\n}\r\n.cc-STEEM-alt:before {\r\n    content: \"\\E0C4\";\r\n}\r\n.cc-STEEM:before {\r\n    content: \"\\E0C5\";\r\n}\r\n.cc-STR-alt:before {\r\n    content: \"\\E0C6\";\r\n}\r\n.cc-STR:before {\r\n    content: \"\\E0C7\";\r\n}\r\n.cc-STRAT-alt:before {\r\n    content: \"\\E0C8\";\r\n}\r\n.cc-STRAT:before {\r\n    content: \"\\E0C9\";\r\n}\r\n.cc-SWIFT-alt:before {\r\n    content: \"\\E0CA\";\r\n}\r\n.cc-SWIFT:before {\r\n    content: \"\\E0CB\";\r\n}\r\n.cc-SYNC-alt:before {\r\n    content: \"\\E0CC\";\r\n}\r\n.cc-SYNC:before {\r\n    content: \"\\E0CD\";\r\n}\r\n.cc-SYS-alt:before {\r\n    content: \"\\E0CE\";\r\n}\r\n.cc-SYS:before {\r\n    content: \"\\E0CF\";\r\n}\r\n.cc-TRIG-alt:before {\r\n    content: \"\\E0D0\";\r\n}\r\n.cc-TRIG:before {\r\n    content: \"\\E0D1\";\r\n}\r\n.cc-TX-alt:before {\r\n    content: \"\\E0D2\";\r\n}\r\n.cc-TX:before {\r\n    content: \"\\E0D3\";\r\n}\r\n.cc-UBQ-alt:before {\r\n    content: \"\\E0D4\";\r\n}\r\n.cc-UBQ:before {\r\n    content: \"\\E0D5\";\r\n}\r\n.cc-UNITY-alt:before {\r\n    content: \"\\E0D6\";\r\n}\r\n.cc-UNITY:before {\r\n    content: \"\\E0D7\";\r\n}\r\n.cc-USDT-alt:before {\r\n    content: \"\\E0D8\";\r\n}\r\n.cc-USDT:before {\r\n    content: \"\\E0D9\";\r\n}\r\n.cc-VIOR-alt:before {\r\n    content: \"\\E0DA\";\r\n}\r\n.cc-VIOR:before {\r\n    content: \"\\E0DB\";\r\n}\r\n.cc-VNL-alt:before {\r\n    content: \"\\E0DC\";\r\n}\r\n.cc-VNL:before {\r\n    content: \"\\E0DD\";\r\n}\r\n.cc-VPN-alt:before {\r\n    content: \"\\E0DE\";\r\n}\r\n.cc-VPN:before {\r\n    content: \"\\E0DF\";\r\n}\r\n.cc-VRC-alt:before {\r\n    content: \"\\E0E0\";\r\n}\r\n.cc-VRC:before {\r\n    content: \"\\E0E1\";\r\n}\r\n.cc-VTC-alt:before {\r\n    content: \"\\E0E2\";\r\n}\r\n.cc-VTC:before {\r\n    content: \"\\E0E3\";\r\n}\r\n.cc-WAVES-alt:before {\r\n    content: \"\\E0E4\";\r\n}\r\n.cc-WAVES:before {\r\n    content: \"\\E0E5\";\r\n}\r\n.cc-XAI-alt:before {\r\n    content: \"\\E0E6\";\r\n}\r\n.cc-XAI:before {\r\n    content: \"\\E0E7\";\r\n}\r\n.cc-XBS-alt:before {\r\n    content: \"\\E0E8\";\r\n}\r\n.cc-XBS:before {\r\n    content: \"\\E0E9\";\r\n}\r\n.cc-XCP-alt:before {\r\n    content: \"\\E0EA\";\r\n}\r\n.cc-XCP:before {\r\n    content: \"\\E0EB\";\r\n}\r\n.cc-XEM-alt:before {\r\n    content: \"\\E0EC\";\r\n}\r\n.cc-XEM:before {\r\n    content: \"\\E0ED\";\r\n}\r\n.cc-XMR:before {\r\n    content: \"\\E0EE\";\r\n}\r\n.cc-XPM-alt:before {\r\n    content: \"\\E0EF\";\r\n}\r\n.cc-XPM:before {\r\n    content: \"\\E0F0\";\r\n}\r\n.cc-XRP-alt:before {\r\n    content: \"\\E0F1\";\r\n}\r\n.cc-XRP:before {\r\n    content: \"\\E0F2\";\r\n}\r\n.cc-XVG-alt:before {\r\n    content: \"\\E0F3\";\r\n}\r\n.cc-XVG:before {\r\n    content: \"\\E0F4\";\r\n}\r\n.cc-YBC-alt:before {\r\n    content: \"\\E0F5\";\r\n}\r\n.cc-YBC:before {\r\n    content: \"\\E0F6\";\r\n}\r\n.cc-ZEC-alt:before {\r\n    content: \"\\E0F7\";\r\n}\r\n.cc-ZEC:before {\r\n    content: \"\\E0F8\";\r\n}\r\n.cc-ZEIT-alt:before {\r\n    content: \"\\E0F9\";\r\n}\r\n.cc-ZEIT:before {\r\n    content: \"\\E0FA\";\r\n}\r\n.cc-BCC:before {\r\n    content: \"\\E901\";\r\n}\r\n.cc-LSK:before {\r\n    content: \"\\E902\";\r\n}\r\n.cc-NEO:before {\r\n    content: \"\\E903\";\r\n}\r\n.cc-OMG:before {\r\n    content: \"\\E905\";\r\n}\r\n.cc-QTUM:before {\r\n    content: \"\\E906\";\r\n}\r\n#img .item:hover i.cc-ARCH,\r\n#img .item:hover i.cc-ARCH-alt {\r\n    color: #002652;\r\n}\r\n#img .item:hover i.cc-BANX,\r\n#img .item:hover i.cc-BANX-alt {\r\n    color: #225BA6;\r\n}\r\n#img .item:hover i.cc-BC,\r\n#img .item:hover i.cc-BC-alt {\r\n    color: #202121;\r\n}\r\n#img .item:hover i.cc-BCH {\r\n    color: #0f931A;\r\n}\r\n#img .item:hover i.cc-BCN,\r\n#img .item:hover i.cc-BCN-alt {\r\n    color: #964F51;\r\n}\r\n#img .item:hover i.cc-BTC,\r\n#img .item:hover i.cc-BTC-alt {\r\n    color: #F7931A;\r\n}\r\n#img .item:hover i.cc-BTCD,\r\n#img .item:hover i.cc-BTCD-alt {\r\n    color: #2A72DC;\r\n}\r\n#img .item:hover i.cc-BTS,\r\n#img .item:hover i.cc-BTS-alt {\r\n    color: #03A9E0;\r\n}\r\n#img .item:hover i.cc-DASH,\r\n#img .item:hover i.cc-DASH-alt {\r\n    color: #1c75bc;\r\n}\r\n#img .item:hover i.cc-DOGE,\r\n#img .item:hover i.cc-DOGE-alt {\r\n    color: #BA9F33;\r\n}\r\n#img .item:hover i.cc-FC2,\r\n#img .item:hover i.cc-FC2-alt {\r\n    color: #040405;\r\n}\r\n#img .item:hover i.cc-FTC,\r\n#img .item:hover i.cc-FTC-alt {\r\n    color: #679EF1;\r\n}\r\n#img .item:hover i.cc-GEMZ,\r\n#img .item:hover i.cc-GEMZ-alt {\r\n    color: #e86060;\r\n}\r\n#img .item:hover i.cc-GRC,\r\n#img .item:hover i.cc-GRC-alt {\r\n    color: #88A13C;\r\n}\r\n#img .item:hover i.cc-IFC,\r\n#img .item:hover i.cc-IFC-alt {\r\n    color: #ed272d;\r\n}\r\n#img .item:hover i.cc-KORE,\r\n#img .item:hover i.cc-KORE-alt {\r\n    color: #DF4124;\r\n}\r\n#img .item:hover i.cc-LTC,\r\n#img .item:hover i.cc-LTC-alt {\r\n    color: #838383;\r\n}\r\n#img .item:hover i.cc-MAID,\r\n#img .item:hover i.cc-MAID-alt {\r\n    color: #5492D6;\r\n}\r\n#img .item:hover i.cc-MSC,\r\n#img .item:hover i.cc-MSC-alt {\r\n    color: #1D4983;\r\n}\r\n#img .item:hover i.cc-NBT {\r\n    color: #FFC93D;\r\n}\r\n#img .item:hover i.cc-NMC,\r\n#img .item:hover i.cc-NMC-alt {\r\n    color: #6787B7;\r\n}\r\n#img .item:hover i.cc-NOTE,\r\n#img .item:hover i.cc-NOTE-alt {\r\n    color: #42daff;\r\n}\r\n#img .item:hover i.cc-NXT,\r\n#img .item:hover i.cc-NXT-alt {\r\n    color: #008FBB;\r\n}\r\n#img .item:hover i.cc-OPAL,\r\n#img .item:hover i.cc-OPAL-alt {\r\n    color: #7193AA;\r\n}\r\n#img .item:hover i.cc-POT,\r\n#img .item:hover i.cc-POT-alt {\r\n    color: #105B2F;\r\n}\r\n#img .item:hover i.cc-PPC,\r\n#img .item:hover i.cc-PPC-alt {\r\n    color: #3FA30C;\r\n}\r\n#img .item:hover i.cc-QRK,\r\n#img .item:hover i.cc-QRK-alt {\r\n    color: #22AABF;\r\n}\r\n#img .item:hover i.cc-RBT,\r\n#img .item:hover i.cc-RBT-alt {\r\n    color: #0d4982;\r\n}\r\n#img .item:hover i.cc-SDC,\r\n#img .item:hover i.cc-SDC-alt {\r\n    color: #981D2D;\r\n}\r\n#img .item:hover i.cc-STR,\r\n#img .item:hover i.cc-STR-alt {\r\n    color: #08B5E5;\r\n}\r\n#img .item:hover i.cc-SYNC,\r\n#img .item:hover i.cc-SYNC-alt {\r\n    color: #008DD2;\r\n}\r\n#img .item:hover i.cc-UNITY,\r\n#img .item:hover i.cc-UNITY-alt {\r\n    color: #ED8527;\r\n}\r\n#img .item:hover i.cc-VIOR,\r\n#img .item:hover i.cc-VIOR-alt {\r\n    color: #1F52A4;\r\n}\r\n#img .item:hover i.cc-VPN,\r\n#img .item:hover i.cc-VPN-alt {\r\n    color: #589700;\r\n}\r\n#img .item:hover i.cc-VRC,\r\n#img .item:hover i.cc-VRC-alt {\r\n    color: #418bca;\r\n}\r\n#img .item:hover i.cc-VTC,\r\n#img .item:hover i.cc-VTC-alt {\r\n    color: #1b5c2e;\r\n}\r\n#img .item:hover i.cc-XBS,\r\n#img .item:hover i.cc-XBS-alt {\r\n    color: #dc2a25;\r\n}\r\n#img .item:hover i.cc-XCP,\r\n#img .item:hover i.cc-XCP-alt {\r\n    color: #EC1550;\r\n}\r\n#img .item:hover i.cc-XEM,\r\n#img .item:hover i.cc-XEM-alt {\r\n    color: #41bf76;\r\n}\r\n#img .item:hover i.cc-XMR {\r\n    color: #FF6600;\r\n}\r\n#img .item:hover i.cc-XRP,\r\n#img .item:hover i.cc-XRP-alt {\r\n    color: #346AA9;\r\n}\r\n#img .item:hover i.cc-YBC,\r\n#img .item:hover i.cc-YBC-alt {\r\n    color: #D6C154;\r\n}\r\n#img .item:hover i.cc-DMD,\r\n#img .item:hover i.cc-DMD-alt {\r\n    color: #5497b2;\r\n}\r\n#img .item:hover i.cc-FRK,\r\n#img .item:hover i.cc-FRK-alt {\r\n    color: #0633cd;\r\n}\r\n#img .item:hover i.cc-IOC,\r\n#img .item:hover i.cc-IOC-alt {\r\n    color: #2fa3de;\r\n}\r\n#img .item:hover i.cc-LDOGE,\r\n#img .item:hover i.cc-LDOGE-alt {\r\n    color: #ffcc00;\r\n}\r\n#img .item:hover i.cc-MTR,\r\n#img .item:hover i.cc-MTR-alt {\r\n    color: #b92429;\r\n}\r\n#img .item:hover i.cc-MUE,\r\n#img .item:hover i.cc-MUE-alt {\r\n    color: #f5a10e;\r\n}\r\n#img .item:hover i.cc-XAI,\r\n#img .item:hover i.cc-XAI-alt {\r\n    color: #2ef99f;\r\n}\r\n#img .item:hover i.cc-XBS,\r\n#img .item:hover i.cc-XBS-alt {\r\n    color: #d3261d;\r\n}\r\n#img .item:hover i.cc-XPM,\r\n#img .item:hover i.cc-XPM-alt {\r\n    color: #e5b625;\r\n}\r\n#img .item:hover i.cc-BAY,\r\n#img .item:hover i.cc-BAY-alt {\r\n    color: #584ba1;\r\n}\r\n#img .item:hover i.cc-DGB,\r\n#img .item:hover i.cc-DGB-alt {\r\n    color: #0066cc;\r\n}\r\n#img .item:hover i.cc-DOGED,\r\n#img .item:hover i.cc-DOGED-alt {\r\n    color: #b2a675;\r\n}\r\n#img .item:hover i.cc-EMC,\r\n#img .item:hover i.cc-EMC-alt {\r\n    color: #674c8c;\r\n}\r\n#img .item:hover i.cc-ETH,\r\n#img .item:hover i.cc-ETH-alt {\r\n    color: #3b41f3;\r\n}\r\n#img .item:hover i.cc-MINT,\r\n#img .item:hover i.cc-MINT-alt {\r\n    color: #006835;\r\n}\r\n#img .item:hover i.cc-MONA,\r\n#img .item:hover i.cc-MONA-alt {\r\n    color: #a99364;\r\n}\r\n#img .item:hover i.cc-MRC {\r\n    color: #4279bd;\r\n}\r\n#img .item:hover i.cc-NEU,\r\n#img .item:hover i.cc-NEU-alt {\r\n    color: #2983c0;\r\n}\r\n#img .item:hover i.cc-NVC,\r\n#img .item:hover i.cc-NVC-alt {\r\n    color: #ecab41;\r\n}\r\n#img .item:hover i.cc-RBY,\r\n#img .item:hover i.cc-RBY-alt {\r\n    color: #c81100;\r\n}\r\n#img .item:hover i.cc-AEON,\r\n#img .item:hover i.cc-AEON-alt {\r\n    color: #164450;\r\n}\r\n#img .item:hover i.cc-AMP,\r\n#img .item:hover i.cc-AMP-alt {\r\n    color: #048DD2;\r\n}\r\n#img .item:hover i.cc-ANC,\r\n#img .item:hover i.cc-ANC-alt {\r\n    color: #000;\r\n}\r\n#img .item:hover i.cc-BTA {\r\n    color: #210094;\r\n}\r\n#img .item:hover i.cc-CLAM,\r\n#img .item:hover i.cc-CLAM-alt {\r\n    color: #D6AB31;\r\n}\r\n#img .item:hover i.cc-CLOAK,\r\n#img .item:hover i.cc-CLOAK-alt {\r\n    color: #DF3F1E;\r\n}\r\n#img .item:hover i.cc-DCR,\r\n#img .item:hover i.cc-DCR-alt {\r\n    color: #43A2CA;\r\n}\r\n#img .item:hover i.cc-NEOS,\r\n#img .item:hover i.cc-NEOS-alt {\r\n    color: #3771B1;\r\n}\r\n#img .item:hover i.cc-NLG,\r\n#img .item:hover i.cc-NLG-alt {\r\n    color: #003E7E;\r\n}\r\n#img .item:hover i.cc-OK,\r\n#img .item:hover i.cc-OK-alt {\r\n    color: #0165A4;\r\n}\r\n#img .item:hover i.cc-OMNI,\r\n#img .item:hover i.cc-OMNI-alt {\r\n    color: #18347E;\r\n}\r\n#img .item:hover i.cc-RBY,\r\n#img .item:hover i.cc-RBY-alt {\r\n    color: #D31F26;\r\n}\r\n#img .item:hover i.cc-SCOT,\r\n#img .item:hover i.cc-SCOT-alt {\r\n    color: #3498DB;\r\n}\r\n#img .item:hover i.cc-SJCX,\r\n#img .item:hover i.cc-SJCX-alt {\r\n    color: #003366;\r\n}\r\n#img .item:hover i.cc-START,\r\n#img .item:hover i.cc-START-alt {\r\n    color: #01AEF0;\r\n}\r\n#img .item:hover i.cc-SYS,\r\n#img .item:hover i.cc-SYS-alt {\r\n    color: #0098DA;\r\n}\r\n#img .item:hover i.cc-VNL,\r\n#img .item:hover i.cc-VNL-alt {\r\n    color: #404249;\r\n}\r\n#img .item:hover i.cc-TX,\r\n#img .item:hover i.cc-TX-alt {\r\n    color: #1F8BCC;\r\n}\r\n#img .item:hover i.cc-XVG,\r\n#img .item:hover i.cc-XVG-alt {\r\n    color: #42AFB2;\r\n}\r\n#img .item:hover i.cc-FCT,\r\n#img .item:hover i.cc-FCT-alt {\r\n    color: #2175BB;\r\n}\r\n#img .item:hover i.cc-GDC,\r\n#img .item:hover i.cc-GDC-alt {\r\n    color: #E9A226;\r\n}\r\n#img .item:hover i.cc-JBS,\r\n#img .item:hover i.cc-JBS-alt {\r\n    color: #1A8BCD;\r\n}\r\n#img .item:hover i.cc-LISK,\r\n#img .item:hover i.cc-LISK-alt {\r\n    color: #1A6896;\r\n}\r\n#img .item:hover i.cc-PIGGY,\r\n#img .item:hover i.cc-PIGGY-alt {\r\n    color: #F27A7A;\r\n}\r\n#img .item:hover i.cc-RBIES,\r\n#img .item:hover i.cc-RBIES-alt {\r\n    color: #C62436;\r\n}\r\n#img .item:hover i.cc-SAR,\r\n#img .item:hover i.cc-SAR-alt {\r\n    color: #1B72B8;\r\n}\r\n#img .item:hover i.cc-SLG,\r\n#img .item:hover i.cc-SLG-alt {\r\n    color: #5A6875;\r\n}\r\n#img .item:hover i.cc-USDT,\r\n#img .item:hover i.cc-USDT-alt {\r\n    color: #2CA07A;\r\n}\r\n#img .item:hover i.cc-ZEIT,\r\n#img .item:hover i.cc-ZEIT-alt {\r\n    color: #ACACAC;\r\n}\r\n#img .item:hover i.cc-DGD,\r\n#img .item:hover i.cc-DGX {\r\n    color: #D8A24A;\r\n}\r\n#img .item:hover i.cc-ADC,\r\n#img .item:hover i.cc-ADC-alt {\r\n    color: #3CB0E5;\r\n}\r\n#img .item:hover i.cc-BSD,\r\n#img .item:hover i.cc-BSD-alt {\r\n    color: #1186E7;\r\n}\r\n#img .item:hover i.cc-DAO,\r\n#img .item:hover i.cc-DAO-alt {\r\n    color: #FF3B3B;\r\n}\r\n#img .item:hover i.cc-ERC,\r\n#img .item:hover i.cc-ERC-alt {\r\n    color: #101E84;\r\n}\r\n#img .item:hover i.cc-ETC,\r\n#img .item:hover i.cc-ETC-alt {\r\n    color: #669073;\r\n}\r\n#img .item:hover i.cc-GLD,\r\n#img .item:hover i.cc-GLD-alt {\r\n    color: #E8BE24;\r\n}\r\n#img .item:hover i.cc-GRS {\r\n    color: #648FA0;\r\n}\r\n#img .item:hover i.cc-KOBO {\r\n    color: #80C342;\r\n}\r\n#img .item:hover i.cc-LBC,\r\n#img .item:hover i.cc-LBC-alt {\r\n    color: #015C47;\r\n}\r\n#img .item:hover i.cc-PINK,\r\n#img .item:hover i.cc-PINK-alt {\r\n    color: #ED31CA;\r\n}\r\n#img .item:hover i.cc-RDD,\r\n#img .item:hover i.cc-RDD-alt {\r\n    color: #ED1C24;\r\n}\r\n#img .item:hover i.cc-RISE,\r\n#img .item:hover i.cc-RISE-alt {\r\n    color: #43CEA2;\r\n}\r\n#img .item:hover i.cc-SIA,\r\n#img .item:hover i.cc-SIA-alt {\r\n    color: #00CBA0;\r\n}\r\n#img .item:hover i.cc-SLS,\r\n#img .item:hover i.cc-SLS-alt {\r\n    color: #1EB549;\r\n}\r\n#img .item:hover i.cc-SNRG,\r\n#img .item:hover i.cc-SNRG-alt {\r\n    color: #160363;\r\n}\r\n#img .item:hover i.cc-STEEM,\r\n#img .item:hover i.cc-STEEM-alt {\r\n    color: #1A5099;\r\n}\r\n#img .item:hover i.cc-STRAT,\r\n#img .item:hover i.cc-STRAT-alt {\r\n    color: #33C7F5;\r\n}\r\n#img .item:hover i.cc-SWIFT,\r\n#img .item:hover i.cc-SWIFT-alt {\r\n    color: #428BCA;\r\n}\r\n#img .item:hover i.cc-MIOTA,\r\n#img .item:hover i.cc-MIOTA-alt {\r\n    color: #43ab7f;\r\n}\r\n#img .item:hover i.cc-BCC {\r\n    color: darkorange;\r\n}\r\n#img .item:hover i.cc-LSK {\r\n    color: #1a6896;\r\n}\r\n#img .item:hover i.cc-NEO {\r\n    color: limegreen;\r\n}\r\n#img .item:hover i.cc-OMG {\r\n    color: royalblue;\r\n}\r\n#img .item:hover i.cc-QTUM {\r\n    color: cornflowerblue;\r\n}\r\n#img .item:hover i.cc-WAVES {\r\n    color: dodgerblue;\r\n}\r\n#img .item:hover i.cc-ZEC {\r\n    color: goldenrod;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coinlist/coinlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"rows\">\r\n    <ng-container>\r\n\r\n      <div class=\"sortButtonLayout\">\r\n        <div class=\"price\">\r\n          <button class=\"sort group1 greenHover\" (click)=\"sortByPrice({price:'asc'}); shown = 'PA'\">$ Asc</button>\r\n          <button class=\"sort group1 redHover\" (click)=\"sortByPrice({price:'desc'}); shown = 'PD'\">$ Desc</button>\r\n        </div>\r\n        <div class=\"volume\">\r\n          <button class=\"sort group2 greenHover\" (click)=\"sortByVolume({volume:'asc'}); shown = 'VA'\">Vol Asc</button>\r\n          <button class=\"sort group2 redHover\" (click)=\"sortByVolume({volume:'desc'}); shown = 'VD'\">Vol Desc</button>\r\n        </div>\r\n        <div class=\"twentyFourHour\">\r\n          <button class=\"sort group3 greenHover\" (click)=\"sortByPercentChange24h({percentChange24h:'asc'}); shown = '24A'\">24h % asc</button>\r\n          <button class=\"sort group3 redHover\" (click)=\"sortByPercentChange24h({percentChange24h:'desc'}); shown = '24D'\">24h % desc</button>\r\n        </div>\r\n        <div class=\"sevenDay\">\r\n          <button class=\"sort group4 greenHover\" (click)=\"sortByPercentChange7d({percentChange7d:'asc'}); shown = '7A'\">7d % asc</button>\r\n          <button class=\"sort group4 redHover\" (click)=\"sortByPercentChange7d({percentChange7d:'desc'}); shown = '7D'\">7d % desc</button>\r\n        </div>\r\n        <div class=\"oneHour\">\r\n          <button class=\"sort group5 greenHover\" (click)=\"sortByPercentChange1h({percentChange1h:'asc'}); shown = '1A'\">1h % asc</button>\r\n          <button class=\"sort group5 redHover\" (click)=\"sortByPercentChange1h({percentChange1h:'desc'}); shown = '1D'\">1h % desc</button>\r\n        </div>\r\n        <div class=\"cap\">\r\n          <button class=\"sort group6 greenHover\" (click)=\"sortByMarketCap({marketcap:'asc'}); shown = 'MCa'\">MktCap asc</button>\r\n          <button class=\"sort group6 redHover\" (click)=\"sortByMarketCap({marketcap:'desc'}); shown = 'MCd'\">MktCap desc</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"sortDisplayContainer\">\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'PD'\">\r\n          <h2>Price Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'PA'\">\r\n          <h2>Price Asc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'VD'\">\r\n          <h2>Volume Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'VA'\">\r\n          <h2>Volume Asc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '24D'\">\r\n          <h2>24h Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '24A'\">\r\n          <h2>24h Asc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '7D'\">\r\n          <h2>7d Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '7A'\">\r\n          <h2>7d Asc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '1D'\">\r\n          <h2>1h Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === '1A'\">\r\n          <h2>1h Asc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'MCd'\">\r\n          <h2>Market Cap Desc</h2>\r\n        </div>\r\n        <div class=\"currentSort\" *ngIf=\"shown === 'MCa'\">\r\n          <h2>Market Cap Asc</h2>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n\r\n  <div id=\"img\">\r\n    <ng-container>\r\n\r\n      <div class=\"item\" *ngFor=\"let coin of data\">\r\n        <div class=\"icon\" title=\"{{coin?.name}}\">\r\n          <i class=\"cc-{{coin?.symbol}}\"></i>\r\n        </div>\r\n        <div class=\"key\">\r\n          <span class=\"name\">{{coin?.name}}</span>\r\n          <input class=\"class\" value=\"${{coin?.price_usd}}\" readonly=\"\">\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/coinlist/coinlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoinlistComponent = (function () {
    function CoinlistComponent(http) {
        this.http = http;
        this.apiUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=50';
        this.data = [];
        this.getPrice();
        this.getData();
    }
    CoinlistComponent.prototype.getData = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    CoinlistComponent.prototype.getPrice = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    CoinlistComponent.prototype.sortByPrice = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "price":
                    return this.sortCoins("price_usd", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortByVolume = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "volume":
                    return this.sortCoins("24h_volume_usd", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortByPercentChange24h = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "percentChange24h":
                    return this.sortCoins("percent_change_24h", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortByPercentChange7d = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "percentChange7d":
                    return this.sortCoins("percent_change_7d", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortByPercentChange1h = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "percentChange1h":
                    return this.sortCoins("percent_change_1h", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortByMarketCap = function (sorts) {
        for (var value in sorts) {
            switch (value) {
                case "marketcap":
                    return this.sortCoins("market_cap_usd", sorts[value]);
            }
        }
    };
    CoinlistComponent.prototype.sortCoins = function (propName, algo) {
        this.data.sort(function (a, b) {
            var aSortable = parseFloat(a[propName]);
            var bSortable = parseFloat(b[propName]);
            if (algo === "asc") {
                return (aSortable < bSortable) ? -1 : (aSortable > bSortable) ? 1 : 0;
            }
            else if (algo === "desc") {
                return (aSortable < bSortable) ? 1 : (aSortable > bSortable) ? -1 : 0;
            }
        });
    };
    CoinlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-coinlist',
            template: __webpack_require__("../../../../../src/app/coinlist/coinlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coinlist/coinlist.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], CoinlistComponent);
    return CoinlistComponent;
    var _a;
}());

//# sourceMappingURL=coinlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/coinlist/coinlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinlistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coinlist_component__ = __webpack_require__("../../../../../src/app/coinlist/coinlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoinlistModule = (function () {
    function CoinlistModule() {
    }
    CoinlistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__coinlist_component__["a" /* CoinlistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__coinlist_component__["a" /* CoinlistComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__coinlist_component__["a" /* CoinlistComponent */]]
        })
    ], CoinlistModule);
    return CoinlistModule;
}());

//# sourceMappingURL=coinlist.module.js.map

/***/ }),

/***/ "../../../../../src/app/coinlist/cryptocoins-icons.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cryptocoins-icons.704cce830c1794f87525.eot";

/***/ }),

/***/ "../../../../../src/app/coinlist/cryptocoins-icons.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cryptocoins-icons.beaa3fa4137457a79d68.ttf";

/***/ }),

/***/ "../../../../../src/app/coinlist/cryptocoins-icons.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cryptocoins-icons.5f224e43223c19df8042.woff";

/***/ }),

/***/ "../../../../../src/app/coinlist/icomoon.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.2a0d5ae288e4e24cf5f5.eot";

/***/ }),

/***/ "../../../../../src/app/coinlist/icomoon.ttf":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),

/***/ "../../../../../src/app/coinlist/icomoon.woff":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\r\n  display: block;\r\n  width: 100%;\r\n  height: 60px;\r\n  margin-bottom: 20px;\r\n  line-height: 60px;\r\n  background: #202121;\r\n  color: #e5eff5;\r\n}\r\n.head h1 {\r\n  margin: 0px 0px 0px 90px;\r\n  font-family: \"Lato\";\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  font-size: 1.2em;\r\n}\r\n#nav {\r\n  position: absolute;\r\n  right: 0;\r\n  top: -15px;\r\n  height: 60px;\r\n}\r\n#nav ul li {\r\n  float: left;\r\n  list-style: none;\r\n}\r\n#nav ul li a {\r\n  display: block;\r\n  color: #e5eff5;\r\n  font-family: \"Lato\";\r\n  font-weight: 200;\r\n  text-decoration: none;\r\n  padding: 0 10px;\r\n}\r\n\r\n/*@media (max-width: 599px) {\r\n  .head .container {\r\n    width: 100%;\r\n  }\r\n  .head h1 {\r\n    padding-left: 3%;\r\n  }\r\n  #nav {\r\n    width: 100%;\r\n    top: 60px;\r\n  }\r\n  #nav:before {\r\n    content: '\\2630';\r\n    display: block;\r\n    position: absolute;\r\n    right: 3%;\r\n    top: -50px;\r\n    line-height: 40px;\r\n    font-size: 1.4em;\r\n    cursor: pointer;\r\n  }\r\n  #nav ul {\r\n    background: #222;\r\n    width: 100%;\r\n    margin: 0px;\r\n  }\r\n  #nav ul li {\r\n    float: none;\r\n  }\r\n  #nav ul li a {\r\n    padding: 10px 3%;\r\n    line-height: 20px;\r\n    border-top: 1px solid #333;\r\n  }\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n    <div class=\"container\">\r\n        <h1>\r\n            Current Prices\r\n        </h1>\r\n        <nav id=\"nav\">\r\n            <!--<ul>\r\n                <li>\r\n                    <a href=\"#\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">About</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Services</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">History</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Contact</a>\r\n                </li>\r\n            </ul>-->\r\n        </nav>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'Header';
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]]
        })
    ], HeaderModule);
    return HeaderModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/assets/card_texture.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "card_texture.e51f1080b5e2cd236ab8.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map