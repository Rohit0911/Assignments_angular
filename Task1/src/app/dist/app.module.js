"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_module_1 = require("./modules/home/home.module");
var forms_1 = require("@angular/forms");
var userdata_module_1 = require("./modules/userdata/userdata.module");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var api_routing_module_1 = require("./modules/api/api-routing.module");
var http_1 = require("@angular/common/http");
var api_module_1 = require("./modules/api/api.module");
var highchart_module_1 = require("./modules/highchart/highchart.module");
var gochart_module_1 = require("./modules/gochart/gochart.module");
var spchar_pipe_1 = require("./pipes/spchar.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                spchar_pipe_1.SpcharPipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                home_module_1.HomeModule,
                userdata_module_1.UserdataModule,
                forms_1.ReactiveFormsModule,
                api_routing_module_1.APIRoutingModule,
                http_1.HttpClientModule,
                api_module_1.APIModule,
                highchart_module_1.HighchartModule,
                gochart_module_1.GochartModule
            ],
            providers: [ngx_cookie_service_1.CookieService, spchar_pipe_1.SpcharPipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
