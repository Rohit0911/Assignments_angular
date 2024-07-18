"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormatterComponent = void 0;
var core_1 = require("@angular/core");
var FormatterComponent = /** @class */ (function () {
    function FormatterComponent(sharedService) {
        this.sharedService = sharedService;
        this.receieveddata = '';
        this.idButton = '';
        this.idColor = '';
        this.wordCount = 0;
        this.charCOunt = 0;
        this.message = '';
        this.updateSignal = new core_1.EventEmitter();
    }
    FormatterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.dataChange.subscribe(function (data) {
            _this.receieveddata = data;
            _this.compute();
        });
    };
    ;
    FormatterComponent.prototype.compute = function () {
        if (this.idButton == 'clearbtn') {
            this.wordCount = 0;
            this.charCOunt = 0;
        }
        else {
            this.wordCount = this.receieveddata ? this.receieveddata.split(/\s+/).filter(Boolean).length : 0;
            this.charCOunt = this.receieveddata.length;
        }
    };
    FormatterComponent.prototype.getId = function (event) {
        // console.log("1");
        // if(event.target=='favcolor'){
        //   this.idColor=event.target.value;
        //   this.updateSignal.emit(this.idColor);
        // }else{
        this.idButton = event.target.id;
        this.updateSignal.emit(this.idButton);
        // }
    };
    __decorate([
        core_1.Output()
    ], FormatterComponent.prototype, "updateSignal");
    FormatterComponent = __decorate([
        core_1.Component({
            selector: 'text-formatter',
            templateUrl: './formatter.component.html',
            styleUrls: ['./formatter.component.css']
        })
    ], FormatterComponent);
    return FormatterComponent;
}());
exports.FormatterComponent = FormatterComponent;
