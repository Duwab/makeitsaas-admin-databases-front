import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { EntityModule } from './components/entity/entity.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EntityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
