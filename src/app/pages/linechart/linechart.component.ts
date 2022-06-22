import { Component, OnInit } from '@angular/core';
import {JsonHandlerService} from "../../services/json-handler.service";
import ApexCharts from "apexcharts";
import {ChartComponent} from "../chart/chart.component";

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent extends ChartComponent implements OnInit {

  constructor(public override JsonHandler: JsonHandlerService) {
    super(JsonHandler)
  }

  override ngOnInit(): void {
    super.ngOnInit()
    let amountYearArray = [
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ]

    for (let i = 0; i < this.typeIdArray.length; i++) {
      amountYearArray[this.typeIdArray[i].lastModified.getFullYear() - 2020][this.typeIdArray[i].lastModified.getMonth()] += 1
    }

    let options = {
      chart: {
        type: 'bar',
        width: '800px'
      },
      series: [{
        name: 'Inhalte verändert',
        data: [amountYearArray[0].reduce<number>((accumulator, current) => {
          return accumulator + current;
        }, 0),amountYearArray[1].reduce<number>((accumulator, current) => {
          return accumulator + current;
        }, 0),amountYearArray[2].reduce<number>((accumulator, current) => {
          return accumulator + current;
        }, 0)]
      }],
      xaxis: {
        categories: [2020, 2021, 2022]
      },
    }

    var wholeChart = new ApexCharts(document.querySelector("#wholeChart"), options);
    wholeChart.render();

  }




}
