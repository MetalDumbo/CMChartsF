import {AfterViewInit, Component, OnInit} from '@angular/core';
import ApexCharts from 'apexcharts'
import {ChartComponent} from "../chart/chart.component";
import {JsonHandlerService} from "../../services/json-handler.service";

@Component({
  selector: 'app-pichart',
  templateUrl: './pichart.component.html',
  styleUrls: ['./pichart.component.css']
})
export class PichartComponent extends ChartComponent implements OnInit {

  constructor(public override JsonHandler: JsonHandlerService) {
    super(JsonHandler)
  }

  override ngOnInit(): void {
    super.ngOnInit()
    let options = {
      series: [this.person.length, this.metatag.length, this.organisation.length, this.connection.length,
        this.image.length, this.content.length, this.event.length, this.website.length],
      chart: {
        width: 800,
        type: 'pie',
      },
      labels: ['Personen', 'MetaTags', 'Organisationen', 'Verbindungen', 'Bilder', 'Inhalte', 'Events', 'Websites'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }

    let chart = new ApexCharts(document.getElementById('chart'), options);

    chart.render().then(r => {
    })
  }

}
