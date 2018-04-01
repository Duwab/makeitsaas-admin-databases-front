import {Component, Input} from '@angular/core';

@Component({
  selector: 'entity-field',
  templateUrl: './entity-field.component.html'
})
export class EntityFieldComponent {
  @Input() field :any;
}
