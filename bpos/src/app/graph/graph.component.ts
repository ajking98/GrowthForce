import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private graphService: GraphService) { }
  ngOnInit() {
    /*var obj = this.graphService.getDonorByState();
    console.log(obj);*/
    Object.assign(this, {single, multi});
  }
  onSelect(event) {
    console.log(event);
  }
}
