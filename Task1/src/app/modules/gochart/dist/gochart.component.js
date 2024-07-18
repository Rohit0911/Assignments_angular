"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GojsComponent = void 0;
var core_1 = require("@angular/core");
var go = require("gojs");
var $ = go.GraphObject.make;
var GojsComponent = /** @class */ (function () {
    function GojsComponent() {
        this.diagram = new go.Diagram();
    }
    GojsComponent.prototype.ngOnInit = function () {
    };
    GojsComponent.prototype.ngAfterViewInit = function () {
        this.diagram = $(go.Diagram, 'gojsid');
        // Create a simple node template with modified shapes
        this.diagram.nodeTemplate = ($(go.Node, "Auto", $(go.Shape, { figure: "Rectangle" }, { strokeWidth: 0 }, new go.Binding("fill", "color"), new go.Binding("figure", "shape1"), new go.Binding("strokeWidth", "borderwidth")), $(go.TextBlock, { margin: 8 }, new go.Binding("text", "key"), new go.Binding("stroke", "textcolor"), new go.Binding("font", "fontstyle"))));
        this.diagram.linkTemplate =
            $(go.Link, $(go.Shape, { strokeWidth: 2 }, new go.Binding('stroke', 'color'), new go.Binding('strokeWidth', 'width')), $(go.Shape, { toArrow: "Standard", stroke: '' }, new go.Binding('fill', 'color'), new go.Binding('toArrow', 'arrowtype')));
        var nodeDataArray = [
            { key: 'Rubiscape', color: "#007FFF", textcolor: 'white', fontstyle: 'bold 14pt Calibri', shape1: 'Hexagon', group: 1 },
            { key: 'RubiConnect', color: "#00BF00", textcolor: 'black', fontstyle: 'bold 12pt Calibri', shape1: 'Triangle', group: 2 },
            { key: 'Rubistudio', color: "#00BF00", textcolor: 'black', fontstyle: 'bold 12pt Calibri', shape1: 'Triangle', group: 2 },
            { key: 'Rubisight', color: "#00BF00", textcolor: 'black', fontstyle: 'bold 12pt Calibri', shape1: 'Triangle', group: 2 },
            { key: 'Workflows', color: "#BEBEBE", textcolor: 'black', shape1: 'RoundedRectangle', borderwidth: 2 },
            { key: 'Workbooks', color: "#BEBEBE", textcolor: 'black', shape1: 'RoundedRectangle', borderwidth: 2 },
            { key: 'DashBoard', color: "#BEBEBE", textcolor: 'black', shape1: 'RoundedRectangle', borderwidth: 2 },
            { key: 'Models', color: "#BEBEBE", textcolor: 'black', shape1: 'Ellipse', borderwidth: 2 },
            { key: 'Reusable Code', color: "#BEBEBE", textcolor: 'black', shape1: 'Diamond', borderwidth: 2 },
        ];
        var linkDataArray = [
            { from: 'Rubiscape', to: 'RubiConnect', color: 'blue', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Rubiscape', to: 'Rubistudio', color: 'blue', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Rubiscape', to: 'Rubisight', color: 'blue', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Rubistudio', to: 'Workflows', color: 'green', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Rubistudio', to: 'Workbooks', color: 'green', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Rubisight', to: 'DashBoard', color: 'purple', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Workbooks', to: 'Models', color: 'orange', width: '5px', arrowtype: 'OpenTriangle' },
            { from: 'Workbooks', to: 'Reusable Code', color: 'black', width: '5px', arrowtype: 'OpenTriangle' },
        ];
        this.diagram.layout = $(go.TreeLayout, { angle: 90 });
        this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    };
    GojsComponent = __decorate([
        core_1.Component({
            selector: 'gochart',
            templateUrl: './gochart.component.html',
            styleUrls: ['./gochart.component.css']
        })
    ], GojsComponent);
    return GojsComponent;
}());
exports.GojsComponent = GojsComponent;
