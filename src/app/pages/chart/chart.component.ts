import {Component, OnInit} from '@angular/core';
import {JsonHandlerService} from "../../services/json-handler.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(public JsonHandler: JsonHandlerService) {
  }

  public typeIdArray: { type: String, id: String, lastModified: Date}[] = []
  /**
   * Sorted Arrays
   * person only contains items with type "person", metatag only "metatag", ...
   */
    person: any = []
    metatag: any = []
    organisation: any = []
    connection: any = []
    image: any = []
    content: any = []
    event: any = []
    website: any =  []

  ngOnInit(): void {
    const data = this.JsonHandler.getRawDataDict()
    // @ts-ignore
    let items = data['dataset']['items']
    for (let i = 0; i < items.length; i++) {
      const tmpItem = {
        type: items[i]['type'],
        id: items[i]['ident'],
        lastModified: new Date(items[i]['lastModified'])
      }
      this.typeIdArray.push(tmpItem)
      this.sortToType(tmpItem)
    }
  }


  /**
   * Method to put item in the right array
   * @param item to insert
   */
  sortToType(item: any) {
    switch (item['type']) {
      case "data:person":
        this.person.push(item)
        break
      case "data:metatag":
        this.metatag.push(item)
        break
      case "data:organisation":
        this.organisation.push(item)
        break
      case "data:connection":
        this.connection.push(item)
        break
      case "data:image":
        this.image.push(item)
        break
      case "data:content":
        this.content.push(item)
        break
      case "data:event":
        this.event.push(item)
        break
      case "data:website":
        this.website.push(item)
        break
    }
  }
}
