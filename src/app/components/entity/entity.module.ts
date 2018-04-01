import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndModule } from 'ng2-dnd';

import { EntityComponent } from './entity.component';
import { EntityFieldComponent } from './field/entity-field.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
  ],
  declarations: [
    EntityComponent,
    EntityFieldComponent
  ],
  providers: [],
  exports: [
    EntityComponent,
    EntityFieldComponent
  ]
})
export class EntityModule {}
