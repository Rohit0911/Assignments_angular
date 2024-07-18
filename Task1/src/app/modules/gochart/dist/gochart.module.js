"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GochartModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var gochart_routing_module_1 = require("./gochart-routing.module");
var gochart_component_1 = require("./gochart.component");
var GochartModule = /** @class */ (function () {
    function GochartModule() {
    }
    GochartModule = __decorate([
        core_1.NgModule({
            declarations: [
                gochart_component_1.GojsComponent
            ],
            imports: [
                common_1.CommonModule,
                gochart_routing_module_1.GochartRoutingModule
            ]
        })
    ], GochartModule);
    return GochartModule;
}());
exports.GochartModule = GochartModule;
