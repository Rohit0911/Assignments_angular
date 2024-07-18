"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TextDisplayComponent = void 0;
var core_1 = require("@angular/core");
var TextDisplayComponent = /** @class */ (function () {
    function TextDisplayComponent(sharedServices, render, el, spchar, cdr) {
        this.sharedServices = sharedServices;
        this.render = render;
        this.el = el;
        this.spchar = spchar;
        this.cdr = cdr;
        this.name = '';
        this.result = '';
        this.boldActive = false;
        this.italicActive = false;
        this.underlineActive = false;
        this.fontSize = 18;
        this.stylethis = { 'font-size': this.fontSize + "px" };
        this.isBold = false;
        this.isItaly = false;
        this.isUnderline = false;
        this.fontColor = 'red';
        this.stylecolor = { 'color': "" + this.fontColor };
    }
    TextDisplayComponent.prototype.ngOnInit = function () {
    };
    TextDisplayComponent.prototype.getValue = function (val) {
        this.displayVal = val;
    };
    TextDisplayComponent.prototype.todisplay = function () {
        this.sharedServices.setDataChange(this.name);
    };
    TextDisplayComponent.prototype.display = function () {
        this.specialChar = false;
        this.result = this.name;
        this.sharedServices.setDataChange(this.name);
    };
    TextDisplayComponent.prototype.ngOnChanges = function (changes) {
        if (changes['getCharId']) {
            console.log(changes['getCharId'].currentValue);
            var btnVal = changes['getCharId'].currentValue;
            switch (btnVal) {
                case 'clearbtn':
                    this.name = '';
                    this.display();
                    break;
                case 'whspace':
                    this.result = this.result.replace(/\s+/g, '');
                    // this.name=this.name;
                    console.log(this.name);
                    break;
                case 'reverse':
                    this.result = this.result.split('').reverse().join('');
                    // this.name=this.name;
                    // console.log(this.name);
                    break;
                case 'rmspch':
                    // this.result = this.name.replace(/[^a-zA-Z0-9]/g, '');
                    this.result = this.spchar.transform(this.result);
                    this.specialChar = !this.specialChar;
                    // console.log(this.name);
                    break;
                case 'rmstyle':
                    var element = this.el.nativeElement.querySelector('.remove-style');
                    this.render.removeAttribute(element, 'style');
                    break;
                case 'capstext':
                    this.result = this.name.toUpperCase();
                    break;
                case 'bold':
                    // if(!this.isBold){
                    //   this.stylethis['font-weight']='bold';
                    //   this.isBold=true;
                    // }else{
                    //     this.stylethis['font-weight']='normal';
                    //     this.isBold=false;
                    // }
                    this.isBold = !this.isBold;
                    this.stylethis['font-weight'] = this.isBold ? 'bold' : 'normal';
                    this.boldActive = this.isBold;
                    break;
                case 'italybtn':
                    this.isItaly = !this.isItaly;
                    this.stylethis['font-style'] = this.isItaly ? 'italic' : 'normal';
                    this.italicActive = this.isItaly;
                    break;
                case 'underline':
                    this.isUnderline = !this.isUnderline;
                    this.stylethis['text-decoration'] = this.isUnderline ? 'underline' : 'none';
                    this.underlineActive = this.isUnderline;
                    break;
                case 'incfont':
                    this.fontSize += 10;
                    this.stylethis['font-size'] = this.fontSize + "px";
                    break;
                case 'dcfont':
                    this.fontSize -= 10;
                    this.stylethis['font-size'] = this.fontSize + "px";
                    break;
                case 'color':
                    this.stylethis['color'] = this.fontColor;
                    // this.stylethis['color'] = `${btnVal}`;
                    break;
                default:
                    break;
            }
        }
        // this.result=this.name
    };
    __decorate([
        core_1.Input()
    ], TextDisplayComponent.prototype, "getCharId");
    TextDisplayComponent = __decorate([
        core_1.Component({
            selector: 'text-display',
            templateUrl: './text-display.component.html',
            styleUrls: ['./text-display.component.css']
        })
    ], TextDisplayComponent);
    return TextDisplayComponent;
}());
exports.TextDisplayComponent = TextDisplayComponent;
