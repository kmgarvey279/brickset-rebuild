import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SetListComponent } from './set-list/set-list.component';
import { EditSetComponent } from './edit-set/edit-set.component';
import { NewSetComponent } from './new-set/new-set.component';


@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    EditSetComponent,
    NewSetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
