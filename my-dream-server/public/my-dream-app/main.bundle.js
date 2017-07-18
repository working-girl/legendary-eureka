webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network_component__ = __webpack_require__("../../../../../src/app/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flags_flags_component__ = __webpack_require__("../../../../../src/app/flags/flags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__country_country_component__ = __webpack_require__("../../../../../src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searchcloud_searchcloud_component__ = __webpack_require__("../../../../../src/app/searchcloud/searchcloud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/timeline/timeline.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__searchbar_searchbar_component__["a" /* SearchbarComponent */]
    },
    {
        path: 'country',
        component: __WEBPACK_IMPORTED_MODULE_7__country_country_component__["a" /* CountryComponent */]
    },
    {
        path: 'searchcloud',
        component: __WEBPACK_IMPORTED_MODULE_8__searchcloud_searchcloud_component__["a" /* SearchcloudComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                redirectTo: 'network',
                pathMatch: 'full'
            },
            {
                path: 'network',
                component: __WEBPACK_IMPORTED_MODULE_4__network_network_component__["a" /* NetworkComponent */]
                /*children: [
                  {
                    path: 'nodes',
                    component: NetworkComponent
                  },
                  {
                    path: 'edges',
                    component: NetworkComponent
                  }
                ]*/
            },
            {
                path: 'flags',
                component: __WEBPACK_IMPORTED_MODULE_6__flags_flags_component__["a" /* FlagsComponent */],
            },
            {
                path: 'tree',
                component: __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__["a" /* TreeComponent */],
            },
            {
                path: 'gant',
                component: __WEBPACK_IMPORTED_MODULE_9__timeline_timeline_component__["a" /* TimelineComponent */],
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<!--The whole content below can be removed with the new code.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Dream App';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_country_component__ = __webpack_require__("../../../../../src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__idcard_idcard_component__ = __webpack_require__("../../../../../src/app/idcard/idcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_search_query_model__ = __webpack_require__("../../../../../src/app/models/search-query.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__desc_card_desc_card_component__ = __webpack_require__("../../../../../src/app/desc-card/desc-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabview_tabview_component__ = __webpack_require__("../../../../../src/app/tabview/tabview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__network_network_component__ = __webpack_require__("../../../../../src/app/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stats_stats_component__ = __webpack_require__("../../../../../src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nav_stats_nav_stats_component__ = __webpack_require__("../../../../../src/app/nav-stats/nav-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__network_network_service__ = __webpack_require__("../../../../../src/app/network/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__network_chart_network_chart_component__ = __webpack_require__("../../../../../src/app/network-chart/network-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__flags_flags_component__ = __webpack_require__("../../../../../src/app/flags/flags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__flag_chart_flag_chart_component__ = __webpack_require__("../../../../../src/app/flag-chart/flag-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__flags_words_service__ = __webpack_require__("../../../../../src/app/flags/words.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__searchcloud_searchcloud_component__ = __webpack_require__("../../../../../src/app/searchcloud/searchcloud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/timeline/timeline.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { D3Service } from 'd3-ng2-service';
//import { TestD3Component } from './test-d3/test-d3.component';
//import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';
// import { NetworkChart2Component } from './network-chart-2/network-chart-2.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__searchbar_searchbar_component__["a" /* SearchbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__idcard_idcard_component__["a" /* IdcardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__desc_card_desc_card_component__["a" /* DescCardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__tabview_tabview_component__["a" /* TabviewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__network_network_component__["a" /* NetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_15__stats_stats_component__["a" /* StatsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__nav_stats_nav_stats_component__["a" /* NavStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__network_chart_network_chart_component__["a" /* NetworkChartComponent */],
            __WEBPACK_IMPORTED_MODULE_19__flags_flags_component__["a" /* FlagsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__flag_chart_flag_chart_component__["a" /* FlagChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__country_country_component__["a" /* CountryComponent */],
            /* TestD3Component,
               BrushZoomComponent, */
            __WEBPACK_IMPORTED_MODULE_22__tree_tree_component__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__searchcloud_searchcloud_component__["a" /* SearchcloudComponent */],
            __WEBPACK_IMPORTED_MODULE_24__timeline_timeline_component__["a" /* TimelineComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__models_search_query_model__["a" /* SearchQuery */], __WEBPACK_IMPORTED_MODULE_17__network_network_service__["a" /* NetworkService */], __WEBPACK_IMPORTED_MODULE_21__flags_words_service__["a" /* WordsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/country/country.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<p></p>\n\t<input type=\"number\" step=\"0.001\" name=\"lat\" placeholder=\"latitude\" [(ngModel)]=\"lat\"><br>\n\t<input type=\"number\" step=\"0.001\" name=\"long\" placeholder=\"longtitude\" [(ngModel)]=\"lng\"><br>\n\t<input type=\"submit\" name=\"coordbtn\" value=\"Find Country\" (click)=\"findCountry(lat, lng)\">\n\t<p></p>\n\t<div *ngIf=\"validCoords; else elseBlock\">{{countryName}}, {{countryCode}}, <img src=\"../assets/flags/{{countryCode}}.png\"></div>\n    <ng-template #elseBlock>Please enter valid coordinates (eg 23.03 32.22)</ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var crg = __webpack_require__("../../../../country-reverse-geocoding/lib/country_reverse_geocoding.js").country_reverse_geocoding();
var CountryComponent = (function () {
    function CountryComponent() {
        this.validCoords = false;
        this.countryName = 'Disneyland';
        this.countryCode = 'DSL';
    }
    CountryComponent.prototype.ngOnInit = function () { };
    CountryComponent.prototype.findCountry = function (lat, lng) {
        var country = crg.get_country(lat, lng);
        if (country !== null) {
            this.validCoords = true;
            this.countryName = country.name;
            this.countryCode = country.code;
        }
        else {
            this.validCoords = false;
        }
    };
    return CountryComponent;
}());
CountryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-country',
        template: __webpack_require__("../../../../../src/app/country/country.component.html"),
        styles: [__webpack_require__("../../../../../src/app/country/country.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CountryComponent);

//# sourceMappingURL=country.component.js.map

/***/ }),

/***/ "../../../../../src/app/desc-card/desc-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/desc-card/desc-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-header\">\n\t\tSummary\n\t</div>\n\t<div class=\"card-block\">\n\t\t<h4 class=\"card-title\">Some general info about this person</h4>\n\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>\n\t</div>\n\t<div class=\"card-block\">\n\t\t<a href=\"#\" class=\"card-link\">Friends</a>\n\t\t<a href=\"#\" class=\"card-link\">Locations</a>\n\t\t<a href=\"#\" class=\"card-link\">Activity</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/desc-card/desc-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescCardComponent = (function () {
    function DescCardComponent() {
    }
    DescCardComponent.prototype.ngOnInit = function () {
    };
    return DescCardComponent;
}());
DescCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-desc-card',
        template: __webpack_require__("../../../../../src/app/desc-card/desc-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/desc-card/desc-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DescCardComponent);

//# sourceMappingURL=desc-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/flag-chart/flag-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flag-chart/flag-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flag-chart\" #flagcloud></div>"

/***/ }),

/***/ "../../../../../src/app/flag-chart/flag-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_v4_cloud__ = __webpack_require__("../../../../d3-v4-cloud/build/d3-cloud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_v4_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3_v4_cloud__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as canvas from 'canvas';

var FlagChartComponent = (function () {
    function FlagChartComponent() {
    }
    /*Chart will be rebuild every time the @Input is updated*/
    FlagChartComponent.prototype.ngOnChanges = function () {
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.htmlElement);
        this.setup();
        this.buildSVG();
        this.drawFlagCloud();
    };
    FlagChartComponent.prototype.setup = function () {
        this.margin = { top: 5, bottom: 0, left: 0, right: 0 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
    };
    FlagChartComponent.prototype.buildSVG = function () {
        this.host.html('');
        this.svg = this.host.append("svg")
            .attr("viewBox", "0 0 " + this.width + " " + this.height);
    };
    FlagChartComponent.prototype.drawFlagCloud = function () {
        var con = this.svg.append("g");
        var zoom_handler = __WEBPACK_IMPORTED_MODULE_1_d3__["zoom"]().on("zoom", zoom_actions);
        zoom_handler(this.svg);
        var color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"]);
        var layout;
        layout = __WEBPACK_IMPORTED_MODULE_2_d3_v4_cloud__["cloud"]()
            .size([this.width, this.height])
            .words(this.words)
            .padding(5)
            .rotate(function () { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize(function (d) { return d.size; });
        layout.on("end", draw(this.words, con, layout));
        layout.start();
        //console.log(layout)
        function zoom_actions() {
            con.attr("transform", __WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform);
        }
        function draw(words, container, layout) {
            var con = container
                .attr("width", layout.size()[0])
                .attr("height", layout.size()[1])
                .append("g")
                .attr("transform", "translate(" + layout.size()[0] / 3 + "," + layout.size()[1] / 3 + ")")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function (d) { return d.size + "px"; })
                .style("font-family", "Impact")
                .style("fill", function (d, i) { return color(i); })
                .attr("text-anchor", "middle")
                .attr("transform", function (d, i) {
                var xvar = (256 * (Math.random() + .5)) >> 1;
                var yvar = (256 * (Math.random() + .5)) >> 1;
                var rotate = cloudRotate.call(this, d, i);
                return "translate(" + [xvar, yvar] + ")rotate(" + rotate + ")";
            })
                .text(function (d) { return d.text; });
            function cloudRotate() {
                return (~~(Math.random() * 6) - 3) * 30;
            }
        }
    };
    return FlagChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('flagcloud'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], FlagChartComponent.prototype, "element", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FlagChartComponent.prototype, "flagdata", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FlagChartComponent.prototype, "words", void 0);
FlagChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-flag-chart',
        template: __webpack_require__("../../../../../src/app/flag-chart/flag-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flag-chart/flag-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FlagChartComponent);

var _a;
//# sourceMappingURL=flag-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/flags/flags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flags/flags.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"loadData('1')\">Dataset 1</button>\n<button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"loadData('2')\">Dataset 2</button>\n<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"loadData('3')\">Dataset 3</button>\n<button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"loadData('3')\">Dataset 4</button>-->\n<!--<app-flag-chart *ngIf=\"words\" [words]=\"words\"></app-flag-chart>-->\n\n<app-searchcloud></app-searchcloud>"

/***/ }),

/***/ "../../../../../src/app/flags/flags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__words_service__ = __webpack_require__("../../../../../src/app/flags/words.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlagsComponent = (function () {
    function FlagsComponent(wordsService) {
        this.wordsService = wordsService;
        this.data1 = ["breakgin", "break into", "break off", "breakgout", "break up", "breat", "breath", "breathegin", "breathegout", "breathe", "breathing", "breed", "brick", "bridge", "brief", "briefly", "bright", "brightly", "brilliant"];
        this.data2 = ["bringgout", "bringgup", "broad", "bring", "bringgback", "broadcat", "broadly", "broken", "brother", "brown", "bruh", "bubble", "breakfat", "ability", "able", "about", "above", "abroad", "abence", "breakfast", "than"];
        this.data3 = ["breakgup", "breat", "breath", "breathegin", "breathegout", "breathe", "breathing", "breed", "brick", "bridge", "brief", "briefly", "bright", "brightly", "brilliant", "bringgback", "bringgdown", "bringgforward", "bringgout", "bringgup", "bring", "broad", "broadcat", "broadly", "broken", "brother"];
        this.data4 = ["bringgdown", "bringgforward", "thi", "dadsa", "dajda", "lorum", "abandon", "abandoned", "Hello", "world", "normally", "you", "want", "more", "word", "breakgin", "breakginto", "breakgoff", "breakgout", "brown", "bruh", "bubble"];
    }
    FlagsComponent.prototype.ngOnInit = function () { };
    FlagsComponent.prototype.loadData = function (num) {
        switch (num) {
            case "1":
                this.prepareData(this.data1);
                break;
            case "2":
                this.prepareData(this.data2);
                break;
            case "3":
                this.prepareData(this.data3);
                break;
            case "3":
                this.prepareData(this.data4);
                break;
            default:
                break;
        }
    };
    FlagsComponent.prototype.prepareData = function (w) {
        this.words = w.map(function (d) {
            return { text: d, size: 10 + Math.random() * 150, test: "haha" };
        });
    };
    return FlagsComponent;
}());
FlagsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-flags',
        template: __webpack_require__("../../../../../src/app/flags/flags.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flags/flags.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__words_service__["a" /* WordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__words_service__["a" /* WordsService */]) === "function" && _a || Object])
], FlagsComponent);

var _a;
//# sourceMappingURL=flags.component.js.map

/***/ }),

/***/ "../../../../../src/app/flags/words.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsService = (function () {
    function WordsService() {
    }
    return WordsService;
}());
WordsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WordsService);

//# sourceMappingURL=words.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<app-navbar></app-navbar>\n\t<p style=\"padding:2px;\"></p>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t<app-idcard></app-idcard>\n\t\t\t<p style=\"padding:5px;\"></p>\n\t\t\t<app-nav-stats></app-nav-stats>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-9\">\n\t\t\t<app-desc-card></app-desc-card>\n\t\t\t<p style=\"padding:2px;\"></p>\n\t\t\t<app-tabview></app-tabview>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/idcard/idcard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\n\tcolor:#2f7b87 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idcard/idcard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<br>\n \t<img class=\"card-img-top mx-auto d-block\" src=\"assets/gowalla/girl.png\" width=\"50%\" height=\"45%\" alt=\"Card image cap\">\n  \t<div class=\"card-block\">\n    \t<h4 class=\"card-title\">Summer Jensen</h4>\n    \t<h6 class=\"card-subtitle mb-2 text-muted\">id: {{searchinfo.getSearchId()}}</h6>\n    \t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n   \t \t<button class=\"btn btn-outline-warning\" (click)=\"getActivity()\">Get latest activity</button>\n  \t</div>\n   \t<div class=\"card-footer\">\n   \t\t<small class=\"text-muted\">Last active 2 days ago</small>\n   \t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/idcard/idcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__ = __webpack_require__("../../../../../src/app/models/search-query.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdcardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdcardComponent = (function () {
    function IdcardComponent(searchinfo) {
        this.searchinfo = searchinfo;
    }
    IdcardComponent.prototype.ngOnInit = function () {
        console.log('Active user : ' + this.searchinfo.getSearchId());
    };
    IdcardComponent.prototype.getActivity = function () {
        console.log("it worked!");
    };
    return IdcardComponent;
}());
IdcardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-idcard',
        template: __webpack_require__("../../../../../src/app/idcard/idcard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/idcard/idcard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */]) === "function" && _a || Object])
], IdcardComponent);

var _a;
//# sourceMappingURL=idcard.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/search-query.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchQuery; });
var SearchQuery = (function () {
    function SearchQuery() {
    }
    SearchQuery.prototype.setSearchId = function (id) {
        this.searchId = id;
        console.log("info set: " + id);
    };
    SearchQuery.prototype.getSearchId = function () {
        return this.searchId;
    };
    return SearchQuery;
}());

//# sourceMappingURL=search-query.model.js.map

/***/ }),

/***/ "../../../../../src/app/nav-stats/nav-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-stats/nav-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" (click)=\"setInt()\">Interactions</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" (click)=\"setCheck()\">Checkins</a>\n  </li>\n</ul>\n<div *ngIf=\"cond1; else cond2\">\n\t<ul class=\"list-group\">\n\t  <li class=\"list-group-item justify-content-between\">\n\t    Dacilisis in\n\t    <span class=\"badge badge-default badge-pill\">22</span>\n\t  </li>\n\t  <li class=\"list-group-item justify-content-between\">\n\t    Cras justo odio\n\t    <span class=\"badge badge-default badge-pill\">14</span>\n\t  </li>\n\t  <li class=\"list-group-item justify-content-between\">\n\t    Custo odio\n\t    <span class=\"badge badge-default badge-pill\">11</span>\n\t  </li>  \n\t  <li class=\"list-group-item justify-content-between\">\n\t    Dapibus ac facilisis in\n\t    <span class=\"badge badge-default badge-pill\">8</span>\n\t  </li>\n\t  <li class=\"list-group-item justify-content-between\">\n\t    Morbi leo risus\n\t    <span class=\"badge badge-default badge-pill\">5</span>\n\t  </li>  \n\t  <li class=\"list-group-item justify-content-between\">\n\t    Dapibus ac facilisis in\n\t    <span class=\"badge badge-default badge-pill\">2</span>\n\t  </li>\n\t  <li class=\"list-group-item justify-content-between\">\n\t    Morbi leo risus\n\t    <span class=\"badge badge-default badge-pill\">1</span>\n\t  </li>\n\t</ul>\t\n</div>\n<ng-template #cond2>\n\tho\n</ng-template>\t\n\n"

/***/ }),

/***/ "../../../../../src/app/nav-stats/nav-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavStatsComponent = (function () {
    function NavStatsComponent() {
        this.cond1 = true;
        this.cond2 = false;
    }
    NavStatsComponent.prototype.ngOnInit = function () {
    };
    NavStatsComponent.prototype.setInt = function () {
        this.cond1 = true;
        this.cond2 = false;
    };
    NavStatsComponent.prototype.setCheck = function () {
        this.cond2 = true;
        this.cond1 = false;
    };
    return NavStatsComponent;
}());
NavStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-nav-stats',
        template: __webpack_require__("../../../../../src/app/nav-stats/nav-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-stats/nav-stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavStatsComponent);

//# sourceMappingURL=nav-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n \t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    \t<span class=\"navbar-toggler-icon\"></span>\n \t</button>\n  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">MyDreamApp</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n      </li>                 \n    </ul>\n\n    <form class=\"form-inline my-2 my-lg-0 justify-content-center\">\n\t\t<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" #searchInput>\n\t\t<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"searchinfo.setSearchId(searchInput.value)\" routerLink='/home'>Submit</button>\n\t</form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__ = __webpack_require__("../../../../../src/app/models/search-query.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    function NavbarComponent(searchinfo) {
        this.searchinfo = searchinfo;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/network-chart/network-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.d3-chart {\n  width: 100%;\n  height: 400px;\n}*/\n\n:host,\n:host .d3-chart {\n    width: 100%;\n    display:block;\n}\n\n.links line {\n  fill: #000;\t\n  stroke: #999 !important;\n  stroke-opacity: 0.6;\n}\n\n.nodes circle {\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/network-chart/network-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d3-chart\" #network></div>\n\n"

/***/ }),

/***/ "../../../../../src/app/network-chart/network-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//https://bl.ocks.org/mbostock/4062045
var NetworkChartComponent = (function () {
    function NetworkChartComponent() {
    }
    NetworkChartComponent.prototype.ngAfterViewInit = function () {
        var myNodes = new Array();
        this.edges.map(function (d) {
            return myNodes.push({ "id": d.target });
        });
        var source = this.edges.map(function (d) { return d.source; });
        myNodes.push({ "id": source[0] });
        this.nodes = myNodes;
        //console.log(this.nodes)
        //console.log(this.edges)
        this.setup();
        this.drawGraph();
    };
    /*Chart will be rebuild every time the @Input is updated
    ngOnChanges(): void{
      /*if (!this.graph.length === 0 || !this.host) return;
      this.setup()
      this.buildSVG()
      this.drawGraph()
    }*/
    NetworkChartComponent.prototype.setup = function () {
        var htmlElement = this.element.nativeElement;
        var host = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](htmlElement);
        var margin = { top: 5, bottom: 0, left: 0, right: 0 };
        var width = htmlElement.clientWidth - margin.left - margin.right;
        var height = width * 0.5 - margin.top - margin.bottom;
        host.html('');
        this.svg = host.append("svg")
            .attr("viewBox", "0 0 " + width + " " + height);
        //.append("g")
        //.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"]);
        this.simulation = __WEBPACK_IMPORTED_MODULE_1_d3__["forceSimulation"]()
            .force("link", __WEBPACK_IMPORTED_MODULE_1_d3__["forceLink"]().id(function (d) { return d.id; }))
            .force("charge", __WEBPACK_IMPORTED_MODULE_1_d3__["forceManyBody"]().strength(-400))
            .force("center", __WEBPACK_IMPORTED_MODULE_1_d3__["forceCenter"](width / 2, height / 2));
    };
    NetworkChartComponent.prototype.getNodes = function (edges) {
    };
    NetworkChartComponent.prototype.ticked = function () {
        this.link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
        this.node
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });
    };
    NetworkChartComponent.prototype.drawGraph = function () {
        var _this = this;
        var g = this.svg.append("g");
        this.link = g.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(this.edges)
            .enter().append("line")
            .attr("stroke", "#999")
            .attr("stroke-width", 2);
        //.attr("stroke-width", function(d) { 
        //console.log(d)
        //return Math.sqrt(d.value);
        //});
        this.node = g.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(this.nodes)
            .enter().append("circle")
            .attr("r", 5)
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["drag"]()
            .on("start", function (d) { return _this.dragstarted(d); })
            .on("drag", function (d) { return _this.dragged(d); })
            .on("end", function (d) { return _this.dragended(d); }));
        this.node.append("title")
            .text(function (d) { return d.id; });
        this.simulation
            .nodes(this.nodes)
            .on("tick", function () { return _this.ticked(); });
        this.simulation.force("link")
            .links(this.edges);
        function zoom_actions() {
            g.attr("transform", __WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform);
        }
        var zoom_handler = __WEBPACK_IMPORTED_MODULE_1_d3__["zoom"]()
            .on("zoom", function () { return g.attr("transform", __WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform); });
        zoom_handler(this.svg);
    };
    NetworkChartComponent.prototype.dragged = function (d) {
        d.fx = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].x;
        d.fy = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].y;
    };
    NetworkChartComponent.prototype.dragended = function (d) {
        if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active)
            this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    };
    NetworkChartComponent.prototype.dragstarted = function (d) {
        if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active)
            this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };
    return NetworkChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('network'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], NetworkChartComponent.prototype, "element", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NetworkChartComponent.prototype, "edges", void 0);
NetworkChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-network-chart',
        template: __webpack_require__("../../../../../src/app/network-chart/network-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/network-chart/network-chart.component.css")],
    }),
    __metadata("design:paramtypes", [])
], NetworkChartComponent);

var _a;
//# sourceMappingURL=network-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/network/network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/network/network.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button class=\"btn btn-outline-primary\" (click)=\"getNodes()\">Fetch Nodes</button>-->\n<button class=\"btn btn-outline-success\" (click)=\"getEdges()\">Fetch Data</button>\n<button class=\"btn btn-outline-danger\" (click)=buildNetwork()>Build Network</button>\n<!--<app-network-chart *ngIf=\"networkData\" [graph]=\"networkData\"></app-network-chart>-->\n\n<app-network-chart *ngIf=\"edges\" [edges]=\"edges\"></app-network-chart>\n\n"

/***/ }),

/***/ "../../../../../src/app/network/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_service__ = __webpack_require__("../../../../../src/app/network/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_search_query_model__ = __webpack_require__("../../../../../src/app/models/search-query.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_chart_network_chart_component__ = __webpack_require__("../../../../../src/app/network-chart/network-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkComponent = (function () {
    function NetworkComponent(dataService, userinfo) {
        this.dataService = dataService;
        this.userinfo = userinfo;
    }
    NetworkComponent.prototype.ngOnInit = function () {
        //this.getNetworkData(this.userinfo.getSearchId())
    };
    NetworkComponent.prototype.getNodes = function () {
        var _this = this;
        this.dataService.getNodes(this.userinfo.getSearchId()).subscribe(function (data) {
            _this.checkins = data;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    NetworkComponent.prototype.getEdges = function () {
        var _this = this;
        this.dataService.getEdges(this.userinfo.getSearchId()).subscribe(function (data) {
            _this.edges = data.edges;
            //console.log(data)
            console.log(data.edges);
        }, function (error) {
            console.error(error);
        });
    };
    NetworkComponent.prototype.buildNetwork = function () {
        this.networkChartComponent.ngAfterViewInit();
    };
    return NetworkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__network_chart_network_chart_component__["a" /* NetworkChartComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__network_chart_network_chart_component__["a" /* NetworkChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__network_chart_network_chart_component__["a" /* NetworkChartComponent */]) === "function" && _a || Object)
], NetworkComponent.prototype, "networkChartComponent", void 0);
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-network',
        template: __webpack_require__("../../../../../src/app/network/network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/network/network.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_search_query_model__["a" /* SearchQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_search_query_model__["a" /* SearchQuery */]) === "function" && _c || Object])
], NetworkComponent);

var _a, _b, _c;
//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ "../../../../../src/app/network/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Connection } from '../models/connections';
var NetworkService = (function () {
    function NetworkService(http) {
        this.http = http;
    }
    /*getTestData(id: string): Observable<any> {
      return this.http
          .get('assets/gowalla/data.json', {})
          .map( res => res.json())
      }*/
    NetworkService.prototype.getNodes = function (id) {
        console.log('requesting nodes on user: ' + id);
        return this.http.get("http://localhost:3001/my-dream-app/home/network/nodes/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    NetworkService.prototype.getEdges = function (id) {
        console.log('requesting edges on user: ' + id);
        return this.http.get("http://localhost:3001/my-dream-app/home/network/edges/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NetworkService);

var _a;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/app/searchbar/searchbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<p style=\"padding:90px\"></p>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3\"></div>\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<img src=\"assets/gowalla/social-network.svg\" width=\"45%\" height=\"50%\" alt=\"\" class=\"mx-auto d-block\">\t\n\t\t\t<p style=\"padding:5px\"></p>\n\t\t    <form class=\"form-inline my-2 my-lg-0 justify-content-center\">\n\t\t\t\t<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" #searchInput>\n\t\t\t    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"searchinfo.setSearchId(searchInput.value)\" routerLink='/home'>Submit</button>\n\t\t    </form>\t\t\t    \t\n\t\t</div>\n\t<div class=\"col-xs-12 col-sm-3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__ = __webpack_require__("../../../../../src/app/models/search-query.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchbarComponent = (function () {
    function SearchbarComponent(searchinfo) {
        this.searchinfo = searchinfo;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    return SearchbarComponent;
}());
SearchbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-searchbar',
        template: __webpack_require__("../../../../../src/app/searchbar/searchbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchbar/searchbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_search_query_model__["a" /* SearchQuery */]) === "function" && _a || Object])
], SearchbarComponent);

var _a;
//# sourceMappingURL=searchbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchcloud/searchcloud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchcloud/searchcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<input id=\"filter\" type=\"text\" (keyup)=\"generateSkillCloud(0)\" placeholder=\"Type a skill...\" />\n<div id=\"cloud\" #flagcloud></div>"

/***/ }),

/***/ "../../../../../src/app/searchcloud/searchcloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skillsData__ = __webpack_require__("../../../../../src/app/searchcloud/skillsData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_v4_cloud__ = __webpack_require__("../../../../d3-v4-cloud/build/d3-cloud.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_v4_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3_v4_cloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchcloudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchcloudComponent = (function () {
    function SearchcloudComponent() {
    }
    SearchcloudComponent.prototype.ngOnInit = function () {
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.htmlElement);
        this.margin = { top: 5, bottom: 0, left: 0, right: 0 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
        this.minyears = __WEBPACK_IMPORTED_MODULE_4_lodash__["min"](__WEBPACK_IMPORTED_MODULE_4_lodash__["map"](__WEBPACK_IMPORTED_MODULE_1__skillsData__["a" /* skillsData */], 'years'));
        this.maxyears = __WEBPACK_IMPORTED_MODULE_4_lodash__["max"](__WEBPACK_IMPORTED_MODULE_4_lodash__["map"](__WEBPACK_IMPORTED_MODULE_1__skillsData__["a" /* skillsData */], 'years'));
        this.minfont = 18;
        this.maxfont = 35;
        this.fill = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_2_d3__["schemeCategory20"]);
        this.MAX_TRIES = (this.width > 400) ? 6 : 3;
        this.generateSkillCloud(0);
    };
    SearchcloudComponent.prototype.ngOnChanges = function () { };
    SearchcloudComponent.prototype.generateSkillCloud = function (retryCycle) {
        var _this = this;
        // let textfilter = document.getElementById('filter');
        var textfilter = document.getElementById('filter').value;
        var filterSkillsvar = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_1__skillsData__["a" /* skillsData */], function (skill) { return !textfilter || skill.name.toLowerCase().indexOf(textfilter.toLowerCase()) >= 0; });
        // let skillsToDraw = this.transformToCloudLayoutObjects(filterSkillsvar, retryCycle);
        var skillsToDraw = __WEBPACK_IMPORTED_MODULE_4_lodash__["map"](filterSkillsvar, function (skill, retryCycle) {
            var retval = {
                text: skill.name.toLowerCase() + ':' + skill.years + 'y',
                size: _this.toFontSize(skill.years, skill.relevancy, retryCycle)
            };
            return retval;
        });
        var layout;
        layout = __WEBPACK_IMPORTED_MODULE_3_d3_v4_cloud__["cloud"]()
            .size([this.width, this.height])
            .words(skillsToDraw)
            .rotate(function () { return (~~(Math.random() * 6) - 2.5) * 30; })
            .font("Impact")
            .fontSize(function (d) { return d.size; })
            .on("end", function (fittedSkills) {
            // check if all words fit and are included
            if (fittedSkills.length == skillsToDraw.length) {
                _this.drawSkillCloud(fittedSkills); // finished
            }
            else if (!retryCycle || retryCycle < _this.MAX_TRIES) {
                // words are missing due to the random placement and limited room space
                console.debug('retrying');
                // try again and start counting retries
                _this.generateSkillCloud((retryCycle || 1) + 1);
            }
            else {
                // retries maxed and failed to fit all the words
                console.debug('gave up :(');
                // just draw what we have
                _this.drawSkillCloud(fittedSkills);
            }
        })
            .start();
    };
    /**
     * 1. Determine font size based on years of experience relative to the skills with the least and most years of experience.
     * 2. Further increase / decrease font size based on relevancy (linux 20y is could less relevant than java 3y, so relevancy
     *    .2 vs 1.5 could work for example).
     */
    SearchcloudComponent.prototype.toFontSize = function (years, relevancy, retryCycle) {
        // translate years scale to font size scale and apply relevancy factor
        var linearSize = (((years - this.minyears) / (this.maxyears - this.minyears)) * (this.maxfont - this.minfont) * relevancy) + this.minfont;
        // make the difference between small sizes and bigger sizes more pronounced for effect
        var polarizedSize = Math.pow(linearSize / 8, 3);
        // reduce the size as the retry cycles ramp up (due to too many words in too small space)
        var reduceSize = polarizedSize; //* ((this.MAX_TRIES - retryCycle) / this.MAX_TRIES);
        return ~~reduceSize;
    };
    SearchcloudComponent.prototype.drawSkillCloud = function (words) {
        var _this = this;
        //d3.select("#cloud svg").remove();
        this.host.html('');
        this.svg = this.host.append("svg")
            .attr("viewBox", "0 0 " + this.width + " " + this.height);
        var con = this.svg.append("g");
        var zoom_handler = __WEBPACK_IMPORTED_MODULE_2_d3__["zoom"]().on("zoom", zoom_actions);
        zoom_handler(this.svg);
        /*har flyttet funktionen ind igen, da jeg fik fejl*/
        function zoom_actions() {
            con.attr("transform", __WEBPACK_IMPORTED_MODULE_2_d3__["event"].transform);
        }
        con
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + ~~(this.width / 2) + "," + ~~(this.height / 2) + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size + "px"; })
            .style("-webkit-touch-callout", "none")
            .style("-webkit-user-select", "none")
            .style("-khtml-user-select", "none")
            .style("-moz-user-select", "none")
            .style("-ms-user-select", "none")
            .style("user-select", "none")
            .style("cursor", "default")
            .style("font-family", "Impact")
            .style("fill", function (d, i) { return _this.fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
            .text(function (d) { return d.text; });
        // set the viewbox to content bounding box (zooming in on the content, effectively trimming whitespace)
        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        svg.setAttribute("viewBox", viewBox);
    };
    return SearchcloudComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('flagcloud'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], SearchcloudComponent.prototype, "element", void 0);
SearchcloudComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-searchcloud',
        template: __webpack_require__("../../../../../src/app/searchcloud/searchcloud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchcloud/searchcloud.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchcloudComponent);

var _a;
//# sourceMappingURL=searchcloud.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchcloud/skillsData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skillsData; });
var skillsData = [
    { "name": "Java", "years": 11, "relevancy": 1.3 },
    { "name": "JavaScript", "years": 14, "relevancy": 1 },
    { "name": "Nightwatch", "years": 3, "relevancy": 1 },
    { "name": "PhantomJs", "years": 3, "relevancy": .7 },
    { "name": "jasmine", "years": 2, "relevancy": 1.1 },
    { "name": "qunit", "years": 1, "relevancy": .8 },
    { "name": "HTML", "years": 15, "relevancy": .7 },
    { "name": "PHP", "years": 2, "relevancy": .5 },
    { "name": "CSS", "years": 14, "relevancy": .7 },
    { "name": "Flash", "years": 9, "relevancy": .2 },
    { "name": "Actionscript", "years": 9, "relevancy": .3 },
    { "name": "Flex", "years": 1, "relevancy": .2 },
    { "name": "Delphi", "years": 3, "relevancy": .3 },
    { "name": "Apache", "years": 3, "relevancy": .75 },
    { "name": "IBM WebSphere", "years": 3, "relevancy": .75 },
    { "name": "Tomcat", "years": 2, "relevancy": .75 },
    { "name": "Oracle OC4J", "years": 1, "relevancy": .5 },
    { "name": "Jetty", "years": 2, "relevancy": .75 },
    { "name": "JUnit", "years": 8, "relevancy": .8 },
    { "name": "Struts", "years": 2, "relevancy": .3 },
    { "name": "Spring", "years": 7, "relevancy": 1.3 },
    { "name": "J2EE", "years": 7, "relevancy": 1 },
    { "name": "JPA", "years": 4, "relevancy": .8 },
    { "name": "Hibernate", "years": 4, "relevancy": 1 },
    { "name": "EclipseLink", "years": 2, "relevancy": 1 },
    { "name": "JMock/EasyMock", "years": 5, "relevancy": .8 },
    { "name": "JSF", "years": 6, "relevancy": .9 },
    { "name": "Facelets", "years": 6, "relevancy": .5 },
    { "name": "Richfaces", "years": 6, "relevancy": .5 },
    { "name": "Flying Saucer", "years": 1, "relevancy": .5 },
    { "name": "JAXB", "years": 5, "relevancy": .8 },
    { "name": "JAXWS", "years": 2, "relevancy": 5 },
    { "name": "SOAP", "years": 2, "relevancy": 5 },
    { "name": "Apache commons", "years": 6, "relevancy": .75 },
    { "name": "Google Guava", "years": 4, "relevancy": .75 },
    { "name": "Jackson", "years": 1, "relevancy": .6 },
    { "name": "Jersey", "years": 1, "relevancy": .6 },
    { "name": "KnockoutJs", "years": 3, "relevancy": .8 },
    { "name": "Mustache", "years": 1, "relevancy": .6 },
    { "name": "HandlebarsJs", "years": 2, "relevancy": .6 },
    { "name": "Sammy", "years": 3, "relevancy": .7 },
    { "name": "RequireJs", "years": 3, "relevancy": 1 },
    { "name": "ANT", "years": 9, "relevancy": .8 },
    { "name": "CVS", "years": 2, "relevancy": .3 },
    { "name": "Subversion", "years": 8, "relevancy": .5 },
    { "name": "SVN", "years": 8, "relevancy": .5 },
    { "name": "GIT", "years": 4, "relevancy": .8 },
    { "name": "Maven", "years": 5, "relevancy": .5 },
    { "name": "IBM ClearCase", "years": 2, "relevancy": .3 },
    { "name": "JSP", "years": 4, "relevancy": .3 },
    { "name": "Servlets", "years": 5, "relevancy": .5 },
    { "name": "XML", "years": 13, "relevancy": .5 },
    { "name": "DTD", "years": 3, "relevancy": .5 },
    { "name": "XML SAX", "years": 3, "relevancy": .4 },
    { "name": "XML DOM", "years": 11, "relevancy": .4 },
    { "name": "xpath", "years": 4, "relevancy": .7 },
    { "name": "Cruisecontrol", "years": 3, "relevancy": .3 },
    { "name": "RegEx", "years": 6, "relevancy": .5 },
    { "name": "UML", "years": 5, "relevancy": .7 },
    { "name": "Agile", "years": 7, "relevancy": .8 },
    { "name": "Scrum", "years": 6, "relevancy": 1 },
    { "name": "Kanban", "years": 1, "relevancy": .8 },
    { "name": "MySQL", "years": 8, "relevancy": .8 },
    { "name": "Oracle", "years": 2, "relevancy": .7 },
    { "name": "DB2/AS400", "years": 2, "relevancy": .7 },
    { "name": "Linux", "years": 3, "relevancy": .2 },
    { "name": "Windows", "years": 21, "relevancy": .2 },
    { "name": "Android", "years": 2, "relevancy": .5 },
    { "name": "WSAD5", "years": 2, "relevancy": .3 },
    { "name": "RAD6", "years": 2, "relevancy": .3 },
    { "name": "Eclipse IDE", "years": 8, "relevancy": .5 },
    { "name": "Docker", "years": 1, "relevancy": 1 },
    { "name": "ActiveMq", "years": 3, "relevancy": .8 },
    { "name": "RabbitMq", "years": 1, "relevancy": .8 },
    { "name": "IntelliJ", "years": 2, "relevancy": .5 },
    { "name": "WebStorm", "years": 2, "relevancy": .5 },
    { "name": "Grunt", "years": 3, "relevancy": 2 },
    { "name": "gulp", "years": 2, "relevancy": 2 },
    { "name": "WebPack", "years": 1, "relevancy": 3 },
    { "name": "bootstrap", "years": 1, "relevancy": 1.5 },
    { "name": "angularjs", "years": 4, "relevancy": 2 },
    { "name": "jquery", "years": 10, "relevancy": 1 },
    { "name": "lodash", "years": 3, "relevancy": .9 },
    { "name": "underscore", "years": 3, "relevancy": .8 },
    { "name": "sammy", "years": 4, "relevancy": 1 },
    { "name": "knockoutjs", "years": 4, "relevancy": .8 },
    { "name": "requirejs", "years": 4, "relevancy": 1.2 },
    { "name": "commonjs", "years": 1, "relevancy": 1.2 },
    { "name": "jms", "years": 8, "relevancy": .7 },
    { "name": "rest", "years": 6, "relevancy": .6 },
    { "name": "nodejs", "years": 2, "relevancy": 1 },
    { "name": "npm", "years": 3, "relevancy": .8 },
    { "name": "bower", "years": 3, "relevancy": .5 },
    { "name": "cloud9", "years": 4, "relevancy": .5 },
    { "name": "Amazon AWS", "years": 2, "relevancy": .7 },
    { "name": "AWS Route53", "years": 1, "relevancy": .75 },
    { "name": "AWS CloudFront", "years": 1, "relevancy": .75 },
    { "name": "Fitnesse", "years": 1, "relevancy": .75 },
    { "name": "AWS EC2", "years": 2, "relevancy": .75 },
    { "name": "AWS Lambda", "years": 1, "relevancy": .75 },
    { "name": "AWS S3", "years": 2, "relevancy": .75 },
    { "name": "C#", "years": 1, "relevancy": .3 },
    { "name": "Alfresco", "years": 1, "relevancy": .3 }
];
//# sourceMappingURL=skillsData.js.map

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item justify-content-between\">\n    Dacilisis in\n    <span class=\"badge badge-default badge-pill\">22</span>\n  </li>\n  <li class=\"list-group-item justify-content-between\">\n    Cras justo odio\n    <span class=\"badge badge-default badge-pill\">14</span>\n  </li>\n  <li class=\"list-group-item justify-content-between\">\n    Custo odio\n    <span class=\"badge badge-default badge-pill\">11</span>\n  </li>  \n  <li class=\"list-group-item justify-content-between\">\n    Dapibus ac facilisis in\n    <span class=\"badge badge-default badge-pill\">8</span>\n  </li>\n  <li class=\"list-group-item justify-content-between\">\n    Morbi leo risus\n    <span class=\"badge badge-default badge-pill\">5</span>\n  </li>  \n  <li class=\"list-group-item justify-content-between\">\n    Dapibus ac facilisis in\n    <span class=\"badge badge-default badge-pill\">2</span>\n  </li>\n  <li class=\"list-group-item justify-content-between\">\n    Morbi leo risus\n    <span class=\"badge badge-default badge-pill\">1</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-stats',
        template: __webpack_require__("../../../../../src/app/stats/stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stats/stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/tabview/tabview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabview/tabview.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs nav-fill\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home/network\">Network</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home/flags\">Language</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home/tree\">Hierarchy</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/home/gant\">Activity</a>\n  </li>\n</ul>\n<p style=\"padding:5px;\"></p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/tabview/tabview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabviewComponent = (function () {
    function TabviewComponent() {
    }
    TabviewComponent.prototype.ngOnInit = function () {
    };
    return TabviewComponent;
}());
TabviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-tabview',
        template: __webpack_require__("../../../../../src/app/tabview/tabview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tabview/tabview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TabviewComponent);

//# sourceMappingURL=tabview.component.js.map

/***/ }),

/***/ "../../../../../src/app/timeline/timeData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasks; });
var tasks = [
    { "startDate": new Date("Sun Dec 09 01:36:45 EST 2012"), "endDate": new Date("Sun Dec 09 02:36:45 EST 2012"), "taskName": "E Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 04:56:32 EST 2012"), "endDate": new Date("Sun Dec 09 06:35:47 EST 2012"), "taskName": "A Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 06:29:53 EST 2012"), "endDate": new Date("Sun Dec 09 06:34:04 EST 2012"), "taskName": "D Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 05:35:21 EST 2012"), "endDate": new Date("Sun Dec 09 06:21:22 EST 2012"), "taskName": "P Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 05:00:06 EST 2012"), "endDate": new Date("Sun Dec 09 05:05:07 EST 2012"), "taskName": "D Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 03:46:59 EST 2012"), "endDate": new Date("Sun Dec 09 04:54:19 EST 2012"), "taskName": "P Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 04:02:45 EST 2012"), "endDate": new Date("Sun Dec 09 04:48:56 EST 2012"), "taskName": "N Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 03:27:35 EST 2012"), "endDate": new Date("Sun Dec 09 03:58:43 EST 2012"), "taskName": "E Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 01:40:11 EST 2012"), "endDate": new Date("Sun Dec 09 03:26:35 EST 2012"), "taskName": "A Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 03:00:03 EST 2012"), "endDate": new Date("Sun Dec 09 03:09:51 EST 2012"), "taskName": "D Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 01:21:00 EST 2012"), "endDate": new Date("Sun Dec 09 02:51:42 EST 2012"), "taskName": "P Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 01:08:42 EST 2012"), "endDate": new Date("Sun Dec 09 01:33:42 EST 2012"), "taskName": "N Job", "status": "FAILED" },
    { "startDate": new Date("Sun Dec 09 00:27:15 EST 2012"), "endDate": new Date("Sun Dec 09 00:54:56 EST 2012"), "taskName": "E Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 00:29:48 EST 2012"), "endDate": new Date("Sun Dec 09 00:44:50 EST 2012"), "taskName": "D Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 07:39:21 EST 2012"), "endDate": new Date("Sun Dec 09 07:43:22 EST 2012"), "taskName": "P Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 07:00:06 EST 2012"), "endDate": new Date("Sun Dec 09 07:05:07 EST 2012"), "taskName": "D Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 08:46:59 EST 2012"), "endDate": new Date("Sun Dec 09 09:54:19 EST 2012"), "taskName": "P Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 09:02:45 EST 2012"), "endDate": new Date("Sun Dec 09 09:48:56 EST 2012"), "taskName": "N Job", "status": "RUNNING" },
    { "startDate": new Date("Sun Dec 09 08:27:35 EST 2012"), "endDate": new Date("Sun Dec 09 08:58:43 EST 2012"), "taskName": "E Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 08:40:11 EST 2012"), "endDate": new Date("Sun Dec 09 08:46:35 EST 2012"), "taskName": "A Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 08:00:03 EST 2012"), "endDate": new Date("Sun Dec 09 08:09:51 EST 2012"), "taskName": "D Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 10:21:00 EST 2012"), "endDate": new Date("Sun Dec 09 10:51:42 EST 2012"), "taskName": "P Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sun Dec 09 11:08:42 EST 2012"), "endDate": new Date("Sun Dec 09 11:33:42 EST 2012"), "taskName": "N Job", "status": "FAILED" },
    { "startDate": new Date("Sun Dec 09 12:27:15 EST 2012"), "endDate": new Date("Sun Dec 09 12:54:56 EST 2012"), "taskName": "E Job", "status": "SUCCEEDED" },
    { "startDate": new Date("Sat Dec 08 23:12:24 EST 2012"), "endDate": new Date("Sun Dec 09 00:26:13 EST 2012"), "taskName": "A Job", "status": "KILLED" }
];
//# sourceMappingURL=timeData.js.map

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeData__ = __webpack_require__("../../../../../src/app/timeline/timeData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = (function () {
    function TimelineComponent() {
        this.taskStatus = { "SUCCEEDED": "bar", "FAILED": "bar-failed", "RUNNING": "bar-running", "KILLED": "bar-killed" };
        this.taskNames = ["D Job", "P Job", "E Job", "A Job", "N Job"];
        __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].sort(function (a, b) { return a.endDate - b.endDate; });
        this.maxDate = __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */][__WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].length - 1].endDate;
        __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].sort(function (a, b) { return a.startDate - b.startDate; });
        this.minDate = __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */][0].startDate;
        this.margin = { top: 20, right: 40, bottom: 20, left: 80 };
        this.timeDomainStart = __WEBPACK_IMPORTED_MODULE_2_d3__["timeDay"].offset(new Date(), -3);
        this.timeDomainEnd = __WEBPACK_IMPORTED_MODULE_2_d3__["timeHour"].offset(new Date(), +3);
        this.timeDomainMode = "fit"; // fixed (broken) or fit
        this.height = 500;
        this.width = 960;
        this.tickFormat = "%H:%M";
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTimeDomain();
        this.initAxis();
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"]("app-timeline")
            .append("svg")
            .attr("class", "chart")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("class", "gantt-chart")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
        svg.selectAll(".chart")
            .data(__WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */], function (d) { return d.startDate + d.taskName + d.endDate; })
            .enter()
            .append("rect")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("class", function (d) {
            if (_this.taskStatus[d.status] == null) {
                return "bar";
            }
            return _this.taskStatus[d.status];
        })
            .attr("y", 0)
            .attr("transform", function (d) { return "translate(" + _this.x(d.startDate) + "," + _this.y(d.taskName) + ")"; })
            .attr("height", function (d) { return 70; })
            .attr("width", function (d) { return (_this.x(d.endDate) - _this.x(d.startDate)); });
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + (this.height - this.margin.top - this.margin.bottom) + ")")
            .transition()
            .call(this.xAxis);
        svg.append("g").attr("class", "y axis").transition().call(this.yAxis);
    };
    TimelineComponent.prototype.initAxis = function () {
        this.x = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]().domain([this.timeDomainStart, this.timeDomainEnd]).range([0, this.width]).clamp(true);
        this.y = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleBand"]().domain(this.taskNames).rangeRound([0, this.height - this.margin.top - this.margin.bottom], .1);
        this.xAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"]().scale(this.x).tickFormat(__WEBPACK_IMPORTED_MODULE_2_d3__["timeFormat"](this.tickFormat)).tickSize(8).tickPadding(8);
        this.yAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"]().scale(this.y).tickSize(0);
    };
    TimelineComponent.prototype.initTimeDomain = function () {
        if (this.timeDomainMode === "fit") {
            if (__WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */] === undefined || __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].length < 1) {
                this.timeDomainStart = __WEBPACK_IMPORTED_MODULE_2_d3__["time"].day.offset(new Date(), -3);
                this.timeDomainEnd = __WEBPACK_IMPORTED_MODULE_2_d3__["time"].hour.offset(new Date(), +3);
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].sort(function (a, b) {
                return a.endDate - b.endDate;
            });
            this.timeDomainEnd = __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */][__WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].length - 1].endDate;
            __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */].sort(function (a, b) {
                return a.startDate - b.startDate;
            });
            this.timeDomainStart = __WEBPACK_IMPORTED_MODULE_1__timeData__["a" /* tasks */][0].startDate;
        }
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-timeline',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timeline/timeline.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node {\n  cursor: pointer;\n}\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.node text {\n  font: 10px sans-serif;\n}\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tree\" #iptree></div>"

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treeData__ = __webpack_require__("../../../../../src/app/tree/treeData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeComponent = (function () {
    function TreeComponent() {
    }
    // ngOnInit() { }
    TreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.htmlElement);
        this.margin = { top: 5, bottom: 0, left: 10, right: 0 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
        //let margin = {top: 20, right: 120, bottom: 20, left: 120};
        //let width = 960 - margin.right - margin.left;
        //let height = 800 - margin.top - margin.bottom;
        this.host.html('');
        this.svg = this.host.append("svg")
            .attr("viewBox", "-100 0 " + this.width + " " + this.height);
        var con = this.svg.append("g");
        var zoom_handler = __WEBPACK_IMPORTED_MODULE_2_d3__["zoom"]().on("zoom", zoom_actions);
        zoom_handler(con);
        /*har flyttet funktionen ind igen, da jeg fik fejl*/
        function zoom_actions() {
            con.attr("transform", __WEBPACK_IMPORTED_MODULE_2_d3__["event"].transform);
        }
        con
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom) //;
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        this.i = 0;
        this.duration = 300;
        this.r = 5;
        this.root = null;
        this.treemap = __WEBPACK_IMPORTED_MODULE_2_d3__["tree"]().size([this.height, this.width]);
        this.root = __WEBPACK_IMPORTED_MODULE_2_d3__["hierarchy"](__WEBPACK_IMPORTED_MODULE_1__treeData__["a" /* treeData */], function (d) { return d.children; });
        this.root.x0 = this.height / 2;
        this.root.y0 = 0;
        this.root.children.forEach(function (d) { return _this.collapse(d); });
        this.update(this.root);
        // d3.select(self.frameElement).style("height", "800px");
    };
    TreeComponent.prototype.collapse = function (d) {
        var _this = this;
        if (d.children) {
            d._children = d.children;
            d._children.forEach(function (d) { return _this.collapse(d); });
            d.children = null;
        }
    };
    TreeComponent.prototype.update = function (source) {
        var _this = this;
        var treeData = this.treemap(this.root);
        // Compute the new tree layout.
        var nodes = treeData.descendants();
        var links = treeData.descendants().slice(1);
        // Normalize for fixed-depth.
        nodes.forEach(function (d) { d.y = d.depth * 180; });
        // Update the nodes…
        var node = this.svg.selectAll('g.node')
            .data(nodes, function (d) { return d.id || (d.id = ++_this.i); });
        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .on('click', function (d) { return _this.click(d); });
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', 1e-6)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
        nodeEnter.append("text")
            .attr("dy", ".35em")
            .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
            .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
            .text(function (d) { return d.data.name; })
            .style("fill-opacity", 0.5);
        // Transition nodes to their new position.
        var nodeUpdate = nodeEnter.merge(node);
        nodeUpdate.transition()
            .duration(this.duration)
            .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
        nodeUpdate.select('circle')
            .attr('r', this.r)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
        /*nodeUpdate.select("text")
                      .style("fill-opacity", 0.5);*/
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
            .remove();
        nodeExit.select('circle')
            .attr('r', 1e-6);
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);
        // Update the links
        var link = this.svg.selectAll('path.link')
            .data(links, function (d) { return d.id; });
        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', 'g')
            .attr("class", "link")
            .attr('d', function (d) {
            var o = { x: source.x0, y: source.y0 };
            return _this.diagonal(o, o);
        });
        // Transition links to their new position.
        var linkUpdate = linkEnter.merge(link);
        linkUpdate.transition()
            .duration(this.duration)
            .attr("d", function (d) { return _this.diagonal(d, d.parent); });
        // Transition exiting nodes to the parent's new position.
        var linkExit = link.exit().transition()
            .duration(this.duration)
            .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal(o, o);
        })
            .remove();
        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    TreeComponent.prototype.diagonal = function (s, d) {
        var path = "M " + s.y + " " + s.x + "\n                C " + (s.y + d.y) / 2 + " " + s.x + ",\n                " + (s.y + d.y) / 2 + " " + d.x + ",\n                " + d.y + " " + d.x;
        return path;
    };
    TreeComponent.prototype.click = function (d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        }
        else {
            d.children = d._children;
            d._children = null;
        }
        this.update(d);
    };
    return TreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('iptree'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], TreeComponent.prototype, "element", void 0);
TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-tree',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/tree/tree.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tree/tree.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TreeComponent);

var _a;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree/treeData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return treeData; });
var treeData = 
/*  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          { "name": "Son of A", "parent": "Level 2: A" },
          { "name": "Daughter of A", "parent": "Level 2: A" }
        ]
      },
      { "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  };*/
//  treeData = [
{
    "name": "Top Level",
    "parent": "null",
    "children": [
        {
            "name": "Level 2: A",
            "parent": "Top Level",
            "children": [
                {
                    "name": "Son of A",
                    "parent": "Level 2: A"
                },
                {
                    "name": "Daughter of A",
                    "parent": "Level 2: A",
                    "children": [
                        {
                            "name": "Son of Daughter of A",
                            "parent": "Level 2: A"
                        },
                        {
                            "name": "Son of Daughter of A",
                            "parent": "Level 2: A"
                        },
                        {
                            "name": "Son of Daughter of A",
                            "parent": "Level 2: A"
                        },
                        {
                            "name": "Son of Daughter of A",
                            "parent": "Level 2: A"
                        },
                        {
                            "name": "Daughter^2 of A",
                            "parent": "Level 2: A"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Level 2: B",
            "parent": "Top Level"
        }
    ]
};
//]; 
//# sourceMappingURL=treeData.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map