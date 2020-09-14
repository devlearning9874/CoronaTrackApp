webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_helpline_contact_helpline_component__ = __webpack_require__("../../../../../src/app/components/contact-helpline/contact-helpline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_notification_advisory_notification_advisory_component__ = __webpack_require__("../../../../../src/app/components/notification-advisory/notification-advisory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_hospital_dashboard_hospital_dashboard_component__ = __webpack_require__("../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_compare_cases_compare_cases_component__ = __webpack_require__("../../../../../src/app/components/compare-cases/compare-cases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_medicalcollege_medicalcollege_component__ = __webpack_require__("../../../../../src/app/components/medicalcollege/medicalcollege.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_hospitalbeds_hospitalbeds_component__ = __webpack_require__("../../../../../src/app/components/hospitalbeds/hospitalbeds.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'medicalcollege', component: __WEBPACK_IMPORTED_MODULE_15__components_medicalcollege_medicalcollege_component__["a" /* MedicalcollegeComponent */] },
    { path: 'hospitalbeds', component: __WEBPACK_IMPORTED_MODULE_16__components_hospitalbeds_hospitalbeds_component__["a" /* HospitalbedsComponent */] },
    { path: 'contact-helpline', component: __WEBPACK_IMPORTED_MODULE_11__components_contact_helpline_contact_helpline_component__["a" /* ContactHelplineComponent */] },
    { path: 'notification-advisory', component: __WEBPACK_IMPORTED_MODULE_12__components_notification_advisory_notification_advisory_component__["a" /* NotificationAdvisoryComponent */] },
    { path: 'hospital-dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_hospital_dashboard_hospital_dashboard_component__["a" /* HospitalDashboardComponent */] },
    { path: 'compare-cases', component: __WEBPACK_IMPORTED_MODULE_14__components_compare_cases_compare_cases_component__["a" /* CompareCasesComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contact_helpline_contact_helpline_component__["a" /* ContactHelplineComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_notification_advisory_notification_advisory_component__["a" /* NotificationAdvisoryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_hospital_dashboard_hospital_dashboard_component__["a" /* HospitalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_compare_cases_compare_cases_component__["a" /* CompareCasesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_medicalcollege_medicalcollege_component__["a" /* MedicalcollegeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_hospitalbeds_hospitalbeds_component__["a" /* HospitalbedsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_event_service__["a" /* EventService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/compare-cases/compare-cases.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compare-cases/compare-cases.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  compare-cases works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/compare-cases/compare-cases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareCasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompareCasesComponent = (function () {
    function CompareCasesComponent() {
    }
    CompareCasesComponent.prototype.ngOnInit = function () {
    };
    CompareCasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compare-cases',
            template: __webpack_require__("../../../../../src/app/components/compare-cases/compare-cases.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compare-cases/compare-cases.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompareCasesComponent);
    return CompareCasesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-helpline/contact-helpline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-helpline/contact-helpline.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">State Name</th>\n    <th scope=\"col\">Helpline Number</th>\n    \n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let country of contact; index as i\">\n    <th scope=\"row\">{{ i + 1 }}</th>\n    <td>\n      \n      {{ country.loc }}\n    </td>\n    <td>{{ country.number }}</td>\n    \n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/contact-helpline/contact-helpline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactHelplineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactHelplineComponent = (function () {
    function ContactHelplineComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.contact = [];
    }
    ContactHelplineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getContacts().subscribe(function (res) {
            _this.contact = res,
                console.log(_this.contact);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ContactHelplineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-helpline',
            template: __webpack_require__("../../../../../src/app/components/contact-helpline/contact-helpline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-helpline/contact-helpline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactHelplineComponent);
    return ContactHelplineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Corona Track App</h1>\n  <p class=\"lead\">Get contact & Helpline Info, Notification & Advisory, Hospital Dashboard, Compare cases. </p>\n  \n</div>\n\n\n<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Contact Helpline</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/contact-helpline']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Notification Advisory</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/notification-advisory']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n    <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Hospital Dashboard</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/hospital-dashboard']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Compare Cases</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/compare-cases']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.events = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Hospital Dashboard</h1>\n  <!-- <p class=\"lead\">Get contact & Helpline Info, Notification & Advisory, Hospital Dashboard, Compare cases. </p> -->\n  \n</div>\n\n<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Hospital & Beds</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/hospitalbeds']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n  \n  <div class=\"col-md-4 mb-3\" >\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Medical colleges & Beds</h5>\n        <p class=\"card-text\"></p>\n        <a  class=\"btn btn-primary\" [routerLink]=\"['/medicalcollege']\">Visit</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HospitalDashboardComponent = (function () {
    function HospitalDashboardComponent() {
    }
    HospitalDashboardComponent.prototype.ngOnInit = function () {
    };
    HospitalDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hospital-dashboard',
            template: __webpack_require__("../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hospital-dashboard/hospital-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HospitalDashboardComponent);
    return HospitalDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hospitalbeds/hospitalbeds.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hospitalbeds/hospitalbeds.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">State Name</th>\n    <th scope=\"col\">Rural Hospitals</th>\n    <th scope=\"col\">Rural Beds</th>\n    <th scope=\"col\">Urban Hospitals</th>\n    <th scope=\"col\">Urban Beds</th>\n    <th scope=\"col\">Total Hospitals</th>\n    <th scope=\"col\">Total Beds(State Wise)</th>\n    \n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let country of hospitalbeds; index as i\">\n    <th scope=\"row\">{{ i + 1 }}</th>\n    <td>{{ country.state }}</td>\n    <td>{{ country.ruralHospitals }}</td>\n    <td>{{ country.ruralBeds }}</td>\n    <td>{{ country.urbanHospitals}}</td>\n    <td>{{ country.urbanBeds}}</td>\n    <td>{{ country.totalHospitals}}</td>\n    <td>{{ country.totalBeds }}</td>\n    \n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/hospitalbeds/hospitalbeds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalbedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HospitalbedsComponent = (function () {
    function HospitalbedsComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.hospitalbeds = [];
    }
    HospitalbedsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getHospitalbeds().subscribe(function (res) {
            _this.hospitalbeds = res,
                console.log(_this.hospitalbeds);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HospitalbedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hospitalbeds',
            template: __webpack_require__("../../../../../src/app/components/hospitalbeds/hospitalbeds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hospitalbeds/hospitalbeds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HospitalbedsComponent);
    return HospitalbedsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/medicalcollege/medicalcollege.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/medicalcollege/medicalcollege.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">State Name</th>\n    <th scope=\"col\">Institue Name</th>\n    <th scope=\"col\">City</th>\n    <th scope=\"col\">Type</th>\n    <th scope=\"col\">Admission Capacity</th>\n    <th scope=\"col\">Hospitals Beds</th>\n    \n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let country of medicalcollege; index as i\">\n    <th scope=\"row\">{{ i + 1 }}</th>\n    <td>{{ country.state}}</td>\n    <td>{{ country.name}}</td>\n    <td>{{ country.city}}</td>\n    <td>{{ country.ownership }}</td>\n    <td>{{ country.admissionCapacity}}</td>\n    <td>{{ country.hospitalBeds }}</td>\n    \n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/medicalcollege/medicalcollege.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalcollegeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicalcollegeComponent = (function () {
    function MedicalcollegeComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.medicalcollege = [];
    }
    MedicalcollegeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getMedicalcollege().subscribe(function (res) {
            _this.medicalcollege = res,
                console.log(_this.medicalcollege);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MedicalcollegeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medicalcollege',
            template: __webpack_require__("../../../../../src/app/components/medicalcollege/medicalcollege.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/medicalcollege/medicalcollege.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MedicalcollegeComponent);
    return MedicalcollegeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">Corona Track App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <!-- <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n        </ul>\n      </div> -->\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notification-advisory/notification-advisory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification-advisory/notification-advisory.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">Date</th>\n    <th scope=\"col\">Notification Title</th>\n    <th scope=\"col\">Link</th>\n    \n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let country of notification; index as i\">\n    <th scope=\"row\">{{ i + 1 }}</th>\n    <td>\n      \n      {{ country.date }}\n    </td>\n    <td>{{ country.title }}</td>\n    <td><a href=\"{{country.link }}\">{{country.link }} </a></td>\n    \n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/notification-advisory/notification-advisory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationAdvisoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationAdvisoryComponent = (function () {
    function NotificationAdvisoryComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.notification = [];
    }
    NotificationAdvisoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getNotification().subscribe(function (res) {
            _this.notification = res,
                console.log(_this.notification);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NotificationAdvisoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification-advisory',
            template: __webpack_require__("../../../../../src/app/components/notification-advisory/notification-advisory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notification-advisory/notification-advisory.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NotificationAdvisoryComponent);
    return NotificationAdvisoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService(http, https) {
        this.http = http;
        this.https = https;
    }
    EventService.prototype.getContacts = function () {
        return this.https.get('api/contact-helpline');
    };
    EventService.prototype.getNotification = function () {
        return this.https.get('api/notification-advisory');
    };
    EventService.prototype.getHospitalbeds = function () {
        return this.https.get('beds/hospital-beds');
    };
    EventService.prototype.getMedicalcollege = function () {
        return this.https.get('beds/medical-college');
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EventService);
    return EventService;
}());



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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map