import {Component} from '@angular/core';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent {
  listOne: Array<any> = [
    {id: 1,name: "id", type: "integer"},
    {id: 2,name: "title", type: "string"},
    {id: 3,name: "type", type: "enum"},
    {id: 4,name: "date_create", type: "datetime"}
  ];

  addField() {
    this.listOne.push({id: this.listOne.length,name: `field_${this.listOne.length}`, type: "string"});
  }

  removeField(id) {
    this.listOne = this.listOne.filter(field => field.id !== id);
  }
}
