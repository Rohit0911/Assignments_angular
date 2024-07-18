import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'gochart',
  templateUrl: './gochart.component.html',
  styleUrls: ['./gochart.component.css']
})
export class GojsComponent implements OnInit {

  public diagram: go.Diagram;

  constructor() {
    this.diagram = new go.Diagram();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.diagram = $(go.Diagram, 'gojsid');

    // Create a simple node template with modified shapes
    this.diagram.nodeTemplate = (
      $(go.Node, "Auto",
        $(go.Shape, { figure: "Rectangle" }, { strokeWidth: 0 },
          new go.Binding("fill", "color"),
          new go.Binding("figure", "shape1"),
          new go.Binding("strokeWidth", "borderwidth")
        ),
        $(go.TextBlock, { margin: 8 },
          new go.Binding("text", "key"),
          new go.Binding("stroke", "textcolor"),
          new go.Binding("font", "fontstyle")
        )
      )
    );

    this.diagram.linkTemplate = 
      $(go.Link,
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color'),
          new go.Binding('strokeWidth', 'width')
        ),
        $(go.Shape, { toArrow: "Standard", stroke: '' },
          new go.Binding('fill', 'color'),
          new go.Binding('toArrow', 'arrowtype')
        )
      );

    const nodeDataArray = [
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

    const linkDataArray = [
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
  }
}
